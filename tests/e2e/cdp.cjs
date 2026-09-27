// Minimal CDP client over the browser endpoint (flattened sessions). Same
// shape as the one in chrome-lifecycle-smoke.cjs, plus event subscription.
class CDP {
  constructor(url) {
    this.id = 0;
    this.pending = new Map();
    this.listeners = [];
    this.ws = new WebSocket(url);
    this.ready = new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });
    this.ws.addEventListener("close", () => {
      for (const p of this.pending.values()) p.reject(new Error("Chrome connection closed"));
      this.pending.clear();
    });
    this.ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id) {
        const p = this.pending.get(m.id);
        this.pending.delete(m.id);
        if (!p) return;
        if (m.error) p.reject(new Error(`${p.method}: ${m.error.message}`));
        else p.resolve(m.result);
      } else if (m.method) {
        for (const l of this.listeners) {
          if (l.method === m.method && (!l.sessionId || l.sessionId === m.sessionId)) l.fn(m.params, m.sessionId);
        }
      }
    });
  }
  async call(method, params = {}, sessionId) {
    await this.ready;
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject, method });
      this.ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  }
  on(method, fn, sessionId) { this.listeners.push({ method, fn, sessionId }); }
  async eval(sessionId, expression) {
    const r = await this.call("Runtime.evaluate",
      { expression, awaitPromise: true, returnByValue: true, userGesture: true }, sessionId);
    if (r.exceptionDetails) {
      throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    }
    return r.result.value;
  }
  async attach(targetId) {
    return (await this.call("Target.attachToTarget", { targetId, flatten: true })).sessionId;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function until(fn, { timeout = 15000, interval = 100, what = "condition" } = {}) {
  const end = Date.now() + timeout;
  let last;
  while (Date.now() < end) {
    try { last = await fn(); if (last) return last; } catch (e) { last = e; }
    await sleep(interval);
  }
  throw new Error(`Timed out waiting for ${what}${last instanceof Error ? ` (${last.message})` : ""}`);
}

module.exports = { CDP, sleep, until };
