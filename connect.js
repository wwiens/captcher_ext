// Pairing, the extension's half. Injected into the Captcher tab by the
// side panel as soon as it knows the tab is Captcher (or on its Try again
// button), runs once, and asks the page for a one-time code.
//
// The extension is always the initiator, and that is the whole design. The page
// cannot start this: `announce.js` is registered only for the origin already
// saved in chrome.storage, so on a clean install nothing of ours is running on
// the app page — which is exactly when pairing is needed. Rather than have two
// paths, one of which cannot work when it matters, there is this one.
//
// `chrome.scripting.executeScript` with the `<all_urls>` host permission the
// capture engine already holds covers the injection. Nothing is left behind but
// a listener on a page that is about to be reloaded or navigated anyway.
(() => {
  "use strict";

  // Wire contract with the server repo's static/pair.js — which is loaded by
  // the shared toolbar, so every signed-in page can answer this.
  const PAIR_OFFER = "captcher:pair-offer";
  const PAIR_REQUEST = "captcher:pair-request";

  // The page has to mint a code against its own server before it can answer, so
  // this covers a round trip rather than just a postMessage. It is also the
  // deadline behind "this is a page with no toolbar on it" — a signed-out
  // /login, say — which does not announce itself; it simply never replies.
  const OFFER_TIMEOUT_MS = 6000;

  // Injection is idempotent — a Try again press, or two refreshes racing on the
  // same page — and two listeners would race to claim two codes.
  if (window.__captcherConnecting) return;
  window.__captcherConnecting = true;

  const done = (result) => {
    window.__captcherConnecting = false;
    // The panel is listening for this. If it has been closed in the meantime
    // the send rejects and there is nothing to do about it: the pairing itself
    // already succeeded or failed on its own terms.
    chrome.runtime.sendMessage({ type: "pair-status", ...result }).catch(() => {});
  };

  const timer = setTimeout(() => {
    window.removeEventListener("message", onMessage);
    done({
      ok: false,
      error: "This Captcher page did not answer. Sign in to Captcher in this tab, then try again."
    });
  }, OFFER_TIMEOUT_MS);

  function onMessage(event) {
    if (event.source !== window) return;
    const message = event.data;
    if (!message || message.type !== PAIR_OFFER) return;
    if (message.source !== "captcher-app") return;
    clearTimeout(timer);
    window.removeEventListener("message", onMessage);

    // The page answers with a code, or with why it has none. The second case
    // is the common one and is worth carrying verbatim: "log in to connect the
    // extension" is the actual next step, and a bare timeout would have said
    // only that nothing replied.
    if (typeof message.code !== "string" || !message.code) {
      return done({ ok: false,
                    error: message.error || "Captcher offered no key." });
    }

    // The worker reads the server address from `sender`, so nothing about it is
    // taken from the page.
    chrome.runtime.sendMessage({ type: "pair-claim", code: message.code })
      .then(result => done(result || { ok: false, error: "The extension did not answer." }))
      .catch(error => done({
        ok: false,
        error: "Could not reach the Captcher extension (" +
               ((error && error.message) || error) + ")."
      }));
  }

  window.addEventListener("message", onMessage);
  window.postMessage({ source: "captcher-extension", type: PAIR_REQUEST },
                     window.location.origin);
})();
