// Captcher — the recorder side panel.
//
// Records a product flow as a walkthrough: captures the active tab's HTML with
// the SingleFile engine, one snapshot per step, and uploads the result to a
// Captcher server. It began as a capture bench, which is why the
// diagnostic trail below is as thorough as it is — a freeze points at its
// exact cause:
//   - every resource fetch logs start and end, with its origin — a hang leaves
//     the guilty URLs visible as "started, never finished" at the log tail
//   - the page sends a heartbeat every second — if heartbeats stop, the
//     page's main thread is pegged (CPU-bound serialization), not a fetch
//   - engine progress events (page-loaded, resource i/max, stages) relayed
//   - a 2-minute watchdog fails the capture instead of hanging the panel

const WATCHDOG_MS = 120000;
const LOG_CAP = 800;

const el = {
  capture: document.getElementById("capture"),
  download: document.getElementById("download"),
  clearLog: document.getElementById("clear-log"),
  status: document.getElementById("status"),
  statusText: document.getElementById("status-text"),
  statusElapsed: document.getElementById("status-elapsed"),
  log: document.getElementById("log"),
  send: document.getElementById("send"),
  sendStatus: document.getElementById("send-status"),
  wtTitle: document.getElementById("wt-title"),
  wtAuto: document.getElementById("wt-auto"),
  wtStart: document.getElementById("wt-start"),
  wtCaptureStep: document.getElementById("wt-capture-step"),
  wtFinish: document.getElementById("wt-finish"),
  wtDiscard: document.getElementById("wt-discard"),
  wtStatus: document.getElementById("wt-status"),
  recTitle: document.getElementById("rec-title"),
  countPages: document.getElementById("count-pages"),
  countActions: document.getElementById("count-actions"),
  thumbs: document.getElementById("thumbs"),
  sentSummary: document.getElementById("sent-summary"),
  connectAction: document.getElementById("connect-action"),
  connectStatus: document.getElementById("connect-status"),
  serverNotice: document.getElementById("server-notice"),
  connectTitle: document.getElementById("connect-title"),
  connectSteps: document.getElementById("connect-steps"),
  goSetup: document.getElementById("go-setup"),
  connectNote: document.getElementById("connect-note"),
  winOuter: document.getElementById("win-outer"),
  winInner: document.getElementById("win-inner"),
  winPresets: document.getElementById("win-presets"),
  winWidth: document.getElementById("win-width"),
  winHeight: document.getElementById("win-height"),
  winApply: document.getElementById("win-apply"),
  winFitPage: document.getElementById("win-fit-page"),
  winStatus: document.getElementById("win-status"),
  themeRadios: [...document.querySelectorAll('input[name="theme"]')]
};

// Where this panel uploads to. Held here rather than read off two input fields,
// which is what it used to be: pairing writes the connection from the service
// worker, so the DOM cannot be the source of truth without the panel racing
// itself to notice. `chrome.storage.local.server` is the record; this is the
// in-memory copy every reader uses.
let serverConfig = { url: "", token: "" };

// ---------------------------------------------------------------------------
// Surfaces + the overflow menu.
//
// Recording is home and is all the panel shows by default. Everything rare
// (single-page capture), configuration, or diagnostic (the log) lives behind
// the header's settings button, which opens the one labelled menu. Each
// secondary surface opens with a Back button — the three-icon header this
// replaced had no way back at all except re-clicking the active icon, which
// nobody discovers.
//
// Help is the header's other button and is deliberately NOT in that menu: it
// leaves the panel entirely for a full tab, and a person looking for help
// should not have to open a menu to find out whether there is any.
//
// Surfaces are a body swap rather than a <dialog>: a side panel is ~360px, so
// a modal would fill it anyway, and showModal() makes the rest of the document
// inert — which would hide the log exactly when a capture is being debugged.
// ---------------------------------------------------------------------------
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");
const logCard = document.getElementById("log-card");

function showSurface(name) {
  document.body.dataset.surface = name;
  // Land keyboard focus on the new surface rather than leaving it on the menu.
  document.querySelector(`#surface-${name} .surface-head h2`)?.focus();
}

menu.addEventListener("toggle", (event) => {
  const open = event.newState === "open";
  menuButton.setAttribute("aria-expanded", String(open));
  if (open) {
    menu.querySelector('[role^="menuitem"]:not(:disabled)')?.focus();
  } else if (menu.contains(document.activeElement)) {
    // Closing must not strand focus on an item that is now display:none.
    // Item handlers hide the menu and then focus their surface heading, and
    // this fires synchronously inside hidePopover(), so they still win.
    menuButton.focus();
  }
});

// Arrow-key roving is the only part the Popover API does not give us.
menu.addEventListener("keydown", (event) => {
  const items = [...menu.querySelectorAll('[role^="menuitem"]:not(:disabled)')];
  const at = items.indexOf(document.activeElement);
  const go = (n) => { event.preventDefault(); items[(n + items.length) % items.length].focus(); };
  if (event.key === "ArrowDown") go(at + 1);
  else if (event.key === "ArrowUp") go(at - 1);
  else if (event.key === "Home") go(0);
  else if (event.key === "End") go(items.length - 1);
});

const mi = {
  single: document.getElementById("mi-single"),
  settings: document.getElementById("mi-settings"),
  log: document.getElementById("mi-log"),
  reset: document.getElementById("mi-reset"),
  window: document.getElementById("mi-window")
};
mi.single.addEventListener("click", () => { menu.hidePopover(); showSurface("single"); });
mi.settings.addEventListener("click", () => {
  menu.hidePopover();
  showSurface("settings");
  // Opened deliberately, so re-probe rather than showing whatever the last
  // visit concluded: the reason somebody opens this is usually that something
  // changed. That includes trying again a page that already failed to pair.
  // There is no Continue button to press afterwards — connecting is what
  // closes this surface.
  autoConnected = null;
  refreshConnectState();
});
mi.window.addEventListener("click", () => {
  menu.hidePopover();
  showSurface("window");
  refreshWindowSize();
});
// ---------------------------------------------------------------------------
// Appearance.
//
// ../theme.js owns the decision and the storage; this is only the card that
// drives it. It never stamps the attribute itself — one writer, so the panel
// and the help tab cannot disagree about what "system" resolved to.
// ---------------------------------------------------------------------------
function renderAppearance(detail) {
  const choice = detail ? detail.choice : (window.scTheme ? window.scTheme.get() : "light");
  for (const radio of el.themeRadios) radio.checked = radio.value === choice;
}

for (const radio of el.themeRadios) {
  radio.addEventListener("change", () => {
    if (!radio.checked) return;
    window.scTheme.set(radio.value);
  });
}
// theme.js announces every repaint, including the first one after it has read
// storage — which is what fills the card in on open, and what keeps it right
// when the choice is changed from the help tab. renderAppearance() is also
// called once directly: panel.js may well parse after that first repaint has
// already been announced, and a card left showing the wrong radio for a moment
// is the same defect as a panel painting the wrong theme for a moment.
document.documentElement.addEventListener("sc:theme", (event) => renderAppearance(event.detail));
renderAppearance();

// Help opens the bundled guide in a tab of its own. Reused rather than
// re-opened if it is already up: pressing Help twice should bring the guide
// forward, not leave a second copy of it behind.
let helpTabId = null;
document.getElementById("help-button").addEventListener("click", async () => {
  const url = chrome.runtime.getURL("help.html");
  if (helpTabId !== null) {
    try {
      const tab = await chrome.tabs.get(helpTabId);
      if (tab && tab.url && tab.url.startsWith(url)) {
        await chrome.tabs.update(helpTabId, { active: true });
        await chrome.windows.update(tab.windowId, { focused: true });
        return;
      }
    } catch { /* closed, or navigated away — open a fresh one below */ }
    helpTabId = null;
  }
  const tab = await chrome.tabs.create({ url });
  helpTabId = tab.id;
});

// The recording surface shows this instead of a Start button it would only
// have to disable. It lands on the same surface the menu's Settings does, and
// re-probes for the same reason.
el.goSetup.addEventListener("click", () => {
  showSurface("settings");
  autoConnected = null;
  refreshConnectState();
});

document.getElementById("single-back").addEventListener("click", () => showSurface("main"));
document.getElementById("settings-back").addEventListener("click", () => showSurface("main"));
document.getElementById("window-back").addEventListener("click", () => showSurface("main"));

// ---------------------------------------------------------------------------
// Window size.
//
// A walkthrough is replayed over frozen snapshots and the screenshots that
// judge them are viewport-sized, so what the window was when a flow was
// recorded is part of the recording. This surface makes that a choice rather
// than whatever the last drag left behind. Two numbers are shown because they
// differ: the outer window, which is what Chrome lets us set, and the page
// area, which is what a capture photographs — the window minus tabs, toolbar
// and this panel. The presets name common screen sizes; "Size the page area"
// (the default) adds the chrome back on so the PAGE ends up at that size,
// which is what somebody choosing 1024×768 for a training capture means.
//
// Chrome clamps a window to its screen, so the result is re-read after every
// change and reported — a request the screen cannot honour says so, rather
// than leaving the readout claiming a size the window never reached.
// ---------------------------------------------------------------------------
const WINDOW_PRESETS = [
  { w: 1024, h: 768,  note: "XGA · 4:3" },
  { w: 1280, h: 720,  note: "HD" },
  { w: 1280, h: 800,  note: "WXGA" },
  { w: 1366, h: 768,  note: "common laptop" },
  { w: 1440, h: 900,  note: "MacBook Air" },
  { w: 1536, h: 864,  note: "scaled 1080p" },
  { w: 1920, h: 1080, note: "Full HD" },
  { w: 2560, h: 1440, note: "QHD" }
];
const WINDOW_MIN = 200;
const WINDOW_MAX = 8192;

let windowSize = null;   // { win: {id, width, height, state}, page: {width, height} }

function setWindowStatus(text, cls) {
  el.winStatus.textContent = text || "";
  el.winStatus.className = cls || "";
}

function fmtSize(width, height) {
  return `${width}\u00d7${height}`;
}

/** The window this panel is docked to and the page area of its active tab. */
async function readWindowSize() {
  const win = await chrome.windows.getCurrent({ populate: false });
  const tab = await activeTab();
  // `tab.width/height` is the content area in CSS pixels; it already excludes
  // the side panel. A tab that is still loading may report nothing, in which
  // case the page area is unknown rather than zero.
  const page = tab && tab.width && tab.height
    ? { width: tab.width, height: tab.height } : null;
  windowSize = {
    win: { id: win.id, width: win.width, height: win.height, state: win.state },
    page
  };
  return windowSize;
}

/** The readout — both numbers, and which preset (if any) is current. */
function renderWindowSize() {
  const size = windowSize;
  if (!size) {
    el.winOuter.textContent = "\u2014";
    el.winInner.textContent = "\u2014";
    return;
  }
  const stateNote = size.win.state && size.win.state !== "normal" ? ` (${size.win.state})` : "";
  el.winOuter.textContent = fmtSize(size.win.width, size.win.height) + stateNote;
  el.winInner.textContent = size.page ? fmtSize(size.page.width, size.page.height) : "unknown";
  const current = el.winFitPage.checked ? size.page : size.win;
  for (const button of el.winPresets.querySelectorAll("button")) {
    const hit = !!current && Number(button.dataset.w) === current.width &&
                Number(button.dataset.h) === current.height;
    button.setAttribute("aria-current", String(hit));
  }
  // Fill the custom fields with the current size only while nobody is
  // editing them — a live refresh mid-keystroke would eat what was typed.
  if (document.activeElement !== el.winWidth && document.activeElement !== el.winHeight &&
      current && !el.winWidth.value && !el.winHeight.value) {
    el.winWidth.value = String(current.width);
    el.winHeight.value = String(current.height);
  }
}

async function refreshWindowSize() {
  if (document.body.dataset.surface !== "window") return;
  try {
    await readWindowSize();
  } catch (error) {
    windowSize = null;
    setWindowStatus(`Cannot read the window: ${error.message}`, "error");
  }
  renderWindowSize();
}

/** Resize the docked window so that either it, or its page area, is w×h. */
async function applyWindowSize(width, height) {
  width = Math.round(Number(width)); height = Math.round(Number(height));
  if (!Number.isFinite(width) || !Number.isFinite(height) ||
      width < WINDOW_MIN || height < WINDOW_MIN || width > WINDOW_MAX || height > WINDOW_MAX) {
    setWindowStatus(`Enter a width and height between ${WINDOW_MIN} and ${WINDOW_MAX}.`, "error");
    return;
  }
  el.winApply.disabled = true;
  try {
    const before = await readWindowSize();
    const fitPage = el.winFitPage.checked && !!before.page;
    // The chrome around the page: everything the window has that the page
    // does not. Measured live rather than assumed, since it depends on the
    // platform, the bookmarks bar, and whether this panel is open.
    const padW = fitPage ? before.win.width - before.page.width : 0;
    const padH = fitPage ? before.win.height - before.page.height : 0;
    if (el.winFitPage.checked && !before.page) {
      setWindowStatus("The page area could not be measured; sizing the window instead.");
    }
    // A maximized or fullscreen window ignores a size, so it is returned to
    // normal in the same call — Chrome allows "normal" alongside dimensions.
    await chrome.windows.update(before.win.id, {
      state: "normal", width: width + padW, height: height + padH
    });
    // Chrome applies the change asynchronously on some platforms; give the
    // tab a beat to report its new content size before reading it back.
    await new Promise((resolve) => setTimeout(resolve, 150));
    const after = await readWindowSize();
    renderWindowSize();
    const got = fitPage ? after.page : after.win;
    const what = fitPage ? "Page area" : "Window";
    if (got && got.width === width && got.height === height) {
      setWindowStatus(`${what} is now ${fmtSize(width, height)}.`, "ok");
    } else if (got) {
      setWindowStatus(`${what} is ${fmtSize(got.width, got.height)}, not ${fmtSize(width, height)} ` +
                      "— the screen is too small for that size.", "error");
    } else {
      setWindowStatus(`Window is now ${fmtSize(after.win.width, after.win.height)}.`, "ok");
    }
    log(`window size: requested ${what.toLowerCase()} ${fmtSize(width, height)} → ` +
        `window ${fmtSize(after.win.width, after.win.height)}` +
        (after.page ? `, page ${fmtSize(after.page.width, after.page.height)}` : ""));
  } catch (error) {
    setWindowStatus(`Could not resize: ${error.message}`, "error");
    log(`window size: ${error.message}`, "err");
  } finally {
    el.winApply.disabled = false;
  }
}

for (const preset of WINDOW_PRESETS) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.w = String(preset.w);
  button.dataset.h = String(preset.h);
  button.setAttribute("aria-current", "false");
  const dims = document.createElement("span");
  dims.textContent = fmtSize(preset.w, preset.h);
  const note = document.createElement("small");
  note.textContent = preset.note;
  button.appendChild(dims);
  button.appendChild(note);
  button.addEventListener("click", () => {
    el.winWidth.value = String(preset.w);
    el.winHeight.value = String(preset.h);
    applyWindowSize(preset.w, preset.h);
  });
  el.winPresets.appendChild(button);
}
el.winApply.addEventListener("click", () => applyWindowSize(el.winWidth.value, el.winHeight.value));
for (const field of [el.winWidth, el.winHeight]) {
  field.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); el.winApply.click(); }
  });
}
// The checkbox flips which of the two numbers the presets describe; the
// readout's "current preset" mark and the custom fields follow it.
el.winFitPage.addEventListener("change", () => {
  el.winWidth.value = ""; el.winHeight.value = "";
  renderWindowSize();
});
// Keep the readout live while the surface is open: a drag of the window edge,
// a tab switch (a different tab can have a different zoom or a devtools
// pane), or the panel being resized all change one of the numbers. Guarded
// because onBoundsChanged arrived in Chrome 86, and the test harness's stub
// does not carry it.
chrome.windows.onBoundsChanged?.addListener(() => refreshWindowSize());
chrome.tabs.onActivated.addListener(() => refreshWindowSize());
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if (change.status === "complete" && tab.active) refreshWindowSize();
});

