#!/usr/bin/env node
// End-to-end take: record a scripted flow on a sample site through the real
// side panel, send it to a local Captcher server, run AI authoring exactly as
// the catalog does, then replay the authored walkthrough in the popup player
// and measure every step.
//
//   node tests/e2e/run.cjs <flow-id> [--no-author] [--headful]
//   node tests/e2e/run.cjs --assess <walkthrough-id> [--flow <flow-id>]
//
// Needs: Chrome for Testing 152+, the app on :8080, the sample sites on
// :8000, and a session cookie in $E2E_OUT/cookie.txt (minted locally for the
// member the walkthroughs belong to). Every run writes to $E2E_OUT/runs/.
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { CDP, sleep, until } = require("./cdp.cjs");
const { Driver } = require("./driver.cjs");
const FLOWS = require("./flows.cjs");

const EXT = path.resolve(__dirname, "../..");
const OUT = process.env.E2E_OUT || path.join(EXT, ".e2e");
const APP = process.env.E2E_APP || "http://127.0.0.1:8080";
const SITES = process.env.E2E_SITES || "http://127.0.0.1:8000";
const CHROME = process.env.CHROME_TEST_BINARY ||
  "/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const BUDGET = Number(process.env.E2E_BUDGET || 100);
const VIEW = { w: 1440, h: 900 };

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const opt = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : null; };
const COOKIE = fs.readFileSync(path.join(OUT, "cookie.txt"), "utf8").trim();

let child, cdp, runDir, logLines = [];
function note(line) {
  const s = `[${new Date().toISOString().slice(11, 19)}] ${line}`;
  logLines.push(s);
  console.log(s);
}
const save = (name, data) =>
  fs.writeFileSync(path.join(runDir, name), typeof data === "string" ? data : JSON.stringify(data, null, 2));

