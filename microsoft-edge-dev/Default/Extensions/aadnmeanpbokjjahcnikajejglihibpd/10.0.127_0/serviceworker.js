!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}},function(e,t,s){"use strict";s.r(t);s(0);const n=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class i extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const a=new Set;const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},c=e=>[r.prefix,e,r.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||c(r.runtime);const h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),u=(e,t)=>e.filter(e=>t in e),l=async({request:e,mode:t,plugins:s=[]})=>{const n=u(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},p=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const a=await self.caches.open(e),r=await l({plugins:i,request:t,mode:"read"});let c=await a.match(r,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:r})}return c},d=async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:c})=>{const o=await l({plugins:r,request:t,mode:"write"});if(!s)throw new i("cache-put-with-no-response",{url:h(o.url)});const d=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return a||(i=i&&200===i.status?i:void 0),i||null})({event:n,plugins:r,response:s,request:o});if(!d)return void 0;const m=await self.caches.open(e),f=u(r,"cacheDidUpdate"),g=f.length>0?await p({cacheName:e,matchOptions:c,request:o}):null;try{await m.put(o,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of a)await e()}(),e}for(const t of f)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:g,newResponse:d,request:o})},m=p;function f(e){e.then(()=>{})}class g{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(r,c)=>{const o=r.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(a?e:e.value),i&&u.length>=i?c(u):e.continue()):c(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const a=this._db.transaction(e,t);a.onabort=()=>i(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const a=s.objectStore(t),r=a[e].apply(a,n);r.onsuccess=()=>i(r.result)})}close(){this._db&&(this._db.close(),this._db=null)}}g.prototype.OPEN_TIMEOUT=2e3;const _={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(_))for(const s of t)s in IDBObjectStore.prototype&&(g.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});const w=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=u(n,"fetchDidFail"),r=a.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,i=e.clone();e=await n.call(t,{request:i,event:s})}}catch(e){throw new i("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let i;i="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(i=await e.fetchDidSucceed.call(e,{event:s,request:c,response:i}));return i}catch(e){0;for(const t of a)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:r.clone(),request:c.clone()});throw e}};s(1);const y=e=>e&&"object"==typeof e?e:{handle:e};class v{constructor(e,t,s="GET"){this.handler=y(t),this.match=e,this.method=s}}class q extends v{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class x{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let a=i&&i.handler;if(!a&&this._defaultHandler&&(a=this._defaultHandler),!a)return void 0;let r;try{r=a.handle({url:s,request:e,event:t,params:n})}catch(e){r=Promise.reject(e)}return r instanceof Promise&&this._catchHandler&&(r=r.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),r}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const i of n){let n;const a=i.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=y(e)}setCatchHandler(e){this._catchHandler=y(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new i("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new i("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let b;const N=()=>(b||(b=new x,b.addFetchListener(),b.addCacheListener()),b);function O(e,t,s){let n;if("string"==typeof e){const i=new URL(e,location.href);0;n=new v(({url:e})=>e.href===i.href,t,s)}else if(e instanceof RegExp)n=new q(e,t,s);else if("function"==typeof e)n=new v(e,t,s);else{if(!(e instanceof v))throw new i("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return N().registerRoute(n),n}s(2);class R{constructor(e={}){this._cacheName=o(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await m({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(n)0;else{0;try{n=await this._getFromNetwork(t,e)}catch(e){s=e}0}if(!n)throw new i("no-response",{url:t.url,error:s});return n}async _getFromNetwork(e,t){const s=await w({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),i=d({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(i)}catch(e){0}return s}}const E={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class S{constructor(e={}){if(this._cacheName=o(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[E,...e.plugins]}else this._plugins=[E];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let n,a=await m({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(a){if(e)try{e.waitUntil(s)}catch(n){0}}else{0;try{a=await s}catch(e){n=e}}if(!a)throw new i("no-response",{url:t.url,error:n});return a}async _getFromNetwork({request:e,event:t}){const s=await w({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=d({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){0}return s}}s(3);const U=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class A{constructor(e){this._cacheName=e,this._db=new g("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=U(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let r=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&r>=t?a.push(s.value):r++),s.continue()}else n(a)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+U(e)}}class T{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new A(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,f(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class k{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this._isResponseDateFresh(n),a=this._getCacheExpiration(s);f(a.expireEntries());const r=a.updateTimestamp(t.url);if(e)try{e.waitUntil(r)}catch(e){0}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),a.add(t))}_getCacheExpiration(e){if(e===o())throw new i("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new T(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(4);class D{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}class M{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new D(e)}}self.__WB_DISABLE_DEV_LOGS=!0,self.addEventListener("install",()=>self.skipWaiting()),self.addEventListener("activate",()=>self.clients.claim());const P=[new k({maxAgeSeconds:3600}),new M({statuses:[200],headers:{"i-success":"true"}})],j=[new k({maxAgeSeconds:604800}),new M({statuses:[200],headers:{"i-success":"true"}})];var C;O(({url:e})=>"/get_concat_info"===e.pathname,new R({cacheName:"infinity-api",plugins:P})),O(({url:e})=>"/v2/get_ext_version"===e.pathname,new R({cacheName:"infinity-api",plugins:P})),O(({url:e})=>"/v2/get_user_wallpaper_library"===e.pathname,new class{constructor(e={}){if(this._cacheName=o(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[E,...e.plugins]}else this._plugins=[E];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let a;if(this._networkTimeoutSeconds){const{id:i,promise:r}=this._getTimeoutPromise({request:t,event:e,logs:s});a=i,n.push(r)}const r=this._getNetworkPromise({timeoutId:a,request:t,event:e,logs:s});n.push(r);let c=await Promise.race(n);if(c||(c=await r),!c)throw new i("no-response",{url:t.url});return c}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let i,a;try{a=await w({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){i=e}if(e&&clearTimeout(e),i||!a)a=await this._respondFromCache({request:t,event:n});else{const e=a.clone(),s=d({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){0}}return a}_respondFromCache({event:e,request:t}){return m({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}({cacheName:"infinity-api",plugins:j})),O(({url:e})=>"/get-wallpaper"===e.pathname,new S({cacheName:"infinity-wallpaper-list"})),O(({url:e})=>"/get-icons"===e.pathname,new S({cacheName:"infinity-data-api"})),O(({url:e})=>["/api/chat/list","/api/chat/recommended","/api/chat/assistant-list","/api/chat-pay/vip-group"].includes(e.pathname),new R({cacheName:"req-data-api",plugins:(C=600,[new k({maxAgeSeconds:C,maxEntries:10}),new M({statuses:[200],headers:{"i-success":"true"}})]),fetchOptions:{mode:"cors",credentials:"omit"}}))}]);