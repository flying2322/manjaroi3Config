var C=Object.defineProperty;var w=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var f=(r,e,t)=>(w(r,typeof e!="symbol"?e+"":e,t),t);import{r as h}from"./index.828e458e.js";const i=class{constructor(e=!0){this.logToConsole=e,typeof window<"u"&&window.addEventListener("vc-print-logs",()=>{console.log("All logs:"),console.log(i.allLogs)})}static info(e,t){this.instance.write(e,"info",t)}static success(e,t){this.instance.write(e,"success",t)}static warn(e,t){this.instance.write(e,"warning",t)}static error(e,t){this.instance.write(e,"error",t)}static verbose(e,t){this.instance.logToConsole&&i.allLogs.push([Date.now(),"verbose",e,t])}static setup(){if(!i.instance){let e=!1;typeof window<"u"&&(e=window.localStorage.getItem("vc-log")==="true"),this.instance=new i(e)}return i.instance}write(e,t,a){if(this.logToConsole){const o=`color: ${this.getConsoleColor(t)}`;a?console.log(`%c[${t}] ${e}`,o,a):console.log(`%c[${t}] ${e}`,o),i.allLogs.push([Date.now(),t,e,a])}}getConsoleColor(e){return e==="info"?"#2e99d9":e==="warning"?"#ffbb00":e==="success"?"#1abc9c":"#b91e1e"}};let u=i;f(u,"instance"),f(u,"allLogs",[]);function m(r=0){return new Promise(e=>{if(r>5)return u.warn("hasChatGPTVoiceFeature - max retries reached"),e("unset");let t=!0;const a=document.querySelectorAll("a.group");if(a.length>1)return a.forEach(s=>{const o=s,n=o==null?void 0:o.innerText.includes("Upgrade plan");n&&(t=!n)}),e(t);setTimeout(()=>m(r+1),500)})}function p(){return m()}u.setup();const l={storageLoaded:!1,miaEnabled:!1,miaEnabledOptionalNewTab:!1,miaEnabledVcButton:!0,micPermission:"unknown",pendingScreenshot:!1,screenshotBase64:void 0,showWidgetTooltip:!0,showMiaLanguageTooltip:!0,showMiaWelcome:!0,miaChatId:void 0,sidebarOpen:!1,sidebarStatus:"unset",enableChatGptVoice:!1,hasChatGptVoice:"unset"},c="vcStorage",L=h.exports.createContext({chromeStorage:l,setChromeStorage:()=>{}});let d=!1;function T(){const[r,e]=h.exports.useState(l);h.exports.useEffect(()=>{r.storageLoaded&&r.hasChatGptVoice==="unset"&&p().then(s=>{s!=="unset"&&t({hasChatGptVoice:s,enableChatGptVoice:s})})},[r]);const t=s=>{chrome.storage.local.get(c,o=>{const g={...o[c]||l,...s};chrome.storage.local.set({[c]:g}),e(g)})},a=()=>new Promise(s=>{chrome.storage.local.get(c,o=>{const n=o[c]||l;s(n)})});return h.exports.useEffect(()=>{if(r.storageLoaded&&!d){d=!0;const s={...l,...r},o={};Object.keys(l).forEach(n=>{n in s&&(o[n]=s[n])}),chrome.storage.local.set(o,()=>{})}},[r.storageLoaded]),h.exports.useEffect(()=>{chrome.storage.local.get(c).then(o=>{const n=o[c];n?e(n):t({storageLoaded:!0})});const s=o=>{var g;const n=(g=o[c])==null?void 0:g.newValue;n&&e(n)};return chrome.storage.onChanged.addListener(s),()=>{chrome.storage.onChanged.removeListener(s)}},[]),{chromeStorage:r,setChromeStorage:t,getChromeStorageAsync:a}}export{L as C,u as L,c,T as u};