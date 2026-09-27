const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = file => fs.readFileSync(path.join(root, file), 'utf8');
const flush = () => new Promise(resolve => setImmediate(resolve));
class Event {
  listeners = new Set();
  addListener = fn => this.listeners.add(fn);
  removeListener = fn => this.listeners.delete(fn);
  emit(...args) { for (const fn of [...this.listeners]) fn(...args); }
}
class Clock {
  now = 1000; next = 0; timers = new Map();
  set = (fn, ms) => { const id = ++this.next; this.timers.set(id, { fn, at: this.now + ms }); return id; };
  clear = id => this.timers.delete(id);
  advance(ms) {
    const end = this.now + ms;
    while (true) {
      const due = [...this.timers].filter(([, t]) => t.at <= end).sort((a,b) => a[1].at-b[1].at)[0];
      if (!due) break;
      this.now = due[1].at; this.timers.delete(due[0]); due[1].fn();
    }
    this.now = end;
  }
}
function port(name, sender) {
  return {name, sender, sent:[], closed:false, onMessage:new Event(), onDisconnect:new Event(),
    postMessage(message) { if (this.closed) throw new Error('closed'); this.sent.push(message); },
    disconnect() { if (!this.closed) { this.closed = true; this.onDisconnect.emit(); } }};
}
function worker({ manifest = { version: '1.0.0' }, fetch = async () => { throw new Error('no network in tests'); } } = {}) {
  const clock = new Clock(), onConnect = new Event(), injections = [], registrations = [], stored = [];
  const tabs = new Map([[1,{id:1,url:'https://app.example/'}],[2,{id:2,url:'https://mail.example/'}],
    [3,{id:3,url:'https://child.example/',openerTabId:1}],[4,{id:4,url:'https://child.example/',openerTabId:3}]]);
  const chrome = {
    sidePanel:{setPanelBehavior(){}},
    runtime:{onConnect,onMessage:new Event(),onInstalled:new Event(),onStartup:new Event(),getURL:p=>'chrome-extension://test/'+p,getManifest:()=>manifest},
    storage:{local:{get:async()=>({}),set:async v=>{stored.push(v);}},onChanged:new Event()},
    tabs:{onCreated:new Event(),onRemoved:new Event(),get:async id=>{if (!tabs.has(id)) throw new Error('missing');return tabs.get(id);},sendMessage:async()=>{}},
    scripting:{unregisterContentScripts:async()=>{registrations.length=0;},
      registerContentScripts:async entries=>registrations.push(...entries),
      executeScript:async options=>{injections.push(options);return [];}}
  };
  const context=vm.createContext({chrome,URL,Map,Set,console,fetch,AbortSignal,JSON,navigator:{userAgent:'Chrome'},setTimeout:clock.set,clearTimeout:clock.clear,Date:{now:()=>clock.now}});
  vm.runInContext(source('background.js'),context);
  const connect = (p) => { onConnect.emit(p); return p; };
  const panel = () => connect(port('sc-recording-panel',{url:chrome.runtime.getURL('sidepanel/panel.html')}));
  const frame = (id, documentId='doc-'+id) => connect(port('sc-recording-frame',{tab:{id},documentId,frameId:0}));
  const start = async (p=panel(), sessionId='session-a') => {p.onMessage.emit({type:'start',tabId:1,sessionId});await flush();return p;};
  return {clock,chrome,tabs,injections,registrations,stored,connect,panel,frame,start};
}
test('worker grants only session tabs and their descendants, targeting exact documents',async()=>{
  const w=worker();await w.start();
  const other=w.frame(2);await flush();
  assert.equal(other.closed,true);assert.equal(w.injections.filter(x=>x.target.tabId===2).length,0);
  w.chrome.tabs.onCreated.emit(w.tabs.get(3));w.chrome.tabs.onCreated.emit(w.tabs.get(4));
  const rootFrame=w.frame(1),child=w.frame(4);await flush();
  assert.equal(rootFrame.sent[0].type,'start');assert.equal(child.sent[0].sessionId,'session-a');
  assert.deepEqual(JSON.parse(JSON.stringify(w.injections.at(-1).target)),{tabId:4,documentIds:['doc-4']});
  assert.deepEqual([...w.registrations[0].js],['recorder.js']);
});
test('an existing tab is not adopted just because its opener is recorded',async()=>{
  const w=worker();await w.start();const oldChild=w.frame(3);await flush();
  assert.equal(oldChild.closed,true);assert.equal(w.injections.some(x=>x.target.tabId===3),false);
});
test('panel disconnect stops injected recorders and unregisters future injections',async()=>{
  const w=worker(),p=await w.start(),f=w.frame(1);await flush();
  p.disconnect();await flush();
  assert.equal(f.closed,true);assert.ok(f.sent.some(m=>m.type==='stop'));
  assert.equal(w.registrations.length,0);
  const late=w.frame(1);await flush();assert.equal(late.closed,true);
});
test('expired worker session cannot be revived by a late heartbeat',async()=>{
  const w=worker(),p=await w.start(),f=w.frame(1);await flush();
  w.clock.advance(20001);p.onMessage.emit({type:'heartbeat'});await flush();
  assert.equal(f.closed,true);assert.equal(w.registrations.length,0);
  const late=w.frame(1);await flush();assert.equal(late.closed,true);
});
test('a second panel cannot replace the recording owner',async()=>{
  const w=worker(),first=await w.start(),second=w.panel();await w.start(second,'session-b');
  assert.ok(second.sent.some(m=>m.type==='error'));second.disconnect();
  const f=w.frame(1);await flush();assert.equal(f.sent[0].sessionId,'session-a');
  assert.equal(first.closed,false);
});
test('a content script cannot impersonate the panel',async()=>{
  const w=worker();const fake=w.connect(port('sc-recording-panel',{tab:{id:2},url:'chrome-extension://test/sidepanel/panel.html'}));
  fake.onMessage.emit({type:'start',tabId:2,sessionId:'fake'});await flush();
  assert.equal(w.registrations.length,0);const f=w.frame(2);await flush();assert.equal(f.closed,true);
});
test('stopping during document injection prevents a late grant',async()=>{
  const w=worker(),p=await w.start();let finish;
  w.chrome.scripting.executeScript=()=>new Promise(resolve=>{finish=resolve;});
  const f=w.frame(1);await flush();p.disconnect();finish([]);await flush();
  assert.equal(f.closed,true);assert.equal(f.sent.some(m=>m.type==='start'),false);
});
test('rapid stop/start serializes registration changes',async()=>{
  const w=worker(),p=await w.start();p.disconnect();const next=await w.start(w.panel(),'next');await flush();
  assert.equal(w.registrations.length,1);const f=w.frame(1);await flush();assert.equal(f.sent[0].sessionId,'next');
  next.disconnect();await flush();assert.equal(w.registrations.length,0);
});

