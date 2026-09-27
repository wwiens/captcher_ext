// Inert until the service worker authorizes this tab and document. Registration
// may cover arbitrary navigation destinations; observation never does.
(() => {
  if (window.__labRecorder) return;
  let active = false;
  let stopped = false;
  let lease = null;
  let expiresAt = 0;
  const listeners = [];
  const timers = new Set();
  const observers = new Set();
  const port = chrome.runtime.connect({ name: "sc-recording-frame" });
  const controller = { stop };
  window.__labRecorder = controller;

  function stop() {
    if (stopped) return;
    stopped = true;
    active = false;
    clearTimeout(lease);
    for (const [target, type, callback, options] of listeners) target.removeEventListener(type, callback, options);
    for (const id of timers) clearTimeout(id);
    for (const observer of observers) observer.disconnect();
    listeners.length = 0;
    timers.clear();
    observers.clear();
    window.__labShield?.releaseHold();
    if (window.__labRecorder === controller) delete window.__labRecorder;
    port.disconnect();
  }
  function isActive() {
    if (active && Date.now() >= expiresAt) stop();
    return active;
  }
  function renew() {
    expiresAt = Date.now() + 20000;
    clearTimeout(lease);
    lease = setTimeout(stop, 20000);
  }
  function listen(target, type, callback, options) {
    const guarded = (...args) => { if (isActive()) callback(...args); };
    listeners.push([target, type, guarded, options]);
    target.addEventListener(type, guarded, options);
  }
  function later(callback, ms) {
    const id = setTimeout(() => {
      timers.delete(id);
      if (isActive()) callback();
    }, ms);
    timers.add(id);
    return id;
  }
  function cancelTimer(id) { clearTimeout(id); timers.delete(id); }
  function observeMutations(callback) {
    const observer = new MutationObserver((records) => { if (isActive()) callback(records); });
    observers.add(observer);
    const disconnect = observer.disconnect.bind(observer);
    observer.disconnect = () => { observers.delete(observer); disconnect(); };
    return observer;
  }
  port.onDisconnect.addListener(stop);
  port.onMessage.addListener((message) => {
    if (stopped) return;
    if (message?.type === "stop") return stop();
    if (message?.type === "lease") { if (active) renew(); return; }
    if (message?.type !== "start" || active) return;
    active = true;
    renew();
    const begin = () => {
      try {
        startRecording(message.sessionId);
        port.postMessage({ type: "ready" });
      } catch { stop(); }
    };
    if (document.documentElement) begin();
    else listen(document, "DOMContentLoaded", begin, { once: true });
  });
  // No grant means no DOM reads, no input listeners and no observers.
  renew();
  function startRecording(sessionId) {
  // Subframes record too (registered with allFrames) — but only same-origin
  // ones. The capture engine can only serialize a frame it can reach via
  // contentDocument, so an action in a cross-origin frame could never replay;
  // and this frame must be able to see `top` to name the page it belongs to.
  if (window !== window.top) {
    try { void window.top.document; } catch { return; }
  }

  const send = (action) => {
    try { chrome.runtime.sendMessage({ type: "rc-action", sessionId, action }).catch(() => {}); } catch { /* panel gone */ }
  };
  const clean = (s) => String(s || "").replace(/\s+/g, " ").trim();

  // -------------------------------------------------------------------------
  // Fields whose live value must never leave the page.
  //
  // The definition lives in sensitive.js, which is injected ahead of this file
  // by both paths that need it. It used to live here, and that was the bug:
  // the capture engine had its own, narrower idea of a secret — `type
  // != "password"` and nothing else — so this recorder wrote ******** into the
  // step while the same one-time code went up inside the page HTML beside it.
  // One definition, two consumers, no room for them to drift again.
  //
  // Destructured rather than guarded: a missing module is a packaging error,
  // and a privacy control that quietly degrades to off is worse than one that
  // fails loudly on the first page load.
  //
  // The recorder still has two ways to carry a credential and both are closed
  // here — the `change` listener below, and `labelOf`, which falls back to
  // `el.value` when an input has no aria-label or title, so merely *clicking*
  // a password box recorded its contents as the step's label.
  // -------------------------------------------------------------------------
  const { isSensitive, REDACTED } = self.scSensitive;

  const labelOf = (el) => isSensitive(el) ? REDACTED : clean(
    el.getAttribute("aria-label") || el.innerText ||
    (isSensitive(el) ? "" : el.value) || el.title || el.alt
  ).slice(0, 80);

  // -------------------------------------------------------------------------
  // Unique-selector computation, at event time — the one moment the live DOM
  // is on hand. The ladder mirrors digest.py's target_for() in the server
  // repo (captcher_app): keep the two in sync, because the server's
  // authoring pass verifies these selectors against its own parse of the
  // captured page and falls back to guessing when they are absent or break.
  // Every rung is verified with querySelectorAll before it is used, so a
  // recorded selector is unique BY CONSTRUCTION or not recorded at all.
  // -------------------------------------------------------------------------
  const GENERATED_CLASS = [
    /^[A-Za-z0-9+/_-]{16,}={1,2}$/,                 // base64-ish
    /^[A-Za-z]+__[A-Za-z]+-[0-9a-z]{6,}-\d+$/,      // styled-components named
    /-sc-[0-9a-z]{6,}-\d+$/,                        // styled-components tail
    /-[0-9a-f]{6,10}$/,                             // css-modules hex tail
    /--[A-Za-z0-9_-]*[0-9][A-Za-z0-9_-]*$/,         // modifier w/ digits tail
    /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,7}$/,        // emotion short hash
    /-(?![A-Z][a-z]+$)(?![a-z]+$)(?![A-Z]+$)[A-Za-z0-9+_]{5,6}$/  // random tail
  ];
  const isGeneratedClass = (tok) => GENERATED_CLASS.some((re) => re.test(tok));
  const BOOKKEEPING_DATA = /react|v-|vue|ng-|key$|index|hash|uid|guid|-id$|reactid/;
  const isGeneratedId = (id) =>
    !id || id.includes(":") || /^\d+$/.test(id) || /^ember\d+$/.test(id) ||
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(id) ||
    /[-_]\d+$/.test(id) ||
    (/[0-9a-f]{6,}$/i.test(id) && /\d/.test(id.match(/[0-9a-f]{6,}$/i)[0]));

  // Verified against the element's OWN document — for an element inside an
  // iframe that is the frame's document, and for the frame element itself it
  // is the parent's (which is how frameChain() reuses cssFor per hop).
  const hitsOnly = (sel, el) => {
    try {
      const m = el.ownerDocument.querySelectorAll(sel);
      return m.length === 1 && m[0] === el;
    } catch { return false; }
  };

  // Per-element handles, best first (no bare tag — callers add that)
  const handlesOf = (el) => {
    const tag = el.tagName.toLowerCase();
    const out = [];
    const id = el.getAttribute("id");
    if (id && !isGeneratedId(id)) out.push(`#${CSS.escape(id)}`);
    const attrSel = (attr, v) =>
      `${tag}[${attr}="${v.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
    for (const attr of ["name", "data-testid", "data-id"]) {
      const v = el.getAttribute(attr);
      if (v) out.push(attrSel(attr, v));
    }
    // Other authored data-* attributes (data-stage="Proposal") name a lane or
    // a column the way an id names a control — short values only, never the
    // framework bookkeeping kinds. Same rung, same limits, as digest.py.
    for (const attr of el.getAttributeNames ? el.getAttributeNames() : []) {
      if (!attr.startsWith("data-") || attr === "data-testid" || attr === "data-id") continue;
      if (BOOKKEEPING_DATA.test(attr)) continue;
      const v = el.getAttribute(attr);
      if (v && v.length <= 24 && !isGeneratedClass(v)) out.push(attrSel(attr, v));
    }
    for (const attr of ["aria-label", "placeholder"]) {
      const v = el.getAttribute(attr);
      if (v) out.push(attrSel(attr, v));
    }
    const authored = [...el.classList].filter((c) => !isGeneratedClass(c)).slice(0, 2);
    if (authored.length) out.push(tag + authored.map((c) => `.${CSS.escape(c)}`).join(""));
    return out;
  };

  const cssFor = (el) => {
    const root = el.ownerDocument.documentElement;
    const tag = el.tagName.toLowerCase();
    const locals = [...handlesOf(el), tag];
    for (const sel of locals) if (hitsOnly(sel, el)) return sel;
    // scope with the nearest uniquely-identified ancestor
    let anc = el.parentElement;
    while (anc && anc !== root) {
      const aSel = handlesOf(anc).find((s) => hitsOnly(s, anc));
      if (aSel) {
        for (const local of locals) {
          const scoped = `${aSel} ${local}`;
          if (hitsOnly(scoped, el)) return scoped;
        }
        break; // a unique anchor that cannot disambiguate — deeper ones won't either
      }
      anc = anc.parentElement;
    }
    // generated-but-unique id: exact on the frozen snapshot this ships with
    const id = el.getAttribute("id");
    if (id) {
      const sel = `[id="${id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
      if (hitsOnly(sel, el)) return sel;
    }
    // last resort: child chain with :nth-of-type from a unique ancestor
    const nth = (node) => {
      let n = 1;
      for (let sib = node.previousElementSibling; sib; sib = sib.previousElementSibling) {
        if (sib.tagName === node.tagName) n += 1;
      }
      return n;
    };
    const segs = [];
    let cur = el;
    while (cur && cur !== root) {
      segs.unshift(`${cur.tagName.toLowerCase()}:nth-of-type(${nth(cur)})`);
      const parent = cur.parentElement;
      const aSel = parent && parent !== root
        ? handlesOf(parent).find((s) => hitsOnly(s, parent)) : null;
      const sel = (aSel ? `${aSel} > ` : "") + segs.join(" > ");
      if (hitsOnly(sel, el)) return sel;
      cur = parent;
    }
    return null; // never record a selector that failed verification
  };

  const headingFor = (el) => {
    try {
      const headings = el.ownerDocument.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]');
      let best = null;
      for (const h of headings) {
        // nearest heading at or before the element in document order
        if (h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING || h.contains(el)) best = h;
      }
      return best ? clean(best.textContent).slice(0, 80) : "";
    } catch { return ""; }
  };

  // How the player reaches this frame from the captured top page: one
  // verified-unique selector per hop, outermost first, each computed with
  // cssFor against that hop's PARENT document — the same descent the server's
  // digest and the player's bridge perform. Computed at event time like every
  // other selector. null = a hop could not be named; the action is then sent
  // without a selector so it degrades to a hand-fixable draft step instead of
  // a selector that silently matches the wrong document.
  const frameChain = () => {
    const chain = [];
    try {
      let win = window;
      while (win !== window.top) {
        const fe = win.frameElement;
        if (!fe) return null;
        const sel = cssFor(fe);
        if (!sel) return null;
        chain.unshift(sel);
        win = win.parent;
      }
    } catch { return null; }
    return chain;
  };

  const metaFor = (el) => {
    const meta = {
      url: String(location.href).slice(0, 300),
      docTitle: clean(document.title).slice(0, 120)
    };
    if (window !== window.top) {
      // An action in a frame belongs to the TOP page — that is the snapshot
      // it replays over — so url/docTitle name the top document; the frame
      // keeps its own url in frameUrl and its route in framePath. All three
      // are additive metadata on schema @1 (old servers ignore them).
      try {
        meta.frameUrl = meta.url;
        meta.url = String(window.top.location.href).slice(0, 300);
        meta.docTitle = clean(window.top.document.title).slice(0, 120);
      } catch { /* top became unreachable: keep the frame's own identity */ }
      const chain = frameChain();
      if (chain && chain.length) {
        meta.framePath = chain;
      } else {
        // unlocatable frame: keep the heading but send no selector, so the
        // draft step says what happened without pointing at the wrong document
        const h = headingFor(el);
        if (h) meta.heading = h;
        return meta;
      }
    }
    const heading = headingFor(el);
    if (heading) meta.heading = heading;
    try {
      const selector = cssFor(el);
      if (selector) meta.selector = selector;
    } catch { /* selector is optional; the action still counts */ }
    return meta;
  };

  // -------------------------------------------------------------------------
  // Observed effects — what the page DID when the user acted.
  //
  // The captured HTML shows behaviour only when it lives in inline on*
  // attributes; a framework page (addEventListener everywhere) serializes as
  // inert markup, and the server's authoring model then cannot know that
  // typing an amount recomputes a total. The recorder is the one party that
  // ever watches the live page respond, so it records the response: after
  // each recorded action, which NAMED elements' visible text changed, from
  // what to what. Ground truth by observation, additive on schema @1
  // (`effects` on an action; old servers ignore it).
  //
  // Timing is the whole design. Input effects happen per KEYSTROKE, before
  // the blur-time change event that records the input action — so the
  // observation starts at the first `input` event (snapshot taken in the
  // capture phase, before the page's own handlers see that keystroke) and is
  // settled by the action that eventually claims it. Click and select
  // effects follow their event, so those observations start and settle at
  // the recording moment. One observation lives at a time; starting another
  // flushes the last, and an observation whose action never arrives (a
  // keystroke with no blur before navigation) is dropped, never guessed.
  //
  // The effect list is deliberately conservative: only elements the server's
  // digest can NAME (data-testid, authored id, aria-live, role=status/alert,
  // <output>), deepest named ancestor per mutation, the acted element and
  // its ancestors excluded (an ancestor's text contains the typed value —
  // noise, not signal), selectors verified by the same cssFor ladder as
  // action selectors, and nothing at all for sensitive fields.
  // -------------------------------------------------------------------------
  const EFFECTS_SETTLE_MS = 300;   // after the action lands
  const EFFECTS_MAX_MS = 20000;    // hard stop for an unclaimed observation
  const EFFECTS_MAX = 8;
  const EFFECT_TEXT_MAX = 120;
  const EFFECT_CANDIDATES_MAX = 400;
  let actionSeq = 0;
  const DOC_TOKEN = Math.random().toString(36).slice(2, 10);
  const newAid = () => `${DOC_TOKEN}-${++actionSeq}`;

  const effectText = (el) => clean(el.textContent).slice(0, EFFECT_TEXT_MAX);

  // The handle a named element keeps across a re-render: the same two rungs
  // the digest names it by. null for anything else (an aria-live region
  // without an id cannot be found again once replaced).
  const handleOf = (el) => {
    const tag = (el.tagName || "*").toLowerCase();
    const tid = el.getAttribute("data-testid");
    if (tid) return `${tag}[data-testid="${tid.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
    const id = el.getAttribute("id");
    if (id && !isGeneratedId(id)) return `#${CSS.escape(id)}`;
    return null;
  };

  const effectCandidates = (doc) => {
    const out = [];
    let els;
    try {
      els = doc.querySelectorAll(
        '[data-testid], [aria-live], [role="status"], [role="alert"], output, [id]');
    } catch { return out; }
    for (const el of els) {
      if (out.length >= EFFECT_CANDIDATES_MAX) break;
      if (el.hasAttribute("data-testid") || el.hasAttribute("aria-live") ||
          el.tagName === "OUTPUT" ||
          el.getAttribute("role") === "status" ||
          el.getAttribute("role") === "alert" ||
          (el.id && !isGeneratedId(el.id))) {
        out.push(el);
      }
    }
    return out;
  };

  let obs = null;   // the one live observation

  const startObservation = (target) => {
    try {
      if (obs && obs.el === target) return obs;
      if (obs) obs.flush();
      const doc = target.ownerDocument;
      const rootEl = doc && doc.documentElement;
      // effects of a click on <html>/<body> would all be dropped as
      // descendants of the target — skip the work
      if (!rootEl || target === rootEl || target === doc.body) return null;
      const before = new Map();
      for (const el of effectCandidates(doc)) before.set(el, effectText(el));
      if (!before.size) return null;
      const touched = new Set();
      const note = (node) => {
        let el = node instanceof Element ? node : (node ? node.parentElement : null);
        while (el) {   // deepest named ancestor claims the mutation
          if (before.has(el)) { touched.add(el); return; }
          el = el.parentElement;
        }
      };
      const mo = observeMutations((records) => {
        for (const r of records) {
          note(r.target);
          if (r.addedNodes) for (const n of r.addedNodes) note(n);
        }
      });
      mo.observe(rootEl, { subtree: true, childList: true, characterData: true });
      const o = {
        el: target, aid: null, timer: null,
        settle(aid) {           // an action claimed this observation
          this.aid = aid;
          cancelTimer(this.timer);
          this.timer = later(() => this.flush(), EFFECTS_SETTLE_MS);
        },
        flush() {
          if (obs === this) obs = null;
          cancelTimer(this.timer); cancelTimer(this.hardStop);
          try { mo.disconnect(); } catch { /* doc gone */ }
          if (!this.aid) return;          // never claimed: drop, never guess
          const effects = [];
          const related = (el) => el === target || el.contains(target) || target.contains(el);
          for (const el of touched) {
            if (effects.length >= EFFECTS_MAX) break;
            if (related(el)) continue;
            const now = effectText(el);
            if (now === before.get(el)) continue;
            let selector = null;
            try { selector = cssFor(el); } catch { /* unnameable */ }
            if (!selector) continue;      // same rule as actions: verified or absent
            effects.push({ selector, before: before.get(el), after: now });
          }
          // A re-render replaces named elements wholesale — a board rebuilt
          // on drop, a list re-keyed by a framework — so the node observed
          // is detached and the mutation landed on its container, which is
          // all the loop above can report. Find each such element again by
          // the handle the server's digest would name it by (data-testid,
          // authored id) and compare the replacement's text: that is the
          // counter the model needs to see change, not the container.
          for (const [el, was] of before) {
            if (effects.length >= EFFECTS_MAX) break;
            if (touched.has(el) || related(el)) continue;
            let attached = true;
            try { attached = rootEl.contains(el); } catch { /* treat as gone */ }
            if (attached) continue;
            const handle = handleOf(el);
            if (!handle) continue;
            let again = null;
            try { again = doc.querySelector(handle); } catch { continue; }
            if (!again || again === el || related(again) || !hitsOnly(handle, again)) continue;
            const now = effectText(again);
            if (now === was) continue;
            effects.push({ selector: handle, before: was, after: now });
          }
          if (effects.length) {
            try {
              chrome.runtime.sendMessage({ type: "rc-action-effects", sessionId,
                                           aid: this.aid, effects }).catch(() => {});
            } catch { /* panel gone */ }
          }
        },
      };
      o.hardStop = later(() => o.flush(), EFFECTS_MAX_MS);
      obs = o;
      return o;
    } catch { return null; /* observation must never interfere with the page */ }
  };

  // Typing starts the observation window (snapshot before the page reacts to
  // the first keystroke); the change listener's input action settles it.
  listen(document, "input", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || isSensitive(target)) return;
    const tag = (target.tagName || "").toLowerCase();
    if (tag === "textarea" ||
        (tag === "input" && !/^(checkbox|radio|button|submit|reset|file|image)$/.test(target.type))) {
      startObservation(target);
    }
  }, true);

  // A page's own `el.click()` is not something the person did. Cadence
  // CRM re-selects its Activity tab that way whenever a record opens, and
  // every one of those landed in the capture as a step the learner was told
  // to take. Untrusted clicks are dropped — except the one a page makes out
  // of a key the person just pressed (Enter/Space on a custom control that
  // forwards to .click()), which is the person acting through the keyboard.
  // What the clicked control looked like BEFORE the page answered the click
  // (this listener runs in the capture phase). The panel compares it with
  // the control afterwards: a tab or toggle that switched — Cartwright's All
  // tab, Pulsegraph's Bars — may leave every word on the page the same, and
  // the "page unchanged" pre-check then skipped the only snapshot showing
  // it. Panel-local, like aid: stripped before upload. Keep in lockstep with
  // controlStateOf in sidepanel/panel.js.
  const controlState = (el) =>
    [el.className && typeof el.className === "string" ? el.className : "",
     ...["aria-pressed", "aria-selected", "aria-expanded", "aria-checked", "aria-current"]
       .map((a) => el.getAttribute(a) || ""),
     "checked" in el ? String(!!el.checked) : ""].join("|");

  let lastKeyActivation = 0;
  listen(document, "keydown", (event) => {
    if (event.isTrusted && (event.key === "Enter" || event.key === " ")) lastKeyActivation = Date.now();
  }, true);
  const KEY_ACTIVATION_MS = 250;

  listen(document, "click", (event) => {
    if (event.isTrusted === false && Date.now() - lastKeyActivation > KEY_ACTIVATION_MS) return;
    const hit = event.target instanceof Element ? event.target : null;
    if (!hit) return;
    // Clicks usually land on a span/icon inside the real control
    const target = hit.closest("a, button, [role='button'], input, select, textarea, summary, label, tr") || hit;
    const tag = (target.tagName || "*").toLowerCase();
    if (tag === "select") return; // the change listener records it as a select action
    const aid = newAid();
    send({ type: "click", element: tag === "tr" ? "row" : tag, label: labelOf(target),
           aid, ...(isSensitive(target) ? {} : { ...metaFor(target), state: controlState(target) }) });
    const o = isSensitive(target) ? null : startObservation(target);
    if (o) o.settle(aid);
  }, true);

  listen(document, "change", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const tag = (target.tagName || "").toLowerCase();
    if (tag === "select") {
      const secret = isSensitive(target);
      const option = target.selectedOptions && target.selectedOptions[0];
      const aid = newAid();
      send({
        type: "select",
        element: "select",
        value: secret ? REDACTED : clean(option ? option.textContent : target.value).slice(0, 80),
        ...(secret ? { sensitive: true } : {}),
        // the <option>'s value (attribute, or its text when absent) — what the
        // player's select step judges against, unlike the display text above
        ...(!secret && option ? { optionValue: String(option.value).slice(0, 120) } : {}),
        aid, ...(secret ? {} : metaFor(target))
      });
      const o = secret ? null : startObservation(target);
      if (o) o.settle(aid);
    } else if (tag === "textarea" ||
               (tag === "input" && !/^(checkbox|radio|button|submit|reset|file|image)$/.test(target.type))) {
      // change fires on blur, so one action per field with its final value —
      // the click listener already covers checkboxes and radios. Segmented
      // fields are the exception, and wait for the person to leave them.
      if (tag === "input" && SEGMENTED.test(target.type)) { heldSegmented.add(target); return; }
      sendInput(target, tag);
    }
  }, true);

  // A date, time, month or week field fires `change` once per completed
  // segment while it is typed into — 05/04/2026 arrived as nine actions,
  // 0002-05-04, 0020-05-04, 0202-05-04 among them, every one a step the
  // authoring pass had to see through. The value a person leaves the field
  // with is the one they chose, so these are held until focus moves on (or
  // Enter submits from inside the field), then sent once.
  const SEGMENTED = /^(date|datetime-local|time|month|week)$/;
  const heldSegmented = new Set();
  const flushSegmented = (target) => {
    if (!heldSegmented.has(target)) return;
    heldSegmented.delete(target);
    sendInput(target, "input");
  };
  listen(document, "focusout", (event) => flushSegmented(event.target), true);
  listen(document, "keydown", (event) => {
    if (event.key === "Enter") flushSegmented(event.target);
  }, true);

  // A secret field still records its step, so a walkthrough that starts
  // with a login keeps that login; it just carries a placeholder instead
  // of the credential. Without this the value reached three places at
  // once: walkthrough.json on the server's disk, the authoring prompt sent
  // to the model, and the screen, since ingest.py stores it as the step's
  // `demo_value` — which is what Show-me mode types on replay.
  function sendInput(target, tag) {
    const secret = isSensitive(target);
    const aid = newAid();
    send({ type: "input", element: tag,
           value: secret ? REDACTED : String(target.value).slice(0, 200),
           // additive on schema @1; unknown fields are ignored on ingest
           ...(secret ? { sensitive: true } : {}),
           aid, ...(secret ? {} : metaFor(target)) });
    if (!secret) {
      // claim the observation the first keystroke opened (or open one now
      // for a paste/programmatic change that fired no input event)
      const o = (obs && obs.el === target) ? obs : startObservation(target);
      if (o) o.settle(aid);
    }
  }

  // -------------------------------------------------------------------------
  // Drags — an action the click/change listeners never see.
  //
  // A card dragged between board columns fires no click and no change; it
  // used to leave nothing in the capture but its result, and the server's
  // authoring pass bridged the gap by inventing a click on whatever button
  // also moved the card. Recorded as {type:"drag", selector, dropSelector}
  // (additive on schema @1; ingest.py drafts a drag step from it and old
  // servers drop it), where `selector` names the element picked up and
  // `dropSelector` the ZONE it was released in — its new lane, found the
  // way the server's digest finds drop zones: walk up from the element's
  // parent to the nearest ancestor with same-shaped siblings (the columns of
  // a board, the lists of a sorter). The two ends are therefore addressed
  // exactly as the digest's `draggable` and DROP ZONES lines address them.
  //
  // Two kinds of drag arrive. NATIVE: the element carries draggable="true"
  // and the browser runs HTML5 drag and drop — dragstart names the element
  // (selector computed then, before any re-render), drop marks the release.
  // POINTER: a library drags with mouse events (dnd-kit, react-beautiful-dnd
  // and their kind) — a press, real travel, a release; the pressed element's
  // ancestor chain is named on the first significant movement, while the DOM
  // is still the pre-drop one.
  //
  // Neither kind records on the gesture alone. A drag is recorded only once
  // the page has actually MOVED something: after a settle window the chain
  // is re-checked and the innermost element now under a different parent —
  // or re-rendered elsewhere, found again by its selector — is the thing
  // that was dragged, and only if its new lane differs from its old one. A
  // release the app refused, a drag back to where it started, a selection
  // swipe across a re-rendering list: none of those is a step to teach, and
  // none is recorded. Selectors are computed on the pre-drop DOM wherever
  // possible, since the server verifies them against the pre-action
  // snapshot; the zone's is computed after the move (it is only known then)
  // and is stable for any lane with a handle of its own.
  // -------------------------------------------------------------------------
  const DRAG_SETTLE_MS = 600;
  const DRAG_MIN_TRAVEL = 8;
  const DRAG_CHAIN_MAX = 6;

  const isDraggableAttr = (el) =>
    !!el && typeof el.getAttribute === "function" && el.getAttribute("draggable") === "true";
  const draggableAncestor = (el) => {
    for (let cur = el; cur && cur.tagName; cur = cur.parentElement) {
      if (isDraggableAttr(cur)) return cur;
    }
    return null;
  };
  const isFormField = (el) =>
    !!el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName || "");

  const laneSignature = (el) =>
    (el.tagName || "") + "|" +
    [...(el.classList || [])].filter((c) => !isGeneratedClass(c)).sort().join(".");

  // The lane an element sits in: the nearest ancestor (the element itself
  // included) with at least one same-shaped, non-draggable sibling, or one
  // wired for drops. Mirrors digest._dropzone_nodes in the server repo.
  const laneOf = (el) => {
    let cur = el;
    for (let hops = 0; cur && cur.tagName && cur.parentElement && hops < 8; hops++) {
      if (!isDraggableAttr(cur)) {
        if (cur.hasAttribute("ondrop") || cur.hasAttribute("ondragover") ||
            cur.hasAttribute("aria-dropeffect")) return cur;
        const sig = laneSignature(cur);
        const peers = [...(cur.parentElement.children || [])]
          .filter((sib) => laneSignature(sib) === sig && !isDraggableAttr(sib));
        if (peers.length >= 2) return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  };

  const zoneLabel = (zone) => {
    try {
      const h = zone.querySelector && zone.querySelector('h1,h2,h3,h4,h5,h6,[role="heading"]');
      const text = clean(h ? h.textContent : "") || clean(zone.getAttribute("aria-label") || "");
      return (text || clean(zone.textContent)).slice(0, 80);
    } catch { return ""; }
  };

  // One link of the pressed chain, named while the DOM is still pre-drop.
  const chainEntry = (el) => {
    let selector = null, lane = null;
    try { selector = cssFor(el); } catch { /* unnameable: still tracked for movement */ }
    try { const l = el.parentElement && laneOf(el.parentElement); lane = l ? cssFor(l) : null; } catch { /* ok */ }
    return { el, parent: el.parentElement, selector, lane };
  };

  const isAttached = (el) => {
    try { return el.ownerDocument.documentElement.contains(el); } catch { return false; }
  };

  // What moved, if anything: the innermost chain link now under a different
  // parent (or gone and found again elsewhere by its selector), provided its
  // lane changed. Returns {el, entry} with `el` the element as it now exists.
  const movedLink = (chain) => {
    for (const entry of chain) {
      let now = entry.el;
      if (isAttached(now)) {
        if (now.parentElement === entry.parent) continue;
      } else {
        if (!entry.selector) continue;
        try { now = entry.el.ownerDocument.querySelector(entry.selector); } catch { now = null; }
        if (!now) continue;
      }
      const lane = now.parentElement && laneOf(now.parentElement);
      if (!lane) continue;
      let laneSel = null;
      try { laneSel = cssFor(lane); } catch { /* ok */ }
      if (!laneSel || laneSel === entry.lane) continue;   // same lane: nothing to teach
      return { el: now, entry, lane, laneSel };
    }
    return null;
  };

  const settleDrag = (chain, tag, label, meta, observation) => {
    later(() => {
      const moved = movedLink(chain);
      if (!moved || !moved.entry.selector) return;
      const aid = newAid();
      send({ type: "drag", element: tag, label, aid,
             ...meta, selector: moved.entry.selector,
             dropSelector: moved.laneSel, dropLabel: zoneLabel(moved.lane) });
      if (observation) observation.settle(aid);
    }, DRAG_SETTLE_MS);
  };

  let nativeDrag = null;   // {chain, tag, label, meta}
  let press = null;        // {el, x, y, chain|null}

  listen(document, "dragstart", (event) => {
    const hit = event.target instanceof Element ? event.target : null;
    const el = hit && (draggableAncestor(hit) || hit);
    if (!el || isSensitive(el)) return;
    press = null;                                   // the browser took the gesture over
    nativeDrag = { chain: [chainEntry(el)], tag: (el.tagName || "*").toLowerCase(),
                   label: labelOf(el), meta: metaFor(el) };
  }, true);

  listen(document, "drop", (event) => {
    if (!nativeDrag) return;
    const d = nativeDrag;
    nativeDrag = null;
    // observation opens now, before the page's own drop handler mutates
    const o = startObservation(d.chain[0].el);
    settleDrag(d.chain, d.tag, d.label, d.meta, o);
  }, true);

  listen(document, "dragend", () => { nativeDrag = null; }, true);

  listen(document, "mousedown", (event) => {
    const hit = event.target instanceof Element ? event.target : null;
    if (!hit || event.button !== 0 || draggableAncestor(hit) || isFormField(hit)) {
      press = null;
      return;
    }
    press = { el: hit, x: event.clientX, y: event.clientY, chain: null };
  }, true);

  listen(document, "mousemove", (event) => {
    if (!press || press.chain) return;
    if (Math.abs(event.clientX - press.x) + Math.abs(event.clientY - press.y) < DRAG_MIN_TRAVEL) return;
    // name the chain now, on the pre-drop DOM
    const chain = [];
    for (let cur = press.el; cur && cur.tagName && chain.length < DRAG_CHAIN_MAX; cur = cur.parentElement) {
      if (cur === cur.ownerDocument.body || cur === cur.ownerDocument.documentElement) break;
      chain.push(chainEntry(cur));
    }
    press.chain = chain;
  }, true);

  listen(document, "mouseup", (event) => {
    if (!press) return;
    const p = press;
    press = null;
    if (!p.chain || !p.chain.length) return;        // a press without travel is a click
    const o = startObservation(p.el);
    // label and metadata come from the pressed element; settleDrag swaps in
    // the selector of whichever chain link actually moved
    settleDrag(p.chain, (p.el.tagName || "*").toLowerCase(), labelOf(p.el), metaFor(p.el), o);
    void event;
  }, true);

  // The change detector below runs in the top frame only. A modal appearing
  // inside an iframe still announces itself up here — the frame's host layer
  // is added to the top document — and one detector per page keeps the
  // remind/freeze traffic exactly what it was before subframes recorded.
  if (window !== window.top) return;

  // -------------------------------------------------------------------------
  // Change detector. Watches for a
  // dialog/modal opening or a large chunk of content being added and reports
  // {type:"rc-remind", reason:"dialog"|"update"} to the panel, which decides
  // whether to auto-capture. Armed only after the page load settles, so the
  // load's own mutation burst never fires (navigations are captured via the
  // tabs API already); as a side effect, SPA route changes land as "update".
  //
  // It also freezes the page (shield.js) as soon as the change is *seen*,
  // rather than leaving that to the panel when the capture actually starts —
  // the quiet period plus the message round-trip is the better part of a
  // second, and it is exactly the second in which somebody clicks the button
  // inside the modal that just opened.
  // -------------------------------------------------------------------------
  const DIALOG_SEL = 'dialog[open], [role="dialog"], [role="alertdialog"], [aria-modal="true"]';
  const QUIET_MS = 600;        // let the mutation burst settle
  const MIN_INTERVAL_MS = 3000;
  const COUNT_THRESHOLD = 40;  // added elements in one settled burst
  const AREA_FRACTION = 0.2;   // of the viewport, for added content
  const OVERLAY_FRACTION = 0.25; // of the viewport, for fixed/absolute overlays
  const ARM_DELAY_MS = 1500;   // quiet period after load before watching
  const HOLD_MS = 5000;        // fallback only — the panel's reply normally frees it
  // Right after the user does something, the bar drops: a burst in that
  // window is the product responding to the action. Progressive-disclosure
  // forms (type a domain, the rest of the form appears) sit far below the
  // big thresholds and a real one was missed exactly this way. False
  // positives are cheap since the panel's pre-check — a same-looking page is
  // skipped in ~100ms with no overlay and no serialization — so the miss is
  // the expensive side now. The window is measured at evaluate time, which
  // runs QUIET_MS after the burst stops; 2500ms covers event → burst →
  // settle.
  const ACTION_WINDOW_MS = 2500;
  const ACTION_COUNT_THRESHOLD = 8;
  const ACTION_AREA_FRACTION = 0.03;
  // An in-page view switch reveals a block that is *already in the DOM* by
  // toggling a class on it, so it adds no nodes and the added-nodes path
  // below cannot see it; it is not a dialog either, so the attribute path
  // does not match it. Single-page products do exactly this — the sample
  // apps swap `.screen` ↔ `.screen.on` — and every walkthrough
  // step authored inside the revealed view ended up pointing at
  // display:none in the only snapshot taken — the player then has no rect to
  // anchor its card to and parks it in the corner. Blocks that cover this
  // much of the viewport when they appear are a view, not a tooltip.
  const BLOCK_SEL = "div, section, main, article, aside, form, nav";
  const REVEAL_FRACTION = 0.15;
  // A form switching between locked and usable changes what the learner can
  // do without changing much of what they see: Mailwing's Duplicate turns a
  // sent campaign's greyed-out fields editable and adds one small toast. The
  // snapshot taken before it keeps every field `disabled`, and a replay of
  // the next steps then asks the learner to type into a field that takes no
  // typing. One flip, on a rendered control, inside the post-action window is
  // enough — the product answering the click, not background churn.
  const LOCKABLE_SEL = "input, select, textarea, button, fieldset";

  let evidence = null;
  let timer = null;            // sliding quiet-period timer
  let deadline = null;         // hard evaluate deadline, armed with a pre-emptive freeze
  let lastSent = 0;
  let armed = false;
  let autoLikely = true;       // last thing the panel said about auto-capture
  const dialogWasVisible = new WeakMap(); // fire only on hidden -> visible
  // Every dialog or overlay seen open, so its CLOSING can be noticed too.
  // Dismissing one changes the screen as much as opening it did — the page
  // underneath comes back — yet it adds nothing, so the added-nodes and
  // reveal paths are blind to it. Lumen's lesson dialog closed that way and
  // the next step (ticking the lesson in the list) was left on the snapshot
  // with the dialog still over it. Checked on every mutation while any are
  // open; the set is only ever a handful of elements.
  const openLayers = new Set();
  const noteClosedLayers = () => {
    let closed = false;
    for (const layer of openLayers) {
      if (layer.isConnected && areaOf(layer) > 0) continue;
      openLayers.delete(layer);
      if (!evidence) evidence = { dialog: false, reveal: false, count: 0, area: 0, held: false, samples: [] };
      evidence.closed = true;
      if (!closed) sample("closed: ", layer);
      closed = true;
    }
    return closed;
  };
  // Blocks that were not rendered last time we looked. Membership is the
  // cheap gate on the reveal check: an attribute mutation on anything we
  // have never seen hidden costs a Set lookup and no layout.
  const hiddenBlocks = new Set();

  // Raw user events, not recorded actions: the recorder emits an `input`
  // action at blur, well after the keystrokes whose DOM response the lowered
  // post-action bar wants to catch. Registered after shield.js's blockers,
  // so while the shield is up its stopImmediatePropagation runs first —
  // fine, a frozen page has no user events worth tracking.
  let lastUserEventAt = 0;
  for (const type of ["pointerdown", "mousedown", "keydown", "input"]) {
    listen(window, type, () => { lastUserEventAt = Date.now(); },
                            { capture: true, passive: true });
  }
  // A deliberate act — a press, or Enter/Space — as opposed to typing. It is
  // what lets a burst through MIN_INTERVAL_MS below: that throttle exists for
  // background churn, and applied to the person's next click it threw away
  // the change that click made whenever they acted within three seconds of
  // the last capture (Cadence's "›" advancing a deal right after the owner
  // filter: the board moved and was never captured). Keystrokes are not
  // counted, so a live preview redrawing as someone types stays throttled.
  let lastActAt = 0;
  listen(window, "pointerdown", () => { lastActAt = Date.now(); }, { capture: true, passive: true });
  listen(window, "keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") lastActAt = Date.now();
  }, { capture: true, passive: true });
  // Typing after the act, so text that follows it can be told apart from text
  // the act itself produced (see noteText): clicking into a quantity field
  // and typing redraws a live total, and that is the keystrokes' doing.
  let lastTypedAt = 0;
  listen(window, "input", () => { lastTypedAt = Date.now(); }, { capture: true, passive: true });
  // Choosing an option is a deliberate act however it was chosen — the
  // keyboard (arrow keys on a closed select) involves no press at all.
  listen(window, "change", (event) => {
    if (event.target && event.target.tagName === "SELECT") lastActAt = Date.now();
  }, { capture: true, passive: true });

  // The freeze is speculative, so it is bounded on both ends: shield.js's own
  // deadline covers a panel that never answers, and freePage() drops it the
  // moment one says no capture is coming. releaseHold() only ever drops a
  // hold, so it cannot unfreeze a page a capture is already running on.
  const holdPage = () => { window.__labShield?.hold(HOLD_MS); };
  const freePage = () => { window.__labShield?.releaseHold(); };

  // A short human-readable handle on an element, for the panel's log: what
  // actually tripped the detector is otherwise invisible from the panel side.
  const describe = (element) => {
    let s = element.tagName ? element.tagName.toLowerCase() : "node";
    if (element.id) s += `#${element.id}`;
    const cls = typeof element.className === "string" ? element.className.trim() : "";
    if (cls) s += "." + cls.split(/\s+/).slice(0, 2).join(".");
    const text = (element.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40);
    return text ? `${s} “${text}”` : s;
  };

  const remind = (reason, e) => {
    const now = Date.now();
    if (now - lastSent < MIN_INTERVAL_MS && !(lastActAt > lastSent)) return freePage();
    lastSent = now;
    // The dialog path below has usually frozen the page already; this covers
    // "update", where nothing is certain until the burst has been weighed.
    if (autoLikely) holdPage();
    // What the burst amounted to, for the panel's log — the decision stays
    // on the panel side, this is evidence only.
    const detail = {
      url: location.href,
      count: e ? e.count : 0,
      controls: e && e.controls ? e.controls : 0,
      areaPct: e ? Math.round((e.area / viewportArea()) * 100) : 0,
      samples: e && e.samples ? e.samples.slice(0, 3) : []
    };
    try {
      chrome.runtime.sendMessage({ type: "rc-remind", sessionId, reason, detail }).then(
        (reply) => {
          if (!active) return;
          // `auto` gates the pre-emptive freeze below: somebody who turned
          // auto-capture off to quiet a noisy page must not get that page
          // stuttering instead.
          autoLikely = !!(reply && reply.auto);
          if (!reply || !reply.capturing) freePage();
        },
        () => { if (active) { autoLikely = false; freePage(); } }   // panel closed
      );
    } catch {
      autoLikely = false;
      freePage();
    }
  };

  // SingleFile's own progress UI must not count as page change
  const isCaptureUi = (node) =>
    node.classList && node.classList.contains("single-file-ui-element");

  const areaOf = (element) => {
    try {
      const rect = element.getBoundingClientRect();
      return rect.width * rect.height;
    } catch { return 0; }
  };
  const viewportArea = () => window.innerWidth * window.innerHeight;

  const markDialogSeen = (root) => {
    const seen = (d) => {
      const visible = areaOf(d) > 0;
      dialogWasVisible.set(d, visible);
      if (visible) openLayers.add(d);
    };
    if (root.matches && root.matches(DIALOG_SEL)) seen(root);
    if (root.querySelectorAll) {
      for (const d of root.querySelectorAll(DIALOG_SEL)) seen(d);
    }
  };

  const sample = (label, element) => {
    if (evidence.samples.length < 3) evidence.samples.push(`${label}${describe(element)}`);
  };

  // Record the containers under `root` that are not rendered right now, and
  // stop at each one: a hidden `.screen` is worth a single entry, not the two
  // hundred elements inside it. That pruning is what keeps this affordable —
  // the walk only descends through what is actually on screen.
  const markHiddenBlocks = (root) => {
    if (!root || !root.children) return;
    for (const child of root.children) {
      if (!(child instanceof Element) || isCaptureUi(child)) continue;
      if (child.matches(BLOCK_SEL) && areaOf(child) === 0) { hiddenBlocks.add(child); continue; }
      markHiddenBlocks(child);
    }
  };

  // One element that was hidden and is now big enough to be a view. Returns
  // whether it fired, so the caller can keep the burst alive.
  const noteRevealed = (element) => {
    if (!(element instanceof Element) || !hiddenBlocks.has(element)) return false;
    if (areaOf(element) < viewportArea() * REVEAL_FRACTION) return false;
    hiddenBlocks.delete(element);
    if (!evidence) evidence = { dialog: false, reveal: false, count: 0, area: 0, held: false, samples: [] };
    evidence.reveal = true;
    sample("revealed view: ", element);
    // The view this one replaced is now hidden, so pick it up as a candidate:
    // the way back (editor → list) needs its own snapshot just as much.
    markHiddenBlocks(element.parentElement);
    return true;
  };

  // Text written into an element that already exists — a validation
  // message, a toast, a counter — adds no element, so noteAdded never sees
  // it. Ledgerly refusing an empty rejection reason shows only a toast, and
  // the refusal the walkthrough script asks to be captured never was. Only
  // visible, non-blank text counts, and it only matters in the post-action
  // window below (after a press or Enter, not typing, so a live preview
  // mirroring keystrokes stays throttled).
  const noteText = (node) => {
    const parent = node && node.parentElement;
    if (!parent || !/\S/.test(node.textContent || "")) return false;
    if (parent.closest(".single-file-ui-element") || areaOf(parent) === 0) return false;
    if (!evidence) evidence = { dialog: false, reveal: false, count: 0, area: 0, held: false, samples: [] };
    evidence.text = (evidence.text || 0) + 1;
    if (!evidence.samples.length) sample("text: ", parent);
    return true;
  };

  const noteAdded = (element) => {
    if (isCaptureUi(element)) return;
    // A dialog arriving in the DOM, or arriving inside an added subtree
    if (element.matches(DIALOG_SEL) && areaOf(element) > 0) { evidence.dialog = true; sample("dialog: ", element); markDialogSeen(element); return; }
    const inner = element.querySelector && element.querySelector(DIALOG_SEL);
    if (inner && areaOf(inner) > 0) { evidence.dialog = true; sample("dialog: ", inner); markDialogSeen(element); return; }
    markDialogSeen(element);
    // A large fixed/absolute overlay (lightboxes, drawers, custom modals)
    try {
      const style = getComputedStyle(element);
      if ((style.position === "fixed" || style.position === "absolute") &&
          areaOf(element) > viewportArea() * OVERLAY_FRACTION) {
        evidence.dialog = true;
        openLayers.add(element);
        sample("overlay: ", element);
        return;
      }
    } catch { /* detached mid-burst */ }
    evidence.count += 1 + Math.min(element.getElementsByTagName("*").length, 500);
    evidence.area += areaOf(element);
    sample("added: ", element);
  };

  const evaluate = () => {
    cancelTimer(timer);
    timer = null;
    cancelTimer(deadline);
    deadline = null;
    const e = evidence;
    evidence = null;
    if (!e) return;
    if (e.dialog) return remind("dialog", e);
    // A revealed view is as unambiguous as a dialog: nothing else flips a
    // screen-sized block from hidden to visible, and the snapshot that is
    // missing without it is the one the next several steps act inside.
    if (e.reveal) return remind("reveal", e);
    // A dismissed dialog hands the page underneath back — the screen the
    // next steps act on.
    if (e.closed) return remind("closed", e);
    if (e.count >= COUNT_THRESHOLD || e.area >= viewportArea() * AREA_FRACTION) {
      return remind("update", e);
    }
    // The post-action bar — see ACTION_WINDOW_MS above. A control unlocked
    // (or locked) by the action clears it on its own: see LOCKABLE_SEL.
    if (Date.now() - lastUserEventAt <= ACTION_WINDOW_MS &&
        (e.count >= ACTION_COUNT_THRESHOLD ||
         e.area >= viewportArea() * ACTION_AREA_FRACTION ||
         e.controls >= 1)) {
      return remind("update", e);
    }
    // New visible text right after a deliberate act (see noteText).
    if (e.text && Date.now() - lastActAt <= ACTION_WINDOW_MS && lastTypedAt < lastActAt) remind("update", e);
  };

  const observer = observeMutations((mutations) => {
    if (!armed) return;
    let saw = false;
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        if (noteText(mutation.target)) saw = true;
        continue;
      }
      if (mutation.type === "childList") {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 3) { if (noteText(node)) saw = true; continue; }
          if (!(node instanceof Element) || isCaptureUi(node)) continue;
          if (!evidence) evidence = { dialog: false, reveal: false, count: 0, area: 0, held: false, samples: [] };
          noteAdded(node);
          saw = true;
        }
      } else if (mutation.type === "attributes") {
        // An existing dialog being revealed (open/class/style/hidden toggles)
        const element = mutation.target;
        if (!(element instanceof Element) || isCaptureUi(element)) continue;
        // A control locked or unlocked — see LOCKABLE_SEL. Compared against
        // the old value because re-asserting the same state (a render that
        // sets `disabled = true` on a field that already was) still queues a
        // record, and that changes nothing on screen.
        const name = mutation.attributeName;
        if (name === "disabled" || name === "readonly") {
          const now = element.hasAttribute(name);
          if (now !== (mutation.oldValue !== null) && element.matches(LOCKABLE_SEL) &&
              areaOf(element) > 0) {
            if (!evidence) evidence = { dialog: false, reveal: false, count: 0, area: 0, held: false, samples: [] };
            evidence.controls = (evidence.controls || 0) + 1;
            sample(now ? "locked: " : "unlocked: ", element);
            saw = true;
          }
          continue;
        }
        // The attribute rarely lands on the dialog itself. The common
        // hand-rolled modal is a full-screen backdrop carrying the show/hide
        // class with role="dialog" on the panel *inside* it, and that panel
        // never mutates — so matching only the mutation target dropped the
        // reveal and the modal was never captured (Mailwing's "New campaign":
        // .backdrop toggles class "on", .modal[role=dialog] sits under it).
        // Descendants are only scanned for the six attributes in
        // attributeFilter below, all of which can change what is on screen.
        const revealed = element.matches(DIALOG_SEL)
          ? [element]
          : element.querySelectorAll(DIALOG_SEL);
        for (const dialog of revealed) {
          if (isCaptureUi(dialog)) continue;
          const visible = areaOf(dialog) > 0;
          const was = dialogWasVisible.get(dialog) || false;
          dialogWasVisible.set(dialog, visible);
          if (!visible || was) continue;
          if (!evidence) evidence = { dialog: false, reveal: false, count: 0, area: 0, held: false, samples: [] };
          evidence.dialog = true;
          openLayers.add(dialog);
          sample("revealed: ", dialog);
          saw = true;
        }
        // The same toggle, one rung less formal: a plain block that was
        // hidden and now fills the screen. Checked on the mutation target and
        // its direct children, which is where the class lands in practice
        // (the section itself, or a container switching which child is on).
        // hiddenBlocks membership gates this, so an attribute mutation on
        // anything else costs a Set lookup and forces no layout.
        if (noteRevealed(element)) saw = true;
        for (const child of element.children) if (noteRevealed(child)) saw = true;
      }
    }
    if (openLayers.size && noteClosedLayers()) saw = true;
    if (saw) {
      // A dialog is unambiguous the moment it lands, so freeze on it now
      // instead of waiting the burst out — the wait is there to let the page
      // settle before it is captured, not to decide anything. `deadline` is a
      // second timer the burst cannot keep pushing back, so a page that never
      // stops mutating still gets evaluated (and unfrozen) on schedule.
      if ((evidence.dialog || evidence.reveal || evidence.closed) && !evidence.held && autoLikely &&
          (Date.now() - lastSent >= MIN_INTERVAL_MS || lastActAt > lastSent)) {
        evidence.held = true;
        holdPage();
        if (deadline === null) deadline = later(evaluate, QUIET_MS);
      }
      cancelTimer(timer);
      timer = later(evaluate, QUIET_MS);
    }
  });

  const arm = () => {
    if (armed) return;
    markDialogSeen(document.documentElement); // baseline: already-open dialogs never fire
    markHiddenBlocks(document.documentElement); // and the views waiting off-screen
    armed = true;
  };
  if (document.readyState === "complete") later(arm, ARM_DELAY_MS);
  else listen(window, "load", () => later(arm, ARM_DELAY_MS), { once: true });
  // The delay is there to sit out a page's own load burst, not to ignore the
  // person: once they act, whatever the page does next is its answer. Start
  // is usually pressed on a page that finished loading long ago, and an owner
  // filter chosen inside the first 1.5s re-rendered the whole board with the
  // detector still unarmed — the filtered board was never captured. Capture
  // phase on window, so the baseline is taken before the page's handlers run.
  for (const type of ["pointerdown", "keydown", "input", "change"]) {
    listen(window, type, arm, { capture: true, once: true });
  }

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    // oldValue is what tells a real lock/unlock from a re-asserted one
    attributeOldValue: true,
    attributeFilter: ["open", "style", "class", "hidden", "aria-modal", "aria-hidden",
                      "disabled", "readonly"]
  });
  }
})();
