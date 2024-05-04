var doc=doc&&"html"===doc.type?doc:new function(){let e=this;this.type="html";let t=[],n=!1;function l(){return Promise.resolve().then((()=>{t=[]})).catch((e=>{}))}function o(e){const t=[];if($(e).data("read-aloud-multi-block")){let n=$(e).children(":visible").get();for(let e=0;e<n.length;e++)t.push(n[e])}else $(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),o(e)):t.push(e);return t}function s(n="all"){let o=document.body.innerText.substring(0,1e3);return e.docInnerText===o?Promise.reject("ERR_ALREADY_PARSED"):(e.docInnerText=o,new Promise((async e=>{await l(),"convert"!==n&&await removeNRTags(),e()})).then((()=>i())).then((e=>new Promise((async l=>{if("all"===n)for(let t=0;t<e.length;t++){let l=$(e[t]).find(":visible").filter(m).hide();await c(e[t],n),l.show()}else{let n=e.map(I),l=(o=n,[].concat.apply([],o)).filter(isNotEmpty);for(let e=0;e<l.length;e++)l[e]&&t.push(l[e])}var o;l(t)})))).catch((e=>{})))}function i(){return new Promise((t=>{new Date;let n=r(100);if(n.reduce((function(e,t){return e+getInnerText(t).length}),0)<1e3){n=r(3);let e,t,l=n.map(getInnerText);for(let t=3;t<l.length&&!e;t++){let n=a(l,0,t);l[t].length>n.mean+2*n.stdev&&(e=t)}for(let e=l.length-4;e>=0&&!t;e--){let n=a(l,e+1,l.length);l[e].length>n.mean+2*n.stdev&&(t=e+1)}(e||t)&&(n=n.slice(e||0,t))}let l=[];for(let e=0;e<n.length;e++)l.push.apply(l,N(n[e],n[e-1])),l.push(n[e]);e.toRead=Array.from(l),t(l)})).catch((e=>{}))}function r(e){let t="h1, h2, h3, h4, h5, h6, p, a[href], "+ignoreTags,n=function(e){return 3==e.nodeType&&e.nodeValue.trim().length>=3},l=function(t){return 1==t.nodeType&&$(t).is("p:visible")&&getInnerText(t).length>=e},o=function(t){return y(t,n)&&getInnerText(t).length>=e},s=function(e){return y(e,l)},i=function(e){let n=$(e).children(":not("+t+")").get();return n.some(o)||n.some(s)||n.some(i)},r=function(e,t){t&&$(e).data("read-aloud-multi-block",!0),c.push(e)},a=function(){if($(this).is("frame, iframe"))try{a.call(this.contentDocument.body)}catch(e){}else if($(this).is("dl"))r(this);else if($(this).is("ol, ul")||$(this).is(".kr-ulist")){let e=$(this).children().get();e.some(o)?r(this):(e.some(s)||e.some(i))&&r(this,!0)}else if($(this).is("tbody")){let e=$(this).children();e.length>3||e.eq(0).children().length>3?e.get().some(i)&&r(this,!0):e.each(a)}else o(this)?r(this):s(this)?r(this,!0):$(this).children(":not("+t+")").each(a)},c=[];return a.call(document.body),c.filter((function(e){return $(e).is(":visible")&&$(e).offset().left>=0}))}function a(e,t,n){null==t&&(t=0),null==n&&(n=e.length);let l=0;for(let o=t;o<n;o++)l+=e[o].length;let o=l/(n-t),s=0;for(let l=t;l<n;l++)s+=(e[l].length-o)*(e[l].length-o);return{mean:o,stdev:Math.sqrt(s)}}async function c(e,t){if($(e).data("read-aloud-multi-block")){let n=$(e).children(":visible").get();for(let e=0;e<n.length;e++)$(n[e]).find("p, ul, ol, li").length>0?await c(n[e],t):await u(n[e],t)}else $(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),await c(e,t)):await u(e,t)}async function d(e,t,n=null){try{if(n&&!e.contains(n)&&n.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_PRECEDING)return;if($(e).data("read-aloud-multi-block")){let l=$(e).children(":visible").get();l=l.filter((e=>e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_PRECEDING));for(let e=0;e<l.length;e++)$(l[e]).find("p, ul, ol, li").length>0?await d(l[e],t,n):await u(l[e],t,{position:"first",node:n})}else n&&(e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_PRECEDING)&&($(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),await d(e,t,n)):await u(e,t,{position:"first",node:n}))}catch(e){}}async function h(e,t,n=null){try{if(n&&!e.contains(n)&&n.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_FOLLOWING)return;if($(e).data("read-aloud-multi-block")){let l=$(e).children(":visible").get();n&&(l=l.filter((e=>e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_FOLLOWING)));for(let e=0;e<l.length;e++)$(l[e]).find("p, ul, ol, li").length>0?await h(l[e],t,{position:"last",node:n}):await u(l[e],t,{position:"last",node:n})}else n&&(e.contains(n)||n.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_FOLLOWING)&&($(e).find("p, ul, ol, li").length>0?($(e).data("read-aloud-multi-block",!0),await h(e,t,n)):await u(e,t,{position:"last",node:n}))}catch(e){}}async function u(e,n,l=null){let o=function(e,t,n=null){let l="",o=[],s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i=null;for(;i=s.nextNode();)i&&((!n||("first"!==n.position||n.node.compareDocumentPosition(i)!=Node.DOCUMENT_POSITION_PRECEDING&&n.node.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_PRECEDING)&&("last"!==n.position||n.node.compareDocumentPosition(i)!=Node.DOCUMENT_POSITION_FOLLOWING&&n.node.compareDocumentPosition(e)!=Node.DOCUMENT_POSITION_FOLLOWING))&&n||$(i.parentNode).is(":visible")&&(l+=p(i),o.push(i)));return{text:l,textNodes:o}}(e,0,l),s=o.textNodes,i=processHtmlText(o.text).trim(),r=processSentencesByLength(getNlpSentences(i));if("convert"!==n)try{if(r.length>0){e.normalize();let t=createDeepCopy(r),n=0;for(;s.length>0;){let e=s.shift(),l=await g(e,t,r,n),o=l.nextIndex,i=l.remainder;i&&s.unshift(i),n!=o&&(n=o)}}}catch(e){}else t.push(...r)}async function f(e,n){let l=function(e){let t="",n=[];for(let l=0;l<e.length;l++)e[l]&&$(e[l].parentNode).is(":visible")&&(t+=p(e[l]),n.push(e[l]));return{text:t,textNodes:n}}(e);e=l.textNodes;let o=processHtmlText(l.text).trim();if("convert"===n)return void t.push(o);let s=processSentencesByLength(getNlpSentences(o)),i=createDeepCopy(s),r=0;for(;e.length>0;){let t=e.shift(),n=await g(t,i,s,r),l=n.nextIndex,o=n.remainder;o&&e.unshift(o),r!=l&&(r=l)}}async function g(e,l,o,s){try{if(!$(e).text()||""===processHtmlText($(e).text()).trim())return{nextIndex:s,remainder:null};let i=$(e).text(),r=processHtmlText(l[s]).trim(),a=s;if(processHtmlText(i).length<=r.length){r=r.substring(i.length),l[s]=r;let c=document.createElement("nr-sentence");return $(c).addClass("nr-s"+t.length),c.id="nr-s"+t.length,c.setAttribute("page",0),n&&$(c).addClass("nr-selected"),0===l[s].length&&(t.push(o[s]),a++),$(e).wrap(c),{nextIndex:a,remainder:null}}{let c=i.search(/\S|$/),d=i.length;for(;c<i.length;){for(;i[c]&&""===processHtmlText(i[c]).trim()&&(c++,i[c]););if(!i[c])break;for(;r[0]&&""===processHtmlText(r[0]).trim();)if(r=r.substring(1),0===r.length){a++;break}if(0===r.length)break;if(processHtmlText(i[c])===processHtmlText(r[0])&&(r=r.substring(1),0===r.length)){c++,a++;break}c++}d=c;let h=document.createElement("nr-sentence");$(h).addClass("nr-s"+t.length),h.id="nr-s"+t.length,h.setAttribute("page",0),n&&$(h).addClass("nr-selected"),l[s]=r,0===l[s].length&&t.push(o[s]);let u=e.splitText(d);return""===$(u).text().trim()&&(u=null),$(e).wrap(h),{nextIndex:a,remainder:u}}}catch(e){}}function m(){let e=$(this).css("float"),t=$(this).css("position");return $(this).is(ignoreTags)||$(this).is("sup")||"right"==e||"fixed"==t}function p(e){return e.innerText?e.innerText:$(e).text()}function N(e,t){let n=[],l=x($(e).find("h1, h2, h3, h4, h5, h6, p").filter(":visible").get(0)),o=T(e,!0);for(;o&&o!=t;){let e=$(o).is(ignoreTags);if(!e&&1==o.nodeType&&$(o).is(":visible")){let e=x(o);e<l&&(n.push(o),l=e)}o=T(o,e)}return n.reverse()}function x(e){let t=e&&/^H(\d)$/i.exec(e.tagName);return t?Number(t[1]):100}function T(e,t){return $(e).is("body")?null:1==e.nodeType&&!t&&e.lastChild?e.lastChild:e.previousSibling?e.previousSibling:T(e.parentNode,!0)}function y(e,t){let n=e.firstChild;for(;n;){if(t(n))return!0;n=n.nextSibling}return!1}function I(e){var t=$(e).find(":visible").filter(m).hide(),n=$(e).data("read-aloud-multi-block")?$(e).children(":visible").get().map(p):p(e).split(paragraphSplitter);return t.show(),n}e.docInnerText="",this.op="all",e.toRead=[],e.getCurrentIndex=function(){return 0},this.getTexts=function(o="all"){return this.op=o,new Promise((async(r,a)=>{try{await function(o="all"){if(e.toRead=[],"all"===o)return n=!1,s(o);if("selection"===o)return n=!0,function(o=!0,s=!0,r){let a={},c="";e.docInnerText="";const u=[];return new Promise(((e,t)=>{let n=window.getSelection(),l=n.getRangeAt(0);if(a=getSelectedNodes(),a.textNodes.length>0&&a.allNodes.length>0){if(o&&(a.textNodes[0].isSameNode(a.allNodes[0])||a.allNodes[0].contains(a.textNodes[0]))){let e=a.textNodes[0].splitText(l.startOffset);a.textNodes[0]=e,a.allNodes[0]=e}s&&(a.textNodes[a.textNodes.length-1].isSameNode(a.allNodes[a.allNodes.length-1])||a.allNodes[a.allNodes.length-1].contains(a.textNodes[a.textNodes.length-1]))&&a.textNodes[a.textNodes.length-1].splitText(l.endOffset)}else c=n.toString(),a=null;n.removeAllRanges(),e()})).then((()=>new Promise((async e=>{await l(),"convert"!==r&&await removeNRTags({toNormalize:!1}),e()})))).then((()=>new Promise((e=>{if(a){let n=[],l=[],o=a.textNodes,s=a.pNodes.shift();for(let i=0;i<o.length;i++)s&&s.contains(o[i])?(l.push(o[i]),i===o.length-1&&t()):(l.length>0&&t(),s=a.pNodes.shift(),s&&s.contains(o[i])?(l.push(o[i]),i===o.length-1&&t()):n.push(o[i]));function t(){let e=[];for(let t=0;t<l.length;t++)e.push(l[t]);l=[],n.push(e)}e(n)}else e([])})).then((async e=>{if(e.length>0){for(let t=0;t<e.length;t++)Array.isArray(e[t])?await f(e[t],r):await f([e[t]],r);return Promise.resolve()}return c.trim()&&(t=processSentencesByLength(getNlpSentences(c))),Promise.resolve()})))).then((()=>{for(let e=0;e<t.length;e++)u.push(t[e]);return t=[],n=!1,Promise.resolve()})).then((()=>i())).then((async e=>{const n=Array.from(document.querySelectorAll(".nr-selected")),l=n[0],o=n[n.length-1];for(let t=0;t<e.length;t++)await d(e[t],r,l);for(let e=0;e<u.length;e++){const n=Array.from(document.querySelectorAll(".nr-selected.nr-s"+e));for(let e=0;e<n.length;e++)n[e].className="",n[e].classList.add("nr-selected-post"),n[e].classList.add("nr-s"+t.length),n[e].id="nr-s"+t.length;t.push(u[e])}for(let t=0;t<e.length;t++)await h(e[t],r,o);return Promise.resolve()})).then((()=>{const e=Array.from(document.querySelectorAll(".nr-selected-post")),n=parseInt(e[0].id.split("nr-s")[1]),l=parseInt(e[e.length-1].id.split("nr-s")[1]);return reader.setReadIndex(n),reader.setLastReadIndex(l),Promise.resolve(t)})).catch((e=>{}))}();if("convert"===o)return n=!1,nrDomDetector.hasSelectionOnPage()?function(n=!0,o=!0,s){let i={},r="";return e.docInnerText="",new Promise(((e,t)=>{let l=window.getSelection(),s=l.getRangeAt(0);if(i=getSelectedNodes(),i.textNodes.length>0&&i.allNodes.length>0){if(n&&(i.textNodes[0].isSameNode(i.allNodes[0])||i.allNodes[0].contains(i.textNodes[0]))){let e=i.textNodes[0].splitText(s.startOffset);i.textNodes[0]=e,i.allNodes[0]=e}o&&(i.textNodes[i.textNodes.length-1].isSameNode(i.allNodes[i.allNodes.length-1])||i.allNodes[i.allNodes.length-1].contains(i.textNodes[i.textNodes.length-1]))&&i.textNodes[i.textNodes.length-1].splitText(s.endOffset)}else r=l.toString(),i=null;l.removeAllRanges(),e()})).then((()=>new Promise((async e=>{await l(),"convert"!==s&&await removeNRTags({toNormalize:!1}),e()})))).then((()=>new Promise((e=>{if(i){let n=[],l=[],o=i.textNodes,s=i.pNodes.shift();for(let r=0;r<o.length;r++)s&&s.contains(o[r])?(l.push(o[r]),r===o.length-1&&t()):(l.length>0&&t(),s=i.pNodes.shift(),s&&s.contains(o[r])?(l.push(o[r]),r===o.length-1&&t()):n.push(o[r]));function t(){let e=[];for(let t=0;t<l.length;t++)e.push(l[t]);l=[],n.push(e)}e(n)}else e([])})).then((async e=>{if(e.length>0){for(let t=0;t<e.length;t++)Array.isArray(e[t])?await f(e[t],s):await f([e[t]],s);return Promise.resolve(t)}return r.trim()&&(t=processSentencesByLength(getNlpSentences(r))),Promise.resolve(t)})))).catch((e=>{}))}(!0,!0,o):s(o)}(o),r(t)}catch(e){a(e)}}))},this.parseForConvertToPdf=function(){if(e.toRead.length>0){let t=[];for(let n=0;n<e.toRead.length;n++)t=t.concat(o(e.toRead[n]));return Promise.resolve(t)}return i().then((e=>{let t=[];for(let n=0;n<e.length;n++)t=t.concat(o(e[n]));return t})).catch((e=>{}))}};