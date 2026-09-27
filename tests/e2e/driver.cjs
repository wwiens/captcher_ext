// Drives a recorded page the way a person would: real CDP mouse and keyboard
// input for clicks, typing and drags, so the recorder sees the same event
// stream a human produces. Selects are the one exception — a native <select>
// popup cannot be operated through CDP input in headless Chrome, so the option
// is chosen and `change` dispatched, exactly what the popup itself does.
const { sleep } = require("./cdp.cjs");

// Injected into the page. A locator is a CSS string, or
// {sel, text, exact, nth, within, then}: `sel` narrows by selector, `text`
// by visible text (the innermost matching element wins), `within` scopes to
// another locator, `then` descends to a selector inside the match.
const FIND_SRC = `
window.__e2eFind = function find(loc) {
  if (typeof loc === "string") loc = { sel: loc };
  const norm = (s) => String(s || "").replace(/\\s+/g, " ").trim();
  const vis = (el) => {
    const r = el.getBoundingClientRect();
    if (!(r.width > 0 && r.height > 0)) return false;
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.display === "none" || cs.visibility === "hidden") return false;
    }
    return true;
  };
  let roots = [document];
  if (loc.within) { const w = find(loc.within); if (!w) return null; roots = [w]; }
  let cands = roots.flatMap((r) => [...r.querySelectorAll(loc.sel || "*")]).filter(vis);
  if (loc.text != null) {
    const t = norm(loc.text);
    cands = cands.filter((el) => {
      const s = norm(el.innerText || el.value || el.getAttribute("aria-label") || "");
      return loc.exact ? s === t : s.includes(t);
    });
    cands = cands.filter((el) => !cands.some((o) => o !== el && el.contains(o)));
  }
  let el = cands.at(loc.nth || 0) || null;
  if (el && loc.then) el = [...el.querySelectorAll(loc.then)].find(vis) || null;
  return el;
};`;

class Driver {
  constructor(cdp, session) { this.cdp = cdp; this.s = session; }

  async install() { await this.cdp.eval(this.s, FIND_SRC); }

  async eval(expr) { return this.cdp.eval(this.s, expr); }

  // Scrolls the element into view and returns its centre, plus what a
  // hit-test at that point finds (so a click that would land on an overlay is
  // reported instead of silently missing).
  async locate(loc) {
    await this.install();
    const r = await this.eval(`(() => {
      const el = __e2eFind(${JSON.stringify(loc)});
      if (!el) return null;
      el.scrollIntoView({ block: "center", inline: "center", behavior: "instant" });
      const b = el.getBoundingClientRect();
      const x = b.left + b.width / 2, y = b.top + b.height / 2;
      const hit = document.elementFromPoint(x, y);
      return { x, y, w: b.width, h: b.height, tag: el.tagName.toLowerCase(),
               covered: !(hit && (hit === el || el.contains(hit) || hit.contains(el))),
               hit: hit ? hit.tagName.toLowerCase() + (hit.className && typeof hit.className === "string" ? "." + hit.className.split(" ")[0] : "") : null };
    })()`);
    if (!r) throw new Error(`Element not found: ${JSON.stringify(loc)}`);
    return r;
  }

  async mouse(type, x, y, extra = {}) {
    await this.cdp.call("Input.dispatchMouseEvent", { type, x, y, button: "left", ...extra }, this.s);
  }

  async click(loc) {
    const p = await this.locate(loc);
    if (p.covered) throw new Error(`Click target is covered by ${p.hit}: ${JSON.stringify(loc)}`);
    await this.mouse("mouseMoved", p.x, p.y, { button: "none" });
    await sleep(60);
    await this.mouse("mousePressed", p.x, p.y, { clickCount: 1 });
    await sleep(40);
    await this.mouse("mouseReleased", p.x, p.y, { clickCount: 1 });
    return p;
  }

  async key(key) {
    const codes = { Enter: [13, "\r"], Escape: [27, ""], Tab: [9, ""], ArrowDown: [40, ""],
                    ArrowUp: [38, ""], ArrowRight: [39, ""], End: [35, ""], Backspace: [8, ""] };
    const [vk, text] = codes[key] || [key.toUpperCase().charCodeAt(0), key];
    const base = { key, code: key.length === 1 ? `Key${key.toUpperCase()}` : key, windowsVirtualKeyCode: vk };
    await this.cdp.call("Input.dispatchKeyEvent", { type: text ? "keyDown" : "rawKeyDown", ...base, ...(text ? { text } : {}) }, this.s);
    await this.cdp.call("Input.dispatchKeyEvent", { type: "keyUp", ...base }, this.s);
  }

