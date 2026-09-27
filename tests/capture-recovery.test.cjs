const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
class Event {listeners=[];addListener=fn=>this.listeners.push(fn);emit=(...args)=>this.listeners.forEach(fn=>fn(...args));}
function captureOwner(){
 const connect=new Event(),timers=[];let restores=0,releases=0;
 const context=vm.createContext({self:{scSensitive:{restoreAll(){restores++;}}},window:{__labShield:{release(){releases++;}}},
 chrome:{runtime:{onConnect:connect,getURL:p=>'chrome-extension://test/'+p}},AbortController,Date,setTimeout:fn=>{timers.push(fn);return timers.length;},clearTimeout(){}});
 vm.runInContext(read('capture-session.js'),context);
 const port=(url='chrome-extension://test/sidepanel/panel.html')=>{const p={name:'sc-capture-owner',sender:{url},onMessage:new Event(),onDisconnect:new Event(),sent:[],postMessage(m){this.sent.push(m);},disconnect(){this.onDisconnect.emit();}};connect.emit(p);p.onMessage.emit({type:'start',id:'owner'});return p;};
 return {api:context.self.scCapture,port,timers,restores:()=>restores,releases:()=>releases};
}
test('panel loss aborts network work and quarantines an unfinished serializer',async()=>{
 const c=captureOwner(),p=c.port();let settle;const signal=c.api.signal('owner');
 const result=c.api.run('owner',()=>new Promise(r=>settle=r));const rejected=assert.rejects(result,/cancelled/);
 p.disconnect();assert.equal(signal.aborted,true);assert.equal(c.restores(),1);assert.equal(c.releases(),1);
 assert.match(c.port().sent[0].error,/previous capture/);
 settle('unsafe late result');await rejected;assert.equal(c.port().sent[0].ready,true);
});
test('a second panel cannot replace the capture owner or restore its form',()=>{
 const c=captureOwner();c.port();const second=c.port();assert.match(second.sent[0].error,/previous/);second.disconnect();
 assert.equal(c.restores(),0);assert.doesNotThrow(()=>c.api.assert('owner'));
});
test('capture expiry invalidates results even if the panel remains open',async()=>{
 const c=captureOwner();c.port();let settle;const work=c.api.run('owner',()=>new Promise(r=>settle=r));
 const rejected=assert.rejects(work,/cancelled/);c.timers[0]();settle('late');await rejected;assert.equal(c.restores(),1);
});
const panel=read('sidepanel/panel.js');
function step(overrides={}){
 const action={type:'input',value:'synthetic'};const wt={tabId:1,pendingActions:[action],steps:[],initial:{signature:'before'},title:'Test'};
 const ctx=vm.createContext({walkthrough:wt,chrome:{tabs:{get:async()=>({id:1,url:'https://example.com/'})}},
 log(){},render(){},settlePage:async()=>{},liveSignatureOf:async()=>null,setCaptureShield:async()=>{},
 performCapture:async()=>({content:'after'}),pageSignature:x=>x,...overrides});
 vm.runInContext(panel.slice(panel.indexOf('async function captureWalkthroughStep('),panel.indexOf('\nel.wtFinish.addEventListener')),ctx);
 return {ctx,wt,action,run:()=>ctx.captureWalkthroughStep('test',1,false,true)};
}
test('failed step keeps its actions and a retry commits them exactly once',async()=>{
 const s=step({performCapture:async()=>{throw new Error('capture failed');}});
 await assert.rejects(s.run(),/capture failed/);assert.equal(s.wt.pendingActions[0],s.action);assert.ok(s.wt.failedCapture);
 s.ctx.performCapture=async()=>({content:'after'});await s.run();assert.equal(s.wt.steps.length,1);
 assert.equal(s.wt.steps[0].actions[0],s.action);assert.equal(s.wt.pendingActions.length,0);assert.equal(s.wt.failedCapture,null);
});
test('tab lookup failure cannot consume pending actions',async()=>{
 const s=step({chrome:{tabs:{get:async()=>{throw new Error('tab gone');}}}});await assert.rejects(s.run(),/tab gone/);
 assert.equal(s.wt.pendingActions.length,1);
});
test('successful step preserves actions arriving while it is captured',async()=>{
 const s=step(),later={value:'later'};s.ctx.performCapture=async()=>{s.wt.pendingActions.push(later);return {content:'after'};};
 await s.run();assert.equal(s.wt.steps[0].actions.length,1);assert.deepEqual(s.wt.pendingActions,[later]);
});
test('discarded capture cannot write to a replacement walkthrough',async()=>{
 const s=step();const replacement={steps:[],pendingActions:[]};s.ctx.performCapture=async()=>{s.ctx.walkthrough=replacement;return {content:'after'};};
 await s.run();assert.equal(replacement.steps.length,0);assert.equal(s.wt.pendingActions.length,1);
});
function upload(status=200,data={walkthrough_id:'draft'}){
 const calls=[];let revoked;const server={url:'https://app.example',token:'synthetic',email:'test@example.com'};
 const ctx=vm.createContext({serverConfig:server,zipTool:{buildZip:async()=>new Blob(['synthetic'])},maxUploadBytes:null,FormData,Blob,URL,AbortSignal,
 UPLOAD_TIMEOUT_BASE_MS:60000,UPLOAD_TIMEOUT_PER_MB_MS:20000,UPLOAD_TIMEOUT_MAX_MS:600000,log(){},formatSize:x=>x,
 chrome:{runtime:{getManifest:()=>({version:'0.2.0'})}},confirm:()=>false,hostOf:x=>new URL(x).host,
 fetch:async(url,options)=>{calls.push({url,options});return {ok:status===200,status,json:async()=>data};},
 disconnectServer:async token=>revoked=token});
 vm.runInContext(panel.slice(panel.indexOf('function uploadTimeoutFor('),panel.indexOf('async function disconnectServer(')),ctx);
 vm.runInContext(panel.slice(panel.indexOf('async function uploadCaptureZip('),panel.indexOf('\nel.send.addEventListener')),ctx);
 return {ctx,calls,server,revoked:()=>revoked,run:destination=>ctx.uploadCaptureZip([],{},destination)};
}
test('revoked upload token requests reconnection and preserves capture error state',async()=>{
 const u=upload(401);await assert.rejects(u.run(),/reconnect/);assert.equal(u.revoked(),'synthetic');
});
test('uploads reject insecure destinations and unapproved account changes',async()=>{
 const u=upload();u.server.url='http://app.example';await assert.rejects(u.run(),/HTTPS/);
 u.server.url='https://app.example';await assert.rejects(u.run({url:u.server.url,email:'other@example.com'}),/Destination change cancelled/);assert.equal(u.calls.length,0);
});
test('malformed success does not discard the draft; uploads omit cookies and redirects',async()=>{
 const u=upload(200,{});await assert.rejects(u.run(),/no draft identifier/);
 assert.equal(u.calls[0].options.credentials,'omit');assert.equal(u.calls[0].options.redirect,'error');
});
test('frame holds are released past SVG icons, which Chrome refuses to inspect for shadow roots',()=>{
 const connect=new Event();let frameReleases=0;
 const svg={namespaceURI:'http://www.w3.org/2000/svg',tagName:'svg',shadowRoot:null};
 const frame={namespaceURI:'http://www.w3.org/1999/xhtml',tagName:'IFRAME',contentWindow:{__labShield:{release(){frameReleases++;}}},contentDocument:null};
 const context=vm.createContext({self:{scSensitive:{restoreAll(){}}},window:{__labShield:{release(){}}},
  document:{querySelectorAll:()=>[svg,frame]},
  chrome:{runtime:{onConnect:connect,getURL:p=>'chrome-extension://test/'+p},
   dom:{openOrClosedShadowRoot(el){if(el.namespaceURI!=='http://www.w3.org/1999/xhtml')throw new TypeError('not an HTMLElement');return null;}}},
  AbortController,Date,setTimeout:()=>1,clearTimeout(){}});
 vm.runInContext(read('capture-session.js'),context);
 const p={name:'sc-capture-owner',sender:{url:'chrome-extension://test/sidepanel/panel.html'},onMessage:new Event(),onDisconnect:new Event(),sent:[],postMessage(m){this.sent.push(m);},disconnect(){this.onDisconnect.emit();}};
 connect.emit(p);p.onMessage.emit({type:'start',id:'owner'});p.disconnect();
 assert.equal(frameReleases,1);
});
