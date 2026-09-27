// Shared sensitive-control rules and capture-local redaction. No values leave
// this isolated-world closure. SingleFile can read CLOSED shadow roots through
// chrome.dom too, so our traversal must use the same API.
(() => {
  "use strict";
  if (self.scSensitive) return;
  const REDACTED = "********";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  const SENSITIVE_AUTOCOMPLETE = /(^|\s)(current-password|new-password|one-time-code|cc-[a-z-]+)(\s|$)/i;
  const isSensitive = (el) => !!el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) &&
    ((el.tagName === "INPUT" && /^(password|hidden)$/.test(el.type)) ||
      SENSITIVE_AUTOCOMPLETE.test(el.getAttribute("autocomplete") || ""));
  const fail = (reason = "The page changed during protection. Reload it and retry.") => {
    const error = new Error(`Sensitive-field protection could not be verified. ${reason}`);
    error.name = "SensitiveProtectionError";
    throw error;
  };
  let held = null;

  function inventory() {
    const controls = [], roots = [], frames = [];
    const visit = (root) => {
      roots.push(root);
      for (const el of root.querySelectorAll("*")) {
        if (isSensitive(el)) controls.push(el);
        // Chrome's API accepts HTMLElement only; SVG/MathML icons throw.
        // Namespace checks also work for same-origin child documents, where
        // instanceof HTMLElement would use the wrong realm. Keep traversing
        // HTML descendants of foreignObject and every open/closed HTML root.
        const shadow = el.namespaceURI === HTML_NAMESPACE
          ? chrome.dom.openOrClosedShadowRoot(el) : el.shadowRoot;
        if (shadow) visit(shadow);
        if (el.tagName === "TEMPLATE") visit(el.content);
        if (/^(IFRAME|FRAME)$/.test(el.tagName)) {
          // Access from the top document proves that about:blank/srcdoc and
          // same-origin children were inspected, including nested frames.
          // Cross-origin, sandboxed and loading frames are deliberately blocked.
          const doc = el.contentDocument;
          if (!doc) fail("An embedded frame cannot be inspected. Try a page without cross-origin or sandboxed frames.");
          if (doc.readyState !== "complete") fail("An embedded frame is still loading. Wait for it to finish and retry.");
          frames.push(el);
          visit(doc);
        }
        if (/^(OBJECT|EMBED|FENCEDFRAME)$/.test(el.tagName)) fail("An embedded object cannot be inspected. Try a page without embedded objects.");
      }
    };
    if (!chrome.dom?.openOrClosedShadowRoot) fail("Chrome's shadow-root inspection API is unavailable. Reload the extension and page.");
    visit(document);
    return { controls, roots, frames };
  }
  const same = (a, b) => a.length === b.length && a.every((el, i) => el === b[i]);
  const remember = (state, value) => { if (value) state.secrets.add(String(value)); };
  const attribute = (state, el, name, replacement = "") => {
    const value = el.getAttribute(name);
    if (value === null) return;
    remember(state, value);
    state.undo.push(() => {
      if (el.getAttribute(name) === replacement) el.setAttribute(name, value);
    });
    el.setAttribute(name, replacement);
    state.checks.push(() => el.getAttribute(name) === replacement);
  };
  function redactAll(id) {
    if (typeof id !== "string" || !id) fail();
    if (held) { if (held.id !== id) fail(); return verify(id); }
    const state = { id, undo: [], liveUndo: [], checks: [], secrets: new Set(), observers: [], invalid: false };
    held = state;
    // Install recovery BEFORE touching any field, including the failure path.
    state.timer = setTimeout(() => restoreAll(id), 180000);
    try {
      state.inventory = inventory();
      for (const el of state.inventory.controls) {
        const value = el.value;
        remember(state, value);
        if (el.tagName === "SELECT") {
          const selected = [...el.options].map(option => option.selected);
          state.liveUndo.push({ check: () => el.selectedIndex === -1,
            restore: () => [...el.options].forEach((option, i) => { option.selected = selected[i]; }) });
          for (const option of el.options) {
            attribute(state, option, "value");
            attribute(state, option, "label");
            attribute(state, option, "selected");
            const text = option.textContent;
            remember(state, text);
            state.undo.push(() => { if (option.textContent === "") option.textContent = text; });
            option.textContent = "";
            state.checks.push(() => option.textContent === "");
          }
          el.selectedIndex = -1;
          state.checks.push(() => el.selectedIndex === -1);
        } else {
          // Both live properties and default/serialized values can carry data.
          attribute(state, el, "value");
          if (el.tagName === "TEXTAREA") {
            const text = el.textContent;
            remember(state, text);
            state.undo.push(() => { if (el.textContent === "") el.textContent = text; });
            el.textContent = "";
            state.checks.push(() => el.textContent === "");
          }
          state.liveUndo.push({ check: () => el.value === "", restore: () => { el.value = value; } });
          el.value = "";
          state.checks.push(() => el.value === "");
        }
      }
      verify(id);
      for (const root of state.inventory.roots) {
        const observer = new MutationObserver(() => {
          try { verify(id); } catch { state.invalid = true; }
        });
        observer.observe(root, { subtree: true, childList: true, attributes: true, characterData: true });
        state.observers.push(observer);
      }
      return verify(id);
    } catch (error) { restoreAll(id); throw error; }
  }
  function verify(id) {
    const state = held;
    if (!state || state.id !== id || state.invalid) fail();
    const now = inventory();
    if (!same(now.controls, state.inventory.controls) || !same(now.roots, state.inventory.roots) ||
        !same(now.frames, state.inventory.frames) || state.checks.some(check => !check())) {
      state.invalid = true;
      fail();
    }
    return { count: now.controls.length, screenshotSafe: now.controls.length === 0 && now.frames.length === 0 };
  }
  function restoreAll(id) {
    if (!held || held.id !== id) return 0; // another capture cannot restore ours
    const state = held;
    held = null;
    clearTimeout(state.timer);
    for (const observer of state.observers) observer.disconnect();
    // Attribute/default restoration precedes live values, which may differ.
    // Avoid overwriting a value the application changed while capture ran.
    const live = state.liveUndo.filter(entry => { try { return entry.check(); } catch { return false; } });
    for (const undo of state.undo) { try { undo(); } catch { /* detached field */ } }
    for (const entry of live) { try { entry.restore(); } catch { /* detached field */ } }
    return state.inventory?.controls.length || 0;
  }

  // Defense against reflections of recognized field values. Decode embedded
  // HTML before checking it, so a same-origin iframe's base64 snapshot is not
  // an escape hatch. No arbitrary binary/image or unmarked-text detection is
  // promised. Short reflected values abort rather than corrupting HTML syntax.
  function scrub(html, id) {
    verify(id);
    let hits = 0;
    const variants = new Set();
    for (const value of held.secrets) {
      variants.add(value);
      variants.add(encodeURIComponent(value));
      variants.add(JSON.stringify(value).slice(1, -1));
      variants.add([...value].map(c => `&#${c.codePointAt(0)};`).join(""));
      variants.add([...value].map(c => `&#x${c.codePointAt(0).toString(16)};`).join(""));
      let escaped = value;
      for (let i = 0; i < 4; i++) {
        escaped = escaped.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
        variants.add(escaped);
      }
    }
    const ordered = [...variants].filter(Boolean).sort((a, b) => b.length - a.length);
    function clean(text, depth = 0) {
      if (depth > 12) fail();
      text = text.replace(/data:text\/html(?:;charset=[\w-]+)?;base64,([A-Za-z0-9+/]+=*)/gi, (uri, encoded) => {
        const bytes = Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
        const decoded = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
        const safe = clean(decoded, depth + 1);
        if (safe === decoded) return uri;
        const output = new TextEncoder().encode(safe);
        let binary = "";
        for (let i = 0; i < output.length; i += 8192) binary += String.fromCharCode(...output.subarray(i, i + 8192));
        return uri.slice(0, uri.indexOf(",") + 1) + btoa(binary);
      });
      for (const value of ordered) {
        if (!text.includes(value)) continue;
        if (value.length < 4) fail();
        const parts = text.split(value);
        hits += parts.length - 1;
        text = parts.join(REDACTED);
      }
      return text;
    }
    return { html: clean(String(html)), hits };
  }
  self.scSensitive = { REDACTED, isSensitive, redactAll, restoreAll, verify, scrub };
})();
