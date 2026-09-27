const assert=require('node:assert/strict');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
module.exports=async({cdp,workerSession,panelSession,tab,origin,fixtureState})=>{
 const state=()=>cdp.eval(panelSession,'({state:computeState(),status:el.wtStatus.textContent,kept:!!walkthrough?.initial,token:!!serverConfig.token})');
 const wait=async(predicate)=>{let s;for(let i=0;i<150;i++){s=await state();if(predicate(s))return s;await sleep(100);}throw new Error('Timed out: '+JSON.stringify(s));};
 const action=()=>cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${tab.id}},func:()=>{const e=document.querySelector('#field');e.value='Synthetic upload workflow';e.dispatchEvent(new Event('change',{bubbles:true}));}})`);
 await action();await sleep(100);await cdp.eval(panelSession,'el.wtFinish.click()');await wait(s=>s.state==='sent');
 assert.ok(fixtureState.uploads.length===1);assert.ok(fixtureState.uploads[0].includes(Buffer.from('walkthrough.json')));
 await cdp.eval(panelSession,'el.wtStart.click()');await wait(s=>s.state==='recording');
 await action();await sleep(100);fixtureState.uploadStatus=401;await cdp.eval(panelSession,'el.wtFinish.click()');
 const rejected=await wait(s=>s.status.startsWith('Send failed:'));assert.equal(rejected.kept,true);assert.equal(rejected.token,false);
 // Re-pair to the same synthetic account. The fixture does not implement sign-in.
 await cdp.eval(workerSession,`chrome.storage.local.set({server:{url:${JSON.stringify(origin)},token:'synthetic-test-key',email:''}})`);
 fixtureState.uploadStatus=201;await sleep(100);await cdp.eval(panelSession,'showSurface("main");el.wtFinish.click()');await wait(s=>s.state==='sent');
 assert.equal(fixtureState.uploads.length,3);
 // Closing the recorded tab with actions pending, while no other flow tab is
 // active, must not make Finish impossible: the trailing actions land on a
 // repeat of the last kept page and the recording is submitted.
 await cdp.eval(panelSession,'el.wtStart.click()');await wait(s=>s.state==='recording');
 // Open the flow tab the way a page does: a real click on a target=_blank link.
 const pageTarget=(await cdp.call('Target.getTargets')).targetInfos.find(t=>t.type==='page'&&t.url===origin+'/recorded');
 const pageSession=await cdp.attach(pageTarget.targetId);
 await cdp.eval(pageSession,`(()=>{const a=document.createElement('a');a.href='/flow';a.target='_blank';a.textContent='Open flow';a.style.cssText='position:fixed;left:0;top:0;width:200px;height:60px;display:block;z-index:2147483647;background:#fff';document.body.append(a);})()`);
 await sleep(300);
 for(const type of ['mousePressed','mouseReleased'])await cdp.call('Input.dispatchMouseEvent',{type,button:'left',clickCount:1,x:100,y:30},pageSession);
 let flow;for(let i=0;i<50&&!flow;i++){[flow]=await cdp.eval(workerSession,`chrome.tabs.query({url:${JSON.stringify(origin+'/flow')}})`);if(!flow)await sleep(100);}
 assert.ok(flow,'link opened the flow tab');
 for(let i=0;i<100;i++){const ready=await cdp.eval(panelSession,`walkthrough.tabId===${flow.id}&&!captureBusy`).catch(()=>false);
   const injected=(await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${flow.id}},func:()=>!!window.__labRecorder})`).catch(()=>[{}]))[0]?.result;
   if(ready&&injected)break;await sleep(100);}
 await cdp.eval(workerSession,`chrome.scripting.executeScript({target:{tabId:${flow.id}},func:()=>{const e=document.querySelector('#field');e.value='Synthetic closed-tab action';e.dispatchEvent(new Event('change',{bubbles:true}));}})`);
 await sleep(100);assert.ok(await cdp.eval(panelSession,'walkthrough.pendingActions.length>0'),'flow tab action is pending: '+await cdp.eval(panelSession,'JSON.stringify({tabId:walkthrough.tabId,steps:walkthrough.steps.map(s=>s.actions.length),log:el.log.textContent.slice(-1500)})'));
 const elsewhere=await cdp.eval(workerSession,`chrome.tabs.create({url:${JSON.stringify(origin+'/elsewhere')},active:true})`);
 await cdp.eval(workerSession,`chrome.tabs.remove(${flow.id})`);await sleep(200);
 await cdp.eval(panelSession,'el.wtFinish.click()');await wait(s=>s.state==='sent');
 assert.equal(fixtureState.uploads.length,4);
 assert.ok((await cdp.eval(panelSession,'el.log.textContent')).includes('saved from the last captured page'),'trailing actions kept on the last page');
 await cdp.eval(workerSession,`chrome.tabs.remove(${elsewhere.id})`);await cdp.eval(workerSession,`chrome.tabs.update(${tab.id},{active:true})`);await sleep(200);
 await cdp.eval(panelSession,'el.wtStart.click()');await wait(s=>s.state==='recording');
 console.log('PASS: native Finish submits the ZIP to the synthetic server; 401 retains the draft and invalidates the connection; reconnection and retry succeed; Finish still submits after the recorded tab is closed.');
};
