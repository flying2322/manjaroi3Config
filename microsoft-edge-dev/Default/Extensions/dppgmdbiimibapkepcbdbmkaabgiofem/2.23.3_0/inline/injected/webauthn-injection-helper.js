"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c9a692c8-fd12-59cd-ad6a-0f04a58c5185")}catch(e){}}();
(()=>{var n=window.location.hostname.includes("dropbox")&&(window.location.pathname.includes("get")||window.location.search.includes("download_id"));window.hasWebauthnInjectionHelperRun!==!0&&!n&&o();function o(){window.hasWebauthnInjectionHelperRun=!0;let e=document.createElement("script");e.src=chrome.runtime.getURL("/inline/injected/webauthn-listeners.js"),document.documentElement.prepend(e),e.remove()}})();

//# debugId=c9a692c8-fd12-59cd-ad6a-0f04a58c5185