function recorder(sensitive = false) {
  const clock=new Clock(),p=port('sc-recording-frame',{}),messages=[],observations=[];
  let reads=0;
  const events=new Map();
  const eventTarget={
    addEventListener(type,fn){if(!events.has(type))events.set(type,new Set());events.get(type).add(fn);},
    removeEventListener(type,fn){events.get(type)?.delete(fn);}
  };
  let target;
  const element={children:[],querySelectorAll:()=>[]};
  const docObject={...eventTarget,documentElement:element,body:element,readyState:'complete',title:'Example',
    querySelectorAll:s=>s==='#field'?[target]:[]};
  const document=new Proxy(docObject,{get(o,k){reads++;return o[k];}});
  class Element {
    tagName='INPUT'; type='text'; value='synthetic input';id='field';classList=[];parentElement=null;
    ownerDocument=document;
    getAttribute(k){return k==='id'?'field':null;}
    getAttributeNames(){return ['id'];}
  }
  target=new Element();
  const win={...eventTarget,innerWidth:800,innerHeight:600};win.top=win;
  const context=vm.createContext({window:win,document,Element,CSS:{escape:s=>s},Node:{DOCUMENT_POSITION_FOLLOWING:4},
    location:{href:'https://app.example/'},self:{scSensitive:{isSensitive:()=>sensitive,notePasswords(){},REDACTED:'********'}},
    chrome:{runtime:{connect:()=>p,sendMessage:m=>{messages.push(m);return Promise.resolve({auto:false});}}},
    MutationObserver:class {constructor(fn){this.fn=fn;this.disconnected=false;observations.push(this);}observe(){}disconnect(){this.disconnected=true;}},
    setTimeout:clock.set,clearTimeout:clock.clear,Date:{now:()=>clock.now},Map,Set,WeakMap,Math});
  const run=()=>vm.runInContext(source('recorder.js'),context);
  const change=()=>{for(const fn of [...(events.get('change')||[])])fn({target});};
  run();return {clock,p,messages,observations,events,win,run,change,target,reads:()=>reads};
}
test('recorder bootstrap does not read DOM or observe inputs without a grant',()=>{
  const r=recorder();assert.equal(r.reads(),0);assert.equal(r.events.size,0);assert.equal(r.observations.length,0);
  r.clock.advance(20001);assert.equal(r.reads(),0);assert.equal(r.p.closed,true);
});
test('authorized recorder sends session-tagged actions; disconnect removes all listeners and observers',()=>{
  const r=recorder();r.p.onMessage.emit({type:'start',sessionId:'granted'});r.change();
  assert.equal(r.messages.length,1);assert.equal(r.messages[0].sessionId,'granted');
  assert.equal(r.messages[0].action.value,'synthetic input');
  r.p.onDisconnect.emit();const before=r.reads();r.change();r.clock.advance(30000);
  assert.equal(r.messages.length,1);assert.equal(r.reads(),before);
  assert.ok([...r.events.values()].every(s=>s.size===0));assert.ok(r.observations.every(o=>o.disconnected));
  assert.equal(r.win.__labRecorder,undefined);
});
test('sensitive dropdowns emit a placeholder without option values, metadata or effect observation',()=>{
  const r=recorder(true);r.target.tagName='SELECT';r.target.selectedOptions=[{value:'SCSecretValue',textContent:'SCSecretLabel'}];
  r.p.onMessage.emit({type:'start',sessionId:'granted'});const count=r.observations.length;r.change();
  const action=r.messages[0].action;
  assert.equal(action.value,'********');assert.equal(action.sensitive,true);
  assert.equal(action.optionValue,undefined);assert.equal(action.selector,undefined);assert.equal(action.url,undefined);
  assert.equal(r.observations.length,count);assert.ok(!JSON.stringify(action).includes('SCSecret'));
});
test('recorder lease expiry stops observation even if timer dispatch is delayed',()=>{
  const r=recorder();r.p.onMessage.emit({type:'start',sessionId:'granted'});
  r.clock.now+=20001;r.change();assert.equal(r.messages.length,0);assert.equal(r.p.closed,true);
  r.p.onMessage.emit({type:'lease'});r.p.onMessage.emit({type:'start',sessionId:'late'});r.change();
  assert.equal(r.messages.length,0);
});

