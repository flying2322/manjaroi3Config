import{c as a}from"../../../assets/js/use-chrome-storage.ebf04b55.js";import"../../../assets/js/index.828e458e.js";async function m(){let t=(await chrome.storage.local.get("clientId")).clientId;return t||(t=self.crypto.randomUUID(),await chrome.storage.local.set({clientId:t})),t}const u=30;async function p(){let{sessionData:e}=await chrome.storage.session.get("sessionData");const t=Date.now();return e&&e.timestamp&&((t-e.timestamp)/6e4>u?e=null:(e.timestamp=t,await chrome.storage.session.set({sessionData:e}))),e||(e={session_id:t.toString(),timestamp:t.toString()},await chrome.storage.session.set({sessionData:e})),e.session_id}const h="https://www.google-analytics.com/mp/collect",f="G-67EVHBE3DC",w="bXxiMdAmTDOHvtvFKxxjRg",I=100;let i=[],l=Date.now();async function c(){try{if(l=Date.now(),i.length===0)return;const e=i;i=[];const t=await m();await fetch(`${h}?measurement_id=${f}&api_secret=${w}`,{method:"POST",body:JSON.stringify({client_id:t,events:[e]})})}catch(e){console.error(e)}}function b(e){i.push(e),i.length>0&&(l+2e3>Date.now()?c():setTimeout(c,2e3))}async function d(e){var t;try{const n=await m(),s=await p(),o=(t=e==null?void 0:e.params)!=null?t:{},g={...e,params:{...o,client_id:n,session_id:s,engagement_time_msec:I}};b(g)}catch(n){console.error(n)}}function y(){return new Promise(e=>{chrome.storage.local.get(a,t=>{e(t[a])})})}function r(e){chrome.storage.local.get(a,t=>{const n=t[a];if(!n){console.error("No current storage found");return}const s={...n,...e};chrome.storage.local.set({[a]:s})})}chrome.runtime.setUninstallURL("https://voicecontrol.chat/feedback/offboarding");chrome.runtime.onInstalled.addListener(e=>{e.reason===chrome.runtime.OnInstalledReason.INSTALL&&chrome.tabs.create({url:"https://chatgpt.com/?new-vc-install=true"})});chrome.tabs.onCreated.addListener(async e=>{if(e.pendingUrl==="chrome://newtab/"){const t=await y(),n=chrome.runtime.getURL("src/pages/newtab/index.html");e.id&&t.miaEnabledOptionalNewTab&&n&&chrome.tabs.update(e.id,{url:n})}});chrome.runtime.onMessage.addListener(async(e,t,n)=>{var s;if(e.enableNewTab&&chrome.permissions.request({permissions:["tabs"]},o=>{r({miaEnabledOptionalNewTab:o})}),e.gaEvent&&d(e.gaEvent),e.promptPermission&&(console.log("Background: prompting permission"),chrome.storage.local.set({micPermission:"prompt",micRePrompt:new Date().getTime()})),e.openSidepanel){const o=chrome.sidePanel;await o.open({windowId:(s=t.tab)==null?void 0:s.windowId}),await o.setOptions({path:"src/pages/sidepanel/index.html",enabled:!0})}n({message:"Message received"})});chrome.runtime.onConnect.addListener(function(e){e.name==="mia-sidepanel"&&(r({sidebarOpen:!0}),e.onDisconnect.addListener(async()=>{d({name:"close_mia"}),r({sidebarOpen:!1})}))});