  // Click into the field, clear it the way a person would (select all), then
  // type character by character so per-keystroke listeners (live previews)
  // fire as they do for a human.
  async type(loc, text, { clear = true } = {}) {
    await this.click(loc);
    await sleep(80);
    if (clear) {
      await this.eval(`(() => { const el = document.activeElement;
        if (el && el.select) el.select();
        else if (el && el.isContentEditable) document.execCommand("selectAll"); })()`);
      if (text === "") {
        await this.key("Backspace");
        return;
      }
    } else {
      await this.key("End");   // continue a prefilled value, as a person would
    }
    for (const ch of text) {
      await this.cdp.call("Input.insertText", { text: ch }, this.s);
      await sleep(18);
    }
  }

  // Choose an option by its visible text (or value) and fire what the native
  // popup fires. Focus first, so blur/focus-dependent pages behave.
  // `option` is the visible text (or value), or {last: true} / {index: n}.
  async select(loc, option) {
    const p = await this.locate(loc);
    const ok = await this.eval(`(() => {
      const el = __e2eFind(${JSON.stringify(loc)});
      if (!el || el.tagName !== "SELECT") return { error: "not a select" };
      const want = ${JSON.stringify(option)};
      const opts = [...el.options];
      const opt = typeof want === "object"
        ? (want.last ? opts[opts.length - 1] : opts[want.index])
        : opts.find((o) => o.textContent.trim() === want) ||
          opts.find((o) => o.value === want) ||
          opts.find((o) => o.textContent.trim().includes(want));
      if (!opt) return { error: "no option " + JSON.stringify(want) + " in [" + opts.map((o) => o.textContent.trim()).join(" | ") + "]" };
      el.focus();
      el.value = opt.value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return { chosen: opt.textContent.trim(), value: opt.value };
    })()`);
    if (ok.error) throw new Error(`select ${JSON.stringify(loc)}: ${ok.error}`);
    return { ...p, ...ok };
  }

  // A native date / datetime-local field, filled from the keyboard the way a
  // person does: click into its first segment and type the digits (en-US
  // order: month, day, year[, hour, minute]).
  async date(loc, digits) {
    const p = await this.locate(loc);
    await this.mouse("mouseMoved", p.x - p.w / 2 + 14, p.y, { button: "none" });
    await this.mouse("mousePressed", p.x - p.w / 2 + 14, p.y, { clickCount: 1 });
    await this.mouse("mouseReleased", p.x - p.w / 2 + 14, p.y, { clickCount: 1 });
    await sleep(80);
    for (const ch of digits) {
      if (ch === "›") { await this.key("ArrowRight"); await sleep(40); continue; }   // next segment
      const vk = /\d/.test(ch) ? 48 + Number(ch) : ch.toUpperCase().charCodeAt(0);
      const base = { key: ch, code: /\d/.test(ch) ? `Digit${ch}` : `Key${ch.toUpperCase()}`, windowsVirtualKeyCode: vk };
      await this.cdp.call("Input.dispatchKeyEvent", { type: "keyDown", ...base, text: ch }, this.s);
      await this.cdp.call("Input.dispatchKeyEvent", { type: "keyUp", ...base }, this.s);
      await sleep(40);
    }
    return { ...p, value: await this.eval(`__e2eFind(${JSON.stringify(loc)}).value`) };
  }

  // Pointer drag with real travel. Native HTML5 drag-and-drop is intercepted
  // (Input.setInterceptDrags) and replayed with dispatchDragEvent, which is
  // how CDP delivers dragenter/dragover/drop to a page.
  async drag(fromLoc, toLoc) {
    const a = await this.locate(fromLoc);
    const b = await this.locate(toLoc);
    let dragData = null;
    const onIntercept = (params, sid) => { if (sid === this.s) dragData = params.data; };
    this.cdp.on("Input.dragIntercepted", onIntercept, this.s);
    await this.cdp.call("Input.setInterceptDrags", { enabled: true }, this.s);
    await this.mouse("mouseMoved", a.x, a.y, { button: "none" });
    await this.mouse("mousePressed", a.x, a.y, { clickCount: 1 });
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
      await this.mouse("mouseMoved", a.x + (b.x - a.x) * i / steps, a.y + (b.y - a.y) * i / steps,
                       { buttons: 1 });
      await sleep(25);
      if (dragData) break;
    }
    if (dragData) {
      for (const type of ["dragEnter", "dragOver"]) {
        await this.cdp.call("Input.dispatchDragEvent", { type, x: b.x, y: b.y, data: dragData }, this.s);
        await sleep(60);
      }
      await this.cdp.call("Input.dispatchDragEvent", { type: "drop", x: b.x, y: b.y, data: dragData }, this.s);
    }
    await this.mouse("mouseReleased", b.x, b.y, { clickCount: 1 });
    await this.cdp.call("Input.setInterceptDrags", { enabled: false }, this.s);
    return { from: a, to: b, native: !!dragData };
  }
}

module.exports = { Driver, FIND_SRC };