async function api(method, p, body) {
  const r = await fetch(APP + p, {
    method,
    headers: { Cookie: COOKIE, Origin: APP, ...(body ? { "Content-Type": "application/json" } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text.slice(0, 500) }; }
  return { status: r.status, json };
}

// ---------------------------------------------------------------------------
// Browser
// ---------------------------------------------------------------------------
async function launch() {
  const profile = path.join(OUT, "profile");
  fs.mkdirSync(profile, { recursive: true });
  fs.rmSync(path.join(profile, "DevToolsActivePort"), { force: true });
  child = spawn(CHROME, [
    ...(flag("--headful") ? [] : ["--headless=new"]),
    "--no-first-run", "--no-default-browser-check", "--disable-background-networking",
    "--hide-scrollbars", "--user-data-dir=" + profile, "--remote-debugging-port=0",
    "--disable-extensions-except=" + EXT, "--load-extension=" + EXT,
    "--window-size=1860,1040", "--screen-info={0,0 2560x1600}", "about:blank",
  ], { stdio: ["ignore", "ignore", "pipe"] });
  let stderr = ""; child.stderr.on("data", (b) => { stderr += b; });
  await until(() => fs.existsSync(path.join(profile, "DevToolsActivePort")),
              { timeout: 30000, what: "Chrome debug port: " + stderr.slice(-400) });
  const [port, endpoint] = fs.readFileSync(path.join(profile, "DevToolsActivePort"), "utf8").trim().split("\n");
  cdp = new CDP("ws://127.0.0.1:" + port + endpoint);
  await cdp.ready;
}

async function findWorker() {
  return until(async () => {
    const { targetInfos } = await cdp.call("Target.getTargets");
    for (const t of targetInfos.filter((t) => t.type === "service_worker" && t.url.endsWith("/background.js"))) {
      const s = await cdp.attach(t.targetId);
      const name = await cdp.eval(s, 'typeof chrome !== "undefined" && chrome.runtime?.getManifest().name').catch(() => null);
      if (name === "Captcher Recorder") return { session: s, extensionId: new URL(t.url).host };
    }
    return null;
  }, { timeout: 15000, what: "extension service worker" });
}

async function pageTarget(urlPrefix) {
  return until(async () => {
    const { targetInfos } = await cdp.call("Target.getTargets");
    const t = targetInfos.find((t) => t.type === "page" && t.url.startsWith(urlPrefix));
    return t ? t.targetId : null;
  }, { timeout: 15000, what: "page " + urlPrefix });
}

// The native side panel only opens from a user gesture in an extension page,
// so — like chrome-lifecycle-smoke.cjs — a trusted click on a button in the
// extension's help page opens it for the recorded tab's window.
async function openPanel(worker, extensionId, tab) {
  const help = await cdp.call("Target.createTarget", { url: `chrome-extension://${extensionId}/help.html` });
  const hs = await cdp.attach(help.targetId);
  await until(() => cdp.eval(hs, 'location.pathname === "/help.html" && document.readyState === "complete" && !!document.body'),
              { what: "help page" });
  const point = await cdp.eval(hs, `(() => { document.body.replaceChildren();
    const b = document.createElement("button"); b.textContent = "Open recorder";
    b.style.cssText = "position:fixed;left:20px;top:20px;width:200px;height:50px";
    b.onclick = () => chrome.sidePanel.open({ windowId: ${tab.windowId} });
    document.body.append(b); return { x: 100, y: 40 }; })()`);
  await cdp.call("Input.dispatchMouseEvent", { type: "mousePressed", button: "left", clickCount: 1, ...point }, hs);
  await cdp.call("Input.dispatchMouseEvent", { type: "mouseReleased", button: "left", clickCount: 1, ...point }, hs);
  const panelUrl = `chrome-extension://${extensionId}/sidepanel/panel.html`;
  const panelId = await until(async () => {
    const { targetInfos } = await cdp.call("Target.getTargets");
    return targetInfos.find((t) => t.url === panelUrl)?.targetId;
  }, { what: "native side panel" });
  await cdp.call("Target.closeTarget", { targetId: help.targetId });
  const ps = await cdp.attach(panelId);
  await until(() => cdp.eval(ps, 'document.readyState === "complete" && typeof el !== "undefined"'), { what: "panel ready" });
  await cdp.eval(worker, `chrome.windows.update(${tab.windowId}, { focused: true })`);
  await cdp.eval(worker, `chrome.tabs.update(${tab.id}, { active: true })`);
  return ps;
}

async function sizeViewport(worker, page, tab) {
  for (let i = 0; i < 3; i++) {
    const inner = await cdp.eval(page, "({ w: innerWidth, h: innerHeight })");
    if (inner.w === VIEW.w && inner.h === VIEW.h) break;
    const win = await cdp.eval(worker, `chrome.windows.get(${tab.windowId})`);
    await cdp.eval(worker, `chrome.windows.update(${tab.windowId}, { width: ${win.width + VIEW.w - inner.w}, height: ${win.height + VIEW.h - inner.h} })`);
    await sleep(400);
  }
  // the product discards screenshots taken mid-resize: wait for stillness
  let prev, stable = 0;
  for (let i = 0; i < 100 && stable < 8; i++) {
    const v = JSON.stringify(await cdp.eval(page, "({ w: innerWidth, h: innerHeight })"));
    stable = v === prev ? stable + 1 : 0; prev = v; await sleep(100);
  }
  return cdp.eval(page, "({ w: innerWidth, h: innerHeight })");
}

// ---------------------------------------------------------------------------
// Recording
// ---------------------------------------------------------------------------
async function panelState(ps) {
  return cdp.eval(ps, `({ state: computeState(), busy: captureBusy,
    configured: serverConfigured(), status: el.wtStatus.textContent })`);
}

// Idle = the panel is recording and not capturing, and the page carries no
// capture shield, continuously for `quietMs`. A person waits for the
// "capturing" overlay to go before they act again; so does this.
async function waitIdle(ps, page, { quietMs = 900, timeout = 60000 } = {}) {
  const end = Date.now() + timeout;
  let since = null;
  while (Date.now() < end) {
    const st = await panelState(ps);
    const shield = await cdp.eval(page, '!!document.querySelector(".single-file-ui-element")').catch(() => false);
    const idle = st.state === "recording" && !st.busy && !shield;
    if (idle) { since = since || Date.now(); if (Date.now() - since >= quietMs) return; }
    else since = null;
    await sleep(120);
  }
  throw new Error("recorder never went idle");
}

async function panelLog(ps) { return cdp.eval(ps, "el.log.textContent"); }

async function record(flowId, flow, runNo) {
  const worker = await findWorker();
  await cdp.call("Storage.setCookies", { cookies: [{
    name: COOKIE.split("=")[0], value: COOKIE.slice(COOKIE.indexOf("=") + 1),
    domain: "127.0.0.1", path: "/", httpOnly: true }] });
  const stored = await cdp.eval(worker.session, 'chrome.storage.local.get("server").then(r => r.server || null)');
  const paired = !!(stored && stored.token && stored.url === APP);
  const startUrl = paired ? SITES + flow.site : APP + "/";
  const tab = await cdp.eval(worker.session, `chrome.tabs.create({ url: ${JSON.stringify(startUrl)}, active: true })`);
  for (const t of (await cdp.call("Target.getTargets")).targetInfos) {
    if (t.type === "page" && t.url === "about:blank") await cdp.call("Target.closeTarget", { targetId: t.targetId });
  }
  let ps = await openPanel(worker.session, worker.extensionId, tab);
  if (!paired) {
    note("pairing the recorder with " + APP + " through the panel");
    await until(async () => {
      const s = await cdp.eval(worker.session, 'chrome.storage.local.get("server").then(r => r.server || null)');
      return s && s.token && s.url === APP;
    }, { timeout: 45000, what: "pairing (connect state: " + await cdp.eval(ps, "typeof connectState !== 'undefined' ? connectState : '?'").catch(() => "?") + ")" });
    note("paired");
    await cdp.eval(worker.session, `chrome.tabs.update(${tab.id}, { url: ${JSON.stringify(SITES + flow.site)} })`);
  }
  const pageId = await pageTarget(SITES + flow.site);
  const page = await cdp.attach(pageId);
  await cdp.call("Page.enable", {}, page);
  await until(() => cdp.eval(page, 'document.readyState === "complete"'), { what: "site load" });
  const vp = await sizeViewport(worker.session, page, tab);
  note(`viewport ${vp.w}x${vp.h}`);
  await until(async () => { const s = await panelState(ps); return s.configured && (s.state === "idle" || s.state === "sent"); },
              { timeout: 30000, what: "panel idle + connected" });

  // Keep the manifest the panel uploads: it is the ground truth for what the
  // recorder captured, before ingest or authoring touch it.
  await cdp.eval(ps, `(() => { const orig = uploadCaptureZip;
    uploadCaptureZip = (entries, ...rest) => {
      globalThis.__e2eManifest = entries.find((e) => e.name === "walkthrough.json")?.data;
      return orig(entries, ...rest); }; })()`);

  const title = `E2E ${flowId} · run ${runNo}`;
  await cdp.eval(ps, `el.wtTitle.value = ${JSON.stringify(title)}; el.wtStart.click(); true`);
  await until(async () => (await panelState(ps)).state === "recording", { timeout: 60000, what: "recording start" });
  note("recording started");
  await waitIdle(ps, page);

  const drv = new Driver(cdp, page);
  const performed = [];
  for (const [i, step] of flow.steps.entries()) {
    const label = `${i + 1}. ${step.do} ${JSON.stringify(step.loc || step.key || step.ms)}${step.text != null ? ` "${step.text}"` : ""}${step.option ? ` → ${step.option}` : ""}`;
    note(label);
    const before = (await panelLog(ps)).length;
    let info = null, error = null;
    try {
      if (step.do === "click") info = await drv.click(step.loc);
      else if (step.do === "type") info = await drv.type(step.loc, step.text, { clear: !step.append });
      else if (step.do === "select") info = await drv.select(step.loc, step.option);
      else if (step.do === "key") info = await drv.key(step.key);
      else if (step.do === "drag") info = await drv.drag(step.loc, step.to);
      else if (step.do === "date") info = await drv.date(step.loc, step.digits);
      else if (step.do === "wait") await sleep(step.ms);
      else throw new Error("unknown step " + step.do);
    } catch (e) { error = e.message; note("  ! " + error); }
    await sleep(step.settle || 1300);
    try { await waitIdle(ps, page); } catch (e) { error = error || e.message; note("  ! " + e.message); }
    const log = (await panelLog(ps)).slice(before);
    performed.push({ ...step, info, error, panelLog: log });
    if (error && !step.optional) break;
  }
  const shot = await cdp.call("Page.captureScreenshot", { format: "png" }, page);
  fs.writeFileSync(path.join(runDir, "live-final.png"), Buffer.from(shot.data, "base64"));

  note("finishing");
  await cdp.eval(ps, "el.wtFinish.click(); true");
  const sent = await until(async () => {
    const log = await panelLog(ps);
    const m = log.match(/walkthrough sent — draft ([0-9a-f-]{36})/);
    if (m) return { id: m[1] };
    if (/send FAILED/.test(log)) return { error: log.slice(log.lastIndexOf("send FAILED"), log.lastIndexOf("send FAILED") + 300) };
    return null;
  }, { timeout: 240000, interval: 200, what: "upload" });
  const manifest = await cdp.eval(ps, "globalThis.__e2eManifest || null");
  save("panel-log.txt", await panelLog(ps));
  save("performed.json", performed);
  if (manifest) save("capture-manifest.json", JSON.parse(manifest));
  if (sent.error) throw new Error("upload failed: " + sent.error);
  note("uploaded draft " + sent.id);
  return { id: sent.id, performed, manifest: manifest ? JSON.parse(manifest) : null, title };
}

// ---------------------------------------------------------------------------
// Authoring
// ---------------------------------------------------------------------------
function budget(delta = 0) {
  const f = path.join(OUT, "budget.json");
  const b = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : { authored: 0, runs: [] };
  if (delta) { b.authored += delta; fs.writeFileSync(f, JSON.stringify(b, null, 2)); }
  return b;
}

async function author(id, flowId) {
  const b = budget();
  if (b.authored >= BUDGET) throw new Error(`authoring budget of ${BUDGET} runs spent`);
  const started = Date.now();
  const r = await api("POST", "/api/author?background=1", { walkthrough_id: id });
  if (!r.json.job_id) throw new Error(`author did not start (${r.status}): ${JSON.stringify(r.json)}`);
  const bb = budget(1); bb.runs.push({ n: bb.authored, flowId, id, at: new Date().toISOString() });
  fs.writeFileSync(path.join(OUT, "budget.json"), JSON.stringify(bb, null, 2));
  note(`authoring job ${r.json.job_id} (budget ${bb.authored}/${BUDGET})`);
  let job, lastPhase = "";
  while (true) {
    await sleep(4000);
    job = (await api("GET", "/api/jobs/" + r.json.job_id)).json;
    const ev = (job.events || []).at(-1);
    const phase = ev ? `${ev.phase || ""}: ${ev.message || ""}` : job.state;
    if (phase !== lastPhase) { note("  " + phase.slice(0, 160)); lastPhase = phase; }
    if (!["running", "queued", "pending"].includes(job.state)) break;
    if (Date.now() - started > 25 * 60000) throw new Error("authoring exceeded 25 minutes");
  }
  save("author-job.json", job);
  note(`authoring ${job.state} in ${Math.round((Date.now() - started) / 1000)}s`);
  if (job.state !== "done") throw new Error("authoring failed: " + (job.error || job.state));
  return job;
}

// ---------------------------------------------------------------------------
// Replay assessment in the popup player (/player/<id>)
// ---------------------------------------------------------------------------
const METRICS = `(() => {
  const popEl = $("step-pop"), stageEl = document.querySelector(".stage");
  const r = (b) => b && { x: Math.round(b.left), y: Math.round(b.top), w: Math.round(b.width), h: Math.round(b.height) };
  const simR = sim.getBoundingClientRect();
  const scale = sim.offsetWidth ? simR.width / sim.offsetWidth : 1;
  const t = lastTargetRect && { x: Math.round(simR.left + lastTargetRect.x * scale), y: Math.round(simR.top + lastTargetRect.y * scale),
                                w: Math.round(lastTargetRect.width * scale), h: Math.round(lastTargetRect.height * scale) };
  // The card slides to its place (a CSS transition on left/top), so its
  // on-screen box can be mid-flight; where the player PUT it is style.left/top.
  const stageR = stageEl.getBoundingClientRect();
  const pop = { x: Math.round(stageR.left + (parseFloat(popEl.style.left) || 0)),
                y: Math.round(stageR.top + (parseFloat(popEl.style.top) || 0)),
                w: popEl.offsetWidth, h: popEl.offsetHeight };
  return { idx: stepIdx, awaitingRect, bridgeReady, popHidden: popEl.classList.contains("hidden"),
           pop, stage: r(stageR), sim: r(simR),
           target: t, card: popEl.innerText.slice(0, 600) };
})()`;

// Resolve a step target exactly as bridge.js targetMatches() does, inside the
// player's capture iframe, and read the element's live state.
const TARGET_STATE = (target) => `(() => {
  const t = ${JSON.stringify(target)};
  const norm = (s) => (s || "").replace(/\\s+/g, " ").trim();
  let doc = sim.contentDocument;
  for (const f of (t.frames || [])) { const fe = doc && doc.querySelector(f); doc = fe && fe.contentDocument; }
  if (!doc) return { count: 0 };
  let els = []; try { els = [...doc.querySelectorAll(t.selector)]; } catch (e) { return { count: 0, error: e.message }; }
  if (t.text_exact) els = els.filter((e) => norm(e.textContent) === t.text_exact);
  else if (t.text) els = els.filter((e) => norm(e.textContent).includes(t.text));
  const el = els[0];
  if (!el) return { count: 0 };
  const b = el.getBoundingClientRect();
  return { count: els.length, tag: el.tagName.toLowerCase(), value: "value" in el ? el.value : null,
           selectedText: el.tagName === "SELECT" && el.selectedOptions[0] ? norm(el.selectedOptions[0].textContent) : null,
           text: norm(el.textContent).slice(0, 120), visible: b.width > 0 && b.height > 0 };
})()`;

const overlap = (a, b) => !a || !b ? 0 :
  Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) *
  Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
const inside = (a, b, tol = 2) => a.x >= b.x - tol && a.y >= b.y - tol &&
  a.x + a.w <= b.x + b.w + tol && a.y + a.h <= b.y + b.h + tol;

async function assess(id) {
  const worker = await findWorker();
  await cdp.call("Storage.setCookies", { cookies: [{
    name: COOKIE.split("=")[0], value: COOKIE.slice(COOKIE.indexOf("=") + 1),
    domain: "127.0.0.1", path: "/", httpOnly: true }] });
  const def = (await api("GET", "/api/walkthroughs/" + id)).json;
  save("walkthrough.json", def);
  const url = `${APP}/player/${id}`;
  const tab = await cdp.eval(worker.session, `chrome.tabs.create({ url: ${JSON.stringify(url)}, active: true })`);
  const ps = await cdp.attach(await pageTarget(url));
  await cdp.call("Emulation.setDeviceMetricsOverride", { width: 1600, height: 1000, deviceScaleFactor: 1, mobile: false }, ps);
  await until(() => cdp.eval(ps, "typeof walkthrough === 'object' && !!walkthrough && Array.isArray(walkthrough.steps)"), { timeout: 20000, what: "player load" });
  await until(() => cdp.eval(ps, "introOpen()"), { timeout: 10000, what: "intro modal" }).catch(() => {});
  await sleep(300);
  const intro = await cdp.call("Page.captureScreenshot", { format: "png" }, ps);
  fs.writeFileSync(path.join(runDir, "intro.png"), Buffer.from(intro.data, "base64"));
  // Start exactly as the intro's Start button does (it closes the modal).
  await cdp.eval(ps, `window.__e2eMsgs = []; addEventListener("message", (e) => { if (e.data && e.data.type) __e2eMsgs.push(e.data); });
    settings.autoAdvance = false; settings.speed = 2; dismissIntro("show"); true`);
  const results = [];
  const steps = def.steps || [];
  // Position in the player's message log where this step's messages begin.
  // Merged runs start the next step's show-me by themselves, so its
  // showme-done can land before this loop gets round to asking for it.
  let mark = 0;
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const a = step.action || {};
    const res = { i, id: step.id, title: step.title, type: a.type, issues: [], warnings: [] };
    let m;
    try {
      m = await until(async () => {
        const x = await cdp.eval(ps, METRICS);
        if (x.idx > i) return x;   // a merged run already carried on past it
        return x.idx === i && x.bridgeReady && !x.awaitingRect && !x.popHidden ? x : null;
      }, { timeout: 15000, what: `step ${i} card placement` });
    } catch (e) {
      m = await cdp.eval(ps, METRICS);
      res.issues.push("card never placed: " + e.message);
    }
    if (m.idx > i) {
      res.warnings.push("the merged run moved past this step before it could be measured");
      const k = await cdp.eval(ps, `__e2eMsgs.slice(${mark}).findIndex((x) => x.type === "showme-done")`);
      if (k >= 0) mark += k + 1;
      results.push(res);
      note(`  step ${i + 1}/${steps.length} ${a.type} "${step.title}" (passed through by its run)`);
      continue;
    }
    await sleep(700);   // let the card's position transition finish before the shot
    const settled = await cdp.eval(ps, METRICS);
    if (settled.idx === i) m = settled;   // else a merged run moved on during the pause
    res.metrics = m;
    const shot = await cdp.call("Page.captureScreenshot", { format: "png" }, ps);
    const shotName = `step-${String(i + 1).padStart(2, "0")}.png`;
    fs.writeFileSync(path.join(runDir, shotName), Buffer.from(shot.data, "base64"));
    res.shot = shotName;

    if (a.type && a.type !== "observe") {
      const st = await cdp.eval(ps, TARGET_STATE(a.target || {}));
      res.targetState = st;
      if (!st.count) res.issues.push(`target does not resolve: ${JSON.stringify(a.target)}`);
      else if (st.count > 1) res.warnings.push(`target matches ${st.count} elements; the first is used`);
      if (!m.target) res.issues.push("player reported no rect for the target");
      else {
        const ov = overlap(m.pop, m.target);
        if (ov > 0) res.issues.push(`card covers the target (${ov}px² overlap)`);
        const cx = m.target.x + m.target.w / 2, cy = m.target.y + m.target.h / 2;
        if (!(cx >= m.sim.x && cx <= m.sim.x + m.sim.w && cy >= m.sim.y && cy <= m.sim.y + m.sim.h)) {
          res.issues.push("target centre is outside the visible capture");
        }
        const gap = Math.max(m.pop.x - (m.target.x + m.target.w), m.target.x - (m.pop.x + m.pop.w),
                             m.pop.y - (m.target.y + m.target.h), m.target.y - (m.pop.y + m.pop.h));
        res.cardGap = gap;
        if (gap > 160) res.warnings.push(`card sits ${Math.round(gap)}px from its target`);
      }
    }
    if (!inside(m.pop, m.stage)) res.issues.push("card extends outside the stage");

    if (a.type && a.type !== "observe") {
      await cdp.eval(ps, "if (pendingShowme) startShowmeNow(); true");
      const done = await until(async () => {
        const msgs = await cdp.eval(ps, `__e2eMsgs.slice(${mark})`);
        const k = msgs.findIndex((x) => x.type === "showme-done");
        return k >= 0 ? { ...msgs[k], at: mark + k } : null;
      }, { timeout: 25000, what: `step ${i} show-me` }).catch((e) => ({ timeout: e.message }));
      if (done.at != null) mark = done.at + 1;
      res.showme = done;
      if (done.timeout) res.issues.push("show-me never finished");
      else if (done.missing) res.issues.push("show-me could not find its target");
      if (a.type === "input" || a.type === "select") {
        await sleep(300);
        const after = await cdp.eval(ps, TARGET_STATE(a.target || {}));
        res.after = after;
        if (a.type === "input" && after.value !== a.demo_value) {
          res.issues.push(`after show-me the field holds ${JSON.stringify(after.value)}, expected ${JSON.stringify(a.demo_value)}`);
        }
        if (a.type === "select" && after.selectedText !== a.value && after.value !== a.value) {
          res.issues.push(`after show-me the select shows ${JSON.stringify(after.selectedText)}, expected ${JSON.stringify(a.value)}`);
        }
        const shot2 = await cdp.call("Page.captureScreenshot", { format: "png" }, ps);
        fs.writeFileSync(path.join(runDir, shotName.replace(".png", "-after.png")), Buffer.from(shot2.data, "base64"));
      }
    }
    results.push(res);
    note(`  step ${i + 1}/${steps.length} ${a.type} "${step.title}" ${res.issues.length ? "✗ " + res.issues.join("; ") : "✓"}${res.warnings.length ? " (" + res.warnings.join("; ") + ")" : ""}`);
    // A merged run (`continues: true` on the next step) advances by itself
    // when show-me finishes; only step on if the player has not.
    await sleep(150);
    if (!a.type || a.type === "observe") mark = await cdp.eval(ps, "__e2eMsgs.length");
    if (i < steps.length - 1) await cdp.eval(ps, `stepIdx === ${i} ? (nextStep(), true) : false`);
  }
  const tries = flag("--no-try") ? [] : await tryPass(ps, def);
  await cdp.eval(worker.session, `chrome.tabs.remove(${tab.id})`).catch(() => {});
  return { def, results, tries };
}

