import{r as a}from"./index.828e458e.js";import{g as c}from"./ga-track-event.e50ed115.js";import{u as n}from"./use-chrome-storage.ebf04b55.js";import{j as f}from"./jsx-runtime.cdbfd54c.js";const s="/g/g-l38NcMokB-mia-ai-your-ai-companion-with-voice";function g(){const{chromeStorage:t,setChromeStorage:i}=n();return a.exports.useEffect(()=>{c({name:"show_newtab"})},[]),a.exports.useEffect(()=>{if(t.storageLoaded){const e="https://chatgpt.com",m=s,o="?newtab=true";let r=e+m+o;t.miaChatId&&t.miaChatId!==s&&(r=e+t.miaChatId+o),window.location.href=r}},[t.storageLoaded]),a.exports.useEffect(()=>{t.sidebarStatus==="prompt"&&i({sidebarStatus:"acknowledged"})},[t.sidebarStatus]),f("div",{})}export{g as N,s as m};