function screenshot(switchAt) {
  const events={onActivated:new Event(),onUpdated:new Event(),onRemoved:new Event()};
  let active=1,captures=0,probes=0;
  const switchTab=()=>{active=2;events.onActivated.emit({windowId:5,tabId:2});};
  const chrome={tabs:{...events,query:async()=>[{id:active,url:active===1?'https://app.example/':'https://mail.example/',status:'complete'}],
    captureVisibleTab:async()=>{captures++;if(switchAt==='capture')switchTab();if(switchAt==='away-back'){switchTab();active=1;events.onActivated.emit({windowId:5,tabId:1});}return 'data:image/png;base64,AA==';}},
    scripting:{executeScript:async()=>{probes++;return [{documentId:switchAt==='document'&&probes>1?'new':'original',result:{width:800,height:600,dpr:1}}];}}};
  const context=vm.createContext({chrome,veilShield:async(id,hide)=>{if(hide&&switchAt==='veil')switchTab();return 1;},
    log:()=>{},formatSize:()=>'',fetch:async()=>({blob:async()=>new Blob(['image'])}),Blob,JSON});
  const s=source('sidepanel/panel.js');vm.runInContext(s.slice(s.indexOf('async function takeViewportScreenshot('),s.indexOf('// One capture of `tab`')),context);
  return {events,captures:()=>captures,run:()=>context.takeViewportScreenshot({id:1,windowId:5,url:'https://app.example/'})};
}
for(const phase of ['veil','capture','away-back','document'])test('screenshot discards changes during '+phase,async()=>{
  const s=screenshot(phase);assert.equal(await s.run(),null);
  assert.ok(Object.values(s.events).every(e=>e.listeners.size===0));
  if(phase==='veil')assert.equal(s.captures(),0);
});
test('stable screenshot is returned and temporary event listeners are removed',async()=>{
  const s=screenshot();assert.ok((await s.run()).blob);assert.equal(s.captures(),1);
  assert.ok(Object.values(s.events).every(e=>e.listeners.size===0));
});
test('capture shield expires without panel cleanup and ignores releaseHold during capture',()=>{
  const clock=new Clock(),listeners=new Map();
  const window={top:{},addEventListener:(t,f)=>listeners.set(t,f),removeEventListener:t=>listeners.delete(t)};
  const context=vm.createContext({window,document:{addEventListener(){}},setTimeout:clock.set,clearTimeout:clock.clear,
    setInterval:clock.set,clearInterval:clock.clear,Date:{now:()=>clock.now}});
  vm.runInContext(source('shield.js'),context);
  window.__labShield.hold(5000);window.__labShield.capture();
  assert.equal(window.__labShield.releaseHold(),false);clock.advance(5001);assert.ok(listeners.size>0);
  clock.advance(150000);assert.equal(listeners.size,0);
});