// You-try, done the way a learner does it: a real mouse click on the target,
// the option chosen from the select, the model answer typed into the field.
// Every acting step must come back `success` — a learner who does exactly
// what the step asks and is not let through is the worst failure a
// walkthrough can have, and Show-me cannot see it.
const TARGET_EL = `window.__e2eTarget = (t) => {
  const norm = (s) => (s || "").replace(/\\s+/g, " ").trim();
  let doc = sim.contentDocument;
  for (const f of (t.frames || [])) { const fe = doc && doc.querySelector(f); doc = fe && fe.contentDocument; }
  if (!doc) return null;
  let els = []; try { els = [...doc.querySelectorAll(t.selector)]; } catch (e) { return null; }
  if (t.text_exact) els = els.filter((e) => norm(e.textContent) === t.text_exact);
  else if (t.text) els = els.filter((e) => norm(e.textContent).includes(t.text));
  return els[0] || null;
}; true`;

async function tryPass(ps, def) {
  const steps = def.steps || [];
  const out = [];
  await cdp.eval(ps, TARGET_EL);
  await cdp.eval(ps, `__e2eMsgs.length = 0; startWalkthrough("try", 0); true`);
  let mark = 0;
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i], a = step.action || {};
    const res = { i, type: a.type, title: step.title, issues: [], warnings: [] };
    out.push(res);
    let m;
    try {
      m = await until(async () => {
        const x = await cdp.eval(ps, METRICS);
        return x.idx > i || (x.idx === i && x.bridgeReady && !x.awaitingRect) ? x : null;
      }, { timeout: 15000, what: `You-try step ${i}` });
    } catch (e) { res.issues.push("You-try: the step never became ready"); break; }
    if (m.idx > i) { res.warnings.push("You-try: carried on by its run"); continue; }
    const advance = async () => {
      await sleep(200);
      if (i < steps.length - 1) await cdp.eval(ps, `stepIdx === ${i} ? (nextStep(), true) : false`);
    };
    if (!a.type || a.type === "observe") { mark = await cdp.eval(ps, "__e2eMsgs.length"); await advance(); continue; }
    if (a.type === "drag") {
      res.warnings.push("You-try: drag not exercised by the harness");
      mark = await cdp.eval(ps, "__e2eMsgs.length"); await cdp.eval(ps, `nextStep(); true`); continue;
    }
    const tgt = JSON.stringify(a.target || {});
    const exists = await cdp.eval(ps, `!!__e2eTarget(${tgt})`);
    if (!exists) { res.issues.push("You-try: target not found"); break; }
    if (a.type === "click") {
      // a learner scrolls to what they are told to click; try mode never does
      await cdp.eval(ps, `__e2eTarget(${tgt}).scrollIntoView({ block: "center", behavior: "instant" }); true`);
      await sleep(250);
      const r = await cdp.eval(ps, `(() => { const el = __e2eTarget(${tgt}); const b = el.getBoundingClientRect();
        const s = sim.getBoundingClientRect(); const k = sim.offsetWidth ? s.width / sim.offsetWidth : 1;
        return { x: s.left + (b.left + b.width / 2) * k, y: s.top + (b.top + b.height / 2) * k }; })()`);
      for (const type of ["mouseMoved", "mousePressed", "mouseReleased"]) {
        await cdp.call("Input.dispatchMouseEvent", { type, x: r.x, y: r.y, button: type === "mouseMoved" ? "none" : "left", clickCount: 1 }, ps);
        await sleep(40);
      }
    } else if (a.type === "select") {
      const ok = await cdp.eval(ps, `(() => { const el = __e2eTarget(${tgt}); const want = ${JSON.stringify(String(a.value ?? ""))};
        const n = (s) => (s || "").replace(/\\s+/g, " ").trim();
        const o = [...el.options].find((o) => n(o.value) === n(want)) || [...el.options].find((o) => n(o.label || o.textContent) === n(want));
        if (!o) return "no option matches " + want;
        el.focus(); el.value = o.value;
        el.dispatchEvent(new Event("input", { bubbles: true })); el.dispatchEvent(new Event("change", { bubbles: true }));
        return true; })()`);
      if (ok !== true) { res.issues.push("You-try: " + ok); break; }
    } else if (a.type === "input") {
      await cdp.eval(ps, `(() => { const el = __e2eTarget(${tgt}); el.focus(); el.value = ${JSON.stringify(String(a.demo_value ?? ""))};
        el.dispatchEvent(new Event("input", { bubbles: true })); el.dispatchEvent(new Event("change", { bubbles: true })); return true; })()`);
    }
    const got = await until(async () => {
      const msgs = await cdp.eval(ps, `__e2eMsgs.slice(${mark})`);
      const k = msgs.findIndex((x) => x.type === "success" || x.type === "wrong");
      return k >= 0 ? { ...msgs[k], at: mark + k } : null;
    }, { timeout: 6000, what: `You-try step ${i} verdict` }).catch(() => null);
    if (!got) { res.issues.push("You-try: doing the step as instructed got no response"); break; }
    mark = got.at + 1;
    if (got.type === "wrong") { res.issues.push(`You-try: doing the step as instructed was judged wrong (${got.label || ""})`); break; }
    await advance();
  }
  for (const r of out) note(`  try ${r.i + 1}/${steps.length} ${r.type} "${r.title}" ${r.issues.length ? "✗ " + r.issues.join("; ") : "✓"}`);
  return out;
}

