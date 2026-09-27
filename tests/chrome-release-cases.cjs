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
 await cdp.eval(panelSession,'el.wtStart.click()');await wait(s=>s.state==='recording');
 console.log('PASS: native Finish submits the ZIP to the synthetic server; 401 retains the draft and invalidates the connection; reconnection and retry succeed.');
};
