// Runs inside the isolated Chrome smoke harness with synthetic values only.
const assert = require('node:assert/strict');
module.exports = async ({cdp,workerSession,panelSession,tab,origin}) => {
  const page = async (body) => (await cdp.eval(workerSession,
    `chrome.scripting.executeScript({target:{tabId:${tab.id}},func:async()=>{${body}}})`))[0].result;
  const capture = () => cdp.eval(panelSession, `(async()=>{try{const c=await performCapture(await chrome.tabs.get(${tab.id}));return {content:c.content,screenshot:!!c.screenshot};}catch(e){return {error:e.message};}})()`);
  const reset = () => page('document.body.innerHTML="<h1>Synthetic test</h1><input id=field>";');
  // Dashboard pages include inline SVG icons and controls inside closed dialogs.
  await reset();
  await page(`document.body.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 10 10"><path d="M0 0h10v10H0z"/></svg><div hidden><input type=search><select><option>Newest</option></select></div><dialog><input type=number min=240 max=2000><textarea readonly></textarea></dialog>');`);
  const dashboard = await capture();
  assert.ok(!dashboard.error, 'dashboard controls and SVG: '+dashboard.error);
  assert.ok(dashboard.content.includes('<svg'), 'inline SVG survives capture');
  await reset();
  await page(`
    document.body.insertAdjacentHTML('beforeend', '<template id=tpl><input autocomplete=one-time-code value=SCTemplateSecret123></template><input id=p type=password value="SCPass&amp;123"><input id=h type=hidden value="SCHiddenDefault123"><textarea id=t autocomplete=one-time-code>SCDefaultTextarea123</textarea><input id=c autocomplete=cc-csc value=937><select id=s autocomplete=cc-name><option value=SCOptionOne>SCFirstName</option><option value=SCOptionTwo selected>SCSecondName</option></select>');
    document.querySelector('#h').value='SCHiddenLive123';
    document.querySelector('#t').value='SCLiveTextarea123';
    for(const mode of ['open','closed']) {
      const host=document.createElement('div');document.body.append(host);
      host.attachShadow({mode}).innerHTML='<input autocomplete=one-time-code value=SCShadow'+mode+'123>';
    }
    document.body.insertAdjacentHTML('beforeend', '<svg><foreignObject><div xmlns="http://www.w3.org/1999/xhtml" id="foreign-host"></div></foreignObject></svg><math><mi>x</mi></math>');
    document.querySelector('#foreign-host').attachShadow({mode:'closed'}).innerHTML='<input type=password value=SCForeignSecret123>';
    const frame=document.createElement('iframe');frame.srcdoc='<svg><circle r="4"/></svg><input autocomplete=cc-number value="SCFrame&amp;123"><p>SCFrame&amp;123</p>';
    document.body.append(frame);await new Promise(resolve=>frame.onload=resolve);
  `);
  const first = await capture();
  assert.ok(!first.error, first.error);
  assert.equal(first.screenshot,false,'no pixels retained with sensitive controls or frames');
  for (const secret of ['SCPass','SCHidden','SCDefaultTextarea','SCLiveTextarea','SCOption','SCFirstName','SCSecondName','SCShadow','SCFrame','SCForeignSecret','SCTemplate','937']) {
    assert.ok(!first.content.includes(secret), 'HTML contains '+secret);
  }
  assert.deepEqual(await page(`return [...document.querySelectorAll('#p,#h,#t,#c,#s')].map(el=>el.value);`),
    ['SCPass&123','SCHiddenLive123','SCLiveTextarea123','937','SCOptionTwo'],'live values restored including selected option');
  assert.equal(await page(`return document.querySelector('#tpl').content.querySelector('input').value;`),'SCTemplateSecret123');
  assert.equal(await page(`return document.querySelector('#t').textContent;`),'SCDefaultTextarea123');
  assert.equal(await page(`return chrome.dom.openOrClosedShadowRoot(document.querySelectorAll('div')[1]).querySelector('input').value;`),'SCShadowclosed123');
  assert.equal(await page(`return chrome.dom.openOrClosedShadowRoot(document.querySelector('#foreign-host')).querySelector('input').value;`),'SCForeignSecret123');

  await reset();
  const rollback = await page(`
    document.body.insertAdjacentHTML('beforeend','<input id=first type=password value=SCDefault123><input id=bad type=password>');
    document.querySelector('#first').value='SCLive123';
    Object.defineProperty(document.querySelector('#bad'),'value',{get:()=> 'SCBad123',set:()=>{throw new Error('Synthetic setter failure');}});
    let refused=false;try{scSensitive.redactAll('rollback');}catch{refused=true;}
    return {refused,value:document.querySelector('#first').value,defaultValue:document.querySelector('#first').defaultValue};
  `);
  assert.deepEqual(rollback,{refused:true,value:'SCLive123',defaultValue:'SCDefault123'},'partial blanking failure restores earlier fields');
  await reset();
  const expired = await page(`
    document.querySelector('#field').type='password';document.querySelector('#field').value='SCExpiry123';
    const original=setTimeout;
    try {self.setTimeout=(fn,ms)=>original(fn,ms===180000?1:ms);scSensitive.redactAll('expiry');}
    finally{self.setTimeout=original;}
    await new Promise(resolve=>original(resolve,20));
    let refused=false;try{scSensitive.verify('expiry');}catch{refused=true;}
    return {refused,value:document.querySelector('#field').value};
  `);
  assert.deepEqual(expired,{refused:true,value:'SCExpiry123'},'owner loss fallback restores fields and invalidates further output');
  // Direct guard exercises cover transaction behavior independently of SingleFile.
  await reset();
  const encoded = await page(`
    document.querySelector('#field').outerHTML='<input id=field autocomplete=one-time-code value="SCSecret&amp;123">';
    scSensitive.redactAll('encoding');
    try {
      const raw='SCSecret&123', entity='SCSecret&amp;123';
      const html='<p>'+entity+'</p><iframe src="data:text/html;base64,'+btoa('<p>'+entity+'</p>')+'"></iframe>';
      const result=scSensitive.scrub(html,'encoding');
      const nested=atob(result.html.match(/base64,([^\"]+)/)[1]);
      return {html:result.html,nested};
    } finally { scSensitive.restoreAll('encoding'); }
  `);
  assert.ok(!encoded.html.includes('SCSecret') && !encoded.nested.includes('SCSecret'));
  const owner = await page(`
    scSensitive.redactAll('owner');let refused=false;
    try { scSensitive.redactAll('other'); } catch { refused=true; }
    const restored=scSensitive.restoreAll('other');
    const blank=document.querySelector('#field').value;
    scSensitive.restoreAll('owner');return {refused,restored,blank,value:document.querySelector('#field').value};
  `);
  assert.deepEqual(owner,{refused:true,restored:0,blank:'',value:'SCSecret&123'});
  const refill = await page(`
    scSensitive.redactAll('refill');document.querySelector('#field').value='SCNewApplicationValue';let refused=false;
    try { scSensitive.scrub('<p>safe</p>','refill'); } catch { refused=true; }
    scSensitive.restoreAll('refill');return {refused,value:document.querySelector('#field').value};
  `);
  assert.deepEqual(refill,{refused:true,value:'SCNewApplicationValue'},'refill rejects and cleanup preserves newer value');
  const short = await page(`
    document.querySelector('#field').value='937';scSensitive.redactAll('short');
    try { scSensitive.scrub('<p>937</p>','short');return false; } catch {return true;}
    finally {scSensitive.restoreAll('short');}
  `);
  assert.equal(short,true,'ambiguous short reflections abort');
  const changed = await page(`
    scSensitive.redactAll('changed');const replacement=document.querySelector('#field').cloneNode();replacement.value='SCReplacement123';document.querySelector('#field').replaceWith(replacement);
    try { scSensitive.verify('changed');return false;}catch{return true;}finally{scSensitive.restoreAll('changed');}
  `);
  assert.equal(changed,true,'replacement controls invalidate protection');
  await reset();
  await page(`const frame=document.createElement('iframe');frame.sandbox='';frame.srcdoc='<input value=SCInaccessible123>';document.body.append(frame);await new Promise(resolve=>frame.onload=resolve);`);
  const blocked = await capture();assert.match(blocked.error,/embedded frame cannot be inspected/);
  assert.equal(await page(`return scSensitive.restoreAll('unknown');`),0);
  await reset();
  // Real capture refills a control immediately before engine execution.
  await page(`document.querySelector('#field').setAttribute('autocomplete','one-time-code');document.querySelector('#field').value='SCBeforeRefill123';`);
  const rejected = await cdp.eval(panelSession, `(async()=>{const original=runCaptureInPage;try{runCaptureInPage=async function(options,lab,id){document.querySelector('#field').value='SCRefilled123';try{self.scSensitive.verify(id);}catch(e){return {error:e.message};}};try{await performCapture(await chrome.tabs.get(${tab.id}));return false;}catch(e){return e.message;}}finally{runCaptureInPage=original;}})()`);
  assert.match(rejected,/protection could not be verified/,'capture does not produce output when redaction verification throws');
  await reset();
  console.log('PASS: redaction covers closed roots, same-origin frames, hidden values, textarea defaults, dropdowns, short CSCs and encoded reflections; protected captures omit PNG; unsafe frames/refills/replacements abort; cleanup preserves form state and transaction ownership.');
};
