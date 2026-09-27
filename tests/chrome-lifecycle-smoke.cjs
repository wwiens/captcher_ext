// Isolated, synthetic-data browser smoke test for Chrome 116+. On versions
// before sidePanel.close, the driver closes the panel target through CDP.
// Override CHROME_TEST_BINARY for your installation. No credentials or uploads.
const {spawn}=require('node:child_process');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),http=require('node:http');
const assert=require('node:assert/strict');
const extensionRoot=process.env.SC_EXTENSION_ROOT||path.resolve(__dirname,'..');
const chromeBinary=process.env.CHROME_TEST_BINARY||'/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
class CDP {
 constructor(url){this.id=0;this.pending=new Map();this.ws=new WebSocket(url);this.ready=new Promise((r,j)=>{this.ws.addEventListener('open',r,{once:true});this.ws.addEventListener('error',j,{once:true});});this.ws.addEventListener('close',()=>{for(const p of this.pending.values())p.reject(new Error('Chrome connection closed'));this.pending.clear();});this.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=this.pending.get(m.id);this.pending.delete(m.id);if(m.error)p.reject(new Error(m.error.message));else p.resolve(m.result);}});}
 async call(method,params={},sessionId){await this.ready;const id=++this.id;return new Promise((resolve,reject)=>{this.pending.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));});}
 async eval(sessionId,expression){const r=await this.call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true,userGesture:true},sessionId);if(r.exceptionDetails)throw new Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;}
 async attach(id){return(await this.call('Target.attachToTarget',{targetId:id,flatten:true})).sessionId;}
}
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sc-chrome-test-'));
const fixtureState={uploads:[],uploadStatus:201};
const fixture=http.createServer((req,res)=>{
 if(req.url==='/api/upload'&&req.method==='POST'){const parts=[];req.on('data',b=>parts.push(b));req.on('end',()=>{fixtureState.uploads.push(Buffer.concat(parts));res.statusCode=fixtureState.uploadStatus;res.setHeader('Content-Type','application/json');res.end(JSON.stringify(fixtureState.uploadStatus===201?{walkthrough_id:'synthetic-draft',steps:[],player_url:'/player/synthetic-draft'}:{error:'synthetic rejection'}));});return;}
 if(req.url==='/api/extension/ping'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({captcher:true,pairing:1}));return;}
 res.setHeader('Content-Type','text/html');res.end('<!doctype html><title>Synthetic recording fixture</title><style>body{font:16px/1.6 Arial,sans-serif;background:#eef4f7;color:#17323f;padding:32px}h1{font-size:28px}input{display:block;padding:12px;border:1px solid #a5bec7;border-radius:4px;font:inherit;margin:16px 0}button{background:#126e86;color:white;padding:10px 24px;border:0;border-radius:4px}</style><h1>Test product</h1><label>Name<input id="field"></label><button id="save">Save</button>');
});
let child,cdp;
const deadline=setTimeout(()=>{console.error('Chrome smoke test exceeded 120 seconds');process.exitCode=1;cdp?.ws.close();child?.kill('SIGKILL');fixture.closeAllConnections();fixture.close();},120000);
(async()=>{
 await new Promise(r=>fixture.listen(0,'127.0.0.1',r));const origin='http://127.0.0.1:'+fixture.address().port;
 child=spawn(chromeBinary,[
 '--headless=new','--no-first-run','--no-default-browser-check','--disable-background-networking',
 '--user-data-dir='+profile,'--remote-debugging-port=0','--disable-extensions-except='+extensionRoot,'--load-extension='+extensionRoot,'about:blank'],{stdio:['ignore','ignore','pipe']});
 let stderr='';child.stderr.on('data',b=>stderr+=b);
 for(let i=0;i<300&&!fs.existsSync(path.join(profile,'DevToolsActivePort'));i++)await sleep(100);
 if(!fs.existsSync(path.join(profile,'DevToolsActivePort')))throw new Error('No debug endpoint: '+stderr.slice(0,3000)+'\n'+stderr.slice(-600));
 const [port,endpoint]=fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').trim().split('\n');
 cdp=new CDP('ws://127.0.0.1:'+port+endpoint);
 let workerSession,extensionId;
 for(let i=0;i<40&&!workerSession;i++){
  const {targetInfos}=await cdp.call('Target.getTargets');
  for(const target of targetInfos.filter(t=>t.type==='service_worker'&&t.url.endsWith('/background.js'))){
   const session=await cdp.attach(target.targetId);
   const name=await cdp.eval(session,'typeof chrome !== "undefined" && chrome.runtime?.getManifest().name').catch(()=>null);
   if(name==='Captcher Recorder'){workerSession=session;extensionId=new URL(target.url).host;break;}
  }
  if(!workerSession)await sleep(100);
 }
 assert.ok(workerSession,'extension worker loaded');
 await cdp.eval(workerSession,`chrome.storage.local.set({server:{url:${JSON.stringify(origin)},token:'synthetic-test-key'}})`);
 const tab=await cdp.eval(workerSession,`chrome.tabs.create({url:${JSON.stringify(origin+'/recorded')},active:true})`);
 const help=await cdp.call('Target.createTarget',{url:`chrome-extension://${extensionId}/help.html`});
 const helpSession=await cdp.attach(help.targetId);
 for(let i=0;i<100;i++){if(await cdp.eval(helpSession,'location.pathname==="/help.html" && document.readyState==="complete"').catch(()=>false))break;await sleep(100);}
 const point=await cdp.eval(helpSession,`(()=>{document.body.replaceChildren();const b=document.createElement('button');b.textContent='Open recorder for test';b.style.cssText='position:fixed;left:20px;top:20px;width:200px;height:50px';b.onclick=()=>chrome.sidePanel.open({windowId:${tab.windowId}});document.body.append(b);return {x:100,y:40};})()`);
 await cdp.call('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point},helpSession);
 await cdp.call('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...point},helpSession);
 await cdp.eval(workerSession,`chrome.tabs.update(${tab.id},{active:true})`);
 let panel;
 for(let i=0;i<50&&!panel;i++){
  const {targetInfos}=await cdp.call('Target.getTargets');panel=targetInfos.find(t=>t.url===`chrome-extension://${extensionId}/sidepanel/panel.html`);if(!panel)await sleep(100);
 }
 if(!panel){console.log((await cdp.call('Target.getTargets')).targetInfos.map(t=>({type:t.type,url:t.url})));throw new Error('Native side panel target not available');}
 const panelSession=await cdp.attach(panel.targetId);
 for(let i=0;i<100;i++){if(await cdp.eval(panelSession,'document.readyState==="complete" && typeof el!=="undefined"').catch(()=>false))break;await sleep(100);}
 await cdp.eval(workerSession,`chrome.windows.update(${tab.windowId},{focused:true})`);
 await cdp.eval(workerSession,`chrome.tabs.update(${tab.id},{active:true})`);
 for(let i=0;i<100;i++){const [current]=await cdp.eval(panelSession,'chrome.tabs.query({active:true,lastFocusedWindow:true})');if(current?.id===tab.id&&current.status==='complete'&&current.url===origin+'/recorded')break;await cdp.eval(workerSession,`chrome.tabs.update(${tab.id},{active:true})`);await sleep(50);}
 // Opening the native panel animates the page viewport. Start only after it
 // settles; the product deliberately discards screenshots taken during resize.
 let previousViewport,stableSamples=0;
 for(let i=0;i<100&&stableSamples<10;i++){
  const viewport=JSON.stringify(await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${tab.id}},func:()=>({width:innerWidth,height:innerHeight})})`));
  stableSamples=viewport===previousViewport?stableSamples+1:0;previousViewport=viewport;await sleep(100);
 }
 assert.equal(stableSamples,10,'native panel viewport settled');
 await cdp.eval(panelSession,'el.wtStart.click()');
 let state;
 for(let i=0;i<120;i++){
  state=await cdp.eval(panelSession,'({state:computeState(),status:el.wtStatus.textContent,log:el.log.textContent.slice(-1200)})');
  if(state.state==='recording'||state.status.startsWith('Could not start'))break;
  await sleep(100);
 }
 assert.equal(state.state,'recording',JSON.stringify(state));
 assert.ok(await cdp.eval(panelSession,'!!walkthrough.initial.screenshot'),'initial viewport screenshot is present: '+JSON.stringify(state));
 const pageState=async(id)=>cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${id}},func:()=>({recorder:!!window.__labRecorder,secretModule:!!self.scSensitive})})`);
 assert.equal((await pageState(tab.id))[0].result.recorder,true);
 const childTab=await cdp.eval(workerSession,`chrome.tabs.create({url:${JSON.stringify(origin+'/child')},openerTabId:${tab.id},active:false})`);
 await sleep(300);assert.equal((await pageState(childTab.id))[0].result.recorder,true);
 const other=await cdp.eval(workerSession,`chrome.tabs.create({url:${JSON.stringify(origin+'/unrelated')},active:false})`);
 await sleep(500);assert.equal((await pageState(other.id))[0].result.recorder,false);
 assert.equal((await pageState(other.id))[0].result.secretModule,false);
 await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${tab.id}},func:()=>{const input=document.querySelector('#field');input.value='safe test';input.dispatchEvent(new Event('change',{bubbles:true}));}})`);
 await sleep(100);assert.ok(await cdp.eval(panelSession,'walkthrough.pendingActions.some(a=>a.value==="safe test")'));
 // A password revealed by a show-password button is type=text, but stays a secret.
 const revealed=(await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${tab.id}},func:async()=>{document.body.insertAdjacentHTML('beforeend','<input id=pw type=password>');const p=document.querySelector('#pw');await new Promise(r=>setTimeout(r,50));p.type='text';await new Promise(r=>setTimeout(r,50));p.value='SCRevealed123';p.dispatchEvent(new Event('change',{bubbles:true}));p.click();return self.scSensitive.isSensitive(p);}})`))[0].result;
 await sleep(100);assert.equal(revealed,true,'revealed password is still sensitive');
 assert.ok(!(await cdp.eval(panelSession,'JSON.stringify(walkthrough.pendingActions)')).includes('SCRevealed'),'revealed password never reaches recorded actions');
 const switched=await cdp.eval(panelSession,`(async()=>{const original=veilShield;try{veilShield=async(id,hidden)=>{const n=await original(id,hidden);if(hidden)await chrome.tabs.update(${other.id},{active:true});return n;};return await takeViewportScreenshot(await chrome.tabs.get(${tab.id}))===null;}finally{veilShield=original;await chrome.tabs.update(${tab.id},{active:true});}})()`);
 assert.equal(switched,true,'real tab switch discards screenshot');
 await cdp.eval(panelSession,'discardWalkthrough(true)');await sleep(200);
 assert.equal((await pageState(tab.id))[0].result.recorder,false);
 assert.equal((await pageState(childTab.id))[0].result.recorder,false);
 if(process.argv.includes('--redaction')) await require('./chrome-redaction-cases.cjs')({cdp,workerSession,panelSession,tab,origin});
 // A stopped document can be started again without a reload.
 await cdp.eval(panelSession,'el.wtStart.click()');
 for(let i=0;i<100;i++){if(await cdp.eval(panelSession,'computeState()')==='recording')break;await sleep(100);}
 assert.equal(await cdp.eval(panelSession,'computeState()'),'recording');
 if(process.argv.includes('--release')) await require('./chrome-release-cases.cjs')({cdp,workerSession,panelSession,tab,origin,fixtureState,extensionId});
 if(process.argv.includes('--assets')) {await cdp.eval(panelSession,'el.wtAuto.checked=false');await require('./store-assets.cjs')({cdp,panelSession,extensionId});await cdp.eval(workerSession,`chrome.tabs.update(${tab.id},{active:true})`);}
 const captureId=await cdp.eval(panelSession,`(async()=>{globalThis.testCaptureGuard={id:crypto.randomUUID()};await acquireCapture(${tab.id},testCaptureGuard);return testCaptureGuard.id;})()`);
 await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${tab.id}},func:(id)=>{self.testCaptureSignal=scCapture.signal(id);scCapture.run(id,()=>new Promise(resolve=>self.testCaptureSettle=resolve)).catch(()=>{});},args:[${JSON.stringify(captureId)}]})`);
 if(await cdp.eval(workerSession,'typeof chrome.sidePanel.close === "function"')) await cdp.eval(workerSession,`chrome.sidePanel.close({windowId:${tab.windowId}})`);
 else await cdp.call('Target.closeTarget',{targetId:panel.targetId});
 await sleep(500);
 assert.equal((await pageState(tab.id))[0].result.recorder,false);
 assert.equal((await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${tab.id}},func:()=>{const aborted=self.testCaptureSignal.aborted;self.testCaptureSettle();return aborted;}})`))[0].result,true,'closing native panel aborts the pending page capture');
 const scripts=await cdp.eval(workerSession,'chrome.scripting.getRegisteredContentScripts()');
 assert.equal(scripts.some(s=>s.id==='rc-recorder'),false);
 console.log('PASS: Chrome native side panel captures HTML and PNG; new child is authorized; unrelated tab stays inert; actions arrive; real tab switch discards screenshot; discard tears down; same-document restart works; closing panel removes recorder and registration.');
})().catch(e=>{console.error(e.stack);process.exitCode=1;}).finally(async()=>{clearTimeout(deadline);try{if(cdp)await cdp.call('Browser.close');}catch{}cdp?.ws.close();child?.kill('SIGKILL');fixture.closeAllConnections();fixture.close();});