// Escape returns home from a secondary surface — but only once the menu itself
// has consumed it, otherwise closing the menu would also navigate.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || menu.matches(":popover-open")) return;
  if (document.body.dataset.surface !== "main") showSurface("main");
});

function setLogVisible(visible) {
  logCard.classList.toggle("hidden", !visible);
  mi.log.setAttribute("aria-checked", String(visible));
  mi.log.textContent = visible ? "Hide log" : "Show log";
}
mi.log.addEventListener("click", () => {
  const visible = logCard.classList.contains("hidden");
  setLogVisible(visible);
  chrome.storage.local.set({ logVisible: visible });
  menu.hidePopover();
});
chrome.storage.local.get("logVisible").then(({ logVisible }) => {
  if (logVisible) setLogVisible(true);
});

// Checkbox state persists across panel sessions — silently resetting a
// preference on reopen would be surprising. Only auto-capture is left; the
// engine options moved into DEFAULT_OPTIONS. Written generically so any future
// checkbox is persisted without extra wiring.
const persistedCheckboxes = [...document.querySelectorAll('input[type="checkbox"][id]')];
chrome.storage.local.get("checkboxes").then(({ checkboxes }) => {
  if (!checkboxes) return;
  for (const box of persistedCheckboxes) {
    if (box.id in checkboxes) box.checked = checkboxes[box.id];
  }
});
document.addEventListener("change", (event) => {
  if (!event.target.matches('input[type="checkbox"][id]')) return;
  chrome.storage.local.set({
    checkboxes: Object.fromEntries(persistedCheckboxes.map((box) => [box.id, box.checked]))
  });
});

let t0 = null;              // capture start, for elapsed-time log prefixes
let lastResult = null;      // { content, title } of the last successful capture
let lastSubmission = null;  // { id, steps } of the last uploaded walkthrough — drives the "sent" state
// The "sent" confirmation clears itself. It sits exactly where the next run's
// heading and title field go, and a success line still standing over a fresh
// recording reads as if THAT run had already been sent. Long enough to read,
// short enough to be gone before anyone starts again.
const SENT_NOTICE_MS = 7000;
let sentNoticeTimer = null;
let sendBusy = false;       // a single-page upload is in flight
let fetchFailures = [];     // failed resource URLs, re-logged as an un-scrollable summary
let adSkipCount = 0;        // resources dropped by the ad/tracker blocklist
let lastHeartbeat = 0;
let heartbeatMonitor = null;
let heartbeatStalled = false;
let elapsedTicker = null;

// ---------------------------------------------------------------------------
// Logging
// ---------------------------------------------------------------------------
function log(text, cls) {
  const item = document.createElement("li");
  if (cls) item.className = cls;
  const elapsed = t0 ? `+${((Date.now() - t0) / 1000).toFixed(1)}s` : "";
  item.textContent = `${new Date().toLocaleTimeString(undefined, { hour12: false })} ${elapsed} ${text}`;
  el.log.appendChild(item);
  while (el.log.children.length > LOG_CAP) el.log.firstChild.remove();
  el.log.scrollTop = el.log.scrollHeight;
}

// The elapsed counter is a separate, aria-hidden span: it rewrites once a
// second, and a polite live region announcing the time every second is
// unusable with a screen reader.
function setStatus(text, cls) {
  el.statusText.textContent = text;
  el.statusElapsed.textContent = "";
  el.status.className = cls || "";
}

function setStatusElapsed(text) {
  el.statusElapsed.textContent = text;
}

function scheduleSentNoticeDismiss() {
  clearTimeout(sentNoticeTimer);
  sentNoticeTimer = setTimeout(() => {
    sentNoticeTimer = null;
    if (!lastSubmission) return;
    lastSubmission = null;
    render();          // "sent" → "idle": the banner goes, nothing else moves
  }, SENT_NOTICE_MS);
}

// Dropping the notice early — a new recording is starting over the top of it.
function cancelSentNotice() {
  clearTimeout(sentNoticeTimer);
  sentNoticeTimer = null;
  lastSubmission = null;
}

function shortUrl(url) {
  try { return new URL(String(url || "")).origin; } catch { return "page"; }
}

// ---------------------------------------------------------------------------
// Messages from the page (progress, fetches, heartbeat, recorded actions)
// ---------------------------------------------------------------------------
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (["rc-action", "rc-action-effects", "rc-remind"].includes(message?.type) &&
      !(recordingPort && walkthrough && !walkthrough.recordingStopped &&
        message.sessionId === walkthrough.sessionId && sender.tab?.id === walkthrough.tabId)) {
    if (message.type === "rc-remind") sendResponse({ capturing: false, auto: false });
    return;
  }
  if (message && message.type === "rc-action") {
    // Authorized flow tabs report session-tagged actions. Only the tab
    // currently being followed contributes steps (see followTab).
    if (walkthrough && sender.tab && sender.tab.id === walkthrough.tabId) {
      walkthrough.pendingActions.push(message.action);
      const a = message.action;
      log(`action: ${a.type} on ${a.element}${a.label ? ` "${a.label}"` : ""}${a.value != null ? ` = "${a.value}"` : ""}${a.dropLabel ? ` → "${a.dropLabel}"` : ""}`);
      render();
    }
    return;
  }
  if (message && message.type === "rc-action-effects") {
    // The recorder's late report of what the page DID after an action —
    // arrives up to a settle-window after the action itself, so the action
    // may still be pending or may already be attached to a captured step.
    // Matched by aid; an unmatched report (action from another tab, or a
    // recording that ended in between) is dropped, never guessed at.
    if (walkthrough && sender.tab && sender.tab.id === walkthrough.tabId) {
      const { aid, effects } = message;
      const pools = [walkthrough.pendingActions,
                     ...walkthrough.steps.slice(-3).map((s) => s.actions)];
      for (const pool of pools) {
        const action = (pool || []).find((a) => a && a.aid === aid);
        if (action) {
          action.effects = effects;
          log(`effects: ${action.type} on ${action.element} → ` +
              effects.map((e) => `${e.selector} "${e.before}"→"${e.after}"`)
                     .join("; ").slice(0, 200));
          break;
        }
      }
    }
    return;
  }
  if (message && message.type === "rc-remind") {
    // The recorder's change detector saw a dialog open or a big content
    // update, and has already frozen the page on the strength of it. Auto-
    // capture unless one is running or just finished (its own DOM churn —
    // lazy images, engine cleanup — must not re-trigger).
    const mine = !!(walkthrough && walkthrough.initial &&
                    sender.tab && sender.tab.id === walkthrough.tabId);
    const auto = mine && el.wtAuto.checked;
    // A failed capture blocks new automatic ones until it is retried
    // (queueStepCapture declines them), so the page must be given back now
    // rather than frozen until shield.js's deadline for a capture that never runs.
    const blocked = !!(walkthrough && walkthrough.failedCapture);
    const capturing = auto && !blocked && !captureBusy && !walkthrough.uploading &&
                      Date.now() >= (walkthrough.autoCooldownUntil || 0);
    // Every detector firing is logged with its evidence and the decision it
    // got — this is the audit trail for "why does the overlay keep coming
    // up", which the capture-time log alone cannot answer (a firing that is
    // suppressed or later skipped never reaches it).
    if (walkthrough && walkthrough.initial) {
      const d = message.detail || {};
      const what = message.reason === "dialog" ? "dialog/modal"
                 : message.reason === "reveal" ? "view revealed"
                 : message.reason === "closed" ? "dialog/modal closed"
                 : "content update";
      const evidence =
        (d.count ? `${d.count} element(s) added` : "") +
        (d.areaPct ? `${d.count ? ", " : ""}~${d.areaPct}% of viewport` : "");
      let decision;
      if (!mine) decision = "ignored — not the recorded tab";
      else if (!el.wtAuto.checked) decision = "ignored — auto-capture is off";
      else if (blocked) decision = "ignored — a failed capture is waiting for retry";
      else if (capturing) decision = "auto-capture queued";
      else if (walkthrough.uploading) decision = "ignored — uploading";
      else if (walkthrough.deferredAuto) decision = "suppressed — a settled re-check is already pending";
      else decision = (captureBusy ? "a capture is running" : "inside the post-capture cooldown")
                      + " — deferring one settled re-check";
      log(`detector: ${what} on ${shortUrl(d.url || (sender.tab && sender.tab.url) || "")}` +
          (evidence ? ` (${evidence})` : "") +
          (d.samples && d.samples.length ? ` [${d.samples.join("; ")}]` : "") +
          ` → ${decision}`, capturing ? "mark" : undefined);
    }
    if (capturing) {
      walkthrough.autoCooldownUntil = Date.now() + 2500; // one queue per burst
      const d = message.detail || {};
      const trigger = message.reason === "dialog" ? "dialog/modal opened"
                    : message.reason === "reveal" ? "in-page view revealed"
                    : message.reason === "closed" ? "dialog/modal closed"
                    : "page content updated";
      queueStepCapture(`auto — ${trigger}` +
                       (d.samples && d.samples.length ? `: ${d.samples[0]}` : ""));
    } else if (auto && !blocked && !walkthrough.uploading && !walkthrough.deferredAuto) {
      // A burst suppressed by the cooldown (or a capture in flight) is often
      // the second half of the same change — Lightning opens its record modal
      // as a skeleton and renders the form fields a moment later, so the
      // suppressed burst IS the form arriving. Dropping it meant the settled
      // page was never captured (salesforce-new-contact-v2: no snapshot of
      // the empty form). Defer ONE capture to just past the cooldown instead;
      // if the page turns out unchanged, the identical-content skip in
      // captureWalkthroughStep makes it free.
      const wt = walkthrough;
      const wait = Math.max((wt.autoCooldownUntil || 0) - Date.now(), 0) + 700;
      wt.deferredAuto = setTimeout(() => {
        if (walkthrough !== wt) return;     // discarded or a new recording
        wt.deferredAuto = null;
        if (captureBusy || wt.uploading) return;
        wt.autoCooldownUntil = Date.now() + 2500;
        queueStepCapture("auto — settled after burst");
      }, wait);
    }
    // The reply is what hands that freeze over or ends it: queueStepCapture
    // has taken its own hold by now, and anything else must give the page back
    // immediately rather than sit out shield.js's deadline.
    sendResponse({ capturing, auto });
    return;
  }
  if (!message || message.type !== "rc-progress") return;
  const m = message;
  if (m.stage === "heartbeat") {
    lastHeartbeat = Date.now();
    if (heartbeatStalled) {
      heartbeatStalled = false;
      log("heartbeat resumed — page main thread is running again", "mark");
    }
    return;
  }
  if (m.stage === "fetch-start") {
    log(`fetch #${m.seq} start (${m.inflight} in flight) — ${shortUrl(m.url)}`);
  } else if (m.stage === "fetch-end") {
    log(`fetch #${m.seq} done in ${m.ms}ms${m.via ? ` via ${m.via}` : ""} — ${shortUrl(m.url)}`);
  } else if (m.stage === "fetch-skipped") {
    adSkipCount++;
    log(`fetch #${m.seq} skipped (ad/tracker) — ${shortUrl(m.url)}`);
  } else if (m.stage === "fetch-retry") {
    log(`fetch #${m.seq} retrying — ${shortUrl(m.url)}`, "err");
  } else if (m.stage === "fetch-failed") {
    log(`fetch #${m.seq} FAILED (${m.error}) — ${shortUrl(m.url)}`, "err");
    fetchFailures.push(`${m.url} (${m.error})`);
  } else if (m.stage === "redaction-repaired") {
    log(`Removed ${m.detail} recognized sensitive-value reflection(s) from the snapshot.`, "mark");
  } else if (m.stage === "resource-loaded") {
    log(`engine: resource ${m.index}/${m.max}`);
  } else {
    log(`engine: ${m.stage}${typeof m.index === "number" ? ` (${m.index}/${m.max})` : ""}${m.detail ? ` ${m.detail}` : ""}`);
  }
});

// ---------------------------------------------------------------------------
// Capture
// ---------------------------------------------------------------------------
// SingleFile engine settings. These used to be checkboxes in the panel, but
// they are serializer internals — nobody recording a walkthrough can evaluate
// "removeUnusedStyles", and the log already reports exactly what each capture
// did. The values below are the ones the UI shipped as defaults.
//
// Still overridable without a code change, for debugging a bad capture:
//   chrome.storage.local.set({ captureOptions: { removeUnusedStyles: false } })
const DEFAULT_OPTIONS = {
  loadDeferredImages: false,
  loadDeferredImagesMaxIdleTime: 1500,
  removeHiddenElements: false,
  removeUnusedStyles: true,
  removeUnusedFonts: true,
  compressHTML: true,
  groupDuplicateImages: true,
  // Real products render whole surfaces in same-origin iframes (HubSpot's
  // Create Company panel), and removing frames captured those pages as an
  // empty shell. The engine walks same-origin frames via contentDocument;
  // a cross-origin frame it cannot reach times out and stays empty rather
  // than failing the capture.
  removeFrames: false,
  removeAlternativeFonts: true,
  removeAlternativeMedias: true,
  removeAlternativeImages: true,
  removeNoScriptTags: true,
  blockScripts: true,
  blockAudios: true,
  blockVideos: true,
  blockAlternativeImages: true
};

// Panel-side post-processing, kept out of the SingleFile option object.
// Neither has a defensible "off": recompression only substitutes an image when
// the result is smaller, and empty ad slots are a feature in a replay.
const DEFAULT_LAB_FLAGS = { recompressImages: true, skipAds: true };

let optionOverrides = {};
let labFlagOverrides = {};
chrome.storage.local.get(["captureOptions", "labFlags"]).then((stored) => {
  optionOverrides = stored.captureOptions || {};
  labFlagOverrides = stored.labFlags || {};
  if (Object.keys(optionOverrides).length || Object.keys(labFlagOverrides).length) {
    log("capture option overrides in effect", "mark");
  }
});

function readOptions() {
  const options = { ...DEFAULT_OPTIONS };
  for (const [key, value] of Object.entries(optionOverrides)) {
    if (typeof options[key] === "boolean" && typeof value === "boolean" && key !== "blockScripts") options[key] = value;
  }
  return { ...options, blockScripts: true, compressContent: false, saveRawPage: false };
}

function readLabFlags() {
  return { ...DEFAULT_LAB_FLAGS, ...labFlagOverrides };
}

let captureBusy = false;

// Input shield (shield.js): while a capture is coming, user actions on that
// page have to be blocked. A click mid-capture tears the snapshot (part of
// the DOM serialized before the change, part after), and a click that
// navigates kills the capture outright. Injected into every frame so a
// focused iframe can't take keystrokes either. Failure is logged, never
// fatal — a capture without the shield still beats no capture.
//
// `mode` is "capture" (held until it is taken down), "hold" (speculative,
// self-releasing after holdMs — see shield.js), "done" (the capture worked:
// confirm it on the page, then come down on shield.js's own schedule) or
// "release" (take it down now).
const QUEUE_HOLD_MS = 30000;   // a queued capture can wait behind a running one
let shieldedTabId = null;      // the tab this panel last put a shield or hold on

async function setCaptureShield(tabId, mode, holdMs, documentId) {
  const raising = mode === "capture" || mode === "hold";
  shieldedTabId = raising ? tabId : null;
  try {
    if (raising) {
      // Idempotent, and the recorder already carries it on the page being
      // recorded — this is what covers subframes and single-page captures.
      await chrome.scripting.executeScript({
        target: documentId ? { tabId, documentIds: [documentId] } : { tabId, allFrames: true },
        files: ["shield.js"]
      });
    }
    await chrome.scripting.executeScript({
      target: documentId ? { tabId, documentIds: [documentId] } : { tabId, allFrames: true },
      func: applyCaptureShield,
      args: [mode, holdMs || 0]
    });
    return true;
  } catch {
    return false;   // tab closed, navigated, or a frame that refuses injection
  }
}

