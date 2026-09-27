// One engine per document, shared by every panel. Closing the owning panel
// cancels network work and restores the form. A still-running serializer stays
// quarantined until it settles; reloading the page also destroys that engine.
(() => {
  if (self.scCapture) return;
  let owner = null;
  function clean(state) {
    self.scSensitive?.restoreAll(state.id);
    window.__labShield?.release();
    // Same-origin frames may have speculative holds from the recorder.
    const releaseFrames = root => {
      for (const el of root.querySelectorAll("*")) {
        // Chrome's API throws for SVG/MathML elements (see sensitive.js); an
        // unguarded icon would end the walk and strand every later frame hold.
        const shadow = el.namespaceURI === "http://www.w3.org/1999/xhtml"
          ? chrome.dom?.openOrClosedShadowRoot(el) : el.shadowRoot;
        if (shadow) releaseFrames(shadow);
        if (/^(IFRAME|FRAME)$/.test(el.tagName)) {
          try { el.contentWindow.__labShield?.release(); if (el.contentDocument) releaseFrames(el.contentDocument); } catch { /* inaccessible frame */ }
        }
      }
    };
    try { releaseFrames(document); } catch { /* document detached */ }
  }
  function cancel(state) {
    if (!state || state.cancelled) return;
    state.cancelled = true;
    state.abort.abort();
    clearTimeout(state.timer);
    clean(state);
    if (!state.working && owner === state) owner = null;
  }
  function assert(id) {
    if (owner && Date.now() >= owner.expiresAt) cancel(owner);
    if (!owner || owner.id !== id || owner.cancelled) throw new Error('Capture cancelled. Reload the page if an earlier capture is still finishing.');
    return owner;
  }
  self.scCapture = {
    assert,
    signal: id => assert(id).abort.signal,
    async run(id, work) {
      const state = assert(id);
      if (state.working) throw new Error('A capture is already running in this document.');
      state.working = true;
      try { const result = await work(); assert(id); return result; }
      finally {
        state.working = false;
        cancel(state);
        if (owner === state) owner = null;
      }
    }
  };
  chrome.runtime.onConnect.addListener(port => {
    if (port.name !== 'sc-capture-owner') return;
    if (port.sender?.tab || port.sender?.url !== chrome.runtime.getURL('sidepanel/panel.html')) { port.disconnect(); return; }
    let state = null;
    port.onMessage.addListener(message => {
      if (message?.type !== 'start' || state) return;
      if (owner || typeof message.id !== 'string' || !message.id) {
        port.postMessage({error:'A previous capture is still running. Wait for it to finish or reload the page.'});
        return;
      }
      state = {id:message.id, working:false, cancelled:false, abort:new AbortController(), expiresAt:Date.now()+120000};
      owner = state;
      state.timer = setTimeout(() => cancel(state),120000);
      port.postMessage({ready:true});
    });
    port.onDisconnect.addListener(() => cancel(state));
  });
})();