// Compare what the script did with what was captured and what was authored.
function crossCheck(flow, manifest, def, performed) {
  const issues = [], warnings = [];
  const recorded = manifest ? manifest.steps.flatMap((s) => s.actions || []) : [];
  const steps = def.steps || [];
  const acts = performed || flow.steps.map((s) => ({ ...s, info: s.do === "select" ? { chosen: s.option } : null }));
  const norm = (s) => String(s == null ? "" : s).replace(/\s+/g, " ").trim().toLowerCase();
  for (const s of acts) {
    if (s.error) continue;
    if (s.do === "type" && s.text) {
      // a transient value may be retyped before the field is left, and a
      // field records once, on change — so only the value that stuck counts
      if (!s.transient && !recorded.some((a) => a.type === "input" && String(a.value).includes(s.text))) {
        issues.push(`capture: typed "${s.text}" was not recorded as an input action`);
      }
      if (!s.transient && !steps.some((st) => st.action?.type === "input" && String(st.action.demo_value || "").includes(s.text))) {
        issues.push(`authored: no input step demonstrates "${s.text}"`);
      }
    }
    if (s.do === "date" && s.info && !s.transient) {
      if (!recorded.some((a) => a.type === "input" && a.value === s.info.value)) {
        issues.push(`capture: date ${s.info.value} was not recorded as an input action`);
      }
      if (!steps.some((st) => st.action?.type === "input" && st.action.demo_value === s.info.value)) {
        issues.push(`authored: no input step sets the date ${s.info.value}`);
      }
    }
    if (s.do === "select" && s.info && s.info.chosen) {
      const want = s.info.chosen;
      if (!s.transient && !recorded.some((a) => a.type === "select" && (norm(a.value) === norm(want) || a.optionValue === s.info.value))) {
        issues.push(`capture: selecting "${want}" was not recorded`);
      }
      if (!s.transient && !steps.some((st) => st.action?.type === "select" && (norm(st.action.value) === norm(want) || st.action.value === s.info.value))) {
        issues.push(`authored: no select step chooses "${want}"`);
      }
    }
  }
  const scriptedClicks = acts.filter((s) => s.do === "click" && !s.error).length;
  const clicksRecorded = recorded.filter((a) => a.type === "click").length;
  if (clicksRecorded < scriptedClicks) {
    issues.push(`capture: ${clicksRecorded} click actions recorded for ${scriptedClicks} scripted clicks`);
  }
  const scripted = acts.filter((s) => ["click", "type", "select", "drag", "date"].includes(s.do)).length;
  const acting = steps.filter((st) => st.action?.type && st.action.type !== "observe").length;
  if (acting < scripted * 0.6) warnings.push(`authored ${acting} acting steps for ${scripted} scripted actions`);
  if (JSON.stringify(def).includes("TODO")) issues.push("authored walkthrough still contains TODO");
  return { issues, warnings, recordedActions: recorded.length, scriptedClicks, clicksRecorded, scripted, authoredSteps: steps.length, acting };
}

