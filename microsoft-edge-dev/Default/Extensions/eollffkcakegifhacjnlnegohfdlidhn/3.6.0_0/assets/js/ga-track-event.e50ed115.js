async function t(s){const e=window.localStorage.getItem("vc-settings");if(e){const{showExtension:n}=JSON.parse(e);if(!n)return}chrome.runtime.sendMessage({gaEvent:s},n=>{})}export{t as g};
