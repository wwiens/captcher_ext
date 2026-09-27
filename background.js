// Service worker: side-panel behavior, pairing and recording authorization.
// Page resources stay subject to browser access rules; no privileged proxy.

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
// Keeps the device token out of reach of content scripts (privacy.html relies on this).
chrome.storage.local.setAccessLevel?.({ accessLevel: "TRUSTED_CONTEXTS" })?.catch(() => {});

// SingleFile's lazy-image loader (loadDeferredImages) schedules its idle/max
// timers through the extension background — page timers are throttled during
// its scroll dance — and waits for an onTimeout message back. Its local-timer
// fallback only kicks in when sendMessage *throws*, and any onMessage listener
// existing at all makes sendMessage resolve instead. So this relay is
// mandatory: without it the engine waits forever and the capture freezes.
const lazyTimers = new Map(); // "tabId:timerType" -> timeout id

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message) return;
  if (message.type === "pair-claim") {
    // Redeeming a pairing code for this browser's capture token. The origin is
    // taken from `sender`, never from the message: Chrome sets it and a page
    // cannot spoof it. claimPairing() accepts only the Captcher app's exact
    // origin, so no other page can repoint uploads at its own server — the
    // difference between a revocable device row and an exfiltration channel
    // for every future capture.
    claimPairing(message.code, sender)
      .then(sendResponse)
      .catch(error => sendResponse({ ok: false, error: error.message || String(error) }));
    return true; // async response
  }
  if (message.type === "fetchResource") {
    sendResponse({ error: "Privileged resource proxying is disabled." });
    return;
  }
  if (message.method === "singlefile.lazyTimeout.setTimeout" && sender.tab) {
    const key = `${sender.tab.id}:${message.type}`;
    clearTimeout(lazyTimers.get(key));
    lazyTimers.set(key, setTimeout(() => {
      lazyTimers.delete(key);
      chrome.tabs.sendMessage(sender.tab.id,
        { method: "singlefile.lazyTimeout.onTimeout", type: message.type })
        .catch(() => { /* tab navigated or capture finished */ });
    }, message.delay));
    sendResponse({});
  } else if (message.method === "singlefile.lazyTimeout.clearTimeout" && sender.tab) {
    const key = `${sender.tab.id}:${message.type}`;
    clearTimeout(lazyTimers.get(key));
    lazyTimers.delete(key);
    sendResponse({});
  }
});

// ---------------------------------------------------------------------------
// Pairing
//
// The page mints a one-time code (it is the only party that can prove a
// session) and hands it here; this redeems it for a durable per-device capture
// token (the extension is the only party that can safely keep one). Nobody
// copies a token, and the server address is not transported at all — it is the
// origin the offer arrived from. See PAIRING.md in the server repo.
//
// This is also the one place the extension's stored server address can be
// *changed* from outside the settings surface, which is why the origin comes
// from `sender` and the claim has to succeed before anything is written.
// ---------------------------------------------------------------------------
const CLAIM_TIMEOUT_MS = 15000;

function deviceLabel() {
  // A label the member will recognise on /account when deciding what to revoke.
  // navigator.userAgentData is unavailable in a service worker on older
  // Chrome, and the UA string is unreadable in a list, so this is a coarse
  // platform guess and nothing more. The server bounds its length; it is
  // presentation, not identity.
  const ua = navigator.userAgent || "";
  const platform =
    /Macintosh|Mac OS/.test(ua) ? "macOS" :
    /Windows/.test(ua) ? "Windows" :
    /CrOS/.test(ua) ? "ChromeOS" :
    /Linux|X11/.test(ua) ? "Linux" : "";
  const browser =
    /Edg\//.test(ua) ? "Edge" :
    /OPR\//.test(ua) ? "Opera" :
    /Brave/.test(ua) ? "Brave" : "Chrome";
  // The recorder's own version rides along. Once this is in the Web Store the
  // installed population is otherwise invisible: you cannot ask what is out
  // there, and you cannot decide whether an old build is still worth
  // supporting without knowing. It lands on /account beside the browser name,
  // where it is also the first thing to check when somebody reports a fault.
  const version = chrome.runtime.getManifest().version;
  const base = platform ? `${browser} on ${platform}` : browser;
  return `${base} · recorder ${version}`;
}

