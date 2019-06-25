!function(e,o){for(var t in o)e[t]=o[t]}(exports,function(e){var o={};function t(O){if(o[O])return o[O].exports;var E=o[O]={i:O,l:!1,exports:{}};return e[O].call(E.exports,E,E.exports,t),E.l=!0,E.exports}return t.m=e,t.c=o,t.d=function(e,o,O){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:O})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var O=Object.create(null);if(t.r(O),Object.defineProperty(O,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var E in e)t.d(O,E,function(o){return e[o]}.bind(null,E));return O},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=2)}([function(e,o,t){"use strict";const O=t(1),E=t(6),s=Symbol(),i=Symbol();e.exports=class e extends O.ServerResponse{static from(o){const t=new e(o);return t.statusCode=o.statusCode,t[i]=o.headers,t[s]=[Buffer.from(o.body)],t.end(),t}static body(e){return Buffer.concat(e[s])}static headers(e){return Object.assign(e._headers,e[i])}get headers(){return this[i]}setHeader(e,o){this._wroteHeader?this[i][e]=o:super.setHeader(e,o)}constructor(e){super(e),this[s]=[],this[i]={},this._headers={},this.useChunkedEncodingByDefault=!1,this.chunkedEncoding=!1;const o=e=>{if(!Buffer.isBuffer(e)&&"string"!=typeof e)throw new Error(`response.write() of unexpected type: ${typeof e}`);this[s].push(Buffer.from(e))};this.assignSocket(new E.Writable({write:(e,t,O)=>{if("function"==typeof t&&(O=t,t=null),this._wroteHeader)o(e);else{const t=function(e){if(Buffer.isBuffer(e))return e.toString("utf8");if("string"==typeof e)return e;throw new Error(`response.write() of unexpected type: ${typeof e}`)}(e),O=t.indexOf("\r\n\r\n");if(-1!==O){const e=t.slice(O+"\r\n\r\n".length);e&&o(e),this._wroteHeader=!0}}"function"==typeof O&&O()}})),this.write=function(e,t,O){"function"==typeof t&&(O=t,t=null),o(e),"function"==typeof O&&O()}}}},function(e,o){e.exports=require("http")},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});t(3);e.exports.handler={message:"Hola"}},function(e,o,t){"use strict";const O=t(4),E=t(5),s=t(7),i={requestId:"x-request-id"};e.exports=function(e,o){const t=Object.assign({},i,o),c=E(e);return s(t)(async(e,...o)=>{await O(e,t.request,...o);const E=await c(e);return await O(E,t.response,...o),E})}},function(e,o,t){"use strict";e.exports=async function(e,o,...t){return await new Promise((o,t)=>{if(e.finished||e.complete)return void o();let O=!1;function E(s){O||(O=!0,e.removeListener("finish",E),e.removeListener("done",E),s?t(s):o())}e.once("end",E),e.once("finish",E)}),"function"==typeof o?await o(e,...t):"object"==typeof o&&null!==o&&Object.assign(e,o),e}},function(e,o,t){"use strict";const O=t(0);function E(e){return o=>{const t=new O(o);return e(o,t),t}}e.exports=function(e){if("function"==typeof e.callback)return E(e.callback());if("function"==typeof e.handle)return E((o,t)=>{e.handle(o,t)});if("function"==typeof e)return E(e);if(e.router&&"function"==typeof e.router.route)return E((o,t)=>{const{url:O,method:E,headers:s,body:i}=o;e.router.route({url:O,method:E,headers:s,body:i},t)});if(e._core&&"function"==typeof e._core._dispatch)return E(e._core._dispatch({app:e}));if("function"==typeof e.inject)return async o=>{const{method:t,url:E,headers:s,body:i}=o,c=await e.inject({method:t,url:E,headers:s,payload:i});return O.from(c)};throw new Error("Unsupported framework")}},function(e,o){e.exports=require("stream")},function(e,o,t){const O={aws:t(8)};e.exports=function(e){const{provider:o="aws"}=e;if(o in O)return O[o](e);throw new Error(`Unsupported provider ${o}`)}},function(e,o,t){const O=t(9),E=t(10),s=t(13);e.exports=e=>o=>async(t,i={})=>{const c=O(t),r=E(c,e),n=await o(r,c,i);return s(n,e)}},function(e,o,t){"use strict";e.exports=function(e){const o=e||{};return o.httpMethod=o.httpMethod||"GET",o.path=o.path||"/",o.body=o.body||"",o.headers=o.headers||{},o.requestContext=o.requestContext||{},o.requestContext.path=o.requestContext.path||o.path,o.requestContext.identity=o.requestContext.identity||{},o}},function(e,o,t){"use strict";const O=t(11),E=t(12);e.exports=(e,o)=>{const t=e.httpMethod,s=e.multiValueQueryStringParameters||e.queryStringParameters,i=e.requestContext.path.slice(0,-e.path.length),c=e.requestContext.identity.sourceIp,r=function(e){return Object.keys(e.headers).reduce((o,t)=>(o[t.toLowerCase()]=e.headers[t],o),{})}(e),n=function(e,o){if("string"==typeof e.body)return Buffer.from(e.body,e.isBase64Encoded?"base64":"utf8");if(Buffer.isBuffer(e.body))return e.body;if("object"==typeof e.body){const t=o["content-type"];if(t&&0===t.indexOf("application/json"))return Buffer.from(JSON.stringify(e.body));throw new Error("event.body was an object but content-type is not json")}throw new Error(`Unexpected event.body type: ${typeof e.body}`)}(e,r);if("string"==typeof o.requestId&&o.requestId.length>0){const t=o.requestId.toLowerCase();r[t]=r[t]||e.requestContext.requestId}return new E({method:t,baseUrl:i,headers:r,body:n,remoteAddress:c,originalUrl:O.format({pathname:e.requestContext.path,query:s}),url:O.format({pathname:e.path,query:s})})}},function(e,o){e.exports=require("url")},function(e,o,t){"use strict";const O=t(1);e.exports=class extends O.IncomingMessage{constructor({method:e,baseUrl:o,originalUrl:t,url:O,headers:E,body:s,remoteAddress:i}){super({encrypted:!0,readable:!1,remoteAddress:i,address:()=>({port:443}),end:Function.prototype,destroy:Function.prototype}),void 0===E["content-length"]&&(E["content-length"]=Buffer.byteLength(s)),Object.assign(this,{ip:i,complete:!0,httpVersion:"1.1",httpVersionMajor:"1",httpVersionMinor:"1",method:e,headers:E,body:s,baseUrl:o,originalUrl:t,url:O}),this.push(s),this.push(null)}}},function(e,o,t){"use strict";const O=t(14),E=t(0),s=t(15);e.exports=(e,o)=>{const{statusCode:t}=e,i=s(E.headers(e));if("chunked"===i["transfer-encoding"]||e.chunkedEncoding)throw new Error("chunked encoding not supported");const c=O(i,o),r=c?"base64":"utf8";return{statusCode:t,headers:i,isBase64Encoded:c,body:E.body(e).toString(r)}}},function(e,o,t){"use strict";const O=["gzip","deflate"],E=(process.env.BINARY_CONTENT_TYPES||"").split(",");e.exports=function(e,o){return!1!==o.binary&&("function"==typeof o.binary?o.binary(e):function(e){const o=e["content-encoding"];if("string"==typeof o)return o.split(",").some(e=>O.some(o=>-1!==e.indexOf(o)))}(e)||function(e,o){const t=[].concat(o.binary?o.binary:E).map(e=>new RegExp(`^${e.replace(/\*/g,".*")}$`)),O=(e["content-type"]||"").split(";")[0];return!!O&&t.some(e=>e.test(O))}(e,o))}},function(e,o,t){"use strict";const O=t(16).variations;e.exports=function(e){return Object.keys(e).reduce((o,t)=>{const E=e[t];return Array.isArray(E)?"set-cookie"===t.toLowerCase()?E.forEach((e,t)=>{o[O[t]]=e}):o[t]=E.join(", "):o[t]=E.toString(),o},{})}},function(e){e.exports={variations:["set-cookie","Set-cookie","sEt-cookie","SEt-cookie","seT-cookie","SeT-cookie","sET-cookie","SET-cookie","set-Cookie","Set-Cookie","sEt-Cookie","SEt-Cookie","seT-Cookie","SeT-Cookie","sET-Cookie","SET-Cookie","set-cOokie","Set-cOokie","sEt-cOokie","SEt-cOokie","seT-cOokie","SeT-cOokie","sET-cOokie","SET-cOokie","set-COokie","Set-COokie","sEt-COokie","SEt-COokie","seT-COokie","SeT-COokie","sET-COokie","SET-COokie","set-coOkie","Set-coOkie","sEt-coOkie","SEt-coOkie","seT-coOkie","SeT-coOkie","sET-coOkie","SET-coOkie","set-CoOkie","Set-CoOkie","sEt-CoOkie","SEt-CoOkie","seT-CoOkie","SeT-CoOkie","sET-CoOkie","SET-CoOkie","set-cOOkie","Set-cOOkie","sEt-cOOkie","SEt-cOOkie","seT-cOOkie","SeT-cOOkie","sET-cOOkie","SET-cOOkie","set-COOkie","Set-COOkie","sEt-COOkie","SEt-COOkie","seT-COOkie","SeT-COOkie","sET-COOkie","SET-COOkie","set-cooKie","Set-cooKie","sEt-cooKie","SEt-cooKie","seT-cooKie","SeT-cooKie","sET-cooKie","SET-cooKie","set-CooKie","Set-CooKie","sEt-CooKie","SEt-CooKie","seT-CooKie","SeT-CooKie","sET-CooKie","SET-CooKie","set-cOoKie","Set-cOoKie","sEt-cOoKie","SEt-cOoKie","seT-cOoKie","SeT-cOoKie","sET-cOoKie","SET-cOoKie","set-COoKie","Set-COoKie","sEt-COoKie","SEt-COoKie","seT-COoKie","SeT-COoKie","sET-COoKie","SET-COoKie","set-coOKie","Set-coOKie","sEt-coOKie","SEt-coOKie","seT-coOKie","SeT-coOKie","sET-coOKie","SET-coOKie","set-CoOKie","Set-CoOKie","sEt-CoOKie","SEt-CoOKie","seT-CoOKie","SeT-CoOKie","sET-CoOKie","SET-CoOKie","set-cOOKie","Set-cOOKie","sEt-cOOKie","SEt-cOOKie","seT-cOOKie","SeT-cOOKie","sET-cOOKie","SET-cOOKie","set-COOKie","Set-COOKie","sEt-COOKie","SEt-COOKie","seT-COOKie","SeT-COOKie","sET-COOKie","SET-COOKie","set-cookIe","Set-cookIe","sEt-cookIe","SEt-cookIe","seT-cookIe","SeT-cookIe","sET-cookIe","SET-cookIe","set-CookIe","Set-CookIe","sEt-CookIe","SEt-CookIe","seT-CookIe","SeT-CookIe","sET-CookIe","SET-CookIe","set-cOokIe","Set-cOokIe","sEt-cOokIe","SEt-cOokIe","seT-cOokIe","SeT-cOokIe","sET-cOokIe","SET-cOokIe","set-COokIe","Set-COokIe","sEt-COokIe","SEt-COokIe","seT-COokIe","SeT-COokIe","sET-COokIe","SET-COokIe","set-coOkIe","Set-coOkIe","sEt-coOkIe","SEt-coOkIe","seT-coOkIe","SeT-coOkIe","sET-coOkIe","SET-coOkIe","set-CoOkIe","Set-CoOkIe","sEt-CoOkIe","SEt-CoOkIe","seT-CoOkIe","SeT-CoOkIe","sET-CoOkIe","SET-CoOkIe","set-cOOkIe","Set-cOOkIe","sEt-cOOkIe","SEt-cOOkIe","seT-cOOkIe","SeT-cOOkIe","sET-cOOkIe","SET-cOOkIe","set-COOkIe","Set-COOkIe","sEt-COOkIe","SEt-COOkIe","seT-COOkIe","SeT-COOkIe","sET-COOkIe","SET-COOkIe","set-cooKIe","Set-cooKIe","sEt-cooKIe","SEt-cooKIe","seT-cooKIe","SeT-cooKIe","sET-cooKIe","SET-cooKIe","set-CooKIe","Set-CooKIe","sEt-CooKIe","SEt-CooKIe","seT-CooKIe","SeT-CooKIe","sET-CooKIe","SET-CooKIe","set-cOoKIe","Set-cOoKIe","sEt-cOoKIe","SEt-cOoKIe","seT-cOoKIe","SeT-cOoKIe","sET-cOoKIe","SET-cOoKIe","set-COoKIe","Set-COoKIe","sEt-COoKIe","SEt-COoKIe","seT-COoKIe","SeT-COoKIe","sET-COoKIe","SET-COoKIe","set-coOKIe","Set-coOKIe","sEt-coOKIe","SEt-coOKIe","seT-coOKIe","SeT-coOKIe","sET-coOKIe","SET-coOKIe","set-CoOKIe","Set-CoOKIe","sEt-CoOKIe","SEt-CoOKIe","seT-CoOKIe","SeT-CoOKIe","sET-CoOKIe","SET-CoOKIe","set-cOOKIe","Set-cOOKIe","sEt-cOOKIe","SEt-cOOKIe","seT-cOOKIe","SeT-cOOKIe","sET-cOOKIe","SET-cOOKIe","set-COOKIe","Set-COOKIe","sEt-COOKIe","SEt-COOKIe","seT-COOKIe","SeT-COOKIe","sET-COOKIe","SET-COOKIe","set-cookiE","Set-cookiE","sEt-cookiE","SEt-cookiE","seT-cookiE","SeT-cookiE","sET-cookiE","SET-cookiE","set-CookiE","Set-CookiE","sEt-CookiE","SEt-CookiE","seT-CookiE","SeT-CookiE","sET-CookiE","SET-CookiE","set-cOokiE","Set-cOokiE","sEt-cOokiE","SEt-cOokiE","seT-cOokiE","SeT-cOokiE","sET-cOokiE","SET-cOokiE","set-COokiE","Set-COokiE","sEt-COokiE","SEt-COokiE","seT-COokiE","SeT-COokiE","sET-COokiE","SET-COokiE","set-coOkiE","Set-coOkiE","sEt-coOkiE","SEt-coOkiE","seT-coOkiE","SeT-coOkiE","sET-coOkiE","SET-coOkiE","set-CoOkiE","Set-CoOkiE","sEt-CoOkiE","SEt-CoOkiE","seT-CoOkiE","SeT-CoOkiE","sET-CoOkiE","SET-CoOkiE","set-cOOkiE","Set-cOOkiE","sEt-cOOkiE","SEt-cOOkiE","seT-cOOkiE","SeT-cOOkiE","sET-cOOkiE","SET-cOOkiE","set-COOkiE","Set-COOkiE","sEt-COOkiE","SEt-COOkiE","seT-COOkiE","SeT-COOkiE","sET-COOkiE","SET-COOkiE","set-cooKiE","Set-cooKiE","sEt-cooKiE","SEt-cooKiE","seT-cooKiE","SeT-cooKiE","sET-cooKiE","SET-cooKiE","set-CooKiE","Set-CooKiE","sEt-CooKiE","SEt-CooKiE","seT-CooKiE","SeT-CooKiE","sET-CooKiE","SET-CooKiE","set-cOoKiE","Set-cOoKiE","sEt-cOoKiE","SEt-cOoKiE","seT-cOoKiE","SeT-cOoKiE","sET-cOoKiE","SET-cOoKiE","set-COoKiE","Set-COoKiE","sEt-COoKiE","SEt-COoKiE","seT-COoKiE","SeT-COoKiE","sET-COoKiE","SET-COoKiE","set-coOKiE","Set-coOKiE","sEt-coOKiE","SEt-coOKiE","seT-coOKiE","SeT-coOKiE","sET-coOKiE","SET-coOKiE","set-CoOKiE","Set-CoOKiE","sEt-CoOKiE","SEt-CoOKiE","seT-CoOKiE","SeT-CoOKiE","sET-CoOKiE","SET-CoOKiE","set-cOOKiE","Set-cOOKiE","sEt-cOOKiE","SEt-cOOKiE","seT-cOOKiE","SeT-cOOKiE","sET-cOOKiE","SET-cOOKiE","set-COOKiE","Set-COOKiE","sEt-COOKiE","SEt-COOKiE","seT-COOKiE","SeT-COOKiE","sET-COOKiE","SET-COOKiE","set-cookIE","Set-cookIE","sEt-cookIE","SEt-cookIE","seT-cookIE","SeT-cookIE","sET-cookIE","SET-cookIE","set-CookIE","Set-CookIE","sEt-CookIE","SEt-CookIE","seT-CookIE","SeT-CookIE","sET-CookIE","SET-CookIE","set-cOokIE","Set-cOokIE","sEt-cOokIE","SEt-cOokIE","seT-cOokIE","SeT-cOokIE","sET-cOokIE","SET-cOokIE","set-COokIE","Set-COokIE","sEt-COokIE","SEt-COokIE","seT-COokIE","SeT-COokIE","sET-COokIE","SET-COokIE","set-coOkIE","Set-coOkIE","sEt-coOkIE","SEt-coOkIE","seT-coOkIE","SeT-coOkIE","sET-coOkIE","SET-coOkIE","set-CoOkIE","Set-CoOkIE","sEt-CoOkIE","SEt-CoOkIE","seT-CoOkIE","SeT-CoOkIE","sET-CoOkIE","SET-CoOkIE","set-cOOkIE","Set-cOOkIE","sEt-cOOkIE","SEt-cOOkIE","seT-cOOkIE","SeT-cOOkIE","sET-cOOkIE","SET-cOOkIE","set-COOkIE","Set-COOkIE","sEt-COOkIE","SEt-COOkIE","seT-COOkIE","SeT-COOkIE","sET-COOkIE","SET-COOkIE","set-cooKIE","Set-cooKIE","sEt-cooKIE","SEt-cooKIE","seT-cooKIE","SeT-cooKIE","sET-cooKIE","SET-cooKIE","set-CooKIE","Set-CooKIE","sEt-CooKIE","SEt-CooKIE","seT-CooKIE","SeT-CooKIE","sET-CooKIE","SET-CooKIE","set-cOoKIE","Set-cOoKIE","sEt-cOoKIE","SEt-cOoKIE","seT-cOoKIE","SeT-cOoKIE","sET-cOoKIE","SET-cOoKIE","set-COoKIE","Set-COoKIE","sEt-COoKIE","SEt-COoKIE","seT-COoKIE","SeT-COoKIE","sET-COoKIE","SET-COoKIE","set-coOKIE","Set-coOKIE","sEt-coOKIE","SEt-coOKIE","seT-coOKIE","SeT-coOKIE","sET-coOKIE","SET-coOKIE","set-CoOKIE","Set-CoOKIE","sEt-CoOKIE","SEt-CoOKIE","seT-CoOKIE","SeT-CoOKIE","sET-CoOKIE","SET-CoOKIE","set-cOOKIE","Set-cOOKIE","sEt-cOOKIE","SEt-cOOKIE","seT-cOOKIE","SeT-cOOKIE","sET-cOOKIE","SET-cOOKIE","set-COOKIE","Set-COOKIE","sEt-COOKIE","SEt-COOKIE","seT-COOKIE","SeT-COOKIE","sET-COOKIE","SET-COOKIE"]}}]));