// Runs inside the page (isolated world), one call per frame. executeScript
// serializes this function's source, so it can only reach what shield.js put
// on `window` — never anything from the panel.
function applyCaptureShield(mode, holdMs) {
  const shield = window.__labShield;
  if (!shield) return false;
  if (mode === "capture") return shield.capture();
  if (mode === "hold") return shield.hold(holdMs);
  // done() is newer than the rest: a page open across an extension update
  // still holds the shield instance it was injected with, and the idempotence
  // guard means the reinjection above leaves that older object in place.
  if (mode === "done") return shield.done ? shield.done() : shield.release();
  return shield.release();
}

// Hide/show the shield's overlay without touching its state. Deliberately NOT
// routed through setCaptureShield: that would clear shieldedTabId and break
// the release bookkeeping. Top frame only — the modal only exists there.
//
// By CLASS, not via the shield instance: a document that has been open since
// before an extension update still holds its old shield object (shield.js's
// idempotence guard keeps it), so an instance method can silently no-op — on
// an SPA one document spans the whole recording, and that is exactly how the
// modal ended up inside every screenshot of a real HubSpot capture. Every
// shield node carries SingleFile's UI class, and at screenshot time (before
// the engine is injected) those are the only nodes wearing it. Input stays
// blocked throughout — the shield blocks with listeners, not the scrim.
//
// The promise resolves only after a PAINTED frame: captureVisibleTab
// photographs composited pixels, not the DOM, so a style change followed
// immediately by a capture still shows the overlay. Two rAFs bracket one
// paint; the timeout covers compositor-to-capture latency.
//
// Returns how many nodes were veiled (-1: the injection itself failed).
async function veilShield(tabId, hidden) {
  try {
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId },
      func: (h) => new Promise((resolve) => {
        const nodes = document.querySelectorAll(".single-file-ui-element");
        nodes.forEach((n) => {
          n.style.setProperty("visibility", h ? "hidden" : "visible", "important");
        });
        // Hidden tabs do not deliver animation frames. Restoring their overlay
        // needs no paint; a screenshot caller will reject the inactive tab.
        if (document.hidden) return resolve(nodes.length);
        let finished = false;
        const finish = (value) => {
          if (finished) return;
          finished = true;
          clearTimeout(deadline);
          resolve(value);
        };
        const deadline = setTimeout(() => finish(-1), 1000);
        requestAnimationFrame(() => requestAnimationFrame(() =>
          setTimeout(() => finish(nodes.length), 150)));
      }),
      args: [hidden]
    });
    return typeof result === "number" ? result : -1;
  } catch {
    return -1;
  }
}

async function acquireCapture(tabId, guard) {
  const injected = await chrome.scripting.executeScript({ target: { tabId }, files: ["capture-session.js"] });
  guard.documentId = injected.find(r => r.frameId === 0)?.documentId;
  if (!guard.documentId) throw new Error("Could not identify the capture document.");
  const port = chrome.tabs.connect(tabId, { name: "sc-capture-owner", documentId: guard.documentId });
  guard.port = port;
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => { port.disconnect(); reject(new Error("Capture ownership timed out.")); }, 5000);
    const ended = () => { clearTimeout(timer); reject(new Error("Capture document disconnected.")); };
    port.onDisconnect.addListener(ended);
    port.onMessage.addListener(message => {
      clearTimeout(timer);
      if (message.error) reject(new Error(message.error));
      else if (message.ready) { port.onDisconnect.removeListener(ended); resolve(); }
      else reject(new Error("Invalid capture ownership response."));
    });
    port.postMessage({ type: "start", id: guard.id });
  });
}

// Pin redaction, engine execution and cleanup to the same top-level document.
// Its helper inspects same-origin descendants directly. Inaccessible frames
// cause an error instead of being silently omitted by allFrames injection.
async function redactSecrets(tabId, guard) {
  const injected = await chrome.scripting.executeScript({ target: guard.documentId ? { tabId, documentIds: [guard.documentId] } : { tabId }, files: ["sensitive.js"] });
  const top = injected.find(result => result.frameId === 0);
  if (!top?.documentId) throw new Error("Could not identify the document for sensitive-field protection.");
  guard.documentId = top.documentId;
  const [result] = await chrome.scripting.executeScript({
    target: { tabId, documentIds: [guard.documentId] },
    // Chrome can resolve executeScript with no result when the injected
    // function throws. Return a receipt so known protection failures retain
    // their reason, without exposing arbitrary page-supplied exception text.
    func: (id) => {
      try { return self.scSensitive.redactAll(id); }
      catch (error) {
        return { error: error?.name === "SensitiveProtectionError" ? error.message :
          "Sensitive-field protection could not be verified. The page could not be inspected. Reload it and retry." };
      }
    }, args: [guard.id]
  });
  if (result?.documentId === guard.documentId && result.result?.error) throw new Error(result.result.error);
  if (result?.documentId !== guard.documentId || typeof result.result?.count !== "number") {
    throw new Error("Sensitive-field protection could not be verified. No valid protection result was returned. Reload the page and retry.");
  }
  return result.result;
}
async function verifySecrets(tabId, guard) {
  const [result] = await chrome.scripting.executeScript({
    target: { tabId, documentIds: [guard.documentId] },
    func: (id) => {
      try { return self.scSensitive.verify(id); }
      catch (error) {
        return { error: error?.name === "SensitiveProtectionError" ? error.message :
          "Sensitive-field protection could not be verified. The page could not be inspected. Reload it and retry." };
      }
    }, args: [guard.id]
  });
  if (result?.documentId === guard.documentId && result.result?.error) throw new Error(result.result.error);
  if (result?.documentId !== guard.documentId || typeof result.result?.count !== "number") {
    throw new Error("Sensitive-field protection could not be verified.");
  }
  return result.result;
}
async function restoreSecrets(tabId, guard) {
  if (!guard.documentId) return;
  try {
    await chrome.scripting.executeScript({
      target: { tabId, documentIds: [guard.documentId] },
      func: (id) => self.scSensitive?.restoreAll(id), args: [guard.id]
    });
  } catch { /* document was destroyed; its form no longer exists */ }
}

// Ground-truth viewport screenshot: what the user's screen actually showed at
// the moment of capture, taken before the serializer's deliberate alterations
// (ad blocking, image recompression, style pruning) touch anything. The
// shield's listeners keep blocking input while its overlay is veiled for the
// shot. Returns { blob, viewport } or null — a missing screenshot is never
// fatal; the HTML snapshot is the capture.
async function takeViewportScreenshot(tab) {
  // Track transitions as well as before/after state: switching away and back
  // during capture must invalidate the pixels too.
  let changed = false;
  const activated = (info) => { if (info.windowId === tab.windowId) changed = true; };
  const updated = (id, info) => {
    if (id === tab.id && (info.status === "loading" || info.url)) changed = true;
  };
  const removed = (id) => { if (id === tab.id) changed = true; };
  chrome.tabs.onActivated.addListener(activated);
  chrome.tabs.onUpdated.addListener(updated);
  chrome.tabs.onRemoved.addListener(removed);
  const stillTarget = async () => {
    const [current] = await chrome.tabs.query({ active: true, windowId: tab.windowId });
    return !changed && current?.id === tab.id && current.url === tab.url && current.status === "complete";
  };
  const measure = async () => {
    const [result] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => ({ width: innerWidth, height: innerHeight, dpr: devicePixelRatio })
    });
    return result;
  };
  try {
    if (!await stillTarget()) return null;
    const before = await measure();
    const veiled = await veilShield(tab.id, true);
    let dataUrl;
    try {
      if (veiled < 0 || !await stillTarget()) return null;
      dataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" });
    } finally {
      await veilShield(tab.id, false);
    }
    const after = await measure();
    if (!before.documentId || before.documentId !== after.documentId ||
        JSON.stringify(before.result) !== JSON.stringify(after.result) || !await stillTarget()) {
      log("screenshot discarded — the tab, document or viewport changed during capture");
      return null;
    }
    const blob = await (await fetch(dataUrl)).blob();
    // Decoding is asynchronous too. Keep listeners until the result is committed.
    if (!await stillTarget()) return null;
    log(`viewport screenshot — ${formatSize(blob.size)}`);
    return { blob, viewport: before.result };
  } catch (error) {
    log(`screenshot skipped — ${error.message || error}`, "err");
    return null;
  } finally {
    chrome.tabs.onActivated.removeListener(activated);
    chrome.tabs.onUpdated.removeListener(updated);
    chrome.tabs.onRemoved.removeListener(removed);
  }
}

// One capture of `tab` with the full diagnostic trail (heartbeat, watchdog,
// per-fetch logging, size breakdown). Returns { content, title, url } or
// throws. Callers own the final status line; button state follows
// captureBusy via render.
async function performCapture(tab) {
  // The guard belongs HERE, not in one caller.
  //
  // captureBusy was set on the first line of this function and checked in one
  // place — the single-page button — with an await between the check and the
  // call. Every other route in (the walkthrough queue, Finish, a navigation)
  // relied on a promise chain instead, and the tab listeners that append to
  // that chain do not check whether Finish has already awaited it. So two runs
  // could overlap, and two runs on one page is not a slow capture, it is a
  // leak: the first run's restore puts the real card number back while the
  // second run's serializer is still walking the DOM, and because the held
  // values are gone by then the scrub() check finds nothing and stays silent.
  //
  // Overlapping runs also clobber every module-level singleton this function
  // owns — elapsedTicker and heartbeatMonitor are reassigned without clearing,
  // so the first run's intervals tick for the life of the panel.
  if (captureBusy) {
    throw new Error("a capture is already running — this one was not started.");
  }
  captureBusy = true;
  const captureDestination = { ...serverConfig };
  render();
  fetchFailures = [];
  adSkipCount = 0;
  t0 = Date.now();
  setStatus("Capturing…");
  startHeartbeatMonitor();
  elapsedTicker = setInterval(() =>
    setStatusElapsed(` ${Math.round((Date.now() - t0) / 1000)}s`), 1000);

  const options = readOptions();
  const labFlags = readLabFlags();
  log(`capture started — ${shortUrl(tab.url)}`, "mark");
  log(`options: ${Object.entries(options).filter(([, v]) => v === true).map(([k]) => k).join(", ")}`);
  log(`size reduction: ${Object.entries(labFlags).filter(([, v]) => v).map(([k]) => k).join(", ") || "none"}`);

  // Held only while the engine is actually working on the page — released the
  // moment it hands the HTML back, before panel-side post-processing. This
  // usually takes over a hold the recorder or queueStepCapture already put up
  // rather than raising the shield from nothing.
  let shieldReleased = false;
  let owned = false;
  const secretGuard = { id: crypto.randomUUID(), documentId: null };
  const releaseShield = async (ok) => {
    if (!owned || shieldReleased) return;
    shieldReleased = true;
    await setCaptureShield(tab.id, ok ? "done" : "release", 0, secretGuard.documentId);
  };
  let shot = null;
  try {
    await acquireCapture(tab.id, secretGuard);
    owned = true;
    await setCaptureShield(tab.id, "capture", 0, secretGuard.documentId);
    const protection = await redactSecrets(tab.id, secretGuard);
    if (protection.count) log(`${protection.count} sensitive field(s) blanked for the capture`, "mark");
    if (protection.screenshotSafe) shot = await takeViewportScreenshot(tab);
    else log("viewport image omitted: sensitive controls or embedded frames are present", "mark");
    await verifySecrets(tab.id, secretGuard);

    const tInject = Date.now();
    await chrome.scripting.executeScript({ target: { tabId: tab.id, documentIds: [secretGuard.documentId] }, files: ["lib/single-file.js"] });
    log(`engine injected in ${Date.now() - tInject}ms`);

    const exec = chrome.scripting.executeScript({
      target: { tabId: tab.id, documentIds: [secretGuard.documentId] },
      func: runCaptureInPage,
      args: [options, labFlags, secretGuard.id, tab.url]
    });
    exec.catch(() => {}); // late rejection after the watchdog fires is not unhandled
    let watchdog;
    let executeResult;
    try {
      executeResult = await Promise.race([
        exec,
        new Promise((_, reject) => {
          watchdog = setTimeout(() => reject(new Error(
            `watchdog: no result after ${WATCHDOG_MS / 1000}s — see the log tail for the last thing that happened`)),
            WATCHDOG_MS);
        })
      ]);
    } finally {
      clearTimeout(watchdog);
      // Restore this transaction. The watchdog does not stop SingleFile itself:
      // capture-session.js aborts its network work and quarantines the engine
      // until it settles, so a late result cannot be committed.
      await restoreSecrets(tab.id, secretGuard);
    }

    // The engine is done with the page here — everything below happens in the
    // panel, so give the page back before recompression (which takes seconds).
    // Checked first, though: "done" confirms the capture on the page, and a
    // run that came back empty has nothing to confirm.
    const [{ result }] = executeResult;
    if (!result) throw new Error("SingleFile returned no data (result was empty).");
    if (result.error) throw new Error(`SingleFile failed: ${result.error}`);

    await releaseShield(true);
    log("page input resumes once the capture notice clears");

    let capture = { content: result.content, title: result.title, url: result.url,
                    screenshot: shot ? shot.blob : null,
                    viewport: shot ? shot.viewport : null, destination: captureDestination };
    log(`capture COMPLETE — ${formatSize(capture.content.length)} raw in ${((Date.now() - t0) / 1000).toFixed(1)}s`, "mark");

    if (labFlags.recompressImages) {
      // No status change here on purpose: the line still reads "Capturing…",
      // which is what this is from outside the panel. Recompression is an
      // internal stage and belongs in the log, not on the status line.
      const r = await recompressImages(capture.content);
      capture = { ...capture, content: r.content };
      if (r.count) {
        log(`images: ${r.count} recompressed, ${formatSize(r.before)} → ${formatSize(r.after)}${r.skipped ? `, ${r.skipped} left as-is` : ""} (${r.ms}ms)`);
      } else if (r.skipped) {
        log(`images: none recompressed (${r.skipped} left as-is — already small or not raster)`);
      }
    }

    logSizeBreakdown(capture.content);
    setStatus("Capture saved in this panel.", "ok");
    return capture;
  } finally {
    // Safety net: on a failure or watchdog timeout the release above never
    // ran, and a page left permanently frozen would be far worse than a
    // failed capture. Idempotent, so the happy path pays nothing.
    await restoreSecrets(tab.id, secretGuard);
    await releaseShield(false);
    secretGuard.port?.disconnect();
    captureBusy = false;
    stopHeartbeatMonitor();
    clearInterval(elapsedTicker);
    if (adSkipCount) log(`${adSkipCount} ad/tracker resource(s) skipped by the blocklist`);
    // Re-log failures as a block at the end: on busy pages individual FAILED
    // lines scroll out of the capped log, and a missing stylesheet is the
    // difference between a faithful capture and a broken one.
    if (fetchFailures.length) {
      log(`--- ${fetchFailures.length} resource fetch(es) failed this run ---`, "err");
      for (const f of fetchFailures) log(f, "err");
      const css = fetchFailures.filter((f) => /\.css(\?|\s|$)/i.test(f));
      if (css.length) log(`${css.length} of them are STYLESHEETS — the capture will render wrong`, "err");
    }
    render();
  }
}

el.capture.addEventListener("click", async () => {
  if (captureBusy) return;
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (!tab || !/^(https?|file):/.test(tab.url || "")) {
    return setStatus("The active tab can't be captured (open a normal web page).", "error");
  }
  lastResult = null;
  render();
  const started = Date.now();
  try {
    lastResult = await performCapture(tab);
    setStatus(`Done: ${formatSize(lastResult.content.length)} in ${((Date.now() - started) / 1000).toFixed(1)}s.`, "ok");
  } catch (error) {
    log(`capture FAILED — ${error.message || error}`, "err");
    setStatus(`Failed: ${error.message || error}`, "error");
  } finally {
    render();
  }
});