// The only origins this extension pairs with. A successful claim makes the
// sender's origin the destination of every later upload, so "any HTTPS page"
// is far too wide. Mirrors mayBeCaptcher() in the panel. Loopback is for
// development and is honoured only in unpacked installs, which have no
// update_url; a store install never pairs with or uploads to a local port.
const CAPTCHER_ORIGINS = ["https://app.captcher.app"];
const DEV_BUILD = !chrome.runtime.getManifest().update_url;
const LOOPBACK_HOSTS = ["localhost", "127.0.0.1", "[::1]"];
function isCaptcherOrigin(origin) {
  let u;
  try { u = new URL(origin); } catch { return false; }
  if (CAPTCHER_ORIGINS.includes(u.origin)) return true;
  return DEV_BUILD && /^https?:$/.test(u.protocol) && LOOPBACK_HOSTS.includes(u.hostname);
}
async function claimPairing(code, sender) {
  if (typeof code !== "string" || !code) {
    return { ok: false, error: "No pairing code was offered." };
  }
  // `sender.origin` is set for content scripts and injected scripts alike, and
  // is the page's real origin. `sender.url` is the fallback for Chrome versions
  // that omit it; both come from the browser rather than the message.
  let origin = sender && sender.origin;
  if (!origin && sender && sender.url) {
    try {
      origin = new URL(sender.url).origin;
    } catch { /* falls through to the error below */ }
  }
  // Only the top frame of a tab on a Captcher origin may pair: connect.js is
  // injected there and nowhere else, and recorder frames never send this.
  if (!sender?.tab || sender.frameId !== 0 || !origin || !isCaptcherOrigin(origin)) {
    return { ok: false, error: "Pairing is only accepted from the Captcher app." };
  }

  let response;
  try {
    response = await fetch(`${origin}/api/extension/claim`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // No cookies. The code is the whole credential, and sending the member's
      // session here would make this endpoint worth attacking for reasons that
      // have nothing to do with pairing.
      credentials: "omit",
      redirect: "error",
      body: JSON.stringify({ code, label: deviceLabel() }),
      signal: AbortSignal.timeout(CLAIM_TIMEOUT_MS)
    });
  } catch (error) {
    const timedOut = error && (error.name === "TimeoutError" || error.name === "AbortError");
    return { ok: false, error: timedOut
      ? `${origin} did not respond within ${CLAIM_TIMEOUT_MS / 1000}s.`
      : `Could not reach ${origin} (${(error && error.message) || error}).` };
  }

  let data = {};
  try {
    data = await response.json();
  } catch { /* a non-JSON body is covered by the status check below */ }
  if (!response.ok || typeof data.token !== "string" || !data.token.trim()) {
    return { ok: false, error: data.error ||
      `The server refused the pairing code (${response.status}).` };
  }

  // Written last, and only on success: a failed claim must leave a working
  // configuration alone. Storing the whole record in one set() keeps url and
  // token from ever being half-updated — every reader treats them as a pair.
  try {
    await chrome.storage.local.set({ server: { url: origin, token: data.token, email: data.email || "" } });
  } catch (error) {
    return { ok: false, error: `Could not save the connection (${error.message || error}).` };
  }
  return { ok: true, email: data.email, url: origin };
}

// ---------------------------------------------------------------------------
// Presence handshake with the Captcher app
//
// The app's library page prompts people to install this extension and needs a
// way to stop once they have. `announce.js` sets a marker attribute on the
// Captcher page; the app checks for it. See announce.js for why the
// extension has to be the one to speak.
//
// Registered dynamically, for the paired server's origin only, rather than
// declared in the manifest: a development build can pair with a local server,
// and a static content script would otherwise need a broader match than the
// one page it sets a flag on.
// ---------------------------------------------------------------------------
const ANNOUNCE_SCRIPT_ID = "captcher-announce";

