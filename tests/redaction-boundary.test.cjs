const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../sidepanel/panel.js'), 'utf8');
const helpers = source.slice(source.indexOf('async function redactSecrets('), source.indexOf('// Ground-truth viewport screenshot:'));
function helper(executeScript) {
  const context = vm.createContext({chrome: {scripting: {executeScript}}});
  vm.runInContext(helpers, context);
  return context;
}
test('redaction injection failure is fatal', async () => {
  let calls=0;
  const c=helper(async()=>{calls++;throw new Error('Access denied');});
  await assert.rejects(c.redactSecrets(1,{id:'owner'}),/Access denied/);
  assert.equal(calls,1);
});
test('redaction and cleanup are pinned to the original document and owner', async () => {
  const calls=[];
  const c=helper(async options=>{calls.push(options);return options.files?
    [{frameId:0,documentId:'original'}]:[{documentId:'original',result:{count:1,screenshotSafe:false}}];});
  const guard={id:'owner'};
  await c.redactSecrets(1,guard);await c.restoreSecrets(1,guard);
  for(const call of calls.slice(1)) {
    assert.deepEqual(JSON.parse(JSON.stringify(call.target)),{tabId:1,documentIds:['original']});
    assert.deepEqual([...call.args],['owner']);
  }
});
test('missing or mismatched redaction receipts are fatal', async () => {
  for(const receipt of [undefined,{documentId:'original'},{documentId:'replacement',result:{count:0}}]) {
    const c=helper(async options=>options.files?[{frameId:0,documentId:'original'}]:[receipt]);
    await assert.rejects(c.redactSecrets(1,{id:'owner'}),/could not be verified/);
  }
});
for (const method of ['redactAll', 'verify']) test(method+' returns a useful, safe failure receipt', async () => {
  const protectionMessage = 'Sensitive-field protection could not be verified. An embedded frame cannot be inspected.';
  for (const known of [true, false]) {
    const c=helper(async options=>{
      if(options.files) return [{frameId:0,documentId:'original'}];
      const error=new Error(known?protectionMessage:'SCSecretFromPageSetter');
      if(known) error.name='SensitiveProtectionError';
      const context=vm.createContext({self:{scSensitive:{[method](){throw error;}}}});
      const result=vm.runInContext('('+options.func.toString()+')',context)(...options.args);
      return [{documentId:'original',result}];
    });
    const guard={id:'owner',documentId:'original'};
    const run=method==='redactAll'?c.redactSecrets:c.verifySecrets;
    await assert.rejects(run(1,guard),error=>{
      assert.match(error.message,known?/embedded frame cannot be inspected/:/page could not be inspected/);
      assert.ok(!error.message.includes('SCSecretFromPageSetter'));
      return true;
    });
  }
});
function engine(protection) {
  let starts=0,options;
  const context=vm.createContext({self:{scSensitive:protection,scCapture:{run:async(id,work)=>work()}},
    chrome:{runtime:{sendMessage(){}}},setInterval:()=>1,clearInterval(){},
    singlefile:{init(){},async getPageData(o){starts++;options=o;return {content:'SCSecretContent',title:'Title'};}}});
  vm.runInContext(source.slice(source.indexOf('function runCaptureInPage(')),context);
  return {run:()=>context.runCaptureInPage({blockScripts:false},{},'owner','https://example.com/'),starts:()=>starts,options:()=>options};
}
test('missing protection prevents the engine from starting', async () => {
  const e=engine(undefined),result=await e.run();
  assert.equal(e.starts(),0);assert.ok(result.error);assert.equal(result.content,undefined);
});
test('failed output verification returns no HTML and cannot re-enable scripts', async () => {
  const e=engine({verify(){},scrub(){throw new Error('Protection expired');}}),result=await e.run();
  assert.equal(result.error,'Protection expired');assert.equal(result.content,undefined);
  assert.equal(e.options().blockScripts,true);
});

test('resource loader bounds chunked bodies and uses no privileged fallback', async () => {
  let adapter, reads=0, cancelled=false, fetchOptions;
  const context=vm.createContext({self:{scSensitive:{verify(){},scrub:html=>({html,hits:0})},scCapture:{run:async(id,work)=>work(),signal:()=>new AbortController().signal}},
    chrome:{runtime:{sendMessage(m){assert.notEqual(m.type,'fetchResource');}}},setInterval:()=>1,clearInterval(){},setTimeout,clearTimeout,
    AbortController,URL,Uint8Array,Date,location:{href:'https://example.com/'},
    fetch:async(url,options)=>{fetchOptions=options;return {ok:true,status:200,headers:new Headers(),body:{getReader:()=>({read:async()=>{reads++;return {done:false,value:new Uint8Array(1024*1024)};},cancel:async()=>{cancelled=true;}})}};},
    singlefile:{init(config){adapter=config.fetch;},async getPageData(){await adapter('https://example.com/big');return {content:'safe'};}}});
  vm.runInContext(source.slice(source.indexOf('function runCaptureInPage(')),context);
  const result=await context.runCaptureInPage({}, {}, 'owner','https://example.com/');
  assert.match(result.error,/32 MB/);assert.equal(reads,33);assert.equal(cancelled,true);
  assert.equal(fetchOptions.credentials,'omit');assert.equal(fetchOptions.redirect,'error');assert.equal(fetchOptions.signal.aborted,true);
});