el.download.addEventListener("click", () => {
  if (!lastResult) return;
  const blob = new Blob([lastResult.content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(lastResult.title || "capture").replace(/[^\w-]+/g, "-").slice(0, 60)}.html`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
});

el.clearLog.addEventListener("click", () => { el.log.innerHTML = ""; });

// Reset — back to a freshly opened panel: drops any active walkthrough and its
// buffered pages, unregisters the recorder, and reloads the panel page,
// which clears every monitor, hung capture await, and status line. Server
// settings survive (they live in chrome.storage).
mi.reset.addEventListener("click", async () => {
  menu.hidePopover();
  if (walkthrough) {
    const pages = (walkthrough.initial ? 1 : 0) + walkthrough.steps.length;
    const ok = confirm(
      `Reset drops the walkthrough "${walkthrough.title}" (${pages} captured page${pages === 1 ? "" : "s"}). Continue?`);
    if (!ok) return;
  }
  walkthrough = null;
  await unregisterRecorder();
  // Reloading the panel abandons every pending release — including the finally
  // of a capture still hanging — so give the page back first. Reset is the
  // escape hatch; it must not be the thing that leaves a page frozen.
  if (shieldedTabId != null) await setCaptureShield(shieldedTabId, "release");
  location.reload();
});

// ---------------------------------------------------------------------------
// Heartbeat monitor — distinguishes "a fetch is hung" (heartbeats keep
// arriving) from "the page's main thread is pegged" (heartbeats stop).
// ---------------------------------------------------------------------------
function startHeartbeatMonitor() {
  lastHeartbeat = Date.now();
  heartbeatStalled = false;
  heartbeatMonitor = setInterval(() => {
    const gap = Date.now() - lastHeartbeat;
    if (gap > 3000 && !heartbeatStalled) {
      heartbeatStalled = true;
      log(`no heartbeat for ${Math.round(gap / 1000)}s — page main thread is blocked (CPU-bound work, not a network hang)`, "err");
    }
  }, 1000);
}

function stopHeartbeatMonitor() {
  clearInterval(heartbeatMonitor);
  heartbeatMonitor = null;
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

// ---------------------------------------------------------------------------
// Image recompression — post-processes the captured HTML in the panel:
// every sufficiently large raster data: URI is scaled to a max dimension and
// re-encoded as WebP, replaced only when that actually shrinks it. SVG is
// never matched; GIF is excluded to preserve animation.
// ---------------------------------------------------------------------------
const IMG_RECOMPRESS_FLOOR = 20 * 1024; // leave small images alone
const IMG_MAX_DIM = 1600;               // longest side after scaling
const IMG_WEBP_QUALITY = 0.8;

async function recompressImages(content) {
  const started = Date.now();
  const uris = [...new Set(content.match(/data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+/g) || [])]
    .filter((u) => u.length >= IMG_RECOMPRESS_FLOOR);
  let count = 0, skipped = 0, before = 0, after = 0;
  for (const uri of uris) {
    try {
      const blob = await (await fetch(uri)).blob();
      const bitmap = await createImageBitmap(blob);
      const scale = Math.min(1, IMG_MAX_DIM / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = new OffscreenCanvas(w, h);
      canvas.getContext("2d").drawImage(bitmap, 0, 0, w, h);
      bitmap.close();
      const webp = await canvas.convertToBlob({ type: "image/webp", quality: IMG_WEBP_QUALITY });
      const newUri = await blobToDataUrl(webp);
      if (newUri.length < uri.length) {
        content = content.split(uri).join(newUri); // covers img src and CSS url() alike
        before += uri.length;
        after += newUri.length;
        count++;
      } else {
        skipped++;
      }
    } catch {
      skipped++; // undecodable image — leave the original in place
    }
  }
  return { content, count, skipped, before, after, ms: Date.now() - started };
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

// One line per capture that makes each reducer's effect measurable.
// (CSS text includes data: URIs embedded inside style blocks, so the
// categories overlap — they are gauges, not a partition.)
function logSizeBreakdown(content) {
  const sum = (re) => (content.match(re) || []).reduce((n, s) => n + s.length, 0);
  const img = sum(/data:image\/[a-z.+-]+;base64,[A-Za-z0-9+/=]+/g);
  const font = sum(/data:(?:font|application)\/[a-z.+-]*;base64,[A-Za-z0-9+/=]+/g);
  let style = 0;
  content.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (m, s) => { style += s.length; return m; });
  log(`breakdown: total ${formatSize(content.length)} · images ${formatSize(img)} · fonts ${formatSize(font)} · css text ${formatSize(style)}`);
}

// ---------------------------------------------------------------------------
// Send to Captcher — the simplest possible integration. The server's
// existing /api/upload ingests any ZIP holding a walkthrough.json manifest,
// so a single-page capture is packaged as the smallest valid capture folder:
//   walkthrough.json       (schema page-capture-walkthrough@1, no steps)
//   step-000/page.html     (the captured page)
// Ingest turns that into a one-step draft walkthrough — no server changes.
// ---------------------------------------------------------------------------
// Storage is the source of truth for the connection, and it loads
// asynchronously, so the first surface decision waits for it — otherwise a
// connected user sees the setup card for a frame.
chrome.storage.local.get(["server", "lastServerUrl"]).then(({ server, lastServerUrl }) => {
  serverConfig = { url: (server && server.url) || "", token: (server && server.token) || "", email: server?.email || "" };
  if (lastServerUrl) knownServerUrl = lastServerUrl;
  showSurface(serverConfigured() ? "main" : "settings");
  render();
  if (!serverConfigured()) refreshConnectState();
});

// Pairing is written by the service worker, so the panel has to follow storage
// rather than only drive it. Without this a successful pairing would leave
// `serverConfig` empty and every control disabled until the panel was reopened.
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || !changes.server) return;
  const server = changes.server.newValue || {};
  serverConfig = { url: server.url || "", token: server.token || "", email: server.email || "" };
  render();
  refreshConnectState();
});

// ---------------------------------------------------------------------------
// Connecting.
//
// The panel drives this end to end, because it is the only surface that can:
// it can see what tab is open, it can navigate that tab, and it can inject into
// it. The app page's job is only to answer with a code when asked. There is no
// URL field and no token field — anything the panel can work out for itself, it
// works out. When the active tab is Captcher that is everything: the
// panel pairs with it on its own. The one press left is for when it is not.
//
// The surface is a readout of one piece of state, `connectState`:
//
//   checking   we do not yet know what is in the active tab
//   open     the active tab is not Captcher   → "Open Captcher"
//   ready    it IS Captcher, but did not pair → "Try again"
//   working  a navigation or a claim is in flight    → no button
//   done     connected                               → "Connected", then home
//
// `refreshConnectState` recomputes it whenever the active tab changes or
// navigates, so the panel keeps up with the browser instead of making somebody
// press a Retry button to find out what it already could have known — and a
// Captcher page it has not tried yet is paired the moment it is seen.
// ---------------------------------------------------------------------------
const CONNECT_TIMEOUT_MS = 20000;
const PING_TIMEOUT_MS = 5000;
// How long "Connected" stays up before the panel moves on to recording. Nothing
// was pressed to get here, so the confirmation has to be seen to be believed —
// the same reason the capture shield holds "Page captured" for a floor.
const CONNECTED_HOLD_MS = 1500;
// Where an unpaired panel offers to take you. Only ever used when
// `knownServerUrl` is empty, which is every fresh install — so this is the
// address a person who has just installed from the Web Store is shown, and it
// was the localhost dev server until the store release made that a joke.
//
// Development is unaffected: a panel that has paired with a local server keeps
// it in `lastServerUrl`, and an unpaired one connects to whatever Captcher
// server is in the tab, so opening 127.0.0.1:8080 by hand still pairs.
const DEFAULT_SERVER_URL = "https://app.captcher.app";

// What this build of the recorder speaks.
//
// The server has advertised its own number at /api/extension/ping since the
// pairing flow was written, and until now nothing read it — the single
// negotiation channel in the system, inert on the end that needed it. It is
// read here because a Web Store extension cannot be updated on demand: when
// the server outgrows a shipped build, saying so plainly is the only move left.
//
// Bump this only when the extension genuinely cannot talk to a server that
// answers with a lower number. Once this is published, that should be close to
// never.
const PAIRING_API_VERSION = 1;

let connectState = "checking";
let serverNotice = null;        // free text from the server, shown verbatim
// The upload ceiling the server publishes on its ping. Null until one has
// answered, and a null means "do not check" rather than "no limit": a server
// too old to say has whatever cap it has, and guessing one here would refuse
// captures it would have accepted.
let maxUploadBytes = null;
let connectPending = null;      // the in-flight claim's deadline
let activeOrigin = null;        // origin of the active tab, when it is a server
let connectedEmail = "";        // from the last successful claim, for the readout
// The one page load this panel has already tried to pair with, as `tabId url`.
// Pairing is automatic, so it needs a memory: without one a signed-out
// Captcher tab would be asked again — six seconds of "Connecting…" ending in
// the same error — on every switch back to it. Cleared when that tab loads
// again (signing in navigates) and when the settings surface is opened on
// purpose.
let autoConnected = null;
// The last origin we successfully paired with, remembered across a disconnect
// so "Open Captcher" goes somewhere useful on a re-pair. Self-hosted
// servers have no discoverable address, and this is the only thing that knows
// one.
let knownServerUrl = "";
// Per-origin ping results. The active tab changes constantly while somebody
// works; re-probing an origin already known to be (or not to be) a server on
// every one of those is noise on somebody else's server.
const pingCache = new Map();

function setConnectStatus(text, cls) {
  el.connectStatus.textContent = text || "";
  el.connectStatus.className = cls || "";
}

// The readout — a title, a note, what to do in order, and a button only when
// there is something to press. Everything the surface says about where you are
// is written here and nowhere else.
//
// This is the first screen a new person sees, and until it is satisfied the
// recorder cannot do the one thing it exists for. So it says the quiet part:
// that a connection has to be made, that it is made by visiting Captcher
// SIGNED IN, and that nothing else is required of them. The mechanism is
// genuinely automatic — the panel pairs with a signed-in page the moment it
// sees one, with nothing pressed — but "it connects on its own" was being read
// as "it will happen eventually", so the steps now name the visit and the sign
// -in as things the person does, and only the key exchange as ours.
//
// Being signed in is the whole of it, and it was nowhere on this surface. A
// page that is Captcher but signed out looks identical from here and
// fails for that one reason; the "ready" branch below now leads with it rather
// than leaving it to a status line the person has to fail once to see.
function renderConnect() {
  document.body.dataset.connect = connectState;
  let title = "", note = "", steps = [], action = null;
  if (connectState === "checking") {
    title = "Checking this tab…";
  } else if (connectState === "open") {
    // The address has to be named: "Open Captcher" is otherwise a guess
    // the user cannot check before pressing it.
    const target = knownServerUrl || DEFAULT_SERVER_URL;
    title = "This browser is not connected yet";
    note = "The recorder has to be linked to your Captcher account before it " +
           "can record anything. There is nothing to copy and nothing to type — it " +
           "takes one visit to Captcher while you are signed in.";
    steps = [
      `Open Captcher in this tab. The button below goes to ${hostOf(target)}, ` +
        "or you can type the address yourself.",
      "Sign in to your account there, if you are not already. A signed-out page " +
        "cannot connect the recorder.",
      "Come back to this panel. It connects itself as soon as it sees the signed-in " +
        "page, and this card will say Connected."
    ];
    action = "Open Captcher";
  } else if (connectState === "ready") {
    // A Captcher page is right here and it would not hand over a key.
    // Signed out is very nearly the only way that happens, so it is the
    // headline rather than a footnote — and the status line, which carries
    // whatever the page actually said, sits underneath and still gets read.
    title = "Sign in to finish connecting";
    note = `${hostOf(activeOrigin)} is open in this tab, but it did not give the ` +
           "recorder a key. That almost always means nobody is signed in on that page.";
    steps = [
      "Sign in to Captcher in this tab.",
      "Press Try again below."
    ];
    action = "Try again";
  } else if (connectState === "working") {
    title = "Connecting…";
    note = "Captcher is handing this browser its own key. Nothing to copy.";
  } else if (connectState === "outdated") {
    // No button. There is nothing this panel can do about it, and an action
    // that cannot work is worse than none.
    title = "This recorder is out of date";
    note = `${hostOf(activeOrigin || serverConfig.url)} needs a newer version of the ` +
           "Captcher recorder than this one. Update it from the Chrome Web Store, " +
           "then open this panel again.";
  } else if (connectState === "done") {
    title = "Connected";
    note = (connectedEmail ? `Connected as ${connectedEmail} to ` : "This browser is connected to ") +
           `${hostOf(serverConfig.url)}. Connected browsers are listed on Captcher's Account page.`;
  }
  // Whatever the server had to say, shown verbatim and outside the surfaces:
  // it is addressed to this browser, not to whichever screen is open.
  el.serverNotice.textContent = serverNotice || "";
  el.serverNotice.hidden = !serverNotice;

  el.connectTitle.textContent = title;
  el.connectNote.textContent = note;
  el.connectSteps.replaceChildren(...steps.map((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));
  el.connectAction.hidden = action === null;
  el.connectAction.disabled = action === null;
  if (action !== null) el.connectAction.textContent = action;
}

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url || "your Captcher server";
  }
}

const NOT_OURS = { ours: false, pairing: 0, minExtensionVersion: null,
                   notice: null, maxUploadBytes: null };

// The only origins this panel will ever ask "are you Captcher?".
//
// It used to ask every site the user visited. That was discovery by probe,
// from a time when the address could be anything — and the cost was a request
// to every origin browsed while unpaired, telling each of those sites that
// this extension is installed. A fingerprint handed to strangers, for a
// question none of them could answer.
//
// There is one hosted Captcher now, so the set is knowable: exactly the
// address this build ships with, plus a local server for development in an
// unpacked install. Pairing makes the page's origin the destination of every
// later upload, so this is an exact list rather than "anything on the domain".
// Nothing outside it is contacted, ever. background.js enforces the same set.
const CAPTCHER_ORIGINS = [DEFAULT_SERVER_URL];
// Store installs carry update_url; unpacked development builds do not.
const DEV_BUILD = !chrome.runtime.getManifest().update_url;
const LOOPBACK_HOSTS = ["localhost", "127.0.0.1", "[::1]"];
function mayBeCaptcher(origin) {
  let u;
  try { u = new URL(origin); } catch { return false; }
  if (CAPTCHER_ORIGINS.includes(u.origin)) return true;
  return DEV_BUILD && /^https?:$/.test(u.protocol) && LOOPBACK_HOSTS.includes(u.hostname);
}

/** Ask an origin whether it is a Captcher server, and what it speaks.
 *  Cached, never throws, and never contacts anything outside the allowlist. */
async function probeServer(origin) {
  if (pingCache.has(origin)) return pingCache.get(origin);
  if (!mayBeCaptcher(origin)) {
    pingCache.set(origin, NOT_OURS);
    return NOT_OURS;
  }
  let record = NOT_OURS;
  try {
    const response = await fetch(`${origin}/api/extension/ping`, {
      credentials: "omit",
      signal: AbortSignal.timeout(PING_TIMEOUT_MS)
    });
    // The key is the server's own name: /api/extension/ping answers
    // {"captcher": true, "pairing": <n>}. Reading any other key makes
    // every server look like a stranger, silently — the panel then offers to
    // open one instead of pairing with the tab already in front of it.
    const body = response.ok ? await response.json() : null;
    if (body && body.captcher) {
      record = {
        ours: true,
        pairing: Number(body.pairing) || 1,
        // Both of these are optional and additive. A server that sends neither
        // is one with nothing to say, not an old one worth complaining about —
        // which is what lets the server start sending them whenever it likes,
        // to extensions that shipped long before they existed.
        minExtensionVersion: typeof body.minExtensionVersion === "string"
          ? body.minExtensionVersion : null,
        maxUploadBytes: Number(body.maxUploadBytes) > 0
          ? Number(body.maxUploadBytes) : null,
        notice: typeof body.notice === "string" && body.notice.trim()
          ? body.notice.trim().slice(0, 300) : null
      };
    }
  } catch {
    record = NOT_OURS;   // unreachable, not JSON, not ours — all one answer
  }
  pingCache.set(origin, record);
  return record;
}