// Only the origin of the stored server address is wanted. Tolerate a value
// that does not parse rather than throwing in the worker.
function announceMatchesFor(serverUrl) {
  const raw = (serverUrl || "").trim();
  if (!raw) return [];
  let parsed;
  try {
    parsed = new URL(/^https?:\/\//i.test(raw) ? raw : `http://${raw}`);
  } catch {
    return [];                       // still mid-typing
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return [];
  return [`${parsed.protocol}//${parsed.host}/*`];
}

async function syncAnnounceScript() {
  const { server } = await chrome.storage.local.get("server");
  const matches = announceMatchesFor(server && server.url);
  // Unregister unconditionally first: registerContentScripts throws on a
  // duplicate id, and an edited server address must not leave the previous
  // origin registered.
  try {
    await chrome.scripting.unregisterContentScripts({ ids: [ANNOUNCE_SCRIPT_ID] });
  } catch { /* nothing registered yet */ }
  if (!matches.length) return;
  try {
    await chrome.scripting.registerContentScripts([{
      id: ANNOUNCE_SCRIPT_ID,
      js: ["announce.js"],
      matches,
      runAt: "document_start",
      persistAcrossSessions: true
    }]);
  } catch {
    // A pattern Chrome rejects; the next change to the address retries.
  }
}

// Pairing, disconnect and re-pairing can change the stored address in quick
// succession; settle first. A worker killed inside the window loses the
// pending sync, which onStartup then repairs.
const ANNOUNCE_SYNC_DELAY_MS = 400;
let announceSyncTimer = null;

function scheduleAnnounceSync() {
  clearTimeout(announceSyncTimer);
  announceSyncTimer = setTimeout(syncAnnounceScript, ANNOUNCE_SYNC_DELAY_MS);
}

chrome.runtime.onInstalled.addListener(syncAnnounceScript);
chrome.runtime.onStartup.addListener(syncAnnounceScript);
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || !changes.server) return;
  // The token lives in the same record and changes far more often than the
  // URL, but has no bearing on where the announcer belongs.
  const before = changes.server.oldValue && changes.server.oldValue.url;
  const after = changes.server.newValue && changes.server.newValue.url;
  if (before !== after) scheduleAnnounceSync();
});

