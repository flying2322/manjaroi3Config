function NRAlert(){let e=this;function t(){e.capsule&&(e.capsule.style.display="none")}function r(t="generic",n=null){let a=["alert-prem-tts-limit","alert-plus-tts-limit","alert-upgrade","alert-upgrade-error","alert-upgrade-success","alert-generic","alert-google-drive-preview","alert-google-docs-no-annotated","alert-no-free-voices","alert-invalid-page","alert-upgrade-unsupported"];for(let t=0;t<a.length;t++)e.shadow.getElementById(a[t]).style.display="none";"alert-upgrade"==t&&n?(e.data=n,function(t=null){if(!t)return;chrome.runtime.sendMessage({fn:"previewUpgradeReq",data:t},(n=>{if(chrome.runtime.lastError,""!=n.error){let a=null;null!=t.errors[n.error]&&(a=t.errors[n.error]),a&&(e.shadow.getElementById("alert-upgrade-error-msg").innerHTML=a),r("alert-upgrade-error")}else{const t=(n.resp/100).toFixed(2);e.shadow.getElementById("alert-upgrade-price").innerHTML="$"+t+" USD"}}))}(n)):"alert-plus-tts-limit"==t&&(e.license=n.license?n.license:0,e.data=n),e.shadow.getElementById(t).style.display="block"}function n(t,r){return new Promise(((n,a)=>{let l;if(!t){let e=r.match(/\.([^.]+)$/);e&&(t=e[1])}t||(t="js");const s="nr-ext-"+r;r=chrome.runtime.getURL(r),"css"===t?(l=document.createElement("link"),l.id=s,l.type="text/css",l.rel="stylesheet",l.href=r,e.shadow.appendChild(l),n()):"js"===t?(l=document.createElement("script"),l.id=s,fetch(r).then((e=>e.text())).then((t=>{l.textContent=t,e.shadow.appendChild(l),n()})).catch((e=>{n()}))):n()})).catch((e=>{}))}e.capsule=null,e.shadow=null,e.showAlert=function(a,l,s){let o=a.alertType?a.alertType:"generic",c=document.getElementById("nr-ext-alert-capsule"),i=a.data;if(c)r(o,i),e.capsule.style.display="block";else try{return new Promise((a=>{fetch(chrome.runtime.getURL("injected/nr-ext-alert/nr-ext-alert.html")).then((e=>e.text())).then((async a=>{await async function(t){try{e.capsule=document.createElement("DIV"),e.capsule.id="nr-ext-alert-capsule",e.capsule.style.width=0,e.capsule.style.height=0,e.capsule.style.top=0,e.capsule.style.right=0,e.shadow=e.capsule.attachShadow({mode:"open"}),await async function(){try{await n(null,"injected/nr-ext-alert/nr-ext-alert.css")}catch(e){}}();const r=document.createElement("DIV");r.innerHTML=t;const a=[];for(;r.children.length>0;)a.push(r.children[0]),e.shadow.appendChild(r.children[0]);document.body.appendChild(e.capsule)}catch(e){}}(a),await async function(){try{await n(null,chrome.runtime.getURL("injected/nr-ext-alert/nr-ext-alert.css")),e.shadow.getElementById("alert-prem-tts-limit-upgrade").onclick=()=>{chrome.runtime.sendMessage({fn:"showUpgradePage"},(()=>{chrome.runtime.lastError})),t()},e.shadow.getElementById("alert-prem-tts-limit-restore-license").onclick=()=>{chrome.runtime.sendMessage({fn:"updateLicense"},(()=>{chrome.runtime.lastError})),t()},e.shadow.getElementById("alert-prem-tts-limit-switch-free").onclick=()=>{readingBar.setReadingBarSetting("voiceType","free",{toPlay:!0,sameLang:!0,updateReadingBarUI:!0}),t()},e.shadow.getElementById("alert-plus-tts-limit-upgrade").onclick=()=>{e.license<12?chrome.runtime.sendMessage({fn:"showUpgradePage"},(()=>{chrome.runtime.lastError})):chrome.runtime.sendMessage({fn:"upgrade"},(()=>{chrome.runtime.lastError})),t()},e.shadow.getElementById("alert-plus-tts-limit-restore-license").onclick=()=>{chrome.runtime.sendMessage({fn:"updateLicense"},(()=>{chrome.runtime.lastError})),t()},e.shadow.getElementById("alert-plus-tts-limit-switch-premium").onclick=()=>{readingBar.setReadingBarSetting("voiceType","prem",{toPlay:!0,sameLang:!0,updateReadingBarUI:!0}),t()},e.shadow.getElementById("alert-google-drive-preview-continue").onclick=()=>{chrome.runtime.sendMessage({fn:"setShouldCheckForPreviewMode",val:!1},(()=>{chrome.runtime.lastError})),chrome.runtime.sendMessage({message:"play",caller:"google drive preview warning"},(()=>{chrome.runtime.lastError})),t()},e.shadow.getElementById("alert-google-drive-preview-close").onclick=()=>{t()},e.shadow.getElementById("alert-google-docs-no-annotated-reload").onclick=()=>{chrome.runtime.sendMessage({fn:"reloadPage"},(()=>{chrome.runtime.lastError}))},e.shadow.getElementById("alert-no-free-voices-close").onclick=()=>{t()},e.shadow.getElementById("alert-generic-contact").onclick=()=>{window.open('https://www.naturalreaders.com/about.html#contactus"',"_blank"),t()},e.shadow.getElementById("alert-generic-reload").onclick=()=>{chrome.runtime.sendMessage({fn:"reloadPage"},(()=>{chrome.runtime.lastError}))},e.shadow.getElementById("alert-invalid-page-close").onclick=()=>{t()},e.shadow.getElementById("alert-upgrade-unsupported-close").onclick=()=>{t()},e.shadow.getElementById("alert-upgrade-demo").onclick=()=>{chrome.runtime.sendMessage({fn:"showPlusVoiceDemoPage"},(()=>{chrome.runtime.lastError})),t()},e.shadow.getElementById("alert-upgrade-confirm").onclick=()=>{chrome.runtime.sendMessage({fn:"sendUpgradeReq",data:e.data},(t=>{if(chrome.runtime.lastError,""!=t.error){let n="Something went wrong...";null!=e.data.errors[t.error]&&(n=e.data.errors[t.error]),e.shadow.getElementById("alert-upgrade-error-msg").innerHTML=n,r("alert-upgrade-error")}else r("alert-upgrade-success")}))},e.shadow.getElementById("alert-upgrade-error-close").onclick=()=>{t()},e.shadow.getElementById("alert-upgrade-success-close").onclick=()=>{t()},e.shadow.getElementById("nr-ext-alert-close").onclick=()=>{e.capsule.style.display="none"}}catch(e){}}(),r(o,i)})).catch((e=>{})),a()}))}catch(e){}},e.hideAlert=t,e.license=0,e.data=null,chrome.runtime.onMessage.addListener((function(t,r,n){e[t.fn]&&e[t.fn](t,r,n)}))}var nrAlert=nrAlert||new NRAlert;