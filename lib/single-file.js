/*
 * SingleFile engine — extracted from single-file-cli 2.0.83 (lib/single-file-bundle.js).
 * Copyright 2010-2024 Gildas Lormeau — GNU AGPL v3. See lib/SINGLE-FILE-LICENSE.
 * Regenerate: see README "Updating the SingleFile engine".
 */
var singlefile=(()=>{var vr=Object.defineProperty;var Ab=Object.getOwnPropertyDescriptor;var jb=Object.getOwnPropertyNames;var Cb=Object.prototype.hasOwnProperty;var de=(e,t)=>{for(var a in t)vr(e,a,{get:t[a],enumerable:!0})},Tb=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of jb(t))!Cb.call(e,n)&&n!==a&&vr(e,n,{get:()=>t[n],enumerable:!(o=Ab(t,n))||o.enumerable});return e};var Lb=e=>Tb(vr({},"__esModule",{value:!0}),e);var Lz={};de(Lz,{SingleFile:()=>yr,getPageData:()=>Tz,helper:()=>wi,init:()=>fb,modules:()=>hr,processors:()=>cl,vendor:()=>or});var cl={};de(cl,{compression:()=>Go,frameTree:()=>on,hooksFrames:()=>Vo,lazy:()=>ga});var Go={};de(Go,{process:()=>Da});var Ls={};de(Ls,{BlobReader:()=>da,BlobWriter:()=>Vn,Data64URIReader:()=>Wr,Data64URIWriter:()=>Kr,ERR_BAD_FORMAT:()=>Bn,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>$m,ERR_DUPLICATED_NAME:()=>oh,ERR_ENCRYPTED:()=>Qm,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>Xm,ERR_EOCDR_NOT_FOUND:()=>Ym,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>Zm,ERR_HTTP_RANGE:()=>qo,ERR_INVALID_COMMENT:()=>nh,ERR_INVALID_ENCRYPTION_STRENGTH:()=>sh,ERR_INVALID_ENTRY_COMMENT:()=>ih,ERR_INVALID_ENTRY_NAME:()=>rh,ERR_INVALID_EXTRAFIELD_DATA:()=>ch,ERR_INVALID_EXTRAFIELD_TYPE:()=>lh,ERR_INVALID_PASSWORD:()=>ws,ERR_INVALID_SIGNATURE:()=>bs,ERR_INVALID_VERSION:()=>ss,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>Lm,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>Jm,ERR_SPLIT_ZIP_FILE:()=>ns,ERR_UNSUPPORTED_COMPRESSION:()=>os,ERR_UNSUPPORTED_ENCRYPTION:()=>eh,ERR_UNSUPPORTED_FORMAT:()=>Jn,HttpRangeReader:()=>Qr,HttpReader:()=>Wn,Reader:()=>Et,SplitDataReader:()=>Oo,SplitDataWriter:()=>za,SplitZipReader:()=>Ay,SplitZipWriter:()=>jy,TextReader:()=>Mo,TextWriter:()=>Yr,Uint8ArrayReader:()=>es,Uint8ArrayWriter:()=>Do,Writer:()=>No,ZipReader:()=>Yn,ZipReaderStream:()=>is,ZipWriter:()=>_a,ZipWriterStream:()=>ls,configure:()=>Uo,getMimeType:()=>Fb,initReader:()=>As,initShimAsyncCodec:()=>Bb,initStream:()=>_t,initWriter:()=>js,readUint8Array:()=>Re,terminateWorkers:()=>gy});var Zy={},{Array:Wt,Object:O,String:fd,Number:Fo,BigInt:ze,Math:le,Date:Pa,Map:cs,Set:wd,Response:ds,URL:ms,Error:q,Uint8Array:M,Uint16Array:bd,Uint32Array:hs,DataView:ma,Blob:Kd,Promise:De,TextEncoder:yd,TextDecoder:Yd,crypto:zo,btoa:kd,TransformStream:ge,ReadableStream:us,WritableStream:Bo,CompressionStream:vd,DecompressionStream:Sd,navigator:Sr,Worker:Nn}=globalThis,be=4294967295,pe=65535,Tr=8,Xd=0,$d=99,Jd=67324752,ps=134695760,Rb=ps,Lr=33639248,Zd=101010256,Rr=101075792,Qd=117853008,at=22,To=20,Lo=56,zb=at+To+Lo,em=1,tm=39169,am=10,om=1,gs=21589,Ib=28789,_b=25461,nm=6534,zr=1,Pb=6,Ir=8,_r=2048,Pr=16,Nb=20,Ed=45,xd=51,Mn="/",Ad=new Pa(2107,11,31),jd=new Pa(1980,0,1),te=void 0,Kt="undefined",Na="function",Hn=class{constructor(t){return class extends ge{constructor(a,o){let n=new t(o);super({transform(i,r){r.enqueue(n.append(i))},flush(i){let r=n.flush();r&&i.enqueue(r)}})}}}},Mb=64,im=2;try{typeof Sr!=Kt&&Sr.hardwareConcurrency&&(im=Sr.hardwareConcurrency)}catch{}var Db={chunkSize:512*1024,maxWorkers:im,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:te,CompressionStreamNative:typeof vd!=Kt&&vd,DecompressionStreamNative:typeof Sd!=Kt&&Sd},Gt=O.assign({},Db);function fs(){return Gt}function rm(e){return le.max(e.chunkSize,Mb)}function Uo(e){let{baseURL:t,chunkSize:a,maxWorkers:o,terminateWorkerTimeout:n,useCompressionStream:i,useWebWorkers:r,Deflate:s,Inflate:l,CompressionStream:c,DecompressionStream:d,workerScripts:m}=e;if(Ht("baseURL",t),Ht("chunkSize",a),Ht("maxWorkers",o),Ht("terminateWorkerTimeout",n),Ht("useCompressionStream",i),Ht("useWebWorkers",r),s&&(Gt.CompressionStream=new Hn(s)),l&&(Gt.DecompressionStream=new Hn(l)),Ht("CompressionStream",c),Ht("DecompressionStream",d),m!==te){let{deflate:h,inflate:u}=m;if((h||u)&&(Gt.workerScripts||(Gt.workerScripts={})),h){if(!Wt.isArray(h))throw new q("workerScripts.deflate must be an array");Gt.workerScripts.deflate=h}if(u){if(!Wt.isArray(u))throw new q("workerScripts.inflate must be an array");Gt.workerScripts.inflate=u}}}function Ht(e,t){t!==te&&(Gt[e]=t)}function Ob(e){let t=()=>ms.createObjectURL(new Kd([`const{Array:e,Object:t,Number:n,Math:s,Error:r,Uint8Array:a,Uint16Array:i,Uint32Array:o,Int32Array:l,Map:c,DataView:h,Promise:f,TextEncoder:u,crypto:p,postMessage:d,TransformStream:g,ReadableStream:w,WritableStream:y,CompressionStream:v,DecompressionStream:b}=self,m=void 0,_="undefined",S="function";class k{constructor(e){return class extends g{constructor(t,n){const s=new e(n);super({transform(e,t){t.enqueue(s.append(e))},flush(e){const t=s.flush();t&&e.enqueue(t)}})}}}}const z=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;z[e]=t}class D{constructor(e){this.crc=e||-1}append(e){let t=0|this.crc;for(let n=0,s=0|e.length;s>n;n++)t=t>>>8^z[255&(t^e[n])];this.crc=t}get(){return~this.crc}}class C extends g{constructor(){let e;const t=new D;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new a(4);new h(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const x={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],s=x.getPartial(n);return 32===s?e.concat(t):x._shiftRight(t,s,0|n,e.slice(0,e.length-1))},bitLength(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+x.getPartial(n)},clamp(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,s.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=x.partial(t,e[n-1]&2147483648>>t-1,1)),e},partial:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,getPartial:e=>s.round(e/1099511627776)||32,_shiftRight(e,t,n,s){for(void 0===s&&(s=[]);t>=32;t-=32)s.push(n),n=0;if(0===t)return s.concat(e);for(let r=0;r<e.length;r++)s.push(n|e[r]>>>t),n=e[r]<<32-t;const r=e.length?e[e.length-1]:0,a=x.getPartial(r);return s.push(x.partial(t+a&31,t+a>32?n:s.pop(),1)),s}},I={bytes:{fromBits(e){const t=x.bitLength(e)/8,n=new a(t);let s;for(let r=0;t>r;r++)3&r||(s=e[r/4]),n[r]=s>>>24,s<<=8;return n},toBits(e){const t=[];let n,s=0;for(n=0;n<e.length;n++)s=s<<8|e[n],3&~n||(t.push(s),s=0);return 3&n&&t.push(x.partial(8*(3&n),s)),t}}},T=class{constructor(e){const t=this;t.blockSize=512,t._init=[1732584193,4023233417,2562383102,271733878,3285377520],t._key=[1518500249,1859775393,2400959708,3395469782],e?(t._h=e._h.slice(0),t._buffer=e._buffer.slice(0),t._length=e._length):t.reset()}reset(){const e=this;return e._h=e._init.slice(0),e._buffer=[],e._length=0,e}update(e){const t=this;"string"==typeof e&&(e=I.utf8String.toBits(e));const n=t._buffer=x.concat(t._buffer,e),s=t._length,a=t._length=s+x.bitLength(e);if(a>9007199254740991)throw new r("Cannot hash more than 2^53 - 1 bits");const i=new o(n);let l=0;for(let e=t.blockSize+s-(t.blockSize+s&t.blockSize-1);a>=e;e+=t.blockSize)t._block(i.subarray(16*l,16*(l+1))),l+=1;return n.splice(0,16*l),t}finalize(){const e=this;let t=e._buffer;const n=e._h;t=x.concat(t,[x.partial(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(s.floor(e._length/4294967296)),t.push(0|e._length);t.length;)e._block(t.splice(0,16));return e.reset(),n}_f(e,t,n,s){return e>19?e>39?e>59?e>79?void 0:t^n^s:t&n|t&s|n&s:t^n^s:t&n|~t&s}_S(e,t){return t<<e|t>>>32-e}_block(t){const n=this,r=n._h,a=e(80);for(let e=0;16>e;e++)a[e]=t[e];let i=r[0],o=r[1],l=r[2],c=r[3],h=r[4];for(let e=0;79>=e;e++){16>e||(a[e]=n._S(1,a[e-3]^a[e-8]^a[e-14]^a[e-16]));const t=n._S(5,i)+n._f(e,o,l,c)+h+a[e]+n._key[s.floor(e/20)]|0;h=c,c=l,l=n._S(30,o),o=i,i=t}r[0]=r[0]+i|0,r[1]=r[1]+o|0,r[2]=r[2]+l|0,r[3]=r[3]+c|0,r[4]=r[4]+h|0}},A={getRandomValues(e){const t=new o(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(s.random()>.5?1:-1))};for(let r,a=0;a<e.length;a+=4){const e=n(4294967296*(r||s.random()));r=987654071*e(),t[a/4]=4294967296*e()|0}return e}},q={importKey:e=>new q.hmacSha1(I.bytes.toBits(e)),pbkdf2(e,t,n,s){if(n=n||1e4,0>s||0>n)throw new r("invalid params to pbkdf2");const a=1+(s>>5)<<2;let i,o,l,c,f;const u=new ArrayBuffer(a),p=new h(u);let d=0;const g=x;for(t=I.bytes.toBits(t),f=1;(a||1)>d;f++){for(i=o=e.encrypt(g.concat(t,[f])),l=1;n>l;l++)for(o=e.encrypt(o),c=0;c<o.length;c++)i[c]^=o[c];for(l=0;(a||1)>d&&l<i.length;l++)p.setInt32(d,i[l]),d+=4}return u.slice(0,s/8)},hmacSha1:class{constructor(e){const t=this,n=t._hash=T,s=[[],[]];t._baseHash=[new n,new n];const r=t._baseHash[0].blockSize/32;e.length>r&&(e=(new n).update(e).finalize());for(let t=0;r>t;t++)s[0][t]=909522486^e[t],s[1][t]=1549556828^e[t];t._baseHash[0].update(s[0]),t._baseHash[1].update(s[1]),t._resultHash=new n(t._baseHash[0])}reset(){const e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){this._updated=!0,this._resultHash.update(e)}digest(){const e=this,t=e._resultHash.finalize(),n=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),n}encrypt(e){if(this._updated)throw new r("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof p!=_&&typeof p.getRandomValues==S,H="Invalid password",P="Invalid signature",B="zipjs-abort-check-password";function K(e){return R?p.getRandomValues(e):A.getRandomValues(e)}const V=16,E={name:"PBKDF2"},U=t.assign({hash:{name:"HMAC"}},E),W=t.assign({iterations:1e3,hash:{name:"SHA-1"}},E),M=["deriveBits"],N=[8,12,16],O=[16,24,32],F=10,L=[0,0,0,0],j=typeof p!=_,G=j&&p.subtle,X=j&&typeof G!=_,J=I.bytes,Q=class{constructor(e){const t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();const n=t._tables[0][4],s=t._tables[1],a=e.length;let i,o,l,c=1;if(4!==a&&6!==a&&8!==a)throw new r("invalid aes key size");for(t._key=[o=e.slice(0),l=[]],i=a;4*a+28>i;i++){let e=o[i-1];(i%a==0||8===a&&i%a==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],i%a==0&&(e=e<<8^e>>>24^c<<24,c=c<<1^283*(c>>7))),o[i]=o[i-a]^e}for(let e=0;i;e++,i--){const t=o[3&e?i:i-4];l[e]=4>=i||4>e?t:s[0][n[t>>>24]]^s[1][n[t>>16&255]]^s[2][n[t>>8&255]]^s[3][n[255&t]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){const e=this._tables[0],t=this._tables[1],n=e[4],s=t[4],r=[],a=[];let i,o,l,c;for(let e=0;256>e;e++)a[(r[e]=e<<1^283*(e>>7))^e]=e;for(let h=i=0;!n[h];h^=o||1,i=a[i]||1){let a=i^i<<1^i<<2^i<<3^i<<4;a=a>>8^255&a^99,n[h]=a,s[a]=h,c=r[l=r[o=r[h]]];let f=16843009*c^65537*l^257*o^16843008*h,u=257*r[a]^16843008*a;for(let n=0;4>n;n++)e[n][h]=u=u<<24^u>>>8,t[n][a]=f=f<<24^f>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}_crypt(e,t){if(4!==e.length)throw new r("invalid aes block size");const n=this._key[t],s=n.length/4-2,a=[0,0,0,0],i=this._tables[t],o=i[0],l=i[1],c=i[2],h=i[3],f=i[4];let u,p,d,g=e[0]^n[0],w=e[t?3:1]^n[1],y=e[2]^n[2],v=e[t?1:3]^n[3],b=4;for(let e=0;s>e;e++)u=o[g>>>24]^l[w>>16&255]^c[y>>8&255]^h[255&v]^n[b],p=o[w>>>24]^l[y>>16&255]^c[v>>8&255]^h[255&g]^n[b+1],d=o[y>>>24]^l[v>>16&255]^c[g>>8&255]^h[255&w]^n[b+2],v=o[v>>>24]^l[g>>16&255]^c[w>>8&255]^h[255&y]^n[b+3],b+=4,g=u,w=p,y=d;for(let e=0;4>e;e++)a[t?3&-e:e]=f[g>>>24]<<24^f[w>>16&255]<<16^f[y>>8&255]<<8^f[255&v]^n[b++],u=g,g=w,w=y,y=v,v=u;return a}},Y=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,s=255&e;255===t?(t=0,255===n?(n=0,255===s?s=0:++s):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=s}return e}incCounter(e){0===(e[0]=this.incWord(e[0]))&&(e[1]=this.incWord(e[1]))}calculate(e,t,n){let s;if(!(s=t.length))return[];const r=x.bitLength(t);for(let r=0;s>r;r+=4){this.incCounter(n);const s=e.encrypt(n);t[r]^=s[0],t[r+1]^=s[1],t[r+2]^=s[2],t[r+3]^=s[3]}return x.clamp(t,r)}},Z=q.hmacSha1;let $=j&&X&&typeof G.importKey==S,ee=j&&X&&typeof G.deriveBits==S;class te extends g{constructor({password:e,rawPassword:n,signed:s,encryptionStrength:i,checkPasswordOnly:o}){super({start(){t.assign(this,{ready:new f((e=>this.resolveReady=e)),password:ae(e,n),signed:s,strength:i-1,pending:new a})},async transform(e,t){const n=this,{password:s,strength:i,resolveReady:l,ready:c}=n;s?(await(async(e,t,n,s)=>{const a=await re(e,t,n,oe(s,0,N[t])),i=oe(s,N[t]);if(a[0]!=i[0]||a[1]!=i[1])throw new r(H)})(n,i,s,oe(e,0,N[i]+2)),e=oe(e,N[i]+2),o?t.error(new r(B)):l()):await c;const h=new a(e.length-F-(e.length-F)%V);t.enqueue(se(n,e,h,0,F,!0))},async flush(e){const{signed:t,ctr:n,hmac:s,pending:i,ready:o}=this;if(s&&n){await o;const l=oe(i,0,i.length-F),c=oe(i,i.length-F);let h=new a;if(l.length){const e=ce(J,l);s.update(e);const t=n.update(e);h=le(J,t)}if(t){const e=oe(le(J,s.digest()),0,F);for(let t=0;F>t;t++)if(e[t]!=c[t])throw new r(P)}e.enqueue(h)}}})}}class ne extends g{constructor({password:e,rawPassword:n,encryptionStrength:s}){let r;super({start(){t.assign(this,{ready:new f((e=>this.resolveReady=e)),password:ae(e,n),strength:s-1,pending:new a})},async transform(e,t){const n=this,{password:s,strength:r,resolveReady:i,ready:o}=n;let l=new a;s?(l=await(async(e,t,n)=>{const s=K(new a(N[t]));return ie(s,await re(e,t,n,s))})(n,r,s),i()):await o;const c=new a(l.length+e.length-e.length%V);c.set(l,0),t.enqueue(se(n,e,c,l.length,0))},async flush(e){const{ctr:t,hmac:n,pending:s,ready:i}=this;if(n&&t){await i;let o=new a;if(s.length){const e=t.update(ce(J,s));n.update(e),o=le(J,e)}r.signature=le(J,n.digest()).slice(0,F),e.enqueue(ie(o,r.signature))}}}),r=this}}function se(e,t,n,s,r,i){const{ctr:o,hmac:l,pending:c}=e,h=t.length-r;let f;for(c.length&&(t=ie(c,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new a(t)).set(n,0)}return e})(n,h-h%V)),f=0;h-V>=f;f+=V){const e=ce(J,oe(t,f,f+V));i&&l.update(e);const r=o.update(e);i||l.update(r),n.set(le(J,r),f+s)}return e.pending=oe(t,f),n}async function re(n,s,r,i){n.password=null;const o=await(async(e,t,n,s,r)=>{if(!$)return q.importKey(t);try{return await G.importKey("raw",t,n,!1,r)}catch(e){return $=!1,q.importKey(t)}})(0,r,U,0,M),l=await(async(e,t,n)=>{if(!ee)return q.pbkdf2(t,e.salt,W.iterations,n);try{return await G.deriveBits(e,t,n)}catch(s){return ee=!1,q.pbkdf2(t,e.salt,W.iterations,n)}})(t.assign({salt:i},W),o,8*(2*O[s]+2)),c=new a(l),h=ce(J,oe(c,0,O[s])),f=ce(J,oe(c,O[s],2*O[s])),u=oe(c,2*O[s]);return t.assign(n,{keys:{key:h,authentication:f,passwordVerification:u},ctr:new Y(new Q(h),e.from(L)),hmac:new Z(f)}),u}function ae(e,t){return t===m?(e=>{if(typeof u==_){const t=new a((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new u).encode(e)})(e):t}function ie(e,t){let n=e;return e.length+t.length&&(n=new a(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function oe(e,t,n){return e.subarray(t,n)}function le(e,t){return e.fromBits(t)}function ce(e,t){return e.toBits(t)}class he extends g{constructor({password:e,passwordVerification:n,checkPasswordOnly:s}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=ue(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new r(H);e=e.subarray(12)}s?t.error(new r(B)):t.enqueue(ue(n,e))}})}}class fe extends g{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let s,r;if(n.password){n.password=null;const t=K(new a(12));t[11]=n.passwordVerification,s=new a(e.length+t.length),s.set(pe(n,t),0),r=12}else s=new a(e.length),r=0;s.set(pe(n,e),r),t.enqueue(s)}})}}function ue(e,t){const n=new a(t.length);for(let s=0;s<t.length;s++)n[s]=we(e)^t[s],ge(e,n[s]);return n}function pe(e,t){const n=new a(t.length);for(let s=0;s<t.length;s++)n[s]=we(e)^t[s],ge(e,t[s]);return n}function de(e,n){const s=[305419896,591751049,878082192];t.assign(e,{keys:s,crcKey0:new D(s[0]),crcKey2:new D(s[2])});for(let t=0;t<n.length;t++)ge(e,n.charCodeAt(t))}function ge(e,t){let[n,r,a]=e.keys;e.crcKey0.append([t]),n=~e.crcKey0.get(),r=ve(s.imul(ve(r+ye(n)),134775813)+1),e.crcKey2.append([r>>>24]),a=~e.crcKey2.get(),e.keys=[n,r,a]}function we(e){const t=2|e.keys[2];return ye(s.imul(t,1^t)>>>8)}function ye(e){return 255&e}function ve(e){return 4294967295&e}const be="deflate-raw";class me extends g{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:s}){super({});const{compressed:r,encrypted:a,useCompressionStream:i,zipCrypto:o,signed:l,level:c}=e,f=this;let u,p,d=Se(super.readable);a&&!o||!l||(u=new C,d=De(d,u)),r&&(d=ze(d,i,{level:c,chunkSize:t},s,n)),a&&(o?d=De(d,new fe(e)):(p=new ne(e),d=De(d,p))),ke(f,d,(()=>{let e;a&&!o&&(e=p.signature),a&&!o||!l||(e=new h(u.value.buffer).getUint32(0)),f.signature=e}))}}class _e extends g{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:s}){super({});const{zipCrypto:a,encrypted:i,signed:o,signature:l,compressed:c,useCompressionStream:f}=e;let u,p,d=Se(super.readable);i&&(a?d=De(d,new he(e)):(p=new te(e),d=De(d,p))),c&&(d=ze(d,f,{chunkSize:t},s,n)),i&&!a||!o||(u=new C,d=De(d,u)),ke(this,d,(()=>{if((!i||a)&&o){const e=new h(u.value.buffer);if(l!=e.getUint32(0,!1))throw new r(P)}}))}}function Se(e){return De(e,new g({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ke(e,n,s){n=De(n,new g({flush:s})),t.defineProperty(e,"readable",{get:()=>n})}function ze(e,t,n,s,r){try{e=De(e,new(t&&s?s:r)(be,n))}catch(s){if(!t)return e;try{e=De(e,new r(be,n))}catch(t){return e}}return e}function De(e,t){return e.pipeThrough(t)}const Ce="data",xe="close";class Ie extends g{constructor(e,n){super({});const s=this,{codecType:r}=e;let a;r.startsWith("deflate")?a=me:r.startsWith("inflate")&&(a=_e);let i=0,o=0;const l=new a(e,n),c=super.readable,h=new g({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){t.assign(s,{inputSize:o})}}),f=new g({transform(e,t){e&&e.length&&(i+=e.length,t.enqueue(e))},flush(){const{signature:e}=l;t.assign(s,{signature:e,outputSize:i,inputSize:o})}});t.defineProperty(s,"readable",{get:()=>c.pipeThrough(h).pipeThrough(l).pipeThrough(f)})}}class Te extends g{constructor(e){let t;super({transform:function n(s,r){if(t){const e=new a(t.length+s.length);e.set(t),e.set(s,t.length),s=e,t=null}s.length>e?(r.enqueue(s.slice(0,e)),n(s.slice(e),r)):t=s},flush(e){t&&t.length&&e.enqueue(t)}})}}const Ae=new c,qe=new c;let Re,He=0,Pe=!0;async function Be(e){try{const{options:t,scripts:s,config:r}=e;if(s&&s.length)try{Pe?importScripts.apply(m,s):await Ke(s)}catch(e){Pe=!1,await Ke(s)}self.initCodec&&self.initCodec(),r.CompressionStreamNative=self.CompressionStream,r.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(r.CompressionStream=new k(self.Deflate)),self.Inflate&&(r.DecompressionStream=new k(self.Inflate));const a={highWaterMark:1},i=e.readable||new w({async pull(e){const t=new f((e=>Ae.set(He,e)));Ve({type:"pull",messageId:He}),He=(He+1)%n.MAX_SAFE_INTEGER;const{value:s,done:r}=await t;e.enqueue(s),r&&e.close()}},a),o=e.writable||new y({async write(e){let t;const s=new f((e=>t=e));qe.set(He,t),Ve({type:Ce,value:e,messageId:He}),He=(He+1)%n.MAX_SAFE_INTEGER,await s}},a),l=new Ie(t,r);Re=new AbortController;const{signal:c}=Re;await i.pipeThrough(l).pipeThrough(new Te(r.chunkSize)).pipeTo(o,{signal:c,preventClose:!0,preventAbort:!0}),await o.getWriter().close();const{signature:h,inputSize:u,outputSize:p}=l;Ve({type:xe,result:{signature:h,inputSize:u,outputSize:p}})}catch(e){Ee(e)}}async function Ke(e){for(const t of e)await import(t)}function Ve(e){let{value:t}=e;if(t)if(t.length)try{t=new a(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ee(e=new r("Unknown error")){const{message:t,stack:n,code:s,name:a}=e;d({error:{message:t,stack:n,code:s,name:a}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:s,done:r}=e;try{if("start"==t&&Be(e),t==Ce){const e=Ae.get(n);Ae.delete(n),e({value:new a(s),done:r})}if("ack"==t){const e=qe.get(n);qe.delete(n),e()}t==xe&&Re.abort()}catch(e){Ee(e)}}));var Ue=a,We=i,Me=l,Ne=new Ue([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Oe=new Ue([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fe=new Ue([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Le=(e,t)=>{for(var n=new We(31),s=0;31>s;++s)n[s]=t+=1<<e[s-1];var r=new Me(n[30]);for(s=1;30>s;++s)for(var a=n[s];a<n[s+1];++a)r[a]=a-n[s]<<5|s;return{b:n,r:r}},je=Le(Ne,2),Ge=je.b,Xe=je.r;Ge[28]=258,Xe[258]=28;for(var Je=Le(Oe,0),Qe=Je.b,Ye=Je.r,Ze=new We(32768),$e=0;32768>$e;++$e){var et=(43690&$e)>>1|(21845&$e)<<1;et=(61680&(et=(52428&et)>>2|(13107&et)<<2))>>4|(3855&et)<<4,Ze[$e]=((65280&et)>>8|(255&et)<<8)>>1}var tt=(e,t,n)=>{for(var s=e.length,r=0,a=new We(t);s>r;++r)e[r]&&++a[e[r]-1];var i,o=new We(t);for(r=1;t>r;++r)o[r]=o[r-1]+a[r-1]<<1;if(n){i=new We(1<<t);var l=15-t;for(r=0;s>r;++r)if(e[r])for(var c=r<<4|e[r],h=t-e[r],f=o[e[r]-1]++<<h,u=f|(1<<h)-1;u>=f;++f)i[Ze[f]>>l]=c}else for(i=new We(s),r=0;s>r;++r)e[r]&&(i[r]=Ze[o[e[r]-1]++]>>15-e[r]);return i},nt=new Ue(288);for($e=0;144>$e;++$e)nt[$e]=8;for($e=144;256>$e;++$e)nt[$e]=9;for($e=256;280>$e;++$e)nt[$e]=7;for($e=280;288>$e;++$e)nt[$e]=8;var st=new Ue(32);for($e=0;32>$e;++$e)st[$e]=5;var rt=tt(nt,9,0),at=tt(nt,9,1),it=tt(st,5,0),ot=tt(st,5,1),lt=e=>{for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},ct=(e,t,n)=>{var s=t/8|0;return(e[s]|e[s+1]<<8)>>(7&t)&n},ht=(e,t)=>{var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},ft=e=>(e+7)/8|0,ut=(e,t,n)=>((null==t||0>t)&&(t=0),(null==n||n>e.length)&&(n=e.length),new Ue(e.subarray(t,n))),pt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],dt=(e,t,n)=>{var s=new r(t||pt[e]);if(s.code=e,r.captureStackTrace&&r.captureStackTrace(s,dt),!n)throw s;return s},gt=(e,t,n)=>{n<<=7&t;var s=t/8|0;e[s]|=n,e[s+1]|=n>>8},wt=(e,t,n)=>{n<<=7&t;var s=t/8|0;e[s]|=n,e[s+1]|=n>>8,e[s+2]|=n>>16},yt=(e,t)=>{for(var n=[],s=0;s<e.length;++s)e[s]&&n.push({s:s,f:e[s]});var r=n.length,a=n.slice();if(!r)return{t:zt,l:0};if(1==r){var i=new Ue(n[0].s+1);return i[n[0].s]=1,{t:i,l:1}}n.sort(((e,t)=>e.f-t.f)),n.push({s:-1,f:25001});var o=n[0],l=n[1],c=0,h=1,f=2;for(n[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=r-1;)o=n[n[c].f<n[f].f?c++:f++],l=n[c!=h&&n[c].f<n[f].f?c++:f++],n[h++]={s:-1,f:o.f+l.f,l:o,r:l};var u=a[0].s;for(s=1;r>s;++s)a[s].s>u&&(u=a[s].s);var p=new We(u+1),d=vt(n[h-1],p,0);if(d>t){s=0;var g=0,w=d-t,y=1<<w;for(a.sort(((e,t)=>p[t.s]-p[e.s]||e.f-t.f));r>s;++s){var v=a[s].s;if(p[v]<=t)break;g+=y-(1<<d-p[v]),p[v]=t}for(g>>=w;g>0;){var b=a[s].s;p[b]<t?g-=1<<t-p[b]++-1:++s}for(;s>=0&&g;--s){var m=a[s].s;p[m]==t&&(--p[m],++g)}d=t}return{t:new Ue(p),l:d}},vt=(e,t,n)=>-1==e.s?s.max(vt(e.l,t,n+1),vt(e.r,t,n+1)):t[e.s]=n,bt=e=>{for(var t=e.length;t&&!e[--t];);for(var n=new We(++t),s=0,r=e[0],a=1,i=e=>{n[s++]=e},o=1;t>=o;++o)if(e[o]==r&&o!=t)++a;else{if(!r&&a>2){for(;a>138;a-=138)i(32754);a>2&&(i(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(i(r),--a;a>6;a-=6)i(8304);a>2&&(i(a-3<<5|8208),a=0)}for(;a--;)i(r);a=1,r=e[o]}return{c:n.subarray(0,s),n:t}},mt=(e,t)=>{for(var n=0,s=0;s<t.length;++s)n+=e[s]*t[s];return n},_t=(e,t,n)=>{var s=n.length,r=ft(t+2);e[r]=255&s,e[r+1]=s>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1];for(var a=0;s>a;++a)e[r+a+4]=n[a];return 8*(r+4+s)},St=(e,t,n,s,r,a,i,o,l,c,h)=>{gt(t,h++,n),++r[256];for(var f=yt(r,15),u=f.t,p=f.l,d=yt(a,15),g=d.t,w=d.l,y=bt(u),v=y.c,b=y.n,m=bt(g),_=m.c,S=m.n,k=new We(19),z=0;z<v.length;++z)++k[31&v[z]];for(z=0;z<_.length;++z)++k[31&_[z]];for(var D=yt(k,7),C=D.t,x=D.l,I=19;I>4&&!C[Fe[I-1]];--I);var T,A,q,R,H=c+5<<3,P=mt(r,nt)+mt(a,st)+i,B=mt(r,u)+mt(a,g)+i+14+3*I+mt(k,C)+2*k[16]+3*k[17]+7*k[18];if(l>=0&&P>=H&&B>=H)return _t(t,h,e.subarray(l,l+c));if(gt(t,h,1+(P>B)),h+=2,P>B){T=tt(u,p,0),A=u,q=tt(g,w,0),R=g;var K=tt(C,x,0);for(gt(t,h,b-257),gt(t,h+5,S-1),gt(t,h+10,I-4),h+=14,z=0;I>z;++z)gt(t,h+3*z,C[Fe[z]]);h+=3*I;for(var V=[v,_],E=0;2>E;++E){var U=V[E];for(z=0;z<U.length;++z){var W=31&U[z];gt(t,h,K[W]),h+=C[W],W>15&&(gt(t,h,U[z]>>5&127),h+=U[z]>>12)}}}else T=rt,A=nt,q=it,R=st;for(z=0;o>z;++z){var M=s[z];if(M>255){wt(t,h,T[257+(W=M>>18&31)]),h+=A[W+257],W>7&&(gt(t,h,M>>23&31),h+=Ne[W]);var N=31&M;wt(t,h,q[N]),h+=R[N],N>3&&(wt(t,h,M>>5&8191),h+=Oe[N])}else wt(t,h,T[M]),h+=A[M]}return wt(t,h,T[256]),h+A[256]},kt=new Me([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),zt=new Ue(0),Dt=function(){function e(e,t){if("function"==typeof e&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new Ue(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return e.prototype.p=function(e,t){this.ondata(((e,t,n,r,a)=>{if(!a&&(a={l:1},t.dictionary)){var i=t.dictionary.subarray(-32768),o=new Ue(i.length+e.length);o.set(i),o.set(e,i.length),e=o,a.w=i.length}return((e,t,n,r,a,i)=>{var o=i.z||e.length,l=new Ue(0+o+5*(1+s.ceil(o/7e3))+0),c=l.subarray(0,l.length-0),h=i.l,f=7&(i.r||0);if(t){f&&(c[0]=i.r>>3);for(var u=kt[t-1],p=u>>13,d=8191&u,g=(1<<n)-1,w=i.p||new We(32768),y=i.h||new We(g+1),v=s.ceil(n/3),b=2*v,m=t=>(e[t]^e[t+1]<<v^e[t+2]<<b)&g,_=new Me(25e3),S=new We(288),k=new We(32),z=0,D=0,C=i.i||0,x=0,I=i.w||0,T=0;o>C+2;++C){var A=m(C),q=32767&C,R=y[A];if(w[q]=R,y[A]=q,C>=I){var H=o-C;if((z>7e3||x>24576)&&(H>423||!h)){f=St(e,c,0,_,S,k,D,x,T,C-T,f),x=z=D=0,T=C;for(var P=0;286>P;++P)S[P]=0;for(P=0;30>P;++P)k[P]=0}var B=2,K=0,V=d,E=q-R&32767;if(H>2&&A==m(C-E))for(var U=s.min(p,H)-1,W=s.min(32767,C),M=s.min(258,H);W>=E&&--V&&q!=R;){if(e[C+B]==e[C+B-E]){for(var N=0;M>N&&e[C+N]==e[C+N-E];++N);if(N>B){if(B=N,K=E,N>U)break;var O=s.min(E,N-2),F=0;for(P=0;O>P;++P){var L=C-E+P&32767,j=L-w[L]&32767;j>F&&(F=j,R=L)}}}E+=(q=R)-(R=w[q])&32767}if(K){_[x++]=268435456|Xe[B]<<18|Ye[K];var G=31&Xe[B],X=31&Ye[K];D+=Ne[G]+Oe[X],++S[257+G],++k[X],I=C+B,++z}else _[x++]=e[C],++S[e[C]]}}for(C=s.max(C,I);o>C;++C)_[x++]=e[C],++S[e[C]];f=St(e,c,h,_,S,k,D,x,T,C-T,f),h||(i.r=7&f|c[f/8|0]<<3,f-=7,i.h=y,i.p=w,i.i=C,i.w=I)}else{for(C=i.w||0;o+h>C;C+=65535){var J=C+65535;o>J||(c[f/8|0]=h,J=o),f=_t(c,f+1,e.subarray(C,J))}i.i=o}return ut(l,0,0+ft(f)+0)})(e,null==t.level?6:t.level,null==t.mem?a.l?s.ceil(1.5*s.max(8,s.min(13,s.log(e.length)))):20:12+t.mem,0,0,a)})(e,this.o,0,0,this.s),t)},e.prototype.push=function(e,t){this.ondata||dt(5),this.s.l&&dt(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var s=new Ue(-32768&n);s.set(this.b.subarray(0,this.s.z)),this.b=s}var r=this.b.length-this.s.z;this.b.set(e.subarray(0,r),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(r),32768),this.s.z=e.length-r+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=1&t,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},e.prototype.flush=function(){this.ondata||dt(5),this.s.l&&dt(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},e}(),Ct=function(){function e(e,t){"function"==typeof e&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new Ue(32768),this.p=new Ue(0),n&&this.o.set(n)}return e.prototype.e=function(e){if(this.ondata||dt(5),this.d&&dt(4),this.p.length){if(e.length){var t=new Ue(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}}else this.p=e},e.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=((e,t,n)=>{var r=e.length;if(!r||t.f&&!t.l)return n||new Ue(0);var a=!n,i=a||2!=t.i,o=t.i;a&&(n=new Ue(3*r));var l=e=>{var t=n.length;if(e>t){var r=new Ue(s.max(2*t,e));r.set(n),n=r}},c=t.f||0,h=t.p||0,f=t.b||0,u=t.l,p=t.d,d=t.m,g=t.n,w=8*r;do{if(!u){c=ct(e,h,1);var y=ct(e,h+1,3);if(h+=3,!y){var v=e[(T=ft(h)+4)-4]|e[T-3]<<8,b=T+v;if(b>r){o&&dt(0);break}i&&l(f+v),n.set(e.subarray(T,b),f),t.b=f+=v,t.p=h=8*b,t.f=c;continue}if(1==y)u=at,p=ot,d=9,g=5;else if(2==y){var m=ct(e,h,31)+257,_=ct(e,h+10,15)+4,S=m+ct(e,h+5,31)+1;h+=14;for(var k=new Ue(S),z=new Ue(19),D=0;_>D;++D)z[Fe[D]]=ct(e,h+3*D,7);h+=3*_;var C=lt(z),x=(1<<C)-1,I=tt(z,C,1);for(D=0;S>D;){var T,A=I[ct(e,h,x)];if(h+=15&A,16>(T=A>>4))k[D++]=T;else{var q=0,R=0;for(16==T?(R=3+ct(e,h,3),h+=2,q=k[D-1]):17==T?(R=3+ct(e,h,7),h+=3):18==T&&(R=11+ct(e,h,127),h+=7);R--;)k[D++]=q}}var H=k.subarray(0,m),P=k.subarray(m);d=lt(H),g=lt(P),u=tt(H,d,1),p=tt(P,g,1)}else dt(1);if(h>w){o&&dt(0);break}}i&&l(f+131072);for(var B=(1<<d)-1,K=(1<<g)-1,V=h;;V=h){var E=(q=u[ht(e,h)&B])>>4;if((h+=15&q)>w){o&&dt(0);break}if(q||dt(2),256>E)n[f++]=E;else{if(256==E){V=h,u=null;break}var U=E-254;if(E>264){var W=Ne[D=E-257];U=ct(e,h,(1<<W)-1)+Ge[D],h+=W}var M=p[ht(e,h)&K],N=M>>4;if(M||dt(3),h+=15&M,P=Qe[N],N>3&&(W=Oe[N],P+=ht(e,h)&(1<<W)-1,h+=W),h>w){o&&dt(0);break}i&&l(f+131072);var O=f+U;if(P>f){var F=0-P,L=s.min(P,O);for(0>F+f&&dt(3);L>f;++f)n[f]=(void 0)[F+f]}for(;O>f;++f)n[f]=n[f-P]}}t.l=u,t.p=V,t.b=f,t.f=c,u&&(c=1,t.m=d,t.d=p,t.n=g)}while(!c);return f!=n.length&&a?ut(n,0,f):n.subarray(0,f)})(this.p,this.s,this.o);this.ondata(ut(n,t,this.s.b),this.d),this.o=ut(n,this.s.b-32768),this.s.b=this.o.length,this.p=ut(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(e,t){this.e(e),this.c(t)},e}(),xt="undefined"!=typeof TextDecoder&&new TextDecoder;try{xt.decode(zt,{stream:!0})}catch(e){}function It(e,n,s){return class{constructor(r){const i=this;var o,l;o=r,l="level",(typeof t.hasOwn===S?t.hasOwn(o,l):o.hasOwnProperty(l))&&r.level===m&&delete r.level,i.codec=new e(t.assign({},n,r)),s(i.codec,(e=>{if(i.pendingData){const t=i.pendingData;i.pendingData=new a(t.length+e.length);const{pendingData:n}=i;n.set(t,0),n.set(e,t.length)}else i.pendingData=new a(e)}))}append(e){return this.codec.push(e),r(this)}flush(){return this.codec.push(new a,!0),r(this)}};function r(e){if(e.pendingData){const t=e.pendingData;return e.pendingData=null,t}return new a}}const{Deflate:Tt,Inflate:At}=((e,t={},n)=>({Deflate:It(e.Deflate,t.deflate,n),Inflate:It(e.Inflate,t.inflate,n)}))({Deflate:Dt,Inflate:Ct},m,((e,t)=>e.ondata=t));self.initCodec=()=>{self.Deflate=Tt,self.Inflate=At};
`],{type:"text/javascript"}));e({workerScripts:{inflate:[t],deflate:[t]}})}function Fb(){return"application/octet-stream"}function Bb(e,t={},a){return{Deflate:Cd(e.Deflate,t.deflate,a),Inflate:Cd(e.Inflate,t.inflate,a)}}function Ub(e,t){return typeof O.hasOwn===Na?O.hasOwn(e,t):e.hasOwnProperty(t)}function Cd(e,t,a){return class{constructor(n){let i=this,r=s=>{if(i.pendingData){let l=i.pendingData;i.pendingData=new M(l.length+s.length);let{pendingData:c}=i;c.set(l,0),c.set(s,l.length)}else i.pendingData=new M(s)};Ub(n,"level")&&n.level===te&&delete n.level,i.codec=new e(O.assign({},t,n)),a(i.codec,r)}append(n){return this.codec.push(n),o(this)}flush(){return this.codec.push(new M,!0),o(this)}};function o(n){if(n.pendingData){let i=n.pendingData;return n.pendingData=null,i}else return new M}}var sm=[];for(let e=0;e<256;e++){let t=e;for(let a=0;a<8;a++)t&1?t=t>>>1^3988292384:t=t>>>1;sm[e]=t}var La=class{constructor(t){this.crc=t||-1}append(t){let a=this.crc|0;for(let o=0,n=t.length|0;o<n;o++)a=a>>>8^sm[(a^t[o])&255];this.crc=a}get(){return~this.crc}},qn=class extends ge{constructor(){let t,a=new La;super({transform(o,n){a.append(o),n.enqueue(o)},flush(){let o=new M(4);new ma(o.buffer).setUint32(0,a.get()),t.value=o}}),t=this}};function Dn(e){if(typeof yd==Kt){e=unescape(encodeURIComponent(e));let t=new M(e.length);for(let a=0;a<t.length;a++)t[a]=e.charCodeAt(a);return t}else return new yd().encode(e)}var Me={concat(e,t){if(e.length===0||t.length===0)return e.concat(t);let a=e[e.length-1],o=Me.getPartial(a);return o===32?e.concat(t):Me._shiftRight(t,o,a|0,e.slice(0,e.length-1))},bitLength(e){let t=e.length;if(t===0)return 0;let a=e[t-1];return(t-1)*32+Me.getPartial(a)},clamp(e,t){if(e.length*32<t)return e;e=e.slice(0,le.ceil(t/32));let a=e.length;return t=t&31,a>0&&t&&(e[a-1]=Me.partial(t,e[a-1]&2147483648>>t-1,1)),e},partial(e,t,a){return e===32?t:(a?t|0:t<<32-e)+e*1099511627776},getPartial(e){return le.round(e/1099511627776)||32},_shiftRight(e,t,a,o){for(o===void 0&&(o=[]);t>=32;t-=32)o.push(a),a=0;if(t===0)return o.concat(e);for(let r=0;r<e.length;r++)o.push(a|e[r]>>>t),a=e[r]<<32-t;let n=e.length?e[e.length-1]:0,i=Me.getPartial(n);return o.push(Me.partial(t+i&31,t+i>32?a:o.pop(),1)),o}},Gn={bytes:{fromBits(e){let a=Me.bitLength(e)/8,o=new M(a),n;for(let i=0;i<a;i++)(i&3)===0&&(n=e[i/4]),o[i]=n>>>24,n<<=8;return o},toBits(e){let t=[],a,o=0;for(a=0;a<e.length;a++)o=o<<8|e[a],(a&3)===3&&(t.push(o),o=0);return a&3&&t.push(Me.partial(8*(a&3),o)),t}}},lm={};lm.sha1=class{constructor(e){let t=this;t.blockSize=512,t._init=[1732584193,4023233417,2562383102,271733878,3285377520],t._key=[1518500249,1859775393,2400959708,3395469782],e?(t._h=e._h.slice(0),t._buffer=e._buffer.slice(0),t._length=e._length):t.reset()}reset(){let e=this;return e._h=e._init.slice(0),e._buffer=[],e._length=0,e}update(e){let t=this;typeof e=="string"&&(e=Gn.utf8String.toBits(e));let a=t._buffer=Me.concat(t._buffer,e),o=t._length,n=t._length=o+Me.bitLength(e);if(n>9007199254740991)throw new q("Cannot hash more than 2^53 - 1 bits");let i=new hs(a),r=0;for(let s=t.blockSize+o-(t.blockSize+o&t.blockSize-1);s<=n;s+=t.blockSize)t._block(i.subarray(16*r,16*(r+1))),r+=1;return a.splice(0,16*r),t}finalize(){let e=this,t=e._buffer,a=e._h;t=Me.concat(t,[Me.partial(1,1)]);for(let o=t.length+2;o&15;o++)t.push(0);for(t.push(le.floor(e._length/4294967296)),t.push(e._length|0);t.length;)e._block(t.splice(0,16));return e.reset(),a}_f(e,t,a,o){if(e<=19)return t&a|~t&o;if(e<=39)return t^a^o;if(e<=59)return t&a|t&o|a&o;if(e<=79)return t^a^o}_S(e,t){return t<<e|t>>>32-e}_block(e){let t=this,a=t._h,o=Wt(80);for(let c=0;c<16;c++)o[c]=e[c];let n=a[0],i=a[1],r=a[2],s=a[3],l=a[4];for(let c=0;c<=79;c++){c>=16&&(o[c]=t._S(1,o[c-3]^o[c-8]^o[c-14]^o[c-16]));let d=t._S(5,n)+t._f(c,i,r,s)+l+o[c]+t._key[le.floor(c/20)]|0;l=s,s=r,r=t._S(30,i),i=n,n=d}a[0]=a[0]+n|0,a[1]=a[1]+i|0,a[2]=a[2]+r|0,a[3]=a[3]+s|0,a[4]=a[4]+l|0}};var cm={};cm.aes=class{constructor(e){let t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();let a=t._tables[0][4],o=t._tables[1],n=e.length,i,r,s,l=1;if(n!==4&&n!==6&&n!==8)throw new q("invalid aes key size");for(t._key=[r=e.slice(0),s=[]],i=n;i<4*n+28;i++){let c=r[i-1];(i%n===0||n===8&&i%n===4)&&(c=a[c>>>24]<<24^a[c>>16&255]<<16^a[c>>8&255]<<8^a[c&255],i%n===0&&(c=c<<8^c>>>24^l<<24,l=l<<1^(l>>7)*283)),r[i]=r[i-n]^c}for(let c=0;i;c++,i--){let d=r[c&3?i:i-4];i<=4||c<4?s[c]=d:s[c]=o[0][a[d>>>24]]^o[1][a[d>>16&255]]^o[2][a[d>>8&255]]^o[3][a[d&255]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){let e=this._tables[0],t=this._tables[1],a=e[4],o=t[4],n=[],i=[],r,s,l,c;for(let d=0;d<256;d++)i[(n[d]=d<<1^(d>>7)*283)^d]=d;for(let d=r=0;!a[d];d^=s||1,r=i[r]||1){let m=r^r<<1^r<<2^r<<3^r<<4;m=m>>8^m&255^99,a[d]=m,o[m]=d,c=n[l=n[s=n[d]]];let h=c*16843009^l*65537^s*257^d*16843008,u=n[m]*257^m*16843008;for(let p=0;p<4;p++)e[p][d]=u=u<<24^u>>>8,t[p][m]=h=h<<24^h>>>8}for(let d=0;d<5;d++)e[d]=e[d].slice(0),t[d]=t[d].slice(0)}_crypt(e,t){if(e.length!==4)throw new q("invalid aes block size");let a=this._key[t],o=a.length/4-2,n=[0,0,0,0],i=this._tables[t],r=i[0],s=i[1],l=i[2],c=i[3],d=i[4],m=e[0]^a[0],h=e[t?3:1]^a[1],u=e[2]^a[2],p=e[t?1:3]^a[3],g=4,b,f,S;for(let k=0;k<o;k++)b=r[m>>>24]^s[h>>16&255]^l[u>>8&255]^c[p&255]^a[g],f=r[h>>>24]^s[u>>16&255]^l[p>>8&255]^c[m&255]^a[g+1],S=r[u>>>24]^s[p>>16&255]^l[m>>8&255]^c[h&255]^a[g+2],p=r[p>>>24]^s[m>>16&255]^l[h>>8&255]^c[u&255]^a[g+3],g+=4,m=b,h=f,u=S;for(let k=0;k<4;k++)n[t?3&-k:k]=d[m>>>24]<<24^d[h>>16&255]<<16^d[u>>8&255]<<8^d[p&255]^a[g++],b=m,m=h,h=u,u=p,p=b;return n}};var Hb={getRandomValues(e){let t=new hs(e.buffer),a=o=>{let n=987654321,i=4294967295;return function(){return n=36969*(n&65535)+(n>>16)&i,o=18e3*(o&65535)+(o>>16)&i,(((n<<16)+o&i)/4294967296+.5)*(le.random()>.5?1:-1)}};for(let o=0,n;o<e.length;o+=4){let i=a((n||le.random())*4294967296);n=i()*987654071,t[o/4]=i()*4294967296|0}return e}},dm={};dm.ctrGladman=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if((e>>24&255)===255){let t=e>>16&255,a=e>>8&255,o=e&255;t===255?(t=0,a===255?(a=0,o===255?o=0:++o):++a):++t,e=0,e+=t<<16,e+=a<<8,e+=o}else e+=1<<24;return e}incCounter(e){(e[0]=this.incWord(e[0]))===0&&(e[1]=this.incWord(e[1]))}calculate(e,t,a){let o;if(!(o=t.length))return[];let n=Me.bitLength(t);for(let i=0;i<o;i+=4){this.incCounter(a);let r=e.encrypt(a);t[i]^=r[0],t[i+1]^=r[1],t[i+2]^=r[2],t[i+3]^=r[3]}return Me.clamp(t,n)}};var ca={importKey(e){return new ca.hmacSha1(Gn.bytes.toBits(e))},pbkdf2(e,t,a,o){if(a=a||1e4,o<0||a<0)throw new q("invalid params to pbkdf2");let n=(o>>5)+1<<2,i,r,s,l,c,d=new ArrayBuffer(n),m=new ma(d),h=0,u=Me;for(t=Gn.bytes.toBits(t),c=1;h<(n||1);c++){for(i=r=e.encrypt(u.concat(t,[c])),s=1;s<a;s++)for(r=e.encrypt(r),l=0;l<r.length;l++)i[l]^=r[l];for(s=0;h<(n||1)&&s<i.length;s++)m.setInt32(h,i[s]),h+=4}return d.slice(0,o/8)}};ca.hmacSha1=class{constructor(e){let t=this,a=t._hash=lm.sha1,o=[[],[]];t._baseHash=[new a,new a];let n=t._baseHash[0].blockSize/32;e.length>n&&(e=new a().update(e).finalize());for(let i=0;i<n;i++)o[0][i]=e[i]^909522486,o[1][i]=e[i]^1549556828;t._baseHash[0].update(o[0]),t._baseHash[1].update(o[1]),t._resultHash=new a(t._baseHash[0])}reset(){let e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){let t=this;t._updated=!0,t._resultHash.update(e)}digest(){let e=this,t=e._resultHash.finalize(),a=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),a}encrypt(e){if(this._updated)throw new q("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}};var qb=typeof zo!=Kt&&typeof zo.getRandomValues==Na,ws="Invalid password",bs="Invalid signature",ys="zipjs-abort-check-password";function mm(e){return qb?zo.getRandomValues(e):Hb.getRandomValues(e)}var ja=16,Gb="raw",hm={name:"PBKDF2"},Vb={name:"HMAC"},Wb="SHA-1",Kb=O.assign({hash:Vb},hm),Nr=O.assign({iterations:1e3,hash:{name:Wb}},hm),Yb=["deriveBits"],Io=[8,12,16],Co=[16,24,32],qt=10,Xb=[0,0,0,0],$n=typeof zo!=Kt,Ho=$n&&zo.subtle,um=$n&&typeof Ho!=Kt,vt=Gn.bytes,$b=cm.aes,Jb=dm.ctrGladman,Zb=ca.hmacSha1,Td=$n&&um&&typeof Ho.importKey==Na,Ld=$n&&um&&typeof Ho.deriveBits==Na,Mr=class extends ge{constructor({password:t,rawPassword:a,signed:o,encryptionStrength:n,checkPasswordOnly:i}){super({start(){O.assign(this,{ready:new De(r=>this.resolveReady=r),password:fm(t,a),signed:o,strength:n-1,pending:new M})},async transform(r,s){let l=this,{password:c,strength:d,resolveReady:m,ready:h}=l;c?(await Qb(l,d,c,ot(r,0,Io[d]+2)),r=ot(r,Io[d]+2),i?s.error(new q(ys)):m()):await h;let u=new M(r.length-qt-(r.length-qt)%ja);s.enqueue(pm(l,r,u,0,qt,!0))},async flush(r){let{signed:s,ctr:l,hmac:c,pending:d,ready:m}=this;if(c&&l){await m;let h=ot(d,0,d.length-qt),u=ot(d,d.length-qt),p=new M;if(h.length){let g=Po(vt,h);c.update(g);let b=l.update(g);p=_o(vt,b)}if(s){let g=ot(_o(vt,c.digest()),0,qt);for(let b=0;b<qt;b++)if(g[b]!=u[b])throw new q(bs)}r.enqueue(p)}}})}},Dr=class extends ge{constructor({password:t,rawPassword:a,encryptionStrength:o}){let n;super({start(){O.assign(this,{ready:new De(i=>this.resolveReady=i),password:fm(t,a),strength:o-1,pending:new M})},async transform(i,r){let s=this,{password:l,strength:c,resolveReady:d,ready:m}=s,h=new M;l?(h=await ey(s,c,l),d()):await m;let u=new M(h.length+i.length-i.length%ja);u.set(h,0),r.enqueue(pm(s,i,u,h.length,0))},async flush(i){let{ctr:r,hmac:s,pending:l,ready:c}=this;if(s&&r){await c;let d=new M;if(l.length){let m=r.update(Po(vt,l));s.update(m),d=_o(vt,m)}n.signature=_o(vt,s.digest()).slice(0,qt),i.enqueue(ks(d,n.signature))}}}),n=this}};function pm(e,t,a,o,n,i){let{ctr:r,hmac:s,pending:l}=e,c=t.length-n;l.length&&(t=ks(l,t),a=oy(a,c-c%ja));let d;for(d=0;d<=c-ja;d+=ja){let m=Po(vt,ot(t,d,d+ja));i&&s.update(m);let h=r.update(m);i||s.update(h),a.set(_o(vt,h),d+o)}return e.pending=ot(t,d),a}async function Qb(e,t,a,o){let n=await gm(e,t,a,ot(o,0,Io[t])),i=ot(o,Io[t]);if(n[0]!=i[0]||n[1]!=i[1])throw new q(ws)}async function ey(e,t,a){let o=mm(new M(Io[t])),n=await gm(e,t,a,o);return ks(o,n)}async function gm(e,t,a,o){e.password=null;let n=await ty(Gb,a,Kb,!1,Yb),i=await ay(O.assign({salt:o},Nr),n,8*(Co[t]*2+2)),r=new M(i),s=Po(vt,ot(r,0,Co[t])),l=Po(vt,ot(r,Co[t],Co[t]*2)),c=ot(r,Co[t]*2);return O.assign(e,{keys:{key:s,authentication:l,passwordVerification:c},ctr:new Jb(new $b(s),Wt.from(Xb)),hmac:new Zb(l)}),c}async function ty(e,t,a,o,n){if(Td)try{return await Ho.importKey(e,t,a,o,n)}catch{return Td=!1,ca.importKey(t)}else return ca.importKey(t)}async function ay(e,t,a){if(Ld)try{return await Ho.deriveBits(e,t,a)}catch{return Ld=!1,ca.pbkdf2(t,e.salt,Nr.iterations,a)}else return ca.pbkdf2(t,e.salt,Nr.iterations,a)}function fm(e,t){return t===te?Dn(e):t}function ks(e,t){let a=e;return e.length+t.length&&(a=new M(e.length+t.length),a.set(e,0),a.set(t,e.length)),a}function oy(e,t){if(t&&t>e.length){let a=e;e=new M(t),e.set(a,0)}return e}function ot(e,t,a){return e.subarray(t,a)}function _o(e,t){return e.fromBits(t)}function Po(e,t){return e.toBits(t)}var Ca=12,Or=class extends ge{constructor({password:t,passwordVerification:a,checkPasswordOnly:o}){super({start(){O.assign(this,{password:t,passwordVerification:a}),wm(this,t)},transform(n,i){let r=this;if(r.password){let s=Rd(r,n.subarray(0,Ca));if(r.password=null,s[Ca-1]!=r.passwordVerification)throw new q(ws);n=n.subarray(Ca)}o?i.error(new q(ys)):i.enqueue(Rd(r,n))}})}},Fr=class extends ge{constructor({password:t,passwordVerification:a}){super({start(){O.assign(this,{password:t,passwordVerification:a}),wm(this,t)},transform(o,n){let i=this,r,s;if(i.password){i.password=null;let l=mm(new M(Ca));l[Ca-1]=i.passwordVerification,r=new M(o.length+l.length),r.set(zd(i,l),0),s=Ca}else r=new M(o.length),s=0;r.set(zd(i,o),s),n.enqueue(r)}})}};function Rd(e,t){let a=new M(t.length);for(let o=0;o<t.length;o++)a[o]=bm(e)^t[o],vs(e,a[o]);return a}function zd(e,t){let a=new M(t.length);for(let o=0;o<t.length;o++)a[o]=bm(e)^t[o],vs(e,t[o]);return a}function wm(e,t){let a=[305419896,591751049,878082192];O.assign(e,{keys:a,crcKey0:new La(a[0]),crcKey2:new La(a[2])});for(let o=0;o<t.length;o++)vs(e,t.charCodeAt(o))}function vs(e,t){let[a,o,n]=e.keys;e.crcKey0.append([t]),a=~e.crcKey0.get(),o=Id(le.imul(Id(o+ym(a)),134775813)+1),e.crcKey2.append([o>>>24]),n=~e.crcKey2.get(),e.keys=[a,o,n]}function bm(e){let t=e.keys[2]|2;return ym(le.imul(t,t^1)>>>8)}function ym(e){return e&255}function Id(e){return e&4294967295}var _d="deflate-raw",Br=class extends ge{constructor(t,{chunkSize:a,CompressionStream:o,CompressionStreamNative:n}){super({});let{compressed:i,encrypted:r,useCompressionStream:s,zipCrypto:l,signed:c,level:d}=t,m=this,h,u,p=km(super.readable);(!r||l)&&c&&(h=new qn,p=St(p,h)),i&&(p=Sm(p,s,{level:d,chunkSize:a},n,o)),r&&(l?p=St(p,new Fr(t)):(u=new Dr(t),p=St(p,u))),vm(m,p,()=>{let g;r&&!l&&(g=u.signature),(!r||l)&&c&&(g=new ma(h.value.buffer).getUint32(0)),m.signature=g})}},Ur=class extends ge{constructor(t,{chunkSize:a,DecompressionStream:o,DecompressionStreamNative:n}){super({});let{zipCrypto:i,encrypted:r,signed:s,signature:l,compressed:c,useCompressionStream:d}=t,m,h,u=km(super.readable);r&&(i?u=St(u,new Or(t)):(h=new Mr(t),u=St(u,h))),c&&(u=Sm(u,d,{chunkSize:a},n,o)),(!r||i)&&s&&(m=new qn,u=St(u,m)),vm(this,u,()=>{if((!r||i)&&s){let p=new ma(m.value.buffer);if(l!=p.getUint32(0,!1))throw new q(bs)}})}};function km(e){return St(e,new ge({transform(t,a){t&&t.length&&a.enqueue(t)}}))}function vm(e,t,a){t=St(t,new ge({flush:a})),O.defineProperty(e,"readable",{get(){return t}})}function Sm(e,t,a,o,n){try{let i=t&&o?o:n;e=St(e,new i(_d,a))}catch{if(t)try{e=St(e,new n(_d,a))}catch{return e}else return e}return e}function St(e,t){return e.pipeThrough(t)}var ny="message",iy="start",ry="pull",Pd="data",sy="ack",Nd="close",Em="deflate",xm="inflate",Hr=class extends ge{constructor(t,a){super({});let o=this,{codecType:n}=t,i;n.startsWith(Em)?i=Br:n.startsWith(xm)&&(i=Ur);let r=0,s=0,l=new i(t,a),c=super.readable,d=new ge({transform(h,u){h&&h.length&&(s+=h.length,u.enqueue(h))},flush(){O.assign(o,{inputSize:s})}}),m=new ge({transform(h,u){h&&h.length&&(r+=h.length,u.enqueue(h))},flush(){let{signature:h}=l;O.assign(o,{signature:h,outputSize:r,inputSize:s})}});O.defineProperty(o,"readable",{get(){return c.pipeThrough(d).pipeThrough(l).pipeThrough(m)}})}},qr=class extends ge{constructor(t){let a;super({transform:o,flush(n){a&&a.length&&n.enqueue(a)}});function o(n,i){if(a){let r=new M(a.length+n.length);r.set(a),r.set(n,a.length),n=r,a=null}n.length>t?(i.enqueue(n.slice(0,t)),o(n.slice(t),i)):a=n}}},Am=typeof Nn!=Kt,Ro=class{constructor(t,{readable:a,writable:o},{options:n,config:i,streamOptions:r,useWebWorkers:s,transferStreams:l,scripts:c},d){let{signal:m}=r;return O.assign(t,{busy:!0,readable:a.pipeThrough(new qr(i.chunkSize)).pipeThrough(new Gr(a,r),{signal:m}),writable:o,options:O.assign({},n),scripts:c,transferStreams:l,terminate(){return new De(h=>{let{worker:u,busy:p}=t;u?(p?t.resolveTerminated=h:(u.terminate(),h()),t.interface=null):h()})},onTaskFinished(){let{resolveTerminated:h}=t;h&&(t.resolveTerminated=null,t.terminated=!0,t.worker.terminate(),h()),t.busy=!1,d(t)}}),(s&&Am?ly:jm)(t,i)}},Gr=class extends ge{constructor(t,{onstart:a,onprogress:o,size:n,onend:i}){let r=0;super({async start(){a&&await Er(a,n)},async transform(s,l){r+=s.length,o&&await Er(o,r,n),l.enqueue(s)},async flush(){t.size=r,i&&await Er(i,r)}})}};async function Er(e,...t){try{await e(...t)}catch{}}function jm(e,t){return{run:()=>cy(e,t)}}function ly(e,t){let{baseURL:a,chunkSize:o}=t;if(!e.interface){let n;try{n=hy(e.scripts[0],a,e)}catch{return Am=!1,jm(e,t)}O.assign(e,{worker:n,interface:{run:()=>dy(e,{chunkSize:o})}})}return e.interface}async function cy({options:e,readable:t,writable:a,onTaskFinished:o},n){try{let i=new Hr(e,n);await t.pipeThrough(i).pipeTo(a,{preventClose:!0,preventAbort:!0});let{signature:r,inputSize:s,outputSize:l}=i;return{signature:r,inputSize:s,outputSize:l}}finally{o()}}async function dy(e,t){let a,o,n=new De((h,u)=>{a=h,o=u});O.assign(e,{reader:null,writer:null,resolveResult:a,rejectResult:o,result:n});let{readable:i,options:r,scripts:s}=e,{writable:l,closed:c}=my(e.writable),d=On({type:iy,scripts:s.slice(1),options:r,config:t,readable:i,writable:l},e);d||O.assign(e,{reader:i.getReader(),writer:l.getWriter()});let m=await n;return d||await l.getWriter().close(),await c,m}function my(e){let t,a=new De(n=>t=n);return{writable:new Bo({async write(n){let i=e.getWriter();await i.ready,await i.write(n),i.releaseLock()},close(){t()},abort(n){return e.getWriter().abort(n)}}),closed:a}}var Md=!0,Dd=!0;function hy(e,t,a){let o={type:"module"},n,i;typeof e==Na&&(e=e());try{n=new ms(e,t)}catch{n=e}if(Md)try{i=new Nn(n)}catch{Md=!1,i=new Nn(n,o)}else i=new Nn(n,o);return i.addEventListener(ny,r=>uy(r,a)),i}function On(e,{worker:t,writer:a,onTaskFinished:o,transferStreams:n}){try{let{value:i,readable:r,writable:s}=e,l=[];if(i&&(i.byteLength<i.buffer.byteLength?e.value=i.buffer.slice(0,i.byteLength):e.value=i.buffer,l.push(e.value)),n&&Dd?(r&&l.push(r),s&&l.push(s)):e.readable=e.writable=null,l.length)try{return t.postMessage(e,l),!0}catch{Dd=!1,e.readable=e.writable=null,t.postMessage(e)}else t.postMessage(e)}catch(i){throw a&&a.releaseLock(),o(),i}}async function uy({data:e},t){let{type:a,value:o,messageId:n,result:i,error:r}=e,{reader:s,writer:l,resolveResult:c,rejectResult:d,onTaskFinished:m}=t;try{if(r){let{message:u,stack:p,code:g,name:b}=r,f=new q(u);O.assign(f,{stack:p,code:g,name:b}),h(f)}else{if(a==ry){let{value:u,done:p}=await s.read();On({type:Pd,value:u,done:p,messageId:n},t)}a==Pd&&(await l.ready,await l.write(new M(o)),On({type:sy,messageId:n},t)),a==Nd&&h(null,i)}}catch(u){On({type:Nd,messageId:n},t),h(u)}function h(u,p){u?d(u):c(p),l&&l.releaseLock(),m()}}var Vt=[],xr=[],Od=0;async function Cm(e,t){let{options:a,config:o}=t,{transferStreams:n,useWebWorkers:i,useCompressionStream:r,codecType:s,compressed:l,signed:c,encrypted:d}=a,{workerScripts:m,maxWorkers:h}=o;t.transferStreams=n||n===te;let u=!l&&!c&&!d&&!t.transferStreams;return t.useWebWorkers=!u&&(i||i===te&&o.useWebWorkers),t.scripts=t.useWebWorkers&&m?m[s]:[],a.useCompressionStream=r||r===te&&o.useCompressionStream,(await p()).run();async function p(){let b=Vt.find(f=>!f.busy);if(b)return Vr(b),new Ro(b,e,t,g);if(Vt.length<h){let f={indexWorker:Od};return Od++,Vt.push(f),new Ro(f,e,t,g)}else return new De(f=>xr.push({resolve:f,stream:e,workerOptions:t}))}function g(b){if(xr.length){let[{resolve:f,stream:S,workerOptions:k}]=xr.splice(0,1);f(new Ro(b,S,k,g))}else b.worker?(Vr(b),py(b,t)):Vt=Vt.filter(f=>f!=b)}}function py(e,t){let{config:a}=t,{terminateWorkerTimeout:o}=a;Fo.isFinite(o)&&o>=0&&(e.terminated?e.terminated=!1:e.terminateTimeout=setTimeout(async()=>{Vt=Vt.filter(n=>n!=e);try{await e.terminate()}catch{}},o))}function Vr(e){let{terminateTimeout:t}=e;t&&(clearTimeout(t),e.terminateTimeout=null)}async function gy(){await De.allSettled(Vt.map(e=>(Vr(e),e.terminate())))}var Tm="HTTP error ",qo="HTTP Range not supported",Lm="Writer iterator completed too soon",fy="text/plain",wy="Content-Length",by="Content-Range",yy="Accept-Ranges",ky="Range",vy="Content-Type",Sy="HEAD",Ss="GET",Rm="bytes",Ey=64*1024,Es="writable",Ra=class{constructor(){this.size=0}init(){this.initialized=!0}},Et=class extends Ra{get readable(){let t=this,{chunkSize:a=Ey}=t,o=new us({start(){this.chunkOffset=0},async pull(n){let{offset:i=0,size:r,diskNumberStart:s}=o,{chunkOffset:l}=this;n.enqueue(await Re(t,i+l,le.min(a,r-l),s)),l+a>r?n.close():this.chunkOffset+=a}});return o}},No=class extends Ra{constructor(){super();let t=this,a=new Bo({write(o){return t.writeUint8Array(o)}});O.defineProperty(t,Es,{get(){return a}})}writeUint8Array(){}},Wr=class extends Et{constructor(t){super();let a=t.length;for(;t.charAt(a-1)=="=";)a--;let o=t.indexOf(",")+1;O.assign(this,{dataURI:t,dataStart:o,size:le.floor((a-o)*.75)})}readUint8Array(t,a){let{dataStart:o,dataURI:n}=this,i=new M(a),r=le.floor(t/3)*4,s=atob(n.substring(r+o,le.ceil((t+a)/3)*4+o)),l=t-le.floor(r/4)*3;for(let c=l;c<l+a;c++)i[c-l]=s.charCodeAt(c);return i}},Kr=class extends No{constructor(t){super(),O.assign(this,{data:"data:"+(t||"")+";base64,",pending:[]})}writeUint8Array(t){let a=this,o=0,n=a.pending,i=a.pending.length;for(a.pending="",o=0;o<le.floor((i+t.length)/3)*3-i;o++)n+=fd.fromCharCode(t[o]);for(;o<t.length;o++)a.pending+=fd.fromCharCode(t[o]);n.length>2?a.data+=kd(n):a.pending=n}getData(){return this.data+kd(this.pending)}},da=class extends Et{constructor(t){super(),O.assign(this,{blob:t,size:t.size})}async readUint8Array(t,a){let o=this,n=t+a,r=await(t||n<o.size?o.blob.slice(t,n):o.blob).arrayBuffer();return r.byteLength>a&&(r=r.slice(t,n)),new M(r)}},Vn=class extends Ra{constructor(t){super();let a=this,o=new ge,n=[];t&&n.push([vy,t]),O.defineProperty(a,Es,{get(){return o.writable}}),a.blob=new ds(o.readable,{headers:n}).blob()}getData(){return this.blob}},Mo=class extends da{constructor(t){super(new Kd([t],{type:fy}))}},Yr=class extends Vn{constructor(t){super(t),O.assign(this,{encoding:t,utf8:!t||t.toLowerCase()=="utf-8"})}async getData(){let{encoding:t,utf8:a}=this,o=await super.getData();if(o.text&&a)return o.text();{let n=new FileReader;return new De((i,r)=>{O.assign(n,{onload:({target:s})=>i(s.result),onerror:()=>r(n.error)}),n.readAsText(o,t)})}}},Xr=class extends Et{constructor(t,a){super(),zm(this,t,a)}async init(){await Im(this,Jr,Fd),super.init()}readUint8Array(t,a){return _m(this,t,a,Jr,Fd)}},$r=class extends Et{constructor(t,a){super(),zm(this,t,a)}async init(){await Im(this,Zr,Bd),super.init()}readUint8Array(t,a){return _m(this,t,a,Zr,Bd)}};function zm(e,t,a){let{preventHeadRequest:o,useRangeHeader:n,forceRangeRequests:i,combineSizeEocd:r}=a;a=O.assign({},a),delete a.preventHeadRequest,delete a.useRangeHeader,delete a.forceRangeRequests,delete a.combineSizeEocd,delete a.useXHR,O.assign(e,{url:t,options:a,preventHeadRequest:o,useRangeHeader:n,forceRangeRequests:i,combineSizeEocd:r})}async function Im(e,t,a){let{url:o,preventHeadRequest:n,useRangeHeader:i,forceRangeRequests:r,combineSizeEocd:s}=e;if(xy(o)&&(i||r)&&(typeof n>"u"||n)){let l=await t(Ss,e,Pm(e,s?-at:void 0));if(!r&&l.headers.get(yy)!=Rm)throw new q(qo);{s&&(e.eocdCache=new M(await l.arrayBuffer()));let c,d=l.headers.get(by);if(d){let m=d.trim().split(/\s*\/\s*/);if(m.length){let h=m[1];h&&h!="*"&&(c=Fo(h))}}c===te?await Ud(e,t,a):e.size=c}}else await Ud(e,t,a)}async function _m(e,t,a,o,n){let{useRangeHeader:i,forceRangeRequests:r,eocdCache:s,size:l,options:c}=e;if(i||r){if(s&&t==l-at&&a==at)return s;let d=await o(Ss,e,Pm(e,t,a));if(d.status!=206)throw new q(qo);return new M(await d.arrayBuffer())}else{let{data:d}=e;return d||await n(e,c),new M(e.data.subarray(t,t+a))}}function Pm(e,t=0,a=1){return O.assign({},xs(e),{[ky]:Rm+"="+(t<0?t:t+"-"+(t+a-1))})}function xs({options:e}){let{headers:t}=e;if(t)return Symbol.iterator in t?O.fromEntries(t):t}async function Fd(e){await Nm(e,Jr)}async function Bd(e){await Nm(e,Zr)}async function Nm(e,t){let a=await t(Ss,e,xs(e));e.data=new M(await a.arrayBuffer()),e.size||(e.size=e.data.length)}async function Ud(e,t,a){if(e.preventHeadRequest)await a(e,e.options);else{let n=(await t(Sy,e,xs(e))).headers.get(wy);n?e.size=Fo(n):await a(e,e.options)}}async function Jr(e,{options:t,url:a},o){let n=await fetch(a,O.assign({},t,{method:e,headers:o}));if(n.status<400)return n;throw n.status==416?new q(qo):new q(Tm+(n.statusText||n.status))}function Zr(e,{url:t},a){return new De((o,n)=>{let i=new XMLHttpRequest;if(i.addEventListener("load",()=>{if(i.status<400){let r=[];i.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,c=>c.toUpperCase()),r.push(l)}),o({status:i.status,arrayBuffer:()=>i.response,headers:new cs(r)})}else n(i.status==416?new q(qo):new q(Tm+(i.statusText||i.status)))},!1),i.addEventListener("error",r=>n(r.detail?r.detail.error:new q("Network error")),!1),i.open(e,t),a)for(let r of O.entries(a))i.setRequestHeader(r[0],r[1]);i.responseType="arraybuffer",i.send()})}var Wn=class extends Et{constructor(t,a={}){super(),O.assign(this,{url:t,reader:a.useXHR?new $r(t,a):new Xr(t,a)})}set size(t){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(t,a){return this.reader.readUint8Array(t,a)}},Qr=class extends Wn{constructor(t,a={}){a.useRangeHeader=!0,super(t,a)}},es=class extends Et{constructor(t){super(),O.assign(this,{array:t,size:t.length})}readUint8Array(t,a){return this.array.slice(t,t+a)}},Do=class extends No{init(t=0){O.assign(this,{offset:0,array:new M(t)}),super.init()}writeUint8Array(t){let a=this;if(a.offset+t.length>a.array.length){let o=a.array;a.array=new M(o.length+t.length),a.array.set(o)}a.array.set(t,a.offset),a.offset+=t.length}getData(){return this.array}},Oo=class extends Et{constructor(t){super(),this.readers=t}async init(){let t=this,{readers:a}=t;t.lastDiskNumber=0,t.lastDiskOffset=0,await De.all(a.map(async(o,n)=>{await o.init(),n!=a.length-1&&(t.lastDiskOffset+=o.size),t.size+=o.size})),super.init()}async readUint8Array(t,a,o=0){let n=this,{readers:i}=this,r,s=o;s==-1&&(s=i.length-1);let l=t;for(;l>=i[s].size;)l-=i[s].size,s++;let c=i[s],d=c.size;if(l+a<=d)r=await Re(c,l,a);else{let m=d-l;r=new M(a),r.set(await Re(c,l,m)),r.set(await n.readUint8Array(t+m,a-m,o),m)}return n.lastDiskNumber=le.max(s,n.lastDiskNumber),r}},za=class extends Ra{constructor(t,a=4294967295){super();let o=this;O.assign(o,{diskNumber:0,diskOffset:0,size:0,maxSize:a,availableSize:a});let n,i,r,s=new Bo({async write(d){let{availableSize:m}=o;if(r)d.length>=m?(await l(d.slice(0,m)),await c(),o.diskOffset+=n.size,o.diskNumber++,r=null,await this.write(d.slice(m))):await l(d);else{let{value:h,done:u}=await t.next();if(u&&!h)throw new q(Lm);n=h,n.size=0,n.maxSize&&(o.maxSize=n.maxSize),o.availableSize=o.maxSize,await _t(n),i=h.writable,r=i.getWriter(),await this.write(d)}},async close(){await r.ready,await c()}});O.defineProperty(o,Es,{get(){return s}});async function l(d){let m=d.length;m&&(await r.ready,await r.write(d),n.size+=m,o.size+=m,o.availableSize-=m)}async function c(){i.size=n.size,await r.close()}}};function xy(e){let{baseURL:t}=fs(),{protocol:a}=new ms(e,t);return a=="http:"||a=="https:"}async function _t(e,t){if(e.init&&!e.initialized)await e.init(t);else return De.resolve()}function As(e){return Wt.isArray(e)&&(e=new Oo(e)),e instanceof us&&(e={readable:e}),e}function js(e){e.writable===te&&typeof e.next==Na&&(e=new za(e)),e instanceof Bo&&(e={writable:e});let{writable:t}=e;return t.size===te&&(t.size=0),e instanceof za||O.assign(e,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),e}function Re(e,t,a,o){return e.readUint8Array(t,a,o)}var Ay=Oo,jy=za,Mm="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),Cy=Mm.length==256;function Ty(e){if(Cy){let t="";for(let a=0;a<e.length;a++)t+=Mm[e[a]];return t}else return new Yd().decode(e)}function Fn(e,t){return t&&t.trim().toLowerCase()=="cp437"?Ty(e):new Yd(t).decode(e)}var Dm="filename",Om="rawFilename",Fm="comment",Bm="rawComment",Um="uncompressedSize",Hm="compressedSize",qm="offset",ts="diskNumberStart",Kn="lastModDate",as="rawLastModDate",Cs="lastAccessDate",Ly="rawLastAccessDate",Ts="creationDate",Ry="rawCreationDate",Gm="internalFileAttribute",Vm="externalFileAttribute",Wm="msDosCompatible",Km="zip64",zy=[Dm,Om,Hm,Um,Kn,as,Fm,Bm,Cs,Ts,qm,ts,ts,Gm,Vm,Wm,Km,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],Ia=class{constructor(t){zy.forEach(a=>this[a]=t[a])}},Bn="File format is not recognized",Ym="End of central directory not found",Xm="End of Zip64 central directory locator not found",$m="Central directory header not found",Jm="Local file header not found",Zm="Zip64 extra field not found",Qm="File contains encrypted entry",eh="Encryption method not supported",os="Compression method not supported",ns="Split zip file",Hd="utf-8",qd="cp437",Iy=[[Um,be],[Hm,be],[qm,be],[ts,pe]],_y={[pe]:{getValue:we,bytes:4},[be]:{getValue:Un,bytes:8}},Yn=class{constructor(t,a={}){O.assign(this,{reader:As(t),options:a,config:fs()})}async*getEntriesGenerator(t={}){let a=this,{reader:o}=a,{config:n}=a;if(await _t(o),(o.size===te||!o.readUint8Array)&&(o=new da(await new ds(o.readable).blob()),await _t(o)),o.size<at)throw new q(Bn);o.chunkSize=rm(n);let i=await Oy(o,Zd,o.size,at,pe*16);if(!i){let T=await Re(o,0,4),j=je(T);throw we(j)==ps?new q(ns):new q(Ym)}let r=je(i),s=we(r,12),l=we(r,16),c=i.offset,d=Ae(r,20),m=c+at+d,h=Ae(r,4),u=o.lastDiskNumber||0,p=Ae(r,6),g=Ae(r,8),b=0,f=0;if(l==be||s==be||g==pe||p==pe){let T=await Re(o,i.offset-To,To),j=je(T);if(we(j,0)==Qd){l=Un(j,8);let P=await Re(o,l,Lo,-1),F=je(P),H=i.offset-To-Lo;if(we(F,0)!=Rr&&l!=H){let z=l;l=H,b=l-z,P=await Re(o,l,Lo,-1),F=je(P)}if(we(F,0)!=Rr)throw new q(Xm);h==pe&&(h=we(F,16)),p==pe&&(p=we(F,20)),g==pe&&(g=Un(F,32)),s==be&&(s=Un(F,40)),l-=s}}if(l>=o.size&&(b=o.size-l-s-at,l=o.size-s-at),u!=h)throw new q(ns);if(l<0)throw new q(Bn);let S=0,k=await Re(o,l,s,p),A=je(k);if(s){let T=i.offset-s;if(we(A,S)!=Lr&&l!=T){let j=l;l=T,b+=l-j,k=await Re(o,l,s,p),A=je(k)}}let y=i.offset-l-(o.lastDiskOffset||0);if(s!=y&&y>=0&&(s=y,k=await Re(o,l,s,p),A=je(k)),l<0||l>=o.size)throw new q(Bn);let x=He(a,t,"filenameEncoding"),C=He(a,t,"commentEncoding");for(let T=0;T<g;T++){let j=new rs(o,n,a.options);if(we(A,S)!=Lr)throw new q($m);th(j,A,S+6);let P=!!j.bitFlag.languageEncodingFlag,F=S+46,H=F+j.filenameLength,z=H+j.extraFieldLength,N=Ae(A,S+4),B=(N&0)==0,U=k.subarray(F,H),$=Ae(A,S+32),K=z+$,G=k.subarray(z,K),J=P,he=P,ke=B&&(Ta(A,S+38)&Pr)==Pr,fe=we(A,S+42)+b;O.assign(j,{versionMadeBy:N,msDosCompatible:B,compressedSize:0,uncompressedSize:0,commentLength:$,directory:ke,offset:fe,diskNumberStart:Ae(A,S+34),internalFileAttribute:Ae(A,S+36),externalFileAttribute:we(A,S+38),rawFilename:U,filenameUTF8:J,commentUTF8:he,rawExtraField:k.subarray(H,z)});let ct=He(a,t,"decodeText")||Fn,L=J?Hd:x||qd,ve=he?Hd:C||qd,xe=ct(U,L);xe===te&&(xe=Fn(U,L));let ue=ct(G,ve);ue===te&&(ue=Fn(G,ve)),O.assign(j,{rawComment:G,filename:xe,comment:ue,directory:ke||xe.endsWith(Mn)}),f=le.max(fe,f),await ah(j,j,A,S+6);let Ne=new Ia(j);Ne.getData=(Ue,Ke)=>j.getData(Ue,Ne,Ke),S=K;let{onprogress:V}=t;if(V)try{await V(T+1,g,new Ia(j))}catch{}yield Ne}let w=He(a,t,"extractPrependedData"),v=He(a,t,"extractAppendedData");return w&&(a.prependedData=f>0?await Re(o,0,f):new M),a.comment=d?await Re(o,c+at,d):new M,v&&(a.appendedData=m<o.size?await Re(o,m,o.size-m):new M),!0}async getEntries(t={}){let a=[];for await(let o of this.getEntriesGenerator(t))a.push(o);return a}async close(){}},is=class{constructor(t={}){let{readable:a,writable:o}=new ge,n=new Yn(a,t).getEntriesGenerator();this.readable=new us({async pull(i){let{done:r,value:s}=await n.next();if(r)return i.close();let l={...s,readable:(function(){let{readable:c,writable:d}=new ge;if(s.getData)return s.getData(d),c})()};delete l.getData,i.enqueue(l)}}),this.writable=o}},rs=class{constructor(t,a,o){O.assign(this,{reader:t,config:a,options:o})}async getData(t,a,o={}){let n=this,{reader:i,offset:r,diskNumberStart:s,extraFieldAES:l,compressionMethod:c,config:d,bitFlag:m,signature:h,rawLastModDate:u,uncompressedSize:p,compressedSize:g}=n,b=a.localDirectory={},f=await Re(i,r,30,s),S=je(f),k=He(n,o,"password"),A=He(n,o,"rawPassword");if(k=k&&k.length&&k,A=A&&A.length&&A,l&&l.originalCompressionMethod!=$d)throw new q(os);if(c!=Xd&&c!=Tr)throw new q(os);if(we(S,0)!=Jd)throw new q(Jm);th(b,S,4),b.rawExtraField=b.extraFieldLength?await Re(i,r+30+b.filenameLength,b.extraFieldLength,s):new M,await ah(n,b,S,4,!0),O.assign(a,{lastAccessDate:b.lastAccessDate,creationDate:b.creationDate});let y=n.encrypted&&b.encrypted,x=y&&!l;if(y){if(!x&&l.strength===te)throw new q(eh);if(!k&&!A)throw new q(Qm)}let C=r+30+b.filenameLength+b.extraFieldLength,w=g,v=i.readable;O.assign(v,{diskNumberStart:s,offset:C,size:w});let T=He(n,o,"signal"),j=He(n,o,"checkPasswordOnly");j&&(t=new Bo),t=js(t),await _t(t,p);let{writable:P}=t,{onstart:F,onprogress:H,onend:z}=o,N={options:{codecType:xm,password:k,rawPassword:A,zipCrypto:x,encryptionStrength:l&&l.strength,signed:He(n,o,"checkSignature"),passwordVerification:x&&(m.dataDescriptor?u>>>8&255:h>>>24&255),signature:h,compressed:c!=0,encrypted:y,useWebWorkers:He(n,o,"useWebWorkers"),useCompressionStream:He(n,o,"useCompressionStream"),transferStreams:He(n,o,"transferStreams"),checkPasswordOnly:j},config:d,streamOptions:{signal:T,size:w,onstart:F,onprogress:H,onend:z}},B=0;try{({outputSize:B}=await Cm({readable:v,writable:P},N))}catch(U){if(!j||U.message!=ys)throw U}finally{let U=He(n,o,"preventClose");P.size+=B,!U&&!P.locked&&await P.getWriter().close()}return j?te:t.getData?t.getData():P}};function th(e,t,a){let o=e.rawBitFlag=Ae(t,a+2),n=(o&zr)==zr,i=we(t,a+6);O.assign(e,{encrypted:n,version:Ae(t,a),bitFlag:{level:(o&Pb)>>1,dataDescriptor:(o&Ir)==Ir,languageEncodingFlag:(o&_r)==_r},rawLastModDate:i,lastModDate:Fy(i),filenameLength:Ae(t,a+22),extraFieldLength:Ae(t,a+24)})}async function ah(e,t,a,o,n){let{rawExtraField:i}=t,r=t.extraField=new cs,s=je(new M(i)),l=0;try{for(;l<i.length;){let f=Ae(s,l),S=Ae(s,l+2);r.set(f,{type:f,data:i.slice(l+4,l+4+S)}),l+=4+S}}catch{}let c=Ae(a,o+4);O.assign(t,{signature:we(a,o+10),uncompressedSize:we(a,o+18),compressedSize:we(a,o+14)});let d=r.get(em);d&&(Py(d,t),t.extraFieldZip64=d);let m=r.get(Ib);m&&(await Gd(m,Dm,Om,t,e),t.extraFieldUnicodePath=m);let h=r.get(_b);h&&(await Gd(h,Fm,Bm,t,e),t.extraFieldUnicodeComment=h);let u=r.get(tm);u?(Ny(u,t,c),t.extraFieldAES=u):t.compressionMethod=c;let p=r.get(am);p&&(My(p,t),t.extraFieldNTFS=p);let g=r.get(gs);g&&(Dy(g,t,n),t.extraFieldExtendedTimestamp=g);let b=r.get(nm);b&&(t.extraFieldUSDZ=b)}function Py(e,t){t.zip64=!0;let a=je(e.data),o=Iy.filter(([n,i])=>t[n]==i);for(let n=0,i=0;n<o.length;n++){let[r,s]=o[n];if(t[r]==s){let l=_y[s];t[r]=e[r]=l.getValue(a,i),i+=l.bytes}else if(e[r])throw new q(Zm)}}async function Gd(e,t,a,o,n){let i=je(e.data),r=new La;r.append(n[a]);let s=je(new M(4));s.setUint32(0,r.get(),!0);let l=we(i,1);O.assign(e,{version:Ta(i,0),[t]:Fn(e.data.subarray(5)),valid:!n.bitFlag.languageEncodingFlag&&l==we(s,0)}),e.valid&&(o[t]=e[t],o[t+"UTF8"]=!0)}function Ny(e,t,a){let o=je(e.data),n=Ta(o,4);O.assign(e,{vendorVersion:Ta(o,0),vendorId:Ta(o,2),strength:n,originalCompressionMethod:a,compressionMethod:Ae(o,5)}),t.compressionMethod=e.compressionMethod}function My(e,t){let a=je(e.data),o=4,n;try{for(;o<e.data.length&&!n;){let i=Ae(a,o),r=Ae(a,o+2);i==om&&(n=e.data.slice(o+4,o+4+r)),o+=4+r}}catch{}try{if(n&&n.length==24){let i=je(n),r=i.getBigUint64(0,!0),s=i.getBigUint64(8,!0),l=i.getBigUint64(16,!0);O.assign(e,{rawLastModDate:r,rawLastAccessDate:s,rawCreationDate:l});let c=Ar(r),d=Ar(s),m=Ar(l),h={lastModDate:c,lastAccessDate:d,creationDate:m};O.assign(e,h),O.assign(t,h)}}catch{}}function Dy(e,t,a){let o=je(e.data),n=Ta(o,0),i=[],r=[];a?((n&1)==1&&(i.push(Kn),r.push(as)),(n&2)==2&&(i.push(Cs),r.push(Ly)),(n&4)==4&&(i.push(Ts),r.push(Ry))):e.data.length>=5&&(i.push(Kn),r.push(as));let s=1;i.forEach((l,c)=>{if(e.data.length>=s+4){let d=we(o,s);t[l]=e[l]=new Pa(d*1e3);let m=r[c];e[m]=d}s+=4})}async function Oy(e,t,a,o,n){let i=new M(4),r=je(i);By(r,0,t);let s=o+n;return await l(o)||await l(le.min(s,a));async function l(c){let d=a-c,m=await Re(e,d,c);for(let h=m.length-o;h>=0;h--)if(m[h]==i[0]&&m[h+1]==i[1]&&m[h+2]==i[2]&&m[h+3]==i[3])return{offset:d+h,buffer:m.slice(h,h+o).buffer}}}function He(e,t,a){return t[a]===te?e.options[a]:t[a]}function Fy(e){let t=(e&4294901760)>>16,a=e&65535;try{return new Pa(1980+((t&65024)>>9),((t&480)>>5)-1,t&31,(a&63488)>>11,(a&2016)>>5,(a&31)*2,0)}catch{}}function Ar(e){return new Pa(Fo(e/ze(1e4)-ze(116444736e5)))}function Ta(e,t){return e.getUint8(t)}function Ae(e,t){return e.getUint16(t,!0)}function we(e,t){return e.getUint32(t,!0)}function Un(e,t){return Fo(e.getBigUint64(t,!0))}function By(e,t,a){e.setUint32(t,a,!0)}function je(e){return new ma(e.buffer)}var oh="File already exists",nh="Zip file comment exceeds 64KB",ih="File entry comment exceeds 64KB",rh="File entry name exceeds 64KB",ss="Version exceeds 65535",sh="The strength must equal 1, 2, or 3",lh="Extra field type exceeds 65535",ch="Extra field data exceeds 64KB",Jn="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",Vd=new M([7,0,2,0,65,69,3,0,0]),jr=0,Wd=[],_a=class{constructor(t,a={}){t=js(t);let o=t.availableSize!==te&&t.availableSize>0&&t.availableSize!==1/0&&t.maxSize!==te&&t.maxSize>0&&t.maxSize!==1/0;O.assign(this,{writer:t,addSplitZipSignature:o,options:a,config:fs(),files:new cs,filenames:new wd,offset:t.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new wd,bufferedWrites:0})}async add(t="",a,o={}){let n=this,{pendingAddFileCalls:i,config:r}=n;jr<r.maxWorkers?jr++:await new De(l=>Wd.push(l));let s;try{if(t=t.trim(),n.filenames.has(t))throw new q(oh);return n.filenames.add(t),s=Uy(n,t,a,o),i.add(s),await s}catch(l){throw n.filenames.delete(t),l}finally{i.delete(s);let l=Wd.shift();l?l():jr--}}async close(t=new M,a={}){let o=this,{pendingAddFileCalls:n,writer:i}=this,{writable:r}=i;for(;n.size;)await De.allSettled(Wt.from(n));return await $y(this,t,a),oe(o,a,"preventClose")||await r.getWriter().close(),i.getData?i.getData():r}},ls=class{constructor(t={}){let{readable:a,writable:o}=new ge;this.readable=a,this.zipWriter=new _a(o,t)}transform(t){let{readable:a,writable:o}=new ge({flush:()=>{this.zipWriter.close()}});return this.zipWriter.add(t,a),{readable:this.readable,writable:o}}writable(t){let{readable:a,writable:o}=new ge;return this.zipWriter.add(t,a),o}close(t=void 0,a={}){return this.zipWriter.close(t,a)}};async function Uy(e,t,a,o){t=t.trim(),o.directory&&!t.endsWith(Mn)?t+=Mn:o.directory=t.endsWith(Mn);let n=oe(e,o,"encodeText",Dn),i=n(t);if(i===te&&(i=Dn(t)),X(i)>pe)throw new q(rh);let r=o.comment||"",s=n(r);if(s===te&&(s=Dn(r)),X(s)>pe)throw new q(ih);let l=oe(e,o,"version",Nb);if(l>pe)throw new q(ss);let c=oe(e,o,"versionMadeBy",20);if(c>pe)throw new q(ss);let d=oe(e,o,Kn,new Pa),m=oe(e,o,Cs),h=oe(e,o,Ts),u=oe(e,o,Wm,!0),p=oe(e,o,Gm,0),g=oe(e,o,Vm,0),b=oe(e,o,"password"),f=oe(e,o,"rawPassword"),S=oe(e,o,"encryptionStrength",3),k=oe(e,o,"zipCrypto"),A=oe(e,o,"extendedTimestamp",!0),y=oe(e,o,"keepOrder",!0),x=oe(e,o,"level"),C=oe(e,o,"useWebWorkers"),w=oe(e,o,"bufferedWrite"),v=oe(e,o,"dataDescriptorSignature",!1),T=oe(e,o,"signal"),j=oe(e,o,"useCompressionStream"),P=oe(e,o,"dataDescriptor",!0),F=oe(e,o,Km);if(b!==te&&S!==te&&(S<1||S>3))throw new q(sh);let H=new M,{extraField:z}=o;if(z){let V=0,Ue=0;z.forEach(Ke=>V+=4+X(Ke)),H=new M(V),z.forEach((Ke,Se)=>{if(Se>pe)throw new q(lh);if(X(Ke)>pe)throw new q(ch);ye(H,new bd([Se]),Ue),ye(H,new bd([X(Ke)]),Ue+2),ye(H,Ke,Ue+4),Ue+=4+X(Ke)})}let N=0,B=0,U=0,$=F===!0;a&&(a=As(a),await _t(a),a.size===te?(P=!0,(F||F===te)&&(F=!0,U=N=be+1)):(U=a.size,N=Jy(U)));let{diskOffset:K,diskNumber:G,maxSize:J}=e.writer,he=$||U>be,ke=$||N>be,fe=$||e.offset+e.pendingEntriesSize-K>be,L=oe(e,o,"supportZip64SplitFile",!0)&&$||G+le.ceil(e.pendingEntriesSize/J)>pe;if(fe||he||ke||L){if(F===!1||!y)throw new q(Jn);F=!0}F=F||!1,o=O.assign({},o,{rawFilename:i,rawComment:s,version:l,versionMadeBy:c,lastModDate:d,lastAccessDate:m,creationDate:h,rawExtraField:H,zip64:F,zip64UncompressedSize:he,zip64CompressedSize:ke,zip64Offset:fe,zip64DiskNumberStart:L,password:b,rawPassword:f,level:!j&&e.config.CompressionStream===te&&e.config.CompressionStreamNative===te?0:x,useWebWorkers:C,encryptionStrength:S,extendedTimestamp:A,zipCrypto:k,bufferedWrite:w,keepOrder:y,dataDescriptor:P,dataDescriptorSignature:v,signal:T,msDosCompatible:u,internalFileAttribute:p,externalFileAttribute:g,useCompressionStream:j});let ve=Gy(o),xe=Wy(o),ue=X(ve.localHeaderArray,xe.dataDescriptorArray);B=ue+N,e.options.usdz&&(B+=B+64),e.pendingEntriesSize+=B;let Ne;try{Ne=await Hy(e,t,a,{headerInfo:ve,dataDescriptorInfo:xe,metadataSize:ue},o)}finally{e.pendingEntriesSize-=B}return O.assign(Ne,{name:t,comment:r,extraField:z}),new Ia(Ne)}async function Hy(e,t,a,o,n){let{files:i,writer:r}=e,{keepOrder:s,dataDescriptor:l,signal:c}=n,{headerInfo:d}=o,{usdz:m}=e.options,h=Wt.from(i.values()).pop(),u={},p,g,b,f,S,k,A;i.set(t,u);try{let w;s&&(w=h&&h.lock,y()),(n.bufferedWrite||e.writerLocked||e.bufferedWrites&&s||!l)&&!m?(k=new ge,A=new ds(k.readable).blob(),k.writable.size=0,p=!0,e.bufferedWrites++,await _t(r)):(k=r,await x()),await _t(k);let{writable:v}=r,{diskOffset:T}=r;if(e.addSplitZipSignature){delete e.addSplitZipSignature;let P=new M(4),F=Ie(P);Y(F,0,ps),await kt(v,P),e.offset+=4}m&&Vy(o,e.offset-T),p||(await w,await C(v));let{diskNumber:j}=r;if(S=!0,u.diskNumberStart=j,u=await qy(a,k,u,o,e.config,n),S=!1,i.set(t,u),u.filename=t,p){await k.writable.getWriter().close();let P=await A;await w,await x(),f=!0,l||(P=await Yy(u,P,v,n)),await C(v),u.diskNumberStart=r.diskNumber,T=r.diskOffset,await P.stream().pipeTo(v,{preventClose:!0,preventAbort:!0,signal:c}),v.size+=P.size,f=!1}if(u.offset=e.offset-T,u.zip64)Xy(u,n);else if(u.offset>be)throw new q(Jn);return e.offset+=u.size,u}catch(w){if(p&&f||!p&&S){if(e.hasCorruptedEntries=!0,w)try{w.corruptedEntry=!0}catch{}p?e.offset+=k.writable.size:e.offset=k.writable.size}throw i.delete(t),w}finally{p&&e.bufferedWrites--,b&&b(),g&&g()}function y(){u.lock=new De(w=>b=w)}async function x(){e.writerLocked=!0;let{lockWriter:w}=e;e.lockWriter=new De(v=>g=()=>{e.writerLocked=!1,v()}),await w}async function C(w){X(d.localHeaderArray)>r.availableSize&&(r.availableSize=0,await kt(w,new M))}}async function qy(e,t,{diskNumberStart:a,lock:o},n,i,r){let{headerInfo:s,dataDescriptorInfo:l,metadataSize:c}=n,{localHeaderArray:d,headerArray:m,lastModDate:h,rawLastModDate:u,encrypted:p,compressed:g,version:b,compressionMethod:f,rawExtraFieldExtendedTimestamp:S,extraFieldExtendedTimestampFlag:k,rawExtraFieldNTFS:A,rawExtraFieldAES:y}=s,{dataDescriptorArray:x}=l,{rawFilename:C,lastAccessDate:w,creationDate:v,password:T,rawPassword:j,level:P,zip64:F,zip64UncompressedSize:H,zip64CompressedSize:z,zip64Offset:N,zip64DiskNumberStart:B,zipCrypto:U,dataDescriptor:$,directory:K,versionMadeBy:G,rawComment:J,rawExtraField:he,useWebWorkers:ke,onstart:fe,onprogress:ct,onend:L,signal:ve,encryptionStrength:xe,extendedTimestamp:ue,msDosCompatible:Ne,internalFileAttribute:V,externalFileAttribute:Ue,useCompressionStream:Ke}=r,Se={lock:o,versionMadeBy:G,zip64:F,directory:!!K,filenameUTF8:!0,rawFilename:C,commentUTF8:!0,rawComment:J,rawExtraFieldExtendedTimestamp:S,rawExtraFieldNTFS:A,rawExtraFieldAES:y,rawExtraField:he,extendedTimestamp:ue,msDosCompatible:Ne,internalFileAttribute:V,externalFileAttribute:Ue,diskNumberStart:a},ra=0,Aa=0,Ao,{writable:Ut}=t;if(e){e.chunkSize=rm(i),await kt(Ut,d);let Q=e.readable,kr=Q.size=e.size,Pn={options:{codecType:Em,level:P,rawPassword:j,password:T,encryptionStrength:xe,zipCrypto:p&&U,passwordVerification:p&&U&&u>>8&255,signed:!0,compressed:g,encrypted:p,useWebWorkers:ke,useCompressionStream:Ke,transferStreams:!1},config:i,streamOptions:{signal:ve,size:kr,onstart:fe,onprogress:ct,onend:L}},la=await Cm({readable:Q,writable:Ut},Pn);Aa=la.inputSize,ra=la.outputSize,Ao=la.signature,Ut.size+=Aa}else await kt(Ut,d);let sa;if(F){let Q=4;H&&(Q+=8),z&&(Q+=8),N&&(Q+=8),B&&(Q+=4),sa=new M(Q)}else sa=new M;return Ky({signature:Ao,rawExtraFieldZip64:sa,compressedSize:ra,uncompressedSize:Aa,headerInfo:s,dataDescriptorInfo:l},r),$&&await kt(Ut,x),O.assign(Se,{uncompressedSize:Aa,compressedSize:ra,lastModDate:h,rawLastModDate:u,creationDate:v,lastAccessDate:w,encrypted:p,size:c+ra,compressionMethod:f,version:b,headerArray:m,signature:Ao,rawExtraFieldZip64:sa,extraFieldExtendedTimestampFlag:k,zip64UncompressedSize:H,zip64CompressedSize:z,zip64Offset:N,zip64DiskNumberStart:B}),Se}function Gy(e){let{rawFilename:t,lastModDate:a,lastAccessDate:o,creationDate:n,rawPassword:i,password:r,level:s,zip64:l,zipCrypto:c,dataDescriptor:d,directory:m,rawExtraField:h,encryptionStrength:u,extendedTimestamp:p}=e,g=s!==0&&!m,b=!!(r&&X(r)||i&&X(i)),f=e.version,S;if(b&&!c){S=new M(X(Vd)+2);let B=Ie(S);Z(B,0,tm),ye(S,Vd,2),Xn(B,8,u)}else S=new M;let k,A,y;if(p){A=new M(9+(o?4:0)+(n?4:0));let B=Ie(A);Z(B,0,gs),Z(B,2,X(A)-4),y=1+(o?2:0)+(n?4:0),Xn(B,4,y);let U=5;Y(B,U,le.floor(a.getTime()/1e3)),U+=4,o&&(Y(B,U,le.floor(o.getTime()/1e3)),U+=4),n&&Y(B,U,le.floor(n.getTime()/1e3));try{k=new M(36);let $=Ie(k),K=Cr(a);Z($,0,am),Z($,2,32),Z($,8,om),Z($,10,24),qe($,12,K),qe($,20,Cr(o)||K),qe($,28,Cr(n)||K)}catch{k=new M}}else k=A=new M;let x=_r;d&&(x=x|Ir);let C=Xd;g&&(C=Tr),l&&(f=f>Ed?f:Ed),b&&(x=x|zr,c||(f=f>xd?f:xd,C=$d,g&&(S[9]=Tr)));let w=new M(26),v=Ie(w);Z(v,0,f),Z(v,2,x),Z(v,4,C);let T=new hs(1),j=Ie(T),P;a<jd?P=jd:a>Ad?P=Ad:P=a,Z(j,0,(P.getHours()<<6|P.getMinutes())<<5|P.getSeconds()/2),Z(j,2,(P.getFullYear()-1980<<4|P.getMonth()+1)<<5|P.getDate());let F=T[0];Y(v,6,F),Z(v,22,X(t));let H=X(S,A,k,h);Z(v,24,H);let z=new M(30+X(t)+H),N=Ie(z);return Y(N,0,Jd),ye(z,w,4),ye(z,t,30),ye(z,S,30+X(t)),ye(z,A,30+X(t,S)),ye(z,k,30+X(t,S,A)),ye(z,h,30+X(t,S,A,k)),{localHeaderArray:z,headerArray:w,headerView:v,lastModDate:a,rawLastModDate:F,encrypted:b,compressed:g,version:f,compressionMethod:C,extraFieldExtendedTimestampFlag:y,rawExtraFieldExtendedTimestamp:A,rawExtraFieldNTFS:k,rawExtraFieldAES:S,extraFieldLength:H}}function Vy(e,t){let{headerInfo:a}=e,{localHeaderArray:o,extraFieldLength:n}=a,i=Ie(o),r=64-(t+X(o))%64;r<4&&(r+=64);let s=new M(r),l=Ie(s);Z(l,0,nm),Z(l,2,r-2);let c=o;a.localHeaderArray=o=new M(X(c)+r),ye(o,c),ye(o,s,X(c)),i=Ie(o),Z(i,28,n+r),e.metadataSize+=r}function Wy(e){let{zip64:t,dataDescriptor:a,dataDescriptorSignature:o}=e,n=new M,i,r=0;return a&&(n=new M(t?o?24:20:o?16:12),i=Ie(n),o&&(r=4,Y(i,0,Rb))),{dataDescriptorArray:n,dataDescriptorView:i,dataDescriptorOffset:r}}function Ky(e,t){let{signature:a,rawExtraFieldZip64:o,compressedSize:n,uncompressedSize:i,headerInfo:r,dataDescriptorInfo:s}=e,{headerView:l,encrypted:c}=r,{dataDescriptorView:d,dataDescriptorOffset:m}=s,{zip64:h,zip64UncompressedSize:u,zip64CompressedSize:p,zipCrypto:g,dataDescriptor:b}=t;if((!c||g)&&a!==te&&(Y(l,10,a),b&&Y(d,m,a)),h){let f=Ie(o);Z(f,0,em),Z(f,2,X(o)-4);let S=4;u&&(Y(l,18,be),qe(f,S,ze(i)),S+=8),p&&(Y(l,14,be),qe(f,S,ze(n))),b&&(qe(d,m+4,ze(n)),qe(d,m+12,ze(i)))}else Y(l,14,n),Y(l,18,i),b&&(Y(d,m+4,n),Y(d,m+8,i))}async function Yy(e,t,a,{zipCrypto:o}){let n;n=await t.slice(0,26).arrayBuffer(),n.byteLength!=26&&(n=n.slice(0,26));let i=new ma(n);return(!e.encrypted||o)&&Y(i,14,e.signature),e.zip64?(Y(i,18,be),Y(i,22,be)):(Y(i,18,e.compressedSize),Y(i,22,e.uncompressedSize)),await kt(a,new M(n)),t.slice(n.byteLength)}function Xy(e,t){let{rawExtraFieldZip64:a,offset:o,diskNumberStart:n}=e,{zip64UncompressedSize:i,zip64CompressedSize:r,zip64Offset:s,zip64DiskNumberStart:l}=t,c=Ie(a),d=4;i&&(d+=8),r&&(d+=8),s&&(qe(c,d,ze(o)),d+=8),l&&Y(c,d,n)}async function $y(e,t,a){let{files:o,writer:n}=e,{diskOffset:i,writable:r}=n,{diskNumber:s}=n,l=0,c=0,d=e.offset-i,m=o.size;for(let[,y]of o){let{rawFilename:x,rawExtraFieldZip64:C,rawExtraFieldAES:w,rawComment:v,rawExtraFieldNTFS:T,rawExtraField:j,extendedTimestamp:P,extraFieldExtendedTimestampFlag:F,lastModDate:H}=y,z;if(P){z=new M(9);let N=Ie(z);Z(N,0,gs),Z(N,2,5),Xn(N,4,F),Y(N,5,le.floor(H.getTime()/1e3))}else z=new M;y.rawExtraFieldCDExtendedTimestamp=z,c+=46+X(x,v,C,w,T,z,j)}let h=new M(c),u=Ie(h);await _t(n);let p=0;for(let[y,x]of Wt.from(o.values()).entries()){let{offset:C,rawFilename:w,rawExtraFieldZip64:v,rawExtraFieldAES:T,rawExtraFieldCDExtendedTimestamp:j,rawExtraFieldNTFS:P,rawExtraField:F,rawComment:H,versionMadeBy:z,headerArray:N,directory:B,zip64:U,zip64UncompressedSize:$,zip64CompressedSize:K,zip64DiskNumberStart:G,zip64Offset:J,msDosCompatible:he,internalFileAttribute:ke,externalFileAttribute:fe,diskNumberStart:ct,uncompressedSize:L,compressedSize:ve}=x,xe=X(v,T,j,P,F);Y(u,l,Lr),Z(u,l+4,z);let ue=Ie(N);$||Y(ue,18,L),K||Y(ue,14,ve),ye(h,N,l+6),Z(u,l+30,xe),Z(u,l+32,X(H)),Z(u,l+34,U&&G?pe:ct),Z(u,l+36,ke),fe?Y(u,l+38,fe):B&&he&&Xn(u,l+38,Pr),Y(u,l+42,U&&J?be:C),ye(h,w,l+46),ye(h,v,l+46+X(w)),ye(h,T,l+46+X(w,v)),ye(h,j,l+46+X(w,v,T)),ye(h,P,l+46+X(w,v,T,j)),ye(h,F,l+46+X(w,v,T,j,P)),ye(h,H,l+46+X(w)+xe);let Ne=46+X(w,H)+xe;if(l-p>n.availableSize&&(n.availableSize=0,await kt(r,h.slice(p,l)),p=l),l+=Ne,a.onprogress)try{await a.onprogress(y+1,o.size,new Ia(x))}catch{}}await kt(r,p?h.slice(p):h);let g=n.diskNumber,{availableSize:b}=n;b<at&&g++;let f=oe(e,a,"zip64");if(d>be||c>be||m>pe||g>pe){if(f===!1)throw new q(Jn);f=!0}let S=new M(f?zb:at),k=Ie(S);l=0,f&&(Y(k,0,Rr),qe(k,4,ze(44)),Z(k,12,45),Z(k,14,45),Y(k,16,g),Y(k,20,s),qe(k,24,ze(m)),qe(k,32,ze(m)),qe(k,40,ze(c)),qe(k,48,ze(d)),Y(k,56,Qd),qe(k,64,ze(d)+ze(c)),Y(k,72,g+1),oe(e,a,"supportZip64SplitFile",!0)&&(g=pe,s=pe),m=pe,d=be,c=be,l+=Lo+To),Y(k,l,Zd),Z(k,l+4,g),Z(k,l+6,s),Z(k,l+8,m),Z(k,l+10,m),Y(k,l+12,c),Y(k,l+16,d);let A=X(t);if(A)if(A<=pe)Z(k,l+20,A);else throw new q(nh);await kt(r,S),A&&await kt(r,t)}async function kt(e,t){let a=e.getWriter();try{await a.ready,e.size+=X(t),await a.write(t)}finally{a.releaseLock()}}function Cr(e){if(e)return(ze(e.getTime())+ze(116444736e5))*ze(1e4)}function oe(e,t,a,o){let n=t[a]===te?e.options[a]:t[a];return n===te?o:n}function Jy(e){return e+5*(le.floor(e/16383)+1)}function Xn(e,t,a){e.setUint8(t,a)}function Z(e,t,a){e.setUint16(t,a,!0)}function Y(e,t,a){e.setUint32(t,a,!0)}function qe(e,t,a){e.setBigUint64(t,a,!0)}function ye(e,t,a){e.set(t,a)}function Ie(e){return new ma(e.buffer)}function X(...e){let t=0;return e.forEach(a=>a&&(t+=a.length)),t}var dh;try{dh=Zy.url}catch{}Uo({baseURL:dh});Ob(Uo);async function mh(e,{password:t,prompt:a=()=>{},shadowRootScriptURL:o,zipOptions:n={useWebWorkers:!1},noBlobURL:i}={}){let r={gif:"image/gif",jpg:"image/jpeg",png:"image/png",tif:"image/tiff",tiff:"image/tiff",bmp:"image/bmp",ico:"image/vnd.microsoft.icon",webp:"image/webp",svg:"image/svg+xml",avi:"video/x-msvideo",ogv:"video/ogg",mp4:"video/mp4",mpeg:"video/mpeg",ts:"video/mp2t",webm:"video/webm","3gp":"video/3gpp","3g2":"video/3gpp",mp3:"audio/mpeg",oga:"audio/ogg",mid:"audio/midi",midi:"audio/midi",opus:"audio/opus",wav:"audio/wav",weba:"audio/webm",heif:"image/heif",heic:"image/heic",avif:"image/avif",apng:"image/apng",mov:"video/quicktime",otf:"font/otf",ttf:"font/ttf",woff:"font/woff",woff2:"font/woff2",eot:"application/vnd.ms-fontobject",pdf:"application/pdf"},s=/stylesheet_[0-9]+\.css/,l=/scripts\/[0-9]+\.js/,c=/^([0-9_]+\/)?index\.html$/,d=/index\.html$/,m=/frames\//,h=/^frames\/\d+\/index.html/,u=/manifest\.json$/,p=";charset=utf-8",g=/([{}()^$&.*?/+|[\\\\]|\]|-)/g;Array.isArray(e)&&(e=new Blob([new Uint8Array(e)])),zip.configure(n);let b=new zip.BlobReader(e),f=new zip.ZipReader(b),S=await f.getEntries(),k={password:t},A,y,x,C=[],w=[],v=[];await Promise.all(S.map(async z=>{let{filename:N}=z,B,U,$,K,G={};if(!k.password&&z.encrypted&&(k.password=a("Please enter the password to view the page")),N.match(d)||N.match(s)||N.match(l))N.match(d)?w.push(G):v.push(G),B=new zip.TextWriter,$=await z.getData(B,k),N.match(d)?K="text/html"+p:N.match(s)?K="text/css"+p:N.match(l)&&(K="text/javascript"+p);else{C.push(G);let fe=N.match(/\.([^.]+)/);if(fe&&fe[1]&&r[fe[1]]?K=r[fe[1]]:K="application/octet-stream",N.match(m)||i)U=await z.getData(new zip.Data64URIWriter(K),k);else{let ct=await z.getData(new zip.BlobWriter(K),k);U=URL.createObjectURL(ct)}}let J=z.filename.match(/^([0-9_]+\/)?(.*)$/)[2],he="",ke=N.match(/(.*\/)[^/]+$/);ke&&ke[1]&&(he=ke[1]),Object.assign(G,{prefixPath:he,filename:z.filename,name:J,url:z.comment,content:U,mimeType:K,textContent:$,parentResources:[]})})),await f.close(),w.sort(F),v.sort(H),C=C.sort(F).concat(...v).concat(...w);for(let z of C){let{filename:N,prefixPath:B}=z,{textContent:U}=z;U!==void 0&&(N.match(c)&&(y=U),N.match(l)||(C.forEach($=>{let{filename:K,parentResources:G,content:J}=$;if(K.startsWith(B)&&K!=z.filename){let he=K.substring(B.length);he.match(u)||U.includes(he)&&(G.push(z.filename),$.textContent===void 0&&(U=P(U,he,J)))}}),z.textContent=U))}for(let z of C){let{textContent:N,prefixPath:B,filename:U}=z;if(N!==void 0){if(!U.match(l)){let $=U;for(let K of C){let{filename:G}=K;if(G.startsWith(B)&&G!=$){let J=G.substring(B.length);J.match(u)||N.indexOf(J)!=-1&&(K.content=await T(K),N=P(N,J,K.content))}}z.textContent=N,z.content=await T(z)}U.match(d)&&o&&(z.textContent=N.replace(/<script data-template-shadow-root.*<\/script>/g,"<script data-template-shadow-root src="+o+"><\/script>")),U.match(c)&&(A=N,x=z.url)}}return{docContent:A,origDocContent:y,resources:C,url:x};async function T(z){return z.filename.match(m)&&!z.filename.match(h)||i?await j(z.textContent,z.mimeType):URL.createObjectURL(new Blob([z.textContent],{type:z.mimeType}))}async function j(z,N){let B=new FileReader;return B.readAsDataURL(new Blob([z],{type:N})),new Promise((U,$)=>{B.onload=()=>U(B.result.replace(p,"")),B.onerror=$})}function P(z,N,B){if(typeof z.replaceAll=="function")return z.replaceAll(N,B);{let U=new RegExp(N.replace(g,"\\$1"),"g");return z.replace(U,B)}}function F(z,N){let B=N.filename.length-z.filename.length;return B||N.filename.localeCompare(z.filename)}function H(z,N){let B=z.filename.length-N.filename.length;return B||z.filename.localeCompare(N.filename)}}async function hh(e,t,{disableFramePointerEvents:a}={}){t=t.replace(/<noscript/gi,"<template disabled-noscript"),t=t.replaceAll(/<\/noscript/gi,"</template");let o=new DOMParser().parseFromString(t,"text/html");a&&o.querySelectorAll("iframe").forEach(i=>{let r="pointer-events";i.style.setProperty("-sf-"+r,i.style.getPropertyValue(r),i.style.getPropertyPriority(r)),i.style.setProperty(r,"none","important")}),e.open(),e.write(n(o)),e.write(o.documentElement.outerHTML),e.close(),e.querySelectorAll("template[disabled-noscript]").forEach(i=>{let r=e.createElement("noscript");i.removeAttribute("disabled-noscript"),Array.from(i.attributes).forEach(s=>r.setAttribute(s.name,s.value)),r.textContent=i.innerHTML,i.parentElement.replaceChild(r,i)}),e.documentElement.setAttribute("data-sfz",""),e.querySelectorAll("link[rel*=icon]").forEach(i=>i.replaceWith(i.cloneNode(!0)));function n(i){let r=i.doctype,s="";return r&&(s="<!DOCTYPE "+r.nodeName,r.publicId?(s+=' PUBLIC "'+r.publicId+'"',r.systemId&&(s+=' "'+r.systemId+'"')):r.systemId&&(s+=' SYSTEM "'+r.systemId+'"'),r.internalSubset&&(s+=" ["+r.internalSubset+"]"),s+="> "),s}}var{Blob:Ps,fetch:Qy,TextEncoder:Ma,DOMParser:uh}=globalThis,ek=[".jpg",".jpeg",".png",".avi",".apng",".pdf",".woff2",".mp4",".mp3",".ogg",".webp",".webm",".avi",".mpeg",".ts",".ogv",".heif",".heic"],tk="/lib/single-file-zip.min.js",Ns=[["<noscript>","</noscript>"],["<noframes>","</noframes>"],["<noembed>","</noembed>"],["<script type=sfz-data>","<\/script>"],["<style type=sfz-data>","</style>"],["<iframe>","</iframe>"],["<xmp>","</xmp>"],["<plaintext>","</plaintext>"]],fh=[["<!--","-->"],...Ns],wh=[[/<noscript/i,/<\/noscript>/i],[/<noframes/i,/<\/noframes>/i],[/<noembed/i,/<\/noembed>/i],[/<script/i,/<\/script>/i],[/<style/i,/<\/style>/i],[/<iframe/i,/<\/iframe>/i],[/<xmp/i,/<\/xmp>/i],[/<plaintext/i,/<\/plaintext>/i]],bh=[[/<!--/i,/-->/i],...wh],ak=new Uint32Array(256).map((e,t)=>{let a=t;for(let o=0;o<8;o++)a=a&1?3988292384^a>>>1:a>>>1;return a}),Rs=12,ph=8,gh=25,Zn=globalThis.browser;async function Da(e,t,a=new Date){let o;t.zipScript?o=t.zipScript:Zn&&Zn.runtime&&Zn.runtime.getURL&&(Uo({workerScripts:{deflate:["/lib/single-file-z-worker.js"]}}),o=await(await Qy(Zn.runtime.getURL(tk))).text());let n=new Do;n.init(),n.writable.size=0;let i,r,s,l;if(t.embeddedImage){t.embeddedImage=Array.from(t.embeddedImage);let u=t.embeddedImage.slice(ph+gh,t.embeddedImage.length-Rs);if(await Ye(n.writable,t.embeddedImage.slice(0,ph+gh)),t.selfExtractingArchive){let p=u.reduce((k,A)=>k+String.fromCharCode(A),""),g=bh.findIndex(k=>!p.match(k[1])),b;[b,l]=g==-1?["",""]:fh[g];let f=kh(e,t,b),S=new Uint8Array([...Is(f.length+4),116,69,88,116,80,78,71,0,...f]);await Ye(n.writable,S),await Ye(n.writable,zs(S,4))}else if(t.embeddedPdf){let p=new Uint8Array([...Is(t.embeddedPdf.length+4),116,69,88,116,80,68,70,0,...new Uint8Array(t.embeddedPdf)]);await Ye(n.writable,p),await Ye(n.writable,zs(p,4))}await Ye(n.writable,u),await Ye(n.writable,new Uint8Array(4)),s=n.offset,await Ye(n.writable,new Uint8Array([116,69,88,116,90,73,80,0])),t.selfExtractingArchive&&await Ye(n.writable,new Ma().encode(l))}t.selfExtractingArchive?i=await ok(e,n,o,t):!t.embeddedImage&&t.embeddedPdf&&await Ye(n.writable,new Uint8Array(t.embeddedPdf));let c=new _a(n,{bufferedWrite:!0,keepOrder:!1,lastModDate:a}),d=n.offset;e.url=t.url,e.archiveTime=new Date().toISOString(),await Eh(c,e,{password:t.password},t.createRootDirectory?String(Date.now())+"_"+(t.tabId||0)+"/":"",t.url);let m=await c.close(null,{preventClose:!0});if(t.selfExtractingArchive){let u=[],p=[];if(t.extractDataFromPage){if(!t.extractDataFromPageTags){let f="";if(m.slice(d).forEach(k=>f+=String.fromCharCode(k)),f.match(/<!--/i)||f.match(/-->/i))return Sh(f,e,t,a)}for(let f=d;f<m.length;f++)m[f]==13&&(m[f+1]==10?u.push(f-d):p.push(f-d))}let g="";t.preventAppendedData||(t.extractDataFromPageTags?g+=t.extractDataFromPageTags[1]:g+="-->");let b=t.preventAppendedData||t.embeddedImage?"":"</body></html>";if(t.extractDataFromPage){let f=new Uint32Array(u.length+p.length+2);if(f.set(new Uint32Array([u.length]),0),f.set(new Uint32Array(u),1),f.set(new Uint32Array([p.length]),u.length+1),f.set(new Uint32Array(p),u.length+2),r="<sfz-extra-data>"+sk(f.buffer)+"</sfz-extra-data>",t.preventAppendedData||r.length>65535-b.length-(t.embeddedImage?Rs:0)){if(!t.extraDataSize)return t.extraDataSize=Math.floor(r.length*1.001),Da(e,t,a)}else{if(t.extraDataSize)return t.extraDataSize=void 0,Da(e,t,a);g+=r}}g+=b,await Ye(n.writable,new Ma().encode(g))}await n.writable.close();let h=await n.getData();if(t.extractDataFromPage&&t.extraDataSize!==void 0)if(t.extraDataSize>=r.length)h.set(Array.from(r).map(u=>u.charCodeAt(0)),d-i);else return t.extraData=r,t.extraDataSize=Math.floor(r.length*1.001),Da(e,t,a);return t.embeddedImage?(h.set(Is(n.offset-s-4),s-4),new Ps([h,zs(h,s),new Uint8Array(t.embeddedImage.slice(t.embeddedImage.length-Rs))],{type:"application/octet-stream"})):new Ps([h],{type:"application/octet-stream"})}function zs(e,t=0){let a=new Uint8Array(4),o=-1;for(;t<e.length;t++)o=o>>>8^ak[(o^e[t])&255];return o^=-1,yh(a,o),a}function Is(e){let t=new Uint8Array(4);return yh(t,e),t}function yh(e,t){e[0]=t>>24,e[1]=t>>16,e[2]=t>>8,e[3]=t}async function ok(e,t,a,o){let n="";if(o.embeddedImage||await Ye(t.writable,kh(e,o)),n+="<div id=sfz-wait-message>Please wait...</div>",o.extractDataFromPage||(n+="<div id=sfz-error-message><strong>Error</strong>: Cannot open the page from the filesystem.",n+="<ul style='line-height:20px;'>",n+=`<li style='margin-bottom:10px'><strong>Chrome</strong>: Install <a href='https://chrome.google.com/webstore/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle'>SingleFile</a> and enable the option "Allow access to file URLs" in the details page of the extension (chrome://extensions/?id=mpiodijhokgodhhofbcjdecpffjipkle).</li>`,n+=`<li style='margin-bottom:10px'><strong>Microsoft Edge</strong>: Install <a href='https://microsoftedge.microsoft.com/addons/detail/singlefile/efnbkdcfmcmnhlkaijjjmhjjgladedno'>SingleFile</a> and enable the option "Allow access to file URLs" in the details page of the extension (edge://extensions/?id=efnbkdcfmcmnhlkaijjjmhjjgladedno).</li>`,n+='<li><strong>Safari</strong>: Select "Security > Disable Local File Restrictions" in the "Develop > Developer settings" menu.</li></ul></div>'),o.insertTextBody){let c=new uh().parseFromString(e.content,"text/html");c.body.querySelectorAll("style, script, noscript").forEach(m=>m.remove());let d="";o.extractDataFromPage&&(d+=vh(e)+`

`),d+=c.body.innerText,c.body.querySelectorAll("single-file-note").forEach(m=>{let h=m.querySelector("template");if(h){let u=new uh().parseFromString(h.innerHTML,"text/html");d+=`
`+u.body.querySelector("textarea").value}}),d=d.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n +/g,`
`).replace(/\n\n\n+/g,`

`).trim(),n+=`
<main hidden>
`+d+`
</main>
`}let i={insertEmbeddedImage:!!o.embeddedImage,insertEmbeddedScreenshotImage:!!o.embeddedScreenshotImage};a="<script>"+a+"document.currentScript.remove();globalThis.addEventListener('load', () => {globalThis.bootstrap=(()=>{let bootstrapStarted;return async content=>{if (bootstrapStarted) return bootstrapStarted; bootstrapStarted = ("+mh.toString().replace(/\n|\t/g,"")+")(content,{prompt}).then(({docContent}) => "+hh.toString().replace(/\n|\t/g,"")+"(document,docContent,"+JSON.stringify(i)+"));return bootstrapStarted;}})();("+ik.toString().replace(/\n|\t/g,"")+')().then(globalThis.bootstrap).then(() => document.dispatchEvent(new CustomEvent("single-file-display-infobar"))).catch(()=>{});});<\/script>',n+=a;let r="";if(o.extractDataFromPage&&o.extraDataSize){let c="<sfz-extra-data></sfz-extra-data>";r+=c+new Array(o.extraDataSize-c.length).fill(" ").join("")}n+=r;let s=o.extractDataFromPageTags?o.extractDataFromPageTags[0]:"<!--";n+=s;let l=s.length+r.length;return await Ye(t.writable,new Ma().encode(n)),l}function kh(e,t,a=""){let o="";t.includeBOM&&!t.extractDataFromPage&&!t.embeddedImage&&(o+="\uFEFF"),o+=t.embeddedImage?"":e.doctype,o+="<html data-sfz>",o+=e.comment&&!t.embeddedImage?"<!--"+e.comment+"-->":"";let n=t.extractDataFromPage?"windows-1252":"utf-8";o+="<meta charset="+n+">";let i=nk(e,t),r;if(t.embeddedPdf){let s=t.embeddedPdf.reduce((u,p)=>u+String.fromCharCode(p),""),l=bh.findIndex(u=>!s.match(u[1])),[c,d]=l==-1?["",""]:fh[l],m=new Ma().encode(o+c),h=new Ma().encode(d+i+a);r=new Uint8Array(m.length+h.length+t.embeddedPdf.length),r.set(m),r.set(t.embeddedPdf,m.length),r.set(h,m.length+t.embeddedPdf.length)}else r=new Ma().encode(o+i+a);return r}function nk(e,t){let a="",o=t.extractDataFromPage?"":vh(e);return a+="<title>"+o+"</title>",t.insertCanonicalLink&&(a+='<link rel=canonical href="'+t.url+'">'),t.insertMetaNoIndex&&(a+="<meta name=robots content=noindex>"),e.viewport&&(a+="<meta name=viewport content="+JSON.stringify(e.viewport)+">"),t.insertMetaCSP&&(a+=`<meta http-equiv=content-security-policy content=${JSON.stringify("default-src 'none';connect-src 'self' data: blob:;font-src 'self' data: blob:;img-src 'self' data: blob:;style-src 'self' 'unsafe-inline' data: blob:;frame-src 'self' data: blob:;media-src 'self' data: blob:;script-src 'self' 'unsafe-inline' data: blob:;object-src 'self' data: blob:")}>`),a+="<style>@keyframes display-wait-message{0%{opacity:0}100%{opacity:1}};body{color:transparent};div{color:initial}</style>",a+="<body hidden>",a}function vh(e){return e.title.replace(/</g,"&lt;").replace(/>/g,"&gt;")||""}function Sh(e,t,a,o,n=0){let i=wh[n];return e.match(i[0])||e.match(i[1])?n<Ns.length-1?Sh(e,t,a,o,n+1):(a.extractDataFromPage=!1,Da(t,a,o)):(a.extractDataFromPageTags=Ns[n],Da(t,a,o))}async function Ye(e,t){let a=e.getWriter();await a.ready,e.size+=t.length,await a.write(t),a.releaseLock()}async function Eh(e,t,a,o,n){let i={};for(let s of Object.keys(t.resources))for(let l of t.resources[s])l.password=a.password,l.url&&!l.url.startsWith("data:")&&(i[l.name]=l.url);let r=JSON.stringify({originalUrl:t.url,title:t.title,archiveTime:t.archiveTime,indexFilename:"index.html",resources:i},null,2);await Promise.all([Promise.all([_s(e,o,{name:"index.html",extension:".html",content:t.content,url:n,password:a.password}),_s(e,o,{name:"manifest.json",extension:".json",content:r,password:a.password})]),Promise.all(Object.keys(t.resources).map(async s=>Promise.all(t.resources[s].map(l=>s=="frames"?Eh(e,l,a,o+l.name,l.url):_s(e,o,l,!0)))))])}async function _s(e,t,a){let o=typeof a.content=="string"?new Mo(a.content):new da(new Ps([new Uint8Array(a.content)])),n={comment:a.url&&a.url.startsWith("data:")?"data:":a.url,password:a.password,bufferedWrite:!0};ek.includes(a.extension)&&(n.level=0),await e.add(t+a.name,o,n)}async function ik(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",{Blob:t,XMLHttpRequest:a,document:o,stop:n}=globalThis,i=new Map([[65533,0],[8364,128],[8218,130],[402,131],[8222,132],[8230,133],[8224,134],[8225,135],[710,136],[8240,137],[352,138],[8249,139],[338,140],[381,142],[8216,145],[8217,146],[8220,147],[8221,148],[8226,149],[8211,150],[8212,151],[732,152],[8482,153],[353,154],[8250,155],[339,156],[382,158],[376,159]]),r=new a;return o.body.querySelectorAll("meta, style").forEach(m=>o.head.appendChild(m)),r.responseType="blob",r.open("GET",""),new Promise((m,h)=>{r.onerror=()=>{l().then(m).catch(()=>{s("sfz-error-message",2),h()})},r.send(),r.onload=()=>{n(),s("sfz-wait-message",2),m(r.response)}});function s(m,h=0){let u=o.getElementById(m);u&&(Array.from(o.body.childNodes).forEach(p=>{p.id!=m&&p.remove()}),o.body.hidden=!1,u.style="opacity: 0; animation: 0s linear "+h+"s display-wait-message 1 normal forwards")}async function l(){let m=o.querySelector("sfz-extra-data");if(m){let h=m.nextSibling;h&&h.nodeType==Node.TEXT_NODE&&h.nextSibling?h=h.nextSibling:h=m.previousSibling;let u=[],{textContent:p}=h;s("sfz-wait-message",2);for(let A=0;A<p.length;A++){let y=p.charCodeAt(A);u.push(y>255?i.get(y):y)}let g=new Uint32Array(c(m.textContent).buffer),b=g[0],f=g.slice(1,1+b),S=g[1+b],k=g.slice(2+b,2+b+S);return f.forEach(A=>u.splice(A,1,13,10)),k.forEach(A=>u[A]=13),new t([new Uint8Array(u)],{type:"application/octet-stream"})}throw new Error("Extra zip data data not found")}function c(m){m=d(m);let h=new Uint8Array(1024),u=0;for(let g=0;g<m.length;){let b=m[g++];if((b&128)===0){let f=b;p(u+f);for(let S=0;S<f&&g<m.length;S++)h[u++]=m[g++]}else{let f=(b&127)+3,S=m[g++]<<8|m[g++],k=u-S;p(u+f);for(let A=0;A<f;A++)h[u++]=h[k+A]}}return new Uint8Array(h.buffer.slice(0,u));function p(g){if(h.length<g){let b=h.length*2;for(;b<g;)b*=2;let f=new Uint8Array(b);f.set(h.subarray(0,u)),h=f}}}function d(m){m=String(m).replace(/[^A-Za-z0-9+/=]/g,"");let h=m.length,u=[];for(let p=0;p<h;p+=4){let g=e.indexOf(m[p]),b=e.indexOf(m[p+1]),f=e.indexOf(m[p+2]),S=e.indexOf(m[p+3]),k=g<<18|b<<12|(f&63)<<6|S&63;u.push(k>>16&255),m[p+2]!=="="&&u.push(k>>8&255),m[p+3]!=="="&&u.push(k&255)}return new Uint8Array(u)}}var Pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function rk(e){let t="",a=e.length,o=0;for(;o+2<a;o+=3){let i=e[o]<<16|e[o+1]<<8|e[o+2];t+=Pt[i>>18&63]+Pt[i>>12&63]+Pt[i>>6&63]+Pt[i&63]}let n=a-o;if(n===1){let i=e[o]<<16;t+=Pt[i>>18&63]+Pt[i>>12&63]+"=="}else if(n===2){let i=e[o]<<16|e[o+1]<<8;t+=Pt[i>>18&63]+Pt[i>>12&63]+Pt[i>>6&63]+"="}return t}function sk(e){let t=new Uint8Array(e),a=t.length,o=[],n=[],i=65535,r=130,s=64,l=new Map,c=0;for(;c<a;){let u=0,p=0;if(c+2<a){let g=t[c]<<16|t[c+1]<<8|t[c+2],b=l.get(g)||[];for(let f=b.length-1;f>=0;f--){let S=b[f],k=c-S;if(k<=0||k>i)continue;let A=0;for(;A<r&&c+A<a&&t[S+A]===t[c+A];)A++;if(A>u&&A>=3&&(u=A,p=k,u===r))break}}if(u>=3){n.length&&m();let g=u,b=0;for(;g>0;){let S=Math.min(g,r);o.push(128|S-3&127),o.push(p>>8&255),o.push(p&255),g-=S,b+=S}let f=c;for(let S=f;S<f+b;S++)h(S);c+=b}else n.push(t[c]),h(c),c++,n.length===127&&m()}n.length&&m();let d=new Uint8Array(o);return rk(d);function m(){for(;n.length;){let u=Math.min(127,n.length);o.push(u);for(let p=0;p<u;p++)o.push(n.shift())}}function h(u){if(u+2<a){let p=t[u]<<16|t[u+1]<<8|t[u+2],g=l.get(p)||[];g.push(u),g.length>s&&g.shift(),l.set(p,g)}}}var on={};de(on,{TIMEOUT_INIT_REQUEST_MESSAGE:()=>Uh,cleanup:()=>hv,getAsync:()=>dv,getSync:()=>mv,initResponse:()=>rl});var ga={};de(ga,{process:()=>tl,resetZoomLevel:()=>tv});var Vo={};de(Vo,{IMAGE_LOADED_EVENT:()=>ti,LOAD_IMAGE_EVENT:()=>ei,getFontsData:()=>Os,getWorkletsData:()=>Fs,loadDeferredImagesEnd:()=>Us,loadDeferredImagesResetZoomLevel:()=>Hs,loadDeferredImagesStart:()=>Bs});var lk="single-file-load-deferred-images-start",ck="single-file-load-deferred-images-end",dk="single-file-load-deferred-images-keep-zoom-level-start",mk="single-file-load-deferred-images-keep-zoom-level-end",hk="single-file-load-deferred-images-keep-zoom-level-reset",uk="single-file-load-deferred-images-reset",pk="single-file-block-cookies-start",gk="single-file-block-cookies-end",fk="single-file-dispatch-scroll-event-start",wk="single-file-dispatch-scroll-event-end",bk="single-file-block-storage-start",yk="single-file-block-storage-end",ei="single-file-load-image",ti="single-file-image-loaded",kk="single-file-new-font-face",vk="single-file-delete-font",Sk="single-file-clear-fonts",Ek="single-file-new-worklet",Ms="_singleFile_fontFaces",Ds="_singleFile_worklets",nt=globalThis.CustomEvent,Ce=globalThis.document,xk=globalThis.Document,xh=globalThis.JSON,Ak=globalThis.MutationObserver,Oa,Qn;globalThis.window[Ms]?Oa=globalThis.window[Ms]:Oa=globalThis.window[Ms]=new Map;globalThis.window[Ds]?Qn=globalThis.window[Ds]:Qn=globalThis.window[Ds]=new Map;Ah();new Ak(Ah).observe(Ce,{childList:!0});function Ah(){Ce instanceof xk&&(Ce.addEventListener(kk,e=>{let t=e.detail,a=Object.assign({},t);delete a.src,Oa.set(xh.stringify(a),t)}),Ce.addEventListener(vk,e=>{let t=e.detail,a=Object.assign({},t);delete a.src,Oa.delete(xh.stringify(a))}),Ce.addEventListener(Sk,()=>Oa=new Map),Ce.addEventListener(Ek,e=>{let t=e.detail;Qn.set(t.moduleURL,t)}))}function Os(){return Array.from(Oa.values())}function Fs(){return Array.from(Qn.values())}function Bs(e){e.loadDeferredImagesBlockCookies&&Ce.dispatchEvent(new nt(pk)),e.loadDeferredImagesBlockStorage&&Ce.dispatchEvent(new nt(bk)),e.loadDeferredImagesDispatchScrollEvent&&Ce.dispatchEvent(new nt(fk)),e.loadDeferredImagesKeepZoomLevel?Ce.dispatchEvent(new nt(dk)):Ce.dispatchEvent(new nt(lk))}function Us(e){e.loadDeferredImagesBlockCookies&&Ce.dispatchEvent(new nt(gk)),e.loadDeferredImagesBlockStorage&&Ce.dispatchEvent(new nt(yk)),e.loadDeferredImagesDispatchScrollEvent&&Ce.dispatchEvent(new nt(wk)),e.loadDeferredImagesKeepZoomLevel?Ce.dispatchEvent(new nt(mk)):Ce.dispatchEvent(new nt(ck))}function Hs(e){e.loadDeferredImagesKeepZoomLevel?Ce.dispatchEvent(new nt(hk)):Ce.dispatchEvent(new nt(uk))}var wi={};de(wi,{ASYNC_SCRIPT_ATTRIBUTE_NAME:()=>li,CANVAS_ATTRIBUTE_NAME:()=>Ka,COMMENT_HEADER:()=>oi,COMMENT_HEADER_LEGACY:()=>$s,EMPTY_RESOURCE:()=>Ja,HIDDEN_CONTENT_ATTRIBUTE_NAME:()=>Ba,HIDDEN_FRAME_ATTRIBUTE_NAME:()=>Ua,IMAGE_ATTRIBUTE_NAME:()=>Ga,INFOBAR_TAGNAME:()=>ci,INPUT_CHECKED_ATTRIBUTE_NAME:()=>Ya,INPUT_VALUE_ATTRIBUTE_NAME:()=>$t,INVALID_ELEMENT_ATTRIBUTE_NAME:()=>Xs,LAZY_SRC_ATTRIBUTE_NAME:()=>Yo,MESSAGE_PREFIX:()=>ua,NESTING_TRACK_ID_ATTRIBUTE_NAME:()=>it,NO_SCRIPT_PROPERTY_NAME:()=>ni,ON_AFTER_CAPTURE_EVENT_NAME:()=>$o,ON_BEFORE_CAPTURE_EVENT_NAME:()=>Xo,POSTER_ATTRIBUTE_NAME:()=>Va,PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME:()=>Ha,REMOVED_CONTENT_ATTRIBUTE_NAME:()=>Fa,SELECTED_CONTENT_ATTRIBUTE_NAME:()=>Ys,SHADOW_ROOT_ATTRIBUTE_NAME:()=>qa,SINGLE_FILE_UI_ELEMENT_CLASS:()=>$a,STYLESHEET_ATTRIBUTE_NAME:()=>Xa,STYLE_ATTRIBUTE_NAME:()=>Zo,VIDEO_ATTRIBUTE_NAME:()=>Wa,WAIT_FOR_USERSCRIPT_PROPERTY_NAME:()=>ha,WIN_ID_ATTRIBUTE_NAME:()=>Jo,appendInfobar:()=>Js,digest:()=>Jt,fixInvalidNesting:()=>ui,flatten:()=>eo,getContentSize:()=>tn,getFontWeight:()=>Qa,getShadowRoot:()=>pi,getValidFilename:()=>an,initDoc:()=>mi,initUserScriptHandler:()=>di,markInvalidNesting:()=>hi,normalizeFontFamily:()=>pa,parseDocContent:()=>fi,postProcessDoc:()=>en,preProcessDoc:()=>Qo,removeQuotes:()=>Za,serialize:()=>gi});var ai={};de(ai,{process:()=>Wo});var jh="[\\x20\\t\\r\\n\\f]",jk=new RegExp("\\\\([\\da-f]{1,6}"+jh+"?|("+jh+")|.)","ig");function Wo(e){return e.replace(jk,(t,a,o)=>{let n="0x"+a-65536;return n!==n||o?a:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320)})}var ne="single-file-",oi="Page saved with SingleFile",qs="SingleFile",ha="_singleFile_waitForUserScript",ua="__frameTree__::",ni="singleFileDisabledNoscript";var ii="single-file-infobar",Ck=`
.infobar,
.infobar .infobar-icon,
.infobar .infobar-link-icon {
  min-inline-size: 28px;
  min-block-size: 28px;
  box-sizing: border-box;
}

.infobar,
.infobar .infobar-close-icon,
.infobar .infobar-link-icon {
  opacity: 0.7;
  transition: opacity 250ms;
}

.infobar:hover,
.infobar .infobar-close-icon:hover,
.infobar .infobar-link-icon:hover {
  opacity: 1;
}

.infobar,
.infobar-content {
  display: flex;
}

.infobar {
  position: fixed;
  max-height: calc(100% - 32px);
  top: 16px;
  right: 16px;
  margin-inline-start: 16px;
  margin-block-end: 16px;
  color: #2d2d2d;
  background-color: #737373;
  border: 2px solid;
  border-color: #eee;
  border-radius: 16px;
  z-index: 2147483647;
  animation-name: flash;
  animation-duration: .5s;
  animation-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
  animation-delay: 1s;
  animation-iteration-count: 2;
}

.infobar:valid, .infobar:not(:focus-within):not(.infobar-focus) .infobar-content {
  display: none;
}

.infobar:focus-within, .infobar.infobar-focus {
  background-color: #f9f9f9;
  border-color: #878787;
  border-radius: 8px;
  opacity: 1;
  transition-property: opacity, background-color, border-color, border-radius, color;
}

.infobar-content {
  border: 2px solid;
  border-color: #f9f9f9;
  border-radius: 6px;
  background-color: #f9f9f9;
  overflow: auto;
}

.infobar-content span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 18px;
  word-break: break-word;
  white-space: pre-wrap;
  margin-inline: 4px;
  margin-block: 4px;
}

.infobar .infobar-icon,
.infobar .infobar-close-icon,
.infobar .infobar-link-icon {
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
}

.infobar .infobar-close-icon,
.infobar .infobar-link-icon {
  align-self: flex-start;
}

.infobar .infobar-icon {
  position: absolute;
  min-inline-size: 24px;
  min-block-size: 24px;
}

@keyframes flash {
  0%, 100% {
	background-color: #737373;
  }
  50% {
	background-color: #dd6a00;
  }
}

.infobar:focus-within .infobar-icon, .infobar.infobar-focus .infobar-icon {
  z-index: -1;
  background-image: none;
  margin: 4px;
}

.infobar .infobar-close-icon {
  min-inline-size: 22px;
  min-block-size: 22px;
}

.infobar .infobar-icon {
  background-color: transparent;
  background-size: 70%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHADIRLMaOHwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAPUExURQAAAIqKioyNjY2OjvDw8L2y1DEAAAABdFJOUwBA5thmAAAAAWJLR0QB/wIt3gAAAGNJREFUSMdjYCAJsLi4OBCQx6/CBQwIGIDPCBcXAkYQUsACU+AwlBVQHg6Eg5pgZBGOboIJZugDFwRwoJECJCUOhJI1wZwzqmBUwagCuipgIqTABG9h7YIKaKGAURAFEF/6AQAO4HqSoDP8bgAAAABJRU5ErkJggg==);
}

.infobar .infobar-link-icon {
  right: 4px;
  background-size: 60%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8H+DhhoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJJJREFUOI3t070NRCEMA2CnYAOyDyPwpHj/Va7hJ3FzV7zy3ET5JIwoAF6Jk4wzAJAkzxAYG9YRTgB+24wBgKmfrGAKTcEfAY4KRlRoIeBTgKOCERVaCPgU4Khge2GqKOBTgKOCERVaAEC/4PNcnyoSWHpjqkhwKxbcig0Q6AorXYF/+A6eIYD1lVbwG/jdA6/kA2THRAURVubcAAAAAElFTkSuQmCC);
}

.infobar .infobar-close-icon {
  appearance: none;
  background-size: 80%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8VC4EQ6QAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJtJREFUOI3NkrsBgCAMRLFwBPdxBArcfxXFkO8rbKWAAJfHJ9faf9vuYX/749T5NmShm3bEwbe2SxeuM4+2oxDL1cDoKtVUjRy+tH78Cv2CS+wIiQNC1AEhk4AQeUTMWUJMfUJMSEJMSEY8kIx4IONroaYAimNxsXp1PA7PxwfVL8QnowwoVC0lig07wDDVUjAdbAnjwtow/z/bDW7eI4M2KruJAAAAAElFTkSuQmCC);
}
`;function Ch(e,t,a){if(!e.querySelector(ii)){let o;t.infobarContent?o=t.infobarContent.replace(/\\n/g,`
`).replace(/\\t/g,"	"):t.saveDate&&(o=t.saveDate),o=o||"No info";let n=e.body.tagName=="BODY"?e.body:e.documentElement,i=Lk(e,ii,n),r;if(a)r=i.attachShadow({mode:"open"});else{let g=e.createElement("template");g.setAttribute("shadowrootmode","open"),i.appendChild(g),r=g}let s=e.createElement("div"),l=e.createElement("style");l.textContent=Ck,t.infobarPositionAbsolute&&(l.textContent+=".infobar { position: absolute; }",getComputedStyle(n).position=="static"&&n.style.setProperty("position","relative","important")),t.infobarPositionTop?l.textContent+=`.infobar { top: ${t.infobarPositionTop}; bottom: auto; }`:t.infobarPositionBottom&&(l.textContent+=`.infobar { bottom: ${t.infobarPositionBottom}; top: auto; }`),t.infobarPositionRight?l.textContent+=`.infobar { right: ${t.infobarPositionRight}; left: auto; }`:t.infobarPositionLeft&&(l.textContent+=`.infobar { left: ${t.infobarPositionLeft}; right: auto; }`),l.textContent=l.textContent.replace(/ {2}/g,"").replace(/\n/g,"").replace(/: /g,":").replace(/, /g,","),s.appendChild(l);let c=e.createElement("form");c.classList.add("infobar"),t.openInfobar&&c.classList.add("infobar-focus"),s.appendChild(c);let d=e.createElement("span");d.tabIndex=-1,d.classList.add("infobar-icon"),c.appendChild(d);let m=e.createElement("span");m.tabIndex=-1,m.classList.add("infobar-content");let h=e.createElement("input");h.type="checkbox",h.required=!0,h.classList.add("infobar-close-icon"),h.title="Close",m.appendChild(h);let u=e.createElement("span");u.textContent=o,m.appendChild(u);let p=e.createElement("a");if(p.classList.add("infobar-link-icon"),p.target="_blank",p.rel="noopener noreferrer",p.title="Open source URL: "+t.saveUrl,p.href=t.saveUrl,m.appendChild(p),c.appendChild(m),a)r.appendChild(s);else{let g=e.createElement("script"),b=Lh.toString()+";";b+=Th.toString()+";",b+="("+Tk.toString()+")(document, "+JSON.stringify(qs)+");",g.textContent=b,s.appendChild(g),r.innerHTML=s.outerHTML}}}function Th(e,t=qs){let a=e.evaluate("//comment()",e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null),o=a&&a.singleNodeValue;if(o&&o.nodeType==Node.COMMENT_NODE&&o.textContent.includes(t)){let n=o.textContent.split(`
`),[,,i,...r]=n,s=i.match(/^ url: (.*) ?$/),l=s&&s[1];if(l){let c,d;if(r.length&&(d=r[0].split("saved date: ")[1],d&&r.shift(),r.length>1)){let m=r[0].split("info: ")[1].trim();for(let h=1;h<r.length-1;h++)m+=`
`+r[h].trim();c=m.trim()}return{saveUrl:l,infobarContent:c,saveDate:d}}}}function Lh(e,{saveUrl:t,infobarContent:a,saveDate:o}){if(t){let i=e.querySelector("single-file-infobar").shadowRoot,r=i.querySelector(".infobar-content span");r.textContent=a||o;let s=i.querySelector(".infobar-content .infobar-link-icon");s.href=t,s.title="Open source URL: "+t}}function Tk(e,t){let a=Th(e,t);a&&a.saveUrl&&Lh(e,a)}function Lk(e,t,a){let o=e.createElement(t);return a.appendChild(o),Array.from(getComputedStyle(o)).forEach(n=>o.style.setProperty(n,"initial","important")),o}var Xo=ne+"on-before-capture",$o=ne+"on-after-capture",Rh=ne+"request-get-adopted-stylesheets",zh=ne+"response-get-adopted-stylesheets",zk=ne+"unregister-request-get-adopted-stylesheets",Ik=ne+"user-script-init",Fa="data-"+ne+"removed-content",Ba="data-"+ne+"hidden-content",Vs="data-"+ne+"kept-content",Ua="data-"+ne+"hidden-frame",Ha="data-"+ne+"preserved-space-element",qa="data-"+ne+"shadow-root-element",Jo="data-"+ne+"win-id",Ga="data-"+ne+"image",Va="data-"+ne+"poster",Wa="data-"+ne+"video",Ka="data-"+ne+"canvas",Zo="data-"+ne+"movable-style",$t="data-"+ne+"input-value",Ya="data-"+ne+"input-checked",Yo="data-"+ne+"lazy-loaded-src",Xa="data-"+ne+"stylesheet",Ko="data-"+ne+"disabled-noscript",Ys="data-"+ne+"selected-content",Xs="data-"+ne+"invalid-element",li="data-"+ne+"async-script",Gs="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",_k=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD","BODY"],Pk=["SCRIPT","NOSCRIPT","META","LINK","TEMPLATE"],Ih=/^'(.*?)'$/,Nk=/^"(.*?)"$/,Mk={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},$s="Archive processed by SingleFile",$a="single-file-ui-element",ci=ii,Ja="data:,",Dk=["~","+","?","%","*",":","|",'"',"<",">","\\\\","\0-","\x7F"],Ok="_",Fk=["\uFF5E","\uFF0B","\uFF1F","\uFF05","\uFF0A","\uFF1A","\uFF5C","\uFF02","\uFF1C","\uFF1E","\uFF3C"],it="data-sf-nesting-track-id",_h=(e,t,a)=>globalThis.addEventListener(e,t,a),Bk=e=>{try{globalThis.dispatchEvent(e)}catch{}},Ws=globalThis.JSON,Uk=globalThis.crypto,Hk=globalThis.TextEncoder,qk=globalThis.Blob,si=globalThis.CustomEvent,Gk=globalThis.MutationObserver,Ph=globalThis.URL,Vk=globalThis.DOMParser;function di(){_h(Ik,({detail:e})=>globalThis[ha]=async(t,a)=>{let o=Object.assign({},a);delete o.win,delete o.doc,delete o.onprogress,delete o.frames,delete o.taskId,delete o._migratedTemplateFormat,delete o.woleetKey;let n;try{n=e=="jsonDetail"?Ws.stringify({options:o}):{options:o}}catch{}let i=new si(t+"-request",{cancelable:!0,detail:n}),r,s=new Promise(l=>{r=l,_h(t+"-response",c=>{if(c.detail)try{let d=typeof c.detail=="string"?Ws.parse(c.detail):c.detail;d.options&&Object.assign(a,d.options)}catch{}l()})});Bk(i),i.defaultPrevented?await s:r()}),new Gk(di).observe(globalThis.document,{childList:!0})}function mi(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach(t=>{t.removeAttribute("http-equiv"),t.setAttribute("disabled-http-equiv","refresh")})}function Qo(e,t,a){e.querySelectorAll("noscript:not(["+Ko+"])").forEach(r=>{r.setAttribute(Ko,r.textContent),r.textContent=""}),mi(e),e.head&&e.head.querySelectorAll(Gs).forEach(r=>r.hidden=!0),e.querySelectorAll("svg foreignObject").forEach(r=>{let s=r.querySelectorAll("html > head > "+Gs+", html > body > "+Gs);s.length&&(Array.from(r.childNodes).forEach(l=>l.remove()),s.forEach(l=>r.appendChild(l)))});let o=new Map,n;t&&e.documentElement?(hi(e),n=Ks(t,e,e.documentElement,a),a.moveStylesInHead&&e.querySelectorAll("body style, body ~ style").forEach(r=>{let s=Xt(t,r);s&&Mh(r,s)&&(r.setAttribute(Zo,""),n.markedElements.push(r))})):n={canvases:[],images:[],posters:[],videos:[],usedFonts:[],shadowRoots:[],markedElements:[]};let i="";if(e.referrer)try{i=new Ph("/",new Ph(e.referrer).origin).href}catch{}return{canvases:n.canvases,fonts:Xk(),worklets:$k(),stylesheets:Kk(e),images:n.images,posters:n.posters,videos:n.videos,usedFonts:Array.from(n.usedFonts.values()),shadowRoots:n.shadowRoots,referrer:i,markedElements:n.markedElements,invalidElements:o,scrollPosition:{x:t.scrollX,y:t.scrollY},adoptedStyleSheets:Nh(e.adoptedStyleSheets)}}function hi(e){i(e.body);let t=fi(gi(e)),a=r(e.body),o=r(t.body),n=new Set;Object.keys(a).forEach(l=>{if(l in o){let c=a[l].parentElement?.getAttribute(it)||null,d=o[l]?.parentElement?.getAttribute(it)||null;if(c!==d){let m=a[l];for(;m&&m!==e.body;){let h=m.getAttribute(it);h&&n.add(h),m=m.parentElement}}}}),s(e.body,n);function i(l,c=0,d=""){let m=d?`${d}.${c+1}`:`${c+1}`;l.setAttribute(it,m),Array.from(l.children).forEach((h,u)=>i(h,u,m))}function r(l){let c={};return d(l),c;function d(m){if(m.getAttribute){let h=m.getAttribute(it);h&&(c[h]=m),Array.from(m.children).forEach(d)}}}function s(l,c){let d=l.getAttribute(it);d&&!c.has(d)&&l.removeAttribute(it),Array.from(l.children).forEach(m=>s(m,c))}}function ui(e,t,a=!1){let o={};e.currentScript&&e.currentScript.remove(),n(e.body),Object.keys(o).forEach(i=>{let r=o[i],s=i.split(".");if(s.length>1){let l=s.slice(0,-1).join("."),c=o[l];c&&r.parentElement!==c&&c.appendChild(r)}}),a||e.querySelectorAll("["+t+"]").forEach(i=>i.removeAttribute(t));function n(i){let r=i.getAttribute(t);r&&(o[r]=i),Array.from(i.children).forEach(n)}}function Ks(e,t,a,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],videos:[],shadowRoots:[],markedElements:[]},i=new Map,r){return a.childNodes&&Array.from(a.childNodes).filter(l=>l instanceof e.HTMLElement||l instanceof e.SVGElement||l instanceof globalThis.HTMLElement||l instanceof globalThis.SVGElement).forEach(l=>{let c,d,m;if(!o.autoSaveExternalSave&&(o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(m=Xt(e,l),(l instanceof e.HTMLElement||l instanceof globalThis.HTMLElement)&&o.removeHiddenElements&&(d=(r||l.closest("html > head"))&&_k.includes(l.tagName.toUpperCase())||l.closest("details"),d||(c=r||Mh(l,m),c&&!Pk.includes(l.tagName.toUpperCase())&&(l.setAttribute(Ba,""),n.markedElements.push(l)))),!c)){if(o.compressHTML&&m){let u=m.getPropertyValue("white-space");u&&u.startsWith("pre")&&(l.setAttribute(Ha,""),n.markedElements.push(l))}o.removeUnusedFonts&&(ri(m,o,n.usedFonts),ri(Xt(e,l,":first-letter"),o,n.usedFonts),ri(Xt(e,l,":before"),o,n.usedFonts),ri(Xt(e,l,":after"),o,n.usedFonts))}Wk(e,t,l,o,n,c,m);let h=!(l instanceof e.SVGElement||l instanceof globalThis.SVGElement)&&pi(l);if(h&&!l.classList.contains($a)&&l.tagName.toLowerCase()!=ci){let u={};l.setAttribute(qa,n.shadowRoots.length),n.markedElements.push(l),n.shadowRoots.push(u);try{if(h.adoptedStyleSheets){if(h.adoptedStyleSheets.length)u.adoptedStyleSheets=Nh(h.adoptedStyleSheets,i);else if(h.adoptedStyleSheets.length===void 0){let p=g=>u.adoptedStyleSheets=g.detail.adoptedStyleSheets;h.addEventListener(zh,p),h.dispatchEvent(new si(Rh,{bubbles:!0})),u.adoptedStyleSheets||l.dispatchEvent(new si(Rh,{bubbles:!0})),h.removeEventListener(zh,p)}}}catch{}Ks(e,t,h,o,n,i,c),u.content=h.innerHTML,u.mode=h.mode,u.delegateFocus=h.delegatesFocus,u.clonable=h.clonable,u.serializable=h.serializable;try{h.adoptedStyleSheets&&h.adoptedStyleSheets.length===void 0&&h.dispatchEvent(new si(zk,{bubbles:!0}))}catch{}}Ks(e,t,l,o,n,i,c),!o.autoSaveExternalSave&&o.removeHiddenElements&&r&&(d||l.getAttribute(Vs)==""?l.parentElement&&(l.parentElement.setAttribute(Vs,""),n.markedElements.push(l.parentElement)):c&&(l.setAttribute(Fa,""),n.markedElements.push(l)))}),n}function Nh(e,t=new Map){if(e){let a=[];for(let o of Array.from(e))if(t.has(o))a.push(t.get(o));else{let n="";if(o&&o.cssRules)for(let i of o.cssRules)n+=i.cssText+`
`;t.set(o,n),a.push(n)}return a}else return[]}function Wk(e,t,a,o,n,i,r){let s=a.tagName&&a.tagName.toUpperCase();if(s=="CANVAS")try{n.canvases.push({dataURI:a.toDataURL("image/png",""),backgroundColor:r.getPropertyValue("background-color")}),a.setAttribute(Ka,n.canvases.length-1),n.markedElements.push(a)}catch{}if(s=="IMG"){let l={currentSrc:i?Ja:o.loadDeferredImages&&a.getAttribute(Yo)||a.currentSrc};if(n.images.push(l),a.setAttribute(Ga,n.images.length-1),n.markedElements.push(a),a.removeAttribute(Yo),r=r||Xt(e,a),r){l.size=Yk(e,a,r);let c=r.getPropertyValue("box-shadow"),d=r.getPropertyValue("background-image");(!c||c=="none")&&(!d||d=="none")&&(l.size.pxWidth>1||l.size.pxHeight>1)&&(l.replaceable=!0,l.backgroundColor=r.getPropertyValue("background-color"),l.objectFit=r.getPropertyValue("object-fit"),l.boxSizing=r.getPropertyValue("box-sizing"),l.objectPosition=r.getPropertyValue("object-position"))}}if(s=="VIDEO"){let l=a.currentSrc;if(l&&!l.startsWith("blob:")&&!l.startsWith("data:")){let c=Xt(e,a.parentNode);n.videos.push({positionParent:c&&c.getPropertyValue("position"),src:l,size:{pxWidth:a.clientWidth,pxHeight:a.clientHeight,videoWidth:a.videoWidth,videoHeight:a.videoHeight},currentTime:a.currentTime}),a.setAttribute(Wa,n.videos.length-1)}if(!a.getAttribute("poster")){let c=t.createElement("canvas"),d=c.getContext("2d");c.width=a.videoWidth,c.height=a.videoHeight;try{d.drawImage(a,0,0,c.width,c.height),n.posters.push(c.toDataURL("image/png","")),a.setAttribute(Va,n.posters.length-1),n.markedElements.push(a)}catch{}}}s=="IFRAME"&&i&&o.removeHiddenElements&&(a.setAttribute(Ua,""),n.markedElements.push(a)),s=="INPUT"&&(a.type!="password"&&(a.setAttribute($t,a.value),n.markedElements.push(a)),(a.type=="radio"||a.type=="checkbox")&&(a.setAttribute(Ya,a.checked),n.markedElements.push(a))),s=="TEXTAREA"&&(a.setAttribute($t,a.value),n.markedElements.push(a)),s=="SELECT"&&a.querySelectorAll("option").forEach(l=>{l.selected&&(l.setAttribute($t,""),n.markedElements.push(l))}),s=="SCRIPT"&&(a.async&&a.getAttribute("async")!=""&&a.getAttribute("async")!="async"&&(a.setAttribute(li,""),n.markedElements.push(a)),a.textContent=a.textContent.replace(/<\/script>/gi,"<\\/script>"))}function ri(e,t,a){if(e){let o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach(n=>{if(n=pa(n),!t.loadedFonts||t.loadedFonts.find(i=>pa(i.family)==n&&i.style==o)){let i=Qa(e.getPropertyValue("font-weight")),r=e.getPropertyValue("font-variant")||"normal",s=[n,i,o,r];a.set(Ws.stringify(s),[n,i,o,r])}})}}function pi(e){let t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(t&&t.dom&&t.dom.openOrClosedShadowRoot)try{return t.dom.openOrClosedShadowRoot(e)}catch{return e.shadowRoot}else return e.shadowRoot}function Js(e,t,a){return Ch(e,t,a)}function pa(e=""){return Za(Wo(e.trim())).toLowerCase()}function Mh(e,t){let a=!1;if(t){let o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(a=o=="none",!a&&(n=="0"||i=="hidden")&&e.getBoundingClientRect){let r=e.getBoundingClientRect();a=!r.width&&!r.height}}return!!a}function en(e,t,a){if(e.querySelectorAll("["+Ko+"]").forEach(o=>{o.textContent=o.getAttribute(Ko),o.removeAttribute(Ko)}),e.querySelectorAll("meta[disabled-http-equiv]").forEach(o=>{o.setAttribute("http-equiv",o.getAttribute("disabled-http-equiv")),o.removeAttribute("disabled-http-equiv")}),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach(o=>o.removeAttribute("hidden")),!t){let o=[Fa,Ua,Ba,Ha,Ga,Va,Wa,Ka,$t,Ya,qa,Xa,li];t=e.querySelectorAll(o.map(n=>"["+n+"]").join(","))}t.forEach(o=>{o.removeAttribute(Fa),o.removeAttribute(Ba),o.removeAttribute(Vs),o.removeAttribute(Ua),o.removeAttribute(Ha),o.removeAttribute(Ga),o.removeAttribute(Va),o.removeAttribute(Wa),o.removeAttribute(Ka),o.removeAttribute($t),o.removeAttribute(Ya),o.removeAttribute(qa),o.removeAttribute(Xa),o.removeAttribute(li),o.removeAttribute(Zo)}),a&&a.forEach((o,n)=>o.replaceWith(n))}function Kk(e){if(e){let t=[];return e.querySelectorAll("style").forEach((a,o)=>{try{if(!a.sheet.disabled){let n=e.createElement("style");n.textContent=a.textContent,e.body.appendChild(n);let i=n.sheet;n.remove();let r=Array.from(i.cssRules).map(l=>l.cssText).join(`
`),s=Array.from(a.sheet.cssRules).map(l=>l.cssText).join(`
`);(!i||r!=s)&&(a.setAttribute(Xa,o),t[o]=Array.from(a.sheet.cssRules).map(l=>l.cssText).join(`
`))}}catch{}}),t}}function Yk(e,t,a){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i=t.getAttribute("style")==null;if(a=a||Xt(e,t),a){let r=!1;if(a.getPropertyValue("box-sizing")=="content-box"){let g=t.style.getPropertyValue("box-sizing"),b=t.style.getPropertyPriority("box-sizing"),f=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),r=t.clientWidth!=f,g?t.style.setProperty("box-sizing",g,b):t.style.removeProperty("box-sizing")}let s,l,c,d,m,h,u,p;s=Yt("padding-left",a),l=Yt("padding-right",a),c=Yt("padding-top",a),d=Yt("padding-bottom",a),r?(m=Yt("border-left-width",a),h=Yt("border-right-width",a),u=Yt("border-top-width",a),p=Yt("border-bottom-width",a)):m=h=u=p=0,o=Math.max(0,t.clientWidth-s-l-m-h),n=Math.max(0,t.clientHeight-c-d-u-p),i&&t.removeAttribute("style")}}return{pxWidth:o,pxHeight:n}}function Yt(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function Xk(){return Os()}function $k(){return Fs()}function gi(e){let t=e.doctype,a="";return t&&(a="<!DOCTYPE "+t.nodeName,t.publicId?(a+=' PUBLIC "'+t.publicId+'"',t.systemId&&(a+=' "'+t.systemId+'"')):t.systemId&&(a+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(a+=" ["+t.internalSubset+"]"),a+="> "),a+e.documentElement.outerHTML}function Za(e){return e.match(Ih)?e=e.replace(Ih,"$1"):e=e.replace(Nk,"$1"),e.trim()}function Qa(e){return Mk[e.toLowerCase().trim()]||e}function tn(e){return new qk([e]).size}async function Jt(e,t){try{let a=await Uk.subtle.digest(e,new Hk("utf-8").encode(t));return Jk(a)}catch{return""}}function Jk(e){let t=[],a=new DataView(e);for(let o=0;o<a.byteLength;o+=4){let i=a.getUint32(o).toString(16),r="00000000",s=(r+i).slice(-r.length);t.push(s)}return t.join("")}function eo(e){return e.flat?e.flat():e.reduce((t,a)=>t.concat(Array.isArray(a)?eo(a):a),[])}function Xt(e,t,a){try{return e.getComputedStyle(t,a)}catch{}}function an(e,t=Dk,a=Ok,o=Fk){return o.forEach((n,i)=>e=e.replace(new RegExp("["+t[i]+"]+","g"),o[i])),t.forEach(n=>e=e.replace(new RegExp("["+n+"]+","g"),a)),e=e.replace(/\.\.\//g,"").replace(/^\/+/,"").replace(/\/+/g,"/").replace(/\/$/,"").replace(/\.$/,"").replace(/\.\//g,"."+a).replace(/\/\./g,"/"+a),e}function fi(e,t){let a=new Vk().parseFromString(e,"text/html");a.head||a.documentElement.insertBefore(a.createElement("HEAD"),a.body);let o=a.querySelector("base");return(!o||!o.getAttribute("href"))&&(o&&o.remove(),o=a.createElement("base"),o.setAttribute("href",t),a.head.insertBefore(o,a.head.firstChild)),a}var Zs={LAZY_SRC_ATTRIBUTE_NAME:Yo,SINGLE_FILE_UI_ELEMENT_CLASS:$a},Zk=10,Qk="attributes",Xe=globalThis.browser,Ge=globalThis.document,ev=globalThis.MutationObserver,xt=new Map,Qs;Xe&&Xe.runtime&&Xe.runtime.onMessage&&Xe.runtime.onMessage.addListener&&Xe.runtime.onMessage.addListener(e=>{if(e.method=="singlefile.lazyTimeout.onTimeout"){let t=xt.get(e.type);if(t){xt.delete(e.type);try{t.callback()}catch{el(e.type)}}}});async function tl(e){if(Ge.documentElement){xt.clear();let t=Ge.body?Math.max(Ge.body.scrollHeight,Ge.documentElement.scrollHeight):Ge.documentElement.scrollHeight,a=Ge.body?Math.max(Ge.body.scrollWidth,Ge.documentElement.scrollWidth):Ge.documentElement.scrollWidth;if(t>globalThis.innerHeight||a>globalThis.innerWidth){let o=Math.max(t-globalThis.innerHeight*1.5,0),n=Math.max(a-globalThis.innerWidth*1.5,0);if(globalThis.scrollY<o||globalThis.scrollX<n)return av(e)}}}function tv(e){Hs(e)}function av(e){return Qs=0,new Promise(async t=>{let a,o=new Set,n=new ev(async d=>{d=d.filter(m=>m.type==Qk),d.length&&d.filter(h=>{if(h.attributeName=="src"&&(h.target.setAttribute(Zs.LAZY_SRC_ATTRIBUTE_NAME,h.target.src),h.target.addEventListener("load",r)),h.attributeName=="src"||h.attributeName=="srcset"||h.target.tagName&&h.target.tagName.toUpperCase()=="SOURCE")return!h.target.classList||!h.target.classList.contains(Zs.SINGLE_FILE_UI_ELEMENT_CLASS)}).length&&(a=!0,await yi(n,e,c),o.size||await bi(n,e,c))});await i(e.loadDeferredImagesMaxIdleTime*2),await yi(n,e,c),n.observe(Ge,{subtree:!0,childList:!0,attributes:!0}),Ge.addEventListener(ei,s),Ge.addEventListener(ti,l),Bs(e);async function i(d){await ki("idleTimeout",async()=>{a?Qs<Zk&&(Qs++,to("idleTimeout"),await i(Math.max(500,d/2))):(to("loadTimeout"),to("maxTimeout"),al(n,e,c))},d,e.loadDeferredImagesNativeTimeout)}function r(d){let m=d.target;m.removeAttribute(Zs.LAZY_SRC_ATTRIBUTE_NAME),m.removeEventListener("load",r)}async function s(d){a=!0,await yi(n,e,c),await bi(n,e,c),d.detail&&o.add(d.detail)}async function l(d){await yi(n,e,c),await bi(n,e,c),o.delete(d.detail),o.size||await bi(n,e,c)}function c(d){n.disconnect(),Ge.removeEventListener(ei,s),Ge.removeEventListener(ti,l),t(d)}})}async function bi(e,t,a){await ki("loadTimeout",()=>al(e,t,a),t.loadDeferredImagesMaxIdleTime,t.loadDeferredImagesNativeTimeout)}async function yi(e,t,a){await ki("maxTimeout",async()=>{await to("loadTimeout"),await al(e,t,a)},t.loadDeferredImagesMaxIdleTime*10,t.loadDeferredImagesNativeTimeout)}async function al(e,t,a){await to("idleTimeout"),Us(t),await ki("endTimeout",async()=>{await to("maxTimeout"),a()},t.loadDeferredImagesMaxIdleTime/2,t.loadDeferredImagesNativeTimeout),e.disconnect()}async function ki(e,t,a,o){if(Xe&&Xe.runtime&&Xe.runtime.sendMessage&&!o){if(!xt.get(e)||!xt.get(e).pending){let n={callback:t,pending:!0};xt.set(e,n);try{await Xe.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:a})}catch{Dh(e,t,a)}n.pending=!1}}else Dh(e,t,a)}function Dh(e,t,a){let o=xt.get(e);o&&globalThis.clearTimeout(o),xt.set(e,t),globalThis.setTimeout(t,a)}async function to(e){if(Xe&&Xe.runtime&&Xe.runtime.sendMessage)try{await Xe.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e})}catch{el(e)}else el(e)}function el(e){let t=xt.get(e);xt.delete(e),t&&globalThis.clearTimeout(t)}var ao={ON_BEFORE_CAPTURE_EVENT_NAME:Xo,ON_AFTER_CAPTURE_EVENT_NAME:$o,WIN_ID_ATTRIBUTE_NAME:Jo,WAIT_FOR_USERSCRIPT_PROPERTY_NAME:ha,preProcessDoc:Qo,serialize:gi,postProcessDoc:en,getShadowRoot:pi},ov='iframe, frame, object[type="text/html"][data]',nv="*",Fh="singlefile.frameTree.initRequest",ol="singlefile.frameTree.ackInitRequest",Bh="singlefile.frameTree.cleanupRequest",il="singlefile.frameTree.initResponse",Oh="*",Uh=5e3,iv=1e4,rv="0",fa=".",oo=globalThis.window==globalThis.top,Nt=globalThis.browser,nl=globalThis.top,sv=globalThis.MessageChannel,At=globalThis.document,wa=globalThis.JSON,lv=globalThis.MutationObserver,cv=globalThis.DOMParser,$e=globalThis.sessions;$e||($e=globalThis.sessions=new Map);var rt;oo&&(rt=rv,Nt&&Nt.runtime&&Nt.runtime.onMessage&&Nt.runtime.onMessage.addListener&&Nt.runtime.onMessage.addListener(e=>{if(e.method==il)return rl(e),Promise.resolve({});if(e.method==ol)return vi("requestTimeouts",e.sessionId,e.windowId),Wh(e.sessionId,e.windowId),Promise.resolve({})}));Hh();di();new lv(Hh).observe(At,{childList:!0});function Hh(){globalThis.addEventListener("message",async e=>{if(typeof e.data=="string"&&e.data.startsWith(ua)){e.preventDefault(),e.stopPropagation();let t=wa.parse(e.data.substring(ua.length));if(t.method==Fh)e.source&&Si(e.source,{method:ol,windowId:t.windowId,sessionId:t.sessionId}),oo||(globalThis.stop(),t.options.loadDeferredImages&&tl(t.options),await Gh(t));else if(t.method==ol)vi("requestTimeouts",t.sessionId,t.windowId),Wh(t.sessionId,t.windowId);else if(t.method==Bh)Vh(t);else if(t.method==il&&$e.get(t.sessionId)){let a=e.ports[0];a.onmessage=o=>rl(o.data)}}},!0)}function dv(e){let t=qh();return e=wa.parse(wa.stringify(e)),new Promise(a=>{$e.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:o=>{o.sessionId=t,a(o)}}),Gh({windowId:rt,sessionId:t,options:e})})}function mv(e){let t=qh();e=wa.parse(wa.stringify(e)),$e.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),uv({windowId:rt,sessionId:t,options:e});let a=$e.get(t).frames;return a.sessionId=t,a}function hv(e){$e.delete(e),Vh({windowId:rt,sessionId:e,options:{sessionId:e}})}function qh(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}function uv(e){let t=e.sessionId;delete globalThis._singleFile_cleaningUp,oo||(rt=globalThis.frameId=e.windowId),sl(At,e.options,rt,t),oo||(no({frames:[ll(At,globalThis,rt,e.options,e.scrolling)],sessionId:t,requestedFrameId:At.documentElement.dataset.requestedFrameId&&rt}),delete At.documentElement.dataset.requestedFrameId)}async function Gh(e){let t=e.sessionId;delete globalThis._singleFile_cleaningUp,oo||(rt=globalThis.frameId=e.windowId),sl(At,e.options,rt,t),oo||(no({frames:[ll(At,globalThis,rt,e.options,e.scrolling)],sessionId:t,requestedFrameId:At.documentElement.dataset.requestedFrameId&&rt}),delete At.documentElement.dataset.requestedFrameId)}function Vh(e){if(!globalThis._singleFile_cleaningUp){globalThis._singleFile_cleaningUp=!0;let t=e.sessionId;Kh(Ei(At),e.windowId,t)}}function rl(e){e.frames.forEach(a=>vi("responseTimeouts",e.sessionId,a.windowId));let t=$e.get(e.sessionId);t&&(e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach(o=>{let n=t.frames.find(i=>o.windowId==i.windowId);n||(n={windowId:o.windowId},t.frames.push(n)),n.processed||(n.content=o.content,n.baseURI=o.baseURI,n.title=o.title,n.url=o.url,n.canvases=o.canvases,n.fonts=o.fonts,n.worklets=o.worklets,n.stylesheets=o.stylesheets,n.images=o.images,n.posters=o.posters,n.videos=o.videos,n.usedFonts=o.usedFonts,n.shadowRoots=o.shadowRoots,n.processed=o.processed,n.scrollPosition=o.scrollPosition,n.scrolling=o.scrolling,n.adoptedStyleSheets=o.adoptedStyleSheets)}),t.frames.filter(o=>!o.processed).length||(t.frames=t.frames.sort((o,n)=>n.windowId.split(fa).length-o.windowId.split(fa).length),t.resolve&&(t.requestedFrameId&&t.frames.forEach(o=>{o.windowId==t.requestedFrameId&&(o.requestedFrame=!0)}),t.resolve(t.frames))))}function sl(e,t,a,o){let n=Ei(e);pv(e,n,t,a,o),n.length&&gv(e,n,t,a,o)}function pv(e,t,a,o,n){let i=[],r;$e.get(n)?r=$e.get(n).requestTimeouts:(r={},$e.set(n,{requestTimeouts:r})),t.forEach((s,l)=>{let c=o+fa+l;s.setAttribute(ao.WIN_ID_ATTRIBUTE_NAME,c),i.push({windowId:c})}),no({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach((s,l)=>{let c=o+fa+l;try{Si(s.contentWindow,{method:Fh,windowId:c,sessionId:n,options:a,scrolling:s.scrolling})}catch{}r[c]=globalThis.setTimeout(()=>no({frames:[{windowId:c,processed:!0}],sessionId:n}),Uh)}),delete e.documentElement.dataset.requestedFrameId}function gv(e,t,a,o,n){let i=[];t.forEach((r,s)=>{let l=o+fa+s,c,d;try{c=r.contentDocument,d=r.contentWindow,d.stop()}catch{}let m=r.getAttribute("srcdoc");if(!c&&m&&(c=new cv().parseFromString(m,"text/html"),d=globalThis),c)try{vi("requestTimeouts",n,l),sl(c,a,l,n),i.push(ll(c,d,l,a,r.scrolling))}catch{i.push({windowId:l,processed:!0})}}),no({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}function vi(e,t,a){let o=$e.get(t);if(o&&o[e]){let n=o[e][a];n&&(globalThis.clearTimeout(n),delete o[e][a])}}function Wh(e,t){let a=$e.get(e);a&&a.responseTimeouts&&(a.responseTimeouts[t]=globalThis.setTimeout(()=>no({frames:[{windowId:t,processed:!0}],sessionId:e}),iv))}function Kh(e,t,a){e.forEach((o,n)=>{let i=t+fa+n;o.removeAttribute(ao.WIN_ID_ATTRIBUTE_NAME);try{Si(o.contentWindow,{method:Bh,windowId:i,sessionId:a})}catch{}}),e.forEach((o,n)=>{let i=t+fa+n,r;try{r=o.contentDocument}catch{}if(r)try{Kh(Ei(r),i,a)}catch{}})}function no(e){e.method=il;try{nl.singlefile.processors.frameTree.initResponse(e)}catch{Si(nl,e,!0)}}function Si(e,t,a){if(e==nl&&Nt&&Nt.runtime&&Nt.runtime.sendMessage)Nt.runtime.sendMessage(t);else if(a){let o=new sv;e.postMessage(ua+wa.stringify({method:t.method,sessionId:t.sessionId}),Oh,[o.port2]),o.port1.postMessage(t)}else e.postMessage(ua+wa.stringify(t),Oh)}function ll(e,t,a,o,n){let i=ao.preProcessDoc(e,t,o),r=ao.serialize(e);ao.postProcessDoc(e,i.markedElements,i.invalidElements);let s=e.baseURI.split("#")[0];return{windowId:a,content:r,baseURI:s,url:e.documentURI,title:e.title,canvases:i.canvases,fonts:i.fonts,worklets:i.worklets,stylesheets:i.stylesheets,images:i.images,posters:i.posters,videos:i.videos,usedFonts:i.usedFonts,shadowRoots:i.shadowRoots,scrollPosition:i.scrollPosition,scrolling:n,adoptedStyleSheets:i.adoptedStyleSheets,processed:!0}}function Ei(e){let t=Array.from(e.querySelectorAll(ov));return e.querySelectorAll(nv).forEach(a=>{let o=ao.getShadowRoot(a);o&&(t=t.concat(...Ei(o)))}),t}var or={};de(or,{MIMEType:()=>kn,cssMinifier:()=>yn,cssUnescape:()=>ai,fontPropertyParser:()=>Qi,mediaQueryParser:()=>tr,srcsetParser:()=>fo,zip:()=>Ls});var Qi={};de(Qi,{parse:()=>wc});var Oe={};de(Oe,{Lexer:()=>ql,List:()=>Dt,OffsetToLocation:()=>Zu,TokenStream:()=>Qu,clone:()=>Ot,createLexer:()=>NT,createSyntax:()=>xp,definitionSyntax:()=>dp,find:()=>Ze,findAll:()=>gc,findLast:()=>MT,fork:()=>FT,fromPlainObject:()=>OT,generate:()=>W,ident:()=>If,isCustomProperty:()=>Ji,keyword:()=>Pi,lexer:()=>PT,parse:()=>re,property:()=>Pl,string:()=>of,toPlainObject:()=>DT,tokenNames:()=>Bi,tokenTypes:()=>Yu,tokenize:()=>_T,url:()=>kf,vendorPrefix:()=>_S,version:()=>RT,walk:()=>Tt});var fv=Object.create,Xl=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,bv=Object.getOwnPropertyNames,yv=Object.getPrototypeOf,kv=Object.prototype.hasOwnProperty,po=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),D=(e,t)=>{for(var a in t)Xl(e,a,{get:t[a],enumerable:!0})},vv=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of bv(t))!kv.call(e,n)&&n!==a&&Xl(e,n,{get:()=>t[n],enumerable:!(o=wv(t,n))||o.enumerable});return e},Sv=(e,t,a)=>(a=e!=null?fv(yv(e)):{},vv(t||!e||!e.__esModule?Xl(a,"default",{value:e,enumerable:!0}):a,e)),Ev=po(e=>{var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");e.encode=function(a){if(0<=a&&a<t.length)return t[a];throw new TypeError("Must be between 0 and 63: "+a)},e.decode=function(a){var o=65,n=90,i=97,r=122,s=48,l=57,c=43,d=47,m=26,h=52;return o<=a&&a<=n?a-o:i<=a&&a<=r?a-i+m:s<=a&&a<=l?a-s+h:a==c?62:a==d?63:-1}}),xv=po(e=>{var t=Ev(),a=5,o=1<<a,n=o-1,i=o;function r(l){return l<0?(-l<<1)+1:(l<<1)+0}function s(l){var c=(l&1)===1,d=l>>1;return c?-d:d}e.encode=function(l){var c="",d,m=r(l);do d=m&n,m>>>=a,m>0&&(d|=i),c+=t.encode(d);while(m>0);return c},e.decode=function(l,c,d){var m=l.length,h=0,u=0,p,g;do{if(c>=m)throw new Error("Expected more digits in base 64 VLQ value.");if(g=t.decode(l.charCodeAt(c++)),g===-1)throw new Error("Invalid base64 digit: "+l.charAt(c-1));p=!!(g&i),g&=n,h=h+(g<<u),u+=a}while(p);d.value=s(h),d.rest=c}}),$l=po(e=>{function t(w,v,T){if(v in w)return w[v];if(arguments.length===3)return T;throw new Error('"'+v+'" is a required argument.')}e.getArg=t;var a=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,o=/^data:.+\,.+$/;function n(w){var v=w.match(a);return v?{scheme:v[1],auth:v[2],host:v[3],port:v[4],path:v[5]}:null}e.urlParse=n;function i(w){var v="";return w.scheme&&(v+=w.scheme+":"),v+="//",w.auth&&(v+=w.auth+"@"),w.host&&(v+=w.host),w.port&&(v+=":"+w.port),w.path&&(v+=w.path),v}e.urlGenerate=i;var r=32;function s(w){var v=[];return function(T){for(var j=0;j<v.length;j++)if(v[j].input===T){var P=v[0];return v[0]=v[j],v[j]=P,v[0].result}var F=w(T);return v.unshift({input:T,result:F}),v.length>r&&v.pop(),F}}var l=s(function(w){var v=w,T=n(w);if(T){if(!T.path)return w;v=T.path}for(var j=e.isAbsolute(v),P=[],F=0,H=0;;)if(F=H,H=v.indexOf("/",F),H===-1){P.push(v.slice(F));break}else for(P.push(v.slice(F,H));H<v.length&&v[H]==="/";)H++;for(var z,N=0,H=P.length-1;H>=0;H--)z=P[H],z==="."?P.splice(H,1):z===".."?N++:N>0&&(z===""?(P.splice(H+1,N),N=0):(P.splice(H,2),N--));return v=P.join("/"),v===""&&(v=j?"/":"."),T?(T.path=v,i(T)):v});e.normalize=l;function c(w,v){w===""&&(w="."),v===""&&(v=".");var T=n(v),j=n(w);if(j&&(w=j.path||"/"),T&&!T.scheme)return j&&(T.scheme=j.scheme),i(T);if(T||v.match(o))return v;if(j&&!j.host&&!j.path)return j.host=v,i(j);var P=v.charAt(0)==="/"?v:l(w.replace(/\/+$/,"")+"/"+v);return j?(j.path=P,i(j)):P}e.join=c,e.isAbsolute=function(w){return w.charAt(0)==="/"||a.test(w)};function d(w,v){w===""&&(w="."),w=w.replace(/\/$/,"");for(var T=0;v.indexOf(w+"/")!==0;){var j=w.lastIndexOf("/");if(j<0||(w=w.slice(0,j),w.match(/^([^\/]+:\/)?\/*$/)))return v;++T}return Array(T+1).join("../")+v.substr(w.length+1)}e.relative=d;var m=(function(){var w=Object.create(null);return!("__proto__"in w)})();function h(w){return w}function u(w){return g(w)?"$"+w:w}e.toSetString=m?h:u;function p(w){return g(w)?w.slice(1):w}e.fromSetString=m?h:p;function g(w){if(!w)return!1;var v=w.length;if(v<9||w.charCodeAt(v-1)!==95||w.charCodeAt(v-2)!==95||w.charCodeAt(v-3)!==111||w.charCodeAt(v-4)!==116||w.charCodeAt(v-5)!==111||w.charCodeAt(v-6)!==114||w.charCodeAt(v-7)!==112||w.charCodeAt(v-8)!==95||w.charCodeAt(v-9)!==95)return!1;for(var T=v-10;T>=0;T--)if(w.charCodeAt(T)!==36)return!1;return!0}function b(w,v,T){var j=A(w.source,v.source);return j!==0||(j=w.originalLine-v.originalLine,j!==0)||(j=w.originalColumn-v.originalColumn,j!==0||T)||(j=w.generatedColumn-v.generatedColumn,j!==0)||(j=w.generatedLine-v.generatedLine,j!==0)?j:A(w.name,v.name)}e.compareByOriginalPositions=b;function f(w,v,T){var j;return j=w.originalLine-v.originalLine,j!==0||(j=w.originalColumn-v.originalColumn,j!==0||T)||(j=w.generatedColumn-v.generatedColumn,j!==0)||(j=w.generatedLine-v.generatedLine,j!==0)?j:A(w.name,v.name)}e.compareByOriginalPositionsNoSource=f;function S(w,v,T){var j=w.generatedLine-v.generatedLine;return j!==0||(j=w.generatedColumn-v.generatedColumn,j!==0||T)||(j=A(w.source,v.source),j!==0)||(j=w.originalLine-v.originalLine,j!==0)||(j=w.originalColumn-v.originalColumn,j!==0)?j:A(w.name,v.name)}e.compareByGeneratedPositionsDeflated=S;function k(w,v,T){var j=w.generatedColumn-v.generatedColumn;return j!==0||T||(j=A(w.source,v.source),j!==0)||(j=w.originalLine-v.originalLine,j!==0)||(j=w.originalColumn-v.originalColumn,j!==0)?j:A(w.name,v.name)}e.compareByGeneratedPositionsDeflatedNoLine=k;function A(w,v){return w===v?0:w===null?1:v===null?-1:w>v?1:-1}function y(w,v){var T=w.generatedLine-v.generatedLine;return T!==0||(T=w.generatedColumn-v.generatedColumn,T!==0)||(T=A(w.source,v.source),T!==0)||(T=w.originalLine-v.originalLine,T!==0)||(T=w.originalColumn-v.originalColumn,T!==0)?T:A(w.name,v.name)}e.compareByGeneratedPositionsInflated=y;function x(w){return JSON.parse(w.replace(/^\)]}'[^\n]*\n/,""))}e.parseSourceMapInput=x;function C(w,v,T){if(v=v||"",w&&(w[w.length-1]!=="/"&&v[0]!=="/"&&(w+="/"),v=w+v),T){var j=n(T);if(!j)throw new Error("sourceMapURL could not be parsed");if(j.path){var P=j.path.lastIndexOf("/");P>=0&&(j.path=j.path.substring(0,P+1))}v=c(i(j),v)}return l(v)}e.computeSourceURL=C}),Av=po(e=>{var t=$l(),a=Object.prototype.hasOwnProperty,o=typeof Map<"u";function n(){this._array=[],this._set=o?new Map:Object.create(null)}n.fromArray=function(i,r){for(var s=new n,l=0,c=i.length;l<c;l++)s.add(i[l],r);return s},n.prototype.size=function(){return o?this._set.size:Object.getOwnPropertyNames(this._set).length},n.prototype.add=function(i,r){var s=o?i:t.toSetString(i),l=o?this.has(i):a.call(this._set,s),c=this._array.length;(!l||r)&&this._array.push(i),l||(o?this._set.set(i,c):this._set[s]=c)},n.prototype.has=function(i){if(o)return this._set.has(i);var r=t.toSetString(i);return a.call(this._set,r)},n.prototype.indexOf=function(i){if(o){var r=this._set.get(i);if(r>=0)return r}else{var s=t.toSetString(i);if(a.call(this._set,s))return this._set[s]}throw new Error('"'+i+'" is not in the set.')},n.prototype.at=function(i){if(i>=0&&i<this._array.length)return this._array[i];throw new Error("No element indexed by "+i)},n.prototype.toArray=function(){return this._array.slice()},e.ArraySet=n}),jv=po(e=>{var t=$l();function a(n,i){var r=n.generatedLine,s=i.generatedLine,l=n.generatedColumn,c=i.generatedColumn;return s>r||s==r&&c>=l||t.compareByGeneratedPositionsInflated(n,i)<=0}function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(n,i){this._array.forEach(n,i)},o.prototype.add=function(n){a(this._last,n)?(this._last=n,this._array.push(n)):(this._sorted=!1,this._array.push(n))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(t.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},e.MappingList=o}),Cv=po(e=>{var t=xv(),a=$l(),o=Av().ArraySet,n=jv().MappingList;function i(r){r||(r={}),this._file=a.getArg(r,"file",null),this._sourceRoot=a.getArg(r,"sourceRoot",null),this._skipValidation=a.getArg(r,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new n,this._sourcesContents=null}i.prototype._version=3,i.fromSourceMap=function(r){var s=r.sourceRoot,l=new i({file:r.file,sourceRoot:s});return r.eachMapping(function(c){var d={generated:{line:c.generatedLine,column:c.generatedColumn}};c.source!=null&&(d.source=c.source,s!=null&&(d.source=a.relative(s,d.source)),d.original={line:c.originalLine,column:c.originalColumn},c.name!=null&&(d.name=c.name)),l.addMapping(d)}),r.sources.forEach(function(c){var d=c;s!==null&&(d=a.relative(s,c)),l._sources.has(d)||l._sources.add(d);var m=r.sourceContentFor(c);m!=null&&l.setSourceContent(c,m)}),l},i.prototype.addMapping=function(r){var s=a.getArg(r,"generated"),l=a.getArg(r,"original",null),c=a.getArg(r,"source",null),d=a.getArg(r,"name",null);this._skipValidation||this._validateMapping(s,l,c,d),c!=null&&(c=String(c),this._sources.has(c)||this._sources.add(c)),d!=null&&(d=String(d),this._names.has(d)||this._names.add(d)),this._mappings.add({generatedLine:s.line,generatedColumn:s.column,originalLine:l!=null&&l.line,originalColumn:l!=null&&l.column,source:c,name:d})},i.prototype.setSourceContent=function(r,s){var l=r;this._sourceRoot!=null&&(l=a.relative(this._sourceRoot,l)),s!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[a.toSetString(l)]=s):this._sourcesContents&&(delete this._sourcesContents[a.toSetString(l)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},i.prototype.applySourceMap=function(r,s,l){var c=s;if(s==null){if(r.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);c=r.file}var d=this._sourceRoot;d!=null&&(c=a.relative(d,c));var m=new o,h=new o;this._mappings.unsortedForEach(function(u){if(u.source===c&&u.originalLine!=null){var p=r.originalPositionFor({line:u.originalLine,column:u.originalColumn});p.source!=null&&(u.source=p.source,l!=null&&(u.source=a.join(l,u.source)),d!=null&&(u.source=a.relative(d,u.source)),u.originalLine=p.line,u.originalColumn=p.column,p.name!=null&&(u.name=p.name))}var g=u.source;g!=null&&!m.has(g)&&m.add(g);var b=u.name;b!=null&&!h.has(b)&&h.add(b)},this),this._sources=m,this._names=h,r.sources.forEach(function(u){var p=r.sourceContentFor(u);p!=null&&(l!=null&&(u=a.join(l,u)),d!=null&&(u=a.relative(d,u)),this.setSourceContent(u,p))},this)},i.prototype._validateMapping=function(r,s,l,c){if(s&&typeof s.line!="number"&&typeof s.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(r&&"line"in r&&"column"in r&&r.line>0&&r.column>=0&&!s&&!l&&!c)){if(r&&"line"in r&&"column"in r&&s&&"line"in s&&"column"in s&&r.line>0&&r.column>=0&&s.line>0&&s.column>=0&&l)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:r,source:l,original:s,name:c}))}},i.prototype._serializeMappings=function(){for(var r=0,s=1,l=0,c=0,d=0,m=0,h="",u,p,g,b,f=this._mappings.toArray(),S=0,k=f.length;S<k;S++){if(p=f[S],u="",p.generatedLine!==s)for(r=0;p.generatedLine!==s;)u+=";",s++;else if(S>0){if(!a.compareByGeneratedPositionsInflated(p,f[S-1]))continue;u+=","}u+=t.encode(p.generatedColumn-r),r=p.generatedColumn,p.source!=null&&(b=this._sources.indexOf(p.source),u+=t.encode(b-m),m=b,u+=t.encode(p.originalLine-1-c),c=p.originalLine-1,u+=t.encode(p.originalColumn-l),l=p.originalColumn,p.name!=null&&(g=this._names.indexOf(p.name),u+=t.encode(g-d),d=g)),h+=u}return h},i.prototype._generateSourcesContent=function(r,s){return r.map(function(l){if(!this._sourcesContents)return null;s!=null&&(l=a.relative(s,l));var c=a.toSetString(l);return Object.prototype.hasOwnProperty.call(this._sourcesContents,c)?this._sourcesContents[c]:null},this)},i.prototype.toJSON=function(){var r={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(r.file=this._file),this._sourceRoot!=null&&(r.sourceRoot=this._sourceRoot),this._sourcesContents&&(r.sourcesContent=this._generateSourcesContent(r.sources,r.sourceRoot)),r},i.prototype.toString=function(){return JSON.stringify(this.toJSON())},e.SourceMapGenerator=i}),Yu={};D(Yu,{AtKeyword:()=>zv,BadString:()=>Pv,BadUrl:()=>Mv,CDC:()=>qv,CDO:()=>Hv,Colon:()=>Gv,Comma:()=>Wv,Comment:()=>Qv,Delim:()=>Dv,Dimension:()=>Bv,EOF:()=>Tv,Function:()=>Rv,Hash:()=>Iv,Ident:()=>Lv,LeftCurlyBracket:()=>Jv,LeftParenthesis:()=>Xv,LeftSquareBracket:()=>Kv,Number:()=>Ov,Percentage:()=>Fv,RightCurlyBracket:()=>Zv,RightParenthesis:()=>$v,RightSquareBracket:()=>Yv,Semicolon:()=>Vv,String:()=>_v,Url:()=>Nv,WhiteSpace:()=>Uv});var Tv=0,Lv=1,Rv=2,zv=3,Iv=4,_v=5,Pv=6,Nv=7,Mv=8,Dv=9,Ov=10,Fv=11,Bv=12,Uv=13,Hv=14,qv=15,Gv=16,Vv=17,Wv=18,Kv=19,Yv=20,Xv=21,$v=22,Jv=23,Zv=24,Qv=25;function _e(e){return e>=48&&e<=57}function aa(e){return _e(e)||e>=65&&e<=70||e>=97&&e<=102}function Jl(e){return e>=65&&e<=90}function eS(e){return e>=97&&e<=122}function tS(e){return Jl(e)||eS(e)}function aS(e){return e>=128}function Oi(e){return tS(e)||aS(e)||e===95}function Zl(e){return Oi(e)||_e(e)||e===45}function oS(e){return e>=0&&e<=8||e===11||e>=14&&e<=31||e===127}function Fi(e){return e===10||e===13||e===12}function ka(e){return Fi(e)||e===32||e===9}function pt(e,t){return!(e!==92||Fi(t)||t===0)}function Ii(e,t,a){return e===45?Oi(t)||t===45||pt(t,a):Oi(e)?!0:e===92?pt(e,t):!1}function dl(e,t,a){return e===43||e===45?_e(t)?2:t===46&&_e(a)?3:0:e===46?_e(t)?2:0:_e(e)?1:0}function Xu(e){return e===65279||e===65534?1:0}var zl=new Array(128),nS=128,_i=130,$u=131,Ql=132,Ju=133;for(let e=0;e<zl.length;e++)zl[e]=ka(e)&&_i||_e(e)&&$u||Oi(e)&&Ql||oS(e)&&Ju||e||nS;function ml(e){return e<128?zl[e]:Ql}function ho(e,t){return t<e.length?e.charCodeAt(t):0}function Il(e,t,a){return a===13&&ho(e,t+1)===10?2:1}function uo(e,t,a){let o=e.charCodeAt(t);return Jl(o)&&(o=o|32),o===a}function pn(e,t,a,o){if(a-t!==o.length||t<0||a>e.length)return!1;for(let n=t;n<a;n++){let i=o.charCodeAt(n-t),r=e.charCodeAt(n);if(Jl(r)&&(r=r|32),r!==i)return!1}return!0}function iS(e,t){for(;t>=0&&ka(e.charCodeAt(t));t--);return t+1}function xi(e,t){for(;t<e.length&&ka(e.charCodeAt(t));t++);return t}function hl(e,t){for(;t<e.length&&_e(e.charCodeAt(t));t++);return t}function va(e,t){if(t+=2,aa(ho(e,t-1))){for(let o=Math.min(e.length,t+5);t<o&&aa(ho(e,t));t++);let a=ho(e,t);ka(a)&&(t+=Il(e,t,a))}return t}function Ai(e,t){for(;t<e.length;t++){let a=e.charCodeAt(t);if(!Zl(a)){if(pt(a,ho(e,t+1))){t=va(e,t)-1;continue}break}}return t}function Wi(e,t){let a=e.charCodeAt(t);if((a===43||a===45)&&(a=e.charCodeAt(t+=1)),_e(a)&&(t=hl(e,t+1),a=e.charCodeAt(t)),a===46&&_e(e.charCodeAt(t+1))&&(t+=2,t=hl(e,t)),uo(e,t,101)){let o=0;a=e.charCodeAt(t+1),(a===45||a===43)&&(o=1,a=e.charCodeAt(t+2)),_e(a)&&(t=hl(e,t+1+o+1))}return t}function ul(e,t){for(;t<e.length;t++){let a=e.charCodeAt(t);if(a===41){t++;break}pt(a,ho(e,t+1))&&(t=va(e,t))}return t}function ec(e){if(e.length===1&&!aa(e.charCodeAt(0)))return e[0];let t=parseInt(e,16);return(t===0||t>=55296&&t<=57343||t>1114111)&&(t=65533),String.fromCodePoint(t)}var Bi=["EOF-token","ident-token","function-token","at-keyword-token","hash-token","string-token","bad-string-token","url-token","bad-url-token","delim-token","number-token","percentage-token","dimension-token","whitespace-token","CDO-token","CDC-token","colon-token","semicolon-token","comma-token","[-token","]-token","(-token",")-token","{-token","}-token","comment-token"];function Ui(e=null,t){return e===null||e.length<t?new Uint32Array(Math.max(t+1024,16384)):e}var Yh=10,rS=12,Xh=13;function $h(e){let t=e.source,a=t.length,o=t.length>0?Xu(t.charCodeAt(0)):0,n=Ui(e.lines,a),i=Ui(e.columns,a),r=e.startLine,s=e.startColumn;for(let l=o;l<a;l++){let c=t.charCodeAt(l);n[l]=r,i[l]=s++,(c===Yh||c===Xh||c===rS)&&(c===Xh&&l+1<a&&t.charCodeAt(l+1)===Yh&&(l++,n[l]=r,i[l]=s),r++,s=1)}n[a]=r,i[a]=s,e.lines=n,e.columns=i,e.computed=!0}var Zu=class{constructor(e,t,a,o){this.setSource(e,t,a,o),this.lines=null,this.columns=null}setSource(e="",t=0,a=1,o=1){this.source=e,this.startOffset=t,this.startLine=a,this.startColumn=o,this.computed=!1}getLocation(e,t){return this.computed||$h(this),{source:t,offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]}}getLocationRange(e,t,a){return this.computed||$h(this),{source:a,start:{offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]},end:{offset:this.startOffset+t,line:this.lines[t],column:this.columns[t]}}}},dt=16777215,mt=24,bn=1,Ki=2,ta=new Uint8Array(32);ta[2]=22;ta[21]=22;ta[19]=20;ta[23]=24;var gt=new Uint8Array(32);gt[2]=bn;gt[21]=bn;gt[19]=bn;gt[23]=bn;gt[22]=Ki;gt[20]=Ki;gt[24]=Ki;function Jh(e,t,a){return e<t?t:e>a?a:e}var Qu=class{constructor(e,t){this.setSource(e,t)}reset(){this.eof=!1,this.tokenIndex=-1,this.tokenType=0,this.tokenStart=this.firstCharOffset,this.tokenEnd=this.firstCharOffset}setSource(e="",t=()=>{}){e=String(e||"");let a=e.length,o=Ui(this.offsetAndType,e.length+1),n=Ui(this.balance,e.length+1),i=0,r=-1,s=0,l=e.length;this.offsetAndType=null,this.balance=null,n.fill(0),t(e,(c,d,m)=>{let h=i++;if(o[h]=c<<mt|m,r===-1&&(r=d),n[h]=l,c===s){let u=n[l];n[l]=h,l=u,s=ta[o[u]>>mt]}else this.isBlockOpenerTokenType(c)&&(l=h,s=ta[c])}),o[i]=0<<mt|a,n[i]=i;for(let c=0;c<i;c++){let d=n[c];if(d<=c){let m=n[d];m!==c&&(n[c]=m)}else d>i&&(n[c]=i)}this.source=e,this.firstCharOffset=r===-1?0:r,this.tokenCount=i,this.offsetAndType=o,this.balance=n,this.reset(),this.next()}lookupType(e){return e+=this.tokenIndex,e<this.tokenCount?this.offsetAndType[e]>>mt:0}lookupTypeNonSC(e){for(let t=this.tokenIndex;t<this.tokenCount;t++){let a=this.offsetAndType[t]>>mt;if(a!==13&&a!==25&&e--===0)return a}return 0}lookupOffset(e){return e+=this.tokenIndex,e<this.tokenCount?this.offsetAndType[e-1]&dt:this.source.length}lookupOffsetNonSC(e){for(let t=this.tokenIndex;t<this.tokenCount;t++){let a=this.offsetAndType[t]>>mt;if(a!==13&&a!==25&&e--===0)return t-this.tokenIndex}return 0}lookupValue(e,t){return e+=this.tokenIndex,e<this.tokenCount?pn(this.source,this.offsetAndType[e-1]&dt,this.offsetAndType[e]&dt,t):!1}getTokenStart(e){return e===this.tokenIndex?this.tokenStart:e>0?e<this.tokenCount?this.offsetAndType[e-1]&dt:this.offsetAndType[this.tokenCount]&dt:this.firstCharOffset}getTokenEnd(e){return e===this.tokenIndex?this.tokenEnd:this.offsetAndType[Jh(e,0,this.tokenCount)]&dt}getTokenType(e){return e===this.tokenIndex?this.tokenType:this.offsetAndType[Jh(e,0,this.tokenCount)]>>mt}substrToCursor(e){return this.source.substring(e,this.tokenStart)}isBlockOpenerTokenType(e){return gt[e]===bn}isBlockCloserTokenType(e){return gt[e]===Ki}getBlockTokenPairIndex(e){let t=this.getTokenType(e);if(gt[t]===1){let a=this.balance[e],o=this.getTokenType(a);return ta[t]===o?a:-1}else if(gt[t]===2){let a=this.balance[e],o=this.getTokenType(a);return ta[o]===t?a:-1}return-1}isBalanceEdge(e){return this.balance[this.tokenIndex]<e}isDelim(e,t){return t?this.lookupType(t)===9&&this.source.charCodeAt(this.lookupOffset(t))===e:this.tokenType===9&&this.source.charCodeAt(this.tokenStart)===e}skip(e){let t=this.tokenIndex+e;t<this.tokenCount?(this.tokenIndex=t,this.tokenStart=this.offsetAndType[t-1]&dt,t=this.offsetAndType[t],this.tokenType=t>>mt,this.tokenEnd=t&dt):(this.tokenIndex=this.tokenCount,this.next())}next(){let e=this.tokenIndex+1;e<this.tokenCount?(this.tokenIndex=e,this.tokenStart=this.tokenEnd,e=this.offsetAndType[e],this.tokenType=e>>mt,this.tokenEnd=e&dt):(this.eof=!0,this.tokenIndex=this.tokenCount,this.tokenType=0,this.tokenStart=this.tokenEnd=this.source.length)}skipSC(){for(;this.tokenType===13||this.tokenType===25;)this.next()}skipUntilBalanced(e,t){let a=e,o=0,n=0;e:for(;a<this.tokenCount;a++){if(o=this.balance[a],o<e)break e;switch(n=a>0?this.offsetAndType[a-1]&dt:this.firstCharOffset,t(this.source.charCodeAt(n))){case 1:break e;case 2:a++;break e;default:this.isBlockOpenerTokenType(this.offsetAndType[a]>>mt)&&(a=o)}}this.skip(a-this.tokenIndex)}forEachToken(e){for(let t=0,a=this.firstCharOffset;t<this.tokenCount;t++){let o=a,n=this.offsetAndType[t],i=n&dt,r=n>>mt;a=i,e(r,o,i,t)}}dump(){let e=new Array(this.tokenCount);return this.forEachToken((t,a,o,n)=>{e[n]={idx:n,type:Bi[t],chunk:this.source.substring(a,o),balance:this.balance[n]}}),e}};function Yi(e,t){function a(m){return m<s?e.charCodeAt(m):0}function o(){if(c=Wi(e,c),Ii(a(c),a(c+1),a(c+2))){d=12,c=Ai(e,c);return}if(a(c)===37){d=11,c++;return}d=10}function n(){let m=c;if(c=Ai(e,c),pn(e,m,c,"url")&&a(c)===40){if(c=xi(e,c+1),a(c)===34||a(c)===39){d=2,c=m+4;return}r();return}if(a(c)===40){d=2,c++;return}d=1}function i(m){for(m||(m=a(c++)),d=5;c<e.length;c++){let h=e.charCodeAt(c);switch(ml(h)){case m:c++;return;case _i:if(Fi(h)){c+=Il(e,c,h),d=6;return}break;case 92:if(c===e.length-1)break;let u=a(c+1);Fi(u)?c+=Il(e,c+1,u):pt(h,u)&&(c=va(e,c)-1);break}}}function r(){for(d=7,c=xi(e,c);c<e.length;c++){let m=e.charCodeAt(c);switch(ml(m)){case 41:c++;return;case _i:if(c=xi(e,c),a(c)===41||c>=e.length){c<e.length&&c++;return}c=ul(e,c),d=8;return;case 34:case 39:case 40:case Ju:c=ul(e,c),d=8;return;case 92:if(pt(m,a(c+1))){c=va(e,c)-1;break}c=ul(e,c),d=8;return}}}e=String(e||"");let s=e.length,l=Xu(a(0)),c=l,d;for(;c<s;){let m=e.charCodeAt(c);switch(ml(m)){case _i:d=13,c=xi(e,c+1);break;case 34:i();break;case 35:Zl(a(c+1))||pt(a(c+1),a(c+2))?(d=4,c=Ai(e,c+1)):(d=9,c++);break;case 39:i();break;case 40:d=21,c++;break;case 41:d=22,c++;break;case 43:dl(m,a(c+1),a(c+2))?o():(d=9,c++);break;case 44:d=18,c++;break;case 45:dl(m,a(c+1),a(c+2))?o():a(c+1)===45&&a(c+2)===62?(d=15,c=c+3):Ii(m,a(c+1),a(c+2))?n():(d=9,c++);break;case 46:dl(m,a(c+1),a(c+2))?o():(d=9,c++);break;case 47:a(c+1)===42?(d=25,c=e.indexOf("*/",c+2),c=c===-1?e.length:c+2):(d=9,c++);break;case 58:d=16,c++;break;case 59:d=17,c++;break;case 60:a(c+1)===33&&a(c+2)===45&&a(c+3)===45?(d=14,c=c+4):(d=9,c++);break;case 64:Ii(a(c+1),a(c+2),a(c+3))?(d=3,c=Ai(e,c+1)):(d=9,c++);break;case 91:d=19,c++;break;case 92:pt(m,a(c+1))?n():(d=9,c++);break;case 93:d=20,c++;break;case 123:d=23,c++;break;case 125:d=24,c++;break;case $u:o();break;case Ql:n();break;default:d=9,c++}t(d,l,l=c)}}var io=null,Dt=class ht{static createItem(t){return{prev:null,next:null,data:t}}constructor(){this.head=null,this.tail=null,this.cursor=null}createItem(t){return ht.createItem(t)}allocateCursor(t,a){let o;return io!==null?(o=io,io=io.cursor,o.prev=t,o.next=a,o.cursor=this.cursor):o={prev:t,next:a,cursor:this.cursor},this.cursor=o,o}releaseCursor(){let{cursor:t}=this;this.cursor=t.cursor,t.prev=null,t.next=null,t.cursor=io,io=t}updateCursors(t,a,o,n){let{cursor:i}=this;for(;i!==null;)i.prev===t&&(i.prev=a),i.next===o&&(i.next=n),i=i.cursor}*[Symbol.iterator](){for(let t=this.head;t!==null;t=t.next)yield t.data}get size(){let t=0;for(let a=this.head;a!==null;a=a.next)t++;return t}get isEmpty(){return this.head===null}get first(){return this.head&&this.head.data}get last(){return this.tail&&this.tail.data}fromArray(t){let a=null;this.head=null;for(let o of t){let n=ht.createItem(o);a!==null?a.next=n:this.head=n,n.prev=a,a=n}return this.tail=a,this}toArray(){return[...this]}toJSON(){return[...this]}forEach(t,a=this){let o=this.allocateCursor(null,this.head);for(;o.next!==null;){let n=o.next;o.next=n.next,t.call(a,n.data,n,this)}this.releaseCursor()}forEachRight(t,a=this){let o=this.allocateCursor(this.tail,null);for(;o.prev!==null;){let n=o.prev;o.prev=n.prev,t.call(a,n.data,n,this)}this.releaseCursor()}reduce(t,a,o=this){let n=this.allocateCursor(null,this.head),i=a,r;for(;n.next!==null;)r=n.next,n.next=r.next,i=t.call(o,i,r.data,r,this);return this.releaseCursor(),i}reduceRight(t,a,o=this){let n=this.allocateCursor(this.tail,null),i=a,r;for(;n.prev!==null;)r=n.prev,n.prev=r.prev,i=t.call(o,i,r.data,r,this);return this.releaseCursor(),i}some(t,a=this){for(let o=this.head;o!==null;o=o.next)if(t.call(a,o.data,o,this))return!0;return!1}map(t,a=this){let o=new ht;for(let n=this.head;n!==null;n=n.next)o.appendData(t.call(a,n.data,n,this));return o}filter(t,a=this){let o=new ht;for(let n=this.head;n!==null;n=n.next)t.call(a,n.data,n,this)&&o.appendData(n.data);return o}nextUntil(t,a,o=this){if(t===null)return;let n=this.allocateCursor(null,t);for(;n.next!==null;){let i=n.next;if(n.next=i.next,a.call(o,i.data,i,this))break}this.releaseCursor()}prevUntil(t,a,o=this){if(t===null)return;let n=this.allocateCursor(t,null);for(;n.prev!==null;){let i=n.prev;if(n.prev=i.prev,a.call(o,i.data,i,this))break}this.releaseCursor()}clear(){this.head=null,this.tail=null}copy(){let t=new ht;for(let a of this)t.appendData(a);return t}prepend(t){return this.updateCursors(null,t,this.head,t),this.head!==null?(this.head.prev=t,t.next=this.head):this.tail=t,this.head=t,this}prependData(t){return this.prepend(ht.createItem(t))}append(t){return this.insert(t)}appendData(t){return this.insert(ht.createItem(t))}insert(t,a=null){if(a!==null)if(this.updateCursors(a.prev,t,a,t),a.prev===null){if(this.head!==a)throw new Error("before doesn't belong to list");this.head=t,a.prev=t,t.next=a,this.updateCursors(null,t)}else a.prev.next=t,t.prev=a.prev,a.prev=t,t.next=a;else this.updateCursors(this.tail,t,null,t),this.tail!==null?(this.tail.next=t,t.prev=this.tail):this.head=t,this.tail=t;return this}insertData(t,a){return this.insert(ht.createItem(t),a)}remove(t){if(this.updateCursors(t,t.prev,t,t.next),t.prev!==null)t.prev.next=t.next;else{if(this.head!==t)throw new Error("item doesn't belong to list");this.head=t.next}if(t.next!==null)t.next.prev=t.prev;else{if(this.tail!==t)throw new Error("item doesn't belong to list");this.tail=t.prev}return t.prev=null,t.next=null,t}push(t){this.insert(ht.createItem(t))}pop(){return this.tail!==null?this.remove(this.tail):null}unshift(t){this.prepend(ht.createItem(t))}shift(){return this.head!==null?this.remove(this.head):null}prependList(t){return this.insertList(t,this.head)}appendList(t){return this.insertList(t)}insertList(t,a){return t.head===null?this:(a!=null?(this.updateCursors(a.prev,t.tail,a,t.head),a.prev!==null?(a.prev.next=t.head,t.head.prev=a.prev):this.head=t.head,a.prev=t.tail,t.tail.next=a):(this.updateCursors(this.tail,t.tail,null,t.head),this.tail!==null?(this.tail.next=t.head,t.head.prev=this.tail):this.head=t.head,this.tail=t.tail),t.head=null,t.tail=null,this)}replace(t,a){"head"in a?this.insertList(a,t):this.insert(a,t),this.remove(t)}};function Xi(e,t){let a=Object.create(SyntaxError.prototype),o=new Error;return Object.assign(a,{name:e,message:t,get stack(){return(o.stack||"").replace(/^(.+\n){1,3}/,`${e}: ${t}
`)}})}var pl=100,Zh=60,Qh="    ";function eu({source:e,line:t,column:a,baseLine:o,baseColumn:n},i){function r(p,g){return c.slice(p,g).map((b,f)=>String(p+f+1).padStart(h)+" |"+b).join(`
`)}let s=`
`.repeat(Math.max(o-1,0)),l=" ".repeat(Math.max(n-1,0)),c=(s+l+e).split(/\r\n?|\n|\f/),d=Math.max(1,t-i)-1,m=Math.min(t+i,c.length+1),h=Math.max(4,String(m).length)+1,u=0;a+=(Qh.length-1)*(c[t-1].substr(0,a-1).match(/\t/g)||[]).length,a>pl&&(u=a-Zh+3,a=Zh-2);for(let p=d;p<=m;p++)p>=0&&p<c.length&&(c[p]=c[p].replace(/\t/g,Qh),c[p]=(u>0&&c[p].length>u?"\u2026":"")+c[p].substr(u,pl-2)+(c[p].length>u+pl-1?"\u2026":""));return[r(d,t),new Array(a+h+2).join("-")+"^",r(t,m)].filter(Boolean).join(`
`).replace(/^(\s+\d+\s+\|\n)+/,"").replace(/\n(\s+\d+\s+\|)+$/,"")}function tu(e,t,a,o,n,i=1,r=1){return Object.assign(Xi("SyntaxError",e),{source:t,offset:a,line:o,column:n,sourceFragment(s){return eu({source:t,line:o,column:n,baseLine:i,baseColumn:r},isNaN(s)?0:s)},get formattedMessage(){return`Parse error: ${e}
`+eu({source:t,line:o,column:n,baseLine:i,baseColumn:r},2)}})}function sS(e){let t=this.createList(),a=!1,o={recognizer:e};for(;!this.eof;){switch(this.tokenType){case 25:this.next();continue;case 13:a=!0,this.next();continue}let n=e.getNode.call(this,o);if(n===void 0)break;a&&(e.onWhiteSpace&&e.onWhiteSpace.call(this,n,t,o),a=!1),t.push(n)}return a&&e.onWhiteSpace&&e.onWhiteSpace.call(this,null,t,o),t}var au=()=>{},lS=33,cS=35,gl=59,ou=123,nu=0;function dS(e){return function(){return this[e]()}}function fl(e){let t=Object.create(null);for(let a of Object.keys(e)){let o=e[a],n=o.parse||o;n&&(t[a]=n)}return t}function mS(e){let t={context:Object.create(null),features:Object.assign(Object.create(null),e.features),scope:Object.assign(Object.create(null),e.scope),atrule:fl(e.atrule),pseudo:fl(e.pseudo),node:fl(e.node)};for(let[a,o]of Object.entries(e.parseContext))switch(typeof o){case"function":t.context[a]=o;break;case"string":t.context[a]=dS(o);break}return{config:t,...t,...t.node}}function hS(e){let t="",a="<unknown>",o=!1,n=au,i=!1,r=new Zu,s=Object.assign(new Qu,mS(e||{}),{parseAtrulePrelude:!0,parseRulePrelude:!0,parseValue:!0,parseCustomProperty:!1,readSequence:sS,consumeUntilBalanceEnd:()=>0,consumeUntilLeftCurlyBracket(c){return c===ou?1:0},consumeUntilLeftCurlyBracketOrSemicolon(c){return c===ou||c===gl?1:0},consumeUntilExclamationMarkOrSemicolon(c){return c===lS||c===gl?1:0},consumeUntilSemicolonIncluded(c){return c===gl?2:0},createList(){return new Dt},createSingleNodeList(c){return new Dt().appendData(c)},getFirstListNode(c){return c&&c.first},getLastListNode(c){return c&&c.last},parseWithFallback(c,d){let m=this.tokenIndex;try{return c.call(this)}catch(h){if(i)throw h;this.skip(m-this.tokenIndex);let u=d.call(this);return i=!0,n(h,u),i=!1,u}},lookupNonWSType(c){let d;do if(d=this.lookupType(c++),d!==13&&d!==25)return d;while(d!==nu);return nu},charCodeAt(c){return c>=0&&c<t.length?t.charCodeAt(c):0},substring(c,d){return t.substring(c,d)},substrToCursor(c){return this.source.substring(c,this.tokenStart)},cmpChar(c,d){return uo(t,c,d)},cmpStr(c,d,m){return pn(t,c,d,m)},consume(c){let d=this.tokenStart;return this.eat(c),this.substrToCursor(d)},consumeFunctionName(){let c=t.substring(this.tokenStart,this.tokenEnd-1);return this.eat(2),c},consumeNumber(c){let d=t.substring(this.tokenStart,Wi(t,this.tokenStart));return this.eat(c),d},eat(c){if(this.tokenType!==c){let d=Bi[c].slice(0,-6).replace(/-/g," ").replace(/^./,u=>u.toUpperCase()),m=`${/[[\](){}]/.test(d)?`"${d}"`:d} is expected`,h=this.tokenStart;switch(c){case 1:this.tokenType===2||this.tokenType===7?(h=this.tokenEnd-1,m="Identifier is expected but function found"):m="Identifier is expected";break;case 4:this.isDelim(cS)&&(this.next(),h++,m="Name is expected");break;case 11:this.tokenType===10&&(h=this.tokenEnd,m="Percent sign is expected");break}this.error(m,h)}this.next()},eatIdent(c){(this.tokenType!==1||this.lookupValue(0,c)===!1)&&this.error(`Identifier "${c}" is expected`),this.next()},eatDelim(c){this.isDelim(c)||this.error(`Delim "${String.fromCharCode(c)}" is expected`),this.next()},getLocation(c,d){return o?r.getLocationRange(c,d,a):null},getLocationFromList(c){if(o){let d=this.getFirstListNode(c),m=this.getLastListNode(c);return r.getLocationRange(d!==null?d.loc.start.offset-r.startOffset:this.tokenStart,m!==null?m.loc.end.offset-r.startOffset:this.tokenStart,a)}return null},error(c,d){let m=typeof d<"u"&&d<t.length?r.getLocation(d):this.eof?r.getLocation(iS(t,t.length-1)):r.getLocation(this.tokenStart);throw new tu(c||"Unexpected input",t,m.offset,m.line,m.column,r.startLine,r.startColumn)}}),l=()=>({filename:a,source:t,tokenCount:s.tokenCount,getTokenType:c=>s.getTokenType(c),getTokenTypeName:c=>Bi[s.getTokenType(c)],getTokenStart:c=>s.getTokenStart(c),getTokenEnd:c=>s.getTokenEnd(c),getTokenValue:c=>s.source.substring(s.getTokenStart(c),s.getTokenEnd(c)),substring:(c,d)=>s.source.substring(c,d),balance:s.balance.subarray(0,s.tokenCount+1),isBlockOpenerTokenType:s.isBlockOpenerTokenType,isBlockCloserTokenType:s.isBlockCloserTokenType,getBlockTokenPairIndex:c=>s.getBlockTokenPairIndex(c),getLocation:c=>r.getLocation(c,a),getRangeLocation:(c,d)=>r.getLocationRange(c,d,a)});return Object.assign(function(c,d){t=c,d=d||{},s.setSource(t,Yi),r.setSource(t,d.offset,d.line,d.column),a=d.filename||"<unknown>",o=!!d.positions,n=typeof d.onParseError=="function"?d.onParseError:au,i=!1,s.parseAtrulePrelude="parseAtrulePrelude"in d?!!d.parseAtrulePrelude:!0,s.parseRulePrelude="parseRulePrelude"in d?!!d.parseRulePrelude:!0,s.parseValue="parseValue"in d?!!d.parseValue:!0,s.parseCustomProperty="parseCustomProperty"in d?!!d.parseCustomProperty:!1;let{context:m="default",onComment:h,onToken:u}=d;if(!(m in s.context))throw new Error("Unknown context `"+m+"`");Array.isArray(u)?s.forEachToken((g,b,f)=>{u.push({type:g,start:b,end:f})}):typeof u=="function"&&s.forEachToken(u.bind(l())),typeof h=="function"&&s.forEachToken((g,b,f)=>{if(g===25){let S=s.getLocation(b,f),k=pn(t,f-2,f,"*/")?t.slice(b+2,f-2):t.slice(b+2,f);h(k,S)}});let p=s.context[m].call(s,d);return s.eof||s.error(),p},{SyntaxError:tu,config:s.config})}var uS=Sv(Cv(),1),iu=new Set(["Atrule","Selector","Declaration"]);function pS(e){let t=new uS.SourceMapGenerator,a={line:1,column:0},o={line:0,column:0},n={line:1,column:0},i={generated:n},r=1,s=0,l=!1,c=e.node;e.node=function(h){if(h.loc&&h.loc.start&&iu.has(h.type)){let u=h.loc.start.line,p=h.loc.start.column-1;(o.line!==u||o.column!==p)&&(o.line=u,o.column=p,a.line=r,a.column=s,l&&(l=!1,(a.line!==n.line||a.column!==n.column)&&t.addMapping(i)),l=!0,t.addMapping({source:h.loc.source,original:o,generated:a}))}c.call(this,h),l&&iu.has(h.type)&&(n.line=r,n.column=s)};let d=e.emit;e.emit=function(h,u,p){for(let g=0;g<h.length;g++)h.charCodeAt(g)===10?(r++,s=0):s++;d(h,u,p)};let m=e.result;return e.result=function(){return l&&t.addMapping(i),{css:m(),map:t}},e}var _l={};D(_l,{safe:()=>ap,spec:()=>bS});var gS=43,fS=45,wl=(e,t)=>{if(e===9&&(e=t),typeof e=="string"){let a=e.charCodeAt(0);return a>127?32768:a<<8}return e},ep=[[1,1],[1,2],[1,7],[1,8],[1,"-"],[1,10],[1,11],[1,12],[1,15],[1,21],[3,1],[3,2],[3,7],[3,8],[3,"-"],[3,10],[3,11],[3,12],[3,15],[4,1],[4,2],[4,7],[4,8],[4,"-"],[4,10],[4,11],[4,12],[4,15],[12,1],[12,2],[12,7],[12,8],[12,"-"],[12,10],[12,11],[12,12],[12,15],["#",1],["#",2],["#",7],["#",8],["#","-"],["#",10],["#",11],["#",12],["#",15],["-",1],["-",2],["-",7],["-",8],["-","-"],["-",10],["-",11],["-",12],["-",15],[10,1],[10,2],[10,7],[10,8],[10,10],[10,11],[10,12],[10,"%"],[10,15],["@",1],["@",2],["@",7],["@",8],["@","-"],["@",15],[".",10],[".",11],[".",12],["+",10],["+",11],["+",12],["/","*"]],wS=ep.concat([[1,4],[12,4],[4,4],[3,21],[3,5],[3,16],[11,11],[11,12],[11,2],[11,"-"],[22,1],[22,2],[22,11],[22,12],[22,4],[22,"-"]]);function tp(e){let t=new Set(e.map(([a,o])=>wl(a)<<16|wl(o)));return function(a,o,n){let i=wl(o,n),r=n.charCodeAt(0);return(r===fS&&o!==1&&o!==2&&o!==15||r===gS?t.has(a<<16|r<<8):t.has(a<<16|i))&&this.emit(" ",13,!0),i}}var bS=tp(ep),ap=tp(wS),yS=92;function kS(e,t){if(typeof t=="function"){let a=null;e.children.forEach(o=>{a!==null&&t.call(this,a),this.node(o),a=o});return}e.children.forEach(this.node,this)}function vS(e){Yi(e,(t,a,o)=>{this.token(t,e.slice(a,o))})}function SS(e){let t=new Map;for(let[a,o]of Object.entries(e.node))typeof(o.generate||o)=="function"&&t.set(a,o.generate||o);return function(a,o){let n="",i=0,r={node(l){if(t.has(l.type))t.get(l.type).call(s,l);else throw new Error("Unknown node type: "+l.type)},tokenBefore:ap,token(l,c){i=this.tokenBefore(i,l,c),this.emit(c,l,!1),l===9&&c.charCodeAt(0)===yS&&this.emit(`
`,13,!0)},emit(l){n+=l},result(){return n}};o&&(typeof o.decorator=="function"&&(r=o.decorator(r)),o.sourceMap&&(r=pS(r)),o.mode in _l&&(r.tokenBefore=_l[o.mode]));let s={node:l=>r.node(l),children:kS,token:(l,c)=>r.token(l,c),tokenize:vS};return r.node(a),r.result()}}function ES(e){return{fromPlainObject(t){return e(t,{enter(a){a.children&&!(a.children instanceof Dt)&&(a.children=new Dt().fromArray(a.children))}}),t},toPlainObject(t){return e(t,{leave(a){a.children&&a.children instanceof Dt&&(a.children=a.children.toArray())}}),t}}}var{hasOwnProperty:tc}=Object.prototype,rn=function(){};function ru(e){return typeof e=="function"?e:rn}function su(e,t){return function(a,o,n){a.type===t&&e.call(this,a,o,n)}}function xS(e,t){let a=t.structure,o=[];for(let n in a){if(tc.call(a,n)===!1)continue;let i=a[n],r={name:n,type:!1,nullable:!1};Array.isArray(i)||(i=[i]);for(let s of i)s===null?r.nullable=!0:typeof s=="string"?r.type="node":Array.isArray(s)&&(r.type="list");r.type&&o.push(r)}return o.length?{context:t.walkContext,fields:o}:null}function AS(e){let t={};for(let a in e.node)if(tc.call(e.node,a)){let o=e.node[a];if(!o.structure)throw new Error("Missed `structure` field in `"+a+"` node type definition");t[a]=xS(a,o)}return t}function lu(e,t){let a=e.fields.slice(),o=e.context,n=typeof o=="string";return t&&a.reverse(),function(i,r,s,l){let c;n&&(c=r[o],r[o]=i);for(let d of a){let m=i[d.name];if(!d.nullable||m){if(d.type==="list"){if(t?m.reduceRight(l,!1):m.reduce(l,!1))return!0}else if(s(m))return!0}}n&&(r[o]=c)}}function cu({StyleSheet:e,Atrule:t,Rule:a,Block:o,DeclarationList:n}){return{Atrule:{StyleSheet:e,Atrule:t,Rule:a,Block:o},Rule:{StyleSheet:e,Atrule:t,Rule:a,Block:o},Declaration:{StyleSheet:e,Atrule:t,Rule:a,Block:o,DeclarationList:n}}}function jS(e){let t=AS(e),a={},o={},n=Symbol("break-walk"),i=Symbol("skip-node");for(let c in t)tc.call(t,c)&&t[c]!==null&&(a[c]=lu(t[c],!1),o[c]=lu(t[c],!0));let r=cu(a),s=cu(o),l=function(c,d){function m(f,S,k){let A=h.call(b,f,S,k);return A===n?!0:A===i?!1:!!(p.hasOwnProperty(f.type)&&p[f.type](f,b,m,g)||u.call(b,f,S,k)===n)}let h=rn,u=rn,p=a,g=(f,S,k,A)=>f||m(S,k,A),b={break:n,skip:i,root:c,stylesheet:null,atrule:null,atrulePrelude:null,rule:null,selector:null,block:null,declaration:null,function:null};if(typeof d=="function")h=d;else if(d&&(h=ru(d.enter),u=ru(d.leave),d.reverse&&(p=o),d.visit)){if(r.hasOwnProperty(d.visit))p=d.reverse?s[d.visit]:r[d.visit];else if(!t.hasOwnProperty(d.visit))throw new Error("Bad value `"+d.visit+"` for `visit` option (should be: "+Object.keys(t).sort().join(", ")+")");h=su(h,d.visit),u=su(u,d.visit)}if(h===rn&&u===rn)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");m(c)};return l.break=n,l.skip=i,l.find=function(c,d){let m=null;return l(c,function(h,u,p){if(d.call(this,h,u,p))return m=h,n}),m},l.findLast=function(c,d){let m=null;return l(c,{reverse:!0,enter(h,u,p){if(d.call(this,h,u,p))return m=h,n}}),m},l.findAll=function(c,d){let m=[];return l(c,function(h,u,p){d.call(this,h,u,p)&&m.push(h)}),m},l}function CS(e){return e}function TS(e){let{min:t,max:a,comma:o}=e;return t===0&&a===0?o?"#?":"*":t===0&&a===1?"?":t===1&&a===0?o?"#":"+":t===1&&a===1?"":(o?"#":"")+(t===a?"{"+t+"}":"{"+t+","+(a!==0?a:"")+"}")}function LS(e){switch(e.type){case"Range":return" ["+(e.min===null?"-\u221E":e.min)+","+(e.max===null?"\u221E":e.max)+"]";default:throw new Error("Unknown node type `"+e.type+"`")}}function RS(e,t,a,o){let n=e.combinator===" "||o?e.combinator:" "+e.combinator+" ",i=e.terms.map(r=>Hi(r,t,a,o)).join(n);return e.explicit||a?(o||i[0]===","?"[":"[ ")+i+(o?"]":" ]"):i}function Hi(e,t,a,o){let n;switch(e.type){case"Group":n=RS(e,t,a,o)+(e.disallowEmpty?"!":"");break;case"Multiplier":return Hi(e.term,t,a,o)+t(TS(e),e);case"Boolean":n="<boolean-expr["+Hi(e.term,t,a,o)+"]>";break;case"Type":n="<"+e.name+(e.opts?t(LS(e.opts),e.opts):"")+">";break;case"Property":n="<'"+e.name+"'>";break;case"Keyword":n=e.name;break;case"AtKeyword":n="@"+e.name;break;case"Function":n=e.name+"(";break;case"String":case"Token":n=e.value;break;case"Comma":n=",";break;default:throw new Error("Unknown node type `"+e.type+"`")}return t(n,e)}function $i(e,t){let a=CS,o=!1,n=!1;return typeof t=="function"?a=t:t&&(o=!!t.forceBraces,n=!!t.compact,typeof t.decorate=="function"&&(a=t.decorate)),Hi(e,a,o,n)}var du={offset:0,line:1,column:1};function zS(e,t){let a=e.tokens,o=e.longestMatch,n=o<a.length&&a[o].node||null,i=n!==t?n:null,r=0,s=0,l=0,c="",d,m;for(let h=0;h<a.length;h++){let u=a[h].value;h===o&&(s=u.length,r=c.length),i!==null&&a[h].node===i&&(h<=o?l++:l=0),c+=u}return o===a.length||l>1?(d=ji(i||t,"end")||sn(du,c),m=sn(d)):(d=ji(i,"start")||sn(ji(t,"start")||du,c.slice(0,r)),m=ji(i,"end")||sn(d,c.substr(r,s))),{css:c,mismatchOffset:r,mismatchLength:s,start:d,end:m}}function ji(e,t){let a=e&&e.loc&&e.loc[t];return a?"line"in a?sn(a):a:null}function sn({offset:e,line:t,column:a},o){let n={offset:e,line:t,column:a};if(o){let i=o.split(/\n|\r\n?|\f/);n.offset+=o.length,n.line+=i.length-1,n.column=i.length===1?n.column+o.length:i.pop().length+1}return n}var nn=function(e,t){let a=Xi("SyntaxReferenceError",e+(t?" `"+t+"`":""));return a.reference=t,a},IS=function(e,t,a,o){let n=Xi("SyntaxMatchError",e),{css:i,mismatchOffset:r,mismatchLength:s,start:l,end:c}=zS(o,a);return n.rawMessage=e,n.syntax=t?$i(t):"<generic>",n.css=i,n.mismatchOffset=r,n.mismatchLength=s,n.message=e+`
  syntax: `+n.syntax+`
   value: `+(i||"<empty string>")+`
  --------`+new Array(n.mismatchOffset+1).join("-")+"^",Object.assign(n,l),n.loc={source:a&&a.loc&&a.loc.source||"<unknown>",start:l,end:c},n},Ci=new Map,ro=new Map,qi=45,Pi=PS,Pl=NS,_S=ac;function Ji(e,t){return t=t||0,e.length-t>=2&&e.charCodeAt(t)===qi&&e.charCodeAt(t+1)===qi}function ac(e,t){if(t=t||0,e.length-t>=3&&e.charCodeAt(t)===qi&&e.charCodeAt(t+1)!==qi){let a=e.indexOf("-",t+2);if(a!==-1)return e.substring(t,a+1)}return""}function PS(e){if(Ci.has(e))return Ci.get(e);let t=e.toLowerCase(),a=Ci.get(t);if(a===void 0){let o=Ji(t,0),n=o?"":ac(t,0);a=Object.freeze({basename:t.substr(n.length),name:t,prefix:n,vendor:n,custom:o})}return Ci.set(e,a),a}function NS(e){if(ro.has(e))return ro.get(e);let t=e,a=e[0];a==="/"?a=e[1]==="/"?"//":"/":a!=="_"&&a!=="*"&&a!=="$"&&a!=="#"&&a!=="+"&&a!=="&"&&(a="");let o=Ji(t,a.length);if(!o&&(t=t.toLowerCase(),ro.has(t))){let s=ro.get(t);return ro.set(e,s),s}let n=o?"":ac(t,a.length),i=t.substr(0,a.length+n.length),r=Object.freeze({basename:t.substr(i.length),name:t.substr(a.length),hack:a,vendor:n,prefix:i,custom:o});return ro.set(e,r),r}var oc=["initial","inherit","unset","revert","revert-layer"],gn=43,jt=45,bl=110,so=!0,MS=!1;function Nl(e,t){return e!==null&&e.type===9&&e.value.charCodeAt(0)===t}function mn(e,t,a){for(;e!==null&&(e.type===13||e.type===25);)e=a(++t);return t}function ea(e,t,a,o){if(!e)return 0;let n=e.value.charCodeAt(t);if(n===gn||n===jt){if(a)return 0;t++}for(;t<e.value.length;t++)if(!_e(e.value.charCodeAt(t)))return 0;return o+1}function yl(e,t,a){let o=!1,n=mn(e,t,a);if(e=a(n),e===null)return t;if(e.type!==10)if(Nl(e,gn)||Nl(e,jt)){if(o=!0,n=mn(a(++n),n,a),e=a(n),e===null||e.type!==10)return 0}else return t;if(!o){let i=e.value.charCodeAt(0);if(i!==gn&&i!==jt)return 0}return ea(e,o?0:1,o,n)}function DS(e,t){let a=0;if(!e)return 0;if(e.type===10)return ea(e,0,MS,a);if(e.type===1&&e.value.charCodeAt(0)===jt){if(!uo(e.value,1,bl))return 0;switch(e.value.length){case 2:return yl(t(++a),a,t);case 3:return e.value.charCodeAt(2)!==jt?0:(a=mn(t(++a),a,t),e=t(a),ea(e,0,so,a));default:return e.value.charCodeAt(2)!==jt?0:ea(e,3,so,a)}}else if(e.type===1||Nl(e,gn)&&t(a+1).type===1){if(e.type!==1&&(e=t(++a)),e===null||!uo(e.value,0,bl))return 0;switch(e.value.length){case 1:return yl(t(++a),a,t);case 2:return e.value.charCodeAt(1)!==jt?0:(a=mn(t(++a),a,t),e=t(a),ea(e,0,so,a));default:return e.value.charCodeAt(1)!==jt?0:ea(e,2,so,a)}}else if(e.type===12){let o=e.value.charCodeAt(0),n=o===gn||o===jt?1:0,i=n;for(;i<e.value.length&&_e(e.value.charCodeAt(i));i++);return i===n||!uo(e.value,i,bl)?0:i+1===e.value.length?yl(t(++a),a,t):e.value.charCodeAt(i+1)!==jt?0:i+2===e.value.length?(a=mn(t(++a),a,t),e=t(a),ea(e,0,so,a)):ea(e,i+2,so,a)}return 0}var OS=43,op=45,np=63,FS=117;function Ml(e,t){return e!==null&&e.type===9&&e.value.charCodeAt(0)===t}function BS(e,t){return e.value.charCodeAt(0)===t}function ln(e,t,a){let o=0;for(let n=t;n<e.value.length;n++){let i=e.value.charCodeAt(n);if(i===op&&a&&o!==0)return ln(e,t+o+1,!1),6;if(!aa(i)||++o>6)return 0}return o}function Ti(e,t,a){if(!e)return 0;for(;Ml(a(t),np);){if(++e>6)return 0;t++}return t}function US(e,t){let a=0;if(e===null||e.type!==1||!uo(e.value,0,FS)||(e=t(++a),e===null))return 0;if(Ml(e,OS))return e=t(++a),e===null?0:e.type===1?Ti(ln(e,0,!0),++a,t):Ml(e,np)?Ti(1,++a,t):0;if(e.type===10){let o=ln(e,1,!0);return o===0?0:(e=t(++a),e===null?a:e.type===12||e.type===10?!BS(e,op)||!ln(e,1,!1)?0:a+1:Ti(o,a,t))}return e.type===12?Ti(ln(e,1,!0),++a,t):0}var HS=["calc(","-moz-calc(","-webkit-calc("],nc=new Map([[2,22],[21,22],[19,20],[23,24]]);function ft(e,t){return t<e.length?e.charCodeAt(t):0}function ip(e,t){return pn(e,0,e.length,t)}function rp(e,t){for(let a=0;a<t.length;a++)if(ip(e,t[a]))return!0;return!1}function sp(e,t){return t!==e.length-2?!1:ft(e,t)===92&&_e(ft(e,t+1))}function Zi(e,t,a){if(e&&e.type==="Range"){let o=Number(a!==void 0&&a!==t.length?t.substr(0,a):t);if(isNaN(o)||e.min!==null&&o<e.min&&typeof e.min!="string"||e.max!==null&&o>e.max&&typeof e.max!="string")return!0}return!1}function qS(e,t){let a=0,o=[],n=0;e:do{switch(e.type){case 24:case 22:case 20:if(e.type!==a)break e;if(a=o.pop(),o.length===0){n++;break e}break;case 2:case 21:case 19:case 23:o.push(a),a=nc.get(e.type);break}n++}while(e=t(n));return n}function st(e){return function(t,a,o){return t===null?0:t.type===2&&rp(t.value,HS)?qS(t,a):e(t,a,o)}}function ie(e){return function(t){return t===null||t.type!==e?0:1}}function GS(e){if(e===null||e.type!==1)return 0;let t=e.value.toLowerCase();return rp(t,oc)||ip(t,"default")?0:1}function lp(e){return e===null||e.type!==1||ft(e.value,0)!==45||ft(e.value,1)!==45?0:1}function VS(e){return!lp(e)||e.value==="--"?0:1}function WS(e){if(e===null||e.type!==4)return 0;let t=e.value.length;if(t!==4&&t!==5&&t!==7&&t!==9)return 0;for(let a=1;a<t;a++)if(!aa(ft(e.value,a)))return 0;return 1}function KS(e){return e===null||e.type!==4||!Ii(ft(e.value,1),ft(e.value,2),ft(e.value,3))?0:1}function YS(e,t){if(!e)return 0;let a=0,o=[],n=0;e:do{switch(e.type){case 6:case 8:break e;case 24:case 22:case 20:if(e.type!==a)break e;a=o.pop();break;case 17:if(a===0)break e;break;case 9:if(a===0&&e.value==="!")break e;break;case 2:case 21:case 19:case 23:o.push(a),a=nc.get(e.type);break}n++}while(e=t(n));return n}function XS(e,t){if(!e)return 0;let a=0,o=[],n=0;e:do{switch(e.type){case 6:case 8:break e;case 24:case 22:case 20:if(e.type!==a)break e;a=o.pop();break;case 2:case 21:case 19:case 23:o.push(a),a=nc.get(e.type);break}n++}while(e=t(n));return n}function Mt(e){return e&&(e=new Set(e)),function(t,a,o){if(t===null||t.type!==12)return 0;let n=Wi(t.value,0);if(e!==null){let i=t.value.indexOf("\\",n),r=i===-1||!sp(t.value,i)?t.value.substr(n):t.value.substring(n,i);if(e.has(r.toLowerCase())===!1)return 0}return Zi(o,t.value,n)?0:1}}function $S(e,t,a){return e===null||e.type!==11||Zi(a,e.value,e.value.length-1)?0:1}function cp(e){return typeof e!="function"&&(e=function(){return 0}),function(t,a,o){return t!==null&&t.type===10&&Number(t.value)===0?1:e(t,a,o)}}function JS(e,t,a){if(e===null)return 0;let o=Wi(e.value,0);return o!==e.value.length&&!sp(e.value,o)||Zi(a,e.value,o)?0:1}function ZS(e,t,a){if(e===null||e.type!==10)return 0;let o=ft(e.value,0)===43||ft(e.value,0)===45?1:0;for(;o<e.value.length;o++)if(!_e(ft(e.value,o)))return 0;return Zi(a,e.value,o)?0:1}var QS={"ident-token":ie(1),"function-token":ie(2),"at-keyword-token":ie(3),"hash-token":ie(4),"string-token":ie(5),"bad-string-token":ie(6),"url-token":ie(7),"bad-url-token":ie(8),"delim-token":ie(9),"number-token":ie(10),"percentage-token":ie(11),"dimension-token":ie(12),"whitespace-token":ie(13),"CDO-token":ie(14),"CDC-token":ie(15),"colon-token":ie(16),"semicolon-token":ie(17),"comma-token":ie(18),"[-token":ie(19),"]-token":ie(20),"(-token":ie(21),")-token":ie(22),"{-token":ie(23),"}-token":ie(24)},eE={string:ie(5),ident:ie(1),percentage:st($S),zero:cp(),number:st(JS),integer:st(ZS),"custom-ident":GS,"dashed-ident":lp,"custom-property-name":VS,"hex-color":WS,"id-selector":KS,"an-plus-b":DS,urange:US,"declaration-value":YS,"any-value":XS};function tE(e){let{angle:t,decibel:a,frequency:o,flex:n,length:i,resolution:r,semitones:s,time:l}=e||{};return{dimension:st(Mt(null)),angle:st(Mt(t)),decibel:st(Mt(a)),frequency:st(Mt(o)),flex:st(Mt(n)),length:st(cp(Mt(i))),resolution:st(Mt(r)),semitones:st(Mt(s)),time:st(Mt(l))}}function aE(e){return{...QS,...eE,...tE(e)}}var Dl={};D(Dl,{angle:()=>nE,decibel:()=>cE,flex:()=>lE,frequency:()=>rE,length:()=>oE,resolution:()=>sE,semitones:()=>dE,time:()=>iE});var oE=["cm","mm","q","in","pt","pc","px","em","rem","ex","rex","cap","rcap","ch","rch","ic","ric","lh","rlh","vw","svw","lvw","dvw","vh","svh","lvh","dvh","vi","svi","lvi","dvi","vb","svb","lvb","dvb","vmin","svmin","lvmin","dvmin","vmax","svmax","lvmax","dvmax","cqw","cqh","cqi","cqb","cqmin","cqmax"],nE=["deg","grad","rad","turn"],iE=["s","ms"],rE=["hz","khz"],sE=["dpi","dpcm","dppx","x"],lE=["fr"],cE=["db"],dE=["st"],dp={};D(dp,{SyntaxError:()=>mp,generate:()=>$i,parse:()=>dc,walk:()=>gp});function mp(e,t,a){return Object.assign(Xi("SyntaxError",e),{input:t,offset:a,rawMessage:e,message:e+`
  `+t+`
--`+new Array((a||t.length)+1).join("-")+"^"})}var mE=9,hE=10,uE=12,pE=13,gE=32,mu=new Uint8Array(128).map((e,t)=>/[a-zA-Z0-9\-]/.test(String.fromCharCode(t))?1:0),fE=class{constructor(e){this.str=e,this.pos=0}charCodeAt(e){return e<this.str.length?this.str.charCodeAt(e):0}charCode(){return this.charCodeAt(this.pos)}isNameCharCode(e=this.charCode()){return e<128&&mu[e]===1}nextCharCode(){return this.charCodeAt(this.pos+1)}nextNonWsCode(e){return this.charCodeAt(this.findWsEnd(e))}skipWs(){this.pos=this.findWsEnd(this.pos)}findWsEnd(e){for(;e<this.str.length;e++){let t=this.str.charCodeAt(e);if(t!==pE&&t!==hE&&t!==uE&&t!==gE&&t!==mE)break}return e}substringToPos(e){return this.str.substring(this.pos,this.pos=e)}eat(e){this.charCode()!==e&&this.error("Expect `"+String.fromCharCode(e)+"`"),this.pos++}peek(){return this.pos<this.str.length?this.str.charAt(this.pos++):""}error(e){throw new mp(e,this.str,this.pos)}scanSpaces(){return this.substringToPos(this.findWsEnd(this.pos))}scanWord(){let e=this.pos;for(;e<this.str.length;e++){let t=this.str.charCodeAt(e);if(t>=128||mu[t]===0)break}return this.pos===e&&this.error("Expect a keyword"),this.substringToPos(e)}scanNumber(){let e=this.pos;for(;e<this.str.length;e++){let t=this.str.charCodeAt(e);if(t<48||t>57)break}return this.pos===e&&this.error("Expect a number"),this.substringToPos(e)}scanString(){let e=this.str.indexOf("'",this.pos+1);return e===-1&&(this.pos=this.str.length,this.error("Expect an apostrophe")),this.substringToPos(e+1)}},wE=9,bE=10,yE=12,kE=13,vE=32,hp=33,ic=35,hu=38,Gi=39,up=40,SE=41,pp=42,rc=43,sc=44,uu=45,lc=60,Ol=62,Fl=63,EE=64,fn=91,wn=93,Vi=123,pu=124,gu=125,fu=8734,wu={" ":1,"&&":2,"||":3,"|":4};function bu(e){let t=null,a=null;return e.eat(Vi),e.skipWs(),t=e.scanNumber(e),e.skipWs(),e.charCode()===sc?(e.pos++,e.skipWs(),e.charCode()!==gu&&(a=e.scanNumber(e),e.skipWs())):a=t,e.eat(gu),{min:Number(t),max:a?Number(a):0}}function xE(e){let t=null,a=!1;switch(e.charCode()){case pp:e.pos++,t={min:0,max:0};break;case rc:e.pos++,t={min:1,max:0};break;case Fl:e.pos++,t={min:0,max:1};break;case ic:e.pos++,a=!0,e.charCode()===Vi?t=bu(e):e.charCode()===Fl?(e.pos++,t={min:0,max:0}):t={min:1,max:0};break;case Vi:t=bu(e);break;default:return null}return{type:"Multiplier",comma:a,min:t.min,max:t.max,term:null}}function oa(e,t){let a=xE(e);return a!==null?(a.term=t,e.charCode()===ic&&e.charCodeAt(e.pos-1)===rc?oa(e,a):a):t}function kl(e){let t=e.peek();return t===""?null:oa(e,{type:"Token",value:t})}function AE(e){let t;return e.eat(lc),e.eat(Gi),t=e.scanWord(),e.eat(Gi),e.eat(Ol),oa(e,{type:"Property",name:t})}function jE(e){let t=null,a=null,o=1;return e.eat(fn),e.charCode()===uu&&(e.peek(),o=-1),o==-1&&e.charCode()===fu?e.peek():(t=o*Number(e.scanNumber(e)),e.isNameCharCode()&&(t+=e.scanWord())),e.skipWs(),e.eat(sc),e.skipWs(),e.charCode()===fu?e.peek():(o=1,e.charCode()===uu&&(e.peek(),o=-1),a=o*Number(e.scanNumber(e)),e.isNameCharCode()&&(a+=e.scanWord())),e.eat(wn),{type:"Range",min:t,max:a}}function CE(e){let t,a=null;if(e.eat(lc),t=e.scanWord(),t==="boolean-expr"){e.eat(fn);let o=cc(e,wn);return e.eat(wn),e.eat(Ol),oa(e,{type:"Boolean",term:o.terms.length===1?o.terms[0]:o})}return e.charCode()===up&&e.nextCharCode()===SE&&(e.pos+=2,t+="()"),e.charCodeAt(e.findWsEnd(e.pos))===fn&&(e.skipWs(),a=jE(e)),e.eat(Ol),oa(e,{type:"Type",name:t,opts:a})}function TE(e){let t=e.scanWord();return e.charCode()===up?(e.pos++,{type:"Function",name:t}):oa(e,{type:"Keyword",name:t})}function LE(e,t){function a(n,i){return{type:"Group",terms:n,combinator:i,disallowEmpty:!1,explicit:!1}}let o;for(t=Object.keys(t).sort((n,i)=>wu[n]-wu[i]);t.length>0;){o=t.shift();let n=0,i=0;for(;n<e.length;n++){let r=e[n];r.type==="Combinator"&&(r.value===o?(i===-1&&(i=n-1),e.splice(n,1),n--):(i!==-1&&n-i>1&&(e.splice(i,n-i,a(e.slice(i,n),o)),n=i+1),i=-1))}i!==-1&&t.length&&e.splice(i,n-i,a(e.slice(i,n),o))}return o}function cc(e,t){let a=Object.create(null),o=[],n,i=null,r=e.pos;for(;e.charCode()!==t&&(n=zE(e,t));)n.type!=="Spaces"&&(n.type==="Combinator"?((i===null||i.type==="Combinator")&&(e.pos=r,e.error("Unexpected combinator")),a[n.value]=!0):i!==null&&i.type!=="Combinator"&&(a[" "]=!0,o.push({type:"Combinator",value:" "})),o.push(n),i=n,r=e.pos);return i!==null&&i.type==="Combinator"&&(e.pos-=r,e.error("Unexpected combinator")),{type:"Group",terms:o,combinator:LE(o,a)||" ",disallowEmpty:!1,explicit:!1}}function RE(e,t){let a;return e.eat(fn),a=cc(e,t),e.eat(wn),a.explicit=!0,e.charCode()===hp&&(e.pos++,a.disallowEmpty=!0),a}function zE(e,t){let a=e.charCode();switch(a){case wn:break;case fn:return oa(e,RE(e,t));case lc:return e.nextCharCode()===Gi?AE(e):CE(e);case pu:return{type:"Combinator",value:e.substringToPos(e.pos+(e.nextCharCode()===pu?2:1))};case hu:return e.pos++,e.eat(hu),{type:"Combinator",value:"&&"};case sc:return e.pos++,{type:"Comma"};case Gi:return oa(e,{type:"String",value:e.scanString()});case vE:case wE:case bE:case kE:case yE:return{type:"Spaces",value:e.scanSpaces()};case EE:return a=e.nextCharCode(),e.isNameCharCode(a)?(e.pos++,{type:"AtKeyword",name:e.scanWord()}):kl(e);case pp:case rc:case Fl:case ic:case hp:break;case Vi:if(a=e.nextCharCode(),a<48||a>57)return kl(e);break;default:return e.isNameCharCode(a)?TE(e):kl(e)}}function dc(e){let t=new fE(e),a=cc(t);return t.pos!==e.length&&t.error("Unexpected input"),a.terms.length===1&&a.terms[0].type==="Group"?a.terms[0]:a}var cn=function(){};function yu(e){return typeof e=="function"?e:cn}function gp(e,t,a){function o(r){switch(n.call(a,r),r.type){case"Group":r.terms.forEach(o);break;case"Multiplier":case"Boolean":o(r.term);break;case"Type":case"Property":case"Keyword":case"AtKeyword":case"Function":case"String":case"Token":case"Comma":break;default:throw new Error("Unknown type: "+r.type)}i.call(a,r)}let n=cn,i=cn;if(typeof t=="function"?n=t:t&&(n=yu(t.enter),i=yu(t.leave)),n===cn&&i===cn)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");o(e,a)}var IE={decorator(e){let t=[],a=null;return{...e,node(o){let n=a;a=o,e.node.call(this,o),a=n},emit(o,n,i){t.push({type:n,value:o,node:i?null:a})},result(){return t}}}};function _E(e){let t=[];return Yi(e,(a,o,n)=>t.push({type:a,value:e.slice(o,n),node:null})),t}function PE(e,t){return typeof e=="string"?_E(e):t.generate(e,IE)}var ee={type:"Match"},ae={type:"Mismatch"},mc={type:"DisallowEmpty"},NE=40,ME=41;function Pe(e,t,a){return t===ee&&a===ae||e===ee&&t===ee&&a===ee?e:(e.type==="If"&&e.else===ae&&t===ee&&(t=e.then,e=e.match),{type:"If",match:e,then:t,else:a})}function fp(e){return e.length>2&&e.charCodeAt(e.length-2)===NE&&e.charCodeAt(e.length-1)===ME}function ku(e){return e.type==="Keyword"||e.type==="AtKeyword"||e.type==="Function"||e.type==="Type"&&fp(e.name)}function Zt(e,t=" ",a=!1){return{type:"Group",terms:e,combinator:t,disallowEmpty:!1,explicit:a}}function hn(e,t,a=new Set){if(!a.has(e))switch(a.add(e),e.type){case"If":e.match=hn(e.match,t,a),e.then=hn(e.then,t,a),e.else=hn(e.else,t,a);break;case"Type":return t[e.name]||e}return e}function Bl(e,t,a){switch(e){case" ":{let o=ee;for(let n=t.length-1;n>=0;n--){let i=t[n];o=Pe(i,o,ae)}return o}case"|":{let o=ae,n=null;for(let i=t.length-1;i>=0;i--){let r=t[i];if(ku(r)&&(n===null&&i>0&&ku(t[i-1])&&(n=Object.create(null),o=Pe({type:"Enum",map:n},ee,o)),n!==null)){let s=(fp(r.name)?r.name.slice(0,-1):r.name).toLowerCase();if(!(s in n)){n[s]=r;continue}}n=null,o=Pe(r,ee,o)}return o}case"&&":{if(t.length>5)return{type:"MatchOnce",terms:t,all:!0};let o=ae;for(let n=t.length-1;n>=0;n--){let i=t[n],r;t.length>1?r=Bl(e,t.filter(function(s){return s!==i}),!1):r=ee,o=Pe(i,r,o)}return o}case"||":{if(t.length>5)return{type:"MatchOnce",terms:t,all:!1};let o=a?ee:ae;for(let n=t.length-1;n>=0;n--){let i=t[n],r;t.length>1?r=Bl(e,t.filter(function(s){return s!==i}),!0):r=ee,o=Pe(i,r,o)}return o}}}function DE(e){let t=ee,a=co(e.term);if(e.max===0)a=Pe(a,mc,ae),t=Pe(a,null,ae),t.then=Pe(ee,ee,t),e.comma&&(t.then.else=Pe({type:"Comma",syntax:e},t,ae));else for(let o=e.min||1;o<=e.max;o++)e.comma&&t!==ee&&(t=Pe({type:"Comma",syntax:e},t,ae)),t=Pe(a,Pe(ee,ee,t),ae);if(e.min===0)t=Pe(ee,ee,t);else for(let o=0;o<e.min-1;o++)e.comma&&t!==ee&&(t=Pe({type:"Comma",syntax:e},t,ae)),t=Pe(a,t,ae);return t}function co(e){if(typeof e=="function")return{type:"Generic",fn:e};switch(e.type){case"Group":{let t=Bl(e.combinator,e.terms.map(co),!1);return e.disallowEmpty&&(t=Pe(t,mc,ae)),t}case"Multiplier":return DE(e);case"Boolean":{let t=co(e.term),a=co(Zt([Zt([{type:"Keyword",name:"not"},{type:"Type",name:"!boolean-group"}]),Zt([{type:"Type",name:"!boolean-group"},Zt([{type:"Multiplier",comma:!1,min:0,max:0,term:Zt([{type:"Keyword",name:"and"},{type:"Type",name:"!boolean-group"}])},{type:"Multiplier",comma:!1,min:0,max:0,term:Zt([{type:"Keyword",name:"or"},{type:"Type",name:"!boolean-group"}])}],"|")])],"|")),o=co(Zt([{type:"Type",name:"!term"},Zt([{type:"Token",value:"("},{type:"Type",name:"!self"},{type:"Token",value:")"}]),{type:"Type",name:"general-enclosed"}],"|"));return hn(o,{"!term":t,"!self":a}),hn(a,{"!boolean-group":o}),a}case"Type":case"Property":return{type:e.type,name:e.name,syntax:e};case"Keyword":return{type:e.type,name:e.name.toLowerCase(),syntax:e};case"AtKeyword":return{type:e.type,name:"@"+e.name.toLowerCase(),syntax:e};case"Function":return{type:e.type,name:e.name.toLowerCase()+"(",syntax:e};case"String":return e.value.length===3?{type:"Token",value:e.value.charAt(1),syntax:e}:{type:e.type,value:e.value.substr(1,e.value.length-2).replace(/\\'/g,"'"),syntax:e};case"Token":return{type:e.type,value:e.value,syntax:e};case"Comma":return{type:e.type,syntax:e};default:throw new Error("Unknown node type:",e.type)}}function Li(e,t){return typeof e=="string"&&(e=dc(e)),{type:"MatchGraph",match:co(e),syntax:t||null,source:e}}var{hasOwnProperty:vu}=Object.prototype,OE=0,FE=1,Ul=2,wp=3,Su="Match",BE="Mismatch",UE="Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)",Eu=15e3,HE=0;function qE(e){let t=null,a=null,o=e;for(;o!==null;)a=o.prev,o.prev=t,t=o,o=a;return t}function vl(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++){let o=t.charCodeAt(a),n=e.charCodeAt(a);if(n>=65&&n<=90&&(n=n|32),n!==o)return!1}return!0}function GE(e){return e.type!==9?!1:e.value!=="?"}function xu(e){return e===null?!0:e.type===18||e.type===2||e.type===21||e.type===19||e.type===23||GE(e)}function Au(e){return e===null?!0:e.type===22||e.type===20||e.type===24||e.type===9&&e.value==="/"}function VE(e,t,a){function o(){do S++,f=S<e.length?e[S]:null;while(f!==null&&(f.type===13||f.type===25))}function n(y){let x=S+y;return x<e.length?e[x]:null}function i(y,x){return{nextState:y,matchStack:A,syntaxStack:m,thenStack:h,tokenIndex:S,prev:x}}function r(y){h={nextState:y,matchStack:A,syntaxStack:m,prev:h}}function s(y){u=i(y,u)}function l(){A={type:FE,syntax:t.syntax,token:f,prev:A},o(),p=null,S>k&&(k=S)}function c(){m={syntax:t.syntax,opts:t.syntax.opts||m!==null&&m.opts||null,prev:m},A={type:Ul,syntax:t.syntax,token:A.token,prev:A}}function d(){A.type===Ul?A=A.prev:A={type:wp,syntax:m.syntax,token:A.token,prev:A},m=m.prev}let m=null,h=null,u=null,p=null,g=0,b=null,f=null,S=-1,k=0,A={type:OE,syntax:null,token:null,prev:null};for(o();b===null&&++g<Eu;)switch(t.type){case"Match":if(h===null){if(f!==null&&(S!==e.length-1||f.value!=="\\0"&&f.value!=="\\9")){t=ae;break}b=Su;break}if(t=h.nextState,t===mc)if(h.matchStack===A){t=ae;break}else t=ee;for(;h.syntaxStack!==m;)d();h=h.prev;break;case"Mismatch":if(p!==null&&p!==!1)(u===null||S>u.tokenIndex)&&(u=p,p=!1);else if(u===null){b=BE;break}t=u.nextState,h=u.thenStack,m=u.syntaxStack,A=u.matchStack,S=u.tokenIndex,f=S<e.length?e[S]:null,u=u.prev;break;case"MatchGraph":t=t.match;break;case"If":t.else!==ae&&s(t.else),t.then!==ee&&r(t.then),t=t.match;break;case"MatchOnce":t={type:"MatchOnceBuffer",syntax:t,index:0,mask:0};break;case"MatchOnceBuffer":{let C=t.syntax.terms;if(t.index===C.length){if(t.mask===0||t.syntax.all){t=ae;break}t=ee;break}if(t.mask===(1<<C.length)-1){t=ee;break}for(;t.index<C.length;t.index++){let w=1<<t.index;if(!(t.mask&w)){s(t),r({type:"AddMatchOnce",syntax:t.syntax,mask:t.mask|w}),t=C[t.index++];break}}break}case"AddMatchOnce":t={type:"MatchOnceBuffer",syntax:t.syntax,index:0,mask:t.mask};break;case"Enum":if(f!==null){let C=f.value.toLowerCase();if(C.indexOf("\\")!==-1&&(C=C.replace(/\\[09].*$/,"")),vu.call(t.map,C)){t=t.map[C];break}}t=ae;break;case"Generic":{let C=m!==null?m.opts:null,w=S+Math.floor(t.fn(f,n,C));if(!isNaN(w)&&w>S){for(;S<w;)l();t=ee}else t=ae;break}case"Type":case"Property":{let C=t.type==="Type"?"types":"properties",w=vu.call(a,C)?a[C][t.name]:null;if(!w||!w.match)throw new Error("Bad syntax reference: "+(t.type==="Type"?"<"+t.name+">":"<'"+t.name+"'>"));if(p!==!1&&f!==null&&t.type==="Type"&&(t.name==="custom-ident"&&f.type===1||t.name==="length"&&f.value==="0")){p===null&&(p=i(t,u)),t=ae;break}c(),t=w.matchRef||w.match;break}case"Keyword":{let C=t.name;if(f!==null){let w=f.value;if(w.indexOf("\\")!==-1&&(w=w.replace(/\\[09].*$/,"")),vl(w,C)){l(),t=ee;break}}t=ae;break}case"AtKeyword":case"Function":if(f!==null&&vl(f.value,t.name)){l(),t=ee;break}t=ae;break;case"Token":if(f!==null&&f.value===t.value){l(),t=ee;break}t=ae;break;case"Comma":f!==null&&f.type===18?xu(A.token)?t=ae:(l(),t=Au(f)?ae:ee):t=xu(A.token)||Au(f)?ee:ae;break;case"String":let y="",x=S;for(;x<e.length&&y.length<t.value.length;x++)y+=e[x].value;if(vl(y,t.value)){for(;S<x;)l();t=ee}else t=ae;break;default:throw new Error("Unknown node type: "+t.type)}switch(HE+=g,b){case null:console.warn("[csstree-match] BREAK after "+Eu+" iterations"),b=UE,A=null;break;case Su:for(;m!==null;)d();break;default:A=null}return{tokens:e,reason:b,iterations:g,match:A,longestMatch:k}}function ju(e,t,a){let o=VE(e,t,a||{});if(o.match===null)return o;let n=o.match,i=o.match={syntax:t.syntax||null,match:[]},r=[i];for(n=qE(n).prev;n!==null;){switch(n.type){case Ul:i.match.push(i={syntax:n.syntax,match:[]}),r.push(i);break;case wp:r.pop(),i=r[r.length-1];break;default:i.match.push({syntax:n.syntax||null,token:n.token.value,node:n.token.node})}n=n.prev}return o}var bp={};D(bp,{getTrace:()=>yp,isKeyword:()=>YE,isProperty:()=>KE,isType:()=>WE});function yp(e){function t(n){return n===null?!1:n.type==="Type"||n.type==="Property"||n.type==="Keyword"}function a(n){if(Array.isArray(n.match)){for(let i=0;i<n.match.length;i++)if(a(n.match[i]))return t(n.syntax)&&o.unshift(n.syntax),!0}else if(n.node===e)return o=t(n.syntax)?[n.syntax]:[],!0;return!1}let o=null;return this.matched!==null&&a(this.matched),o}function WE(e,t){return hc(this,e,a=>a.type==="Type"&&a.name===t)}function KE(e,t){return hc(this,e,a=>a.type==="Property"&&a.name===t)}function YE(e){return hc(this,e,t=>t.type==="Keyword")}function hc(e,t,a){let o=yp.call(e,t);return o===null?!1:o.some(a)}function kp(e){return"node"in e?e.node:kp(e.match[0])}function vp(e){return"node"in e?e.node:vp(e.match[e.match.length-1])}function Cu(e,t,a,o,n){function i(s){if(s.syntax!==null&&s.syntax.type===o&&s.syntax.name===n){let l=kp(s),c=vp(s);e.syntax.walk(t,function(d,m,h){if(d===l){let u=new Dt;do{if(u.appendData(m.data),m.data===c)break;m=m.next}while(m!==null);r.push({parent:h,nodes:u})}})}Array.isArray(s.match)&&s.match.forEach(i)}let r=[];return a.matched!==null&&i(a.matched),r}var{hasOwnProperty:un}=Object.prototype;function Sl(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&e>=0}function Tu(e){return!!e&&Sl(e.offset)&&Sl(e.line)&&Sl(e.column)}function XE(e,t){return function(a,o){if(!a||a.constructor!==Object)return o(a,"Type of node should be an Object");for(let n in a){let i=!0;if(un.call(a,n)!==!1){if(n==="type")a.type!==e&&o(a,"Wrong node type `"+a.type+"`, expected `"+e+"`");else if(n==="loc"){if(a.loc===null)continue;if(a.loc&&a.loc.constructor===Object)if(typeof a.loc.source!="string")n+=".source";else if(!Tu(a.loc.start))n+=".start";else if(!Tu(a.loc.end))n+=".end";else continue;i=!1}else if(t.hasOwnProperty(n)){i=!1;for(let r=0;!i&&r<t[n].length;r++){let s=t[n][r];switch(s){case String:i=typeof a[n]=="string";break;case Boolean:i=typeof a[n]=="boolean";break;case null:i=a[n]===null;break;default:typeof s=="string"?i=a[n]&&a[n].type===s:Array.isArray(s)&&(i=a[n]instanceof Dt)}}}else o(a,"Unknown field `"+n+"` for "+e+" node type");i||o(a,"Bad value for `"+e+"."+n+"`")}}for(let n in t)un.call(t,n)&&un.call(a,n)===!1&&o(a,"Field `"+e+"."+n+"` is missed")}}function Sp(e,t){let a=[];for(let o=0;o<e.length;o++){let n=e[o];if(n===String||n===Boolean)a.push(n.name.toLowerCase());else if(n===null)a.push("null");else if(typeof n=="string")a.push(n);else if(Array.isArray(n))a.push("List<"+(Sp(n,t)||"any")+">");else throw new Error("Wrong value `"+n+"` in `"+t+"` structure definition")}return a.join(" | ")}function $E(e,t){let a=t.structure,o={type:String,loc:!0},n={type:'"'+e+'"'};for(let i in a){if(un.call(a,i)===!1)continue;let r=o[i]=Array.isArray(a[i])?a[i].slice():[a[i]];n[i]=Sp(r,e+"."+i)}return{docs:n,check:XE(e,o)}}function JE(e){let t={};if(e.node){for(let a in e.node)if(un.call(e.node,a)){let o=e.node[a];if(o.structure)t[a]=$E(a,o);else throw new Error("Missed `structure` field in `"+a+"` node type definition")}}return t}function Hl(e,t,a){let o={};for(let n in e)e[n].syntax&&(o[n]=a?e[n].syntax:$i(e[n].syntax,{compact:t}));return o}function ZE(e,t,a){let o={};for(let[n,i]of Object.entries(e))o[n]={prelude:i.prelude&&(a?i.prelude.syntax:$i(i.prelude.syntax,{compact:t})),descriptors:i.descriptors&&Hl(i.descriptors,t,a)};return o}function QE(e){for(let t=0;t<e.length;t++)if(e[t].value.toLowerCase()==="var(")return!0;return!1}function ex(e){let t=e.terms[0];return e.explicit===!1&&e.terms.length===1&&t.type==="Multiplier"&&t.comma===!0}function ut(e,t,a){return{matched:e,iterations:a,error:t,...bp}}function lo(e,t,a,o){let n=PE(a,e.syntax),i;return QE(n)?ut(null,new Error("Matching for a tree with var() is not supported")):(o&&(i=ju(n,e.cssWideKeywordsSyntax,e)),(!o||!i.match)&&(i=ju(n,t.match,e),!i.match)?ut(null,new IS(i.reason,t.syntax,a,i),i.iterations):ut(i.match,null,i.iterations))}var ql=class{constructor(e,t,a){if(this.cssWideKeywords=oc,this.syntax=t,this.generic=!1,this.units={...Dl},this.atrules=Object.create(null),this.properties=Object.create(null),this.types=Object.create(null),this.structure=a||JE(e),e){if(e.cssWideKeywords&&(this.cssWideKeywords=e.cssWideKeywords),e.units)for(let o of Object.keys(Dl))Array.isArray(e.units[o])&&(this.units[o]=e.units[o]);if(e.types)for(let[o,n]of Object.entries(e.types))this.addType_(o,n);if(e.generic){this.generic=!0;for(let[o,n]of Object.entries(aE(this.units)))this.addType_(o,n)}if(e.atrules)for(let[o,n]of Object.entries(e.atrules))this.addAtrule_(o,n);if(e.properties)for(let[o,n]of Object.entries(e.properties))this.addProperty_(o,n)}this.cssWideKeywordsSyntax=Li(this.cssWideKeywords.join(" |  "))}checkStructure(e){function t(n,i){o.push({node:n,message:i})}let a=this.structure,o=[];return this.syntax.walk(e,function(n){a.hasOwnProperty(n.type)?a[n.type].check(n,t):t(n,"Unknown node type `"+n.type+"`")}),o.length?o:!1}createDescriptor(e,t,a,o=null){let n={type:t,name:a},i={type:t,name:a,parent:o,serializable:typeof e=="string"||e&&typeof e.type=="string",syntax:null,match:null,matchRef:null};return typeof e=="function"?i.match=Li(e,n):(typeof e=="string"?Object.defineProperty(i,"syntax",{get(){return Object.defineProperty(i,"syntax",{value:dc(e)}),i.syntax}}):i.syntax=e,Object.defineProperty(i,"match",{get(){return Object.defineProperty(i,"match",{value:Li(i.syntax,n)}),i.match}}),t==="Property"&&Object.defineProperty(i,"matchRef",{get(){let r=i.syntax,s=ex(r)?Li({...r,terms:[r.terms[0].term]},n):null;return Object.defineProperty(i,"matchRef",{value:s}),s}})),i}addAtrule_(e,t){t&&(this.atrules[e]={type:"Atrule",name:e,prelude:t.prelude?this.createDescriptor(t.prelude,"AtrulePrelude",e):null,descriptors:t.descriptors?Object.keys(t.descriptors).reduce((a,o)=>(a[o]=this.createDescriptor(t.descriptors[o],"AtruleDescriptor",o,e),a),Object.create(null)):null})}addProperty_(e,t){t&&(this.properties[e]=this.createDescriptor(t,"Property",e))}addType_(e,t){t&&(this.types[e]=this.createDescriptor(t,"Type",e))}checkAtruleName(e){if(!this.getAtrule(e))return new nn("Unknown at-rule","@"+e)}checkAtrulePrelude(e,t){let a=this.checkAtruleName(e);if(a)return a;let o=this.getAtrule(e);if(!o.prelude&&t)return new SyntaxError("At-rule `@"+e+"` should not contain a prelude");if(o.prelude&&!t&&!lo(this,o.prelude,"",!1).matched)return new SyntaxError("At-rule `@"+e+"` should contain a prelude")}checkAtruleDescriptorName(e,t){let a=this.checkAtruleName(e);if(a)return a;let o=this.getAtrule(e),n=Pi(t);if(!o.descriptors)return new SyntaxError("At-rule `@"+e+"` has no known descriptors");if(!o.descriptors[n.name]&&!o.descriptors[n.basename])return new nn("Unknown at-rule descriptor",t)}checkPropertyName(e){if(!this.getProperty(e))return new nn("Unknown property",e)}matchAtrulePrelude(e,t){let a=this.checkAtrulePrelude(e,t);if(a)return ut(null,a);let o=this.getAtrule(e);return o.prelude?lo(this,o.prelude,t||"",!1):ut(null,null)}matchAtruleDescriptor(e,t,a){let o=this.checkAtruleDescriptorName(e,t);if(o)return ut(null,o);let n=this.getAtrule(e),i=Pi(t);return lo(this,n.descriptors[i.name]||n.descriptors[i.basename],a,!1)}matchDeclaration(e){return e.type!=="Declaration"?ut(null,new Error("Not a Declaration node")):this.matchProperty(e.property,e.value)}matchProperty(e,t){if(Pl(e).custom)return ut(null,new Error("Lexer matching doesn't applicable for custom properties"));let a=this.checkPropertyName(e);return a?ut(null,a):lo(this,this.getProperty(e),t,!0)}matchType(e,t){let a=this.getType(e);return a?lo(this,a,t,!1):ut(null,new nn("Unknown type",e))}match(e,t){return typeof e!="string"&&(!e||!e.type)?ut(null,new nn("Bad syntax")):((typeof e=="string"||!e.match)&&(e=this.createDescriptor(e,"Type","anonymous")),lo(this,e,t,!1))}findValueFragments(e,t,a,o){return Cu(this,t,this.matchProperty(e,t),a,o)}findDeclarationValueFragments(e,t,a){return Cu(this,e.value,this.matchDeclaration(e),t,a)}findAllFragments(e,t,a){let o=[];return this.syntax.walk(e,{visit:"Declaration",enter:n=>{o.push.apply(o,this.findDeclarationValueFragments(n,t,a))}}),o}getAtrule(e,t=!0){let a=Pi(e);return(a.vendor&&t?this.atrules[a.name]||this.atrules[a.basename]:this.atrules[a.name])||null}getAtrulePrelude(e,t=!0){let a=this.getAtrule(e,t);return a&&a.prelude||null}getAtruleDescriptor(e,t){return this.atrules.hasOwnProperty(e)&&this.atrules.declarators&&this.atrules[e].declarators[t]||null}getProperty(e,t=!0){let a=Pl(e);return(a.vendor&&t?this.properties[a.name]||this.properties[a.basename]:this.properties[a.name])||null}getType(e){return hasOwnProperty.call(this.types,e)?this.types[e]:null}validate(){function e(s,l){return l?`<${s}>`:`<'${s}'>`}function t(s,l,c,d){if(c.has(l))return c.get(l);c.set(l,!1),d.syntax!==null&&gp(d.syntax,function(m){if(m.type!=="Type"&&m.type!=="Property")return;let h=m.type==="Type"?s.types:s.properties,u=m.type==="Type"?o:n;hasOwnProperty.call(h,m.name)?t(s,m.name,u,h[m.name])&&(a.push(`${e(l,c===o)} used broken syntax definition ${e(m.name,m.type==="Type")}`),c.set(l,!0)):(a.push(`${e(l,c===o)} used missed syntax definition ${e(m.name,m.type==="Type")}`),c.set(l,!0))},this)}let a=[],o=new Map,n=new Map;for(let s in this.types)t(this,s,o,this.types[s]);for(let s in this.properties)t(this,s,n,this.properties[s]);let i=[...o.keys()].filter(s=>o.get(s)),r=[...n.keys()].filter(s=>n.get(s));return i.length||r.length?{errors:a,types:i,properties:r}:null}dump(e,t){return{generic:this.generic,cssWideKeywords:this.cssWideKeywords,units:this.units,types:Hl(this.types,!t,e),properties:Hl(this.properties,!t,e),atrules:ZE(this.atrules,!t,e)}}toString(){return JSON.stringify(this.dump())}};function El(e,t){return typeof t=="string"&&/^\s*\|/.test(t)?typeof e=="string"?e+t:t.replace(/^\s*\|\s*/,""):t||null}function tx(e,t){let a=Object.create(null);for(let o of Object.keys(e))t.includes(o)&&(a[o]=e[o]);return a}function xl(e,t,a){let o={...e};for(let[n,i]of Object.entries(t))o[n]={...o[n],...a?tx(i,a):i};return o}function Gl(e,t){let a={...e};for(let[o,n]of Object.entries(t))switch(o){case"generic":a[o]=!!n;break;case"cssWideKeywords":a[o]=e[o]?[...e[o],...n]:n||[];break;case"units":a[o]={...e[o]};for(let[i,r]of Object.entries(n))a[o][i]=Array.isArray(r)?r:[];break;case"atrules":a[o]={...e[o]};for(let[i,r]of Object.entries(n)){let s=a[o][i]||{},l=a[o][i]={prelude:s.prelude||null,descriptors:{...s.descriptors}};if(r){l.prelude=r.prelude?El(l.prelude,r.prelude):l.prelude||null;for(let[c,d]of Object.entries(r.descriptors||{}))l.descriptors[c]=d?El(l.descriptors[c],d):null;Object.keys(l.descriptors).length||(l.descriptors=null)}}break;case"types":case"properties":a[o]={...e[o]};for(let[i,r]of Object.entries(n))a[o][i]=El(a[o][i],r);break;case"parseContext":a[o]={...e[o],...n};break;case"scope":case"features":a[o]=xl(e[o],n);break;case"atrule":case"pseudo":a[o]=xl(e[o],n,["parse"]);break;case"node":a[o]=xl(e[o],n,["name","structure","parse","generate","walkContext"]);break}return a}function Ep(e){let t=hS(e),a=jS(e),o=SS(e),{fromPlainObject:n,toPlainObject:i}=ES(a),r={lexer:null,createLexer:s=>new ql(s,r,r.lexer.structure),tokenize:Yi,parse:t,generate:o,walk:a,find:a.find,findLast:a.findLast,findAll:a.findAll,fromPlainObject:n,toPlainObject:i,fork(s){let l=Gl({},e);return Ep(typeof s=="function"?s(l):Gl(l,s))}};return r.lexer=new ql({generic:e.generic,cssWideKeywords:e.cssWideKeywords,units:e.units,types:e.types,atrules:e.atrules,properties:e.properties,node:e.node},r),r}var xp=e=>Ep(Gl({},e)),ax={generic:!0,cssWideKeywords:["initial","inherit","unset","revert","revert-layer"],units:{angle:["deg","grad","rad","turn"],decibel:["db"],flex:["fr"],frequency:["hz","khz"],length:["cm","mm","q","in","pt","pc","px","em","rem","ex","rex","cap","rcap","ch","rch","ic","ric","lh","rlh","vw","svw","lvw","dvw","vh","svh","lvh","dvh","vi","svi","lvi","dvi","vb","svb","lvb","dvb","vmin","svmin","lvmin","dvmin","vmax","svmax","lvmax","dvmax","cqw","cqh","cqi","cqb","cqmin","cqmax"],resolution:["dpi","dpcm","dppx","x"],semitones:["st"],time:["s","ms"]},types:{"abs()":"abs( <calc-sum> )","absolute-size":"xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large","acos()":"acos( <calc-sum> )","alpha-value":"<number>|<percentage>","an+b":"odd|even|<integer>|<n-dimension>|'+'? \u2020 n|-n|<ndashdigit-dimension>|'+'? \u2020 <ndashdigit-ident>|<dashndashdigit-ident>|<n-dimension> <signed-integer>|'+'? \u2020 n <signed-integer>|-n <signed-integer>|<ndash-dimension> <signless-integer>|'+'? \u2020 n- <signless-integer>|-n- <signless-integer>|<n-dimension> ['+'|'-'] <signless-integer>|'+'? \u2020 n ['+'|'-'] <signless-integer>|-n ['+'|'-'] <signless-integer>","anchor()":"anchor( <anchor-name>?&&<anchor-side> , <length-percentage>? )","anchor-name":"<dashed-ident>","anchor-side":"inside|outside|top|left|right|bottom|start|end|self-start|self-end|<percentage>|center","anchor-size":"width|height|block|inline|self-block|self-inline","anchor-size()":"anchor-size( [<anchor-name>||<anchor-size>]? , <length-percentage>? )","angle-percentage":"<angle>|<percentage>","angular-color-hint":"<angle-percentage>|<zero>","angular-color-stop":"<color> <color-stop-angle>?","angular-color-stop-list":"<angular-color-stop> , [<angular-color-hint>? , <angular-color-stop>]#?","animateable-feature":"scroll-position|contents|<custom-ident>","asin()":"asin( <calc-sum> )","atan()":"atan( <calc-sum> )","atan2()":"atan2( <calc-sum> , <calc-sum> )",attachment:"scroll|fixed|local","attr()":"attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )","attr-matcher":"['~'|'|'|'^'|'$'|'*']? '='","attr-modifier":"i|s","attribute-selector":"'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'","auto-repeat":"repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )","auto-track-list":"[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",axis:"block|inline|x|y","baseline-position":"[first|last]? baseline","basic-shape":"<inset()>|<xywh()>|<rect()>|<circle()>|<ellipse()>|<polygon()>|<path()>","basic-shape-rect":"<inset()>|<rect()>|<xywh()>","bg-clip":"<visual-box>|border-area|text","bg-image":"none|<image>","bg-layer":"<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<visual-box>||<visual-box>","bg-position":"[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]","bg-size":"[<length-percentage>|auto]{1,2}|cover|contain","blend-mode":"normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity","blur()":"blur( <length>? )","brightness()":"brightness( [<number>|<percentage>]? )","calc()":"calc( <calc-sum> )","calc-constant":"e|pi|infinity|-infinity|NaN","calc-product":"<calc-value> ['*' <calc-value>|'/' <number>]*","calc-size()":"calc-size( <calc-size-basis> , <calc-sum> )","calc-size-basis":"<intrinsic-size-keyword>|<calc-size()>|any|<calc-sum>","calc-sum":"<calc-product> [['+'|'-'] <calc-product>]*","calc-value":"<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )","cf-final-image":"<image>|<color>","cf-mixing-image":"<percentage>?&&<image>","circle()":"circle( <radial-size>? [at <position>]? )","clamp()":"clamp( <calc-sum>#{3} )","class-selector":"'.' <ident-token>","clip-source":"<url>",color:"<color-base>|currentColor|<system-color>|<device-cmyk()>|<light-dark()>|<-non-standard-color>","color()":"color( <colorspace-params> [/ [<alpha-value>|none]]? )","color-base":"<hex-color>|<color-function>|<named-color>|<color-mix()>|transparent","color-function":"<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<oklab()>|<oklch()>|<color()>","color-interpolation-method":"in [<rectangular-color-space>|<polar-color-space> <hue-interpolation-method>?|<custom-color-space>]","color-mix()":"color-mix( <color-interpolation-method> , [<color>&&<percentage [0,100]>?]#{2} )","color-stop":"<color-stop-length>|<color-stop-angle>","color-stop-angle":"[<angle-percentage>|<zero>]{1,2}","color-stop-length":"<length-percentage>{1,2}","color-stop-list":"<linear-color-stop> , [<linear-color-hint>? , <linear-color-stop>]#?","colorspace-params":"[<predefined-rgb-params>|<xyz-params>]",combinator:"'>'|'+'|'~'|['|' '|']","common-lig-values":"[common-ligatures|no-common-ligatures]","compat-auto":"searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button","complex-selector":"<complex-selector-unit> [<combinator>? <complex-selector-unit>]*","complex-selector-list":"<complex-selector>#","composite-style":"clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor","compositing-operator":"add|subtract|intersect|exclude","compound-selector":"[<type-selector>? <subclass-selector>*]!","compound-selector-list":"<compound-selector>#","conic-gradient()":"conic-gradient( [<conic-gradient-syntax>] )","conic-gradient-syntax":"[[[from [<angle>|<zero>]]? [at <position>]?]||<color-interpolation-method>]? , <angular-color-stop-list>","container-condition":"not <query-in-parens>|<query-in-parens> [[and <query-in-parens>]*|[or <query-in-parens>]*]","container-name":"<custom-ident>","container-query":"not <query-in-parens>|<query-in-parens> [[and <query-in-parens>]*|[or <query-in-parens>]*]","content-distribution":"space-between|space-around|space-evenly|stretch","content-list":"[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+","content-position":"center|start|end|flex-start|flex-end","content-replacement":"<image>","contextual-alt-values":"[contextual|no-contextual]","contrast()":"contrast( [<number>|<percentage>]? )","coord-box":"content-box|padding-box|border-box|fill-box|stroke-box|view-box","cos()":"cos( <calc-sum> )",counter:"<counter()>|<counters()>","counter()":"counter( <counter-name> , <counter-style>? )","counter-name":"<custom-ident>","counter-style":"<counter-style-name>|symbols( )","counter-style-name":"<custom-ident>","counters()":"counters( <counter-name> , <string> , <counter-style>? )","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","cubic-bezier()":"cubic-bezier( [<number [0,1]> , <number>]#{2} )","cubic-bezier-timing-function":"ease|ease-in|ease-out|ease-in-out|<cubic-bezier()>","custom-color-space":"<dashed-ident>","custom-params":"<dashed-ident> [<number>|<percentage>|none]+",dasharray:"[[<length-percentage>|<number>]+]#","dashndashdigit-ident":"<ident-token>","deprecated-system-color":"ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonHighlight|ButtonShadow|CaptionText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText","discretionary-lig-values":"[discretionary-ligatures|no-discretionary-ligatures]","display-box":"contents|none","display-inside":"flow|flow-root|table|flex|grid|ruby","display-internal":"table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container","display-legacy":"inline-block|inline-list-item|inline-table|inline-flex|inline-grid","display-listitem":"<display-outside>?&&[flow|flow-root]?&&list-item","display-outside":"block|inline|run-in","drop-shadow()":"drop-shadow( [<color>?&&<length>{2,3}] )","easing-function":"<linear-easing-function>|<cubic-bezier-easing-function>|<step-easing-function>","east-asian-variant-values":"[jis78|jis83|jis90|jis04|simplified|traditional]","east-asian-width-values":"[full-width|proportional-width]","element()":"element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )","ellipse()":"ellipse( <radial-size>? [at <position>]? )","env()":"env( <custom-ident> , <declaration-value>? )","exp()":"exp( <calc-sum> )","explicit-track-list":"[<line-names>? <track-size>]+ <line-names>?","family-name":"<string>|<custom-ident>+","feature-tag-value":"<string> [<integer>|on|off]?","feature-type":"@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation","feature-value-block":"<feature-type> '{' <feature-value-declaration-list> '}'","feature-value-block-list":"<feature-value-block>+","feature-value-declaration":"<custom-ident> : <integer>+ ;","feature-value-declaration-list":"<feature-value-declaration>","feature-value-name":"<custom-ident>","filter-function":"<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>","filter-value-list":"[<filter-function>|<url>]+","final-bg-layer":"<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<visual-box>||<visual-box>","fit-content()":"fit-content( <length-percentage [0,\u221E]> )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )","fixed-size":"<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )","font-stretch-absolute":"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>","font-variant-css21":"[normal|small-caps]","font-weight-absolute":"normal|bold|<number [1,1000]>","form-control-identifier":"select","frequency-percentage":"<frequency>|<percentage>","generic-complete":"serif|sans-serif|system-ui|cursive|fantasy|math|monospace","general-enclosed":"[<function-token> <any-value>? )]|[( <any-value>? )]","generic-family":"<generic-script-specific>|<generic-complete>|<generic-incomplete>|<-non-standard-generic-family>","generic-incomplete":"ui-serif|ui-sans-serif|ui-monospace|ui-rounded","geometry-box":"<shape-box>|fill-box|stroke-box|view-box",gradient:"<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>","grayscale()":"grayscale( [<number>|<percentage>]? )","grid-line":"auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]","historical-lig-values":"[historical-ligatures|no-historical-ligatures]","hsl()":"hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )|hsl( [<hue>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )","hsla()":"hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )|hsla( [<hue>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",hue:"<number>|<angle>","hue-interpolation-method":"[shorter|longer|increasing|decreasing] hue","hue-rotate()":"hue-rotate( [<angle>|<zero>]? )","hwb()":"hwb( [<hue>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )","hypot()":"hypot( <calc-sum># )",image:"<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>","image()":"image( <image-tags>? [<image-src>? , <color>?]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[<image>|<string>] [<resolution>||type( <string> )]","image-src":"<url>|<string>","image-tags":"ltr|rtl","inflexible-breadth":"<length-percentage>|min-content|max-content|auto","inset()":"inset( <length-percentage>{1,4} [round <'border-radius'>]? )","invert()":"invert( [<number>|<percentage>]? )","keyframe-block":"<keyframe-selector># { <declaration-list> }","keyframe-selector":"from|to|<percentage [0,100]>|<timeline-range-name> <percentage>","keyframes-name":"<custom-ident>|<string>","lab()":"lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )","layer()":"layer( <layer-name> )","layer-name":"<ident> ['.' <ident>]*","lch()":"lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )","leader()":"leader( <leader-type> )","leader-type":"dotted|solid|space|<string>","length-percentage":"<length>|<percentage>","light-dark()":"light-dark( <color> , <color> )","line-name-list":"[<line-names>|<name-repeat>]+","line-names":"'[' <custom-ident>* ']'","line-style":"none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset","line-width":"<length>|thin|medium|thick","linear()":"linear( [<number>&&<percentage>{0,2}]# )","linear-color-hint":"<length-percentage>","linear-color-stop":"<color> <color-stop-length>?","linear-easing-function":"linear|<linear()>","linear-gradient()":"linear-gradient( [<linear-gradient-syntax>] )","linear-gradient-syntax":"[[<angle>|<zero>|to <side-or-corner>]||<color-interpolation-method>]? , <color-stop-list>","log()":"log( <calc-sum> , <calc-sum>? )","mask-layer":"<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>","mask-position":"[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?","mask-reference":"none|<image>|<mask-source>","mask-source":"<url>","masking-mode":"alpha|luminance|match-source","matrix()":"matrix( <number>#{6} )","matrix3d()":"matrix3d( <number>#{16} )","max()":"max( <calc-sum># )","media-and":"<media-in-parens> [and <media-in-parens>]+","media-condition":"<media-not>|<media-and>|<media-or>|<media-in-parens>","media-condition-without-or":"<media-not>|<media-and>|<media-in-parens>","media-feature":"( [<mf-plain>|<mf-boolean>|<mf-range>] )","media-in-parens":"( <media-condition> )|<media-feature>|<general-enclosed>","media-not":"not <media-in-parens>","media-or":"<media-in-parens> [or <media-in-parens>]+","media-query":"<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?","media-query-list":"<media-query>#","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","mf-plain":"<mf-name> : <mf-value>","mf-range":"<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>","mf-value":"<number>|<dimension>|<ident>|<ratio>","min()":"min( <calc-sum># )","minmax()":"minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )","mod()":"mod( <calc-sum> , <calc-sum> )","n-dimension":"<dimension-token>","name-repeat":"repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )","named-color":"aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen","namespace-prefix":"<ident>","ndash-dimension":"<dimension-token>","ndashdigit-dimension":"<dimension-token>","ndashdigit-ident":"<ident-token>","ns-prefix":"[<ident-token>|'*']? '|'","number-percentage":"<number>|<percentage>","numeric-figure-values":"[lining-nums|oldstyle-nums]","numeric-fraction-values":"[diagonal-fractions|stacked-fractions]","numeric-spacing-values":"[proportional-nums|tabular-nums]","offset-path":"<ray()>|<url>|<basic-shape>","oklab()":"oklab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )","oklch()":"oklch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )","opacity()":"opacity( [<number>|<percentage>]? )","opacity-value":"<number>|<percentage>","outline-line-style":"none|dotted|dashed|solid|double|groove|ridge|inset|outset","outline-radius":"<length>|<percentage>","overflow-position":"unsafe|safe","page-body":"<declaration>? [; <page-body>]?|<page-margin-box> <page-body>","page-margin-box":"<page-margin-box-type> '{' <declaration-list> '}'","page-margin-box-type":"@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom","page-selector":"<pseudo-page>+|<ident> <pseudo-page>*","page-selector-list":"[<page-selector>#]?","page-size":"A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",paint:"none|<color>|<url> [none|<color>]?|context-fill|context-stroke","paint()":"paint( <ident> , <declaration-value>? )","paint-box":"<visual-box>|fill-box|stroke-box","palette-identifier":"<dashed-ident>","palette-mix()":"palette-mix( <color-interpolation-method> , [[normal|light|dark|<palette-identifier>|<palette-mix()>]&&<percentage [0,100]>?]#{2} )","path()":"path( <'fill-rule'>? , <string> )","perspective()":"perspective( [<length [0,\u221E]>|none] )","polar-color-space":"hsl|hwb|lch|oklch","polygon()":"polygon( <'fill-rule'>? , [<length-percentage> <length-percentage>]# )",position:"[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]","position-area":"[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|center|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|center|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]","pow()":"pow( <calc-sum> , <calc-sum> )","predefined-rgb":"srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020","predefined-rgb-params":"<predefined-rgb> [<number>|<percentage>|none]{3}","pseudo-class-selector":"':' <ident-token>|':' <function-token> <any-value> ')'","pseudo-element-selector":"':' <pseudo-class-selector>|<legacy-pseudo-element-selector>","pseudo-page":": [left|right|first|blank]","query-in-parens":"( <container-condition> )|( <size-feature> )|style( <style-query> )|<general-enclosed>",quote:"open-quote|close-quote|no-open-quote|no-close-quote","radial-extent":"closest-corner|closest-side|farthest-corner|farthest-side","radial-gradient()":"radial-gradient( [<radial-gradient-syntax>] )","radial-gradient-syntax":"[[[<radial-shape>||<radial-size>]? [at <position>]?]||<color-interpolation-method>]? , <color-stop-list>","radial-shape":"circle|ellipse","radial-size":"<radial-extent>|<length [0,\u221E]>|<length-percentage [0,\u221E]>{2}",ratio:"<number [0,\u221E]> [/ <number [0,\u221E]>]?","ray()":"ray( <angle>&&<ray-size>?&&contain?&&[at <position>]? )","ray-size":"closest-side|closest-corner|farthest-side|farthest-corner|sides","rect()":"rect( [<length-percentage>|auto]{4} [round <'border-radius'>]? )","rectangular-color-space":"srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|lab|oklab|xyz|xyz-d50|xyz-d65","relative-selector":"<combinator>? <complex-selector>","relative-selector-list":"<relative-selector>#","relative-size":"larger|smaller","rem()":"rem( <calc-sum> , <calc-sum> )","repeat-style":"repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}","repeating-conic-gradient()":"repeating-conic-gradient( [<conic-gradient-syntax>] )","repeating-linear-gradient()":"repeating-linear-gradient( [<linear-gradient-syntax>] )","repeating-radial-gradient()":"repeating-radial-gradient( [<radial-gradient-syntax>] )","reversed-counter-name":"reversed( <counter-name> )","rgb()":"rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )|rgb( [<number>|<percentage>|none]{3} [/ [<alpha-value>|none]]? )","rgba()":"rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )|rgba( [<number>|<percentage>|none]{3} [/ [<alpha-value>|none]]? )","rotate()":"rotate( [<angle>|<zero>] )","rotate3d()":"rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )","rotateX()":"rotateX( [<angle>|<zero>] )","rotateY()":"rotateY( [<angle>|<zero>] )","rotateZ()":"rotateZ( [<angle>|<zero>] )","round()":"round( <rounding-strategy>? , <calc-sum> , <calc-sum> )","rounding-strategy":"nearest|up|down|to-zero","saturate()":"saturate( [<number>|<percentage>]? )","scale()":"scale( [<number>|<percentage>]#{1,2} )","scale3d()":"scale3d( [<number>|<percentage>]#{3} )","scaleX()":"scaleX( [<number>|<percentage>] )","scaleY()":"scaleY( [<number>|<percentage>] )","scaleZ()":"scaleZ( [<number>|<percentage>] )","scope-end":"<forgiving-selector-list>","scope-start":"<forgiving-selector-list>","scroll()":"scroll( [<scroller>||<axis>]? )",scroller:"root|nearest|self","scroll-state-feature":"<media-query-list>","scroll-state-in-parens":"( <scroll-state-query> )|( <scroll-state-feature> )|<general-enclosed>","scroll-state-query":"not <scroll-state-in-parens>|<scroll-state-in-parens> [[and <scroll-state-in-parens>]*|[or <scroll-state-in-parens>]*]|<scroll-state-feature>","selector-list":"<complex-selector-list>","self-position":"center|start|end|self-start|self-end|flex-start|flex-end","sepia()":"sepia( [<number>|<percentage>]? )",shadow:"inset?&&<length>{2,4}&&<color>?","shadow-t":"[<length>{2,3}&&<color>?]",shape:"rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )","shape-box":"<visual-box>|margin-box","side-or-corner":"[left|right]||[top|bottom]","sign()":"sign( <calc-sum> )","signed-integer":"<number-token>","signless-integer":"<number-token>","sin()":"sin( <calc-sum> )","single-animation":"<'animation-duration'>||<easing-function>||<'animation-delay'>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]||<single-animation-timeline>","single-animation-composition":"replace|add|accumulate","single-animation-direction":"normal|reverse|alternate|alternate-reverse","single-animation-fill-mode":"none|forwards|backwards|both","single-animation-iteration-count":"infinite|<number>","single-animation-play-state":"running|paused","single-animation-timeline":"auto|none|<dashed-ident>|<scroll()>|<view()>","single-transition":"[none|<single-transition-property>]||<time>||<easing-function>||<time>||<transition-behavior-value>","single-transition-property":"all|<custom-ident>",size:"closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}","size-feature":"<mf-plain>|<mf-boolean>|<mf-range>","skew()":"skew( [<angle>|<zero>] , [<angle>|<zero>]? )","skewX()":"skewX( [<angle>|<zero>] )","skewY()":"skewY( [<angle>|<zero>] )","sqrt()":"sqrt( <calc-sum> )","step-position":"jump-start|jump-end|jump-none|jump-both|start|end","step-easing-function":"step-start|step-end|<steps()>","steps()":"steps( <integer> , <step-position>? )","style-feature":"<declaration>","style-in-parens":"( <style-condition> )|( <style-feature> )|<general-enclosed>","style-query":"<style-condition>|<style-feature>","subclass-selector":"<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>","supports-condition":"not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*","supports-decl":"( <declaration> )","supports-feature":"<supports-decl>|<supports-selector-fn>","supports-in-parens":"( <supports-condition> )|<supports-feature>|<general-enclosed>","supports-selector-fn":"selector( <complex-selector> )",symbol:"<string>|<image>|<custom-ident>","symbols()":"symbols( <symbols-type>? [<string>|<image>]+ )","symbols-type":"cyclic|numeric|alphabetic|symbolic|fixed","system-color":"AccentColor|AccentColorText|ActiveText|ButtonBorder|ButtonFace|ButtonText|Canvas|CanvasText|Field|FieldText|GrayText|Highlight|HighlightText|LinkText|Mark|MarkText|SelectedItem|SelectedItemText|VisitedText","tan()":"tan( <calc-sum> )",target:"<target-counter()>|<target-counters()>|<target-text()>","target-counter()":"target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )","target-counters()":"target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )","target-text()":"target-text( [<string>|<url>] , [content|before|after|first-letter]? )","text-edge":"[text|cap|ex|ideographic|ideographic-ink] [text|alphabetic|ideographic|ideographic-ink]?","time-percentage":"<time>|<percentage>","timeline-range-name":"cover|contain|entry|exit|entry-crossing|exit-crossing","track-breadth":"<length-percentage>|<flex>|min-content|max-content|auto","track-list":"[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?","track-repeat":"repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )","track-size":"<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )","transform-function":"<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>","transform-list":"<transform-function>+","transition-behavior-value":"normal|allow-discrete","translate()":"translate( <length-percentage> , <length-percentage>? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","try-size":"most-width|most-height|most-block-size|most-inline-size","try-tactic":"flip-block||flip-inline||flip-start","type-or-unit":"string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%","type-selector":"<wq-name>|<ns-prefix>? '*'","var()":"var( <custom-property-name> , <declaration-value>? )","view()":"view( [<axis>||<'view-timeline-inset'>]? )","viewport-length":"auto|<length-percentage>","visual-box":"content-box|padding-box|border-box","wq-name":"<ns-prefix>? <ident-token>","xywh()":"xywh( <length-percentage>{2} <length-percentage [0,\u221E]>{2} [round <'border-radius'>]? )",xyz:"xyz|xyz-d50|xyz-d65","xyz-params":"<xyz-space> [<number>|<percentage>|none]{3}","-legacy-gradient":"<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>","-legacy-linear-gradient":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[<angle>|<side-or-corner>]? , <color-stop-list>","-legacy-radial-gradient":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side|closest-corner|farthest-side|farthest-corner|contain|cover","-legacy-radial-gradient-shape":"circle|ellipse","-non-standard-font":"-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body","-non-standard-color":"-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text","-non-standard-image-rendering":"optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast","-non-standard-overflow":"overlay|-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable","-non-standard-size":"intrinsic|min-intrinsic|-webkit-fill-available|-webkit-fit-content|-webkit-min-content|-webkit-max-content|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )","-webkit-gradient-color-stop":"from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )","-webkit-gradient-point":"[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]","-webkit-gradient-radius":"<length>|<percentage>","-webkit-gradient-type":"linear|radial","-webkit-mask-box-repeat":"repeat|stretch|round","-ms-filter-function-list":"<-ms-filter-function>+","-ms-filter-function":"<-ms-filter-function-progid>|<-ms-filter-function-legacy>","-ms-filter-function-progid":"'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]","-ms-filter-function-legacy":"<ident-token>|<function-token> <any-value>? )",age:"child|young|old","attr-name":"<wq-name>","attr-fallback":"<any-value>",bottom:"<length>|auto","cubic-bezier-easing-function":"ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )","generic-voice":"[<age>? <gender> <integer>?]",gender:"male|female|neutral","generic-script-specific":"generic( kai )|generic( fangsong )|generic( nastaliq )","-non-standard-generic-family":"-apple-system|BlinkMacSystemFont","intrinsic-size-keyword":"min-content|max-content|fit-content",left:"<length>|auto","device-cmyk()":"<legacy-device-cmyk-syntax>|<modern-device-cmyk-syntax>","legacy-device-cmyk-syntax":"device-cmyk( <number>#{4} )","modern-device-cmyk-syntax":"device-cmyk( <cmyk-component>{4} [/ [<alpha-value>|none]]? )","cmyk-component":"<number>|<percentage>|none","color-space":"<rectangular-color-space>|<polar-color-space>|<custom-color-space>",right:"<length>|auto","forgiving-selector-list":"<complex-real-selector-list>","forgiving-relative-selector-list":"<relative-real-selector-list>","complex-real-selector-list":"<complex-real-selector>#","simple-selector-list":"<simple-selector>#","relative-real-selector-list":"<relative-real-selector>#","complex-selector-unit":"[<compound-selector>? <pseudo-compound-selector>*]!","complex-real-selector":"<compound-selector> [<combinator>? <compound-selector>]*","relative-real-selector":"<combinator>? <complex-real-selector>","pseudo-compound-selector":"<pseudo-element-selector> <pseudo-class-selector>*","simple-selector":"<type-selector>|<subclass-selector>","legacy-pseudo-element-selector":"':' [before|after|first-line|first-letter]","svg-length":"<percentage>|<length>|<number>","svg-writing-mode":"lr-tb|rl-tb|tb-rl|lr|rl|tb",top:"<length>|auto",x:"<number>",y:"<number>",declaration:"<ident-token> : <declaration-value>? ['!' important]?","declaration-list":"[<declaration>? ';']* <declaration>?",url:"url( <string> <url-modifier>* )|<url-token>","url-modifier":"<ident>|<function-token> <any-value> )","number-zero-one":"<number [0,1]>","number-one-or-greater":"<number [1,\u221E]>","xyz-space":"xyz|xyz-d50|xyz-d65","style-condition":"not <style-in-parens>|<style-in-parens> [[and <style-in-parens>]*|[or <style-in-parens>]*]","-non-standard-display":"-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box","inset-area":"[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]","font-variant-css2":"normal|small-caps","font-width-css3":"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded","system-family-name":"caption|icon|menu|message-box|small-caption|status-bar"},properties:{"--*":"<declaration-value>","-ms-accelerator":"false|true","-ms-block-progression":"tb|rl|bt|lr","-ms-content-zoom-chaining":"none|chained","-ms-content-zoom-limit":"<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>","-ms-content-zoom-limit-max":"<percentage>","-ms-content-zoom-limit-min":"<percentage>","-ms-content-zoom-snap":"<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>","-ms-content-zoom-snap-points":"snapInterval( <percentage> , <percentage> )|snapList( <percentage># )","-ms-content-zoom-snap-type":"none|proximity|mandatory","-ms-content-zooming":"none|zoom","-ms-filter":"<string>","-ms-flow-from":"[none|<custom-ident>]#","-ms-flow-into":"[none|<custom-ident>]#","-ms-grid-columns":"none|<track-list>|<auto-track-list>","-ms-grid-rows":"none|<track-list>|<auto-track-list>","-ms-high-contrast-adjust":"auto|none","-ms-hyphenate-limit-chars":"auto|<integer>{1,3}","-ms-hyphenate-limit-lines":"no-limit|<integer>","-ms-hyphenate-limit-zone":"<percentage>|<length>","-ms-ime-align":"auto|after","-ms-overflow-style":"auto|none|scrollbar|-ms-autohiding-scrollbar","-ms-scroll-chaining":"chained|none","-ms-scroll-limit":"<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>","-ms-scroll-limit-x-max":"auto|<length>","-ms-scroll-limit-x-min":"<length>","-ms-scroll-limit-y-max":"auto|<length>","-ms-scroll-limit-y-min":"<length>","-ms-scroll-rails":"none|railed","-ms-scroll-snap-points-x":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-points-y":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-type":"none|proximity|mandatory","-ms-scroll-snap-x":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>","-ms-scroll-snap-y":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>","-ms-scroll-translation":"none|vertical-to-horizontal","-ms-scrollbar-3dlight-color":"<color>","-ms-scrollbar-arrow-color":"<color>","-ms-scrollbar-base-color":"<color>","-ms-scrollbar-darkshadow-color":"<color>","-ms-scrollbar-face-color":"<color>","-ms-scrollbar-highlight-color":"<color>","-ms-scrollbar-shadow-color":"<color>","-ms-scrollbar-track-color":"<color>","-ms-text-autospace":"none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space","-ms-touch-select":"grippers|none","-ms-user-select":"none|element|text","-ms-wrap-flow":"auto|both|start|end|maximum|clear","-ms-wrap-margin":"<length>","-ms-wrap-through":"wrap|none","-moz-appearance":"none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized","-moz-binding":"<url>|none","-moz-border-bottom-colors":"<color>+|none","-moz-border-left-colors":"<color>+|none","-moz-border-right-colors":"<color>+|none","-moz-border-top-colors":"<color>+|none","-moz-context-properties":"none|[fill|fill-opacity|stroke|stroke-opacity]#","-moz-float-edge":"border-box|content-box|margin-box|padding-box","-moz-force-broken-image-icon":"0|1","-moz-image-region":"<shape>|auto","-moz-orient":"inline|block|horizontal|vertical","-moz-outline-radius":"<outline-radius>{1,4} [/ <outline-radius>{1,4}]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore|stretch-to-fit","-moz-text-blink":"none|blink","-moz-user-focus":"ignore|normal|select-after|select-before|select-menu|select-same|select-all|none","-moz-user-input":"auto|none|enabled|disabled","-moz-user-modify":"read-only|read-write|write-only","-moz-window-dragging":"drag|no-drag","-moz-window-shadow":"default|menu|tooltip|sheet|none","-webkit-appearance":"none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button","-webkit-border-before":"<'border-width'>||<'border-style'>||<color>","-webkit-border-before-color":"<color>","-webkit-border-before-style":"<'border-style'>","-webkit-border-before-width":"<'border-width'>","-webkit-box-reflect":"[above|below|right|left]? <length>? <image>?","-webkit-line-clamp":"none|<integer>","-webkit-mask":"[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<visual-box>|border|padding|content|text]||[<visual-box>|border|padding|content]]#","-webkit-mask-attachment":"<attachment>#","-webkit-mask-clip":"[<coord-box>|no-clip|border|padding|content|text]#","-webkit-mask-composite":"<composite-style>#","-webkit-mask-image":"<mask-reference>#","-webkit-mask-origin":"[<coord-box>|border|padding|content]#","-webkit-mask-position":"<position>#","-webkit-mask-position-x":"[<length-percentage>|left|center|right]#","-webkit-mask-position-y":"[<length-percentage>|top|center|bottom]#","-webkit-mask-repeat":"<repeat-style>#","-webkit-mask-repeat-x":"repeat|no-repeat|space|round","-webkit-mask-repeat-y":"repeat|no-repeat|space|round","-webkit-mask-size":"<bg-size>#","-webkit-overflow-scrolling":"auto|touch","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length>||<color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default|none","-webkit-user-modify":"read-only|read-write|read-write-plaintext-only","-webkit-user-select":"auto|none|text|all","accent-color":"auto|<color>","align-content":"normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>","align-items":"normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]","align-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>","align-tracks":"[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#","alignment-baseline":"auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",all:"initial|inherit|unset|revert|revert-layer","anchor-name":"none|<dashed-ident>#","anchor-scope":"none|all|<dashed-ident>#",animation:"<single-animation>#","animation-composition":"<single-animation-composition>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[none|<keyframes-name>]#","animation-play-state":"<single-animation-play-state>#","animation-range":"[<'animation-range-start'> <'animation-range-end'>?]#","animation-range-end":"[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#","animation-range-start":"[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#","animation-timeline":"<single-animation-timeline>#","animation-timing-function":"<easing-function>#",appearance:"none|auto|textfield|menulist-button|<compat-auto>","aspect-ratio":"auto||<ratio>","backdrop-filter":"none|<filter-value-list>","backface-visibility":"visible|hidden",background:"[<bg-layer> ,]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<bg-clip>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<visual-box>#","background-position":"<bg-position>#","background-position-x":"[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#","background-position-y":"[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","baseline-shift":"baseline|sub|super|<svg-length>","block-size":"<'width'>",border:"<line-width>||<line-style>||<color>","border-block":"<'border-block-start'>","border-block-color":"<'border-top-color'>{1,2}","border-block-end":"<'border-top-width'>||<'border-top-style'>||<color>","border-block-end-color":"<'border-top-color'>","border-block-end-style":"<'border-top-style'>","border-block-end-width":"<'border-top-width'>","border-block-start":"<'border-top-width'>||<'border-top-style'>||<color>","border-block-start-color":"<'border-top-color'>","border-block-start-style":"<'border-top-style'>","border-block-start-width":"<'border-top-width'>","border-block-style":"<'border-top-style'>{1,2}","border-block-width":"<'border-top-width'>{1,2}","border-bottom":"<line-width>||<line-style>||<color>","border-bottom-color":"<'border-top-color'>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<line-style>","border-bottom-width":"<line-width>","border-collapse":"collapse|separate","border-color":"<color>{1,4}","border-end-end-radius":"<'border-top-left-radius'>","border-end-start-radius":"<'border-top-left-radius'>","border-image":"<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>","border-image-outset":"[<length>|<number>]{1,4}","border-image-repeat":"[stretch|repeat|round|space]{1,2}","border-image-slice":"<number-percentage>{1,4}&&fill?","border-image-source":"none|<image>","border-image-width":"[<length-percentage>|<number>|auto]{1,4}","border-inline":"<'border-block-start'>","border-inline-color":"<'border-top-color'>{1,2}","border-inline-end":"<'border-top-width'>||<'border-top-style'>||<color>","border-inline-end-color":"<'border-top-color'>","border-inline-end-style":"<'border-top-style'>","border-inline-end-width":"<'border-top-width'>","border-inline-start":"<'border-top-width'>||<'border-top-style'>||<color>","border-inline-start-color":"<'border-top-color'>","border-inline-start-style":"<'border-top-style'>","border-inline-start-width":"<'border-top-width'>","border-inline-style":"<'border-top-style'>{1,2}","border-inline-width":"<'border-top-width'>{1,2}","border-left":"<line-width>||<line-style>||<color>","border-left-color":"<color>","border-left-style":"<line-style>","border-left-width":"<line-width>","border-radius":"<length-percentage>{1,4} [/ <length-percentage>{1,4}]?","border-right":"<line-width>||<line-style>||<color>","border-right-color":"<color>","border-right-style":"<line-style>","border-right-width":"<line-width>","border-spacing":"<length> <length>?","border-start-end-radius":"<'border-top-left-radius'>","border-start-start-radius":"<'border-top-left-radius'>","border-style":"<line-style>{1,4}","border-top":"<line-width>||<line-style>||<color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<line-style>","border-top-width":"<line-width>","border-width":"<line-width>{1,4}",bottom:"<length>|<percentage>|auto","box-align":"start|center|end|baseline|stretch","box-decoration-break":"slice|clone","box-direction":"normal|reverse|inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single|multiple","box-ordinal-group":"<integer>","box-orient":"horizontal|vertical|inline-axis|block-axis|inherit","box-pack":"start|center|end|justify","box-shadow":"none|<shadow>#","box-sizing":"content-box|border-box","break-after":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-before":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-inside":"auto|avoid|avoid-page|avoid-column|avoid-region","caption-side":"top|bottom",caret:"<'caret-color'>||<'caret-shape'>","caret-color":"auto|<color>","caret-shape":"auto|bar|block|underscore",clear:"none|left|right|both|inline-start|inline-end",clip:"<shape>|auto","clip-path":"<clip-source>|[<basic-shape>||<geometry-box>]|none","clip-rule":"nonzero|evenodd",color:"<color>","color-interpolation-filters":"auto|sRGB|linearRGB","color-scheme":"normal|[light|dark|<custom-ident>]+&&only?","column-count":"<integer>|auto","column-fill":"auto|balance","column-gap":"normal|<length-percentage>","column-rule":"<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>","column-rule-color":"<color>","column-rule-style":"<'border-style'>","column-rule-width":"<'border-width'>","column-span":"none|all","column-width":"<length>|auto",columns:"<'column-width'>||<'column-count'>",contain:"none|strict|content|[[size||inline-size]||layout||style||paint]","contain-intrinsic-block-size":"auto? [none|<length>]","contain-intrinsic-height":"auto? [none|<length>]","contain-intrinsic-inline-size":"auto? [none|<length>]","contain-intrinsic-size":"[auto? [none|<length>]]{1,2}","contain-intrinsic-width":"auto? [none|<length>]",container:"<'container-name'> [/ <'container-type'>]?","container-name":"none|<custom-ident>+","container-type":"normal|[[size|inline-size]||scroll-state]",content:"normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?","content-visibility":"visible|auto|hidden","counter-increment":"[<counter-name> <integer>?]+|none","counter-reset":"[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none","counter-set":"[<counter-name> <integer>?]+|none",cursor:"[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",cx:"<length>|<percentage>",cy:"<length>|<percentage>",d:"none|path( <string> )",direction:"ltr|rtl",display:"[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>","dominant-baseline":"auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge","empty-cells":"show|hide","field-sizing":"content|fixed",fill:"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero|evenodd",filter:"none|<filter-value-list>|<-ms-filter-function-list>",flex:"none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]","flex-basis":"content|<'width'>","flex-direction":"row|row-reverse|column|column-reverse","flex-flow":"<'flex-direction'>||<'flex-wrap'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap|wrap|wrap-reverse",float:"left|right|none|inline-start|inline-end","flood-color":"<color>","flood-opacity":"<'opacity'>",font:"[[<'font-style'>||<font-variant-css2>||<'font-weight'>||<font-width-css3>]? <'font-size'> [/ <'line-height'>]? <'font-family'>#]|<system-family-name>|<-non-standard-font>","font-family":"[<family-name>|<generic-family>]#","font-feature-settings":"normal|<feature-tag-value>#","font-kerning":"auto|normal|none","font-language-override":"normal|<string>","font-optical-sizing":"auto|none","font-palette":"normal|light|dark|<palette-identifier>|<palette-mix()>","font-size":"<absolute-size>|<relative-size>|<length-percentage [0,\u221E]>|math","font-size-adjust":"none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]","font-smooth":"auto|never|always|<absolute-size>|<length>","font-stretch":"<font-stretch-absolute>","font-style":"normal|italic|oblique <angle>?","font-synthesis":"none|[weight||style||small-caps||position]","font-synthesis-position":"auto|none","font-synthesis-small-caps":"auto|none","font-synthesis-style":"auto|none","font-synthesis-weight":"auto|none","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-alternates":"normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]","font-variant-caps":"normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps","font-variant-east-asian":"normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-emoji":"normal|text|emoji|unicode","font-variant-ligatures":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]","font-variant-numeric":"normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]","font-variant-position":"normal|sub|super","font-variation-settings":"normal|[<string> <number>]#","font-weight":"<font-weight-absolute>|bolder|lighter","forced-color-adjust":"auto|none|preserve-parent-color",gap:"<'row-gap'> <'column-gap'>?",grid:"<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>","grid-area":"<grid-line> [/ <grid-line>]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[row|column]||dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [/ <grid-line>]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<'grid-row-gap'> <'grid-column-gap'>?","grid-row":"<grid-line> [/ <grid-line>]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?","grid-template-areas":"none|<string>+","grid-template-columns":"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?","grid-template-rows":"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?","hanging-punctuation":"none|[first||[force-end|allow-end]||last]",height:"auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>","hyphenate-character":"auto|<string>","hyphenate-limit-chars":"[auto|<integer>]{1,3}",hyphens:"none|manual|auto","image-orientation":"from-image|<angle>|[<angle>? flip]","image-rendering":"auto|crisp-edges|pixelated|smooth|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>","image-resolution":"[from-image||<resolution>]&&snap?","ime-mode":"auto|normal|active|inactive|disabled","initial-letter":"normal|[<number> <integer>?]","initial-letter-align":"[auto|alphabetic|hanging|ideographic]","inline-size":"<'width'>",inset:"<'top'>{1,4}","inset-block":"<'top'>{1,2}","inset-block-end":"<'top'>","inset-block-start":"<'top'>","inset-inline":"<'top'>{1,2}","inset-inline-end":"<'top'>","inset-inline-start":"<'top'>","interpolate-size":"numeric-only|allow-keywords",isolation:"auto|isolate","justify-content":"normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]","justify-items":"normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]","justify-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]","justify-tracks":"[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",left:"<length>|<percentage>|auto","letter-spacing":"normal|<length-percentage>","lighting-color":"<color>","line-break":"auto|loose|normal|strict|anywhere","line-clamp":"none|<integer>","line-height":"normal|<number>|<length>|<percentage>","line-height-step":"<length>","list-style":"<'list-style-type'>||<'list-style-position'>||<'list-style-image'>","list-style-image":"<image>|none","list-style-position":"inside|outside","list-style-type":"<counter-style>|<string>|none",margin:"<'margin-top'>{1,4}","margin-block":"<'margin-top'>{1,2}","margin-block-end":"<'margin-top'>","margin-block-start":"<'margin-top'>","margin-bottom":"<length-percentage>|auto","margin-inline":"<'margin-top'>{1,2}","margin-inline-end":"<'margin-top'>","margin-inline-start":"<'margin-top'>","margin-left":"<length-percentage>|auto","margin-right":"<length-percentage>|auto","margin-top":"<length-percentage>|auto","margin-trim":"none|in-flow|all",marker:"none|<url>","marker-end":"none|<url>","marker-mid":"none|<url>","marker-start":"none|<url>",mask:"<mask-layer>#","mask-border":"<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>","mask-border-mode":"luminance|alpha","mask-border-outset":"[<length>|<number>]{1,4}","mask-border-repeat":"[stretch|repeat|round|space]{1,2}","mask-border-slice":"<number-percentage>{1,4} fill?","mask-border-source":"none|<image>","mask-border-width":"[<length-percentage>|<number>|auto]{1,4}","mask-clip":"[<coord-box>|no-clip]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<coord-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance|alpha","masonry-auto-flow":"[pack|next]||[definite-first|ordered]","math-depth":"auto-add|add( <integer> )|<integer>","math-shift":"normal|compact","math-style":"normal|compact","max-block-size":"<'max-width'>","max-height":"none|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>","max-inline-size":"<'max-width'>","max-lines":"none|<integer>","max-width":"none|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>","min-block-size":"<'min-width'>","min-height":"auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>","min-inline-size":"<'min-width'>","min-width":"auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>","mix-blend-mode":"<blend-mode>|plus-lighter","object-fit":"fill|contain|cover|none|scale-down","object-position":"<position>","object-view-box":"none|<basic-shape-rect>",offset:"[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?","offset-anchor":"auto|<position>","offset-distance":"<length-percentage>","offset-path":"none|<offset-path>||<coord-box>","offset-position":"normal|auto|<position>","offset-rotate":"[auto|reverse]||<angle>",opacity:"<opacity-value>",order:"<integer>",orphans:"<integer>",outline:"<'outline-width'>||<'outline-style'>||<'outline-color'>","outline-color":"auto|<color>","outline-offset":"<length>","outline-style":"auto|<outline-line-style>","outline-width":"<line-width>",overflow:"[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>","overflow-anchor":"auto|none","overflow-block":"visible|hidden|clip|scroll|auto","overflow-clip-box":"padding-box|content-box","overflow-clip-margin":"<visual-box>||<length [0,\u221E]>","overflow-inline":"visible|hidden|clip|scroll|auto","overflow-wrap":"normal|break-word|anywhere","overflow-x":"visible|hidden|clip|scroll|auto|<-non-standard-overflow>","overflow-y":"visible|hidden|clip|scroll|auto|<-non-standard-overflow>",overlay:"none|auto","overscroll-behavior":"[contain|none|auto]{1,2}","overscroll-behavior-block":"contain|none|auto","overscroll-behavior-inline":"contain|none|auto","overscroll-behavior-x":"contain|none|auto","overscroll-behavior-y":"contain|none|auto",padding:"<'padding-top'>{1,4}","padding-block":"<'padding-top'>{1,2}","padding-block-end":"<'padding-top'>","padding-block-start":"<'padding-top'>","padding-bottom":"<length-percentage [0,\u221E]>","padding-inline":"<'padding-top'>{1,2}","padding-inline-end":"<'padding-top'>","padding-inline-start":"<'padding-top'>","padding-left":"<length-percentage [0,\u221E]>","padding-right":"<length-percentage [0,\u221E]>","padding-top":"<length-percentage [0,\u221E]>",page:"auto|<custom-ident>","page-break-after":"auto|always|avoid|left|right|recto|verso","page-break-before":"auto|always|avoid|left|right|recto|verso","page-break-inside":"auto|avoid","paint-order":"normal|[fill||stroke||markers]",perspective:"none|<length>","perspective-origin":"<position>","place-content":"<'align-content'> <'justify-content'>?","place-items":"<'align-items'> <'justify-items'>?","place-self":"<'align-self'> <'justify-self'>?","pointer-events":"auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",position:"static|relative|absolute|sticky|fixed|-webkit-sticky","position-anchor":"auto|<anchor-name>","position-area":"none|<position-area>","position-try":"<'position-try-order'>? <'position-try-fallbacks'>","position-try-fallbacks":"none|[[<dashed-ident>||<try-tactic>]|<'position-area'>]#","position-try-order":"normal|<try-size>","position-visibility":"always|[anchors-valid||anchors-visible||no-overflow]","print-color-adjust":"economy|exact",quotes:"none|auto|[<string> <string>]+",r:"<length>|<percentage>",resize:"none|both|horizontal|vertical|block|inline",right:"<length>|<percentage>|auto",rotate:"none|<angle>|[x|y|z|<number>{3}]&&<angle>","row-gap":"normal|<length-percentage>","ruby-align":"start|center|space-between|space-around","ruby-merge":"separate|collapse|auto","ruby-position":"[alternate||[over|under]]|inter-character",rx:"<length>|<percentage>",ry:"<length>|<percentage>",scale:"none|[<number>|<percentage>]{1,3}","scroll-behavior":"auto|smooth","scroll-initial-target":"none|nearest","scroll-margin":"<length>{1,4}","scroll-margin-block":"<length>{1,2}","scroll-margin-block-end":"<length>","scroll-margin-block-start":"<length>","scroll-margin-bottom":"<length>","scroll-margin-inline":"<length>{1,2}","scroll-margin-inline-end":"<length>","scroll-margin-inline-start":"<length>","scroll-margin-left":"<length>","scroll-margin-right":"<length>","scroll-margin-top":"<length>","scroll-padding":"[auto|<length-percentage>]{1,4}","scroll-padding-block":"[auto|<length-percentage>]{1,2}","scroll-padding-block-end":"auto|<length-percentage>","scroll-padding-block-start":"auto|<length-percentage>","scroll-padding-bottom":"auto|<length-percentage>","scroll-padding-inline":"[auto|<length-percentage>]{1,2}","scroll-padding-inline-end":"auto|<length-percentage>","scroll-padding-inline-start":"auto|<length-percentage>","scroll-padding-left":"auto|<length-percentage>","scroll-padding-right":"auto|<length-percentage>","scroll-padding-top":"auto|<length-percentage>","scroll-snap-align":"[none|start|end|center]{1,2}","scroll-snap-coordinate":"none|<position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none|repeat( <length-percentage> )","scroll-snap-points-y":"none|repeat( <length-percentage> )","scroll-snap-stop":"normal|always","scroll-snap-type":"none|[x|y|block|inline|both] [mandatory|proximity]?","scroll-snap-type-x":"none|mandatory|proximity","scroll-snap-type-y":"none|mandatory|proximity","scroll-timeline":"[<'scroll-timeline-name'> <'scroll-timeline-axis'>?]#","scroll-timeline-axis":"[block|inline|x|y]#","scroll-timeline-name":"[none|<dashed-ident>]#","scrollbar-color":"auto|<color>{2}","scrollbar-gutter":"auto|stable&&both-edges?","scrollbar-width":"auto|thin|none","shape-image-threshold":"<opacity-value>","shape-margin":"<length-percentage>","shape-outside":"none|[<shape-box>||<basic-shape>]|<image>","shape-rendering":"auto|optimizeSpeed|crispEdges|geometricPrecision","speak-as":"normal|spell-out||digits||[literal-punctuation|no-punctuation]","stop-color":"<'color'>","stop-opacity":"<'opacity'>",stroke:"<paint>","stroke-dasharray":"none|[<svg-length>+]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt|round|square","stroke-linejoin":"miter|round|bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<'opacity'>","stroke-width":"<svg-length>","tab-size":"<integer>|<length>","table-layout":"auto|fixed","text-align":"start|end|left|right|center|justify|match-parent","text-align-last":"auto|start|end|left|right|center|justify","text-anchor":"start|middle|end","text-box":"normal|<'text-box-trim'>||<'text-box-edge'>","text-box-edge":"auto|<text-edge>","text-box-trim":"none|trim-start|trim-end|trim-both","text-combine-upright":"none|all|[digits <integer>?]","text-decoration":"<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>","text-decoration-color":"<color>","text-decoration-line":"none|[underline||overline||line-through||blink]|spelling-error|grammar-error","text-decoration-skip":"none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]","text-decoration-skip-ink":"auto|all|none","text-decoration-style":"solid|double|dotted|dashed|wavy","text-decoration-thickness":"auto|from-font|<length>|<percentage>","text-emphasis":"<'text-emphasis-style'>||<'text-emphasis-color'>","text-emphasis-color":"<color>","text-emphasis-position":"auto|[over|under]&&[right|left]?","text-emphasis-style":"none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>","text-indent":"<length-percentage>&&hanging?&&each-line?","text-justify":"auto|inter-character|inter-word|none","text-orientation":"mixed|upright|sideways","text-overflow":"[clip|ellipsis|<string>]{1,2}","text-rendering":"auto|optimizeSpeed|optimizeLegibility|geometricPrecision","text-shadow":"none|<shadow-t>#","text-size-adjust":"none|auto|<percentage>","text-spacing-trim":"space-all|normal|space-first|trim-start","text-transform":"none|[capitalize|uppercase|lowercase]||full-width||full-size-kana|math-auto","text-underline-offset":"auto|<length>|<percentage>","text-underline-position":"auto|from-font|[under||[left|right]]","text-wrap":"<'text-wrap-mode'>||<'text-wrap-style'>","text-wrap-mode":"wrap|nowrap","text-wrap-style":"auto|balance|stable|pretty","timeline-scope":"none|<dashed-ident>#",top:"<length>|<percentage>|auto","touch-action":"auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",transform:"none|<transform-list>","transform-box":"content-box|border-box|fill-box|stroke-box|view-box","transform-origin":"[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?","transform-style":"flat|preserve-3d",transition:"<single-transition>#","transition-behavior":"<transition-behavior-value>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none|<single-transition-property>#","transition-timing-function":"<easing-function>#",translate:"none|<length-percentage> [<length-percentage> <length>?]?","unicode-bidi":"normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext","user-select":"auto|text|none|all","vector-effect":"none|non-scaling-stroke|non-scaling-size|non-rotation|fixed-position","vertical-align":"baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>","view-timeline":"[<'view-timeline-name'> [<'view-timeline-axis'>||<'view-timeline-inset'>]?]#","view-timeline-axis":"[block|inline|x|y]#","view-timeline-inset":"[[auto|<length-percentage>]{1,2}]#","view-timeline-name":"[none|<dashed-ident>]#","view-transition-class":"none|<custom-ident>+","view-transition-name":"none|<custom-ident>",visibility:"visible|hidden|collapse","white-space":"normal|pre|pre-wrap|pre-line|<'white-space-collapse'>||<'text-wrap-mode'>","white-space-collapse":"collapse|preserve|preserve-breaks|preserve-spaces|break-spaces",widows:"<integer>",width:"auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>","will-change":"auto|<animateable-feature>#","word-break":"normal|break-all|keep-all|break-word|auto-phrase","word-spacing":"normal|<length>","word-wrap":"normal|break-word","writing-mode":"horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",x:"<length>|<percentage>",y:"<length>|<percentage>","z-index":"auto|<integer>",zoom:"normal|reset|<number [0,\u221E]>||<percentage [0,\u221E]>","-moz-background-clip":"padding|border","-moz-border-radius-bottomleft":"<'border-bottom-left-radius'>","-moz-border-radius-bottomright":"<'border-bottom-right-radius'>","-moz-border-radius-topleft":"<'border-top-left-radius'>","-moz-border-radius-topright":"<'border-bottom-right-radius'>","-moz-control-character-visibility":"visible|hidden","-moz-osx-font-smoothing":"auto|grayscale","-moz-user-select":"none|text|all|-moz-none","-ms-flex-align":"start|end|center|baseline|stretch","-ms-flex-item-align":"auto|start|end|center|baseline|stretch","-ms-flex-line-pack":"start|end|center|justify|distribute|stretch","-ms-flex-negative":"<'flex-shrink'>","-ms-flex-pack":"start|end|center|justify|distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<'flex-grow'>","-ms-flex-preferred-size":"<'flex-basis'>","-ms-interpolation-mode":"nearest-neighbor|bicubic","-ms-grid-column-align":"start|end|center|stretch","-ms-grid-row-align":"start|end|center|stretch","-ms-hyphenate-limit-last":"none|always|column|page|spread","-webkit-background-clip":"[<visual-box>|border|padding|content|text]#","-webkit-column-break-after":"always|auto|avoid","-webkit-column-break-before":"always|auto|avoid","-webkit-column-break-inside":"always|auto|avoid","-webkit-font-smoothing":"auto|none|antialiased|subpixel-antialiased","-webkit-mask-box-image":"[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?","-webkit-print-color-adjust":"economy|exact","-webkit-text-security":"none|circle|disc|square","-webkit-user-drag":"none|element|auto",behavior:"<url>+",cue:"<'cue-before'> <'cue-after'>?","cue-after":"<url> <decibel>?|none","cue-before":"<url> <decibel>?|none","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>",kerning:"auto|<svg-length>",pause:"<'pause-before'> <'pause-after'>?","pause-after":"<time>|none|x-weak|weak|medium|strong|x-strong","pause-before":"<time>|none|x-weak|weak|medium|strong|x-strong","position-try-options":"<'position-try-fallbacks'>",rest:"<'rest-before'> <'rest-after'>?","rest-after":"<time>|none|x-weak|weak|medium|strong|x-strong","rest-before":"<time>|none|x-weak|weak|medium|strong|x-strong",speak:"auto|never|always","voice-balance":"<number>|left|center|right|leftwards|rightwards","voice-duration":"auto|<time>","voice-family":"[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve","voice-pitch":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-range":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-rate":"[normal|x-slow|slow|medium|fast|x-fast]||<percentage>","voice-stress":"normal|strong|moderate|none|reduced","voice-volume":"silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]","white-space-trim":"none|discard-before||discard-after||discard-inner"},atrules:{charset:{prelude:"<string>",descriptors:null},"counter-style":{prelude:"<counter-style-name>",descriptors:{"additive-symbols":"[<integer>&&<symbol>]#",fallback:"<counter-style-name>",negative:"<symbol> <symbol>?",pad:"<integer>&&<symbol>",prefix:"<symbol>",range:"[[<integer>|infinite]{2}]#|auto","speak-as":"auto|bullets|numbers|words|spell-out|<counter-style-name>",suffix:"<symbol>",symbols:"<symbol>+",system:"cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"}},container:{prelude:"[<container-name>]? <container-condition>",descriptors:null},document:{prelude:"[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",descriptors:null},"font-face":{prelude:null,descriptors:{"ascent-override":"normal|<percentage>","descent-override":"normal|<percentage>","font-display":"auto|block|swap|fallback|optional","font-family":"<family-name>","font-feature-settings":"normal|<feature-tag-value>#","font-stretch":"<font-stretch-absolute>{1,2}","font-style":"normal|italic|oblique <angle>{0,2}","font-variation-settings":"normal|[<string> <number>]#","font-weight":"<font-weight-absolute>{1,2}","line-gap-override":"normal|<percentage>","size-adjust":"<percentage>",src:"[<url> [format( <string># )]?|local( <family-name> )]#","unicode-range":"<unicode-range-token>#"}},"font-feature-values":{prelude:"<family-name>#",descriptors:null},"font-palette-values":{prelude:"<dashed-ident>",descriptors:{"base-palette":"light|dark|<integer [0,\u221E]>","font-family":"<family-name>#","override-colors":"[<integer [0,\u221E]> <color>]#"}},import:{prelude:"[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",descriptors:null},keyframes:{prelude:"<keyframes-name>",descriptors:null},layer:{prelude:"[<layer-name>#|<layer-name>?]",descriptors:null},media:{prelude:"<media-query-list>",descriptors:null},namespace:{prelude:"<namespace-prefix>? [<string>|<url>]",descriptors:null},page:{prelude:"<page-selector-list>",descriptors:{bleed:"auto|<length>",marks:"none|[crop||cross]","page-orientation":"upright|rotate-left|rotate-right",size:"<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"}},"position-try":{prelude:"<dashed-ident>",descriptors:{top:"<'top'>",left:"<'left'>",bottom:"<'bottom'>",right:"<'right'>","inset-block-start":"<'inset-block-start'>","inset-block-end":"<'inset-block-end'>","inset-inline-start":"<'inset-inline-start'>","inset-inline-end":"<'inset-inline-end'>","inset-block":"<'inset-block'>","inset-inline":"<'inset-inline'>",inset:"<'inset'>","margin-top":"<'margin-top'>","margin-left":"<'margin-left'>","margin-bottom":"<'margin-bottom'>","margin-right":"<'margin-right'>","margin-block-start":"<'margin-block-start'>","margin-block-end":"<'margin-block-end'>","margin-inline-start":"<'margin-inline-start'>","margin-inline-end":"<'margin-inline-end'>",margin:"<'margin'>","margin-block":"<'margin-block'>","margin-inline":"<'margin-inline'>",width:"<'width'>",height:"<'height'>","min-width":"<'min-width'>","min-height":"<'min-height'>","max-width":"<'max-width'>","max-height":"<'max-height'>","block-size":"<'block-size'>","inline-size":"<'inline-size'>","min-block-size":"<'min-block-size'>","min-inline-size":"<'min-inline-size'>","max-block-size":"<'max-block-size'>","max-inline-size":"<'max-inline-size'>","align-self":"<'align-self'>|anchor-center","justify-self":"<'justify-self'>|anchor-center"}},property:{prelude:"<custom-property-name>",descriptors:{inherits:"true|false","initial-value":"<declaration-value>?",syntax:"<string>"}},scope:{prelude:"[( <scope-start> )]? [to ( <scope-end> )]?",descriptors:null},"starting-style":{prelude:null,descriptors:null},supports:{prelude:"<supports-condition>",descriptors:null},"view-transition":{prelude:null,descriptors:{navigation:"auto|none",types:"none|<custom-ident>+"}},nest:{prelude:"<complex-selector-list>",descriptors:null}}},uc={};D(uc,{AnPlusB:()=>Ap,Atrule:()=>Cp,AtrulePrelude:()=>Lp,AttributeSelector:()=>zp,Block:()=>Pp,Brackets:()=>Dp,CDC:()=>Fp,CDO:()=>Up,ClassSelector:()=>qp,Combinator:()=>Vp,Comment:()=>Kp,Condition:()=>Xp,Declaration:()=>Jp,DeclarationList:()=>eg,Dimension:()=>ag,Feature:()=>ng,FeatureFunction:()=>rg,FeatureRange:()=>lg,Function:()=>dg,GeneralEnclosed:()=>hg,Hash:()=>pg,IdSelector:()=>bg,Identifier:()=>fg,Layer:()=>kg,LayerList:()=>Sg,MediaQuery:()=>xg,MediaQueryList:()=>jg,NestingSelector:()=>Tg,Nth:()=>Rg,Number:()=>Ig,Operator:()=>Pg,Parentheses:()=>Mg,Percentage:()=>Og,PseudoClassSelector:()=>Bg,PseudoElementSelector:()=>Hg,Ratio:()=>Gg,Raw:()=>Wg,Rule:()=>Yg,Scope:()=>$g,Selector:()=>Zg,SelectorList:()=>ef,String:()=>af,StyleSheet:()=>cf,SupportsDeclaration:()=>mf,TypeSelector:()=>uf,UnicodeRange:()=>gf,Url:()=>yf,Value:()=>Af,WhiteSpace:()=>Cf});var Ap={};D(Ap,{generate:()=>rx,name:()=>nx,parse:()=>jp,structure:()=>ix});var Ct=43,Je=45,Ni=110,ya=!0,ox=!1;function Mi(e,t){let a=this.tokenStart+e,o=this.charCodeAt(a);for((o===Ct||o===Je)&&(t&&this.error("Number sign is not allowed"),a++);a<this.tokenEnd;a++)_e(this.charCodeAt(a))||this.error("Integer is expected",a)}function mo(e){return Mi.call(this,0,e)}function Qt(e,t){if(!this.cmpChar(this.tokenStart+e,t)){let a="";switch(t){case Ni:a="N is expected";break;case Je:a="HyphenMinus is expected";break}this.error(a,this.tokenStart+e)}}function Al(){let e=0,t=0,a=this.tokenType;for(;a===13||a===25;)a=this.lookupType(++e);if(a!==10)if(this.isDelim(Ct,e)||this.isDelim(Je,e)){t=this.isDelim(Ct,e)?Ct:Je;do a=this.lookupType(++e);while(a===13||a===25);a!==10&&(this.skip(e),mo.call(this,ya))}else return null;return e>0&&this.skip(e),t===0&&(a=this.charCodeAt(this.tokenStart),a!==Ct&&a!==Je&&this.error("Number sign is expected")),mo.call(this,t!==0),t===Je?"-"+this.consume(10):this.consume(10)}var nx="AnPlusB",ix={a:[String,null],b:[String,null]};function jp(){let e=this.tokenStart,t=null,a=null;if(this.tokenType===10)mo.call(this,ox),a=this.consume(10);else if(this.tokenType===1&&this.cmpChar(this.tokenStart,Je))switch(t="-1",Qt.call(this,1,Ni),this.tokenEnd-this.tokenStart){case 2:this.next(),a=Al.call(this);break;case 3:Qt.call(this,2,Je),this.next(),this.skipSC(),mo.call(this,ya),a="-"+this.consume(10);break;default:Qt.call(this,2,Je),Mi.call(this,3,ya),this.next(),a=this.substrToCursor(e+2)}else if(this.tokenType===1||this.isDelim(Ct)&&this.lookupType(1)===1){let o=0;switch(t="1",this.isDelim(Ct)&&(o=1,this.next()),Qt.call(this,0,Ni),this.tokenEnd-this.tokenStart){case 1:this.next(),a=Al.call(this);break;case 2:Qt.call(this,1,Je),this.next(),this.skipSC(),mo.call(this,ya),a="-"+this.consume(10);break;default:Qt.call(this,1,Je),Mi.call(this,2,ya),this.next(),a=this.substrToCursor(e+o+1)}}else if(this.tokenType===12){let o=this.charCodeAt(this.tokenStart),n=o===Ct||o===Je,i=this.tokenStart+n;for(;i<this.tokenEnd&&_e(this.charCodeAt(i));i++);i===this.tokenStart+n&&this.error("Integer is expected",this.tokenStart+n),Qt.call(this,i-this.tokenStart,Ni),t=this.substring(e,i),i+1===this.tokenEnd?(this.next(),a=Al.call(this)):(Qt.call(this,i-this.tokenStart+1,Je),i+2===this.tokenEnd?(this.next(),this.skipSC(),mo.call(this,ya),a="-"+this.consume(10)):(Mi.call(this,i-this.tokenStart+2,ya),this.next(),a=this.substrToCursor(i+1)))}else this.error();return t!==null&&t.charCodeAt(0)===Ct&&(t=t.substr(1)),a!==null&&a.charCodeAt(0)===Ct&&(a=a.substr(1)),{type:"AnPlusB",loc:this.getLocation(e,this.tokenStart),a:t,b:a}}function rx(e){if(e.a){let t=e.a==="+1"&&"n"||e.a==="1"&&"n"||e.a==="-1"&&"-n"||e.a+"n";if(e.b){let a=e.b[0]==="-"||e.b[0]==="+"?e.b:"+"+e.b;this.tokenize(t+a)}else this.tokenize(t)}else this.tokenize(e.b)}var Cp={};D(Cp,{generate:()=>mx,name:()=>lx,parse:()=>Tp,structure:()=>dx,walkContext:()=>cx});function Lu(){return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon,!0)}function sx(){for(let e=1,t;t=this.lookupType(e);e++){if(t===24)return!0;if(t===23||t===3)return!1}return!1}var lx="Atrule",cx="atrule",dx={name:String,prelude:["AtrulePrelude","Raw",null],block:["Block",null]};function Tp(e=!1){let t=this.tokenStart,a,o,n=null,i=null;switch(this.eat(3),a=this.substrToCursor(t+1),o=a.toLowerCase(),this.skipSC(),this.eof===!1&&this.tokenType!==23&&this.tokenType!==17&&(this.parseAtrulePrelude?n=this.parseWithFallback(this.AtrulePrelude.bind(this,a,e),Lu):n=Lu.call(this,this.tokenIndex),this.skipSC()),this.tokenType){case 17:this.next();break;case 23:hasOwnProperty.call(this.atrule,o)&&typeof this.atrule[o].block=="function"?i=this.atrule[o].block.call(this,e):i=this.Block(sx.call(this));break}return{type:"Atrule",loc:this.getLocation(t,this.tokenStart),name:a,prelude:n,block:i}}function mx(e){this.token(3,"@"+e.name),e.prelude!==null&&this.node(e.prelude),e.block?this.node(e.block):this.token(17,";")}var Lp={};D(Lp,{generate:()=>gx,name:()=>hx,parse:()=>Rp,structure:()=>px,walkContext:()=>ux});var hx="AtrulePrelude",ux="atrulePrelude",px={children:[[]]};function Rp(e){let t=null;return e!==null&&(e=e.toLowerCase()),this.skipSC(),hasOwnProperty.call(this.atrule,e)&&typeof this.atrule[e].prelude=="function"?t=this.atrule[e].prelude.call(this):t=this.readSequence(this.scope.AtrulePrelude),this.skipSC(),this.eof!==!0&&this.tokenType!==23&&this.tokenType!==17&&this.error("Semicolon or block is expected"),{type:"AtrulePrelude",loc:this.getLocationFromList(t),children:t}}function gx(e){this.children(e)}var zp={};D(zp,{generate:()=>Ex,name:()=>vx,parse:()=>_p,structure:()=>Sx});var fx=36,Ip=42,Di=61,wx=94,Vl=124,bx=126;function yx(){this.eof&&this.error("Unexpected end of input");let e=this.tokenStart,t=!1;return this.isDelim(Ip)?(t=!0,this.next()):this.isDelim(Vl)||this.eat(1),this.isDelim(Vl)?this.charCodeAt(this.tokenStart+1)!==Di?(this.next(),this.eat(1)):t&&this.error("Identifier is expected",this.tokenEnd):t&&this.error("Vertical line is expected"),{type:"Identifier",loc:this.getLocation(e,this.tokenStart),name:this.substrToCursor(e)}}function kx(){let e=this.tokenStart,t=this.charCodeAt(e);return t!==Di&&t!==bx&&t!==wx&&t!==fx&&t!==Ip&&t!==Vl&&this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"),this.next(),t!==Di&&(this.isDelim(Di)||this.error("Equal sign is expected"),this.next()),this.substrToCursor(e)}var vx="AttributeSelector",Sx={name:"Identifier",matcher:[String,null],value:["String","Identifier",null],flags:[String,null]};function _p(){let e=this.tokenStart,t,a=null,o=null,n=null;return this.eat(19),this.skipSC(),t=yx.call(this),this.skipSC(),this.tokenType!==20&&(this.tokenType!==1&&(a=kx.call(this),this.skipSC(),o=this.tokenType===5?this.String():this.Identifier(),this.skipSC()),this.tokenType===1&&(n=this.consume(1),this.skipSC())),this.eat(20),{type:"AttributeSelector",loc:this.getLocation(e,this.tokenStart),name:t,matcher:a,value:o,flags:n}}function Ex(e){this.token(9,"["),this.node(e.name),e.matcher!==null&&(this.tokenize(e.matcher),this.node(e.value)),e.flags!==null&&this.token(1,e.flags),this.token(9,"]")}var Pp={};D(Pp,{generate:()=>Lx,name:()=>jx,parse:()=>Mp,structure:()=>Tx,walkContext:()=>Cx});var xx=38;function Np(){return this.Raw(null,!0)}function Ru(){return this.parseWithFallback(this.Rule,Np)}function zu(){return this.Raw(this.consumeUntilSemicolonIncluded,!0)}function Ax(){if(this.tokenType===17)return zu.call(this,this.tokenIndex);let e=this.parseWithFallback(this.Declaration,zu);return this.tokenType===17&&this.next(),e}var jx="Block",Cx="block",Tx={children:[["Atrule","Rule","Declaration"]]};function Mp(e){let t=e?Ax:Ru,a=this.tokenStart,o=this.createList();this.eat(23);e:for(;!this.eof;)switch(this.tokenType){case 24:break e;case 13:case 25:this.next();break;case 3:o.push(this.parseWithFallback(this.Atrule.bind(this,e),Np));break;default:e&&this.isDelim(xx)?o.push(Ru.call(this)):o.push(t.call(this))}return this.eof||this.eat(24),{type:"Block",loc:this.getLocation(a,this.tokenStart),children:o}}function Lx(e){this.token(23,"{"),this.children(e,t=>{t.type==="Declaration"&&this.token(17,";")}),this.token(24,"}")}var Dp={};D(Dp,{generate:()=>Ix,name:()=>Rx,parse:()=>Op,structure:()=>zx});var Rx="Brackets",zx={children:[[]]};function Op(e,t){let a=this.tokenStart,o=null;return this.eat(19),o=e.call(this,t),this.eof||this.eat(20),{type:"Brackets",loc:this.getLocation(a,this.tokenStart),children:o}}function Ix(e){this.token(9,"["),this.children(e),this.token(9,"]")}var Fp={};D(Fp,{generate:()=>Nx,name:()=>_x,parse:()=>Bp,structure:()=>Px});var _x="CDC",Px=[];function Bp(){let e=this.tokenStart;return this.eat(15),{type:"CDC",loc:this.getLocation(e,this.tokenStart)}}function Nx(){this.token(15,"-->")}var Up={};D(Up,{generate:()=>Ox,name:()=>Mx,parse:()=>Hp,structure:()=>Dx});var Mx="CDO",Dx=[];function Hp(){let e=this.tokenStart;return this.eat(14),{type:"CDO",loc:this.getLocation(e,this.tokenStart)}}function Ox(){this.token(14,"<!--")}var qp={};D(qp,{generate:()=>Hx,name:()=>Bx,parse:()=>Gp,structure:()=>Ux});var Fx=46,Bx="ClassSelector",Ux={name:String};function Gp(){return this.eatDelim(Fx),{type:"ClassSelector",loc:this.getLocation(this.tokenStart-1,this.tokenEnd),name:this.consume(1)}}function Hx(e){this.token(9,"."),this.token(1,e.name)}var Vp={};D(Vp,{generate:()=>Yx,name:()=>Wx,parse:()=>Wp,structure:()=>Kx});var qx=43,Iu=47,Gx=62,Vx=126,Wx="Combinator",Kx={name:String};function Wp(){let e=this.tokenStart,t;switch(this.tokenType){case 13:t=" ";break;case 9:switch(this.charCodeAt(this.tokenStart)){case Gx:case qx:case Vx:this.next();break;case Iu:this.next(),this.eatIdent("deep"),this.eatDelim(Iu);break;default:this.error("Combinator is expected")}t=this.substrToCursor(e);break}return{type:"Combinator",loc:this.getLocation(e,this.tokenStart),name:t}}function Yx(e){this.tokenize(e.name)}var Kp={};D(Kp,{generate:()=>Qx,name:()=>Jx,parse:()=>Yp,structure:()=>Zx});var Xx=42,$x=47,Jx="Comment",Zx={value:String};function Yp(){let e=this.tokenStart,t=this.tokenEnd;return this.eat(25),t-e+2>=2&&this.charCodeAt(t-2)===Xx&&this.charCodeAt(t-1)===$x&&(t-=2),{type:"Comment",loc:this.getLocation(e,this.tokenStart),value:this.substring(e+2,t)}}function Qx(e){this.token(25,"/*"+e.value+"*/")}var Xp={};D(Xp,{generate:()=>nA,name:()=>tA,parse:()=>$p,structure:()=>aA});var eA=new Set([16,22,0]),tA="Condition",aA={kind:String,children:[["Identifier","Feature","FeatureFunction","FeatureRange","SupportsDeclaration"]]};function _u(e){return this.lookupTypeNonSC(1)===1&&eA.has(this.lookupTypeNonSC(2))?this.Feature(e):this.FeatureRange(e)}var oA={media:_u,container:_u,supports(){return this.SupportsDeclaration()}};function $p(e="media"){let t=this.createList();e:for(;!this.eof;)switch(this.tokenType){case 25:case 13:this.next();continue;case 1:t.push(this.Identifier());break;case 21:{let a=this.parseWithFallback(()=>oA[e].call(this,e),()=>null);a||(a=this.parseWithFallback(()=>{this.eat(21);let o=this.Condition(e);return this.eat(22),o},()=>this.GeneralEnclosed(e))),t.push(a);break}case 2:{let a=this.parseWithFallback(()=>this.FeatureFunction(e),()=>null);a||(a=this.GeneralEnclosed(e)),t.push(a);break}default:break e}return t.isEmpty&&this.error("Condition is expected"),{type:"Condition",loc:this.getLocationFromList(t),kind:e,children:t}}function nA(e){e.children.forEach(t=>{t.type==="Condition"?(this.token(21,"("),this.node(t),this.token(22,")")):this.node(t)})}var Jp={};D(Jp,{generate:()=>fA,name:()=>uA,parse:()=>Qp,structure:()=>gA,walkContext:()=>pA});var Zp=33,iA=35,rA=36,sA=38,lA=42,cA=43,Pu=47;function dA(){return this.Raw(this.consumeUntilExclamationMarkOrSemicolon,!0)}function mA(){return this.Raw(this.consumeUntilExclamationMarkOrSemicolon,!1)}function hA(){let e=this.tokenIndex,t=this.Value();return t.type!=="Raw"&&this.eof===!1&&this.tokenType!==17&&this.isDelim(Zp)===!1&&this.isBalanceEdge(e)===!1&&this.error(),t}var uA="Declaration",pA="declaration",gA={important:[Boolean,String],property:String,value:["Value","Raw"]};function Qp(){let e=this.tokenStart,t=this.tokenIndex,a=wA.call(this),o=Ji(a),n=o?this.parseCustomProperty:this.parseValue,i=o?mA:dA,r=!1,s;this.skipSC(),this.eat(16);let l=this.tokenIndex;if(o||this.skipSC(),n?s=this.parseWithFallback(hA,i):s=i.call(this,this.tokenIndex),o&&s.type==="Value"&&s.children.isEmpty){for(let c=l-this.tokenIndex;c<=0;c++)if(this.lookupType(c)===13){s.children.appendData({type:"WhiteSpace",loc:null,value:" "});break}}return this.isDelim(Zp)&&(r=bA.call(this),this.skipSC()),this.eof===!1&&this.tokenType!==17&&this.isBalanceEdge(t)===!1&&this.error(),{type:"Declaration",loc:this.getLocation(e,this.tokenStart),important:r,property:a,value:s}}function fA(e){this.token(1,e.property),this.token(16,":"),this.node(e.value),e.important&&(this.token(9,"!"),this.token(1,e.important===!0?"important":e.important))}function wA(){let e=this.tokenStart;if(this.tokenType===9)switch(this.charCodeAt(this.tokenStart)){case lA:case rA:case cA:case iA:case sA:this.next();break;case Pu:this.next(),this.isDelim(Pu)&&this.next();break}return this.tokenType===4?this.eat(4):this.eat(1),this.substrToCursor(e)}function bA(){this.eat(9),this.skipSC();let e=this.consume(1);return e==="important"?!0:e}var eg={};D(eg,{generate:()=>SA,name:()=>kA,parse:()=>tg,structure:()=>vA});var yA=38;function jl(){return this.Raw(this.consumeUntilSemicolonIncluded,!0)}var kA="DeclarationList",vA={children:[["Declaration","Atrule","Rule"]]};function tg(){let e=this.createList();for(;!this.eof;)switch(this.tokenType){case 13:case 25:case 17:this.next();break;case 3:e.push(this.parseWithFallback(this.Atrule.bind(this,!0),jl));break;default:this.isDelim(yA)?e.push(this.parseWithFallback(this.Rule,jl)):e.push(this.parseWithFallback(this.Declaration,jl))}return{type:"DeclarationList",loc:this.getLocationFromList(e),children:e}}function SA(e){this.children(e,t=>{t.type==="Declaration"&&this.token(17,";")})}var ag={};D(ag,{generate:()=>AA,name:()=>EA,parse:()=>og,structure:()=>xA});var EA="Dimension",xA={value:String,unit:String};function og(){let e=this.tokenStart,t=this.consumeNumber(12);return{type:"Dimension",loc:this.getLocation(e,this.tokenStart),value:t,unit:this.substring(e+t.length,this.tokenStart)}}function AA(e){this.token(12,e.value+e.unit)}var ng={};D(ng,{generate:()=>LA,name:()=>CA,parse:()=>ig,structure:()=>TA});var jA=47,CA="Feature",TA={kind:String,name:String,value:["Identifier","Number","Dimension","Ratio","Function",null]};function ig(e){let t=this.tokenStart,a,o=null;if(this.eat(21),this.skipSC(),a=this.consume(1),this.skipSC(),this.tokenType!==22){switch(this.eat(16),this.skipSC(),this.tokenType){case 10:this.lookupNonWSType(1)===9?o=this.Ratio():o=this.Number();break;case 12:o=this.Dimension();break;case 1:o=this.Identifier();break;case 2:o=this.parseWithFallback(()=>{let n=this.Function(this.readSequence,this.scope.Value);return this.skipSC(),this.isDelim(jA)&&this.error(),n},()=>this.Ratio());break;default:this.error("Number, dimension, ratio or identifier is expected")}this.skipSC()}return this.eof||this.eat(22),{type:"Feature",loc:this.getLocation(t,this.tokenStart),kind:e,name:a,value:o}}function LA(e){this.token(21,"("),this.token(1,e.name),e.value!==null&&(this.token(16,":"),this.node(e.value)),this.token(22,")")}var rg={};D(rg,{generate:()=>_A,name:()=>RA,parse:()=>sg,structure:()=>zA});var RA="FeatureFunction",zA={kind:String,feature:String,value:["Declaration","Selector"]};function IA(e,t){let a=(this.features[e]||{})[t];return typeof a!="function"&&this.error(`Unknown feature ${t}()`),a}function sg(e="unknown"){let t=this.tokenStart,a=this.consumeFunctionName(),o=IA.call(this,e,a.toLowerCase());this.skipSC();let n=this.parseWithFallback(()=>{let i=this.tokenIndex,r=o.call(this);return this.eof===!1&&this.isBalanceEdge(i)===!1&&this.error(),r},()=>this.Raw(null,!1));return this.eof||this.eat(22),{type:"FeatureFunction",loc:this.getLocation(t,this.tokenStart),kind:e,feature:a,value:n}}function _A(e){this.token(2,e.feature+"("),this.node(e.value),this.token(22,")")}var lg={};D(lg,{generate:()=>OA,name:()=>MA,parse:()=>cg,structure:()=>DA});var Nu=47,PA=60,Mu=61,NA=62,MA="FeatureRange",DA={kind:String,left:["Identifier","Number","Dimension","Ratio","Function"],leftComparison:String,middle:["Identifier","Number","Dimension","Ratio","Function"],rightComparison:[String,null],right:["Identifier","Number","Dimension","Ratio","Function",null]};function Cl(){switch(this.skipSC(),this.tokenType){case 10:return this.isDelim(Nu,this.lookupOffsetNonSC(1))?this.Ratio():this.Number();case 12:return this.Dimension();case 1:return this.Identifier();case 2:return this.parseWithFallback(()=>{let e=this.Function(this.readSequence,this.scope.Value);return this.skipSC(),this.isDelim(Nu)&&this.error(),e},()=>this.Ratio());default:this.error("Number, dimension, ratio or identifier is expected")}}function Du(e){if(this.skipSC(),this.isDelim(PA)||this.isDelim(NA)){let t=this.source[this.tokenStart];return this.next(),this.isDelim(Mu)?(this.next(),t+"="):t}if(this.isDelim(Mu))return"=";this.error(`Expected ${e?'":", ':""}"<", ">", "=" or ")"`)}function cg(e="unknown"){let t=this.tokenStart;this.skipSC(),this.eat(21);let a=Cl.call(this),o=Du.call(this,a.type==="Identifier"),n=Cl.call(this),i=null,r=null;return this.lookupNonWSType(0)!==22&&(i=Du.call(this),r=Cl.call(this)),this.skipSC(),this.eat(22),{type:"FeatureRange",loc:this.getLocation(t,this.tokenStart),kind:e,left:a,leftComparison:o,middle:n,rightComparison:i,right:r}}function OA(e){this.token(21,"("),this.node(e.left),this.tokenize(e.leftComparison),this.node(e.middle),e.right&&(this.tokenize(e.rightComparison),this.node(e.right)),this.token(22,")")}var dg={};D(dg,{generate:()=>HA,name:()=>FA,parse:()=>mg,structure:()=>UA,walkContext:()=>BA});var FA="Function",BA="function",UA={name:String,children:[[]]};function mg(e,t){let a=this.tokenStart,o=this.consumeFunctionName(),n=o.toLowerCase(),i;return i=t.hasOwnProperty(n)?t[n].call(this,t):e.call(this,t),this.eof||this.eat(22),{type:"Function",loc:this.getLocation(a,this.tokenStart),name:o,children:i}}function HA(e){this.token(2,e.name+"("),this.children(e),this.token(22,")")}var hg={};D(hg,{generate:()=>VA,name:()=>qA,parse:()=>ug,structure:()=>GA});var qA="GeneralEnclosed",GA={kind:String,function:[String,null],children:[[]]};function ug(e){let t=this.tokenStart,a=null;this.tokenType===2?a=this.consumeFunctionName():this.eat(21);let o=this.parseWithFallback(()=>{let n=this.tokenIndex,i=this.readSequence(this.scope.Value);return this.eof===!1&&this.isBalanceEdge(n)===!1&&this.error(),i},()=>this.createSingleNodeList(this.Raw(null,!1)));return this.eof||this.eat(22),{type:"GeneralEnclosed",loc:this.getLocation(t,this.tokenStart),kind:e,function:a,children:o}}function VA(e){e.function?this.token(2,e.function+"("):this.token(21,"("),this.children(e),this.token(22,")")}var pg={};D(pg,{generate:()=>XA,name:()=>KA,parse:()=>gg,structure:()=>YA,xxx:()=>WA});var WA="XXX",KA="Hash",YA={value:String};function gg(){let e=this.tokenStart;return this.eat(4),{type:"Hash",loc:this.getLocation(e,this.tokenStart),value:this.substrToCursor(e+1)}}function XA(e){this.token(4,"#"+e.value)}var fg={};D(fg,{generate:()=>ZA,name:()=>$A,parse:()=>wg,structure:()=>JA});var $A="Identifier",JA={name:String};function wg(){return{type:"Identifier",loc:this.getLocation(this.tokenStart,this.tokenEnd),name:this.consume(1)}}function ZA(e){this.token(1,e.name)}var bg={};D(bg,{generate:()=>tj,name:()=>QA,parse:()=>yg,structure:()=>ej});var QA="IdSelector",ej={name:String};function yg(){let e=this.tokenStart;return this.eat(4),{type:"IdSelector",loc:this.getLocation(e,this.tokenStart),name:this.substrToCursor(e+1)}}function tj(e){this.token(9,"#"+e.name)}var kg={};D(kg,{generate:()=>ij,name:()=>oj,parse:()=>vg,structure:()=>nj});var aj=46,oj="Layer",nj={name:String};function vg(){let e=this.tokenStart,t=this.consume(1);for(;this.isDelim(aj);)this.eat(9),t+="."+this.consume(1);return{type:"Layer",loc:this.getLocation(e,this.tokenStart),name:t}}function ij(e){this.tokenize(e.name)}var Sg={};D(Sg,{generate:()=>lj,name:()=>rj,parse:()=>Eg,structure:()=>sj});var rj="LayerList",sj={children:[["Layer"]]};function Eg(){let e=this.createList();for(this.skipSC();!this.eof&&(e.push(this.Layer()),this.lookupTypeNonSC(0)===18);)this.skipSC(),this.next(),this.skipSC();return{type:"LayerList",loc:this.getLocationFromList(e),children:e}}function lj(e){this.children(e,()=>this.token(18,","))}var xg={};D(xg,{generate:()=>mj,name:()=>cj,parse:()=>Ag,structure:()=>dj});var cj="MediaQuery",dj={modifier:[String,null],mediaType:[String,null],condition:["Condition",null]};function Ag(){let e=this.tokenStart,t=null,a=null,o=null;if(this.skipSC(),this.tokenType===1&&this.lookupTypeNonSC(1)!==21){let n=this.consume(1),i=n.toLowerCase();switch(i==="not"||i==="only"?(this.skipSC(),t=i,a=this.consume(1)):a=n,this.lookupTypeNonSC(0)){case 1:{this.skipSC(),this.eatIdent("and"),o=this.Condition("media");break}case 23:case 17:case 18:case 0:break;default:this.error("Identifier or parenthesis is expected")}}else switch(this.tokenType){case 1:case 21:case 2:{o=this.Condition("media");break}case 23:case 17:case 0:break;default:this.error("Identifier or parenthesis is expected")}return{type:"MediaQuery",loc:this.getLocation(e,this.tokenStart),modifier:t,mediaType:a,condition:o}}function mj(e){e.mediaType?(e.modifier&&this.token(1,e.modifier),this.token(1,e.mediaType),e.condition&&(this.token(1,"and"),this.node(e.condition))):e.condition&&this.node(e.condition)}var jg={};D(jg,{generate:()=>pj,name:()=>hj,parse:()=>Cg,structure:()=>uj});var hj="MediaQueryList",uj={children:[["MediaQuery"]]};function Cg(){let e=this.createList();for(this.skipSC();!this.eof&&(e.push(this.MediaQuery()),this.tokenType===18);)this.next();return{type:"MediaQueryList",loc:this.getLocationFromList(e),children:e}}function pj(e){this.children(e,()=>this.token(18,","))}var Tg={};D(Tg,{generate:()=>bj,name:()=>fj,parse:()=>Lg,structure:()=>wj});var gj=38,fj="NestingSelector",wj={};function Lg(){let e=this.tokenStart;return this.eatDelim(gj),{type:"NestingSelector",loc:this.getLocation(e,this.tokenStart)}}function bj(){this.token(9,"&")}var Rg={};D(Rg,{generate:()=>vj,name:()=>yj,parse:()=>zg,structure:()=>kj});var yj="Nth",kj={nth:["AnPlusB","Identifier"],selector:["SelectorList",null]};function zg(){this.skipSC();let e=this.tokenStart,t=e,a=null,o;return this.lookupValue(0,"odd")||this.lookupValue(0,"even")?o=this.Identifier():o=this.AnPlusB(),t=this.tokenStart,this.skipSC(),this.lookupValue(0,"of")&&(this.next(),a=this.SelectorList(),t=this.tokenStart),{type:"Nth",loc:this.getLocation(e,t),nth:o,selector:a}}function vj(e){this.node(e.nth),e.selector!==null&&(this.token(1,"of"),this.node(e.selector))}var Ig={};D(Ig,{generate:()=>xj,name:()=>Sj,parse:()=>_g,structure:()=>Ej});var Sj="Number",Ej={value:String};function _g(){return{type:"Number",loc:this.getLocation(this.tokenStart,this.tokenEnd),value:this.consume(10)}}function xj(e){this.token(10,e.value)}var Pg={};D(Pg,{generate:()=>Cj,name:()=>Aj,parse:()=>Ng,structure:()=>jj});var Aj="Operator",jj={value:String};function Ng(){let e=this.tokenStart;return this.next(),{type:"Operator",loc:this.getLocation(e,this.tokenStart),value:this.substrToCursor(e)}}function Cj(e){this.tokenize(e.value)}var Mg={};D(Mg,{generate:()=>Rj,name:()=>Tj,parse:()=>Dg,structure:()=>Lj});var Tj="Parentheses",Lj={children:[[]]};function Dg(e,t){let a=this.tokenStart,o=null;return this.eat(21),o=e.call(this,t),this.eof||this.eat(22),{type:"Parentheses",loc:this.getLocation(a,this.tokenStart),children:o}}function Rj(e){this.token(21,"("),this.children(e),this.token(22,")")}var Og={};D(Og,{generate:()=>_j,name:()=>zj,parse:()=>Fg,structure:()=>Ij});var zj="Percentage",Ij={value:String};function Fg(){return{type:"Percentage",loc:this.getLocation(this.tokenStart,this.tokenEnd),value:this.consumeNumber(11)}}function _j(e){this.token(11,e.value+"%")}var Bg={};D(Bg,{generate:()=>Dj,name:()=>Pj,parse:()=>Ug,structure:()=>Mj,walkContext:()=>Nj});var Pj="PseudoClassSelector",Nj="function",Mj={name:String,children:[["Raw"],null]};function Ug(){let e=this.tokenStart,t=null,a,o;return this.eat(16),this.tokenType===2?(a=this.consumeFunctionName(),o=a.toLowerCase(),this.lookupNonWSType(0)==22?t=this.createList():hasOwnProperty.call(this.pseudo,o)?(this.skipSC(),t=this.pseudo[o].call(this),this.skipSC()):(t=this.createList(),t.push(this.Raw(null,!1))),this.eat(22)):a=this.consume(1),{type:"PseudoClassSelector",loc:this.getLocation(e,this.tokenStart),name:a,children:t}}function Dj(e){this.token(16,":"),e.children===null?this.token(1,e.name):(this.token(2,e.name+"("),this.children(e),this.token(22,")"))}var Hg={};D(Hg,{generate:()=>Uj,name:()=>Oj,parse:()=>qg,structure:()=>Bj,walkContext:()=>Fj});var Oj="PseudoElementSelector",Fj="function",Bj={name:String,children:[["Raw"],null]};function qg(){let e=this.tokenStart,t=null,a,o;return this.eat(16),this.eat(16),this.tokenType===2?(a=this.consumeFunctionName(),o=a.toLowerCase(),this.lookupNonWSType(0)==22?t=this.createList():hasOwnProperty.call(this.pseudo,o)?(this.skipSC(),t=this.pseudo[o].call(this),this.skipSC()):(t=this.createList(),t.push(this.Raw(null,!1))),this.eat(22)):a=this.consume(1),{type:"PseudoElementSelector",loc:this.getLocation(e,this.tokenStart),name:a,children:t}}function Uj(e){this.token(16,":"),this.token(16,":"),e.children===null?this.token(1,e.name):(this.token(2,e.name+"("),this.children(e),this.token(22,")"))}var Gg={};D(Gg,{generate:()=>Gj,name:()=>Hj,parse:()=>Vg,structure:()=>qj});var Ou=47;function Fu(){switch(this.skipSC(),this.tokenType){case 10:return this.Number();case 2:return this.Function(this.readSequence,this.scope.Value);default:this.error("Number of function is expected")}}var Hj="Ratio",qj={left:["Number","Function"],right:["Number","Function",null]};function Vg(){let e=this.tokenStart,t=Fu.call(this),a=null;return this.skipSC(),this.isDelim(Ou)&&(this.eatDelim(Ou),a=Fu.call(this)),{type:"Ratio",loc:this.getLocation(e,this.tokenStart),left:t,right:a}}function Gj(e){this.node(e.left),this.token(9,"/"),e.right?this.node(e.right):this.node(10,1)}var Wg={};D(Wg,{generate:()=>Yj,name:()=>Wj,parse:()=>Kg,structure:()=>Kj});function Vj(){return this.tokenIndex>0&&this.lookupType(-1)===13?this.tokenIndex>1?this.getTokenStart(this.tokenIndex-1):this.firstCharOffset:this.tokenStart}var Wj="Raw",Kj={value:String};function Kg(e,t){let a=this.getTokenStart(this.tokenIndex),o;return this.skipUntilBalanced(this.tokenIndex,e||this.consumeUntilBalanceEnd),t&&this.tokenStart>a?o=Vj.call(this):o=this.tokenStart,{type:"Raw",loc:this.getLocation(a,o),value:this.substring(a,o)}}function Yj(e){this.tokenize(e.value)}var Yg={};D(Yg,{generate:()=>Qj,name:()=>$j,parse:()=>Xg,structure:()=>Zj,walkContext:()=>Jj});function Bu(){return this.Raw(this.consumeUntilLeftCurlyBracket,!0)}function Xj(){let e=this.SelectorList();return e.type!=="Raw"&&this.eof===!1&&this.tokenType!==23&&this.error(),e}var $j="Rule",Jj="rule",Zj={prelude:["SelectorList","Raw"],block:["Block"]};function Xg(){let e=this.tokenIndex,t=this.tokenStart,a,o;return this.parseRulePrelude?a=this.parseWithFallback(Xj,Bu):a=Bu.call(this,e),o=this.Block(!0),{type:"Rule",loc:this.getLocation(t,this.tokenStart),prelude:a,block:o}}function Qj(e){this.node(e.prelude),this.node(e.block)}var $g={};D($g,{generate:()=>aC,name:()=>eC,parse:()=>Jg,structure:()=>tC});var eC="Scope",tC={root:["SelectorList","Raw",null],limit:["SelectorList","Raw",null]};function Jg(){let e=null,t=null;this.skipSC();let a=this.tokenStart;return this.tokenType===21&&(this.next(),this.skipSC(),e=this.parseWithFallback(this.SelectorList,()=>this.Raw(!1,!0)),this.skipSC(),this.eat(22)),this.lookupNonWSType(0)===1&&(this.skipSC(),this.eatIdent("to"),this.skipSC(),this.eat(21),this.skipSC(),t=this.parseWithFallback(this.SelectorList,()=>this.Raw(!1,!0)),this.skipSC(),this.eat(22)),{type:"Scope",loc:this.getLocation(a,this.tokenStart),root:e,limit:t}}function aC(e){e.root&&(this.token(21,"("),this.node(e.root),this.token(22,")")),e.limit&&(this.token(1,"to"),this.token(21,"("),this.node(e.limit),this.token(22,")"))}var Zg={};D(Zg,{generate:()=>iC,name:()=>oC,parse:()=>Qg,structure:()=>nC});var oC="Selector",nC={children:[["TypeSelector","IdSelector","ClassSelector","AttributeSelector","PseudoClassSelector","PseudoElementSelector","Combinator"]]};function Qg(){let e=this.readSequence(this.scope.Selector);return this.getFirstListNode(e)===null&&this.error("Selector is expected"),{type:"Selector",loc:this.getLocationFromList(e),children:e}}function iC(e){this.children(e)}var ef={};D(ef,{generate:()=>cC,name:()=>rC,parse:()=>tf,structure:()=>lC,walkContext:()=>sC});var rC="SelectorList",sC="selector",lC={children:[["Selector","Raw"]]};function tf(){let e=this.createList();for(;!this.eof;){if(e.push(this.Selector()),this.tokenType===18){this.next();continue}break}return{type:"SelectorList",loc:this.getLocationFromList(e),children:e}}function cC(e){this.children(e,()=>this.token(18,","))}var af={};D(af,{generate:()=>hC,name:()=>dC,parse:()=>lf,structure:()=>mC});var of={};D(of,{decode:()=>pc,encode:()=>sf});var Wl=92,nf=34,rf=39;function pc(e){let t=e.length,a=e.charCodeAt(0),o=a===nf||a===rf?1:0,n=o===1&&t>1&&e.charCodeAt(t-1)===a?t-2:t-1,i="";for(let r=o;r<=n;r++){let s=e.charCodeAt(r);if(s===Wl){if(r===n){r!==t-1&&(i=e.substr(r+1));break}if(s=e.charCodeAt(++r),pt(Wl,s)){let l=r-1,c=va(e,l);r=c-1,i+=ec(e.substring(l+1,c))}else s===13&&e.charCodeAt(r+1)===10&&r++}else i+=e[r]}return i}function sf(e,t){let a=t?"'":'"',o=t?rf:nf,n="",i=!1;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s===0){n+="\uFFFD";continue}if(s<=31||s===127){n+="\\"+s.toString(16),i=!0;continue}s===o||s===Wl?(n+="\\"+e.charAt(r),i=!1):(i&&(aa(s)||ka(s))&&(n+=" "),n+=e.charAt(r),i=!1)}return a+n+a}var dC="String",mC={value:String};function lf(){return{type:"String",loc:this.getLocation(this.tokenStart,this.tokenEnd),value:pc(this.consume(5))}}function hC(e){this.token(5,sf(e.value))}var cf={};D(cf,{generate:()=>wC,name:()=>pC,parse:()=>df,structure:()=>fC,walkContext:()=>gC});var uC=33;function Uu(){return this.Raw(null,!1)}var pC="StyleSheet",gC="stylesheet",fC={children:[["Comment","CDO","CDC","Atrule","Rule","Raw"]]};function df(){let e=this.tokenStart,t=this.createList(),a;for(;!this.eof;){switch(this.tokenType){case 13:this.next();continue;case 25:if(this.charCodeAt(this.tokenStart+2)!==uC){this.next();continue}a=this.Comment();break;case 14:a=this.CDO();break;case 15:a=this.CDC();break;case 3:a=this.parseWithFallback(this.Atrule,Uu);break;default:a=this.parseWithFallback(this.Rule,Uu)}t.push(a)}return{type:"StyleSheet",loc:this.getLocation(e,this.tokenStart),children:t}}function wC(e){this.children(e)}var mf={};D(mf,{generate:()=>kC,name:()=>bC,parse:()=>hf,structure:()=>yC});var bC="SupportsDeclaration",yC={declaration:"Declaration"};function hf(){let e=this.tokenStart;this.eat(21),this.skipSC();let t=this.Declaration();return this.eof||this.eat(22),{type:"SupportsDeclaration",loc:this.getLocation(e,this.tokenStart),declaration:t}}function kC(e){this.token(21,"("),this.node(e.declaration),this.token(22,")")}var uf={};D(uf,{generate:()=>xC,name:()=>SC,parse:()=>pf,structure:()=>EC});var vC=42,Hu=124;function Tl(){this.tokenType!==1&&this.isDelim(vC)===!1&&this.error("Identifier or asterisk is expected"),this.next()}var SC="TypeSelector",EC={name:String};function pf(){let e=this.tokenStart;return this.isDelim(Hu)?(this.next(),Tl.call(this)):(Tl.call(this),this.isDelim(Hu)&&(this.next(),Tl.call(this))),{type:"TypeSelector",loc:this.getLocation(e,this.tokenStart),name:this.substrToCursor(e)}}function xC(e){this.tokenize(e.name)}var gf={};D(gf,{generate:()=>LC,name:()=>CC,parse:()=>bf,structure:()=>TC});var ff=43,wf=45,Kl=63;function dn(e,t){let a=0;for(let o=this.tokenStart+e;o<this.tokenEnd;o++){let n=this.charCodeAt(o);if(n===wf&&t&&a!==0)return dn.call(this,e+a+1,!1),-1;aa(n)||this.error(t&&a!==0?"Hyphen minus"+(a<6?" or hex digit":"")+" is expected":a<6?"Hex digit is expected":"Unexpected input",o),++a>6&&this.error("Too many hex digits",o)}return this.next(),a}function Ri(e){let t=0;for(;this.isDelim(Kl);)++t>e&&this.error("Too many question marks"),this.next()}function AC(e){this.charCodeAt(this.tokenStart)!==e&&this.error((e===ff?"Plus sign":"Hyphen minus")+" is expected")}function jC(){let e=0;switch(this.tokenType){case 10:if(e=dn.call(this,1,!0),this.isDelim(Kl)){Ri.call(this,6-e);break}if(this.tokenType===12||this.tokenType===10){AC.call(this,wf),dn.call(this,1,!1);break}break;case 12:e=dn.call(this,1,!0),e>0&&Ri.call(this,6-e);break;default:if(this.eatDelim(ff),this.tokenType===1){e=dn.call(this,0,!0),e>0&&Ri.call(this,6-e);break}if(this.isDelim(Kl)){this.next(),Ri.call(this,5);break}this.error("Hex digit or question mark is expected")}}var CC="UnicodeRange",TC={value:String};function bf(){let e=this.tokenStart;return this.eatIdent("u"),jC.call(this),{type:"UnicodeRange",loc:this.getLocation(e,this.tokenStart),value:this.substrToCursor(e)}}function LC(e){this.tokenize(e.value)}var yf={};D(yf,{generate:()=>MC,name:()=>PC,parse:()=>xf,structure:()=>NC});var kf={};D(kf,{decode:()=>Sf,encode:()=>Ef});var RC=32,Yl=92,zC=34,IC=39,_C=40,vf=41;function Sf(e){let t=e.length,a=4,o=e.charCodeAt(t-1)===vf?t-2:t-1,n="";for(;a<o&&ka(e.charCodeAt(a));)a++;for(;a<o&&ka(e.charCodeAt(o));)o--;for(let i=a;i<=o;i++){let r=e.charCodeAt(i);if(r===Yl){if(i===o){i!==t-1&&(n=e.substr(i+1));break}if(r=e.charCodeAt(++i),pt(Yl,r)){let s=i-1,l=va(e,s);i=l-1,n+=ec(e.substring(s+1,l))}else r===13&&e.charCodeAt(i+1)===10&&i++}else n+=e[i]}return n}function Ef(e){let t="",a=!1;for(let o=0;o<e.length;o++){let n=e.charCodeAt(o);if(n===0){t+="\uFFFD";continue}if(n<=31||n===127){t+="\\"+n.toString(16),a=!0;continue}n===RC||n===Yl||n===zC||n===IC||n===_C||n===vf?(t+="\\"+e.charAt(o),a=!1):(a&&aa(n)&&(t+=" "),t+=e.charAt(o),a=!1)}return"url("+t+")"}var PC="Url",NC={value:String};function xf(){let e=this.tokenStart,t;switch(this.tokenType){case 7:t=Sf(this.consume(7));break;case 2:this.cmpStr(this.tokenStart,this.tokenEnd,"url(")||this.error("Function name must be `url`"),this.eat(2),this.skipSC(),t=pc(this.consume(5)),this.skipSC(),this.eof||this.eat(22);break;default:this.error("Url or Function is expected")}return{type:"Url",loc:this.getLocation(e,this.tokenStart),value:t}}function MC(e){this.token(7,Ef(e.value))}var Af={};D(Af,{generate:()=>FC,name:()=>DC,parse:()=>jf,structure:()=>OC});var DC="Value",OC={children:[[]]};function jf(){let e=this.tokenStart,t=this.readSequence(this.scope.Value);return{type:"Value",loc:this.getLocation(e,this.tokenStart),children:t}}function FC(e){this.children(e)}var Cf={};D(Cf,{generate:()=>qC,name:()=>UC,parse:()=>Tf,structure:()=>HC});var BC=Object.freeze({type:"WhiteSpace",loc:null,value:" "}),UC="WhiteSpace",HC={value:String};function Tf(){return this.eat(13),BC}function qC(e){this.token(13,e.value)}var GC={generic:!0,cssWideKeywords:oc,...ax,node:uc},Lf={};D(Lf,{AtrulePrelude:()=>$C,Selector:()=>sT,Value:()=>dT});var VC=35,WC=42,qu=43,KC=45,YC=47,XC=117;function Rf(e){switch(this.tokenType){case 4:return this.Hash();case 18:return this.Operator();case 21:return this.Parentheses(this.readSequence,e.recognizer);case 19:return this.Brackets(this.readSequence,e.recognizer);case 5:return this.String();case 12:return this.Dimension();case 11:return this.Percentage();case 10:return this.Number();case 2:return this.cmpStr(this.tokenStart,this.tokenEnd,"url(")?this.Url():this.Function(this.readSequence,e.recognizer);case 7:return this.Url();case 1:return this.cmpChar(this.tokenStart,XC)&&this.cmpChar(this.tokenStart+1,qu)?this.UnicodeRange():this.Identifier();case 9:{let t=this.charCodeAt(this.tokenStart);if(t===YC||t===WC||t===qu||t===KC)return this.Operator();t===VC&&this.error("Hex or identifier is expected",this.tokenStart+1);break}}}var $C={getNode:Rf},JC=35,ZC=38,QC=42,eT=43,tT=47,Gu=46,aT=62,oT=124,nT=126;function iT(e,t){t.last!==null&&t.last.type!=="Combinator"&&e!==null&&e.type!=="Combinator"&&t.push({type:"Combinator",loc:null,name:" "})}function rT(){switch(this.tokenType){case 19:return this.AttributeSelector();case 4:return this.IdSelector();case 16:return this.lookupType(1)===16?this.PseudoElementSelector():this.PseudoClassSelector();case 1:return this.TypeSelector();case 10:case 11:return this.Percentage();case 12:this.charCodeAt(this.tokenStart)===Gu&&this.error("Identifier is expected",this.tokenStart+1);break;case 9:{switch(this.charCodeAt(this.tokenStart)){case eT:case aT:case nT:case tT:return this.Combinator();case Gu:return this.ClassSelector();case QC:case oT:return this.TypeSelector();case JC:return this.IdSelector();case ZC:return this.NestingSelector()}break}}}var sT={onWhiteSpace:iT,getNode:rT};function lT(){return this.createSingleNodeList(this.Raw(null,!1))}function cT(){let e=this.createList();if(this.skipSC(),e.push(this.Identifier()),this.skipSC(),this.tokenType===18){e.push(this.Operator());let t=this.tokenIndex,a=this.parseCustomProperty?this.Value(null):this.Raw(this.consumeUntilExclamationMarkOrSemicolon,!1);if(a.type==="Value"&&a.children.isEmpty){for(let o=t-this.tokenIndex;o<=0;o++)if(this.lookupType(o)===13){a.children.appendData({type:"WhiteSpace",loc:null,value:" "});break}}e.push(a)}return e}function Vu(e){return e!==null&&e.type==="Operator"&&(e.value[e.value.length-1]==="-"||e.value[e.value.length-1]==="+")}var dT={getNode:Rf,onWhiteSpace(e,t){Vu(e)&&(e.value=" "+e.value),Vu(t.last)&&(t.last.value+=" ")},expression:lT,var:cT},mT=new Set(["none","and","not","or"]),hT={parse:{prelude(){let e=this.createList();if(this.tokenType===1){let t=this.substring(this.tokenStart,this.tokenEnd);mT.has(t.toLowerCase())||e.push(this.Identifier())}return e.push(this.Condition("container")),e},block(e=!1){return this.Block(e)}}},uT={parse:{prelude:null,block(){return this.Block(!0)}}};function Ll(e,t){return this.parseWithFallback(()=>{try{return e.call(this)}finally{this.skipSC(),this.lookupNonWSType(0)!==22&&this.error()}},t||(()=>this.Raw(null,!0)))}var Wu={layer(){this.skipSC();let e=this.createList(),t=Ll.call(this,this.Layer);return(t.type!=="Raw"||t.value!=="")&&e.push(t),e},supports(){this.skipSC();let e=this.createList(),t=Ll.call(this,this.Declaration,()=>Ll.call(this,()=>this.Condition("supports")));return(t.type!=="Raw"||t.value!=="")&&e.push(t),e}},pT={parse:{prelude(){let e=this.createList();switch(this.tokenType){case 5:e.push(this.String());break;case 7:case 2:e.push(this.Url());break;default:this.error("String or url() is expected")}return this.skipSC(),this.tokenType===1&&this.cmpStr(this.tokenStart,this.tokenEnd,"layer")?e.push(this.Identifier()):this.tokenType===2&&this.cmpStr(this.tokenStart,this.tokenEnd,"layer(")&&e.push(this.Function(null,Wu)),this.skipSC(),this.tokenType===2&&this.cmpStr(this.tokenStart,this.tokenEnd,"supports(")&&e.push(this.Function(null,Wu)),(this.lookupNonWSType(0)===1||this.lookupNonWSType(0)===21)&&e.push(this.MediaQueryList()),e},block:null}},gT={parse:{prelude(){return this.createSingleNodeList(this.LayerList())},block(){return this.Block(!1)}}},fT={parse:{prelude(){return this.createSingleNodeList(this.MediaQueryList())},block(e=!1){return this.Block(e)}}},wT={parse:{prelude(){return this.createSingleNodeList(this.SelectorList())},block(){return this.Block(!0)}}},bT={parse:{prelude(){return this.createSingleNodeList(this.SelectorList())},block(){return this.Block(!0)}}},yT={parse:{prelude(){return this.createSingleNodeList(this.Scope())},block(e=!1){return this.Block(e)}}},kT={parse:{prelude:null,block(e=!1){return this.Block(e)}}},vT={parse:{prelude(){return this.createSingleNodeList(this.Condition("supports"))},block(e=!1){return this.Block(e)}}},ST={container:hT,"font-face":uT,import:pT,layer:gT,media:fT,nest:wT,page:bT,scope:yT,"starting-style":kT,supports:vT};function ET(){let e=this.createList();this.skipSC();e:for(;!this.eof;){switch(this.tokenType){case 1:e.push(this.Identifier());break;case 5:e.push(this.String());break;case 18:e.push(this.Operator());break;case 22:break e;default:this.error("Identifier, string or comma is expected")}this.skipSC()}return e}var ba={parse(){return this.createSingleNodeList(this.SelectorList())}},Rl={parse(){return this.createSingleNodeList(this.Selector())}},xT={parse(){return this.createSingleNodeList(this.Identifier())}},AT={parse:ET},zi={parse(){return this.createSingleNodeList(this.Nth())}},jT={dir:xT,has:ba,lang:AT,matches:ba,is:ba,"-moz-any":ba,"-webkit-any":ba,where:ba,not:ba,"nth-child":zi,"nth-last-child":zi,"nth-last-of-type":zi,"nth-of-type":zi,slotted:Rl,host:Rl,"host-context":Rl},zf={};D(zf,{AnPlusB:()=>jp,Atrule:()=>Tp,AtrulePrelude:()=>Rp,AttributeSelector:()=>_p,Block:()=>Mp,Brackets:()=>Op,CDC:()=>Bp,CDO:()=>Hp,ClassSelector:()=>Gp,Combinator:()=>Wp,Comment:()=>Yp,Condition:()=>$p,Declaration:()=>Qp,DeclarationList:()=>tg,Dimension:()=>og,Feature:()=>ig,FeatureFunction:()=>sg,FeatureRange:()=>cg,Function:()=>mg,GeneralEnclosed:()=>ug,Hash:()=>gg,IdSelector:()=>yg,Identifier:()=>wg,Layer:()=>vg,LayerList:()=>Eg,MediaQuery:()=>Ag,MediaQueryList:()=>Cg,NestingSelector:()=>Lg,Nth:()=>zg,Number:()=>_g,Operator:()=>Ng,Parentheses:()=>Dg,Percentage:()=>Fg,PseudoClassSelector:()=>Ug,PseudoElementSelector:()=>qg,Ratio:()=>Vg,Raw:()=>Kg,Rule:()=>Xg,Scope:()=>Jg,Selector:()=>Qg,SelectorList:()=>tf,String:()=>lf,StyleSheet:()=>df,SupportsDeclaration:()=>hf,TypeSelector:()=>pf,UnicodeRange:()=>bf,Url:()=>xf,Value:()=>jf,WhiteSpace:()=>Tf});var CT={parseContext:{default:"StyleSheet",stylesheet:"StyleSheet",atrule:"Atrule",atrulePrelude(e){return this.AtrulePrelude(e.atrule?String(e.atrule):null)},mediaQueryList:"MediaQueryList",mediaQuery:"MediaQuery",condition(e){return this.Condition(e.kind)},rule:"Rule",selectorList:"SelectorList",selector:"Selector",block(){return this.Block(!0)},declarationList:"DeclarationList",declaration:"Declaration",value:"Value"},features:{supports:{selector(){return this.Selector()}},container:{style(){return this.Declaration()}}},scope:Lf,atrule:ST,pseudo:jT,node:zf},TT={node:uc},LT=xp({...GC,...CT,...TT}),RT="3.1.0";function Ot(e){let t={};for(let a of Object.keys(e)){let o=e[a];o&&(Array.isArray(o)||o instanceof Dt?o=o.map(Ot):o.constructor===Object&&(o=Ot(o))),t[a]=o}return t}var If={};D(If,{decode:()=>zT,encode:()=>IT});var Ku=92;function zT(e){let t=e.length-1,a="";for(let o=0;o<e.length;o++){let n=e.charCodeAt(o);if(n===Ku){if(o===t)break;if(n=e.charCodeAt(++o),pt(Ku,n)){let i=o-1,r=va(e,i);o=r-1,a+=ec(e.substring(i+1,r))}else n===13&&e.charCodeAt(o+1)===10&&o++}else a+=e[o]}return a}function IT(e){let t="";if(e.length===1&&e.charCodeAt(0)===45)return"\\-";for(let a=0;a<e.length;a++){let o=e.charCodeAt(a);if(o===0){t+="\uFFFD";continue}if(o<=31||o===127||o>=48&&o<=57&&(a===0||a===1&&e.charCodeAt(0)===45)){t+="\\"+o.toString(16)+" ";continue}Zl(o)?t+=e.charAt(a):t+="\\"+e.charAt(a)}return t}var{tokenize:_T,parse:re,generate:W,lexer:PT,createLexer:NT,walk:Tt,find:Ze,findLast:MT,findAll:gc,toPlainObject:DT,fromPlainObject:OT,fork:FT}=LT;var BT=new Set(["inherit","initial","unset"]),UT=new Set(["caption","icon","menu","message-box","small-caption","status-bar"]),HT=new Set(["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"]),qT=new Set(["normal","italic","oblique"]),GT=new Set(["normal","small-caps"]),VT=new Set(["normal","condensed","semi-condensed","extra-condensed","ultra-condensed","expanded","semi-expanded","extra-expanded","ultra-expanded"]),WT=new Set(["Dimension","Identifier","Percentage","Number","Function","UnaryExpression"]),KT=new Set(["style","variant","weight","stretch"]),_f="Operator",Pf="Identifier",go="normal",YT="/",XT=",",$T="[parse-css-font] ";function wc(e){let t=W(e),a=t.toLowerCase();if(UT.has(a))return{system:t};if(BT.has(a))return{global:t};let o=e.children,n={lineHeight:go,stretch:go,style:go,variant:go,weight:go},i={style:!1,variant:!1,weight:!1,stretch:!1};for(let r=o.head;r;r=r.next){let s=r.data.name||r.data.value||W(r.data),l=s.toLowerCase();if(l===go){KT.forEach(c=>{i[c]||(n[c]=s)});continue}if(HT.has(l)){i.weight||(n.weight=s,i.weight=!0);continue}if(qT.has(l)){i.style||(n.style=s,i.style=!0);continue}if(GT.has(l)){i.variant||(n.variant=s,i.variant=!0);continue}if(VT.has(l)){i.stretch||(n.stretch=s,i.stretch=!0);continue}if(WT.has(r.data.type)){if(n.size=W(r.data),r=r.next,r&&r.data.type==_f&&r.data.value==YT&&r.next&&(n.lineHeight=W(r.next.data),r=r.next.next),!r)throw fc("Missing required font-family.");n.family=[];let c="";for(;r;){for(;r&&r.data.type==_f&&r.data.value==XT;)r=r.next;if(r)if(r.data.type==Pf)for(;r&&r.data.type==Pf;)c+=" "+W(r.data),r=r.next;else c=JT(W(r.data)),r=r.next;c=c.trim(),c&&(n.family.push(c),c="")}return n}throw fc("Unknown or unsupported font token: "+s)}throw fc("Missing required font-size.")}function fc(e){return new Error($T+e)}function JT(e){return e&&((e[0]==='"'&&e[e.length-1]==='"'||e[0]==="'"&&e[e.length-1]==="'")&&(e=e.slice(1,-1)),Wo(e).trim())}var tr={};de(tr,{parseMediaList:()=>bc});function ZT(e,t=0){let a=[{mode:"normal",character:null}],o=[],n=0,i="",r=null,s=null,l=t,c=e;e[0]==="("&&e[e.length-1]===")"&&(c=e.substring(1,e.length-1),l++);for(let d=0;d<c.length;d++){let m=c[d];if((m==="'"||m==='"')&&(a[n].isCalculationEnabled===!0?(a.push({mode:"string",isCalculationEnabled:!1,character:m}),n++):a[n].mode==="string"&&a[n].character===m&&c[d-1]!=="\\"&&(a.pop(),n--)),m==="{"?(a.push({mode:"interpolation",isCalculationEnabled:!0}),n++):m==="}"&&(a.pop(),n--),a[n].mode==="normal"&&m===":"){let h=c.substring(d+1);s={type:"value",before:/^(\s*)/.exec(h)[1],after:/(\s*)$/.exec(h)[1],value:h.trim()},s.sourceIndex=s.before.length+d+1+l,r={type:"colon",sourceIndex:d+l,after:s.before,value:":"};break}i+=m}return i={type:"media-feature",before:/^(\s*)/.exec(i)[1],after:/(\s*)$/.exec(i)[1],value:i.trim()},i.sourceIndex=i.before.length+l,o.push(i),r!==null&&(r.before=i.after,o.push(r)),s!==null&&o.push(s),o}function Nf(e,t=0){let a=[],o=0,n=!1,i;function r(){return{before:"",after:"",value:""}}i=r();for(let s=0;s<e.length;s++){let l=e[s];n?(i.value+=l,(l==="{"||l==="(")&&o++,(l===")"||l==="}")&&o--):l.search(/\s/)!==-1?i.before+=l:(l==="("&&(i.type="media-feature-expression",o++),i.value=l,i.sourceIndex=t+s,n=!0),n&&o===0&&(l===")"||s===e.length-1||e[s+1].search(/\s/)!==-1)&&(["not","only","and"].indexOf(i.value)!==-1&&(i.type="keyword"),i.type==="media-feature-expression"&&(i.nodes=ZT(i.value,i.sourceIndex)),a.push(Array.isArray(i.nodes)?new Sa(i):new er(i)),i=r(),n=!1)}for(let s=0;s<a.length;s++)if(i=a[s],s>0&&(a[s-1].after=i.before),i.type===void 0){if(s>0){if(a[s-1].type==="media-feature-expression"){i.type="keyword";continue}if(a[s-1].value==="not"||a[s-1].value==="only"){i.type="media-type";continue}if(a[s-1].value==="and"){i.type="media-feature-expression";continue}a[s-1].type==="media-type"&&(a[s+1]?i.type=a[s+1].type==="media-feature-expression"?"keyword":"media-feature-expression":i.type="media-feature-expression")}if(s===0){if(!a[s+1]){i.type="media-type";continue}if(a[s+1]&&(a[s+1].type==="media-feature-expression"||a[s+1].type==="keyword")){i.type="media-type";continue}if(a[s+2]){if(a[s+2].type==="media-feature-expression"){i.type="media-type",a[s+1].type="keyword";continue}if(a[s+2].type==="keyword"){i.type="keyword",a[s+1].type="media-type";continue}}if(a[s+3]&&a[s+3].type==="media-feature-expression"){i.type="keyword",a[s+1].type="media-type",a[s+2].type="keyword";continue}}}return a}function bc(e){let t=[],a=0,o=0,n=/^(\s*)url\s*\(/.exec(e);if(n!==null){let s=n[0].length,l=1;for(;l>0;){let c=e[s];c==="("&&l++,c===")"&&l--,s++}t.unshift(new er({type:"url",value:e.substring(0,s).trim(),sourceIndex:n[1].length,before:n[1],after:/^(\s*)/.exec(e.substring(s))[1]})),a=s}for(let s=a;s<e.length;s++){let l=e[s];if(l==="("&&o++,l===")"&&o--,o===0&&l===","){let c=e.substring(a,s),d=/^(\s*)/.exec(c)[1];t.push(new Sa({type:"media-query",value:c.trim(),sourceIndex:a+d.length,nodes:Nf(c,a),before:d,after:/(\s*)$/.exec(c)[1]})),a=s+1}}let i=e.substring(a),r=/^(\s*)/.exec(i)[1];return t.push(new Sa({type:"media-query",value:i.trim(),sourceIndex:a+r.length,nodes:Nf(i,a),before:r,after:/(\s*)$/.exec(i)[1]})),t}function Sa(e){this.constructor(e),this.nodes=e.nodes,this.after===void 0&&(this.after=this.nodes.length>0?this.nodes[this.nodes.length-1].after:""),this.before===void 0&&(this.before=this.nodes.length>0?this.nodes[0].before:""),this.sourceIndex===void 0&&(this.sourceIndex=this.before.length),this.nodes.forEach(t=>{t.parent=this})}Sa.prototype=Object.create(er.prototype);Sa.constructor=er;Sa.prototype.walk=function(t,a){let o=typeof t=="string"||t instanceof RegExp,n=o?a:t,i=typeof t=="string"?new RegExp(t):t;for(let r=0;r<this.nodes.length;r++){let s=this.nodes[r];if((o?i.test(s.type):!0)&&n&&n(s,r,this.nodes)===!1||s.nodes&&s.walk(t,a)===!1)return!1}return!0};Sa.prototype.each=function(t=()=>{}){for(let a=0;a<this.nodes.length;a++){let o=this.nodes[a];if(t(o,a,this.nodes)===!1)return!1}return!0};function er(e){this.after=e.after,this.before=e.before,this.type=e.type,this.value=e.value,this.sourceIndex=e.sourceIndex}var yn={};de(yn,{defaultOptions:()=>Of,processString:()=>f1});var Qe="___PRESERVED_TOKEN_",Of={maxLineLen:0,expandVars:!1,uglyComments:!1,cuteComments:!1,debug:!1,output:""},QT=/url\(\s*(["']?)data:/g,yc=/\s+/g,e0=/\n/g;function t0(e,t){let a=QT,o=e.length-1,n=[],i=0,r;for(;(r=a.exec(e))!==null;){let s=r.index+4,l=r[1];l.length===0&&(l=")");let c=!1,d=a.lastIndex-1;for(;c===!1&&d+1<=o&&d!=-1;)d=e.indexOf(l,d+1),d>0&&e.charAt(d-1)!=="\\"&&(c=!0,l!=")"&&(d=e.indexOf(")",d)));if(n.push(e.substring(i,r.index)),c){let m=e.substring(s,d),h=m.split(",");h.length>1&&h[0].slice(-7)==";base64"?m=m.replace(yc,""):(m=m.replace(e0," "),m=m.replace(yc," "),m=m.replace(Ff,"")),t.push(m);let u="url("+Qe+(t.length-1)+"___)";n.push(u),i=d+1}else n.push(e.substring(r.index,a.lastIndex)),i=a.lastIndex}return n.push(e.substring(i)),n.join("")}var a0=/(=\s*?["']?)?#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])(\}|[^0-9a-f{][^{]*?\})/gi;function o0(e){let t=a0,a=[],o=0,n;for(;(n=t.exec(e))!==null;)a.push(e.substring(o,n.index)),n[1]?a.push(n[1]+"#"+(n[2]+n[3]+n[4]+n[5]+n[6]+n[7])):n[2].toLowerCase()==n[3].toLowerCase()&&n[4].toLowerCase()==n[5].toLowerCase()&&n[6].toLowerCase()==n[7].toLowerCase()?a.push("#"+(n[3]+n[5]+n[7]).toLowerCase()):a.push("#"+(n[2]+n[3]+n[4]+n[5]+n[6]+n[7]).toLowerCase()),o=t.lastIndex=t.lastIndex-n[8].length;return a.push(e.substring(o)),a.join("")}var n0=/@[a-z0-9-_]*keyframes\s+[a-z0-9-_]+\s*{/gi,ar=/(^\s|\s$)/g;function i0(e,t){let a=n0,o=0,n,i=(r,s)=>{r=r.replace(ar,""),r.charAt(0)==="0"&&(t.push(r),n[s]=Qe+(t.length-1)+"___")};for(;;){let r=0;n="";let s=e.slice(o).search(a);if(s<0)break;o+=s,s=o;let l=e.length,c=[];for(;o<l;++o){let d=e.charAt(o);if(d==="{")r===0?c.push(n.replace(ar,"")):r===1&&(n=n.split(","),n.forEach(i),c.push(n.join(",").replace(ar,""))),n="",r+=1;else if(d==="}"){if(r===2)c.push("{"+n.replace(ar,"")+"}"),n="";else if(r===1){e=e.slice(0,s)+c.shift()+"{"+c.join("")+e.slice(o);break}r-=1}if(r<0)break;d!=="{"&&d!=="}"&&(n+=d)}}return e}function r0(e,t){let a=[],o=0,n;for(;;){let i=e.indexOf("/*",o);if(i>-1)if(n=e.indexOf("*/",i+2),n>-1)t.push(e.slice(i+2,n)),a.push(e.slice(o,i)),a.push("/*___PRESERVE_CANDIDATE_COMMENT_"+(t.length-1)+"___*/"),o=n+2;else{n=-2;break}else break}return a.push(e.slice(n+2)),a.join("")}var s0=/"([^\\"])*"/g,l0=/"(\\.)*"/g,c0=/"(\\)*"/g,d0=/'([^\\'])*'/g,m0=/'(\\.)*'/g,h0=/'(\\)*'/g,u0=/progid:DXImageTransform.Microsoft.Alpha\(Opacity=/gi,p0=/\r\n/g,g0=/[\r\n]/g,f0=/@variables\s*\{\s*([^}]+)\s*\}/g,w0=/\s*([a-z0-9-]+)\s*:\s*([^;}]+)\s*/gi,b0=/var\s*\(\s*([^)]+)\s*\)/g,y0=/calc\(([^;}]*)\)/g,Mf=/(^\s*|\s*$)/g,k0=/\( /g,v0=/ \)/g,S0=/\s*filter:\s*progid:DXImageTransform.Microsoft.Matrix\(([^)]+)\);/g,E0=/(^|\})(([^{:])+:)+([^{]*{)/g,x0=/\s+([!{;:>+()\],])/g,A0=/([^\\])\s+([}])/g,j0=/!important/g,C0=/___PSEUDOCLASSCOLON___/g,T0=/:/g,L0=/\s*(animation|animation-delay|animation-duration|transition|transition-delay|transition-duration):\s*([^;}]+)/gi,R0=/(^|\D)0?\.?0(m?s)/gi,z0=/\s*(flex|flex-basis):\s*([^;}]+)/gi,I0=/\s+/,_0=/(hsla?)\(([^)]+)\)/g,Ff=/(^\s+|\s+$)/g,P0=/:first-(line|letter)(\{|,)/gi,N0=/^(.*)(@charset)( "[^"]*";)/gi,M0=/^((\s*)(@charset)( [^;]+;\s*))+/gi,D0=/@(font-face|import|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?keyframe|media|page|namespace)/gi,O0=/:(active|after|before|checked|disabled|empty|enabled|first-(?:child|of-type)|focus|hover|last-(?:child|of-type)|link|only-(?:child|of-type)|root|:selection|target|visited)/gi,F0=/^(.*)(@charset "[^"]*";)/g,B0=/^(\s*@charset [^;]+;\s*)+/g,U0=/:(lang|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?any)\(/gi,H0=/([:,( ]\s*)(attr|color-stop|from|rgba|to|url|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?(?:calc|max|min|(?:repeating-)?(?:linear|radial)-gradient)|-webkit-gradient)/gi,q0=/\s*\/\*/g,Df=/\*\/\s*/g,G0=/\band\(/gi,V0=/([^:])not\(/gi,W0=/\bor\(/gi,K0=/([!{}:;>+([,])\s+/g,Y0=/;+\}/g,X0=/([0-9])\.0(ex|ch|r?em|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|g?rad|turn|m?s|k?Hz|dpi|dpcm|dppx|%| |;)/gi,$0=/:0 0 0 0(;|\})/g,J0=/:0 0 0(;|\})/g,Z0=/(transform-origin|webkit-transform-origin|moz-transform-origin|o-transform-origin|ms-transform-origin|box-shadow):0(;|\})/gi,Q0=/(:|\s)0+\.(\d+)/g,e1=/rgb\s*\(\s*([0-9,\s]+)\s*\)/gi,t1=/(border|border-top|border-right|border-bottom|border-left|outline|background):none(;|\})/gi,a1=/progid:DXImageTransform\.Microsoft\.Alpha\(Opacity=/gi,o1=/\(([-A-Za-z]+):([0-9]+)\/([0-9]+)\)/g,n1=/___QUERY_FRACTION___/g,i1=/;;+/g,r1=/(:|\s)(#f00)(;|})/g,s1=/___PRESERVED_NEWLINE___/g,l1=/(:|\s)(#000080)(;|})/g,c1=/(:|\s)(#808080)(;|})/g,d1=/(:|\s)(#808000)(;|})/g,m1=/(:|\s)(#800080)(;|})/g,h1=/(:|\s)(#c0c0c0)(;|})/g,u1=/(:|\s)(#008080)(;|})/g,p1=/(:|\s)(#ffa500)(;|})/g,g1=/(:|\s)(#800000)(;|})/g;function f1(e="",t=Of){let a=[],o=[],n,i=e;e=t0(e,o),e=r0(e,a),r(s0),r(l0),r(c0),r(d0),r(m0),r(h0);function r(s){e=e.replace(s,l=>{let c=l.substring(0,1);if(l=l.slice(1,-1),l.indexOf("___PRESERVE_CANDIDATE_COMMENT_")>=0)for(let d=0,m=a.length;d<m;d+=1)l=l.replace("___PRESERVE_CANDIDATE_COMMENT_"+d+"___",a[d]);return l=l.replace(u0,"alpha(opacity="),o.push(l),c+Qe+(o.length-1)+"___"+c})}for(let s=0,l=a.length;s<l;s+=1){let c=a[s],d="___PRESERVE_CANDIDATE_COMMENT_"+s+"___";if(c.charAt(0)==="!"){t.cuteComments?o.push(c.substring(1).replace(p0,`
`)):t.uglyComments?o.push(c.substring(1).replace(g0,"")):o.push(c),e=e.replace(d,Qe+(o.length-1)+"___");continue}if(c.charAt(c.length-1)==="\\"){o.push("\\"),e=e.replace(d,Qe+(o.length-1)+"___"),s=s+1,o.push(""),e=e.replace("___PRESERVE_CANDIDATE_COMMENT_"+s+"___",Qe+(o.length-1)+"___");continue}if(c.length===0){let m=e.indexOf(d);m>2&&e.charAt(m-3)===">"&&(o.push(""),e=e.replace(d,Qe+(o.length-1)+"___"))}e=e.replace(`/*${d}*/`,"")}if(t.expandVars){let s={};n=f0,e=e.replace(n,(l,c)=>(n=w0,c.replace(n,(d,m,h)=>(m&&h&&(s[m]=h),"")),"")),n=b0,e=e.replace(n,(l,c)=>s[c]||"none")}e=e.replace(yc," "),n=y0,e=e.replace(n,(s,l)=>(o.push("calc("+l.replace(Mf,"").replace(k0,"(").replace(v0,")")+")"),Qe+(o.length-1)+"___")),n=S0,e=e.replace(n,(s,l)=>(o.push(l),"filter:progid:DXImageTransform.Microsoft.Matrix("+Qe+(o.length-1)+"___);"));try{n=E0,e=e.replace(n,s=>s.replace(T0,"___PSEUDOCLASSCOLON___"))}catch{}if(e=e.replace(x0,"$1"),e=e.replace(A0,"$1$2"),e=e.replace(j0," !important"),e=e.replace(C0,":"),n=L0,e=e.replace(n,(s,l,c)=>(c=c.replace(R0,(d,m,h)=>(o.push("0"+h),m+Qe+(o.length-1)+"___")),l+":"+c)),n=z0,e=e.replace(n,(s,l,c)=>{let d=c.split(I0);return o.push(d.pop()),d.push(Qe+(o.length-1)+"___"),d=d.join(" "),`${l}:${d}`}),e=e.replace(_0,(s,l,c)=>{let d=[];return c.split(",").forEach(m=>{m=m.replace(Ff,""),m==="0%"?(o.push("0%"),d.push(Qe+(o.length-1)+"___")):d.push(m)}),l+"("+d.join(",")+")"}),e=i0(e,o),e=e.replace(P0,(s,l,c)=>":first-"+l.toLowerCase()+" "+c),t.cuteComments?(e=e.replace(q0,"___PRESERVED_NEWLINE___/*"),e=e.replace(Df,"*/___PRESERVED_NEWLINE___")):e=e.replace(Df,"*/"),n=N0,e=e.replace(n,(s,l,c,d)=>c.toLowerCase()+d+l),n=M0,e=e.replace(n,(s,l,c,d,m)=>c+d.toLowerCase()+m),n=D0,e=e.replace(n,(s,l)=>"@"+l.toLowerCase()),n=O0,e=e.replace(n,(s,l)=>":"+l.toLowerCase()),e=e.replace(F0,"$2$1"),e=e.replace(B0,"$1"),n=U0,e=e.replace(n,(s,l)=>":"+l.toLowerCase()+"("),n=H0,e=e.replace(n,(s,l,c)=>l+c.toLowerCase()),e=e.replace(G0,"and ("),e=e.replace(V0,"$1not ("),e=e.replace(W0,"or ("),e=e.replace(K0,"$1"),e=e.replace(Y0,"}"),e=e.replace(X0,"$1$2"),e=e.replace($0,":0$1"),e=e.replace(J0,":0$1"),n=Z0,e=e.replace(n,(s,l,c)=>l.toLowerCase()+":0 0"+c),e=e.replace(Q0,"$1.$2"),n=e1,e=e.replace(n,(s,l)=>{let c=l.split(","),d="#";for(let m=0;m<c.length;m+=1){let h=parseInt(c[m],10);h<16&&(d+="0"),h>255&&(h=255),d+=h.toString(16)}return d}),e=o0(e),e=e.replace(r1,"$1red$3"),e=e.replace(l1,"$1navy$3"),e=e.replace(c1,"$1gray$3"),e=e.replace(d1,"$1olive$3"),e=e.replace(m1,"$1purple$3"),e=e.replace(h1,"$1silver$3"),e=e.replace(u1,"$1teal$3"),e=e.replace(p1,"$1orange$3"),e=e.replace(g1,"$1maroon$3"),n=t1,e=e.replace(n,(s,l,c)=>l.toLowerCase()+":0"+c),e=e.replace(a1,"alpha(opacity="),e=e.replace(o1,"($1:$2___QUERY_FRACTION___$3)"),e=e.replace(n1,"/"),t.maxLineLen>0){let s=[],l=[];for(let c=0,d=e.length;c<d;c+=1){let m=e.charAt(c);l.push(m),m==="}"&&l.length>t.maxLineLen&&(s.push(l.join("")),l=[])}l.length&&s.push(l.join("")),e=s.join(`
`)}if(e=e.replace(i1,";"),e=e.replace(Mf,""),o.length>1e3)return i;for(let s=o.length-1;s>=0;s--)e=e.replace(Qe+s+"___",o[s],"g");return e=e.replace(s1,`
`),e}var fo={};de(fo,{process:()=>kc});function kc(e){function t(k){return k===" "||k==="	"||k===`
`||k==="\f"||k==="\r"}function a(k){let A,y=k.exec(e.substring(g));if(y)return A=y[0],g+=A.length,A}let o=e.length,n=/^[ \t\n\r\u000c]+/,i=/^[, \t\n\r\u000c]+/,r=/^[^ \t\n\r\u000c]+/,s=/[,]+$/,l=/^\d+$/,c=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,d,m,h,u,p,g=0,b=[];for(;;){if(a(i),g>=o)return b;d=a(r),m=[],d.slice(-1)===","?(d=d.replace(s,""),S()):f()}function f(){for(a(n),h="",u="in descriptor";;){if(p=e.charAt(g),u==="in descriptor")if(t(p))h&&(m.push(h),h="",u="after descriptor");else if(p===","){g+=1,h&&m.push(h),S();return}else if(p==="(")h=h+p,u="in parens";else if(p===""){h&&m.push(h),S();return}else h=h+p;else if(u==="in parens")if(p===")")h=h+p,u="in descriptor";else if(p===""){m.push(h),S();return}else h=h+p;else if(u==="after descriptor"&&!t(p))if(p===""){S();return}else u="in descriptor",g-=1;g+=1}}function S(){let k=!1,A,y,x,C,w,v,T,j,P,F={};for(C=0;C<m.length;C++)w=m[C],v=w[w.length-1],T=w.substring(0,w.length-1),j=parseInt(T,10),P=parseFloat(T),l.test(T)&&v==="w"?((A||y)&&(k=!0),j===0?k=!0:A=j):c.test(T)&&v==="x"?((A||y||x)&&(k=!0),P<0?k=!0:y=P):l.test(T)&&v==="h"?((x||y)&&(k=!0),j===0?k=!0:x=j):k=!0;k?console&&console.log&&console.log('Invalid srcset descriptor found in "'+e+'" at "'+w+'".'):(F.url=d,A&&(F.w=A),y&&(F.d=y),x&&(F.h=x),b.push(F))}}var wt,Bf,Uf,kn;wt={},wt.removeLeadingAndTrailingHTTPWhitespace=e=>e.replace(/^[ \t\n\r]+/,"").replace(/[ \t\n\r]+$/,""),wt.removeTrailingHTTPWhitespace=e=>e.replace(/[ \t\n\r]+$/,""),wt.isHTTPWhitespaceChar=e=>e===" "||e==="	"||e===`
`||e==="\r",wt.solelyContainsHTTPTokenCodePoints=e=>/^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/.test(e),wt.soleyContainsHTTPQuotedStringTokenCodePoints=e=>/^[\t\u0020-\u007E\u0080-\u00FF]*$/.test(e),wt.asciiLowercase=e=>e.replace(/[A-Z]/g,t=>t.toLowerCase()),wt.collectAnHTTPQuotedString=(e,t)=>{let a="";for(t++;;){for(;t<e.length&&e[t]!=='"'&&e[t]!=="\\";)a+=e[t],++t;if(t>=e.length)break;let o=e[t];if(++t,o==="\\"){if(t>=e.length){a+="\\";break}a+=e[t],++t}else break}return[a,t]};{let{solelyContainsHTTPTokenCodePoints:e}=wt;Uf=t=>{let a=`${t.type}/${t.subtype}`;if(t.parameters.size===0)return a;for(let[o,n]of t.parameters)a+=";",a+=o,a+="=",(!e(n)||n.length===0)&&(n=n.replace(/(["\\])/g,"\\$1"),n=`"${n}"`),a+=n;return a}}{let{removeLeadingAndTrailingHTTPWhitespace:e,removeTrailingHTTPWhitespace:t,isHTTPWhitespaceChar:a,solelyContainsHTTPTokenCodePoints:o,soleyContainsHTTPQuotedStringTokenCodePoints:n,asciiLowercase:i,collectAnHTTPQuotedString:r}=wt;Bf=s=>{s=e(s);let l=0,c="";for(;l<s.length&&s[l]!=="/";)c+=s[l],++l;if(c.length===0||!o(c)||l>=s.length)return null;++l;let d="";for(;l<s.length&&s[l]!==";";)d+=s[l],++l;if(d=t(d),d.length===0||!o(d))return null;let m={type:i(c),subtype:i(d),parameters:new Map};for(;l<s.length;){for(++l;a(s[l]);)++l;let h="";for(;l<s.length&&s[l]!==";"&&s[l]!=="=";)h+=s[l],++l;if(h=i(h),l<s.length){if(s[l]===";")continue;++l}let u=null;if(s[l]==='"')for([u,l]=r(s,l);l<s.length&&s[l]!==";";)++l;else{for(u="";l<s.length&&s[l]!==";";)u+=s[l],++l;if(u=t(u),u==="")continue}h.length>0&&o(h)&&n(u)&&!m.parameters.has(h)&&m.parameters.set(h,u)}return m}}{let e=Bf,t=Uf,{asciiLowercase:a,solelyContainsHTTPTokenCodePoints:o,soleyContainsHTTPQuotedStringTokenCodePoints:n}=wt;kn=class{constructor(s){s=String(s);let l=e(s);if(l===null)throw new Error(`Could not parse MIME type string "${s}"`);this._type=l.type,this._subtype=l.subtype,this._parameters=new i(l.parameters)}static parse(s){try{return new this(s)}catch{return null}}get essence(){return`${this.type}/${this.subtype}`}get type(){return this._type}set type(s){if(s=a(String(s)),s.length===0)throw new Error("Invalid type: must be a non-empty string");if(!o(s))throw new Error(`Invalid type ${s}: must contain only HTTP token code points`);this._type=s}get subtype(){return this._subtype}set subtype(s){if(s=a(String(s)),s.length===0)throw new Error("Invalid subtype: must be a non-empty string");if(!o(s))throw new Error(`Invalid subtype ${s}: must contain only HTTP token code points`);this._subtype=s}get parameters(){return this._parameters}toString(){return t(this)}isJavaScript({allowParameters:s=!1}={}){switch(this._type){case"text":switch(this._subtype){case"ecmascript":case"javascript":case"javascript1.0":case"javascript1.1":case"javascript1.2":case"javascript1.3":case"javascript1.4":case"javascript1.5":case"jscript":case"livescript":case"x-ecmascript":case"x-javascript":return s||this._parameters.size===0;default:return!1}case"application":switch(this._subtype){case"ecmascript":case"javascript":case"x-ecmascript":case"x-javascript":return s||this._parameters.size===0;default:return!1}default:return!1}}isXML(){return this._subtype==="xml"&&(this._type==="text"||this._type==="application")||this._subtype.endsWith("+xml")}isHTML(){return this._subtype==="html"&&this._type==="text"}};class i{constructor(s){this._map=s}get size(){return this._map.size}get(s){return s=a(String(s)),this._map.get(s)}has(s){return s=a(String(s)),this._map.has(s)}set(s,l){if(s=a(String(s)),l=String(l),!o(s))throw new Error(`Invalid MIME type parameter name "${s}": only HTTP token code points are valid.`);if(!n(l))throw new Error(`Invalid MIME type parameter value "${l}": only HTTP quoted-string token code points are valid.`);return this._map.set(s,l)}clear(){this._map.clear()}delete(s){return s=a(String(s)),this._map.delete(s)}forEach(s,l){this._map.forEach(s,l)}keys(){return this._map.keys()}values(){return this._map.values()}entries(){return this._map.entries()}[Symbol.iterator](){return this._map[Symbol.iterator]()}}}var hr={};de(hr,{cssRulesMinifier:()=>An,fontsMinifier:()=>Sn,htmlMinifier:()=>Ln,imagesAltMinifier:()=>Cn,mediasAltMinifier:()=>En,serializer:()=>Rn,templateFormatter:()=>yo});var Sn={};de(Sn,{process:()=>v1});var Te={normalizeFontFamily:pa,flatten:eo,getFontWeight:Qa,removeQuotes:Za},w1=/\s*,\s*/,b1=/-/,Hf=/\?/g,y1=/^U\+/i,k1=[/^normal$/,/^italic$/,/^oblique$/,/^oblique\s+/];function v1(e,t,a,o){let n={rules:{processed:0,discarded:0},fonts:{processed:0,discarded:0}},i={declared:[],used:[]},r=e.createElement("style"),s="";e.body.appendChild(r),t.forEach(h=>{if(h.stylesheet){let u=h.stylesheet.children;u&&(n.processed+=u.size,n.discarded+=u.size,Kf(u,i,o),s=$f(e,u,r,s))}}),a.forEach(h=>{let u=Yf(h,o);u.length&&i.used.push(u),s=Jf(h.children,r,s)}),r.remove(),s+=e.body.innerText,globalThis.getComputedStyle&&o.doc&&(i.used=i.used.map(h=>h.map(u=>{let p=u.match(/^var\((--.*)\)$/);if(p&&p[1]){let g=globalThis.getComputedStyle(o.doc.body).getPropertyValue(p[1]);return g&&g.split(",").map(b=>Te.normalizeFontFamily(b))||u}return u})),i.used=i.used.map(h=>Te.flatten(h)));let l=i.used.find(h=>h.find(u=>u.match(/^var\(--/))),c,d;l?c=[]:(d=new Map,i.used.forEach(h=>h.forEach(u=>{if(i.declared.find(p=>p.fontFamily==u)){let p=o.usedFonts&&o.usedFonts.filter(g=>g[0]==u);p&&p.length&&d.set(u,p)}})),c=i.declared.filter(h=>!d.has(h.fontFamily)));let m=Array.from(new Set(s)).map(h=>h.charCodeAt(0)).sort((h,u)=>h-u);return t.forEach(h=>{if(h.stylesheet){let u=h.stylesheet.children;u&&(Ec(u,i.declared,c,d,m),n.rules.discarded-=u.size)}}),n}function Kf(e,t,a){e.forEach(o=>{if(o.type=="Atrule"&&(o.name=="media"||o.name=="supports"||o.name=="layer"||o.name=="container")&&o.block&&o.block.children)Kf(o.block.children,t,a);else if(o.type=="Rule"){let n=Yf(o.block,a);n.length&&t.used.push(n)}else if(o.type=="Atrule"&&o.name=="font-face"){let n=Te.normalizeFontFamily(Ft(o.block.children,"font-family"));if(n){let i=Ft(o.block.children,"font-weight")||"400",r=Ft(o.block.children,"font-style")||"normal",s=Ft(o.block.children,"font-variant")||"normal";i.split(",").forEach(l=>t.declared.push({fontFamily:n,fontWeight:Te.getFontWeight(Te.removeQuotes(l)),fontStyle:r,fontVariant:s}))}}})}function Ec(e,t,a,o,n){let i=[];for(let r=e.head;r;r=r.next){let s=r.data;if(s.type=="Atrule"&&s.name=="import"&&s.prelude&&s.prelude.children&&s.prelude.children.head.data.importedChildren)Ec(s.prelude.children.head.data.importedChildren,t,a,o,n);else if(s.type=="Atrule"&&(s.name=="media"||s.name=="supports"||s.name=="layer"||s.name=="container")&&s.block&&s.block.children)Ec(s.block.children,t,a,o,n);else if(s.type=="Atrule"&&s.name=="font-face"){let l=Te.normalizeFontFamily(Ft(s.block.children,"font-family"));if(l){let d=Ft(s.block.children,"unicode-range");(a.find(m=>m.fontFamily==l)||!E1(n,d)||!S1(s,l,t,o))&&i.push(r)}let c=[];for(let d=s.block.children.head;d;d=d.next)d.data.property=="font-display"&&c.push(d);c.length&&c.forEach(d=>s.block.children.remove(d))}}i.forEach(r=>e.remove(r))}function S1(e,t,a,o){let n,i=o&&o.get(t);if(i&&i.length){let r=Ft(e.block.children,"font-style")||"normal";if(k1.find(s=>r.trim().match(s))){let s=Te.getFontWeight(Ft(e.block.children,"font-weight")||"400"),l=a.filter(d=>d.fontFamily==t&&d.fontStyle==r).map(d=>d.fontWeight.split(" ")).sort((d,m)=>Number.parseInt(d[0],10)-Number.parseInt(m[0],10)),c=i.map(d=>Sc(d,r,l)).filter(d=>d);n=vc(s,c),n||(c=i.map(d=>(d=Array.from(d),d[2]="normal",Sc(d,r,l))).filter(d=>d),n=vc(s,c),n||(c=i.map(d=>(d=Array.from(d),d[2]=r="normal",Sc(d,r,l))).filter(d=>d),n=vc(s,c)))}else n=!0}else n=!0;return n}function vc(e,t){let a;for(let o of e.split(",")){let{min:n,max:i}=qf(o);i||(i=900),a=a||t.find(r=>{let{min:s,max:l}=qf(r);return l||(l=s),s>=n&&l<=i})}return a}function qf(e){let t=e.split(" "),a=Number.parseInt(Te.getFontWeight(t[0]),10),o=t[1]&&Number.parseInt(Te.getFontWeight(t[1]),10);return{min:a,max:o}}function Ft(e,t){let a;if(e&&(a=e.filter(o=>o.property==t).tail),a)try{return Te.removeQuotes(W(a.data.value)).toLowerCase()}catch{}}function Yf(e,t){let a=e.children.filter(i=>i.property=="font-family").tail,o=[];a&&(a.data.value.children?Xf(a.data.value,o):(a=W(a.data.value),a&&o.push(Te.normalizeFontFamily(a))));let n=e.children.filter(i=>i.property=="font").tail;if(n&&n.data&&n.data.value)try{let i=n.data.value,s=W(i).match(/^var\((--.*)\)$/);s&&s[1]&&(i=re(globalThis.getComputedStyle(t.doc.body).getPropertyValue(s[1]),{context:"value"})),wc(i).family.forEach(c=>o.push(Te.normalizeFontFamily(c)))}catch{}return o}function Xf(e,t){let a=e.children.head;for(;a;)if(a.data.type=="Identifier"){let o=a.data.name,n=a.next;for(;n&&n.data.type!="Operator"&&n.data.value!=",";)o+=" "+n.data.name,n=n.next;t.push(Te.normalizeFontFamily(o)),a=a.next}else if(a.data.type=="Function"&&a.data.name=="var"&&a.data.children){let o=a.data.children.head.data.name;t.push(Te.normalizeFontFamily("var("+o+")"));let n=a.data.children.head.next;for(;n&&n.data.type=="Operator"&&n.data.value==",";)n=n.next;let i=n;i&&(i.data.children?Xf(i.data,t):t.push(Te.normalizeFontFamily(i.data.value))),a=a.next}else a.data.type=="String"?(t.push(Te.normalizeFontFamily(a.data.value)),a=a.next):(a.data.type=="Number"&&t.push(Te.normalizeFontFamily(String(a.data.value))),a=a.next)}function Sc(e,t,a){let o;if(a=a.map(n=>n.map(i=>String(Number.parseInt(i,10)))),e[2]==t){let n=Number(e[1]);a.length>1?(n>=400&&n<=500&&(o=a.find(i=>i[0]>=n&&i[0]<=500),o||(o=Gf(n,a)),o||(o=Vf(n,a))),n<400&&(o=a.slice().reverse().find(i=>i[i.length-1]<=n),o||(o=Vf(n,a))),n>500&&(o=a.find(i=>i[0]>=n),o||(o=Gf(n,a))),o||(o=a.find(i=>i[0]<=n&&i[i.length-1]>=n))):o=a[0]}return o?o.join(" "):void 0}function Gf(e,t){return t.slice().reverse().find(a=>a[a.length-1]<e)}function Vf(e,t){return t.find(a=>a[0]>e)}function $f(e,t,a,o){return t.forEach(n=>{n.block&&n.block.children&&n.prelude&&n.prelude.children&&(n.type=="Atrule"&&(n.name=="media"||n.name=="supports"||n.name=="layer"||n.name=="container")?o=$f(e,n.block.children,a,o):n.type=="Rule"&&(o=Jf(n.block.children,a,o)))}),o}function Jf(e,t,a){let o=Wf(e,"content",t),n=Wf(e,"quotes",t);return a.includes(o)||(a+=o),a.includes(n)||(a+=n),a}function Wf(e,t,a){let o=Ft(e,t)||"";return o?(a.textContent='tmp { content:"'+o+'"}',a.sheet&&a.sheet.cssRules?Te.removeQuotes(a.sheet.cssRules[0].style.getPropertyValue("content")):o):""}function E1(e,t){if(t){let a=t.split(w1),o=a.filter(n=>{let i=n.split(b1);if(i.length==2)i[0]=vn(i[0]),i[1]=vn(i[1]);else if(i.length==1)if(i[0].includes("?")){let r=i[0],s=r;i[0]=vn(r.replace(Hf,"0")),i[1]=vn(s.replace(Hf,"F"))}else i[0]&&(i[0]=i[1]=vn(i[0]));if(!i[0]||e.find(r=>r>=i[0]&&r<=i[1]))return!0});return!!(!a.length||o.length)}return!0}function vn(e){return e=e.replace(y1,""),parseInt(e,16)}var En={};de(En,{process:()=>T1});function Zf(e){return bc(e)}function xc(e){if(!e||!e.nodes)return!1;for(let t of e.nodes)if(t&&t.type==="keyword"&&t.value&&t.value.toLowerCase()==="not")return!0;return!1}function x1(e,t){for(let a=t-1;a>=0;a--){let o=e.nodes[a];if(o){if(o.type==="operator"&&o.value===",")break;if(o.type==="keyword"&&o.value&&o.value.toLowerCase()==="not")return!0}}return!1}function Ac(e,t=[]){for(let a=0;a<e.nodes.length;a++){let o=e.nodes[a];if(o.type=="media-query"){Ac(o,t);continue}if(o.type=="media-type"){let n=x1(e,a);t.push({not:n,value:o.value})}}return t}function Qf(e){if(!e||!e.nodes)return!1;for(let t of e.nodes)if(t&&(t.type==="media-feature-expression"||t.type==="keyword"&&t.value&&t.value.toLowerCase()==="and"))return!0;return!!xc(e)}var A1={flatten:eo},jc="all",j1="screen",C1="print";function T1(e,{keepPrintStyleSheets:t}={}){let a={processed:0,discarded:0};return e.forEach((o,n)=>{o.stylesheet&&(tw(o.mediaText||jc,t)&&o.stylesheet.children?ew(o.stylesheet.children,a,t).forEach(({cssRules:r,cssRule:s})=>r.remove(s)):(e.delete(n),n.element&&n.element.remove()))}),a}function ew(e,t,a,o=[]){for(let n=e.head;n;n=n.next){let i=n.data;i.type=="Atrule"&&i.name=="media"&&i.block&&i.block.children&&i.prelude&&i.prelude.children&&(t.processed++,tw(W(i.prelude),a)?ew(i.block.children,t,a,o):(o.push({cssRules:e,cssRule:n}),t.discarded++))}return o}function tw(e,t){let a;try{a=Zf(e);for(let n of a)if(!(!n||!n.nodes)&&(Qf(n)||xc(n)))return!0}catch{return!0}let o=A1.flatten(a.filter(n=>n&&n.nodes).map(n=>Ac(n)));return(!o||!o.length)&&(o=[{not:!1,value:jc}]),o.some(n=>!n.not&&(n.value==j1||n.value==jc||t&&n.value==C1))}var An={};de(An,{process:()=>Z1});function Cc(e,t={a:0,b:0,c:0}){if(!e||!e.type)return t;switch(e.type){case"Selector":nr(e.children,a=>Cc(a,t));break;case"IdSelector":t.a++;break;case"ClassSelector":t.b++;break;case"AttributeSelector":t.b++;break;case"TypeSelector":e.name!=="*"&&t.c++;break;case"PseudoElementSelector":t.c++;break;case"PseudoClassSelector":{let a=e.name.toLowerCase();if(a==="where")break;if(a==="is"||a==="not"||a==="has"){nr(e.children,o=>{o.type==="SelectorList"&&aw(t,ow(o))});break}if(a==="nth-child"||a==="nth-last-child"){t.b++,nr(e.children,o=>{o.type==="Nth"&&o.selector&&aw(t,ow(o.selector))});break}a==="scope"?t.c++:t.b++;break}case"Combinator":case"Raw":break}return t}function aw(e,t){e.a+=t.a,e.b+=t.b,e.c+=t.c}function nr(e,t){if(!e)return;let a=e.head;for(;a;)t(a.data),a=a.next}function ow(e){let t={a:0,b:0,c:0};return nr(e.children,a=>{let o=Cc(a,{a:0,b:0,c:0});(o.a>t.a||o.a===t.a&&o.b>t.b||o.a===t.a&&o.b===t.b&&o.c>t.c)&&(t=o)}),t}function ir(e,t){if(!t||!t.length){let s={a:0,b:0,c:0},l=[];return Tt(e,{enter(c){if(l.push(c),c.type==="Selector"){if(l.some(h=>h.type==="PseudoClassSelector"&&h.name==="where"))return;let m=Cc(c);(m.a>s.a||m.a===s.a&&m.b>s.b||m.a===s.a&&m.b===s.b&&m.c>s.c)&&(s=m)}},leave(){l.pop()}}),s}let a=W(e),o=[""];t.forEach(s=>{if(!s||!s.children||!s.children.size)return;let l=s.children.toArray(),c=[];o.forEach(d=>l.forEach(m=>{let h=W(m),u=d?d+" "+h:h;c.includes(u)||c.push(u)})),c.length&&(o=c)});function n(s,l){return s?l?l.indexOf("&")!==-1?l.split("&").join(s):s+" "+l:s:l}let i={a:0,b:0,c:0},r=new Set;return o.forEach(s=>{let l=n(s,a);if(!r.has(l)){r.add(l);try{let c=re(l,{context:"selectorList"}),d=ir(c);(d.a>i.a||d.a===i.a&&d.b>i.b||d.a===i.a&&d.b===i.b&&d.c>i.c)&&(i=d)}catch{}}}),i}var L1=new Set(["after","before","first-letter","first-line","placeholder","selection","part","marker"]);function nw(e){if(!e)return{include:[],exclude:[]};let t=W(e).trim();if(!t)return{include:[],exclude:[]};let a=t.split(/\s+to\s+/i),o=a[0].trim(),n=a.length>1?a.slice(1).join(" to ").trim():"";function i(c){if(!c)return[];function d(p){let g=p.trim();for(;g.length>=2&&g[0]==="("&&g[g.length-1]===")";){let b=0,f=!0;for(let S=0;S<g.length;S++)if(g[S]==="("?b++:g[S]===")"&&b--,b===0&&S<g.length-1){f=!1;break}if(!f)break;g=g.substring(1,g.length-1).trim()}return g}let m=d(c),h=re(m,{context:"selectorList"}),u=[];if(h&&h.children)for(let p=h.children.head;p;p=p.next){let g=p.data;u.push({ast:g,text:W(g)})}return u}let r=i(o),s=i(n);function l(c){let d=!1;return Tt(c,{visit:"PseudoElementSelector",enter(){d=!0}}),d||Tt(c,{visit:"PseudoClassSelector",enter(m){let h=(m.name||"").toLowerCase();L1.has(h)&&(d=!0)}}),d}for(let c of r)if(l(c.ast))throw new Error("Pseudo-elements are not allowed in @scope prelude (scope-start)");for(let c of s)if(l(c.ast))throw new Error("Pseudo-elements are not allowed in @scope prelude (scope-end)");return{include:r,exclude:s}}var R1=["active-view-transition","active-view-transition-type","blank","buffering","current","first","future","has-slotted","host-context","heading","left","muted","open","past","paused","picture-in-picture","playing","right","seeking","stalled","volume-locked"];function Tc(e,t,a){if(a.normalizedSelectorText||(a.normalizedSelectorText=new WeakMap),a.normalizedSelectorText.has(e))return a.normalizedSelectorText.get(e);let o=Ot(e.data);z1(o,t);let n=W(o);return(!n||!n.trim())&&(n="*"),a.normalizedSelectorText.set(e,n),n}function z1(e,t){let a=e.children.head;for(;a;){let o=a.next,n=a.data;if(n.type==="NestingSelector"){if(t&&t.length){let i=t[t.length-1],r=i&&i.data?i.data:i;if(r&&r.type==="SelectorList"&&r.children&&r.children.tail&&(r=r.children.tail.data),r&&r.children){for(let s=r.children.head;s;s=s.next){let l=Ot(s.data);e.children.insertData(l,a)}e.children.remove(a)}}}else if(n.type==="TypeSelector"&&typeof n.name=="string"&&n.name.includes("|"))n.name=n.name.substring(n.name.lastIndexOf("|")+1);else if(n.type==="PseudoElementSelector")e.children.remove(a);else if(n.type==="PseudoClassSelector"){let i=(n.name||"").toLowerCase();R1.includes(i)&&e.children.remove(a)}a=o}}var Lc=!1,I1=new Set(["after","before","first-letter","first-line","placeholder","selection","part","marker"]),_1=new Set(["hover","focus","active","focus-within","focus-visible","target","visited","link","target-current"]),P1=new Set(["media","supports","container"]),Ic="Rule",Ea="Atrule",_c="NestingSelector",Rc="PseudoClassSelector",Pc="Declaration",Nc="Raw",N1="Value",M1="PseudoElementSelector",pw="layer",rr="scope",D1="import",gw="font-face",fw="keyframes",ww="Combinator",O1="style",F1="selectorList",B1="stylesheet",U1="selector",H1="declarationList",q1="Failed to parse CSS",iw="Failed to match selector",G1=":root",bw=",",V1="&",yw="-",W1="--",K1=".",Y1=":",kw="|",rw="{",X1="}",cr="",sw=0,lw=1,$1=/\\(?![0-9a-fA-F]{1,6}\s|[^0-9a-zA-Z])/,J1="\0";function Z1(e,t){let a={doc:e,stats:{processed:0,discarded:0},matchedElements:new Set,matchedSelectors:new Map,matchingSelectors:new Map,layerDeclarationCounter:0,layerDeclarations:[],layerOrder:new Map,selectorData:new Map,selectorTexts:new Map,preludeTexts:new Map,scopeRoots:new Map,scopeSpecificities:new Map,rulesCounter:0};return Q1(t,a),eL(a),tL(t,a),aL(a),oL(t,a),a.stats}function Q1(e,t){e.forEach((a,o)=>{!a.scoped&&a.stylesheet&&!o.urlNode&&me(a.stylesheet)&&sr(a.stylesheet.children,{layerStack:[],conditionalStack:[]},t)})}function eL(e){let t=[];for(let a=0;a<e.layerDeclarations.length;a++){let o=e.layerDeclarations[a];t.push(o.name)}for(let a=0;a<t.length;a++){let o=t[a];e.layerOrder.has(o)||e.layerOrder.set(o,e.layerOrder.size)}}function tL(e,t){e.forEach((a,o)=>{if(!a.scoped&&a.stylesheet&&!o.urlNode&&me(a.stylesheet)){let n=a.mediaText?[{name:"media",prelude:a.mediaText}]:[];bo(a.stylesheet.children,e,{ancestorsSelectors:[],layerStack:[],conditionalStack:n},t)}})}function aL(e){let t=new Set;e.matchedElements.forEach(a=>fL(a,t,e)),LL(t,e)}function oL(e,t){e.forEach((a,o)=>{!a.scoped&&a.stylesheet&&!o.urlNode&&me(a.stylesheet)&&zc(a.stylesheet.children,t)})}function sr(e,t,a){let{layerStack:o,conditionalStack:n}=t;for(let i=e.head;i;i=i.next){let r=i.data;if(r.type===Ea&&r.name===pw)nL(r,o,n,a);else if(r.type===Ea&&me(r.block)){let s=Mc(n,r,a);sr(r.block.children,{layerStack:o,conditionalStack:s},a)}else r.type===Ic&&me(r.block)&&sr(r.block.children,t,a)}}function nL(e,t,a,o){if(e.block){let n=lr(e.prelude,o);cw(t,n,a,o),sr(e.block.children,{layerStack:[...t,n],conditionalStack:a},o)}else e.prelude&&lr(e.prelude,o).split(bw).forEach(i=>cw(t,i,a,o))}function Mc(e,t,a){return P1.has(t.name)?[...e,{name:t.name,prelude:lr(t.prelude,a)}]:e}function cw(e,t,a,o){let n=xn([...e,t]);o.layerDeclarations.push({name:n,order:o.layerDeclarationCounter++,conditionalStack:a.slice()})}function bo(e,t,a,o){let n=new Set;for(let i=e.head;i;i=i.next)o.stats.processed++,iL(i.data,i,t,a,n,o);n.forEach(i=>e.remove(i))}function iL(e,t,a,o,n,i){e.type===Ea&&e.name===D1&&me(e.prelude)&&e.prelude.children.head.data.importedChildren?rL(e,t,a,o,n,i):e.type===Ea&&e.name===pw&&me(e.block)?sL(e,t,a,o,n,i):e.type===Ea&&e.name===rr&&me(e.block)?lL(e,t,a,o,n,i):e.type===Ea&&e.name!==gw&&e.name!==fw&&!e.name.startsWith(yw)&&me(e.block)?cL(e,t,a,o,n,i):e.type===Ic&&me(e.prelude)&&dL(e,t,a,o,n,i)}function rL(e,t,a,o,n,i){let r=e.prelude.children.head.data,s=r.importedMediaText?[{name:"media",prelude:r.importedMediaText}]:[];r.importedLayerName!==void 0&&s.push({name:"layer",prelude:r.importedLayerName}),r.importedSupportsCondition!==void 0&&s.push({name:"supports",prelude:r.importedSupportsCondition}),bo(r.importedChildren,a,{...o,conditionalStack:s},i)}function sL(e,t,a,o,n,i){let r=lr(e.prelude,i),s={...o,layerStack:[...o.layerStack,r]};dr(e),bo(e.block.children,a,s,i),me(e.block)||(i.stats.discarded++,n.add(t))}function lL(e,t,a,o,n,i){let r=nw(e.prelude),s=r.include.map(m=>m.text),l=r.exclude.map(m=>m.text),c=Mc(o.conditionalStack,e,i),d={...o,conditionalStack:c,scopeIncludeLists:[...o.scopeIncludeLists||[],s],scopeExclusionLists:[...o.scopeExclusionLists||[],l],scopeNestingLevel:(o.scopeNestingLevel||0)+1};dr(e),bo(e.block.children,a,d,i),me(e.block)||(i.stats.discarded++,n.add(t))}function cL(e,t,a,o,n,i){let r=Mc(o.conditionalStack,e,i),s={...o,conditionalStack:r};dr(e),bo(e.block.children,a,s,i),me(e.block)||(i.stats.discarded++,n.add(t))}function dL(e,t,a,o,n,i){e.order=i.rulesCounter++;let r=mL(e,o,i);!TL(e,r,n,t,i)&&me(e.block)&&pL(e,a,o,i)}function mL(e,t,a){let o=[],{ancestorsSelectors:n}=t;for(let i=e.prelude.children.head,r=0;i;i=i.next,r++){let{startsWithCombinator:s,hasPseudoElement:l,hasDynamicStatePseudoClass:c,scopeRelative:d}=hL(i.data);if(gL(i,e,d,t,a),!l&&!c&&(!s||!n||!n.length)){let m=bL(i,n,a);m.length?uL(m,i,a):o.push(i)}}return o}function hL(e){let t=!1,a=!1,o=!1,n=!1;Tt(e,{enter(s){s.type===M1?t=!0:s.type===Rc?I1.has(s.name)?t=!0:_1.has(s.name)?a=!0:s.name===rr&&(o=!0):s.type===_c&&(o=!0)}});let i=e.children.head.data;return n=i&&i.type===ww,{hasPseudoElement:t,hasDynamicStatePseudoClass:a,startsWithCombinator:n,scopeRelative:!n&&!o}}function uL(e,t,a){e.forEach(o=>{a.matchedElements.add(o);let n=a.matchingSelectors.get(o);n||(n=[],a.matchingSelectors.set(o,n),o.matchingSelectors=n),n.push(t)})}function pL(e,t,a,o){dr(e);let n={...a,ancestorsSelectors:[...a.ancestorsSelectors,e.prelude]};bo(e.block.children,t,n,o)}function gL(e,t,a,o,n){let{ancestorsSelectors:i,layerStack:r,conditionalStack:s,scopeIncludeLists:l,scopeExclusionLists:c,scopeNestingLevel:d}=o;n.selectorData.set(e,{specificity:ir(e.data,i),rule:t,layerStack:r,conditionalStack:s,scopeIncludeLists:l,scopeExclusionLists:c,scopeNestingLevel:d,scopeRelative:a})}function fL(e,t,a){let o=new Map,n=wL(e,a),i=new Map;n.forEach(r=>{let{selector:s}=r,l=mw(s,a),c=dw(l);i.has(c)||i.set(c,[]),i.get(c).push(r)}),i.forEach(r=>{r.sort((s,l)=>jL(s,l,a)),r.forEach(s=>{let{selector:l,declaration:c}=s,d=mw(l,a);o.set(c.data.property+Y1+dw(d),{selector:l,declaration:c})})}),o.forEach(({declaration:r})=>t.add(r))}function dw(e){return e.map(t=>`${t.name}:${t.prelude}`).join(kw)}function wL(e,t){let a=t.matchingSelectors.get(e),o=[];a.forEach(i=>{let r=t.selectorData.get(i).rule;if(me(r.block)){let s=r.block.children;for(let l=s.head;l;l=l.next){let{type:c,value:d}=l.data;if(c===Pc&&d){let m=d.type===Nc,h=d.type===N1&&me(d)&&d.children.length==1&&d.children.head.data.name,u=h&&d.children.head.data.name.startsWith(yw),p=h&&$1.test(d.children.head.data.name);!m&&!u&&!p&&o.push({declaration:l,selector:i,effectiveSpecificity:zL(t.selectorData.get(i),e,t),isInline:!1})}}}});let n=_L(e);for(let i of n)o.push({declaration:i.declaration,effectiveSpecificity:i.effectiveSpecificity,isInline:!0});return o}function mw(e,t){let a=[];if(e){let o=t.selectorData.get(e);o&&o.conditionalStack&&(a=o.conditionalStack)}return a}function bL(e,t,a){let o=yL(e,t,a),n=a.selectorData.get(e),i=n&&(n.scopeIncludeLists&&n.scopeIncludeLists.length||n.scopeNestingLevel>0),r=kL(i,n,o),s=a.matchedSelectors.get(r);if(s)return s;if(i)return vL(r,e,a);{let l=Oc(a.doc,o,a.scopeRoots);return a.matchedSelectors.set(r,l),l}}function yL(e,t,a){let o;if(t&&t.length){o=RL(e.data,t,a);let n=wo(o,F1);o=Tc({data:n},t,a)}return o||(o=Tc(e,t,a)),o}function kL(e,t,a){if(e){let o=t.scopeIncludeLists||[],n=t.scopeExclusionLists||[],i=t.scopeRelative?1:0,r=t.scopeNestingLevel||0;return[a,JSON.stringify(o),JSON.stringify(n),String(i),String(r)].join(kw)}else return a}function vL(e,t,a){let o=a.selectorData.get(t),n=o.scopeIncludeLists&&o.scopeIncludeLists.length?o.scopeIncludeLists[o.scopeIncludeLists.length-1]:[],i=o.scopeExclusionLists&&o.scopeExclusionLists.length?o.scopeExclusionLists[o.scopeExclusionLists.length-1]:[],r=new Set,s=n.length?n:[G1];for(let c of s)SL(c,t,i,a,r);let l=Array.from(r);return a.matchedSelectors.set(e,l),l}function SL(e,t,a,o,n){let i=Dc(e,o);for(let r of i){let s=EL(r,xL(t),o.scopeRoots);s.length&&(a&&a.length?AL(s,a,o).forEach(c=>n.add(c)):s.forEach(l=>n.add(l)))}}function EL(e,t,a){let o=Oc(e,t,a);return e.matches&&e.matches(t)&&o.indexOf(e)===-1&&o.unshift(e),o}function xL(e){let t=Ot(e.data);Tt(t,{visit:_c,enter(a,o,n){let i={type:Rc,name:rr};n.insertData(i,o),n.remove(o)}});for(let a=t.children.head;a;a=a.next){let o=a.data;if(me(o)){let n=o.children.head,i=n.data;if(i&&i.type===ww){let r={type:Rc,name:rr};o.children.insertData(r,n)}}}return W(t)}function Dc(e,t){let a=t.scopeRoots.get(e);return a||(a=Oc(t.doc,e,t.scopeRoots)),a}function AL(e,t,a){let o=new Set;for(let n of t)Dc(n,a).forEach(r=>o.add(r));return e.filter(n=>!Array.from(o).some(i=>i.contains(n)))}function jL(e,t,a){let o=e.declaration.data.important?lw:sw,n=t.declaration.data.important?lw:sw;if(o!==n)return o-n;if(e.isInline&&!t.isInline)return 1;if(!e.isInline&&t.isInline)return-1;let i=e.selector?a.selectorData.get(e.selector):null,r=t.selector?a.selectorData.get(t.selector):null;if(i&&r){let s=CL(i.layerStack,r.layerStack,a);if(s!==0)return o?-s:s;let l=e.effectiveSpecificity,c=t.effectiveSpecificity;return l.a!==c.a?l.a-c.a:l.b!==c.b?l.b-c.b:l.c!==c.c?l.c-c.c:i.rule.order!==r.rule.order?i.rule.order-r.rule.order:0}else{let s=e.effectiveSpecificity,l=t.effectiveSpecificity;return s.a!==l.a?s.a-l.a:s.b!==l.b?s.b-l.b:s.c!==l.c?s.c-l.c:0}}function CL(e,t,a){let o=e.length===0,n=t.length===0;if(o&&n)return 0;if(o)return 1;if(n)return-1;let i=xn(e),r=xn(t);if(i===r)return 0;let s=Math.min(e.length,t.length),l=a.layerOrder;for(let c=0;c<s;c++)if(e[c]!==t[c]){let d=xn(e.slice(0,c+1)),m=xn(t.slice(0,c+1)),h=l.get(d),u=l.get(m);return h!==void 0&&u!==void 0?h-u:h!==void 0?-1:u!==void 0?1:0}return e.length-t.length}function zc(e,t){let a=new Set;for(let o=e.head;o;o=o.next){let n=o.data;n.type===Ic?me(n.block)?zc(n.block.children,t):(t.stats.discarded++,a.add(o)):n.type===Ea&&n.block&&n.name!==gw&&n.name!==fw&&(zc(n.block.children,t),me(n.block)||(t.stats.discarded++,a.add(o)))}a.forEach(o=>e.remove(o))}function TL(e,t,a,o,n){return t&&t.length&&t.forEach(i=>e.prelude.children.remove(i)),me(e.prelude)?!1:(n.stats.discarded++,a.add(o),!0)}function LL(e,t){let a=new Map,o=new Set;t.matchedElements.forEach(n=>{let i=t.matchingSelectors.get(n);i&&i.forEach(r=>{let s=t.selectorData.get(r).rule;if(me(s.block)){let l=s.block.children;for(let c=l.head;c;c=c.next)if(c.data.type===Pc){a.set(c,l);let{property:d,value:m}=c.data;(d&&d.startsWith(W1)||m&&m.type===Nc)&&o.add(c)}}})}),a.forEach((n,i)=>{!e.has(i)&&!o.has(i)&&n.remove(i)})}function dr(e){let t=[];if(me(e.block))for(let a=e.block.children.head;a;a=a.next)if(a.data.type===Nc)if(a.data.value.indexOf(rw)!==-1&&a.data.value.indexOf(rw)<a.data.value.indexOf(X1))try{let o=wo(a.data.value,B1);for(let n=o.children.head;n;n=n.next)t.push(n)}catch(o){Lc&&console.warn(q1,a.data.value,o)}else t.push(a);else t.push(a);e.block.children.clear(),t.forEach(a=>e.block.children.appendData(a.data))}function RL(e,t,a){let o=uw(e,a);if(!t||!t.length)return o;{let n=[cr];t.forEach(r=>{if(me(r)){let s=r.children.toArray(),l=[];n.forEach(c=>s.forEach(d=>{let m=uw(d,a),h=c?hw(c,m):m;l.includes(h)||l.push(h)})),l.length&&(n=l)}});let i=new Set;return n.forEach(r=>{let s=r?hw(r,o):o;i.add(s)}),Array.from(i).join(bw)}}function hw(e,t){let a=wo(t||V1),o=e?wo(e):null,n=!1;if(Tt(a,{visit:_c,enter(r,s,l){if(n=!0,!o){l.remove(s);return}o.children.toArray().map(d=>Ot(d)).forEach(d=>l.insertData(d,s)),l.remove(s)}}),n)return W(a);if(!o)return W(a);let i=wo(`${e} ${t}`);return W(i)}function zL(e,t,a){let o=e.specificity,n={a:o.a,b:o.b,c:o.c},i=e&&e.scopeIncludeLists&&e.scopeIncludeLists.length?e.scopeIncludeLists[e.scopeIncludeLists.length-1]:[];if(i&&i.length){for(let r of i)if(Dc(r,a).some(l=>l.contains(t))){let l=IL(r,a);n={a:n.a+l.a,b:n.b+l.b,c:n.c+l.c}}}return n}function IL(e,t){let a=t.scopeSpecificities.get(e);if(!a){let o=wo(e);a=ir(o,[]),t.scopeSpecificities.set(e,a)}return a}function me(e){return!!(e&&e.children&&e.children.head)}function uw(e,t){return t.selectorTexts.has(e)||t.selectorTexts.set(e,W(e)),t.selectorTexts.get(e)}function lr(e,t){return e?(t.preludeTexts.has(e)||t.preludeTexts.set(e,W(e)),t.preludeTexts.get(e)):cr}function xn(e){return e.map(t=>t===cr?J1:t).join(K1)}function wo(e,t=U1){return re(e,{context:t})}function Oc(e,t,a){if(a&&a!==e){let o=a.get(e);if(o||(o=new Map,a.set(e,o)),o.has(t))return o.get(t);try{let n=Array.from(e.querySelectorAll(t));return o.set(t,n),n}catch{return Lc&&console.warn(iw,t,e.tagName?e.tagName:cr),o.set(t,[]),[]}}else try{return Array.from(e.querySelectorAll(t))}catch{return Lc&&console.warn(iw,t),[]}}function _L(e){let t=e.getAttribute(O1);if(t){let a;try{a=re(t,{context:H1})}catch{return[]}let o=[];for(let n=a.children&&a.children.head;n;n=n.next)n.data.type===Pc&&o.push({declaration:n,effectiveSpecificity:{a:1,b:0,c:0},isInline:!0});return o}else return[]}var Cn={};de(Cn,{process:()=>PL});var jn="data:,";function PL(e){e.querySelectorAll("picture").forEach(t=>{let a=t.querySelector("img");if(a){let{src:o,srcset:n}=vw(a);if(!o){let i=NL(Array.from(t.querySelectorAll("source")).reverse());o=i.src,n||(n=i.srcset)}Sw({src:o,srcset:n},a,t)}}),e.querySelectorAll(":not(picture) > img[srcset]").forEach(t=>Sw(vw(t),t))}function vw(e){let t=e.getAttribute("src");t==jn&&(t=null);let a=Fc(e.getAttribute("srcset"));return a==jn&&(a=null),{src:t,srcset:a}}function NL(e){let t=e.find(n=>n.src),a=t&&t.src,o=t&&t.srcset;return a||(t=e.find(n=>Fc(n.src)),a=t&&t.src,a==jn&&(a=null)),o||(t=e.find(n=>Fc(n.srcset)),o=t&&t.srcset,o==jn&&(o=null)),{src:a,srcset:o}}function Sw(e,t,a){e.src?(t.setAttribute("src",e.src),t.setAttribute("srcset",""),t.setAttribute("sizes","")):(t.setAttribute("src",jn),e.srcset?t.setAttribute("srcset",e.srcset):(t.setAttribute("srcset",""),t.setAttribute("sizes",""))),a&&a.querySelectorAll("source").forEach(o=>o.remove())}function Fc(e){if(e)try{let t=kc(e);if(t.length)return t.find(a=>a.url).url}catch{}}var Ln={};de(Ln,{process:()=>WL});var ML=["allowfullscreen","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","truespeed","typemustmatch","visible"],DL=["SCRIPT","STYLE","PRE","TEXTAREA"],OL=["id","class","style","lang","dir","onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onkeypress","onkeydown","onkeyup"],FL={FORM:{method:"get"},SCRIPT:{language:"javascript",type:"text/javascript",charset:e=>!e.getAttribute("src")},STYLE:{media:"all",type:"text/css"},LINK:{media:"all"}},BL=/[ \t\f\r]+/g,UL=/[\n]+/g,HL=/^\s+$/,qL=4294967295,mr=1,Bc=3,GL=8,VL=[KL,YL,XL,JL,ZL,QL,eR];function WL(e,t){tR(e);let a=e.createTreeWalker(e.documentElement,qL,null,!1),o=a.nextNode();for(;o;){let n=VL.find(r=>r(o,t)),i=o;o=a.nextNode(),n&&i.remove()}}function KL(e){e.nodeType==mr&&Array.from(e.attributes).forEach(t=>{ML.includes(t.name)&&e.setAttribute(t.name,"")})}function YL(e){e.nodeType==Bc&&e.previousSibling&&e.previousSibling.nodeType==Bc&&(e.textContent=e.previousSibling.textContent+e.textContent,e.previousSibling.remove())}function XL(e,t){if(e.nodeType==Bc){let a=e.parentElement;if(!(a.getAttribute(t.PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME)=="")){let n=e.textContent,i=Ew(a);for(;i;)a=a.parentElement,i=a&&Ew(a);(!a||i)&&n.length>1&&(e.textContent=n.replace(BL,$L(e)).replace(UL,`
`))}}}function $L(e){return e.parentElement&&Tn(e.parentElement)=="HEAD"?`
`:" "}function Ew(e){return e&&!DL.includes(Tn(e))}function JL(e){if(e.nodeType==GL&&Tn(e.parentElement)!="HTML")return!e.textContent.toLowerCase().trim().startsWith("[if")}function ZL(e){e.nodeType==mr&&Array.from(e.attributes).forEach(t=>{if(OL.includes(t.name.toLowerCase())){let a=e.getAttribute(t.name);(a==""||(a||"").match(HL))&&e.removeAttribute(t.name)}})}function QL(e){if(e.nodeType==mr){let t=FL[Tn(e)];t&&Object.keys(t).forEach(a=>{let o=t[a];(typeof o=="function"?o(e):e.getAttribute(a)==o)&&e.removeAttribute(a)})}}function eR(e){if(e.nodeType==mr&&Tn(e)=="SCRIPT"&&e.type=="application/ld+json"&&e.textContent.trim())try{e.textContent=JSON.stringify(JSON.parse(e.textContent))}catch{}}function tR(e){e.querySelectorAll("style, script:not([src])").forEach(t=>{t.textContent.trim()||t.remove()})}function Tn(e){return e.tagName&&e.tagName.toUpperCase()}var Rn={};de(Rn,{process:()=>rR});var aR=["AREA","BASE","BASEFONT","BGSOUND","BR","COL","COMMAND","EMBED","FRAME","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];var oR=[{tagName:"HEAD",accept:e=>!e.childNodes.length||e.childNodes[0].nodeType==1},{tagName:"BODY",accept:e=>!e.childNodes.length}],nR=[{tagName:"HTML",accept:e=>!e||e.nodeType!=8},{tagName:"HEAD",accept:e=>!e||e.nodeType!=8&&(e.nodeType!=3||!Uc(e.textContent))},{tagName:"BODY",accept:e=>!e||e.nodeType!=8},{tagName:"LI",accept:(e,t)=>!e&&t.parentElement&&(Ee(t.parentElement)=="UL"||Ee(t.parentElement)=="OL")||e&&["LI"].includes(Ee(e))},{tagName:"DT",accept:e=>!e||["DT","DD"].includes(Ee(e))},{tagName:"P",accept:e=>e&&["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DETAILS","DIV","DL","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","PRE","SECTION","TABLE","UL"].includes(Ee(e))},{tagName:"DD",accept:e=>!e||["DT","DD"].includes(Ee(e))},{tagName:"RT",accept:e=>!e||["RT","RP"].includes(Ee(e))},{tagName:"RP",accept:e=>!e||["RT","RP"].includes(Ee(e))},{tagName:"OPTGROUP",accept:e=>!e||["OPTGROUP"].includes(Ee(e))},{tagName:"OPTION",accept:e=>!e||["OPTION","OPTGROUP"].includes(Ee(e))},{tagName:"COLGROUP",accept:e=>!e||e.nodeType!=8&&(e.nodeType!=3||!Uc(e.textContent))},{tagName:"CAPTION",accept:e=>!e||e.nodeType!=8&&(e.nodeType!=3||!Uc(e.textContent))},{tagName:"THEAD",accept:e=>!e||["TBODY","TFOOT"].includes(Ee(e))},{tagName:"TBODY",accept:e=>!e||["TBODY","TFOOT"].includes(Ee(e))},{tagName:"TFOOT",accept:e=>!e},{tagName:"TR",accept:e=>!e||["TR"].includes(Ee(e))},{tagName:"TD",accept:e=>!e||["TD","TH"].includes(Ee(e))},{tagName:"TH",accept:e=>!e||["TD","TH"].includes(Ee(e))}],iR=["STYLE","SCRIPT","XMP","IFRAME","NOEMBED","NOFRAMES","PLAINTEXT","NOSCRIPT"];function rR(e,t){let a=e.doctype,o="";return a&&(o="<!DOCTYPE "+a.nodeName,a.publicId?(o+=' PUBLIC "'+a.publicId+'"',a.systemId&&(o+=' "'+a.systemId+'"')):a.systemId&&(o+=' SYSTEM "'+a.systemId+'"'),a.internalSubset&&(o+=" ["+a.internalSubset+"]"),o+="> "),o+xw(e.documentElement,t)}function xw(e,t,a){if(e.nodeType==3)return sR(e);if(e.nodeType==8)return lR(e);if(e.nodeType==1)return cR(e,t,a)}function sR(e){let t=e.parentNode,a;return t&&t.nodeType==1&&(a=Ee(t)),!a||iR.includes(a)?a=="SCRIPT"&&(!t.type||t.type=="text/javascript")||a=="STYLE"?e.textContent.replace(/<\//gi,"<\\/").replace(/\/>/gi,"\\/>"):e.textContent:e.textContent.replace(/&/g,"&amp;").replace(/\u00a0/g,"&nbsp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lR(e){return"<!--"+e.textContent+"-->"}function cR(e,t,a){let o=Ee(e),n=t&&oR.find(s=>o==Ee(s)&&s.accept(e)),i="";(!n||e.attributes.length)&&(i="<"+o.toLowerCase(),Array.from(e.attributes).forEach(s=>i+=dR(s,e,t)),i+=">"),o=="TEMPLATE"&&!e.childNodes.length?i+=e.innerHTML:Array.from(e.childNodes).forEach(s=>i+=xw(s,t,a||o=="svg"));let r=t&&nR.find(s=>o==Ee(s)&&s.accept(e.nextSibling,e));return(a||!r&&!aR.includes(o))&&(i+="</"+o.toLowerCase()+">"),i}function dR(e,t,a){let o=e.name,n="";if(!o.match(/["'>/=]/)){let i=e.value;a&&o=="class"&&(i=Array.from(t.classList).map(d=>d.trim()).join(" "));let r;i=i.replace(/&/g,"&amp;").replace(/\u00a0/g,"&nbsp;"),i.includes('"')&&(i.includes("'")||!a?i=i.replace(/"/g,"&quot;"):r=!0);let s=!a||i.match(/[ \t\n\f\r'"`=<>]/);n+=" ";let l=e.namespaceURI,c=e.localName||o;l?l=="http://www.w3.org/XML/1998/namespace"?n+="xml:"+c:l=="http://www.w3.org/2000/xmlns/"?c==="xmlns"?n+="xmlns":n+="xmlns:"+c:l=="http://www.w3.org/1999/xlink"?n+="xlink:"+c:e.prefix?n+=e.prefix+":"+c:n+=o:n+=o,i!=""&&(n+="=",s&&(n+=r?"'":'"'),n+=i,s&&(n+=r?"'":'"'))}return n}function Uc(e){return!!e.match(/^[ \t\n\f\r]/)}function Ee(e){return e.tagName&&e.tagName.toUpperCase()}var yo={};de(yo,{evalTemplate:()=>Lw,formatFilename:()=>vR});function mR(e,t){function a(){this.constructor=e}a.prototype=t.prototype,e.prototype=new a}function zn(e,t,a,o){this.message=e,this.expected=t,this.found=a,this.location=o,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,zn)}mR(zn,Error);zn.buildMessage=function(e,t){var a={literal:function(c){return'"'+n(c.text)+'"'},class:function(c){var d="",m;for(m=0;m<c.parts.length;m++)d+=c.parts[m]instanceof Array?i(c.parts[m][0])+"-"+i(c.parts[m][1]):i(c.parts[m]);return"["+(c.inverted?"^":"")+d+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(c){return c.description}};function o(c){return c.charCodeAt(0).toString(16).toUpperCase()}function n(c){return c.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+o(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+o(d)})}function i(c){return c.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+o(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+o(d)})}function r(c){return a[c.type](c)}function s(c){var d=new Array(c.length),m,h;for(m=0;m<c.length;m++)d[m]=r(c[m]);if(d.sort(),d.length>0){for(m=1,h=1;m<d.length;m++)d[m-1]!==d[m]&&(d[h]=d[m],h++);d.length=h}switch(d.length){case 1:return d[0];case 2:return d[0]+" or "+d[1];default:return d.slice(0,-1).join(", ")+", or "+d[d.length-1]}}function l(c){return c?'"'+n(c)+'"':"end of input"}return"Expected "+s(e)+" but "+l(t)+" found."};async function Aw(e,t){t=t!==void 0?t:{};var a={},o={start:Pn},n=Pn,i=function(E){return E.join("")},r="|",s=Se("|",!1),l=function(E){return E},c="%",d=Se("%",!1),m="<",h=Se("<",!1),u=">",p=Se(">",!1),g=function(E,R,_){return t.callFunction(E,R,_)},b="{",f=Se("{",!1),S="}",k=Se("}",!1),A=function(E,R){return t.getVariableValue(E,R)},y="[",x=Se("[",!1),C="]",w=Se("]",!1),v=function(E,R){return{length:E,unit:R}},T="ch",j=Se("ch",!1),P=/^[a-z0-9-]/,F=ra([["a","z"],["0","9"],"-"],!1,!1),H=function(){return Ke()},z=/^[0-9]/,N=ra([["0","9"]],!1,!1),B=function(){return Number(Ke())},U="\\\\%",$=Se("\\\\%",!1),K="\\\\{",G=Se("\\\\{",!1),J="\\\\|",he=Se("\\\\|",!1),ke="\\\\>",fe=Se("\\\\>",!1),ct=Aa(),L=0,ve=0,xe=[{line:1,column:1}],ue=0,Ne=[],V=0,Ue;if("startRule"in t){if(!(t.startRule in o))throw new Error(`Can't start parsing from rule "`+t.startRule+'".');n=o[t.startRule]}function Ke(){return e.substring(ve,L)}function Se(E,R){return{type:"literal",text:E,ignoreCase:R}}function ra(E,R,_){return{type:"class",parts:E,inverted:R,ignoreCase:_}}function Aa(){return{type:"any"}}function Ao(){return{type:"end"}}function Ut(E){var R=xe[E],_;if(R)return R;for(_=E-1;!xe[_];)_--;for(R=xe[_],R={line:R.line,column:R.column};_<E;)e.charCodeAt(_)===10?(R.line++,R.column=1):R.column++,_++;return xe[E]=R,R}function sa(E,R){var _=Ut(E),se=Ut(R);return{start:{offset:E,line:_.line,column:_.column},end:{offset:R,line:se.line,column:se.column}}}function Q(E){L<ue||(L>ue&&(ue=L,Ne=[]),Ne.push(E))}function kr(E,R,_){return new zn(zn.buildMessage(E,R),E,R,_)}async function Pn(){var E;return E=await la(),E}async function la(){var E,R,_;for(E=L,R=[],_=await md();_!==a;)R.push(_),_=await md();return R!==a&&(ve=E,R=i(R)),E=R,E}async function md(){var E;return E=await yb(),E===a&&(E=await kb(),E===a&&(E=Eb())),E}async function hd(){var E,R,_;return E=L,e.charCodeAt(L)===124?(R=r,L++):(R=a,V===0&&Q(s)),R!==a?(_=await la(),_!==a?(ve=E,R=l(_),E=R):(L=E,E=a)):(L=E,E=a),E}async function wb(){var E,R;if(E=[],R=await hd(),R!==a)for(;R!==a;)E.push(R),R=await hd();else E=a;return E}async function bb(){var E,R,_;return E=L,R=await la(),R!==a?(_=await wb(),_===a&&(_=null),_!==a?(R=[R,_],E=R):(L=E,E=a)):(L=E,E=a),E}async function yb(){var E,R,_,se,ce,yt,jo;return E=L,e.charCodeAt(L)===37?(R=c,L++):(R=a,V===0&&Q(d)),R!==a?(_=pd(),_!==a?(e.charCodeAt(L)===60?(se=m,L++):(se=a,V===0&&Q(h)),se!==a?(ce=await bb(),ce!==a?(e.charCodeAt(L)===62?(yt=u,L++):(yt=a,V===0&&Q(p)),yt!==a?(jo=ud(),jo===a&&(jo=null),jo!==a?(ve=E,R=await g(_,ce,jo),E=R):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a),E}async function kb(){var E,R,_,se,ce;return E=L,e.charCodeAt(L)===123?(R=b,L++):(R=a,V===0&&Q(f)),R!==a?(_=pd(),_!==a?(e.charCodeAt(L)===125?(se=S,L++):(se=a,V===0&&Q(k)),se!==a?(ce=ud(),ce===a&&(ce=null),ce!==a?(ve=E,R=await A(_,ce),E=R):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a),E}function ud(){var E,R,_,se,ce;return E=L,e.charCodeAt(L)===91?(R=y,L++):(R=a,V===0&&Q(x)),R!==a?(_=Sb(),_!==a?(se=vb(),se!==a?(e.charCodeAt(L)===93?(ce=C,L++):(ce=a,V===0&&Q(w)),ce!==a?(ve=E,R=v(_,se),E=R):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a),E}function vb(){var E;return e.substr(L,2)===T?(E=T,L+=2):(E=a,V===0&&Q(j)),E===a&&(E=null),E}function pd(){var E,R,_;if(E=L,R=[],P.test(e.charAt(L))?(_=e.charAt(L),L++):(_=a,V===0&&Q(F)),_!==a)for(;_!==a;)R.push(_),P.test(e.charAt(L))?(_=e.charAt(L),L++):(_=a,V===0&&Q(F));else R=a;return R!==a&&(ve=E,R=H()),E=R,E}function Sb(){var E,R,_;if(E=L,R=[],z.test(e.charAt(L))?(_=e.charAt(L),L++):(_=a,V===0&&Q(N)),_!==a)for(;_!==a;)R.push(_),z.test(e.charAt(L))?(_=e.charAt(L),L++):(_=a,V===0&&Q(N));else R=a;return R!==a&&(ve=E,R=B()),E=R,E}function Eb(){var E,R,_;if(E=L,R=[],_=gd(),_!==a)for(;_!==a;)R.push(_),_=gd();else R=a;return R!==a&&(ve=E,R=H()),E=R,E}function gd(){var E,R,_,se,ce,yt;return E=L,R=L,V++,e.charCodeAt(L)===37?(_=c,L++):(_=a,V===0&&Q(d)),V--,_===a?R=void 0:(L=R,R=a),R!==a?(_=L,V++,e.charCodeAt(L)===123?(se=b,L++):(se=a,V===0&&Q(f)),V--,se===a?_=void 0:(L=_,_=a),_!==a?(se=L,V++,e.charCodeAt(L)===124?(ce=r,L++):(ce=a,V===0&&Q(s)),V--,ce===a?se=void 0:(L=se,se=a),se!==a?(ce=L,V++,e.charCodeAt(L)===62?(yt=u,L++):(yt=a,V===0&&Q(p)),V--,yt===a?ce=void 0:(L=ce,ce=a),ce!==a?(yt=xb(),yt!==a?(R=[R,_,se,ce,yt],E=R):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a)):(L=E,E=a),E}function xb(){var E;return e.substr(L,3)===U?(E=U,L+=3):(E=a,V===0&&Q($)),E===a&&(e.substr(L,3)===K?(E=K,L+=3):(E=a,V===0&&Q(G)),E===a&&(e.substr(L,3)===J?(E=J,L+=3):(E=a,V===0&&Q(he)),E===a&&(e.substr(L,3)===ke?(E=ke,L+=3):(E=a,V===0&&Q(fe)),E===a&&(e.length>L?(E=e.charAt(L),L++):(E=a,V===0&&Q(ct)))))),E}if(Ue=await n(),Ue!==a&&L===e.length)return Ue;throw Ue!==a&&L<e.length&&Q(Ao()),kr(Ne,ue<e.length?e.charAt(ue):null,ue<e.length?sa(ue,ue+1):sa(ue,ue))}var hR=globalThis.Blob,uR=globalThis.FileReader,pR=globalThis.URL,gR=globalThis.Intl,fR=globalThis.URLSearchParams,wR=globalThis.navigator,bR=/([{}()^$&.*?/+|[\\\\]|\]|-)/g,Tw={"\u{1F600}":"grinning-face","\u{1F603}":"grinning-face-with-big-eyes","\u{1F604}":"grinning-face-with-smiling-eyes","\u{1F601}":"beaming-face-with-smiling-eyes","\u{1F606}":"grinning-squinting-face","\u{1F605}":"grinning-face-with-sweat","\u{1F923}":"rolling-on-the-floor-laughing","\u{1F602}":"face-with-tears-of-joy","\u{1F642}":"slightly-smiling-face","\u{1F643}":"upside-down-face","\u{1FAE0}":"melting-face","\u{1F609}":"winking-face","\u{1F60A}":"smiling-face-with-smiling-eyes","\u{1F607}":"smiling-face-with-halo","\u{1F970}":"smiling-face-with-hearts","\u{1F60D}":"smiling-face-with-heart-eyes","\u{1F929}":"star-struck","\u{1F618}":"face-blowing-a-kiss","\u{1F617}":"kissing-face","\u263A":"smiling-face","\u{1F61A}":"kissing-face-with-closed-eyes","\u{1F619}":"kissing-face-with-smiling-eyes","\u{1F972}":"smiling-face-with-tear","\u{1F60B}":"face-savoring-food","\u{1F61B}":"face-with-tongue","\u{1F61C}":"winking-face-with-tongue","\u{1F92A}":"zany-face","\u{1F61D}":"squinting-face-with-tongue","\u{1F911}":"money-mouth-face","\u{1F917}":"smiling-face-with-open-hands","\u{1F92D}":"face-with-hand-over-mouth","\u{1FAE2}":"face-with-open-eyes-and-hand-over-mouth","\u{1FAE3}":"face-with-peeking-eye","\u{1F92B}":"shushing-face","\u{1F914}":"thinking-face","\u{1FAE1}":"saluting-face","\u{1F910}":"zipper-mouth-face","\u{1F928}":"face-with-raised-eyebrow","\u{1F610}":"neutral-face","\u{1F611}":"expressionless-face","\u{1F636}":"face-without-mouth","\u{1FAE5}":"dotted-line-face","\u{1F636}\u200D\u{1F32B}\uFE0F":"face-in-clouds","\u{1F60F}":"smirking-face","\u{1F612}":"unamused-face","\u{1F644}":"face-with-rolling-eyes","\u{1F62C}":"grimacing-face","\u{1F62E}\u200D\u{1F4A8}":"face-exhaling","\u{1F925}":"lying-face","\u{1FAE8}":"\u229B-shaking-face","\u{1F60C}":"relieved-face","\u{1F614}":"pensive-face","\u{1F62A}":"sleepy-face","\u{1F924}":"drooling-face","\u{1F634}":"sleeping-face","\u{1F637}":"face-with-medical-mask","\u{1F912}":"face-with-thermometer","\u{1F915}":"face-with-head-bandage","\u{1F922}":"nauseated-face","\u{1F92E}":"face-vomiting","\u{1F927}":"sneezing-face","\u{1F975}":"hot-face","\u{1F976}":"cold-face","\u{1F974}":"woozy-face","\u{1F635}":"face-with-crossed-out-eyes","\u{1F635}\u200D\u{1F4AB}":"face-with-spiral-eyes","\u{1F92F}":"exploding-head","\u{1F920}":"cowboy-hat-face","\u{1F973}":"partying-face","\u{1F978}":"disguised-face","\u{1F60E}":"smiling-face-with-sunglasses","\u{1F913}":"nerd-face","\u{1F9D0}":"face-with-monocle","\u{1F615}":"confused-face","\u{1FAE4}":"face-with-diagonal-mouth","\u{1F61F}":"worried-face","\u{1F641}":"slightly-frowning-face","\u2639":"frowning-face","\u{1F62E}":"face-with-open-mouth","\u{1F62F}":"hushed-face","\u{1F632}":"astonished-face","\u{1F633}":"flushed-face","\u{1F97A}":"pleading-face","\u{1F979}":"face-holding-back-tears","\u{1F626}":"frowning-face-with-open-mouth","\u{1F627}":"anguished-face","\u{1F628}":"fearful-face","\u{1F630}":"anxious-face-with-sweat","\u{1F625}":"sad-but-relieved-face","\u{1F622}":"crying-face","\u{1F62D}":"loudly-crying-face","\u{1F631}":"face-screaming-in-fear","\u{1F616}":"confounded-face","\u{1F623}":"persevering-face","\u{1F61E}":"disappointed-face","\u{1F613}":"downcast-face-with-sweat","\u{1F629}":"weary-face","\u{1F62B}":"tired-face","\u{1F971}":"yawning-face","\u{1F624}":"face-with-steam-from-nose","\u{1F621}":"enraged-face","\u{1F620}":"angry-face","\u{1F92C}":"face-with-symbols-on-mouth","\u{1F608}":"smiling-face-with-horns","\u{1F47F}":"angry-face-with-horns","\u{1F480}":"skull","\u2620":"skull-and-crossbones","\u{1F4A9}":"pile-of-poo","\u{1F921}":"clown-face","\u{1F479}":"ogre","\u{1F47A}":"goblin","\u{1F47B}":"ghost","\u{1F47D}":"alien","\u{1F47E}":"alien-monster","\u{1F916}":"robot","\u{1F63A}":"grinning-cat","\u{1F638}":"grinning-cat-with-smiling-eyes","\u{1F639}":"cat-with-tears-of-joy","\u{1F63B}":"smiling-cat-with-heart-eyes","\u{1F63C}":"cat-with-wry-smile","\u{1F63D}":"kissing-cat","\u{1F640}":"weary-cat","\u{1F63F}":"crying-cat","\u{1F63E}":"pouting-cat","\u{1F648}":"see-no-evil-monkey","\u{1F649}":"hear-no-evil-monkey","\u{1F64A}":"speak-no-evil-monkey","\u{1F48C}":"love-letter","\u{1F498}":"heart-with-arrow","\u{1F49D}":"heart-with-ribbon","\u{1F496}":"sparkling-heart","\u{1F497}":"growing-heart","\u{1F493}":"beating-heart","\u{1F49E}":"revolving-hearts","\u{1F495}":"two-hearts","\u{1F49F}":"heart-decoration","\u2763":"heart-exclamation","\u{1F494}":"broken-heart","\u2764\uFE0F\u200D\u{1F525}":"heart-on-fire","\u2764\uFE0F\u200D\u{1FA79}":"mending-heart","\u2764":"red-heart","\u{1FA77}":"\u229B-pink-heart","\u{1F9E1}":"orange-heart","\u{1F49B}":"yellow-heart","\u{1F49A}":"green-heart","\u{1F499}":"blue-heart","\u{1FA75}":"\u229B-light-blue-heart","\u{1F49C}":"purple-heart","\u{1F90E}":"brown-heart","\u{1F5A4}":"black-heart","\u{1FA76}":"\u229B-grey-heart","\u{1F90D}":"white-heart","\u{1F48B}":"kiss-mark","\u{1F4AF}":"hundred-points","\u{1F4A2}":"anger-symbol","\u{1F4A5}":"collision","\u{1F4AB}":"dizzy","\u{1F4A6}":"sweat-droplets","\u{1F4A8}":"dashing-away","\u{1F573}":"hole","\u{1F4AC}":"speech-balloon","\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F":"eye-in-speech-bubble","\u{1F5E8}":"left-speech-bubble","\u{1F5EF}":"right-anger-bubble","\u{1F4AD}":"thought-balloon","\u{1F4A4}":"zzz","\u{1F44B}":"waving-hand","\u{1F91A}":"raised-back-of-hand","\u{1F590}":"hand-with-fingers-splayed","\u270B":"raised-hand","\u{1F596}":"vulcan-salute","\u{1FAF1}":"rightwards-hand","\u{1FAF2}":"leftwards-hand","\u{1FAF3}":"palm-down-hand","\u{1FAF4}":"palm-up-hand","\u{1FAF7}":"\u229B-leftwards-pushing-hand","\u{1FAF8}":"\u229B-rightwards-pushing-hand","\u{1F44C}":"ok-hand","\u{1F90C}":"pinched-fingers","\u{1F90F}":"pinching-hand","\u270C":"victory-hand","\u{1F91E}":"crossed-fingers","\u{1FAF0}":"hand-with-index-finger-and-thumb-crossed","\u{1F91F}":"love-you-gesture","\u{1F918}":"sign-of-the-horns","\u{1F919}":"call-me-hand","\u{1F448}":"backhand-index-pointing-left","\u{1F449}":"backhand-index-pointing-right","\u{1F446}":"backhand-index-pointing-up","\u{1F595}":"middle-finger","\u{1F447}":"backhand-index-pointing-down","\u261D":"index-pointing-up","\u{1FAF5}":"index-pointing-at-the-viewer","\u{1F44D}":"thumbs-up","\u{1F44E}":"thumbs-down","\u270A":"raised-fist","\u{1F44A}":"oncoming-fist","\u{1F91B}":"left-facing-fist","\u{1F91C}":"right-facing-fist","\u{1F44F}":"clapping-hands","\u{1F64C}":"raising-hands","\u{1FAF6}":"heart-hands","\u{1F450}":"open-hands","\u{1F932}":"palms-up-together","\u{1F91D}":"handshake","\u{1F64F}":"folded-hands","\u270D":"writing-hand","\u{1F485}":"nail-polish","\u{1F933}":"selfie","\u{1F4AA}":"flexed-biceps","\u{1F9BE}":"mechanical-arm","\u{1F9BF}":"mechanical-leg","\u{1F9B5}":"leg","\u{1F9B6}":"foot","\u{1F442}":"ear","\u{1F9BB}":"ear-with-hearing-aid","\u{1F443}":"nose","\u{1F9E0}":"brain","\u{1FAC0}":"anatomical-heart","\u{1FAC1}":"lungs","\u{1F9B7}":"tooth","\u{1F9B4}":"bone","\u{1F440}":"eyes","\u{1F441}":"eye","\u{1F445}":"tongue","\u{1F444}":"mouth","\u{1FAE6}":"biting-lip","\u{1F476}":"baby","\u{1F9D2}":"child","\u{1F466}":"boy","\u{1F467}":"girl","\u{1F9D1}":"person","\u{1F471}":"person-blond-hair","\u{1F468}":"man","\u{1F9D4}":"person-beard","\u{1F9D4}\u200D\u2642\uFE0F":"man-beard","\u{1F9D4}\u200D\u2640\uFE0F":"woman-beard","\u{1F468}\u200D\u{1F9B0}":"man-red-hair","\u{1F468}\u200D\u{1F9B1}":"man-curly-hair","\u{1F468}\u200D\u{1F9B3}":"man-white-hair","\u{1F468}\u200D\u{1F9B2}":"man-bald","\u{1F469}":"woman","\u{1F469}\u200D\u{1F9B0}":"woman-red-hair","\u{1F9D1}\u200D\u{1F9B0}":"person-red-hair","\u{1F469}\u200D\u{1F9B1}":"woman-curly-hair","\u{1F9D1}\u200D\u{1F9B1}":"person-curly-hair","\u{1F469}\u200D\u{1F9B3}":"woman-white-hair","\u{1F9D1}\u200D\u{1F9B3}":"person-white-hair","\u{1F469}\u200D\u{1F9B2}":"woman-bald","\u{1F9D1}\u200D\u{1F9B2}":"person-bald","\u{1F471}\u200D\u2640\uFE0F":"woman-blond-hair","\u{1F471}\u200D\u2642\uFE0F":"man-blond-hair","\u{1F9D3}":"older-person","\u{1F474}":"old-man","\u{1F475}":"old-woman","\u{1F64D}":"person-frowning","\u{1F64D}\u200D\u2642\uFE0F":"man-frowning","\u{1F64D}\u200D\u2640\uFE0F":"woman-frowning","\u{1F64E}":"person-pouting","\u{1F64E}\u200D\u2642\uFE0F":"man-pouting","\u{1F64E}\u200D\u2640\uFE0F":"woman-pouting","\u{1F645}":"person-gesturing-no","\u{1F645}\u200D\u2642\uFE0F":"man-gesturing-no","\u{1F645}\u200D\u2640\uFE0F":"woman-gesturing-no","\u{1F646}":"person-gesturing-ok","\u{1F646}\u200D\u2642\uFE0F":"man-gesturing-ok","\u{1F646}\u200D\u2640\uFE0F":"woman-gesturing-ok","\u{1F481}":"person-tipping-hand","\u{1F481}\u200D\u2642\uFE0F":"man-tipping-hand","\u{1F481}\u200D\u2640\uFE0F":"woman-tipping-hand","\u{1F64B}":"person-raising-hand","\u{1F64B}\u200D\u2642\uFE0F":"man-raising-hand","\u{1F64B}\u200D\u2640\uFE0F":"woman-raising-hand","\u{1F9CF}":"deaf-person","\u{1F9CF}\u200D\u2642\uFE0F":"deaf-man","\u{1F9CF}\u200D\u2640\uFE0F":"deaf-woman","\u{1F647}":"person-bowing","\u{1F647}\u200D\u2642\uFE0F":"man-bowing","\u{1F647}\u200D\u2640\uFE0F":"woman-bowing","\u{1F926}":"person-facepalming","\u{1F926}\u200D\u2642\uFE0F":"man-facepalming","\u{1F926}\u200D\u2640\uFE0F":"woman-facepalming","\u{1F937}":"person-shrugging","\u{1F937}\u200D\u2642\uFE0F":"man-shrugging","\u{1F937}\u200D\u2640\uFE0F":"woman-shrugging","\u{1F9D1}\u200D\u2695\uFE0F":"health-worker","\u{1F468}\u200D\u2695\uFE0F":"man-health-worker","\u{1F469}\u200D\u2695\uFE0F":"woman-health-worker","\u{1F9D1}\u200D\u{1F393}":"student","\u{1F468}\u200D\u{1F393}":"man-student","\u{1F469}\u200D\u{1F393}":"woman-student","\u{1F9D1}\u200D\u{1F3EB}":"teacher","\u{1F468}\u200D\u{1F3EB}":"man-teacher","\u{1F469}\u200D\u{1F3EB}":"woman-teacher","\u{1F9D1}\u200D\u2696\uFE0F":"judge","\u{1F468}\u200D\u2696\uFE0F":"man-judge","\u{1F469}\u200D\u2696\uFE0F":"woman-judge","\u{1F9D1}\u200D\u{1F33E}":"farmer","\u{1F468}\u200D\u{1F33E}":"man-farmer","\u{1F469}\u200D\u{1F33E}":"woman-farmer","\u{1F9D1}\u200D\u{1F373}":"cook","\u{1F468}\u200D\u{1F373}":"man-cook","\u{1F469}\u200D\u{1F373}":"woman-cook","\u{1F9D1}\u200D\u{1F527}":"mechanic","\u{1F468}\u200D\u{1F527}":"man-mechanic","\u{1F469}\u200D\u{1F527}":"woman-mechanic","\u{1F9D1}\u200D\u{1F3ED}":"factory-worker","\u{1F468}\u200D\u{1F3ED}":"man-factory-worker","\u{1F469}\u200D\u{1F3ED}":"woman-factory-worker","\u{1F9D1}\u200D\u{1F4BC}":"office-worker","\u{1F468}\u200D\u{1F4BC}":"man-office-worker","\u{1F469}\u200D\u{1F4BC}":"woman-office-worker","\u{1F9D1}\u200D\u{1F52C}":"scientist","\u{1F468}\u200D\u{1F52C}":"man-scientist","\u{1F469}\u200D\u{1F52C}":"woman-scientist","\u{1F9D1}\u200D\u{1F4BB}":"technologist","\u{1F468}\u200D\u{1F4BB}":"man-technologist","\u{1F469}\u200D\u{1F4BB}":"woman-technologist","\u{1F9D1}\u200D\u{1F3A4}":"singer","\u{1F468}\u200D\u{1F3A4}":"man-singer","\u{1F469}\u200D\u{1F3A4}":"woman-singer","\u{1F9D1}\u200D\u{1F3A8}":"artist","\u{1F468}\u200D\u{1F3A8}":"man-artist","\u{1F469}\u200D\u{1F3A8}":"woman-artist","\u{1F9D1}\u200D\u2708\uFE0F":"pilot","\u{1F468}\u200D\u2708\uFE0F":"man-pilot","\u{1F469}\u200D\u2708\uFE0F":"woman-pilot","\u{1F9D1}\u200D\u{1F680}":"astronaut","\u{1F468}\u200D\u{1F680}":"man-astronaut","\u{1F469}\u200D\u{1F680}":"woman-astronaut","\u{1F9D1}\u200D\u{1F692}":"firefighter","\u{1F468}\u200D\u{1F692}":"man-firefighter","\u{1F469}\u200D\u{1F692}":"woman-firefighter","\u{1F46E}":"police-officer","\u{1F46E}\u200D\u2642\uFE0F":"man-police-officer","\u{1F46E}\u200D\u2640\uFE0F":"woman-police-officer","\u{1F575}":"detective","\u{1F575}\uFE0F\u200D\u2642\uFE0F":"man-detective","\u{1F575}\uFE0F\u200D\u2640\uFE0F":"woman-detective","\u{1F482}":"guard","\u{1F482}\u200D\u2642\uFE0F":"man-guard","\u{1F482}\u200D\u2640\uFE0F":"woman-guard","\u{1F977}":"ninja","\u{1F477}":"construction-worker","\u{1F477}\u200D\u2642\uFE0F":"man-construction-worker","\u{1F477}\u200D\u2640\uFE0F":"woman-construction-worker","\u{1FAC5}":"person-with-crown","\u{1F934}":"prince","\u{1F478}":"princess","\u{1F473}":"person-wearing-turban","\u{1F473}\u200D\u2642\uFE0F":"man-wearing-turban","\u{1F473}\u200D\u2640\uFE0F":"woman-wearing-turban","\u{1F472}":"person-with-skullcap","\u{1F9D5}":"woman-with-headscarf","\u{1F935}":"person-in-tuxedo","\u{1F935}\u200D\u2642\uFE0F":"man-in-tuxedo","\u{1F935}\u200D\u2640\uFE0F":"woman-in-tuxedo","\u{1F470}":"person-with-veil","\u{1F470}\u200D\u2642\uFE0F":"man-with-veil","\u{1F470}\u200D\u2640\uFE0F":"woman-with-veil","\u{1F930}":"pregnant-woman","\u{1FAC3}":"pregnant-man","\u{1FAC4}":"pregnant-person","\u{1F931}":"breast-feeding","\u{1F469}\u200D\u{1F37C}":"woman-feeding-baby","\u{1F468}\u200D\u{1F37C}":"man-feeding-baby","\u{1F9D1}\u200D\u{1F37C}":"person-feeding-baby","\u{1F47C}":"baby-angel","\u{1F385}":"santa-claus","\u{1F936}":"mrs-claus","\u{1F9D1}\u200D\u{1F384}":"mx-claus","\u{1F9B8}":"superhero","\u{1F9B8}\u200D\u2642\uFE0F":"man-superhero","\u{1F9B8}\u200D\u2640\uFE0F":"woman-superhero","\u{1F9B9}":"supervillain","\u{1F9B9}\u200D\u2642\uFE0F":"man-supervillain","\u{1F9B9}\u200D\u2640\uFE0F":"woman-supervillain","\u{1F9D9}":"mage","\u{1F9D9}\u200D\u2642\uFE0F":"man-mage","\u{1F9D9}\u200D\u2640\uFE0F":"woman-mage","\u{1F9DA}":"fairy","\u{1F9DA}\u200D\u2642\uFE0F":"man-fairy","\u{1F9DA}\u200D\u2640\uFE0F":"woman-fairy","\u{1F9DB}":"vampire","\u{1F9DB}\u200D\u2642\uFE0F":"man-vampire","\u{1F9DB}\u200D\u2640\uFE0F":"woman-vampire","\u{1F9DC}":"merperson","\u{1F9DC}\u200D\u2642\uFE0F":"merman","\u{1F9DC}\u200D\u2640\uFE0F":"mermaid","\u{1F9DD}":"elf","\u{1F9DD}\u200D\u2642\uFE0F":"man-elf","\u{1F9DD}\u200D\u2640\uFE0F":"woman-elf","\u{1F9DE}":"genie","\u{1F9DE}\u200D\u2642\uFE0F":"man-genie","\u{1F9DE}\u200D\u2640\uFE0F":"woman-genie","\u{1F9DF}":"zombie","\u{1F9DF}\u200D\u2642\uFE0F":"man-zombie","\u{1F9DF}\u200D\u2640\uFE0F":"woman-zombie","\u{1F9CC}":"troll","\u{1F486}":"person-getting-massage","\u{1F486}\u200D\u2642\uFE0F":"man-getting-massage","\u{1F486}\u200D\u2640\uFE0F":"woman-getting-massage","\u{1F487}":"person-getting-haircut","\u{1F487}\u200D\u2642\uFE0F":"man-getting-haircut","\u{1F487}\u200D\u2640\uFE0F":"woman-getting-haircut","\u{1F6B6}":"person-walking","\u{1F6B6}\u200D\u2642\uFE0F":"man-walking","\u{1F6B6}\u200D\u2640\uFE0F":"woman-walking","\u{1F9CD}":"person-standing","\u{1F9CD}\u200D\u2642\uFE0F":"man-standing","\u{1F9CD}\u200D\u2640\uFE0F":"woman-standing","\u{1F9CE}":"person-kneeling","\u{1F9CE}\u200D\u2642\uFE0F":"man-kneeling","\u{1F9CE}\u200D\u2640\uFE0F":"woman-kneeling","\u{1F9D1}\u200D\u{1F9AF}":"person-with-white-cane","\u{1F468}\u200D\u{1F9AF}":"man-with-white-cane","\u{1F469}\u200D\u{1F9AF}":"woman-with-white-cane","\u{1F9D1}\u200D\u{1F9BC}":"person-in-motorized-wheelchair","\u{1F468}\u200D\u{1F9BC}":"man-in-motorized-wheelchair","\u{1F469}\u200D\u{1F9BC}":"woman-in-motorized-wheelchair","\u{1F9D1}\u200D\u{1F9BD}":"person-in-manual-wheelchair","\u{1F468}\u200D\u{1F9BD}":"man-in-manual-wheelchair","\u{1F469}\u200D\u{1F9BD}":"woman-in-manual-wheelchair","\u{1F3C3}":"person-running","\u{1F3C3}\u200D\u2642\uFE0F":"man-running","\u{1F3C3}\u200D\u2640\uFE0F":"woman-running","\u{1F483}":"woman-dancing","\u{1F57A}":"man-dancing","\u{1F574}":"person-in-suit-levitating","\u{1F46F}":"people-with-bunny-ears","\u{1F46F}\u200D\u2642\uFE0F":"men-with-bunny-ears","\u{1F46F}\u200D\u2640\uFE0F":"women-with-bunny-ears","\u{1F9D6}":"person-in-steamy-room","\u{1F9D6}\u200D\u2642\uFE0F":"man-in-steamy-room","\u{1F9D6}\u200D\u2640\uFE0F":"woman-in-steamy-room","\u{1F9D7}":"person-climbing","\u{1F9D7}\u200D\u2642\uFE0F":"man-climbing","\u{1F9D7}\u200D\u2640\uFE0F":"woman-climbing","\u{1F93A}":"person-fencing","\u{1F3C7}":"horse-racing","\u26F7":"skier","\u{1F3C2}":"snowboarder","\u{1F3CC}":"person-golfing","\u{1F3CC}\uFE0F\u200D\u2642\uFE0F":"man-golfing","\u{1F3CC}\uFE0F\u200D\u2640\uFE0F":"woman-golfing","\u{1F3C4}":"person-surfing","\u{1F3C4}\u200D\u2642\uFE0F":"man-surfing","\u{1F3C4}\u200D\u2640\uFE0F":"woman-surfing","\u{1F6A3}":"person-rowing-boat","\u{1F6A3}\u200D\u2642\uFE0F":"man-rowing-boat","\u{1F6A3}\u200D\u2640\uFE0F":"woman-rowing-boat","\u{1F3CA}":"person-swimming","\u{1F3CA}\u200D\u2642\uFE0F":"man-swimming","\u{1F3CA}\u200D\u2640\uFE0F":"woman-swimming","\u26F9":"person-bouncing-ball","\u26F9\uFE0F\u200D\u2642\uFE0F":"man-bouncing-ball","\u26F9\uFE0F\u200D\u2640\uFE0F":"woman-bouncing-ball","\u{1F3CB}":"person-lifting-weights","\u{1F3CB}\uFE0F\u200D\u2642\uFE0F":"man-lifting-weights","\u{1F3CB}\uFE0F\u200D\u2640\uFE0F":"woman-lifting-weights","\u{1F6B4}":"person-biking","\u{1F6B4}\u200D\u2642\uFE0F":"man-biking","\u{1F6B4}\u200D\u2640\uFE0F":"woman-biking","\u{1F6B5}":"person-mountain-biking","\u{1F6B5}\u200D\u2642\uFE0F":"man-mountain-biking","\u{1F6B5}\u200D\u2640\uFE0F":"woman-mountain-biking","\u{1F938}":"person-cartwheeling","\u{1F938}\u200D\u2642\uFE0F":"man-cartwheeling","\u{1F938}\u200D\u2640\uFE0F":"woman-cartwheeling","\u{1F93C}":"people-wrestling","\u{1F93C}\u200D\u2642\uFE0F":"men-wrestling","\u{1F93C}\u200D\u2640\uFE0F":"women-wrestling","\u{1F93D}":"person-playing-water-polo","\u{1F93D}\u200D\u2642\uFE0F":"man-playing-water-polo","\u{1F93D}\u200D\u2640\uFE0F":"woman-playing-water-polo","\u{1F93E}":"person-playing-handball","\u{1F93E}\u200D\u2642\uFE0F":"man-playing-handball","\u{1F93E}\u200D\u2640\uFE0F":"woman-playing-handball","\u{1F939}":"person-juggling","\u{1F939}\u200D\u2642\uFE0F":"man-juggling","\u{1F939}\u200D\u2640\uFE0F":"woman-juggling","\u{1F9D8}":"person-in-lotus-position","\u{1F9D8}\u200D\u2642\uFE0F":"man-in-lotus-position","\u{1F9D8}\u200D\u2640\uFE0F":"woman-in-lotus-position","\u{1F6C0}":"person-taking-bath","\u{1F6CC}":"person-in-bed","\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}":"people-holding-hands","\u{1F46D}":"women-holding-hands","\u{1F46B}":"woman-and-man-holding-hands","\u{1F46C}":"men-holding-hands","\u{1F48F}":"kiss","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}":"kiss-woman,-man","\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}":"kiss-man,-man","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}":"kiss-woman,-woman","\u{1F491}":"couple-with-heart","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}":"couple-with-heart-woman,-man","\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}":"couple-with-heart-man,-man","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}":"couple-with-heart-woman,-woman","\u{1F46A}":"family","\u{1F468}\u200D\u{1F469}\u200D\u{1F466}":"family-man,-woman,-boy","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}":"family-man,-woman,-girl","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}":"family-man,-woman,-girl,-boy","\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}":"family-man,-woman,-boy,-boy","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}":"family-man,-woman,-girl,-girl","\u{1F468}\u200D\u{1F468}\u200D\u{1F466}":"family-man,-man,-boy","\u{1F468}\u200D\u{1F468}\u200D\u{1F467}":"family-man,-man,-girl","\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}":"family-man,-man,-girl,-boy","\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}":"family-man,-man,-boy,-boy","\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}":"family-man,-man,-girl,-girl","\u{1F469}\u200D\u{1F469}\u200D\u{1F466}":"family-woman,-woman,-boy","\u{1F469}\u200D\u{1F469}\u200D\u{1F467}":"family-woman,-woman,-girl","\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}":"family-woman,-woman,-girl,-boy","\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}":"family-woman,-woman,-boy,-boy","\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}":"family-woman,-woman,-girl,-girl","\u{1F468}\u200D\u{1F466}":"family-man,-boy","\u{1F468}\u200D\u{1F466}\u200D\u{1F466}":"family-man,-boy,-boy","\u{1F468}\u200D\u{1F467}":"family-man,-girl","\u{1F468}\u200D\u{1F467}\u200D\u{1F466}":"family-man,-girl,-boy","\u{1F468}\u200D\u{1F467}\u200D\u{1F467}":"family-man,-girl,-girl","\u{1F469}\u200D\u{1F466}":"family-woman,-boy","\u{1F469}\u200D\u{1F466}\u200D\u{1F466}":"family-woman,-boy,-boy","\u{1F469}\u200D\u{1F467}":"family-woman,-girl","\u{1F469}\u200D\u{1F467}\u200D\u{1F466}":"family-woman,-girl,-boy","\u{1F469}\u200D\u{1F467}\u200D\u{1F467}":"family-woman,-girl,-girl","\u{1F5E3}":"speaking-head","\u{1F464}":"bust-in-silhouette","\u{1F465}":"busts-in-silhouette","\u{1FAC2}":"people-hugging","\u{1F463}":"footprints","\u{1F9B0}":"red-hair","\u{1F9B1}":"curly-hair","\u{1F9B3}":"white-hair","\u{1F9B2}":"bald","\u{1F435}":"monkey-face","\u{1F412}":"monkey","\u{1F98D}":"gorilla","\u{1F9A7}":"orangutan","\u{1F436}":"dog-face","\u{1F415}":"dog","\u{1F9AE}":"guide-dog","\u{1F415}\u200D\u{1F9BA}":"service-dog","\u{1F429}":"poodle","\u{1F43A}":"wolf","\u{1F98A}":"fox","\u{1F99D}":"raccoon","\u{1F431}":"cat-face","\u{1F408}":"cat","\u{1F408}\u200D\u2B1B":"black-cat","\u{1F981}":"lion","\u{1F42F}":"tiger-face","\u{1F405}":"tiger","\u{1F406}":"leopard","\u{1F434}":"horse-face","\u{1FACE}":"\u229B-moose","\u{1FACF}":"\u229B-donkey","\u{1F40E}":"horse","\u{1F984}":"unicorn","\u{1F993}":"zebra","\u{1F98C}":"deer","\u{1F9AC}":"bison","\u{1F42E}":"cow-face","\u{1F402}":"ox","\u{1F403}":"water-buffalo","\u{1F404}":"cow","\u{1F437}":"pig-face","\u{1F416}":"pig","\u{1F417}":"boar","\u{1F43D}":"pig-nose","\u{1F40F}":"ram","\u{1F411}":"ewe","\u{1F410}":"goat","\u{1F42A}":"camel","\u{1F42B}":"two-hump-camel","\u{1F999}":"llama","\u{1F992}":"giraffe","\u{1F418}":"elephant","\u{1F9A3}":"mammoth","\u{1F98F}":"rhinoceros","\u{1F99B}":"hippopotamus","\u{1F42D}":"mouse-face","\u{1F401}":"mouse","\u{1F400}":"rat","\u{1F439}":"hamster","\u{1F430}":"rabbit-face","\u{1F407}":"rabbit","\u{1F43F}":"chipmunk","\u{1F9AB}":"beaver","\u{1F994}":"hedgehog","\u{1F987}":"bat","\u{1F43B}":"bear","\u{1F43B}\u200D\u2744\uFE0F":"polar-bear","\u{1F428}":"koala","\u{1F43C}":"panda","\u{1F9A5}":"sloth","\u{1F9A6}":"otter","\u{1F9A8}":"skunk","\u{1F998}":"kangaroo","\u{1F9A1}":"badger","\u{1F43E}":"paw-prints","\u{1F983}":"turkey","\u{1F414}":"chicken","\u{1F413}":"rooster","\u{1F423}":"hatching-chick","\u{1F424}":"baby-chick","\u{1F425}":"front-facing-baby-chick","\u{1F426}":"bird","\u{1F427}":"penguin","\u{1F54A}":"dove","\u{1F985}":"eagle","\u{1F986}":"duck","\u{1F9A2}":"swan","\u{1F989}":"owl","\u{1F9A4}":"dodo","\u{1FAB6}":"feather","\u{1F9A9}":"flamingo","\u{1F99A}":"peacock","\u{1F99C}":"parrot","\u{1FABD}":"\u229B-wing","\u{1F426}\u200D\u2B1B":"\u229B-black-bird","\u{1FABF}":"\u229B-goose","\u{1F438}":"frog","\u{1F40A}":"crocodile","\u{1F422}":"turtle","\u{1F98E}":"lizard","\u{1F40D}":"snake","\u{1F432}":"dragon-face","\u{1F409}":"dragon","\u{1F995}":"sauropod","\u{1F996}":"t-rex","\u{1F433}":"spouting-whale","\u{1F40B}":"whale","\u{1F42C}":"dolphin","\u{1F9AD}":"seal","\u{1F41F}":"fish","\u{1F420}":"tropical-fish","\u{1F421}":"blowfish","\u{1F988}":"shark","\u{1F419}":"octopus","\u{1F41A}":"spiral-shell","\u{1FAB8}":"coral","\u{1FABC}":"\u229B-jellyfish","\u{1F40C}":"snail","\u{1F98B}":"butterfly","\u{1F41B}":"bug","\u{1F41C}":"ant","\u{1F41D}":"honeybee","\u{1FAB2}":"beetle","\u{1F41E}":"lady-beetle","\u{1F997}":"cricket","\u{1FAB3}":"cockroach","\u{1F577}":"spider","\u{1F578}":"spider-web","\u{1F982}":"scorpion","\u{1F99F}":"mosquito","\u{1FAB0}":"fly","\u{1FAB1}":"worm","\u{1F9A0}":"microbe","\u{1F490}":"bouquet","\u{1F338}":"cherry-blossom","\u{1F4AE}":"white-flower","\u{1FAB7}":"lotus","\u{1F3F5}":"rosette","\u{1F339}":"rose","\u{1F940}":"wilted-flower","\u{1F33A}":"hibiscus","\u{1F33B}":"sunflower","\u{1F33C}":"blossom","\u{1F337}":"tulip","\u{1FABB}":"\u229B-hyacinth","\u{1F331}":"seedling","\u{1FAB4}":"potted-plant","\u{1F332}":"evergreen-tree","\u{1F333}":"deciduous-tree","\u{1F334}":"palm-tree","\u{1F335}":"cactus","\u{1F33E}":"sheaf-of-rice","\u{1F33F}":"herb","\u2618":"shamrock","\u{1F340}":"four-leaf-clover","\u{1F341}":"maple-leaf","\u{1F342}":"fallen-leaf","\u{1F343}":"leaf-fluttering-in-wind","\u{1FAB9}":"empty-nest","\u{1FABA}":"nest-with-eggs","\u{1F344}":"mushroom","\u{1F347}":"grapes","\u{1F348}":"melon","\u{1F349}":"watermelon","\u{1F34A}":"tangerine","\u{1F34B}":"lemon","\u{1F34C}":"banana","\u{1F34D}":"pineapple","\u{1F96D}":"mango","\u{1F34E}":"red-apple","\u{1F34F}":"green-apple","\u{1F350}":"pear","\u{1F351}":"peach","\u{1F352}":"cherries","\u{1F353}":"strawberry","\u{1FAD0}":"blueberries","\u{1F95D}":"kiwi-fruit","\u{1F345}":"tomato","\u{1FAD2}":"olive","\u{1F965}":"coconut","\u{1F951}":"avocado","\u{1F346}":"eggplant","\u{1F954}":"potato","\u{1F955}":"carrot","\u{1F33D}":"ear-of-corn","\u{1F336}":"hot-pepper","\u{1FAD1}":"bell-pepper","\u{1F952}":"cucumber","\u{1F96C}":"leafy-green","\u{1F966}":"broccoli","\u{1F9C4}":"garlic","\u{1F9C5}":"onion","\u{1F95C}":"peanuts","\u{1FAD8}":"beans","\u{1F330}":"chestnut","\u{1FADA}":"\u229B-ginger-root","\u{1FADB}":"\u229B-pea-pod","\u{1F35E}":"bread","\u{1F950}":"croissant","\u{1F956}":"baguette-bread","\u{1FAD3}":"flatbread","\u{1F968}":"pretzel","\u{1F96F}":"bagel","\u{1F95E}":"pancakes","\u{1F9C7}":"waffle","\u{1F9C0}":"cheese-wedge","\u{1F356}":"meat-on-bone","\u{1F357}":"poultry-leg","\u{1F969}":"cut-of-meat","\u{1F953}":"bacon","\u{1F354}":"hamburger","\u{1F35F}":"french-fries","\u{1F355}":"pizza","\u{1F32D}":"hot-dog","\u{1F96A}":"sandwich","\u{1F32E}":"taco","\u{1F32F}":"burrito","\u{1FAD4}":"tamale","\u{1F959}":"stuffed-flatbread","\u{1F9C6}":"falafel","\u{1F95A}":"egg","\u{1F373}":"cooking","\u{1F958}":"shallow-pan-of-food","\u{1F372}":"pot-of-food","\u{1FAD5}":"fondue","\u{1F963}":"bowl-with-spoon","\u{1F957}":"green-salad","\u{1F37F}":"popcorn","\u{1F9C8}":"butter","\u{1F9C2}":"salt","\u{1F96B}":"canned-food","\u{1F371}":"bento-box","\u{1F358}":"rice-cracker","\u{1F359}":"rice-ball","\u{1F35A}":"cooked-rice","\u{1F35B}":"curry-rice","\u{1F35C}":"steaming-bowl","\u{1F35D}":"spaghetti","\u{1F360}":"roasted-sweet-potato","\u{1F362}":"oden","\u{1F363}":"sushi","\u{1F364}":"fried-shrimp","\u{1F365}":"fish-cake-with-swirl","\u{1F96E}":"moon-cake","\u{1F361}":"dango","\u{1F95F}":"dumpling","\u{1F960}":"fortune-cookie","\u{1F961}":"takeout-box","\u{1F980}":"crab","\u{1F99E}":"lobster","\u{1F990}":"shrimp","\u{1F991}":"squid","\u{1F9AA}":"oyster","\u{1F366}":"soft-ice-cream","\u{1F367}":"shaved-ice","\u{1F368}":"ice-cream","\u{1F369}":"doughnut","\u{1F36A}":"cookie","\u{1F382}":"birthday-cake","\u{1F370}":"shortcake","\u{1F9C1}":"cupcake","\u{1F967}":"pie","\u{1F36B}":"chocolate-bar","\u{1F36C}":"candy","\u{1F36D}":"lollipop","\u{1F36E}":"custard","\u{1F36F}":"honey-pot","\u{1F37C}":"baby-bottle","\u{1F95B}":"glass-of-milk","\u2615":"hot-beverage","\u{1FAD6}":"teapot","\u{1F375}":"teacup-without-handle","\u{1F376}":"sake","\u{1F37E}":"bottle-with-popping-cork","\u{1F377}":"wine-glass","\u{1F378}":"cocktail-glass","\u{1F379}":"tropical-drink","\u{1F37A}":"beer-mug","\u{1F37B}":"clinking-beer-mugs","\u{1F942}":"clinking-glasses","\u{1F943}":"tumbler-glass","\u{1FAD7}":"pouring-liquid","\u{1F964}":"cup-with-straw","\u{1F9CB}":"bubble-tea","\u{1F9C3}":"beverage-box","\u{1F9C9}":"mate","\u{1F9CA}":"ice","\u{1F962}":"chopsticks","\u{1F37D}":"fork-and-knife-with-plate","\u{1F374}":"fork-and-knife","\u{1F944}":"spoon","\u{1F52A}":"kitchen-knife","\u{1FAD9}":"jar","\u{1F3FA}":"amphora","\u{1F30D}":"globe-showing-europe-africa","\u{1F30E}":"globe-showing-americas","\u{1F30F}":"globe-showing-asia-australia","\u{1F310}":"globe-with-meridians","\u{1F5FA}":"world-map","\u{1F5FE}":"map-of-japan","\u{1F9ED}":"compass","\u{1F3D4}":"snow-capped-mountain","\u26F0":"mountain","\u{1F30B}":"volcano","\u{1F5FB}":"mount-fuji","\u{1F3D5}":"camping","\u{1F3D6}":"beach-with-umbrella","\u{1F3DC}":"desert","\u{1F3DD}":"desert-island","\u{1F3DE}":"national-park","\u{1F3DF}":"stadium","\u{1F3DB}":"classical-building","\u{1F3D7}":"building-construction","\u{1F9F1}":"brick","\u{1FAA8}":"rock","\u{1FAB5}":"wood","\u{1F6D6}":"hut","\u{1F3D8}":"houses","\u{1F3DA}":"derelict-house","\u{1F3E0}":"house","\u{1F3E1}":"house-with-garden","\u{1F3E2}":"office-building","\u{1F3E3}":"japanese-post-office","\u{1F3E4}":"post-office","\u{1F3E5}":"hospital","\u{1F3E6}":"bank","\u{1F3E8}":"hotel","\u{1F3E9}":"love-hotel","\u{1F3EA}":"convenience-store","\u{1F3EB}":"school","\u{1F3EC}":"department-store","\u{1F3ED}":"factory","\u{1F3EF}":"japanese-castle","\u{1F3F0}":"castle","\u{1F492}":"wedding","\u{1F5FC}":"tokyo-tower","\u{1F5FD}":"statue-of-liberty","\u26EA":"church","\u{1F54C}":"mosque","\u{1F6D5}":"hindu-temple","\u{1F54D}":"synagogue","\u26E9":"shinto-shrine","\u{1F54B}":"kaaba","\u26F2":"fountain","\u26FA":"tent","\u{1F301}":"foggy","\u{1F303}":"night-with-stars","\u{1F3D9}":"cityscape","\u{1F304}":"sunrise-over-mountains","\u{1F305}":"sunrise","\u{1F306}":"cityscape-at-dusk","\u{1F307}":"sunset","\u{1F309}":"bridge-at-night","\u2668":"hot-springs","\u{1F3A0}":"carousel-horse","\u{1F6DD}":"playground-slide","\u{1F3A1}":"ferris-wheel","\u{1F3A2}":"roller-coaster","\u{1F488}":"barber-pole","\u{1F3AA}":"circus-tent","\u{1F682}":"locomotive","\u{1F683}":"railway-car","\u{1F684}":"high-speed-train","\u{1F685}":"bullet-train","\u{1F686}":"train","\u{1F687}":"metro","\u{1F688}":"light-rail","\u{1F689}":"station","\u{1F68A}":"tram","\u{1F69D}":"monorail","\u{1F69E}":"mountain-railway","\u{1F68B}":"tram-car","\u{1F68C}":"bus","\u{1F68D}":"oncoming-bus","\u{1F68E}":"trolleybus","\u{1F690}":"minibus","\u{1F691}":"ambulance","\u{1F692}":"fire-engine","\u{1F693}":"police-car","\u{1F694}":"oncoming-police-car","\u{1F695}":"taxi","\u{1F696}":"oncoming-taxi","\u{1F697}":"automobile","\u{1F698}":"oncoming-automobile","\u{1F699}":"sport-utility-vehicle","\u{1F6FB}":"pickup-truck","\u{1F69A}":"delivery-truck","\u{1F69B}":"articulated-lorry","\u{1F69C}":"tractor","\u{1F3CE}":"racing-car","\u{1F3CD}":"motorcycle","\u{1F6F5}":"motor-scooter","\u{1F9BD}":"manual-wheelchair","\u{1F9BC}":"motorized-wheelchair","\u{1F6FA}":"auto-rickshaw","\u{1F6B2}":"bicycle","\u{1F6F4}":"kick-scooter","\u{1F6F9}":"skateboard","\u{1F6FC}":"roller-skate","\u{1F68F}":"bus-stop","\u{1F6E3}":"motorway","\u{1F6E4}":"railway-track","\u{1F6E2}":"oil-drum","\u26FD":"fuel-pump","\u{1F6DE}":"wheel","\u{1F6A8}":"police-car-light","\u{1F6A5}":"horizontal-traffic-light","\u{1F6A6}":"vertical-traffic-light","\u{1F6D1}":"stop-sign","\u{1F6A7}":"construction","\u2693":"anchor","\u{1F6DF}":"ring-buoy","\u26F5":"sailboat","\u{1F6F6}":"canoe","\u{1F6A4}":"speedboat","\u{1F6F3}":"passenger-ship","\u26F4":"ferry","\u{1F6E5}":"motor-boat","\u{1F6A2}":"ship","\u2708":"airplane","\u{1F6E9}":"small-airplane","\u{1F6EB}":"airplane-departure","\u{1F6EC}":"airplane-arrival","\u{1FA82}":"parachute","\u{1F4BA}":"seat","\u{1F681}":"helicopter","\u{1F69F}":"suspension-railway","\u{1F6A0}":"mountain-cableway","\u{1F6A1}":"aerial-tramway","\u{1F6F0}":"satellite","\u{1F680}":"rocket","\u{1F6F8}":"flying-saucer","\u{1F6CE}":"bellhop-bell","\u{1F9F3}":"luggage","\u231B":"hourglass-done","\u23F3":"hourglass-not-done","\u231A":"watch","\u23F0":"alarm-clock","\u23F1":"stopwatch","\u23F2":"timer-clock","\u{1F570}":"mantelpiece-clock","\u{1F55B}":"twelve-o-clock","\u{1F567}":"twelve-thirty","\u{1F550}":"one-o-clock","\u{1F55C}":"one-thirty","\u{1F551}":"two-o-clock","\u{1F55D}":"two-thirty","\u{1F552}":"three-o-clock","\u{1F55E}":"three-thirty","\u{1F553}":"four-o-clock","\u{1F55F}":"four-thirty","\u{1F554}":"five-o-clock","\u{1F560}":"five-thirty","\u{1F555}":"six-o-clock","\u{1F561}":"six-thirty","\u{1F556}":"seven-o-clock","\u{1F562}":"seven-thirty","\u{1F557}":"eight-o-clock","\u{1F563}":"eight-thirty","\u{1F558}":"nine-o-clock","\u{1F564}":"nine-thirty","\u{1F559}":"ten-o-clock","\u{1F565}":"ten-thirty","\u{1F55A}":"eleven-o-clock","\u{1F566}":"eleven-thirty","\u{1F311}":"new-moon","\u{1F312}":"waxing-crescent-moon","\u{1F313}":"first-quarter-moon","\u{1F314}":"waxing-gibbous-moon","\u{1F315}":"full-moon","\u{1F316}":"waning-gibbous-moon","\u{1F317}":"last-quarter-moon","\u{1F318}":"waning-crescent-moon","\u{1F319}":"crescent-moon","\u{1F31A}":"new-moon-face","\u{1F31B}":"first-quarter-moon-face","\u{1F31C}":"last-quarter-moon-face","\u{1F321}":"thermometer","\u2600":"sun","\u{1F31D}":"full-moon-face","\u{1F31E}":"sun-with-face","\u{1FA90}":"ringed-planet","\u2B50":"star","\u{1F31F}":"glowing-star","\u{1F320}":"shooting-star","\u{1F30C}":"milky-way","\u2601":"cloud","\u26C5":"sun-behind-cloud","\u26C8":"cloud-with-lightning-and-rain","\u{1F324}":"sun-behind-small-cloud","\u{1F325}":"sun-behind-large-cloud","\u{1F326}":"sun-behind-rain-cloud","\u{1F327}":"cloud-with-rain","\u{1F328}":"cloud-with-snow","\u{1F329}":"cloud-with-lightning","\u{1F32A}":"tornado","\u{1F32B}":"fog","\u{1F32C}":"wind-face","\u{1F300}":"cyclone","\u{1F308}":"rainbow","\u{1F302}":"closed-umbrella","\u2602":"umbrella","\u2614":"umbrella-with-rain-drops","\u26F1":"umbrella-on-ground","\u26A1":"high-voltage","\u2744":"snowflake","\u2603":"snowman","\u26C4":"snowman-without-snow","\u2604":"comet","\u{1F525}":"fire","\u{1F4A7}":"droplet","\u{1F30A}":"water-wave","\u{1F383}":"jack-o-lantern","\u{1F384}":"christmas-tree","\u{1F386}":"fireworks","\u{1F387}":"sparkler","\u{1F9E8}":"firecracker","\u2728":"sparkles","\u{1F388}":"balloon","\u{1F389}":"party-popper","\u{1F38A}":"confetti-ball","\u{1F38B}":"tanabata-tree","\u{1F38D}":"pine-decoration","\u{1F38E}":"japanese-dolls","\u{1F38F}":"carp-streamer","\u{1F390}":"wind-chime","\u{1F391}":"moon-viewing-ceremony","\u{1F9E7}":"red-envelope","\u{1F380}":"ribbon","\u{1F381}":"wrapped-gift","\u{1F397}":"reminder-ribbon","\u{1F39F}":"admission-tickets","\u{1F3AB}":"ticket","\u{1F396}":"military-medal","\u{1F3C6}":"trophy","\u{1F3C5}":"sports-medal","\u{1F947}":"1st-place-medal","\u{1F948}":"2nd-place-medal","\u{1F949}":"3rd-place-medal","\u26BD":"soccer-ball","\u26BE":"baseball","\u{1F94E}":"softball","\u{1F3C0}":"basketball","\u{1F3D0}":"volleyball","\u{1F3C8}":"american-football","\u{1F3C9}":"rugby-football","\u{1F3BE}":"tennis","\u{1F94F}":"flying-disc","\u{1F3B3}":"bowling","\u{1F3CF}":"cricket-game","\u{1F3D1}":"field-hockey","\u{1F3D2}":"ice-hockey","\u{1F94D}":"lacrosse","\u{1F3D3}":"ping-pong","\u{1F3F8}":"badminton","\u{1F94A}":"boxing-glove","\u{1F94B}":"martial-arts-uniform","\u{1F945}":"goal-net","\u26F3":"flag-in-hole","\u26F8":"ice-skate","\u{1F3A3}":"fishing-pole","\u{1F93F}":"diving-mask","\u{1F3BD}":"running-shirt","\u{1F3BF}":"skis","\u{1F6F7}":"sled","\u{1F94C}":"curling-stone","\u{1F3AF}":"bullseye","\u{1FA80}":"yo-yo","\u{1FA81}":"kite","\u{1F52B}":"water-pistol","\u{1F3B1}":"pool-8-ball","\u{1F52E}":"crystal-ball","\u{1FA84}":"magic-wand","\u{1F3AE}":"video-game","\u{1F579}":"joystick","\u{1F3B0}":"slot-machine","\u{1F3B2}":"game-die","\u{1F9E9}":"puzzle-piece","\u{1F9F8}":"teddy-bear","\u{1FA85}":"pi\xF1ata","\u{1FAA9}":"mirror-ball","\u{1FA86}":"nesting-dolls","\u2660":"spade-suit","\u2665":"heart-suit","\u2666":"diamond-suit","\u2663":"club-suit","\u265F":"chess-pawn","\u{1F0CF}":"joker","\u{1F004}":"mahjong-red-dragon","\u{1F3B4}":"flower-playing-cards","\u{1F3AD}":"performing-arts","\u{1F5BC}":"framed-picture","\u{1F3A8}":"artist-palette","\u{1F9F5}":"thread","\u{1FAA1}":"sewing-needle","\u{1F9F6}":"yarn","\u{1FAA2}":"knot","\u{1F453}":"glasses","\u{1F576}":"sunglasses","\u{1F97D}":"goggles","\u{1F97C}":"lab-coat","\u{1F9BA}":"safety-vest","\u{1F454}":"necktie","\u{1F455}":"t-shirt","\u{1F456}":"jeans","\u{1F9E3}":"scarf","\u{1F9E4}":"gloves","\u{1F9E5}":"coat","\u{1F9E6}":"socks","\u{1F457}":"dress","\u{1F458}":"kimono","\u{1F97B}":"sari","\u{1FA71}":"one-piece-swimsuit","\u{1FA72}":"briefs","\u{1FA73}":"shorts","\u{1F459}":"bikini","\u{1F45A}":"woman-s-clothes","\u{1FAAD}":"\u229B-folding-hand-fan","\u{1F45B}":"purse","\u{1F45C}":"handbag","\u{1F45D}":"clutch-bag","\u{1F6CD}":"shopping-bags","\u{1F392}":"backpack","\u{1FA74}":"thong-sandal","\u{1F45E}":"man-s-shoe","\u{1F45F}":"running-shoe","\u{1F97E}":"hiking-boot","\u{1F97F}":"flat-shoe","\u{1F460}":"high-heeled-shoe","\u{1F461}":"woman-s-sandal","\u{1FA70}":"ballet-shoes","\u{1F462}":"woman-s-boot","\u{1FAAE}":"\u229B-hair-pick","\u{1F451}":"crown","\u{1F452}":"woman-s-hat","\u{1F3A9}":"top-hat","\u{1F393}":"graduation-cap","\u{1F9E2}":"billed-cap","\u{1FA96}":"military-helmet","\u26D1":"rescue-worker-s-helmet","\u{1F4FF}":"prayer-beads","\u{1F484}":"lipstick","\u{1F48D}":"ring","\u{1F48E}":"gem-stone","\u{1F507}":"muted-speaker","\u{1F508}":"speaker-low-volume","\u{1F509}":"speaker-medium-volume","\u{1F50A}":"speaker-high-volume","\u{1F4E2}":"loudspeaker","\u{1F4E3}":"megaphone","\u{1F4EF}":"postal-horn","\u{1F514}":"bell","\u{1F515}":"bell-with-slash","\u{1F3BC}":"musical-score","\u{1F3B5}":"musical-note","\u{1F3B6}":"musical-notes","\u{1F399}":"studio-microphone","\u{1F39A}":"level-slider","\u{1F39B}":"control-knobs","\u{1F3A4}":"microphone","\u{1F3A7}":"headphone","\u{1F4FB}":"radio","\u{1F3B7}":"saxophone","\u{1FA97}":"accordion","\u{1F3B8}":"guitar","\u{1F3B9}":"musical-keyboard","\u{1F3BA}":"trumpet","\u{1F3BB}":"violin","\u{1FA95}":"banjo","\u{1F941}":"drum","\u{1FA98}":"long-drum","\u{1FA87}":"maracas","\u{1FA88}":"flute","\u{1F4F1}":"mobile-phone","\u{1F4F2}":"mobile-phone-with-arrow","\u260E":"telephone","\u{1F4DE}":"telephone-receiver","\u{1F4DF}":"pager","\u{1F4E0}":"fax-machine","\u{1F50B}":"battery","\u{1FAAB}":"low-battery","\u{1F50C}":"electric-plug","\u{1F4BB}":"laptop","\u{1F5A5}":"desktop-computer","\u{1F5A8}":"printer","\u2328":"keyboard","\u{1F5B1}":"computer-mouse","\u{1F5B2}":"trackball","\u{1F4BD}":"computer-disk","\u{1F4BE}":"floppy-disk","\u{1F4BF}":"optical-disk","\u{1F4C0}":"dvd","\u{1F9EE}":"abacus","\u{1F3A5}":"movie-camera","\u{1F39E}":"film-frames","\u{1F4FD}":"film-projector","\u{1F3AC}":"clapper-board","\u{1F4FA}":"television","\u{1F4F7}":"camera","\u{1F4F8}":"camera-with-flash","\u{1F4F9}":"video-camera","\u{1F4FC}":"videocassette","\u{1F50D}":"magnifying-glass-tilted-left","\u{1F50E}":"magnifying-glass-tilted-right","\u{1F56F}":"candle","\u{1F4A1}":"light-bulb","\u{1F526}":"flashlight","\u{1F3EE}":"red-paper-lantern","\u{1FA94}":"diya-lamp","\u{1F4D4}":"notebook-with-decorative-cover","\u{1F4D5}":"closed-book","\u{1F4D6}":"open-book","\u{1F4D7}":"green-book","\u{1F4D8}":"blue-book","\u{1F4D9}":"orange-book","\u{1F4DA}":"books","\u{1F4D3}":"notebook","\u{1F4D2}":"ledger","\u{1F4C3}":"page-with-curl","\u{1F4DC}":"scroll","\u{1F4C4}":"page-facing-up","\u{1F4F0}":"newspaper","\u{1F5DE}":"rolled-up-newspaper","\u{1F4D1}":"bookmark-tabs","\u{1F516}":"bookmark","\u{1F3F7}":"label","\u{1F4B0}":"money-bag","\u{1FA99}":"coin","\u{1F4B4}":"yen-banknote","\u{1F4B5}":"dollar-banknote","\u{1F4B6}":"euro-banknote","\u{1F4B7}":"pound-banknote","\u{1F4B8}":"money-with-wings","\u{1F4B3}":"credit-card","\u{1F9FE}":"receipt","\u{1F4B9}":"chart-increasing-with-yen","\u2709":"envelope","\u{1F4E7}":"e-mail","\u{1F4E8}":"incoming-envelope","\u{1F4E9}":"envelope-with-arrow","\u{1F4E4}":"outbox-tray","\u{1F4E5}":"inbox-tray","\u{1F4E6}":"package","\u{1F4EB}":"closed-mailbox-with-raised-flag","\u{1F4EA}":"closed-mailbox-with-lowered-flag","\u{1F4EC}":"open-mailbox-with-raised-flag","\u{1F4ED}":"open-mailbox-with-lowered-flag","\u{1F4EE}":"postbox","\u{1F5F3}":"ballot-box-with-ballot","\u270F":"pencil","\u2712":"black-nib","\u{1F58B}":"fountain-pen","\u{1F58A}":"pen","\u{1F58C}":"paintbrush","\u{1F58D}":"crayon","\u{1F4DD}":"memo","\u{1F4BC}":"briefcase","\u{1F4C1}":"file-folder","\u{1F4C2}":"open-file-folder","\u{1F5C2}":"card-index-dividers","\u{1F4C5}":"calendar","\u{1F4C6}":"tear-off-calendar","\u{1F5D2}":"spiral-notepad","\u{1F5D3}":"spiral-calendar","\u{1F4C7}":"card-index","\u{1F4C8}":"chart-increasing","\u{1F4C9}":"chart-decreasing","\u{1F4CA}":"bar-chart","\u{1F4CB}":"clipboard","\u{1F4CC}":"pushpin","\u{1F4CD}":"round-pushpin","\u{1F4CE}":"paperclip","\u{1F587}":"linked-paperclips","\u{1F4CF}":"straight-ruler","\u{1F4D0}":"triangular-ruler","\u2702":"scissors","\u{1F5C3}":"card-file-box","\u{1F5C4}":"file-cabinet","\u{1F5D1}":"wastebasket","\u{1F512}":"locked","\u{1F513}":"unlocked","\u{1F50F}":"locked-with-pen","\u{1F510}":"locked-with-key","\u{1F511}":"key","\u{1F5DD}":"old-key","\u{1F528}":"hammer","\u{1FA93}":"axe","\u26CF":"pick","\u2692":"hammer-and-pick","\u{1F6E0}":"hammer-and-wrench","\u{1F5E1}":"dagger","\u2694":"crossed-swords","\u{1F4A3}":"bomb","\u{1FA83}":"boomerang","\u{1F3F9}":"bow-and-arrow","\u{1F6E1}":"shield","\u{1FA9A}":"carpentry-saw","\u{1F527}":"wrench","\u{1FA9B}":"screwdriver","\u{1F529}":"nut-and-bolt","\u2699":"gear","\u{1F5DC}":"clamp","\u2696":"balance-scale","\u{1F9AF}":"white-cane","\u{1F517}":"link","\u26D3":"chains","\u{1FA9D}":"hook","\u{1F9F0}":"toolbox","\u{1F9F2}":"magnet","\u{1FA9C}":"ladder","\u2697":"alembic","\u{1F9EA}":"test-tube","\u{1F9EB}":"petri-dish","\u{1F9EC}":"dna","\u{1F52C}":"microscope","\u{1F52D}":"telescope","\u{1F4E1}":"satellite-antenna","\u{1F489}":"syringe","\u{1FA78}":"drop-of-blood","\u{1F48A}":"pill","\u{1FA79}":"adhesive-bandage","\u{1FA7C}":"crutch","\u{1FA7A}":"stethoscope","\u{1FA7B}":"x-ray","\u{1F6AA}":"door","\u{1F6D7}":"elevator","\u{1FA9E}":"mirror","\u{1FA9F}":"window","\u{1F6CF}":"bed","\u{1F6CB}":"couch-and-lamp","\u{1FA91}":"chair","\u{1F6BD}":"toilet","\u{1FAA0}":"plunger","\u{1F6BF}":"shower","\u{1F6C1}":"bathtub","\u{1FAA4}":"mouse-trap","\u{1FA92}":"razor","\u{1F9F4}":"lotion-bottle","\u{1F9F7}":"safety-pin","\u{1F9F9}":"broom","\u{1F9FA}":"basket","\u{1F9FB}":"roll-of-paper","\u{1FAA3}":"bucket","\u{1F9FC}":"soap","\u{1FAE7}":"bubbles","\u{1FAA5}":"toothbrush","\u{1F9FD}":"sponge","\u{1F9EF}":"fire-extinguisher","\u{1F6D2}":"shopping-cart","\u{1F6AC}":"cigarette","\u26B0":"coffin","\u{1FAA6}":"headstone","\u26B1":"funeral-urn","\u{1F9FF}":"nazar-amulet","\u{1FAAC}":"hamsa","\u{1F5FF}":"moai","\u{1FAA7}":"placard","\u{1FAAA}":"identification-card","\u{1F3E7}":"atm-sign","\u{1F6AE}":"litter-in-bin-sign","\u{1F6B0}":"potable-water","\u267F":"wheelchair-symbol","\u{1F6B9}":"men-s-room","\u{1F6BA}":"women-s-room","\u{1F6BB}":"restroom","\u{1F6BC}":"baby-symbol","\u{1F6BE}":"water-closet","\u{1F6C2}":"passport-control","\u{1F6C3}":"customs","\u{1F6C4}":"baggage-claim","\u{1F6C5}":"left-luggage","\u26A0":"warning","\u{1F6B8}":"children-crossing","\u26D4":"no-entry","\u{1F6AB}":"prohibited","\u{1F6B3}":"no-bicycles","\u{1F6AD}":"no-smoking","\u{1F6AF}":"no-littering","\u{1F6B1}":"non-potable-water","\u{1F6B7}":"no-pedestrians","\u{1F4F5}":"no-mobile-phones","\u{1F51E}":"no-one-under-eighteen","\u2622":"radioactive","\u2623":"biohazard","\u2B06":"up-arrow","\u2197":"up-right-arrow","\u27A1":"right-arrow","\u2198":"down-right-arrow","\u2B07":"down-arrow","\u2199":"down-left-arrow","\u2B05":"left-arrow","\u2196":"up-left-arrow","\u2195":"up-down-arrow","\u2194":"left-right-arrow","\u21A9":"right-arrow-curving-left","\u21AA":"left-arrow-curving-right","\u2934":"right-arrow-curving-up","\u2935":"right-arrow-curving-down","\u{1F503}":"clockwise-vertical-arrows","\u{1F504}":"counterclockwise-arrows-button","\u{1F519}":"back-arrow","\u{1F51A}":"end-arrow","\u{1F51B}":"on!-arrow","\u{1F51C}":"soon-arrow","\u{1F51D}":"top-arrow","\u{1F6D0}":"place-of-worship","\u269B":"atom-symbol","\u{1F549}":"om","\u2721":"star-of-david","\u2638":"wheel-of-dharma","\u262F":"yin-yang","\u271D":"latin-cross","\u2626":"orthodox-cross","\u262A":"star-and-crescent","\u262E":"peace-symbol","\u{1F54E}":"menorah","\u{1F52F}":"dotted-six-pointed-star","\u{1FAAF}":"\u229B-khanda","\u2648":"aries","\u2649":"taurus","\u264A":"gemini","\u264B":"cancer","\u264C":"leo","\u264D":"virgo","\u264E":"libra","\u264F":"scorpio","\u2650":"sagittarius","\u2651":"capricorn","\u2652":"aquarius","\u2653":"pisces","\u26CE":"ophiuchus","\u{1F500}":"shuffle-tracks-button","\u{1F501}":"repeat-button","\u{1F502}":"repeat-single-button","\u25B6":"play-button","\u23E9":"fast-forward-button","\u23ED":"next-track-button","\u23EF":"play-or-pause-button","\u25C0":"reverse-button","\u23EA":"fast-reverse-button","\u23EE":"last-track-button","\u{1F53C}":"upwards-button","\u23EB":"fast-up-button","\u{1F53D}":"downwards-button","\u23EC":"fast-down-button","\u23F8":"pause-button","\u23F9":"stop-button","\u23FA":"record-button","\u23CF":"eject-button","\u{1F3A6}":"cinema","\u{1F505}":"dim-button","\u{1F506}":"bright-button","\u{1F4F6}":"antenna-bars","\u{1F6DC}":"\u229B-wireless","\u{1F4F3}":"vibration-mode","\u{1F4F4}":"mobile-phone-off","\u2640":"female-sign","\u2642":"male-sign","\u26A7":"transgender-symbol","\u2716":"multiply","\u2795":"plus","\u2796":"minus","\u2797":"divide","\u{1F7F0}":"heavy-equals-sign","\u267E":"infinity","\u203C":"double-exclamation-mark","\u2049":"exclamation-question-mark","\u2753":"red-question-mark","\u2754":"white-question-mark","\u2755":"white-exclamation-mark","\u2757":"red-exclamation-mark","\u3030":"wavy-dash","\u{1F4B1}":"currency-exchange","\u{1F4B2}":"heavy-dollar-sign","\u2695":"medical-symbol","\u267B":"recycling-symbol","\u269C":"fleur-de-lis","\u{1F531}":"trident-emblem","\u{1F4DB}":"name-badge","\u{1F530}":"japanese-symbol-for-beginner","\u2B55":"hollow-red-circle","\u2705":"check-mark-button","\u2611":"check-box-with-check","\u2714":"check-mark","\u274C":"cross-mark","\u274E":"cross-mark-button","\u27B0":"curly-loop","\u27BF":"double-curly-loop","\u303D":"part-alternation-mark","\u2733":"eight-spoked-asterisk","\u2734":"eight-pointed-star","\u2747":"sparkle","\xA9":"copyright","\xAE":"registered","\u2122":"trade-mark","#\uFE0F\u20E3":"keycap-#","*\uFE0F\u20E3":"keycap-*","0\uFE0F\u20E3":"keycap-0","1\uFE0F\u20E3":"keycap-1","2\uFE0F\u20E3":"keycap-2","3\uFE0F\u20E3":"keycap-3","4\uFE0F\u20E3":"keycap-4","5\uFE0F\u20E3":"keycap-5","6\uFE0F\u20E3":"keycap-6","7\uFE0F\u20E3":"keycap-7","8\uFE0F\u20E3":"keycap-8","9\uFE0F\u20E3":"keycap-9","\u{1F51F}":"keycap-10","\u{1F520}":"input-latin-uppercase","\u{1F521}":"input-latin-lowercase","\u{1F522}":"input-numbers","\u{1F523}":"input-symbols","\u{1F524}":"input-latin-letters","\u{1F170}":"a-button-(blood-type)","\u{1F18E}":"ab-button-(blood-type)","\u{1F171}":"b-button-(blood-type)","\u{1F191}":"cl-button","\u{1F192}":"cool-button","\u{1F193}":"free-button",\u2139:"information","\u{1F194}":"id-button","\u24C2":"circled-m","\u{1F195}":"new-button","\u{1F196}":"ng-button","\u{1F17E}":"o-button-(blood-type)","\u{1F197}":"ok-button","\u{1F17F}":"p-button","\u{1F198}":"sos-button","\u{1F199}":"up!-button","\u{1F19A}":"vs-button","\u{1F201}":"japanese-here-button","\u{1F202}":"japanese-service-charge-button","\u{1F237}":"japanese-monthly-amount-button","\u{1F236}":"japanese-not-free-of-charge-button","\u{1F22F}":"japanese-reserved-button","\u{1F250}":"japanese-bargain-button","\u{1F239}":"japanese-discount-button","\u{1F21A}":"japanese-free-of-charge-button","\u{1F232}":"japanese-prohibited-button","\u{1F251}":"japanese-acceptable-button","\u{1F238}":"japanese-application-button","\u{1F234}":"japanese-passing-grade-button","\u{1F233}":"japanese-vacancy-button","\u3297":"japanese-congratulations-button","\u3299":"japanese-secret-button","\u{1F23A}":"japanese-open-for-business-button","\u{1F235}":"japanese-no-vacancy-button","\u{1F534}":"red-circle","\u{1F7E0}":"orange-circle","\u{1F7E1}":"yellow-circle","\u{1F7E2}":"green-circle","\u{1F535}":"blue-circle","\u{1F7E3}":"purple-circle","\u{1F7E4}":"brown-circle","\u26AB":"black-circle","\u26AA":"white-circle","\u{1F7E5}":"red-square","\u{1F7E7}":"orange-square","\u{1F7E8}":"yellow-square","\u{1F7E9}":"green-square","\u{1F7E6}":"blue-square","\u{1F7EA}":"purple-square","\u{1F7EB}":"brown-square","\u2B1B":"black-large-square","\u2B1C":"white-large-square","\u25FC":"black-medium-square","\u25FB":"white-medium-square","\u25FE":"black-medium-small-square","\u25FD":"white-medium-small-square","\u25AA":"black-small-square","\u25AB":"white-small-square","\u{1F536}":"large-orange-diamond","\u{1F537}":"large-blue-diamond","\u{1F538}":"small-orange-diamond","\u{1F539}":"small-blue-diamond","\u{1F53A}":"red-triangle-pointed-up","\u{1F53B}":"red-triangle-pointed-down","\u{1F4A0}":"diamond-with-a-dot","\u{1F518}":"radio-button","\u{1F533}":"white-square-button","\u{1F532}":"black-square-button","\u{1F3C1}":"chequered-flag","\u{1F6A9}":"triangular-flag","\u{1F38C}":"crossed-flags","\u{1F3F4}":"black-flag","\u{1F3F3}":"white-flag","\u{1F3F3}\uFE0F\u200D\u{1F308}":"rainbow-flag","\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F":"transgender-flag","\u{1F3F4}\u200D\u2620\uFE0F":"pirate-flag","\u{1F1E6}\u{1F1E8}":"flag-ascension-island","\u{1F1E6}\u{1F1E9}":"flag-andorra","\u{1F1E6}\u{1F1EA}":"flag-united-arab-emirates","\u{1F1E6}\u{1F1EB}":"flag-afghanistan","\u{1F1E6}\u{1F1EC}":"flag-antigua-and-barbuda","\u{1F1E6}\u{1F1EE}":"flag-anguilla","\u{1F1E6}\u{1F1F1}":"flag-albania","\u{1F1E6}\u{1F1F2}":"flag-armenia","\u{1F1E6}\u{1F1F4}":"flag-angola","\u{1F1E6}\u{1F1F6}":"flag-antarctica","\u{1F1E6}\u{1F1F7}":"flag-argentina","\u{1F1E6}\u{1F1F8}":"flag-american-samoa","\u{1F1E6}\u{1F1F9}":"flag-austria","\u{1F1E6}\u{1F1FA}":"flag-australia","\u{1F1E6}\u{1F1FC}":"flag-aruba","\u{1F1E6}\u{1F1FD}":"flag-\xE5land-islands","\u{1F1E6}\u{1F1FF}":"flag-azerbaijan","\u{1F1E7}\u{1F1E6}":"flag-bosnia-and-herzegovina","\u{1F1E7}\u{1F1E7}":"flag-barbados","\u{1F1E7}\u{1F1E9}":"flag-bangladesh","\u{1F1E7}\u{1F1EA}":"flag-belgium","\u{1F1E7}\u{1F1EB}":"flag-burkina-faso","\u{1F1E7}\u{1F1EC}":"flag-bulgaria","\u{1F1E7}\u{1F1ED}":"flag-bahrain","\u{1F1E7}\u{1F1EE}":"flag-burundi","\u{1F1E7}\u{1F1EF}":"flag-benin","\u{1F1E7}\u{1F1F1}":"flag-st-barthelemy","\u{1F1E7}\u{1F1F2}":"flag-bermuda","\u{1F1E7}\u{1F1F3}":"flag-brunei","\u{1F1E7}\u{1F1F4}":"flag-bolivia","\u{1F1E7}\u{1F1F6}":"flag-caribbean-netherlands","\u{1F1E7}\u{1F1F7}":"flag-brazil","\u{1F1E7}\u{1F1F8}":"flag-bahamas","\u{1F1E7}\u{1F1F9}":"flag-bhutan","\u{1F1E7}\u{1F1FB}":"flag-bouvet-island","\u{1F1E7}\u{1F1FC}":"flag-botswana","\u{1F1E7}\u{1F1FE}":"flag-belarus","\u{1F1E7}\u{1F1FF}":"flag-belize","\u{1F1E8}\u{1F1E6}":"flag-canada","\u{1F1E8}\u{1F1E8}":"flag-cocos-(keeling)-islands","\u{1F1E8}\u{1F1E9}":"flag-congo---kinshasa","\u{1F1E8}\u{1F1EB}":"flag-central-african-republic","\u{1F1E8}\u{1F1EC}":"flag-congo---brazzaville","\u{1F1E8}\u{1F1ED}":"flag-switzerland","\u{1F1E8}\u{1F1EE}":"flag-c\xF4te-d-ivoire","\u{1F1E8}\u{1F1F0}":"flag-cook-islands","\u{1F1E8}\u{1F1F1}":"flag-chile","\u{1F1E8}\u{1F1F2}":"flag-cameroon","\u{1F1E8}\u{1F1F3}":"flag-china","\u{1F1E8}\u{1F1F4}":"flag-colombia","\u{1F1E8}\u{1F1F5}":"flag-clipperton-island","\u{1F1E8}\u{1F1F7}":"flag-costa-rica","\u{1F1E8}\u{1F1FA}":"flag-cuba","\u{1F1E8}\u{1F1FB}":"flag-cape-verde","\u{1F1E8}\u{1F1FC}":"flag-cura\xE7ao","\u{1F1E8}\u{1F1FD}":"flag-christmas-island","\u{1F1E8}\u{1F1FE}":"flag-cyprus","\u{1F1E8}\u{1F1FF}":"flag-czechia","\u{1F1E9}\u{1F1EA}":"flag-germany","\u{1F1E9}\u{1F1EC}":"flag-diego-garcia","\u{1F1E9}\u{1F1EF}":"flag-djibouti","\u{1F1E9}\u{1F1F0}":"flag-denmark","\u{1F1E9}\u{1F1F2}":"flag-dominica","\u{1F1E9}\u{1F1F4}":"flag-dominican-republic","\u{1F1E9}\u{1F1FF}":"flag-algeria","\u{1F1EA}\u{1F1E6}":"flag-ceuta-and-melilla","\u{1F1EA}\u{1F1E8}":"flag-ecuador","\u{1F1EA}\u{1F1EA}":"flag-estonia","\u{1F1EA}\u{1F1EC}":"flag-egypt","\u{1F1EA}\u{1F1ED}":"flag-western-sahara","\u{1F1EA}\u{1F1F7}":"flag-eritrea","\u{1F1EA}\u{1F1F8}":"flag-spain","\u{1F1EA}\u{1F1F9}":"flag-ethiopia","\u{1F1EA}\u{1F1FA}":"flag-european-union","\u{1F1EB}\u{1F1EE}":"flag-finland","\u{1F1EB}\u{1F1EF}":"flag-fiji","\u{1F1EB}\u{1F1F0}":"flag-falkland-islands","\u{1F1EB}\u{1F1F2}":"flag-micronesia","\u{1F1EB}\u{1F1F4}":"flag-faroe-islands","\u{1F1EB}\u{1F1F7}":"flag-france","\u{1F1EC}\u{1F1E6}":"flag-gabon","\u{1F1EC}\u{1F1E7}":"flag-united-kingdom","\u{1F1EC}\u{1F1E9}":"flag-grenada","\u{1F1EC}\u{1F1EA}":"flag-georgia","\u{1F1EC}\u{1F1EB}":"flag-french-guiana","\u{1F1EC}\u{1F1EC}":"flag-guernsey","\u{1F1EC}\u{1F1ED}":"flag-ghana","\u{1F1EC}\u{1F1EE}":"flag-gibraltar","\u{1F1EC}\u{1F1F1}":"flag-greenland","\u{1F1EC}\u{1F1F2}":"flag-gambia","\u{1F1EC}\u{1F1F3}":"flag-guinea","\u{1F1EC}\u{1F1F5}":"flag-guadeloupe","\u{1F1EC}\u{1F1F6}":"flag-equatorial-guinea","\u{1F1EC}\u{1F1F7}":"flag-greece","\u{1F1EC}\u{1F1F8}":"flag-south-georgia-and-south-sandwich-islands","\u{1F1EC}\u{1F1F9}":"flag-guatemala","\u{1F1EC}\u{1F1FA}":"flag-guam","\u{1F1EC}\u{1F1FC}":"flag-guinea-bissau","\u{1F1EC}\u{1F1FE}":"flag-guyana","\u{1F1ED}\u{1F1F0}":"flag-hong-kong-sar-china","\u{1F1ED}\u{1F1F2}":"flag-heard-and-mcdonald-islands","\u{1F1ED}\u{1F1F3}":"flag-honduras","\u{1F1ED}\u{1F1F7}":"flag-croatia","\u{1F1ED}\u{1F1F9}":"flag-haiti","\u{1F1ED}\u{1F1FA}":"flag-hungary","\u{1F1EE}\u{1F1E8}":"flag-canary-islands","\u{1F1EE}\u{1F1E9}":"flag-indonesia","\u{1F1EE}\u{1F1EA}":"flag-ireland","\u{1F1EE}\u{1F1F1}":"flag-israel","\u{1F1EE}\u{1F1F2}":"flag-isle-of-man","\u{1F1EE}\u{1F1F3}":"flag-india","\u{1F1EE}\u{1F1F4}":"flag-british-indian-ocean-territory","\u{1F1EE}\u{1F1F6}":"flag-iraq","\u{1F1EE}\u{1F1F7}":"flag-iran","\u{1F1EE}\u{1F1F8}":"flag-iceland","\u{1F1EE}\u{1F1F9}":"flag-italy","\u{1F1EF}\u{1F1EA}":"flag-jersey","\u{1F1EF}\u{1F1F2}":"flag-jamaica","\u{1F1EF}\u{1F1F4}":"flag-jordan","\u{1F1EF}\u{1F1F5}":"flag-japan","\u{1F1F0}\u{1F1EA}":"flag-kenya","\u{1F1F0}\u{1F1EC}":"flag-kyrgyzstan","\u{1F1F0}\u{1F1ED}":"flag-cambodia","\u{1F1F0}\u{1F1EE}":"flag-kiribati","\u{1F1F0}\u{1F1F2}":"flag-comoros","\u{1F1F0}\u{1F1F3}":"flag-st-kitts-and-nevis","\u{1F1F0}\u{1F1F5}":"flag-north-korea","\u{1F1F0}\u{1F1F7}":"flag-south-korea","\u{1F1F0}\u{1F1FC}":"flag-kuwait","\u{1F1F0}\u{1F1FE}":"flag-cayman-islands","\u{1F1F0}\u{1F1FF}":"flag-kazakhstan","\u{1F1F1}\u{1F1E6}":"flag-laos","\u{1F1F1}\u{1F1E7}":"flag-lebanon","\u{1F1F1}\u{1F1E8}":"flag-st-lucia","\u{1F1F1}\u{1F1EE}":"flag-liechtenstein","\u{1F1F1}\u{1F1F0}":"flag-sri-lanka","\u{1F1F1}\u{1F1F7}":"flag-liberia","\u{1F1F1}\u{1F1F8}":"flag-lesotho","\u{1F1F1}\u{1F1F9}":"flag-lithuania","\u{1F1F1}\u{1F1FA}":"flag-luxembourg","\u{1F1F1}\u{1F1FB}":"flag-latvia","\u{1F1F1}\u{1F1FE}":"flag-libya","\u{1F1F2}\u{1F1E6}":"flag-morocco","\u{1F1F2}\u{1F1E8}":"flag-monaco","\u{1F1F2}\u{1F1E9}":"flag-moldova","\u{1F1F2}\u{1F1EA}":"flag-montenegro","\u{1F1F2}\u{1F1EB}":"flag-st-martin","\u{1F1F2}\u{1F1EC}":"flag-madagascar","\u{1F1F2}\u{1F1ED}":"flag-marshall-islands","\u{1F1F2}\u{1F1F0}":"flag-north-macedonia","\u{1F1F2}\u{1F1F1}":"flag-mali","\u{1F1F2}\u{1F1F2}":"flag-myanmar-(burma)","\u{1F1F2}\u{1F1F3}":"flag-mongolia","\u{1F1F2}\u{1F1F4}":"flag-macao-sar-china","\u{1F1F2}\u{1F1F5}":"flag-northern-mariana-islands","\u{1F1F2}\u{1F1F6}":"flag-martinique","\u{1F1F2}\u{1F1F7}":"flag-mauritania","\u{1F1F2}\u{1F1F8}":"flag-montserrat","\u{1F1F2}\u{1F1F9}":"flag-malta","\u{1F1F2}\u{1F1FA}":"flag-mauritius","\u{1F1F2}\u{1F1FB}":"flag-maldives","\u{1F1F2}\u{1F1FC}":"flag-malawi","\u{1F1F2}\u{1F1FD}":"flag-mexico","\u{1F1F2}\u{1F1FE}":"flag-malaysia","\u{1F1F2}\u{1F1FF}":"flag-mozambique","\u{1F1F3}\u{1F1E6}":"flag-namibia","\u{1F1F3}\u{1F1E8}":"flag-new-caledonia","\u{1F1F3}\u{1F1EA}":"flag-niger","\u{1F1F3}\u{1F1EB}":"flag-norfolk-island","\u{1F1F3}\u{1F1EC}":"flag-nigeria","\u{1F1F3}\u{1F1EE}":"flag-nicaragua","\u{1F1F3}\u{1F1F1}":"flag-netherlands","\u{1F1F3}\u{1F1F4}":"flag-norway","\u{1F1F3}\u{1F1F5}":"flag-nepal","\u{1F1F3}\u{1F1F7}":"flag-nauru","\u{1F1F3}\u{1F1FA}":"flag-niue","\u{1F1F3}\u{1F1FF}":"flag-new-zealand","\u{1F1F4}\u{1F1F2}":"flag-oman","\u{1F1F5}\u{1F1E6}":"flag-panama","\u{1F1F5}\u{1F1EA}":"flag-peru","\u{1F1F5}\u{1F1EB}":"flag-french-polynesia","\u{1F1F5}\u{1F1EC}":"flag-papua-new-guinea","\u{1F1F5}\u{1F1ED}":"flag-philippines","\u{1F1F5}\u{1F1F0}":"flag-pakistan","\u{1F1F5}\u{1F1F1}":"flag-poland","\u{1F1F5}\u{1F1F2}":"flag-st-pierre-and-miquelon","\u{1F1F5}\u{1F1F3}":"flag-pitcairn-islands","\u{1F1F5}\u{1F1F7}":"flag-puerto-rico","\u{1F1F5}\u{1F1F8}":"flag-palestinian-territories","\u{1F1F5}\u{1F1F9}":"flag-portugal","\u{1F1F5}\u{1F1FC}":"flag-palau","\u{1F1F5}\u{1F1FE}":"flag-paraguay","\u{1F1F6}\u{1F1E6}":"flag-qatar","\u{1F1F7}\u{1F1EA}":"flag-reunion","\u{1F1F7}\u{1F1F4}":"flag-romania","\u{1F1F7}\u{1F1F8}":"flag-serbia","\u{1F1F7}\u{1F1FA}":"flag-russia","\u{1F1F7}\u{1F1FC}":"flag-rwanda","\u{1F1F8}\u{1F1E6}":"flag-saudi-arabia","\u{1F1F8}\u{1F1E7}":"flag-solomon-islands","\u{1F1F8}\u{1F1E8}":"flag-seychelles","\u{1F1F8}\u{1F1E9}":"flag-sudan","\u{1F1F8}\u{1F1EA}":"flag-sweden","\u{1F1F8}\u{1F1EC}":"flag-singapore","\u{1F1F8}\u{1F1ED}":"flag-st-helena","\u{1F1F8}\u{1F1EE}":"flag-slovenia","\u{1F1F8}\u{1F1EF}":"flag-svalbard-and-jan-mayen","\u{1F1F8}\u{1F1F0}":"flag-slovakia","\u{1F1F8}\u{1F1F1}":"flag-sierra-leone","\u{1F1F8}\u{1F1F2}":"flag-san-marino","\u{1F1F8}\u{1F1F3}":"flag-senegal","\u{1F1F8}\u{1F1F4}":"flag-somalia","\u{1F1F8}\u{1F1F7}":"flag-suriname","\u{1F1F8}\u{1F1F8}":"flag-south-sudan","\u{1F1F8}\u{1F1F9}":"flag-s\xE3o-tome-and-pr\xEDncipe","\u{1F1F8}\u{1F1FB}":"flag-el-salvador","\u{1F1F8}\u{1F1FD}":"flag-sint-maarten","\u{1F1F8}\u{1F1FE}":"flag-syria","\u{1F1F8}\u{1F1FF}":"flag-eswatini","\u{1F1F9}\u{1F1E6}":"flag-tristan-da-cunha","\u{1F1F9}\u{1F1E8}":"flag-turks-and-caicos-islands","\u{1F1F9}\u{1F1E9}":"flag-chad","\u{1F1F9}\u{1F1EB}":"flag-french-southern-territories","\u{1F1F9}\u{1F1EC}":"flag-togo","\u{1F1F9}\u{1F1ED}":"flag-thailand","\u{1F1F9}\u{1F1EF}":"flag-tajikistan","\u{1F1F9}\u{1F1F0}":"flag-tokelau","\u{1F1F9}\u{1F1F1}":"flag-timor-leste","\u{1F1F9}\u{1F1F2}":"flag-turkmenistan","\u{1F1F9}\u{1F1F3}":"flag-tunisia","\u{1F1F9}\u{1F1F4}":"flag-tonga","\u{1F1F9}\u{1F1F7}":"flag-turkey","\u{1F1F9}\u{1F1F9}":"flag-trinidad-and-tobago","\u{1F1F9}\u{1F1FB}":"flag-tuvalu","\u{1F1F9}\u{1F1FC}":"flag-taiwan","\u{1F1F9}\u{1F1FF}":"flag-tanzania","\u{1F1FA}\u{1F1E6}":"flag-ukraine","\u{1F1FA}\u{1F1EC}":"flag-uganda","\u{1F1FA}\u{1F1F2}":"flag-us-outlying-islands","\u{1F1FA}\u{1F1F3}":"flag-united-nations","\u{1F1FA}\u{1F1F8}":"flag-united-states","\u{1F1FA}\u{1F1FE}":"flag-uruguay","\u{1F1FA}\u{1F1FF}":"flag-uzbekistan","\u{1F1FB}\u{1F1E6}":"flag-vatican-city","\u{1F1FB}\u{1F1E8}":"flag-st-vincent-and-grenadines","\u{1F1FB}\u{1F1EA}":"flag-venezuela","\u{1F1FB}\u{1F1EC}":"flag-british-virgin-islands","\u{1F1FB}\u{1F1EE}":"flag-us-virgin-islands","\u{1F1FB}\u{1F1F3}":"flag-vietnam","\u{1F1FB}\u{1F1FA}":"flag-vanuatu","\u{1F1FC}\u{1F1EB}":"flag-wallis-and-futuna","\u{1F1FC}\u{1F1F8}":"flag-samoa","\u{1F1FD}\u{1F1F0}":"flag-kosovo","\u{1F1FE}\u{1F1EA}":"flag-yemen","\u{1F1FE}\u{1F1F9}":"flag-mayotte","\u{1F1FF}\u{1F1E6}":"flag-south-africa","\u{1F1FF}\u{1F1F2}":"flag-zambia","\u{1F1FF}\u{1F1FC}":"flag-zimbabwe","\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}":"flag-england","\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}":"flag-scotland","\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}":"flag-wales"},yR=Object.keys(Tw),kR=`
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

// Please pull this list from, and only from https://publicsuffix.org/list/public_suffix_list.dat,
// rather than any other VCS sites. Pulling from any other URL is not guaranteed to be supported.

// Instructions on pulling and using this list can be found at https://publicsuffix.org/list/.

// ===BEGIN ICANN DOMAINS===

// ac : http://nic.ac/rules.htm
ac
com.ac
edu.ac
gov.ac
net.ac
mil.ac
org.ac

// ad : https://en.wikipedia.org/wiki/.ad
ad
nom.ad

// ae : https://tdra.gov.ae/en/aeda/ae-policies
ae
co.ae
net.ae
org.ae
sch.ae
ac.ae
gov.ae
mil.ae

// aero : see https://www.information.aero/index.php?id=66
aero
accident-investigation.aero
accident-prevention.aero
aerobatic.aero
aeroclub.aero
aerodrome.aero
agents.aero
aircraft.aero
airline.aero
airport.aero
air-surveillance.aero
airtraffic.aero
air-traffic-control.aero
ambulance.aero
amusement.aero
association.aero
author.aero
ballooning.aero
broker.aero
caa.aero
cargo.aero
catering.aero
certification.aero
championship.aero
charter.aero
civilaviation.aero
club.aero
conference.aero
consultant.aero
consulting.aero
control.aero
council.aero
crew.aero
design.aero
dgca.aero
educator.aero
emergency.aero
engine.aero
engineer.aero
entertainment.aero
equipment.aero
exchange.aero
express.aero
federation.aero
flight.aero
fuel.aero
gliding.aero
government.aero
groundhandling.aero
group.aero
hanggliding.aero
homebuilt.aero
insurance.aero
journal.aero
journalist.aero
leasing.aero
logistics.aero
magazine.aero
maintenance.aero
media.aero
microlight.aero
modelling.aero
navigation.aero
parachuting.aero
paragliding.aero
passenger-association.aero
pilot.aero
press.aero
production.aero
recreation.aero
repbody.aero
res.aero
research.aero
rotorcraft.aero
safety.aero
scientist.aero
services.aero
show.aero
skydiving.aero
software.aero
student.aero
trader.aero
trading.aero
trainer.aero
union.aero
workinggroup.aero
works.aero

// af : http://www.nic.af/help.jsp
af
gov.af
com.af
org.af
net.af
edu.af

// ag : http://www.nic.ag/prices.htm
ag
com.ag
org.ag
net.ag
co.ag
nom.ag

// ai : http://nic.com.ai/
ai
off.ai
com.ai
net.ai
org.ai

// al : http://www.ert.gov.al/ert_alb/faq_det.html?Id=31
al
com.al
edu.al
gov.al
mil.al
net.al
org.al

// am : https://www.amnic.net/policy/en/Policy_EN.pdf
am
co.am
com.am
commune.am
net.am
org.am

// ao : https://en.wikipedia.org/wiki/.ao
// http://www.dns.ao/REGISTR.DOC
ao
ed.ao
gv.ao
og.ao
co.ao
pb.ao
it.ao

// aq : https://en.wikipedia.org/wiki/.aq
aq

// ar : https://nic.ar/es/nic-argentina/normativa
ar
bet.ar
com.ar
coop.ar
edu.ar
gob.ar
gov.ar
int.ar
mil.ar
musica.ar
mutual.ar
net.ar
org.ar
senasa.ar
tur.ar

// arpa : https://en.wikipedia.org/wiki/.arpa
// Confirmed by registry <iana-questions@icann.org> 2008-06-18
arpa
e164.arpa
in-addr.arpa
ip6.arpa
iris.arpa
uri.arpa
urn.arpa

// as : https://en.wikipedia.org/wiki/.as
as
gov.as

// asia : https://en.wikipedia.org/wiki/.asia
asia

// at : https://en.wikipedia.org/wiki/.at
// Confirmed by registry <it@nic.at> 2008-06-17
at
ac.at
co.at
gv.at
or.at
sth.ac.at

// au : https://en.wikipedia.org/wiki/.au
// http://www.auda.org.au/
au
// 2LDs
com.au
net.au
org.au
edu.au
gov.au
asn.au
id.au
// Historic 2LDs (closed to new registration, but sites still exist)
info.au
conf.au
oz.au
// CGDNs - http://www.cgdn.org.au/
act.au
nsw.au
nt.au
qld.au
sa.au
tas.au
vic.au
wa.au
// 3LDs
act.edu.au
catholic.edu.au
// eq.edu.au - Removed at the request of the Queensland Department of Education
nsw.edu.au
nt.edu.au
qld.edu.au
sa.edu.au
tas.edu.au
vic.edu.au
wa.edu.au
// act.gov.au  Bug 984824 - Removed at request of Greg Tankard
// nsw.gov.au  Bug 547985 - Removed at request of <Shae.Donelan@services.nsw.gov.au>
// nt.gov.au  Bug 940478 - Removed at request of Greg Connors <Greg.Connors@nt.gov.au>
qld.gov.au
sa.gov.au
tas.gov.au
vic.gov.au
wa.gov.au
// 4LDs
// education.tas.edu.au - Removed at the request of the Department of Education Tasmania
schools.nsw.edu.au

// aw : https://en.wikipedia.org/wiki/.aw
aw
com.aw

// ax : https://en.wikipedia.org/wiki/.ax
ax

// az : https://en.wikipedia.org/wiki/.az
az
com.az
net.az
int.az
gov.az
org.az
edu.az
info.az
pp.az
mil.az
name.az
pro.az
biz.az

// ba : http://nic.ba/users_data/files/pravilnik_o_registraciji.pdf
ba
com.ba
edu.ba
gov.ba
mil.ba
net.ba
org.ba

// bb : https://en.wikipedia.org/wiki/.bb
bb
biz.bb
co.bb
com.bb
edu.bb
gov.bb
info.bb
net.bb
org.bb
store.bb
tv.bb

// bd : https://en.wikipedia.org/wiki/.bd
*.bd

// be : https://en.wikipedia.org/wiki/.be
// Confirmed by registry <tech@dns.be> 2008-06-08
be
ac.be

// bf : https://en.wikipedia.org/wiki/.bf
bf
gov.bf

// bg : https://en.wikipedia.org/wiki/.bg
// https://www.register.bg/user/static/rules/en/index.html
bg
a.bg
b.bg
c.bg
d.bg
e.bg
f.bg
g.bg
h.bg
i.bg
j.bg
k.bg
l.bg
m.bg
n.bg
o.bg
p.bg
q.bg
r.bg
s.bg
t.bg
u.bg
v.bg
w.bg
x.bg
y.bg
z.bg
0.bg
1.bg
2.bg
3.bg
4.bg
5.bg
6.bg
7.bg
8.bg
9.bg

// bh : https://en.wikipedia.org/wiki/.bh
bh
com.bh
edu.bh
net.bh
org.bh
gov.bh

// bi : https://en.wikipedia.org/wiki/.bi
// http://whois.nic.bi/
bi
co.bi
com.bi
edu.bi
or.bi
org.bi

// biz : https://en.wikipedia.org/wiki/.biz
biz

// bj : https://nic.bj/bj-suffixes.txt
// submitted by registry <contact@nic.bj>
bj
africa.bj
agro.bj
architectes.bj
assur.bj
avocats.bj
co.bj
com.bj
eco.bj
econo.bj
edu.bj
info.bj
loisirs.bj
money.bj
net.bj
org.bj
ote.bj
resto.bj
restaurant.bj
tourism.bj
univ.bj

// bm : http://www.bermudanic.bm/dnr-text.txt
bm
com.bm
edu.bm
gov.bm
net.bm
org.bm

// bn : http://www.bnnic.bn/faqs
bn
com.bn
edu.bn
gov.bn
net.bn
org.bn

// bo : https://nic.bo/delegacion2015.php#h-1.10
bo
com.bo
edu.bo
gob.bo
int.bo
org.bo
net.bo
mil.bo
tv.bo
web.bo
// Social Domains
academia.bo
agro.bo
arte.bo
blog.bo
bolivia.bo
ciencia.bo
cooperativa.bo
democracia.bo
deporte.bo
ecologia.bo
economia.bo
empresa.bo
indigena.bo
industria.bo
info.bo
medicina.bo
movimiento.bo
musica.bo
natural.bo
nombre.bo
noticias.bo
patria.bo
politica.bo
profesional.bo
plurinacional.bo
pueblo.bo
revista.bo
salud.bo
tecnologia.bo
tksat.bo
transporte.bo
wiki.bo

// br : http://registro.br/dominio/categoria.html
// Submitted by registry <fneves@registro.br>
br
9guacu.br
abc.br
adm.br
adv.br
agr.br
aju.br
am.br
anani.br
aparecida.br
app.br
arq.br
art.br
ato.br
b.br
barueri.br
belem.br
bhz.br
bib.br
bio.br
blog.br
bmd.br
boavista.br
bsb.br
campinagrande.br
campinas.br
caxias.br
cim.br
cng.br
cnt.br
com.br
contagem.br
coop.br
coz.br
cri.br
cuiaba.br
curitiba.br
def.br
des.br
det.br
dev.br
ecn.br
eco.br
edu.br
emp.br
enf.br
eng.br
esp.br
etc.br
eti.br
far.br
feira.br
flog.br
floripa.br
fm.br
fnd.br
fortal.br
fot.br
foz.br
fst.br
g12.br
geo.br
ggf.br
goiania.br
gov.br
// gov.br 26 states + df https://en.wikipedia.org/wiki/States_of_Brazil
ac.gov.br
al.gov.br
am.gov.br
ap.gov.br
ba.gov.br
ce.gov.br
df.gov.br
es.gov.br
go.gov.br
ma.gov.br
mg.gov.br
ms.gov.br
mt.gov.br
pa.gov.br
pb.gov.br
pe.gov.br
pi.gov.br
pr.gov.br
rj.gov.br
rn.gov.br
ro.gov.br
rr.gov.br
rs.gov.br
sc.gov.br
se.gov.br
sp.gov.br
to.gov.br
gru.br
imb.br
ind.br
inf.br
jab.br
jampa.br
jdf.br
joinville.br
jor.br
jus.br
leg.br
lel.br
log.br
londrina.br
macapa.br
maceio.br
manaus.br
maringa.br
mat.br
med.br
mil.br
morena.br
mp.br
mus.br
natal.br
net.br
niteroi.br
*.nom.br
not.br
ntr.br
odo.br
ong.br
org.br
osasco.br
palmas.br
poa.br
ppg.br
pro.br
psc.br
psi.br
pvh.br
qsl.br
radio.br
rec.br
recife.br
rep.br
ribeirao.br
rio.br
riobranco.br
riopreto.br
salvador.br
sampa.br
santamaria.br
santoandre.br
saobernardo.br
saogonca.br
seg.br
sjc.br
slg.br
slz.br
sorocaba.br
srv.br
taxi.br
tc.br
tec.br
teo.br
the.br
tmp.br
trd.br
tur.br
tv.br
udi.br
vet.br
vix.br
vlog.br
wiki.br
zlg.br

// bs : http://www.nic.bs/rules.html
bs
com.bs
net.bs
org.bs
edu.bs
gov.bs

// bt : https://en.wikipedia.org/wiki/.bt
bt
com.bt
edu.bt
gov.bt
net.bt
org.bt

// bv : No registrations at this time.
// Submitted by registry <jarle@uninett.no>
bv

// bw : https://en.wikipedia.org/wiki/.bw
// http://www.gobin.info/domainname/bw.doc
// list of other 2nd level tlds ?
bw
co.bw
org.bw

// by : https://en.wikipedia.org/wiki/.by
// http://tld.by/rules_2006_en.html
// list of other 2nd level tlds ?
by
gov.by
mil.by
// Official information does not indicate that com.by is a reserved
// second-level domain, but it's being used as one (see www.google.com.by and
// www.yahoo.com.by, for example), so we list it here for safety's sake.
com.by

// http://hoster.by/
of.by

// bz : https://en.wikipedia.org/wiki/.bz
// http://www.belizenic.bz/
bz
com.bz
net.bz
org.bz
edu.bz
gov.bz

// ca : https://en.wikipedia.org/wiki/.ca
ca
// ca geographical names
ab.ca
bc.ca
mb.ca
nb.ca
nf.ca
nl.ca
ns.ca
nt.ca
nu.ca
on.ca
pe.ca
qc.ca
sk.ca
yk.ca
// gc.ca: https://en.wikipedia.org/wiki/.gc.ca
// see also: http://registry.gc.ca/en/SubdomainFAQ
gc.ca

// cat : https://en.wikipedia.org/wiki/.cat
cat

// cc : https://en.wikipedia.org/wiki/.cc
cc

// cd : https://en.wikipedia.org/wiki/.cd
// see also: https://www.nic.cd/domain/insertDomain_2.jsp?act=1
cd
gov.cd

// cf : https://en.wikipedia.org/wiki/.cf
cf

// cg : https://en.wikipedia.org/wiki/.cg
cg

// ch : https://en.wikipedia.org/wiki/.ch
ch

// ci : https://en.wikipedia.org/wiki/.ci
// http://www.nic.ci/index.php?page=charte
ci
org.ci
or.ci
com.ci
co.ci
edu.ci
ed.ci
ac.ci
net.ci
go.ci
asso.ci
a\xE9roport.ci
int.ci
presse.ci
md.ci
gouv.ci

// ck : https://en.wikipedia.org/wiki/.ck
*.ck
!www.ck

// cl : https://www.nic.cl
// Confirmed by .CL registry <hsalgado@nic.cl>
cl
co.cl
gob.cl
gov.cl
mil.cl

// cm : https://en.wikipedia.org/wiki/.cm plus bug 981927
cm
co.cm
com.cm
gov.cm
net.cm

// cn : https://en.wikipedia.org/wiki/.cn
// Submitted by registry <tanyaling@cnnic.cn>
cn
ac.cn
com.cn
edu.cn
gov.cn
net.cn
org.cn
mil.cn
\u516C\u53F8.cn
\u7F51\u7EDC.cn
\u7DB2\u7D61.cn
// cn geographic names
ah.cn
bj.cn
cq.cn
fj.cn
gd.cn
gs.cn
gz.cn
gx.cn
ha.cn
hb.cn
he.cn
hi.cn
hl.cn
hn.cn
jl.cn
js.cn
jx.cn
ln.cn
nm.cn
nx.cn
qh.cn
sc.cn
sd.cn
sh.cn
sn.cn
sx.cn
tj.cn
xj.cn
xz.cn
yn.cn
zj.cn
hk.cn
mo.cn
tw.cn

// co : https://en.wikipedia.org/wiki/.co
// Submitted by registry <tecnico@uniandes.edu.co>
co
arts.co
com.co
edu.co
firm.co
gov.co
info.co
int.co
mil.co
net.co
nom.co
org.co
rec.co
web.co

// com : https://en.wikipedia.org/wiki/.com
com

// coop : https://en.wikipedia.org/wiki/.coop
coop

// cr : http://www.nic.cr/niccr_publico/showRegistroDominiosScreen.do
cr
ac.cr
co.cr
ed.cr
fi.cr
go.cr
or.cr
sa.cr

// cu : https://en.wikipedia.org/wiki/.cu
cu
com.cu
edu.cu
org.cu
net.cu
gov.cu
inf.cu

// cv : https://en.wikipedia.org/wiki/.cv
// cv : http://www.dns.cv/tldcv_portal/do?com=DS;5446457100;111;+PAGE(4000018)+K-CAT-CODIGO(RDOM)+RCNT(100); <- registration rules
cv
com.cv
edu.cv
int.cv
nome.cv
org.cv

// cw : http://www.una.cw/cw_registry/
// Confirmed by registry <registry@una.net> 2013-03-26
cw
com.cw
edu.cw
net.cw
org.cw

// cx : https://en.wikipedia.org/wiki/.cx
// list of other 2nd level tlds ?
cx
gov.cx

// cy : http://www.nic.cy/
// Submitted by registry Panayiotou Fotia <cydns@ucy.ac.cy>
// namespace policies URL https://www.nic.cy/portal//sites/default/files/symfonia_gia_eggrafi.pdf
cy
ac.cy
biz.cy
com.cy
ekloges.cy
gov.cy
ltd.cy
mil.cy
net.cy
org.cy
press.cy
pro.cy
tm.cy

// cz : https://en.wikipedia.org/wiki/.cz
cz

// de : https://en.wikipedia.org/wiki/.de
// Confirmed by registry <ops@denic.de> (with technical
// reservations) 2008-07-01
de

// dj : https://en.wikipedia.org/wiki/.dj
dj

// dk : https://en.wikipedia.org/wiki/.dk
// Confirmed by registry <robert@dk-hostmaster.dk> 2008-06-17
dk

// dm : https://en.wikipedia.org/wiki/.dm
dm
com.dm
net.dm
org.dm
edu.dm
gov.dm

// do : https://en.wikipedia.org/wiki/.do
do
art.do
com.do
edu.do
gob.do
gov.do
mil.do
net.do
org.do
sld.do
web.do

// dz : http://www.nic.dz/images/pdf_nic/charte.pdf
dz
art.dz
asso.dz
com.dz
edu.dz
gov.dz
org.dz
net.dz
pol.dz
soc.dz
tm.dz

// ec : http://www.nic.ec/reg/paso1.asp
// Submitted by registry <vabboud@nic.ec>
ec
com.ec
info.ec
net.ec
fin.ec
k12.ec
med.ec
pro.ec
org.ec
edu.ec
gov.ec
gob.ec
mil.ec

// edu : https://en.wikipedia.org/wiki/.edu
edu

// ee : http://www.eenet.ee/EENet/dom_reeglid.html#lisa_B
ee
edu.ee
gov.ee
riik.ee
lib.ee
med.ee
com.ee
pri.ee
aip.ee
org.ee
fie.ee

// eg : https://en.wikipedia.org/wiki/.eg
eg
com.eg
edu.eg
eun.eg
gov.eg
mil.eg
name.eg
net.eg
org.eg
sci.eg

// er : https://en.wikipedia.org/wiki/.er
*.er

// es : https://www.nic.es/site_ingles/ingles/dominios/index.html
es
com.es
nom.es
org.es
gob.es
edu.es

// et : https://en.wikipedia.org/wiki/.et
et
com.et
gov.et
org.et
edu.et
biz.et
name.et
info.et
net.et

// eu : https://en.wikipedia.org/wiki/.eu
eu

// fi : https://en.wikipedia.org/wiki/.fi
fi
// aland.fi : https://en.wikipedia.org/wiki/.ax
// This domain is being phased out in favor of .ax. As there are still many
// domains under aland.fi, we still keep it on the list until aland.fi is
// completely removed.
// TODO: Check for updates (expected to be phased out around Q1/2009)
aland.fi

// fj : http://domains.fj/
// Submitted by registry <garth.miller@cocca.org.nz> 2020-02-11
fj
ac.fj
biz.fj
com.fj
gov.fj
info.fj
mil.fj
name.fj
net.fj
org.fj
pro.fj

// fk : https://en.wikipedia.org/wiki/.fk
*.fk

// fm : https://en.wikipedia.org/wiki/.fm
com.fm
edu.fm
net.fm
org.fm
fm

// fo : https://en.wikipedia.org/wiki/.fo
fo

// fr : https://www.afnic.fr/ https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
fr
asso.fr
com.fr
gouv.fr
nom.fr
prd.fr
tm.fr
// Other SLDs now selfmanaged out of AFNIC range. Former "domaines sectoriels", still registration suffixes
avoues.fr
cci.fr
greta.fr
huissier-justice.fr

// ga : https://en.wikipedia.org/wiki/.ga
ga

// gb : This registry is effectively dormant
// Submitted by registry <Damien.Shaw@ja.net>
gb

// gd : https://en.wikipedia.org/wiki/.gd
edu.gd
gov.gd
gd

// ge : http://www.nic.net.ge/policy_en.pdf
ge
com.ge
edu.ge
gov.ge
org.ge
mil.ge
net.ge
pvt.ge

// gf : https://en.wikipedia.org/wiki/.gf
gf

// gg : http://www.channelisles.net/register-domains/
// Confirmed by registry <nigel@channelisles.net> 2013-11-28
gg
co.gg
net.gg
org.gg

// gh : https://en.wikipedia.org/wiki/.gh
// see also: http://www.nic.gh/reg_now.php
// Although domains directly at second level are not possible at the moment,
// they have been possible for some time and may come back.
gh
com.gh
edu.gh
gov.gh
org.gh
mil.gh

// gi : http://www.nic.gi/rules.html
gi
com.gi
ltd.gi
gov.gi
mod.gi
edu.gi
org.gi

// gl : https://en.wikipedia.org/wiki/.gl
// http://nic.gl
gl
co.gl
com.gl
edu.gl
net.gl
org.gl

// gm : http://www.nic.gm/htmlpages%5Cgm-policy.htm
gm

// gn : http://psg.com/dns/gn/gn.txt
// Submitted by registry <randy@psg.com>
gn
ac.gn
com.gn
edu.gn
gov.gn
org.gn
net.gn

// gov : https://en.wikipedia.org/wiki/.gov
gov

// gp : http://www.nic.gp/index.php?lang=en
gp
com.gp
net.gp
mobi.gp
edu.gp
org.gp
asso.gp

// gq : https://en.wikipedia.org/wiki/.gq
gq

// gr : https://grweb.ics.forth.gr/english/1617-B-2005.html
// Submitted by registry <segred@ics.forth.gr>
gr
com.gr
edu.gr
net.gr
org.gr
gov.gr

// gs : https://en.wikipedia.org/wiki/.gs
gs

// gt : https://www.gt/sitio/registration_policy.php?lang=en
gt
com.gt
edu.gt
gob.gt
ind.gt
mil.gt
net.gt
org.gt

// gu : http://gadao.gov.gu/register.html
// University of Guam : https://www.uog.edu
// Submitted by uognoc@triton.uog.edu
gu
com.gu
edu.gu
gov.gu
guam.gu
info.gu
net.gu
org.gu
web.gu

// gw : https://en.wikipedia.org/wiki/.gw
// gw : https://nic.gw/regras/
gw

// gy : https://en.wikipedia.org/wiki/.gy
// http://registry.gy/
gy
co.gy
com.gy
edu.gy
gov.gy
net.gy
org.gy

// hk : https://www.hkirc.hk
// Submitted by registry <hk.tech@hkirc.hk>
hk
com.hk
edu.hk
gov.hk
idv.hk
net.hk
org.hk
\u516C\u53F8.hk
\u6559\u80B2.hk
\u654E\u80B2.hk
\u653F\u5E9C.hk
\u500B\u4EBA.hk
\u4E2A\u4EBA.hk
\u7B87\u4EBA.hk
\u7DB2\u7EDC.hk
\u7F51\u7EDC.hk
\u7EC4\u7E54.hk
\u7DB2\u7D61.hk
\u7F51\u7D61.hk
\u7EC4\u7EC7.hk
\u7D44\u7E54.hk
\u7D44\u7EC7.hk

// hm : https://en.wikipedia.org/wiki/.hm
hm

// hn : http://www.nic.hn/politicas/ps02,,05.html
hn
com.hn
edu.hn
org.hn
net.hn
mil.hn
gob.hn

// hr : http://www.dns.hr/documents/pdf/HRTLD-regulations.pdf
hr
iz.hr
from.hr
name.hr
com.hr

// ht : http://www.nic.ht/info/charte.cfm
ht
com.ht
shop.ht
firm.ht
info.ht
adult.ht
net.ht
pro.ht
org.ht
med.ht
art.ht
coop.ht
pol.ht
asso.ht
edu.ht
rel.ht
gouv.ht
perso.ht

// hu : http://www.domain.hu/domain/English/sld.html
// Confirmed by registry <pasztor@iszt.hu> 2008-06-12
hu
co.hu
info.hu
org.hu
priv.hu
sport.hu
tm.hu
2000.hu
agrar.hu
bolt.hu
casino.hu
city.hu
erotica.hu
erotika.hu
film.hu
forum.hu
games.hu
hotel.hu
ingatlan.hu
jogasz.hu
konyvelo.hu
lakas.hu
media.hu
news.hu
reklam.hu
sex.hu
shop.hu
suli.hu
szex.hu
tozsde.hu
utazas.hu
video.hu

// id : https://pandi.id/en/domain/registration-requirements/
id
ac.id
biz.id
co.id
desa.id
go.id
mil.id
my.id
net.id
or.id
ponpes.id
sch.id
web.id

// ie : https://en.wikipedia.org/wiki/.ie
ie
gov.ie

// il :         http://www.isoc.org.il/domains/
// see also:    https://en.isoc.org.il/il-cctld/registration-rules
// ISOC-IL      (operated by .il Registry)
il
ac.il
co.il
gov.il
idf.il
k12.il
muni.il
net.il
org.il
// xn--4dbrk0ce ("Israel", Hebrew) : IL
\u05D9\u05E9\u05E8\u05D0\u05DC
// xn--4dbgdty6c.xn--4dbrk0ce.
\u05D0\u05E7\u05D3\u05DE\u05D9\u05D4.\u05D9\u05E9\u05E8\u05D0\u05DC
// xn--5dbhl8d.xn--4dbrk0ce.
\u05D9\u05E9\u05D5\u05D1.\u05D9\u05E9\u05E8\u05D0\u05DC
// xn--8dbq2a.xn--4dbrk0ce.
\u05E6\u05D4\u05DC.\u05D9\u05E9\u05E8\u05D0\u05DC
// xn--hebda8b.xn--4dbrk0ce.
\u05DE\u05DE\u05E9\u05DC.\u05D9\u05E9\u05E8\u05D0\u05DC

// im : https://www.nic.im/
// Submitted by registry <info@nic.im>
im
ac.im
co.im
com.im
ltd.co.im
net.im
org.im
plc.co.im
tt.im
tv.im

// in : https://en.wikipedia.org/wiki/.in
// see also: https://registry.in/policies
// Please note, that nic.in is not an official eTLD, but used by most
// government institutions.
in
5g.in
6g.in
ac.in
ai.in
am.in
bihar.in
biz.in
business.in
ca.in
cn.in
co.in
com.in
coop.in
cs.in
delhi.in
dr.in
edu.in
er.in
firm.in
gen.in
gov.in
gujarat.in
ind.in
info.in
int.in
internet.in
io.in
me.in
mil.in
net.in
nic.in
org.in
pg.in
post.in
pro.in
res.in
travel.in
tv.in
uk.in
up.in
us.in

// info : https://en.wikipedia.org/wiki/.info
info

// int : https://en.wikipedia.org/wiki/.int
// Confirmed by registry <iana-questions@icann.org> 2008-06-18
int
eu.int

// io : http://www.nic.io/rules.htm
// list of other 2nd level tlds ?
io
com.io

// iq : http://www.cmc.iq/english/iq/iqregister1.htm
iq
gov.iq
edu.iq
mil.iq
com.iq
org.iq
net.iq

// ir : http://www.nic.ir/Terms_and_Conditions_ir,_Appendix_1_Domain_Rules
// Also see http://www.nic.ir/Internationalized_Domain_Names
// Two <iran>.ir entries added at request of <tech-team@nic.ir>, 2010-04-16
ir
ac.ir
co.ir
gov.ir
id.ir
net.ir
org.ir
sch.ir
// xn--mgba3a4f16a.ir (<iran>.ir, Persian YEH)
\u0627\u06CC\u0631\u0627\u0646.ir
// xn--mgba3a4fra.ir (<iran>.ir, Arabic YEH)
\u0627\u064A\u0631\u0627\u0646.ir

// is : http://www.isnic.is/domain/rules.php
// Confirmed by registry <marius@isgate.is> 2008-12-06
is
net.is
com.is
edu.is
gov.is
org.is
int.is

// it : https://en.wikipedia.org/wiki/.it
it
gov.it
edu.it
// Reserved geo-names (regions and provinces):
// https://www.nic.it/sites/default/files/archivio/docs/Regulation_assignation_v7.1.pdf
// Regions
abr.it
abruzzo.it
aosta-valley.it
aostavalley.it
bas.it
basilicata.it
cal.it
calabria.it
cam.it
campania.it
emilia-romagna.it
emiliaromagna.it
emr.it
friuli-v-giulia.it
friuli-ve-giulia.it
friuli-vegiulia.it
friuli-venezia-giulia.it
friuli-veneziagiulia.it
friuli-vgiulia.it
friuliv-giulia.it
friulive-giulia.it
friulivegiulia.it
friulivenezia-giulia.it
friuliveneziagiulia.it
friulivgiulia.it
fvg.it
laz.it
lazio.it
lig.it
liguria.it
lom.it
lombardia.it
lombardy.it
lucania.it
mar.it
marche.it
mol.it
molise.it
piedmont.it
piemonte.it
pmn.it
pug.it
puglia.it
sar.it
sardegna.it
sardinia.it
sic.it
sicilia.it
sicily.it
taa.it
tos.it
toscana.it
trentin-sud-tirol.it
trentin-s\xFCd-tirol.it
trentin-sudtirol.it
trentin-s\xFCdtirol.it
trentin-sued-tirol.it
trentin-suedtirol.it
trentino-a-adige.it
trentino-aadige.it
trentino-alto-adige.it
trentino-altoadige.it
trentino-s-tirol.it
trentino-stirol.it
trentino-sud-tirol.it
trentino-s\xFCd-tirol.it
trentino-sudtirol.it
trentino-s\xFCdtirol.it
trentino-sued-tirol.it
trentino-suedtirol.it
trentino.it
trentinoa-adige.it
trentinoaadige.it
trentinoalto-adige.it
trentinoaltoadige.it
trentinos-tirol.it
trentinostirol.it
trentinosud-tirol.it
trentinos\xFCd-tirol.it
trentinosudtirol.it
trentinos\xFCdtirol.it
trentinosued-tirol.it
trentinosuedtirol.it
trentinsud-tirol.it
trentins\xFCd-tirol.it
trentinsudtirol.it
trentins\xFCdtirol.it
trentinsued-tirol.it
trentinsuedtirol.it
tuscany.it
umb.it
umbria.it
val-d-aosta.it
val-daosta.it
vald-aosta.it
valdaosta.it
valle-aosta.it
valle-d-aosta.it
valle-daosta.it
valleaosta.it
valled-aosta.it
valledaosta.it
vallee-aoste.it
vall\xE9e-aoste.it
vallee-d-aoste.it
vall\xE9e-d-aoste.it
valleeaoste.it
vall\xE9eaoste.it
valleedaoste.it
vall\xE9edaoste.it
vao.it
vda.it
ven.it
veneto.it
// Provinces
ag.it
agrigento.it
al.it
alessandria.it
alto-adige.it
altoadige.it
an.it
ancona.it
andria-barletta-trani.it
andria-trani-barletta.it
andriabarlettatrani.it
andriatranibarletta.it
ao.it
aosta.it
aoste.it
ap.it
aq.it
aquila.it
ar.it
arezzo.it
ascoli-piceno.it
ascolipiceno.it
asti.it
at.it
av.it
avellino.it
ba.it
balsan-sudtirol.it
balsan-s\xFCdtirol.it
balsan-suedtirol.it
balsan.it
bari.it
barletta-trani-andria.it
barlettatraniandria.it
belluno.it
benevento.it
bergamo.it
bg.it
bi.it
biella.it
bl.it
bn.it
bo.it
bologna.it
bolzano-altoadige.it
bolzano.it
bozen-sudtirol.it
bozen-s\xFCdtirol.it
bozen-suedtirol.it
bozen.it
br.it
brescia.it
brindisi.it
bs.it
bt.it
bulsan-sudtirol.it
bulsan-s\xFCdtirol.it
bulsan-suedtirol.it
bulsan.it
bz.it
ca.it
cagliari.it
caltanissetta.it
campidano-medio.it
campidanomedio.it
campobasso.it
carbonia-iglesias.it
carboniaiglesias.it
carrara-massa.it
carraramassa.it
caserta.it
catania.it
catanzaro.it
cb.it
ce.it
cesena-forli.it
cesena-forl\xEC.it
cesenaforli.it
cesenaforl\xEC.it
ch.it
chieti.it
ci.it
cl.it
cn.it
co.it
como.it
cosenza.it
cr.it
cremona.it
crotone.it
cs.it
ct.it
cuneo.it
cz.it
dell-ogliastra.it
dellogliastra.it
en.it
enna.it
fc.it
fe.it
fermo.it
ferrara.it
fg.it
fi.it
firenze.it
florence.it
fm.it
foggia.it
forli-cesena.it
forl\xEC-cesena.it
forlicesena.it
forl\xECcesena.it
fr.it
frosinone.it
ge.it
genoa.it
genova.it
go.it
gorizia.it
gr.it
grosseto.it
iglesias-carbonia.it
iglesiascarbonia.it
im.it
imperia.it
is.it
isernia.it
kr.it
la-spezia.it
laquila.it
laspezia.it
latina.it
lc.it
le.it
lecce.it
lecco.it
li.it
livorno.it
lo.it
lodi.it
lt.it
lu.it
lucca.it
macerata.it
mantova.it
massa-carrara.it
massacarrara.it
matera.it
mb.it
mc.it
me.it
medio-campidano.it
mediocampidano.it
messina.it
mi.it
milan.it
milano.it
mn.it
mo.it
modena.it
monza-brianza.it
monza-e-della-brianza.it
monza.it
monzabrianza.it
monzaebrianza.it
monzaedellabrianza.it
ms.it
mt.it
na.it
naples.it
napoli.it
no.it
novara.it
nu.it
nuoro.it
og.it
ogliastra.it
olbia-tempio.it
olbiatempio.it
or.it
oristano.it
ot.it
pa.it
padova.it
padua.it
palermo.it
parma.it
pavia.it
pc.it
pd.it
pe.it
perugia.it
pesaro-urbino.it
pesarourbino.it
pescara.it
pg.it
pi.it
piacenza.it
pisa.it
pistoia.it
pn.it
po.it
pordenone.it
potenza.it
pr.it
prato.it
pt.it
pu.it
pv.it
pz.it
ra.it
ragusa.it
ravenna.it
rc.it
re.it
reggio-calabria.it
reggio-emilia.it
reggiocalabria.it
reggioemilia.it
rg.it
ri.it
rieti.it
rimini.it
rm.it
rn.it
ro.it
roma.it
rome.it
rovigo.it
sa.it
salerno.it
sassari.it
savona.it
si.it
siena.it
siracusa.it
so.it
sondrio.it
sp.it
sr.it
ss.it
suedtirol.it
s\xFCdtirol.it
sv.it
ta.it
taranto.it
te.it
tempio-olbia.it
tempioolbia.it
teramo.it
terni.it
tn.it
to.it
torino.it
tp.it
tr.it
trani-andria-barletta.it
trani-barletta-andria.it
traniandriabarletta.it
tranibarlettaandria.it
trapani.it
trento.it
treviso.it
trieste.it
ts.it
turin.it
tv.it
ud.it
udine.it
urbino-pesaro.it
urbinopesaro.it
va.it
varese.it
vb.it
vc.it
ve.it
venezia.it
venice.it
verbania.it
vercelli.it
verona.it
vi.it
vibo-valentia.it
vibovalentia.it
vicenza.it
viterbo.it
vr.it
vs.it
vt.it
vv.it

// je : http://www.channelisles.net/register-domains/
// Confirmed by registry <nigel@channelisles.net> 2013-11-28
je
co.je
net.je
org.je

// jm : http://www.com.jm/register.html
*.jm

// jo : http://www.dns.jo/Registration_policy.aspx
jo
com.jo
org.jo
net.jo
edu.jo
sch.jo
gov.jo
mil.jo
name.jo

// jobs : https://en.wikipedia.org/wiki/.jobs
jobs

// jp : https://en.wikipedia.org/wiki/.jp
// http://jprs.co.jp/en/jpdomain.html
// Submitted by registry <info@jprs.jp>
jp
// jp organizational type names
ac.jp
ad.jp
co.jp
ed.jp
go.jp
gr.jp
lg.jp
ne.jp
or.jp
// jp prefecture type names
aichi.jp
akita.jp
aomori.jp
chiba.jp
ehime.jp
fukui.jp
fukuoka.jp
fukushima.jp
gifu.jp
gunma.jp
hiroshima.jp
hokkaido.jp
hyogo.jp
ibaraki.jp
ishikawa.jp
iwate.jp
kagawa.jp
kagoshima.jp
kanagawa.jp
kochi.jp
kumamoto.jp
kyoto.jp
mie.jp
miyagi.jp
miyazaki.jp
nagano.jp
nagasaki.jp
nara.jp
niigata.jp
oita.jp
okayama.jp
okinawa.jp
osaka.jp
saga.jp
saitama.jp
shiga.jp
shimane.jp
shizuoka.jp
tochigi.jp
tokushima.jp
tokyo.jp
tottori.jp
toyama.jp
wakayama.jp
yamagata.jp
yamaguchi.jp
yamanashi.jp
\u6803\u6728.jp
\u611B\u77E5.jp
\u611B\u5A9B.jp
\u5175\u5EAB.jp
\u718A\u672C.jp
\u8328\u57CE.jp
\u5317\u6D77\u9053.jp
\u5343\u8449.jp
\u548C\u6B4C\u5C71.jp
\u9577\u5D0E.jp
\u9577\u91CE.jp
\u65B0\u6F5F.jp
\u9752\u68EE.jp
\u9759\u5CA1.jp
\u6771\u4EAC.jp
\u77F3\u5DDD.jp
\u57FC\u7389.jp
\u4E09\u91CD.jp
\u4EAC\u90FD.jp
\u4F50\u8CC0.jp
\u5927\u5206.jp
\u5927\u962A.jp
\u5948\u826F.jp
\u5BAE\u57CE.jp
\u5BAE\u5D0E.jp
\u5BCC\u5C71.jp
\u5C71\u53E3.jp
\u5C71\u5F62.jp
\u5C71\u68A8.jp
\u5CA9\u624B.jp
\u5C90\u961C.jp
\u5CA1\u5C71.jp
\u5CF6\u6839.jp
\u5E83\u5CF6.jp
\u5FB3\u5CF6.jp
\u6C96\u7E04.jp
\u6ECB\u8CC0.jp
\u795E\u5948\u5DDD.jp
\u798F\u4E95.jp
\u798F\u5CA1.jp
\u798F\u5CF6.jp
\u79CB\u7530.jp
\u7FA4\u99AC.jp
\u9999\u5DDD.jp
\u9AD8\u77E5.jp
\u9CE5\u53D6.jp
\u9E7F\u5150\u5CF6.jp
// jp geographic type names
// http://jprs.jp/doc/rule/saisoku-1.html
*.kawasaki.jp
*.kitakyushu.jp
*.kobe.jp
*.nagoya.jp
*.sapporo.jp
*.sendai.jp
*.yokohama.jp
!city.kawasaki.jp
!city.kitakyushu.jp
!city.kobe.jp
!city.nagoya.jp
!city.sapporo.jp
!city.sendai.jp
!city.yokohama.jp
// 4th level registration
aisai.aichi.jp
ama.aichi.jp
anjo.aichi.jp
asuke.aichi.jp
chiryu.aichi.jp
chita.aichi.jp
fuso.aichi.jp
gamagori.aichi.jp
handa.aichi.jp
hazu.aichi.jp
hekinan.aichi.jp
higashiura.aichi.jp
ichinomiya.aichi.jp
inazawa.aichi.jp
inuyama.aichi.jp
isshiki.aichi.jp
iwakura.aichi.jp
kanie.aichi.jp
kariya.aichi.jp
kasugai.aichi.jp
kira.aichi.jp
kiyosu.aichi.jp
komaki.aichi.jp
konan.aichi.jp
kota.aichi.jp
mihama.aichi.jp
miyoshi.aichi.jp
nishio.aichi.jp
nisshin.aichi.jp
obu.aichi.jp
oguchi.aichi.jp
oharu.aichi.jp
okazaki.aichi.jp
owariasahi.aichi.jp
seto.aichi.jp
shikatsu.aichi.jp
shinshiro.aichi.jp
shitara.aichi.jp
tahara.aichi.jp
takahama.aichi.jp
tobishima.aichi.jp
toei.aichi.jp
togo.aichi.jp
tokai.aichi.jp
tokoname.aichi.jp
toyoake.aichi.jp
toyohashi.aichi.jp
toyokawa.aichi.jp
toyone.aichi.jp
toyota.aichi.jp
tsushima.aichi.jp
yatomi.aichi.jp
akita.akita.jp
daisen.akita.jp
fujisato.akita.jp
gojome.akita.jp
hachirogata.akita.jp
happou.akita.jp
higashinaruse.akita.jp
honjo.akita.jp
honjyo.akita.jp
ikawa.akita.jp
kamikoani.akita.jp
kamioka.akita.jp
katagami.akita.jp
kazuno.akita.jp
kitaakita.akita.jp
kosaka.akita.jp
kyowa.akita.jp
misato.akita.jp
mitane.akita.jp
moriyoshi.akita.jp
nikaho.akita.jp
noshiro.akita.jp
odate.akita.jp
oga.akita.jp
ogata.akita.jp
semboku.akita.jp
yokote.akita.jp
yurihonjo.akita.jp
aomori.aomori.jp
gonohe.aomori.jp
hachinohe.aomori.jp
hashikami.aomori.jp
hiranai.aomori.jp
hirosaki.aomori.jp
itayanagi.aomori.jp
kuroishi.aomori.jp
misawa.aomori.jp
mutsu.aomori.jp
nakadomari.aomori.jp
noheji.aomori.jp
oirase.aomori.jp
owani.aomori.jp
rokunohe.aomori.jp
sannohe.aomori.jp
shichinohe.aomori.jp
shingo.aomori.jp
takko.aomori.jp
towada.aomori.jp
tsugaru.aomori.jp
tsuruta.aomori.jp
abiko.chiba.jp
asahi.chiba.jp
chonan.chiba.jp
chosei.chiba.jp
choshi.chiba.jp
chuo.chiba.jp
funabashi.chiba.jp
futtsu.chiba.jp
hanamigawa.chiba.jp
ichihara.chiba.jp
ichikawa.chiba.jp
ichinomiya.chiba.jp
inzai.chiba.jp
isumi.chiba.jp
kamagaya.chiba.jp
kamogawa.chiba.jp
kashiwa.chiba.jp
katori.chiba.jp
katsuura.chiba.jp
kimitsu.chiba.jp
kisarazu.chiba.jp
kozaki.chiba.jp
kujukuri.chiba.jp
kyonan.chiba.jp
matsudo.chiba.jp
midori.chiba.jp
mihama.chiba.jp
minamiboso.chiba.jp
mobara.chiba.jp
mutsuzawa.chiba.jp
nagara.chiba.jp
nagareyama.chiba.jp
narashino.chiba.jp
narita.chiba.jp
noda.chiba.jp
oamishirasato.chiba.jp
omigawa.chiba.jp
onjuku.chiba.jp
otaki.chiba.jp
sakae.chiba.jp
sakura.chiba.jp
shimofusa.chiba.jp
shirako.chiba.jp
shiroi.chiba.jp
shisui.chiba.jp
sodegaura.chiba.jp
sosa.chiba.jp
tako.chiba.jp
tateyama.chiba.jp
togane.chiba.jp
tohnosho.chiba.jp
tomisato.chiba.jp
urayasu.chiba.jp
yachimata.chiba.jp
yachiyo.chiba.jp
yokaichiba.chiba.jp
yokoshibahikari.chiba.jp
yotsukaido.chiba.jp
ainan.ehime.jp
honai.ehime.jp
ikata.ehime.jp
imabari.ehime.jp
iyo.ehime.jp
kamijima.ehime.jp
kihoku.ehime.jp
kumakogen.ehime.jp
masaki.ehime.jp
matsuno.ehime.jp
matsuyama.ehime.jp
namikata.ehime.jp
niihama.ehime.jp
ozu.ehime.jp
saijo.ehime.jp
seiyo.ehime.jp
shikokuchuo.ehime.jp
tobe.ehime.jp
toon.ehime.jp
uchiko.ehime.jp
uwajima.ehime.jp
yawatahama.ehime.jp
echizen.fukui.jp
eiheiji.fukui.jp
fukui.fukui.jp
ikeda.fukui.jp
katsuyama.fukui.jp
mihama.fukui.jp
minamiechizen.fukui.jp
obama.fukui.jp
ohi.fukui.jp
ono.fukui.jp
sabae.fukui.jp
sakai.fukui.jp
takahama.fukui.jp
tsuruga.fukui.jp
wakasa.fukui.jp
ashiya.fukuoka.jp
buzen.fukuoka.jp
chikugo.fukuoka.jp
chikuho.fukuoka.jp
chikujo.fukuoka.jp
chikushino.fukuoka.jp
chikuzen.fukuoka.jp
chuo.fukuoka.jp
dazaifu.fukuoka.jp
fukuchi.fukuoka.jp
hakata.fukuoka.jp
higashi.fukuoka.jp
hirokawa.fukuoka.jp
hisayama.fukuoka.jp
iizuka.fukuoka.jp
inatsuki.fukuoka.jp
kaho.fukuoka.jp
kasuga.fukuoka.jp
kasuya.fukuoka.jp
kawara.fukuoka.jp
keisen.fukuoka.jp
koga.fukuoka.jp
kurate.fukuoka.jp
kurogi.fukuoka.jp
kurume.fukuoka.jp
minami.fukuoka.jp
miyako.fukuoka.jp
miyama.fukuoka.jp
miyawaka.fukuoka.jp
mizumaki.fukuoka.jp
munakata.fukuoka.jp
nakagawa.fukuoka.jp
nakama.fukuoka.jp
nishi.fukuoka.jp
nogata.fukuoka.jp
ogori.fukuoka.jp
okagaki.fukuoka.jp
okawa.fukuoka.jp
oki.fukuoka.jp
omuta.fukuoka.jp
onga.fukuoka.jp
onojo.fukuoka.jp
oto.fukuoka.jp
saigawa.fukuoka.jp
sasaguri.fukuoka.jp
shingu.fukuoka.jp
shinyoshitomi.fukuoka.jp
shonai.fukuoka.jp
soeda.fukuoka.jp
sue.fukuoka.jp
tachiarai.fukuoka.jp
tagawa.fukuoka.jp
takata.fukuoka.jp
toho.fukuoka.jp
toyotsu.fukuoka.jp
tsuiki.fukuoka.jp
ukiha.fukuoka.jp
umi.fukuoka.jp
usui.fukuoka.jp
yamada.fukuoka.jp
yame.fukuoka.jp
yanagawa.fukuoka.jp
yukuhashi.fukuoka.jp
aizubange.fukushima.jp
aizumisato.fukushima.jp
aizuwakamatsu.fukushima.jp
asakawa.fukushima.jp
bandai.fukushima.jp
date.fukushima.jp
fukushima.fukushima.jp
furudono.fukushima.jp
futaba.fukushima.jp
hanawa.fukushima.jp
higashi.fukushima.jp
hirata.fukushima.jp
hirono.fukushima.jp
iitate.fukushima.jp
inawashiro.fukushima.jp
ishikawa.fukushima.jp
iwaki.fukushima.jp
izumizaki.fukushima.jp
kagamiishi.fukushima.jp
kaneyama.fukushima.jp
kawamata.fukushima.jp
kitakata.fukushima.jp
kitashiobara.fukushima.jp
koori.fukushima.jp
koriyama.fukushima.jp
kunimi.fukushima.jp
miharu.fukushima.jp
mishima.fukushima.jp
namie.fukushima.jp
nango.fukushima.jp
nishiaizu.fukushima.jp
nishigo.fukushima.jp
okuma.fukushima.jp
omotego.fukushima.jp
ono.fukushima.jp
otama.fukushima.jp
samegawa.fukushima.jp
shimogo.fukushima.jp
shirakawa.fukushima.jp
showa.fukushima.jp
soma.fukushima.jp
sukagawa.fukushima.jp
taishin.fukushima.jp
tamakawa.fukushima.jp
tanagura.fukushima.jp
tenei.fukushima.jp
yabuki.fukushima.jp
yamato.fukushima.jp
yamatsuri.fukushima.jp
yanaizu.fukushima.jp
yugawa.fukushima.jp
anpachi.gifu.jp
ena.gifu.jp
gifu.gifu.jp
ginan.gifu.jp
godo.gifu.jp
gujo.gifu.jp
hashima.gifu.jp
hichiso.gifu.jp
hida.gifu.jp
higashishirakawa.gifu.jp
ibigawa.gifu.jp
ikeda.gifu.jp
kakamigahara.gifu.jp
kani.gifu.jp
kasahara.gifu.jp
kasamatsu.gifu.jp
kawaue.gifu.jp
kitagata.gifu.jp
mino.gifu.jp
minokamo.gifu.jp
mitake.gifu.jp
mizunami.gifu.jp
motosu.gifu.jp
nakatsugawa.gifu.jp
ogaki.gifu.jp
sakahogi.gifu.jp
seki.gifu.jp
sekigahara.gifu.jp
shirakawa.gifu.jp
tajimi.gifu.jp
takayama.gifu.jp
tarui.gifu.jp
toki.gifu.jp
tomika.gifu.jp
wanouchi.gifu.jp
yamagata.gifu.jp
yaotsu.gifu.jp
yoro.gifu.jp
annaka.gunma.jp
chiyoda.gunma.jp
fujioka.gunma.jp
higashiagatsuma.gunma.jp
isesaki.gunma.jp
itakura.gunma.jp
kanna.gunma.jp
kanra.gunma.jp
katashina.gunma.jp
kawaba.gunma.jp
kiryu.gunma.jp
kusatsu.gunma.jp
maebashi.gunma.jp
meiwa.gunma.jp
midori.gunma.jp
minakami.gunma.jp
naganohara.gunma.jp
nakanojo.gunma.jp
nanmoku.gunma.jp
numata.gunma.jp
oizumi.gunma.jp
ora.gunma.jp
ota.gunma.jp
shibukawa.gunma.jp
shimonita.gunma.jp
shinto.gunma.jp
showa.gunma.jp
takasaki.gunma.jp
takayama.gunma.jp
tamamura.gunma.jp
tatebayashi.gunma.jp
tomioka.gunma.jp
tsukiyono.gunma.jp
tsumagoi.gunma.jp
ueno.gunma.jp
yoshioka.gunma.jp
asaminami.hiroshima.jp
daiwa.hiroshima.jp
etajima.hiroshima.jp
fuchu.hiroshima.jp
fukuyama.hiroshima.jp
hatsukaichi.hiroshima.jp
higashihiroshima.hiroshima.jp
hongo.hiroshima.jp
jinsekikogen.hiroshima.jp
kaita.hiroshima.jp
kui.hiroshima.jp
kumano.hiroshima.jp
kure.hiroshima.jp
mihara.hiroshima.jp
miyoshi.hiroshima.jp
naka.hiroshima.jp
onomichi.hiroshima.jp
osakikamijima.hiroshima.jp
otake.hiroshima.jp
saka.hiroshima.jp
sera.hiroshima.jp
seranishi.hiroshima.jp
shinichi.hiroshima.jp
shobara.hiroshima.jp
takehara.hiroshima.jp
abashiri.hokkaido.jp
abira.hokkaido.jp
aibetsu.hokkaido.jp
akabira.hokkaido.jp
akkeshi.hokkaido.jp
asahikawa.hokkaido.jp
ashibetsu.hokkaido.jp
ashoro.hokkaido.jp
assabu.hokkaido.jp
atsuma.hokkaido.jp
bibai.hokkaido.jp
biei.hokkaido.jp
bifuka.hokkaido.jp
bihoro.hokkaido.jp
biratori.hokkaido.jp
chippubetsu.hokkaido.jp
chitose.hokkaido.jp
date.hokkaido.jp
ebetsu.hokkaido.jp
embetsu.hokkaido.jp
eniwa.hokkaido.jp
erimo.hokkaido.jp
esan.hokkaido.jp
esashi.hokkaido.jp
fukagawa.hokkaido.jp
fukushima.hokkaido.jp
furano.hokkaido.jp
furubira.hokkaido.jp
haboro.hokkaido.jp
hakodate.hokkaido.jp
hamatonbetsu.hokkaido.jp
hidaka.hokkaido.jp
higashikagura.hokkaido.jp
higashikawa.hokkaido.jp
hiroo.hokkaido.jp
hokuryu.hokkaido.jp
hokuto.hokkaido.jp
honbetsu.hokkaido.jp
horokanai.hokkaido.jp
horonobe.hokkaido.jp
ikeda.hokkaido.jp
imakane.hokkaido.jp
ishikari.hokkaido.jp
iwamizawa.hokkaido.jp
iwanai.hokkaido.jp
kamifurano.hokkaido.jp
kamikawa.hokkaido.jp
kamishihoro.hokkaido.jp
kamisunagawa.hokkaido.jp
kamoenai.hokkaido.jp
kayabe.hokkaido.jp
kembuchi.hokkaido.jp
kikonai.hokkaido.jp
kimobetsu.hokkaido.jp
kitahiroshima.hokkaido.jp
kitami.hokkaido.jp
kiyosato.hokkaido.jp
koshimizu.hokkaido.jp
kunneppu.hokkaido.jp
kuriyama.hokkaido.jp
kuromatsunai.hokkaido.jp
kushiro.hokkaido.jp
kutchan.hokkaido.jp
kyowa.hokkaido.jp
mashike.hokkaido.jp
matsumae.hokkaido.jp
mikasa.hokkaido.jp
minamifurano.hokkaido.jp
mombetsu.hokkaido.jp
moseushi.hokkaido.jp
mukawa.hokkaido.jp
muroran.hokkaido.jp
naie.hokkaido.jp
nakagawa.hokkaido.jp
nakasatsunai.hokkaido.jp
nakatombetsu.hokkaido.jp
nanae.hokkaido.jp
nanporo.hokkaido.jp
nayoro.hokkaido.jp
nemuro.hokkaido.jp
niikappu.hokkaido.jp
niki.hokkaido.jp
nishiokoppe.hokkaido.jp
noboribetsu.hokkaido.jp
numata.hokkaido.jp
obihiro.hokkaido.jp
obira.hokkaido.jp
oketo.hokkaido.jp
okoppe.hokkaido.jp
otaru.hokkaido.jp
otobe.hokkaido.jp
otofuke.hokkaido.jp
otoineppu.hokkaido.jp
oumu.hokkaido.jp
ozora.hokkaido.jp
pippu.hokkaido.jp
rankoshi.hokkaido.jp
rebun.hokkaido.jp
rikubetsu.hokkaido.jp
rishiri.hokkaido.jp
rishirifuji.hokkaido.jp
saroma.hokkaido.jp
sarufutsu.hokkaido.jp
shakotan.hokkaido.jp
shari.hokkaido.jp
shibecha.hokkaido.jp
shibetsu.hokkaido.jp
shikabe.hokkaido.jp
shikaoi.hokkaido.jp
shimamaki.hokkaido.jp
shimizu.hokkaido.jp
shimokawa.hokkaido.jp
shinshinotsu.hokkaido.jp
shintoku.hokkaido.jp
shiranuka.hokkaido.jp
shiraoi.hokkaido.jp
shiriuchi.hokkaido.jp
sobetsu.hokkaido.jp
sunagawa.hokkaido.jp
taiki.hokkaido.jp
takasu.hokkaido.jp
takikawa.hokkaido.jp
takinoue.hokkaido.jp
teshikaga.hokkaido.jp
tobetsu.hokkaido.jp
tohma.hokkaido.jp
tomakomai.hokkaido.jp
tomari.hokkaido.jp
toya.hokkaido.jp
toyako.hokkaido.jp
toyotomi.hokkaido.jp
toyoura.hokkaido.jp
tsubetsu.hokkaido.jp
tsukigata.hokkaido.jp
urakawa.hokkaido.jp
urausu.hokkaido.jp
uryu.hokkaido.jp
utashinai.hokkaido.jp
wakkanai.hokkaido.jp
wassamu.hokkaido.jp
yakumo.hokkaido.jp
yoichi.hokkaido.jp
aioi.hyogo.jp
akashi.hyogo.jp
ako.hyogo.jp
amagasaki.hyogo.jp
aogaki.hyogo.jp
asago.hyogo.jp
ashiya.hyogo.jp
awaji.hyogo.jp
fukusaki.hyogo.jp
goshiki.hyogo.jp
harima.hyogo.jp
himeji.hyogo.jp
ichikawa.hyogo.jp
inagawa.hyogo.jp
itami.hyogo.jp
kakogawa.hyogo.jp
kamigori.hyogo.jp
kamikawa.hyogo.jp
kasai.hyogo.jp
kasuga.hyogo.jp
kawanishi.hyogo.jp
miki.hyogo.jp
minamiawaji.hyogo.jp
nishinomiya.hyogo.jp
nishiwaki.hyogo.jp
ono.hyogo.jp
sanda.hyogo.jp
sannan.hyogo.jp
sasayama.hyogo.jp
sayo.hyogo.jp
shingu.hyogo.jp
shinonsen.hyogo.jp
shiso.hyogo.jp
sumoto.hyogo.jp
taishi.hyogo.jp
taka.hyogo.jp
takarazuka.hyogo.jp
takasago.hyogo.jp
takino.hyogo.jp
tamba.hyogo.jp
tatsuno.hyogo.jp
toyooka.hyogo.jp
yabu.hyogo.jp
yashiro.hyogo.jp
yoka.hyogo.jp
yokawa.hyogo.jp
ami.ibaraki.jp
asahi.ibaraki.jp
bando.ibaraki.jp
chikusei.ibaraki.jp
daigo.ibaraki.jp
fujishiro.ibaraki.jp
hitachi.ibaraki.jp
hitachinaka.ibaraki.jp
hitachiomiya.ibaraki.jp
hitachiota.ibaraki.jp
ibaraki.ibaraki.jp
ina.ibaraki.jp
inashiki.ibaraki.jp
itako.ibaraki.jp
iwama.ibaraki.jp
joso.ibaraki.jp
kamisu.ibaraki.jp
kasama.ibaraki.jp
kashima.ibaraki.jp
kasumigaura.ibaraki.jp
koga.ibaraki.jp
miho.ibaraki.jp
mito.ibaraki.jp
moriya.ibaraki.jp
naka.ibaraki.jp
namegata.ibaraki.jp
oarai.ibaraki.jp
ogawa.ibaraki.jp
omitama.ibaraki.jp
ryugasaki.ibaraki.jp
sakai.ibaraki.jp
sakuragawa.ibaraki.jp
shimodate.ibaraki.jp
shimotsuma.ibaraki.jp
shirosato.ibaraki.jp
sowa.ibaraki.jp
suifu.ibaraki.jp
takahagi.ibaraki.jp
tamatsukuri.ibaraki.jp
tokai.ibaraki.jp
tomobe.ibaraki.jp
tone.ibaraki.jp
toride.ibaraki.jp
tsuchiura.ibaraki.jp
tsukuba.ibaraki.jp
uchihara.ibaraki.jp
ushiku.ibaraki.jp
yachiyo.ibaraki.jp
yamagata.ibaraki.jp
yawara.ibaraki.jp
yuki.ibaraki.jp
anamizu.ishikawa.jp
hakui.ishikawa.jp
hakusan.ishikawa.jp
kaga.ishikawa.jp
kahoku.ishikawa.jp
kanazawa.ishikawa.jp
kawakita.ishikawa.jp
komatsu.ishikawa.jp
nakanoto.ishikawa.jp
nanao.ishikawa.jp
nomi.ishikawa.jp
nonoichi.ishikawa.jp
noto.ishikawa.jp
shika.ishikawa.jp
suzu.ishikawa.jp
tsubata.ishikawa.jp
tsurugi.ishikawa.jp
uchinada.ishikawa.jp
wajima.ishikawa.jp
fudai.iwate.jp
fujisawa.iwate.jp
hanamaki.iwate.jp
hiraizumi.iwate.jp
hirono.iwate.jp
ichinohe.iwate.jp
ichinoseki.iwate.jp
iwaizumi.iwate.jp
iwate.iwate.jp
joboji.iwate.jp
kamaishi.iwate.jp
kanegasaki.iwate.jp
karumai.iwate.jp
kawai.iwate.jp
kitakami.iwate.jp
kuji.iwate.jp
kunohe.iwate.jp
kuzumaki.iwate.jp
miyako.iwate.jp
mizusawa.iwate.jp
morioka.iwate.jp
ninohe.iwate.jp
noda.iwate.jp
ofunato.iwate.jp
oshu.iwate.jp
otsuchi.iwate.jp
rikuzentakata.iwate.jp
shiwa.iwate.jp
shizukuishi.iwate.jp
sumita.iwate.jp
tanohata.iwate.jp
tono.iwate.jp
yahaba.iwate.jp
yamada.iwate.jp
ayagawa.kagawa.jp
higashikagawa.kagawa.jp
kanonji.kagawa.jp
kotohira.kagawa.jp
manno.kagawa.jp
marugame.kagawa.jp
mitoyo.kagawa.jp
naoshima.kagawa.jp
sanuki.kagawa.jp
tadotsu.kagawa.jp
takamatsu.kagawa.jp
tonosho.kagawa.jp
uchinomi.kagawa.jp
utazu.kagawa.jp
zentsuji.kagawa.jp
akune.kagoshima.jp
amami.kagoshima.jp
hioki.kagoshima.jp
isa.kagoshima.jp
isen.kagoshima.jp
izumi.kagoshima.jp
kagoshima.kagoshima.jp
kanoya.kagoshima.jp
kawanabe.kagoshima.jp
kinko.kagoshima.jp
kouyama.kagoshima.jp
makurazaki.kagoshima.jp
matsumoto.kagoshima.jp
minamitane.kagoshima.jp
nakatane.kagoshima.jp
nishinoomote.kagoshima.jp
satsumasendai.kagoshima.jp
soo.kagoshima.jp
tarumizu.kagoshima.jp
yusui.kagoshima.jp
aikawa.kanagawa.jp
atsugi.kanagawa.jp
ayase.kanagawa.jp
chigasaki.kanagawa.jp
ebina.kanagawa.jp
fujisawa.kanagawa.jp
hadano.kanagawa.jp
hakone.kanagawa.jp
hiratsuka.kanagawa.jp
isehara.kanagawa.jp
kaisei.kanagawa.jp
kamakura.kanagawa.jp
kiyokawa.kanagawa.jp
matsuda.kanagawa.jp
minamiashigara.kanagawa.jp
miura.kanagawa.jp
nakai.kanagawa.jp
ninomiya.kanagawa.jp
odawara.kanagawa.jp
oi.kanagawa.jp
oiso.kanagawa.jp
sagamihara.kanagawa.jp
samukawa.kanagawa.jp
tsukui.kanagawa.jp
yamakita.kanagawa.jp
yamato.kanagawa.jp
yokosuka.kanagawa.jp
yugawara.kanagawa.jp
zama.kanagawa.jp
zushi.kanagawa.jp
aki.kochi.jp
geisei.kochi.jp
hidaka.kochi.jp
higashitsuno.kochi.jp
ino.kochi.jp
kagami.kochi.jp
kami.kochi.jp
kitagawa.kochi.jp
kochi.kochi.jp
mihara.kochi.jp
motoyama.kochi.jp
muroto.kochi.jp
nahari.kochi.jp
nakamura.kochi.jp
nankoku.kochi.jp
nishitosa.kochi.jp
niyodogawa.kochi.jp
ochi.kochi.jp
okawa.kochi.jp
otoyo.kochi.jp
otsuki.kochi.jp
sakawa.kochi.jp
sukumo.kochi.jp
susaki.kochi.jp
tosa.kochi.jp
tosashimizu.kochi.jp
toyo.kochi.jp
tsuno.kochi.jp
umaji.kochi.jp
yasuda.kochi.jp
yusuhara.kochi.jp
amakusa.kumamoto.jp
arao.kumamoto.jp
aso.kumamoto.jp
choyo.kumamoto.jp
gyokuto.kumamoto.jp
kamiamakusa.kumamoto.jp
kikuchi.kumamoto.jp
kumamoto.kumamoto.jp
mashiki.kumamoto.jp
mifune.kumamoto.jp
minamata.kumamoto.jp
minamioguni.kumamoto.jp
nagasu.kumamoto.jp
nishihara.kumamoto.jp
oguni.kumamoto.jp
ozu.kumamoto.jp
sumoto.kumamoto.jp
takamori.kumamoto.jp
uki.kumamoto.jp
uto.kumamoto.jp
yamaga.kumamoto.jp
yamato.kumamoto.jp
yatsushiro.kumamoto.jp
ayabe.kyoto.jp
fukuchiyama.kyoto.jp
higashiyama.kyoto.jp
ide.kyoto.jp
ine.kyoto.jp
joyo.kyoto.jp
kameoka.kyoto.jp
kamo.kyoto.jp
kita.kyoto.jp
kizu.kyoto.jp
kumiyama.kyoto.jp
kyotamba.kyoto.jp
kyotanabe.kyoto.jp
kyotango.kyoto.jp
maizuru.kyoto.jp
minami.kyoto.jp
minamiyamashiro.kyoto.jp
miyazu.kyoto.jp
muko.kyoto.jp
nagaokakyo.kyoto.jp
nakagyo.kyoto.jp
nantan.kyoto.jp
oyamazaki.kyoto.jp
sakyo.kyoto.jp
seika.kyoto.jp
tanabe.kyoto.jp
uji.kyoto.jp
ujitawara.kyoto.jp
wazuka.kyoto.jp
yamashina.kyoto.jp
yawata.kyoto.jp
asahi.mie.jp
inabe.mie.jp
ise.mie.jp
kameyama.mie.jp
kawagoe.mie.jp
kiho.mie.jp
kisosaki.mie.jp
kiwa.mie.jp
komono.mie.jp
kumano.mie.jp
kuwana.mie.jp
matsusaka.mie.jp
meiwa.mie.jp
mihama.mie.jp
minamiise.mie.jp
misugi.mie.jp
miyama.mie.jp
nabari.mie.jp
shima.mie.jp
suzuka.mie.jp
tado.mie.jp
taiki.mie.jp
taki.mie.jp
tamaki.mie.jp
toba.mie.jp
tsu.mie.jp
udono.mie.jp
ureshino.mie.jp
watarai.mie.jp
yokkaichi.mie.jp
furukawa.miyagi.jp
higashimatsushima.miyagi.jp
ishinomaki.miyagi.jp
iwanuma.miyagi.jp
kakuda.miyagi.jp
kami.miyagi.jp
kawasaki.miyagi.jp
marumori.miyagi.jp
matsushima.miyagi.jp
minamisanriku.miyagi.jp
misato.miyagi.jp
murata.miyagi.jp
natori.miyagi.jp
ogawara.miyagi.jp
ohira.miyagi.jp
onagawa.miyagi.jp
osaki.miyagi.jp
rifu.miyagi.jp
semine.miyagi.jp
shibata.miyagi.jp
shichikashuku.miyagi.jp
shikama.miyagi.jp
shiogama.miyagi.jp
shiroishi.miyagi.jp
tagajo.miyagi.jp
taiwa.miyagi.jp
tome.miyagi.jp
tomiya.miyagi.jp
wakuya.miyagi.jp
watari.miyagi.jp
yamamoto.miyagi.jp
zao.miyagi.jp
aya.miyazaki.jp
ebino.miyazaki.jp
gokase.miyazaki.jp
hyuga.miyazaki.jp
kadogawa.miyazaki.jp
kawaminami.miyazaki.jp
kijo.miyazaki.jp
kitagawa.miyazaki.jp
kitakata.miyazaki.jp
kitaura.miyazaki.jp
kobayashi.miyazaki.jp
kunitomi.miyazaki.jp
kushima.miyazaki.jp
mimata.miyazaki.jp
miyakonojo.miyazaki.jp
miyazaki.miyazaki.jp
morotsuka.miyazaki.jp
nichinan.miyazaki.jp
nishimera.miyazaki.jp
nobeoka.miyazaki.jp
saito.miyazaki.jp
shiiba.miyazaki.jp
shintomi.miyazaki.jp
takaharu.miyazaki.jp
takanabe.miyazaki.jp
takazaki.miyazaki.jp
tsuno.miyazaki.jp
achi.nagano.jp
agematsu.nagano.jp
anan.nagano.jp
aoki.nagano.jp
asahi.nagano.jp
azumino.nagano.jp
chikuhoku.nagano.jp
chikuma.nagano.jp
chino.nagano.jp
fujimi.nagano.jp
hakuba.nagano.jp
hara.nagano.jp
hiraya.nagano.jp
iida.nagano.jp
iijima.nagano.jp
iiyama.nagano.jp
iizuna.nagano.jp
ikeda.nagano.jp
ikusaka.nagano.jp
ina.nagano.jp
karuizawa.nagano.jp
kawakami.nagano.jp
kiso.nagano.jp
kisofukushima.nagano.jp
kitaaiki.nagano.jp
komagane.nagano.jp
komoro.nagano.jp
matsukawa.nagano.jp
matsumoto.nagano.jp
miasa.nagano.jp
minamiaiki.nagano.jp
minamimaki.nagano.jp
minamiminowa.nagano.jp
minowa.nagano.jp
miyada.nagano.jp
miyota.nagano.jp
mochizuki.nagano.jp
nagano.nagano.jp
nagawa.nagano.jp
nagiso.nagano.jp
nakagawa.nagano.jp
nakano.nagano.jp
nozawaonsen.nagano.jp
obuse.nagano.jp
ogawa.nagano.jp
okaya.nagano.jp
omachi.nagano.jp
omi.nagano.jp
ookuwa.nagano.jp
ooshika.nagano.jp
otaki.nagano.jp
otari.nagano.jp
sakae.nagano.jp
sakaki.nagano.jp
saku.nagano.jp
sakuho.nagano.jp
shimosuwa.nagano.jp
shinanomachi.nagano.jp
shiojiri.nagano.jp
suwa.nagano.jp
suzaka.nagano.jp
takagi.nagano.jp
takamori.nagano.jp
takayama.nagano.jp
tateshina.nagano.jp
tatsuno.nagano.jp
togakushi.nagano.jp
togura.nagano.jp
tomi.nagano.jp
ueda.nagano.jp
wada.nagano.jp
yamagata.nagano.jp
yamanouchi.nagano.jp
yasaka.nagano.jp
yasuoka.nagano.jp
chijiwa.nagasaki.jp
futsu.nagasaki.jp
goto.nagasaki.jp
hasami.nagasaki.jp
hirado.nagasaki.jp
iki.nagasaki.jp
isahaya.nagasaki.jp
kawatana.nagasaki.jp
kuchinotsu.nagasaki.jp
matsuura.nagasaki.jp
nagasaki.nagasaki.jp
obama.nagasaki.jp
omura.nagasaki.jp
oseto.nagasaki.jp
saikai.nagasaki.jp
sasebo.nagasaki.jp
seihi.nagasaki.jp
shimabara.nagasaki.jp
shinkamigoto.nagasaki.jp
togitsu.nagasaki.jp
tsushima.nagasaki.jp
unzen.nagasaki.jp
ando.nara.jp
gose.nara.jp
heguri.nara.jp
higashiyoshino.nara.jp
ikaruga.nara.jp
ikoma.nara.jp
kamikitayama.nara.jp
kanmaki.nara.jp
kashiba.nara.jp
kashihara.nara.jp
katsuragi.nara.jp
kawai.nara.jp
kawakami.nara.jp
kawanishi.nara.jp
koryo.nara.jp
kurotaki.nara.jp
mitsue.nara.jp
miyake.nara.jp
nara.nara.jp
nosegawa.nara.jp
oji.nara.jp
ouda.nara.jp
oyodo.nara.jp
sakurai.nara.jp
sango.nara.jp
shimoichi.nara.jp
shimokitayama.nara.jp
shinjo.nara.jp
soni.nara.jp
takatori.nara.jp
tawaramoto.nara.jp
tenkawa.nara.jp
tenri.nara.jp
uda.nara.jp
yamatokoriyama.nara.jp
yamatotakada.nara.jp
yamazoe.nara.jp
yoshino.nara.jp
aga.niigata.jp
agano.niigata.jp
gosen.niigata.jp
itoigawa.niigata.jp
izumozaki.niigata.jp
joetsu.niigata.jp
kamo.niigata.jp
kariwa.niigata.jp
kashiwazaki.niigata.jp
minamiuonuma.niigata.jp
mitsuke.niigata.jp
muika.niigata.jp
murakami.niigata.jp
myoko.niigata.jp
nagaoka.niigata.jp
niigata.niigata.jp
ojiya.niigata.jp
omi.niigata.jp
sado.niigata.jp
sanjo.niigata.jp
seiro.niigata.jp
seirou.niigata.jp
sekikawa.niigata.jp
shibata.niigata.jp
tagami.niigata.jp
tainai.niigata.jp
tochio.niigata.jp
tokamachi.niigata.jp
tsubame.niigata.jp
tsunan.niigata.jp
uonuma.niigata.jp
yahiko.niigata.jp
yoita.niigata.jp
yuzawa.niigata.jp
beppu.oita.jp
bungoono.oita.jp
bungotakada.oita.jp
hasama.oita.jp
hiji.oita.jp
himeshima.oita.jp
hita.oita.jp
kamitsue.oita.jp
kokonoe.oita.jp
kuju.oita.jp
kunisaki.oita.jp
kusu.oita.jp
oita.oita.jp
saiki.oita.jp
taketa.oita.jp
tsukumi.oita.jp
usa.oita.jp
usuki.oita.jp
yufu.oita.jp
akaiwa.okayama.jp
asakuchi.okayama.jp
bizen.okayama.jp
hayashima.okayama.jp
ibara.okayama.jp
kagamino.okayama.jp
kasaoka.okayama.jp
kibichuo.okayama.jp
kumenan.okayama.jp
kurashiki.okayama.jp
maniwa.okayama.jp
misaki.okayama.jp
nagi.okayama.jp
niimi.okayama.jp
nishiawakura.okayama.jp
okayama.okayama.jp
satosho.okayama.jp
setouchi.okayama.jp
shinjo.okayama.jp
shoo.okayama.jp
soja.okayama.jp
takahashi.okayama.jp
tamano.okayama.jp
tsuyama.okayama.jp
wake.okayama.jp
yakage.okayama.jp
aguni.okinawa.jp
ginowan.okinawa.jp
ginoza.okinawa.jp
gushikami.okinawa.jp
haebaru.okinawa.jp
higashi.okinawa.jp
hirara.okinawa.jp
iheya.okinawa.jp
ishigaki.okinawa.jp
ishikawa.okinawa.jp
itoman.okinawa.jp
izena.okinawa.jp
kadena.okinawa.jp
kin.okinawa.jp
kitadaito.okinawa.jp
kitanakagusuku.okinawa.jp
kumejima.okinawa.jp
kunigami.okinawa.jp
minamidaito.okinawa.jp
motobu.okinawa.jp
nago.okinawa.jp
naha.okinawa.jp
nakagusuku.okinawa.jp
nakijin.okinawa.jp
nanjo.okinawa.jp
nishihara.okinawa.jp
ogimi.okinawa.jp
okinawa.okinawa.jp
onna.okinawa.jp
shimoji.okinawa.jp
taketomi.okinawa.jp
tarama.okinawa.jp
tokashiki.okinawa.jp
tomigusuku.okinawa.jp
tonaki.okinawa.jp
urasoe.okinawa.jp
uruma.okinawa.jp
yaese.okinawa.jp
yomitan.okinawa.jp
yonabaru.okinawa.jp
yonaguni.okinawa.jp
zamami.okinawa.jp
abeno.osaka.jp
chihayaakasaka.osaka.jp
chuo.osaka.jp
daito.osaka.jp
fujiidera.osaka.jp
habikino.osaka.jp
hannan.osaka.jp
higashiosaka.osaka.jp
higashisumiyoshi.osaka.jp
higashiyodogawa.osaka.jp
hirakata.osaka.jp
ibaraki.osaka.jp
ikeda.osaka.jp
izumi.osaka.jp
izumiotsu.osaka.jp
izumisano.osaka.jp
kadoma.osaka.jp
kaizuka.osaka.jp
kanan.osaka.jp
kashiwara.osaka.jp
katano.osaka.jp
kawachinagano.osaka.jp
kishiwada.osaka.jp
kita.osaka.jp
kumatori.osaka.jp
matsubara.osaka.jp
minato.osaka.jp
minoh.osaka.jp
misaki.osaka.jp
moriguchi.osaka.jp
neyagawa.osaka.jp
nishi.osaka.jp
nose.osaka.jp
osakasayama.osaka.jp
sakai.osaka.jp
sayama.osaka.jp
sennan.osaka.jp
settsu.osaka.jp
shijonawate.osaka.jp
shimamoto.osaka.jp
suita.osaka.jp
tadaoka.osaka.jp
taishi.osaka.jp
tajiri.osaka.jp
takaishi.osaka.jp
takatsuki.osaka.jp
tondabayashi.osaka.jp
toyonaka.osaka.jp
toyono.osaka.jp
yao.osaka.jp
ariake.saga.jp
arita.saga.jp
fukudomi.saga.jp
genkai.saga.jp
hamatama.saga.jp
hizen.saga.jp
imari.saga.jp
kamimine.saga.jp
kanzaki.saga.jp
karatsu.saga.jp
kashima.saga.jp
kitagata.saga.jp
kitahata.saga.jp
kiyama.saga.jp
kouhoku.saga.jp
kyuragi.saga.jp
nishiarita.saga.jp
ogi.saga.jp
omachi.saga.jp
ouchi.saga.jp
saga.saga.jp
shiroishi.saga.jp
taku.saga.jp
tara.saga.jp
tosu.saga.jp
yoshinogari.saga.jp
arakawa.saitama.jp
asaka.saitama.jp
chichibu.saitama.jp
fujimi.saitama.jp
fujimino.saitama.jp
fukaya.saitama.jp
hanno.saitama.jp
hanyu.saitama.jp
hasuda.saitama.jp
hatogaya.saitama.jp
hatoyama.saitama.jp
hidaka.saitama.jp
higashichichibu.saitama.jp
higashimatsuyama.saitama.jp
honjo.saitama.jp
ina.saitama.jp
iruma.saitama.jp
iwatsuki.saitama.jp
kamiizumi.saitama.jp
kamikawa.saitama.jp
kamisato.saitama.jp
kasukabe.saitama.jp
kawagoe.saitama.jp
kawaguchi.saitama.jp
kawajima.saitama.jp
kazo.saitama.jp
kitamoto.saitama.jp
koshigaya.saitama.jp
kounosu.saitama.jp
kuki.saitama.jp
kumagaya.saitama.jp
matsubushi.saitama.jp
minano.saitama.jp
misato.saitama.jp
miyashiro.saitama.jp
miyoshi.saitama.jp
moroyama.saitama.jp
nagatoro.saitama.jp
namegawa.saitama.jp
niiza.saitama.jp
ogano.saitama.jp
ogawa.saitama.jp
ogose.saitama.jp
okegawa.saitama.jp
omiya.saitama.jp
otaki.saitama.jp
ranzan.saitama.jp
ryokami.saitama.jp
saitama.saitama.jp
sakado.saitama.jp
satte.saitama.jp
sayama.saitama.jp
shiki.saitama.jp
shiraoka.saitama.jp
soka.saitama.jp
sugito.saitama.jp
toda.saitama.jp
tokigawa.saitama.jp
tokorozawa.saitama.jp
tsurugashima.saitama.jp
urawa.saitama.jp
warabi.saitama.jp
yashio.saitama.jp
yokoze.saitama.jp
yono.saitama.jp
yorii.saitama.jp
yoshida.saitama.jp
yoshikawa.saitama.jp
yoshimi.saitama.jp
aisho.shiga.jp
gamo.shiga.jp
higashiomi.shiga.jp
hikone.shiga.jp
koka.shiga.jp
konan.shiga.jp
kosei.shiga.jp
koto.shiga.jp
kusatsu.shiga.jp
maibara.shiga.jp
moriyama.shiga.jp
nagahama.shiga.jp
nishiazai.shiga.jp
notogawa.shiga.jp
omihachiman.shiga.jp
otsu.shiga.jp
ritto.shiga.jp
ryuoh.shiga.jp
takashima.shiga.jp
takatsuki.shiga.jp
torahime.shiga.jp
toyosato.shiga.jp
yasu.shiga.jp
akagi.shimane.jp
ama.shimane.jp
gotsu.shimane.jp
hamada.shimane.jp
higashiizumo.shimane.jp
hikawa.shimane.jp
hikimi.shimane.jp
izumo.shimane.jp
kakinoki.shimane.jp
masuda.shimane.jp
matsue.shimane.jp
misato.shimane.jp
nishinoshima.shimane.jp
ohda.shimane.jp
okinoshima.shimane.jp
okuizumo.shimane.jp
shimane.shimane.jp
tamayu.shimane.jp
tsuwano.shimane.jp
unnan.shimane.jp
yakumo.shimane.jp
yasugi.shimane.jp
yatsuka.shimane.jp
arai.shizuoka.jp
atami.shizuoka.jp
fuji.shizuoka.jp
fujieda.shizuoka.jp
fujikawa.shizuoka.jp
fujinomiya.shizuoka.jp
fukuroi.shizuoka.jp
gotemba.shizuoka.jp
haibara.shizuoka.jp
hamamatsu.shizuoka.jp
higashiizu.shizuoka.jp
ito.shizuoka.jp
iwata.shizuoka.jp
izu.shizuoka.jp
izunokuni.shizuoka.jp
kakegawa.shizuoka.jp
kannami.shizuoka.jp
kawanehon.shizuoka.jp
kawazu.shizuoka.jp
kikugawa.shizuoka.jp
kosai.shizuoka.jp
makinohara.shizuoka.jp
matsuzaki.shizuoka.jp
minamiizu.shizuoka.jp
mishima.shizuoka.jp
morimachi.shizuoka.jp
nishiizu.shizuoka.jp
numazu.shizuoka.jp
omaezaki.shizuoka.jp
shimada.shizuoka.jp
shimizu.shizuoka.jp
shimoda.shizuoka.jp
shizuoka.shizuoka.jp
susono.shizuoka.jp
yaizu.shizuoka.jp
yoshida.shizuoka.jp
ashikaga.tochigi.jp
bato.tochigi.jp
haga.tochigi.jp
ichikai.tochigi.jp
iwafune.tochigi.jp
kaminokawa.tochigi.jp
kanuma.tochigi.jp
karasuyama.tochigi.jp
kuroiso.tochigi.jp
mashiko.tochigi.jp
mibu.tochigi.jp
moka.tochigi.jp
motegi.tochigi.jp
nasu.tochigi.jp
nasushiobara.tochigi.jp
nikko.tochigi.jp
nishikata.tochigi.jp
nogi.tochigi.jp
ohira.tochigi.jp
ohtawara.tochigi.jp
oyama.tochigi.jp
sakura.tochigi.jp
sano.tochigi.jp
shimotsuke.tochigi.jp
shioya.tochigi.jp
takanezawa.tochigi.jp
tochigi.tochigi.jp
tsuga.tochigi.jp
ujiie.tochigi.jp
utsunomiya.tochigi.jp
yaita.tochigi.jp
aizumi.tokushima.jp
anan.tokushima.jp
ichiba.tokushima.jp
itano.tokushima.jp
kainan.tokushima.jp
komatsushima.tokushima.jp
matsushige.tokushima.jp
mima.tokushima.jp
minami.tokushima.jp
miyoshi.tokushima.jp
mugi.tokushima.jp
nakagawa.tokushima.jp
naruto.tokushima.jp
sanagochi.tokushima.jp
shishikui.tokushima.jp
tokushima.tokushima.jp
wajiki.tokushima.jp
adachi.tokyo.jp
akiruno.tokyo.jp
akishima.tokyo.jp
aogashima.tokyo.jp
arakawa.tokyo.jp
bunkyo.tokyo.jp
chiyoda.tokyo.jp
chofu.tokyo.jp
chuo.tokyo.jp
edogawa.tokyo.jp
fuchu.tokyo.jp
fussa.tokyo.jp
hachijo.tokyo.jp
hachioji.tokyo.jp
hamura.tokyo.jp
higashikurume.tokyo.jp
higashimurayama.tokyo.jp
higashiyamato.tokyo.jp
hino.tokyo.jp
hinode.tokyo.jp
hinohara.tokyo.jp
inagi.tokyo.jp
itabashi.tokyo.jp
katsushika.tokyo.jp
kita.tokyo.jp
kiyose.tokyo.jp
kodaira.tokyo.jp
koganei.tokyo.jp
kokubunji.tokyo.jp
komae.tokyo.jp
koto.tokyo.jp
kouzushima.tokyo.jp
kunitachi.tokyo.jp
machida.tokyo.jp
meguro.tokyo.jp
minato.tokyo.jp
mitaka.tokyo.jp
mizuho.tokyo.jp
musashimurayama.tokyo.jp
musashino.tokyo.jp
nakano.tokyo.jp
nerima.tokyo.jp
ogasawara.tokyo.jp
okutama.tokyo.jp
ome.tokyo.jp
oshima.tokyo.jp
ota.tokyo.jp
setagaya.tokyo.jp
shibuya.tokyo.jp
shinagawa.tokyo.jp
shinjuku.tokyo.jp
suginami.tokyo.jp
sumida.tokyo.jp
tachikawa.tokyo.jp
taito.tokyo.jp
tama.tokyo.jp
toshima.tokyo.jp
chizu.tottori.jp
hino.tottori.jp
kawahara.tottori.jp
koge.tottori.jp
kotoura.tottori.jp
misasa.tottori.jp
nanbu.tottori.jp
nichinan.tottori.jp
sakaiminato.tottori.jp
tottori.tottori.jp
wakasa.tottori.jp
yazu.tottori.jp
yonago.tottori.jp
asahi.toyama.jp
fuchu.toyama.jp
fukumitsu.toyama.jp
funahashi.toyama.jp
himi.toyama.jp
imizu.toyama.jp
inami.toyama.jp
johana.toyama.jp
kamiichi.toyama.jp
kurobe.toyama.jp
nakaniikawa.toyama.jp
namerikawa.toyama.jp
nanto.toyama.jp
nyuzen.toyama.jp
oyabe.toyama.jp
taira.toyama.jp
takaoka.toyama.jp
tateyama.toyama.jp
toga.toyama.jp
tonami.toyama.jp
toyama.toyama.jp
unazuki.toyama.jp
uozu.toyama.jp
yamada.toyama.jp
arida.wakayama.jp
aridagawa.wakayama.jp
gobo.wakayama.jp
hashimoto.wakayama.jp
hidaka.wakayama.jp
hirogawa.wakayama.jp
inami.wakayama.jp
iwade.wakayama.jp
kainan.wakayama.jp
kamitonda.wakayama.jp
katsuragi.wakayama.jp
kimino.wakayama.jp
kinokawa.wakayama.jp
kitayama.wakayama.jp
koya.wakayama.jp
koza.wakayama.jp
kozagawa.wakayama.jp
kudoyama.wakayama.jp
kushimoto.wakayama.jp
mihama.wakayama.jp
misato.wakayama.jp
nachikatsuura.wakayama.jp
shingu.wakayama.jp
shirahama.wakayama.jp
taiji.wakayama.jp
tanabe.wakayama.jp
wakayama.wakayama.jp
yuasa.wakayama.jp
yura.wakayama.jp
asahi.yamagata.jp
funagata.yamagata.jp
higashine.yamagata.jp
iide.yamagata.jp
kahoku.yamagata.jp
kaminoyama.yamagata.jp
kaneyama.yamagata.jp
kawanishi.yamagata.jp
mamurogawa.yamagata.jp
mikawa.yamagata.jp
murayama.yamagata.jp
nagai.yamagata.jp
nakayama.yamagata.jp
nanyo.yamagata.jp
nishikawa.yamagata.jp
obanazawa.yamagata.jp
oe.yamagata.jp
oguni.yamagata.jp
ohkura.yamagata.jp
oishida.yamagata.jp
sagae.yamagata.jp
sakata.yamagata.jp
sakegawa.yamagata.jp
shinjo.yamagata.jp
shirataka.yamagata.jp
shonai.yamagata.jp
takahata.yamagata.jp
tendo.yamagata.jp
tozawa.yamagata.jp
tsuruoka.yamagata.jp
yamagata.yamagata.jp
yamanobe.yamagata.jp
yonezawa.yamagata.jp
yuza.yamagata.jp
abu.yamaguchi.jp
hagi.yamaguchi.jp
hikari.yamaguchi.jp
hofu.yamaguchi.jp
iwakuni.yamaguchi.jp
kudamatsu.yamaguchi.jp
mitou.yamaguchi.jp
nagato.yamaguchi.jp
oshima.yamaguchi.jp
shimonoseki.yamaguchi.jp
shunan.yamaguchi.jp
tabuse.yamaguchi.jp
tokuyama.yamaguchi.jp
toyota.yamaguchi.jp
ube.yamaguchi.jp
yuu.yamaguchi.jp
chuo.yamanashi.jp
doshi.yamanashi.jp
fuefuki.yamanashi.jp
fujikawa.yamanashi.jp
fujikawaguchiko.yamanashi.jp
fujiyoshida.yamanashi.jp
hayakawa.yamanashi.jp
hokuto.yamanashi.jp
ichikawamisato.yamanashi.jp
kai.yamanashi.jp
kofu.yamanashi.jp
koshu.yamanashi.jp
kosuge.yamanashi.jp
minami-alps.yamanashi.jp
minobu.yamanashi.jp
nakamichi.yamanashi.jp
nanbu.yamanashi.jp
narusawa.yamanashi.jp
nirasaki.yamanashi.jp
nishikatsura.yamanashi.jp
oshino.yamanashi.jp
otsuki.yamanashi.jp
showa.yamanashi.jp
tabayama.yamanashi.jp
tsuru.yamanashi.jp
uenohara.yamanashi.jp
yamanakako.yamanashi.jp
yamanashi.yamanashi.jp

// ke : http://www.kenic.or.ke/index.php/en/ke-domains/ke-domains
ke
ac.ke
co.ke
go.ke
info.ke
me.ke
mobi.ke
ne.ke
or.ke
sc.ke

// kg : http://www.domain.kg/dmn_n.html
kg
org.kg
net.kg
com.kg
edu.kg
gov.kg
mil.kg

// kh : http://www.mptc.gov.kh/dns_registration.htm
*.kh

// ki : http://www.ki/dns/index.html
ki
edu.ki
biz.ki
net.ki
org.ki
gov.ki
info.ki
com.ki

// km : https://en.wikipedia.org/wiki/.km
// http://www.domaine.km/documents/charte.doc
km
org.km
nom.km
gov.km
prd.km
tm.km
edu.km
mil.km
ass.km
com.km
// These are only mentioned as proposed suggestions at domaine.km, but
// https://en.wikipedia.org/wiki/.km says they're available for registration:
coop.km
asso.km
presse.km
medecin.km
notaires.km
pharmaciens.km
veterinaire.km
gouv.km

// kn : https://en.wikipedia.org/wiki/.kn
// http://www.dot.kn/domainRules.html
kn
net.kn
org.kn
edu.kn
gov.kn

// kp : http://www.kcce.kp/en_index.php
kp
com.kp
edu.kp
gov.kp
org.kp
rep.kp
tra.kp

// kr : https://en.wikipedia.org/wiki/.kr
// see also: http://domain.nida.or.kr/eng/registration.jsp
kr
ac.kr
co.kr
es.kr
go.kr
hs.kr
kg.kr
mil.kr
ms.kr
ne.kr
or.kr
pe.kr
re.kr
sc.kr
// kr geographical names
busan.kr
chungbuk.kr
chungnam.kr
daegu.kr
daejeon.kr
gangwon.kr
gwangju.kr
gyeongbuk.kr
gyeonggi.kr
gyeongnam.kr
incheon.kr
jeju.kr
jeonbuk.kr
jeonnam.kr
seoul.kr
ulsan.kr

// kw : https://www.nic.kw/policies/
// Confirmed by registry <nic.tech@citra.gov.kw>
kw
com.kw
edu.kw
emb.kw
gov.kw
ind.kw
net.kw
org.kw

// ky : http://www.icta.ky/da_ky_reg_dom.php
// Confirmed by registry <kysupport@perimeterusa.com> 2008-06-17
ky
com.ky
edu.ky
net.ky
org.ky

// kz : https://en.wikipedia.org/wiki/.kz
// see also: http://www.nic.kz/rules/index.jsp
kz
org.kz
edu.kz
net.kz
gov.kz
mil.kz
com.kz

// la : https://en.wikipedia.org/wiki/.la
// Submitted by registry <gavin.brown@nic.la>
la
int.la
net.la
info.la
edu.la
gov.la
per.la
com.la
org.la

// lb : https://en.wikipedia.org/wiki/.lb
// Submitted by registry <randy@psg.com>
lb
com.lb
edu.lb
gov.lb
net.lb
org.lb

// lc : https://en.wikipedia.org/wiki/.lc
// see also: http://www.nic.lc/rules.htm
lc
com.lc
net.lc
co.lc
org.lc
edu.lc
gov.lc

// li : https://en.wikipedia.org/wiki/.li
li

// lk : https://www.nic.lk/index.php/domain-registration/lk-domain-naming-structure
lk
gov.lk
sch.lk
net.lk
int.lk
com.lk
org.lk
edu.lk
ngo.lk
soc.lk
web.lk
ltd.lk
assn.lk
grp.lk
hotel.lk
ac.lk

// lr : http://psg.com/dns/lr/lr.txt
// Submitted by registry <randy@psg.com>
lr
com.lr
edu.lr
gov.lr
org.lr
net.lr

// ls : http://www.nic.ls/
// Confirmed by registry <lsadmin@nic.ls>
ls
ac.ls
biz.ls
co.ls
edu.ls
gov.ls
info.ls
net.ls
org.ls
sc.ls

// lt : https://en.wikipedia.org/wiki/.lt
lt
// gov.lt : http://www.gov.lt/index_en.php
gov.lt

// lu : http://www.dns.lu/en/
lu

// lv : http://www.nic.lv/DNS/En/generic.php
lv
com.lv
edu.lv
gov.lv
org.lv
mil.lv
id.lv
net.lv
asn.lv
conf.lv

// ly : http://www.nic.ly/regulations.php
ly
com.ly
net.ly
gov.ly
plc.ly
edu.ly
sch.ly
med.ly
org.ly
id.ly

// ma : https://en.wikipedia.org/wiki/.ma
// http://www.anrt.ma/fr/admin/download/upload/file_fr782.pdf
ma
co.ma
net.ma
gov.ma
org.ma
ac.ma
press.ma

// mc : http://www.nic.mc/
mc
tm.mc
asso.mc

// md : https://en.wikipedia.org/wiki/.md
md

// me : https://en.wikipedia.org/wiki/.me
me
co.me
net.me
org.me
edu.me
ac.me
gov.me
its.me
priv.me

// mg : http://nic.mg/nicmg/?page_id=39
mg
org.mg
nom.mg
gov.mg
prd.mg
tm.mg
edu.mg
mil.mg
com.mg
co.mg

// mh : https://en.wikipedia.org/wiki/.mh
mh

// mil : https://en.wikipedia.org/wiki/.mil
mil

// mk : https://en.wikipedia.org/wiki/.mk
// see also: http://dns.marnet.net.mk/postapka.php
mk
com.mk
org.mk
net.mk
edu.mk
gov.mk
inf.mk
name.mk

// ml : http://www.gobin.info/domainname/ml-template.doc
// see also: https://en.wikipedia.org/wiki/.ml
ml
com.ml
edu.ml
gouv.ml
gov.ml
net.ml
org.ml
presse.ml

// mm : https://en.wikipedia.org/wiki/.mm
*.mm

// mn : https://en.wikipedia.org/wiki/.mn
mn
gov.mn
edu.mn
org.mn

// mo : http://www.monic.net.mo/
mo
com.mo
net.mo
org.mo
edu.mo
gov.mo

// mobi : https://en.wikipedia.org/wiki/.mobi
mobi

// mp : http://www.dot.mp/
// Confirmed by registry <dcamacho@saipan.com> 2008-06-17
mp

// mq : https://en.wikipedia.org/wiki/.mq
mq

// mr : https://en.wikipedia.org/wiki/.mr
mr
gov.mr

// ms : http://www.nic.ms/pdf/MS_Domain_Name_Rules.pdf
ms
com.ms
edu.ms
gov.ms
net.ms
org.ms

// mt : https://www.nic.org.mt/go/policy
// Submitted by registry <help@nic.org.mt>
mt
com.mt
edu.mt
net.mt
org.mt

// mu : https://en.wikipedia.org/wiki/.mu
mu
com.mu
net.mu
org.mu
gov.mu
ac.mu
co.mu
or.mu

// museum : https://welcome.museum/wp-content/uploads/2018/05/20180525-Registration-Policy-MUSEUM-EN_VF-2.pdf https://welcome.museum/buy-your-dot-museum-2/
museum

// mv : https://en.wikipedia.org/wiki/.mv
// "mv" included because, contra Wikipedia, google.mv exists.
mv
aero.mv
biz.mv
com.mv
coop.mv
edu.mv
gov.mv
info.mv
int.mv
mil.mv
museum.mv
name.mv
net.mv
org.mv
pro.mv

// mw : http://www.registrar.mw/
mw
ac.mw
biz.mw
co.mw
com.mw
coop.mw
edu.mw
gov.mw
int.mw
museum.mw
net.mw
org.mw

// mx : http://www.nic.mx/
// Submitted by registry <farias@nic.mx>
mx
com.mx
org.mx
gob.mx
edu.mx
net.mx

// my : http://www.mynic.my/
// Available strings: https://mynic.my/resources/domains/buying-a-domain/
my
biz.my
com.my
edu.my
gov.my
mil.my
name.my
net.my
org.my

// mz : http://www.uem.mz/
// Submitted by registry <antonio@uem.mz>
mz
ac.mz
adv.mz
co.mz
edu.mz
gov.mz
mil.mz
net.mz
org.mz

// na : http://www.na-nic.com.na/
// http://www.info.na/domain/
na
info.na
pro.na
name.na
school.na
or.na
dr.na
us.na
mx.na
ca.na
in.na
cc.na
tv.na
ws.na
mobi.na
co.na
com.na
org.na

// name : has 2nd-level tlds, but there's no list of them
name

// nc : http://www.cctld.nc/
nc
asso.nc
nom.nc

// ne : https://en.wikipedia.org/wiki/.ne
ne

// net : https://en.wikipedia.org/wiki/.net
net

// nf : https://en.wikipedia.org/wiki/.nf
nf
com.nf
net.nf
per.nf
rec.nf
web.nf
arts.nf
firm.nf
info.nf
other.nf
store.nf

// ng : http://www.nira.org.ng/index.php/join-us/register-ng-domain/189-nira-slds
ng
com.ng
edu.ng
gov.ng
i.ng
mil.ng
mobi.ng
name.ng
net.ng
org.ng
sch.ng

// ni : http://www.nic.ni/
ni
ac.ni
biz.ni
co.ni
com.ni
edu.ni
gob.ni
in.ni
info.ni
int.ni
mil.ni
net.ni
nom.ni
org.ni
web.ni

// nl : https://en.wikipedia.org/wiki/.nl
//      https://www.sidn.nl/
//      ccTLD for the Netherlands
nl

// no : https://www.norid.no/en/om-domenenavn/regelverk-for-no/
// Norid geographical second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-b/
// Norid category second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-c/
// Norid category second-level domains managed by parties other than Norid : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-d/
// RSS feed: https://teknisk.norid.no/en/feed/
no
// Norid category second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-c/
fhs.no
vgs.no
fylkesbibl.no
folkebibl.no
museum.no
idrett.no
priv.no
// Norid category second-level domains managed by parties other than Norid : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-d/
mil.no
stat.no
dep.no
kommune.no
herad.no
// Norid geographical second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-b/
// counties
aa.no
ah.no
bu.no
fm.no
hl.no
hm.no
jan-mayen.no
mr.no
nl.no
nt.no
of.no
ol.no
oslo.no
rl.no
sf.no
st.no
svalbard.no
tm.no
tr.no
va.no
vf.no
// primary and lower secondary schools per county
gs.aa.no
gs.ah.no
gs.bu.no
gs.fm.no
gs.hl.no
gs.hm.no
gs.jan-mayen.no
gs.mr.no
gs.nl.no
gs.nt.no
gs.of.no
gs.ol.no
gs.oslo.no
gs.rl.no
gs.sf.no
gs.st.no
gs.svalbard.no
gs.tm.no
gs.tr.no
gs.va.no
gs.vf.no
// cities
akrehamn.no
\xE5krehamn.no
algard.no
\xE5lg\xE5rd.no
arna.no
brumunddal.no
bryne.no
bronnoysund.no
br\xF8nn\xF8ysund.no
drobak.no
dr\xF8bak.no
egersund.no
fetsund.no
floro.no
flor\xF8.no
fredrikstad.no
hokksund.no
honefoss.no
h\xF8nefoss.no
jessheim.no
jorpeland.no
j\xF8rpeland.no
kirkenes.no
kopervik.no
krokstadelva.no
langevag.no
langev\xE5g.no
leirvik.no
mjondalen.no
mj\xF8ndalen.no
mo-i-rana.no
mosjoen.no
mosj\xF8en.no
nesoddtangen.no
orkanger.no
osoyro.no
os\xF8yro.no
raholt.no
r\xE5holt.no
sandnessjoen.no
sandnessj\xF8en.no
skedsmokorset.no
slattum.no
spjelkavik.no
stathelle.no
stavern.no
stjordalshalsen.no
stj\xF8rdalshalsen.no
tananger.no
tranby.no
vossevangen.no
// communities
afjord.no
\xE5fjord.no
agdenes.no
al.no
\xE5l.no
alesund.no
\xE5lesund.no
alstahaug.no
alta.no
\xE1lt\xE1.no
alaheadju.no
\xE1laheadju.no
alvdal.no
amli.no
\xE5mli.no
amot.no
\xE5mot.no
andebu.no
andoy.no
and\xF8y.no
andasuolo.no
ardal.no
\xE5rdal.no
aremark.no
arendal.no
\xE5s.no
aseral.no
\xE5seral.no
asker.no
askim.no
askvoll.no
askoy.no
ask\xF8y.no
asnes.no
\xE5snes.no
audnedaln.no
aukra.no
aure.no
aurland.no
aurskog-holand.no
aurskog-h\xF8land.no
austevoll.no
austrheim.no
averoy.no
aver\xF8y.no
balestrand.no
ballangen.no
balat.no
b\xE1l\xE1t.no
balsfjord.no
bahccavuotna.no
b\xE1hccavuotna.no
bamble.no
bardu.no
beardu.no
beiarn.no
bajddar.no
b\xE1jddar.no
baidar.no
b\xE1id\xE1r.no
berg.no
bergen.no
berlevag.no
berlev\xE5g.no
bearalvahki.no
bearalv\xE1hki.no
bindal.no
birkenes.no
bjarkoy.no
bjark\xF8y.no
bjerkreim.no
bjugn.no
bodo.no
bod\xF8.no
badaddja.no
b\xE5d\xE5ddj\xE5.no
budejju.no
bokn.no
bremanger.no
bronnoy.no
br\xF8nn\xF8y.no
bygland.no
bykle.no
barum.no
b\xE6rum.no
bo.telemark.no
b\xF8.telemark.no
bo.nordland.no
b\xF8.nordland.no
bievat.no
biev\xE1t.no
bomlo.no
b\xF8mlo.no
batsfjord.no
b\xE5tsfjord.no
bahcavuotna.no
b\xE1hcavuotna.no
dovre.no
drammen.no
drangedal.no
dyroy.no
dyr\xF8y.no
donna.no
d\xF8nna.no
eid.no
eidfjord.no
eidsberg.no
eidskog.no
eidsvoll.no
eigersund.no
elverum.no
enebakk.no
engerdal.no
etne.no
etnedal.no
evenes.no
evenassi.no
even\xE1\u0161\u0161i.no
evje-og-hornnes.no
farsund.no
fauske.no
fuossko.no
fuoisku.no
fedje.no
fet.no
finnoy.no
finn\xF8y.no
fitjar.no
fjaler.no
fjell.no
flakstad.no
flatanger.no
flekkefjord.no
flesberg.no
flora.no
fla.no
fl\xE5.no
folldal.no
forsand.no
fosnes.no
frei.no
frogn.no
froland.no
frosta.no
frana.no
fr\xE6na.no
froya.no
fr\xF8ya.no
fusa.no
fyresdal.no
forde.no
f\xF8rde.no
gamvik.no
gangaviika.no
g\xE1\u014Bgaviika.no
gaular.no
gausdal.no
gildeskal.no
gildesk\xE5l.no
giske.no
gjemnes.no
gjerdrum.no
gjerstad.no
gjesdal.no
gjovik.no
gj\xF8vik.no
gloppen.no
gol.no
gran.no
grane.no
granvin.no
gratangen.no
grimstad.no
grong.no
kraanghke.no
kr\xE5anghke.no
grue.no
gulen.no
hadsel.no
halden.no
halsa.no
hamar.no
hamaroy.no
habmer.no
h\xE1bmer.no
hapmir.no
h\xE1pmir.no
hammerfest.no
hammarfeasta.no
h\xE1mm\xE1rfeasta.no
haram.no
hareid.no
harstad.no
hasvik.no
aknoluokta.no
\xE1k\u014Boluokta.no
hattfjelldal.no
aarborte.no
haugesund.no
hemne.no
hemnes.no
hemsedal.no
heroy.more-og-romsdal.no
her\xF8y.m\xF8re-og-romsdal.no
heroy.nordland.no
her\xF8y.nordland.no
hitra.no
hjartdal.no
hjelmeland.no
hobol.no
hob\xF8l.no
hof.no
hol.no
hole.no
holmestrand.no
holtalen.no
holt\xE5len.no
hornindal.no
horten.no
hurdal.no
hurum.no
hvaler.no
hyllestad.no
hagebostad.no
h\xE6gebostad.no
hoyanger.no
h\xF8yanger.no
hoylandet.no
h\xF8ylandet.no
ha.no
h\xE5.no
ibestad.no
inderoy.no
inder\xF8y.no
iveland.no
jevnaker.no
jondal.no
jolster.no
j\xF8lster.no
karasjok.no
karasjohka.no
k\xE1r\xE1\u0161johka.no
karlsoy.no
galsa.no
g\xE1ls\xE1.no
karmoy.no
karm\xF8y.no
kautokeino.no
guovdageaidnu.no
klepp.no
klabu.no
kl\xE6bu.no
kongsberg.no
kongsvinger.no
kragero.no
krager\xF8.no
kristiansand.no
kristiansund.no
krodsherad.no
kr\xF8dsherad.no
kvalsund.no
rahkkeravju.no
r\xE1hkker\xE1vju.no
kvam.no
kvinesdal.no
kvinnherad.no
kviteseid.no
kvitsoy.no
kvits\xF8y.no
kvafjord.no
kv\xE6fjord.no
giehtavuoatna.no
kvanangen.no
kv\xE6nangen.no
navuotna.no
n\xE1vuotna.no
kafjord.no
k\xE5fjord.no
gaivuotna.no
g\xE1ivuotna.no
larvik.no
lavangen.no
lavagis.no
loabat.no
loab\xE1t.no
lebesby.no
davvesiida.no
leikanger.no
leirfjord.no
leka.no
leksvik.no
lenvik.no
leangaviika.no
lea\u014Bgaviika.no
lesja.no
levanger.no
lier.no
lierne.no
lillehammer.no
lillesand.no
lindesnes.no
lindas.no
lind\xE5s.no
lom.no
loppa.no
lahppi.no
l\xE1hppi.no
lund.no
lunner.no
luroy.no
lur\xF8y.no
luster.no
lyngdal.no
lyngen.no
ivgu.no
lardal.no
lerdal.no
l\xE6rdal.no
lodingen.no
l\xF8dingen.no
lorenskog.no
l\xF8renskog.no
loten.no
l\xF8ten.no
malvik.no
masoy.no
m\xE5s\xF8y.no
muosat.no
muos\xE1t.no
mandal.no
marker.no
marnardal.no
masfjorden.no
meland.no
meldal.no
melhus.no
meloy.no
mel\xF8y.no
meraker.no
mer\xE5ker.no
moareke.no
mo\xE5reke.no
midsund.no
midtre-gauldal.no
modalen.no
modum.no
molde.no
moskenes.no
moss.no
mosvik.no
malselv.no
m\xE5lselv.no
malatvuopmi.no
m\xE1latvuopmi.no
namdalseid.no
aejrie.no
namsos.no
namsskogan.no
naamesjevuemie.no
n\xE5\xE5mesjevuemie.no
laakesvuemie.no
nannestad.no
narvik.no
narviika.no
naustdal.no
nedre-eiker.no
nes.akershus.no
nes.buskerud.no
nesna.no
nesodden.no
nesseby.no
unjarga.no
unj\xE1rga.no
nesset.no
nissedal.no
nittedal.no
nord-aurdal.no
nord-fron.no
nord-odal.no
norddal.no
nordkapp.no
davvenjarga.no
davvenj\xE1rga.no
nordre-land.no
nordreisa.no
raisa.no
r\xE1isa.no
nore-og-uvdal.no
notodden.no
naroy.no
n\xE6r\xF8y.no
notteroy.no
n\xF8tter\xF8y.no
odda.no
oksnes.no
\xF8ksnes.no
oppdal.no
oppegard.no
oppeg\xE5rd.no
orkdal.no
orland.no
\xF8rland.no
orskog.no
\xF8rskog.no
orsta.no
\xF8rsta.no
os.hedmark.no
os.hordaland.no
osen.no
osteroy.no
oster\xF8y.no
ostre-toten.no
\xF8stre-toten.no
overhalla.no
ovre-eiker.no
\xF8vre-eiker.no
oyer.no
\xF8yer.no
oygarden.no
\xF8ygarden.no
oystre-slidre.no
\xF8ystre-slidre.no
porsanger.no
porsangu.no
pors\xE1\u014Bgu.no
porsgrunn.no
radoy.no
rad\xF8y.no
rakkestad.no
rana.no
ruovat.no
randaberg.no
rauma.no
rendalen.no
rennebu.no
rennesoy.no
rennes\xF8y.no
rindal.no
ringebu.no
ringerike.no
ringsaker.no
rissa.no
risor.no
ris\xF8r.no
roan.no
rollag.no
rygge.no
ralingen.no
r\xE6lingen.no
rodoy.no
r\xF8d\xF8y.no
romskog.no
r\xF8mskog.no
roros.no
r\xF8ros.no
rost.no
r\xF8st.no
royken.no
r\xF8yken.no
royrvik.no
r\xF8yrvik.no
rade.no
r\xE5de.no
salangen.no
siellak.no
saltdal.no
salat.no
s\xE1l\xE1t.no
s\xE1lat.no
samnanger.no
sande.more-og-romsdal.no
sande.m\xF8re-og-romsdal.no
sande.vestfold.no
sandefjord.no
sandnes.no
sandoy.no
sand\xF8y.no
sarpsborg.no
sauda.no
sauherad.no
sel.no
selbu.no
selje.no
seljord.no
sigdal.no
siljan.no
sirdal.no
skaun.no
skedsmo.no
ski.no
skien.no
skiptvet.no
skjervoy.no
skjerv\xF8y.no
skierva.no
skierv\xE1.no
skjak.no
skj\xE5k.no
skodje.no
skanland.no
sk\xE5nland.no
skanit.no
sk\xE1nit.no
smola.no
sm\xF8la.no
snillfjord.no
snasa.no
sn\xE5sa.no
snoasa.no
snaase.no
sn\xE5ase.no
sogndal.no
sokndal.no
sola.no
solund.no
songdalen.no
sortland.no
spydeberg.no
stange.no
stavanger.no
steigen.no
steinkjer.no
stjordal.no
stj\xF8rdal.no
stokke.no
stor-elvdal.no
stord.no
stordal.no
storfjord.no
omasvuotna.no
strand.no
stranda.no
stryn.no
sula.no
suldal.no
sund.no
sunndal.no
surnadal.no
sveio.no
svelvik.no
sykkylven.no
sogne.no
s\xF8gne.no
somna.no
s\xF8mna.no
sondre-land.no
s\xF8ndre-land.no
sor-aurdal.no
s\xF8r-aurdal.no
sor-fron.no
s\xF8r-fron.no
sor-odal.no
s\xF8r-odal.no
sor-varanger.no
s\xF8r-varanger.no
matta-varjjat.no
m\xE1tta-v\xE1rjjat.no
sorfold.no
s\xF8rfold.no
sorreisa.no
s\xF8rreisa.no
sorum.no
s\xF8rum.no
tana.no
deatnu.no
time.no
tingvoll.no
tinn.no
tjeldsund.no
dielddanuorri.no
tjome.no
tj\xF8me.no
tokke.no
tolga.no
torsken.no
tranoy.no
tran\xF8y.no
tromso.no
troms\xF8.no
tromsa.no
romsa.no
trondheim.no
troandin.no
trysil.no
trana.no
tr\xE6na.no
trogstad.no
tr\xF8gstad.no
tvedestrand.no
tydal.no
tynset.no
tysfjord.no
divtasvuodna.no
divttasvuotna.no
tysnes.no
tysvar.no
tysv\xE6r.no
tonsberg.no
t\xF8nsberg.no
ullensaker.no
ullensvang.no
ulvik.no
utsira.no
vadso.no
vads\xF8.no
cahcesuolo.no
\u010D\xE1hcesuolo.no
vaksdal.no
valle.no
vang.no
vanylven.no
vardo.no
vard\xF8.no
varggat.no
v\xE1rgg\xE1t.no
vefsn.no
vaapste.no
vega.no
vegarshei.no
veg\xE5rshei.no
vennesla.no
verdal.no
verran.no
vestby.no
vestnes.no
vestre-slidre.no
vestre-toten.no
vestvagoy.no
vestv\xE5g\xF8y.no
vevelstad.no
vik.no
vikna.no
vindafjord.no
volda.no
voss.no
varoy.no
v\xE6r\xF8y.no
vagan.no
v\xE5gan.no
voagat.no
vagsoy.no
v\xE5gs\xF8y.no
vaga.no
v\xE5g\xE5.no
valer.ostfold.no
v\xE5ler.\xF8stfold.no
valer.hedmark.no
v\xE5ler.hedmark.no

// np : http://www.mos.com.np/register.html
*.np

// nr : http://cenpac.net.nr/dns/index.html
// Submitted by registry <technician@cenpac.net.nr>
nr
biz.nr
info.nr
gov.nr
edu.nr
org.nr
net.nr
com.nr

// nu : https://en.wikipedia.org/wiki/.nu
nu

// nz : https://en.wikipedia.org/wiki/.nz
// Submitted by registry <jay@nzrs.net.nz>
nz
ac.nz
co.nz
cri.nz
geek.nz
gen.nz
govt.nz
health.nz
iwi.nz
kiwi.nz
maori.nz
mil.nz
m\u0101ori.nz
net.nz
org.nz
parliament.nz
school.nz

// om : https://en.wikipedia.org/wiki/.om
om
co.om
com.om
edu.om
gov.om
med.om
museum.om
net.om
org.om
pro.om

// onion : https://tools.ietf.org/html/rfc7686
onion

// org : https://en.wikipedia.org/wiki/.org
org

// pa : http://www.nic.pa/
// Some additional second level "domains" resolve directly as hostnames, such as
// pannet.pa, so we add a rule for "pa".
pa
ac.pa
gob.pa
com.pa
org.pa
sld.pa
edu.pa
net.pa
ing.pa
abo.pa
med.pa
nom.pa

// pe : https://www.nic.pe/InformeFinalComision.pdf
pe
edu.pe
gob.pe
nom.pe
mil.pe
org.pe
com.pe
net.pe

// pf : http://www.gobin.info/domainname/formulaire-pf.pdf
pf
com.pf
org.pf
edu.pf

// pg : https://en.wikipedia.org/wiki/.pg
*.pg

// ph : http://www.domains.ph/FAQ2.asp
// Submitted by registry <jed@email.com.ph>
ph
com.ph
net.ph
org.ph
gov.ph
edu.ph
ngo.ph
mil.ph
i.ph

// pk : http://pk5.pknic.net.pk/pk5/msgNamepk.PK
pk
com.pk
net.pk
edu.pk
org.pk
fam.pk
biz.pk
web.pk
gov.pk
gob.pk
gok.pk
gon.pk
gop.pk
gos.pk
info.pk

// pl http://www.dns.pl/english/index.html
// Submitted by registry
pl
com.pl
net.pl
org.pl
// pl functional domains (http://www.dns.pl/english/index.html)
aid.pl
agro.pl
atm.pl
auto.pl
biz.pl
edu.pl
gmina.pl
gsm.pl
info.pl
mail.pl
miasta.pl
media.pl
mil.pl
nieruchomosci.pl
nom.pl
pc.pl
powiat.pl
priv.pl
realestate.pl
rel.pl
sex.pl
shop.pl
sklep.pl
sos.pl
szkola.pl
targi.pl
tm.pl
tourism.pl
travel.pl
turystyka.pl
// Government domains
gov.pl
ap.gov.pl
griw.gov.pl
ic.gov.pl
is.gov.pl
kmpsp.gov.pl
konsulat.gov.pl
kppsp.gov.pl
kwp.gov.pl
kwpsp.gov.pl
mup.gov.pl
mw.gov.pl
oia.gov.pl
oirm.gov.pl
oke.gov.pl
oow.gov.pl
oschr.gov.pl
oum.gov.pl
pa.gov.pl
pinb.gov.pl
piw.gov.pl
po.gov.pl
pr.gov.pl
psp.gov.pl
psse.gov.pl
pup.gov.pl
rzgw.gov.pl
sa.gov.pl
sdn.gov.pl
sko.gov.pl
so.gov.pl
sr.gov.pl
starostwo.gov.pl
ug.gov.pl
ugim.gov.pl
um.gov.pl
umig.gov.pl
upow.gov.pl
uppo.gov.pl
us.gov.pl
uw.gov.pl
uzs.gov.pl
wif.gov.pl
wiih.gov.pl
winb.gov.pl
wios.gov.pl
witd.gov.pl
wiw.gov.pl
wkz.gov.pl
wsa.gov.pl
wskr.gov.pl
wsse.gov.pl
wuoz.gov.pl
wzmiuw.gov.pl
zp.gov.pl
zpisdn.gov.pl
// pl regional domains (http://www.dns.pl/english/index.html)
augustow.pl
babia-gora.pl
bedzin.pl
beskidy.pl
bialowieza.pl
bialystok.pl
bielawa.pl
bieszczady.pl
boleslawiec.pl
bydgoszcz.pl
bytom.pl
cieszyn.pl
czeladz.pl
czest.pl
dlugoleka.pl
elblag.pl
elk.pl
glogow.pl
gniezno.pl
gorlice.pl
grajewo.pl
ilawa.pl
jaworzno.pl
jelenia-gora.pl
jgora.pl
kalisz.pl
kazimierz-dolny.pl
karpacz.pl
kartuzy.pl
kaszuby.pl
katowice.pl
kepno.pl
ketrzyn.pl
klodzko.pl
kobierzyce.pl
kolobrzeg.pl
konin.pl
konskowola.pl
kutno.pl
lapy.pl
lebork.pl
legnica.pl
lezajsk.pl
limanowa.pl
lomza.pl
lowicz.pl
lubin.pl
lukow.pl
malbork.pl
malopolska.pl
mazowsze.pl
mazury.pl
mielec.pl
mielno.pl
mragowo.pl
naklo.pl
nowaruda.pl
nysa.pl
olawa.pl
olecko.pl
olkusz.pl
olsztyn.pl
opoczno.pl
opole.pl
ostroda.pl
ostroleka.pl
ostrowiec.pl
ostrowwlkp.pl
pila.pl
pisz.pl
podhale.pl
podlasie.pl
polkowice.pl
pomorze.pl
pomorskie.pl
prochowice.pl
pruszkow.pl
przeworsk.pl
pulawy.pl
radom.pl
rawa-maz.pl
rybnik.pl
rzeszow.pl
sanok.pl
sejny.pl
slask.pl
slupsk.pl
sosnowiec.pl
stalowa-wola.pl
skoczow.pl
starachowice.pl
stargard.pl
suwalki.pl
swidnica.pl
swiebodzin.pl
swinoujscie.pl
szczecin.pl
szczytno.pl
tarnobrzeg.pl
tgory.pl
turek.pl
tychy.pl
ustka.pl
walbrzych.pl
warmia.pl
warszawa.pl
waw.pl
wegrow.pl
wielun.pl
wlocl.pl
wloclawek.pl
wodzislaw.pl
wolomin.pl
wroclaw.pl
zachpomor.pl
zagan.pl
zarow.pl
zgora.pl
zgorzelec.pl

// pm : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
pm

// pn : http://www.government.pn/PnRegistry/policies.htm
pn
gov.pn
co.pn
org.pn
edu.pn
net.pn

// post : https://en.wikipedia.org/wiki/.post
post

// pr : http://www.nic.pr/index.asp?f=1
pr
com.pr
net.pr
org.pr
gov.pr
edu.pr
isla.pr
pro.pr
biz.pr
info.pr
name.pr
// these aren't mentioned on nic.pr, but on https://en.wikipedia.org/wiki/.pr
est.pr
prof.pr
ac.pr

// pro : http://registry.pro/get-pro
pro
aaa.pro
aca.pro
acct.pro
avocat.pro
bar.pro
cpa.pro
eng.pro
jur.pro
law.pro
med.pro
recht.pro

// ps : https://en.wikipedia.org/wiki/.ps
// http://www.nic.ps/registration/policy.html#reg
ps
edu.ps
gov.ps
sec.ps
plo.ps
com.ps
org.ps
net.ps

// pt : https://www.dns.pt/en/domain/pt-terms-and-conditions-registration-rules/
pt
net.pt
gov.pt
org.pt
edu.pt
int.pt
publ.pt
com.pt
nome.pt

// pw : https://en.wikipedia.org/wiki/.pw
pw
co.pw
ne.pw
or.pw
ed.pw
go.pw
belau.pw

// py : http://www.nic.py/pautas.html#seccion_9
// Submitted by registry
py
com.py
coop.py
edu.py
gov.py
mil.py
net.py
org.py

// qa : http://domains.qa/en/
qa
com.qa
edu.qa
gov.qa
mil.qa
name.qa
net.qa
org.qa
sch.qa

// re : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
re
asso.re
com.re
nom.re

// ro : http://www.rotld.ro/
ro
arts.ro
com.ro
firm.ro
info.ro
nom.ro
nt.ro
org.ro
rec.ro
store.ro
tm.ro
www.ro

// rs : https://www.rnids.rs/en/domains/national-domains
rs
ac.rs
co.rs
edu.rs
gov.rs
in.rs
org.rs

// ru : https://cctld.ru/files/pdf/docs/en/rules_ru-rf.pdf
// Submitted by George Georgievsky <gug@cctld.ru>
ru

// rw : https://www.ricta.org.rw/sites/default/files/resources/registry_registrar_contract_0.pdf
rw
ac.rw
co.rw
coop.rw
gov.rw
mil.rw
net.rw
org.rw

// sa : http://www.nic.net.sa/
sa
com.sa
net.sa
org.sa
gov.sa
med.sa
pub.sa
edu.sa
sch.sa

// sb : http://www.sbnic.net.sb/
// Submitted by registry <lee.humphries@telekom.com.sb>
sb
com.sb
edu.sb
gov.sb
net.sb
org.sb

// sc : http://www.nic.sc/
sc
com.sc
gov.sc
net.sc
org.sc
edu.sc

// sd : http://www.isoc.sd/sudanic.isoc.sd/billing_pricing.htm
// Submitted by registry <admin@isoc.sd>
sd
com.sd
net.sd
org.sd
edu.sd
med.sd
tv.sd
gov.sd
info.sd

// se : https://en.wikipedia.org/wiki/.se
// Submitted by registry <patrik.wallstrom@iis.se>
se
a.se
ac.se
b.se
bd.se
brand.se
c.se
d.se
e.se
f.se
fh.se
fhsk.se
fhv.se
g.se
h.se
i.se
k.se
komforb.se
kommunalforbund.se
komvux.se
l.se
lanbib.se
m.se
n.se
naturbruksgymn.se
o.se
org.se
p.se
parti.se
pp.se
press.se
r.se
s.se
t.se
tm.se
u.se
w.se
x.se
y.se
z.se

// sg : http://www.nic.net.sg/page/registration-policies-procedures-and-guidelines
sg
com.sg
net.sg
org.sg
gov.sg
edu.sg
per.sg

// sh : http://nic.sh/rules.htm
sh
com.sh
net.sh
gov.sh
org.sh
mil.sh

// si : https://en.wikipedia.org/wiki/.si
si

// sj : No registrations at this time.
// Submitted by registry <jarle@uninett.no>
sj

// sk : https://en.wikipedia.org/wiki/.sk
// list of 2nd level domains ?
sk

// sl : http://www.nic.sl
// Submitted by registry <adam@neoip.com>
sl
com.sl
net.sl
edu.sl
gov.sl
org.sl

// sm : https://en.wikipedia.org/wiki/.sm
sm

// sn : https://en.wikipedia.org/wiki/.sn
sn
art.sn
com.sn
edu.sn
gouv.sn
org.sn
perso.sn
univ.sn

// so : http://sonic.so/policies/
so
com.so
edu.so
gov.so
me.so
net.so
org.so

// sr : https://en.wikipedia.org/wiki/.sr
sr

// ss : https://registry.nic.ss/
// Submitted by registry <technical@nic.ss>
ss
biz.ss
com.ss
edu.ss
gov.ss
me.ss
net.ss
org.ss
sch.ss

// st : http://www.nic.st/html/policyrules/
st
co.st
com.st
consulado.st
edu.st
embaixada.st
mil.st
net.st
org.st
principe.st
saotome.st
store.st

// su : https://en.wikipedia.org/wiki/.su
su

// sv : http://www.svnet.org.sv/niveldos.pdf
sv
com.sv
edu.sv
gob.sv
org.sv
red.sv

// sx : https://en.wikipedia.org/wiki/.sx
// Submitted by registry <jcvignes@openregistry.com>
sx
gov.sx

// sy : https://en.wikipedia.org/wiki/.sy
// see also: http://www.gobin.info/domainname/sy.doc
sy
edu.sy
gov.sy
net.sy
mil.sy
com.sy
org.sy

// sz : https://en.wikipedia.org/wiki/.sz
// http://www.sispa.org.sz/
sz
co.sz
ac.sz
org.sz

// tc : https://en.wikipedia.org/wiki/.tc
tc

// td : https://en.wikipedia.org/wiki/.td
td

// tel: https://en.wikipedia.org/wiki/.tel
// http://www.telnic.org/
tel

// tf : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
tf

// tg : https://en.wikipedia.org/wiki/.tg
// http://www.nic.tg/
tg

// th : https://en.wikipedia.org/wiki/.th
// Submitted by registry <krit@thains.co.th>
th
ac.th
co.th
go.th
in.th
mi.th
net.th
or.th

// tj : http://www.nic.tj/policy.html
tj
ac.tj
biz.tj
co.tj
com.tj
edu.tj
go.tj
gov.tj
int.tj
mil.tj
name.tj
net.tj
nic.tj
org.tj
test.tj
web.tj

// tk : https://en.wikipedia.org/wiki/.tk
tk

// tl : https://en.wikipedia.org/wiki/.tl
tl
gov.tl

// tm : http://www.nic.tm/local.html
tm
com.tm
co.tm
org.tm
net.tm
nom.tm
gov.tm
mil.tm
edu.tm

// tn : http://www.registre.tn/fr/
// https://whois.ati.tn/
tn
com.tn
ens.tn
fin.tn
gov.tn
ind.tn
info.tn
intl.tn
mincom.tn
nat.tn
net.tn
org.tn
perso.tn
tourism.tn

// to : https://en.wikipedia.org/wiki/.to
// Submitted by registry <egullich@colo.to>
to
com.to
gov.to
net.to
org.to
edu.to
mil.to

// tr : https://nic.tr/
// https://nic.tr/forms/eng/policies.pdf
// https://nic.tr/index.php?USRACTN=PRICELST
tr
av.tr
bbs.tr
bel.tr
biz.tr
com.tr
dr.tr
edu.tr
gen.tr
gov.tr
info.tr
mil.tr
k12.tr
kep.tr
name.tr
net.tr
org.tr
pol.tr
tel.tr
tsk.tr
tv.tr
web.tr
// Used by Northern Cyprus
nc.tr
// Used by government agencies of Northern Cyprus
gov.nc.tr

// tt : http://www.nic.tt/
tt
co.tt
com.tt
org.tt
net.tt
biz.tt
info.tt
pro.tt
int.tt
coop.tt
jobs.tt
mobi.tt
travel.tt
museum.tt
aero.tt
name.tt
gov.tt
edu.tt

// tv : https://en.wikipedia.org/wiki/.tv
// Not listing any 2LDs as reserved since none seem to exist in practice,
// Wikipedia notwithstanding.
tv

// tw : https://en.wikipedia.org/wiki/.tw
tw
edu.tw
gov.tw
mil.tw
com.tw
net.tw
org.tw
idv.tw
game.tw
ebiz.tw
club.tw
\u7DB2\u8DEF.tw
\u7D44\u7E54.tw
\u5546\u696D.tw

// tz : http://www.tznic.or.tz/index.php/domains
// Submitted by registry <manager@tznic.or.tz>
tz
ac.tz
co.tz
go.tz
hotel.tz
info.tz
me.tz
mil.tz
mobi.tz
ne.tz
or.tz
sc.tz
tv.tz

// ua : https://hostmaster.ua/policy/?ua
// Submitted by registry <dk@cctld.ua>
ua
// ua 2LD
com.ua
edu.ua
gov.ua
in.ua
net.ua
org.ua
// ua geographic names
// https://hostmaster.ua/2ld/
cherkassy.ua
cherkasy.ua
chernigov.ua
chernihiv.ua
chernivtsi.ua
chernovtsy.ua
ck.ua
cn.ua
cr.ua
crimea.ua
cv.ua
dn.ua
dnepropetrovsk.ua
dnipropetrovsk.ua
donetsk.ua
dp.ua
if.ua
ivano-frankivsk.ua
kh.ua
kharkiv.ua
kharkov.ua
kherson.ua
khmelnitskiy.ua
khmelnytskyi.ua
kiev.ua
kirovograd.ua
km.ua
kr.ua
kropyvnytskyi.ua
krym.ua
ks.ua
kv.ua
kyiv.ua
lg.ua
lt.ua
lugansk.ua
luhansk.ua
lutsk.ua
lv.ua
lviv.ua
mk.ua
mykolaiv.ua
nikolaev.ua
od.ua
odesa.ua
odessa.ua
pl.ua
poltava.ua
rivne.ua
rovno.ua
rv.ua
sb.ua
sebastopol.ua
sevastopol.ua
sm.ua
sumy.ua
te.ua
ternopil.ua
uz.ua
uzhgorod.ua
uzhhorod.ua
vinnica.ua
vinnytsia.ua
vn.ua
volyn.ua
yalta.ua
zakarpattia.ua
zaporizhzhe.ua
zaporizhzhia.ua
zhitomir.ua
zhytomyr.ua
zp.ua
zt.ua

// ug : https://www.registry.co.ug/
ug
co.ug
or.ug
ac.ug
sc.ug
go.ug
ne.ug
com.ug
org.ug

// uk : https://en.wikipedia.org/wiki/.uk
// Submitted by registry <Michael.Daly@nominet.org.uk>
uk
ac.uk
co.uk
gov.uk
ltd.uk
me.uk
net.uk
nhs.uk
org.uk
plc.uk
police.uk
*.sch.uk

// us : https://en.wikipedia.org/wiki/.us
us
dni.us
fed.us
isa.us
kids.us
nsn.us
// us geographic names
ak.us
al.us
ar.us
as.us
az.us
ca.us
co.us
ct.us
dc.us
de.us
fl.us
ga.us
gu.us
hi.us
ia.us
id.us
il.us
in.us
ks.us
ky.us
la.us
ma.us
md.us
me.us
mi.us
mn.us
mo.us
ms.us
mt.us
nc.us
nd.us
ne.us
nh.us
nj.us
nm.us
nv.us
ny.us
oh.us
ok.us
or.us
pa.us
pr.us
ri.us
sc.us
sd.us
tn.us
tx.us
ut.us
vi.us
vt.us
va.us
wa.us
wi.us
wv.us
wy.us
// The registrar notes several more specific domains available in each state,
// such as state.*.us, dst.*.us, etc., but resolution of these is somewhat
// haphazard; in some states these domains resolve as addresses, while in others
// only subdomains are available, or even nothing at all. We include the
// most common ones where it's clear that different sites are different
// entities.
k12.ak.us
k12.al.us
k12.ar.us
k12.as.us
k12.az.us
k12.ca.us
k12.co.us
k12.ct.us
k12.dc.us
k12.fl.us
k12.ga.us
k12.gu.us
// k12.hi.us  Bug 614565 - Hawaii has a state-wide DOE login
k12.ia.us
k12.id.us
k12.il.us
k12.in.us
k12.ks.us
k12.ky.us
k12.la.us
k12.ma.us
k12.md.us
k12.me.us
k12.mi.us
k12.mn.us
k12.mo.us
k12.ms.us
k12.mt.us
k12.nc.us
// k12.nd.us  Bug 1028347 - Removed at request of Travis Rosso <trossow@nd.gov>
k12.ne.us
k12.nh.us
k12.nj.us
k12.nm.us
k12.nv.us
k12.ny.us
k12.oh.us
k12.ok.us
k12.or.us
k12.pa.us
k12.pr.us
// k12.ri.us  Removed at request of Kim Cournoyer <netsupport@staff.ri.net>
k12.sc.us
// k12.sd.us  Bug 934131 - Removed at request of James Booze <James.Booze@k12.sd.us>
k12.tn.us
k12.tx.us
k12.ut.us
k12.vi.us
k12.vt.us
k12.va.us
k12.wa.us
k12.wi.us
// k12.wv.us  Bug 947705 - Removed at request of Verne Britton <verne@wvnet.edu>
k12.wy.us
cc.ak.us
cc.al.us
cc.ar.us
cc.as.us
cc.az.us
cc.ca.us
cc.co.us
cc.ct.us
cc.dc.us
cc.de.us
cc.fl.us
cc.ga.us
cc.gu.us
cc.hi.us
cc.ia.us
cc.id.us
cc.il.us
cc.in.us
cc.ks.us
cc.ky.us
cc.la.us
cc.ma.us
cc.md.us
cc.me.us
cc.mi.us
cc.mn.us
cc.mo.us
cc.ms.us
cc.mt.us
cc.nc.us
cc.nd.us
cc.ne.us
cc.nh.us
cc.nj.us
cc.nm.us
cc.nv.us
cc.ny.us
cc.oh.us
cc.ok.us
cc.or.us
cc.pa.us
cc.pr.us
cc.ri.us
cc.sc.us
cc.sd.us
cc.tn.us
cc.tx.us
cc.ut.us
cc.vi.us
cc.vt.us
cc.va.us
cc.wa.us
cc.wi.us
cc.wv.us
cc.wy.us
lib.ak.us
lib.al.us
lib.ar.us
lib.as.us
lib.az.us
lib.ca.us
lib.co.us
lib.ct.us
lib.dc.us
// lib.de.us  Issue #243 - Moved to Private section at request of Ed Moore <Ed.Moore@lib.de.us>
lib.fl.us
lib.ga.us
lib.gu.us
lib.hi.us
lib.ia.us
lib.id.us
lib.il.us
lib.in.us
lib.ks.us
lib.ky.us
lib.la.us
lib.ma.us
lib.md.us
lib.me.us
lib.mi.us
lib.mn.us
lib.mo.us
lib.ms.us
lib.mt.us
lib.nc.us
lib.nd.us
lib.ne.us
lib.nh.us
lib.nj.us
lib.nm.us
lib.nv.us
lib.ny.us
lib.oh.us
lib.ok.us
lib.or.us
lib.pa.us
lib.pr.us
lib.ri.us
lib.sc.us
lib.sd.us
lib.tn.us
lib.tx.us
lib.ut.us
lib.vi.us
lib.vt.us
lib.va.us
lib.wa.us
lib.wi.us
// lib.wv.us  Bug 941670 - Removed at request of Larry W Arnold <arnold@wvlc.lib.wv.us>
lib.wy.us
// k12.ma.us contains school districts in Massachusetts. The 4LDs are
//  managed independently except for private (PVT), charter (CHTR) and
//  parochial (PAROCH) schools.  Those are delegated directly to the
//  5LD operators.   <k12-ma-hostmaster _ at _ rsuc.gweep.net>
pvt.k12.ma.us
chtr.k12.ma.us
paroch.k12.ma.us
// Merit Network, Inc. maintains the registry for =~ /(k12|cc|lib).mi.us/ and the following
//    see also: http://domreg.merit.edu
//    see also: whois -h whois.domreg.merit.edu help
ann-arbor.mi.us
cog.mi.us
dst.mi.us
eaton.mi.us
gen.mi.us
mus.mi.us
tec.mi.us
washtenaw.mi.us

// uy : http://www.nic.org.uy/
uy
com.uy
edu.uy
gub.uy
mil.uy
net.uy
org.uy

// uz : http://www.reg.uz/
uz
co.uz
com.uz
net.uz
org.uz

// va : https://en.wikipedia.org/wiki/.va
va

// vc : https://en.wikipedia.org/wiki/.vc
// Submitted by registry <kshah@ca.afilias.info>
vc
com.vc
net.vc
org.vc
gov.vc
mil.vc
edu.vc

// ve : https://registro.nic.ve/
// Submitted by registry nic@nic.ve and nicve@conatel.gob.ve
ve
arts.ve
bib.ve
co.ve
com.ve
e12.ve
edu.ve
firm.ve
gob.ve
gov.ve
info.ve
int.ve
mil.ve
net.ve
nom.ve
org.ve
rar.ve
rec.ve
store.ve
tec.ve
web.ve

// vg : https://en.wikipedia.org/wiki/.vg
vg

// vi : http://www.nic.vi/newdomainform.htm
// http://www.nic.vi/Domain_Rules/body_domain_rules.html indicates some other
// TLDs are "reserved", such as edu.vi and gov.vi, but doesn't actually say they
// are available for registration (which they do not seem to be).
vi
co.vi
com.vi
k12.vi
net.vi
org.vi

// vn : https://www.vnnic.vn/en/domain/cctld-vn
// https://vnnic.vn/sites/default/files/tailieu/vn.cctld.domains.txt
vn
ac.vn
ai.vn
biz.vn
com.vn
edu.vn
gov.vn
health.vn
id.vn
info.vn
int.vn
io.vn
name.vn
net.vn
org.vn
pro.vn

// vn geographical names
angiang.vn
bacgiang.vn
backan.vn
baclieu.vn
bacninh.vn
baria-vungtau.vn
bentre.vn
binhdinh.vn
binhduong.vn
binhphuoc.vn
binhthuan.vn
camau.vn
cantho.vn
caobang.vn
daklak.vn
daknong.vn
danang.vn
dienbien.vn
dongnai.vn
dongthap.vn
gialai.vn
hagiang.vn
haiduong.vn
haiphong.vn
hanam.vn
hanoi.vn
hatinh.vn
haugiang.vn
hoabinh.vn
hungyen.vn
khanhhoa.vn
kiengiang.vn
kontum.vn
laichau.vn
lamdong.vn
langson.vn
laocai.vn
longan.vn
namdinh.vn
nghean.vn
ninhbinh.vn
ninhthuan.vn
phutho.vn
phuyen.vn
quangbinh.vn
quangnam.vn
quangngai.vn
quangninh.vn
quangtri.vn
soctrang.vn
sonla.vn
tayninh.vn
thaibinh.vn
thainguyen.vn
thanhhoa.vn
thanhphohochiminh.vn
thuathienhue.vn
tiengiang.vn
travinh.vn
tuyenquang.vn
vinhlong.vn
vinhphuc.vn
yenbai.vn

// vu : https://en.wikipedia.org/wiki/.vu
// http://www.vunic.vu/
vu
com.vu
edu.vu
net.vu
org.vu

// wf : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
wf

// ws : https://en.wikipedia.org/wiki/.ws
// http://samoanic.ws/index.dhtml
ws
com.ws
net.ws
org.ws
gov.ws
edu.ws

// yt : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
yt

// IDN ccTLDs
// When submitting patches, please maintain a sort by ISO 3166 ccTLD, then
// U-label, and follow this format:
// // A-Label ("<Latin renderings>", <language name>[, variant info]) : <ISO 3166 ccTLD>
// // [sponsoring org]
// U-Label

// xn--mgbaam7a8h ("Emerat", Arabic) : AE
// http://nic.ae/english/arabicdomain/rules.jsp
\u0627\u0645\u0627\u0631\u0627\u062A

// xn--y9a3aq ("hye", Armenian) : AM
// ISOC AM (operated by .am Registry)
\u0570\u0561\u0575

// xn--54b7fta0cc ("Bangla", Bangla) : BD
\u09AC\u09BE\u0982\u09B2\u09BE

// xn--90ae ("bg", Bulgarian) : BG
\u0431\u0433

// xn--mgbcpq6gpa1a ("albahrain", Arabic) : BH
\u0627\u0644\u0628\u062D\u0631\u064A\u0646

// xn--90ais ("bel", Belarusian/Russian Cyrillic) : BY
// Operated by .by registry
\u0431\u0435\u043B

// xn--fiqs8s ("Zhongguo/China", Chinese, Simplified) : CN
// CNNIC
// http://cnnic.cn/html/Dir/2005/10/11/3218.htm
\u4E2D\u56FD

// xn--fiqz9s ("Zhongguo/China", Chinese, Traditional) : CN
// CNNIC
// http://cnnic.cn/html/Dir/2005/10/11/3218.htm
\u4E2D\u570B

// xn--lgbbat1ad8j ("Algeria/Al Jazair", Arabic) : DZ
\u0627\u0644\u062C\u0632\u0627\u0626\u0631

// xn--wgbh1c ("Egypt/Masr", Arabic) : EG
// http://www.dotmasr.eg/
\u0645\u0635\u0631

// xn--e1a4c ("eu", Cyrillic) : EU
// https://eurid.eu
\u0435\u044E

// xn--qxa6a ("eu", Greek) : EU
// https://eurid.eu
\u03B5\u03C5

// xn--mgbah1a3hjkrd ("Mauritania", Arabic) : MR
\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627

// xn--node ("ge", Georgian Mkhedruli) : GE
\u10D2\u10D4

// xn--qxam ("el", Greek) : GR
// Hellenic Ministry of Infrastructure, Transport, and Networks
\u03B5\u03BB

// xn--j6w193g ("Hong Kong", Chinese) : HK
// https://www.hkirc.hk
// Submitted by registry <hk.tech@hkirc.hk>
// https://www.hkirc.hk/content.jsp?id=30#!/34
\u9999\u6E2F
\u516C\u53F8.\u9999\u6E2F
\u6559\u80B2.\u9999\u6E2F
\u653F\u5E9C.\u9999\u6E2F
\u500B\u4EBA.\u9999\u6E2F
\u7DB2\u7D61.\u9999\u6E2F
\u7D44\u7E54.\u9999\u6E2F

// xn--2scrj9c ("Bharat", Kannada) : IN
// India
\u0CAD\u0CBE\u0CB0\u0CA4

// xn--3hcrj9c ("Bharat", Oriya) : IN
// India
\u0B2D\u0B3E\u0B30\u0B24

// xn--45br5cyl ("Bharatam", Assamese) : IN
// India
\u09AD\u09BE\u09F0\u09A4

// xn--h2breg3eve ("Bharatam", Sanskrit) : IN
// India
\u092D\u093E\u0930\u0924\u092E\u094D

// xn--h2brj9c8c ("Bharot", Santali) : IN
// India
\u092D\u093E\u0930\u094B\u0924

// xn--mgbgu82a ("Bharat", Sindhi) : IN
// India
\u0680\u0627\u0631\u062A

// xn--rvc1e0am3e ("Bharatam", Malayalam) : IN
// India
\u0D2D\u0D3E\u0D30\u0D24\u0D02

// xn--h2brj9c ("Bharat", Devanagari) : IN
// India
\u092D\u093E\u0930\u0924

// xn--mgbbh1a ("Bharat", Kashmiri) : IN
// India
\u0628\u0627\u0631\u062A

// xn--mgbbh1a71e ("Bharat", Arabic) : IN
// India
\u0628\u06BE\u0627\u0631\u062A

// xn--fpcrj9c3d ("Bharat", Telugu) : IN
// India
\u0C2D\u0C3E\u0C30\u0C24\u0C4D

// xn--gecrj9c ("Bharat", Gujarati) : IN
// India
\u0AAD\u0ABE\u0AB0\u0AA4

// xn--s9brj9c ("Bharat", Gurmukhi) : IN
// India
\u0A2D\u0A3E\u0A30\u0A24

// xn--45brj9c ("Bharat", Bengali) : IN
// India
\u09AD\u09BE\u09B0\u09A4

// xn--xkc2dl3a5ee0h ("India", Tamil) : IN
// India
\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE

// xn--mgba3a4f16a ("Iran", Persian) : IR
\u0627\u06CC\u0631\u0627\u0646

// xn--mgba3a4fra ("Iran", Arabic) : IR
\u0627\u064A\u0631\u0627\u0646

// xn--mgbtx2b ("Iraq", Arabic) : IQ
// Communications and Media Commission
\u0639\u0631\u0627\u0642

// xn--mgbayh7gpa ("al-Ordon", Arabic) : JO
// National Information Technology Center (NITC)
// Royal Scientific Society, Al-Jubeiha
\u0627\u0644\u0627\u0631\u062F\u0646

// xn--3e0b707e ("Republic of Korea", Hangul) : KR
\uD55C\uAD6D

// xn--80ao21a ("Kaz", Kazakh) : KZ
\u049B\u0430\u0437

// xn--q7ce6a ("Lao", Lao) : LA
\u0EA5\u0EB2\u0EA7

// xn--fzc2c9e2c ("Lanka", Sinhalese-Sinhala) : LK
// https://nic.lk
\u0DBD\u0D82\u0D9A\u0DCF

// xn--xkc2al3hye2a ("Ilangai", Tamil) : LK
// https://nic.lk
\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8

// xn--mgbc0a9azcg ("Morocco/al-Maghrib", Arabic) : MA
\u0627\u0644\u0645\u063A\u0631\u0628

// xn--d1alf ("mkd", Macedonian) : MK
// MARnet
\u043C\u043A\u0434

// xn--l1acc ("mon", Mongolian) : MN
\u043C\u043E\u043D

// xn--mix891f ("Macao", Chinese, Traditional) : MO
// MONIC / HNET Asia (Registry Operator for .mo)
\u6FB3\u9580

// xn--mix082f ("Macao", Chinese, Simplified) : MO
\u6FB3\u95E8

// xn--mgbx4cd0ab ("Malaysia", Malay) : MY
\u0645\u0644\u064A\u0633\u064A\u0627

// xn--mgb9awbf ("Oman", Arabic) : OM
\u0639\u0645\u0627\u0646

// xn--mgbai9azgqp6j ("Pakistan", Urdu/Arabic) : PK
\u067E\u0627\u06A9\u0633\u062A\u0627\u0646

// xn--mgbai9a5eva00b ("Pakistan", Urdu/Arabic, variant) : PK
\u067E\u0627\u0643\u0633\u062A\u0627\u0646

// xn--ygbi2ammx ("Falasteen", Arabic) : PS
// The Palestinian National Internet Naming Authority (PNINA)
// http://www.pnina.ps
\u0641\u0644\u0633\u0637\u064A\u0646

// xn--90a3ac ("srb", Cyrillic) : RS
// https://www.rnids.rs/en/domains/national-domains
\u0441\u0440\u0431
\u043F\u0440.\u0441\u0440\u0431
\u043E\u0440\u0433.\u0441\u0440\u0431
\u043E\u0431\u0440.\u0441\u0440\u0431
\u043E\u0434.\u0441\u0440\u0431
\u0443\u043F\u0440.\u0441\u0440\u0431
\u0430\u043A.\u0441\u0440\u0431

// xn--p1ai ("rf", Russian-Cyrillic) : RU
// https://cctld.ru/files/pdf/docs/en/rules_ru-rf.pdf
// Submitted by George Georgievsky <gug@cctld.ru>
\u0440\u0444

// xn--wgbl6a ("Qatar", Arabic) : QA
// http://www.ict.gov.qa/
\u0642\u0637\u0631

// xn--mgberp4a5d4ar ("AlSaudiah", Arabic) : SA
// http://www.nic.net.sa/
\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629

// xn--mgberp4a5d4a87g ("AlSaudiah", Arabic, variant)  : SA
\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u0629

// xn--mgbqly7c0a67fbc ("AlSaudiah", Arabic, variant) : SA
\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u06C3

// xn--mgbqly7cvafr ("AlSaudiah", Arabic, variant) : SA
\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0647

// xn--mgbpl2fh ("sudan", Arabic) : SD
// Operated by .sd registry
\u0633\u0648\u062F\u0627\u0646

// xn--yfro4i67o Singapore ("Singapore", Chinese) : SG
\u65B0\u52A0\u5761

// xn--clchc0ea0b2g2a9gcd ("Singapore", Tamil) : SG
\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD

// xn--ogbpf8fl ("Syria", Arabic) : SY
\u0633\u0648\u0631\u064A\u0629

// xn--mgbtf8fl ("Syria", Arabic, variant) : SY
\u0633\u0648\u0631\u064A\u0627

// xn--o3cw4h ("Thai", Thai) : TH
// http://www.thnic.co.th
\u0E44\u0E17\u0E22
\u0E28\u0E36\u0E01\u0E29\u0E32.\u0E44\u0E17\u0E22
\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08.\u0E44\u0E17\u0E22
\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25.\u0E44\u0E17\u0E22
\u0E17\u0E2B\u0E32\u0E23.\u0E44\u0E17\u0E22
\u0E40\u0E19\u0E47\u0E15.\u0E44\u0E17\u0E22
\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23.\u0E44\u0E17\u0E22

// xn--pgbs0dh ("Tunisia", Arabic) : TN
// http://nic.tn
\u062A\u0648\u0646\u0633

// xn--kpry57d ("Taiwan", Chinese, Traditional) : TW
// http://www.twnic.net/english/dn/dn_07a.htm
\u53F0\u7063

// xn--kprw13d ("Taiwan", Chinese, Simplified) : TW
// http://www.twnic.net/english/dn/dn_07a.htm
\u53F0\u6E7E

// xn--nnx388a ("Taiwan", Chinese, variant) : TW
\u81FA\u7063

// xn--j1amh ("ukr", Cyrillic) : UA
\u0443\u043A\u0440

// xn--mgb2ddes ("AlYemen", Arabic) : YE
\u0627\u0644\u064A\u0645\u0646

// xxx : http://icmregistry.com
xxx

// ye : http://www.y.net.ye/services/domain_name.htm
ye
com.ye
edu.ye
gov.ye
net.ye
mil.ye
org.ye

// za : https://www.zadna.org.za/content/page/domain-information/
ac.za
agric.za
alt.za
co.za
edu.za
gov.za
grondar.za
law.za
mil.za
net.za
ngo.za
nic.za
nis.za
nom.za
org.za
school.za
tm.za
web.za

// zm : https://zicta.zm/
// Submitted by registry <info@zicta.zm>
zm
ac.zm
biz.zm
co.zm
com.zm
edu.zm
gov.zm
info.zm
mil.zm
net.zm
org.zm
sch.zm

// zw : https://www.potraz.gov.zw/
// Confirmed by registry <bmtengwa@potraz.gov.zw> 2017-01-25
zw
ac.zw
co.zw
gov.zw
mil.zw
org.zw


// newGTLDs

// List of new gTLDs imported from https://www.icann.org/resources/registries/gtlds/v2/gtlds.json on 2023-10-20T15:11:50Z
// This list is auto-generated, don't edit it manually.
// aaa : American Automobile Association, Inc.
// https://www.iana.org/domains/root/db/aaa.html
aaa

// aarp : AARP
// https://www.iana.org/domains/root/db/aarp.html
aarp

// abb : ABB Ltd
// https://www.iana.org/domains/root/db/abb.html
abb

// abbott : Abbott Laboratories, Inc.
// https://www.iana.org/domains/root/db/abbott.html
abbott

// abbvie : AbbVie Inc.
// https://www.iana.org/domains/root/db/abbvie.html
abbvie

// abc : Disney Enterprises, Inc.
// https://www.iana.org/domains/root/db/abc.html
abc

// able : Able Inc.
// https://www.iana.org/domains/root/db/able.html
able

// abogado : Registry Services, LLC
// https://www.iana.org/domains/root/db/abogado.html
abogado

// abudhabi : Abu Dhabi Systems and Information Centre
// https://www.iana.org/domains/root/db/abudhabi.html
abudhabi

// academy : Binky Moon, LLC
// https://www.iana.org/domains/root/db/academy.html
academy

// accenture : Accenture plc
// https://www.iana.org/domains/root/db/accenture.html
accenture

// accountant : dot Accountant Limited
// https://www.iana.org/domains/root/db/accountant.html
accountant

// accountants : Binky Moon, LLC
// https://www.iana.org/domains/root/db/accountants.html
accountants

// aco : ACO Severin Ahlmann GmbH & Co. KG
// https://www.iana.org/domains/root/db/aco.html
aco

// actor : Dog Beach, LLC
// https://www.iana.org/domains/root/db/actor.html
actor

// ads : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/ads.html
ads

// adult : ICM Registry AD LLC
// https://www.iana.org/domains/root/db/adult.html
adult

// aeg : Aktiebolaget Electrolux
// https://www.iana.org/domains/root/db/aeg.html
aeg

// aetna : Aetna Life Insurance Company
// https://www.iana.org/domains/root/db/aetna.html
aetna

// afl : Australian Football League
// https://www.iana.org/domains/root/db/afl.html
afl

// africa : ZA Central Registry NPC trading as Registry.Africa
// https://www.iana.org/domains/root/db/africa.html
africa

// agakhan : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/agakhan.html
agakhan

// agency : Binky Moon, LLC
// https://www.iana.org/domains/root/db/agency.html
agency

// aig : American International Group, Inc.
// https://www.iana.org/domains/root/db/aig.html
aig

// airbus : Airbus S.A.S.
// https://www.iana.org/domains/root/db/airbus.html
airbus

// airforce : Dog Beach, LLC
// https://www.iana.org/domains/root/db/airforce.html
airforce

// airtel : Bharti Airtel Limited
// https://www.iana.org/domains/root/db/airtel.html
airtel

// akdn : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/akdn.html
akdn

// alibaba : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/alibaba.html
alibaba

// alipay : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/alipay.html
alipay

// allfinanz : Allfinanz Deutsche Verm\xF6gensberatung Aktiengesellschaft
// https://www.iana.org/domains/root/db/allfinanz.html
allfinanz

// allstate : Allstate Fire and Casualty Insurance Company
// https://www.iana.org/domains/root/db/allstate.html
allstate

// ally : Ally Financial Inc.
// https://www.iana.org/domains/root/db/ally.html
ally

// alsace : Region Grand Est
// https://www.iana.org/domains/root/db/alsace.html
alsace

// alstom : ALSTOM
// https://www.iana.org/domains/root/db/alstom.html
alstom

// amazon : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/amazon.html
amazon

// americanexpress : American Express Travel Related Services Company, Inc.
// https://www.iana.org/domains/root/db/americanexpress.html
americanexpress

// americanfamily : AmFam, Inc.
// https://www.iana.org/domains/root/db/americanfamily.html
americanfamily

// amex : American Express Travel Related Services Company, Inc.
// https://www.iana.org/domains/root/db/amex.html
amex

// amfam : AmFam, Inc.
// https://www.iana.org/domains/root/db/amfam.html
amfam

// amica : Amica Mutual Insurance Company
// https://www.iana.org/domains/root/db/amica.html
amica

// amsterdam : Gemeente Amsterdam
// https://www.iana.org/domains/root/db/amsterdam.html
amsterdam

// analytics : Campus IP LLC
// https://www.iana.org/domains/root/db/analytics.html
analytics

// android : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/android.html
android

// anquan : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/anquan.html
anquan

// anz : Australia and New Zealand Banking Group Limited
// https://www.iana.org/domains/root/db/anz.html
anz

// aol : Oath Inc.
// https://www.iana.org/domains/root/db/aol.html
aol

// apartments : Binky Moon, LLC
// https://www.iana.org/domains/root/db/apartments.html
apartments

// app : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/app.html
app

// apple : Apple Inc.
// https://www.iana.org/domains/root/db/apple.html
apple

// aquarelle : Aquarelle.com
// https://www.iana.org/domains/root/db/aquarelle.html
aquarelle

// arab : League of Arab States
// https://www.iana.org/domains/root/db/arab.html
arab

// aramco : Aramco Services Company
// https://www.iana.org/domains/root/db/aramco.html
aramco

// archi : Identity Digital Limited
// https://www.iana.org/domains/root/db/archi.html
archi

// army : Dog Beach, LLC
// https://www.iana.org/domains/root/db/army.html
army

// art : UK Creative Ideas Limited
// https://www.iana.org/domains/root/db/art.html
art

// arte : Association Relative \xE0 la T\xE9l\xE9vision Europ\xE9enne G.E.I.E.
// https://www.iana.org/domains/root/db/arte.html
arte

// asda : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/asda.html
asda

// associates : Binky Moon, LLC
// https://www.iana.org/domains/root/db/associates.html
associates

// athleta : The Gap, Inc.
// https://www.iana.org/domains/root/db/athleta.html
athleta

// attorney : Dog Beach, LLC
// https://www.iana.org/domains/root/db/attorney.html
attorney

// auction : Dog Beach, LLC
// https://www.iana.org/domains/root/db/auction.html
auction

// audi : AUDI Aktiengesellschaft
// https://www.iana.org/domains/root/db/audi.html
audi

// audible : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/audible.html
audible

// audio : XYZ.COM LLC
// https://www.iana.org/domains/root/db/audio.html
audio

// auspost : Australian Postal Corporation
// https://www.iana.org/domains/root/db/auspost.html
auspost

// author : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/author.html
author

// auto : XYZ.COM LLC
// https://www.iana.org/domains/root/db/auto.html
auto

// autos : XYZ.COM LLC
// https://www.iana.org/domains/root/db/autos.html
autos

// avianca : Avianca Inc.
// https://www.iana.org/domains/root/db/avianca.html
avianca

// aws : AWS Registry LLC
// https://www.iana.org/domains/root/db/aws.html
aws

// axa : AXA Group Operations SAS
// https://www.iana.org/domains/root/db/axa.html
axa

// azure : Microsoft Corporation
// https://www.iana.org/domains/root/db/azure.html
azure

// baby : XYZ.COM LLC
// https://www.iana.org/domains/root/db/baby.html
baby

// baidu : Baidu, Inc.
// https://www.iana.org/domains/root/db/baidu.html
baidu

// banamex : Citigroup Inc.
// https://www.iana.org/domains/root/db/banamex.html
banamex

// bananarepublic : The Gap, Inc.
// https://www.iana.org/domains/root/db/bananarepublic.html
bananarepublic

// band : Dog Beach, LLC
// https://www.iana.org/domains/root/db/band.html
band

// bank : fTLD Registry Services LLC
// https://www.iana.org/domains/root/db/bank.html
bank

// bar : Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable
// https://www.iana.org/domains/root/db/bar.html
bar

// barcelona : Municipi de Barcelona
// https://www.iana.org/domains/root/db/barcelona.html
barcelona

// barclaycard : Barclays Bank PLC
// https://www.iana.org/domains/root/db/barclaycard.html
barclaycard

// barclays : Barclays Bank PLC
// https://www.iana.org/domains/root/db/barclays.html
barclays

// barefoot : Gallo Vineyards, Inc.
// https://www.iana.org/domains/root/db/barefoot.html
barefoot

// bargains : Binky Moon, LLC
// https://www.iana.org/domains/root/db/bargains.html
bargains

// baseball : MLB Advanced Media DH, LLC
// https://www.iana.org/domains/root/db/baseball.html
baseball

// basketball : F\xE9d\xE9ration Internationale de Basketball (FIBA)
// https://www.iana.org/domains/root/db/basketball.html
basketball

// bauhaus : Werkhaus GmbH
// https://www.iana.org/domains/root/db/bauhaus.html
bauhaus

// bayern : Bayern Connect GmbH
// https://www.iana.org/domains/root/db/bayern.html
bayern

// bbc : British Broadcasting Corporation
// https://www.iana.org/domains/root/db/bbc.html
bbc

// bbt : BB&T Corporation
// https://www.iana.org/domains/root/db/bbt.html
bbt

// bbva : BANCO BILBAO VIZCAYA ARGENTARIA, S.A.
// https://www.iana.org/domains/root/db/bbva.html
bbva

// bcg : The Boston Consulting Group, Inc.
// https://www.iana.org/domains/root/db/bcg.html
bcg

// bcn : Municipi de Barcelona
// https://www.iana.org/domains/root/db/bcn.html
bcn

// beats : Beats Electronics, LLC
// https://www.iana.org/domains/root/db/beats.html
beats

// beauty : XYZ.COM LLC
// https://www.iana.org/domains/root/db/beauty.html
beauty

// beer : Registry Services, LLC
// https://www.iana.org/domains/root/db/beer.html
beer

// bentley : Bentley Motors Limited
// https://www.iana.org/domains/root/db/bentley.html
bentley

// berlin : dotBERLIN GmbH & Co. KG
// https://www.iana.org/domains/root/db/berlin.html
berlin

// best : BestTLD Pty Ltd
// https://www.iana.org/domains/root/db/best.html
best

// bestbuy : BBY Solutions, Inc.
// https://www.iana.org/domains/root/db/bestbuy.html
bestbuy

// bet : Identity Digital Limited
// https://www.iana.org/domains/root/db/bet.html
bet

// bharti : Bharti Enterprises (Holding) Private Limited
// https://www.iana.org/domains/root/db/bharti.html
bharti

// bible : American Bible Society
// https://www.iana.org/domains/root/db/bible.html
bible

// bid : dot Bid Limited
// https://www.iana.org/domains/root/db/bid.html
bid

// bike : Binky Moon, LLC
// https://www.iana.org/domains/root/db/bike.html
bike

// bing : Microsoft Corporation
// https://www.iana.org/domains/root/db/bing.html
bing

// bingo : Binky Moon, LLC
// https://www.iana.org/domains/root/db/bingo.html
bingo

// bio : Identity Digital Limited
// https://www.iana.org/domains/root/db/bio.html
bio

// black : Identity Digital Limited
// https://www.iana.org/domains/root/db/black.html
black

// blackfriday : Registry Services, LLC
// https://www.iana.org/domains/root/db/blackfriday.html
blackfriday

// blockbuster : Dish DBS Corporation
// https://www.iana.org/domains/root/db/blockbuster.html
blockbuster

// blog : Knock Knock WHOIS There, LLC
// https://www.iana.org/domains/root/db/blog.html
blog

// bloomberg : Bloomberg IP Holdings LLC
// https://www.iana.org/domains/root/db/bloomberg.html
bloomberg

// blue : Identity Digital Limited
// https://www.iana.org/domains/root/db/blue.html
blue

// bms : Bristol-Myers Squibb Company
// https://www.iana.org/domains/root/db/bms.html
bms

// bmw : Bayerische Motoren Werke Aktiengesellschaft
// https://www.iana.org/domains/root/db/bmw.html
bmw

// bnpparibas : BNP Paribas
// https://www.iana.org/domains/root/db/bnpparibas.html
bnpparibas

// boats : XYZ.COM LLC
// https://www.iana.org/domains/root/db/boats.html
boats

// boehringer : Boehringer Ingelheim International GmbH
// https://www.iana.org/domains/root/db/boehringer.html
boehringer

// bofa : Bank of America Corporation
// https://www.iana.org/domains/root/db/bofa.html
bofa

// bom : N\xFAcleo de Informa\xE7\xE3o e Coordena\xE7\xE3o do Ponto BR - NIC.br
// https://www.iana.org/domains/root/db/bom.html
bom

// bond : ShortDot SA
// https://www.iana.org/domains/root/db/bond.html
bond

// boo : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/boo.html
boo

// book : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/book.html
book

// booking : Booking.com B.V.
// https://www.iana.org/domains/root/db/booking.html
booking

// bosch : Robert Bosch GMBH
// https://www.iana.org/domains/root/db/bosch.html
bosch

// bostik : Bostik SA
// https://www.iana.org/domains/root/db/bostik.html
bostik

// boston : Registry Services, LLC
// https://www.iana.org/domains/root/db/boston.html
boston

// bot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/bot.html
bot

// boutique : Binky Moon, LLC
// https://www.iana.org/domains/root/db/boutique.html
boutique

// box : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/box.html
box

// bradesco : Banco Bradesco S.A.
// https://www.iana.org/domains/root/db/bradesco.html
bradesco

// bridgestone : Bridgestone Corporation
// https://www.iana.org/domains/root/db/bridgestone.html
bridgestone

// broadway : Celebrate Broadway, Inc.
// https://www.iana.org/domains/root/db/broadway.html
broadway

// broker : Dog Beach, LLC
// https://www.iana.org/domains/root/db/broker.html
broker

// brother : Brother Industries, Ltd.
// https://www.iana.org/domains/root/db/brother.html
brother

// brussels : DNS.be vzw
// https://www.iana.org/domains/root/db/brussels.html
brussels

// build : Plan Bee LLC
// https://www.iana.org/domains/root/db/build.html
build

// builders : Binky Moon, LLC
// https://www.iana.org/domains/root/db/builders.html
builders

// business : Binky Moon, LLC
// https://www.iana.org/domains/root/db/business.html
business

// buy : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/buy.html
buy

// buzz : DOTSTRATEGY CO.
// https://www.iana.org/domains/root/db/buzz.html
buzz

// bzh : Association www.bzh
// https://www.iana.org/domains/root/db/bzh.html
bzh

// cab : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cab.html
cab

// cafe : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cafe.html
cafe

// cal : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/cal.html
cal

// call : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/call.html
call

// calvinklein : PVH gTLD Holdings LLC
// https://www.iana.org/domains/root/db/calvinklein.html
calvinklein

// cam : Cam Connecting SARL
// https://www.iana.org/domains/root/db/cam.html
cam

// camera : Binky Moon, LLC
// https://www.iana.org/domains/root/db/camera.html
camera

// camp : Binky Moon, LLC
// https://www.iana.org/domains/root/db/camp.html
camp

// canon : Canon Inc.
// https://www.iana.org/domains/root/db/canon.html
canon

// capetown : ZA Central Registry NPC trading as ZA Central Registry
// https://www.iana.org/domains/root/db/capetown.html
capetown

// capital : Binky Moon, LLC
// https://www.iana.org/domains/root/db/capital.html
capital

// capitalone : Capital One Financial Corporation
// https://www.iana.org/domains/root/db/capitalone.html
capitalone

// car : XYZ.COM LLC
// https://www.iana.org/domains/root/db/car.html
car

// caravan : Caravan International, Inc.
// https://www.iana.org/domains/root/db/caravan.html
caravan

// cards : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cards.html
cards

// care : Binky Moon, LLC
// https://www.iana.org/domains/root/db/care.html
care

// career : dotCareer LLC
// https://www.iana.org/domains/root/db/career.html
career

// careers : Binky Moon, LLC
// https://www.iana.org/domains/root/db/careers.html
careers

// cars : XYZ.COM LLC
// https://www.iana.org/domains/root/db/cars.html
cars

// casa : Registry Services, LLC
// https://www.iana.org/domains/root/db/casa.html
casa

// case : Digity, LLC
// https://www.iana.org/domains/root/db/case.html
case

// cash : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cash.html
cash

// casino : Binky Moon, LLC
// https://www.iana.org/domains/root/db/casino.html
casino

// catering : Binky Moon, LLC
// https://www.iana.org/domains/root/db/catering.html
catering

// catholic : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/catholic.html
catholic

// cba : COMMONWEALTH BANK OF AUSTRALIA
// https://www.iana.org/domains/root/db/cba.html
cba

// cbn : The Christian Broadcasting Network, Inc.
// https://www.iana.org/domains/root/db/cbn.html
cbn

// cbre : CBRE, Inc.
// https://www.iana.org/domains/root/db/cbre.html
cbre

// cbs : CBS Domains Inc.
// https://www.iana.org/domains/root/db/cbs.html
cbs

// center : Binky Moon, LLC
// https://www.iana.org/domains/root/db/center.html
center

// ceo : XYZ.COM LLC
// https://www.iana.org/domains/root/db/ceo.html
ceo

// cern : European Organization for Nuclear Research ("CERN")
// https://www.iana.org/domains/root/db/cern.html
cern

// cfa : CFA Institute
// https://www.iana.org/domains/root/db/cfa.html
cfa

// cfd : ShortDot SA
// https://www.iana.org/domains/root/db/cfd.html
cfd

// chanel : Chanel International B.V.
// https://www.iana.org/domains/root/db/chanel.html
chanel

// channel : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/channel.html
channel

// charity : Public Interest Registry
// https://www.iana.org/domains/root/db/charity.html
charity

// chase : JPMorgan Chase Bank, National Association
// https://www.iana.org/domains/root/db/chase.html
chase

// chat : Binky Moon, LLC
// https://www.iana.org/domains/root/db/chat.html
chat

// cheap : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cheap.html
cheap

// chintai : CHINTAI Corporation
// https://www.iana.org/domains/root/db/chintai.html
chintai

// christmas : XYZ.COM LLC
// https://www.iana.org/domains/root/db/christmas.html
christmas

// chrome : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/chrome.html
chrome

// church : Binky Moon, LLC
// https://www.iana.org/domains/root/db/church.html
church

// cipriani : Hotel Cipriani Srl
// https://www.iana.org/domains/root/db/cipriani.html
cipriani

// circle : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/circle.html
circle

// cisco : Cisco Technology, Inc.
// https://www.iana.org/domains/root/db/cisco.html
cisco

// citadel : Citadel Domain LLC
// https://www.iana.org/domains/root/db/citadel.html
citadel

// citi : Citigroup Inc.
// https://www.iana.org/domains/root/db/citi.html
citi

// citic : CITIC Group Corporation
// https://www.iana.org/domains/root/db/citic.html
citic

// city : Binky Moon, LLC
// https://www.iana.org/domains/root/db/city.html
city

// claims : Binky Moon, LLC
// https://www.iana.org/domains/root/db/claims.html
claims

// cleaning : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cleaning.html
cleaning

// click : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/click.html
click

// clinic : Binky Moon, LLC
// https://www.iana.org/domains/root/db/clinic.html
clinic

// clinique : The Est\xE9e Lauder Companies Inc.
// https://www.iana.org/domains/root/db/clinique.html
clinique

// clothing : Binky Moon, LLC
// https://www.iana.org/domains/root/db/clothing.html
clothing

// cloud : Aruba PEC S.p.A.
// https://www.iana.org/domains/root/db/cloud.html
cloud

// club : Registry Services, LLC
// https://www.iana.org/domains/root/db/club.html
club

// clubmed : Club M\xE9diterran\xE9e S.A.
// https://www.iana.org/domains/root/db/clubmed.html
clubmed

// coach : Binky Moon, LLC
// https://www.iana.org/domains/root/db/coach.html
coach

// codes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/codes.html
codes

// coffee : Binky Moon, LLC
// https://www.iana.org/domains/root/db/coffee.html
coffee

// college : XYZ.COM LLC
// https://www.iana.org/domains/root/db/college.html
college

// cologne : dotKoeln GmbH
// https://www.iana.org/domains/root/db/cologne.html
cologne

// comcast : Comcast IP Holdings I, LLC
// https://www.iana.org/domains/root/db/comcast.html
comcast

// commbank : COMMONWEALTH BANK OF AUSTRALIA
// https://www.iana.org/domains/root/db/commbank.html
commbank

// community : Binky Moon, LLC
// https://www.iana.org/domains/root/db/community.html
community

// company : Binky Moon, LLC
// https://www.iana.org/domains/root/db/company.html
company

// compare : Registry Services, LLC
// https://www.iana.org/domains/root/db/compare.html
compare

// computer : Binky Moon, LLC
// https://www.iana.org/domains/root/db/computer.html
computer

// comsec : VeriSign, Inc.
// https://www.iana.org/domains/root/db/comsec.html
comsec

// condos : Binky Moon, LLC
// https://www.iana.org/domains/root/db/condos.html
condos

// construction : Binky Moon, LLC
// https://www.iana.org/domains/root/db/construction.html
construction

// consulting : Dog Beach, LLC
// https://www.iana.org/domains/root/db/consulting.html
consulting

// contact : Dog Beach, LLC
// https://www.iana.org/domains/root/db/contact.html
contact

// contractors : Binky Moon, LLC
// https://www.iana.org/domains/root/db/contractors.html
contractors

// cooking : Registry Services, LLC
// https://www.iana.org/domains/root/db/cooking.html
cooking

// cool : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cool.html
cool

// corsica : Collectivit\xE9 de Corse
// https://www.iana.org/domains/root/db/corsica.html
corsica

// country : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/country.html
country

// coupon : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/coupon.html
coupon

// coupons : Binky Moon, LLC
// https://www.iana.org/domains/root/db/coupons.html
coupons

// courses : Registry Services, LLC
// https://www.iana.org/domains/root/db/courses.html
courses

// cpa : American Institute of Certified Public Accountants
// https://www.iana.org/domains/root/db/cpa.html
cpa

// credit : Binky Moon, LLC
// https://www.iana.org/domains/root/db/credit.html
credit

// creditcard : Binky Moon, LLC
// https://www.iana.org/domains/root/db/creditcard.html
creditcard

// creditunion : DotCooperation LLC
// https://www.iana.org/domains/root/db/creditunion.html
creditunion

// cricket : dot Cricket Limited
// https://www.iana.org/domains/root/db/cricket.html
cricket

// crown : Crown Equipment Corporation
// https://www.iana.org/domains/root/db/crown.html
crown

// crs : Federated Co-operatives Limited
// https://www.iana.org/domains/root/db/crs.html
crs

// cruise : Viking River Cruises (Bermuda) Ltd.
// https://www.iana.org/domains/root/db/cruise.html
cruise

// cruises : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cruises.html
cruises

// cuisinella : SCHMIDT GROUPE S.A.S.
// https://www.iana.org/domains/root/db/cuisinella.html
cuisinella

// cymru : Nominet UK
// https://www.iana.org/domains/root/db/cymru.html
cymru

// cyou : ShortDot SA
// https://www.iana.org/domains/root/db/cyou.html
cyou

// dabur : Dabur India Limited
// https://www.iana.org/domains/root/db/dabur.html
dabur

// dad : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/dad.html
dad

// dance : Dog Beach, LLC
// https://www.iana.org/domains/root/db/dance.html
dance

// data : Dish DBS Corporation
// https://www.iana.org/domains/root/db/data.html
data

// date : dot Date Limited
// https://www.iana.org/domains/root/db/date.html
date

// dating : Binky Moon, LLC
// https://www.iana.org/domains/root/db/dating.html
dating

// datsun : NISSAN MOTOR CO., LTD.
// https://www.iana.org/domains/root/db/datsun.html
datsun

// day : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/day.html
day

// dclk : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/dclk.html
dclk

// dds : Registry Services, LLC
// https://www.iana.org/domains/root/db/dds.html
dds

// deal : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/deal.html
deal

// dealer : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/dealer.html
dealer

// deals : Binky Moon, LLC
// https://www.iana.org/domains/root/db/deals.html
deals

// degree : Dog Beach, LLC
// https://www.iana.org/domains/root/db/degree.html
degree

// delivery : Binky Moon, LLC
// https://www.iana.org/domains/root/db/delivery.html
delivery

// dell : Dell Inc.
// https://www.iana.org/domains/root/db/dell.html
dell

// deloitte : Deloitte Touche Tohmatsu
// https://www.iana.org/domains/root/db/deloitte.html
deloitte

// delta : Delta Air Lines, Inc.
// https://www.iana.org/domains/root/db/delta.html
delta

// democrat : Dog Beach, LLC
// https://www.iana.org/domains/root/db/democrat.html
democrat

// dental : Binky Moon, LLC
// https://www.iana.org/domains/root/db/dental.html
dental

// dentist : Dog Beach, LLC
// https://www.iana.org/domains/root/db/dentist.html
dentist

// desi : Desi Networks LLC
// https://www.iana.org/domains/root/db/desi.html
desi

// design : Registry Services, LLC
// https://www.iana.org/domains/root/db/design.html
design

// dev : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/dev.html
dev

// dhl : Deutsche Post AG
// https://www.iana.org/domains/root/db/dhl.html
dhl

// diamonds : Binky Moon, LLC
// https://www.iana.org/domains/root/db/diamonds.html
diamonds

// diet : XYZ.COM LLC
// https://www.iana.org/domains/root/db/diet.html
diet

// digital : Binky Moon, LLC
// https://www.iana.org/domains/root/db/digital.html
digital

// direct : Binky Moon, LLC
// https://www.iana.org/domains/root/db/direct.html
direct

// directory : Binky Moon, LLC
// https://www.iana.org/domains/root/db/directory.html
directory

// discount : Binky Moon, LLC
// https://www.iana.org/domains/root/db/discount.html
discount

// discover : Discover Financial Services
// https://www.iana.org/domains/root/db/discover.html
discover

// dish : Dish DBS Corporation
// https://www.iana.org/domains/root/db/dish.html
dish

// diy : Lifestyle Domain Holdings, Inc.
// https://www.iana.org/domains/root/db/diy.html
diy

// dnp : Dai Nippon Printing Co., Ltd.
// https://www.iana.org/domains/root/db/dnp.html
dnp

// docs : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/docs.html
docs

// doctor : Binky Moon, LLC
// https://www.iana.org/domains/root/db/doctor.html
doctor

// dog : Binky Moon, LLC
// https://www.iana.org/domains/root/db/dog.html
dog

// domains : Binky Moon, LLC
// https://www.iana.org/domains/root/db/domains.html
domains

// dot : Dish DBS Corporation
// https://www.iana.org/domains/root/db/dot.html
dot

// download : dot Support Limited
// https://www.iana.org/domains/root/db/download.html
download

// drive : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/drive.html
drive

// dtv : Dish DBS Corporation
// https://www.iana.org/domains/root/db/dtv.html
dtv

// dubai : Dubai Smart Government Department
// https://www.iana.org/domains/root/db/dubai.html
dubai

// dunlop : The Goodyear Tire & Rubber Company
// https://www.iana.org/domains/root/db/dunlop.html
dunlop

// dupont : DuPont Specialty Products USA, LLC
// https://www.iana.org/domains/root/db/dupont.html
dupont

// durban : ZA Central Registry NPC trading as ZA Central Registry
// https://www.iana.org/domains/root/db/durban.html
durban

// dvag : Deutsche Verm\xF6gensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/dvag.html
dvag

// dvr : DISH Technologies L.L.C.
// https://www.iana.org/domains/root/db/dvr.html
dvr

// earth : Interlink Systems Innovation Institute K.K.
// https://www.iana.org/domains/root/db/earth.html
earth

// eat : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/eat.html
eat

// eco : Big Room Inc.
// https://www.iana.org/domains/root/db/eco.html
eco

// edeka : EDEKA Verband kaufm\xE4nnischer Genossenschaften e.V.
// https://www.iana.org/domains/root/db/edeka.html
edeka

// education : Binky Moon, LLC
// https://www.iana.org/domains/root/db/education.html
education

// email : Binky Moon, LLC
// https://www.iana.org/domains/root/db/email.html
email

// emerck : Merck KGaA
// https://www.iana.org/domains/root/db/emerck.html
emerck

// energy : Binky Moon, LLC
// https://www.iana.org/domains/root/db/energy.html
energy

// engineer : Dog Beach, LLC
// https://www.iana.org/domains/root/db/engineer.html
engineer

// engineering : Binky Moon, LLC
// https://www.iana.org/domains/root/db/engineering.html
engineering

// enterprises : Binky Moon, LLC
// https://www.iana.org/domains/root/db/enterprises.html
enterprises

// epson : Seiko Epson Corporation
// https://www.iana.org/domains/root/db/epson.html
epson

// equipment : Binky Moon, LLC
// https://www.iana.org/domains/root/db/equipment.html
equipment

// ericsson : Telefonaktiebolaget L M Ericsson
// https://www.iana.org/domains/root/db/ericsson.html
ericsson

// erni : ERNI Group Holding AG
// https://www.iana.org/domains/root/db/erni.html
erni

// esq : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/esq.html
esq

// estate : Binky Moon, LLC
// https://www.iana.org/domains/root/db/estate.html
estate

// etisalat : Emirates Telecommunications Corporation (trading as Etisalat)
// https://www.iana.org/domains/root/db/etisalat.html
etisalat

// eurovision : European Broadcasting Union (EBU)
// https://www.iana.org/domains/root/db/eurovision.html
eurovision

// eus : Puntueus Fundazioa
// https://www.iana.org/domains/root/db/eus.html
eus

// events : Binky Moon, LLC
// https://www.iana.org/domains/root/db/events.html
events

// exchange : Binky Moon, LLC
// https://www.iana.org/domains/root/db/exchange.html
exchange

// expert : Binky Moon, LLC
// https://www.iana.org/domains/root/db/expert.html
expert

// exposed : Binky Moon, LLC
// https://www.iana.org/domains/root/db/exposed.html
exposed

// express : Binky Moon, LLC
// https://www.iana.org/domains/root/db/express.html
express

// extraspace : Extra Space Storage LLC
// https://www.iana.org/domains/root/db/extraspace.html
extraspace

// fage : Fage International S.A.
// https://www.iana.org/domains/root/db/fage.html
fage

// fail : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fail.html
fail

// fairwinds : FairWinds Partners, LLC
// https://www.iana.org/domains/root/db/fairwinds.html
fairwinds

// faith : dot Faith Limited
// https://www.iana.org/domains/root/db/faith.html
faith

// family : Dog Beach, LLC
// https://www.iana.org/domains/root/db/family.html
family

// fan : Dog Beach, LLC
// https://www.iana.org/domains/root/db/fan.html
fan

// fans : ZDNS International Limited
// https://www.iana.org/domains/root/db/fans.html
fans

// farm : Binky Moon, LLC
// https://www.iana.org/domains/root/db/farm.html
farm

// farmers : Farmers Insurance Exchange
// https://www.iana.org/domains/root/db/farmers.html
farmers

// fashion : Registry Services, LLC
// https://www.iana.org/domains/root/db/fashion.html
fashion

// fast : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/fast.html
fast

// fedex : Federal Express Corporation
// https://www.iana.org/domains/root/db/fedex.html
fedex

// feedback : Top Level Spectrum, Inc.
// https://www.iana.org/domains/root/db/feedback.html
feedback

// ferrari : Fiat Chrysler Automobiles N.V.
// https://www.iana.org/domains/root/db/ferrari.html
ferrari

// ferrero : Ferrero Trading Lux S.A.
// https://www.iana.org/domains/root/db/ferrero.html
ferrero

// fidelity : Fidelity Brokerage Services LLC
// https://www.iana.org/domains/root/db/fidelity.html
fidelity

// fido : Rogers Communications Canada Inc.
// https://www.iana.org/domains/root/db/fido.html
fido

// film : Motion Picture Domain Registry Pty Ltd
// https://www.iana.org/domains/root/db/film.html
film

// final : N\xFAcleo de Informa\xE7\xE3o e Coordena\xE7\xE3o do Ponto BR - NIC.br
// https://www.iana.org/domains/root/db/final.html
final

// finance : Binky Moon, LLC
// https://www.iana.org/domains/root/db/finance.html
finance

// financial : Binky Moon, LLC
// https://www.iana.org/domains/root/db/financial.html
financial

// fire : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/fire.html
fire

// firestone : Bridgestone Licensing Services, Inc
// https://www.iana.org/domains/root/db/firestone.html
firestone

// firmdale : Firmdale Holdings Limited
// https://www.iana.org/domains/root/db/firmdale.html
firmdale

// fish : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fish.html
fish

// fishing : Registry Services, LLC
// https://www.iana.org/domains/root/db/fishing.html
fishing

// fit : Registry Services, LLC
// https://www.iana.org/domains/root/db/fit.html
fit

// fitness : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fitness.html
fitness

// flickr : Flickr, Inc.
// https://www.iana.org/domains/root/db/flickr.html
flickr

// flights : Binky Moon, LLC
// https://www.iana.org/domains/root/db/flights.html
flights

// flir : FLIR Systems, Inc.
// https://www.iana.org/domains/root/db/flir.html
flir

// florist : Binky Moon, LLC
// https://www.iana.org/domains/root/db/florist.html
florist

// flowers : XYZ.COM LLC
// https://www.iana.org/domains/root/db/flowers.html
flowers

// fly : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/fly.html
fly

// foo : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/foo.html
foo

// food : Lifestyle Domain Holdings, Inc.
// https://www.iana.org/domains/root/db/food.html
food

// football : Binky Moon, LLC
// https://www.iana.org/domains/root/db/football.html
football

// ford : Ford Motor Company
// https://www.iana.org/domains/root/db/ford.html
ford

// forex : Dog Beach, LLC
// https://www.iana.org/domains/root/db/forex.html
forex

// forsale : Dog Beach, LLC
// https://www.iana.org/domains/root/db/forsale.html
forsale

// forum : Fegistry, LLC
// https://www.iana.org/domains/root/db/forum.html
forum

// foundation : Public Interest Registry
// https://www.iana.org/domains/root/db/foundation.html
foundation

// fox : FOX Registry, LLC
// https://www.iana.org/domains/root/db/fox.html
fox

// free : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/free.html
free

// fresenius : Fresenius Immobilien-Verwaltungs-GmbH
// https://www.iana.org/domains/root/db/fresenius.html
fresenius

// frl : FRLregistry B.V.
// https://www.iana.org/domains/root/db/frl.html
frl

// frogans : OP3FT
// https://www.iana.org/domains/root/db/frogans.html
frogans

// frontier : Frontier Communications Corporation
// https://www.iana.org/domains/root/db/frontier.html
frontier

// ftr : Frontier Communications Corporation
// https://www.iana.org/domains/root/db/ftr.html
ftr

// fujitsu : Fujitsu Limited
// https://www.iana.org/domains/root/db/fujitsu.html
fujitsu

// fun : Radix FZC DMCC
// https://www.iana.org/domains/root/db/fun.html
fun

// fund : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fund.html
fund

// furniture : Binky Moon, LLC
// https://www.iana.org/domains/root/db/furniture.html
furniture

// futbol : Dog Beach, LLC
// https://www.iana.org/domains/root/db/futbol.html
futbol

// fyi : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fyi.html
fyi

// gal : Asociaci\xF3n puntoGAL
// https://www.iana.org/domains/root/db/gal.html
gal

// gallery : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gallery.html
gallery

// gallo : Gallo Vineyards, Inc.
// https://www.iana.org/domains/root/db/gallo.html
gallo

// gallup : Gallup, Inc.
// https://www.iana.org/domains/root/db/gallup.html
gallup

// game : XYZ.COM LLC
// https://www.iana.org/domains/root/db/game.html
game

// games : Dog Beach, LLC
// https://www.iana.org/domains/root/db/games.html
games

// gap : The Gap, Inc.
// https://www.iana.org/domains/root/db/gap.html
gap

// garden : Registry Services, LLC
// https://www.iana.org/domains/root/db/garden.html
garden

// gay : Registry Services, LLC
// https://www.iana.org/domains/root/db/gay.html
gay

// gbiz : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/gbiz.html
gbiz

// gdn : Joint Stock Company "Navigation-information systems"
// https://www.iana.org/domains/root/db/gdn.html
gdn

// gea : GEA Group Aktiengesellschaft
// https://www.iana.org/domains/root/db/gea.html
gea

// gent : Easyhost BV
// https://www.iana.org/domains/root/db/gent.html
gent

// genting : Resorts World Inc Pte. Ltd.
// https://www.iana.org/domains/root/db/genting.html
genting

// george : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/george.html
george

// ggee : GMO Internet, Inc.
// https://www.iana.org/domains/root/db/ggee.html
ggee

// gift : DotGift, LLC
// https://www.iana.org/domains/root/db/gift.html
gift

// gifts : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gifts.html
gifts

// gives : Public Interest Registry
// https://www.iana.org/domains/root/db/gives.html
gives

// giving : Public Interest Registry
// https://www.iana.org/domains/root/db/giving.html
giving

// glass : Binky Moon, LLC
// https://www.iana.org/domains/root/db/glass.html
glass

// gle : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/gle.html
gle

// global : Identity Digital Limited
// https://www.iana.org/domains/root/db/global.html
global

// globo : Globo Comunica\xE7\xE3o e Participa\xE7\xF5es S.A
// https://www.iana.org/domains/root/db/globo.html
globo

// gmail : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/gmail.html
gmail

// gmbh : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gmbh.html
gmbh

// gmo : GMO Internet, Inc.
// https://www.iana.org/domains/root/db/gmo.html
gmo

// gmx : 1&1 Mail & Media GmbH
// https://www.iana.org/domains/root/db/gmx.html
gmx

// godaddy : Go Daddy East, LLC
// https://www.iana.org/domains/root/db/godaddy.html
godaddy

// gold : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gold.html
gold

// goldpoint : YODOBASHI CAMERA CO.,LTD.
// https://www.iana.org/domains/root/db/goldpoint.html
goldpoint

// golf : Binky Moon, LLC
// https://www.iana.org/domains/root/db/golf.html
golf

// goo : NTT Resonant Inc.
// https://www.iana.org/domains/root/db/goo.html
goo

// goodyear : The Goodyear Tire & Rubber Company
// https://www.iana.org/domains/root/db/goodyear.html
goodyear

// goog : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/goog.html
goog

// google : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/google.html
google

// gop : Republican State Leadership Committee, Inc.
// https://www.iana.org/domains/root/db/gop.html
gop

// got : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/got.html
got

// grainger : Grainger Registry Services, LLC
// https://www.iana.org/domains/root/db/grainger.html
grainger

// graphics : Binky Moon, LLC
// https://www.iana.org/domains/root/db/graphics.html
graphics

// gratis : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gratis.html
gratis

// green : Identity Digital Limited
// https://www.iana.org/domains/root/db/green.html
green

// gripe : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gripe.html
gripe

// grocery : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/grocery.html
grocery

// group : Binky Moon, LLC
// https://www.iana.org/domains/root/db/group.html
group

// guardian : The Guardian Life Insurance Company of America
// https://www.iana.org/domains/root/db/guardian.html
guardian

// gucci : Guccio Gucci S.p.a.
// https://www.iana.org/domains/root/db/gucci.html
gucci

// guge : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/guge.html
guge

// guide : Binky Moon, LLC
// https://www.iana.org/domains/root/db/guide.html
guide

// guitars : XYZ.COM LLC
// https://www.iana.org/domains/root/db/guitars.html
guitars

// guru : Binky Moon, LLC
// https://www.iana.org/domains/root/db/guru.html
guru

// hair : XYZ.COM LLC
// https://www.iana.org/domains/root/db/hair.html
hair

// hamburg : Hamburg Top-Level-Domain GmbH
// https://www.iana.org/domains/root/db/hamburg.html
hamburg

// hangout : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/hangout.html
hangout

// haus : Dog Beach, LLC
// https://www.iana.org/domains/root/db/haus.html
haus

// hbo : HBO Registry Services, Inc.
// https://www.iana.org/domains/root/db/hbo.html
hbo

// hdfc : HOUSING DEVELOPMENT FINANCE CORPORATION LIMITED
// https://www.iana.org/domains/root/db/hdfc.html
hdfc

// hdfcbank : HDFC Bank Limited
// https://www.iana.org/domains/root/db/hdfcbank.html
hdfcbank

// health : Registry Services, LLC
// https://www.iana.org/domains/root/db/health.html
health

// healthcare : Binky Moon, LLC
// https://www.iana.org/domains/root/db/healthcare.html
healthcare

// help : Innovation service Limited
// https://www.iana.org/domains/root/db/help.html
help

// helsinki : City of Helsinki
// https://www.iana.org/domains/root/db/helsinki.html
helsinki

// here : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/here.html
here

// hermes : HERMES INTERNATIONAL
// https://www.iana.org/domains/root/db/hermes.html
hermes

// hiphop : Dot Hip Hop, LLC
// https://www.iana.org/domains/root/db/hiphop.html
hiphop

// hisamitsu : Hisamitsu Pharmaceutical Co.,Inc.
// https://www.iana.org/domains/root/db/hisamitsu.html
hisamitsu

// hitachi : Hitachi, Ltd.
// https://www.iana.org/domains/root/db/hitachi.html
hitachi

// hiv : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/hiv.html
hiv

// hkt : PCCW-HKT DataCom Services Limited
// https://www.iana.org/domains/root/db/hkt.html
hkt

// hockey : Binky Moon, LLC
// https://www.iana.org/domains/root/db/hockey.html
hockey

// holdings : Binky Moon, LLC
// https://www.iana.org/domains/root/db/holdings.html
holdings

// holiday : Binky Moon, LLC
// https://www.iana.org/domains/root/db/holiday.html
holiday

// homedepot : Home Depot Product Authority, LLC
// https://www.iana.org/domains/root/db/homedepot.html
homedepot

// homegoods : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/homegoods.html
homegoods

// homes : XYZ.COM LLC
// https://www.iana.org/domains/root/db/homes.html
homes

// homesense : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/homesense.html
homesense

// honda : Honda Motor Co., Ltd.
// https://www.iana.org/domains/root/db/honda.html
honda

// horse : Registry Services, LLC
// https://www.iana.org/domains/root/db/horse.html
horse

// hospital : Binky Moon, LLC
// https://www.iana.org/domains/root/db/hospital.html
hospital

// host : Radix FZC DMCC
// https://www.iana.org/domains/root/db/host.html
host

// hosting : XYZ.COM LLC
// https://www.iana.org/domains/root/db/hosting.html
hosting

// hot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/hot.html
hot

// hotels : Booking.com B.V.
// https://www.iana.org/domains/root/db/hotels.html
hotels

// hotmail : Microsoft Corporation
// https://www.iana.org/domains/root/db/hotmail.html
hotmail

// house : Binky Moon, LLC
// https://www.iana.org/domains/root/db/house.html
house

// how : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/how.html
how

// hsbc : HSBC Global Services (UK) Limited
// https://www.iana.org/domains/root/db/hsbc.html
hsbc

// hughes : Hughes Satellite Systems Corporation
// https://www.iana.org/domains/root/db/hughes.html
hughes

// hyatt : Hyatt GTLD, L.L.C.
// https://www.iana.org/domains/root/db/hyatt.html
hyatt

// hyundai : Hyundai Motor Company
// https://www.iana.org/domains/root/db/hyundai.html
hyundai

// ibm : International Business Machines Corporation
// https://www.iana.org/domains/root/db/ibm.html
ibm

// icbc : Industrial and Commercial Bank of China Limited
// https://www.iana.org/domains/root/db/icbc.html
icbc

// ice : IntercontinentalExchange, Inc.
// https://www.iana.org/domains/root/db/ice.html
ice

// icu : ShortDot SA
// https://www.iana.org/domains/root/db/icu.html
icu

// ieee : IEEE Global LLC
// https://www.iana.org/domains/root/db/ieee.html
ieee

// ifm : ifm electronic gmbh
// https://www.iana.org/domains/root/db/ifm.html
ifm

// ikano : Ikano S.A.
// https://www.iana.org/domains/root/db/ikano.html
ikano

// imamat : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/imamat.html
imamat

// imdb : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/imdb.html
imdb

// immo : Binky Moon, LLC
// https://www.iana.org/domains/root/db/immo.html
immo

// immobilien : Dog Beach, LLC
// https://www.iana.org/domains/root/db/immobilien.html
immobilien

// inc : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/inc.html
inc

// industries : Binky Moon, LLC
// https://www.iana.org/domains/root/db/industries.html
industries

// infiniti : NISSAN MOTOR CO., LTD.
// https://www.iana.org/domains/root/db/infiniti.html
infiniti

// ing : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/ing.html
ing

// ink : Registry Services, LLC
// https://www.iana.org/domains/root/db/ink.html
ink

// institute : Binky Moon, LLC
// https://www.iana.org/domains/root/db/institute.html
institute

// insurance : fTLD Registry Services LLC
// https://www.iana.org/domains/root/db/insurance.html
insurance

// insure : Binky Moon, LLC
// https://www.iana.org/domains/root/db/insure.html
insure

// international : Binky Moon, LLC
// https://www.iana.org/domains/root/db/international.html
international

// intuit : Intuit Administrative Services, Inc.
// https://www.iana.org/domains/root/db/intuit.html
intuit

// investments : Binky Moon, LLC
// https://www.iana.org/domains/root/db/investments.html
investments

// ipiranga : Ipiranga Produtos de Petroleo S.A.
// https://www.iana.org/domains/root/db/ipiranga.html
ipiranga

// irish : Binky Moon, LLC
// https://www.iana.org/domains/root/db/irish.html
irish

// ismaili : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/ismaili.html
ismaili

// ist : Istanbul Metropolitan Municipality
// https://www.iana.org/domains/root/db/ist.html
ist

// istanbul : Istanbul Metropolitan Municipality
// https://www.iana.org/domains/root/db/istanbul.html
istanbul

// itau : Itau Unibanco Holding S.A.
// https://www.iana.org/domains/root/db/itau.html
itau

// itv : ITV Services Limited
// https://www.iana.org/domains/root/db/itv.html
itv

// jaguar : Jaguar Land Rover Ltd
// https://www.iana.org/domains/root/db/jaguar.html
jaguar

// java : Oracle Corporation
// https://www.iana.org/domains/root/db/java.html
java

// jcb : JCB Co., Ltd.
// https://www.iana.org/domains/root/db/jcb.html
jcb

// jeep : FCA US LLC.
// https://www.iana.org/domains/root/db/jeep.html
jeep

// jetzt : Binky Moon, LLC
// https://www.iana.org/domains/root/db/jetzt.html
jetzt

// jewelry : Binky Moon, LLC
// https://www.iana.org/domains/root/db/jewelry.html
jewelry

// jio : Reliance Industries Limited
// https://www.iana.org/domains/root/db/jio.html
jio

// jll : Jones Lang LaSalle Incorporated
// https://www.iana.org/domains/root/db/jll.html
jll

// jmp : Matrix IP LLC
// https://www.iana.org/domains/root/db/jmp.html
jmp

// jnj : Johnson & Johnson Services, Inc.
// https://www.iana.org/domains/root/db/jnj.html
jnj

// joburg : ZA Central Registry NPC trading as ZA Central Registry
// https://www.iana.org/domains/root/db/joburg.html
joburg

// jot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/jot.html
jot

// joy : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/joy.html
joy

// jpmorgan : JPMorgan Chase Bank, National Association
// https://www.iana.org/domains/root/db/jpmorgan.html
jpmorgan

// jprs : Japan Registry Services Co., Ltd.
// https://www.iana.org/domains/root/db/jprs.html
jprs

// juegos : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/juegos.html
juegos

// juniper : JUNIPER NETWORKS, INC.
// https://www.iana.org/domains/root/db/juniper.html
juniper

// kaufen : Dog Beach, LLC
// https://www.iana.org/domains/root/db/kaufen.html
kaufen

// kddi : KDDI CORPORATION
// https://www.iana.org/domains/root/db/kddi.html
kddi

// kerryhotels : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kerryhotels.html
kerryhotels

// kerrylogistics : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kerrylogistics.html
kerrylogistics

// kerryproperties : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kerryproperties.html
kerryproperties

// kfh : Kuwait Finance House
// https://www.iana.org/domains/root/db/kfh.html
kfh

// kia : KIA MOTORS CORPORATION
// https://www.iana.org/domains/root/db/kia.html
kia

// kids : DotKids Foundation Limited
// https://www.iana.org/domains/root/db/kids.html
kids

// kim : Identity Digital Limited
// https://www.iana.org/domains/root/db/kim.html
kim

// kinder : Ferrero Trading Lux S.A.
// https://www.iana.org/domains/root/db/kinder.html
kinder

// kindle : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/kindle.html
kindle

// kitchen : Binky Moon, LLC
// https://www.iana.org/domains/root/db/kitchen.html
kitchen

// kiwi : DOT KIWI LIMITED
// https://www.iana.org/domains/root/db/kiwi.html
kiwi

// koeln : dotKoeln GmbH
// https://www.iana.org/domains/root/db/koeln.html
koeln

// komatsu : Komatsu Ltd.
// https://www.iana.org/domains/root/db/komatsu.html
komatsu

// kosher : Kosher Marketing Assets LLC
// https://www.iana.org/domains/root/db/kosher.html
kosher

// kpmg : KPMG International Cooperative (KPMG International Genossenschaft)
// https://www.iana.org/domains/root/db/kpmg.html
kpmg

// kpn : Koninklijke KPN N.V.
// https://www.iana.org/domains/root/db/kpn.html
kpn

// krd : KRG Department of Information Technology
// https://www.iana.org/domains/root/db/krd.html
krd

// kred : KredTLD Pty Ltd
// https://www.iana.org/domains/root/db/kred.html
kred

// kuokgroup : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kuokgroup.html
kuokgroup

// kyoto : Academic Institution: Kyoto Jyoho Gakuen
// https://www.iana.org/domains/root/db/kyoto.html
kyoto

// lacaixa : Fundaci\xF3n Bancaria Caixa d\u2019Estalvis i Pensions de Barcelona, \u201Cla Caixa\u201D
// https://www.iana.org/domains/root/db/lacaixa.html
lacaixa

// lamborghini : Automobili Lamborghini S.p.A.
// https://www.iana.org/domains/root/db/lamborghini.html
lamborghini

// lamer : The Est\xE9e Lauder Companies Inc.
// https://www.iana.org/domains/root/db/lamer.html
lamer

// lancaster : LANCASTER
// https://www.iana.org/domains/root/db/lancaster.html
lancaster

// land : Binky Moon, LLC
// https://www.iana.org/domains/root/db/land.html
land

// landrover : Jaguar Land Rover Ltd
// https://www.iana.org/domains/root/db/landrover.html
landrover

// lanxess : LANXESS Corporation
// https://www.iana.org/domains/root/db/lanxess.html
lanxess

// lasalle : Jones Lang LaSalle Incorporated
// https://www.iana.org/domains/root/db/lasalle.html
lasalle

// lat : XYZ.COM LLC
// https://www.iana.org/domains/root/db/lat.html
lat

// latino : Dish DBS Corporation
// https://www.iana.org/domains/root/db/latino.html
latino

// latrobe : La Trobe University
// https://www.iana.org/domains/root/db/latrobe.html
latrobe

// law : Registry Services, LLC
// https://www.iana.org/domains/root/db/law.html
law

// lawyer : Dog Beach, LLC
// https://www.iana.org/domains/root/db/lawyer.html
lawyer

// lds : IRI Domain Management, LLC
// https://www.iana.org/domains/root/db/lds.html
lds

// lease : Binky Moon, LLC
// https://www.iana.org/domains/root/db/lease.html
lease

// leclerc : A.C.D. LEC Association des Centres Distributeurs Edouard Leclerc
// https://www.iana.org/domains/root/db/leclerc.html
leclerc

// lefrak : LeFrak Organization, Inc.
// https://www.iana.org/domains/root/db/lefrak.html
lefrak

// legal : Binky Moon, LLC
// https://www.iana.org/domains/root/db/legal.html
legal

// lego : LEGO Juris A/S
// https://www.iana.org/domains/root/db/lego.html
lego

// lexus : TOYOTA MOTOR CORPORATION
// https://www.iana.org/domains/root/db/lexus.html
lexus

// lgbt : Identity Digital Limited
// https://www.iana.org/domains/root/db/lgbt.html
lgbt

// lidl : Schwarz Domains und Services GmbH & Co. KG
// https://www.iana.org/domains/root/db/lidl.html
lidl

// life : Binky Moon, LLC
// https://www.iana.org/domains/root/db/life.html
life

// lifeinsurance : American Council of Life Insurers
// https://www.iana.org/domains/root/db/lifeinsurance.html
lifeinsurance

// lifestyle : Lifestyle Domain Holdings, Inc.
// https://www.iana.org/domains/root/db/lifestyle.html
lifestyle

// lighting : Binky Moon, LLC
// https://www.iana.org/domains/root/db/lighting.html
lighting

// like : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/like.html
like

// lilly : Eli Lilly and Company
// https://www.iana.org/domains/root/db/lilly.html
lilly

// limited : Binky Moon, LLC
// https://www.iana.org/domains/root/db/limited.html
limited

// limo : Binky Moon, LLC
// https://www.iana.org/domains/root/db/limo.html
limo

// lincoln : Ford Motor Company
// https://www.iana.org/domains/root/db/lincoln.html
lincoln

// link : Nova Registry Ltd
// https://www.iana.org/domains/root/db/link.html
link

// lipsy : Lipsy Ltd
// https://www.iana.org/domains/root/db/lipsy.html
lipsy

// live : Dog Beach, LLC
// https://www.iana.org/domains/root/db/live.html
live

// living : Lifestyle Domain Holdings, Inc.
// https://www.iana.org/domains/root/db/living.html
living

// llc : Identity Digital Limited
// https://www.iana.org/domains/root/db/llc.html
llc

// llp : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/llp.html
llp

// loan : dot Loan Limited
// https://www.iana.org/domains/root/db/loan.html
loan

// loans : Binky Moon, LLC
// https://www.iana.org/domains/root/db/loans.html
loans

// locker : Orange Domains LLC
// https://www.iana.org/domains/root/db/locker.html
locker

// locus : Locus Analytics LLC
// https://www.iana.org/domains/root/db/locus.html
locus

// lol : XYZ.COM LLC
// https://www.iana.org/domains/root/db/lol.html
lol

// london : Dot London Domains Limited
// https://www.iana.org/domains/root/db/london.html
london

// lotte : Lotte Holdings Co., Ltd.
// https://www.iana.org/domains/root/db/lotte.html
lotte

// lotto : Identity Digital Limited
// https://www.iana.org/domains/root/db/lotto.html
lotto

// love : Merchant Law Group LLP
// https://www.iana.org/domains/root/db/love.html
love

// lpl : LPL Holdings, Inc.
// https://www.iana.org/domains/root/db/lpl.html
lpl

// lplfinancial : LPL Holdings, Inc.
// https://www.iana.org/domains/root/db/lplfinancial.html
lplfinancial

// ltd : Binky Moon, LLC
// https://www.iana.org/domains/root/db/ltd.html
ltd

// ltda : InterNetX, Corp
// https://www.iana.org/domains/root/db/ltda.html
ltda

// lundbeck : H. Lundbeck A/S
// https://www.iana.org/domains/root/db/lundbeck.html
lundbeck

// luxe : Registry Services, LLC
// https://www.iana.org/domains/root/db/luxe.html
luxe

// luxury : Luxury Partners, LLC
// https://www.iana.org/domains/root/db/luxury.html
luxury

// madrid : Comunidad de Madrid
// https://www.iana.org/domains/root/db/madrid.html
madrid

// maif : Mutuelle Assurance Instituteur France (MAIF)
// https://www.iana.org/domains/root/db/maif.html
maif

// maison : Binky Moon, LLC
// https://www.iana.org/domains/root/db/maison.html
maison

// makeup : XYZ.COM LLC
// https://www.iana.org/domains/root/db/makeup.html
makeup

// man : MAN SE
// https://www.iana.org/domains/root/db/man.html
man

// management : Binky Moon, LLC
// https://www.iana.org/domains/root/db/management.html
management

// mango : PUNTO FA S.L.
// https://www.iana.org/domains/root/db/mango.html
mango

// map : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/map.html
map

// market : Dog Beach, LLC
// https://www.iana.org/domains/root/db/market.html
market

// marketing : Binky Moon, LLC
// https://www.iana.org/domains/root/db/marketing.html
marketing

// markets : Dog Beach, LLC
// https://www.iana.org/domains/root/db/markets.html
markets

// marriott : Marriott Worldwide Corporation
// https://www.iana.org/domains/root/db/marriott.html
marriott

// marshalls : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/marshalls.html
marshalls

// mattel : Mattel Sites, Inc.
// https://www.iana.org/domains/root/db/mattel.html
mattel

// mba : Binky Moon, LLC
// https://www.iana.org/domains/root/db/mba.html
mba

// mckinsey : McKinsey Holdings, Inc.
// https://www.iana.org/domains/root/db/mckinsey.html
mckinsey

// med : Medistry LLC
// https://www.iana.org/domains/root/db/med.html
med

// media : Binky Moon, LLC
// https://www.iana.org/domains/root/db/media.html
media

// meet : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/meet.html
meet

// melbourne : The Crown in right of the State of Victoria, represented by its Department of State Development, Business and Innovation
// https://www.iana.org/domains/root/db/melbourne.html
melbourne

// meme : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/meme.html
meme

// memorial : Dog Beach, LLC
// https://www.iana.org/domains/root/db/memorial.html
memorial

// men : Exclusive Registry Limited
// https://www.iana.org/domains/root/db/men.html
men

// menu : Dot Menu Registry, LLC
// https://www.iana.org/domains/root/db/menu.html
menu

// merckmsd : MSD Registry Holdings, Inc.
// https://www.iana.org/domains/root/db/merckmsd.html
merckmsd

// miami : Registry Services, LLC
// https://www.iana.org/domains/root/db/miami.html
miami

// microsoft : Microsoft Corporation
// https://www.iana.org/domains/root/db/microsoft.html
microsoft

// mini : Bayerische Motoren Werke Aktiengesellschaft
// https://www.iana.org/domains/root/db/mini.html
mini

// mint : Intuit Administrative Services, Inc.
// https://www.iana.org/domains/root/db/mint.html
mint

// mit : Massachusetts Institute of Technology
// https://www.iana.org/domains/root/db/mit.html
mit

// mitsubishi : Mitsubishi Corporation
// https://www.iana.org/domains/root/db/mitsubishi.html
mitsubishi

// mlb : MLB Advanced Media DH, LLC
// https://www.iana.org/domains/root/db/mlb.html
mlb

// mls : The Canadian Real Estate Association
// https://www.iana.org/domains/root/db/mls.html
mls

// mma : MMA IARD
// https://www.iana.org/domains/root/db/mma.html
mma

// mobile : Dish DBS Corporation
// https://www.iana.org/domains/root/db/mobile.html
mobile

// moda : Dog Beach, LLC
// https://www.iana.org/domains/root/db/moda.html
moda

// moe : Interlink Systems Innovation Institute K.K.
// https://www.iana.org/domains/root/db/moe.html
moe

// moi : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/moi.html
moi

// mom : XYZ.COM LLC
// https://www.iana.org/domains/root/db/mom.html
mom

// monash : Monash University
// https://www.iana.org/domains/root/db/monash.html
monash

// money : Binky Moon, LLC
// https://www.iana.org/domains/root/db/money.html
money

// monster : XYZ.COM LLC
// https://www.iana.org/domains/root/db/monster.html
monster

// mormon : IRI Domain Management, LLC
// https://www.iana.org/domains/root/db/mormon.html
mormon

// mortgage : Dog Beach, LLC
// https://www.iana.org/domains/root/db/mortgage.html
mortgage

// moscow : Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)
// https://www.iana.org/domains/root/db/moscow.html
moscow

// moto : Motorola Trademark Holdings, LLC
// https://www.iana.org/domains/root/db/moto.html
moto

// motorcycles : XYZ.COM LLC
// https://www.iana.org/domains/root/db/motorcycles.html
motorcycles

// mov : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/mov.html
mov

// movie : Binky Moon, LLC
// https://www.iana.org/domains/root/db/movie.html
movie

// msd : MSD Registry Holdings, Inc.
// https://www.iana.org/domains/root/db/msd.html
msd

// mtn : MTN Dubai Limited
// https://www.iana.org/domains/root/db/mtn.html
mtn

// mtr : MTR Corporation Limited
// https://www.iana.org/domains/root/db/mtr.html
mtr

// music : DotMusic Limited
// https://www.iana.org/domains/root/db/music.html
music

// nab : National Australia Bank Limited
// https://www.iana.org/domains/root/db/nab.html
nab

// nagoya : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/nagoya.html
nagoya

// natura : NATURA COSM\xC9TICOS S.A.
// https://www.iana.org/domains/root/db/natura.html
natura

// navy : Dog Beach, LLC
// https://www.iana.org/domains/root/db/navy.html
navy

// nba : NBA REGISTRY, LLC
// https://www.iana.org/domains/root/db/nba.html
nba

// nec : NEC Corporation
// https://www.iana.org/domains/root/db/nec.html
nec

// netbank : COMMONWEALTH BANK OF AUSTRALIA
// https://www.iana.org/domains/root/db/netbank.html
netbank

// netflix : Netflix, Inc.
// https://www.iana.org/domains/root/db/netflix.html
netflix

// network : Binky Moon, LLC
// https://www.iana.org/domains/root/db/network.html
network

// neustar : NeuStar, Inc.
// https://www.iana.org/domains/root/db/neustar.html
neustar

// new : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/new.html
new

// news : Dog Beach, LLC
// https://www.iana.org/domains/root/db/news.html
news

// next : Next plc
// https://www.iana.org/domains/root/db/next.html
next

// nextdirect : Next plc
// https://www.iana.org/domains/root/db/nextdirect.html
nextdirect

// nexus : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/nexus.html
nexus

// nfl : NFL Reg Ops LLC
// https://www.iana.org/domains/root/db/nfl.html
nfl

// ngo : Public Interest Registry
// https://www.iana.org/domains/root/db/ngo.html
ngo

// nhk : Japan Broadcasting Corporation (NHK)
// https://www.iana.org/domains/root/db/nhk.html
nhk

// nico : DWANGO Co., Ltd.
// https://www.iana.org/domains/root/db/nico.html
nico

// nike : NIKE, Inc.
// https://www.iana.org/domains/root/db/nike.html
nike

// nikon : NIKON CORPORATION
// https://www.iana.org/domains/root/db/nikon.html
nikon

// ninja : Dog Beach, LLC
// https://www.iana.org/domains/root/db/ninja.html
ninja

// nissan : NISSAN MOTOR CO., LTD.
// https://www.iana.org/domains/root/db/nissan.html
nissan

// nissay : Nippon Life Insurance Company
// https://www.iana.org/domains/root/db/nissay.html
nissay

// nokia : Nokia Corporation
// https://www.iana.org/domains/root/db/nokia.html
nokia

// norton : NortonLifeLock Inc.
// https://www.iana.org/domains/root/db/norton.html
norton

// now : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/now.html
now

// nowruz : Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.
// https://www.iana.org/domains/root/db/nowruz.html
nowruz

// nowtv : Starbucks (HK) Limited
// https://www.iana.org/domains/root/db/nowtv.html
nowtv

// nra : NRA Holdings Company, INC.
// https://www.iana.org/domains/root/db/nra.html
nra

// nrw : Minds + Machines GmbH
// https://www.iana.org/domains/root/db/nrw.html
nrw

// ntt : NIPPON TELEGRAPH AND TELEPHONE CORPORATION
// https://www.iana.org/domains/root/db/ntt.html
ntt

// nyc : The City of New York by and through the New York City Department of Information Technology & Telecommunications
// https://www.iana.org/domains/root/db/nyc.html
nyc

// obi : OBI Group Holding SE & Co. KGaA
// https://www.iana.org/domains/root/db/obi.html
obi

// observer : Fegistry, LLC
// https://www.iana.org/domains/root/db/observer.html
observer

// office : Microsoft Corporation
// https://www.iana.org/domains/root/db/office.html
office

// okinawa : BRregistry, Inc.
// https://www.iana.org/domains/root/db/okinawa.html
okinawa

// olayan : Competrol (Luxembourg) Sarl
// https://www.iana.org/domains/root/db/olayan.html
olayan

// olayangroup : Competrol (Luxembourg) Sarl
// https://www.iana.org/domains/root/db/olayangroup.html
olayangroup

// oldnavy : The Gap, Inc.
// https://www.iana.org/domains/root/db/oldnavy.html
oldnavy

// ollo : Dish DBS Corporation
// https://www.iana.org/domains/root/db/ollo.html
ollo

// omega : The Swatch Group Ltd
// https://www.iana.org/domains/root/db/omega.html
omega

// one : One.com A/S
// https://www.iana.org/domains/root/db/one.html
one

// ong : Public Interest Registry
// https://www.iana.org/domains/root/db/ong.html
ong

// onl : iRegistry GmbH
// https://www.iana.org/domains/root/db/onl.html
onl

// online : Radix FZC DMCC
// https://www.iana.org/domains/root/db/online.html
online

// ooo : INFIBEAM AVENUES LIMITED
// https://www.iana.org/domains/root/db/ooo.html
ooo

// open : American Express Travel Related Services Company, Inc.
// https://www.iana.org/domains/root/db/open.html
open

// oracle : Oracle Corporation
// https://www.iana.org/domains/root/db/oracle.html
oracle

// orange : Orange Brand Services Limited
// https://www.iana.org/domains/root/db/orange.html
orange

// organic : Identity Digital Limited
// https://www.iana.org/domains/root/db/organic.html
organic

// origins : The Est\xE9e Lauder Companies Inc.
// https://www.iana.org/domains/root/db/origins.html
origins

// osaka : Osaka Registry Co., Ltd.
// https://www.iana.org/domains/root/db/osaka.html
osaka

// otsuka : Otsuka Holdings Co., Ltd.
// https://www.iana.org/domains/root/db/otsuka.html
otsuka

// ott : Dish DBS Corporation
// https://www.iana.org/domains/root/db/ott.html
ott

// ovh : M\xE9diaBC
// https://www.iana.org/domains/root/db/ovh.html
ovh

// page : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/page.html
page

// panasonic : Panasonic Holdings Corporation
// https://www.iana.org/domains/root/db/panasonic.html
panasonic

// paris : City of Paris
// https://www.iana.org/domains/root/db/paris.html
paris

// pars : Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.
// https://www.iana.org/domains/root/db/pars.html
pars

// partners : Binky Moon, LLC
// https://www.iana.org/domains/root/db/partners.html
partners

// parts : Binky Moon, LLC
// https://www.iana.org/domains/root/db/parts.html
parts

// party : Blue Sky Registry Limited
// https://www.iana.org/domains/root/db/party.html
party

// pay : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/pay.html
pay

// pccw : PCCW Enterprises Limited
// https://www.iana.org/domains/root/db/pccw.html
pccw

// pet : Identity Digital Limited
// https://www.iana.org/domains/root/db/pet.html
pet

// pfizer : Pfizer Inc.
// https://www.iana.org/domains/root/db/pfizer.html
pfizer

// pharmacy : National Association of Boards of Pharmacy
// https://www.iana.org/domains/root/db/pharmacy.html
pharmacy

// phd : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/phd.html
phd

// philips : Koninklijke Philips N.V.
// https://www.iana.org/domains/root/db/philips.html
philips

// phone : Dish DBS Corporation
// https://www.iana.org/domains/root/db/phone.html
phone

// photo : Registry Services, LLC
// https://www.iana.org/domains/root/db/photo.html
photo

// photography : Binky Moon, LLC
// https://www.iana.org/domains/root/db/photography.html
photography

// photos : Binky Moon, LLC
// https://www.iana.org/domains/root/db/photos.html
photos

// physio : PhysBiz Pty Ltd
// https://www.iana.org/domains/root/db/physio.html
physio

// pics : XYZ.COM LLC
// https://www.iana.org/domains/root/db/pics.html
pics

// pictet : Pictet Europe S.A.
// https://www.iana.org/domains/root/db/pictet.html
pictet

// pictures : Binky Moon, LLC
// https://www.iana.org/domains/root/db/pictures.html
pictures

// pid : Top Level Spectrum, Inc.
// https://www.iana.org/domains/root/db/pid.html
pid

// pin : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/pin.html
pin

// ping : Ping Registry Provider, Inc.
// https://www.iana.org/domains/root/db/ping.html
ping

// pink : Identity Digital Limited
// https://www.iana.org/domains/root/db/pink.html
pink

// pioneer : Pioneer Corporation
// https://www.iana.org/domains/root/db/pioneer.html
pioneer

// pizza : Binky Moon, LLC
// https://www.iana.org/domains/root/db/pizza.html
pizza

// place : Binky Moon, LLC
// https://www.iana.org/domains/root/db/place.html
place

// play : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/play.html
play

// playstation : Sony Interactive Entertainment Inc.
// https://www.iana.org/domains/root/db/playstation.html
playstation

// plumbing : Binky Moon, LLC
// https://www.iana.org/domains/root/db/plumbing.html
plumbing

// plus : Binky Moon, LLC
// https://www.iana.org/domains/root/db/plus.html
plus

// pnc : PNC Domain Co., LLC
// https://www.iana.org/domains/root/db/pnc.html
pnc

// pohl : Deutsche Verm\xF6gensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/pohl.html
pohl

// poker : Identity Digital Limited
// https://www.iana.org/domains/root/db/poker.html
poker

// politie : Politie Nederland
// https://www.iana.org/domains/root/db/politie.html
politie

// porn : ICM Registry PN LLC
// https://www.iana.org/domains/root/db/porn.html
porn

// pramerica : Prudential Financial, Inc.
// https://www.iana.org/domains/root/db/pramerica.html
pramerica

// praxi : Praxi S.p.A.
// https://www.iana.org/domains/root/db/praxi.html
praxi

// press : Radix FZC DMCC
// https://www.iana.org/domains/root/db/press.html
press

// prime : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/prime.html
prime

// prod : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/prod.html
prod

// productions : Binky Moon, LLC
// https://www.iana.org/domains/root/db/productions.html
productions

// prof : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/prof.html
prof

// progressive : Progressive Casualty Insurance Company
// https://www.iana.org/domains/root/db/progressive.html
progressive

// promo : Identity Digital Limited
// https://www.iana.org/domains/root/db/promo.html
promo

// properties : Binky Moon, LLC
// https://www.iana.org/domains/root/db/properties.html
properties

// property : Digital Property Infrastructure Limited
// https://www.iana.org/domains/root/db/property.html
property

// protection : XYZ.COM LLC
// https://www.iana.org/domains/root/db/protection.html
protection

// pru : Prudential Financial, Inc.
// https://www.iana.org/domains/root/db/pru.html
pru

// prudential : Prudential Financial, Inc.
// https://www.iana.org/domains/root/db/prudential.html
prudential

// pub : Dog Beach, LLC
// https://www.iana.org/domains/root/db/pub.html
pub

// pwc : PricewaterhouseCoopers LLP
// https://www.iana.org/domains/root/db/pwc.html
pwc

// qpon : dotQPON LLC
// https://www.iana.org/domains/root/db/qpon.html
qpon

// quebec : PointQu\xE9bec Inc
// https://www.iana.org/domains/root/db/quebec.html
quebec

// quest : XYZ.COM LLC
// https://www.iana.org/domains/root/db/quest.html
quest

// racing : Premier Registry Limited
// https://www.iana.org/domains/root/db/racing.html
racing

// radio : European Broadcasting Union (EBU)
// https://www.iana.org/domains/root/db/radio.html
radio

// read : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/read.html
read

// realestate : dotRealEstate LLC
// https://www.iana.org/domains/root/db/realestate.html
realestate

// realtor : Real Estate Domains LLC
// https://www.iana.org/domains/root/db/realtor.html
realtor

// realty : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/realty.html
realty

// recipes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/recipes.html
recipes

// red : Identity Digital Limited
// https://www.iana.org/domains/root/db/red.html
red

// redstone : Redstone Haute Couture Co., Ltd.
// https://www.iana.org/domains/root/db/redstone.html
redstone

// redumbrella : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/redumbrella.html
redumbrella

// rehab : Dog Beach, LLC
// https://www.iana.org/domains/root/db/rehab.html
rehab

// reise : Binky Moon, LLC
// https://www.iana.org/domains/root/db/reise.html
reise

// reisen : Binky Moon, LLC
// https://www.iana.org/domains/root/db/reisen.html
reisen

// reit : National Association of Real Estate Investment Trusts, Inc.
// https://www.iana.org/domains/root/db/reit.html
reit

// reliance : Reliance Industries Limited
// https://www.iana.org/domains/root/db/reliance.html
reliance

// ren : ZDNS International Limited
// https://www.iana.org/domains/root/db/ren.html
ren

// rent : XYZ.COM LLC
// https://www.iana.org/domains/root/db/rent.html
rent

// rentals : Binky Moon, LLC
// https://www.iana.org/domains/root/db/rentals.html
rentals

// repair : Binky Moon, LLC
// https://www.iana.org/domains/root/db/repair.html
repair

// report : Binky Moon, LLC
// https://www.iana.org/domains/root/db/report.html
report

// republican : Dog Beach, LLC
// https://www.iana.org/domains/root/db/republican.html
republican

// rest : Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable
// https://www.iana.org/domains/root/db/rest.html
rest

// restaurant : Binky Moon, LLC
// https://www.iana.org/domains/root/db/restaurant.html
restaurant

// review : dot Review Limited
// https://www.iana.org/domains/root/db/review.html
review

// reviews : Dog Beach, LLC
// https://www.iana.org/domains/root/db/reviews.html
reviews

// rexroth : Robert Bosch GMBH
// https://www.iana.org/domains/root/db/rexroth.html
rexroth

// rich : iRegistry GmbH
// https://www.iana.org/domains/root/db/rich.html
rich

// richardli : Pacific Century Asset Management (HK) Limited
// https://www.iana.org/domains/root/db/richardli.html
richardli

// ricoh : Ricoh Company, Ltd.
// https://www.iana.org/domains/root/db/ricoh.html
ricoh

// ril : Reliance Industries Limited
// https://www.iana.org/domains/root/db/ril.html
ril

// rio : Empresa Municipal de Inform\xE1tica SA - IPLANRIO
// https://www.iana.org/domains/root/db/rio.html
rio

// rip : Dog Beach, LLC
// https://www.iana.org/domains/root/db/rip.html
rip

// rocher : Ferrero Trading Lux S.A.
// https://www.iana.org/domains/root/db/rocher.html
rocher

// rocks : Dog Beach, LLC
// https://www.iana.org/domains/root/db/rocks.html
rocks

// rodeo : Registry Services, LLC
// https://www.iana.org/domains/root/db/rodeo.html
rodeo

// rogers : Rogers Communications Canada Inc.
// https://www.iana.org/domains/root/db/rogers.html
rogers

// room : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/room.html
room

// rsvp : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/rsvp.html
rsvp

// rugby : World Rugby Strategic Developments Limited
// https://www.iana.org/domains/root/db/rugby.html
rugby

// ruhr : dotSaarland GmbH
// https://www.iana.org/domains/root/db/ruhr.html
ruhr

// run : Binky Moon, LLC
// https://www.iana.org/domains/root/db/run.html
run

// rwe : RWE AG
// https://www.iana.org/domains/root/db/rwe.html
rwe

// ryukyu : BRregistry, Inc.
// https://www.iana.org/domains/root/db/ryukyu.html
ryukyu

// saarland : dotSaarland GmbH
// https://www.iana.org/domains/root/db/saarland.html
saarland

// safe : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/safe.html
safe

// safety : Safety Registry Services, LLC.
// https://www.iana.org/domains/root/db/safety.html
safety

// sakura : SAKURA Internet Inc.
// https://www.iana.org/domains/root/db/sakura.html
sakura

// sale : Dog Beach, LLC
// https://www.iana.org/domains/root/db/sale.html
sale

// salon : Binky Moon, LLC
// https://www.iana.org/domains/root/db/salon.html
salon

// samsclub : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/samsclub.html
samsclub

// samsung : SAMSUNG SDS CO., LTD
// https://www.iana.org/domains/root/db/samsung.html
samsung

// sandvik : Sandvik AB
// https://www.iana.org/domains/root/db/sandvik.html
sandvik

// sandvikcoromant : Sandvik AB
// https://www.iana.org/domains/root/db/sandvikcoromant.html
sandvikcoromant

// sanofi : Sanofi
// https://www.iana.org/domains/root/db/sanofi.html
sanofi

// sap : SAP AG
// https://www.iana.org/domains/root/db/sap.html
sap

// sarl : Binky Moon, LLC
// https://www.iana.org/domains/root/db/sarl.html
sarl

// sas : Research IP LLC
// https://www.iana.org/domains/root/db/sas.html
sas

// save : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/save.html
save

// saxo : Saxo Bank A/S
// https://www.iana.org/domains/root/db/saxo.html
saxo

// sbi : STATE BANK OF INDIA
// https://www.iana.org/domains/root/db/sbi.html
sbi

// sbs : ShortDot SA
// https://www.iana.org/domains/root/db/sbs.html
sbs

// sca : SVENSKA CELLULOSA AKTIEBOLAGET SCA (publ)
// https://www.iana.org/domains/root/db/sca.html
sca

// scb : The Siam Commercial Bank Public Company Limited ("SCB")
// https://www.iana.org/domains/root/db/scb.html
scb

// schaeffler : Schaeffler Technologies AG & Co. KG
// https://www.iana.org/domains/root/db/schaeffler.html
schaeffler

// schmidt : SCHMIDT GROUPE S.A.S.
// https://www.iana.org/domains/root/db/schmidt.html
schmidt

// scholarships : Scholarships.com, LLC
// https://www.iana.org/domains/root/db/scholarships.html
scholarships

// school : Binky Moon, LLC
// https://www.iana.org/domains/root/db/school.html
school

// schule : Binky Moon, LLC
// https://www.iana.org/domains/root/db/schule.html
schule

// schwarz : Schwarz Domains und Services GmbH & Co. KG
// https://www.iana.org/domains/root/db/schwarz.html
schwarz

// science : dot Science Limited
// https://www.iana.org/domains/root/db/science.html
science

// scot : Dot Scot Registry Limited
// https://www.iana.org/domains/root/db/scot.html
scot

// search : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/search.html
search

// seat : SEAT, S.A. (Sociedad Unipersonal)
// https://www.iana.org/domains/root/db/seat.html
seat

// secure : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/secure.html
secure

// security : XYZ.COM LLC
// https://www.iana.org/domains/root/db/security.html
security

// seek : Seek Limited
// https://www.iana.org/domains/root/db/seek.html
seek

// select : Registry Services, LLC
// https://www.iana.org/domains/root/db/select.html
select

// sener : Sener Ingenier\xEDa y Sistemas, S.A.
// https://www.iana.org/domains/root/db/sener.html
sener

// services : Binky Moon, LLC
// https://www.iana.org/domains/root/db/services.html
services

// seven : Seven West Media Ltd
// https://www.iana.org/domains/root/db/seven.html
seven

// sew : SEW-EURODRIVE GmbH & Co KG
// https://www.iana.org/domains/root/db/sew.html
sew

// sex : ICM Registry SX LLC
// https://www.iana.org/domains/root/db/sex.html
sex

// sexy : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/sexy.html
sexy

// sfr : Societe Francaise du Radiotelephone - SFR
// https://www.iana.org/domains/root/db/sfr.html
sfr

// shangrila : Shangri\u2010La International Hotel Management Limited
// https://www.iana.org/domains/root/db/shangrila.html
shangrila

// sharp : Sharp Corporation
// https://www.iana.org/domains/root/db/sharp.html
sharp

// shaw : Shaw Cablesystems G.P.
// https://www.iana.org/domains/root/db/shaw.html
shaw

// shell : Shell Information Technology International Inc
// https://www.iana.org/domains/root/db/shell.html
shell

// shia : Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.
// https://www.iana.org/domains/root/db/shia.html
shia

// shiksha : Identity Digital Limited
// https://www.iana.org/domains/root/db/shiksha.html
shiksha

// shoes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/shoes.html
shoes

// shop : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/shop.html
shop

// shopping : Binky Moon, LLC
// https://www.iana.org/domains/root/db/shopping.html
shopping

// shouji : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/shouji.html
shouji

// show : Binky Moon, LLC
// https://www.iana.org/domains/root/db/show.html
show

// showtime : CBS Domains Inc.
// https://www.iana.org/domains/root/db/showtime.html
showtime

// silk : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/silk.html
silk

// sina : Sina Corporation
// https://www.iana.org/domains/root/db/sina.html
sina

// singles : Binky Moon, LLC
// https://www.iana.org/domains/root/db/singles.html
singles

// site : Radix FZC DMCC
// https://www.iana.org/domains/root/db/site.html
site

// ski : Identity Digital Limited
// https://www.iana.org/domains/root/db/ski.html
ski

// skin : XYZ.COM LLC
// https://www.iana.org/domains/root/db/skin.html
skin

// sky : Sky International AG
// https://www.iana.org/domains/root/db/sky.html
sky

// skype : Microsoft Corporation
// https://www.iana.org/domains/root/db/skype.html
skype

// sling : DISH Technologies L.L.C.
// https://www.iana.org/domains/root/db/sling.html
sling

// smart : Smart Communications, Inc. (SMART)
// https://www.iana.org/domains/root/db/smart.html
smart

// smile : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/smile.html
smile

// sncf : Soci\xE9t\xE9 Nationale SNCF
// https://www.iana.org/domains/root/db/sncf.html
sncf

// soccer : Binky Moon, LLC
// https://www.iana.org/domains/root/db/soccer.html
soccer

// social : Dog Beach, LLC
// https://www.iana.org/domains/root/db/social.html
social

// softbank : SoftBank Group Corp.
// https://www.iana.org/domains/root/db/softbank.html
softbank

// software : Dog Beach, LLC
// https://www.iana.org/domains/root/db/software.html
software

// sohu : Sohu.com Limited
// https://www.iana.org/domains/root/db/sohu.html
sohu

// solar : Binky Moon, LLC
// https://www.iana.org/domains/root/db/solar.html
solar

// solutions : Binky Moon, LLC
// https://www.iana.org/domains/root/db/solutions.html
solutions

// song : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/song.html
song

// sony : Sony Corporation
// https://www.iana.org/domains/root/db/sony.html
sony

// soy : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/soy.html
soy

// spa : Asia Spa and Wellness Promotion Council Limited
// https://www.iana.org/domains/root/db/spa.html
spa

// space : Radix FZC DMCC
// https://www.iana.org/domains/root/db/space.html
space

// sport : SportAccord
// https://www.iana.org/domains/root/db/sport.html
sport

// spot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/spot.html
spot

// srl : InterNetX, Corp
// https://www.iana.org/domains/root/db/srl.html
srl

// stada : STADA Arzneimittel AG
// https://www.iana.org/domains/root/db/stada.html
stada

// staples : Staples, Inc.
// https://www.iana.org/domains/root/db/staples.html
staples

// star : Star India Private Limited
// https://www.iana.org/domains/root/db/star.html
star

// statebank : STATE BANK OF INDIA
// https://www.iana.org/domains/root/db/statebank.html
statebank

// statefarm : State Farm Mutual Automobile Insurance Company
// https://www.iana.org/domains/root/db/statefarm.html
statefarm

// stc : Saudi Telecom Company
// https://www.iana.org/domains/root/db/stc.html
stc

// stcgroup : Saudi Telecom Company
// https://www.iana.org/domains/root/db/stcgroup.html
stcgroup

// stockholm : Stockholms kommun
// https://www.iana.org/domains/root/db/stockholm.html
stockholm

// storage : XYZ.COM LLC
// https://www.iana.org/domains/root/db/storage.html
storage

// store : Radix FZC DMCC
// https://www.iana.org/domains/root/db/store.html
store

// stream : dot Stream Limited
// https://www.iana.org/domains/root/db/stream.html
stream

// studio : Dog Beach, LLC
// https://www.iana.org/domains/root/db/studio.html
studio

// study : Registry Services, LLC
// https://www.iana.org/domains/root/db/study.html
study

// style : Binky Moon, LLC
// https://www.iana.org/domains/root/db/style.html
style

// sucks : Vox Populi Registry Ltd.
// https://www.iana.org/domains/root/db/sucks.html
sucks

// supplies : Binky Moon, LLC
// https://www.iana.org/domains/root/db/supplies.html
supplies

// supply : Binky Moon, LLC
// https://www.iana.org/domains/root/db/supply.html
supply

// support : Binky Moon, LLC
// https://www.iana.org/domains/root/db/support.html
support

// surf : Registry Services, LLC
// https://www.iana.org/domains/root/db/surf.html
surf

// surgery : Binky Moon, LLC
// https://www.iana.org/domains/root/db/surgery.html
surgery

// suzuki : SUZUKI MOTOR CORPORATION
// https://www.iana.org/domains/root/db/suzuki.html
suzuki

// swatch : The Swatch Group Ltd
// https://www.iana.org/domains/root/db/swatch.html
swatch

// swiss : Swiss Confederation
// https://www.iana.org/domains/root/db/swiss.html
swiss

// sydney : State of New South Wales, Department of Premier and Cabinet
// https://www.iana.org/domains/root/db/sydney.html
sydney

// systems : Binky Moon, LLC
// https://www.iana.org/domains/root/db/systems.html
systems

// tab : Tabcorp Holdings Limited
// https://www.iana.org/domains/root/db/tab.html
tab

// taipei : Taipei City Government
// https://www.iana.org/domains/root/db/taipei.html
taipei

// talk : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/talk.html
talk

// taobao : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/taobao.html
taobao

// target : Target Domain Holdings, LLC
// https://www.iana.org/domains/root/db/target.html
target

// tatamotors : Tata Motors Ltd
// https://www.iana.org/domains/root/db/tatamotors.html
tatamotors

// tatar : Limited Liability Company "Coordination Center of Regional Domain of Tatarstan Republic"
// https://www.iana.org/domains/root/db/tatar.html
tatar

// tattoo : Registry Services, LLC
// https://www.iana.org/domains/root/db/tattoo.html
tattoo

// tax : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tax.html
tax

// taxi : Binky Moon, LLC
// https://www.iana.org/domains/root/db/taxi.html
taxi

// tci : Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.
// https://www.iana.org/domains/root/db/tci.html
tci

// tdk : TDK Corporation
// https://www.iana.org/domains/root/db/tdk.html
tdk

// team : Binky Moon, LLC
// https://www.iana.org/domains/root/db/team.html
team

// tech : Radix FZC DMCC
// https://www.iana.org/domains/root/db/tech.html
tech

// technology : Binky Moon, LLC
// https://www.iana.org/domains/root/db/technology.html
technology

// temasek : Temasek Holdings (Private) Limited
// https://www.iana.org/domains/root/db/temasek.html
temasek

// tennis : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tennis.html
tennis

// teva : Teva Pharmaceutical Industries Limited
// https://www.iana.org/domains/root/db/teva.html
teva

// thd : Home Depot Product Authority, LLC
// https://www.iana.org/domains/root/db/thd.html
thd

// theater : Binky Moon, LLC
// https://www.iana.org/domains/root/db/theater.html
theater

// theatre : XYZ.COM LLC
// https://www.iana.org/domains/root/db/theatre.html
theatre

// tiaa : Teachers Insurance and Annuity Association of America
// https://www.iana.org/domains/root/db/tiaa.html
tiaa

// tickets : XYZ.COM LLC
// https://www.iana.org/domains/root/db/tickets.html
tickets

// tienda : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tienda.html
tienda

// tips : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tips.html
tips

// tires : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tires.html
tires

// tirol : punkt Tirol GmbH
// https://www.iana.org/domains/root/db/tirol.html
tirol

// tjmaxx : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/tjmaxx.html
tjmaxx

// tjx : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/tjx.html
tjx

// tkmaxx : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/tkmaxx.html
tkmaxx

// tmall : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/tmall.html
tmall

// today : Binky Moon, LLC
// https://www.iana.org/domains/root/db/today.html
today

// tokyo : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/tokyo.html
tokyo

// tools : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tools.html
tools

// top : .TOP Registry
// https://www.iana.org/domains/root/db/top.html
top

// toray : Toray Industries, Inc.
// https://www.iana.org/domains/root/db/toray.html
toray

// toshiba : TOSHIBA Corporation
// https://www.iana.org/domains/root/db/toshiba.html
toshiba

// total : TotalEnergies SE
// https://www.iana.org/domains/root/db/total.html
total

// tours : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tours.html
tours

// town : Binky Moon, LLC
// https://www.iana.org/domains/root/db/town.html
town

// toyota : TOYOTA MOTOR CORPORATION
// https://www.iana.org/domains/root/db/toyota.html
toyota

// toys : Binky Moon, LLC
// https://www.iana.org/domains/root/db/toys.html
toys

// trade : Elite Registry Limited
// https://www.iana.org/domains/root/db/trade.html
trade

// trading : Dog Beach, LLC
// https://www.iana.org/domains/root/db/trading.html
trading

// training : Binky Moon, LLC
// https://www.iana.org/domains/root/db/training.html
training

// travel : Dog Beach, LLC
// https://www.iana.org/domains/root/db/travel.html
travel

// travelers : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/travelers.html
travelers

// travelersinsurance : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/travelersinsurance.html
travelersinsurance

// trust : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/trust.html
trust

// trv : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/trv.html
trv

// tube : Latin American Telecom LLC
// https://www.iana.org/domains/root/db/tube.html
tube

// tui : TUI AG
// https://www.iana.org/domains/root/db/tui.html
tui

// tunes : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/tunes.html
tunes

// tushu : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/tushu.html
tushu

// tvs : T V SUNDRAM IYENGAR  & SONS LIMITED
// https://www.iana.org/domains/root/db/tvs.html
tvs

// ubank : National Australia Bank Limited
// https://www.iana.org/domains/root/db/ubank.html
ubank

// ubs : UBS AG
// https://www.iana.org/domains/root/db/ubs.html
ubs

// unicom : China United Network Communications Corporation Limited
// https://www.iana.org/domains/root/db/unicom.html
unicom

// university : Binky Moon, LLC
// https://www.iana.org/domains/root/db/university.html
university

// uno : Radix FZC DMCC
// https://www.iana.org/domains/root/db/uno.html
uno

// uol : UBN INTERNET LTDA.
// https://www.iana.org/domains/root/db/uol.html
uol

// ups : UPS Market Driver, Inc.
// https://www.iana.org/domains/root/db/ups.html
ups

// vacations : Binky Moon, LLC
// https://www.iana.org/domains/root/db/vacations.html
vacations

// vana : Lifestyle Domain Holdings, Inc.
// https://www.iana.org/domains/root/db/vana.html
vana

// vanguard : The Vanguard Group, Inc.
// https://www.iana.org/domains/root/db/vanguard.html
vanguard

// vegas : Dot Vegas, Inc.
// https://www.iana.org/domains/root/db/vegas.html
vegas

// ventures : Binky Moon, LLC
// https://www.iana.org/domains/root/db/ventures.html
ventures

// verisign : VeriSign, Inc.
// https://www.iana.org/domains/root/db/verisign.html
verisign

// versicherung : tldbox GmbH
// https://www.iana.org/domains/root/db/versicherung.html
versicherung

// vet : Dog Beach, LLC
// https://www.iana.org/domains/root/db/vet.html
vet

// viajes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/viajes.html
viajes

// video : Dog Beach, LLC
// https://www.iana.org/domains/root/db/video.html
video

// vig : VIENNA INSURANCE GROUP AG Wiener Versicherung Gruppe
// https://www.iana.org/domains/root/db/vig.html
vig

// viking : Viking River Cruises (Bermuda) Ltd.
// https://www.iana.org/domains/root/db/viking.html
viking

// villas : Binky Moon, LLC
// https://www.iana.org/domains/root/db/villas.html
villas

// vin : Binky Moon, LLC
// https://www.iana.org/domains/root/db/vin.html
vin

// vip : Registry Services, LLC
// https://www.iana.org/domains/root/db/vip.html
vip

// virgin : Virgin Enterprises Limited
// https://www.iana.org/domains/root/db/virgin.html
virgin

// visa : Visa Worldwide Pte. Limited
// https://www.iana.org/domains/root/db/visa.html
visa

// vision : Binky Moon, LLC
// https://www.iana.org/domains/root/db/vision.html
vision

// viva : Saudi Telecom Company
// https://www.iana.org/domains/root/db/viva.html
viva

// vivo : Telefonica Brasil S.A.
// https://www.iana.org/domains/root/db/vivo.html
vivo

// vlaanderen : DNS.be vzw
// https://www.iana.org/domains/root/db/vlaanderen.html
vlaanderen

// vodka : Registry Services, LLC
// https://www.iana.org/domains/root/db/vodka.html
vodka

// volkswagen : Volkswagen Group of America Inc.
// https://www.iana.org/domains/root/db/volkswagen.html
volkswagen

// volvo : Volvo Holding Sverige Aktiebolag
// https://www.iana.org/domains/root/db/volvo.html
volvo

// vote : Monolith Registry LLC
// https://www.iana.org/domains/root/db/vote.html
vote

// voting : Valuetainment Corp.
// https://www.iana.org/domains/root/db/voting.html
voting

// voto : Monolith Registry LLC
// https://www.iana.org/domains/root/db/voto.html
voto

// voyage : Binky Moon, LLC
// https://www.iana.org/domains/root/db/voyage.html
voyage

// wales : Nominet UK
// https://www.iana.org/domains/root/db/wales.html
wales

// walmart : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/walmart.html
walmart

// walter : Sandvik AB
// https://www.iana.org/domains/root/db/walter.html
walter

// wang : Zodiac Wang Limited
// https://www.iana.org/domains/root/db/wang.html
wang

// wanggou : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/wanggou.html
wanggou

// watch : Binky Moon, LLC
// https://www.iana.org/domains/root/db/watch.html
watch

// watches : Identity Digital Limited
// https://www.iana.org/domains/root/db/watches.html
watches

// weather : International Business Machines Corporation
// https://www.iana.org/domains/root/db/weather.html
weather

// weatherchannel : International Business Machines Corporation
// https://www.iana.org/domains/root/db/weatherchannel.html
weatherchannel

// webcam : dot Webcam Limited
// https://www.iana.org/domains/root/db/webcam.html
webcam

// weber : Saint-Gobain Weber SA
// https://www.iana.org/domains/root/db/weber.html
weber

// website : Radix FZC DMCC
// https://www.iana.org/domains/root/db/website.html
website

// wedding : Registry Services, LLC
// https://www.iana.org/domains/root/db/wedding.html
wedding

// weibo : Sina Corporation
// https://www.iana.org/domains/root/db/weibo.html
weibo

// weir : Weir Group IP Limited
// https://www.iana.org/domains/root/db/weir.html
weir

// whoswho : Who's Who Registry
// https://www.iana.org/domains/root/db/whoswho.html
whoswho

// wien : punkt.wien GmbH
// https://www.iana.org/domains/root/db/wien.html
wien

// wiki : Registry Services, LLC
// https://www.iana.org/domains/root/db/wiki.html
wiki

// williamhill : William Hill Organization Limited
// https://www.iana.org/domains/root/db/williamhill.html
williamhill

// win : First Registry Limited
// https://www.iana.org/domains/root/db/win.html
win

// windows : Microsoft Corporation
// https://www.iana.org/domains/root/db/windows.html
windows

// wine : Binky Moon, LLC
// https://www.iana.org/domains/root/db/wine.html
wine

// winners : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/winners.html
winners

// wme : William Morris Endeavor Entertainment, LLC
// https://www.iana.org/domains/root/db/wme.html
wme

// wolterskluwer : Wolters Kluwer N.V.
// https://www.iana.org/domains/root/db/wolterskluwer.html
wolterskluwer

// woodside : Woodside Petroleum Limited
// https://www.iana.org/domains/root/db/woodside.html
woodside

// work : Registry Services, LLC
// https://www.iana.org/domains/root/db/work.html
work

// works : Binky Moon, LLC
// https://www.iana.org/domains/root/db/works.html
works

// world : Binky Moon, LLC
// https://www.iana.org/domains/root/db/world.html
world

// wow : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/wow.html
wow

// wtc : World Trade Centers Association, Inc.
// https://www.iana.org/domains/root/db/wtc.html
wtc

// wtf : Binky Moon, LLC
// https://www.iana.org/domains/root/db/wtf.html
wtf

// xbox : Microsoft Corporation
// https://www.iana.org/domains/root/db/xbox.html
xbox

// xerox : Xerox DNHC LLC
// https://www.iana.org/domains/root/db/xerox.html
xerox

// xfinity : Comcast IP Holdings I, LLC
// https://www.iana.org/domains/root/db/xfinity.html
xfinity

// xihuan : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/xihuan.html
xihuan

// xin : Elegant Leader Limited
// https://www.iana.org/domains/root/db/xin.html
xin

// xn--11b4c3d : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--11b4c3d.html
\u0915\u0949\u092E

// xn--1ck2e1b : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--1ck2e1b.html
\u30BB\u30FC\u30EB

// xn--1qqw23a : Guangzhou YU Wei Information Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--1qqw23a.html
\u4F5B\u5C71

// xn--30rr7y : Excellent First Limited
// https://www.iana.org/domains/root/db/xn--30rr7y.html
\u6148\u5584

// xn--3bst00m : Eagle Horizon Limited
// https://www.iana.org/domains/root/db/xn--3bst00m.html
\u96C6\u56E2

// xn--3ds443g : TLD REGISTRY LIMITED OY
// https://www.iana.org/domains/root/db/xn--3ds443g.html
\u5728\u7EBF

// xn--3pxu8k : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--3pxu8k.html
\u70B9\u770B

// xn--42c2d9a : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--42c2d9a.html
\u0E04\u0E2D\u0E21

// xn--45q11c : Zodiac Gemini Ltd
// https://www.iana.org/domains/root/db/xn--45q11c.html
\u516B\u5366

// xn--4gbrim : Helium TLDs Ltd
// https://www.iana.org/domains/root/db/xn--4gbrim.html
\u0645\u0648\u0642\u0639

// xn--55qw42g : China Organizational Name Administration Center
// https://www.iana.org/domains/root/db/xn--55qw42g.html
\u516C\u76CA

// xn--55qx5d : China Internet Network Information Center (CNNIC)
// https://www.iana.org/domains/root/db/xn--55qx5d.html
\u516C\u53F8

// xn--5su34j936bgsg : Shangri\u2010La International Hotel Management Limited
// https://www.iana.org/domains/root/db/xn--5su34j936bgsg.html
\u9999\u683C\u91CC\u62C9

// xn--5tzm5g : Global Website TLD Asia Limited
// https://www.iana.org/domains/root/db/xn--5tzm5g.html
\u7F51\u7AD9

// xn--6frz82g : Identity Digital Limited
// https://www.iana.org/domains/root/db/xn--6frz82g.html
\u79FB\u52A8

// xn--6qq986b3xl : Tycoon Treasure Limited
// https://www.iana.org/domains/root/db/xn--6qq986b3xl.html
\u6211\u7231\u4F60

// xn--80adxhks : Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)
// https://www.iana.org/domains/root/db/xn--80adxhks.html
\u043C\u043E\u0441\u043A\u0432\u0430

// xn--80aqecdr1a : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/xn--80aqecdr1a.html
\u043A\u0430\u0442\u043E\u043B\u0438\u043A

// xn--80asehdb : CORE Association
// https://www.iana.org/domains/root/db/xn--80asehdb.html
\u043E\u043D\u043B\u0430\u0439\u043D

// xn--80aswg : CORE Association
// https://www.iana.org/domains/root/db/xn--80aswg.html
\u0441\u0430\u0439\u0442

// xn--8y0a063a : China United Network Communications Corporation Limited
// https://www.iana.org/domains/root/db/xn--8y0a063a.html
\u8054\u901A

// xn--9dbq2a : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--9dbq2a.html
\u05E7\u05D5\u05DD

// xn--9et52u : RISE VICTORY LIMITED
// https://www.iana.org/domains/root/db/xn--9et52u.html
\u65F6\u5C1A

// xn--9krt00a : Sina Corporation
// https://www.iana.org/domains/root/db/xn--9krt00a.html
\u5FAE\u535A

// xn--b4w605ferd : Temasek Holdings (Private) Limited
// https://www.iana.org/domains/root/db/xn--b4w605ferd.html
\u6DE1\u9A6C\u9521

// xn--bck1b9a5dre4c : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--bck1b9a5dre4c.html
\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3

// xn--c1avg : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--c1avg.html
\u043E\u0440\u0433

// xn--c2br7g : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--c2br7g.html
\u0928\u0947\u091F

// xn--cck2b3b : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--cck2b3b.html
\u30B9\u30C8\u30A2

// xn--cckwcxetd : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--cckwcxetd.html
\u30A2\u30DE\u30BE\u30F3

// xn--cg4bki : SAMSUNG SDS CO., LTD
// https://www.iana.org/domains/root/db/xn--cg4bki.html
\uC0BC\uC131

// xn--czr694b : Internet DotTrademark Organisation Limited
// https://www.iana.org/domains/root/db/xn--czr694b.html
\u5546\u6807

// xn--czrs0t : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--czrs0t.html
\u5546\u5E97

// xn--czru2d : Zodiac Aquarius Limited
// https://www.iana.org/domains/root/db/xn--czru2d.html
\u5546\u57CE

// xn--d1acj3b : The Foundation for Network Initiatives \u201CThe Smart Internet\u201D
// https://www.iana.org/domains/root/db/xn--d1acj3b.html
\u0434\u0435\u0442\u0438

// xn--eckvdtc9d : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--eckvdtc9d.html
\u30DD\u30A4\u30F3\u30C8

// xn--efvy88h : Guangzhou YU Wei Information Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--efvy88h.html
\u65B0\u95FB

// xn--fct429k : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--fct429k.html
\u5BB6\u96FB

// xn--fhbei : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--fhbei.html
\u0643\u0648\u0645

// xn--fiq228c5hs : TLD REGISTRY LIMITED OY
// https://www.iana.org/domains/root/db/xn--fiq228c5hs.html
\u4E2D\u6587\u7F51

// xn--fiq64b : CITIC Group Corporation
// https://www.iana.org/domains/root/db/xn--fiq64b.html
\u4E2D\u4FE1

// xn--fjq720a : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--fjq720a.html
\u5A31\u4E50

// xn--flw351e : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/xn--flw351e.html
\u8C37\u6B4C

// xn--fzys8d69uvgm : PCCW Enterprises Limited
// https://www.iana.org/domains/root/db/xn--fzys8d69uvgm.html
\u96FB\u8A0A\u76C8\u79D1

// xn--g2xx48c : Nawang Heli(Xiamen) Network Service Co., LTD.
// https://www.iana.org/domains/root/db/xn--g2xx48c.html
\u8D2D\u7269

// xn--gckr3f0f : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--gckr3f0f.html
\u30AF\u30E9\u30A6\u30C9

// xn--gk3at1e : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--gk3at1e.html
\u901A\u8CA9

// xn--hxt814e : Zodiac Taurus Limited
// https://www.iana.org/domains/root/db/xn--hxt814e.html
\u7F51\u5E97

// xn--i1b6b1a6a2e : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--i1b6b1a6a2e.html
\u0938\u0902\u0917\u0920\u0928

// xn--imr513n : Internet DotTrademark Organisation Limited
// https://www.iana.org/domains/root/db/xn--imr513n.html
\u9910\u5385

// xn--io0a7i : China Internet Network Information Center (CNNIC)
// https://www.iana.org/domains/root/db/xn--io0a7i.html
\u7F51\u7EDC

// xn--j1aef : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--j1aef.html
\u043A\u043E\u043C

// xn--jlq480n2rg : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--jlq480n2rg.html
\u4E9A\u9A6C\u900A

// xn--jvr189m : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--jvr189m.html
\u98DF\u54C1

// xn--kcrx77d1x4a : Koninklijke Philips N.V.
// https://www.iana.org/domains/root/db/xn--kcrx77d1x4a.html
\u98DE\u5229\u6D66

// xn--kput3i : Beijing RITT-Net Technology Development Co., Ltd
// https://www.iana.org/domains/root/db/xn--kput3i.html
\u624B\u673A

// xn--mgba3a3ejt : Aramco Services Company
// https://www.iana.org/domains/root/db/xn--mgba3a3ejt.html
\u0627\u0631\u0627\u0645\u0643\u0648

// xn--mgba7c0bbn0a : Competrol (Luxembourg) Sarl
// https://www.iana.org/domains/root/db/xn--mgba7c0bbn0a.html
\u0627\u0644\u0639\u0644\u064A\u0627\u0646

// xn--mgbaakc7dvf : Emirates Telecommunications Corporation (trading as Etisalat)
// https://www.iana.org/domains/root/db/xn--mgbaakc7dvf.html
\u0627\u062A\u0635\u0627\u0644\u0627\u062A

// xn--mgbab2bd : CORE Association
// https://www.iana.org/domains/root/db/xn--mgbab2bd.html
\u0628\u0627\u0632\u0627\u0631

// xn--mgbca7dzdo : Abu Dhabi Systems and Information Centre
// https://www.iana.org/domains/root/db/xn--mgbca7dzdo.html
\u0627\u0628\u0648\u0638\u0628\u064A

// xn--mgbi4ecexp : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/xn--mgbi4ecexp.html
\u0643\u0627\u062B\u0648\u0644\u064A\u0643

// xn--mgbt3dhd : Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.
// https://www.iana.org/domains/root/db/xn--mgbt3dhd.html
\u0647\u0645\u0631\u0627\u0647

// xn--mk1bu44c : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--mk1bu44c.html
\uB2F7\uCEF4

// xn--mxtq1m : Net-Chinese Co., Ltd.
// https://www.iana.org/domains/root/db/xn--mxtq1m.html
\u653F\u5E9C

// xn--ngbc5azd : International Domain Registry Pty. Ltd.
// https://www.iana.org/domains/root/db/xn--ngbc5azd.html
\u0634\u0628\u0643\u0629

// xn--ngbe9e0a : Kuwait Finance House
// https://www.iana.org/domains/root/db/xn--ngbe9e0a.html
\u0628\u064A\u062A\u0643

// xn--ngbrx : League of Arab States
// https://www.iana.org/domains/root/db/xn--ngbrx.html
\u0639\u0631\u0628

// xn--nqv7f : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--nqv7f.html
\u673A\u6784

// xn--nqv7fs00ema : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--nqv7fs00ema.html
\u7EC4\u7EC7\u673A\u6784

// xn--nyqy26a : Stable Tone Limited
// https://www.iana.org/domains/root/db/xn--nyqy26a.html
\u5065\u5EB7

// xn--otu796d : Jiang Yu Liang Cai Technology Company Limited
// https://www.iana.org/domains/root/db/xn--otu796d.html
\u62DB\u8058

// xn--p1acf : Rusnames Limited
// https://www.iana.org/domains/root/db/xn--p1acf.html
\u0440\u0443\u0441

// xn--pssy2u : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--pssy2u.html
\u5927\u62FF

// xn--q9jyb4c : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/xn--q9jyb4c.html
\u307F\u3093\u306A

// xn--qcka1pmc : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/xn--qcka1pmc.html
\u30B0\u30FC\u30B0\u30EB

// xn--rhqv96g : Stable Tone Limited
// https://www.iana.org/domains/root/db/xn--rhqv96g.html
\u4E16\u754C

// xn--rovu88b : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--rovu88b.html
\u66F8\u7C4D

// xn--ses554g : KNET Co., Ltd.
// https://www.iana.org/domains/root/db/xn--ses554g.html
\u7F51\u5740

// xn--t60b56a : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--t60b56a.html
\uB2F7\uB137

// xn--tckwe : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--tckwe.html
\u30B3\u30E0

// xn--tiq49xqyj : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/xn--tiq49xqyj.html
\u5929\u4E3B\u6559

// xn--unup4y : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--unup4y.html
\u6E38\u620F

// xn--vermgensberater-ctb : Deutsche Verm\xF6gensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/xn--vermgensberater-ctb.html
verm\xF6gensberater

// xn--vermgensberatung-pwb : Deutsche Verm\xF6gensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/xn--vermgensberatung-pwb.html
verm\xF6gensberatung

// xn--vhquv : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--vhquv.html
\u4F01\u4E1A

// xn--vuq861b : Beijing Tele-info Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--vuq861b.html
\u4FE1\u606F

// xn--w4r85el8fhu5dnra : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/xn--w4r85el8fhu5dnra.html
\u5609\u91CC\u5927\u9152\u5E97

// xn--w4rs40l : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/xn--w4rs40l.html
\u5609\u91CC

// xn--xhq521b : Guangzhou YU Wei Information Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--xhq521b.html
\u5E7F\u4E1C

// xn--zfr164b : China Organizational Name Administration Center
// https://www.iana.org/domains/root/db/xn--zfr164b.html
\u653F\u52A1

// xyz : XYZ.COM LLC
// https://www.iana.org/domains/root/db/xyz.html
xyz

// yachts : XYZ.COM LLC
// https://www.iana.org/domains/root/db/yachts.html
yachts

// yahoo : Oath Inc.
// https://www.iana.org/domains/root/db/yahoo.html
yahoo

// yamaxun : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/yamaxun.html
yamaxun

// yandex : Yandex Europe B.V.
// https://www.iana.org/domains/root/db/yandex.html
yandex

// yodobashi : YODOBASHI CAMERA CO.,LTD.
// https://www.iana.org/domains/root/db/yodobashi.html
yodobashi

// yoga : Registry Services, LLC
// https://www.iana.org/domains/root/db/yoga.html
yoga

// yokohama : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/yokohama.html
yokohama

// you : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/you.html
you

// youtube : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/youtube.html
youtube

// yun : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/yun.html
yun

// zappos : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/zappos.html
zappos

// zara : Industria de Dise\xF1o Textil, S.A. (INDITEX, S.A.)
// https://www.iana.org/domains/root/db/zara.html
zara

// zero : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/zero.html
zero

// zip : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/zip.html
zip

// zone : Binky Moon, LLC
// https://www.iana.org/domains/root/db/zone.html
zone

// zuerich : Kanton Z\xFCrich (Canton of Zurich)
// https://www.iana.org/domains/root/db/zuerich.html
zuerich


// ===END ICANN DOMAINS===
// ===BEGIN PRIVATE DOMAINS===
// (Note: these are in alphabetical order by company name)

// 1GB LLC : https://www.1gb.ua/
// Submitted by 1GB LLC <noc@1gb.com.ua>
cc.ua
inf.ua
ltd.ua

// 611coin : https://611project.org/
611.to

// Aaron Marais' Gitlab pages: https://lab.aaronleem.co.za
// Submitted by Aaron Marais <its_me@aaronleem.co.za>
graphox.us

// accesso Technology Group, plc. : https://accesso.com/
// Submitted by accesso Team <accessoecommerce@accesso.com>
*.devcdnaccesso.com

// Acorn Labs : https://acorn.io
// Submitted by Craig Jellick <domains@acorn.io>
*.on-acorn.io

// ActiveTrail: https://www.activetrail.biz/
// Submitted by Ofer Kalaora <postmaster@activetrail.com>
activetrail.biz

// Adobe : https://www.adobe.com/
// Submitted by Ian Boston <boston@adobe.com> and Lars Trieloff <trieloff@adobe.com>
adobeaemcloud.com
*.dev.adobeaemcloud.com
hlx.live
adobeaemcloud.net
hlx.page
hlx3.page

// Adobe Developer Platform : https://developer.adobe.com
// Submitted by Jesse MacFadyen<jessem@adobe.com>
adobeio-static.net
adobeioruntime.net

// Agnat sp. z o.o. : https://domena.pl
// Submitted by Przemyslaw Plewa <it-admin@domena.pl>
beep.pl

// Airkit : https://www.airkit.com/
// Submitted by Grant Cooksey <security@airkit.com>
airkitapps.com
airkitapps-au.com
airkitapps.eu

// Aiven: https://aiven.io/
// Submitted by Etienne Stalmans <security@aiven.io>
aivencloud.com

// Akamai : https://www.akamai.com/
// Submitted by Akamai Team <publicsuffixlist@akamai.com>
akadns.net
akamai.net
akamai-staging.net
akamaiedge.net
akamaiedge-staging.net
akamaihd.net
akamaihd-staging.net
akamaiorigin.net
akamaiorigin-staging.net
akamaized.net
akamaized-staging.net
edgekey.net
edgekey-staging.net
edgesuite.net
edgesuite-staging.net

// alboto.ca : http://alboto.ca
// Submitted by Anton Avramov <avramov@alboto.ca>
barsy.ca

// Alces Software Ltd : http://alces-software.com
// Submitted by Mark J. Titorenko <mark.titorenko@alces-software.com>
*.compute.estate
*.alces.network

// all-inkl.com : https://all-inkl.com
// Submitted by Werner Kaltofen <wk@all-inkl.com>
kasserver.com

// Altervista: https://www.altervista.org
// Submitted by Carlo Cannas <tech_staff@altervista.it>
altervista.org

// alwaysdata : https://www.alwaysdata.com
// Submitted by Cyril <admin@alwaysdata.com>
alwaysdata.net

// Amaze Software : https://amaze.co
// Submitted by Domain Admin <domainadmin@amaze.co>
myamaze.net

// Amazon : https://www.amazon.com/
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Subsections of Amazon/subsidiaries will appear until "concludes" tag

// Amazon CloudFront
// Submitted by Donavan Miller <donavanm@amazon.com>
// Reference: 54144616-fd49-4435-8535-19c6a601bdb3
cloudfront.net

// Amazon EC2
// Submitted by Luke Wells <psl-maintainers@amazon.com>
// Reference: 4c38fa71-58ac-4768-99e5-689c1767e537
*.compute.amazonaws.com
*.compute-1.amazonaws.com
*.compute.amazonaws.com.cn
us-east-1.amazonaws.com

// Amazon S3
// Submitted by Luke Wells <psl-maintainers@amazon.com>
// Reference: d068bd97-f0a9-4838-a6d8-954b622ef4ae
s3.cn-north-1.amazonaws.com.cn
s3.dualstack.ap-northeast-1.amazonaws.com
s3.dualstack.ap-northeast-2.amazonaws.com
s3.ap-northeast-2.amazonaws.com
s3-website.ap-northeast-2.amazonaws.com
s3.dualstack.ap-south-1.amazonaws.com
s3.ap-south-1.amazonaws.com
s3-website.ap-south-1.amazonaws.com
s3.dualstack.ap-southeast-1.amazonaws.com
s3.dualstack.ap-southeast-2.amazonaws.com
s3.dualstack.ca-central-1.amazonaws.com
s3.ca-central-1.amazonaws.com
s3-website.ca-central-1.amazonaws.com
s3.dualstack.eu-central-1.amazonaws.com
s3.eu-central-1.amazonaws.com
s3-website.eu-central-1.amazonaws.com
s3.dualstack.eu-west-1.amazonaws.com
s3.dualstack.eu-west-2.amazonaws.com
s3.eu-west-2.amazonaws.com
s3-website.eu-west-2.amazonaws.com
s3.dualstack.eu-west-3.amazonaws.com
s3.eu-west-3.amazonaws.com
s3-website.eu-west-3.amazonaws.com
s3.amazonaws.com
s3-ap-northeast-1.amazonaws.com
s3-ap-northeast-2.amazonaws.com
s3-ap-south-1.amazonaws.com
s3-ap-southeast-1.amazonaws.com
s3-ap-southeast-2.amazonaws.com
s3-ca-central-1.amazonaws.com
s3-eu-central-1.amazonaws.com
s3-eu-west-1.amazonaws.com
s3-eu-west-2.amazonaws.com
s3-eu-west-3.amazonaws.com
s3-external-1.amazonaws.com
s3-fips-us-gov-west-1.amazonaws.com
s3-sa-east-1.amazonaws.com
s3-us-east-2.amazonaws.com
s3-us-gov-west-1.amazonaws.com
s3-us-west-1.amazonaws.com
s3-us-west-2.amazonaws.com
s3-website-ap-northeast-1.amazonaws.com
s3-website-ap-southeast-1.amazonaws.com
s3-website-ap-southeast-2.amazonaws.com
s3-website-eu-west-1.amazonaws.com
s3-website-sa-east-1.amazonaws.com
s3-website-us-east-1.amazonaws.com
s3-website-us-west-1.amazonaws.com
s3-website-us-west-2.amazonaws.com
s3.dualstack.sa-east-1.amazonaws.com
s3.dualstack.us-east-1.amazonaws.com
s3.dualstack.us-east-2.amazonaws.com
s3.us-east-2.amazonaws.com
s3-website.us-east-2.amazonaws.com

// Analytics on AWS
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: c02c3a80-f8a0-4fd2-b719-48ea8b7c28de
analytics-gateway.ap-northeast-1.amazonaws.com
analytics-gateway.eu-west-1.amazonaws.com
analytics-gateway.us-east-1.amazonaws.com
analytics-gateway.us-east-2.amazonaws.com
analytics-gateway.us-west-2.amazonaws.com

// AWS Cloud9
// Submitted by: AWS Security <psl-maintainers@amazon.com>
// Reference: 05c44955-977c-4b57-938a-f2af92733f9f
webview-assets.aws-cloud9.af-south-1.amazonaws.com
vfs.cloud9.af-south-1.amazonaws.com
webview-assets.cloud9.af-south-1.amazonaws.com
webview-assets.aws-cloud9.ap-east-1.amazonaws.com
vfs.cloud9.ap-east-1.amazonaws.com
webview-assets.cloud9.ap-east-1.amazonaws.com
webview-assets.aws-cloud9.ap-northeast-1.amazonaws.com
vfs.cloud9.ap-northeast-1.amazonaws.com
webview-assets.cloud9.ap-northeast-1.amazonaws.com
webview-assets.aws-cloud9.ap-northeast-2.amazonaws.com
vfs.cloud9.ap-northeast-2.amazonaws.com
webview-assets.cloud9.ap-northeast-2.amazonaws.com
webview-assets.aws-cloud9.ap-northeast-3.amazonaws.com
vfs.cloud9.ap-northeast-3.amazonaws.com
webview-assets.cloud9.ap-northeast-3.amazonaws.com
webview-assets.aws-cloud9.ap-south-1.amazonaws.com
vfs.cloud9.ap-south-1.amazonaws.com
webview-assets.cloud9.ap-south-1.amazonaws.com
webview-assets.aws-cloud9.ap-southeast-1.amazonaws.com
vfs.cloud9.ap-southeast-1.amazonaws.com
webview-assets.cloud9.ap-southeast-1.amazonaws.com
webview-assets.aws-cloud9.ap-southeast-2.amazonaws.com
vfs.cloud9.ap-southeast-2.amazonaws.com
webview-assets.cloud9.ap-southeast-2.amazonaws.com
webview-assets.aws-cloud9.ca-central-1.amazonaws.com
vfs.cloud9.ca-central-1.amazonaws.com
webview-assets.cloud9.ca-central-1.amazonaws.com
webview-assets.aws-cloud9.eu-central-1.amazonaws.com
vfs.cloud9.eu-central-1.amazonaws.com
webview-assets.cloud9.eu-central-1.amazonaws.com
webview-assets.aws-cloud9.eu-north-1.amazonaws.com
vfs.cloud9.eu-north-1.amazonaws.com
webview-assets.cloud9.eu-north-1.amazonaws.com
webview-assets.aws-cloud9.eu-south-1.amazonaws.com
vfs.cloud9.eu-south-1.amazonaws.com
webview-assets.cloud9.eu-south-1.amazonaws.com
webview-assets.aws-cloud9.eu-west-1.amazonaws.com
vfs.cloud9.eu-west-1.amazonaws.com
webview-assets.cloud9.eu-west-1.amazonaws.com
webview-assets.aws-cloud9.eu-west-2.amazonaws.com
vfs.cloud9.eu-west-2.amazonaws.com
webview-assets.cloud9.eu-west-2.amazonaws.com
webview-assets.aws-cloud9.eu-west-3.amazonaws.com
vfs.cloud9.eu-west-3.amazonaws.com
webview-assets.cloud9.eu-west-3.amazonaws.com
webview-assets.aws-cloud9.me-south-1.amazonaws.com
vfs.cloud9.me-south-1.amazonaws.com
webview-assets.cloud9.me-south-1.amazonaws.com
webview-assets.aws-cloud9.sa-east-1.amazonaws.com
vfs.cloud9.sa-east-1.amazonaws.com
webview-assets.cloud9.sa-east-1.amazonaws.com
webview-assets.aws-cloud9.us-east-1.amazonaws.com
vfs.cloud9.us-east-1.amazonaws.com
webview-assets.cloud9.us-east-1.amazonaws.com
webview-assets.aws-cloud9.us-east-2.amazonaws.com
vfs.cloud9.us-east-2.amazonaws.com
webview-assets.cloud9.us-east-2.amazonaws.com
webview-assets.aws-cloud9.us-west-1.amazonaws.com
vfs.cloud9.us-west-1.amazonaws.com
webview-assets.cloud9.us-west-1.amazonaws.com
webview-assets.aws-cloud9.us-west-2.amazonaws.com
vfs.cloud9.us-west-2.amazonaws.com
webview-assets.cloud9.us-west-2.amazonaws.com

// AWS Elastic Beanstalk
// Submitted by Luke Wells <psl-maintainers@amazon.com>
// Reference: aa202394-43a0-4857-b245-8db04549137e
cn-north-1.eb.amazonaws.com.cn
cn-northwest-1.eb.amazonaws.com.cn
elasticbeanstalk.com
ap-northeast-1.elasticbeanstalk.com
ap-northeast-2.elasticbeanstalk.com
ap-northeast-3.elasticbeanstalk.com
ap-south-1.elasticbeanstalk.com
ap-southeast-1.elasticbeanstalk.com
ap-southeast-2.elasticbeanstalk.com
ca-central-1.elasticbeanstalk.com
eu-central-1.elasticbeanstalk.com
eu-west-1.elasticbeanstalk.com
eu-west-2.elasticbeanstalk.com
eu-west-3.elasticbeanstalk.com
sa-east-1.elasticbeanstalk.com
us-east-1.elasticbeanstalk.com
us-east-2.elasticbeanstalk.com
us-gov-west-1.elasticbeanstalk.com
us-west-1.elasticbeanstalk.com
us-west-2.elasticbeanstalk.com

// (AWS) Elastic Load Balancing
// Submitted by Luke Wells <psl-maintainers@amazon.com>
// Reference: 12a3d528-1bac-4433-a359-a395867ffed2
*.elb.amazonaws.com.cn
*.elb.amazonaws.com

// AWS Global Accelerator
// Submitted by Daniel Massaguer <psl-maintainers@amazon.com>
// Reference: d916759d-a08b-4241-b536-4db887383a6a
awsglobalaccelerator.com

// eero
// Submitted by Yue Kang <eero-dynamic-dns@amazon.com>
// Reference: 264afe70-f62c-4c02-8ab9-b5281ed24461
eero.online
eero-stage.online

// concludes Amazon

// Amune : https://amune.org/
// Submitted by Team Amune <cert@amune.org>
t3l3p0rt.net
tele.amune.org

// Apigee : https://apigee.com/
// Submitted by Apigee Security Team <security@apigee.com>
apigee.io

// Apphud : https://apphud.com
// Submitted by Alexander Selivanov <alex@apphud.com>
siiites.com

// Appspace : https://www.appspace.com
// Submitted by Appspace Security Team <security@appspace.com>
appspacehosted.com
appspaceusercontent.com

// Appudo UG (haftungsbeschr\xE4nkt) : https://www.appudo.com
// Submitted by Alexander Hochbaum <admin@appudo.com>
appudo.net

// Aptible : https://www.aptible.com/
// Submitted by Thomas Orozco <thomas@aptible.com>
on-aptible.com

// ASEINet : https://www.aseinet.com/
// Submitted by Asei SEKIGUCHI <mail@aseinet.com>
user.aseinet.ne.jp
gv.vc
d.gv.vc

// Asociaci\xF3n Amigos de la Inform\xE1tica "Euskalamiga" : http://encounter.eus/
// Submitted by Hector Martin <marcan@euskalencounter.org>
user.party.eus

// Association potager.org : https://potager.org/
// Submitted by Lunar <jardiniers@potager.org>
pimienta.org
poivron.org
potager.org
sweetpepper.org

// ASUSTOR Inc. : http://www.asustor.com
// Submitted by Vincent Tseng <vincenttseng@asustor.com>
myasustor.com

// Atlassian : https://atlassian.com
// Submitted by Sam Smyth <devloop@atlassian.com>
cdn.prod.atlassian-dev.net

// Authentick UG (haftungsbeschr\xE4nkt) : https://authentick.net
// Submitted by Lukas Reschke <lukas@authentick.net>
translated.page

// Autocode : https://autocode.com
// Submitted by Jacob Lee <jacob@autocode.com>
autocode.dev

// AVM : https://avm.de
// Submitted by Andreas Weise <a.weise@avm.de>
myfritz.net

// AVStack Pte. Ltd. : https://avstack.io
// Submitted by Jasper Hugo <jasper@avstack.io>
onavstack.net

// AW AdvisorWebsites.com Software Inc : https://advisorwebsites.com
// Submitted by James Kennedy <domains@advisorwebsites.com>
*.awdev.ca
*.advisor.ws

// AZ.pl sp. z.o.o: https://az.pl
// Submitted by Krzysztof Wolski <krzysztof.wolski@home.eu>
ecommerce-shop.pl

// b-data GmbH : https://www.b-data.io
// Submitted by Olivier Benz <olivier.benz@b-data.ch>
b-data.io

// backplane : https://www.backplane.io
// Submitted by Anthony Voutas <anthony@backplane.io>
backplaneapp.io

// Balena : https://www.balena.io
// Submitted by Petros Angelatos <petrosagg@balena.io>
balena-devices.com

// University of Banja Luka : https://unibl.org
// Domains for Republic of Srpska administrative entity.
// Submitted by Marko Ivanovic <kormang@hotmail.rs>
rs.ba

// Banzai Cloud
// Submitted by Janos Matyas <info@banzaicloud.com>
*.banzai.cloud
app.banzaicloud.io
*.backyards.banzaicloud.io

// BASE, Inc. : https://binc.jp
// Submitted by Yuya NAGASAWA <public-suffix-list@binc.jp>
base.ec
official.ec
buyshop.jp
fashionstore.jp
handcrafted.jp
kawaiishop.jp
supersale.jp
theshop.jp
shopselect.net
base.shop

// BeagleBoard.org Foundation : https://beagleboard.org
// Submitted by Jason Kridner <jkridner@beagleboard.org>
beagleboard.io

// Beget Ltd
// Submitted by Lev Nekrasov <lnekrasov@beget.com>
*.beget.app

// BetaInABox
// Submitted by Adrian <adrian@betainabox.com>
betainabox.com

// BinaryLane : http://www.binarylane.com
// Submitted by Nathan O'Sullivan <nathan@mammoth.com.au>
bnr.la

// Bitbucket : http://bitbucket.org
// Submitted by Andy Ortlieb <aortlieb@atlassian.com>
bitbucket.io

// Blackbaud, Inc. : https://www.blackbaud.com
// Submitted by Paul Crowder <paul.crowder@blackbaud.com>
blackbaudcdn.net

// Blatech : http://www.blatech.net
// Submitted by Luke Bratch <luke@bratch.co.uk>
of.je

// Blue Bite, LLC : https://bluebite.com
// Submitted by Joshua Weiss <admin.engineering@bluebite.com>
bluebite.io

// Boomla : https://boomla.com
// Submitted by Tibor Halter <thalter@boomla.com>
boomla.net

// Boutir : https://www.boutir.com
// Submitted by Eric Ng Ka Ka <ngkaka@boutir.com>
boutir.com

// Boxfuse : https://boxfuse.com
// Submitted by Axel Fontaine <axel@boxfuse.com>
boxfuse.io

// bplaced : https://www.bplaced.net/
// Submitted by Miroslav Bozic <security@bplaced.net>
square7.ch
bplaced.com
bplaced.de
square7.de
bplaced.net
square7.net

// Brendly : https://brendly.rs
// Submitted by Dusan Radovanovic <dusan.radovanovic@brendly.rs>
shop.brendly.rs

// BrowserSafetyMark
// Submitted by Dave Tharp <browsersafetymark.io@quicinc.com>
browsersafetymark.io

// Bytemark Hosting : https://www.bytemark.co.uk
// Submitted by Paul Cammish <paul.cammish@bytemark.co.uk>
uk0.bigv.io
dh.bytemark.co.uk
vm.bytemark.co.uk

// Caf.js Labs LLC : https://www.cafjs.com
// Submitted by Antonio Lain <antlai@cafjs.com>
cafjs.com

// callidomus : https://www.callidomus.com/
// Submitted by Marcus Popp <admin@callidomus.com>
mycd.eu

// Canva Pty Ltd : https://canva.com/
// Submitted by Joel Aquilina <publicsuffixlist@canva.com>
canva-apps.cn
canva-apps.com

// Carrd : https://carrd.co
// Submitted by AJ <aj@carrd.co>
drr.ac
uwu.ai
carrd.co
crd.co
ju.mp

// CentralNic : http://www.centralnic.com/names/domains
// Submitted by registry <gavin.brown@centralnic.com>
ae.org
br.com
cn.com
com.de
com.se
de.com
eu.com
gb.net
hu.net
jp.net
jpn.com
mex.com
ru.com
sa.com
se.net
uk.com
uk.net
us.com
za.bz
za.com

// No longer operated by CentralNic, these entries should be adopted and/or removed by current operators
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
ar.com
hu.com
kr.com
no.com
qc.com
uy.com

// Africa.com Web Solutions Ltd : https://registry.africa.com
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
africa.com

// iDOT Services Limited : http://www.domain.gr.com
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
gr.com

// Radix FZC : http://domains.in.net
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
in.net
web.in

// US REGISTRY LLC : http://us.org
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
us.org

// co.com Registry, LLC : https://registry.co.com
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
co.com

// Roar Domains LLC : https://roar.basketball/
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
aus.basketball
nz.basketball

// BRS Media : https://brsmedia.com/
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
radio.am
radio.fm

// c.la : http://www.c.la/
c.la

// certmgr.org : https://certmgr.org
// Submitted by B. Blechschmidt <hostmaster@certmgr.org>
certmgr.org

// Cityhost LLC  : https://cityhost.ua
// Submitted by Maksym Rivtin <support@cityhost.net.ua>
cx.ua

// Civilized Discourse Construction Kit, Inc. : https://www.discourse.org/
// Submitted by Rishabh Nambiar & Michael Brown <team@discourse.org>
discourse.group
discourse.team

// Clever Cloud : https://www.clever-cloud.com/
// Submitted by Quentin Adam <noc@clever-cloud.com>
cleverapps.io

// Clerk : https://www.clerk.dev
// Submitted by Colin Sidoti <systems@clerk.dev>
clerk.app
clerkstage.app
*.lcl.dev
*.lclstage.dev
*.stg.dev
*.stgstage.dev

// ClickRising : https://clickrising.com/
// Submitted by Umut Gumeli <infrastructure-publicsuffixlist@clickrising.com>
clickrising.net

// Cloud66 : https://www.cloud66.com/
// Submitted by Khash Sajadi <khash@cloud66.com>
c66.me
cloud66.ws
cloud66.zone

// CloudAccess.net : https://www.cloudaccess.net/
// Submitted by Pawel Panek <noc@cloudaccess.net>
jdevcloud.com
wpdevcloud.com
cloudaccess.host
freesite.host
cloudaccess.net

// cloudControl : https://www.cloudcontrol.com/
// Submitted by Tobias Wilken <tw@cloudcontrol.com>
cloudcontrolled.com
cloudcontrolapp.com

// Cloudera, Inc. : https://www.cloudera.com/
// Submitted by Kedarnath Waikar <security@cloudera.com>
*.cloudera.site

// Cloudflare, Inc. : https://www.cloudflare.com/
// Submitted by Cloudflare Team <publicsuffixlist@cloudflare.com>
cf-ipfs.com
cloudflare-ipfs.com
trycloudflare.com
pages.dev
r2.dev
workers.dev

// Clovyr : https://clovyr.io
// Submitted by Patrick Nielsen <patrick@clovyr.io>
wnext.app

// co.ca : http://registry.co.ca/
co.ca

// Co & Co : https://co-co.nl/
// Submitted by Govert Versluis <govert@co-co.nl>
*.otap.co

// i-registry s.r.o. : http://www.i-registry.cz/
// Submitted by Martin Semrad <semrad@i-registry.cz>
co.cz

// CDN77.com : http://www.cdn77.com
// Submitted by Jan Krpes <jan.krpes@cdn77.com>
c.cdn77.org
cdn77-ssl.net
r.cdn77.net
rsc.cdn77.org
ssl.origin.cdn77-secure.org

// Cloud DNS Ltd : http://www.cloudns.net
// Submitted by Aleksander Hristov <noc@cloudns.net>
cloudns.asia
cloudns.biz
cloudns.club
cloudns.cc
cloudns.eu
cloudns.in
cloudns.info
cloudns.org
cloudns.pro
cloudns.pw
cloudns.us

// CNPY : https://cnpy.gdn
// Submitted by Angelo Gladding <angelo@lahacker.net>
cnpy.gdn

// Codeberg e. V. : https://codeberg.org
// Submitted by Moritz Marquardt <git@momar.de>
codeberg.page

// CoDNS B.V.
co.nl
co.no

// Combell.com : https://www.combell.com
// Submitted by Thomas Wouters <thomas.wouters@combellgroup.com>
webhosting.be
hosting-cluster.nl

// Coordination Center for TLD RU and XN--P1AI : https://cctld.ru/en/domains/domens_ru/reserved/
// Submitted by George Georgievsky <gug@cctld.ru>
ac.ru
edu.ru
gov.ru
int.ru
mil.ru
test.ru

// COSIMO GmbH : http://www.cosimo.de
// Submitted by Rene Marticke <rmarticke@cosimo.de>
dyn.cosidns.de
dynamisches-dns.de
dnsupdater.de
internet-dns.de
l-o-g-i-n.de
dynamic-dns.info
feste-ip.net
knx-server.net
static-access.net

// Craynic, s.r.o. : http://www.craynic.com/
// Submitted by Ales Krajnik <ales.krajnik@craynic.com>
realm.cz

// Cryptonomic : https://cryptonomic.net/
// Submitted by Andrew Cady <public-suffix-list@cryptonomic.net>
*.cryptonomic.net

// Cupcake : https://cupcake.io/
// Submitted by Jonathan Rudenberg <jonathan@cupcake.io>
cupcake.is

// Curv UG : https://curv-labs.de/
// Submitted by Marvin Wiesner <Marvin@curv-labs.de>
curv.dev

// Customer OCI - Oracle Dyn https://cloud.oracle.com/home https://dyn.com/dns/
// Submitted by Gregory Drake <support@dyn.com>
// Note: This is intended to also include customer-oci.com due to wildcards implicitly including the current label
*.customer-oci.com
*.oci.customer-oci.com
*.ocp.customer-oci.com
*.ocs.customer-oci.com

// cyon GmbH : https://www.cyon.ch/
// Submitted by Dominic Luechinger <dol@cyon.ch>
cyon.link
cyon.site

// Danger Science Group: https://dangerscience.com/
// Submitted by Skylar MacDonald <skylar@dangerscience.com>
fnwk.site
folionetwork.site
platform0.app

// Daplie, Inc : https://daplie.com
// Submitted by AJ ONeal <aj@daplie.com>
daplie.me
localhost.daplie.me

// Datto, Inc. : https://www.datto.com/
// Submitted by Philipp Heckel <ph@datto.com>
dattolocal.com
dattorelay.com
dattoweb.com
mydatto.com
dattolocal.net
mydatto.net

// Dansk.net : http://www.dansk.net/
// Submitted by Anani Voule <digital@digital.co.dk>
biz.dk
co.dk
firm.dk
reg.dk
store.dk

// dappnode.io : https://dappnode.io/
// Submitted by Abel Boldu / DAppNode Team <community@dappnode.io>
dyndns.dappnode.io

// dapps.earth : https://dapps.earth/
// Submitted by Daniil Burdakov <icqkill@gmail.com>
*.dapps.earth
*.bzz.dapps.earth

// Dark, Inc. : https://darklang.com
// Submitted by Paul Biggar <ops@darklang.com>
builtwithdark.com

// DataDetect, LLC. : https://datadetect.com
// Submitted by Andrew Banchich <abanchich@sceven.com>
demo.datadetect.com
instance.datadetect.com

// Datawire, Inc : https://www.datawire.io
// Submitted by Richard Li <secalert@datawire.io>
edgestack.me

// DDNS5 : https://ddns5.com
// Submitted by Cameron Elliott <cameron@cameronelliott.com>
ddns5.com

// Debian : https://www.debian.org/
// Submitted by Peter Palfrader / Debian Sysadmin Team <dsa-publicsuffixlist@debian.org>
debian.net

// Deno Land Inc : https://deno.com/
// Submitted by Luca Casonato <hostmaster@deno.com>
deno.dev
deno-staging.dev

// deSEC : https://desec.io/
// Submitted by Peter Thomassen <peter@desec.io>
dedyn.io

// Deta: https://www.deta.sh/
// Submitted by Aavash Shrestha <aavash@deta.sh>
deta.app
deta.dev

// Diher Solutions : https://diher.solutions
// Submitted by Didi Hermawan <mail@diher.solutions>
*.rss.my.id
*.diher.solutions

// Discord Inc : https://discord.com
// Submitted by Sahn Lam <slam@discordapp.com>
discordsays.com
discordsez.com

// DNS Africa Ltd https://dns.business
// Submitted by Calvin Browne <calvin@dns.business>
jozi.biz

// DNShome : https://www.dnshome.de/
// Submitted by Norbert Auler <mail@dnshome.de>
dnshome.de

// DotArai : https://www.dotarai.com/
// Submitted by Atsadawat Netcharadsang <atsadawat@dotarai.co.th>
online.th
shop.th

// DrayTek Corp. : https://www.draytek.com/
// Submitted by Paul Fang <mis@draytek.com>
drayddns.com

// DreamCommerce : https://shoper.pl/
// Submitted by Konrad Kotarba <konrad.kotarba@dreamcommerce.com>
shoparena.pl

// DreamHost : http://www.dreamhost.com/
// Submitted by Andrew Farmer <andrew.farmer@dreamhost.com>
dreamhosters.com

// Drobo : http://www.drobo.com/
// Submitted by Ricardo Padilha <rpadilha@drobo.com>
mydrobo.com

// Drud Holdings, LLC. : https://www.drud.com/
// Submitted by Kevin Bridges <kevin@drud.com>
drud.io
drud.us

// DuckDNS : http://www.duckdns.org/
// Submitted by Richard Harper <richard@duckdns.org>
duckdns.org

// Bip : https://bip.sh
// Submitted by Joel Kennedy <joel@bip.sh>
bip.sh

// bitbridge.net : Submitted by Craig Welch, abeliidev@gmail.com
bitbridge.net

// dy.fi : http://dy.fi/
// Submitted by Heikki Hannikainen <hessu@hes.iki.fi>
dy.fi
tunk.org

// DynDNS.com : http://www.dyndns.com/services/dns/dyndns/
dyndns-at-home.com
dyndns-at-work.com
dyndns-blog.com
dyndns-free.com
dyndns-home.com
dyndns-ip.com
dyndns-mail.com
dyndns-office.com
dyndns-pics.com
dyndns-remote.com
dyndns-server.com
dyndns-web.com
dyndns-wiki.com
dyndns-work.com
dyndns.biz
dyndns.info
dyndns.org
dyndns.tv
at-band-camp.net
ath.cx
barrel-of-knowledge.info
barrell-of-knowledge.info
better-than.tv
blogdns.com
blogdns.net
blogdns.org
blogsite.org
boldlygoingnowhere.org
broke-it.net
buyshouses.net
cechire.com
dnsalias.com
dnsalias.net
dnsalias.org
dnsdojo.com
dnsdojo.net
dnsdojo.org
does-it.net
doesntexist.com
doesntexist.org
dontexist.com
dontexist.net
dontexist.org
doomdns.com
doomdns.org
dvrdns.org
dyn-o-saur.com
dynalias.com
dynalias.net
dynalias.org
dynathome.net
dyndns.ws
endofinternet.net
endofinternet.org
endoftheinternet.org
est-a-la-maison.com
est-a-la-masion.com
est-le-patron.com
est-mon-blogueur.com
for-better.biz
for-more.biz
for-our.info
for-some.biz
for-the.biz
forgot.her.name
forgot.his.name
from-ak.com
from-al.com
from-ar.com
from-az.net
from-ca.com
from-co.net
from-ct.com
from-dc.com
from-de.com
from-fl.com
from-ga.com
from-hi.com
from-ia.com
from-id.com
from-il.com
from-in.com
from-ks.com
from-ky.com
from-la.net
from-ma.com
from-md.com
from-me.org
from-mi.com
from-mn.com
from-mo.com
from-ms.com
from-mt.com
from-nc.com
from-nd.com
from-ne.com
from-nh.com
from-nj.com
from-nm.com
from-nv.com
from-ny.net
from-oh.com
from-ok.com
from-or.com
from-pa.com
from-pr.com
from-ri.com
from-sc.com
from-sd.com
from-tn.com
from-tx.com
from-ut.com
from-va.com
from-vt.com
from-wa.com
from-wi.com
from-wv.com
from-wy.com
ftpaccess.cc
fuettertdasnetz.de
game-host.org
game-server.cc
getmyip.com
gets-it.net
go.dyndns.org
gotdns.com
gotdns.org
groks-the.info
groks-this.info
ham-radio-op.net
here-for-more.info
hobby-site.com
hobby-site.org
home.dyndns.org
homedns.org
homeftp.net
homeftp.org
homeip.net
homelinux.com
homelinux.net
homelinux.org
homeunix.com
homeunix.net
homeunix.org
iamallama.com
in-the-band.net
is-a-anarchist.com
is-a-blogger.com
is-a-bookkeeper.com
is-a-bruinsfan.org
is-a-bulls-fan.com
is-a-candidate.org
is-a-caterer.com
is-a-celticsfan.org
is-a-chef.com
is-a-chef.net
is-a-chef.org
is-a-conservative.com
is-a-cpa.com
is-a-cubicle-slave.com
is-a-democrat.com
is-a-designer.com
is-a-doctor.com
is-a-financialadvisor.com
is-a-geek.com
is-a-geek.net
is-a-geek.org
is-a-green.com
is-a-guru.com
is-a-hard-worker.com
is-a-hunter.com
is-a-knight.org
is-a-landscaper.com
is-a-lawyer.com
is-a-liberal.com
is-a-libertarian.com
is-a-linux-user.org
is-a-llama.com
is-a-musician.com
is-a-nascarfan.com
is-a-nurse.com
is-a-painter.com
is-a-patsfan.org
is-a-personaltrainer.com
is-a-photographer.com
is-a-player.com
is-a-republican.com
is-a-rockstar.com
is-a-socialist.com
is-a-soxfan.org
is-a-student.com
is-a-teacher.com
is-a-techie.com
is-a-therapist.com
is-an-accountant.com
is-an-actor.com
is-an-actress.com
is-an-anarchist.com
is-an-artist.com
is-an-engineer.com
is-an-entertainer.com
is-by.us
is-certified.com
is-found.org
is-gone.com
is-into-anime.com
is-into-cars.com
is-into-cartoons.com
is-into-games.com
is-leet.com
is-lost.org
is-not-certified.com
is-saved.org
is-slick.com
is-uberleet.com
is-very-bad.org
is-very-evil.org
is-very-good.org
is-very-nice.org
is-very-sweet.org
is-with-theband.com
isa-geek.com
isa-geek.net
isa-geek.org
isa-hockeynut.com
issmarterthanyou.com
isteingeek.de
istmein.de
kicks-ass.net
kicks-ass.org
knowsitall.info
land-4-sale.us
lebtimnetz.de
leitungsen.de
likes-pie.com
likescandy.com
merseine.nu
mine.nu
misconfused.org
mypets.ws
myphotos.cc
neat-url.com
office-on-the.net
on-the-web.tv
podzone.net
podzone.org
readmyblog.org
saves-the-whales.com
scrapper-site.net
scrapping.cc
selfip.biz
selfip.com
selfip.info
selfip.net
selfip.org
sells-for-less.com
sells-for-u.com
sells-it.net
sellsyourhome.org
servebbs.com
servebbs.net
servebbs.org
serveftp.net
serveftp.org
servegame.org
shacknet.nu
simple-url.com
space-to-rent.com
stuff-4-sale.org
stuff-4-sale.us
teaches-yoga.com
thruhere.net
traeumtgerade.de
webhop.biz
webhop.info
webhop.net
webhop.org
worse-than.tv
writesthisblog.com

// ddnss.de : https://www.ddnss.de/
// Submitted by Robert Niedziela <webmaster@ddnss.de>
ddnss.de
dyn.ddnss.de
dyndns.ddnss.de
dyndns1.de
dyn-ip24.de
home-webserver.de
dyn.home-webserver.de
myhome-server.de
ddnss.org

// Definima : http://www.definima.com/
// Submitted by Maxence Bitterli <maxence@definima.com>
definima.net
definima.io

// DigitalOcean App Platform : https://www.digitalocean.com/products/app-platform/
// Submitted by Braxton Huggins <psl-maintainers@digitalocean.com>
ondigitalocean.app

// DigitalOcean Spaces : https://www.digitalocean.com/products/spaces/
// Submitted by Robin H. Johnson <psl-maintainers@digitalocean.com>
*.digitaloceanspaces.com

// dnstrace.pro : https://dnstrace.pro/
// Submitted by Chris Partridge <chris@partridge.tech>
bci.dnstrace.pro

// Dynu.com : https://www.dynu.com/
// Submitted by Sue Ye <sue@dynu.com>
ddnsfree.com
ddnsgeek.com
giize.com
gleeze.com
kozow.com
loseyourip.com
ooguy.com
theworkpc.com
casacam.net
dynu.net
accesscam.org
camdvr.org
freeddns.org
mywire.org
webredirect.org
myddns.rocks
blogsite.xyz

// dynv6 : https://dynv6.com
// Submitted by Dominik Menke <dom@digineo.de>
dynv6.net

// E4YOU spol. s.r.o. : https://e4you.cz/
// Submitted by Vladimir Dudr <info@e4you.cz>
e4.cz

// Easypanel : https://easypanel.io
// Submitted by Andrei Canta <andrei@easypanel.io>
easypanel.app
easypanel.host

// Elementor : Elementor Ltd.
// Submitted by Anton Barkan <antonb@elementor.com>
elementor.cloud
elementor.cool

// En root\u203D : https://en-root.org
// Submitted by Emmanuel Raviart <emmanuel@raviart.com>
en-root.fr

// Enalean SAS: https://www.enalean.com
// Submitted by Thomas Cottier <thomas.cottier@enalean.com>
mytuleap.com
tuleap-partners.com

// Encoretivity AB: https://encore.dev
// Submitted by Andr\xE9 Eriksson <andre@encore.dev>
encr.app
encoreapi.com

// ECG Robotics, Inc: https://ecgrobotics.org
// Submitted by <frc1533@ecgrobotics.org>
onred.one
staging.onred.one

// encoway GmbH : https://www.encoway.de
// Submitted by Marcel Daus <cloudops@encoway.de>
eu.encoway.cloud

// EU.org https://eu.org/
// Submitted by Pierre Beyssac <hostmaster@eu.org>
eu.org
al.eu.org
asso.eu.org
at.eu.org
au.eu.org
be.eu.org
bg.eu.org
ca.eu.org
cd.eu.org
ch.eu.org
cn.eu.org
cy.eu.org
cz.eu.org
de.eu.org
dk.eu.org
edu.eu.org
ee.eu.org
es.eu.org
fi.eu.org
fr.eu.org
gr.eu.org
hr.eu.org
hu.eu.org
ie.eu.org
il.eu.org
in.eu.org
int.eu.org
is.eu.org
it.eu.org
jp.eu.org
kr.eu.org
lt.eu.org
lu.eu.org
lv.eu.org
mc.eu.org
me.eu.org
mk.eu.org
mt.eu.org
my.eu.org
net.eu.org
ng.eu.org
nl.eu.org
no.eu.org
nz.eu.org
paris.eu.org
pl.eu.org
pt.eu.org
q-a.eu.org
ro.eu.org
ru.eu.org
se.eu.org
si.eu.org
sk.eu.org
tr.eu.org
uk.eu.org
us.eu.org

// Eurobyte : https://eurobyte.ru
// Submitted by Evgeniy Subbotin <e.subbotin@eurobyte.ru>
eurodir.ru

// Evennode : http://www.evennode.com/
// Submitted by Michal Kralik <support@evennode.com>
eu-1.evennode.com
eu-2.evennode.com
eu-3.evennode.com
eu-4.evennode.com
us-1.evennode.com
us-2.evennode.com
us-3.evennode.com
us-4.evennode.com

// eDirect Corp. : https://hosting.url.com.tw/
// Submitted by C.S. chang <cschang@corp.url.com.tw>
twmail.cc
twmail.net
twmail.org
mymailer.com.tw
url.tw

// Fabrica Technologies, Inc. : https://www.fabrica.dev/
// Submitted by Eric Jiang <eric@fabrica.dev>
onfabrica.com

// Facebook, Inc.
// Submitted by Peter Ruibal <public-suffix@fb.com>
apps.fbsbx.com

// FAITID : https://faitid.org/
// Submitted by Maxim Alzoba <tech.contact@faitid.org>
// https://www.flexireg.net/stat_info
ru.net
adygeya.ru
bashkiria.ru
bir.ru
cbg.ru
com.ru
dagestan.ru
grozny.ru
kalmykia.ru
kustanai.ru
marine.ru
mordovia.ru
msk.ru
mytis.ru
nalchik.ru
nov.ru
pyatigorsk.ru
spb.ru
vladikavkaz.ru
vladimir.ru
abkhazia.su
adygeya.su
aktyubinsk.su
arkhangelsk.su
armenia.su
ashgabad.su
azerbaijan.su
balashov.su
bashkiria.su
bryansk.su
bukhara.su
chimkent.su
dagestan.su
east-kazakhstan.su
exnet.su
georgia.su
grozny.su
ivanovo.su
jambyl.su
kalmykia.su
kaluga.su
karacol.su
karaganda.su
karelia.su
khakassia.su
krasnodar.su
kurgan.su
kustanai.su
lenug.su
mangyshlak.su
mordovia.su
msk.su
murmansk.su
nalchik.su
navoi.su
north-kazakhstan.su
nov.su
obninsk.su
penza.su
pokrovsk.su
sochi.su
spb.su
tashkent.su
termez.su
togliatti.su
troitsk.su
tselinograd.su
tula.su
tuva.su
vladikavkaz.su
vladimir.su
vologda.su

// Fancy Bits, LLC : http://getchannels.com
// Submitted by Aman Gupta <aman@getchannels.com>
channelsdvr.net
u.channelsdvr.net

// Fastly Inc. : http://www.fastly.com/
// Submitted by Fastly Security <security@fastly.com>
edgecompute.app
fastly-edge.com
fastly-terrarium.com
fastlylb.net
map.fastlylb.net
freetls.fastly.net
map.fastly.net
a.prod.fastly.net
global.prod.fastly.net
a.ssl.fastly.net
b.ssl.fastly.net
global.ssl.fastly.net

// Fastmail : https://www.fastmail.com/
// Submitted by Marc Bradshaw <marc@fastmailteam.com>
*.user.fm

// FASTVPS EESTI OU : https://fastvps.ru/
// Submitted by Likhachev Vasiliy <lihachev@fastvps.ru>
fastvps-server.com
fastvps.host
myfast.host
fastvps.site
myfast.space

// Fedora : https://fedoraproject.org/
// submitted by Patrick Uiterwijk <puiterwijk@fedoraproject.org>
fedorainfracloud.org
fedorapeople.org
cloud.fedoraproject.org
app.os.fedoraproject.org
app.os.stg.fedoraproject.org

// FearWorks Media Ltd. : https://fearworksmedia.co.uk
// submitted by Keith Fairley <domains@fearworksmedia.co.uk>
conn.uk
copro.uk
hosp.uk

// Fermax : https://fermax.com/
// submitted by Koen Van Isterdael <k.vanisterdael@fermax.be>
mydobiss.com

// FH Muenster : https://www.fh-muenster.de
// Submitted by Robin Naundorf <r.naundorf@fh-muenster.de>
fh-muenster.io

// Filegear Inc. : https://www.filegear.com
// Submitted by Jason Zhu <jason@owtware.com>
filegear.me
filegear-au.me
filegear-de.me
filegear-gb.me
filegear-ie.me
filegear-jp.me
filegear-sg.me

// Firebase, Inc.
// Submitted by Chris Raynor <chris@firebase.com>
firebaseapp.com

// Firewebkit : https://www.firewebkit.com
// Submitted by Majid Qureshi <mqureshi@amrayn.com>
fireweb.app

// FLAP : https://www.flap.cloud
// Submitted by Louis Chemineau <louis@chmn.me>
flap.id

// FlashDrive : https://flashdrive.io
// Submitted by Eric Chan <support@flashdrive.io>
onflashdrive.app
fldrv.com

// fly.io: https://fly.io
// Submitted by Kurt Mackey <kurt@fly.io>
fly.dev
edgeapp.net
shw.io

// Flynn : https://flynn.io
// Submitted by Jonathan Rudenberg <jonathan@flynn.io>
flynnhosting.net

// Forgerock : https://www.forgerock.com
// Submitted by Roderick Parr <roderick.parr@forgerock.com>
forgeblocks.com
id.forgerock.io

// Framer : https://www.framer.com
// Submitted by Koen Rouwhorst <koenrh@framer.com>
framer.app
framercanvas.com
framer.media
framer.photos
framer.website
framer.wiki

// Frusky MEDIA&PR : https://www.frusky.de
// Submitted by Victor Pupynin <hallo@frusky.de>
*.frusky.de

// RavPage : https://www.ravpage.co.il
// Submitted by Roni Horowitz <roni@responder.co.il>
ravpage.co.il

// Frederik Braun https://frederik-braun.com
// Submitted by Frederik Braun <fb@frederik-braun.com>
0e.vc

// Freebox : http://www.freebox.fr
// Submitted by Romain Fliedel <rfliedel@freebox.fr>
freebox-os.com
freeboxos.com
fbx-os.fr
fbxos.fr
freebox-os.fr
freeboxos.fr

// freedesktop.org : https://www.freedesktop.org
// Submitted by Daniel Stone <daniel@fooishbar.org>
freedesktop.org

// freemyip.com : https://freemyip.com
// Submitted by Cadence <contact@freemyip.com>
freemyip.com

// FunkFeuer - Verein zur F\xF6rderung freier Netze : https://www.funkfeuer.at
// Submitted by Daniel A. Maierhofer <vorstand@funkfeuer.at>
wien.funkfeuer.at

// Futureweb OG : http://www.futureweb.at
// Submitted by Andreas Schnederle-Wagner <schnederle@futureweb.at>
*.futurecms.at
*.ex.futurecms.at
*.in.futurecms.at
futurehosting.at
futuremailing.at
*.ex.ortsinfo.at
*.kunden.ortsinfo.at
*.statics.cloud

// GDS : https://www.gov.uk/service-manual/technology/managing-domain-names
// Submitted by Stephen Ford <hostmaster@digital.cabinet-office.gov.uk>
independent-commission.uk
independent-inquest.uk
independent-inquiry.uk
independent-panel.uk
independent-review.uk
public-inquiry.uk
royal-commission.uk
campaign.gov.uk
service.gov.uk

// CDDO : https://www.gov.uk/guidance/get-an-api-domain-on-govuk
// Submitted by Jamie Tanna <jamie.tanna@digital.cabinet-office.gov.uk>
api.gov.uk

// Gehirn Inc. : https://www.gehirn.co.jp/
// Submitted by Kohei YOSHIDA <tech@gehirn.co.jp>
gehirn.ne.jp
usercontent.jp

// Gentlent, Inc. : https://www.gentlent.com
// Submitted by Tom Klein <tom@gentlent.com>
gentapps.com
gentlentapis.com
lab.ms
cdn-edges.net

// Ghost Foundation : https://ghost.org
// Submitted by Matt Hanley <security@ghost.org>
ghost.io

// GignoSystemJapan: http://gsj.bz
// Submitted by GignoSystemJapan <kakutou-ec@gsj.bz>
gsj.bz

// GitHub, Inc.
// Submitted by Patrick Toomey <security@github.com>
githubusercontent.com
githubpreview.dev
github.io

// GitLab, Inc.
// Submitted by Alex Hanselka <alex@gitlab.com>
gitlab.io

// Gitplac.si - https://gitplac.si
// Submitted by Alja\u017E Starc <me@aljaxus.eu>
gitapp.si
gitpage.si

// Glitch, Inc : https://glitch.com
// Submitted by Mads Hartmann <mads@glitch.com>
glitch.me

// Global NOG Alliance : https://nogalliance.org/
// Submitted by Sander Steffann <sander@nogalliance.org>
nog.community

// Globe Hosting SRL : https://www.globehosting.com/
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
co.ro
shop.ro

// GMO Pepabo, Inc. : https://pepabo.com/
// Submitted by Hosting Div <admin@pepabo.com>
lolipop.io
angry.jp
babyblue.jp
babymilk.jp
backdrop.jp
bambina.jp
bitter.jp
blush.jp
boo.jp
boy.jp
boyfriend.jp
but.jp
candypop.jp
capoo.jp
catfood.jp
cheap.jp
chicappa.jp
chillout.jp
chips.jp
chowder.jp
chu.jp
ciao.jp
cocotte.jp
coolblog.jp
cranky.jp
cutegirl.jp
daa.jp
deca.jp
deci.jp
digick.jp
egoism.jp
fakefur.jp
fem.jp
flier.jp
floppy.jp
fool.jp
frenchkiss.jp
girlfriend.jp
girly.jp
gloomy.jp
gonna.jp
greater.jp
hacca.jp
heavy.jp
her.jp
hiho.jp
hippy.jp
holy.jp
hungry.jp
icurus.jp
itigo.jp
jellybean.jp
kikirara.jp
kill.jp
kilo.jp
kuron.jp
littlestar.jp
lolipopmc.jp
lolitapunk.jp
lomo.jp
lovepop.jp
lovesick.jp
main.jp
mods.jp
mond.jp
mongolian.jp
moo.jp
namaste.jp
nikita.jp
nobushi.jp
noor.jp
oops.jp
parallel.jp
parasite.jp
pecori.jp
peewee.jp
penne.jp
pepper.jp
perma.jp
pigboat.jp
pinoko.jp
punyu.jp
pupu.jp
pussycat.jp
pya.jp
raindrop.jp
readymade.jp
sadist.jp
schoolbus.jp
secret.jp
staba.jp
stripper.jp
sub.jp
sunnyday.jp
thick.jp
tonkotsu.jp
under.jp
upper.jp
velvet.jp
verse.jp
versus.jp
vivian.jp
watson.jp
weblike.jp
whitesnow.jp
zombie.jp
heteml.net

// GOV.UK Platform as a Service : https://www.cloud.service.gov.uk/
// Submitted by Tom Whitwell <gov-uk-paas-support@digital.cabinet-office.gov.uk>
cloudapps.digital
london.cloudapps.digital

// GOV.UK Pay : https://www.payments.service.gov.uk/
// Submitted by Richard Baker <richard.baker@digital.cabinet-office.gov.uk>
pymnt.uk

// UKHomeOffice : https://www.gov.uk/government/organisations/home-office
// Submitted by Jon Shanks <jon.shanks@digital.homeoffice.gov.uk>
homeoffice.gov.uk

// GlobeHosting, Inc.
// Submitted by Zoltan Egresi <egresi@globehosting.com>
ro.im

// GoIP DNS Services : http://www.goip.de
// Submitted by Christian Poulter <milchstrasse@goip.de>
goip.de

// Google, Inc.
// Submitted by Eduardo Vela <evn@google.com>
run.app
a.run.app
web.app
*.0emm.com
appspot.com
*.r.appspot.com
codespot.com
googleapis.com
googlecode.com
pagespeedmobilizer.com
publishproxy.com
withgoogle.com
withyoutube.com
*.gateway.dev
cloud.goog
translate.goog
*.usercontent.goog
cloudfunctions.net
blogspot.ae
blogspot.al
blogspot.am
blogspot.ba
blogspot.be
blogspot.bg
blogspot.bj
blogspot.ca
blogspot.cf
blogspot.ch
blogspot.cl
blogspot.co.at
blogspot.co.id
blogspot.co.il
blogspot.co.ke
blogspot.co.nz
blogspot.co.uk
blogspot.co.za
blogspot.com
blogspot.com.ar
blogspot.com.au
blogspot.com.br
blogspot.com.by
blogspot.com.co
blogspot.com.cy
blogspot.com.ee
blogspot.com.eg
blogspot.com.es
blogspot.com.mt
blogspot.com.ng
blogspot.com.tr
blogspot.com.uy
blogspot.cv
blogspot.cz
blogspot.de
blogspot.dk
blogspot.fi
blogspot.fr
blogspot.gr
blogspot.hk
blogspot.hr
blogspot.hu
blogspot.ie
blogspot.in
blogspot.is
blogspot.it
blogspot.jp
blogspot.kr
blogspot.li
blogspot.lt
blogspot.lu
blogspot.md
blogspot.mk
blogspot.mr
blogspot.mx
blogspot.my
blogspot.nl
blogspot.no
blogspot.pe
blogspot.pt
blogspot.qa
blogspot.re
blogspot.ro
blogspot.rs
blogspot.ru
blogspot.se
blogspot.sg
blogspot.si
blogspot.sk
blogspot.sn
blogspot.td
blogspot.tw
blogspot.ug
blogspot.vn

// Goupile : https://goupile.fr
// Submitted by Niels Martignene <hello@goupile.fr>
goupile.fr

// Government of the Netherlands: https://www.government.nl
// Submitted by <domeinnaam@minaz.nl>
gov.nl

// Group 53, LLC : https://www.group53.com
// Submitted by Tyler Todd <noc@nova53.net>
awsmppl.com

// G\xFCnstigBestellen : https://g\xFCnstigbestellen.de
// Submitted by Furkan Akkoc <info@hendelzon.de>
g\xFCnstigbestellen.de
g\xFCnstigliefern.de

// Hakaran group: http://hakaran.cz
// Submitted by Arseniy Sokolov <security@hakaran.cz>
fin.ci
free.hr
caa.li
ua.rs
conf.se

// Handshake : https://handshake.org
// Submitted by Mike Damm <md@md.vc>
hs.zone
hs.run

// Hashbang : https://hashbang.sh
hashbang.sh

// Hasura : https://hasura.io
// Submitted by Shahidh K Muhammed <shahidh@hasura.io>
hasura.app
hasura-app.io

// Heilbronn University of Applied Sciences - Faculty Informatics (GitLab Pages): https://www.hs-heilbronn.de
// Submitted by Richard Zowalla <mi-admin@hs-heilbronn.de>
pages.it.hs-heilbronn.de

// Hepforge : https://www.hepforge.org
// Submitted by David Grellscheid <admin@hepforge.org>
hepforge.org

// Heroku : https://www.heroku.com/
// Submitted by Tom Maher <tmaher@heroku.com>
herokuapp.com
herokussl.com

// Hibernating Rhinos
// Submitted by Oren Eini <oren@ravendb.net>
ravendb.cloud
ravendb.community
ravendb.me
development.run
ravendb.run

// home.pl S.A.: https://home.pl
// Submitted by Krzysztof Wolski <krzysztof.wolski@home.eu>
homesklep.pl

// Hong Kong Productivity Council: https://www.hkpc.org/
// Submitted by SECaaS Team <summchan@hkpc.org>
secaas.hk

// Hoplix : https://www.hoplix.com
// Submitted by Danilo De Franco<info@hoplix.shop>
hoplix.shop


// HOSTBIP REGISTRY : https://www.hostbip.com/
// Submitted by Atanunu Igbunuroghene <publicsuffixlist@hostbip.com>
orx.biz
biz.gl
col.ng
firm.ng
gen.ng
ltd.ng
ngo.ng
edu.scot
sch.so

// HostFly : https://www.ie.ua
// Submitted by Bohdan Dub <support@hostfly.com.ua>
ie.ua

// HostyHosting (hostyhosting.com)
hostyhosting.io

// H\xE4kkinen.fi
// Submitted by Eero H\xE4kkinen <Eero+psl@H\xE4kkinen.fi>
h\xE4kkinen.fi

// Ici la Lune : http://www.icilalune.com/
// Submitted by Simon Morvan <simon@icilalune.com>
*.moonscale.io
moonscale.net

// iki.fi
// Submitted by Hannu Aronsson <haa@iki.fi>
iki.fi

// iliad italia: https://www.iliad.it
// Submitted by Marios Makassikis <mmakassikis@freebox.fr>
ibxos.it
iliadboxos.it

// Impertrix Solutions : <https://impertrixcdn.com>
// Submitted by Zhixiang Zhao <csuite@impertrix.com>
impertrixcdn.com
impertrix.com

// Incsub, LLC: https://incsub.com/
// Submitted by Aaron Edwards <sysadmins@incsub.com>
smushcdn.com
wphostedmail.com
wpmucdn.com
tempurl.host
wpmudev.host

// Individual Network Berlin e.V. : https://www.in-berlin.de/
// Submitted by Christian Seitz <chris@in-berlin.de>
dyn-berlin.de
in-berlin.de
in-brb.de
in-butter.de
in-dsl.de
in-dsl.net
in-dsl.org
in-vpn.de
in-vpn.net
in-vpn.org

// info.at : http://www.info.at/
biz.at
info.at

// info.cx : http://info.cx
// Submitted by Jacob Slater <whois@igloo.to>
info.cx

// Interlegis : http://www.interlegis.leg.br
// Submitted by Gabriel Ferreira <registrobr@interlegis.leg.br>
ac.leg.br
al.leg.br
am.leg.br
ap.leg.br
ba.leg.br
ce.leg.br
df.leg.br
es.leg.br
go.leg.br
ma.leg.br
mg.leg.br
ms.leg.br
mt.leg.br
pa.leg.br
pb.leg.br
pe.leg.br
pi.leg.br
pr.leg.br
rj.leg.br
rn.leg.br
ro.leg.br
rr.leg.br
rs.leg.br
sc.leg.br
se.leg.br
sp.leg.br
to.leg.br

// intermetrics GmbH : https://pixolino.com/
// Submitted by Wolfgang Schwarz <admin@intermetrics.de>
pixolino.com

// Internet-Pro, LLP: https://netangels.ru/
// Submitted by Vasiliy Sheredeko <piphon@gmail.com>
na4u.ru

// iopsys software solutions AB : https://iopsys.eu/
// Submitted by Roman Azarenko <roman.azarenko@iopsys.eu>
iopsys.se

// IPiFony Systems, Inc. : https://www.ipifony.com/
// Submitted by Matthew Hardeman <mhardeman@ipifony.com>
ipifony.net

// IServ GmbH : https://iserv.de
// Submitted by Mario Hoberg <info@iserv.de>
iservschule.de
mein-iserv.de
schulplattform.de
schulserver.de
test-iserv.de
iserv.dev

// I-O DATA DEVICE, INC. : http://www.iodata.com/
// Submitted by Yuji Minagawa <domains-admin@iodata.jp>
iobb.net

// Jelastic, Inc. : https://jelastic.com/
// Submitted by Ihor Kolodyuk <ik@jelastic.com>
mel.cloudlets.com.au
cloud.interhostsolutions.be
mycloud.by
alp1.ae.flow.ch
appengine.flow.ch
es-1.axarnet.cloud
diadem.cloud
vip.jelastic.cloud
jele.cloud
it1.eur.aruba.jenv-aruba.cloud
it1.jenv-aruba.cloud
keliweb.cloud
cs.keliweb.cloud
oxa.cloud
tn.oxa.cloud
uk.oxa.cloud
primetel.cloud
uk.primetel.cloud
ca.reclaim.cloud
uk.reclaim.cloud
us.reclaim.cloud
ch.trendhosting.cloud
de.trendhosting.cloud
jele.club
amscompute.com
dopaas.com
paas.hosted-by-previder.com
rag-cloud.hosteur.com
rag-cloud-ch.hosteur.com
jcloud.ik-server.com
jcloud-ver-jpc.ik-server.com
demo.jelastic.com
kilatiron.com
paas.massivegrid.com
jed.wafaicloud.com
lon.wafaicloud.com
ryd.wafaicloud.com
j.scaleforce.com.cy
jelastic.dogado.eu
fi.cloudplatform.fi
demo.datacenter.fi
paas.datacenter.fi
jele.host
mircloud.host
paas.beebyte.io
sekd1.beebyteapp.io
jele.io
cloud-fr1.unispace.io
jc.neen.it
cloud.jelastic.open.tim.it
jcloud.kz
upaas.kazteleport.kz
cloudjiffy.net
fra1-de.cloudjiffy.net
west1-us.cloudjiffy.net
jls-sto1.elastx.net
jls-sto2.elastx.net
jls-sto3.elastx.net
faststacks.net
fr-1.paas.massivegrid.net
lon-1.paas.massivegrid.net
lon-2.paas.massivegrid.net
ny-1.paas.massivegrid.net
ny-2.paas.massivegrid.net
sg-1.paas.massivegrid.net
jelastic.saveincloud.net
nordeste-idc.saveincloud.net
j.scaleforce.net
jelastic.tsukaeru.net
sdscloud.pl
unicloud.pl
mircloud.ru
jelastic.regruhosting.ru
enscaled.sg
jele.site
jelastic.team
orangecloud.tn
j.layershift.co.uk
phx.enscaled.us
mircloud.us

// Jino : https://www.jino.ru
// Submitted by Sergey Ulyashin <ulyashin@jino.ru>
myjino.ru
*.hosting.myjino.ru
*.landing.myjino.ru
*.spectrum.myjino.ru
*.vps.myjino.ru

// Jotelulu S.L. : https://jotelulu.com
// Submitted by Daniel Fari\xF1a <ingenieria@jotelulu.com>
jotelulu.cloud

// Joyent : https://www.joyent.com/
// Submitted by Brian Bennett <brian.bennett@joyent.com>
*.triton.zone
*.cns.joyent.com

// JS.ORG : http://dns.js.org
// Submitted by Stefan Keim <admin@js.org>
js.org

// KaasHosting : http://www.kaashosting.nl/
// Submitted by Wouter Bakker <hostmaster@kaashosting.nl>
kaas.gg
khplay.nl

// Kakao : https://www.kakaocorp.com/
// Submitted by JaeYoong Lee <cec@kakaocorp.com>
ktistory.com

// Kapsi : https://kapsi.fi
// Submitted by Tomi Juntunen <erani@kapsi.fi>
kapsi.fi

// Keyweb AG : https://www.keyweb.de
// Submitted by Martin Dannehl <postmaster@keymachine.de>
keymachine.de

// KingHost : https://king.host
// Submitted by Felipe Keller Braz <felipebraz@kinghost.com.br>
kinghost.net
uni5.net

// KnightPoint Systems, LLC : http://www.knightpoint.com/
// Submitted by Roy Keene <rkeene@knightpoint.com>
knightpoint.systems

// KoobinEvent, SL: https://www.koobin.com
// Submitted by Iv\xE1n Oliva <ivan.oliva@koobin.com>
koobin.events

// KUROKU LTD : https://kuroku.ltd/
// Submitted by DisposaBoy <security@oya.to>
oya.to

// Katholieke Universiteit Leuven: https://www.kuleuven.be
// Submitted by Abuse KU Leuven <abuse@kuleuven.be>
kuleuven.cloud
ezproxy.kuleuven.be

// .KRD : http://nic.krd/data/krd/Registration%20Policy.pdf
co.krd
edu.krd

// Krellian Ltd. : https://krellian.com
// Submitted by Ben Francis <ben@krellian.com>
krellian.net
webthings.io

// LCube - Professional hosting e.K. : https://www.lcube-webhosting.de
// Submitted by Lars Laehn <info@lcube.de>
git-repos.de
lcube-server.de
svn-repos.de

// Leadpages : https://www.leadpages.net
// Submitted by Greg Dallavalle <domains@leadpages.net>
leadpages.co
lpages.co
lpusercontent.com

// Lelux.fi : https://lelux.fi/
// Submitted by Lelux Admin <publisuffix@lelux.site>
lelux.site

// Lifetime Hosting : https://Lifetime.Hosting/
// Submitted by Mike Fillator <support@lifetime.hosting>
co.business
co.education
co.events
co.financial
co.network
co.place
co.technology

// Lightmaker Property Manager, Inc. : https://app.lmpm.com/
// Submitted by Greg Holland <greg.holland@lmpm.com>
app.lmpm.com

// linkyard ldt: https://www.linkyard.ch/
// Submitted by Mario Siegenthaler <mario.siegenthaler@linkyard.ch>
linkyard.cloud
linkyard-cloud.ch

// Linode : https://linode.com
// Submitted by <security@linode.com>
members.linode.com
*.nodebalancer.linode.com
*.linodeobjects.com
ip.linodeusercontent.com

// LiquidNet Ltd : http://www.liquidnetlimited.com/
// Submitted by Victor Velchev <admin@liquidnetlimited.com>
we.bs

// Localcert : https://localcert.dev
// Submitted by Lann Martin <security@localcert.dev>
*.user.localcert.dev

// localzone.xyz
// Submitted by Kenny Niehage <hello@yahe.sh>
localzone.xyz

// Log'in Line : https://www.loginline.com/
// Submitted by R\xE9mi Mach <remi.mach@loginline.com>
loginline.app
loginline.dev
loginline.io
loginline.services
loginline.site

// Lokalized : https://lokalized.nl
// Submitted by Noah Taheij <noah@lokalized.nl>
servers.run

// L\xF5hmus Family, The
// Submitted by Heiki L\xF5hmus <hostmaster at lohmus dot me>
lohmus.me

// LubMAN UMCS Sp. z o.o : https://lubman.pl/
// Submitted by Ireneusz Maliszewski <ireneusz.maliszewski@lubman.pl>
krasnik.pl
leczna.pl
lubartow.pl
lublin.pl
poniatowa.pl
swidnik.pl

// Lug.org.uk : https://lug.org.uk
// Submitted by Jon Spriggs <admin@lug.org.uk>
glug.org.uk
lug.org.uk
lugs.org.uk

// Lukanet Ltd : https://lukanet.com
// Submitted by Anton Avramov <register@lukanet.com>
barsy.bg
barsy.co.uk
barsyonline.co.uk
barsycenter.com
barsyonline.com
barsy.club
barsy.de
barsy.eu
barsy.in
barsy.info
barsy.io
barsy.me
barsy.menu
barsy.mobi
barsy.net
barsy.online
barsy.org
barsy.pro
barsy.pub
barsy.ro
barsy.shop
barsy.site
barsy.support
barsy.uk

// Magento Commerce
// Submitted by Damien Tournoud <dtournoud@magento.cloud>
*.magentosite.cloud

// May First - People Link : https://mayfirst.org/
// Submitted by Jamie McClelland <info@mayfirst.org>
mayfirst.info
mayfirst.org

// Mail.Ru Group : https://hb.cldmail.ru
// Submitted by Ilya Zaretskiy <zaretskiy@corp.mail.ru>
hb.cldmail.ru

// Mail Transfer Platform : https://www.neupeer.com
// Submitted by Li Hui <lihui@neupeer.com>
cn.vu

// Maze Play: https://www.mazeplay.com
// Submitted by Adam Humpherys <adam@mws.dev>
mazeplay.com

// mcpe.me : https://mcpe.me
// Submitted by Noa Heyl <hi@noa.dev>
mcpe.me

// McHost : https://mchost.ru
// Submitted by Evgeniy Subbotin <e.subbotin@mchost.ru>
mcdir.me
mcdir.ru
mcpre.ru
vps.mcdir.ru

// Mediatech : https://mediatech.by
// Submitted by Evgeniy Kozhuhovskiy <ugenk@mediatech.by>
mediatech.by
mediatech.dev

// Medicom Health : https://medicomhealth.com
// Submitted by Michael Olson <molson@medicomhealth.com>
hra.health

// Memset hosting : https://www.memset.com
// Submitted by Tom Whitwell <domains@memset.com>
miniserver.com
memset.net

// Messerli Informatik AG : https://www.messerli.ch/
// Submitted by Ruben Schmidmeister <psl-maintainers@messerli.ch>
messerli.app

// MetaCentrum, CESNET z.s.p.o. : https://www.metacentrum.cz/en/
// Submitted by Zden\u011Bk \u0160ustr <zdenek.sustr@cesnet.cz>
*.cloud.metacentrum.cz
custom.metacentrum.cz

// MetaCentrum, CESNET z.s.p.o. : https://www.metacentrum.cz/en/
// Submitted by Radim Jan\u010Da <janca@cesnet.cz>
flt.cloud.muni.cz
usr.cloud.muni.cz

// Meteor Development Group : https://www.meteor.com/hosting
// Submitted by Pierre Carrier <pierre@meteor.com>
meteorapp.com
eu.meteorapp.com

// Michau Enterprises Limited : http://www.co.pl/
co.pl

// Microsoft Corporation : http://microsoft.com
// Submitted by Public Suffix List Admin <msftpsladmin@microsoft.com>
*.azurecontainer.io
azurewebsites.net
azure-mobile.net
cloudapp.net
azurestaticapps.net
1.azurestaticapps.net
2.azurestaticapps.net
3.azurestaticapps.net
centralus.azurestaticapps.net
eastasia.azurestaticapps.net
eastus2.azurestaticapps.net
westeurope.azurestaticapps.net
westus2.azurestaticapps.net

// minion.systems : http://minion.systems
// Submitted by Robert B\xF6ttinger <r@minion.systems>
csx.cc

// Mintere : https://mintere.com/
// Submitted by Ben Aubin <security@mintere.com>
mintere.site

// MobileEducation, LLC : https://joinforte.com
// Submitted by Grayson Martin <grayson.martin@mobileeducation.us>
forte.id

// Mozilla Corporation : https://mozilla.com
// Submitted by Ben Francis <bfrancis@mozilla.com>
mozilla-iot.org

// Mozilla Foundation : https://mozilla.org/
// Submitted by glob <glob@mozilla.com>
bmoattachments.org

// MSK-IX : https://www.msk-ix.ru/
// Submitted by Khannanov Roman <r.khannanov@msk-ix.ru>
net.ru
org.ru
pp.ru

// Mythic Beasts : https://www.mythic-beasts.com
// Submitted by Paul Cammish <kelduum@mythic-beasts.com>
hostedpi.com
customer.mythic-beasts.com
caracal.mythic-beasts.com
fentiger.mythic-beasts.com
lynx.mythic-beasts.com
ocelot.mythic-beasts.com
oncilla.mythic-beasts.com
onza.mythic-beasts.com
sphinx.mythic-beasts.com
vs.mythic-beasts.com
x.mythic-beasts.com
yali.mythic-beasts.com
cust.retrosnub.co.uk

// Nabu Casa : https://www.nabucasa.com
// Submitted by Paulus Schoutsen <infra@nabucasa.com>
ui.nabu.casa

// Net at Work Gmbh : https://www.netatwork.de
// Submitted by Jan Jaeschke <jan.jaeschke@netatwork.de>
cloud.nospamproxy.com

// Netlify : https://www.netlify.com
// Submitted by Jessica Parsons <jessica@netlify.com>
netlify.app

// Neustar Inc.
// Submitted by Trung Tran <Trung.Tran@neustar.biz>
4u.com

// ngrok : https://ngrok.com/
// Submitted by Alan Shreve <alan@ngrok.com>
ngrok.app
ngrok-free.app
ngrok.dev
ngrok-free.dev
ngrok.io
ap.ngrok.io
au.ngrok.io
eu.ngrok.io
in.ngrok.io
jp.ngrok.io
sa.ngrok.io
us.ngrok.io
ngrok.pizza

// Nimbus Hosting Ltd. : https://www.nimbushosting.co.uk/
// Submitted by Nicholas Ford <nick@nimbushosting.co.uk>
nh-serv.co.uk

// NFSN, Inc. : https://www.NearlyFreeSpeech.NET/
// Submitted by Jeff Wheelhouse <support@nearlyfreespeech.net>
nfshost.com

// Noop : https://noop.app
// Submitted by Nathaniel Schweinberg <noop@rearc.io>
*.developer.app
noop.app

// Northflank Ltd. : https://northflank.com/
// Submitted by Marco Suter <marco@northflank.com>
*.northflank.app
*.build.run
*.code.run
*.database.run
*.migration.run

// Noticeable : https://noticeable.io
// Submitted by Laurent Pellegrino <security@noticeable.io>
noticeable.news

// Now-DNS : https://now-dns.com
// Submitted by Steve Russell <steve@now-dns.com>
dnsking.ch
mypi.co
n4t.co
001www.com
ddnslive.com
myiphost.com
forumz.info
16-b.it
32-b.it
64-b.it
soundcast.me
tcp4.me
dnsup.net
hicam.net
now-dns.net
ownip.net
vpndns.net
dynserv.org
now-dns.org
x443.pw
now-dns.top
ntdll.top
freeddns.us
crafting.xyz
zapto.xyz

// nsupdate.info : https://www.nsupdate.info/
// Submitted by Thomas Waldmann <info@nsupdate.info>
nsupdate.info
nerdpol.ovh

// No-IP.com : https://noip.com/
// Submitted by Deven Reza <publicsuffixlist@noip.com>
blogsyte.com
brasilia.me
cable-modem.org
ciscofreak.com
collegefan.org
couchpotatofries.org
damnserver.com
ddns.me
ditchyourip.com
dnsfor.me
dnsiskinky.com
dvrcam.info
dynns.com
eating-organic.net
fantasyleague.cc
geekgalaxy.com
golffan.us
health-carereform.com
homesecuritymac.com
homesecuritypc.com
hopto.me
ilovecollege.info
loginto.me
mlbfan.org
mmafan.biz
myactivedirectory.com
mydissent.net
myeffect.net
mymediapc.net
mypsx.net
mysecuritycamera.com
mysecuritycamera.net
mysecuritycamera.org
net-freaks.com
nflfan.org
nhlfan.net
no-ip.ca
no-ip.co.uk
no-ip.net
noip.us
onthewifi.com
pgafan.net
point2this.com
pointto.us
privatizehealthinsurance.net
quicksytes.com
read-books.org
securitytactics.com
serveexchange.com
servehumour.com
servep2p.com
servesarcasm.com
stufftoread.com
ufcfan.org
unusualperson.com
workisboring.com
3utilities.com
bounceme.net
ddns.net
ddnsking.com
gotdns.ch
hopto.org
myftp.biz
myftp.org
myvnc.com
no-ip.biz
no-ip.info
no-ip.org
noip.me
redirectme.net
servebeer.com
serveblog.net
servecounterstrike.com
serveftp.com
servegame.com
servehalflife.com
servehttp.com
serveirc.com
serveminecraft.net
servemp3.com
servepics.com
servequake.com
sytes.net
webhop.me
zapto.org

// NodeArt : https://nodeart.io
// Submitted by Konstantin Nosov <Nosov@nodeart.io>
stage.nodeart.io

// Nucleos Inc. : https://nucleos.com
// Submitted by Piotr Zduniak <piotr@nucleos.com>
pcloud.host

// NYC.mn : http://www.information.nyc.mn
// Submitted by Matthew Brown <mattbrown@nyc.mn>
nyc.mn

// Observable, Inc. : https://observablehq.com
// Submitted by Mike Bostock <dns@observablehq.com>
static.observableusercontent.com

// Octopodal Solutions, LLC. : https://ulterius.io/
// Submitted by Andrew Sampson <andrew@ulterius.io>
cya.gg

// OMG.LOL : <https://omg.lol>
// Submitted by Adam Newbold <adam@omg.lol>
omg.lol

// Omnibond Systems, LLC. : https://www.omnibond.com
// Submitted by Cole Estep <cole@omnibond.com>
cloudycluster.net

// OmniWe Limited: https://omniwe.com
// Submitted by Vicary Archangel <vicary@omniwe.com>
omniwe.site

// One.com: https://www.one.com/
// Submitted by Jacob Bunk Nielsen <jbn@one.com>
123hjemmeside.dk
123hjemmeside.no
123homepage.it
123kotisivu.fi
123minsida.se
123miweb.es
123paginaweb.pt
123sait.ru
123siteweb.fr
123webseite.at
123webseite.de
123website.be
123website.ch
123website.lu
123website.nl
service.one
simplesite.com
simplesite.com.br
simplesite.gr
simplesite.pl

// One Fold Media : http://www.onefoldmedia.com/
// Submitted by Eddie Jones <eddie@onefoldmedia.com>
nid.io

// Open Social : https://www.getopensocial.com/
// Submitted by Alexander Varwijk <security@getopensocial.com>
opensocial.site

// OpenCraft GmbH : http://opencraft.com/
// Submitted by Sven Marnach <sven@opencraft.com>
opencraft.hosting

// OpenResearch GmbH: https://openresearch.com/
// Submitted by Philipp Schmid <ops@openresearch.com>
orsites.com

// Opera Software, A.S.A.
// Submitted by Yngve Pettersen <yngve@opera.com>
operaunite.com

// Orange : https://www.orange.com
// Submitted by Alexandre Linte <alexandre.linte@orange.com>
tech.orange

// Oursky Limited : https://authgear.com/, https://skygear.io/
// Submitted by Authgear Team <hello@authgear.com>, Skygear Developer <hello@skygear.io>
authgear-staging.com
authgearapps.com
skygearapp.com

// OutSystems
// Submitted by Duarte Santos <domain-admin@outsystemscloud.com>
outsystemscloud.com

// OVHcloud: https://ovhcloud.com
// Submitted by Vincent Cass\xE9 <vincent.casse@ovhcloud.com>
*.webpaas.ovh.net
*.hosting.ovh.net

// OwnProvider GmbH: http://www.ownprovider.com
// Submitted by Jan Moennich <jan.moennich@ownprovider.com>
ownprovider.com
own.pm

// OwO : https://whats-th.is/
// Submitted by Dean Sheather <dean@deansheather.com>
*.owo.codes

// OX : http://www.ox.rs
// Submitted by Adam Grand <webmaster@mail.ox.rs>
ox.rs

// oy.lc
// Submitted by Charly Coste <changaco@changaco.oy.lc>
oy.lc

// Pagefog : https://pagefog.com/
// Submitted by Derek Myers <derek@pagefog.com>
pgfog.com

// Pagefront : https://www.pagefronthq.com/
// Submitted by Jason Kriss <jason@pagefronthq.com>
pagefrontapp.com

// PageXL : https://pagexl.com
// Submitted by Yann Guichard <yann@pagexl.com>
pagexl.com

// Paywhirl, Inc : https://paywhirl.com/
// Submitted by Daniel Netzer <dan@paywhirl.com>
*.paywhirl.com

// pcarrier.ca Software Inc: https://pcarrier.ca/
// Submitted by Pierre Carrier <pc@rrier.ca>
bar0.net
bar1.net
bar2.net
rdv.to

// .pl domains (grandfathered)
art.pl
gliwice.pl
krakow.pl
poznan.pl
wroc.pl
zakopane.pl

// Pantheon Systems, Inc. : https://pantheon.io/
// Submitted by Gary Dylina <gary@pantheon.io>
pantheonsite.io
gotpantheon.com

// Peplink | Pepwave : http://peplink.com/
// Submitted by Steve Leung <steveleung@peplink.com>
mypep.link

// Perspecta : https://perspecta.com/
// Submitted by Kenneth Van Alstyne <kvanalstyne@perspecta.com>
perspecta.cloud

// PE Ulyanov Kirill Sergeevich : https://airy.host
// Submitted by Kirill Ulyanov <k.ulyanov@airy.host>
lk3.ru

// Planet-Work : https://www.planet-work.com/
// Submitted by Fr\xE9d\xE9ric VANNI\xC8RE <f.vanniere@planet-work.com>
on-web.fr

// Platform.sh : https://platform.sh
// Submitted by Nikola Kotur <nikola@platform.sh>
bc.platform.sh
ent.platform.sh
eu.platform.sh
us.platform.sh
*.platformsh.site
*.tst.site

// Platter: https://platter.dev
// Submitted by Patrick Flor <patrick@platter.dev>
platter-app.com
platter-app.dev
platterp.us

// Plesk : https://www.plesk.com/
// Submitted by Anton Akhtyamov <program-managers@plesk.com>
pdns.page
plesk.page
pleskns.com

// Port53 : https://port53.io/
// Submitted by Maximilian Schieder <maxi@zeug.co>
dyn53.io

// Porter : https://porter.run/
// Submitted by Rudraksh MK <rudi@porter.run>
onporter.run

// Positive Codes Technology Company : http://co.bn/faq.html
// Submitted by Zulfais <pc@co.bn>
co.bn

// Postman, Inc : https://postman.com
// Submitted by Rahul Dhawan <security@postman.com>
postman-echo.com
pstmn.io
mock.pstmn.io
httpbin.org

//prequalifyme.today : https://prequalifyme.today
//Submitted by DeepakTiwari deepak@ivylead.io
prequalifyme.today

// prgmr.com : https://prgmr.com/
// Submitted by Sarah Newman <owner@prgmr.com>
xen.prgmr.com

// priv.at : http://www.nic.priv.at/
// Submitted by registry <lendl@nic.at>
priv.at

// privacytools.io : https://www.privacytools.io/
// Submitted by Jonah Aragon <jonah@privacytools.io>
prvcy.page

// Protocol Labs : https://protocol.ai/
// Submitted by Michael Burns <noc@protocol.ai>
*.dweb.link

// Protonet GmbH : http://protonet.io
// Submitted by Martin Meier <admin@protonet.io>
protonet.io

// Publication Presse Communication SARL : https://ppcom.fr
// Submitted by Yaacov Akiba Slama <admin@chirurgiens-dentistes-en-france.fr>
chirurgiens-dentistes-en-france.fr
byen.site

// pubtls.org: https://www.pubtls.org
// Submitted by Kor Nielsen <kor@pubtls.org>
pubtls.org

// PythonAnywhere LLP: https://www.pythonanywhere.com
// Submitted by Giles Thomas <giles@pythonanywhere.com>
pythonanywhere.com
eu.pythonanywhere.com

// QOTO, Org.
// Submitted by Jeffrey Phillips Freeman <jeffrey.freeman@qoto.org>
qoto.io

// Qualifio : https://qualifio.com/
// Submitted by Xavier De Cock <xdecock@gmail.com>
qualifioapp.com

// Quality Unit: https://qualityunit.com
// Submitted by Vasyl Tsalko <vtsalko@qualityunit.com>
ladesk.com

// QuickBackend: https://www.quickbackend.com
// Submitted by Dani Biro <dani@pymet.com>
qbuser.com

// Rad Web Hosting: https://radwebhosting.com
// Submitted by Scott Claeys <s.claeys@radwebhosting.com>
cloudsite.builders

// Redgate Software: https://red-gate.com
// Submitted by Andrew Farries <andrew.farries@red-gate.com>
instances.spawn.cc

// Redstar Consultants : https://www.redstarconsultants.com/
// Submitted by Jons Slemmer <jons@redstarconsultants.com>
instantcloud.cn

// Russian Academy of Sciences
// Submitted by Tech Support <support@rasnet.ru>
ras.ru

// QA2
// Submitted by Daniel Dent (https://www.danieldent.com/)
qa2.com

// QCX
// Submitted by Cassandra Beelen <cassandra@beelen.one>
qcx.io
*.sys.qcx.io

// QNAP System Inc : https://www.qnap.com
// Submitted by Nick Chang <nickchang@qnap.com>
dev-myqnapcloud.com
alpha-myqnapcloud.com
myqnapcloud.com

// Quip : https://quip.com
// Submitted by Patrick Linehan <plinehan@quip.com>
*.quipelements.com

// Qutheory LLC : http://qutheory.io
// Submitted by Jonas Schwartz <jonas@qutheory.io>
vapor.cloud
vaporcloud.io

// Rackmaze LLC : https://www.rackmaze.com
// Submitted by Kirill Pertsev <kika@rackmaze.com>
rackmaze.com
rackmaze.net

// Rakuten Games, Inc : https://dev.viberplay.io
// Submitted by Joshua Zhang <public-suffix@rgames.jp>
g.vbrplsbx.io

// Rancher Labs, Inc : https://rancher.com
// Submitted by Vincent Fiduccia <domains@rancher.com>
*.on-k3s.io
*.on-rancher.cloud
*.on-rio.io

// Read The Docs, Inc : https://www.readthedocs.org
// Submitted by David Fischer <team@readthedocs.org>
readthedocs.io

// Red Hat, Inc. OpenShift : https://openshift.redhat.com/
// Submitted by Tim Kramer <tkramer@rhcloud.com>
rhcloud.com

// Render : https://render.com
// Submitted by Anurag Goel <dev@render.com>
app.render.com
onrender.com

// Repl.it : https://repl.it
// Submitted by Lincoln Bergeson <lincoln@replit.com>
firewalledreplit.co
id.firewalledreplit.co
repl.co
id.repl.co
repl.run

// Resin.io : https://resin.io
// Submitted by Tim Perry <tim@resin.io>
resindevice.io
devices.resinstaging.io

// RethinkDB : https://www.rethinkdb.com/
// Submitted by Chris Kastorff <info@rethinkdb.com>
hzc.io

// Revitalised Limited : http://www.revitalised.co.uk
// Submitted by Jack Price <jack@revitalised.co.uk>
wellbeingzone.eu
wellbeingzone.co.uk

// Rico Developments Limited : https://adimo.co
// Submitted by Colin Brown <hello@adimo.co>
adimo.co.uk

// Riseup Networks : https://riseup.net
// Submitted by Micah Anderson <micah@riseup.net>
itcouldbewor.se

// Rochester Institute of Technology : http://www.rit.edu/
// Submitted by Jennifer Herting <jchits@rit.edu>
git-pages.rit.edu

// Rocky Enterprise Software Foundation : https://resf.org
// Submitted by Neil Hanlon <neil@resf.org>
rocky.page

// Rusnames Limited: http://rusnames.ru/
// Submitted by Sergey Zotov <admin@rusnames.ru>
\u0431\u0438\u0437.\u0440\u0443\u0441
\u043A\u043E\u043C.\u0440\u0443\u0441
\u043A\u0440\u044B\u043C.\u0440\u0443\u0441
\u043C\u0438\u0440.\u0440\u0443\u0441
\u043C\u0441\u043A.\u0440\u0443\u0441
\u043E\u0440\u0433.\u0440\u0443\u0441
\u0441\u0430\u043C\u0430\u0440\u0430.\u0440\u0443\u0441
\u0441\u043E\u0447\u0438.\u0440\u0443\u0441
\u0441\u043F\u0431.\u0440\u0443\u0441
\u044F.\u0440\u0443\u0441

// SAKURA Internet Inc. : https://www.sakura.ad.jp/
// Submitted by Internet Service Department <rs-vendor-ml@sakura.ad.jp>
180r.com
dojin.com
sakuratan.com
sakuraweb.com
x0.com
2-d.jp
bona.jp
crap.jp
daynight.jp
eek.jp
flop.jp
halfmoon.jp
jeez.jp
matrix.jp
mimoza.jp
ivory.ne.jp
mail-box.ne.jp
mints.ne.jp
mokuren.ne.jp
opal.ne.jp
sakura.ne.jp
sumomo.ne.jp
topaz.ne.jp
netgamers.jp
nyanta.jp
o0o0.jp
rdy.jp
rgr.jp
rulez.jp
s3.isk01.sakurastorage.jp
s3.isk02.sakurastorage.jp
saloon.jp
sblo.jp
skr.jp
tank.jp
uh-oh.jp
undo.jp
rs.webaccel.jp
user.webaccel.jp
websozai.jp
xii.jp
squares.net
jpn.org
kirara.st
x0.to
from.tv
sakura.tv

// Salesforce.com, Inc. https://salesforce.com/
// Submitted by Michael Biven <mbiven@salesforce.com>
*.builder.code.com
*.dev-builder.code.com
*.stg-builder.code.com

// Sandstorm Development Group, Inc. : https://sandcats.io/
// Submitted by Asheesh Laroia <asheesh@sandstorm.io>
sandcats.io

// SBE network solutions GmbH : https://www.sbe.de/
// Submitted by Norman Meilick <nm@sbe.de>
logoip.de
logoip.com

// Scaleway : https://www.scaleway.com/
// Submitted by R\xE9my L\xE9one <rleone@scaleway.com>
fr-par-1.baremetal.scw.cloud
fr-par-2.baremetal.scw.cloud
nl-ams-1.baremetal.scw.cloud
fnc.fr-par.scw.cloud
functions.fnc.fr-par.scw.cloud
k8s.fr-par.scw.cloud
nodes.k8s.fr-par.scw.cloud
s3.fr-par.scw.cloud
s3-website.fr-par.scw.cloud
whm.fr-par.scw.cloud
priv.instances.scw.cloud
pub.instances.scw.cloud
k8s.scw.cloud
k8s.nl-ams.scw.cloud
nodes.k8s.nl-ams.scw.cloud
s3.nl-ams.scw.cloud
s3-website.nl-ams.scw.cloud
whm.nl-ams.scw.cloud
k8s.pl-waw.scw.cloud
nodes.k8s.pl-waw.scw.cloud
s3.pl-waw.scw.cloud
s3-website.pl-waw.scw.cloud
scalebook.scw.cloud
smartlabeling.scw.cloud
dedibox.fr

// schokokeks.org GbR : https://schokokeks.org/
// Submitted by Hanno B\xF6ck <hanno@schokokeks.org>
schokokeks.net

// Scottish Government: https://www.gov.scot
// Submitted by Martin Ellis <martin.ellis@gov.scot>
gov.scot
service.gov.scot

// Scry Security : http://www.scrysec.com
// Submitted by Shante Adam <shante@skyhat.io>
scrysec.com

// Securepoint GmbH : https://www.securepoint.de
// Submitted by Erik Anders <erik.anders@securepoint.de>
firewall-gateway.com
firewall-gateway.de
my-gateway.de
my-router.de
spdns.de
spdns.eu
firewall-gateway.net
my-firewall.org
myfirewall.org
spdns.org

// Seidat : https://www.seidat.com
// Submitted by Artem Kondratev <accounts@seidat.com>
seidat.net

// Sellfy : https://sellfy.com
// Submitted by Yuriy Romadin <contact@sellfy.com>
sellfy.store

// Senseering GmbH : https://www.senseering.de
// Submitted by Felix M\xF6nckemeyer <f.moenckemeyer@senseering.de>
senseering.net

// Sendmsg: https://www.sendmsg.co.il
// Submitted by Assaf Stern <domains@comstar.co.il>
minisite.ms

// Service Magnet : https://myservicemagnet.com
// Submitted by Dave Sanders <dave@myservicemagnet.com>
magnet.page

// Service Online LLC : http://drs.ua/
// Submitted by Serhii Bulakh <support@drs.ua>
biz.ua
co.ua
pp.ua

// Shift Crypto AG : https://shiftcrypto.ch
// Submitted by alex <alex@shiftcrypto.ch>
shiftcrypto.dev
shiftcrypto.io

// ShiftEdit : https://shiftedit.net/
// Submitted by Adam Jimenez <adam@shiftcreate.com>
shiftedit.io

// Shopblocks : http://www.shopblocks.com/
// Submitted by Alex Bowers <alex@shopblocks.com>
myshopblocks.com

// Shopify : https://www.shopify.com
// Submitted by Alex Richter <alex.richter@shopify.com>
myshopify.com

// Shopit : https://www.shopitcommerce.com/
// Submitted by Craig McMahon <craig@shopitcommerce.com>
shopitsite.com

// shopware AG : https://shopware.com
// Submitted by Jens K\xFCper <cloud@shopware.com>
shopware.store

// Siemens Mobility GmbH
// Submitted by Oliver Graebner <security@mo-siemens.io>
mo-siemens.io

// SinaAppEngine : http://sae.sina.com.cn/
// Submitted by SinaAppEngine <saesupport@sinacloud.com>
1kapp.com
appchizi.com
applinzi.com
sinaapp.com
vipsinaapp.com

// Siteleaf : https://www.siteleaf.com/
// Submitted by Skylar Challand <support@siteleaf.com>
siteleaf.net

// Skyhat : http://www.skyhat.io
// Submitted by Shante Adam <shante@skyhat.io>
bounty-full.com
alpha.bounty-full.com
beta.bounty-full.com

// Smallregistry by Promopixel SARL: https://www.smallregistry.net
// Former AFNIC's SLDs 
// Submitted by J\xE9r\xF4me Lipowicz <support@promopixel.com>
aeroport.fr
avocat.fr
chambagri.fr
chirurgiens-dentistes.fr
experts-comptables.fr
medecin.fr
notaires.fr
pharmacien.fr
port.fr
veterinaire.fr

// Small Technology Foundation : https://small-tech.org
// Submitted by Aral Balkan <aral@small-tech.org>
small-web.org

// Smoove.io : https://www.smoove.io/
// Submitted by Dan Kozak <dan@smoove.io>
vp4.me

// Snowflake Inc : https://www.snowflake.com/
// Submitted by Faith Olapade <faith.olapade@snowflake.com>
snowflake.app
privatelink.snowflake.app
streamlit.app
streamlitapp.com

// Snowplow Analytics : https://snowplowanalytics.com/
// Submitted by Ian Streeter <ian@snowplowanalytics.com>
try-snowplow.com

// SourceHut : https://sourcehut.org
// Submitted by Drew DeVault <sir@cmpwn.com>
srht.site

// Stackhero : https://www.stackhero.io
// Submitted by Adrien Gillon <adrien+public-suffix-list@stackhero.io>
stackhero-network.com

// Staclar : https://staclar.com
// Submitted by Q Misell <q@staclar.com>
musician.io
// Submitted by Matthias Merkel <matthias.merkel@staclar.com>
novecore.site

// staticland : https://static.land
// Submitted by Seth Vincent <sethvincent@gmail.com>
static.land
dev.static.land
sites.static.land

// Storebase : https://www.storebase.io
// Submitted by Tony Schirmer <tony@storebase.io>
storebase.store

// Strategic System Consulting (eApps Hosting): https://www.eapps.com/
// Submitted by Alex Oancea <aoancea@cloudscale365.com>
vps-host.net
atl.jelastic.vps-host.net
njs.jelastic.vps-host.net
ric.jelastic.vps-host.net

// Sony Interactive Entertainment LLC : https://sie.com/
// Submitted by David Coles <david.coles@sony.com>
playstation-cloud.com

// SourceLair PC : https://www.sourcelair.com
// Submitted by Antonis Kalipetis <akalipetis@sourcelair.com>
apps.lair.io
*.stolos.io

// SpaceKit : https://www.spacekit.io/
// Submitted by Reza Akhavan <spacekit.io@gmail.com>
spacekit.io

// SpeedPartner GmbH: https://www.speedpartner.de/
// Submitted by Stefan Neufeind <info@speedpartner.de>
customer.speedpartner.de

// Spreadshop (sprd.net AG) : https://www.spreadshop.com/
// Submitted by Martin Breest <security@spreadshop.com>
myspreadshop.at
myspreadshop.com.au
myspreadshop.be
myspreadshop.ca
myspreadshop.ch
myspreadshop.com
myspreadshop.de
myspreadshop.dk
myspreadshop.es
myspreadshop.fi
myspreadshop.fr
myspreadshop.ie
myspreadshop.it
myspreadshop.net
myspreadshop.nl
myspreadshop.no
myspreadshop.pl
myspreadshop.se
myspreadshop.co.uk

// Standard Library : https://stdlib.com
// Submitted by Jacob Lee <jacob@stdlib.com>
api.stdlib.com

// Storipress : https://storipress.com
// Submitted by Benno Liu <benno@storipress.com>
storipress.app

// Storj Labs Inc. : https://storj.io/
// Submitted by Philip Hutchins <hostmaster@storj.io>
storj.farm

// Studenten Net Twente : http://www.snt.utwente.nl/
// Submitted by Silke Hofstra <syscom@snt.utwente.nl>
utwente.io

// Student-Run Computing Facility : https://www.srcf.net/
// Submitted by Edwin Balani <sysadmins@srcf.net>
soc.srcf.net
user.srcf.net

// Sub 6 Limited: http://www.sub6.com
// Submitted by Dan Miller <dm@sub6.com>
temp-dns.com

// Supabase : https://supabase.io
// Submitted by Inian Parameshwaran <security@supabase.io>
supabase.co
supabase.in
supabase.net
su.paba.se

// Symfony, SAS : https://symfony.com/
// Submitted by Fabien Potencier <fabien@symfony.com>
*.s5y.io
*.sensiosite.cloud

// Syncloud : https://syncloud.org
// Submitted by Boris Rybalkin <syncloud@syncloud.it>
syncloud.it

// Synology, Inc. : https://www.synology.com/
// Submitted by Rony Weng <ronyweng@synology.com>
dscloud.biz
direct.quickconnect.cn
dsmynas.com
familyds.com
diskstation.me
dscloud.me
i234.me
myds.me
synology.me
dscloud.mobi
dsmynas.net
familyds.net
dsmynas.org
familyds.org
vpnplus.to
direct.quickconnect.to

// Tabit Technologies Ltd. : https://tabit.cloud/
// Submitted by Oren Agiv <oren@tabit.cloud>
tabitorder.co.il
mytabit.co.il
mytabit.com

// TAIFUN Software AG : http://taifun-software.de
// Submitted by Bjoern Henke <dev-server@taifun-software.de>
taifun-dns.de

// Tailscale Inc. : https://www.tailscale.com
// Submitted by David Anderson <danderson@tailscale.com>
beta.tailscale.net
ts.net

// TASK geographical domains (www.task.gda.pl/uslugi/dns)
gda.pl
gdansk.pl
gdynia.pl
med.pl
sopot.pl

// team.blue https://team.blue
// Submitted by Cedric Dubois <cedric.dubois@team.blue>
site.tb-hosting.com

// Teckids e.V. : https://www.teckids.org
// Submitted by Dominik George <dominik.george@teckids.org>
edugit.io
s3.teckids.org

// Telebit : https://telebit.cloud
// Submitted by AJ ONeal <aj@telebit.cloud>
telebit.app
telebit.io
*.telebit.xyz

// Thingdust AG : https://thingdust.com/
// Submitted by Adrian Imboden <adi@thingdust.com>
*.firenet.ch
*.svc.firenet.ch
reservd.com
thingdustdata.com
cust.dev.thingdust.io
cust.disrec.thingdust.io
cust.prod.thingdust.io
cust.testing.thingdust.io
reservd.dev.thingdust.io
reservd.disrec.thingdust.io
reservd.testing.thingdust.io

// ticket i/O GmbH : https://ticket.io
// Submitted by Christian Franke <it@ticket.io>
tickets.io

// Tlon.io : https://tlon.io
// Submitted by Mark Staarink <mark@tlon.io>
arvo.network
azimuth.network
tlon.network

// Tor Project, Inc. : https://torproject.org
// Submitted by Antoine Beaupr\xE9 <anarcat@torproject.org
torproject.net
pages.torproject.net

// TownNews.com : http://www.townnews.com
// Submitted by Dustin Ward <dward@townnews.com>
bloxcms.com
townnews-staging.com

// TrafficPlex GmbH : https://www.trafficplex.de/
// Submitted by Phillipp R\xF6ll <phillipp.roell@trafficplex.de>
12hp.at
2ix.at
4lima.at
lima-city.at
12hp.ch
2ix.ch
4lima.ch
lima-city.ch
trafficplex.cloud
de.cool
12hp.de
2ix.de
4lima.de
lima-city.de
1337.pictures
clan.rip
lima-city.rocks
webspace.rocks
lima.zone

// TransIP : https://www.transip.nl
// Submitted by Rory Breuk <rbreuk@transip.nl>
*.transurl.be
*.transurl.eu
*.transurl.nl

// TransIP: https://www.transip.nl
// Submitted by Cedric Dubois <cedric.dubois@team.blue>
site.transip.me

// TuxFamily : http://tuxfamily.org
// Submitted by TuxFamily administrators <adm@staff.tuxfamily.org>
tuxfamily.org

// TwoDNS : https://www.twodns.de/
// Submitted by TwoDNS-Support <support@two-dns.de>
dd-dns.de
diskstation.eu
diskstation.org
dray-dns.de
draydns.de
dyn-vpn.de
dynvpn.de
mein-vigor.de
my-vigor.de
my-wan.de
syno-ds.de
synology-diskstation.de
synology-ds.de

// Typedream : https://typedream.com
// Submitted by Putri Karunia <putri@typedream.com>
typedream.app

// Typeform : https://www.typeform.com
// Submitted by Sergi Ferriz <sergi.ferriz@typeform.com>
pro.typeform.com

// Uberspace : https://uberspace.de
// Submitted by Moritz Werner <mwerner@jonaspasche.com>
uber.space
*.uberspace.de

// UDR Limited : http://www.udr.hk.com
// Submitted by registry <hostmaster@udr.hk.com>
hk.com
hk.org
ltd.hk
inc.hk

// UK Intis Telecom LTD : https://it.com
// Submitted by ITComdomains <to@it.com>
it.com

// UNIVERSAL DOMAIN REGISTRY : https://www.udr.org.yt/
// see also: whois -h whois.udr.org.yt help
// Submitted by Atanunu Igbunuroghene <publicsuffixlist@udr.org.yt>
name.pm
sch.tf
biz.wf
sch.wf
org.yt

// United Gameserver GmbH : https://united-gameserver.de
// Submitted by Stefan Schwarz <sysadm@united-gameserver.de>
virtualuser.de
virtual-user.de

// Upli : https://upli.io
// Submitted by Lenny Bakkalian <lenny.bakkalian@gmail.com>
upli.io

// urown.net : https://urown.net
// Submitted by Hostmaster <hostmaster@urown.net>
urown.cloud
dnsupdate.info

// .US
// Submitted by Ed Moore <Ed.Moore@lib.de.us>
lib.de.us

// VeryPositive SIA : http://very.lv
// Submitted by Danko Aleksejevs <danko@very.lv>
2038.io

// Vercel, Inc : https://vercel.com/
// Submitted by Connor Davis <security@vercel.com>
vercel.app
vercel.dev
now.sh

// Viprinet Europe GmbH : http://www.viprinet.com
// Submitted by Simon Kissel <hostmaster@viprinet.com>
router.management

// Virtual-Info : https://www.virtual-info.info/
// Submitted by Adnan RIHAN <hostmaster@v-info.info>
v-info.info

// Voorloper.com: https://voorloper.com
// Submitted by Nathan van Bakel <info@voorloper.com>
voorloper.cloud

// Voxel.sh DNS : https://voxel.sh/dns/
// Submitted by Mia Rehlinger <dns@voxel.sh>
neko.am
nyaa.am
be.ax
cat.ax
es.ax
eu.ax
gg.ax
mc.ax
us.ax
xy.ax
nl.ci
xx.gl
app.gp
blog.gt
de.gt
to.gt
be.gy
cc.hn
blog.kg
io.kg
jp.kg
tv.kg
uk.kg
us.kg
de.ls
at.md
de.md
jp.md
to.md
indie.porn
vxl.sh
ch.tc
me.tc
we.tc
nyan.to
at.vg
blog.vu
dev.vu
me.vu

// V.UA Domain Administrator : https://domain.v.ua/
// Submitted by Serhii Rostilo <sergey@rostilo.kiev.ua>
v.ua

// Vultr Objects : https://www.vultr.com/products/object-storage/
// Submitted by Niels Maumenee <storage@vultr.com>
*.vultrobjects.com

// Waffle Computer Inc., Ltd. : https://docs.waffleinfo.com
// Submitted by Masayuki Note <masa@blade.wafflecell.com>
wafflecell.com

// WebHare bv: https://www.webhare.com/
// Submitted by Arnold Hendriks <info@webhare.com>
*.webhare.dev

// WebHotelier Technologies Ltd: https://www.webhotelier.net/
// Submitted by Apostolos Tsakpinis <apostolos.tsakpinis@gmail.com>
reserve-online.net
reserve-online.com
bookonline.app
hotelwithflight.com

// WeDeploy by Liferay, Inc. : https://www.wedeploy.com
// Submitted by Henrique Vicente <security@wedeploy.com>
wedeploy.io
wedeploy.me
wedeploy.sh

// Western Digital Technologies, Inc : https://www.wdc.com
// Submitted by Jung Jin <jungseok.jin@wdc.com>
remotewd.com

// WIARD Enterprises : https://wiardweb.com
// Submitted by Kidd Hustle <kiddhustle@wiardweb.com>
pages.wiardweb.com

// Wikimedia Labs : https://wikitech.wikimedia.org
// Submitted by Arturo Borrero Gonzalez <aborrero@wikimedia.org>
wmflabs.org
toolforge.org
wmcloud.org

// WISP : https://wisp.gg
// Submitted by Stepan Fedotov <stepan@wisp.gg>
panel.gg
daemon.panel.gg

// Wizard Zines : https://wizardzines.com
// Submitted by Julia Evans <julia@wizardzines.com>
messwithdns.com

// WoltLab GmbH : https://www.woltlab.com
// Submitted by Tim D\xFCsterhus <security@woltlab.cloud>
woltlab-demo.com
myforum.community
community-pro.de
diskussionsbereich.de
community-pro.net
meinforum.net

// Woods Valldata : https://www.woodsvalldata.co.uk/
// Submitted by Chris Whittle <chris.whittle@woodsvalldata.co.uk>
affinitylottery.org.uk
raffleentry.org.uk
weeklylottery.org.uk

// WP Engine : https://wpengine.com/
// Submitted by Michael Smith <michael.smith@wpengine.com>
// Submitted by Brandon DuRette <brandon.durette@wpengine.com>
wpenginepowered.com
js.wpenginepowered.com

// Wix.com, Inc. : https://www.wix.com
// Submitted by Shahar Talmi <shahar@wix.com>
wixsite.com
editorx.io
wixstudio.io
wix.run

// XenonCloud GbR: https://xenoncloud.net
// Submitted by Julian Uphoff <publicsuffixlist@xenoncloud.net>
half.host

// XnBay Technology : http://www.xnbay.com/
// Submitted by XnBay Developer <developer.xncloud@gmail.com>
xnbay.com
u2.xnbay.com
u2-local.xnbay.com

// XS4ALL Internet bv : https://www.xs4all.nl/
// Submitted by Daniel Mostertman <unixbeheer+publicsuffix@xs4all.net>
cistron.nl
demon.nl
xs4all.space

// Yandex.Cloud LLC: https://cloud.yandex.com
// Submitted by Alexander Lodin <security+psl@yandex-team.ru>
yandexcloud.net
storage.yandexcloud.net
website.yandexcloud.net

// YesCourse Pty Ltd : https://yescourse.com
// Submitted by Atul Bhouraskar <atul@yescourse.com>
official.academy

// Yola : https://www.yola.com/
// Submitted by Stefano Rivera <stefano@yola.com>
yolasite.com

// Yombo : https://yombo.net
// Submitted by Mitch Schwenk <mitch@yombo.net>
ybo.faith
yombo.me
homelink.one
ybo.party
ybo.review
ybo.science
ybo.trade

// Yunohost : https://yunohost.org
// Submitted by Valentin Grimaud <security@yunohost.org>
ynh.fr
nohost.me
noho.st

// ZaNiC : http://www.za.net/
// Submitted by registry <hostmaster@nic.za.net>
za.net
za.org

// Zine EOOD : https://zine.bg/
// Submitted by Martin Angelov <martin@zine.bg>
bss.design

// Zitcom A/S : https://www.zitcom.dk
// Submitted by Emil Stahl <esp@zitcom.dk>
basicserver.io
virtualserver.io
enterprisecloud.nu

// ===END PRIVATE DOMAINS===
`.split(`
`).filter(e=>!e.startsWith("//")&&e.trim().length>0).sort((e,t)=>t.length-e.length);async function vR(e,t,a){let o=await Lw(a.filenameTemplate,a,e,t)||"";o=o.trim(),a.replaceEmojisInFilename&&yR.forEach(s=>o=Lt(o,s," _"+Tw[s]+"_ "));let{filenameReplacementCharacter:n,filenameReplacedCharacters:i,filenameReplacementCharacters:r}=a;if(o=an(o,i,n,r),a.backgroundSave||(o=o.replace(/\//g,n)),!a.keepFilename&&(a.filenameMaxLengthUnit=="bytes"&&tn(o)>a.filenameMaxLength||o.length>a.filenameMaxLength)){let s=o.match(/(\.[^.]{3,4})$/),l=s&&s[0]&&s[0].length>1?s[0]:"";o=a.filenameMaxLengthUnit=="bytes"?await qc(o,a.filenameMaxLength-l.length):o.substring(0,a.filenameMaxLength-l.length),o=o+"\u2026"+l}return o||(o="Unnamed page"),o.startsWith(".")&&(o="Unnamed page"+o),o.trim()}async function Lw(e="",t,a,o,n={}){let{dontReplaceSlash:i}=n;n.currentDate=new Date;let r=new pR(t.saveUrl||t.url),s=Bt(r.href),l=Array.from(new fR(r.search)),c=t.bookmarkFolders&&t.bookmarkFolders.join("/")||"",d=i===void 0?!0:i,m=kR.find(y=>r.hostname.endsWith("."+y)&&y),h=m?r.hostname.substring(0,r.hostname.length-m.length-1):r.hostname,u=h.lastIndexOf("."),p=h.substring(0,u==-1?0:u),g=h.substring(p.length?p.length+1:0),b=g+"."+m;p.startsWith("www.")?p=p.substring(4):p=="www"&&(p="");let f={"navigator-language":{getter:()=>wR.language},"page-title":{getter:()=>t.title},"page-heading":{getter:()=>t.info.heading},"page-language":{getter:()=>t.info.lang},"page-description":{getter:()=>t.info.description},"page-author":{getter:()=>t.info.author},"page-creator":{getter:()=>t.info.creator},"page-publisher":{getter:()=>t.info.publisher},"url-hash":{getter:()=>r.hash.substring(1)},"url-host":{getter:()=>r.host.replace(/\/$/,"")},"url-hostname":{getter:()=>r.hostname.replace(/\/$/,"")},"url-hostname-suffix":{getter:()=>m},"url-hostname-domain":{getter:()=>g},"url-hostname-root":{getter:()=>b},"url-hostname-subdomains":{getter:()=>p},"url-href":{getter:()=>s,dontReplaceSlash:d},"url-href-digest-sha-1":{getter:s?async()=>Jt("SHA-1",s):""},"url-href-flat":{getter:()=>Bt(r.href),dontReplaceSlash:!1},"url-referrer":{getter:()=>Bt(t.referrer),dontReplaceSlash:d},"url-referrer-flat":{getter:()=>Bt(t.referrer),dontReplaceSlash:!1},"url-password":{getter:()=>r.password},"url-pathname":{getter:()=>Bt(r.pathname).replace(/^\//,"").replace(/\/$/,""),dontReplaceSlash:d},"url-pathname-flat":{getter:()=>Bt(r.pathname),dontReplaceSlash:!1},"url-port":{getter:()=>r.port},"url-protocol":{getter:()=>r.protocol},"url-search":{getter:()=>r.search.substring(1)},"url-username":{getter:()=>r.username},"url-original":{getter:()=>t.originalUrl},"tab-id":{getter:()=>String(t.tabId)},"tab-index":{getter:()=>String(t.tabIndex)},"url-last-segment":{getter:()=>Bt(Cw(r,t.filenameReplacementCharacter))},"url-filename":{getter:()=>{let x=r.pathname.split("/"),C=x[x.length-1]||x[x.length-2]||"";return Bt(C)},dontReplaceSlash:d},"bookmark-pathname":{getter:()=>c,dontReplaceSlash:d},"bookmark-pathname-flat":{getter:()=>c,dontReplaceSlash:!1},"profile-name":{getter:()=>t.profileName},"filename-extension":{getter:()=>ER(t)},"save-action":{getter:()=>t.selected?"selection":"page"},"options-json":{getter:()=>JSON.stringify(Hc(t))},"options-text":{getter:()=>xR(Hc(t))}};a&&(f["digest-sha-256"]={getter:async()=>Jt("SHA-256",a)},f["digest-sha-384"]={getter:async()=>Jt("SHA-384",a)},f["digest-sha-512"]={getter:async()=>Jt("SHA-512",a)}),t.saveDate&&A(t.saveDate),t.visitDate&&A(t.visitDate,"visit-");let S={"if-empty":(...y)=>{let x=y.pop(),C=y.find(w=>w);return C||x},"if-not-empty":(...y)=>{let x=y.pop(),C=y.find(w=>w);return C&&x},"if-equals":(y,x,C,w)=>y==x?C:w,"if-not-equals":(y,x,C,w)=>y!=x?C:w,"if-contains":(y,x,C,w)=>x&&y.includes(x)?C:w,"if-not-contains":(y,x,C,w)=>x&&!y.includes(x)?C:w,substring:(y,x,C)=>y.substring(x,C),lowercase:y=>y.toLowerCase(),uppercase:y=>y.toUpperCase(),capitalize:y=>y.charAt(0).toUpperCase()+y.slice(1),replace:(y,x,C)=>x&&C?Lt(y,x,C):y,trim:y=>y.trim(),"trim-left":y=>y.trimLeft(),"trim-right":y=>y.trimRight(),"pad-left":(y,x,C)=>x>0?y.padStart(x,C):y,"pad-right":(y,x,C)=>x>0?y.padEnd(x,C):y,repeat:(y,x)=>x>0?y.repeat(x):"","index-of":(y,x,C)=>y.indexOf(x,C),"last-index-of":(y,x,C)=>y.lastIndexOf(x,C),length:y=>y.length,"url-search-name":(y=0)=>l[y]&&l[y][0],"url-search-value":(y=0)=>l[y]&&l[y][1],"url-search-named-value":y=>{let x=l.find(C=>C[0]==y);return x&&x[1]},"url-search":y=>{let x=l.find(C=>C[0]==y);return x&&x[1]},"url-segment":(y=0)=>{let x=Bt(r.pathname).split("/");return x.pop(),x.push(Cw(r,t.filenameReplacementCharacter)),x[y]},"url-hostname-subdomain":(y=0)=>{let x=p.split(".");return x[x.length-y-1]},stringify:y=>{try{return JSON.stringify(y)}catch{return y}},"encode-base64":y=>{try{return btoa(y)}catch{return y}},"decode-base64":y=>{try{return atob(y)}catch{return y}},"encode-uri":y=>{try{return encodeURI(y)}catch{return y}},"decode-uri":y=>{try{return decodeURI(y)}catch{return y}},"encode-uri-component":y=>{try{return encodeURIComponent(y)}catch{return y}},"decode-uri-component":y=>{try{return decodeURIComponent(y)}catch{return y}},"date-locale":y=>n.currentDate.toLocaleDateString(y),"time-locale":y=>n.currentDate.toLocaleTimeString(y),"datetime-locale":y=>n.currentDate.toLocaleString(y),"datetime-custom":(y,x,C,w,v,T,j,P,F,H,z,N,B,U,$)=>{let K=n.currentDate,G={};return J(G,"year",x),J(G,"month",C),J(G,"day",w),J(G,"weekday",v),J(G,"hour",T),J(G,"minute",j),J(G,"second",P),J(G,"hour12",F),G.hour12=F=="true",J(G,"timeZone",H),J(G,"fractionalSecondDigits",z),J(G,"timeZoneName",N),J(G,"dayPeriod",B),J(G,"era",U),J(G,"localeMatcher",$),new gR.DateTimeFormat(y,G).format(K);function J(he,ke,fe){fe==" "?he[ke]=void 0:fe&&(he[ke]=fe)}},"option-value":y=>{let x=Hc(t)[y];return x==null?"":JSON.stringify(x)}};S["date-locale"].dontReplaceSlash=!0,S["time-locale"].dontReplaceSlash=!0,S["datetime-locale"].dontReplaceSlash=!0,S["datetime-custom"].dontReplaceSlash=!0,o&&(S["page-element-text"]=y=>{let x=o.querySelector(y);return x&&x.textContent},S["page-element-attribute"]=(y,x)=>{let C=o.querySelector(y);return C&&C.getAttribute(x)}),e=Lt(e,"\\%","\\\\%"),e=Lt(e,"\\{","\\\\{"),e=Lt(e,"\\|","\\\\|"),e=Lt(e,"\\>","\\\\>");let k=await Aw(e,{async callFunction(y,[x,C],w){let v=S[y];if(v)if(x=x.replace(/\\\\(.)/g,"$1"),C||(C=[]),C=C.map(T=>T.replace(/\\\\(.)/g,"$1")).filter(T=>T!=null&&T!=null).map(T=>T==""?void 0:T),x!=null&&x!=null&&x!=""||C.length>0)try{let T=v.dontReplaceSlash===void 0?!0:v.dontReplaceSlash;return await jw(()=>v(x,...C),T,t.filenameReplacementCharacter,w)}catch{return""}else return"";else return""},getVariableValue(y,x){let C=f[y];return C?jw(C.getter,C.dontReplaceSlash,t.filenameReplacementCharacter,x):""}});return k=Lt(k,"\\\\%","%"),k=Lt(k,"\\\\{","{"),k=Lt(k,"\\\\|","|"),k=Lt(k,"\\\\>",">"),k;function A(y,x=""){f[x+"datetime-iso"]={getter:()=>y.toISOString()},f[x+"date-iso"]={getter:()=>y.toISOString().split("T")[0]},f[x+"time-iso"]={getter:()=>y.toISOString().split("T")[1].split("Z")[0]},f[x+"date-locale"]={getter:()=>y.toLocaleDateString()},f[x+"time-locale"]={getter:()=>y.toLocaleTimeString()},f[x+"day-locale"]={getter:()=>String(y.getDate()).padStart(2,"0")},f[x+"month-locale"]={getter:()=>String(y.getMonth()+1).padStart(2,"0")},f[x+"year-locale"]={getter:()=>String(y.getFullYear())},f[x+"datetime-locale"]={getter:()=>y.toLocaleString()},f[x+"datetime-utc"]={getter:()=>y.toUTCString()},f[x+"day-utc"]={getter:()=>String(y.getUTCDate()).padStart(2,"0")},f[x+"month-utc"]={getter:()=>String(y.getUTCMonth()+1).padStart(2,"0")},f[x+"year-utc"]={getter:()=>String(y.getUTCFullYear())},f[x+"hours-locale"]={getter:()=>String(y.getHours()).padStart(2,"0")},f[x+"minutes-locale"]={getter:()=>String(y.getMinutes()).padStart(2,"0")},f[x+"seconds-locale"]={getter:()=>String(y.getSeconds()).padStart(2,"0")},f[x+"hours-utc"]={getter:()=>String(y.getUTCHours()).padStart(2,"0")},f[x+"minutes-utc"]={getter:()=>String(y.getUTCMinutes()).padStart(2,"0")},f[x+"seconds-utc"]={getter:()=>String(y.getUTCSeconds()).padStart(2,"0")},f[x+"time-ms"]={getter:()=>String(y.getTime())}}}function Lt(e,t,a){if(typeof e.replaceAll=="function")return e.replaceAll(t,a);{let o=new RegExp(t.replace(bR,"\\$1"),"g");return e.replace(o,a)}}async function jw(e,t,a,o){let{maxLength:n,maxCharLength:i}=SR(o),r=await e()||"";return t||(r=r.replace(/\/+/g,a)),n?r=await qc(r,n):i&&(r=r.substring(0,i)),r}function SR(e){if(e){let{unit:t,length:a}=e,o,n;return t=="char"?n=a:o=a,{maxLength:o,maxCharLength:n}}else return{}}function Bt(e){try{return decodeURI(e)}catch{return e}}function Cw(e,t){let a=e.pathname.match(/\/([^/]+)$/),o=a&&a[0];return o||(a=e.href.match(/([^/]+)\/?$/),o=a&&a[0]),o||(a=o.match(/(.*)\.[^.]+$/),o=a&&a[0]),o||(o=e.hostname.replace(/\/+/g,t).replace(/\/$/,"")),a=o.match(/(.*)\.[^.]+$/),a&&a[1]&&(o=a[1]),o=o.replace(/\/$/,"").replace(/^\//,""),o}function qc(e,t){let a=new hR([e]),o=new uR;return o.readAsText(a.slice(0,t)),new Promise((n,i)=>{o.addEventListener("load",()=>{e.startsWith(o.result)?n(o.result):qc(e,t-1).then(n).catch(i)},!1),o.addEventListener("error",i,!1)})}function ER(e){return e.compressContent?e.selfExtractingArchive?e.extractDataFromPage?"u.zip.html":"zip.html":"zip":"html"}function Hc(e){let t=Object.assign({},e);return delete t.content,delete t.usedFonts,delete t.extensionScriptFiles,delete t.taskId,delete t.updatedResources,delete t.visitDate,delete t.keepFilename,delete t.insertCanonicalLink,delete t.frames,delete t.win,delete t.doc,delete t.url,delete t.resourceReferrer,delete t.baseURI,delete t.rootDocument,delete t.fontTests,delete t.canvases,delete t.fonts,delete t.worklets,delete t.stylesheets,delete t.images,delete t.posters,delete t.videos,delete t.shadowRoots,delete t.referrer,delete t.adoptedStyleSheets,delete t.tabId,delete t.tabIndex,delete t.saveDate,delete t.saveUrl,delete t.title,delete t.info,t}function xR(e){let t=[];for(let a in e){let o=e[a];typeof o!="function"&&o!==void 0&&o!==null&&o!==""&&t.push(a+": "+JSON.stringify(o))}return t.join(`
`)}var Wc="data:",AR="about:blank",jR=/(#.+?)$/,Iw="blob:",CR=/^https?:\/\//,TR=/^file:\/\//,LR=/^https?:\/\/+\s*$/,RR=/^(https?:\/\/|file:\/\/|blob:).+/,zR="data:image/svg+xml",IR="utf-8",_R=/(url|local|-sf-url-original)\(.*?\)\s*(,|$)/g,PR=/url\s*\(\s*'(.*?)'\s*\)/i,NR=/url\s*\(\s*"(.*?)"\s*\)/i,MR=/url\s*\(\s*(.*?)\s*\)/i,DR=/^'(.*?)'$/,OR=/^"(.*?)"$/,FR=/^url\(\s*["']?data:font\/(woff2?)/,BR=/^url\(\s*["']?data:application\/x-font-(woff)/,UR=/\.([^.?#]+)((\?|#).*?)?$/,HR=/format\((.*?)\)\s*,?$/,Rw=/(.*?)\s*,?$/,zw="all",qR={"ultra-condensed":"50%","extra-condensed":"62.5%",condensed:"75%","semi-condensed":"87.5%",normal:"100%","semi-expanded":"112.5%",expanded:"125%","extra-expanded":"150%","ultra-expanded":"200%"},GR=globalThis.Blob,VR=globalThis.FileReader,Ve,et;function ur(e,t){return Ve=e,et=t,Vc}var Vc=class{async processPageResources(t,a,o,n,i,r){let s=[['link[href][rel*="icon"]',"href",!0],['object[type="image/svg+xml"], object[type="image/svg-xml"], object[data*=".svg"]',"data"],["img[src], input[src][type=image]","src",!1,!0],['embed[src*=".svg"]',"src"],["video[poster]","poster"],["*[background]","background"],["image","xlink:href"],["image","href"]];o.blockImages&&t.querySelectorAll("svg").forEach(c=>c.remove());let l=s.map(([c,d,m,h])=>this.processAttribute(t.querySelectorAll(c),d,a,o,"image",n,m,r,i,h));l=l.concat([this.processXLinks(t.querySelectorAll("use"),t,a,o,r),this.processSrcset(t.querySelectorAll("img[srcset], source[srcset]"),a,o,n,r)]),l.push(this.processAttribute(t.querySelectorAll('object[data*=".pdf"]'),"data",a,o,null,n,!1,r,i)),l.push(this.processAttribute(t.querySelectorAll('embed[src*=".pdf"]'),"src",a,o,null,n,!1,r,i)),l.push(this.processAttribute(t.querySelectorAll("audio[src], audio > source[src]"),"src",a,o,"audio",n,!1,r,i)),l.push(this.processAttribute(t.querySelectorAll("video[src], video > source[src]"),"src",a,o,"video",n,!1,r,i)),l.push(this.processAttribute(t.querySelectorAll("audio track[src], video track[src]"),"src",a,o,null,n,!1,r,i)),l.push(this.processAttribute(t.querySelectorAll("model[src]"),"src",a,o,null,n,!1,r,i)),await Promise.all(l),o.saveFavicon&&this.processShortcutIcons(t)}async processXLinks(t,a,o,n,i){let r="xlink:href";await Promise.all(Array.from(t).map(async s=>{let l=s.getAttribute(r);l==null&&(r="href",l=s.getAttribute(r)),n.saveOriginalURLs&&!bt(l)&&s.setAttribute("data-sf-original-href",l);let c=We(l);if(n.blockImages)s.setAttribute(r,Ve.EMPTY_RESOURCE);else if(Rt(c)&&!tt(c)){s.setAttribute(r,Ve.EMPTY_RESOURCE);try{c=Ve.resolveURL(c,o)}catch{}if(lt(c)){let d=l.match(jR);if(l.startsWith(o+"#"))s.setAttribute(r,d[0]);else{let m=await i.addURL(c,{expectedType:"image"}),h=Ve.parseSVGContent(m.content);if(d&&d[0]){let u;try{u=h.querySelector(d[0])}catch{}u&&(s.setAttribute(r,d[0]),s.parentElement.insertBefore(u,s.parentElement.firstChild))}else s.setAttribute(r,zR+","+m.content)}}}else c==n.url&&s.setAttribute(r,l.substring(c.length))}))}async processStylesheet(t,a,o,n,i){let r=[],s=[],l=this;for(let d=t.head;d;d=d.next){let m=d.data;m.type=="Atrule"&&m.name=="charset"?s.push(d):m.block&&m.block.children&&(m.type=="Rule"?r.push(l.processStyle(m,o,n,i)):m.type=="Atrule"&&(m.name=="media"||m.name=="supports"||m.name=="layer"||m.name=="container")?r.push(l.processStylesheet(m.block.children,a,o,n,i)):m.type=="Atrule"&&m.name=="font-face"&&r.push(c(m)))}s.forEach(d=>t.remove(d)),await Promise.all(r);async function c(d){let m=ko(d);await Promise.all(m.map(async h=>{let u=h.value;if(o.blockFonts)h.value=Ve.EMPTY_RESOURCE;else{let p=We(u);!tt(p)&&lt(p)&&await l.processFont(p,h,u,a,o,n,i)}}))}}async processSrcset(t,a,o,n,i){await Promise.all(Array.from(t).map(async r=>{let s=r.getAttribute("srcset"),l=Ve.parseSrcset(s);if(o.saveOriginalURLs&&!bt(s)&&r.setAttribute("data-sf-original-srcset",s),!o.blockImages&&!o.blockAlternativeImages){let c=await Promise.all(l.map(async d=>{let m=We(d.url);if(tt(m))return m+(d.w?" "+d.w+"w":d.d?" "+d.d+"x":"");if(Rt(m)){try{m=Ve.resolveURL(m,a)}catch{}return lt(m)?this.processImageSrcset(m,d,n,i):""}else return""}));r.setAttribute("srcset",c.join(", "))}else r.setAttribute("srcset","")}))}setBackgroundImage(t,a,o){t.style.setProperty("background-blend-mode","normal","important"),t.style.setProperty("background-clip","content-box","important"),t.style.setProperty("background-position",o&&o["background-position"]?o["background-position"]:"center","important"),t.style.setProperty("background-color",o&&o["background-color"]?o["background-color"]:"transparent","important"),t.style.setProperty("background-image",a,"important"),t.style.setProperty("background-size",o&&o["background-size"]?o["background-size"]:"100% 100%","important"),t.style.setProperty("background-origin","content-box","important"),t.style.setProperty("background-repeat","no-repeat","important")}async getStylesheetContent(t,a){let o=await Ve.getContent(t,{inline:!a.compressContent,maxResourceSize:a.maxResourceSize,maxResourceSizeEnabled:a.maxResourceSizeEnabled,validateTextContentType:!0,frameId:a.frameId,charset:a.charset,resourceReferrer:a.resourceReferrer,baseURI:a.baseURI,blockMixedContent:a.blockMixedContent,expectedType:"stylesheet",acceptHeaders:a.acceptHeaders,networkTimeout:a.networkTimeout});return na(o.data,o.charset)||na(o.data,a.charset)?o:(a=Object.assign({},a,{charset:vo(o.data)}),Ve.getContent(t,{inline:!a.compressContent,maxResourceSize:a.maxResourceSize,maxResourceSizeEnabled:a.maxResourceSizeEnabled,validateTextContentType:!0,frameId:a.frameId,charset:a.charset,resourceReferrer:a.resourceReferrer,baseURI:a.baseURI,blockMixedContent:a.blockMixedContent,expectedType:"stylesheet",acceptHeaders:a.acceptHeaders,networkTimeout:a.networkTimeout}))}processShortcutIcons(t){let a=Gc(Array.from(t.querySelectorAll('link[href][rel="shortcut icon"]')));a||(a=Gc(Array.from(t.querySelectorAll('link[href][rel="icon"]')))),a||(a=Gc(Array.from(t.querySelectorAll('link[href][rel*="icon"]'))),a&&(a.rel="shortcut icon")),a&&t.querySelectorAll('link[href][rel*="icon"]').forEach(o=>{o!=a&&o.remove()})}removeSingleLineCssComments(t){if(t.children){let a=[];for(let o=t.children.head;o;o=o.next){let n=o.data;n.type=="Raw"&&n.value&&n.value.trim().startsWith("//")&&a.push(o)}a.forEach(o=>t.children.remove(o))}}replacePseudoClassDefined(t){et.walk(t,{enter:function(a,o,n){a.type=="PseudoClassSelector"&&a.name=="defined"&&(o.prev==null||o.prev.data.type=="Combinator"||o.prev.data.type=="WhiteSpace"?n.replace(o,et.parse("*",{context:"selector"}).children.head):n.remove(o))}})}resolveStylesheetURLs(t,a,o){ko(t).map(i=>{let r=i.value,s=We(r);if(!tt(s)&&(o.textContent='tmp { content:"'+s+'"}',o.sheet&&o.sheet.cssRules&&(s=Ve.removeQuotes(o.sheet.cssRules[0].style.getPropertyValue("content"))),!tt(s)))if(!s||Rt(s)){let l;if(!r.startsWith("#"))try{l=Ve.resolveURL(s,a)}catch{}lt(l)&&(i.value=l)}else i.value=Ve.EMPTY_RESOURCE})}async removeAlternativeFonts(t,a,o,n){let i={fonts:new Map,medias:new Map,supports:new Map,layers:new Map},r={rules:{processed:0,discarded:0},fonts:{processed:0,discarded:0}},s=0;return a.forEach(l=>{if(l.stylesheet){let c=l.stylesheet.children;if(c)if(r.rules.processed+=c.size,r.rules.discarded+=c.size,l.mediaText&&l.mediaText!=zw){let d=this.createFontsDetailsInfo();i.medias.set("media-"+s+"-"+l.mediaText,d),this.getFontsDetails(t,c,s,d)}else this.getFontsDetails(t,c,s,i)}s++}),xa(i),await Promise.all([...a].map(async([,l],c)=>{if(l.stylesheet){let d=l.stylesheet.children,m=l.mediaText;d&&(m&&m!=zw?await this.processFontFaceRules(d,c,i.medias.get("media-"+c+"-"+m),o,n,r):await this.processFontFaceRules(d,c,i,o,n,r),r.rules.discarded-=d.size)}})),r}async processFontFaceRules(t,a,o,n,i,r){let s=[],l=0,c=0,d=0;for(let m=t.head;m;m=m.next){let h=m.data;if(h.type=="Atrule"&&h.name=="media"&&h.block&&h.block.children&&h.prelude){let u=et.generate(h.prelude);await this.processFontFaceRules(h.block.children,a,o.medias.get("media-"+a+"-"+l+"-"+u),n,i,r),l++}else if(h.type=="Atrule"&&h.name=="supports"&&h.block&&h.block.children&&h.prelude){let u=et.generate(h.prelude);await this.processFontFaceRules(h.block.children,a,o.supports.get("supports-"+a+"-"+c+"-"+u),n,i,r),c++}else if(h.type=="Atrule"&&h.name=="layer"&&h.block&&h.block.children&&h.prelude){let u=et.generate(h.prelude);await this.processFontFaceRules(h.block.children,a,o.layers.get("layer-"+a+"-"+d+"-"+u),n,i,r),d++}else if(h.type=="Atrule"&&h.name=="font-face"){let u=this.getFontKey(h),p=o.fonts.get(u);p?await this.processFontFaceRule(h,p,n,i,r):s.push(m)}}s.forEach(m=>t.remove(m))}getFontsDetails(t,a,o,n){let i=0,r=0,s=0;a.forEach(l=>{if(l.type=="Atrule"&&l.name=="media"&&l.block&&l.block.children&&l.prelude){let c=et.generate(l.prelude),d=this.createFontsDetailsInfo();n.medias.set("media-"+o+"-"+i+"-"+c,d),i++,this.getFontsDetails(t,l.block.children,o,d)}else if(l.type=="Atrule"&&l.name=="supports"&&l.block&&l.block.children&&l.prelude){let c=et.generate(l.prelude),d=this.createFontsDetailsInfo();n.supports.set("supports-"+o+"-"+r+"-"+c,d),r++,this.getFontsDetails(t,l.block.children,o,d)}else if(l.type=="Atrule"&&l.name=="layer"&&l.block&&l.block.children&&l.prelude){let c=et.generate(l.prelude),d=this.createFontsDetailsInfo();n.layers.set("layer-"+o+"-"+s+"-"+c,d),s++,this.getFontsDetails(t,l.block.children,o,d)}else if(l.type=="Atrule"&&l.name=="font-face"&&l.block&&l.block.children){let c=this.getFontKey(l),d=n.fonts.get(c);d||(d=[],n.fonts.set(c,d));let m=this.getPropertyValue(l,"src");if(m){let h=m.match(_R);h&&h.forEach(u=>{d.includes(u)&&d.splice(d.indexOf(u),1),d.unshift(u)})}}})}createFontsDetailsInfo(){return{fonts:new Map,medias:new Map,supports:new Map,layers:new Map}}getFontKey(t){return JSON.stringify([pa(this.getPropertyValue(t,"font-family")),Qa(this.getPropertyValue(t,"font-weight")||"400"),this.getPropertyValue(t,"font-style")||"normal",this.getPropertyValue(t,"unicode-range"),KR(this.getPropertyValue(t,"font-stretch")),this.getPropertyValue(t,"font-variant")||"normal",this.getPropertyValue(t,"font-feature-settings"),this.getPropertyValue(t,"font-variation-settings")])}getPropertyValue(t,a){let o;if(t.block.children&&(o=t.block.children.filter(n=>{try{return n.property==a&&!et.generate(n.value).match(/\\9$/)}catch{return n.property==a}}).tail),o)try{return et.generate(o.data.value)}catch{}}};function xa(e,t){e.fonts.forEach((a,o)=>{e.fonts.set(o,a.map(n=>{let i=n.match(HR),r,s=WR(n);if(i&&i[1]&&(r=i[1].replace(DR,"$1").replace(OR,"$1").toLowerCase()),!r){let l=n.match(FR);if(l&&l[1])r=l[1];else{let c=n.match(BR);c&&c[1]&&(r=c[1])}}if(!r&&s){let l=s.match(UR);l&&l[1]&&(r=l[1])}if(t){let l=Array.from(t.values()).find(c=>c.name==s);return{src:n.match(Rw)[1],fontUrl:s,format:r,contentType:l&&l.contentType}}else return{src:n.match(Rw)[1],fontUrl:s,format:r}}))}),t?(e.medias.forEach(a=>xa(a,t)),e.supports.forEach(a=>xa(a,t)),e.layers.forEach(a=>xa(a,t))):(e.medias.forEach(a=>xa(a)),e.supports.forEach(a=>xa(a)),e.layers.forEach(a=>xa(a)))}function ia(e,t){if(t.rootDocument&&t.updatedResources[e])return t.updatedResources[e].retrieved=!0,t.updatedResources[e].content}function We(e){return!e||e.startsWith(Wc)?e:e.split("#")[0]}function na(e="",t=IR){let a=vo(e);return a?a==t.toLowerCase():!0}function vo(e=""){let t=e.match(/^@charset\s+"([^"]*)";/i);if(t&&t[1])return t[1].toLowerCase().trim()}function ko(e){return et.findAll(e,t=>t.type=="Url")}function pr(e){return et.findAll(e,t=>t.type=="Atrule"&&t.name=="import")}function Gc(e){return e=e.filter(t=>t.href!=Ve.EMPTY_RESOURCE),e.sort((t,a)=>(parseInt(a.sizes,10)||16)-(parseInt(t.sizes,10)||16)),e[0]}function bt(e){return e&&(e.startsWith(Wc)||e.startsWith(Iw))}function gr(e){return e.replace(/url\(-sf-url-original\\\(\\"(.*?)\\"\\\)\\ /g,"/* original URL: $1 */url(")}function tt(e){return e&&(e.startsWith(Wc)||e==AR)}function Rt(e){return e&&!e.match(LR)}function lt(e){return Rt(e)&&(e.match(CR)||e.match(TR)||e.startsWith(Iw))&&e.match(RR)}function WR(e){e=e.replace(/url\(-sf-url-original\\\(\\"(.*?)\\"\\\)\\ /g,"");let t=e.match(PR)||e.match(NR)||e.match(MR);return t&&t[1]}function KR(e){return qR[e]||e}function _w(e,t,a){return new Promise((o,n)=>{let i=new VR;i.onload=()=>o(i.result),i.onerror=()=>n(new Error(i.error)),i.readAsDataURL(new GR([e],{type:(t||"")+(a?";charset="+a:"")}))})}var Kc=globalThis.JSON,Yc=globalThis.FontFace,Pw=globalThis.Set,YR=globalThis.setTimeout,XR=globalThis.clearTimeout,Nw=globalThis.Image,$R="about:blank",Mw="utf-8",Dw="data:image/svg+xml",Ow=["data:text/"],JR=/<script/gi,ZR=/<noscript/gi,QR=/<canvas/gi,Fw="--sf-img-",Bw=512*1024,Uw=/^url\(["']?data:[^,]*,?["']?\)/,Hw="local(",qw=5e3,In="data-sf-duplicate-stylesheet-ref",Le;function Gw(e){Le=e;let t=ur(Le,Oe);return class extends t{async resolveStylesheets(o,n,i,r,s,l){o.tagName.toUpperCase()=="LINK"&&o.charset&&(s.charset=o.charset),await this.resolveStylesheetElement(o,n,i,r,s,l)}async resolveStylesheetElement(o,n,i,r,s,l){let c;i.set(o,n),s.inlineStylesheetsRefs.has(o)||((!s.blockStylesheets||s.keepPrintStyleSheets&&n.mediaText=="print")&&(o.tagName.toUpperCase()=="LINK"?c=await this.resolveLinkStylesheetURLs(o.href,r,s,l):(c=re(o.textContent,{context:"stylesheet",parseCustomProperty:!0}),await this.resolveImportURLs(c,r,s,l)&&(c=re(W(c),{context:"stylesheet",parseCustomProperty:!0})))),c&&c.children?(s.compressCSS&&this.removeSingleLineCssComments(c),this.replacePseudoClassDefined(c),s.inlineStylesheets.forEach((d,m)=>{d===o.textContent&&s.inlineStylesheets.set(m,this.generateStylesheetContent(c,s))}),n.stylesheet=c):i.delete(o))}replaceStylesheets(o,n,i){if(o.querySelectorAll("style").forEach(r=>{let s=n.get(r);if(s){n.delete(r);let l=i.inlineStylesheetsRefs.get(r);if(l===void 0)r.textContent=this.generateStylesheetContent(s.stylesheet,i);else if(i.groupDuplicateStylesheets){if(!o.querySelector("style["+In+'="'+l+'"]')){let c=o.createElement("style");c.textContent=i.inlineStylesheets.get(l),c.setAttribute("media","not all"),c.setAttribute(In,l),o.head.appendChild(c)}r.textContent="/* */",r.setAttribute("onload","this.textContent=document.querySelector('style["+In+'="'+l+`"]').textContent;this.removeAttribute("onload")`)}else r.textContent=i.inlineStylesheets.get(l);s.mediaText&&(r.media=s.mediaText)}else r.remove()}),i.groupDuplicateStylesheets&&o.querySelector("style["+In+"]")){let r=o.createElement("script");r.textContent='document.currentScript.remove();addEventListener("load",()=>document.querySelectorAll("style['+In+']").forEach(e=>e.remove()))',o.body.appendChild(r)}o.querySelectorAll("link[rel*=stylesheet]").forEach(r=>{let s=n.get(r);if(s){n.delete(r);let l=o.createElement("style");s.mediaText&&(l.media=s.mediaText),l.textContent=this.generateStylesheetContent(s.stylesheet,i),r.parentElement.replaceChild(l,r)}else r.remove()})}async resolveImportURLs(o,n,i,r,s=new Pw){let l;this.resolveStylesheetURLs(o,n,r);let c=pr(o);return await Promise.all(c.map(async d=>{let m=Ze(d,h=>h.type=="Url")||Ze(d,h=>h.type=="String");if(m){let h=We(m.value);if(!tt(h)&&Rt(h)){m.value=Le.EMPTY_RESOURCE;try{h=Le.resolveURL(h,n)}catch{}if(lt(h)&&!s.has(h)){i.inline=!0;let u=await this.getStylesheetContent(h,i);h=u.resourceURL,u.data=ia(h,i)||u.data,u.data&&u.data.match(/^<!doctype /i)&&(u.data="");let p=Ze(d,k=>k.type=="MediaQueryList");p&&(u.data=this.wrapMediaQuery(u.data,W(p)));let g=Ze(d,k=>k.type=="LayerList");if(g){let k=[];g.children.forEach(A=>{A.type=="Identifier"&&k.push(A.name)}),k.length==1&&(u.data=this.wrapLayer(u.data,k[0]))}let b=Ze(d,k=>k.type=="Supports");b&&(u.data="@supports "+W(b)+" { "+u.data+" }");let f=re(u.data,{context:"stylesheet",parseCustomProperty:!0}),S=new Pw(s);S.add(h),await this.resolveImportURLs(f,h,i,r,S);for(let k of Object.keys(f))d[k]=f[k];l=!0}}}})),l}async resolveLinkStylesheetURLs(o,n,i,r){if(o=We(o),o&&o!=n&&o!=$R){let s=await Le.getContent(o,{inline:!0,maxResourceSize:i.maxResourceSize,maxResourceSizeEnabled:i.maxResourceSizeEnabled,charset:i.charset,frameId:i.frameId,resourceReferrer:i.resourceReferrer,validateTextContentType:!0,baseURI:n,blockMixedContent:i.blockMixedContent,expectedType:"stylesheet",acceptHeaders:i.acceptHeaders,networkTimeout:i.networkTimeout});if(!(na(s.data,s.charset)||na(s.data,i.charset)))return i=Object.assign({},i,{charset:vo(s.data)}),this.resolveLinkStylesheetURLs(o,n,i,r);o=s.resourceURL,s.data=ia(s.resourceURL,i)||s.data,s.data&&s.data.match(/^<!doctype /i)&&(s.data="");let l=re(s.data,{context:"stylesheet",parseCustomProperty:!0});return await this.resolveImportURLs(l,o,i,r)&&(l=re(W(l),{context:"stylesheet",parseCustomProperty:!0})),l}}async processFrame(o,n,i){let r="allow-popups allow-top-navigation-by-user-activation";(n.content.match(ZR)||n.content.match(QR)||n.content.match(JR)||i.saveRawPage)&&(r+=" allow-scripts allow-modals allow-popups allow-downloads allow-pointer-lock allow-presentation"),o.setAttribute("sandbox",r),o.tagName.toUpperCase()=="OBJECT"?o.setAttribute("data","data:text/html,"+n.content):o.tagName.toUpperCase()=="FRAME"?o.setAttribute("src","data:text/html,"+n.content.replace(/%/g,"%25").replace(/#/g,"%23")):(o.setAttribute("srcdoc",n.content),o.removeAttribute("src"))}async processFont(o,n,i,r,s,l,c){let{content:d}=await c.addURL(o,{asBinary:!0,expectedType:"font",baseURI:r,blockMixedContent:s.blockMixedContent}),m=l.fonts.get(n);m||(m=[],l.fonts.set(n,m)),m.push(o),!bt(o)&&s.saveOriginalURLs?n.value="-sf-url-original("+Kc.stringify(i)+") "+d:n.value=d}async processStyle(o,n,i,r){let s=ko(o);await Promise.all(s.map(async l=>{let c=l.value;if(n.blockImages)l.value=Le.EMPTY_RESOURCE;else{let d=We(c);if(!tt(d)&&lt(d)){let{content:m,indexResource:h,duplicate:u}=await r.addURL(d,{asBinary:!0,expectedType:"image",groupDuplicates:n.groupDuplicateImages});if(!c.startsWith("#")){let p=n.maxSizeDuplicateImages||Bw;if(u&&n.groupDuplicateImages&&Le.getContentSize(m)<p){let g=re("var("+Fw+h+")",{context:"value"});for(let b of Object.keys(g.children.head.data))l[b]=g.children.head.data[b];i.cssVariables.set(h,{content:m,url:c})}else!bt(d)&&n.saveOriginalURLs?l.value="-sf-url-original("+Kc.stringify(c)+") "+m:l.value=m}}}}))}async processAttribute(o,n,i,r,s,l,c,d,m,h){await Promise.all(Array.from(o).map(async p=>{let g=p.getAttribute(n);if(g!=null){g=We(g);let b=p.dataset.singleFileOriginURL;if(r.saveOriginalURLs&&!bt(g)&&p.setAttribute("data-sf-original-"+n,g),delete p.dataset.singleFileOriginURL,!s||!r["block"+s.charAt(0).toUpperCase()+s.substring(1)+"s"]){if(!tt(g)&&(u(p,n,s),Rt(g))){try{g=Le.resolveURL(g,i)}catch{}if(lt(g)){let f=["OBJECT","EMBED"].includes(p.tagName.toUpperCase())?p.getAttribute("type"):"",S=r.groupDuplicateImages&&p.tagName.toUpperCase()=="IMG"&&n=="src",{content:k,indexResource:A,duplicate:y}=await d.addURL(g,{asBinary:!0,expectedType:s,contentType:f,groupDuplicates:S});if(b&&this.testEmptyResource(k)){try{b=Le.resolveURL(b,i)}catch{}try{g=b,k=(await Le.getContent(g,{asBinary:!0,inline:!0,expectedType:s,contentType:f,maxResourceSize:r.maxResourceSize,maxResourceSizeEnabled:r.maxResourceSizeEnabled,frameId:r.windowId,resourceReferrer:r.resourceReferrer,acceptHeaders:r.acceptHeaders,networkTimeout:r.networkTimeout})).data}catch{}}if(c&&this.testEmptyResource(k))p.remove();else if(!this.testEmptyResource(k)){let x=Ow.filter(C=>k.startsWith(C)).length;if(s=="image"){if(x&&Nw&&(x=await new Promise(C=>{let w=new Nw,v=YR(()=>C(!0),100);w.src=k,w.onload=()=>T(),w.onerror=()=>T(!0);function T(j){XR(v),C(j)}})),!x){let C=k.startsWith(Dw),w=r.maxSizeDuplicateImages||Bw;if(h&&y&&!C&&Le.getContentSize(k)<w)if(this.replaceImageSource(p,Fw+A,r)){l.cssVariables.set(A,{content:k,url:b});let v=re(p.getAttribute("style"),{context:"declarationList",parseCustomProperty:!0});m.set(p,v)}else p.setAttribute(n,k);else p.setAttribute(n,k)}}else p.setAttribute(n,k)}}}}else u(p,n,s)}}));function u(p,g,b){b=="video"||b=="audio"?p.removeAttribute(g):p.setAttribute(g,Le.EMPTY_RESOURCE)}}async processImageSrcset(o,n,i,r){let{content:s}=await r.addURL(o,{asBinary:!0,expectedType:"image"});return Ow.filter(c=>s.startsWith(c)).length?"":s+(n.w?" "+n.w+"w":n.h?" "+n.h+"h":n.d?" "+n.d+"x":"")}testEmptyResource(o){return o==Le.EMPTY_RESOURCE}generateStylesheetContent(o,n){let i=W(o);return n.compressCSS&&(i=Le.compressCSS(i)),n.saveOriginalURLs&&(i=gr(i)),i}replaceImageSource(o,n,i){if(o.getAttribute(Le.IMAGE_ATTRIBUTE_NAME)){let s=i.images[Number(o.getAttribute(Le.IMAGE_ATTRIBUTE_NAME))];if(s&&s.replaceable){o.setAttribute("src",`${Dw},<svg xmlns="http://www.w3.org/2000/svg" width="${s.size.pxWidth}" height="${s.size.pxHeight}"><rect fill-opacity="0"/></svg>`);let l={};return(s.objectFit=="content"||s.objectFit=="cover"||s.objectFit=="contain")&&s.objectFit&&(l["background-size"]=s.objectFit),s.objectPosition&&(l["background-position"]=s.objectPosition),s.backgroundColor&&(l["background-color"]=s.backgroundColor),this.setBackgroundImage(o,"var("+n+")",l),o.removeAttribute(Le.IMAGE_ATTRIBUTE_NAME),!0}}}wrapMediaQuery(o,n){return n?"@media "+n+"{ "+o+" }":o}wrapLayer(o,n){return n?"@layer "+n+" { "+o+" }":o}getAdditionalPageData(){return{}}async processScript(o,n,i,r,s){let l=ia(n,i);l?l=await _w(l,"text/javascript",r):l=(await s.addURL(n,{asBinary:!0,inline:!0,charset:r!=Mw&&r,maxResourceSize:i.maxResourceSize,maxResourceSizeEnabled:i.maxResourceSizeEnabled,frameId:i.windowId,resourceReferrer:i.resourceReferrer,baseURI:i.baseURI,blockMixedContent:i.blockMixedContent,expectedType:"script",acceptHeaders:i.acceptHeaders,networkTimeout:i.networkTimeout})).content,o.setAttribute("src",l)}async processWorklet(o,n,i,r,s,l){let{content:c}=await l.addURL(n,{asBinary:!0,charset:s!=Mw&&s,maxResourceSize:r.maxResourceSize,maxResourceSizeEnabled:r.maxResourceSizeEnabled,frameId:r.windowId,resourceReferrer:r.resourceReferrer,baseURI:r.baseURI,blockMixedContent:r.blockMixedContent,expectedType:"script",acceptHeaders:r.acceptHeaders,networkTimeout:r.networkTimeout});i?o.textContent+=`  CSS.paintWorklet.addModule("${c}", ${Kc.stringify(i)});
`:o.textContent+=`  CSS.paintWorklet.addModule("${c}");
`}setMetaCSP(o){o.content="default-src 'none'; font-src 'self' data:; img-src 'self' data:; style-src 'unsafe-inline'; media-src 'self' data:; script-src 'unsafe-inline' data:; object-src 'self' data:; frame-src 'self' data:;"}removeUnusedStylesheets(o){o.querySelectorAll("link[rel*=stylesheet][rel*=alternate][title]").forEach(n=>n.remove())}async processFontFaceRule(o,n,i,r,s){let l=[];for(let d=o.block.children.head;d;d=d.next)d.data.property=="src"&&l.push(d);l.pop(),l.forEach(d=>o.block.children.remove(d));let c=o.block.children.filter(d=>d.property=="src").tail;if(c){await Promise.all(n.map(async u=>{if(r.has(u.src))u.valid=r.get(u.src);else{if(Yc&&u.fontUrl){let p=new Yc("test-font",u.src);try{let g;await Promise.race([p.load().then(()=>p.loaded).then(()=>{u.valid=!0,globalThis.clearTimeout(g)}),new Promise(b=>g=globalThis.setTimeout(()=>{u.valid=!0,b()},qw))])}catch(g){if(g.name=="NetworkError")u.valid=!0;else{let b=gc(c.data,S=>S.type=="Url"),f=Array.from(i).find(([S])=>b.includes(S)&&S.value==u.fontUrl);if(f&&f[1].length){let S=f[1][0];if(S){let k=new Yc("test-font","url("+S+")");try{let A;await Promise.race([k.load().then(()=>k.loaded).then(()=>{u.valid=!0,globalThis.clearTimeout(A)}),new Promise(y=>A=globalThis.setTimeout(()=>{u.valid=!0,y()},qw))])}catch{}}}else u.valid=!0}}}else u.valid=!0;r.set(u.src,u.valid)}}));let d=(u,p)=>Le.findLast(n,g=>!g.src.match(Uw)&&g.format==u&&(!p||g.valid)),m=u=>n.filter(p=>p==u||p.src.startsWith(Hw));s.fonts.processed+=n.length,s.fonts.discarded+=n.length;let h=d("woff2-variations",!0)||d("woff2",!0)||d("woff",!0);if(h)n=m(h);else{let u=d("truetype-variations",!0)||d("truetype",!0);if(u)n=m(u);else{let p=d("opentype")||d("embedded-opentype");p?n=m(p):n=n.filter(g=>!g.src.match(Uw)&&g.valid||g.src.startsWith(Hw))}}s.fonts.discarded-=n.length,n.reverse();try{c.data.value=re(n.map(u=>u.src).join(","),{context:"value",parseCustomProperty:!0})}catch{}}}}}var fr=globalThis.JSON,Xc=globalThis.FontFace,ez="about:blank",Vw="utf-8",tz=/<script/gi,az=/<noscript/gi,oz=/<canvas/gi,$c=/^url\(["']?data:[^,]*,?["']?\)/,Ww="local(",Kw=5e3,Fe;function Yw(e){Fe=e;let t=ur(Fe,Oe);return class extends t{async resolveStylesheets(o,n,i,r,s,l,c){o.tagName.toUpperCase()=="LINK"&&(o.removeAttribute("integrity"),o.charset&&(s.charset=o.charset),n.url=o.href),await this.resolveStylesheetElement(o,n,i,r,s,l,c)}async resolveStylesheetElement(o,n,i,r,s,l,c){!s.blockStylesheets||s.keepPrintStyleSheets&&n.mediaText=="print"?(i.set({element:o},n),s.inlineStylesheetsRefs.has(o)||(o.tagName.toUpperCase()=="LINK"?await this.resolveLinkStylesheetURLs(n,o,o.href,r,s,l,c,i):(n.stylesheet=re(o.textContent,{context:"stylesheet",parseCustomProperty:!0}),await this.resolveImportURLs(n,r,s,l,c,i)))):o.tagName.toUpperCase()=="LINK"?o.href=Fe.EMPTY_RESOURCE:o.textContent=""}replaceStylesheets(o,n,i,r){let s=Array.from(n).reverse(),l=new Map;Array.from(new Set(i.inlineStylesheetsRefs.values())).forEach(c=>{let d=o.createElement("link");d.setAttribute("rel","stylesheet"),d.setAttribute("type","text/css");let m="stylesheet_"+r.stylesheets.size+".css";d.setAttribute("href",m);let h=i.inlineStylesheets.get(c),u=re(h,{context:"stylesheet",parseCustomProperty:!0});this.replacePseudoClassDefined(u),h=this.generateStylesheetContent(u,i),r.stylesheets.set(r.stylesheets.size,{name:m,content:h}),l.set(c,d)});for(let[c,d]of s)if(c.urlNode){let m="stylesheet_"+r.stylesheets.size+".css";!bt(d.url)&&i.saveOriginalURLs?c.urlNode.value="-sf-url-original("+fr.stringify(d.url)+") "+m:c.urlNode.value=m,r.stylesheets.set(r.stylesheets.size,{name:m,stylesheet:d.stylesheet,url:d.url})}else if(c.element.tagName.toUpperCase()=="LINK"){let m=c.element,h="stylesheet_"+r.stylesheets.size+".css";m.setAttribute("href",h),r.stylesheets.set(r.stylesheets.size,{name:h,stylesheet:d.stylesheet,url:d.url})}else{let m=c.element,h=i.inlineStylesheetsRefs.get(m);if(h===void 0)m.textContent=this.generateStylesheetContent(d.stylesheet,i);else{let u=l.get(h).cloneNode(!0);d.mediaText&&(u.media=d.mediaText),m.replaceWith(u),c.element=u}}for(let[,c]of r.stylesheets)c.stylesheet&&(c.content=this.generateStylesheetContent(c.stylesheet,i),c.stylesheet=null)}async resolveImportURLs(o,n,i,r,s,l){let c=o.stylesheet,d=o.scoped;this.resolveStylesheetURLs(c,n,r);let m=pr(c);await Promise.all(m.map(async h=>{let u=Ze(h,p=>p.type=="Url")||Ze(h,p=>p.type=="String");if(u){let p=We(u.value);if(!tt(p)&&Rt(p)){u.value=Fe.EMPTY_RESOURCE;try{p=Fe.resolveURL(p,n)}catch{}if(lt(p)){let g=Ze(h,C=>C.type=="MediaQueryList"),b,f,S;g&&(b=W(g));let k=Ze(h,C=>C.type=="Layer");k&&(f=k.name);let A=Ze(h,C=>C.type=="Supports");A&&(S=W(A));let y=Array.from(l).find(([,C])=>C.resourceURL==p),x;if(y)x=y[1].stylesheet,l.set({urlNode:u},{url:p,stylesheet:x,scoped:d});else{let C={scoped:d,mediaText:b,layerName:f,supportsCondition:S},w=await this.getStylesheetContent(p,i);C.url=p=w.resourceURL,w.data=ia(p,i)||w.data,C.stylesheet=re(w.data,{context:"stylesheet",parseCustomProperty:!0}),x=C.stylesheet,await this.resolveImportURLs(C,p,i,r,s,l),l.set({urlNode:u},C)}u.importedChildren=x.children,u.importedMediaText=b,u.importedLayerName=f,u.importedSupportsCondition=S}}}}))}async resolveLinkStylesheetURLs(o,n,i,r,s,l,c,d){if(i=We(i),i&&i!=r&&i!=ez){let m=Array.from(d).find(([,h])=>h.resourceURL==i);if(m)d.set({element:n},{url:i,stylesheet:m[1].stylesheet,mediaText:o.mediaText});else{let h=await Fe.getContent(i,{maxResourceSize:s.maxResourceSize,maxResourceSizeEnabled:s.maxResourceSizeEnabled,charset:s.charset,frameId:s.frameId,resourceReferrer:s.resourceReferrer,validateTextContentType:!0,baseURI:r,blockMixedContent:s.blockMixedContent,expectedType:"stylesheet",acceptHeaders:s.acceptHeaders,networkTimeout:s.networkTimeout});na(h.data,h.charset)||na(h.data,s.charset)?(i=h.resourceURL,h.data=ia(h.resourceURL,s)||h.data,o.stylesheet=re(h.data,{context:"stylesheet",parseCustomProperty:!0}),await this.resolveImportURLs(o,i,s,l,c,d)):(s=Object.assign({},s,{charset:vo(h.data)}),await this.resolveLinkStylesheetURLs(o,n,i,r,s,l,c,d))}}}async processFrame(o,n,i,r,s,l){let c="frames/"+r.frames.size+"/",d="allow-popups allow-top-navigation-by-user-activation allow-scripts";(n.content.match(az)||n.content.match(oz)||n.content.match(tz)||i.saveRawPage)&&(d+=" allow-modals allow-popups allow-downloads allow-pointer-lock allow-presentation"),o.setAttribute("sandbox",d),o.tagName.toUpperCase()=="OBJECT"?o.setAttribute("data",c+"index.html"):o.setAttribute("src",c+"index.html"),r.frames.set(s,{name:c,content:n.content,resources:n.resources,url:l.url})}async processFont(o,n,i,r,s,l,c){let{content:d,extension:m,indexResource:h,contentType:u}=await c.addURL(o,{asBinary:!0,expectedType:"font",baseURI:r,blockMixedContent:s.blockMixedContent}),p="fonts/"+h+m;!bt(o)&&s.saveOriginalURLs?n.value="-sf-url-original("+fr.stringify(i)+") "+p:n.value=p,l.fonts.set(h,{name:p,content:d,extension:m,contentType:u,url:o})}async processStyle(o,n,i,r){let s=ko(o);await Promise.all(s.map(async l=>{let c=l.value;if(n.blockImages)l.value=Fe.EMPTY_RESOURCE;else{let d=We(c);if(!tt(d)&&lt(d)){let{content:m,indexResource:h,contentType:u,extension:p}=await r.addURL(d,{asBinary:!0,expectedType:"image"}),g="images/"+h+p;!bt(d)&&n.saveOriginalURLs?l.value="-sf-url-original("+fr.stringify(c)+") "+g:l.value=g,i.images.set(h,{name:g,content:m,extension:p,contentType:u,url:d})}}}))}async processAttribute(o,n,i,r,s,l,c,d){await Promise.all(Array.from(o).map(async h=>{let u=h.getAttribute(n);if(u!=null){u=We(u);let p=h.dataset.singleFileOriginURL;if(r.saveOriginalURLs&&!bt(u)&&h.setAttribute("data-sf-original-"+n,u),delete h.dataset.singleFileOriginURL,!s||!r["block"+s.charAt(0).toUpperCase()+s.substring(1)+"s"]){if(!tt(u)&&(m(h,n,s),Rt(u))){try{u=Fe.resolveURL(u,i)}catch{}if(lt(u)){let g=["OBJECT","EMBED"].includes(h.tagName.toUpperCase())?h.getAttribute("type"):"",{content:b,indexResource:f,extension:S,contentType:k}=await d.addURL(u,{asBinary:!0,expectedType:s,contentType:g});if(p&&this.testEmptyResource(b)){try{p=Fe.resolveURL(p,i)}catch{}try{u=p,b=(await Fe.getContent(u,{asBinary:!0,expectedType:s,contentType:g,maxResourceSize:r.maxResourceSize,maxResourceSizeEnabled:r.maxResourceSizeEnabled,frameId:r.windowId,resourceReferrer:r.resourceReferrer,acceptHeaders:r.acceptHeaders,networkTimeout:r.networkTimeout})).data}catch{}}if(c&&this.testEmptyResource(b))h.remove();else if(!this.testEmptyResource(b)){let A="images/"+f+S;h.setAttribute(n,A),l.images.set(f,{name:A,content:b,extension:S,contentType:k,url:u})}}}}else m(h,n,s)}}));function m(h,u,p){p=="video"||p=="audio"?h.removeAttribute(u):h.setAttribute(u,Fe.EMPTY_RESOURCE)}}async processImageSrcset(o,n,i,r){let{content:s,indexResource:l,extension:c,contentType:d}=await r.addURL(o,{asBinary:!0,expectedType:"image"}),m="images/"+l+c;return i.images.set(l,{name:m,content:s,extension:c,contentType:d,url:o}),m+(n.w?" "+n.w+"w":n.h?" "+n.h+"h":n.d?" "+n.d+"x":"")}testEmptyResource(o){return!o}generateStylesheetContent(o,n){n.compressCSS&&this.removeSingleLineCssComments(o),this.replacePseudoClassDefined(o);let i=W(o);return n.compressCSS&&(i=Fe.compressCSS(i)),n.saveOriginalURLs&&(i=gr(i)),i}getAdditionalPageData(o,n,i){let r={},s=n;i.stylesheets.forEach(m=>s+=m.content),Object.keys(i).forEach(m=>{Array.from(i[m]).filter(([,u])=>!s.includes(u.name)).forEach(([u])=>i[m].delete(u)),r[m]=Array.from(i[m].values())});let l=o.head.querySelector("meta[name=viewport]"),c=l?l.content:null;return{doctype:Fe.getDoctypeString(o),resources:r,viewport:c}}async processScript(o,n,i,r,s,l){let{content:c,indexResource:d,extension:m,contentType:h}=await s.addURL(n,{asBinary:!0,charset:r!=Vw&&r,maxResourceSize:i.maxResourceSize,maxResourceSizeEnabled:i.maxResourceSizeEnabled,frameId:i.windowId,resourceReferrer:i.resourceReferrer,baseURI:i.baseURI,blockMixedContent:i.blockMixedContent,expectedType:"script",acceptHeaders:i.acceptHeaders,networkTimeout:i.networkTimeout});c=ia(n,i)||c;let u="scripts/"+d+m;o.setAttribute("src",u),l.scripts.set(d,{name:u,content:c,extension:m,contentType:h,url:n})}async processWorklet(o,n,i,r,s,l,c){let{content:d,indexResource:m,extension:h,contentType:u}=await l.addURL(n,{asBinary:!0,charset:s!=Vw&&s,maxResourceSize:r.maxResourceSize,maxResourceSizeEnabled:r.maxResourceSizeEnabled,frameId:r.windowId,resourceReferrer:r.resourceReferrer,baseURI:r.baseURI,blockMixedContent:r.blockMixedContent,expectedType:"script",acceptHeaders:r.acceptHeaders,networkTimeout:r.networkTimeout}),p="scripts/"+m+h;i?o.textContent+=`  CSS.paintWorklet.addModule("${p}", ${fr.stringify(i)});
`:o.textContent+=`  CSS.paintWorklet.addModule("${p}");
`,c.worklets.set(m,{name:p,workletOptions:i,content:d,extension:h,contentType:u,url:n})}setMetaCSP(o){o.content="default-src 'none'; connect-src 'self' data: blob:; font-src 'self' data: blob:; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline' data: blob:; frame-src 'self' data: blob:; media-src 'self' data: blob:; script-src 'self' 'unsafe-inline' data: blob:; object-src 'self' data: blob:;"}removeUnusedStylesheets(){}async processFontFaceRule(o,n,i,r,s){await Promise.all(n.map(async p=>{if(r.has(p.src))p.valid=r.get(p.src);else{if(Xc&&p.fontUrl){let g=[...i].find(([,b])=>p.fontUrl&&b.name==p.fontUrl);if(g){let b=g[1],f=new Xc("test-font",new Uint8Array(b.content).buffer);try{let S;await Promise.race([f.load().then(()=>f.loaded).then(()=>{p.valid=!0,globalThis.clearTimeout(S)}),new Promise(k=>S=globalThis.setTimeout(()=>{p.valid=!0,k()},Kw))])}catch(S){if(S.name=="NetworkError")p.valid=!0;else{let k=new Xc("test-font","url("+b.url+")");try{let A;await Promise.race([k.load().then(()=>k.loaded).then(()=>{p.valid=!0,globalThis.clearTimeout(A)}),new Promise(y=>A=globalThis.setTimeout(()=>{p.valid=!0,y()},Kw))])}catch{}}}}else p.valid=!0}else p.valid=!0;r.set(p.src,p.valid)}}));let l=(p,g)=>Fe.findLast(n,b=>!b.src.match($c)&&b.format==p&&(!g||b.valid)),c=(p,g)=>Fe.findLast(n,b=>!b.src.match($c)&&b.contentType==p&&(!g||b.valid)),d=p=>n.filter(g=>g==p||g.src.startsWith(Ww));s.fonts.processed+=n.length,s.fonts.discarded+=n.length;let m=l("woff2-variations",!0)||l("woff2",!0)||l("woff",!0)||c("font/woff2",!0)||c("font/woff",!0)||c("application/font-woff",!0)||c("application/x-font-woff",!0);if(m)n=d(m);else{let p=l("truetype-variations",!0)||l("truetype",!0)||c("font/ttf",!0)||c("application/x-font-ttf",!0)||c("application/x-font-ttf",!0)||c("application/x-font-truetype",!0);if(p)n=d(p);else{let g=l("opentype")||l("embedded-opentype")||c("font/otf")||c("application/x-font-opentype")||c("application/font-sfnt");g?n=d(g):n=n.filter(b=>!b.src.match($c)&&b.valid||b.src.startsWith(Ww))}}s.fonts.discarded-=n.length;let h=[];for(let p=o.block.children.head;p;p=p.next)p.data.property=="src"&&h.push(p);h.pop(),h.forEach(p=>o.block.children.remove(p));let u=o.block.children.filter(p=>p.property=="src").tail;if(u){n.reverse();try{u.data.value=re(n.map(p=>p.src).join(","),{context:"value",parseCustomProperty:!0})}catch{}}}}}function Xw(e,t){return e.compressContent?Yw(t):Gw(t)}var So=!1,nz=globalThis.Set,Be=globalThis.Map,xo=globalThis.JSON,I;function eb(...e){return[I]=e,td}var td=class{constructor(t){this.options=t;let a=Xw(t,I);this.processorHelper=new a}async run(){let t=globalThis[I.WAIT_FOR_USERSCRIPT_PROPERTY_NAME];this.options.userScriptEnabled&&t&&await t(I.ON_BEFORE_CAPTURE_EVENT_NAME,this.options),this.runner=new br(this.options,this.processorHelper,!0),await this.runner.loadPage(),await this.runner.initialize(),this.options.userScriptEnabled&&t&&await t(I.ON_AFTER_CAPTURE_EVENT_NAME,this.options),await this.runner.run()}cancel(){this.cancelled=!0,this.runner&&this.runner.cancel()}getPageData(){return this.runner.getPageData()}},tb="page-loading",ab="page-loaded",ob="resource-initializing",nb="resources-initialized",ib="resource-loaded",rb="page-ended",sb="stage-started",lb="stage-ended",zt=class{constructor(t,a){return{type:t,detail:a,PAGE_LOADING:tb,PAGE_LOADED:ab,RESOURCES_INITIALIZING:ob,RESOURCES_INITIALIZED:nb,RESOURCE_LOADED:ib,PAGE_ENDED:rb,STAGE_STARTED:sb,STAGE_ENDED:lb}}},iz=0,rz=1,sz=2,lz=3,cz=4,Jc=[{sequential:[{action:"preProcessPage"},{option:"loadDeferredImagesKeepZoomLevel",action:"resetZoomLevel"},{action:"replaceStyleContents"},{action:"replaceInvalidElements"},{action:"resetCharsetMeta"},{action:"resetReferrerMeta"},{option:"saveFavicon",action:"saveFavicon"},{action:"insertFonts"},{action:"insertShadowRootContents"},{action:"replaceCanvasElements"},{action:"setInputValues"},{option:"moveStylesInHead",action:"moveStylesInHead"},{option:"blockScripts",action:"removeEmbedScripts"},{option:"selected",action:"removeUnselectedElements"},{option:"blockVideos",action:"insertVideoPosters"},{option:"blockVideos",action:"insertVideoLinks"},{option:"removeFrames",action:"removeFrames"},{action:"removeDiscardedResources"},{option:"removeHiddenElements",action:"removeHiddenElements"},{action:"saveScrollPosition"},{action:"resolveHrefs"},{action:"resolveStyleAttributeURLs"}],parallel:[{option:"blockVideos",action:"insertMissingVideoPosters"},{action:"resolveStylesheetsURLs"},{option:"!removeFrames",action:"resolveFrameURLs"}]},{sequential:[{option:"removeUnusedStyles",action:"removeUnusedStyles"},{option:"removeAlternativeMedias",action:"removeAlternativeMedias"},{option:"removeUnusedFonts",action:"removeUnusedFonts"}],parallel:[{action:"processStylesheets"},{action:"processStyleAttributes"},{action:"processPageResources"},{action:"processScripts"},{action:"processWorklets"}]},{sequential:[{option:"removeAlternativeImages",action:"removeAlternativeImages"}],parallel:[{option:"removeAlternativeFonts",action:"removeAlternativeFonts"},{option:"!removeFrames",action:"processFrames"}]},{sequential:[{action:"replaceStylesheets"},{action:"replaceStyleAttributes"},{action:"insertVariables"},{option:"compressHTML",action:"compressHTML"},{action:"cleanupPage"}],parallel:[{option:"enableMaff",action:"insertMAFFMetaData"},{action:"setDocInfo"}]},{sequential:[{action:"loadOptionsFromPage"},{option:"saveFilenameTemplateData",action:"saveFilenameTemplateData"}]}],br=class{constructor(t,a,o){let n=o&&t.doc;this.root=o,this.options=t,this.options.url=this.options.url||n&&this.options.doc.documentURI;let i=this.options.url.match(/^.*\//);if(this.options.resourceReferrer=this.options.passReferrerOnError&&i&&i[0],this.options.baseURI=n&&(nd(this.options.doc.baseURI)?this.options.doc.baseURI:this.options.url),this.options.rootDocument=o,this.options.updatedResources=this.options.updatedResources||{},this.options.fontTests=new Be,this.batchRequest=new ad,this.processor=new od(t,a,this.batchRequest),n){let r=I.preProcessDoc(this.options.doc,this.options.win,this.options);this.options.canvases=r.canvases,this.options.fonts=r.fonts,this.options.worklets=r.worklets,this.options.stylesheets=r.stylesheets,this.options.images=r.images,this.options.posters=r.posters,this.options.videos=r.videos,this.options.usedFonts=r.usedFonts,this.options.shadowRoots=r.shadowRoots,this.options.referrer=r.referrer,this.options.adoptedStyleSheets=r.adoptedStyleSheets,this.markedElements=r.markedElements,this.invalidElements=r.invalidElements}this.options.saveRawPage&&!this.options.removeFrames&&(this.options.frames=[]),this.options.content=this.options.content||(n?I.serialize(this.options.doc):null),this.onprogress=t.onprogress||(()=>{})}async loadPage(){await this.onprogress(new zt(tb,{pageURL:this.options.url,frame:!this.root,options:this.options})),await this.processor.loadPage(this.options.content),await this.onprogress(new zt(ab,{pageURL:this.options.url,frame:!this.root,options:this.options}))}async initialize(){await this.onprogress(new zt(ob,{pageURL:this.options.url,options:this.options})),await this.executeStage(iz),this.pendingPromises=this.executeStage(rz),this.root&&this.options.doc&&I.postProcessDoc(this.options.doc,this.markedElements,this.invalidElements)}cancel(){this.cancelled=!0,this.batchRequest.cancel(),this.root&&this.options.frames&&this.options.frames.forEach(t);function t(a){a.runner&&a.runner.cancel()}}async run(){this.root&&(this.processor.initialize(this.batchRequest),await this.onprogress(new zt(nb,{pageURL:this.options.url,max:this.processor.maxResources,options:this.options}))),await this.batchRequest.run(async t=>{t.pageURL=this.options.url,t.options=this.options,await this.onprogress(new zt(ib,t))},this.options),await this.pendingPromises,this.options.doc=null,this.options.win=null,await this.executeStage(sz),await this.executeStage(lz),await this.executeStage(cz),this.processor.finalize()}getDocument(){return this.processor.doc}getStyleSheets(){return this.processor.stylesheets}async getPageData(){return this.root&&await this.onprogress(new zt(rb,{pageURL:this.options.url,options:this.options})),this.processor.getPageData()}async executeStage(t){So&&Eo("**** STARTED STAGE",t,"****");let a=!this.root;await this.onprogress(new zt(sb,{pageURL:this.options.url,step:t,frame:a,options:this.options}));for(let n of Jc[t].sequential){let i;So&&(i=Date.now(),Eo("  -- STARTED task =",n.action)),this.cancelled||this.executeTask(n),So&&Eo("  -- ENDED   task =",n.action,"delay =",Date.now()-i)}let o;return Jc[t].parallel?o=await Promise.all(Jc[t].parallel.map(async n=>{let i;So&&(i=Date.now(),Eo("  // STARTED task =",n.action)),this.cancelled||await this.executeTask(n),So&&Eo("  // ENDED task =",n.action,"delay =",Date.now()-i)})):o=Promise.resolve(),await this.onprogress(new zt(lb,{pageURL:this.options.url,step:t,frame:a,options:this.options})),So&&Eo("**** ENDED   STAGE",t,"****"),o}executeTask(t){if(!t.option||t.option.startsWith("!")&&!this.options[t.option]||this.options[t.option])return this.processor[t.action]()}},ad=class{constructor(){this.requests=new Be,this.duplicates=new Be}addURL(t,{asBinary:a,expectedType:o,groupDuplicates:n,baseURI:i,blockMixedContent:r,contentType:s}={}){return new Promise((l,c)=>{let d=xo.stringify([t,a,o,i,r,s]),m=this.requests.get(d);m||(m=[],this.requests.set(d,m));let h={resolve:l,reject:c};if(m.push(h),n){let u=this.duplicates.get(d);u||(u=[],this.duplicates.set(d,u)),u.push(h)}})}getMaxResources(){return this.requests.size}run(t,a){let o=[...this.requests.keys()],n=0;return Promise.all(o.map(async i=>{let[r,s,l,c,d,m]=xo.parse(i),h=this.requests.get(i);try{let u=n;n=n+1;let p=await I.getContent(r,{asBinary:s,inline:!a.compressContent,expectedType:l,contentType:m,maxResourceSize:a.maxResourceSize,maxResourceSizeEnabled:a.maxResourceSizeEnabled,frameId:a.windowId,resourceReferrer:a.resourceReferrer,baseURI:c,blockMixedContent:d,acceptHeaders:a.acceptHeaders,networkTimeout:a.networkTimeout});if(await t({url:r}),!this.cancelled){let g=I.getContentTypeExtension(p.contentType)||I.getFilenameExtension(r,a.filenameReplacedCharacters,a.filenameReplacementCharacter,a.filenameReplacementCharacters);h.forEach(b=>{let f=this.duplicates.get(i),S=f&&f.length>1&&f.includes(b);b.resolve({content:p.data,indexResource:u,duplicate:S,contentType:p.contentType,extension:g})})}}catch(u){n=n+1,await t({url:r}),h.forEach(p=>p.reject(u))}this.requests.delete(i)}))}cancel(){this.cancelled=!0,[...this.requests.keys()].forEach(a=>{this.requests.get(a).forEach(n=>n.reject()),this.requests.delete(a)})}},_n="shadowrootmode",$w="shadowrootdelegatesfocus",Jw="shadowrootclonable",Zw="shadowrootserializable",Zc="data-template-shadow-root",wr="data-single-file-options",dz="utf-8",od=class{constructor(t,a,o){this.options=t,this.processorHelper=a,this.stats=new id(t),this.baseURI=Qw(t.baseURI||t.url),this.batchRequest=o,this.stylesheets=new Be,this.styles=new Be,this.resources={cssVariables:new Be,fonts:new Be,worklets:new Be,stylesheets:new Be,scripts:new Be,images:new Be,frames:new Be},this.fontTests=t.fontTests}initialize(){this.options.saveDate=new Date,this.options.saveUrl=this.options.url,this.options.enableMaff&&(this.maffMetaDataPromise=this.batchRequest.addURL(I.resolveURL("index.rdf",this.options.baseURI||this.options.url),{expectedType:"document"})),this.maxResources=this.batchRequest.getMaxResources(),!this.options.removeFrames&&this.options.frames&&this.options.frames.forEach(t=>this.maxResources+=t.maxResources||0),this.stats.set("processed","resources",this.maxResources)}async loadPage(t,a){let o;if((!t||this.options.saveRawPage)&&(o=await I.getContent(this.baseURI,{inline:!this.options.compressContent,maxResourceSize:this.options.maxResourceSize,maxResourceSizeEnabled:this.options.maxResourceSizeEnabled,charset:a,frameId:this.options.windowId,resourceReferrer:this.options.resourceReferrer,expectedType:"document",acceptHeaders:this.options.acceptHeaders,networkTimeout:this.options.networkTimeout}),t=o.data||""),this.doc=I.parseDocContent(t,this.baseURI),I.fixInvalidNesting(this.doc),this.options.saveRawPage){let n;if(this.doc.querySelectorAll("meta[charset]").forEach(i=>{n||(n=i.getAttribute("charset").trim().toLowerCase())}),n||this.doc.querySelectorAll('meta[http-equiv="content-type"]').forEach(i=>{let r=i.content.split(";")[1];r&&!n&&(n=r.split("=")[1].trim().toLowerCase())}),n&&o.charset&&n!=o.charset.toLowerCase())return this.loadPage(t,n)}this.workStyleElement=this.doc.createElement("style"),this.doc.body.appendChild(this.workStyleElement),this.onEventAttributeNames=fz(this.doc)}finalize(){this.workStyleElement.parentNode&&this.workStyleElement.remove()}async getPageData(){let t;I.postProcessDoc(this.doc);let a=I.parseURL(this.baseURI);if(this.options.insertSingleFileComment){let u=this.doc.documentElement.firstChild,p=this.options.saveUrl,g=this.options.saveDate;if(u.nodeType==8&&(u.textContent.includes(I.COMMENT_HEADER_LEGACY)||u.textContent.includes(I.COMMENT_HEADER))){let S=this.doc.documentElement.firstChild.textContent.split(`
`);try{let[,,k,A]=S;p=k.split("url: ")[1].trim(),g=A.split("saved date: ")[1],u.remove()}catch{}}let b=(this.options.infobarContent||"").replace(/\\n/g,`
`).replace(/\\t/g,"	");t=`
 `+(this.options.useLegacyCommentHeader?I.COMMENT_HEADER_LEGACY:I.COMMENT_HEADER)+` 
 url: `+p+(this.options.removeSavedDate?" ":` 
 saved date: `+g)+(b?` 
 info: `+b:"")+`
`;let f=this.doc.createComment(t);this.doc.documentElement.insertBefore(f,this.doc.documentElement.firstChild)}let o=this.doc.querySelector("singlefile-infobar");o&&o.remove();let n=this.doc.querySelector(I.INFOBAR_TAGNAME);if(n&&n.remove(),this.options.includeInfobar&&I.appendInfobar(this.doc,this.options),this.doc.querySelector("template["+_n+"]")||this.options.shadowRoots&&this.options.shadowRoots.length){this.options.blockScripts&&this.doc.querySelectorAll("script["+Zc+"]").forEach(p=>p.remove());let u=this.doc.createElement("script");u.setAttribute(Zc,""),u.textContent=`(()=>{document.currentScript.remove();processNode(document);function processNode(node){node.querySelectorAll("template[${_n}]").forEach(element=>{let shadowRoot = element.parentElement.shadowRoot;if (!shadowRoot) {try {shadowRoot=element.parentElement.attachShadow({mode:element.getAttribute("${_n}"),delegatesFocus:element.getAttribute("${$w}")!=null,clonable:element.getAttribute("${Jw}")!=null,serializable:element.getAttribute("${Zw}")!=null});shadowRoot.innerHTML=element.innerHTML;element.remove()} catch (error) {} if (shadowRoot) {processNode(shadowRoot)}}})}})()`,this.doc.body.appendChild(u)}if(this.options.insertCanonicalLink&&this.options.saveUrl.match(db)){let u=this.doc.querySelector("link[rel=canonical]");u||(u=this.doc.createElement("link"),u.setAttribute("rel","canonical"),this.doc.head.appendChild(u)),u&&!u.href&&(u.href=this.options.saveUrl)}if(this.options.insertMetaCSP){let u=this.doc.createElement("meta");u.httpEquiv="content-security-policy",this.processorHelper.setMetaCSP(u),this.doc.head.appendChild(u)}if(this.options.insertMetaNoIndex){let u=this.doc.querySelector("meta[name=robots][content*=noindex]");u||(u=this.doc.createElement("meta"),u.setAttribute("name","robots"),u.setAttribute("content","noindex"),this.doc.head.appendChild(u))}let i=this.doc.createElement("style");this.doc.querySelector('img[src="data:,"],source[src="data:,"]')&&(i.textContent='img[src="data:,"],source[src="data:,"]{display:none!important}',this.doc.head.appendChild(i));let r;if(this.options.displayStats&&(r=I.getContentSize(this.doc.documentElement.outerHTML)),this.doc.querySelector(`[${I.NESTING_TRACK_ID_ATTRIBUTE_NAME}]`)){let u=this.doc.createElement("script");u.textContent=`(${I.getFixInvalidNestingSource()})(document, "${I.NESTING_TRACK_ID_ATTRIBUTE_NAME}");`,this.doc.body.appendChild(u)}let s=I.serialize(this.doc,this.options.compressHTML);if(this.options.displayStats){let u=I.getContentSize(s);this.stats.set("processed","HTML bytes",u),this.stats.add("discarded","HTML bytes",r-u)}let l=await I.formatFilename(s,this.doc,this.options),c=I.getMimeType(this.options),d=this.baseURI.match(/([^/]*)\/?(\.html?.*)$/)||this.baseURI.match(/\/\/([^/]*)\/?$/),m=this.processorHelper.getAdditionalPageData(this.doc,s,this.resources),h=Object.assign({stats:this.stats.data,title:this.options.title||(this.baseURI&&d?d[1]:a.hostname?a.hostname:""),filename:l,mimeType:c,content:s,comment:t},m);return this.options.addProof&&(h.hash=await I.digest("SHA-256",s)),this.options.retrieveLinks&&(h.links=Array.from(new nz(Array.from(this.doc.links).map(u=>u.href)))),h}preProcessPage(){this.doc.body.querySelectorAll(':not(svg) title, meta, link[href][rel*="icon"]').forEach(t=>{(this.options.win&&t instanceof this.options.win.HTMLElement||t instanceof globalThis.HTMLElement)&&this.doc.head.appendChild(t)}),this.options.images&&!this.options.saveRawPage&&(this.doc.querySelectorAll("img["+I.IMAGE_ATTRIBUTE_NAME+"]").forEach(t=>{let a=t.getAttribute(I.IMAGE_ATTRIBUTE_NAME);if(a){let o=this.options.images[Number(a)];o&&(this.options.removeHiddenElements&&(o.size&&!o.size.pxWidth&&!o.size.pxHeight||t.getAttribute(I.HIDDEN_CONTENT_ATTRIBUTE_NAME)=="")?t.setAttribute("src",I.EMPTY_RESOURCE):(o.currentSrc&&(t.dataset.singleFileOriginURL=t.getAttribute("src"),t.setAttribute("src",o.currentSrc)),this.options.loadDeferredImages&&(!t.getAttribute("src")||t.getAttribute("src")==I.EMPTY_RESOURCE)&&t.getAttribute("data-src")&&(o.src=t.dataset.src,t.setAttribute("src",t.dataset.src),t.removeAttribute("data-src"))))}}),this.options.loadDeferredImages&&this.doc.querySelectorAll("img[data-srcset]").forEach(t=>{!t.getAttribute("srcset")&&t.getAttribute("data-srcset")&&(t.setAttribute("srcset",t.dataset.srcset),t.removeAttribute("data-srcset"))}))}loadOptionsFromPage(){let t=this.doc.body.querySelector('script[type="application/json"]['+wr+"]");if(t){let a=xo.parse(t.textContent);Object.keys(a).forEach(o=>this.options[o]=a[o]),this.options.saveDate=new Date(this.options.saveDate),this.options.visitDate=new Date(this.options.visitDate)}}saveFilenameTemplateData(){if(!this.doc.querySelector("script["+wr+'][type="application/json"]')){let a=this.doc.createElement("script");a.type="application/json",a.setAttribute(wr,""),a.textContent=xo.stringify({saveUrl:this.options.url,saveDate:this.options.saveDate.getTime(),visitDate:this.options.visitDate.getTime(),filenameTemplate:this.options.filenameTemplate,filenameReplacedCharacters:this.options.filenameReplacedCharacters,filenameReplacementCharacter:this.options.filenameReplacementCharacter,filenameReplacementCharacters:this.options.filenameReplacementCharacters,filenameMaxLengthUnit:this.options.filenameMaxLengthUnit,filenameMaxLength:this.options.filenameMaxLength,replaceEmojisInFilename:this.options.replaceEmojisInFilename,compressContent:this.options.compressContent,selfExtractingArchive:this.options.selfExtractingArchive,extractDataFromPage:this.options.extractDataFromPage,referrer:this.options.referrer,title:this.options.title,info:this.options.info}),this.doc.body.firstChild?this.doc.body.insertBefore(a,this.doc.body.firstChild):this.doc.body.appendChild(a)}}replaceStyleContents(){if(this.options.stylesheets&&this.doc.querySelectorAll("style").forEach((t,a)=>{if(t.getAttribute(I.STYLESHEET_ATTRIBUTE_NAME)){let n=this.options.stylesheets[Number(a)];n&&(t.textContent=n)}}),this.options.adoptedStyleSheets&&this.options.adoptedStyleSheets.length){let t=this.doc.createElement("style");t.textContent=this.options.adoptedStyleSheets.join(`
`),this.doc.body.appendChild(t)}}removeUnselectedElements(){t(this.doc.body),this.doc.body.removeAttribute(I.SELECTED_CONTENT_ATTRIBUTE_NAME);function t(i){let r=!1;Array.from(i.childNodes).forEach(s=>{if(s.nodeType==1){let l=s.getAttribute(I.SELECTED_CONTENT_ATTRIBUTE_NAME)=="";r=r||l,l?(s.removeAttribute(I.SELECTED_CONTENT_ATTRIBUTE_NAME),t(s)):r?a(s):o(s)}})}function a(i){(i.nodeType!=1||!i.querySelector("svg,style,link"))&&n(i)?i.remove():o(i)}function o(i){n(i)&&(i.style.setProperty("display","none","important"),i.removeAttribute("src"),i.removeAttribute("srcset"),i.removeAttribute("srcdoc"),Array.from(i.childNodes).forEach(a))}function n(i){if(i.nodeType==1){let r=i.tagName&&i.tagName.toUpperCase();return r!="SVG"&&r!="STYLE"&&r!="LINK"}}}insertVideoPosters(){this.options.posters&&this.doc.querySelectorAll("video, video > source").forEach(t=>{let a;t.tagName.toUpperCase()=="VIDEO"?a=t:a=t.parentElement;let o=t.getAttribute(I.POSTER_ATTRIBUTE_NAME);if(o){let n=this.options.posters[Number(o)];!a.getAttribute("poster")&&n&&a.setAttribute("poster",n)}})}insertVideoLinks(){let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8H+DhhoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJJJREFUOI3t070NRCEMA2CnYAOyDyPwpHj/Va7hJ3FzV7zy3ET5JIwoAF6Jk4wzAJAkzxAYG9YRTgB+24wBgKmfrGAKTcEfAY4KRlRoIeBTgKOCERVaCPgU4Khge2GqKOBTgKOCERVaAEC/4PNcnyoSWHpjqkhwKxbcig0Q6AorXYF/+A6eIYD1lVbwG/jdA6/kA2THRAURVubcAAAAAElFTkSuQmCC",a="16px";this.doc.querySelectorAll("video").forEach(o=>{let n=o.getAttribute(I.VIDEO_ATTRIBUTE_NAME);if(n){let i=this.options.videos[Number(n)],r=i&&i.src||o.src;if(o&&r){let s=this.doc.createElement("a"),l=this.doc.createElement("img");s.href=r,s.target="_blank",s.style.setProperty("z-index",2147483647,"important"),s.style.setProperty("position","absolute","important"),s.style.setProperty("top","8px","important"),s.style.setProperty("left","8px","important"),s.style.setProperty("width",a,"important"),s.style.setProperty("height",a,"important"),s.style.setProperty("min-width",a,"important"),s.style.setProperty("min-height",a,"important"),s.style.setProperty("max-width",a,"important"),s.style.setProperty("max-height",a,"important"),l.src=t,l.style.setProperty("width",a,"important"),l.style.setProperty("height",a,"important"),l.style.setProperty("min-width",a,"important"),l.style.setProperty("min-height",a,"important"),l.style.setProperty("max-width",a,"important"),l.style.setProperty("max-height",a,"important"),s.appendChild(l),o.insertAdjacentElement("afterend",s);let c=o.parentNode.style.getPropertyValue("position");(!i.positionParent&&(!c||c!="static")||i.positionParent=="static")&&o.parentNode.style.setProperty("position","relative","important")}}})}removeFrames(){let t=this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]');this.stats.set("discarded","frames",t.length),this.stats.set("processed","frames",t.length),this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]').forEach(a=>a.remove())}removeEmbedScripts(){let t="javascript:",a="javascript:void(0)";this.onEventAttributeNames.forEach(n=>this.doc.querySelectorAll("["+n+"]").forEach(i=>i.removeAttribute(n))),this.doc.querySelectorAll("[href]").forEach(n=>{n.href&&n.href.match&&n.href.trim().startsWith(t)&&n.setAttribute("href",a)}),this.doc.querySelectorAll("[src]").forEach(n=>{n.src&&n.src.trim().startsWith(t)&&n.setAttribute("src",a)});let o=this.doc.querySelectorAll('script:not([type="application/ld+json"]):not(['+Zc+"]):not(["+wr+"])");this.stats.set("discarded","scripts",o.length),this.stats.set("processed","scripts",o.length),o.forEach(n=>n.remove())}removeDiscardedResources(){if(this.doc.querySelectorAll("."+I.SINGLE_FILE_UI_ELEMENT_CLASS).forEach(o=>o.remove()),this.options.removeNoScriptTags===!1){let o=new Be;this.doc.querySelectorAll("noscript").forEach(n=>{let i=this.doc.createElement("div");i.innerHTML=n.dataset[I.NO_SCRIPT_PROPERTY_NAME],n.replaceWith(i),o.set(i,n)}),o.forEach((n,i)=>{n.dataset[I.NO_SCRIPT_PROPERTY_NAME]=i.innerHTML,i.replaceWith(n)})}else this.doc.querySelectorAll("noscript").forEach(o=>o.remove());this.doc.querySelectorAll("meta[http-equiv=refresh], meta[disabled-http-equiv]").forEach(o=>o.remove()),this.doc.querySelectorAll('meta[http-equiv="content-security-policy"]').forEach(o=>o.remove());let t=this.doc.querySelectorAll('applet, object[data]:not([type="image/svg+xml"]):not([type="image/svg-xml"]):not([type="text/html"]):not([data*=".svg"]):not([data*=".pdf"]), embed[src]:not([src*=".svg"]):not([src*=".pdf"])');if(this.stats.set("discarded","objects",t.length),this.stats.set("processed","objects",t.length),t.forEach(o=>o.remove()),this.doc.querySelectorAll("link[rel~=preconnect], link[rel~=prerender], link[rel~=dns-prefetch], link[rel~=preload], link[rel~=manifest], link[rel~=prefetch], link[rel~=modulepreload]").forEach(o=>{let n=o.getAttribute("rel").replace(/(preconnect|prerender|dns-prefetch|preload|prefetch|manifest|modulepreload)/g,"").trim();n.length?o.setAttribute("rel",n):o.remove()}),this.processorHelper.removeUnusedStylesheets(this.doc),this.doc.querySelectorAll('link[rel*=stylesheet]:not([href]),link[rel*=stylesheet][href=""]').forEach(o=>o.remove()),this.options.removeHiddenElements&&this.doc.querySelectorAll("input[type=hidden]").forEach(o=>o.remove()),this.options.removedElementsSelector)try{this.doc.querySelectorAll(this.options.removedElementsSelector).forEach(o=>o.remove())}catch{}this.options.saveFavicon||this.doc.querySelectorAll('link[rel*="icon"]').forEach(o=>o.remove()),this.doc.querySelectorAll("a[ping], area[ping]").forEach(o=>o.removeAttribute("ping")),this.doc.querySelectorAll("a[attributionsrc], img[attributionsrc], script[attributionsrc]").forEach(o=>o.removeAttribute("attributionsrc")),this.doc.querySelectorAll("link[rel=import][href]").forEach(o=>o.remove()),this.doc.querySelectorAll("link[rel=compression-dictionary]").forEach(o=>o.remove())}replaceInvalidElements(){this.doc.querySelectorAll("template["+I.INVALID_ELEMENT_ATTRIBUTE_NAME+"]").forEach(t=>{let a=this.doc.createElement("span");if(t.content){let o=t.content.firstChild;o&&(o.hasAttributes()&&Array.from(o.attributes).forEach(n=>{try{a.setAttribute(n.name,n.value)}catch{}}),o.childNodes.forEach(n=>a.appendChild(n.cloneNode(!0))));try{t.replaceWith(a)}catch{o?t.replaceWith(o):t.remove()}}})}resetCharsetMeta(){let t;this.doc.querySelectorAll('meta[charset], meta[http-equiv="content-type"]').forEach(o=>{let n=o.content.split(";")[1];n&&!t&&(t=n.split("=")[1],t&&(this.charset=t.trim().toLowerCase())),o.remove()});let a=this.doc.createElement("meta");a.setAttribute("charset",dz),this.doc.head.firstChild?this.doc.head.insertBefore(a,this.doc.head.firstChild):this.doc.head.appendChild(a)}resetReferrerMeta(){this.doc.querySelectorAll("meta[name=referrer]").forEach(a=>a.remove());let t=this.doc.createElement("meta");t.setAttribute("name","referrer"),t.setAttribute("content","no-referrer"),this.doc.head.appendChild(t)}setInputValues(){this.options.saveRawPage||(this.doc.querySelectorAll("input, textarea").forEach(t=>{let a=t.getAttribute(I.INPUT_VALUE_ATTRIBUTE_NAME);a!=null?t.tagName.toUpperCase()=="TEXTAREA"?t.textContent=a:t.setAttribute("value",a):t.removeAttribute("value")}),this.doc.querySelectorAll("input[type=radio], input[type=checkbox]").forEach(t=>{t.getAttribute(I.INPUT_CHECKED_ATTRIBUTE_NAME)=="true"?t.setAttribute("checked",""):t.removeAttribute("checked")}),this.doc.querySelectorAll("select").forEach(t=>{t.querySelectorAll("option").forEach(a=>{a.getAttribute(I.INPUT_VALUE_ATTRIBUTE_NAME)!=null?a.setAttribute("selected",""):a.removeAttribute("selected")})}))}moveStylesInHead(){this.doc.querySelectorAll("style").forEach(t=>{t.getAttribute(I.STYLE_ATTRIBUTE_NAME)==""&&this.doc.head.appendChild(t)})}saveFavicon(){let t=this.doc.querySelector('link[href][rel="shortcut icon"]');t||(t=this.doc.querySelector('link[href][rel="icon"]')),t||(t=this.doc.createElement("link"),t.setAttribute("type","image/x-icon"),t.setAttribute("rel","shortcut icon"),t.setAttribute("href","/favicon.ico")),this.doc.head.appendChild(t)}saveScrollPosition(){if(this.options.scrollPosition&&this.options.scrolling=="no"&&(this.options.scrollPosition.x||this.options.scrollPosition.y)){let t=this.doc.createElement("script");t.textContent='document.currentScript.remove();addEventListener("load",()=>scrollTo('+this.options.scrollPosition.x+","+this.options.scrollPosition.y+"))",this.doc.body.appendChild(t)}}replaceCanvasElements(){this.options.canvases&&this.doc.querySelectorAll("canvas").forEach(t=>{let a=t.getAttribute(I.CANVAS_ATTRIBUTE_NAME);if(a){let o=this.options.canvases[Number(a)];if(o){let n={};o.backgroundColor&&(n["background-color"]=o.backgroundColor),this.processorHelper.setBackgroundImage(t,"url("+o.dataURI+")",n),this.stats.add("processed","canvas",1)}}})}insertFonts(){if(this.options.fonts&&this.options.fonts.length){let t=this.doc.querySelector("style, link[rel=stylesheet]"),a;this.options.fonts.forEach(o=>{if(o["font-family"]&&o.src){let n="@font-face{",i="";Object.keys(o).forEach(s=>{i&&(i+=";"),i+=s+":"+o[s]}),n+=i+"}";let r=this.doc.createElement("style");r.textContent=n,a?a.insertAdjacentElement("afterend",r):t?t.parentElement.insertBefore(r,t):this.doc.head.appendChild(r),a=r}})}}removeHiddenElements(){let t=this.doc.querySelectorAll("["+I.HIDDEN_CONTENT_ATTRIBUTE_NAME+"]"),a=this.doc.querySelectorAll("["+I.REMOVED_CONTENT_ATTRIBUTE_NAME+"]");if(this.stats.set("discarded","hidden elements",a.length),this.stats.set("processed","hidden elements",a.length),t.length){let o="sf-hidden",n="."+o+"{display:none!important}",i=!1;if(this.doc.querySelectorAll("style").forEach(r=>{r.textContent==n&&(i=!0)}),!i){let r=this.doc.createElement("style");r.textContent=n,this.doc.head.appendChild(r)}t.forEach(r=>{r.style.getPropertyValue("display")!="none"&&(r.style.getPropertyPriority("display")=="important"?r.style.setProperty("display","none","important"):r.classList.contains(o)||r.classList.add(o))})}a.forEach(o=>o.remove())}resolveHrefs(){(this.options.resolveLinks===void 0||this.options.resolveLinks)&&this.doc.querySelectorAll("a[href], area[href]").forEach(t=>{let a=t.getAttribute("href").trim();if(!ed(a)){let o;try{o=I.resolveURL(a,this.options.baseURI||this.options.url)}catch{}if(o){let n=Qw(this.options.url);o.startsWith(n+"#")&&!o.startsWith(n+"#!")&&!this.options.resolveFragmentIdentifierURLs&&(o=o.substring(n.length));try{t.setAttribute("href",o)}catch{}}}}),this.doc.querySelectorAll("link[href]").forEach(t=>{let a=t.getAttribute("href").trim();if(t.rel.includes("stylesheet")&&this.options.saveOriginalURLs&&!Qc(a)&&t.setAttribute("data-sf-original-href",a),!ed(a)){let o;try{o=I.resolveURL(a,this.options.baseURI||this.options.url)}catch{}if(o)try{t.setAttribute("href",o)}catch{}}})}async insertMissingVideoPosters(){await Promise.all(Array.from(this.doc.querySelectorAll("video[src], video > source[src]")).map(async t=>{let a;if(t.tagName.toUpperCase()=="VIDEO"?a=t:a=t.parentElement,!a.poster){let o=a.getAttribute(I.VIDEO_ATTRIBUTE_NAME);if(o){let n=this.options.videos[Number(o)],i=n.src||a.src;if(i){let r=this.doc.createElement("video");r.src=i,r.style.setProperty("width",n.size.pxWidth+"px","important"),r.style.setProperty("height",n.size.pxHeight+"px","important"),r.style.setProperty("display","none","important"),r.crossOrigin="anonymous";let s=this.doc.createElement("canvas"),l=s.getContext("2d");return this.options.doc.body.appendChild(r),new Promise(c=>{r.currentTime=n.currentTime,r.oncanplay=()=>{s.width=n.size.videoWidth,s.height=n.size.videoHeight,l.drawImage(r,0,0,s.width,s.height);try{a.poster=s.toDataURL("image/png","")}catch{}r.remove(),c()},r.onerror=()=>{r.remove(),c()}})}}}}))}resolveStyleAttributeURLs(){this.doc.querySelectorAll("[style]").forEach(t=>{if(this.options.blockStylesheets)t.removeAttribute("style");else{let a=t.getAttribute("style"),o=Oe.parse(a,{context:"declarationList",parseCustomProperty:!0});this.processorHelper.resolveStylesheetURLs(o,this.baseURI,this.workStyleElement),this.styles.set(t,o)}})}async resolveStylesheetsURLs(){let t=[];if(this.options.inlineStylesheets=new Be,this.options.inlineStylesheetsRefs=new Be,this.doc.querySelectorAll("style").forEach(a=>{if(a.textContent){let o=t.indexOf(a.textContent);o==-1?(this.options.inlineStylesheets.set(t.length,a.textContent),t.push(a.textContent)):this.options.inlineStylesheetsRefs.set(a,o)}}),await Promise.all(Array.from(this.doc.querySelectorAll("style, link[rel*=stylesheet]:not([disabled])")).map(async a=>{let o=Object.assign({},this.options,{charset:this.charset}),n;a.media&&(n=a.media.toLowerCase());let i=!!a.closest("["+_n+"]"),r={mediaText:n,scoped:i};await this.processorHelper.resolveStylesheets(a,r,this.stylesheets,this.baseURI,o,this.workStyleElement,this.resources)})),this.options.rootDocument){let a=Object.keys(this.options.updatedResources).filter(o=>this.options.updatedResources[o].type=="stylesheet"&&!this.options.updatedResources[o].retrieved).map(o=>this.options.updatedResources[o]);await Promise.all(a.map(async o=>{if(o.retrieved=!0,!this.options.blockStylesheets){let n={},i=this.doc.createElement("style");this.doc.body.appendChild(i),i.textContent=o.content,await this.processorHelper.resolveStylesheetElement(i,n,this.stylesheets,this.baseURI,this.options,this.workStyleElement,this.resources)}}))}}async resolveFrameURLs(){let t=this.processorHelper,a=Array.from(this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]'));await Promise.all(a.map(async n=>{let i=n.getAttribute("src"),r;if(n.tagName.toUpperCase()=="OBJECT"?n.setAttribute("data","data:text/html,"):(n.removeAttribute("src"),n.removeAttribute("srcdoc")),Array.from(n.childNodes).forEach(s=>s.remove()),i&&!ed(i)){try{r=I.resolveURL(i,this.baseURI)}catch{}this.options.saveOriginalURLs&&i&&!Qc(i)&&n.setAttribute("data-sf-original-src",r)}if(this.options.saveRawPage&&r&&nd(r)){let s={adoptedStyleSheets:[],baseURI:r,canvases:[],fonts:[],images:[],posters:[],scrollPosition:{x:0,y:0},shadowRoots:[],stylesheets:[],url:r,usedFonts:[],videos:[],worklets:[]};this.options.frames.push(s),s.windowId=(this.options.windowId||"0")+"."+this.options.frames.length,n.setAttribute(I.WIN_ID_ATTRIBUTE_NAME,s.windowId),await o(s,n,null,this.batchRequest,Object.assign({},this.options))}else{let s=n.getAttribute(I.WIN_ID_ATTRIBUTE_NAME);if(this.options.frames&&s){let l=this.options.frames.find(c=>c.windowId==s);l&&l.content&&await o(l,n,s,this.batchRequest,Object.assign({},this.options))}}}));async function o(n,i,r,s,l){l.insertSingleFileComment=!1,l.insertCanonicalLink=!1,l.insertMetaNoIndex=!1,l.saveFavicon=!1,l.includeInfobar=!1,l.saveFilenameTemplateData=!1,l.selected=!1,l.embeddedImage=null,l.embeddedPdf=null,l.url=n.baseURI,l.windowId=r,l.content=n.content,l.canvases=n.canvases,l.fonts=n.fonts,l.worklets=n.worklets,l.stylesheets=n.stylesheets,l.images=n.images,l.posters=n.posters,l.videos=n.videos,l.usedFonts=n.usedFonts,l.shadowRoots=n.shadowRoots,l.scrollPosition=n.scrollPosition,l.scrolling=n.scrolling,l.adoptedStyleSheets=n.adoptedStyleSheets,n.runner=new br(l,t),n.frameElement=i,await n.runner.loadPage(),await n.runner.initialize(),n.maxResources=s.getMaxResources()}}insertShadowRootContents(){let t=this.doc,a=this.options;a.shadowRoots&&a.shadowRoots.length&&o(this.doc);function o(n){Array.from(n.querySelectorAll("["+I.SHADOW_ROOT_ATTRIBUTE_NAME+"]")).forEach(r=>{let s=r.getAttribute(I.SHADOW_ROOT_ATTRIBUTE_NAME);if(s){let l=a.shadowRoots[Number(s)];if(l){let c=t.createElement("template");c.setAttribute(_n,l.mode),l.delegatesFocus&&c.setAttribute($w,l.delegatesFocus),l.clonable&&c.setAttribute(Jw,l.clonable),l.serializable&&c.setAttribute(Zw,l.serializable),l.adoptedStyleSheets&&l.adoptedStyleSheets.length&&l.adoptedStyleSheets.forEach(m=>{let h=t.createElement("style");h.textContent=m,c.appendChild(h)});let d=I.parseDocContent(l.content);if(d.head){let m=d.head.querySelector("meta[charset]");m&&m.remove(),d.head.childNodes.forEach(h=>c.appendChild(d.importNode(h,!0)))}d.body&&d.body.childNodes.forEach(m=>c.appendChild(d.importNode(m,!0))),o(c),r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c)}}})}}removeUnusedStyles(){let t=I.minifyCSSRules(this.doc,this.stylesheets);this.stats.set("processed","CSS rules",t.processed),this.stats.set("discarded","CSS rules",t.discarded)}removeUnusedFonts(){I.removeUnusedFonts(this.doc,this.stylesheets,this.styles,this.options)}removeAlternativeMedias(){let t=I.minifyMedias(this.stylesheets,{keepPrintStyleSheets:this.options.keepPrintStyleSheets});this.stats.set("processed","medias",t.processed),this.stats.set("discarded","medias",t.discarded)}async processStylesheets(){await Promise.all([...this.stylesheets].map(async([,t])=>{t.stylesheet&&await this.processorHelper.processStylesheet(t.stylesheet.children,this.baseURI,this.options,this.resources,this.batchRequest)}))}async processStyleAttributes(){return Promise.all([...this.styles].map(([,t])=>this.processorHelper.processStyle(t,this.options,this.resources,this.batchRequest)))}async processPageResources(){await this.processorHelper.processPageResources(this.doc,this.baseURI,this.options,this.resources,this.styles,this.batchRequest)}async processScripts(){await Promise.all(Array.from(this.doc.querySelectorAll("script[src]")).map(async t=>{let a,o;if(o=t.getAttribute("src"),this.options.saveOriginalURLs&&!Qc(o)&&t.setAttribute("data-sf-original-src",o),t.removeAttribute("integrity"),this.options.blockScripts)t.removeAttribute("src");else{t.textContent="";try{a=I.resolveURL(o,this.baseURI)}catch{}nd(a)&&(t.removeAttribute("src"),await this.processorHelper.processScript(t,a,this.options,this.charset,this.batchRequest,this.resources),(t.getAttribute("async")=="async"||t.getAttribute(I.ASYNC_SCRIPT_ATTRIBUTE_NAME)=="")&&t.setAttribute("async",""))}this.stats.add("processed","scripts",1)}))}async processWorklets(){if(this.options.worklets.length){let t=this.doc.createElement("script");t.textContent=`if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule) {
`,await Promise.all(this.options.worklets.map(async({moduleURL:a,options:o})=>{await this.processorHelper.processWorklet(t,a,o,this.options,this.charset,this.batchRequest,this.resources)})),t.textContent+="}",this.doc.head.appendChild(t)}}removeAlternativeImages(){I.removeAlternativeImages(this.doc)}async removeAlternativeFonts(){await this.processorHelper.removeAlternativeFonts(this.doc,this.stylesheets,this.resources.fonts,this.options.fontTests)}async processFrames(){if(this.options.frames){let t=Array.from(this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]'));await Promise.all(t.map(async a=>{let o=a.getAttribute(I.WIN_ID_ATTRIBUTE_NAME);if(o){let n=this.options.frames.find(i=>i.windowId==o);if(n)if(this.options.frames=this.options.frames.filter(i=>i.windowId!=o),n.runner&&a.getAttribute(I.HIDDEN_FRAME_ATTRIBUTE_NAME)!=""){this.stats.add("processed","frames",1),await n.runner.run();let i=await n.runner.getPageData();a.removeAttribute(I.WIN_ID_ATTRIBUTE_NAME),this.processorHelper.processFrame(a,i,this.options,this.resources,o,n),this.stats.addAll(i)}else a.removeAttribute(I.WIN_ID_ATTRIBUTE_NAME),this.stats.add("discarded","frames",1)}}))}}replaceStylesheets(){this.processorHelper.replaceStylesheets(this.doc,this.stylesheets,this.options,this.resources),delete this.options.inlineStylesheetsRefs,delete this.options.inlineStylesheets}replaceStyleAttributes(){this.doc.querySelectorAll("[style]").forEach(t=>{let a=this.styles.get(t);a?(this.styles.delete(t),t.setAttribute("style",this.processorHelper.generateStylesheetContent(a,this.options))):t.setAttribute("style","")})}insertVariables(){let{cssVariables:t}=this.resources;if(t.size){let a=this.doc.createElement("style"),o=this.doc.head.querySelector("style");o?this.doc.head.insertBefore(a,o):this.doc.head.appendChild(a);let n="";t.forEach(({content:i,url:r},s)=>{t.delete(s),n&&(n+=";"),n+=`${gz+s}: `,this.options.saveOriginalURLs&&(n+=`/* original URL: ${r} */ `),n+=`url("${i}")`}),a.textContent=":root{"+n+"}"}}compressHTML(){let t;this.options.displayStats&&(t=I.getContentSize(this.doc.documentElement.outerHTML)),I.minifyHTML(this.doc,{PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME:I.PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME}),this.options.displayStats&&this.stats.add("discarded","HTML bytes",t-I.getContentSize(this.doc.documentElement.outerHTML))}cleanupPage(){this.doc.querySelectorAll("base").forEach(a=>a.remove());let t=this.doc.head.querySelector("meta[charset]");t&&(this.doc.head.insertBefore(t,this.doc.head.firstChild),this.doc.head.querySelectorAll("*").length==1&&this.doc.body.childNodes.length==0&&this.doc.head.querySelector("meta[charset]").remove())}resetZoomLevel(){let t=this.doc.documentElement.style.getPropertyValue("-sf-transform"),a=this.doc.documentElement.style.getPropertyPriority("-sf-transform"),o=this.doc.documentElement.style.getPropertyValue("-sf-transform-origin"),n=this.doc.documentElement.style.getPropertyPriority("-sf-transform-origin"),i=this.doc.documentElement.style.getPropertyValue("-sf-min-height"),r=this.doc.documentElement.style.getPropertyPriority("-sf-min-height");this.doc.documentElement.style.setProperty("transform",t,a),this.doc.documentElement.style.setProperty("transform-origin",o,n),this.doc.documentElement.style.setProperty("min-height",i,r),this.doc.documentElement.style.removeProperty("-sf-transform"),this.doc.documentElement.style.removeProperty("-sf-transform-origin"),this.doc.documentElement.style.removeProperty("-sf-min-height")}async insertMAFFMetaData(){let t=await this.maffMetaDataPromise;if(t&&t.content){let a="http://www.w3.org/1999/02/22-rdf-syntax-ns#",o=I.parseXMLContent(t.content),n=o.querySelector("RDF > Description > originalurl"),i=o.querySelector("RDF > Description > archivetime");if(n&&(this.options.saveUrl=n.getAttributeNS(a,"resource")),i){let r=i.getAttributeNS(a,"resource");if(r){let s=new Date(r);isNaN(s.getTime())||(this.options.saveDate=new Date(r))}}}}async setDocInfo(){let t=this.doc.querySelector("title"),a=this.doc.querySelector("meta[name=description]"),o=this.doc.querySelector("meta[name=author]"),n=this.doc.querySelector("meta[name=creator]"),i=this.doc.querySelector("meta[name=publisher]"),r=this.doc.querySelector("h1");this.options.title=t?t.textContent.trim():"",this.options.info={description:a&&a.content?a.content.trim():"",lang:this.doc.documentElement.lang,author:o&&o.content?o.content.trim():"",creator:n&&n.content?n.content.trim():"",publisher:i&&i.content?i.content.trim():"",heading:r&&r.textContent?r.textContent.trim():""},this.options.infobarContent=await I.evalTemplate(this.options.infobarTemplate,this.options,null,this.doc,{dontReplaceSlash:!0})}},rd="data:",mz="about:blank",cb="blob:",db=/^https?:\/\//,hz=/^file:\/\//,uz=/^https?:\/\/+\s*$/,pz=/^(https?:\/\/|file:\/\/|blob:).+/,gz="--sf-img-";function Qw(e){return!e||e.startsWith(rd)?e:e.split("#")[0]}function fz(e){let t=e.body||e.createElement("div"),a=[];for(let o in t)o.startsWith("on")&&a.push(o);return a}function Qc(e){return e&&(e.startsWith(rd)||e.startsWith(cb))}function ed(e){return e&&(e.startsWith(rd)||e==mz)}function wz(e){return e&&!e.match(uz)}function nd(e){return wz(e)&&(e.match(db)||e.match(hz)||e.startsWith(cb))&&e.match(pz)}function Eo(...e){console.log("S-File <core>   ",...e)}var bz={discarded:{"HTML bytes":0,"hidden elements":0,scripts:0,objects:0,"audio sources":0,"video sources":0,frames:0,"CSS rules":0,canvas:0,stylesheets:0,resources:0,medias:0},processed:{"HTML bytes":0,"hidden elements":0,scripts:0,objects:0,"audio sources":0,"video sources":0,frames:0,"CSS rules":0,canvas:0,stylesheets:0,resources:0,medias:0}},id=class{constructor(t){this.options=t,t.displayStats&&(this.data=xo.parse(xo.stringify(bz)))}set(t,a,o){this.options.displayStats&&(this.data[t][a]=o)}add(t,a,o){this.options.displayStats&&(this.data[t][a]+=o)}addAll(t){this.options.displayStats&&(Object.keys(this.data.discarded).forEach(a=>this.add("discarded",a,t.stats.discarded[a]||0)),Object.keys(this.data.processed).forEach(a=>this.add("processed",a,t.stats.processed[a]||0)))}};var sd=!1,mb=1024*1024,kz="text/",vz={"image/svg+xml":".svg","image/png":".png","image/gif":".gif","image/tiff":".tiff","image/bmp":".bmp","image/x-icon":".ico","image/heif":".heif","image/heic":".heic","image/avif":".avif","image/apng":".apng","image/jpeg":".jpg","image/webp":".webp","audio/mpeg":".mp3","audio/ogg":".ogg","audio/wav":".wav","audio/webm":".webm","video/3gpp":".3gp","video/3gpp2":".3g2","video/mpeg":".mpeg","video/quicktime":".mov","video/x-msvideo":".avi","video/webm":".webm","video/ogg":".ogv","video/mp4":".mp4","video/mp2t":".ts","font/otf":".otf","font/ttf":".ttf","font/woff":".woff","font/woff2":".woff2","application/vnd.ms-fontobject":".eot","font/collection":".ttc"},hb="application/octet-stream",ld=globalThis.URL,cd=globalThis.DOMParser,Sz=globalThis.Blob,Ez=globalThis.FileReader,ub=(e,t)=>(t.cache="force-cache",t.referrerPolicy="strict-origin-when-cross-origin",globalThis.fetch(e,t)),pb=globalThis.TextDecoder,xz=globalThis.URLSearchParams;function gb(e){return e=e||{},e.fetch=e.fetch||ub,e.frameFetch=e.frameFetch||e.fetch||ub,{getDoctypeString:jz,getFilenameExtension(a,o,n,i){let r;try{r=new ld(a).pathname.match(/(\.[^\\/.]*)$/)}catch{}return(r&&r[1]&&this.getValidFilename(r[1],o,n,i)||"").toLowerCase()},getContentTypeExtension(a){return vz[a]||""},getContent:t,parseURL(a,o){return o===void 0?new ld(a):new ld(a,o)},resolveURL(a,o){return this.parseURL(a,o).href},getSearchParams(a){return Array.from(new xz(a))},getValidFilename(a,o,n,i){return an(a,o,n,i)},parseDocContent(a,o){return fi(a,o)},parseXMLContent(a){return new cd().parseFromString(a,"text/xml")},parseSVGContent(a){let o=new cd().parseFromString(a,"image/svg+xml");return o.querySelector("parsererror")?new cd().parseFromString(a,"text/html"):o},fixInvalidNesting(a,o=!0){ui(a,it,o)},markInvalidNesting(a){hi(a,it)},getFixInvalidNestingSource(){return ui.toString().replace(/\s+/g," ")},async digest(a,o){return Jt(a,o)},getContentSize(a){return tn(a)},formatFilename(a,o,n){return yo.formatFilename(a,o,n)},getMimeType(a){return!a.compressContent||a.selfExtractingArchive?"text/html":"application/zip"},async evalTemplate(a,o,n,i,r){return yo.evalTemplate(a,o,n,i,r)},minifyHTML(a,o){return Ln.process(a,o)},minifyCSSRules(a,o){return An.process(a,o)},removeUnusedFonts(a,o,n,i){return Sn.process(a,o,n,i)},compressCSS(a,o){return yn.processString(a,o)},minifyMedias(a,o){return En.process(a,o)},removeAlternativeImages(a){return Cn.process(a)},parseSrcset(a){return fo.process(a)},preProcessDoc(a,o,n){return Qo(a,o,n)},postProcessDoc(a,o,n){en(a,o,n)},serialize(a,o){return Rn.process(a,o)},removeQuotes(a){return Za(a)},appendInfobar(a,o){return Js(a,o)},findLast(a,o){if(a.findLast&&typeof a.findLast=="function")return a.findLast(o);{let n=a.length;for(;n--;)if(o(a[n],n,a))return a[n]}},ON_BEFORE_CAPTURE_EVENT_NAME:Xo,ON_AFTER_CAPTURE_EVENT_NAME:$o,WIN_ID_ATTRIBUTE_NAME:Jo,REMOVED_CONTENT_ATTRIBUTE_NAME:Fa,HIDDEN_CONTENT_ATTRIBUTE_NAME:Ba,HIDDEN_FRAME_ATTRIBUTE_NAME:Ua,IMAGE_ATTRIBUTE_NAME:Ga,POSTER_ATTRIBUTE_NAME:Va,VIDEO_ATTRIBUTE_NAME:Wa,CANVAS_ATTRIBUTE_NAME:Ka,STYLE_ATTRIBUTE_NAME:Zo,INPUT_VALUE_ATTRIBUTE_NAME:$t,INPUT_CHECKED_ATTRIBUTE_NAME:Ya,SHADOW_ROOT_ATTRIBUTE_NAME:qa,PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME:Ha,STYLESHEET_ATTRIBUTE_NAME:Xa,SELECTED_CONTENT_ATTRIBUTE_NAME:Ys,INVALID_ELEMENT_ATTRIBUTE_NAME:Xs,COMMENT_HEADER:oi,COMMENT_HEADER_LEGACY:$s,SINGLE_FILE_UI_ELEMENT_CLASS:$a,EMPTY_RESOURCE:Ja,INFOBAR_TAGNAME:ci,WAIT_FOR_USERSCRIPT_PROPERTY_NAME:ha,NO_SCRIPT_PROPERTY_NAME:ni,NESTING_TRACK_ID_ATTRIBUTE_NAME:it};async function t(a,o){let n,i,r,s,l,c=e.fetch,d=e.frameFetch;if(sd&&(i=Date.now(),dd("  // STARTED download url =",a,"asBinary =",o.asBinary)),o.blockMixedContent&&/^https:/i.test(o.baseURI)&&!/^https:/i.test(a))return It(a,o);o.networkTimeout?s=new Promise((p,g)=>{l=p,r=globalThis.setTimeout(()=>g(new Error("network timeout")),o.networkTimeout)}):s=new Promise(p=>{l=p});try{let p=o.acceptHeaders?o.acceptHeaders[o.expectedType]:"*/*";if(o.frameId)try{n=await Promise.race([d(a,{frameId:o.frameId,referrer:o.resourceReferrer,headers:{accept:p}}),s])}catch{n=await Promise.race([c(a,{headers:{accept:p}}),s])}else n=await Promise.race([c(a,{referrer:o.resourceReferrer,headers:{accept:p}}),s])}catch{return It(a,o)}finally{l(),o.networkTimeout&&globalThis.clearTimeout(r)}let m;try{m=await n.arrayBuffer()}catch{return o.inline?{data:o.asBinary?Ja:"",resourceURL:a}:{resourceURL:a}}a=n.url||a;let h="",u;try{let p=new kn(n.headers.get("content-type"));h=p.type+"/"+p.subtype,u=p.parameters.get("charset")}catch{}if((!h||h==hb&&o.asBinary)&&(h=Az(o.expectedType,m),h||(h=o.contentType?o.contentType:o.asBinary?hb:"")),!u&&o.charset&&(u=o.charset),o.asBinary){if(n.status>=400)return It(a,o);try{return sd&&dd("  // ENDED   download url =",a,"delay =",Date.now()-i),o.maxResourceSizeEnabled&&m.byteLength>o.maxResourceSize*mb?It(a,o):It(a,o,m,null,h)}catch{return It(a,o)}}else{if(n.status>=400||o.validateTextContentType&&h&&!h.startsWith(kz))return It(a,o);if(u||(u="utf-8"),sd&&dd("  // ENDED   download url =",a,"delay =",Date.now()-i),o.maxResourceSizeEnabled&&m.byteLength>o.maxResourceSize*mb)return It(a,o,null,u);try{return It(a,o,m,u,h)}catch{return It(a,o,null,u)}}}}async function It(e,t,a,o,n){if(a)if(t.asBinary)if(t.inline){let i=new Ez;i.readAsDataURL(new Sz([a],{type:n+(t.charset?";charset="+t.charset:"")})),a=await new Promise((r,s)=>{i.addEventListener("load",()=>r(i.result),!1),i.addEventListener("error",s,!1)})}else a=new Uint8Array(a);else{let i=new Uint8Array(a.slice(0,4));i[0]==132&&i[1]==49&&i[2]==149&&i[3]==51?o="gb18030":i[0]==255&&i[1]==254?o="utf-16le":i[0]==254&&i[1]==255&&(o="utf-16be");try{a=new pb(o).decode(a)}catch{o="utf-8",a=new pb(o).decode(a)}a=a.replace(/\ufeff/gi,"")}else t.inline&&(a=t.asBinary?Ja:"");return{data:a,resourceURL:e,charset:o,contentType:n}}function Az(e,t){if(e=="image"){if(a([255,255,255,255],[0,0,1,0])||a([255,255,255,255],[0,0,2,0]))return"image/x-icon";if(a([255,255],[78,77]))return"image/bmp";if(a([255,255,255,255,255,255],[71,73,70,56,57,97])||a([255,255,255,255,255,255],[71,73,70,56,59,97]))return"image/gif";if(a([255,255,255,255,0,0,0,0,255,255,255,255,255,255],[82,73,70,70,0,0,0,0,87,69,66,80,86,80]))return"image/webp";if(a([255,255,255,255,255,255,255,255],[137,80,78,71,13,10,26,10]))return"image/png";if(a([255,255,255],[255,216,255]))return"image/jpeg"}if(e=="font"){if(a([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,80]))return"application/vnd.ms-fontobject";if(a([255,255,255,255],[0,1,0,0]))return"font/ttf";if(a([255,255,255,255],[79,84,84,79]))return"font/otf";if(a([255,255,255,255],[116,116,99,102]))return"font/collection";if(a([255,255,255,255],[119,79,70,70]))return"font/woff";if(a([255,255,255,255],[119,79,70,50]))return"font/woff2"}if(e=="video"){if(a([0,0,0,0,255,255,255,255,255,255,255,255],[0,0,0,0,102,116,121,112,105,115,111,109]))return"video/mp4";if(a([255,255,255,255,0,0,0,0,255,255,255,255],[82,73,70,70,0,0,0,0,87,65,86,69]))return"video/x-msvideo";if(a([255,255,255,255],[0,0,1,179])||a([255,255,255,255],[0,0,1,186]))return"video/mpeg";if(a([255,255,255,255],[79,103,103,83]))return"video/ogg";if(a([255],[71]))return"video/mp2t";if(a([255,255,255,255],[26,69,223,163]))return"video/webm";if(a([0,0,0,0,255,255,255,255,255,255],[0,0,0,0,102,116,121,112,51,103]))return"video/3gpp"}if(e=="audio"){if(a([255,255],[255,249])||a([255,255],[255,254]))return"audio/aac";if(a([255,255,255,255],[77,84,104,100]))return"audio/midi";if(a([255,255,255,255],[0,0,1,179])||a([255,255,255,255],[0,0,1,186])||a([255,255],[255,251])||a([255,255],[255,243])||a([255,255],[255,242])||a([255,255,255],[73,68,51]))return"audio/mpeg";if(a([255,255,255,255],[79,103,103,83]))return"audio/ogg";if(a([255,255,255,255,0,0,0,0,255,255,255,255],[82,73,70,70,0,0,0,0,87,65,86,69]))return"audio/wav";if(a([255,255,255,255],[26,69,223,163]))return"audio/webm";if(a([0,0,0,0,255,255,255,255,255,255],[0,0,0,0,102,116,121,112,51,103]))return"audio/3gpp"}function a(o,n){let i=!0,r=0;if(t.byteLength>=n.length){let s=new Uint8Array(t,0,o.length);for(r=0;r<o.length&&i;r++)i=i&&(s[r]&o[r])==n[r];return i}}}function jz(e){let t=e.doctype,a="";return t&&(a="<!DOCTYPE "+t.nodeName,t.publicId?(a+=' PUBLIC "'+t.publicId+'"',t.systemId&&(a+=' "'+t.systemId+'"')):t.systemId&&(a+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(a+=" ["+t.internalSubset+"]"),a+="> "),a}function dd(...e){console.log("S-File <browser>",...e)}var yr;function fb(e){typeof yr>"u"&&(yr=eb(gb(e)))}async function Tz(e={},t,a,o){a===void 0&&(a=globalThis.document),o===void 0&&(o=globalThis);let n=on,i;if(fb(t),a&&o){mi(a);let c=[];if(!e.saveRawPage){let d;if(e.loadDeferredImages&&(d=ga.process(e),e.loadDeferredImagesBeforeFrames&&await d),!e.removeFrames&&n&&globalThis.frames){let m;e.loadDeferredImages?m=new Promise(h=>globalThis.setTimeout(()=>h(n.getAsync(e)),e.loadDeferredImagesBeforeFrames||!e.loadDeferredImages?0:e.loadDeferredImagesMaxIdleTime)):m=n.getAsync(e),e.loadDeferredImagesBeforeFrames?e.frames=await m:c.push(m)}e.loadDeferredImages&&!e.loadDeferredImagesBeforeFrames&&c.push(d)}e.loadDeferredImagesBeforeFrames||([e.frames]=await Promise.all(c)),i=e.frames&&e.frames.sessionId}e.doc=a,e.win=o,e.insertCanonicalLink=!0;let r=e.onprogress;e.onprogress=async c=>{c.type===c.RESOURCES_INITIALIZED&&a&&o&&e.loadDeferredImages&&ga.resetZoomLevel(e),r&&await r(c)};let s=new yr(e);await s.run(),i&&n.cleanup(i);let l=await s.getPageData();if(e.compressContent){let c=await Go.process(l,{insertTextBody:e.insertTextBody,url:e.url,createRootDirectory:e.createRootDirectory,selfExtractingArchive:e.selfExtractingArchive,extractDataFromPage:e.extractDataFromPage,preventAppendedData:e.preventAppendedData,insertCanonicalLink:e.insertCanonicalLink,insertMetaNoIndex:e.insertMetaNoIndex,insertMetaCSP:e.insertMetaCSP,password:e.password,zipScript:e.zipScript,embeddedImage:e.embeddedImage,embeddedPdf:e.embeddedPdf});delete l.resources;let d=new globalThis.FileReader;d.readAsArrayBuffer(c);let m=await new Promise((h,u)=>{d.addEventListener("load",()=>h(d.result),!1),d.addEventListener("error",p=>u(p.detail.error),!1)});l.content=Array.from(new Uint8Array(m))}return l}return Lb(Lz);})();
;var singlefileBootstrap=(()=>{var oe=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var Nt=Object.getOwnPropertyNames;var St=Object.prototype.hasOwnProperty;var Be=(e,t)=>{for(var o in t)oe(e,o,{get:t[o],enumerable:!0})},Ot=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Nt(t))!St.call(e,n)&&n!==o&&oe(e,n,{get:()=>t[n],enumerable:!(r=Rt(t,n))||r.enumerable});return e};var wt=e=>Ot(oe({},"__esModule",{value:!0}),e);var zo={};Be(zo,{helper:()=>qo,processors:()=>Ho});var ke={};Be(ke,{TIMEOUT_INIT_REQUEST_MESSAGE:()=>ft,cleanup:()=>yo,getAsync:()=>wo,getSync:()=>Mo,initResponse:()=>Pe});var Mt="single-file-load-deferred-images-start",yt="single-file-load-deferred-images-end",Ct="single-file-load-deferred-images-keep-zoom-level-start",Dt="single-file-load-deferred-images-keep-zoom-level-end";var Lt="single-file-block-cookies-start",vt="single-file-block-cookies-end",Pt="single-file-dispatch-scroll-event-start",Ut="single-file-dispatch-scroll-event-end",Ft="single-file-block-storage-start",kt="single-file-block-storage-end",se="single-file-load-image",ie="single-file-image-loaded",xt="single-file-new-font-face",Bt="single-file-delete-font",Vt="single-file-clear-fonts",Gt="single-file-new-worklet",re="_singleFile_fontFaces",ne="_singleFile_worklets",I=globalThis.CustomEvent,g=globalThis.document,Ht=globalThis.Document,Ve=globalThis.JSON,qt=globalThis.MutationObserver,D,H;globalThis.window[re]?D=globalThis.window[re]:D=globalThis.window[re]=new Map;globalThis.window[ne]?H=globalThis.window[ne]:H=globalThis.window[ne]=new Map;Ge();new qt(Ge).observe(g,{childList:!0});function Ge(){g instanceof Ht&&(g.addEventListener(xt,e=>{let t=e.detail,o=Object.assign({},t);delete o.src,D.set(Ve.stringify(o),t)}),g.addEventListener(Bt,e=>{let t=e.detail,o=Object.assign({},t);delete o.src,D.delete(Ve.stringify(o))}),g.addEventListener(Vt,()=>D=new Map),g.addEventListener(Gt,e=>{let t=e.detail;H.set(t.moduleURL,t)}))}function He(){return Array.from(D.values())}function qe(){return Array.from(H.values())}function ze(e){e.loadDeferredImagesBlockCookies&&g.dispatchEvent(new I(Lt)),e.loadDeferredImagesBlockStorage&&g.dispatchEvent(new I(Ft)),e.loadDeferredImagesDispatchScrollEvent&&g.dispatchEvent(new I(Pt)),e.loadDeferredImagesKeepZoomLevel?g.dispatchEvent(new I(Ct)):g.dispatchEvent(new I(Mt))}function Je(e){e.loadDeferredImagesBlockCookies&&g.dispatchEvent(new I(vt)),e.loadDeferredImagesBlockStorage&&g.dispatchEvent(new I(kt)),e.loadDeferredImagesDispatchScrollEvent&&g.dispatchEvent(new I(Ut)),e.loadDeferredImagesKeepZoomLevel?g.dispatchEvent(new I(Dt)):g.dispatchEvent(new I(yt))}var Ye="[\\x20\\t\\r\\n\\f]",zt=new RegExp("\\\\([\\da-f]{1,6}"+Ye+"?|("+Ye+")|.)","ig");function Ke(e){return e.replace(zt,(t,o,r)=>{let n="0x"+o-65536;return n!==n||r?o:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320)})}var u="single-file-",ae="Page saved with SingleFile";var L="_singleFile_waitForUserScript",v="__frameTree__::";var Qe="single-file-infobar";var W=u+"on-before-capture",Y=u+"on-after-capture",je=u+"request-get-adopted-stylesheets",Xe=u+"response-get-adopted-stylesheets",Yt=u+"unregister-request-get-adopted-stylesheets",Kt=u+"user-script-init",le="data-"+u+"removed-content",de="data-"+u+"hidden-content",Ee="data-"+u+"kept-content",fe="data-"+u+"hidden-frame",ue="data-"+u+"preserved-space-element",Ae="data-"+u+"shadow-root-element",ot="data-"+u+"win-id",Te="data-"+u+"image",ge="data-"+u+"poster",he="data-"+u+"video",pe="data-"+u+"canvas",rt="data-"+u+"movable-style",x="data-"+u+"input-value",be="data-"+u+"input-checked",J="data-"+u+"lazy-loaded-src",me="data-"+u+"stylesheet",B="data-"+u+"disabled-noscript",Zo="data-"+u+"selected-content",$o="data-"+u+"invalid-element",Ie="data-"+u+"async-script",ce="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",Qt=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD","BODY"],jt=["SCRIPT","NOSCRIPT","META","LINK","TEMPLATE"],Ze=/^'(.*?)'$/,Xt=/^"(.*?)"$/,Zt={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},nt="Archive processed by SingleFile",Ne="single-file-ui-element",$t=Qe,eo="data:,";var M="data-sf-nesting-track-id",$e=(e,t,o)=>globalThis.addEventListener(e,t,o),to=e=>{try{globalThis.dispatchEvent(e)}catch{}},_e=globalThis.JSON,er=globalThis.crypto,tr=globalThis.TextEncoder,or=globalThis.Blob,z=globalThis.CustomEvent,oo=globalThis.MutationObserver,et=globalThis.URL,ro=globalThis.DOMParser;function Se(){$e(Kt,({detail:e})=>globalThis[L]=async(t,o)=>{let r=Object.assign({},o);delete r.win,delete r.doc,delete r.onprogress,delete r.frames,delete r.taskId,delete r._migratedTemplateFormat,delete r.woleetKey;let n;try{n=e=="jsonDetail"?_e.stringify({options:r}):{options:r}}catch{}let i=new z(t+"-request",{cancelable:!0,detail:n}),a,l=new Promise(s=>{a=s,$e(t+"-response",c=>{if(c.detail)try{let d=typeof c.detail=="string"?_e.parse(c.detail):c.detail;d.options&&Object.assign(o,d.options)}catch{}s()})});to(i),i.defaultPrevented?await l:a()}),new oo(Se).observe(globalThis.document,{childList:!0})}function no(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach(t=>{t.removeAttribute("http-equiv"),t.setAttribute("disabled-http-equiv","refresh")})}function K(e,t,o){e.querySelectorAll("noscript:not(["+B+"])").forEach(a=>{a.setAttribute(B,a.textContent),a.textContent=""}),no(e),e.head&&e.head.querySelectorAll(ce).forEach(a=>a.hidden=!0),e.querySelectorAll("svg foreignObject").forEach(a=>{let l=a.querySelectorAll("html > head > "+ce+", html > body > "+ce);l.length&&(Array.from(a.childNodes).forEach(s=>s.remove()),l.forEach(s=>a.appendChild(s)))});let r=new Map,n;t&&e.documentElement?(so(e),n=Re(t,e,e.documentElement,o),o.moveStylesInHead&&e.querySelectorAll("body style, body ~ style").forEach(a=>{let l=w(t,a);l&&it(a,l)&&(a.setAttribute(rt,""),n.markedElements.push(a))})):n={canvases:[],images:[],posters:[],videos:[],usedFonts:[],shadowRoots:[],markedElements:[]};let i="";if(e.referrer)try{i=new et("/",new et(e.referrer).origin).href}catch{}return{canvases:n.canvases,fonts:lo(),worklets:Eo(),stylesheets:ao(e),images:n.images,posters:n.posters,videos:n.videos,usedFonts:Array.from(n.usedFonts.values()),shadowRoots:n.shadowRoots,referrer:i,markedElements:n.markedElements,invalidElements:r,scrollPosition:{x:t.scrollX,y:t.scrollY},adoptedStyleSheets:st(e.adoptedStyleSheets)}}function so(e){i(e.body);let t=Ao(Oe(e)),o=a(e.body),r=a(t.body),n=new Set;Object.keys(o).forEach(s=>{if(s in r){let c=o[s].parentElement?.getAttribute(M)||null,d=r[s]?.parentElement?.getAttribute(M)||null;if(c!==d){let f=o[s];for(;f&&f!==e.body;){let E=f.getAttribute(M);E&&n.add(E),f=f.parentElement}}}}),l(e.body,n);function i(s,c=0,d=""){let f=d?`${d}.${c+1}`:`${c+1}`;s.setAttribute(M,f),Array.from(s.children).forEach((E,T)=>i(E,T,f))}function a(s){let c={};return d(s),c;function d(f){if(f.getAttribute){let E=f.getAttribute(M);E&&(c[E]=f),Array.from(f.children).forEach(d)}}}function l(s,c){let d=s.getAttribute(M);d&&!c.has(d)&&s.removeAttribute(M),Array.from(s.children).forEach(f=>l(f,c))}}function Re(e,t,o,r,n={usedFonts:new Map,canvases:[],images:[],posters:[],videos:[],shadowRoots:[],markedElements:[]},i=new Map,a){return o.childNodes&&Array.from(o.childNodes).filter(s=>s instanceof e.HTMLElement||s instanceof e.SVGElement||s instanceof globalThis.HTMLElement||s instanceof globalThis.SVGElement).forEach(s=>{let c,d,f;if(!r.autoSaveExternalSave&&(r.removeHiddenElements||r.removeUnusedFonts||r.compressHTML)&&(f=w(e,s),(s instanceof e.HTMLElement||s instanceof globalThis.HTMLElement)&&r.removeHiddenElements&&(d=(a||s.closest("html > head"))&&Qt.includes(s.tagName.toUpperCase())||s.closest("details"),d||(c=a||it(s,f),c&&!jt.includes(s.tagName.toUpperCase())&&(s.setAttribute(de,""),n.markedElements.push(s)))),!c)){if(r.compressHTML&&f){let T=f.getPropertyValue("white-space");T&&T.startsWith("pre")&&(s.setAttribute(ue,""),n.markedElements.push(s))}r.removeUnusedFonts&&(q(f,r,n.usedFonts),q(w(e,s,":first-letter"),r,n.usedFonts),q(w(e,s,":before"),r,n.usedFonts),q(w(e,s,":after"),r,n.usedFonts))}io(e,t,s,r,n,c,f);let E=!(s instanceof e.SVGElement||s instanceof globalThis.SVGElement)&&V(s);if(E&&!s.classList.contains(Ne)&&s.tagName.toLowerCase()!=$t){let T={};s.setAttribute(Ae,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(T);try{if(E.adoptedStyleSheets){if(E.adoptedStyleSheets.length)T.adoptedStyleSheets=st(E.adoptedStyleSheets,i);else if(E.adoptedStyleSheets.length===void 0){let S=G=>T.adoptedStyleSheets=G.detail.adoptedStyleSheets;E.addEventListener(Xe,S),E.dispatchEvent(new z(je,{bubbles:!0})),T.adoptedStyleSheets||s.dispatchEvent(new z(je,{bubbles:!0})),E.removeEventListener(Xe,S)}}}catch{}Re(e,t,E,r,n,i,c),T.content=E.innerHTML,T.mode=E.mode,T.delegateFocus=E.delegatesFocus,T.clonable=E.clonable,T.serializable=E.serializable;try{E.adoptedStyleSheets&&E.adoptedStyleSheets.length===void 0&&E.dispatchEvent(new z(Yt,{bubbles:!0}))}catch{}}Re(e,t,s,r,n,i,c),!r.autoSaveExternalSave&&r.removeHiddenElements&&a&&(d||s.getAttribute(Ee)==""?s.parentElement&&(s.parentElement.setAttribute(Ee,""),n.markedElements.push(s.parentElement)):c&&(s.setAttribute(le,""),n.markedElements.push(s)))}),n}function st(e,t=new Map){if(e){let o=[];for(let r of Array.from(e))if(t.has(r))o.push(t.get(r));else{let n="";if(r&&r.cssRules)for(let i of r.cssRules)n+=i.cssText+`
`;t.set(r,n),o.push(n)}return o}else return[]}function io(e,t,o,r,n,i,a){let l=o.tagName&&o.tagName.toUpperCase();if(l=="CANVAS")try{n.canvases.push({dataURI:o.toDataURL("image/png",""),backgroundColor:a.getPropertyValue("background-color")}),o.setAttribute(pe,n.canvases.length-1),n.markedElements.push(o)}catch{}if(l=="IMG"){let s={currentSrc:i?eo:r.loadDeferredImages&&o.getAttribute(J)||o.currentSrc};if(n.images.push(s),o.setAttribute(Te,n.images.length-1),n.markedElements.push(o),o.removeAttribute(J),a=a||w(e,o),a){s.size=co(e,o,a);let c=a.getPropertyValue("box-shadow"),d=a.getPropertyValue("background-image");(!c||c=="none")&&(!d||d=="none")&&(s.size.pxWidth>1||s.size.pxHeight>1)&&(s.replaceable=!0,s.backgroundColor=a.getPropertyValue("background-color"),s.objectFit=a.getPropertyValue("object-fit"),s.boxSizing=a.getPropertyValue("box-sizing"),s.objectPosition=a.getPropertyValue("object-position"))}}if(l=="VIDEO"){let s=o.currentSrc;if(s&&!s.startsWith("blob:")&&!s.startsWith("data:")){let c=w(e,o.parentNode);n.videos.push({positionParent:c&&c.getPropertyValue("position"),src:s,size:{pxWidth:o.clientWidth,pxHeight:o.clientHeight,videoWidth:o.videoWidth,videoHeight:o.videoHeight},currentTime:o.currentTime}),o.setAttribute(he,n.videos.length-1)}if(!o.getAttribute("poster")){let c=t.createElement("canvas"),d=c.getContext("2d");c.width=o.videoWidth,c.height=o.videoHeight;try{d.drawImage(o,0,0,c.width,c.height),n.posters.push(c.toDataURL("image/png","")),o.setAttribute(ge,n.posters.length-1),n.markedElements.push(o)}catch{}}}l=="IFRAME"&&i&&r.removeHiddenElements&&(o.setAttribute(fe,""),n.markedElements.push(o)),l=="INPUT"&&(o.type!="password"&&(o.setAttribute(x,o.value),n.markedElements.push(o)),(o.type=="radio"||o.type=="checkbox")&&(o.setAttribute(be,o.checked),n.markedElements.push(o))),l=="TEXTAREA"&&(o.setAttribute(x,o.value),n.markedElements.push(o)),l=="SELECT"&&o.querySelectorAll("option").forEach(s=>{s.selected&&(s.setAttribute(x,""),n.markedElements.push(s))}),l=="SCRIPT"&&(o.async&&o.getAttribute("async")!=""&&o.getAttribute("async")!="async"&&(o.setAttribute(Ie,""),n.markedElements.push(o)),o.textContent=o.textContent.replace(/<\/script>/gi,"<\\/script>"))}function q(e,t,o){if(e){let r=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach(n=>{if(n=tt(n),!t.loadedFonts||t.loadedFonts.find(i=>tt(i.family)==n&&i.style==r)){let i=uo(e.getPropertyValue("font-weight")),a=e.getPropertyValue("font-variant")||"normal",l=[n,i,r,a];o.set(_e.stringify(l),[n,i,r,a])}})}}function V(e){let t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(t&&t.dom&&t.dom.openOrClosedShadowRoot)try{return t.dom.openOrClosedShadowRoot(e)}catch{return e.shadowRoot}else return e.shadowRoot}function tt(e=""){return fo(Ke(e.trim())).toLowerCase()}function it(e,t){let o=!1;if(t){let r=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(o=r=="none",!o&&(n=="0"||i=="hidden")&&e.getBoundingClientRect){let a=e.getBoundingClientRect();o=!a.width&&!a.height}}return!!o}function Q(e,t,o){if(e.querySelectorAll("["+B+"]").forEach(r=>{r.textContent=r.getAttribute(B),r.removeAttribute(B)}),e.querySelectorAll("meta[disabled-http-equiv]").forEach(r=>{r.setAttribute("http-equiv",r.getAttribute("disabled-http-equiv")),r.removeAttribute("disabled-http-equiv")}),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach(r=>r.removeAttribute("hidden")),!t){let r=[le,fe,de,ue,Te,ge,he,pe,x,be,Ae,me,Ie];t=e.querySelectorAll(r.map(n=>"["+n+"]").join(","))}t.forEach(r=>{r.removeAttribute(le),r.removeAttribute(de),r.removeAttribute(Ee),r.removeAttribute(fe),r.removeAttribute(ue),r.removeAttribute(Te),r.removeAttribute(ge),r.removeAttribute(he),r.removeAttribute(pe),r.removeAttribute(x),r.removeAttribute(be),r.removeAttribute(Ae),r.removeAttribute(me),r.removeAttribute(Ie),r.removeAttribute(rt)}),o&&o.forEach((r,n)=>r.replaceWith(n))}function ao(e){if(e){let t=[];return e.querySelectorAll("style").forEach((o,r)=>{try{if(!o.sheet.disabled){let n=e.createElement("style");n.textContent=o.textContent,e.body.appendChild(n);let i=n.sheet;n.remove();let a=Array.from(i.cssRules).map(s=>s.cssText).join(`
`),l=Array.from(o.sheet.cssRules).map(s=>s.cssText).join(`
`);(!i||a!=l)&&(o.setAttribute(me,r),t[r]=Array.from(o.sheet.cssRules).map(s=>s.cssText).join(`
`))}}catch{}}),t}}function co(e,t,o){let r=t.naturalWidth,n=t.naturalHeight;if(!r&&!n){let i=t.getAttribute("style")==null;if(o=o||w(e,t),o){let a=!1;if(o.getPropertyValue("box-sizing")=="content-box"){let G=t.style.getPropertyValue("box-sizing"),It=t.style.getPropertyPriority("box-sizing"),_t=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),a=t.clientWidth!=_t,G?t.style.setProperty("box-sizing",G,It):t.style.removeProperty("box-sizing")}let l,s,c,d,f,E,T,S;l=O("padding-left",o),s=O("padding-right",o),c=O("padding-top",o),d=O("padding-bottom",o),a?(f=O("border-left-width",o),E=O("border-right-width",o),T=O("border-top-width",o),S=O("border-bottom-width",o)):f=E=T=S=0,r=Math.max(0,t.clientWidth-l-s-f-E),n=Math.max(0,t.clientHeight-c-d-T-S),i&&t.removeAttribute("style")}}return{pxWidth:r,pxHeight:n}}function O(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function lo(){return He()}function Eo(){return qe()}function Oe(e){let t=e.doctype,o="";return t&&(o="<!DOCTYPE "+t.nodeName,t.publicId?(o+=' PUBLIC "'+t.publicId+'"',t.systemId&&(o+=' "'+t.systemId+'"')):t.systemId&&(o+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(o+=" ["+t.internalSubset+"]"),o+="> "),o+e.documentElement.outerHTML}function fo(e){return e.match(Ze)?e=e.replace(Ze,"$1"):e=e.replace(Xt,"$1"),e.trim()}function uo(e){return Zt[e.toLowerCase().trim()]||e}function w(e,t,o){try{return e.getComputedStyle(t,o)}catch{}}function Ao(e,t){let o=new ro().parseFromString(e,"text/html");o.head||o.documentElement.insertBefore(o.createElement("HEAD"),o.body);let r=o.querySelector("base");return(!r||!r.getAttribute("href"))&&(r&&r.remove(),r=o.createElement("base"),r.setAttribute("href",t),o.head.insertBefore(r,o.head.firstChild)),o}var we={LAZY_SRC_ATTRIBUTE_NAME:J,SINGLE_FILE_UI_ELEMENT_CLASS:Ne},To=10,go="attributes",p=globalThis.browser,h=globalThis.document,ho=globalThis.MutationObserver,_=new Map,Me;p&&p.runtime&&p.runtime.onMessage&&p.runtime.onMessage.addListener&&p.runtime.onMessage.addListener(e=>{if(e.method=="singlefile.lazyTimeout.onTimeout"){let t=_.get(e.type);if(t){_.delete(e.type);try{t.callback()}catch{ye(e.type)}}}});async function ct(e){if(h.documentElement){_.clear();let t=h.body?Math.max(h.body.scrollHeight,h.documentElement.scrollHeight):h.documentElement.scrollHeight,o=h.body?Math.max(h.body.scrollWidth,h.documentElement.scrollWidth):h.documentElement.scrollWidth;if(t>globalThis.innerHeight||o>globalThis.innerWidth){let r=Math.max(t-globalThis.innerHeight*1.5,0),n=Math.max(o-globalThis.innerWidth*1.5,0);if(globalThis.scrollY<r||globalThis.scrollX<n)return po(e)}}}function po(e){return Me=0,new Promise(async t=>{let o,r=new Set,n=new ho(async d=>{d=d.filter(f=>f.type==go),d.length&&d.filter(E=>{if(E.attributeName=="src"&&(E.target.setAttribute(we.LAZY_SRC_ATTRIBUTE_NAME,E.target.src),E.target.addEventListener("load",a)),E.attributeName=="src"||E.attributeName=="srcset"||E.target.tagName&&E.target.tagName.toUpperCase()=="SOURCE")return!E.target.classList||!E.target.classList.contains(we.SINGLE_FILE_UI_ELEMENT_CLASS)}).length&&(o=!0,await X(n,e,c),r.size||await j(n,e,c))});await i(e.loadDeferredImagesMaxIdleTime*2),await X(n,e,c),n.observe(h,{subtree:!0,childList:!0,attributes:!0}),h.addEventListener(se,l),h.addEventListener(ie,s),ze(e);async function i(d){await Z("idleTimeout",async()=>{o?Me<To&&(Me++,P("idleTimeout"),await i(Math.max(500,d/2))):(P("loadTimeout"),P("maxTimeout"),Ce(n,e,c))},d,e.loadDeferredImagesNativeTimeout)}function a(d){let f=d.target;f.removeAttribute(we.LAZY_SRC_ATTRIBUTE_NAME),f.removeEventListener("load",a)}async function l(d){o=!0,await X(n,e,c),await j(n,e,c),d.detail&&r.add(d.detail)}async function s(d){await X(n,e,c),await j(n,e,c),r.delete(d.detail),r.size||await j(n,e,c)}function c(d){n.disconnect(),h.removeEventListener(se,l),h.removeEventListener(ie,s),t(d)}})}async function j(e,t,o){await Z("loadTimeout",()=>Ce(e,t,o),t.loadDeferredImagesMaxIdleTime,t.loadDeferredImagesNativeTimeout)}async function X(e,t,o){await Z("maxTimeout",async()=>{await P("loadTimeout"),await Ce(e,t,o)},t.loadDeferredImagesMaxIdleTime*10,t.loadDeferredImagesNativeTimeout)}async function Ce(e,t,o){await P("idleTimeout"),Je(t),await Z("endTimeout",async()=>{await P("maxTimeout"),o()},t.loadDeferredImagesMaxIdleTime/2,t.loadDeferredImagesNativeTimeout),e.disconnect()}async function Z(e,t,o,r){if(p&&p.runtime&&p.runtime.sendMessage&&!r){if(!_.get(e)||!_.get(e).pending){let n={callback:t,pending:!0};_.set(e,n);try{await p.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:o})}catch{at(e,t,o)}n.pending=!1}}else at(e,t,o)}function at(e,t,o){let r=_.get(e);r&&globalThis.clearTimeout(r),_.set(e,t),globalThis.setTimeout(t,o)}async function P(e){if(p&&p.runtime&&p.runtime.sendMessage)try{await p.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e})}catch{ye(e)}else ye(e)}function ye(e){let t=_.get(e);_.delete(e),t&&globalThis.clearTimeout(t)}var U={ON_BEFORE_CAPTURE_EVENT_NAME:W,ON_AFTER_CAPTURE_EVENT_NAME:Y,WIN_ID_ATTRIBUTE_NAME:ot,WAIT_FOR_USERSCRIPT_PROPERTY_NAME:L,preProcessDoc:K,serialize:Oe,postProcessDoc:Q,getShadowRoot:V},mo='iframe, frame, object[type="text/html"][data]',Io="*",dt="singlefile.frameTree.initRequest",De="singlefile.frameTree.ackInitRequest",Et="singlefile.frameTree.cleanupRequest",ve="singlefile.frameTree.initResponse",lt="*",ft=5e3,_o=1e4,Ro="0",y=".",F=globalThis.window==globalThis.top,N=globalThis.browser,Le=globalThis.top,No=globalThis.MessageChannel,R=globalThis.document,C=globalThis.JSON,So=globalThis.MutationObserver,Oo=globalThis.DOMParser,b=globalThis.sessions;b||(b=globalThis.sessions=new Map);var m;F&&(m=Ro,N&&N.runtime&&N.runtime.onMessage&&N.runtime.onMessage.addListener&&N.runtime.onMessage.addListener(e=>{if(e.method==ve)return Pe(e),Promise.resolve({});if(e.method==De)return $("requestTimeouts",e.sessionId,e.windowId),ht(e.sessionId,e.windowId),Promise.resolve({})}));ut();Se();new So(ut).observe(R,{childList:!0});function ut(){globalThis.addEventListener("message",async e=>{if(typeof e.data=="string"&&e.data.startsWith(v)){e.preventDefault(),e.stopPropagation();let t=C.parse(e.data.substring(v.length));if(t.method==dt)e.source&&ee(e.source,{method:De,windowId:t.windowId,sessionId:t.sessionId}),F||(globalThis.stop(),t.options.loadDeferredImages&&ct(t.options),await Tt(t));else if(t.method==De)$("requestTimeouts",t.sessionId,t.windowId),ht(t.sessionId,t.windowId);else if(t.method==Et)gt(t);else if(t.method==ve&&b.get(t.sessionId)){let o=e.ports[0];o.onmessage=r=>Pe(r.data)}}},!0)}function wo(e){let t=At();return e=C.parse(C.stringify(e)),new Promise(o=>{b.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:r=>{r.sessionId=t,o(r)}}),Tt({windowId:m,sessionId:t,options:e})})}function Mo(e){let t=At();e=C.parse(C.stringify(e)),b.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),Co({windowId:m,sessionId:t,options:e});let o=b.get(t).frames;return o.sessionId=t,o}function yo(e){b.delete(e),gt({windowId:m,sessionId:e,options:{sessionId:e}})}function At(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}function Co(e){let t=e.sessionId;delete globalThis._singleFile_cleaningUp,F||(m=globalThis.frameId=e.windowId),Ue(R,e.options,m,t),F||(k({frames:[Fe(R,globalThis,m,e.options,e.scrolling)],sessionId:t,requestedFrameId:R.documentElement.dataset.requestedFrameId&&m}),delete R.documentElement.dataset.requestedFrameId)}async function Tt(e){let t=e.sessionId;delete globalThis._singleFile_cleaningUp,F||(m=globalThis.frameId=e.windowId),Ue(R,e.options,m,t),F||(k({frames:[Fe(R,globalThis,m,e.options,e.scrolling)],sessionId:t,requestedFrameId:R.documentElement.dataset.requestedFrameId&&m}),delete R.documentElement.dataset.requestedFrameId)}function gt(e){if(!globalThis._singleFile_cleaningUp){globalThis._singleFile_cleaningUp=!0;let t=e.sessionId;pt(te(R),e.windowId,t)}}function Pe(e){e.frames.forEach(o=>$("responseTimeouts",e.sessionId,o.windowId));let t=b.get(e.sessionId);t&&(e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach(r=>{let n=t.frames.find(i=>r.windowId==i.windowId);n||(n={windowId:r.windowId},t.frames.push(n)),n.processed||(n.content=r.content,n.baseURI=r.baseURI,n.title=r.title,n.url=r.url,n.canvases=r.canvases,n.fonts=r.fonts,n.worklets=r.worklets,n.stylesheets=r.stylesheets,n.images=r.images,n.posters=r.posters,n.videos=r.videos,n.usedFonts=r.usedFonts,n.shadowRoots=r.shadowRoots,n.processed=r.processed,n.scrollPosition=r.scrollPosition,n.scrolling=r.scrolling,n.adoptedStyleSheets=r.adoptedStyleSheets)}),t.frames.filter(r=>!r.processed).length||(t.frames=t.frames.sort((r,n)=>n.windowId.split(y).length-r.windowId.split(y).length),t.resolve&&(t.requestedFrameId&&t.frames.forEach(r=>{r.windowId==t.requestedFrameId&&(r.requestedFrame=!0)}),t.resolve(t.frames))))}function Ue(e,t,o,r){let n=te(e);Do(e,n,t,o,r),n.length&&Lo(e,n,t,o,r)}function Do(e,t,o,r,n){let i=[],a;b.get(n)?a=b.get(n).requestTimeouts:(a={},b.set(n,{requestTimeouts:a})),t.forEach((l,s)=>{let c=r+y+s;l.setAttribute(U.WIN_ID_ATTRIBUTE_NAME,c),i.push({windowId:c})}),k({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&r}),t.forEach((l,s)=>{let c=r+y+s;try{ee(l.contentWindow,{method:dt,windowId:c,sessionId:n,options:o,scrolling:l.scrolling})}catch{}a[c]=globalThis.setTimeout(()=>k({frames:[{windowId:c,processed:!0}],sessionId:n}),ft)}),delete e.documentElement.dataset.requestedFrameId}function Lo(e,t,o,r,n){let i=[];t.forEach((a,l)=>{let s=r+y+l,c,d;try{c=a.contentDocument,d=a.contentWindow,d.stop()}catch{}let f=a.getAttribute("srcdoc");if(!c&&f&&(c=new Oo().parseFromString(f,"text/html"),d=globalThis),c)try{$("requestTimeouts",n,s),Ue(c,o,s,n),i.push(Fe(c,d,s,o,a.scrolling))}catch{i.push({windowId:s,processed:!0})}}),k({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&r}),delete e.documentElement.dataset.requestedFrameId}function $(e,t,o){let r=b.get(t);if(r&&r[e]){let n=r[e][o];n&&(globalThis.clearTimeout(n),delete r[e][o])}}function ht(e,t){let o=b.get(e);o&&o.responseTimeouts&&(o.responseTimeouts[t]=globalThis.setTimeout(()=>k({frames:[{windowId:t,processed:!0}],sessionId:e}),_o))}function pt(e,t,o){e.forEach((r,n)=>{let i=t+y+n;r.removeAttribute(U.WIN_ID_ATTRIBUTE_NAME);try{ee(r.contentWindow,{method:Et,windowId:i,sessionId:o})}catch{}}),e.forEach((r,n)=>{let i=t+y+n,a;try{a=r.contentDocument}catch{}if(a)try{pt(te(a),i,o)}catch{}})}function k(e){e.method=ve;try{Le.singlefile.processors.frameTree.initResponse(e)}catch{ee(Le,e,!0)}}function ee(e,t,o){if(e==Le&&N&&N.runtime&&N.runtime.sendMessage)N.runtime.sendMessage(t);else if(o){let r=new No;e.postMessage(v+C.stringify({method:t.method,sessionId:t.sessionId}),lt,[r.port2]),r.port1.postMessage(t)}else e.postMessage(v+C.stringify(t),lt)}function Fe(e,t,o,r,n){let i=U.preProcessDoc(e,t,r),a=U.serialize(e);U.postProcessDoc(e,i.markedElements,i.invalidElements);let l=e.baseURI.split("#")[0];return{windowId:o,content:a,baseURI:l,url:e.documentURI,title:e.title,canvases:i.canvases,fonts:i.fonts,worklets:i.worklets,stylesheets:i.stylesheets,images:i.images,posters:i.posters,videos:i.videos,usedFonts:i.usedFonts,shadowRoots:i.shadowRoots,scrollPosition:i.scrollPosition,scrolling:n,adoptedStyleSheets:i.adoptedStyleSheets,processed:!0}}function te(e){let t=Array.from(e.querySelectorAll(mo));return e.querySelectorAll(Io).forEach(o=>{let r=U.getShadowRoot(o);r&&(t=t.concat(...te(r)))}),t}var vo=["AREA","BASE","BASEFONT","BGSOUND","BR","COL","COMMAND","EMBED","FRAME","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];var Po=[{tagName:"HEAD",accept:e=>!e.childNodes.length||e.childNodes[0].nodeType==1},{tagName:"BODY",accept:e=>!e.childNodes.length}],Uo=[{tagName:"HTML",accept:e=>!e||e.nodeType!=8},{tagName:"HEAD",accept:e=>!e||e.nodeType!=8&&(e.nodeType!=3||!xe(e.textContent))},{tagName:"BODY",accept:e=>!e||e.nodeType!=8},{tagName:"LI",accept:(e,t)=>!e&&t.parentElement&&(A(t.parentElement)=="UL"||A(t.parentElement)=="OL")||e&&["LI"].includes(A(e))},{tagName:"DT",accept:e=>!e||["DT","DD"].includes(A(e))},{tagName:"P",accept:e=>e&&["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DETAILS","DIV","DL","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","PRE","SECTION","TABLE","UL"].includes(A(e))},{tagName:"DD",accept:e=>!e||["DT","DD"].includes(A(e))},{tagName:"RT",accept:e=>!e||["RT","RP"].includes(A(e))},{tagName:"RP",accept:e=>!e||["RT","RP"].includes(A(e))},{tagName:"OPTGROUP",accept:e=>!e||["OPTGROUP"].includes(A(e))},{tagName:"OPTION",accept:e=>!e||["OPTION","OPTGROUP"].includes(A(e))},{tagName:"COLGROUP",accept:e=>!e||e.nodeType!=8&&(e.nodeType!=3||!xe(e.textContent))},{tagName:"CAPTION",accept:e=>!e||e.nodeType!=8&&(e.nodeType!=3||!xe(e.textContent))},{tagName:"THEAD",accept:e=>!e||["TBODY","TFOOT"].includes(A(e))},{tagName:"TBODY",accept:e=>!e||["TBODY","TFOOT"].includes(A(e))},{tagName:"TFOOT",accept:e=>!e},{tagName:"TR",accept:e=>!e||["TR"].includes(A(e))},{tagName:"TD",accept:e=>!e||["TD","TH"].includes(A(e))},{tagName:"TH",accept:e=>!e||["TD","TH"].includes(A(e))}],Fo=["STYLE","SCRIPT","XMP","IFRAME","NOEMBED","NOFRAMES","PLAINTEXT","NOSCRIPT"];function bt(e,t){let o=e.doctype,r="";return o&&(r="<!DOCTYPE "+o.nodeName,o.publicId?(r+=' PUBLIC "'+o.publicId+'"',o.systemId&&(r+=' "'+o.systemId+'"')):o.systemId&&(r+=' SYSTEM "'+o.systemId+'"'),o.internalSubset&&(r+=" ["+o.internalSubset+"]"),r+="> "),r+mt(e.documentElement,t)}function mt(e,t,o){if(e.nodeType==3)return ko(e);if(e.nodeType==8)return xo(e);if(e.nodeType==1)return Bo(e,t,o)}function ko(e){let t=e.parentNode,o;return t&&t.nodeType==1&&(o=A(t)),!o||Fo.includes(o)?o=="SCRIPT"&&(!t.type||t.type=="text/javascript")||o=="STYLE"?e.textContent.replace(/<\//gi,"<\\/").replace(/\/>/gi,"\\/>"):e.textContent:e.textContent.replace(/&/g,"&amp;").replace(/\u00a0/g,"&nbsp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xo(e){return"<!--"+e.textContent+"-->"}function Bo(e,t,o){let r=A(e),n=t&&Po.find(l=>r==A(l)&&l.accept(e)),i="";(!n||e.attributes.length)&&(i="<"+r.toLowerCase(),Array.from(e.attributes).forEach(l=>i+=Vo(l,e,t)),i+=">"),r=="TEMPLATE"&&!e.childNodes.length?i+=e.innerHTML:Array.from(e.childNodes).forEach(l=>i+=mt(l,t,o||r=="svg"));let a=t&&Uo.find(l=>r==A(l)&&l.accept(e.nextSibling,e));return(o||!a&&!vo.includes(r))&&(i+="</"+r.toLowerCase()+">"),i}function Vo(e,t,o){let r=e.name,n="";if(!r.match(/["'>/=]/)){let i=e.value;o&&r=="class"&&(i=Array.from(t.classList).map(d=>d.trim()).join(" "));let a;i=i.replace(/&/g,"&amp;").replace(/\u00a0/g,"&nbsp;"),i.includes('"')&&(i.includes("'")||!o?i=i.replace(/"/g,"&quot;"):a=!0);let l=!o||i.match(/[ \t\n\f\r'"`=<>]/);n+=" ";let s=e.namespaceURI,c=e.localName||r;s?s=="http://www.w3.org/XML/1998/namespace"?n+="xml:"+c:s=="http://www.w3.org/2000/xmlns/"?c==="xmlns"?n+="xmlns":n+="xmlns:"+c:s=="http://www.w3.org/1999/xlink"?n+="xlink:"+c:e.prefix?n+=e.prefix+":"+c:n+=r:n+=r,i!=""&&(n+="=",l&&(n+=a?"'":'"'),n+=i,l&&(n+=a?"'":'"'))}return n}function xe(e){return!!e.match(/^[ \t\n\f\r]/)}function A(e){return e.tagName&&e.tagName.toUpperCase()}var Ho={frameTree:ke},qo={COMMENT_HEADER:ae,COMMENT_HEADER_LEGACY:nt,ON_BEFORE_CAPTURE_EVENT_NAME:W,ON_AFTER_CAPTURE_EVENT_NAME:Y,WAIT_FOR_USERSCRIPT_PROPERTY_NAME:L,preProcessDoc:K,postProcessDoc:Q,serialize(e,t){return bt(e,t)},getShadowRoot:V};return wt(zo);})();
;var zip=(()=>{var tr=(pe,le)=>()=>(le||pe((le={exports:{}}).exports,le),le.exports);var nr=tr((ct,us)=>{((pe,le)=>{typeof ct=="object"&&typeof us<"u"?le(ct):typeof define=="function"&&define.amd?define(["exports"],le):le((pe=typeof globalThis<"u"?globalThis:pe||self).zip={})})(ct,(function(pe){"use strict";let{Array:le,Object:x,String:It,Number:lt,BigInt:Mt,Math:B,Date:ut,Map:hs,Set:sr,Response:Pt,URL:fs,Error:L,Uint8Array:D,Uint16Array:ds,Uint32Array:Ot,DataView:Be,Blob:rr,Promise:ve,TextEncoder:Nt,TextDecoder:Ye,document:ar,crypto:Ie,btoa:Vt,TransformStream:ne,ReadableStream:qt,WritableStream:Me,CompressionStream:jt,DecompressionStream:Gt,navigator:ht,Worker:Ze}=typeof globalThis<"u"?globalThis:this||self;var j=D,fe=ds,ft=Int32Array,Je=new j([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ke=new j([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),dt=new j([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ht=(t,e)=>{for(var n=new fe(31),s=0;31>s;++s)n[s]=e+=1<<t[s-1];var r=new ft(n[30]);for(s=1;30>s;++s)for(var a=n[s];a<n[s+1];++a)r[a]=a-n[s]<<5|s;return{b:n,r}},Qt=Ht(Je,2),Xt=Qt.b,pt=Qt.r;Xt[28]=258,pt[258]=28;for(var $t=Ht(Ke,0),ps=$t.b,Yt=$t.r,wt=new fe(32768),M=0;32768>M;++M){var Ce=(43690&M)>>1|(21845&M)<<1;Ce=(61680&(Ce=(52428&Ce)>>2|(13107&Ce)<<2))>>4|(3855&Ce)<<4,wt[M]=((65280&Ce)>>8|(255&Ce)<<8)>>1}var ge=(t,e,n)=>{for(var s=t.length,r=0,a=new fe(e);s>r;++r)t[r]&&++a[t[r]-1];var i,c=new fe(e);for(r=1;e>r;++r)c[r]=c[r-1]+a[r-1]<<1;if(n){i=new fe(1<<e);var l=15-e;for(r=0;s>r;++r)if(t[r])for(var u=r<<4|t[r],o=e-t[r],f=c[t[r]-1]++<<o,d=f|(1<<o)-1;d>=f;++f)i[wt[f]>>l]=u}else for(i=new fe(s),r=0;s>r;++r)t[r]&&(i[r]=wt[c[t[r]-1]++]>>15-t[r]);return i},Se=new j(288);for(M=0;144>M;++M)Se[M]=8;for(M=144;256>M;++M)Se[M]=9;for(M=256;280>M;++M)Se[M]=7;for(M=280;288>M;++M)Se[M]=8;var Pe=new j(32);for(M=0;32>M;++M)Pe[M]=5;var ws=ge(Se,9,0),gs=ge(Se,9,1),ms=ge(Pe,5,0),ys=ge(Pe,5,1),gt=t=>{for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},we=(t,e,n)=>{var s=e/8|0;return(t[s]|t[s+1]<<8)>>(7&e)&n},mt=(t,e)=>{var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(7&e)},yt=t=>(t+7)/8|0,Oe=(t,e,n)=>((e==null||0>e)&&(e=0),(n==null||n>t.length)&&(n=t.length),new j(t.subarray(e,n))),bs=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ie=(t,e,n)=>{var s=new L(e||bs[t]);if(s.code=t,L.captureStackTrace&&L.captureStackTrace(s,ie),!n)throw s;return s},ke=(t,e,n)=>{n<<=7&e;var s=e/8|0;t[s]|=n,t[s+1]|=n>>8},Ne=(t,e,n)=>{n<<=7&e;var s=e/8|0;t[s]|=n,t[s+1]|=n>>8,t[s+2]|=n>>16},bt=(t,e)=>{for(var n=[],s=0;s<t.length;++s)t[s]&&n.push({s,f:t[s]});var r=n.length,a=n.slice();if(!r)return{t:en,l:0};if(r==1){var i=new j(n[0].s+1);return i[n[0].s]=1,{t:i,l:1}}n.sort(((z,U)=>z.f-U.f)),n.push({s:-1,f:25001});var c=n[0],l=n[1],u=0,o=1,f=2;for(n[0]={s:-1,f:c.f+l.f,l:c,r:l};o!=r-1;)c=n[n[u].f<n[f].f?u++:f++],l=n[u!=o&&n[u].f<n[f].f?u++:f++],n[o++]={s:-1,f:c.f+l.f,l:c,r:l};var d=a[0].s;for(s=1;r>s;++s)a[s].s>d&&(d=a[s].s);var h=new fe(d+1),p=vt(n[o-1],h,0);if(p>e){s=0;var g=0,y=p-e,w=1<<y;for(a.sort(((z,U)=>h[U.s]-h[z.s]||z.f-U.f));r>s;++s){var m=a[s].s;if(h[m]<=e)break;g+=w-(1<<p-h[m]),h[m]=e}for(g>>=y;g>0;){var b=a[s].s;h[b]<e?g-=1<<e-h[b]++-1:++s}for(;s>=0&&g;--s){var v=a[s].s;h[v]==e&&(--h[v],++g)}p=e}return{t:new j(h),l:p}},vt=(t,e,n)=>t.s==-1?B.max(vt(t.l,e,n+1),vt(t.r,e,n+1)):e[t.s]=n,Zt=t=>{for(var e=t.length;e&&!t[--e];);for(var n=new fe(++e),s=0,r=t[0],a=1,i=l=>{n[s++]=l},c=1;e>=c;++c)if(t[c]==r&&c!=e)++a;else{if(!r&&a>2){for(;a>138;a-=138)i(32754);a>2&&(i(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(i(r),--a;a>6;a-=6)i(8304);a>2&&(i(a-3<<5|8208),a=0)}for(;a--;)i(r);a=1,r=t[c]}return{c:n.subarray(0,s),n:e}},Ve=(t,e)=>{for(var n=0,s=0;s<e.length;++s)n+=t[s]*e[s];return n},Jt=(t,e,n)=>{var s=n.length,r=yt(e+2);t[r]=255&s,t[r+1]=s>>8,t[r+2]=255^t[r],t[r+3]=255^t[r+1];for(var a=0;s>a;++a)t[r+a+4]=n[a];return 8*(r+4+s)},Kt=(t,e,n,s,r,a,i,c,l,u,o)=>{ke(e,o++,n),++r[256];for(var f=bt(r,15),d=f.t,h=f.l,p=bt(a,15),g=p.t,y=p.l,w=Zt(d),m=w.c,b=w.n,v=Zt(g),z=v.c,U=v.n,T=new fe(19),S=0;S<m.length;++S)++T[31&m[S]];for(S=0;S<z.length;++S)++T[31&z[S]];for(var F=bt(T,7),k=F.t,A=F.l,C=19;C>4&&!k[dt[C-1]];--C);var P,V,X,E,W=u+5<<3,R=Ve(r,Se)+Ve(a,Pe)+i,_=Ve(r,d)+Ve(a,g)+i+14+3*C+Ve(T,k)+2*T[16]+3*T[17]+7*T[18];if(l>=0&&R>=W&&_>=W)return Jt(e,o,t.subarray(l,l+u));if(ke(e,o,1+(R>_)),o+=2,R>_){P=ge(d,h,0),V=d,X=ge(g,y,0),E=g;var Q=ge(k,A,0);for(ke(e,o,b-257),ke(e,o+5,U-1),ke(e,o+10,C-4),o+=14,S=0;C>S;++S)ke(e,o+3*S,k[dt[S]]);o+=3*C;for(var H=[m,z],ee=0;2>ee;++ee){var re=H[ee];for(S=0;S<re.length;++S){var O=31&re[S];ke(e,o,Q[O]),o+=k[O],O>15&&(ke(e,o,re[S]>>5&127),o+=re[S]>>12)}}}else P=ws,V=Se,X=ms,E=Pe;for(S=0;c>S;++S){var I=s[S];if(I>255){Ne(e,o,P[257+(O=I>>18&31)]),o+=V[O+257],O>7&&(ke(e,o,I>>23&31),o+=Je[O]);var te=31&I;Ne(e,o,X[te]),o+=E[te],te>3&&(Ne(e,o,I>>5&8191),o+=Ke[te])}else Ne(e,o,P[I]),o+=V[I]}return Ne(e,o,P[256]),o+V[256]},vs=new ft([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),en=new j(0),ks=(function(){function t(e,n){if(typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new j(98304),this.o.dictionary){var s=this.o.dictionary.subarray(-32768);this.b.set(s,32768-s.length),this.s.i=32768-s.length}}return t.prototype.p=function(e,n){this.ondata(((s,r,a,i,c)=>{if(!c&&(c={l:1},r.dictionary)){var l=r.dictionary.subarray(-32768),u=new j(l.length+s.length);u.set(l),u.set(s,l.length),s=u,c.w=l.length}return((o,f,d,h,p,g)=>{var y=g.z||o.length,w=new j(0+y+5*(1+B.ceil(y/7e3))+0),m=w.subarray(0,w.length-0),b=g.l,v=7&(g.r||0);if(f){v&&(m[0]=g.r>>3);for(var z=vs[f-1],U=z>>13,T=8191&z,S=(1<<d)-1,F=g.p||new fe(32768),k=g.h||new fe(S+1),A=B.ceil(d/3),C=2*A,P=Bt=>(o[Bt]^o[Bt+1]<<A^o[Bt+2]<<C)&S,V=new ft(25e3),X=new fe(288),E=new fe(32),W=0,R=0,_=g.i||0,Q=0,H=g.w||0,ee=0;y>_+2;++_){var re=P(_),O=32767&_,I=k[re];if(F[O]=I,k[re]=O,_>=H){var te=y-_;if((W>7e3||Q>24576)&&(te>423||!b)){v=Kt(o,m,0,V,X,E,R,Q,ee,_-ee,v),Q=W=R=0,ee=_;for(var q=0;286>q;++q)X[q]=0;for(q=0;30>q;++q)E[q]=0}var $=2,he=0,be=T,J=O-I&32767;if(te>2&&re==P(_-J))for(var ae=B.min(U,te)-1,N=B.min(32767,_),We=B.min(258,te);N>=J&&--be&&O!=I;){if(o[_+$]==o[_+$-J]){for(var ce=0;We>ce&&o[_+ce]==o[_+ce-J];++ce);if(ce>$){if($=ce,he=J,ce>ae)break;var Xe=B.min(J,ce-2),$e=0;for(q=0;Xe>q;++q){var Et=_-J+q&32767,os=Et-F[Et]&32767;os>$e&&($e=os,I=Et)}}}J+=(O=I)-(I=F[O])&32767}if(he){V[Q++]=268435456|pt[$]<<18|Yt[he];var cs=31&pt[$],ls=31&Yt[he];R+=Je[cs]+Ke[ls],++X[257+cs],++E[ls],H=_+$,++W}else V[Q++]=o[_],++X[o[_]]}}for(_=B.max(_,H);y>_;++_)V[Q++]=o[_],++X[o[_]];v=Kt(o,m,b,V,X,E,R,Q,ee,_-ee,v),b||(g.r=7&v|m[v/8|0]<<3,v-=7,g.h=k,g.p=F,g.i=_,g.w=H)}else{for(_=g.w||0;y+b>_;_+=65535){var Rt=_+65535;y>Rt||(m[v/8|0]=b,Rt=y),v=Jt(m,v+1,o.subarray(_,Rt))}g.i=y}return Oe(w,0,0+yt(v)+0)})(s,r.level==null?6:r.level,r.mem==null?c.l?B.ceil(1.5*B.max(8,B.min(13,B.log(s.length)))):20:12+r.mem,0,0,c)})(e,this.o,0,0,this.s),n)},t.prototype.push=function(e,n){this.ondata||ie(5),this.s.l&&ie(4);var s=e.length+this.s.z;if(s>this.b.length){if(s>2*this.b.length-32768){var r=new j(-32768&s);r.set(this.b.subarray(0,this.s.z)),this.b=r}var a=this.b.length-this.s.z;this.b.set(e.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(a),32768),this.s.z=e.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=1&n,(this.s.z>this.s.w+8191||n)&&(this.p(this.b,n||!1),this.s.w=this.s.i,this.s.i-=2)},t.prototype.flush=function(){this.ondata||ie(5),this.s.l&&ie(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},t})(),Ss=(function(){function t(e,n){typeof e=="function"&&(n=e,e={}),this.ondata=n;var s=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:s?s.length:0},this.o=new j(32768),this.p=new j(0),s&&this.o.set(s)}return t.prototype.e=function(e){if(this.ondata||ie(5),this.d&&ie(4),this.p.length){if(e.length){var n=new j(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length),this.p=n}}else this.p=e},t.prototype.c=function(e){this.s.i=+(this.d=e||!1);var n=this.s.b,s=((r,a,i)=>{var c=r.length;if(!c||a.f&&!a.l)return i||new j(0);var l=!i,u=l||a.i!=2,o=a.i;l&&(i=new j(3*c));var f=N=>{var We=i.length;if(N>We){var ce=new j(B.max(2*We,N));ce.set(i),i=ce}},d=a.f||0,h=a.p||0,p=a.b||0,g=a.l,y=a.d,w=a.m,m=a.n,b=8*c;do{if(!g){d=we(r,h,1);var v=we(r,h+1,3);if(h+=3,!v){var z=r[(E=yt(h)+4)-4]|r[E-3]<<8,U=E+z;if(U>c){o&&ie(0);break}u&&f(p+z),i.set(r.subarray(E,U),p),a.b=p+=z,a.p=h=8*U,a.f=d;continue}if(v==1)g=gs,y=ys,w=9,m=5;else if(v==2){var T=we(r,h,31)+257,S=we(r,h+10,15)+4,F=T+we(r,h+5,31)+1;h+=14;for(var k=new j(F),A=new j(19),C=0;S>C;++C)A[dt[C]]=we(r,h+3*C,7);h+=3*S;var P=gt(A),V=(1<<P)-1,X=ge(A,P,1);for(C=0;F>C;){var E,W=X[we(r,h,V)];if(h+=15&W,16>(E=W>>4))k[C++]=E;else{var R=0,_=0;for(E==16?(_=3+we(r,h,3),h+=2,R=k[C-1]):E==17?(_=3+we(r,h,7),h+=3):E==18&&(_=11+we(r,h,127),h+=7);_--;)k[C++]=R}}var Q=k.subarray(0,T),H=k.subarray(T);w=gt(Q),m=gt(H),g=ge(Q,w,1),y=ge(H,m,1)}else ie(1);if(h>b){o&&ie(0);break}}u&&f(p+131072);for(var ee=(1<<w)-1,re=(1<<m)-1,O=h;;O=h){var I=(R=g[mt(r,h)&ee])>>4;if((h+=15&R)>b){o&&ie(0);break}if(R||ie(2),256>I)i[p++]=I;else{if(I==256){O=h,g=null;break}var te=I-254;if(I>264){var q=Je[C=I-257];te=we(r,h,(1<<q)-1)+Xt[C],h+=q}var $=y[mt(r,h)&re],he=$>>4;if($||ie(3),h+=15&$,H=ps[he],he>3&&(q=Ke[he],H+=mt(r,h)&(1<<q)-1,h+=q),h>b){o&&ie(0);break}u&&f(p+131072);var be=p+te;if(H>p){var J=0-H,ae=B.min(H,be);for(0>J+p&&ie(3);ae>p;++p)i[p]=(void 0)[J+p]}for(;be>p;++p)i[p]=i[p-H]}}a.l=g,a.p=O,a.b=p,a.f=d,g&&(d=1,a.m=w,a.d=y,a.n=m)}while(!d);return p!=i.length&&l?Oe(i,0,p):i.subarray(0,p)})(this.p,this.s,this.o);this.ondata(Oe(s,n,this.s.b),this.d),this.o=Oe(s,this.s.b-32768),this.s.b=this.o.length,this.p=Oe(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t})(),zs=Ye!==void 0&&new Ye;try{zs.decode(en,{stream:!0})}catch{}let Ue=4294967295,Te=65535,tn=33639248,nn=101075792,K=void 0,ze="undefined",Ae="function";function sn(t,e,n){return class{constructor(r){let a=this;var i,c;i=r,c="level",(typeof x.hasOwn===Ae?x.hasOwn(i,c):i.hasOwnProperty(c))&&r.level===K&&delete r.level,a.codec=new t(x.assign({},e,r)),n(a.codec,(l=>{if(a.pendingData){let u=a.pendingData;a.pendingData=new D(u.length+l.length);let{pendingData:o}=a;o.set(u,0),o.set(l,u.length)}else a.pendingData=new D(l)}))}append(r){return this.codec.push(r),s(this)}flush(){return this.codec.push(new D,!0),s(this)}};function s(r){if(r.pendingData){let a=r.pendingData;return r.pendingData=null,a}return new D}}let{Deflate:ir,Inflate:_s}=((t,e={},n)=>({Deflate:sn(t.Deflate,e.deflate,n),Inflate:sn(t.Inflate,e.inflate,n)}))({Deflate:ks,Inflate:Ss},K,((t,e)=>t.ondata=e));class rn{constructor(e){return class extends ne{constructor(n,s){let r=new e(s);super({transform(a,i){i.enqueue(r.append(a))},flush(a){let i=r.flush();i&&a.enqueue(i)}})}}}}let an=2;try{typeof ht!=ze&&ht.hardwareConcurrency&&(an=ht.hardwareConcurrency)}catch{}let xs={chunkSize:524288,maxWorkers:an,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:K,CompressionStreamNative:typeof jt!=ze&&jt,DecompressionStreamNative:typeof Gt!=ze&&Gt},_e=x.assign({},xs);function on(t){let{baseURL:e,chunkSize:n,maxWorkers:s,terminateWorkerTimeout:r,useCompressionStream:a,useWebWorkers:i,Deflate:c,Inflate:l,CompressionStream:u,DecompressionStream:o,workerScripts:f}=t;if(xe("baseURL",e),xe("chunkSize",n),xe("maxWorkers",s),xe("terminateWorkerTimeout",r),xe("useCompressionStream",a),xe("useWebWorkers",i),c&&(_e.CompressionStream=new rn(c)),l&&(_e.DecompressionStream=new rn(l)),xe("CompressionStream",u),xe("DecompressionStream",o),f!==K){let{deflate:d,inflate:h}=f;if((d||h)&&(_e.workerScripts||(_e.workerScripts={})),d){if(!le.isArray(d))throw new L("workerScripts.deflate must be an array");_e.workerScripts.deflate=d}if(h){if(!le.isArray(h))throw new L("workerScripts.inflate must be an array");_e.workerScripts.inflate=h}}}function xe(t,e){e!==K&&(_e[t]=e)}let Fs=65536,kt="writable";class et{constructor(){this.size=0}init(){this.initialized=!0}}class cn extends et{get readable(){let e=this,{chunkSize:n=Fs}=e,s=new qt({start(){this.chunkOffset=0},async pull(r){let{offset:a=0,size:i,diskNumberStart:c}=s,{chunkOffset:l}=this;r.enqueue(await se(e,a+l,B.min(n,i-l),c)),l+n>i?r.close():this.chunkOffset+=n}});return s}}class Ws extends et{constructor(){super();let e=this,n=new Me({write:s=>e.writeUint8Array(s)});x.defineProperty(e,kt,{get:()=>n})}writeUint8Array(){}}class ln extends cn{constructor(e){super(),x.assign(this,{blob:e,size:e.size})}async readUint8Array(e,n){let s=this,r=e+n,i=await(e||r<s.size?s.blob.slice(e,r):s.blob).arrayBuffer();return i.byteLength>n&&(i=i.slice(e,r)),new D(i)}}class un extends et{constructor(e){super();let n=new ne,s=[];e&&s.push(["Content-Type",e]),x.defineProperty(this,kt,{get:()=>n.writable}),this.blob=new Pt(n.readable,{headers:s}).blob()}getData(){return this.blob}}class Cs extends cn{constructor(e){super(),this.readers=e}async init(){let e=this,{readers:n}=e;e.lastDiskNumber=0,e.lastDiskOffset=0,await ve.all(n.map((async(s,r)=>{await s.init(),r!=n.length-1&&(e.lastDiskOffset+=s.size),e.size+=s.size}))),super.init()}async readUint8Array(e,n,s=0){let r=this,{readers:a}=this,i,c=s;c==-1&&(c=a.length-1);let l=e;for(;l>=a[c].size;)l-=a[c].size,c++;let u=a[c],o=u.size;if(l+n>o){let f=o-l;i=new D(n),i.set(await se(u,l,f)),i.set(await r.readUint8Array(e+f,n-f,s),f)}else i=await se(u,l,n);return r.lastDiskNumber=B.max(c,r.lastDiskNumber),i}}class hn extends et{constructor(e,n=4294967295){super();let s=this,r,a,i;x.assign(s,{diskNumber:0,diskOffset:0,size:0,maxSize:n,availableSize:n});let c=new Me({async write(o){let{availableSize:f}=s;if(i)o.length<f?await l(o):(await l(o.slice(0,f)),await u(),s.diskOffset+=r.size,s.diskNumber++,i=null,await this.write(o.slice(f)));else{let{value:d,done:h}=await e.next();if(h&&!d)throw new L("Writer iterator completed too soon");r=d,r.size=0,r.maxSize&&(s.maxSize=r.maxSize),s.availableSize=s.maxSize,await tt(r),a=d.writable,i=a.getWriter(),await this.write(o)}},async close(){await i.ready,await u()}});async function l(o){let f=o.length;f&&(await i.ready,await i.write(o),r.size+=f,s.size+=f,s.availableSize-=f)}async function u(){a.size=r.size,await i.close()}x.defineProperty(s,kt,{get:()=>c})}}async function tt(t,e){if(!t.init||t.initialized)return ve.resolve();await t.init(e)}function Us(t){return le.isArray(t)&&(t=new Cs(t)),t instanceof qt&&(t={readable:t}),t}function se(t,e,n,s){return t.readUint8Array(e,n,s)}let fn=[];for(let t=0;256>t;t++){let e=t;for(let n=0;8>n;n++)1&e?e=e>>>1^3988292384:e>>>=1;fn[t]=e}class nt{constructor(e){this.crc=e||-1}append(e){let n=0|this.crc;for(let s=0,r=0|e.length;r>s;s++)n=n>>>8^fn[255&(n^e[s])];this.crc=n}get(){return~this.crc}}class dn extends ne{constructor(){let e,n=new nt;super({transform(s,r){n.append(s),r.enqueue(s)},flush(){let s=new D(4);new Be(s.buffer).setUint32(0,n.get()),e.value=s}}),e=this}}let oe={concat(t,e){if(t.length===0||e.length===0)return t.concat(e);let n=t[t.length-1],s=oe.getPartial(n);return s===32?t.concat(e):oe._shiftRight(e,s,0|n,t.slice(0,t.length-1))},bitLength(t){let e=t.length;if(e===0)return 0;let n=t[e-1];return 32*(e-1)+oe.getPartial(n)},clamp(t,e){if(32*t.length<e)return t;let n=(t=t.slice(0,B.ceil(e/32))).length;return e&=31,n>0&&e&&(t[n-1]=oe.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:(t,e,n)=>t===32?e:(n?0|e:e<<32-t)+1099511627776*t,getPartial:t=>B.round(t/1099511627776)||32,_shiftRight(t,e,n,s){for(s===void 0&&(s=[]);e>=32;e-=32)s.push(n),n=0;if(e===0)return s.concat(t);for(let i=0;i<t.length;i++)s.push(n|t[i]>>>e),n=t[i]<<32-e;let r=t.length?t[t.length-1]:0,a=oe.getPartial(r);return s.push(oe.partial(e+a&31,e+a>32?n:s.pop(),1)),s}},st={bytes:{fromBits(t){let e=oe.bitLength(t)/8,n=new D(e),s;for(let r=0;e>r;r++)3&r||(s=t[r/4]),n[r]=s>>>24,s<<=8;return n},toBits(t){let e=[],n,s=0;for(n=0;n<t.length;n++)s=s<<8|t[n],3&~n||(e.push(s),s=0);return 3&n&&e.push(oe.partial(8*(3&n),s)),e}}},Ts=class{constructor(t){let e=this;e.blockSize=512,e._init=[1732584193,4023233417,2562383102,271733878,3285377520],e._key=[1518500249,1859775393,2400959708,3395469782],t?(e._h=t._h.slice(0),e._buffer=t._buffer.slice(0),e._length=t._length):e.reset()}reset(){let t=this;return t._h=t._init.slice(0),t._buffer=[],t._length=0,t}update(t){let e=this;typeof t=="string"&&(t=st.utf8String.toBits(t));let n=e._buffer=oe.concat(e._buffer,t),s=e._length,r=e._length=s+oe.bitLength(t);if(r>9007199254740991)throw new L("Cannot hash more than 2^53 - 1 bits");let a=new Ot(n),i=0;for(let c=e.blockSize+s-(e.blockSize+s&e.blockSize-1);r>=c;c+=e.blockSize)e._block(a.subarray(16*i,16*(i+1))),i+=1;return n.splice(0,16*i),e}finalize(){let t=this,e=t._buffer,n=t._h;e=oe.concat(e,[oe.partial(1,1)]);for(let s=e.length+2;15&s;s++)e.push(0);for(e.push(B.floor(t._length/4294967296)),e.push(0|t._length);e.length;)t._block(e.splice(0,16));return t.reset(),n}_f(t,e,n,s){return t>19?t>39?t>59?t>79?void 0:e^n^s:e&n|e&s|n&s:e^n^s:e&n|~e&s}_S(t,e){return e<<t|e>>>32-t}_block(t){let e=this,n=e._h,s=le(80);for(let u=0;16>u;u++)s[u]=t[u];let r=n[0],a=n[1],i=n[2],c=n[3],l=n[4];for(let u=0;79>=u;u++){16>u||(s[u]=e._S(1,s[u-3]^s[u-8]^s[u-14]^s[u-16]));let o=e._S(5,r)+e._f(u,a,i,c)+l+s[u]+e._key[B.floor(u/20)]|0;l=c,c=i,i=e._S(30,a),a=r,r=o}n[0]=n[0]+r|0,n[1]=n[1]+a|0,n[2]=n[2]+i|0,n[3]=n[3]+c|0,n[4]=n[4]+l|0}},Ds={getRandomValues(t){let e=new Ot(t.buffer),n=s=>{let r=987654321,a=4294967295;return()=>(r=36969*(65535&r)+(r>>16)&a,(((r<<16)+(s=18e3*(65535&s)+(s>>16)&a)&a)/4294967296+.5)*(B.random()>.5?1:-1))};for(let s,r=0;r<t.length;r+=4){let a=n(4294967296*(s||B.random()));s=987654071*a(),e[r/4]=4294967296*a()|0}return t}},Le={importKey:t=>new Le.hmacSha1(st.bytes.toBits(t)),pbkdf2(t,e,n,s){if(n=n||1e4,0>s||0>n)throw new L("invalid params to pbkdf2");let r=1+(s>>5)<<2,a,i,c,l,u,o=new ArrayBuffer(r),f=new Be(o),d=0,h=oe;for(e=st.bytes.toBits(e),u=1;(r||1)>d;u++){for(a=i=t.encrypt(h.concat(e,[u])),c=1;n>c;c++)for(i=t.encrypt(i),l=0;l<i.length;l++)a[l]^=i[l];for(c=0;(r||1)>d&&c<a.length;c++)f.setInt32(d,a[c]),d+=4}return o.slice(0,s/8)},hmacSha1:class{constructor(t){let e=this,n=e._hash=Ts,s=[[],[]];e._baseHash=[new n,new n];let r=e._baseHash[0].blockSize/32;t.length>r&&(t=new n().update(t).finalize());for(let a=0;r>a;a++)s[0][a]=909522486^t[a],s[1][a]=1549556828^t[a];e._baseHash[0].update(s[0]),e._baseHash[1].update(s[1]),e._resultHash=new n(e._baseHash[0])}reset(){let t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1}update(t){this._updated=!0,this._resultHash.update(t)}digest(){let t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}encrypt(t){if(this._updated)throw new L("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}}},As=typeof Ie!=ze&&typeof Ie.getRandomValues==Ae,pn="Invalid password",wn="Invalid signature",St="zipjs-abort-check-password";function gn(t){return As?Ie.getRandomValues(t):Ds.getRandomValues(t)}let Ee=16,mn={name:"PBKDF2"},Ls=x.assign({hash:{name:"HMAC"}},mn),zt=x.assign({iterations:1e3,hash:{name:"SHA-1"}},mn),Es=["deriveBits"],qe=[8,12,16],je=[16,24,32],Fe=10,Rs=[0,0,0,0],rt=typeof Ie!=ze,Ge=rt&&Ie.subtle,yn=rt&&typeof Ge!=ze,me=st.bytes,Bs=class{constructor(t){let e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();let n=e._tables[0][4],s=e._tables[1],r=t.length,a,i,c,l=1;if(r!==4&&r!==6&&r!==8)throw new L("invalid aes key size");for(e._key=[i=t.slice(0),c=[]],a=r;4*r+28>a;a++){let u=i[a-1];(a%r==0||r===8&&a%r==4)&&(u=n[u>>>24]<<24^n[u>>16&255]<<16^n[u>>8&255]<<8^n[255&u],a%r==0&&(u=u<<8^u>>>24^l<<24,l=l<<1^283*(l>>7))),i[a]=i[a-r]^u}for(let u=0;a;u++,a--){let o=i[3&u?a:a-4];c[u]=4>=a||4>u?o:s[0][n[o>>>24]]^s[1][n[o>>16&255]]^s[2][n[o>>8&255]]^s[3][n[255&o]]}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){let t=this._tables[0],e=this._tables[1],n=t[4],s=e[4],r=[],a=[],i,c,l,u;for(let o=0;256>o;o++)a[(r[o]=o<<1^283*(o>>7))^o]=o;for(let o=i=0;!n[o];o^=c||1,i=a[i]||1){let f=i^i<<1^i<<2^i<<3^i<<4;f=f>>8^255&f^99,n[o]=f,s[f]=o,u=r[l=r[c=r[o]]];let d=16843009*u^65537*l^257*c^16843008*o,h=257*r[f]^16843008*f;for(let p=0;4>p;p++)t[p][o]=h=h<<24^h>>>8,e[p][f]=d=d<<24^d>>>8}for(let o=0;5>o;o++)t[o]=t[o].slice(0),e[o]=e[o].slice(0)}_crypt(t,e){if(t.length!==4)throw new L("invalid aes block size");let n=this._key[e],s=n.length/4-2,r=[0,0,0,0],a=this._tables[e],i=a[0],c=a[1],l=a[2],u=a[3],o=a[4],f,d,h,p=t[0]^n[0],g=t[e?3:1]^n[1],y=t[2]^n[2],w=t[e?1:3]^n[3],m=4;for(let b=0;s>b;b++)f=i[p>>>24]^c[g>>16&255]^l[y>>8&255]^u[255&w]^n[m],d=i[g>>>24]^c[y>>16&255]^l[w>>8&255]^u[255&p]^n[m+1],h=i[y>>>24]^c[w>>16&255]^l[p>>8&255]^u[255&g]^n[m+2],w=i[w>>>24]^c[p>>16&255]^l[g>>8&255]^u[255&y]^n[m+3],m+=4,p=f,g=d,y=h;for(let b=0;4>b;b++)r[e?3&-b:b]=o[p>>>24]<<24^o[g>>16&255]<<16^o[y>>8&255]<<8^o[255&w]^n[m++],f=p,p=g,g=y,y=w,w=f;return r}},Is=class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e}reset(){this._iv=this._initIv}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if(255&~(t>>24))t+=1<<24;else{let e=t>>16&255,n=t>>8&255,s=255&t;e===255?(e=0,n===255?(n=0,s===255?s=0:++s):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=s}return t}incCounter(t){(t[0]=this.incWord(t[0]))===0&&(t[1]=this.incWord(t[1]))}calculate(t,e,n){let s;if(!(s=e.length))return[];let r=oe.bitLength(e);for(let a=0;s>a;a+=4){this.incCounter(n);let i=t.encrypt(n);e[a]^=i[0],e[a+1]^=i[1],e[a+2]^=i[2],e[a+3]^=i[3]}return oe.clamp(e,r)}},Ms=Le.hmacSha1,bn=rt&&yn&&typeof Ge.importKey==Ae,vn=rt&&yn&&typeof Ge.deriveBits==Ae;class Ps extends ne{constructor({password:e,rawPassword:n,signed:s,encryptionStrength:r,checkPasswordOnly:a}){super({start(){x.assign(this,{ready:new ve((i=>this.resolveReady=i)),password:zn(e,n),signed:s,strength:r-1,pending:new D})},async transform(i,c){let l=this,{password:u,strength:o,resolveReady:f,ready:d}=l;u?(await(async(p,g,y,w)=>{let m=await Sn(p,g,y,de(w,0,qe[g])),b=de(w,qe[g]);if(m[0]!=b[0]||m[1]!=b[1])throw new L(pn)})(l,o,u,de(i,0,qe[o]+2)),i=de(i,qe[o]+2),a?c.error(new L(St)):f()):await d;let h=new D(i.length-Fe-(i.length-Fe)%Ee);c.enqueue(kn(l,i,h,0,Fe,!0))},async flush(i){let{signed:c,ctr:l,hmac:u,pending:o,ready:f}=this;if(u&&l){await f;let d=de(o,0,o.length-Fe),h=de(o,o.length-Fe),p=new D;if(d.length){let g=Qe(me,d);u.update(g);let y=l.update(g);p=He(me,y)}if(c){let g=de(He(me,u.digest()),0,Fe);for(let y=0;Fe>y;y++)if(g[y]!=h[y])throw new L(wn)}i.enqueue(p)}}})}}class Os extends ne{constructor({password:e,rawPassword:n,encryptionStrength:s}){let r;super({start(){x.assign(this,{ready:new ve((a=>this.resolveReady=a)),password:zn(e,n),strength:s-1,pending:new D})},async transform(a,i){let c=this,{password:l,strength:u,resolveReady:o,ready:f}=c,d=new D;l?(d=await(async(p,g,y)=>{let w=gn(new D(qe[g]));return _t(w,await Sn(p,g,y,w))})(c,u,l),o()):await f;let h=new D(d.length+a.length-a.length%Ee);h.set(d,0),i.enqueue(kn(c,a,h,d.length,0))},async flush(a){let{ctr:i,hmac:c,pending:l,ready:u}=this;if(c&&i){await u;let o=new D;if(l.length){let f=i.update(Qe(me,l));c.update(f),o=He(me,f)}r.signature=He(me,c.digest()).slice(0,Fe),a.enqueue(_t(o,r.signature))}}}),r=this}}function kn(t,e,n,s,r,a){let{ctr:i,hmac:c,pending:l}=t,u=e.length-r,o;for(l.length&&(e=_t(l,e),n=((f,d)=>{if(d&&d>f.length){let h=f;(f=new D(d)).set(h,0)}return f})(n,u-u%Ee)),o=0;u-Ee>=o;o+=Ee){let f=Qe(me,de(e,o,o+Ee));a&&c.update(f);let d=i.update(f);a||c.update(d),n.set(He(me,d),o+s)}return t.pending=de(e,o),n}async function Sn(t,e,n,s){t.password=null;let r=await(async(o,f,d,h,p)=>{if(!bn)return Le.importKey(f);try{return await Ge.importKey("raw",f,d,!1,p)}catch{return bn=!1,Le.importKey(f)}})(0,n,Ls,0,Es),a=await(async(o,f,d)=>{if(!vn)return Le.pbkdf2(f,o.salt,zt.iterations,d);try{return await Ge.deriveBits(o,f,d)}catch{return vn=!1,Le.pbkdf2(f,o.salt,zt.iterations,d)}})(x.assign({salt:s},zt),r,8*(2*je[e]+2)),i=new D(a),c=Qe(me,de(i,0,je[e])),l=Qe(me,de(i,je[e],2*je[e])),u=de(i,2*je[e]);return x.assign(t,{keys:{key:c,authentication:l,passwordVerification:u},ctr:new Is(new Bs(c),le.from(Rs)),hmac:new Ms(l)}),u}function zn(t,e){return e===K?(n=>{if(typeof Nt==ze){let s=new D((n=unescape(encodeURIComponent(n))).length);for(let r=0;r<s.length;r++)s[r]=n.charCodeAt(r);return s}return new Nt().encode(n)})(t):e}function _t(t,e){let n=t;return t.length+e.length&&(n=new D(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function de(t,e,n){return t.subarray(e,n)}function He(t,e){return t.fromBits(e)}function Qe(t,e){return t.toBits(e)}class Ns extends ne{constructor({password:e,passwordVerification:n,checkPasswordOnly:s}){super({start(){x.assign(this,{password:e,passwordVerification:n}),Fn(this,e)},transform(r,a){let i=this;if(i.password){let c=_n(i,r.subarray(0,12));if(i.password=null,c[11]!=i.passwordVerification)throw new L(pn);r=r.subarray(12)}s?a.error(new L(St)):a.enqueue(_n(i,r))}})}}class Vs extends ne{constructor({password:e,passwordVerification:n}){super({start(){x.assign(this,{password:e,passwordVerification:n}),Fn(this,e)},transform(s,r){let a=this,i,c;if(a.password){a.password=null;let l=gn(new D(12));l[11]=a.passwordVerification,i=new D(s.length+l.length),i.set(xn(a,l),0),c=12}else i=new D(s.length),c=0;i.set(xn(a,s),c),r.enqueue(i)}})}}function _n(t,e){let n=new D(e.length);for(let s=0;s<e.length;s++)n[s]=Wn(t)^e[s],xt(t,n[s]);return n}function xn(t,e){let n=new D(e.length);for(let s=0;s<e.length;s++)n[s]=Wn(t)^e[s],xt(t,e[s]);return n}function Fn(t,e){let n=[305419896,591751049,878082192];x.assign(t,{keys:n,crcKey0:new nt(n[0]),crcKey2:new nt(n[2])});for(let s=0;s<e.length;s++)xt(t,e.charCodeAt(s))}function xt(t,e){let[n,s,r]=t.keys;t.crcKey0.append([e]),n=~t.crcKey0.get(),s=Un(B.imul(Un(s+Cn(n)),134775813)+1),t.crcKey2.append([s>>>24]),r=~t.crcKey2.get(),t.keys=[n,s,r]}function Wn(t){let e=2|t.keys[2];return Cn(B.imul(e,1^e)>>>8)}function Cn(t){return 255&t}function Un(t){return 4294967295&t}let Tn="deflate-raw";class qs extends ne{constructor(e,{chunkSize:n,CompressionStream:s,CompressionStreamNative:r}){super({});let{compressed:a,encrypted:i,useCompressionStream:c,zipCrypto:l,signed:u,level:o}=e,f=this,d,h,p=Dn(super.readable);i&&!l||!u||(d=new dn,p=ye(p,d)),a&&(p=Ln(p,c,{level:o,chunkSize:n},r,s)),i&&(l?p=ye(p,new Vs(e)):(h=new Os(e),p=ye(p,h))),An(f,p,(()=>{let g;i&&!l&&(g=h.signature),i&&!l||!u||(g=new Be(d.value.buffer).getUint32(0)),f.signature=g}))}}class js extends ne{constructor(e,{chunkSize:n,DecompressionStream:s,DecompressionStreamNative:r}){super({});let{zipCrypto:a,encrypted:i,signed:c,signature:l,compressed:u,useCompressionStream:o}=e,f,d,h=Dn(super.readable);i&&(a?h=ye(h,new Ns(e)):(d=new Ps(e),h=ye(h,d))),u&&(h=Ln(h,o,{chunkSize:n},r,s)),i&&!a||!c||(f=new dn,h=ye(h,f)),An(this,h,(()=>{if((!i||a)&&c){let p=new Be(f.value.buffer);if(l!=p.getUint32(0,!1))throw new L(wn)}}))}}function Dn(t){return ye(t,new ne({transform(e,n){e&&e.length&&n.enqueue(e)}}))}function An(t,e,n){e=ye(e,new ne({flush:n})),x.defineProperty(t,"readable",{get:()=>e})}function Ln(t,e,n,s,r){try{t=ye(t,new(e&&s?s:r)(Tn,n))}catch{if(!e)return t;try{t=ye(t,new r(Tn,n))}catch{return t}}return t}function ye(t,e){return t.pipeThrough(e)}let En="data",Rn="close",Bn="inflate";class Gs extends ne{constructor(e,n){super({});let s=this,{codecType:r}=e,a;r.startsWith("deflate")?a=qs:r.startsWith(Bn)&&(a=js);let i=0,c=0,l=new a(e,n),u=super.readable,o=new ne({transform(d,h){d&&d.length&&(c+=d.length,h.enqueue(d))},flush(){x.assign(s,{inputSize:c})}}),f=new ne({transform(d,h){d&&d.length&&(i+=d.length,h.enqueue(d))},flush(){let{signature:d}=l;x.assign(s,{signature:d,outputSize:i,inputSize:c})}});x.defineProperty(s,"readable",{get:()=>u.pipeThrough(o).pipeThrough(l).pipeThrough(f)})}}class Hs extends ne{constructor(e){let n;super({transform:function s(r,a){if(n){let i=new D(n.length+r.length);i.set(n),i.set(r,n.length),r=i,n=null}r.length>e?(a.enqueue(r.slice(0,e)),s(r.slice(e),a)):n=r},flush(s){n&&n.length&&s.enqueue(n)}})}}let In=typeof Ze!=ze;class Ft{constructor(e,{readable:n,writable:s},{options:r,config:a,streamOptions:i,useWebWorkers:c,transferStreams:l,scripts:u},o){let{signal:f}=i;return x.assign(e,{busy:!0,readable:n.pipeThrough(new Hs(a.chunkSize)).pipeThrough(new Qs(n,i),{signal:f}),writable:s,options:x.assign({},r),scripts:u,transferStreams:l,terminate:()=>new ve((d=>{let{worker:h,busy:p}=e;h?(p?e.resolveTerminated=d:(h.terminate(),d()),e.interface=null):d()})),onTaskFinished(){let{resolveTerminated:d}=e;d&&(e.resolveTerminated=null,e.terminated=!0,e.worker.terminate(),d()),e.busy=!1,o(e)}}),(c&&In?Xs:Mn)(e,a)}}class Qs extends ne{constructor(e,{onstart:n,onprogress:s,size:r,onend:a}){let i=0;super({async start(){n&&await Wt(n,r)},async transform(c,l){i+=c.length,s&&await Wt(s,i,r),l.enqueue(c)},async flush(){e.size=i,a&&await Wt(a,i)}})}}async function Wt(t,...e){try{await t(...e)}catch{}}function Mn(t,e){return{run:()=>(async({options:n,readable:s,writable:r,onTaskFinished:a},i)=>{try{let c=new Gs(n,i);await s.pipeThrough(c).pipeTo(r,{preventClose:!0,preventAbort:!0});let{signature:l,inputSize:u,outputSize:o}=c;return{signature:l,inputSize:u,outputSize:o}}finally{a()}})(t,e)}}function Xs(t,e){let{baseURL:n,chunkSize:s}=e;if(!t.interface){let r;try{r=((a,i,c)=>{let l={type:"module"},u,o;typeof a==Ae&&(a=a());try{u=new fs(a,i)}catch{u=a}if(Pn)try{o=new Ze(u)}catch{Pn=!1,o=new Ze(u,l)}else o=new Ze(u,l);return o.addEventListener("message",(f=>(async({data:d},h)=>{let{type:p,value:g,messageId:y,result:w,error:m}=d,{reader:b,writer:v,resolveResult:z,rejectResult:U,onTaskFinished:T}=h;try{if(m){let{message:F,stack:k,code:A,name:C}=m,P=new L(F);x.assign(P,{stack:k,code:A,name:C}),S(P)}else{if(p=="pull"){let{value:F,done:k}=await b.read();at({type:En,value:F,done:k,messageId:y},h)}p==En&&(await v.ready,await v.write(new D(g)),at({type:"ack",messageId:y},h)),p==Rn&&S(null,w)}}catch(F){at({type:Rn,messageId:y},h),S(F)}function S(F,k){F?U(F):z(k),v&&v.releaseLock(),T()}})(f,c))),o})(t.scripts[0],n,t)}catch{return In=!1,Mn(t,e)}x.assign(t,{worker:r,interface:{run:()=>(async(a,i)=>{let c,l,u=new ve(((w,m)=>{c=w,l=m}));x.assign(a,{reader:null,writer:null,resolveResult:c,rejectResult:l,result:u});let{readable:o,options:f,scripts:d}=a,{writable:h,closed:p}=(w=>{let m,b=new ve((v=>m=v));return{writable:new Me({async write(v){let z=w.getWriter();await z.ready,await z.write(v),z.releaseLock()},close(){m()},abort:v=>w.getWriter().abort(v)}),closed:b}})(a.writable),g=at({type:"start",scripts:d.slice(1),options:f,config:i,readable:o,writable:h},a);g||x.assign(a,{reader:o.getReader(),writer:h.getWriter()});let y=await u;return g||await h.getWriter().close(),await p,y})(t,{chunkSize:s})}})}return t.interface}let Pn=!0,On=!0;function at(t,{worker:e,writer:n,onTaskFinished:s,transferStreams:r}){try{let{value:a,readable:i,writable:c}=t,l=[];if(a&&(a.byteLength<a.buffer.byteLength?t.value=a.buffer.slice(0,a.byteLength):t.value=a.buffer,l.push(t.value)),r&&On?(i&&l.push(i),c&&l.push(c)):t.readable=t.writable=null,l.length)try{return e.postMessage(t,l),!0}catch{On=!1,t.readable=t.writable=null,e.postMessage(t)}else e.postMessage(t)}catch(a){throw n&&n.releaseLock(),s(),a}}let De=[],Ct=[],Nn=0;function Vn(t){let{terminateTimeout:e}=t;e&&(clearTimeout(e),t.terminateTimeout=null)}let qn="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),$s=qn.length==256;function it(t,e){return e&&e.trim().toLowerCase()=="cp437"?(n=>{if($s){let s="";for(let r=0;r<n.length;r++)s+=qn[n[r]];return s}return new Ye().decode(n)})(t):new Ye(e).decode(t)}let jn="filename",Gn="rawFilename",Hn="comment",Qn="rawComment",Xn="uncompressedSize",$n="compressedSize",Yn="offset",Ut="diskNumberStart",Tt="lastModDate",Dt="rawLastModDate",Zn="lastAccessDate",Jn="creationDate",Ys=[jn,Gn,$n,Xn,Tt,Dt,Hn,Qn,Zn,Jn,Yn,Ut,Ut,"internalFileAttribute","externalFileAttribute","msDosCompatible","zip64","directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"];class Kn{constructor(e){Ys.forEach((n=>this[n]=e[n]))}}let At="File format is not recognized",es="Compression method not supported",ts="Split zip file",ns="utf-8",ss="cp437",Zs=[[Xn,Ue],[$n,Ue],[Yn,Ue],[Ut,Te]],Js={[Te]:{getValue:G,bytes:4},[Ue]:{getValue:ot,bytes:8}};class Ks{constructor(e,n,s){x.assign(this,{reader:e,config:n,options:s})}async getData(e,n,s={}){let r=this,{reader:a,offset:i,diskNumberStart:c,extraFieldAES:l,compressionMethod:u,config:o,bitFlag:f,signature:d,rawLastModDate:h,uncompressedSize:p,compressedSize:g}=r,y=n.localDirectory={},w=Z(await se(a,i,30,c)),m=ue(r,s,"password"),b=ue(r,s,"rawPassword");if(m=m&&m.length&&m,b=b&&b.length&&b,l&&l.originalCompressionMethod!=99)throw new L(es);if(u!=0&&u!=8)throw new L(es);if(G(w,0)!=67324752)throw new L("Local file header not found");rs(y,w,4),y.rawExtraField=y.extraFieldLength?await se(a,i+30+y.filenameLength,y.extraFieldLength,c):new D,await as(r,y,w,4,!0),x.assign(n,{lastAccessDate:y.lastAccessDate,creationDate:y.creationDate});let v=r.encrypted&&y.encrypted,z=v&&!l;if(v){if(!z&&l.strength===K)throw new L("Encryption method not supported");if(!m&&!b)throw new L("File contains encrypted entry")}let U=i+30+y.filenameLength+y.extraFieldLength,T=g,S=a.readable;x.assign(S,{diskNumberStart:c,offset:U,size:T});let F=ue(r,s,"signal"),k=ue(r,s,"checkPasswordOnly");k&&(e=new Me),e=(W=>{W.writable===K&&typeof W.next==Ae&&(W=new hn(W)),W instanceof Me&&(W={writable:W});let{writable:R}=W;return R.size===K&&(R.size=0),W instanceof hn||x.assign(W,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),W})(e),await tt(e,p);let{writable:A}=e,{onstart:C,onprogress:P,onend:V}=s,X={options:{codecType:Bn,password:m,rawPassword:b,zipCrypto:z,encryptionStrength:l&&l.strength,signed:ue(r,s,"checkSignature"),passwordVerification:z&&(f.dataDescriptor?h>>>8&255:d>>>24&255),signature:d,compressed:u!=0,encrypted:v,useWebWorkers:ue(r,s,"useWebWorkers"),useCompressionStream:ue(r,s,"useCompressionStream"),transferStreams:ue(r,s,"transferStreams"),checkPasswordOnly:k},config:o,streamOptions:{signal:F,size:T,onstart:C,onprogress:P,onend:V}},E=0;try{({outputSize:E}=await(async(W,R)=>{let{options:_,config:Q}=R,{transferStreams:H,useWebWorkers:ee,useCompressionStream:re,codecType:O,compressed:I,signed:te,encrypted:q}=_,{workerScripts:$,maxWorkers:he}=Q;R.transferStreams=H||H===K;let be=!(I||te||q||R.transferStreams);return R.useWebWorkers=!be&&(ee||ee===K&&Q.useWebWorkers),R.scripts=R.useWebWorkers&&$?$[O]:[],_.useCompressionStream=re||re===K&&Q.useCompressionStream,(await(async()=>{let ae=De.find((N=>!N.busy));if(ae)return Vn(ae),new Ft(ae,W,R,J);if(De.length<he){let N={indexWorker:Nn};return Nn++,De.push(N),new Ft(N,W,R,J)}return new ve((N=>Ct.push({resolve:N,stream:W,workerOptions:R})))})()).run();function J(ae){if(Ct.length){let[{resolve:N,stream:We,workerOptions:ce}]=Ct.splice(0,1);N(new Ft(ae,We,ce,J))}else ae.worker?(Vn(ae),((N,We)=>{let{config:ce}=We,{terminateWorkerTimeout:Xe}=ce;lt.isFinite(Xe)&&Xe>=0&&(N.terminated?N.terminated=!1:N.terminateTimeout=setTimeout((async()=>{De=De.filter(($e=>$e!=N));try{await N.terminate()}catch{}}),Xe))})(ae,R)):De=De.filter((N=>N!=ae))}})({readable:S,writable:A},X))}catch(W){if(!k||W.message!=St)throw W}finally{let W=ue(r,s,"preventClose");A.size+=E,W||A.locked||await A.getWriter().close()}return k?K:e.getData?e.getData():A}}function rs(t,e,n){let s=t.rawBitFlag=Y(e,n+2),r=!(1&~s),a=G(e,n+6);x.assign(t,{encrypted:r,version:Y(e,n),bitFlag:{level:(6&s)>>1,dataDescriptor:!(8&~s),languageEncodingFlag:!(2048&~s)},rawLastModDate:a,lastModDate:er(a),filenameLength:Y(e,n+22),extraFieldLength:Y(e,n+24)})}async function as(t,e,n,s,r){let{rawExtraField:a}=e,i=e.extraField=new hs,c=Z(new D(a)),l=0;try{for(;l<a.length;){let w=Y(c,l),m=Y(c,l+2);i.set(w,{type:w,data:a.slice(l+4,l+4+m)}),l+=4+m}}catch{}let u=Y(n,s+4);x.assign(e,{signature:G(n,s+10),uncompressedSize:G(n,s+18),compressedSize:G(n,s+14)});let o=i.get(1);o&&(((w,m)=>{m.zip64=!0;let b=Z(w.data),v=Zs.filter((([z,U])=>m[z]==U));for(let z=0,U=0;z<v.length;z++){let[T,S]=v[z];if(m[T]==S){let F=Js[S];m[T]=w[T]=F.getValue(b,U),U+=F.bytes}else if(w[T])throw new L("Zip64 extra field not found")}})(o,e),e.extraFieldZip64=o);let f=i.get(28789);f&&(await is(f,jn,Gn,e,t),e.extraFieldUnicodePath=f);let d=i.get(25461);d&&(await is(d,Hn,Qn,e,t),e.extraFieldUnicodeComment=d);let h=i.get(39169);h?(((w,m,b)=>{let v=Z(w.data),z=Re(v,4);x.assign(w,{vendorVersion:Re(v,0),vendorId:Re(v,2),strength:z,originalCompressionMethod:b,compressionMethod:Y(v,5)}),m.compressionMethod=w.compressionMethod})(h,e,u),e.extraFieldAES=h):e.compressionMethod=u;let p=i.get(10);p&&(((w,m)=>{let b=Z(w.data),v,z=4;try{for(;z<w.data.length&&!v;){let U=Y(b,z),T=Y(b,z+2);U==1&&(v=w.data.slice(z+4,z+4+T)),z+=4+T}}catch{}try{if(v&&v.length==24){let U=Z(v),T=U.getBigUint64(0,!0),S=U.getBigUint64(8,!0),F=U.getBigUint64(16,!0);x.assign(w,{rawLastModDate:T,rawLastAccessDate:S,rawCreationDate:F});let k={lastModDate:Lt(T),lastAccessDate:Lt(S),creationDate:Lt(F)};x.assign(w,k),x.assign(m,k)}}catch{}})(p,e),e.extraFieldNTFS=p);let g=i.get(21589);g&&(((w,m,b)=>{let v=Z(w.data),z=Re(v,0),U=[],T=[];b?(1&~z||(U.push(Tt),T.push(Dt)),2&~z||(U.push(Zn),T.push("rawLastAccessDate")),4&~z||(U.push(Jn),T.push("rawCreationDate"))):5>w.data.length||(U.push(Tt),T.push(Dt));let S=1;U.forEach(((F,k)=>{if(w.data.length>=S+4){let A=G(v,S);m[F]=w[F]=new ut(1e3*A);let C=T[k];w[C]=A}S+=4}))})(g,e,r),e.extraFieldExtendedTimestamp=g);let y=i.get(6534);y&&(e.extraFieldUSDZ=y)}async function is(t,e,n,s,r){let a=Z(t.data),i=new nt;i.append(r[n]);let c=Z(new D(4));c.setUint32(0,i.get(),!0);let l=G(a,1);x.assign(t,{version:Re(a,0),[e]:it(t.data.subarray(5)),valid:!r.bitFlag.languageEncodingFlag&&l==G(c,0)}),t.valid&&(s[e]=t[e],s[e+"UTF8"]=!0)}function ue(t,e,n){return e[n]===K?t.options[n]:e[n]}function er(t){let e=(4294901760&t)>>16,n=65535&t;try{return new ut(1980+((65024&e)>>9),((480&e)>>5)-1,31&e,(63488&n)>>11,(2016&n)>>5,2*(31&n),0)}catch{}}function Lt(t){return new ut(lt(t/Mt(1e4)-Mt(116444736e5)))}function Re(t,e){return t.getUint8(e)}function Y(t,e){return t.getUint16(e,!0)}function G(t,e){return t.getUint32(e,!0)}function ot(t,e){return lt(t.getBigUint64(e,!0))}function Z(t){return new Be(t.buffer)}on({Inflate:_s}),pe.BlobReader=ln,pe.BlobWriter=un,pe.Data64URIWriter=class extends Ws{constructor(t){super(),x.assign(this,{data:"data:"+(t||"")+";base64,",pending:[]})}writeUint8Array(t){let e=this,n=0,s=e.pending,r=e.pending.length;for(e.pending="",n=0;n<3*B.floor((r+t.length)/3)-r;n++)s+=It.fromCharCode(t[n]);for(;n<t.length;n++)e.pending+=It.fromCharCode(t[n]);s.length>2?e.data+=Vt(s):e.pending=s}getData(){return this.data+Vt(this.pending)}},pe.TextWriter=class extends un{constructor(t){super(t),x.assign(this,{encoding:t,utf8:!t||t.toLowerCase()=="utf-8"})}async getData(){let{encoding:t,utf8:e}=this,n=await super.getData();if(n.text&&e)return n.text();{let s=new FileReader;return new ve(((r,a)=>{x.assign(s,{onload:({target:i})=>r(i.result),onerror:()=>a(s.error)}),s.readAsText(n,t)}))}}},pe.ZipReader=class{constructor(t,e={}){x.assign(this,{reader:Us(t),options:e,config:_e})}async*getEntriesGenerator(t={}){let e=this,{reader:n}=e,{config:s}=e;if(await tt(n),n.size!==K&&n.readUint8Array||(n=new ln(await new Pt(n.readable).blob()),await tt(n)),22>n.size)throw new L(At);n.chunkSize=(F=>B.max(F.chunkSize,64))(s);let r=await(async(F,k,A)=>{let C=new D(4);return Z(C).setUint32(0,101010256,!0),await P(22)||await P(B.min(1048582,A));async function P(V){let X=A-V,E=await se(F,X,V);for(let W=E.length-22;W>=0;W--)if(E[W]==C[0]&&E[W+1]==C[1]&&E[W+2]==C[2]&&E[W+3]==C[3])return{offset:X+W,buffer:E.slice(W,W+22).buffer}}})(n,0,n.size);if(!r)throw G(Z(await se(n,0,4)))==134695760?new L(ts):new L("End of central directory not found");let a=Z(r),i=G(a,12),c=G(a,16),l=r.offset,u=Y(a,20),o=l+22+u,f=Y(a,4),d=n.lastDiskNumber||0,h=Y(a,6),p=Y(a,8),g=0,y=0;if(c==Ue||i==Ue||p==Te||h==Te){let F=Z(await se(n,r.offset-20,20));if(G(F,0)==117853008){c=ot(F,8);let k=await se(n,c,56,-1),A=Z(k),C=r.offset-20-56;if(G(A,0)!=nn&&c!=C){let P=c;c=C,g=c-P,k=await se(n,c,56,-1),A=Z(k)}if(G(A,0)!=nn)throw new L("End of Zip64 central directory locator not found");f==Te&&(f=G(A,16)),h==Te&&(h=G(A,20)),p==Te&&(p=ot(A,32)),i==Ue&&(i=ot(A,40)),c-=i}}if(c<n.size||(g=n.size-c-i-22,c=n.size-i-22),d!=f)throw new L(ts);if(0>c)throw new L(At);let w=0,m=await se(n,c,i,h),b=Z(m);if(i){let F=r.offset-i;if(G(b,w)!=tn&&c!=F){let k=c;c=F,g+=c-k,m=await se(n,c,i,h),b=Z(m)}}let v=r.offset-c-(n.lastDiskOffset||0);if(i==v||0>v||(i=v,m=await se(n,c,i,h),b=Z(m)),0>c||c>=n.size)throw new L(At);let z=ue(e,t,"filenameEncoding"),U=ue(e,t,"commentEncoding");for(let F=0;p>F;F++){let k=new Ks(n,s,e.options);if(G(b,w)!=tn)throw new L("Central directory header not found");rs(k,b,w+6);let A=!!k.bitFlag.languageEncodingFlag,C=w+46,P=C+k.filenameLength,V=P+k.extraFieldLength,X=Y(b,w+4),E=!0,W=m.subarray(C,P),R=Y(b,w+32),_=V+R,Q=m.subarray(V,_),H=A,ee=A,re=E&&!(16&~Re(b,w+38)),O=G(b,w+42)+g;x.assign(k,{versionMadeBy:X,msDosCompatible:E,compressedSize:0,uncompressedSize:0,commentLength:R,directory:re,offset:O,diskNumberStart:Y(b,w+34),internalFileAttribute:Y(b,w+36),externalFileAttribute:G(b,w+38),rawFilename:W,filenameUTF8:H,commentUTF8:ee,rawExtraField:m.subarray(P,V)});let I=ue(e,t,"decodeText")||it,te=H?ns:z||ss,q=ee?ns:U||ss,$=I(W,te);$===K&&($=it(W,te));let he=I(Q,q);he===K&&(he=it(Q,q)),x.assign(k,{rawComment:Q,filename:$,comment:he,directory:re||$.endsWith("/")}),y=B.max(O,y),await as(k,k,b,w+6);let be=new Kn(k);be.getData=(ae,N)=>k.getData(ae,be,N),w=_;let{onprogress:J}=t;if(J)try{await J(F+1,p,new Kn(k))}catch{}yield be}let T=ue(e,t,"extractPrependedData"),S=ue(e,t,"extractAppendedData");return T&&(e.prependedData=y>0?await se(n,0,y):new D),e.comment=u?await se(n,l+22,u):new D,S&&(e.appendedData=o<n.size?await se(n,o,n.size-o):new D),!0}async getEntries(t={}){let e=[];for await(let n of this.getEntriesGenerator(t))e.push(n);return e}async close(){}},pe.configure=on}))});return nr();})();
