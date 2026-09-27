// Marketing layout rendered from an actual native panel screenshot and the
// existing brand icon. Loopback address and fixture copy are swapped for the
// production destination and a representative page; no invented walkthrough UI.
const fs=require('node:fs'),path=require('node:path');
module.exports=async({cdp,panelSession,extensionId})=>{
 const root=path.resolve(__dirname,'../release/assets');fs.mkdirSync(root,{recursive:true});
 // Store presentation: the panel is the real recorder UI, but the fixture it
 // recorded runs on a loopback test server with placeholder copy. Swap in the
 // production destination and a representative app page so the listing does
 // not advertise 127.0.0.1 or "Synthetic recording fixture".
 const demo=`<!doctype html><meta charset="utf-8"><title>Approvals — Ledgerly</title><style>*{box-sizing:border-box}body{margin:0;font:15px/1.5 -apple-system,Segoe UI,Arial,sans-serif;color:#1d2b36;background:#f4f7fa}header{display:flex;align-items:center;gap:12px;padding:0 28px;height:60px;background:#1d3557;color:#fff;font-weight:700;font-size:18px}.dot{width:26px;height:26px;border-radius:7px;background:#4cc9a6}main{padding:34px 40px}h1{font-size:28px;margin:0 0 6px}.sub{color:#5d6b78;margin:0 0 26px}table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #dbe3ea;border-radius:10px;overflow:hidden}th,td{text-align:left;padding:16px 20px;border-bottom:1px solid #e7edf2}th{font-size:13px;text-transform:uppercase;letter-spacing:.6px;color:#6b7a88;background:#f9fbfc}.amt{font-variant-numeric:tabular-nums;font-weight:600}.btn{display:inline-block;padding:8px 18px;border-radius:6px;font-weight:600;font-size:14px;margin-right:8px}.ok{background:#1f8a5b;color:#fff}.no{border:1px solid #c9d3dc;color:#34495e}tr.sel{background:#eef8f4;outline:2px solid #32c3e8;outline-offset:-2px}</style><header><span class="dot"></span>Ledgerly</header><main><h1>Expense approvals</h1><p class="sub">3 reports waiting for your review</p><table><tr><th>Employee</th><th>Report</th><th>Amount</th><th></th></tr><tr class="sel"><td>Dana Ortiz</td><td>Client visit — Chicago</td><td class="amt">$1,284.50</td><td><span class="btn ok">Approve</span><span class="btn no">Reject</span></td></tr><tr><td>Sam Patel</td><td>Conference registration</td><td class="amt">$649.00</td><td><span class="btn ok">Approve</span><span class="btn no">Reject</span></td></tr><tr><td>Lee Chen</td><td>Team lunch</td><td class="amt">$212.75</td><td><span class="btn ok">Approve</span><span class="btn no">Reject</span></td></tr></table></main>`;
 const demoTarget=await cdp.call('Target.createTarget',{url:'about:blank'});
 const demoSession=await cdp.attach(demoTarget.targetId);
 await cdp.call('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false},demoSession);
 await cdp.eval(demoSession,`document.open();document.write(${JSON.stringify(demo)});document.close();`);
 const demoShot=(await cdp.call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false},demoSession)).data;
 await cdp.call('Target.closeTarget',{targetId:demoTarget.targetId});
 await cdp.eval(panelSession,`(async()=>{
  const loopback=/https?:\\/\\/(127\\.0\\.0\\.1|localhost):\\d+|(127\\.0\\.0\\.1|localhost):\\d+/g;
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  for(let n;(n=w.nextNode());){n.nodeValue=n.nodeValue.replace(loopback,'app.captcher.app').replace(/Synthetic recording fixture/g,'Approve an expense report');}
  for(const i of document.querySelectorAll('.thumb img')){i.src='data:image/png;base64,${demoShot}';await i.decode();}
  if(loopback.test(document.body.innerText)||/Synthetic/.test(document.body.innerText))throw new Error('store screenshot still shows test fixture text');
 })()`);
 await cdp.call('Emulation.setDeviceMetricsOverride',{width:400,height:720,deviceScaleFactor:1,mobile:false},panelSession);
 const shot=await cdp.call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false},panelSession);
 await cdp.call('Emulation.clearDeviceMetricsOverride',{},panelSession);
 fs.writeFileSync(path.join(root,'panel-recording.png'),Buffer.from(shot.data,'base64'));
 const icon=fs.readFileSync(path.resolve(__dirname,'../icons/icon128.png')).toString('base64');
 const target=await cdp.call('Target.createTarget',{url:`chrome-extension://${extensionId}/help.html`});
 const session=await cdp.attach(target.targetId);
 for(let i=0;i<100;i++){if(await cdp.eval(session,'location.pathname==="/help.html" && document.readyState==="complete"').catch(()=>false))break;await new Promise(r=>setTimeout(r,50));}
 const html=`<!doctype html><meta charset="utf-8"><title>Captcher — store screenshot</title><link rel="stylesheet" href="fonts/fonts.css"><style>*{box-sizing:border-box}body{margin:0;background:#FAFAF9;color:#14151A;font-family:"DM Sans",Arial,sans-serif}.wrap{width:1280px;height:800px;display:flex;align-items:center;padding:40px 90px;gap:85px;background:#FAFAF9}.copy{flex:1}.logo{width:96px;height:96px;margin:-12px 0 20px -12px}.eyebrow{font-size:15px;font-weight:600;letter-spacing:.08em;color:#3B49C6}h1{font-family:Outfit,"DM Sans",sans-serif;font-weight:600;font-size:58px;line-height:1.06;letter-spacing:-.025em;margin:20px 0 24px}.stripe{width:220px;height:8px;border-radius:999px;background:linear-gradient(90deg,#FF6A5C 0 25%,#29B6FF 25% 50%,#3ECFA2 50% 75%,#3B49C6 75%);margin:0 0 28px}p{font-size:22px;line-height:1.5;color:#4B4F5A;margin:0}.note{font-size:15px;margin-top:36px;color:#6B6F7B}.panel{width:400px;height:720px;border:1px solid #E6E7EC;border-radius:18px;overflow:hidden;flex:none;box-shadow:0 24px 60px rgba(20,21,26,.14),0 2px 6px rgba(20,21,26,.05)}.panel img{width:400px;height:720px;display:block}</style><main class="wrap"><div class="copy"><img class="logo" src="data:image/png;base64,${icon}"><div class="eyebrow">CAPTCHER RECORDER</div><h1>Walk through it.<br>Capture the steps.</h1><div class="stripe"></div><p>Record a software flow.<br>Submit it to your connected account.<br>Review the generated draft.</p><p class="note">Captcher account required</p></div><div class="panel"><img src="data:image/png;base64,${shot.data}"></div></main>`;
 fs.writeFileSync(path.join(root,'screenshot.html'),html);
 await cdp.eval(session,`document.open();document.write(${JSON.stringify(html)});document.close();`);
 if(await cdp.eval(session,'document.title')!=='Captcher — store screenshot')throw new Error('Store screenshot layout did not load');
 await cdp.call('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false},session);
 await cdp.eval(session,'Promise.all([document.fonts.ready,...[...document.images].map(i=>i.decode())])');
 fs.writeFileSync(path.join(root,'screenshot-1280x800.png'),Buffer.from((await cdp.call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false},session)).data,'base64'));
 const promo=`<!doctype html><meta charset=utf-8><link rel="stylesheet" href="fonts/fonts.css"><style>*{box-sizing:border-box}body{margin:0;width:440px;height:280px;background:#3B49C6;overflow:hidden;font-family:Outfit,'DM Sans',sans-serif}.mark{position:absolute;left:34px;top:40px;width:104px;height:104px}.word{position:absolute;left:34px;top:170px;color:#fff;font-weight:900;font-size:34px;letter-spacing:-.035em;line-height:1}.sub{position:absolute;left:36px;top:210px;color:rgba(255,255,255,.82);font-family:'DM Sans',sans-serif;font-weight:600;font-size:13px;letter-spacing:.08em}.card{position:absolute;width:170px;height:118px;background:#fff;border-radius:16px;box-shadow:0 12px 30px rgba(20,21,26,.25);padding:18px}.a{left:236px;top:120px;transform:rotate(-7deg);opacity:.55}.b{left:246px;top:84px;transform:rotate(4deg);opacity:.8}.c{left:232px;top:52px;transform:rotate(-2deg)}.dot{width:16px;height:16px;border-radius:50%;background:#29B6FF}.line{height:8px;background:#E6E7EC;border-radius:8px;margin:12px 0}.line.short{width:62%}.bar{height:6px;border-radius:999px;background:linear-gradient(90deg,#FF6A5C 0 25%,#29B6FF 25% 50%,#3ECFA2 50% 75%,#3B49C6 75%);margin-top:16px}</style><svg class="mark" viewBox="0 0 526 526"><path fill="#fff" d="M230 0h296v50H230zM476 0h50v270h-50zM0 256h50v270H0zM0 476h296v50H0z"/><path fill="#FF6A5C" d="M0 0h72v72H0z"/><path fill="#29B6FF" d="M92 92h90v90H92z"/><path fill="#fff" d="M202 202h122v122H202z"/><path fill="#3ECFA2" d="M344 344h90v90h-90z"/><path fill="#FF6A5C" d="M454 454h72v72h-72z"/></svg><div class=word>Captcher</div><div class=sub>RECORDER</div><div class="card a"></div><div class="card b"></div><div class="card c"><div class=dot></div><div class=line></div><div class="line short"></div><div class=bar></div></div>`;
 fs.writeFileSync(path.join(root,'promo.html'),promo);
 await cdp.eval(session,`document.open();document.write(${JSON.stringify(promo)});document.close();`);
 await cdp.call('Emulation.setDeviceMetricsOverride',{width:440,height:280,deviceScaleFactor:1,mobile:false},session);
 await cdp.eval(session,'Promise.all([document.fonts.ready,...[...document.images].map(i=>i.decode())])');
 fs.writeFileSync(path.join(root,'promo-440x280.png'),Buffer.from((await cdp.call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false},session)).data,'base64'));
 await cdp.call('Target.closeTarget',{targetId:target.targetId});
 console.log('PASS: store screenshot 1280x800 and promotional tile 440x280 rendered from the real synthetic recorder UI and existing icon.');
};