// ---------------------------------------------------------------------------
async function main() {
  const assessId = opt("--assess");
  const flowId = assessId ? opt("--flow") : args.find((a) => !a.startsWith("--"));
  const flow = flowId ? FLOWS[flowId] : null;
  if (!assessId && !flow) throw new Error(`unknown flow "${flowId}". Known: ${Object.keys(FLOWS).join(", ")}`);
  fs.mkdirSync(path.join(OUT, "runs"), { recursive: true });
  const runNo = fs.readdirSync(path.join(OUT, "runs")).length + 1;
  runDir = path.join(OUT, "runs", `${String(runNo).padStart(3, "0")}-${flowId || "assess"}`);
  fs.mkdirSync(runDir, { recursive: true });
  note(`run ${runNo}: ${assessId ? "assess " + assessId : flowId} → ${runDir}`);
  await launch();
  const summary = { runNo, flowId, startedAt: new Date().toISOString() };
  try {
    let id = assessId, manifest = null, performed = null;
    if (!assessId) {
      const rec = await record(flowId, flow, runNo);
      id = rec.id; manifest = rec.manifest; performed = rec.performed;
      summary.walkthroughId = id;
      summary.recordingErrors = rec.performed.filter((p) => p.error).map((p) => p.error);
      if (flag("--no-author")) { summary.stage = "recorded"; return; }
      await author(id, flowId);
    } else if (opt("--from")) {
      // re-assess an earlier run: reuse what it recorded and performed
      const from = path.join(OUT, "runs", opt("--from"));
      const read = (f) => fs.existsSync(path.join(from, f)) ? JSON.parse(fs.readFileSync(path.join(from, f), "utf8")) : null;
      manifest = read("capture-manifest.json"); performed = read("performed.json");
      if (manifest) save("capture-manifest.json", manifest);
      if (performed) save("performed.json", performed);
    }
    summary.walkthroughId = id;
    const { def, results, tries } = await assess(id);
    summary.replay = results;
    summary.tries = tries;
    summary.cross = flow ? crossCheck(flow, manifest, def, performed) : null;
    const issues = results.flatMap((r) => r.issues.map((x) => `step ${r.i + 1}: ${x}`))
      .concat(tries.flatMap((r) => r.issues.map((x) => `step ${r.i + 1}: ${x}`)))
      .concat(summary.cross ? summary.cross.issues : []);
    summary.issues = issues;
    summary.pass = issues.length === 0 && !(summary.recordingErrors || []).length;
    note(summary.pass ? "PASS" : `FAIL — ${issues.length} issue(s):\n  ` + issues.concat(summary.recordingErrors || []).join("\n  "));
    if (summary.cross && summary.cross.warnings.length) note("warnings: " + summary.cross.warnings.join("; "));
  } catch (e) {
    summary.error = e.stack;
    note("ERROR " + e.message);
    process.exitCode = 1;
  } finally {
    summary.finishedAt = new Date().toISOString();
    save("summary.json", summary);
    save("run-log.txt", logLines.join("\n"));
    try { await cdp.call("Browser.close"); } catch {}
    cdp?.ws.close();
    child?.kill("SIGKILL");
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