// "1.2.3" against "1.10.0", part by part and numerically, because a string
// compare puts 1.10 below 1.9. Both sides only ever send Chrome's own shape:
// one to four integers.
function versionBelow(version, floor) {
  const a = String(version).split(".").map((n) => parseInt(n, 10) || 0);
  const b = String(floor).split(".").map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] || 0) !== (b[i] || 0)) return (a[i] || 0) < (b[i] || 0);
  }
  return false;
}

// Two ways a server can say this recorder is too old, and it may use either.
// The version number is the blunt one; the floor lets a server name an exact
// build without having to bump a contract nobody else has outgrown.
function recorderTooOld(record) {
  if (record.pairing > PAIRING_API_VERSION) return true;
  return !!record.minExtensionVersion &&
         versionBelow(chrome.runtime.getManifest().version, record.minExtensionVersion);
}

async function activeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab || null;
}

/** Recompute the readout from whatever is in the active tab — and pair with
 *  it, if it is a Captcher page this panel has not tried yet. */
async function refreshConnectState() {
  if (serverConfigured()) {
    connectState = "done";
    // Still probed, once, so a connected browser can be told something. A
    // notice nobody sees until they next need to pair would be no channel at
    // all — and this is cached per origin, so it costs one request a session.
    try {
      const record = await probeServer(new URL(serverConfig.url).origin);
      serverNotice = record.notice;
      maxUploadBytes = record.maxUploadBytes;
      if (record.ours && recorderTooOld(record)) connectState = "outdated";
    } catch { /* a stored address that will not parse; the readout still renders */ }
    return renderConnect();
  }
  if (connectState === "working") return;
  const tab = await activeTab();
  const url = (tab && tab.url) || "";
  if (!/^https?:/i.test(url)) {
    activeOrigin = null;
    connectState = "open";
    return renderConnect();
  }
  const origin = new URL(url).origin;
  const record = await probeServer(origin);
  // The tab may have moved on while the ping was in the air; a stale answer
  // would pair with a page that is no longer there. And a second refresh that
  // raced this one may already be connecting — do not talk over it.
  const still = await activeTab();
  if (!still || still.url !== url) return refreshConnectState();
  if (serverConfigured() || connectState === "working") return;
  activeOrigin = record.ours ? origin : null;
  serverNotice = record.notice;
  maxUploadBytes = record.maxUploadBytes;
  if (!record.ours) {
    connectState = "open";
    return renderConnect();
  }
  // It is Captcher, but a newer one than this build knows how to pair
  // with. Saying so is the whole reason the version is read: the alternative
  // is six seconds of "Connecting…" and an error about signing in.
  if (recorderTooOld(record)) {
    connectState = "outdated";
    return renderConnect();
  }
  // A Captcher page: pair with it, once per page load, nothing pressed.
  // The page answers only if somebody is signed in there, and what is asked
  // for is a key to that account for the browser it is signed in on — the
  // thing anyone on this surface came here to get.
  const key = `${still.id} ${url}`;
  if (autoConnected !== key) {
    autoConnected = key;
    return connectNow();
  }
  // Already tried this page and it did not connect; the status line says why.
  connectState = "ready";
  renderConnect();
}

// Keep up with the browser. Both listeners are cheap when connected (the guard
// in refreshConnectState returns immediately) and the ping cache absorbs the
// rest — somebody clicking between two tabs does not re-probe either one.
chrome.tabs.onActivated.addListener(() => refreshConnectState());
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if (change.status !== "complete" || !tab.active) return;
  // A reload may have signed the user in, or moved them onto the app — so a
  // page load in the tab already tried is a fresh page, and gets tried again.
  if (tab.url) pingCache.delete(new URL(tab.url).origin);
  if (autoConnected && autoConnected.startsWith(`${tabId} `)) autoConnected = null;
  refreshConnectState();
});

/** Navigate the active tab to the best-known Captcher address, wait. */
async function openCaptcher() {
  const target = knownServerUrl || DEFAULT_SERVER_URL;
  const tab = await activeTab();
  connectState = "working";
  renderConnect();
  setConnectStatus(`Opening ${hostOf(target)}…`);

  // Navigate the tab in place rather than opening another one: the panel is
  // docked to this window and a new tab would put the thing being set up
  // somewhere the panel is not looking.
  const target_id = tab && tab.id
    ? (await chrome.tabs.update(tab.id, { url: target })).id
    : (await chrome.tabs.create({ url: target })).id;

  const loaded = await waitForTabLoad(target_id);
  connectState = "checking";
  pingCache.delete(new URL(target).origin);
  if (!loaded) {
    setConnectStatus(`${hostOf(target)} did not load. Is the server running?`, "error");
    return refreshConnectState();
  }
  // They asked for Captcher to be opened so they could connect; finishing
  // job is what they meant, and refreshConnectState pairs with the page as
  // soon as it recognises it. All that is left to handle is it not being one.
  setConnectStatus("");
  await refreshConnectState();
  if (connectState === "open") {
    setConnectStatus(
      `${hostOf(target)} did not answer as a Captcher server. Open your ` +
      `Captcher in this tab and this will pick it up.`, "error");
  }
}

function waitForTabLoad(tabId, timeoutMs = 15000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => finish(false), timeoutMs);
    function finish(ok) {
      clearTimeout(timer);
      chrome.tabs.onUpdated.removeListener(onUpdated);
      resolve(ok);
    }
    function onUpdated(id, change) {
      if (id === tabId && change.status === "complete") finish(true);
    }
    chrome.tabs.onUpdated.addListener(onUpdated);
    // The navigation may already have completed before this listener attached.
    chrome.tabs.get(tabId).then(
      tab => { if (tab && tab.status === "complete") finish(true); },
      () => finish(false));
  });
}

/** Ask the page in the active tab for a code, and redeem it. */
async function connectNow() {
  const tab = await activeTab();
  if (!tab || !tab.id) {
    connectState = "checking";
    renderConnect();
    return refreshConnectState();
  }
  connectState = "working";
  renderConnect();
  setConnectStatus("Asking Captcher for a key…");

  connectPending = setTimeout(
    () => finishConnect({ ok: false, error: "Captcher did not answer in time." }),
    CONNECT_TIMEOUT_MS);
  try {
    // Pin the injection to the document whose origin was just checked. The tab
    // can navigate between the probe and the injection; a documentId target
    // then fails instead of running connect.js on whatever page is there now.
    const [top] = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: () => location.origin });
    if (!top?.documentId || !mayBeCaptcher(top.result)) throw new Error("this tab is not a Captcher page");
    await chrome.scripting.executeScript({ target: { tabId: tab.id, documentIds: [top.documentId] }, files: ["connect.js"] });
  } catch (error) {
    // Injection refused: a chrome:// page, the Web Store, a PDF viewer, or a
    // tab that navigated out from under us.
    finishConnect({ ok: false,
                    error: `Could not reach this page (${error.message || error}).` });
  }
}

// connect.js reports the outcome here — it runs in the page and cannot write to
// the panel directly.
chrome.runtime.onMessage.addListener((message) => {
  if (message && message.type === "pair-status") finishConnect(message);
});

async function finishConnect(result) {
  if (!connectPending) return;      // a late duplicate, or a status we did not ask for
  clearTimeout(connectPending);
  connectPending = null;

  if (!result.ok) {
    connectState = "checking";
    setConnectStatus(result.error || "Could not connect.", "error");
    log(`pair: failed — ${result.error || "unknown error"}`, "err");
    return refreshConnectState();
  }

  // Read storage rather than waiting for the onChanged listener to have run.
  // The worker writes storage before answering connect.js, but the change event
  // and the pair-status message reach this panel independently, so relying on
  // the listener is a race — and losing it would leave the panel unconfigured
  // after a pairing that in fact succeeded.
  const { server } = await chrome.storage.local.get("server");
  serverConfig = { url: (server && server.url) || "", token: (server && server.token) || "", email: server?.email || "" };
  if (!serverConfigured()) {
    // The worker reported success but there is nothing stored. Say so rather
    // than announcing a connection and then disabling every control on the
    // surface behind it, which is the version of this that wastes an afternoon.
    connectState = "checking";
    setConnectStatus("Captcher connected, but the connection could not be saved.", "error");
    log("pair: claim succeeded but storage is empty", "err");
    return refreshConnectState();
  }
  knownServerUrl = serverConfig.url;
  chrome.storage.local.set({ lastServerUrl: knownServerUrl });

  connectedEmail = result.email || "";
  connectState = "done";
  // Hold the setup presentation across the "Connected" pause below, so nothing
  // rearranges itself under somebody reading it.
  holdingConnected = true;
  setConnectStatus("");
  log(`pair: connected to ${result.url}`);
  renderConnect();
  render();
  // Say so, then move to the recording surface: the setup card has nothing
  // left to ask, and leaving somebody on a finished checklist to find their own
  // way off it is the kind of dead end this rewrite exists to remove. Nothing
  // was pressed to get here, though, so "Connected" is held long enough to be
  // read — and the move only happens if they are still looking at it.
  setTimeout(() => {
    // Setup is over whether or not they are still on this screen — somebody who
    // wandered off to the log during the hold should not come back to a panel
    // that still thinks it is setting them up. The move itself is conditional;
    // ending setup is not.
    holdingConnected = false;
    syncSetupMode();
    if (serverConfigured() && document.body.dataset.surface === "settings") showSurface("main");
  }, CONNECTED_HOLD_MS);
}

el.connectAction.addEventListener("click", () => {
  const run = connectState === "ready" ? connectNow() : openCaptcher();
  run.catch(error => {
    connectState = "checking";
    setConnectStatus(String(error.message || error), "error");
    renderConnect();
    refreshConnectState();
  });
});

// Uploads get a deadline for the same reason captures do (WATCHDOG_MS): a
// wedged or half-open connection otherwise hangs forever with no way out but
// Reset, which discards the recording the retry was meant to save.
//
// Scaled by payload rather than fixed: a walkthrough is a full page snapshot
// per step and can run to tens of megabytes, so one constant would either be
// too tight for a real upload over a slow link or too loose to be a deadline
// at all. The floor covers connect plus the server's extract-and-ingest work.
const UPLOAD_TIMEOUT_BASE_MS = 60000;
const UPLOAD_TIMEOUT_PER_MB_MS = 20000;   // ≈0.4 Mbit/s, deliberately pessimistic
const UPLOAD_TIMEOUT_MAX_MS = 600000;

function uploadTimeoutFor(bytes) {
  const mb = bytes / (1024 * 1024);
  return Math.min(UPLOAD_TIMEOUT_MAX_MS,
                  UPLOAD_TIMEOUT_BASE_MS + Math.ceil(mb * UPLOAD_TIMEOUT_PER_MB_MS));
}

// Zips `entries` and POSTs them to <server>/api/upload with the capture
// token. Shared by the single-page send and the walkthrough flow. Returns the
// server's response JSON ({ walkthrough_id, steps, player_url, … }).
function isSecureServer(raw) {
  try { const u = new URL(raw); return !u.username && !u.password &&
    (u.protocol === "https:" || (DEV_BUILD && u.protocol === "http:" && LOOPBACK_HOSTS.includes(u.hostname))); }
  catch { return false; }
}
async function disconnectServer(expectedToken) {
  const { server } = await chrome.storage.local.get("server");
  if (expectedToken && server?.token !== expectedToken) return;
  knownServerUrl = server?.url || knownServerUrl;
  await chrome.storage.local.set({ server: { ...server, token: "" }, lastServerUrl: knownServerUrl });
  serverConfig = { ...server, token: "" };
  autoConnected = null;
  showSurface("settings");
  render();
  await refreshConnectState();
}
document.getElementById("connect-reset").addEventListener("click", () =>
  disconnectServer().catch(error => setConnectStatus(error.message, "error")));

async function uploadCaptureZip(entries, statusEl, destination) {
  const url = (serverConfig.url || "").trim().replace(/\/+$/, "");
  if (!isSecureServer(url)) throw new Error("Connect to Captcher over HTTPS first.");
  const token = (serverConfig.token || "").trim();
  if (!token) throw new Error("Reconnect to Captcher, then retry. Your capture is kept.");
  const accountChanged = destination && (destination.url !== serverConfig.url ||
    (destination.email ? destination.email !== serverConfig.email : destination.token !== token));
  if (accountChanged && !confirm(`Send this recording to ${serverConfig.email || "the connected account"} at ${hostOf(url)}? Its original destination was ${destination.email || "a different connection"} at ${hostOf(destination.url)}.`)) {
    throw new Error("Destination change cancelled. Your recording is kept.");
  }
  const zip = await zipTool.buildZip(entries);
  // Refuse here rather than at the far end. The deadline scales with size and
  // tops out at ten minutes, so an oversized capture otherwise uploads for the
  // full ten and then earns a 413 — the worst possible way to learn this.
  if (maxUploadBytes && zip.size > maxUploadBytes) {
    throw new Error(
      `this walkthrough is ${formatSize(zip.size)} and the server accepts up to ` +
      `${formatSize(maxUploadBytes)}. Record it as two shorter walkthroughs, or ` +
      `drop the heaviest pages and capture those separately.`);
  }
  statusEl.textContent = `Sending ${formatSize(zip.size)}…`;
  const form = new FormData();
  form.append("capture_zip", zip, "capture.zip");

  const timeoutMs = uploadTimeoutFor(zip.size);
  log(`upload: POST ${url}/api/upload — ${formatSize(zip.size)}, ` +
      `${Math.round(timeoutMs / 1000)}s deadline`);

  let response;
  try {
    response = await fetch(`${url}/api/upload`, {
      method: "POST",
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        // Which build produced this capture. The server cannot ask, and after
        // the Web Store release it cannot assume either.
        "X-Captcher-Recorder": chrome.runtime.getManifest().version
      },
      body: form,
      credentials: "omit",
      redirect: "error",
      // Covers the response body too: the signal stays live after fetch()
      // resolves, so a server that sends headers and then stalls is caught.
      signal: AbortSignal.timeout(timeoutMs)
    });
  } catch (error) {
    if (error && (error.name === "TimeoutError" || error.name === "AbortError")) {
      throw new Error(
        `the server did not respond within ${Math.round(timeoutMs / 1000)}s. ` +
        `Check that it is running and reachable at ${url}.`);
    }
    // fetch() rejects with a bare "Failed to fetch" for DNS, refused
    // connections, and CORS — none of which say anything useful on their own.
    throw new Error(`could not reach ${url} (${error.message || error}).`);
  }

  const data = await response.json().catch(() => ({}));
  if (response.status === 401 || response.status === 403) {
    await disconnectServer(token);
    throw new Error("This connection was rejected. Sign in and reconnect, then retry; your recording is kept.");
  }
  if (!response.ok) {
    throw new Error(data.error || `the server rejected it (HTTP ${response.status})`);
  }
  if (!data || typeof data.walkthrough_id !== "string" || !data.walkthrough_id.trim()) {
    throw new Error("The server returned no draft identifier. Your capture is kept; check the library before retrying.");
  }
  return data;
}

