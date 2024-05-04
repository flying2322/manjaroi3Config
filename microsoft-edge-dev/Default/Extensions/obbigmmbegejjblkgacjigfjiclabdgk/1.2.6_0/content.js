const e=window.location.hostname,t=350,n={normal:1,reader:2,focusMode:3};var o;Object.freeze(n);var r,i,a=n.normal,s="",d=0,c=null,l=null;const u={zoom:1,theme:"light",font:"sans"};var m=u;const g={sans:"-apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif",seravek:"Seravek, Roboto,Helvetica,Arial,sans-serif",serif:"Georgia, Times New Roman, serif",charter:"Charter, Georgia, Times New Roman, serif"};Object.freeze(g);const f=[{selector:"nav.breadcrumb",sites:["tomsguide.com"]}];setTimeout(()=>{isProbablyReaderable(document)?(o=k(),chrome.runtime.sendMessage({fromTOS:!0,type:"readerViewPossible",url:location.href,hostname:e},function(e){})):getWebsiteAlwaysStartReader(e,function(t){t?(o=k(),chrome.runtime.sendMessage({fromTOS:!0,type:"readerViewPossible",url:location.href,hostname:e},function(e){})):chrome.runtime.sendMessage({fromTOS:!0,type:"readerViewNotPossible",url:location.href,hostname:e},function(e){})})},10),getWebsiteAutoReaderMode(e,function(e){e&&setTimeout(()=>{E()},100)}),chrome.storage.sync.get(["config"],function(e){e&&e.config&&(m=e.config)});const h=`feedback:${location.href}`;chrome.storage.local.get([h],function(e){if(e&&e[h]){const t=e[h];s=t.feedback}}),initStorageForPage(location.href),chrome.storage.onChanged.addListener(function(e,t){for(var n in e){var o=e[n];if(o.oldValue,o.newValue,n==h&&"local"==t){const e=o.newValue;s=e.feedback,v()}}});var b=new ResizeObserver(e=>{for(let t of e){const e=t.contentRect;t.target,e.width,e.height,p(e.width)}});function p(e){const t=788*(m.zoom||1);if(!e){const t=document.getElementById("best-reader-view-outer-container").getBoundingClientRect();e=t.right-t.left}const n=document.getElementById("best-reader-view-tos");var o=(e-t)/2,r=0;if(o>460)r=o-300-80,o=300,i();else if(o>350){const e=o-300-20;r=Math.max(o-300-20-e/3,30),o=o-r-e/3,i()}else o>170?(r=30,o=o-30-20,i()):n.style.display="none";function i(){n.style.left=r+"px",n.style.width=o+"px",n.style.display="block"}}function v(){const e=document.getElementById("best-reader-feedback-needswork"),t=document.getElementById("best-reader-feedback-awesome"),n=600-(Date.now()-d);setTimeout(()=>{"awesome"==s?(e.classList.remove("sent"),t.classList.add("sent")):"needswork"==s?(e.classList.add("sent"),t.classList.remove("sent")):(e.classList.remove("sent"),t.classList.remove("sent"))},Math.max(0,n))}const y="bestReaderTweetId",w="bestReaderTweetInjected";function T(e){if(o.twitterWidgets,o.twitterWidgets){var t,n,r=!1;for(let t of o.twitterWidgets){const n=document.querySelector(`[data-best-reader-tweet-injected="${t.id}"]`);if(n){let o=t.outerHTML;o=o.replace(/ data-twitter-extracted-/," "),"dusk"!=e&&"dark"!=e||(o=o.replace(/<blockquote /,'<blockquote data-theme="dark" ')),n.outerHTML=o,r=!0}}if(r){const e=document.getElementsByClassName("twitter-tweet");for(let t of e)t.parentNode.removeChild(t);(t=document.body,n="https://platform.twitter.com/widgets.js",new Promise((e,o)=>{const r=document.createElement("script");r.async=!0,r.charset="utf-8",r.src=n,r.addEventListener("load",e),r.addEventListener("error",()=>o("Error loading script.")),r.addEventListener("abort",()=>o("Script loading aborted.")),t.appendChild(r)})).then(()=>{}).catch(e=>{})}}}function k(){const e=function(e){var t=[];const n=e.querySelectorAll("blockquote.twitter-tweet");for(var o=0;o<n.length;o++){const e=n[o];e.dataset[y]=o;const r=document.createElement("blockquote");r.innerHTML="hello world, hello world, hello world, hello world, hello world, hello world",r.dataset[w]=o,e.parentNode.appendChild(r),t.push({outerHTML:e.outerHTML,id:`${o}`})}return t}(document.body);var t=document.cloneNode(!0);!function(e){const t=e.getElementsByTagName("img");for(var n=[],o=0;o<t.length;o++){const e=t[o];if("none"!=e.style.display){const t=e.getBoundingClientRect();t.width>0&&t.height>0&&n.push({img:e,rect:t})}}n.sort(function(e,t){return e.rect.top<t.rect.top});var r=n.pop();for(let e of n)r.rect.top==e.rect.top&&r.rect.height==e.rect.height&&(r.img.isHidden=!0),r=e}(document.body),function e(t,n){if(t.childElementCount==n.childElementCount){(null===t.offsetParent&&t!==document.body||t.isHidden)&&"img"==t.tagName.toLowerCase()&&(n.isHidden=!0);for(var o=0;o<t.childNodes.length;o++)e(t.childNodes[o],n.childNodes[o])}else console.error("node has different count:",t,n)}(document.body,t.body),function(e){const t=["data-src","data-gl-src","data-ob-src","data-hi-res-src","data-original","data-src-medium","data-src-large","data-src-mini"],n=e.getElementsByTagName("img");for(var o=0;o<n.length;o++){const e=n[o];if(!e.src){for(var r=null,i=0;i<t.length&&!(r=e.getAttribute(t[i]));i++);r&&(e.src,e.src=r)}}}(t);const n=t.getElementsByTagName("script");for(let e of n)e.parentNode.removeChild(e);var o;!function(e,t){for(let n of t){const t=e.querySelector(`[data-best-reader-tweet-injected="${n.id}"]`);t&&t.parentNode.removeChild(t)}}(document.body,e),o=t.body,f.forEach(e=>{e.selector;const t=o.querySelectorAll(e.selector);for(let n=0;n<t.length;n++){const o=t[n];e.selector,o.parentNode.removeChild(o)}});var r=null;try{r=new Readability(t,{classesToPreserve:["twitter-tweet","twitter-tweet-rendered"]}).parse()}catch(e){console.error(e)}if(!r)return null;r.twitterWidgets=e,r.textLength=r.textContent.trim().length;const i=document.querySelector("meta[property='og:image']");return i&&(r.ogImage=i.getAttribute("content")),r.siteName||(r.siteName=document.location.hostname),r}function E(){return a===n.reader||(n.focusMode,(!o||o.textLength<750)&&(o=k()),!!o&&(function(){o.savedIFrameYoutubeVideo=function(){if(!o)return console.error("no article!"),null;const e=document.getElementsByTagName("iframe");for(var t=0;t<e.length;t++){const n=e[t];if(n.src.indexOf("youtube.com/")>=0){const e=n.getBoundingClientRect(),t=document.body.getBoundingClientRect().top;if(e.width>500&&e.height>300&e.top-t<800)return n.outerHTML,{video:n.outerHTML}}}const n=document.getElementsByTagName("video");for(var t=0;t<n.length;t++){const e=n[t],o=e.getBoundingClientRect(),i=document.body.getBoundingClientRect().top;if(o.width>500&&o.height>300&&o.top-i<800){if(e.src){if(e.src,e.poster,0!=e.src.indexOf("blob"))return e.removeAttribute("preload"),e.setAttribute("controls",!0),e.outerHTML,{video:e.outerHTML};if(e.poster)return{image:e.poster}}const t=e.getElementsByTagName("source");for(var r=0;r<t.length;r++){const n=t[r],o=n.src;return n.src=o,e.outerHTML,e.removeAttribute("preload"),e.setAttribute("controls",!0),e.attributes,{video:e.outerHTML}}}}return null}(),function(){const e=m.theme||"light",t=G[e].backgroundColor.body,n=document.createElement("div");n.classList.add("best-reader-blurry-cover"),document.body.appendChild(n),t&&(n.style.backgroundColor=t),setTimeout(()=>{n.style.opacity=1},100)}();const e=document.implementation.createHTMLDocument(""+(document.title||""));newDiv=e.createElement("div"),newDiv.id="best-reader-view-outer-container",newDiv.innerHTML=j,e.body.appendChild(newDiv);var t=document.createElement("meta");t.name="viewport",t.content="width=device-width, initial-scale=1.0",e.getElementsByTagName("head")[0].appendChild(t),chrome.storage.sync.get(["config"],function(t){setTimeout(()=>{document.replaceChild(document.importNode(e.documentElement,!0),document.documentElement),m=t.config||u,document.documentElement.style.setProperty("--window-height",`${window.innerHeight}px`),function(e,t){const n=e.content.replace(/ id="(?!.*rollover-people-).*?"/gm,"");n.replace(/class=".*?"/gm,"");if(document.getElementById("best-reader-view-title").innerHTML=e.title,e.byline&&("About 0 Minutes"==e.byline||"About Minutes"==e.byline)){let t=Math.max(1,Math.floor(e.textLength/1e3));e.byline=`About ${t} Minutes`}e.byline,document.getElementById("best-reader-view-subtitle").innerHTML=e.byline||"",document.getElementById("best-reader-view-article").innerHTML=n,J(null,document.getElementById("best-reader-view-article")),de(),K(t.theme||"light"),document.getElementById("best-reader-view-outer-container").classList.add(`best-reader-theme-${t.theme}`);const o=document.getElementById("best-reader-view-content");t.zoom&&(o.style.zoom=t.zoom);ne(t.font)}(o,m),v(),chrome.storage.sync.get(["top-hint-count"],function(e){var t=0;e&&e["top-hint-count"]&&(t=e["top-hint-count"]),t<3?setTimeout(()=>{var e=document.getElementById("best-reader-view-top-hint");e.style.opacity=1,setTimeout(()=>{e.style.opacity=0},5e3),t+=1,chrome.storage.sync.set({"top-hint-count":t},function(){})},800):chrome.storage.sync.get(["fullscreen-hint-count"],function(e){var t=0;e&&e["fullscreen-hint-count"]&&(t=e["fullscreen-hint-count"]),t<3&&setTimeout(()=>{var e=document.getElementById("best-reader-view-hint-fullscreen");e.style.opacity=1,setTimeout(()=>{e.style.opacity=0},5e3),t+=1,chrome.storage.sync.set({"fullscreen-hint-count":t},function(){})},800)})}),function(){for(var e=document.getElementsByTagName("table"),t=0;t<e.length;t++){var n=e[t];n.clientWidth>648&&(n.style.zoom=648/n.clientWidth)}}(),function(){for(var e=document.querySelectorAll("#best-reader-view-article li"),t=[],n=0;n<e.length;n++){var o=e[n];(!o.innerText||o.innerText.trim().length<1)&&t.push(o)}for(let e of t)e.parentNode.removeChild(e)}(),function(){for(var e=document.querySelectorAll("#best-reader-view-article hr"),t=0;t<e.length;t++){var n=e[t];n.parentNode.removeChild(n)}}(),setTimeout(()=>{!function(){if(selectionsForPage[location.href]){for(var e=0;e<selectionsForPage[location.href].length;e++){const t=selectionsForPage[location.href][e];t.note?le(t):q(t)}O()}}()},100),document.getElementById("best-reader-view-outer-container").addEventListener("click",D),document.getElementById("best-reader-feedback-awesome").addEventListener("click",_),document.getElementById("best-reader-feedback-needswork").addEventListener("click",V),document.getElementById("best-reader-feedback-contact").addEventListener("click",Y),document.getElementById("best-reader-view-container").addEventListener("mouseup",S),document.getElementById("best-reader-view-container").addEventListener("mousedown",N),document.getElementById("best-reader-view-tos").addEventListener("click",P),T(m.theme||"light"),chrome.runtime.sendMessage({fromTOS:!0,type:"readerShown"},function(e){});const n=document.getElementById("best-reader-view-outer-container");b.observe(n),setTimeout(()=>{const e=document.getElementById("best-reader-view-content");e.classList.add("bounces-in")},50)},250)})}(),a=n.reader,!0))}function C(){a===n.reader?(chrome.runtime.sendMessage({fromTOS:!0,type:"readerDismissed",hostname:e},function(e){}),document.getElementById("best-reader-view-content").classList.remove("bounces-in"),document.getElementById("best-reader-view-content").classList.add("bounces-out"),document.getElementById("best-reader-view-content").style.marginTop=`${window.innerHeight}px`,document.getElementById("best-reader-view-outer-container").style.backgroundColor="transparent",a=n.normal,b.disconnect(),setTimeout(()=>{location.reload()},150)):console.warn("reader view is not shown")}function L(){c&&c.parentNode.removeChild(c),c=null}chrome.runtime.onMessage.addListener(function(e,t,n){if("showReaderView"==e.type){const e=E();n({readerShown:e})}else"dismissReaderView"==e.type?(C(),n()):"renderOptions"==e.type?(!function(e){if(e.zoom)m.zoom=e.zoom,document.getElementById("best-reader-view-content").style.zoom=e.zoom,p();else if(e.font)m.font=e.font,ne(e.font);else if(e.theme){const t=document.getElementById("best-reader-view-outer-container");t.classList.remove(`best-reader-theme-${m.theme}`),t.classList.add(`best-reader-theme-${e.theme}`),m.theme=e.theme,K(e.theme)}}(e.data),n({farewell:"goodbye"})):"turnonFocusMode"==e.type&&(Z(),n({}));return!0}),document.onkeydown=function(e){if(e=e||window.event,!document.getElementById("best-reader-note-cover"))if(a===n.reader){if(27==e.keyCode)chrome.storage.sync.set({"top-hint-count":3},function(){}),document.fullScreenElement&&null!==document.fullScreenElement||document.webkitIsFullScreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():C();else if(70==e.keyCode&&e.altKey){chrome.storage.sync.set({"fullscreen-hint-count":3},function(){});var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen()}}else a===n.focusMode?27==e.keyCode&&ee():a===n.normal&&(82==e.keyCode&&e.altKey?E():70==e.keyCode&&e.altKey&&Z())};const x=`\n    <div style="display:flex;">\n        <div class="best-reader-tooltip-icon" id="best-reader-highlight">${fa_pencil}</div>\n        <div class="best-reader-tooltip-icon" id="best-reader-notes">${fa_comment}</div>\n        <div class="best-reader-tooltip-icon" id="best-reader-twitter">${fa_twitter}</div>\n        <div class="best-reader-tooltip-icon" id="best-reader-facebook">${fa_facebook}</div>\n    </div>\n    `,I=`<div class='best-reader-popover' style='width:272px'>\n        <div class="best-reader-tooltip-icon" data-tooltip-type="unhighlight">${fa_pencil}</div>\n        <div class="best-reader-tooltip-icon" data-tooltip-type="notes">${fa_comment}</div>\n        <div class="best-reader-tooltip-icon" data-tooltip-type="twitter">${fa_twitter}</div>\n        <div class="best-reader-tooltip-icon" data-tooltip-type="facebook" >${fa_facebook}</div>\n        <div style="border-left:1px solid #999;height:12px"></div>\n        <div style='padding-left: 10px; font-size: 14px; padding-right: 10px;'>You highlighted</div>\n    </div>`,B={"best-reader-highlight":function(){const e=window.getSelection();if(!e||"Range"!=e.type)return;const t=c.selectInfo;q(t),e.empty(),L(),saveSelectionToStorage(location.href,t),O()},"best-reader-notes":function(){const e=window.getSelection();if(!e||"Range"!=e.type)return void console.error("no selection!");const t=c.selectInfo;(function(e){e.selectedText;const t=e.node||F(e);if(!t)return void console.error("Can't find the highlighted text");e.isParagraph?t.innerHTML=`<mark id=${W} class='best-reader-note-mark'>${t.innerHTML}</mark>`:t.innerHTML=t.innerHTML.substring(0,e.startOffset)+`<mark id=${W} class='best-reader-note-mark'>${e.selectedText}</mark>`+t.innerHTML.substring(e.endOffset)})(t),function(e,t){const n=function(){const e=document.createElement("div");return e.id="best-reader-note-cover",document.getElementById("best-reader-view-container").appendChild(e),e.style.opacity=1,e}(),o=document.createElement("div");o.classList.add("best-reader-note"),o.innerHTML=ce;const r=t.parentNode;r.appendChild(o),setTimeout(()=>{document.getElementById("best-reader-note-input").focus()},10),t.style.top;var i=parseInt(t.style.top)-204;i<20?(o.classList.add("position-below"),i+=280):o.classList.add("position-above");o.style.top=i+"px",o.style.left=parseInt(t.style.left)-121+"px",function(e,t,n){document.getElementById("best-reader-note-cancel").addEventListener("click",function(n){n.stopPropagation(),e.parentNode.removeChild(e),t.parentNode.removeChild(t);const o=document.getElementById(W);o.outerHTML=o.innerHTML}),document.getElementById("best-reader-note-send").addEventListener("click",function(o){if(o.stopPropagation(),document.getElementById("best-reader-note-send").classList.contains("disabled"))return;const r=document.getElementById("best-reader-note-input").value.trim();if(r.length<1)return void console.error("best reader: no text input!");e.parentNode.removeChild(e),t.parentNode.removeChild(t);const i=document.getElementById(W);i.outerHTML=i.innerHTML,n.note=r,le(n),saveSelectionToStorage(location.href,n),O()})}(n,o,e),document.getElementById("best-reader-note-input").addEventListener("input",function(e){const t=document.querySelector(".best-reader-note .letter-count"),n=e.target.value;n.length>0?(ue(!0),t.style.display="block",t.innerText=`${n.length}/80`):(ue(!1),t.style.display="none"),e.stopPropagation()}),document.getElementById("best-reader-note-input").addEventListener("focus",function(e){e.stopPropagation()})}(t,c),e.empty(),L()},"best-reader-twitter":function(){const e=window.getSelection();if("Range"!=e.type||e.isCollapsed||0==e.rangeCount||e.toString().trim().length<1)return void console.error("twitter: something wrong, no selection");A(e.toString())},"best-reader-facebook":function(){const e=window.getSelection();if("Range"!=e.type||e.isCollapsed||0==e.rangeCount||e.toString().trim().length<1)return void console.error("facebook: something wrong, no selection");z(e.toString())}};function M(e){for(var t=e.target;t;){if(t.id&&B[t.id])return t;t=t.parentNode}return null}function H(e){for(var t=e.target;t;){if(t&&t.dataset&&t.dataset.tooltipType)return t;t=t.parentNode}return null}function N(e){"best-reader-note-input"!=e.target.id&&(document.getElementById("best-reader-note-cover")?e.preventDefault():M(e)?e.preventDefault():H(e)&&e.preventDefault())}function S(e){if("best-reader-note-input"==e.target.id)return;if(document.getElementById("best-reader-note-cover"))return void e.preventDefault();const n=M(e);if(n)return e.preventDefault(),void B[n.id]();if(c)return e.preventDefault(),L(),void window.getSelection().empty();const r=H(e);r&&(e.preventDefault(),function(e){function t(e){const t=e.parentNode,n=t.parentNode;return n.innerText.trim().slice("you highlighted".length).trim()}"unhighlight"==e.dataset.tooltipType?function(e){const t=e.parentNode,n=t.parentNode;const o=n.id;n.removeChild(t);const r=n.innerHTML;n.outerHTML=r,removeSelectionFromStorage(location.href,o),O()}(e):"notes"==e.dataset.tooltipType||("twitter"==e.dataset.tooltipType?A(t(e)):"facebook"==e.dataset.tooltipType?z(t(e)):"delete"==e.dataset.tooltipType?function(e){var t=e;for(;"MARK"!=e.tagName;)t=e,e=e.parentNode;mark=e,mark;const n=mark.id;mark.removeChild(t);const o=mark.innerHTML;mark.outerHTML=o,removeSelectionFromStorage(location.href,n),O()}(e):console.error("button not processed:",e.dataset.tooltipType))}(r));const i=window.getSelection();if("Range"!=i.type||i.isCollapsed||0==i.rangeCount||i.toString().trim().length<1)return;const a=function(e){const t=function(e){const t=e.toString().trim();var n=e.getRangeAt(0).startContainer.parentNode;for(;n!=document.body;){if(n.innerText.includes(t))return n;n=n.parentNode}return null}(e);if(!t)return console.error("found no node for selection"),null;if("best-reader-view-title"==t.id||"best-reader-view-subtitle"==t.id)return console.warn("best reader: we do not support commenting on title or subtitle"),null;const n=t.dataset.bestReaderViewId;if(n.length<5)return null;const r=e.toString().trim(),i=t.innerText.trim().length==r.length,a=e.getRangeAt(0);if(!i){if(a.startContainer.parentNode!=t||a.endContainer.parentNode!=t)return null;const e=[...a.startContainer.parentNode.childNodes].indexOf(a.startContainer),n=[...a.endContainer.parentNode.childNodes].indexOf(a.endContainer);if(e<0||n<0)return console.error("can not find the selected text!",r),null;const o=t.innerHTML;var s=0;if(0==e)s=R(o,a.startOffset);else{const e=a.startContainer.previousSibling;if(!e)return console.error("can not find the previous sibling of the start"),null;const t=o.indexOf(e.outerHTML);s=t+e.outerHTML.length,s+=R(o.substring(s),a.startOffset)}var d=0;if(0==n)d=R(o,a.endOffset);else{const e=a.endContainer.previousSibling;if(!e)return console.error("can not find the end previous sibling"),null;const t=o.indexOf(e.outerHTML);d=t+e.outerHTML.length,d+=R(o.substring(d),a.endOffset)}}const c=document.getElementById("best-reader-view-content"),l={sid:(new Date).getTime()+"-"+Math.random().toString(36).substr(2,16),selectedText:r,readerViewID:n,innerHTMLMD5:YaMD5.hashStr(t.innerHTML),isParagraph:i,zoom:c.style.zoom,boundingRect:$(a.getBoundingClientRect()),clientRects0:$(a.getClientRects()[0]),contentTop:c.getBoundingClientRect().top,startOffset:s,endOffset:d,title:o.title};return l.node=t,l}(i);a&&(l&&clearTimeout(l),l=null,l=setTimeout(()=>{!function(e){let t=e.clientRects0;const n=document.createElement("div");n.classList.add("best-reader-popover");var o=79,r=23;e.node.outerHTML.indexOf("<mark")<0?n.innerHTML=x:(n.innerHTML="<p>&nbsp;&nbsp;One highlight per paragraph&nbsp;&nbsp;<p>",r=49,o=118);const i=t.left+Math.ceil((t.right-t.left)/2)-o;n.style.left=`${i}px`;const a=document.getElementById("best-reader-view-content"),s=t.top-a.getBoundingClientRect().top-r;n.style.top=`${s}px`,a.appendChild(n),(c=n).selectInfo=e}(a),l=null},t))}function R(e,t){for(var n,o=0,r=0;o<t&&r<e.length;){let t=e.charAt(r);n?";"==t&&(n=!1,o++):"&"==t?n=!0:o++,r++}return r}function $(e){const{top:t,right:n,left:o,bottom:r}=e;return{top:t,right:n,left:o,bottom:r}}function O(){selectionsForPage[location.href].sort(function(e,t){return-e.contentTop+e.clientRects0.top-(-t.contentTop+t.clientRects0.top)}),selectionsForPage[location.href];const e=document.querySelector("#best-reader-view-tos-content>ul");if(e.innerHTML="",selectionsForPage[location.href])for(var t=0;t<selectionsForPage[location.href].length;t++){const e=selectionsForPage[location.href][t];(e.note?n(e.note):o(e.selectedText)).addEventListener("click",function(){document.getElementById("best-reader-view-outer-container").scrollTo({top:-e.contentTop,left:0,behavior:"smooth"})})}function n(t){const n=document.createElement("li");return n.classList.add("note"),n.innerText=t,e.appendChild(n),n}function o(t){const n=document.createElement("li");return n.classList.add("highlight"),n.innerText=t,e.appendChild(n),n}}function F(e){if(!e.readerViewID)return console.error("highlight does not have reader view id"),null;const t=document.querySelector(`[data-best-reader-view-id="${e.readerViewID}"]`);return YaMD5.hashStr(t.innerHTML)!=e.innerHTMLMD5&&console.error("selection html source code changed!",t,e),t}function q(e){const t=e.node||F(e);if(t)if(e.isParagraph)t.innerHTML=`<mark id=${e.sid}>${I}${t.innerHTML}</mark>`,t.getElementsByClassName("best-reader-popover")[0].style.left=e.boundingRect.width/2-150+"px";else{t.innerHTML,e.selectedText,t.innerHTML=t.innerHTML.substring(0,e.startOffset)+`<mark id=${e.sid}>${I}${e.selectedText}</mark>`+t.innerHTML.substring(e.endOffset),0==document.getElementById("best-reader-view-page").getBoundingClientRect().left-e.clientRects0.left&&0!=e.startOffset?t.getElementsByClassName("best-reader-popover")[0].style.top="-14px":t.getElementsByClassName("best-reader-popover")[0].style.left="0px"}else console.error(`Can't find the highlighted text: ${e.selectedText}`)}const W="best-reader-editing-mark";function A(e){const t=120;window_size="width=640,height=440";var n=`https://twitter.com/intent/tweet?text=${encodeURIComponent(function(e){let n=e.trim();return n.length>t-2&&(n=n.slice(0,t-3).trim()+"…"),`“${n}”`}(e))}&url=${encodeURIComponent(location.href)}`;window.open(n,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,"+window_size)}function z(e){window_size="width=640,height=640";var t=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}&quote=${encodeURIComponent(e)}`;window.open(t,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,"+window_size)}function D(e){"best-reader-view-container"===e.target.id&&C()}function P(e){"best-reader-view-tos"===e.target.id&&C()}function _(e){var t="awesome"==s?"":"awesome";chrome.runtime.sendMessage({fromTOS:!0,type:"sendFeedback",url:location.href,feedback:t},function(e){"noUser"==e.error?showSigninModal():U("thumbs-up")})}function V(e){var t="needswork"==s?"":"needswork";chrome.runtime.sendMessage({fromTOS:!0,type:"sendFeedback",url:location.href,feedback:t},function(e){"noUser"==e.error?showSigninModal():U("thumbs-down")})}function Y(e){var t="mailto:readerview.extension@gmail.com?subject="+escape("Hello Best Reader")+"&body="+escape(document.location.href);window.location.href=t}function U(e){const t=document.getElementById(e);for(var n=0;n<t.childElementCount;n++){t.children[n].classList.add("best-reader-feedback-svg-icon-large")}setTimeout(()=>{for(var e=0;e<t.childElementCount;e++){t.children[e].classList.remove("best-reader-feedback-svg-icon-large")}},300),d=Date.now()}const j=`<div id="best-reader-view-container">\n        <div id="best-reader-view-content">\n            <div id="best-reader-view-page">\n                <div id="best-reader-view-title"></div>\n                <div id="best-reader-view-subtitle"></div>\n                <div id="best-reader-view-heroimage"></div>\n                <div id="best-reader-view-article"></div>\n            </div>\n            <div id="best-reader-view-footer">\n                <hr />\n                <div id="best-reader-view-feedback" title="Tell us how Reader is doing on this page">\n                    <div class='best-reader-feedback-action' id='best-reader-feedback-awesome'>\n                        <span class="best-reader-feedback-button" id='thumbs-up'>\n                            <div class='best-reader-feedback-svg-icon'>\n                                ${fa_thumbsup}\n                            </div>\n                            <div class='best-reader-feedback-svg-icon'>\n                                ${fa_thumbsup_solid}\n                            </div>\n                        </span>\n                        <span class='reader-text'>Awesome</span>\n                    </div>\n                    <div class='best-reader-feedback-action' id='best-reader-feedback-needswork'>\n                        <span class="best-reader-feedback-button" id='thumbs-down'>\n                            <div class='best-reader-feedback-svg-icon'>\n                                ${fa_thumbsdown}\n                            </div>\n                            <div class='best-reader-feedback-svg-icon'>\n                                ${fa_thumbsdown_solid}\n                            </div>\n                        </span>\n                        <span class='reader-text'>Needs Work</span>\n                    </div>\n                    <div class='best-reader-feedback-action' id='best-reader-feedback-contact'>\n                        <span class="best-reader-feedback-button">\n                            <div class='best-reader-feedback-svg-icon'>\n                                ${fa_envelop}\n                            </div>\n                        </span>\n                        <span class='reader-text'>Contact</span>\n                    </div>\n                </div>\n            </div>\n            <div id="best-reader-view-top-hint">\n                press <span>ESC</span> or click outside the content area to exit reader\n            </div>\n            <div id="best-reader-view-hint-fullscreen">\n                press <span>alt|option</span>F to enter full screen mode\n            </div>\n        </div>\n    </div>\n    <div id='best-reader-view-tos'>\n        <div id='best-reader-view-tos-content'>\n            <ul>\n            </ul>\n        </div>\n    </div>`;const G={light:{backgroundColor:{body:"rgb(232,232,232)",content:"white"},color:"#1d1d1f",boxShadow:"rgba(0, 0, 0, 0.51) 0px 3px 10px",outline:"",blockquote:{borderColor:"rgba(0, 0, 0, 0.14)",color:"rgba(0, 0, 0, 0.61)"},a:"rgb(65, 110, 211)"},warm:{backgroundColor:{body:"rgb(223, 217, 200)",content:"rgb(247, 241, 228)"},color:"rgb(78, 59, 29)",boxShadow:"0px 6px 11px 3px rgba(0, 0, 0, 0.21)",outline:"",blockquote:{color:"rgba(140, 111, 80)",borderColor:"rgb(239, 230, 215)"},a:"rgb(197, 143, 24)"},dusk:{backgroundColor:{body:"rgb(52,52,52)",content:"rgb(76,76,76)"},color:"rgba(255, 255, 255, 0.78)",boxShadow:"0px 6px 11px 3px rgba(0, 0, 0, 0.23)",outline:"",blockquote:{borderColor:"rgba(100, 100, 100)",color:"rgb(184, 184, 184)"},a:"rgb(90, 200, 252)"},dark:{backgroundColor:{body:"rgb(0,0,0)",content:"rgb(18,18,18)"},color:"rgb(164,164,164)",boxShadow:"",outline:"#222 solid 1px",blockquote:{borderColor:"rgba(255, 255, 255, 0.15)",color:"rgba(255, 255, 255, 0.66)"},a:"rgb(90, 200, 250)"}};function K(e){e in G||(console.error("theme",e,"does not exists!"),e="light");const t=G[e];document.body.style.backgroundColor=t.backgroundColor.body,document.getElementById("best-reader-view-outer-container").style.backgroundColor=t.backgroundColor.body,document.getElementById("best-reader-view-outer-container").style.color=t.color,document.getElementById("best-reader-view-content").style.backgroundColor=t.backgroundColor.content,document.getElementById("best-reader-view-content").style.boxShadow=t.boxShadow,document.getElementById("best-reader-view-content").style.outline=t.outline;for(var n=document.querySelectorAll("#best-reader-view-article a"),o=0;o<n.length;o++)n[o].style.color=t.a;var r=document.querySelectorAll("#best-reader-view-content blockquote");for(o=0;o<r.length;o++)r[o].style.borderLeftColor=t.blockquote.borderColor,r[o].style.color=t.blockquote.color;var i=document.querySelectorAll("#best-reader-view-content h1, #best-reader-view-content h2, #best-reader-view-content h3, #best-reader-view-content h4, #best-reader-view-content h5");for(o=0;o<i.length;o++)i[o].style.color=t.color;var a=document.querySelectorAll("#best-reader-view-content .best-reader-feedback-button");for(o=0;o<a.length;o++)a[o].style.borderColor=t.blockquote.borderColor}const X=(e,t=document.body)=>{const n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),o=[];for(;n.nextNode();){const t=n.currentNode;t.textContent.indexOf("That William speaks well"),t.nodeType===Node.TEXT_NODE&&t.textContent==e&&o.push(t.parentNode)}return o},J=(e,t)=>{for(var n=0;n<t.childElementCount;n++){const o=t.children[n],r=e?e+"-"+(n+1):n+1;o.dataset.bestReaderViewId=r,J(r,o)}};const Q="\n    z-index: auto !important;\n    opacity: 1 !important;\n    overflow: visible !important;\n    transform: none !important;\n    animation: none !important;\n    position: relative !important;\n    mix-blend-mode: normal !important;\n    isolation: auto !important;\n";function Z(){if(a===n.focusMode)return void console.warn("already in focus mode");if(a===n.reader)return void console.warn("reader mode, dismiss reader first");if(!o||!o.content){const e=k();if(!e)return void console.error("no article to focus on");o=e}const e=function(){const e=o.content.split(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g),t=e.map(e=>e.trim()).filter(e=>e.length>7);!function e(t,n){if(3!==t.nodeType){t.nodeDepth=n;for(var o=0;o<t.children.length;o++)e(t.children[o],n+1)}}(document,0);const n=t.map(e=>{const t=X(e);return 1==t.length?t[0]:null}).filter(e=>null!=e),r=n.sort((e,t)=>e.nodeDepth-t.nodeDepth),i=function(e){if(e.length<1)return null;for(var t=e[0].parentNode,n=1;n<e.length;n++){const o=e[n];for(;!t.contains(o);)t=t.parentNode}return t}(r);return i}();e==document.body?alert("Sorry, we are having a hard time to focus on this page.☹️"):(i=e,function(){const e=document.createElement("div");e.classList.add("best-reader-blurry-cover"),document.body.appendChild(e),setTimeout(()=>{e.style.opacity=1,e.addEventListener("click",te),i.classList.add("best-reader-focused");for(var t=i.parentNode;t&&t!=document.body;)t.classList.add("best-reader-focus-enforcer"),t.style=t.style?t.style+Q:Q,t=t.parentNode},800),r=e}(),a=n.focusMode)}function ee(e){a===n.focusMode?(r.style.opacity=0,setTimeout(()=>{document.body.removeChild(r),r=null;for(var t=i.parentNode;t&&t!=document.body;)t.classList.remove("best-reader-focus-enforcer"),t.style,t.style=t.style.cssText.slice(0,-Q.length),t=t.parentNode;i.classList.remove("best-reader-focused"),i=null,a=n.normal,e&&e(!0)},1e3)):e&&e(!1)}function te(){ee()}function ne(e){e in g?(g[e],document.getElementById("best-reader-view-outer-container").style.fontFamily=g[e]):e&&console.trace("font",e,"not supported")}function oe(e){o.ogImage;const t=document.createElement("img");t.src=o.ogImage,t.style.marginTop="20px",e&&e.length>0&&(e.length,t.style.display="none");const n=document.getElementById("best-reader-view-heroimage");function r(){clearInterval(i),t.onload=null,(t.naturalWidth<250||t.naturalHeight<250)&&(t.scale,t.src,t.naturalWidth,t.naturalHeight,n.removeChild(t))}n.appendChild(t);var i=setInterval(function(){t.naturalWidth&&(t.naturalWidth,t.naturalHeight,r())},10);t.onload=function(){t.naturalWidth,t.naturalHeight,r()}}function re(){if(o.savedIFrameYoutubeVideo){if(o.savedIFrameYoutubeVideo.video){const a=document.getElementById("best-reader-view-article").getElementsByTagName("iframe");for(var e=!1,t=0;t<a.length;t++){a[t].src.indexOf("youtube.com/")>=0&&(e=!0)}if(e)return!0;const s=.5625;var n=document.createElement("div");n.style.position="relative",n.style.width="100%",n.style.paddingTop=100*s+"%";const d=(r=o.savedIFrameYoutubeVideo.video,(i=document.createElement("div")).innerHTML=r.trim(),i.firstChild);n.appendChild(d),d.style.position="absolute",d.style.top=0,d.style.left=0,d.style.bottom=0,d.style.right=0,d.style.width="100%",d.style.height="100%";const c=document.getElementById("best-reader-view-heroimage");return c.parentNode.insertBefore(n,c),!0}if(o.savedIFrameYoutubeVideo.image){const e=document.createElement("img");e.src=o.savedIFrameYoutubeVideo.image,document.getElementById("best-reader-view-heroimage").appendChild(e)}var r,i;return!1}}function ie(e){if(!e.src&&!e.srcset&&e.dataset.srcset){e.dataset.srcset;const t=e.dataset.srcset.split(",");if(t.length>0)return e.src=t.pop(),!0}return!!(e.src&&e.src.indexOf("data:image")>=0&&e.src.length<200&&e.dataset.lazySrc)&&(e.dataset.lazySrc,e.src=e.dataset.lazySrc,!0)}function ae(e){return(!e.nextSibling||!e.nextSibling.tagName||"figcaption"!=e.nextSibling.tagName.toLowerCase())&&(e.naturalHeight<250&&e.naturalWidth<250||e.naturalWidth+e.naturalHeight<500||e.naturalWidth/e.naturalHeight<2.5&&e.naturalWidth+e.naturalHeight<518)}function se(e){return e.naturalWidth<350&&e.naturalHeight>e.naturalWidth}function de(){const{goodImages:e,probablyGoodImages:t}=function(){const e=document.getElementById("best-reader-view-article").getElementsByTagName("img");for(var t=[],n=[],o=[],r=0;r<e.length;r++){const a=e[r];a.naturalWidth,a.naturalHeight,ie(a)&&n.push(a);var i=!1;0==a.naturalWidth||0==a.naturalHeight?(o.push(a),i=!0,a.onload=(()=>{if(ae(a)){if(a.naturalHeight,a.naturalWidth,a.parentNode.removeChild(a),0==(o=o.filter(e=>e!==a)).length){const e=document.getElementById("best-reader-view-heroimage");e.childElementCount>0&&(e.childNodes[0].style.display="block")}}else se(a)?(a.naturalWidth,a.naturalHeight,a.width=a.naturalWidth,a.height=a.naturalHeight):a.width})):a.naturalHeight>200&&a.naturalWidth>350?(n.push(a),i=!0):ae(a)&&t.push(a),se(a)&&(a.width=a.naturalWidth,a.height=a.naturalHeight),i&&(a.removeAttribute("height"),a.src&&a.removeAttribute("data-src"))}for(r=0;r<t.length;r++){const e=t[r];e.parentNode.removeChild(e)}return n.length,o.length,{goodImages:n,probablyGoodImages:o}}();(function(){const e=document.getElementById("best-reader-view-article").getElementsByTagName("iframe");for(var t=[],n=0;n<e.length;n++){const i=e[n];if(i.src.indexOf("youtube.com/")>=0){var o="56.25%";i.width&&i.height&&(o=parseInt(i.height)/parseInt(i.width),i.height,i.width);const e=i.getBoundingClientRect();o=e.height/e.width,o=.5625;var r=document.createElement("div");r.style.position="relative",r.style.width="100%",r.style.paddingTop=100*o+"%",i.parentNode.insertBefore(r,i),i.parentNode.removeChild(i),r.appendChild(i),i.style.position="absolute",i.style.top=0,i.style.left=0,i.style.bottom=0,i.style.right=0,i.style.width="100%",i.style.height="100%",t.push(i)}}return t.length>0})()||re()||o.ogImage&&(o.ogImage,e.length,0==e.length?oe(t):1==e.length&&e[0].naturalWidth/e[0].naturalHeight>5&&oe())}const ce='\n    <div class="header">\n        <div class="button fixed-left" id="best-reader-note-cancel">Cancel</div>\n        <p class="title">Notes</p>\n    </div>\n    <div class="content">\n        <p class="hint">Add a note to the selection</p>\n    </div>\n    <div class="letter-count">\n        1/80\n    </div>\n    <div class="footer">\n        <input type="text" id="best-reader-note-input" name="name" placeholder="Enter a note" maxlength=80 autocomplete="off">\n        <div class="button fixed-right disabled" id="best-reader-note-send">Save</button>\n    </div>\n';function le(e){const t=`\n            <div class="best-reader-note-text">${e.note}\n                <div class="best-reader-tooltip-icon" data-tooltip-type="delete" >${fa_trash}</div>\n            </div>\n        `,n=e.node||F(e);if(!n)return void console.error("best reader: previous selection can not be found:",e);e.isParagraph?n.innerHTML=`<mark class='best-reader-note-mark' id=${e.sid}>${n.innerHTML}</mark>`:n.innerHTML=n.innerHTML.substring(0,e.startOffset)+`<mark class='best-reader-note-mark' id=${e.sid}>${e.selectedText}</mark>`+n.innerHTML.substring(e.startOffset+e.selectedText.length);const o=document.createElement("div");o.classList.add("best-reader-popover"),o.innerHTML=t,n.getElementsByTagName("mark")[0].prepend(o);const r=o.getBoundingClientRect();o.style.left=(e.clientRects0.right-e.clientRects0.left)/2-r.width/2+"px",o.style.top="-40px"}function ue(e){const t=document.getElementById("best-reader-note-send");e?t.classList.remove("disabled"):t.classList.add("disabled")}