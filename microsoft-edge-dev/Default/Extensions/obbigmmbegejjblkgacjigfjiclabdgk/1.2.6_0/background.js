var e={};firebase.initializeApp({apiKey:"AIzaSyCwnDHoPVhsjwmLcqLnlTPFgtzKsESuJXk",authDomain:"best-reader-4f943.firebaseapp.com",databaseURL:"https://best-reader-4f943.firebaseio.com",projectId:"best-reader-4f943"});var t=firebase.firestore(),o=CHROME_THEME_COLORS.default;chrome.runtime.onMessage.addListener(function(o,s,a){var u;if(o.fromTOS)return"readerViewPossible"==o.type?(c(),e[s.tab.id]={possible:!0,hostname:o.hostname,url:o.url},d(s.tab.id),r(s.tab.id,n.readerPossible)):"readerViewNotPossible"==o.type?(c(),e[s.tab.id]={possible:!1,hostname:o.hostname,url:o.url},d(s.tab.id)):"forceShowReader"===o.type?(i(o.tabId),a({})):"dismissReader"===o.type?(u=o.tabId,chrome.tabs.sendMessage(u,{type:"dismissReaderView"},function(e){}),a({})):"readerDismissed"==o.type?function(t,o,i){e[t].showingReader=!1,getWebsiteAutoReaderMode(o,function(e){e&&(setWebsiteToAutoReader(o,!1),setTimeout(()=>{setWebsiteToAutoReader(o,!0)},5e3))}),function(t){e[t].possible?r(t,n.readerPossible):r(t,n.readerNotPossible)}(t),i({}),d(t)}(s.tab.id,o.hostname,a):"readerShown"==o.type?function(t){if(!e[t])return;e[t].showingReader=!0,r(t,n.readerOptions),d(t)}(s.tab.id):"sendFeedback"==o.type?function(e,o,n){var r=firebase.auth().currentUser;r?(t.collection("feedbacks").doc(YaMD5.hashStr(e)).set({url:e,[r.uid]:{date:Date(),feedback:o}},{merge:!0}).then(function(){chrome.storage.local.set({[`feedback:${e}`]:{feedback:o}},function(){})}).catch(function(e){console.error("Error adding feedback: ",e)}),n({sent:o})):n({error:"noUser"})}(o.url,o.feedback,a):"signinWithGoogle"==o.type?function(){var e=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithPopup(e).then(function(e){e.credential.accessToken,e.user}).catch(function(e){e.code,e.message,e.email,e.credential})}():"signinAsGuest"==o.type?firebase.auth().signInAnonymously().catch(function(e){e&&(e.code,e.message,console.error(e))}):"signout"==o.type?function(e){firebase.auth().currentUser&&t.collection("users").doc(firebase.auth().currentUser.uid).set({logout:Date()},{merge:!0}).then(function(){firebase.auth().currentUser.uid,firebase.auth().signOut()}).catch(function(e){console.error("Error log out user: ",e),firebase.auth().signOut()});e({})}(a):"getCurrentUser"==o.type?a({currentUser:firebase.auth().currentUser}):console.error("unknown request"),!0});const n={readerPossible:{[CHROME_THEME_COLORS.default]:{32:"images/icon-text-32.png",64:"images/icon-text-64.png"},[CHROME_THEME_COLORS.dark]:{32:"images/icon-text-white-32.png",64:"images/icon-text-white-64.png"}},readerNotPossible:{[CHROME_THEME_COLORS.default]:{32:"images/icon-text-32-2.png",64:"images/icon-text-64-2.png"},[CHROME_THEME_COLORS.dark]:{32:"images/icon-text-32-2.png",64:"images/icon-text-64-2.png"}},readerOptions:{[CHROME_THEME_COLORS.default]:{32:"images/icon-font-32.png",64:"images/icon-font-64.png"},[CHROME_THEME_COLORS.dark]:{32:"images/icon-font-white-32.png",64:"images/icon-font-white-64.png"}}};function r(e,t){chrome.browserAction.setIcon({path:t[o],tabId:e}),t==n.readerPossible?chrome.browserAction.setPopup({popup:"",tabId:e}):t==n.readerNotPossible?chrome.browserAction.setPopup({popup:"popup.html",tabId:e}):t==n.readerOptions&&chrome.browserAction.setPopup({popup:"popup-options.html",tabId:e})}function i(e){chrome.tabs.sendMessage(e,{type:"showReaderView"},function(e){!e||e.readerShown})}Object.freeze(n),chrome.browserAction.onClicked.addListener(e=>{e.id,i(e.id)}),chrome.runtime.onSuspend.addListener(function(){chrome.browserAction.setBadgeText({text:""})});window.onload=function(){firebase.auth().onAuthStateChanged(function(e){if(e){var o=e.displayName||"",n=e.email||"",r=e.emailVerified||!1,i=e.photoURL||"",s=e.isAnonymous,a=e.uid;e.providerData,t.collection("users").doc(a).set({login:Date(),email:n,displayName:o,emailVerified:r,photoURL:i,isAnonymous:s},{merge:!0}).then(function(){}).catch(function(e){console.error("Error set loging user: ",e)})}}),chrome.storage.local.get(["InstallKey"],function(e){e&&e.InstallKey||(chrome.tabs.create({url:chrome.extension.getURL("options.html")},function(e){}),chrome.storage.local.set({InstallKey:!0},function(){}))})};const s=[{id:"readerMode",title:"Enter Reader Mode",contexts:["all"]},{id:"focusMode",title:"Enter Focuse Mode",contexts:["all"]},{id:"options",title:"Options",contexts:["page","frame","selection","link","editable","image","video","audio"]}];var a=!1;function c(){if(!a){a=!0;for(let e of s)chrome.contextMenus.create(e);chrome.contextMenus.onClicked.addListener((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},function(t){t&&t.length>0&&0==t[0].url.toLowerCase().indexOf("http")&&(t[0].url,"focusMode"==e.menuItemId?chrome.tabs.sendMessage(t[0].id,{fromTOS:!0,type:"turnonFocusMode"},function(e){}):"readerMode"==e.menuItemId?chrome.tabs.sendMessage(t[0].id,{fromTOS:!0,type:"showReaderView"},function(e){}):"options"==e.menuItemId&&chrome.runtime.openOptionsPage())})})}}function d(t){if(!a)return;const o=e[t]&&!e[t].showingReader;chrome.contextMenus.update("readerMode",{enabled:o},function(){}),chrome.contextMenus.update("focusMode",{enabled:o},function(){})}chrome.tabs.onActivated.addListener(function(e){d(e.tabId)}),chrome.windows.onFocusChanged.addListener(function(e){chrome.tabs.query({active:!0,lastFocusedWindow:!0},e=>{e.length>0&&d(e[0].id)})}),checkChromeThemeColorIsDark(function(e){o=e?CHROME_THEME_COLORS.dark:CHROME_THEME_COLORS.default}),chrome.storage.onChanged.addListener(function(e,t){for(var n in e){var r=e[n];n==BUTTON_COLOR_KEY&&"local"==t&&(o=r.newValue)}});