el.send.addEventListener("click", async () => {
  if (!lastResult) return;
  // Nothing to save before sending: the connection is written by the service
  // worker when the browser is paired, and this surface has had no URL or
  // token fields since. The saveServerSettings() call that used to sit here
  // outlived them by several commits, and being outside the try below it threw
  // a ReferenceError that killed this handler on its first line — silently,
  // because an unhandled rejection has nowhere to surface on this panel.
  sendBusy = true;
  render();
  el.sendStatus.textContent = "Packaging…";
  el.sendStatus.className = "";
  try {
    const manifest = {
      schema: "page-capture-walkthrough@1",
      title: lastResult.title || "Captured page",
      url: lastResult.url,
      createdAt: new Date().toISOString(),
      initialCapture: {
        folder: "step-000",
        ...(lastResult.screenshot ? { screenshot: "screenshot.png" } : {}),
        ...(lastResult.viewport ? { viewport: lastResult.viewport } : {})
      },
      steps: []
    };
    const data = await uploadCaptureZip([
      { name: "walkthrough.json", data: JSON.stringify(manifest, null, 2) },
      { name: "step-000/page.html", data: lastResult.content },
      ...(lastResult.screenshot
        ? [{ name: "step-000/screenshot.png", data: lastResult.screenshot }] : [])
    ], el.sendStatus, lastResult.destination);
    el.sendStatus.textContent = "Sent to Captcher — saved as a draft.";
    el.sendStatus.className = "ok";
    log(`sent to Captcher — draft ${data.walkthrough_id} (${data.player_url})`, "mark");
  } catch (error) {
    el.sendStatus.textContent = `Send failed: ${error.message || error}`;
    el.sendStatus.className = "error";
    log(`send FAILED — ${error.message || error}`, "err");
  } finally {
    // Must clear here: render() derives both the Send button and the busy bar
    // from this, so leaving it set disables Send for the rest of the session.
    sendBusy = false;
    render();
  }
});

// ---------------------------------------------------------------------------
// Walkthrough mode — multi-step capture with action recording.
//
// "Start recording" captures the current page as step-000 (the manifest's
// initialCapture) and registers recorder.js as a content script for the
// duration of the walkthrough; it reports every click/select/input back here.
// Each completed navigation in the recorded tab captures the new page as
// step-NNN with the actions recorded since the previous capture attached —
// the shape ingest.py expects (an action belongs to the page it was
// performed ON, i.e. the capture taken before it). "Finish & send" packages
// walkthrough.json plus every page and uploads it through uploadCaptureZip.
// Walkthrough state lives in panel memory: closing the panel loses an unfinished
// walkthrough. (Buffering to IndexedDB would survive it, but is not worth the
// complexity yet.)
// ---------------------------------------------------------------------------
let walkthrough = null;
let recordingPort = null;
let recordingHeartbeat = null;
let cancelRecorderStart = null;

async function registerRecorder(tabId) {
  const wt = walkthrough;
  if (!wt) throw new Error("The recording was cancelled.");
  const port = chrome.runtime.connect({ name: "sc-recording-panel" });
  recordingPort = port;
  wt.sessionId = crypto.randomUUID();
  wt.recordingStopped = false;
  await new Promise((resolve, reject) => {
    let ready = false;
    const deadline = setTimeout(() => {
      reject(new Error("The page did not start its recorder. Try reloading the page."));
      if (recordingPort === port) unregisterRecorder();
    }, 15000);
    cancelRecorderStart = () => {
      clearTimeout(deadline);
      if (!ready) reject(new Error("The recording was cancelled."));
    };
    const ended = () => {
      clearTimeout(deadline);
      if (!ready) reject(new Error("The recording session ended before the page was ready."));
      if (recordingPort !== port) return;
      recordingPort = null;
      cancelRecorderStart = null;
      clearInterval(recordingHeartbeat);
      recordingHeartbeat = null;
      wt.recordingStopped = true;
      if (walkthrough === wt) {
        el.wtStatus.textContent = "Recording stopped. Finish & submit keeps the captured pages, or discard and start again.";
        render();
      }
    };
    port.onDisconnect.addListener(ended);
    port.onMessage.addListener((message) => {
      if (message?.type === "error") {
        clearTimeout(deadline);
        reject(new Error(message.error));
        ended();
        port.disconnect();
      } else if (message?.type === "stopped") {
        ended();
        port.disconnect();
      } else if (message?.type === "ready" && message.sessionId === wt.sessionId && message.tabId === tabId) {
        ready = true;
        clearTimeout(deadline);
        resolve();
      }
    });
    recordingHeartbeat = setInterval(() => {
      try { port.postMessage({ type: "heartbeat" }); } catch { ended(); }
    }, 5000);
    port.postMessage({ type: "start", sessionId: wt.sessionId, tabId });
  });
}

async function unregisterRecorder() {
  cancelRecorderStart?.();
  cancelRecorderStart = null;
  const port = recordingPort;
  recordingPort = null;
  clearInterval(recordingHeartbeat);
  recordingHeartbeat = null;
  if (walkthrough) walkthrough.recordingStopped = true;
  if (port) {
    try { port.postMessage({ type: "stop" }); } catch { /* already closed */ }
    port.disconnect();
  }
}

// One derived state, never stored. `walkthrough`, `captureBusy` and
// `lastResult` already determine what the panel should look like; the old code
// recomputed a different boolean from them at each of eleven call sites.
//
// `error` deliberately is NOT a state: a failed upload keeps the walkthrough
// alive so Finish can be retried, so an error is a class on a status line, not
// a layout.
function computeState() {
  if (!walkthrough) return lastSubmission ? "sent" : "idle";
  if (walkthrough.uploading) return "uploading";
  if (!walkthrough.initial) return "starting";
  if (captureBusy) return "capturing";
  return "recording";
}

function serverConfigured() {
  return !!(serverConfig.url || "").trim() && !!(serverConfig.token || "").trim();
}

// Is this person still being SET UP? Deliberately not the same question as
// "is there a connection", which is serverConfigured() and drives what the
// controls can do. This one drives what the panel looks like, and the two
// answers differ for exactly one moment: pairing succeeds, so the connection is
// real — but they are still looking at the setup card while "Connected" is held
// long enough to read. Flipping the presentation there is a visible fault: the
// Appearance and Recording cards pop into view underneath them and the screen
// retitles itself from "Set up the recorder" to "Settings", all while they are
// reading a sentence about being connected.
//
// DERIVED ON EVERY RENDER, NEVER LATCHED. It used to be a latch — set true
// whenever the connection looked absent, cleared in exactly one place — and
// that was wrong twice over.
//
// panel.js calls render() once at parse time, and the storage read that loads
// the connection is asynchronous, so at that first render every panel looks
// unconnected. A latch therefore caught every well-connected browser on the way
// up and never let go: the recording surface hid its Start button behind a
// Connect prompt for a browser that was already connected, and pressing Connect
// could not help, because the only thing that cleared the latch was a pairing
// that was not needed. A deadlock reachable by opening the panel on an ordinary
// page after reloading the extension, which is to say: most of the time.
//
// The one state that is genuinely not "is there a connection" is the moment
// after pairing succeeds. That is what holdingConnected is for, and only
// finishConnect sets or clears it.
let holdingConnected = false;
function syncSetupMode() {
  document.body.dataset.setup = String(!serverConfigured() || holdingConnected);
}

function render() {
  const state = computeState();
  const live = !!walkthrough;
  const busy = captureBusy || !!(walkthrough && walkthrough.uploading);

  document.body.dataset.state = state;
  document.body.dataset.configured = String(serverConfigured());
  syncSetupMode();
  document.body.dataset.busy = String(busy || sendBusy);

  // Enablement: one assignment per control, each reading only `state`.
  el.wtTitle.disabled = !(state === "idle" || state === "sent");
  const destinationNote = document.getElementById("capture-destination");
  destinationNote.textContent = serverConfigured() ? `Sends to ${serverConfig.email || "your connected account"} at ${hostOf(serverConfig.url)} when you submit.` : "Connect your Captcher account to record.";
  document.getElementById("connect-reset").hidden = !serverConfigured();
  el.wtStart.disabled = !(state === "idle" || state === "sent") || busy || !serverConfigured();
  el.wtCaptureStep.disabled = state !== "recording" || !!walkthrough?.recordingStopped;
  el.wtFinish.disabled = state !== "recording";
  el.wtDiscard.disabled = !(state === "starting" || state === "recording" || state === "capturing");

  el.capture.disabled = busy || live;   // preserves the old `active || captureBusy`
  el.download.disabled = !lastResult;
  el.send.disabled = live || !lastResult || !serverConfigured() || sendBusy;
  // The connect button is NOT driven from here. It is a function of what is in
  // the active tab rather than of capture state, and renderConnect() owns it;
  // two writers would fight over the label mid-connection.

  // Single-page capture must not start on top of a running capture: both paths
  // share captureBusy, t0, and the input shield.
  mi.single.disabled = busy;

  // Live readout only. render() must never touch #wt-status — that line is the
  // error channel, and this runs on every recorded action.
  if (live) {
    const pages = (walkthrough.initial ? 1 : 0) + walkthrough.steps.length;
    el.recTitle.textContent = walkthrough.title;
    el.countPages.textContent = `${pages} page${pages === 1 ? "" : "s"}`;
    el.countActions.textContent =
      `${walkthrough.pendingActions.length} action${walkthrough.pendingActions.length === 1 ? "" : "s"}`;
    // Thumbnails, newest capture at the top. Still an add-only reconcile:
    // entries only ever grow during a recording, and rebuilding innerHTML
    // here would re-decode every image on each recorded action — each new
    // entry is PREPENDED, so the latest capture is always the first thumb.
    const entries = walkthrough.initial
      ? [walkthrough.initial, ...walkthrough.steps] : [];
    for (let i = el.thumbs.childElementCount; i < entries.length; i++) {
      el.thumbs.prepend(thumbNode(entries[i], i));
    }
  } else if (el.thumbs.childElementCount) {
    // Recording over (finished or discarded): free the blob URLs with it.
    el.thumbs.querySelectorAll("img").forEach((img) => URL.revokeObjectURL(img.src));
    el.thumbs.replaceChildren();
  }
}

// One thumbnail: the step's capture-time screenshot over a mono caption. The
// blob URL is created once per entry and cached on it; render()'s clear path
// revokes them when the walkthrough ends.
function thumbNode(entry, index) {
  const wrap = document.createElement("div");
  wrap.className = "thumb";
  const cap = document.createElement("div");
  cap.className = "thumb-cap";
  const folder = entry.folder || `step-${String(index).padStart(3, "0")}`;
  cap.textContent = folder + (entry.title ? ` — ${entry.title}` : "");
  if (entry.screenshot) {
    if (!entry.thumbUrl) entry.thumbUrl = URL.createObjectURL(entry.screenshot);
    const img = document.createElement("img");
    img.src = entry.thumbUrl;
    img.alt = cap.textContent;
    wrap.appendChild(img);
  } else {
    cap.textContent += " (no screenshot)";
  }
  wrap.appendChild(cap);
  return wrap;
}

el.wtStart.addEventListener("click", async () => {
  if (walkthrough || captureBusy) return;
  cancelSentNotice();      // leave the "sent" state, and stop its timer
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (walkthrough || captureBusy) return; // another Start may have won the await
  if (!tab || !/^https?:/.test(tab.url || "")) {
    el.wtStatus.textContent = "The active tab can't be recorded (open a normal web page).";
    el.wtStatus.className = "error";
    return;
  }
  el.wtStatus.className = "";
  walkthrough = {
    title: el.wtTitle.value.trim() || tab.title || "Untitled walkthrough",
    // The tab steps are currently captured from. It moves — see followTab.
    tabId: tab.id,
    // Every tab this flow has opened — what keeps the following from
    // wandering off it — and the tabs whose *current document* has already
    // been queued for capture. Seeded with this tab: step-000 below is it.
    tabIds: new Set([tab.id]),
    queuedDocs: new Set([tab.id]),
    initial: null,
    steps: [],
    pendingActions: [],
    destination: { ...serverConfig },
    busy: Promise.resolve() // serializes navigation captures
  };
  const wt = walkthrough;
  render();
  log(`recording started — "${walkthrough.title}" on ${shortUrl(tab.url)}`, "mark");
  try {
    await registerRecorder(tab.id);
    if (walkthrough !== wt || wt.recordingStopped) return;
    const liveSig = await liveSignatureOf(tab.id);
    const result = await performCapture(tab);
    if (walkthrough !== wt) return; // discarded or replaced while capturing
    walkthrough.initial = { content: result.content, title: result.title,
                            signature: pageSignature(result.content),
                            liveSignature: liveSig,
                            screenshot: result.screenshot, viewport: result.viewport };
    log("recording: step-000 captured — click through the flow; page loads are captured automatically, use Capture step for modals/popups", "mark");
  } catch (error) {
    if (walkthrough !== wt) return;
    log(`walkthrough start FAILED — ${error.message || error}`, "err");
    await discardWalkthrough(true);
    el.wtStatus.textContent = `Could not start: ${error.message || error}`;
    el.wtStatus.className = "error";
  }
  render();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!walkthrough || !walkthrough.initial || walkthrough.recordingStopped) return;
  // A new document is on its way, so whatever was captured from this tab no
  // longer stands for what is in it. Tracked for every tab the flow owns, not
  // just the one being followed — a tab can load while the flow is elsewhere,
  // and that is exactly the page followTab has to capture on the way back.
  if (changeInfo.status === "loading") return void walkthrough.queuedDocs.delete(tabId);
  if (tabId !== walkthrough.tabId) return;
  if (changeInfo.status !== "complete" || !/^https?:/.test(tab.url || "")) return;
  queueNewDocument(tabId, `navigation — ${shortUrl(tab.url)}`);
});

// ---------------------------------------------------------------------------
// Following the flow across tabs.
//
// A step in a real product often opens a new tab or a popup window — a
// target=_blank link, window.open, an OAuth or payment hand-off. The
// walkthrough has moved there, and pinning it to the tab Start was pressed on
// meant every capture after that snapshotted the page the user had left.
//
// It follows **tabs this flow opened**, not whatever is in front. Those two
// are the same thing right up until somebody checks their email mid-recording,
// and then the difference is a walkthrough with their inbox in it. Chrome
// tells us which is which: `openerTabId` is set when a page opens a tab, and
// is absent when a person opens one.
//
// The recorder needs no help to get there — registerRecorder matches every
// http(s) document at document_start, so a new tab arrives already carrying
// recorder.js and shield.js. All that was ever missing is which tab counts.
// ---------------------------------------------------------------------------
chrome.tabs.onCreated.addListener((tab) => {
  if (!walkthrough || !walkthrough.initial || walkthrough.recordingStopped) return;
  if (tab.openerTabId == null || !walkthrough.tabIds.has(tab.openerTabId)) {
    // Worth a line either way: a flow that opens tabs in some way Chrome does
    // not attribute would otherwise just silently stop capturing, and this is
    // the only place that would have said why.
    log(`recording: a new tab opened, but not from the recorded page — not following it${
      tab.openerTabId == null ? " (no opener)" : ""}`);
    return;
  }
  walkthrough.tabIds.add(tab.id);
  log(`recording: the page opened a new tab — following the flow into it`, "mark");
});

// A tab becoming active is the signal, not a tab being created: a background
// tab (ctrl-click) is not a screen anyone is looking at yet, and the capture
// has to be of a screen somebody saw.
chrome.tabs.onActivated.addListener(({ tabId }) => followTab(tabId, "switched to"));

// onActivated does not fire when the *window* changes, which is exactly what a
// popup window does. Same handler, so a window switch and a tab switch cannot
// drift apart.
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (!walkthrough || windowId === chrome.windows.WINDOW_ID_NONE) return;
  const [tab] = await chrome.tabs.query({ active: true, windowId }).catch(() => []);
  if (tab) followTab(tab.id, "moved to the window showing");
});

async function followTab(tabId, why) {
  if (!walkthrough || !walkthrough.initial || walkthrough.recordingStopped) return;
  if (!walkthrough.tabIds.has(tabId) || tabId === walkthrough.tabId) return;
  const tab = await chrome.tabs.get(tabId).catch(() => null);
  if (!tab) return;
  walkthrough.tabId = tabId;
  log(`recording: ${why} ${shortUrl(tab.url)} — steps now come from this tab`, "mark");
  // A tab adopted into the background finished loading while nothing was
  // following it, so onUpdated skipped it; this is the first moment its page
  // has been on screen. queueNewDocument is what keeps that from also
  // re-capturing a tab being switched back to unchanged — going back to a
  // page is not by itself a new screen, and Capture step covers the times
  // it is.
  if (tab.status === "complete" && /^https?:/.test(tab.url || "")) {
    queueNewDocument(tabId, `new tab — ${shortUrl(tab.url)}`);
  }
}

