// Input shield — runs inside the page (isolated world), one instance per frame.
//
// While a capture is coming, user actions on the page have to be blocked: a
// click mid-capture tears the snapshot (part of the DOM serialized before the
// change, part after), and a click that navigates kills it outright. Blocking
// input is half the job; the other half is telling the person whose screen has
// just gone unresponsive why, and then that it worked — hence a modal card on
// a scrim rather than a pill they can miss. The shield goes up two ways:
//
//   hold(ms)  — speculative, self-releasing. Taken the moment something that
//               *will* trigger a capture is seen (recorder.js's change
//               detector) or a capture is queued behind another one — i.e.
//               before the engine has been asked for anything. Always carries
//               a deadline, so a lost message can never strand a frozen page.
//   capture() — the real thing. Replaces the hold with a bounded capture lease;
//               done() or release() normally ends it earlier.
//
// …and comes down two ways. done() is the success path: it swaps the card to a
// confirmation and holds it long enough to be read (see MIN_VISIBLE_MS), so a
// capture that finishes in 300ms still announces itself. release() is the
// failure path and drops immediately — there is nothing to confirm, and the
// panel is already showing the error.
//
// Loaded both as a content script (alongside recorder.js, while recording) and
// via executeScript (single-page captures, and subframes, which the recorder
// does not reach) — hence the idempotence guard.
(() => {
  if (window.__labShield) return;

  // Everything a user generates. `scroll` is deliberately absent:
  // loadDeferredImages scrolls the page itself, and programmatic scrolling
  // does not go through wheel/touch.
  // Pointer events too: dialog libraries (Radix, shadcn, Headless UI) dismiss
  // on pointerdown outside, which would close a dialog mid-capture.
  const TYPES = [
    "pointerdown", "pointerup", "pointercancel",
    "mousedown", "mouseup", "click", "dblclick", "auxclick", "contextmenu",
    "keydown", "keypress", "keyup", "wheel", "touchstart", "touchend",
    "touchmove", "submit", "dragstart", "paste", "cut"
  ];

  // The modal is up for at least this long, so a fast capture cannot flash past
  // unnoticed — the whole point is that nobody is left wondering whether the
  // page was captured. Counted from when the card first appeared, which may be
  // a speculative hold, so a hold that becomes a capture does not restart it.
  const MIN_VISIBLE_MS = 2000;
  // …and the confirmation is always readable, even after a capture that ran
  // well past MIN_VISIBLE_MS on its own.
  const MIN_DONE_MS = 600;
  // Independent of the panel: closing it must not strand page input.
  const CAPTURE_LEASE_MS = 150000;

  const COPY = {
    hold: {
      title: "Getting ready to capture",
      body: "The page changed. Input is paused while Captcher prepares a snapshot."
    },
    capture: {
      title: "Capturing this page",
      body: "Captcher is saving a snapshot of this screen. Please don’t click or type."
    },
    done: {
      // Not "you can carry on": the scrim is still up while this is read, so
      // an invitation to act would be one the page cannot honour yet.
      title: "Page captured",
      body: "This screen has been saved to your walkthrough."
    }
  };

  // Capture phase on window runs before the page's own handlers AND before
  // recorder.js's document-level listeners, so a blocked action is neither
  // performed nor recorded as a walkthrough step.
  const stop = (event) => {
    event.stopImmediatePropagation();
    if (event.cancelable) event.preventDefault();
  };

  let up = false;
  let overlay = null;
  let card = null;
  let track = null;      // the 2px progress track along the card's bottom edge
  let fill = null;       // …and its travelling fill, the surface's one accent
  let titleEl = null;
  let bodyEl = null;
  let shown = null;      // which COPY key is on screen
  let raisedAt = 0;      // when the card first appeared, for the MIN_VISIBLE_MS floor
  let captureDeadline = null;
  let deadline = null;   // non-null exactly while the shield is a speculative hold
  let settle = null;     // non-null exactly while a confirmed capture serves out its floor

  const reducedMotion = () => {
    try { return matchMedia("(prefers-reduced-motion: reduce)").matches; }
    catch { return false; }
  };

  // This is drawn on somebody else's page, so every element is styled from
  // `all:initial` and every declaration goes on !important — inline !important
  // outranks anything an author stylesheet can say. Without the reset a plain
  // `div { max-width: 900px }` on the host page is enough to shrink the scrim
  // off half the viewport (which is exactly what a real page did). `all` skips
  // `direction`, hence the explicit ltr below: an RTL page would otherwise
  // mirror the layout.
  const style = (node, css) => {
    node.style.cssText = "";
    node.style.setProperty("all", "initial", "important");
    for (const declaration of css.split(";")) {
      const colon = declaration.indexOf(":");
      if (colon < 0) continue;
      node.style.setProperty(
        declaration.slice(0, colon).trim(),
        declaration.slice(colon + 1).trim(),
        "important"
      );
    }
  };

  // The capture lock is a Captcher surface (Brand Guide v1, UI v2): a white
  // card with 18px corners and the one soft shadow the system allows for
  // floating surfaces, the stepping-squares mark, a small caps label, and the
  // page dimmed by 8% and NEVER blurred — blurring a page we are about to
  // freeze implies we are altering it. No purple, ever.
  //
  // Values are the platform tokens by hand rather than by name: this is drawn
  // in someone else's document, where a custom property from our stylesheet
  // does not exist. If they move in captcher_app/static/shadowcapture.css they
  // move here in the same commit.
  //
  // The brand faces are not loaded here. They are bundled for the side panel,
  // but reaching them from a host page would mean an @font-face rule in a
  // stylesheet injected into somebody else's document, and the `all:initial`
  // + !important discipline below exists precisely to avoid touching that
  // document. The identity survives it: the mark, the card and the colours
  // carry the brand.
  const UI = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";
  const SURFACE = "#FFFFFF";     // --surface
  const HAIRLINE = "#E6E7EC";    // --border (Line)
  const TRACK = "#E6E7EC";       // the empty progress track
  const TEXT = "#14151A";        // --text (Ink)
  const TEXT_SOFT = "#4B4F5A";   // --text-soft (Slate)
  const LABEL = "#6B6F7B";       // --muted (Steel)
  const SKY = "#29B6FF";         // progress, "look here"
  const MINT = "#3ECFA2";        // success is mint and never derived from progress
  const SHADOW = "0 10px 30px rgba(20,21,26,.16), 0 1px 2px rgba(20,21,26,.06)";
  // The mark's squares: Coral, Sky, Indigo, Mint, Coral (x, y, size on the
  // 526-unit grid). Frame bars are Ink.
  const MARK_FRAME = [[230, 0, 296, 50], [476, 0, 50, 270], [0, 256, 50, 270], [0, 476, 296, 50]];
  const MARK_SQUARES = [[0, 72, "#FF6A5C"], [92, 90, "#29B6FF"], [202, 122, "#3B49C6"],
                        [344, 90, "#3ECFA2"], [454, 72, "#FF6A5C"]];

  // A 3px track with a travelling sky fill: the same progress construction
  // the panel and the player use.
  // It is stepped by hand rather than animated because a Web Animations
  // keyframe loses to an !important inline declaration, and giving that up is
  // not worth it — the !important reset above is the only thing standing
  // between this modal and a page that styles `div`. Eleven steps a second is
  // free and reads as deliberate.
  const SWEEP_FROM = -40;
  const SWEEP_TO = 140;
  const SWEEP_STEP = 9;
  let sweep = SWEEP_FROM;
  let sweeper = null;
  const spin = () => {
    if (sweeper || reducedMotion() || !fill) return;
    sweeper = setInterval(() => {
      sweep = sweep >= SWEEP_TO ? SWEEP_FROM : sweep + SWEEP_STEP;
      fill?.style.setProperty("margin-left", `${sweep}%`, "important");
    }, 90);
  };
  const stopSpin = () => {
    clearInterval(sweeper);
    sweeper = null;
  };

  // Marked single-file-ui-element throughout: that is what keeps the modal out
  // of the captured HTML (SingleFile strips those nodes) and out of the change
  // detector (recorder.js ignores them).
  const element = (css) => {
    const node = document.createElement("div");
    node.className = "single-file-ui-element";
    style(node, css);
    return node;
  };

  const build = () => {
    // The page is dimmed by 8% and never blurred. That is enough to read as a
    // veil over a frozen page without pretending the page has changed — and it
    // never reaches the snapshot either, because every node here is marked
    // single-file-ui-element.
    overlay = element("position:fixed;top:0;left:0;right:0;bottom:0;" +
      "box-sizing:border-box;width:auto;height:auto;max-width:none;max-height:none;" +
      "z-index:2147483647;background:rgba(20,21,26,.08);cursor:progress;" +
      "display:flex;align-items:center;justify-content:center;padding:16px;direction:ltr");

    // A white card, one hairline, 18px corners and a soft shadow: it floats
    // over somebody else's page, which is exactly where UI v2 allows one.
    // display is spelled out on every node: `all:initial` resets it to inline,
    // so a block that is a block by default no longer is.
    card = element("display:block;box-sizing:border-box;position:relative;overflow:hidden;" +
      `background:${SURFACE};color:${TEXT};border:1px solid ${HAIRLINE};border-radius:18px;` +
      `box-shadow:${SHADOW};padding:18px 20px 22px;width:330px;max-width:100%;text-align:left`);
    card.setAttribute("role", "status");
    card.setAttribute("aria-live", "polite");

    // The mark, 18px, from plain boxes: a pseudo-element or an <img> would need
    // a stylesheet or a data: URL, and a strict host CSP can refuse the latter.
    const MARK_PX = 18, unit = MARK_PX / 526;
    const px = (v) => `${(v * unit).toFixed(2)}px`;
    const mark = element("display:block;position:relative;flex:none;" +
      `box-sizing:border-box;width:${MARK_PX}px;height:${MARK_PX}px`);
    for (const [x, y, w, h] of MARK_FRAME) {
      mark.appendChild(element(`display:block;position:absolute;left:${px(x)};top:${px(y)};` +
        `width:${px(w)};height:${px(h)};background:${TEXT}`));
    }
    for (const [at, size, colour] of MARK_SQUARES) {
      mark.appendChild(element(`display:block;position:absolute;left:${px(at)};top:${px(at)};` +
        `width:${px(size)};height:${px(size)};background:${colour}`));
    }

    // Small caps: the surface's label, the only place caps are allowed.
    const labelEl = element(`display:block;font:600 11px/1.4 ${UI};` +
      `letter-spacing:.08em;text-transform:uppercase;color:${LABEL}`);
    labelEl.textContent = "Captcher";

    const lockup = element("display:flex;box-sizing:border-box;align-items:center;" +
      "gap:10px;margin:0 0 10px");
    lockup.append(mark, labelEl);

    titleEl = element(`display:block;font:600 15px/1.35 ${UI};color:${TEXT};margin:0 0 4px`);
    bodyEl = element(`display:block;font:400 13px/1.5 ${UI};color:${TEXT_SOFT}`);

    track = element(`display:block;position:absolute;left:0;right:0;bottom:0;` +
      `height:3px;background:${TRACK};overflow:hidden`);
    fill = element(`display:block;height:3px;width:30%;margin-left:${SWEEP_FROM}%;` +
      `background:${SKY}`);
    track.appendChild(fill);

    card.append(lockup, titleEl, bodyEl, track);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  };

  const paint = (state) => {
    if (shown === state) return;
    shown = state;
    titleEl.textContent = COPY[state].title;
    bodyEl.textContent = COPY[state].body;
    if (state === "done") {
      // Sky means "working"; mint means "that worked". The bar filling to its
      // full width in mint is the confirmation — no glyph, no icon.
      stopSpin();
      style(track, `display:block;position:absolute;left:0;right:0;bottom:0;` +
        `height:3px;background:${TRACK};overflow:hidden`);
      style(fill, `display:block;height:3px;width:100%;margin-left:0;background:${MINT}`);
      return;
    }
    sweep = SWEEP_FROM;
    style(fill, `display:block;height:3px;width:30%;margin-left:${SWEEP_FROM}%;` +
      `background:${SKY}`);
    spin();
  };

  const raise = (state) => {
    if (!up) {
      up = true;
      raisedAt = Date.now();
      for (const type of TYPES) {
        window.addEventListener(type, stop, { capture: true, passive: false });
      }
    }
    // Modal in the top frame only — subframes sit under it, so a second one
    // would just be invisible DOM churn.
    if (window.top !== window || !document.body) return;
    if (!overlay) build();
    paint(state);
  };

  const lower = () => {
    clearTimeout(captureDeadline);
    captureDeadline = null;
    if (!up) return;
    up = false;
    for (const type of TYPES) {
      window.removeEventListener(type, stop, { capture: true });
    }
    stopSpin();
    shown = null;
    if (overlay) {
      overlay.remove();
      overlay = card = track = fill = titleEl = bodyEl = null;
    }
  };

  // A background tab has its timers throttled to roughly one a second, and
  // after a few minutes to one a minute, so the floor below can overrun by a
  // lot. Nobody is reading a confirmation in a tab they have left, so drop it
  // as soon as the tab goes away. Deliberately limited to the confirmation: a
  // capture's own shield is blocking input for a run that is still going, and
  // a hold has its deadline.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && settle !== null) {
      clearTimeout(settle);
      settle = null;
      lower();
    }
  });

  window.__labShield = {
    hold(ms) {
      if (up && deadline === null && settle === null) return false;  // a capture owns it
      clearTimeout(settle);
      settle = null;
      clearTimeout(deadline);
      deadline = setTimeout(() => { deadline = null; lower(); }, ms);
      raise("hold");
      return true;
    },

    capture() {
      clearTimeout(captureDeadline);
      captureDeadline = setTimeout(lower, CAPTURE_LEASE_MS);
      clearTimeout(deadline);
      deadline = null;
      clearTimeout(settle);
      settle = null;
      raise("capture");
      return true;
    },

    // Drops a speculative hold and nothing else. A capture's shield is never
    // yanked out from under it, so a late "no capture is coming" reply — or a
    // hold whose capture already started — is harmless. No floor here: a hold
    // that came to nothing has nothing to announce, and a page whose owner
    // turned auto-capture off must not stutter on every burst.
    releaseHold() {
      if (deadline === null) return false;
      clearTimeout(deadline);
      deadline = null;
      lower();
      return true;
    },

    // The capture worked: confirm it, and keep the modal (and the input block)
    // up until it has been on screen long enough to be read.
    done() {
      clearTimeout(captureDeadline);
      captureDeadline = null;
      clearTimeout(deadline);
      deadline = null;
      if (!up) return false;
      if (settle !== null) return true;
      raise("done");
      const wait = Math.max(MIN_DONE_MS, MIN_VISIBLE_MS - (Date.now() - raisedAt));
      settle = setTimeout(() => { settle = null; lower(); }, wait);
      return true;
    },

    release() {
      // A confirmation in flight owns the shield: it comes down on its own
      // within MIN_VISIBLE_MS, so this can neither cut it short nor strand it.
      if (settle !== null) return true;
      clearTimeout(deadline);
      deadline = null;
      lower();
      return true;
    }
  };
  // NOTE: the panel's screenshot veil (veilShield in panel.js) deliberately
  // does NOT go through this object — it hides the overlay by its
  // single-file-ui-element class instead, so it also works on a document
  // whose shield instance predates an extension update (this file's
  // idempotence guard keeps the old object alive).
})();