test('discard before the page is ready settles panel startup without waiting for a timeout',async()=>{
  const clock=new Clock();const p=port('sc-recording-panel',{});
  // Chrome does not emit onDisconnect on the end that calls disconnect().
  p.disconnect=()=>{p.closed=true;};
  const context=vm.createContext({chrome:{runtime:{connect:()=>p}},crypto:{randomUUID:()=>"test-session"},
    setTimeout:clock.set,clearTimeout:clock.clear,setInterval:clock.set,clearInterval:clock.clear,
    el:{wtStatus:{}},render(){}});
  const s=source('sidepanel/panel.js');vm.runInContext(s.slice(s.indexOf('let walkthrough = null;'),s.indexOf('// One derived state')),context);
  vm.runInContext('walkthrough = {};',context);
  const started=context.registerRecorder(1);
  const rejected=assert.rejects(started,/cancelled/);
  await context.unregisterRecorder();await rejected;
  assert.equal(clock.timers.size,0);assert.equal(p.closed,true);
});

for (const hidden of [true,false]) test('overlay veiling resolves without animation frames; hidden='+hidden,async()=>{
  const clock=new Clock();
  const context=vm.createContext({document:{hidden,querySelectorAll:()=>[]},requestAnimationFrame(){},
    setTimeout:clock.set,clearTimeout:clock.clear,log(){}});
  context.chrome={scripting:{executeScript:async options=>[{result:await options.func(...options.args)}]}};
  const s=source('sidepanel/panel.js');vm.runInContext(s.slice(s.indexOf('async function veilShield('),s.indexOf('// Pin redaction, engine execution')),context);
  const result=context.veilShield(1,true);clock.advance(1001);
  assert.equal(await result,hidden?0:-1);
});

// Pairing makes the sender's origin the destination of every later upload.
function claim(w, sender) {
  return new Promise(resolve => {
    for (const fn of w.chrome.runtime.onMessage.listeners) fn({type:'pair-claim',code:'synthetic-code'}, sender, resolve);
  });
}
function pairingWorker(manifest) {
  const requests = [];
  const fetch = async (url) => { requests.push(url);
    return {ok:true,status:200,json:async()=>({token:'synthetic-key',email:'reviewer@example.test'})}; };
  return {requests, w: worker({manifest, fetch})};
}
test('pairing is accepted only from the top frame of the Captcher app',async()=>{
  const {w,requests}=pairingWorker({version:'1.0.0',update_url:'https://clients2.google.com/service/update2/crx'});
  const ok=await claim(w,{tab:{id:1},frameId:0,origin:'https://app.captcher.app'});
  assert.equal(ok.ok,true);assert.deepEqual(requests,['https://app.captcher.app/api/extension/claim']);
  assert.equal(w.stored.at(-1).server.url,'https://app.captcher.app');
  for (const sender of [
    {tab:{id:1},frameId:0,origin:'https://evil.example'},
    {tab:{id:1},frameId:0,origin:'https://docs.captcher.app'},
    {tab:{id:1},frameId:0,origin:'http://app.captcher.app'},
    {tab:{id:1},frameId:3,origin:'https://app.captcher.app'},
    {frameId:0,origin:'https://app.captcher.app'},
    {tab:{id:1},frameId:0,origin:'http://127.0.0.1:8080'},
  ]) {
    const refused=await claim(w,sender);
    assert.equal(refused.ok,false,JSON.stringify(sender));
  }
  assert.equal(requests.length,1,'refused claims contact nothing');assert.equal(w.stored.length,1);
});
test('loopback pairing works only in an unpacked development build',async()=>{
  const {w,requests}=pairingWorker({version:'1.0.0'});
  const ok=await claim(w,{tab:{id:1},frameId:0,origin:'http://127.0.0.1:8080'});
  assert.equal(ok.ok,true);assert.deepEqual(requests,['http://127.0.0.1:8080/api/extension/claim']);
});
test('a fresh worker clears a recorder registration left by one that died mid-recording',async()=>{
  const w=worker();w.registrations.push({id:'rc-recorder'});await flush();
  assert.equal(w.registrations.length,0);
});