// Modals and popups change the page without a navigation, so nothing fires
// tabs.onUpdated — "Capture step" snapshots the current state on demand.
// The pending actions (e.g. the click that opened the modal) attach to this
// capture, which is exactly the shape ingest expects.
el.wtCaptureStep.addEventListener("click", () => {
  if (!walkthrough || !walkthrough.initial || walkthrough.recordingStopped || captureBusy) return;
  // alwaysKeep: pressing this button IS the judgement that the page changed.
  // Both skip gates compare visible *text*, so the states this button exists
  // for — a modal over an unchanged page, a popover, an expanded panel — look
  // identical to them, and an unforced capture here was silently discarded as
  // a duplicate. A person asking for a capture outranks the change detector.
  queueStepCapture("manual — modal/popup or in-page change",
                   walkthrough.tabId, false, true);
});

// Queue a capture for a page *load*, once. Both onUpdated and followTab can
// be the first to see a loaded page — a popup that finishes loading before it
// is focused reaches both — and without this the walkthrough gets the same
// screen twice running. Deliberately not used by Capture step or the change
// detector: those exist to capture a page whose document has *not* changed.
//
// This is also the only path that waits for the page to settle first, because
// it is the only one that fires off a machine's idea of "loaded" rather than a
// person's idea of "ready".
function queueNewDocument(tabId, reason) {
  // Both outcomes are logged: navigation/tab-focus triggers were the one
  // capture source with no audit trail, and a load loop (a page that keeps
  // firing loading→complete) is invisible without the queued line repeating.
  if (walkthrough.queuedDocs.has(tabId)) {
    log(`trigger: ${reason} (tab ${tabId}) → this document is already queued or captured — ignored`);
    return;
  }
  log(`trigger: ${reason} (tab ${tabId}) → capture queued`);
  queueStepCapture(reason, tabId, true);
}

// The tab is resolved here, at queue time, and carried through — not read
// again when the capture's turn comes. The step is the state of the page that
// triggered it, and now that the walkthrough follows tabs, "the current tab"
// can be a different one by the time the queue drains. It is also what keeps
// the speculative hold and the capture it belongs to on the same page.
function queueStepCapture(reason, tabId = walkthrough.tabId, settle = false,
                          alwaysKeep = false) {
  if (!walkthrough || walkthrough.recordingStopped) return;
  if (walkthrough.failedCapture && !alwaysKeep) return;
  walkthrough.queuedDocs.add(tabId);
  // Freeze the page now rather than when this capture's turn comes: the step
  // is the state the page is in at *this* moment, and a capture waiting behind
  // another one would otherwise snapshot whatever the user did in the meantime.
  // Speculative, so it self-releases (shield.js) if its turn never arrives;
  // performCapture takes it over, and its finally is what gives the page back.
  setCaptureShield(tabId, "hold", QUEUE_HOLD_MS);
  const wt = walkthrough;
  walkthrough.busy = walkthrough.busy.then(() => {
    if (walkthrough !== wt) return;
    return captureWalkthroughStep(reason, tabId, settle, alwaysKeep)
      .catch((error) => {
        log(`walkthrough: step capture FAILED — ${error.message || error}`, "err");
        if (walkthrough === wt) {
          wt.queuedDocs.delete(tabId);
          el.wtStatus.textContent = "Capture failed; actions are kept. Fix the page and use Capture step or Finish to retry.";
          el.wtStatus.className = "error";
        }
      })
      .finally(() => {
        // captures churn the DOM; give the detector a quiet period after
        if (walkthrough === wt) wt.autoCooldownUntil = Date.now() + 2500;
      });
  });
}

// ---------------------------------------------------------------------------
// Waiting for a loaded page to actually be a page.
//
// `tabs.onUpdated` reports "complete" when the *document* is done, which for
// anything that renders client-side is well before there is anything worth
// capturing — the snapshot came out half-built, and pressing Capture step a
// moment later got the whole screen. So the load path now waits for the page
// to stop changing, which is the same wait recorder.js's change detector
// already does before it reports (its QUIET_MS, and for the same reason).
//
// Waiting is only safe because the page is already frozen: queueStepCapture
// puts the shield up before this runs, so nothing can be clicked into the gap,
// and the modal already says "Getting ready to capture" while it happens.
// ---------------------------------------------------------------------------
const SETTLE_QUIET_MS = 600;   // matches recorder.js's QUIET_MS — same judgement
const SETTLE_CAP_MS = 5000;    // a carousel or a clock never goes quiet

async function settlePage(tabId) {
  const started = Date.now();
  try {
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId },
      func: waitForQuietPage,
      args: [SETTLE_QUIET_MS, SETTLE_CAP_MS]
    });
    if (result && result.cappedOut) {
      log(`page never went quiet — capturing after ${Date.now() - started}ms anyway ` +
          `(something on it animates; if the capture looks half-built, use Capture step)`, "err");
    } else {
      log(`page settled in ${Date.now() - started}ms`);
    }
  } catch (error) {
    // Never fatal. A capture of a page we could not wait for still beats none.
    log(`could not wait for the page to settle (${error.message || error}) — capturing now`, "err");
  }
}

// Runs inside the page (isolated world). Resolves once the DOM has been still
// for `quietMs`, or after `capMs` regardless — waiting forever for a page with
// a ticker on it would be worse than capturing it mid-animation.
//
// Mutations inside the input shield don't count. Its spinner ticks while this
// is running, and it would otherwise be the very thing keeping the page "busy"
// — the shield would hold the capture open forever, waiting for itself.
// Attributes are not observed at all: pages toggle classes constantly without
// rendering anything new, and content arriving is a childList change.
function waitForQuietPage(quietMs, capMs) {
  return new Promise((resolve) => {
    const started = Date.now();
    let quiet;
    let cap;
    let observer;
    const finish = (cappedOut) => {
      clearTimeout(quiet);
      clearTimeout(cap);
      if (observer) observer.disconnect();
      resolve({ ms: Date.now() - started, cappedOut: cappedOut === true });
    };
    const isShield = (node) => {
      const element = node && node.nodeType === 1 ? node : node && node.parentElement;
      return !!(element && element.closest && element.closest(".single-file-ui-element"));
    };
    // Two shapes, and both are needed. A change *inside* the shield (its card
    // swapping text) is ours by its target. The shield going up or coming down
    // is a childList change on <body>, whose target is not ours — so that one
    // has to match on what moved. Note the target test has to come first:
    // setting textContent removes a text node as well as adding one, and the
    // removed one has no parent left to trace back to the shield.
    const ours = (record) => {
      if (isShield(record.target)) return true;
      if (record.type !== "childList") return false;
      const touched = [...record.addedNodes, ...record.removedNodes];
      return touched.length > 0 && touched.every(isShield);
    };
    const start = () => {
      observer = new MutationObserver((records) => {
        if (records.every(ours)) return;
        clearTimeout(quiet);
        quiet = setTimeout(finish, quietMs);
      });
      observer.observe(document.documentElement, {
        childList: true, subtree: true, characterData: true
      });
      quiet = setTimeout(finish, quietMs);
    };
    // Armed before the readyState branch, not inside start(): a document that
    // never fires `load` would otherwise leave this promise pending forever,
    // and executeScript would hang the capture queue behind it with nothing to
    // time it out.
    cap = setTimeout(() => finish(true), capMs);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
  });
}

// What a capture is FOR, reduced to a comparable string: the page's visible
// text plus a count of its interactive elements. Byte-comparing serialized
// HTML cannot absorb the change detector's false positives on a live SPA —
// HubSpot injects survey widgets and styles between captures and the
// style-pruning pass retains different CSS each run, so two captures of the
// same screen are never byte-identical (a real recording shipped the same
// Companies list six times this way). Text is what the learner reads and what
// the authoring digest feeds the model; if neither it nor the set of controls
// changed, the screen teaches nothing new. Scripts/styles/meta are dropped
// before extraction so their churn cannot leak in.
// Time/date-shaped text is stripped from BOTH signature domains before
// comparison: pages re-render clocks and "Generated <time>" cards, and a
// minute tick would otherwise make two captures of the same screen sign
// differently — costing a full serialization on the first drift and landing
// a duplicate step when it happens between triggers. Deliberately narrow
// (clock times, month-name dates, ISO/slash dates, "N minutes ago"), NOT all
// digits: "7 companies" becoming "8 companies" is a real change. Defined once
// as a regex SOURCE because liveSignatureOf's injected function cannot close
// over panel variables — it receives this as an argument; keep them in
// lockstep.
const SIGNATURE_TIME_RE =
  "\\b\\d{1,2}:\\d{2}(?::\\d{2})?(?:\\s?[ap]\\.?m\\.?)?\\b" +
  "|\\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\\.?\\s+\\d{1,2}(?:,?\\s+\\d{4})?\\b" +
  "|\\b\\d{4}-\\d{2}-\\d{2}\\b" +
  "|\\b\\d{1,2}/\\d{1,2}/\\d{2,4}\\b" +
  "|\\b(?:an?|\\d+)\\s+(?:second|minute|hour|day|week|month|year)s?\\s+ago\\b" +
  // Abbreviated relative times and their zero point — HubSpot renders
  // "Refreshed just now" then "Refreshed 30s ago", both caught drifting by
  // the pre-check's diff log.
  "|\\bjust now\\b" +
  "|\\b\\d+\\s?(?:s|secs?|m|mins?|h|hrs?|d)\\s+ago\\b";

function pageSignature(html) {
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("script,style,link,meta,noscript,template")
      .forEach((n) => n.remove());
    const text = (doc.body ? doc.body.textContent : "").replace(/\s+/g, " ").trim()
      .replace(new RegExp(SIGNATURE_TIME_RE, "gi"), "#t");
    const controls = doc.querySelectorAll("a,button,input,select,textarea").length;
    const state = [...doc.querySelectorAll("input,textarea,select,img")].map(el =>
      [el.tagName, el.value || "", !!el.checked, el.tagName === "SELECT" ? [...el.selectedOptions].map(o => o.value) : null, el.getAttribute("src") || ""]);
    // Which controls are locked. A form switching from read-only to editable
    // (Mailwing's Duplicate) changes nothing else a signature can see, and
    // skipping that capture leaves the next steps on a page whose fields
    // take no input. Keep in lockstep with liveSignatureOf.
    const locks = [...doc.querySelectorAll("button,input,select,textarea")]
      .map(el => (el.matches(":disabled") ? "d" : "") + (el.readOnly ? "r" : "") || "-").join("");
    return `${controls} ${text} ${JSON.stringify(state)} ${locks}`;
  } catch {
    return html;   // parser failure: degrade to the old byte comparison
  }
}

// The live-DOM twin of pageSignature, cheap enough to run BEFORE the engine:
// same shape (control count + visible text), computed on a clone so nothing
// touches the page. Its values live in a different domain from
// pageSignature's (the serializer strips ads, recompresses, rewrites markup),
// so the two are never compared with each other — live compares against live,
// serialized against serialized.
async function liveSignatureOf(tabId) {
  try {
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId },
      func: (timeRe) => {
        const clone = document.body.cloneNode(true);
        clone.querySelectorAll(
          "script,style,link,meta,noscript,template,.single-file-ui-element")
          .forEach((n) => n.remove());
        const text = clone.textContent.replace(/\s+/g, " ").trim()
          .replace(new RegExp(timeRe, "gi"), "#t");
        const controls = clone.querySelectorAll("a,button,input,select,textarea").length;
        // Counted on the LIVE body, not the clone: a detached node has no
        // layout, so every element in one reads as rendered. This is the only
        // part of the signature that can see CSS, and it is what makes
        // "a modal opened over an unchanged page" a different page. The
        // markup is already there either way — a modal is display:none, not
        // absent — so text and the raw control count are identical open or
        // shut. getClientRects() rather than offsetParent, which is null for
        // position:fixed elements and would call every modal invisible.
        const visible = [...document.querySelectorAll(
          "a,button,input,select,textarea")]
          .filter((n) => !n.closest(".single-file-ui-element") &&
                         n.getClientRects().length).length;
        const state = [...document.querySelectorAll("input,textarea,select,img")]
          .filter(el => !self.scSensitive?.isSensitive(el))
          .map(el => [el.tagName, el.value || "", !!el.checked,
            el.tagName === "SELECT" ? [...el.selectedOptions].map(o => o.value) : null,
            el.getAttribute("src") || ""]);
        // see pageSignature: which controls are locked, in the same shape
        const locks = [...document.querySelectorAll("button,input,select,textarea")]
          .filter((n) => !n.closest(".single-file-ui-element"))
          .map(el => (el.matches(":disabled") ? "d" : "") + (el.readOnly ? "r" : "") || "-").join("");
        return `${controls} ${visible} ${text} ${JSON.stringify(state)} ${locks}`;
      },
      args: [SIGNATURE_TIME_RE]
    });
    return typeof result === "string" ? result : null;
  } catch {
    return null;   // tab gone or injection refused — never block the capture
  }
}

// Did a control the person clicked change state since they clicked it? The
// recorder stamps each click with the control's class/aria/checked state as
// it was before the page reacted (recorder.js controlState — keep the two in
// lockstep). A switched tab or toggle can leave the page's text identical,
// which both skip gates below read as "nothing happened".
async function clickedControlChanged(tabId, actions) {
  const probes = actions.filter((a) => a.type === "click" && a.selector &&
                                       typeof a.state === "string" && !a.framePath)
                        .map((a) => [a.selector, a.state]);
  if (!probes.length) return false;
  try {
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId },
      func: (probes) => probes.some(([selector, before]) => {
        let el;
        try { el = document.querySelector(selector); } catch { return false; }
        if (!el) return false;
        const now = [el.className && typeof el.className === "string" ? el.className : "",
          ...["aria-pressed", "aria-selected", "aria-expanded", "aria-checked", "aria-current"]
            .map((a) => el.getAttribute(a) || ""),
          "checked" in el ? String(!!el.checked) : ""].join("|");
        return now !== before;
      }),
      args: [probes]
    });
    return result === true;
  } catch {
    return false;
  }
}