// Recording authorization lives outside the panel. A content script is only an
// inert connection request until this broker grants its tab/document a session.
// Losing the panel, worker or lease stops every already-injected recorder.
(() => {
  const PANEL_PORT = "sc-recording-panel";
  const FRAME_PORT = "sc-recording-frame";
  const SCRIPT_ID = "rc-recorder";
  const LEASE_MS = 20000;
  let owner = null;
  let registrationWork = Promise.resolve();
  const registerInOrder = (work) => {
    registrationWork = registrationWork.catch(() => {}).then(work);
    return registrationWork;
  };
  // A fresh worker has no session. A registration left by a worker that died
  // mid-recording would otherwise inject an (inert, rejected) recorder into
  // every page load until the browser restarts.
  registerInOrder(() => chrome.scripting.unregisterContentScripts({ ids: [SCRIPT_ID] })).catch(() => {});
  const post = (port, message) => {
    try { port.postMessage(message); } catch { /* receiver closed */ }
  };
  const live = (session) => owner === session && !session.stopped &&
    Date.now() < session.expiresAt;
  const stop = (session) => {
    if (!session || session.stopped) return;
    session.stopped = true;
    clearTimeout(session.deadline);
    if (owner === session) owner = null;
    for (const frame of session.frames) {
      post(frame, { type: "stop" });
      frame.disconnect();
    }
    session.frames.clear();
    registerInOrder(() => chrome.scripting.unregisterContentScripts({ ids: [SCRIPT_ID] }))
      .catch(() => {});
    post(session.port, { type: "stopped" });
  };
  const renew = (session) => {
    if (!live(session)) return stop(session);
    session.expiresAt = Date.now() + LEASE_MS;
    clearTimeout(session.deadline);
    session.deadline = setTimeout(() => stop(session), LEASE_MS);
    for (const frame of session.frames) post(frame, { type: "lease" });
  };
  async function ownsTab(session, tabId) {
    const chain = [];
    const seen = new Set();
    while (Number.isInteger(tabId) && !seen.has(tabId) && seen.size < 20) {
      if (session.tabs.has(tabId)) {
        if (!live(session)) return false;
        for (const id of chain) session.tabs.add(id);
        return true;
      }
      // An old tab can retain openerTabId for hours. Only tabs actually
      // created during this recording may extend its scope.
      if (!session.created.has(tabId)) return false;
      seen.add(tabId);
      chain.push(tabId);
      const tab = await chrome.tabs.get(tabId).catch(() => null);
      tabId = tab && tab.openerTabId;
    }
    return false;
  }
  async function start(port, message) {
    if (owner && !live(owner)) stop(owner);
    if (owner) throw new Error("A recording is already open in another panel. Finish or discard it first.");
    if (!Number.isInteger(message.tabId) || typeof message.sessionId !== "string" ||
        !message.sessionId || message.sessionId.length > 100) throw new Error("Invalid recording request.");
    const session = { port, id: message.sessionId, tabs: new Set([message.tabId]), created: new Set(),
      frames: new Set(), expiresAt: Date.now() + LEASE_MS, stopped: false };
    owner = session; // reserve before the first await
    renew(session);
    try {
      const tab = await chrome.tabs.get(message.tabId);
      if (!/^https?:/.test(tab.url || "")) throw new Error("Open a normal web page to record.");
      if (!live(session)) return;
      await registerInOrder(async () => {
        await chrome.scripting.unregisterContentScripts({ ids: [SCRIPT_ID] }).catch(() => {});
        if (!live(session)) return;
        await chrome.scripting.registerContentScripts([{
          id: SCRIPT_ID, js: ["recorder.js"], matches: ["http://*/*", "https://*/*"],
          allFrames: true, runAt: "document_start", persistAcrossSessions: false
        }]);
      });
      if (!live(session)) return;
      await chrome.scripting.executeScript({ target: { tabId: message.tabId, allFrames: true }, files: ["recorder.js"] });
    } catch (error) {
      stop(session);
      throw error;
    }
  }
  async function admit(port) {
    const session = owner;
    const sender = port.sender;
    let disconnected = false;
    port.onDisconnect.addListener(() => { disconnected = true; session?.frames.delete(port); });
    if (!session || !live(session) || !sender?.tab || !sender.documentId ||
        !await ownsTab(session, sender.tab.id) || disconnected) return port.disconnect();
    await chrome.scripting.executeScript({
      target: { tabId: sender.tab.id, documentIds: [sender.documentId] },
      files: ["sensitive.js", "shield.js"]
    });
    if (!live(session) || disconnected) return port.disconnect();
    session.frames.add(port);
    port.onMessage.addListener((message) => {
      if (message?.type === "ready" && live(session) && sender.frameId === 0) {
        post(session.port, { type: "ready", sessionId: session.id, tabId: sender.tab.id });
      }
    });
    post(port, { type: "start", sessionId: session.id });
  }
  chrome.tabs.onCreated?.addListener((tab) => {
    if (!owner || !live(owner)) return;
    owner.created.add(tab.id);
    if (owner.tabs.has(tab.openerTabId)) owner.tabs.add(tab.id);
  });
  // A closed tab cannot authorize a later descendant through a stale ID.
  chrome.tabs.onRemoved?.addListener((tabId) => {
    owner?.tabs.delete(tabId);
    owner?.created.delete(tabId);
  });
  chrome.runtime.onConnect?.addListener((port) => {
    if (port.name === FRAME_PORT) {
      admit(port).catch(() => port.disconnect());
      return;
    }
    if (port.name !== PANEL_PORT || port.sender?.tab ||
        port.sender?.url !== chrome.runtime.getURL("sidepanel/panel.html")) return;
    let closed = false;
    port.onDisconnect.addListener(() => {
      closed = true;
      if (owner?.port === port) stop(owner);
    });
    port.onMessage.addListener((message) => {
      if (closed) return;
      if (message?.type === "start") {
        start(port, message).catch((error) => post(port, { type: "error", error: error.message }));
      } else if (message?.type === "heartbeat" && owner?.port === port) {
        renew(owner);
      } else if (message?.type === "stop" && owner?.port === port) {
        stop(owner);
      }
    });
  });
})();