async function captureWalkthroughStep(reason, tabId, settle, alwaysKeep) {
  const wt = walkthrough;
  if (!wt) return;
  const target = tabId == null ? wt.tabId : tabId;
  const actions = wt.pendingActions.slice();
  try {
  log(`walkthrough: capturing (${reason}, tab ${target}) — ${actions.length} action(s) from the previous page attached`, "mark");
  const tab = await chrome.tabs.get(target);
  if (settle) await settlePage(target);
  if (walkthrough !== wt) return; // discarded while settling

  // Cheap pre-check, BEFORE the engine: if the page's visible content hasn't
  // changed since the last kept capture, a false trigger costs a quiet
  // ~100ms here instead of a full serialization plus the on-page capture
  // modal — which is exactly what made a churn-y SPA raise the overlay over
  // and over while every one of those captures ended up skipped anyway. The
  // serialized-signature skip below stays as the backstop for pages where
  // the live probe fails. `alwaysKeep` bypasses both, as before.
  const liveSig = await liveSignatureOf(target);
  if (walkthrough !== wt) return;
  const prevEntry = wt.steps.length
    ? wt.steps[wt.steps.length - 1]
    : wt.initial;
  const controlChanged = !alwaysKeep && prevEntry && actions.length
    ? await clickedControlChanged(target, actions) : false;
  if (walkthrough !== wt) return;
  if (controlChanged) log("pre-check: a control the person clicked changed state — keeping this capture");
  if (!alwaysKeep && prevEntry && !controlChanged) {
    if (liveSig && prevEntry.liveSignature === liveSig) {
      if (actions.length) {
        log("walkthrough: page unchanged (pre-check) — skipped before serializing; its actions stay pending", "mark");
      } else {
        log("walkthrough: page unchanged (pre-check) — skipped before serializing", "mark");
      }
      // The hold this queued capture raised has no capture to hand over to.
      await setCaptureShield(target, "release");
      render();
      return;
    }
    // A miss with a previous anchor is worth explaining: the drifting text is
    // usually one ticking widget, and this line is how it gets identified.
    if (!liveSig) {
      log("pre-check: live probe failed — serializing to compare");
    } else if (prevEntry.liveSignature) {
      log("pre-check: page content changed — serializing to compare");
    }
  }

  const result = await performCapture(tab);
  if (walkthrough !== wt) return; // discarded while capturing
  // A snapshot that SHOWS the same thing as the previous one teaches nothing
  // and (before this check) shipped a full extra page per change-detector
  // false positive. Compared by signature, not bytes — see pageSignature.
  // Unchanged + no actions simply never happened; unchanged WITH actions
  // re-queues them for the next real capture, which is the same page state by
  // definition. `alwaysKeep` is the finish-time trailing-actions capture,
  // whose actions have no next capture to wait for.
  const signature = pageSignature(result.content);
  const previous = wt.steps.length
    ? wt.steps[wt.steps.length - 1].signature
    : wt.initial && wt.initial.signature;
  // pageSignature parses serialized HTML in a document that is never laid out,
  // so unlike the live probe it cannot see CSS at all: a modal open and the
  // same modal shut serialize to the same visible text and the same control
  // count, differing only in a class attribute. Making it attribute-sensitive
  // would re-introduce exactly the SPA churn these gates exist to absorb, so
  // the visibility judgement stays where it can actually be made — on the live
  // page — and a positive "this changed" from the probe outranks the
  // serialized comparison. A probe that failed (null) changes nothing, and the
  // serialized check stays the backstop it was built to be.
  const liveChanged = !!(liveSig && prevEntry && prevEntry.liveSignature &&
                         liveSig !== prevEntry.liveSignature);
  if (signature === previous && !alwaysKeep && !liveChanged && !controlChanged) {
    if (actions.length) {
      log("walkthrough: page unchanged since the last capture — skipped; its actions stay pending", "mark");
    } else {
      log("walkthrough: same visible content as the previous capture — skipped", "mark");
    }
    // Re-anchor the pre-check: the serialized comparison just proved this is
    // the same page, so whatever live-text drift made the pre-check miss (a
    // ticking timestamp, a widget re-rendering) becomes the new baseline.
    // Without this, one drift makes every later duplicate pay for a full
    // serialization; with it, the NEXT one skips before the engine runs.
    if (prevEntry && liveSig) prevEntry.liveSignature = liveSig;
    render();
    return;
  }
  const folder = `step-${String(wt.steps.length + 1).padStart(3, "0")}`;
  log(`walkthrough: ${folder} saved`, "mark");
  wt.steps.push({ folder, content: result.content, title: result.title, actions,
                           signature, liveSignature: liveSig,
                           screenshot: result.screenshot, viewport: result.viewport });
  const saved = new Set(actions);
  wt.pendingActions = wt.pendingActions.filter(action => !saved.has(action));
  wt.failedCapture = null;
  render();
  } catch (error) {
    if (walkthrough === wt) wt.failedCapture = { reason, tabId: target, settle: false, alwaysKeep: true };
    throw error;
  }
}

// Trailing actions whose tab was closed before Finish have no page left to
// capture. They land on a repeat of the last kept page — exactly what an
// unchanged final capture would have produced — instead of blocking Finish.
function finishOnLastPage(wt, why) {
  const last = wt.steps.length ? wt.steps[wt.steps.length - 1] : wt.initial;
  if (!last) return;
  const folder = `step-${String(wt.steps.length + 1).padStart(3, "0")}`;
  wt.steps.push({ folder, content: last.content, title: last.title, actions: wt.pendingActions.slice(),
                  signature: last.signature, liveSignature: last.liveSignature,
                  screenshot: last.screenshot, viewport: last.viewport });
  wt.pendingActions = [];
  wt.failedCapture = null;
  log(`walkthrough: ${folder} saved from the last captured page — ${why}`, "mark");
}

el.wtFinish.addEventListener("click", async () => {
  if (!walkthrough || walkthrough.uploading) return;   // re-entrancy guard
  // Lives on the walkthrough, not as a module variable, so it cannot outlive
  // one — "stuck uploading forever" is then structurally impossible.
  const wt = walkthrough;
  wt.uploading = true;
  render();
  el.wtStatus.className = "";
  el.wtStatus.textContent = "Finishing…";
  try {
    await unregisterRecorder(); // freeze the event stream before draining the queue
    await wt.busy; // let an in-flight navigation capture land
    if (walkthrough !== wt) return;
    // A closed tab cannot be captured. Retrying it would fail on every Finish
    // and leave Discard as the only way out, losing every captured page.
    const tabGone = async (id) => id == null || !(await chrome.tabs.get(id).catch(() => null));
    if (wt.failedCapture) {
      const failed = wt.failedCapture;
      if (await tabGone(failed.tabId)) {
        log("walkthrough: the tab of the failed capture was closed — its actions go with the final step", "mark");
        wt.failedCapture = null;
      } else {
        await captureWalkthroughStep(failed.reason, failed.tabId, failed.settle, true);
      }
    }
    if (wt.pendingActions.length) {
      // Trailing actions that never triggered a navigation need a page to
      // attach to — capture the current state as the last step.
      // alwaysKeep: even an identical page must land, or the trailing actions
      // would have nothing to attach to
      if (await tabGone(wt.tabId)) finishOnLastPage(wt, "the recorded tab was closed");
      else await captureWalkthroughStep("final state, trailing actions", null, false, true);
    }
    if (!walkthrough.initial) throw new Error("the initial page was never captured.");
    // The per-step page `title` and the actions' url/docTitle/selector/
    // optionValue metadata are ADDITIVE fields on the same @1 schema — the
    // server ignores unknown keys, so old servers accept new captures and
    // new servers accept old ones. Bump the schema only for a breaking shape.
    const manifest = {
      schema: "page-capture-walkthrough@1",
      title: walkthrough.title,
      createdAt: new Date().toISOString(),
      initialCapture: {
        folder: "step-000",
        ...(walkthrough.initial.title ? { title: walkthrough.initial.title } : {}),
        // Additive on @1, like title: a viewport screenshot of what the user
        // saw, for server-side render checking. Old servers ignore both.
        ...(walkthrough.initial.screenshot ? { screenshot: "screenshot.png" } : {}),
        ...(walkthrough.initial.viewport ? { viewport: walkthrough.initial.viewport } : {})
      },
      steps: walkthrough.steps.map((s) => ({
        folder: s.folder,
        files: {
          html: "page.html",
          ...(s.screenshot ? { screenshot: "screenshot.png" } : {})
        },
        ...(s.title ? { title: s.title } : {}),
        ...(s.viewport ? { viewport: s.viewport } : {}),
        // aid is panel-local plumbing (it correlates the recorder's late
        // effects report with its action); the wire carries everything else,
        // effects included — additive on @1 like the rest of the metadata
        actions: s.actions.map(({ aid, state, ...action }) => action)
      }))
    };
    const entries = [
      { name: "walkthrough.json", data: JSON.stringify(manifest, null, 2) },
      { name: "step-000/page.html", data: walkthrough.initial.content },
      ...(walkthrough.initial.screenshot
        ? [{ name: "step-000/screenshot.png", data: walkthrough.initial.screenshot }] : []),
      ...walkthrough.steps.flatMap((s) => [
        { name: `${s.folder}/page.html`, data: s.content },
        ...(s.screenshot ? [{ name: `${s.folder}/screenshot.png`, data: s.screenshot }] : [])
      ])
    ];
    el.wtStatus.textContent = "Packaging…";
    const data = await uploadCaptureZip(entries, el.wtStatus, wt.destination);
    // The wire sends `steps` as the array of draft step records, not a count —
    // interpolating it directly renders one "[object Object]" per step. Tolerate
    // either shape so a later wire change to a plain count can't regress this.
    const stepCount = Array.isArray(data.steps) ? data.steps.length : Number(data.steps) || 0;
    log(`walkthrough sent — draft ${data.walkthrough_id} (${stepCount} step${stepCount === 1 ? "" : "s"}, ${data.player_url})`, "mark");
    walkthrough = null;
    await unregisterRecorder();
    lastSubmission = { id: data.walkthrough_id, steps: stepCount };
    scheduleSentNoticeDismiss();
    el.wtTitle.value = "";
    render();
    el.sentSummary.textContent =
      `Sent to Captcher — ${stepCount} step${stepCount === 1 ? "" : "s"} saved as a draft.`;
    el.wtStatus.textContent = "";
    el.wtStatus.className = "";
    // The top status line still carries whatever the last step capture left
    // there ("Capturing…"); without this it sits above a finished send.
    setStatus("");
  } catch (error) {
    log(`walkthrough send FAILED — ${error.message || error}`, "err");
    el.wtStatus.textContent =
      `Send failed: ${error.message || error} — the walkthrough is kept; fix and Finish again.`;
    el.wtStatus.className = "error";
  } finally {
    // Without this, a failed upload freezes every control and the only way out
    // is Reset — which destroys the recording the retry was meant to save.
    // The success path already nulled `walkthrough`, hence the guard.
    if (walkthrough === wt) wt.uploading = false;
    render();
  }
});

// Discard destroys captured pages that cannot be recovered, so it confirms —
// Reset already did, and it is the less destructive of the two. The prompt is
// skipped when nothing has been captured yet, where there is nothing to lose.
el.wtDiscard.addEventListener("click", () => {
  if (walkthrough) {
    const pages = (walkthrough.initial ? 1 : 0) + walkthrough.steps.length;
    if (pages > 0 && !confirm(
      `Discard "${walkthrough.title}"? ${pages} captured page${pages === 1 ? "" : "s"} ` +
      `will be lost. To keep them, use Finish & Submit instead.`)) return;
  }
  discardWalkthrough();
});

async function discardWalkthrough(silent) {
  const had = walkthrough;
  walkthrough = null;
  await unregisterRecorder();
  // A queued capture's hold has no owner now, and nothing else would release
  // it before its deadline. Skipped mid-capture: that shield belongs to a run
  // whose own finally will free it, and unfreezing under it tears the snapshot.
  // Every tab the flow reached, not just the last one: a hold left on a tab
  // the flow has since moved off would sit there for its full deadline.
  if (had && !captureBusy) {
    for (const id of had.tabIds) await setCaptureShield(id, "release");
  }
  if (had && !silent) {
    const pages = (had.initial ? 1 : 0) + had.steps.length;
    log(`walkthrough discarded — "${had.title}" (${pages} captured page${pages === 1 ? "" : "s"} dropped)`, "mark");
    el.wtStatus.textContent = "";
    el.wtStatus.className = "";
  }
  render();
}

chrome.tabs.onRemoved.addListener(async (tabId) => {
  if (!walkthrough) return;
  walkthrough.tabIds.delete(tabId);
  walkthrough.queuedDocs.delete(tabId);
  if (tabId !== walkthrough.tabId) return;
  // A popup closing hands the flow back to the page that opened it, which is
  // the common shape — so look for somewhere to carry on before complaining.
  // Asking Chrome what is active now is deterministic; waiting for the
  // onActivated that follows a close is a race with this listener.
  const [active] = await chrome.tabs.query({ active: true, lastFocusedWindow: true }).catch(() => []);
  if (active && walkthrough.tabIds.has(active.id)) {
    walkthrough.tabId = null;   // so followTab sees a change
    return followTab(active.id, "the tab closed, back to");
  }
  log("recording: the recorded tab was closed — Finish & Submit keeps what was captured, or Discard", "err");
});

render();

// ---------------------------------------------------------------------------
// Runs inside the page (isolated world). Everything it observes is reported
// back with chrome.runtime.sendMessage({type:"rc-progress", ...}) — fire-and-forget
// so diagnostics can never block the capture itself.
// ---------------------------------------------------------------------------
function runCaptureInPage(options, lab, redactionId, captureUrl) {
  return self.scCapture.run(redactionId, async () => {
    const send = (m) => { try { chrome.runtime.sendMessage({ type: "rc-progress", ...m }); } catch { /* panel gone */ } };
    const heartbeat = setInterval(() => send({ stage: "heartbeat" }), 1000);
    let fetchSeq = 0;
    let inflight = 0;
    const AD_HOSTS = [
      "doubleclick.net", "googlesyndication.com", "google-analytics.com",
      "googletagmanager.com", "adnxs.com", "criteo.com", "taboola.com",
      "outbrain.com", "3lift.com", "rubiconproject.com", "pubmatic.com",
      "openx.net", "amazon-adsystem.com", "scorecardresearch.com", "moatads.com"
    ];
    const isAdUrl = (url) => {
      try {
        const host = new URL(url, location.href).hostname;
        return AD_HOSTS.some((d) => host === d || host.endsWith("." + d));
      } catch { return false; }
    };
    try {
      if (typeof singlefile === "undefined") {
        return { error: "singlefile is not defined — engine injection failed" };
      }
      self.scSensitive.verify(redactionId);
      send({ stage: "engine-ready" });

      singlefile.init({
        fetch: async (url) => {
          const seq = ++fetchSeq;
          const parsed = new URL(url, location.href);
          if (!["http:", "https:", "data:", "blob:"].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error("Unsupported resource URL.");
          if (lab?.skipAds && isAdUrl(url)) { send({ stage: "fetch-skipped", seq }); throw new Error("ad/tracker resource skipped"); }
          const controller = new AbortController();
          const signal = self.scCapture.signal(redactionId);
          const abort = () => controller.abort();
          signal.addEventListener("abort", abort, { once: true });
          const timer = setTimeout(abort, 15000);
          const started = Date.now();
          inflight++;
          send({ stage: "fetch-start", seq, url: parsed.origin, inflight });
          try {
            if (signal.aborted) abort();
            const response = await fetch(parsed.href, { credentials: "omit", redirect: "error", signal: controller.signal });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const limit = 32 * 1024 * 1024;
            if (Number(response.headers.get("content-length")) > limit) throw new Error("Resource exceeds 32 MB.");
            const reader = response.body?.getReader();
            if (!reader) throw new Error("Resource body unavailable.");
            const chunks = []; let size = 0;
            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                size += value.byteLength;
                if (size > limit) throw new Error("Resource exceeds 32 MB.");
                chunks.push(value);
              }
            } catch (error) { await reader.cancel().catch(() => {}); throw error; }
            const bytes = new Uint8Array(size); let offset = 0;
            for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
            send({ stage: "fetch-end", seq, url: parsed.origin, ms: Date.now() - started, via: "page" });
            return { status: response.status, headers: response.headers, arrayBuffer: async () => bytes.buffer };
          } catch (error) {
            send({ stage: "fetch-failed", seq, url: parsed.origin, error: "Resource unavailable, blocked or too large" });
            throw error;
          } finally {
            inflight--; controller.abort(); clearTimeout(timer); signal.removeEventListener("abort", abort);
          }
        }
      });

      const data = await singlefile.getPageData({
        ...options,
        blockScripts: true,
        onprogress: (event) => {
          try {
            const d = (event && event.detail) || {};
            send({
              stage: event.type,
              index: d.index,
              max: d.max,
              detail: d.step != null ? `step ${d.step}` : undefined
            });
          } catch { /* diagnostics must never break the capture */ }
        }
      });
      send({ stage: "serialization-complete", detail: `${data.content.length} chars` });

      // Missing/expired protection and refilled/replaced controls fail closed.
      const checked = self.scSensitive.scrub(data.content, redactionId);
      const title = self.scSensitive.scrub(data.title || "", redactionId).html;
      if (checked.hits) send({ stage: "redaction-repaired", detail: `${checked.hits}` });
      const url = self.scSensitive.scrub(captureUrl || "", redactionId).html;
      return { content: checked.html, title, url };
    } catch (error) {
      return { error: (error && error.message) || String(error) };
    } finally {
      clearInterval(heartbeat);
      send({ stage: "page-script-exit" });
    }
  });
}
