for(var g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,q=["Math","imul"],r=0;r<q.length-1;r++){var t=q[r];t in n||(n[t]={});n=n[t]}var u=q[q.length-1],v=n[u],y=v?v:function(a,b){a=Number(a);b=Number(b);var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};
y!=v&&null!=y&&g(n,u,{configurable:!0,writable:!0,value:y});var z=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var A=/[?&]oi=([^&]+)/,B=function(a,b){a=document.createElement(a);a.className=b;return a},C=function(a,b){a=document.createElement(a);a.id=b;return a},D=function(a,b,c){var d=document.createElement("a");d.setAttribute("href",a);d.textContent=b;c&&(d.className=c);return d},E=function(a,b){var c=document.createElement("a");c.setAttribute("href",a);c.innerHTML=b;return c},F=function(a,b){for(var c=b.length,d=0;d<c;d++)a.appendChild(b[d])},G=function(a,b,c){var d=new XMLHttpRequest;d.open(b?"POST":"GET",
"https://scholar.google.com/"+a,!0);d.onreadystatechange=function(){4==d.readyState&&c(d.status,d.responseText)};d.timeout=3E4;b&&d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");b?d.send(b):d.send()},H=function(a,b){var c=null;if(200==a){try{c=JSON.parse(b)}catch(d){}if("object"!=typeof c||c instanceof Array)c=null}return c};var J=function(){this.K=/&lt;(\/?(b|i|em|br))&gt;/gi;this.J=/&amp;([a-z0-9]+|#[0-9]+);/gi;this.F=document.createElement("div")},K=function(a,b){a.F.textContent=b;b=a.F.innerHTML;return b.replace(a.K,function(a,b){return"<"+b+">"}).replace(a.J,function(a,b){return"&"+b+";"})};var O=function(a,b,c){this.a=a;this.S=b;this.H=c;this.T=new J;this.G=C("div","help");this.w=C("a","full-screen");this.C=C("a","settings");this.I=C("div","spinner");this.B=C("form","search-form");this.o=C("input","search-box");this.j=C("div","main");this.A=C("div","message");this.D=this.b="";a=document.body;a.setAttribute("dir",this.a.getMessage("@@bidi_dir"));a.innerHTML="";b=C("button","search-button");b.type="submit";F(this.B,[this.o,b]);c=C("div","middle");F(c,[this.j,this.I,this.A]);var d=C("div",
"bottom");L(this,"","");this.C.setAttribute("href","/scholar_settings?oi=gsb&hl="+M(this.a));F(d,[this.w,this.G,this.C]);F(a,[this.B,c,d]);document.title=this.a.getMessage("853");c=this.a.getMessage("920");b.setAttribute("aria-label",c);b=this.a.getMessage("625");this.I.setAttribute("aria-label",b);this.w.title=this.a.getMessage("1108");this.C.title=this.a.getMessage("628");this.B.addEventListener("submit",this.R.bind(this));a.addEventListener("click",this.N.bind(this));a.addEventListener("focus",
this.O.bind(this),!0);N(this,!0)},N=function(a,b){document.body.classList.toggle("busy",b);P(a,"");a.A.classList.toggle("busy",b)},P=function(a,b){a.A.textContent=b},Q=function(a){P(a,a.a.getMessage("1107")+" ");a.A.appendChild(D(a.w.getAttribute("href"),a.a.getMessage("1108")))},T=function(a,b){var c=R,d=(a.match(/^.*[?&](q|title)=([^&]+).*$/)||["","",""])[2];d=decodeURIComponent(d.replace(/[+]/g,"%20"));c.b="gsb20"<(a.match(A)||["",""])[1]?"":d;c.D=c.b&&a;c.o.value=c.b?"":d;c.o.focus();var e=!!d&&
!c.b;c.G.textContent=c.a.getMessage(b?e?"861":"862":e?"859":"860");L(c,c.b?"?oi=gsb00":a,d);d?S(c,a):(c.j.innerHTML="",N(c,!1))},S=function(a,b){N(a,!0);b=b+(0<=b.indexOf("?")?"&":"?")+"output=gsb&hl="+M(a.a);a.H(b,"",a.P.bind(a))};
O.prototype.P=function(a,b){function c(a,b){a&&(b.firstChild&&b.appendChild(document.createTextNode(" ")),b.appendChild(a))}this.j.innerHTML="";N(this,!1);var d=H(a,b)||{};a=d.r;if(a instanceof Array&&!d.L){b=Math.min(a.length,3);if(this.b){if(0>=b||!d.h)return;this.o.value||(this.o.value=this.b,this.o.focus(),L(this,this.D,this.b))}for(d=0;d<b;d++){var e=a[d];if(z(e)){var k=U(this,e.t),f=(e.u||"")+"",w=U(this,e.x),m=U(this,e.m),h=U(this,e.s),l=e.l||{};if(k&&z(l)){e={};for(var I in l){var p=l[I];
z(p)&&(e[I]=D((p.u||"")+"",(p.l||"")+"",I))}l=B("div","result");c(e.f,l);p=B("h3","result-title");var x="";w&&(x=B("span","result-marker"),x.innerHTML="["+w+"]",x=x.outerHTML+" ");k=x+k;f?(f=E(f,k),p.appendChild(f)):p.innerHTML=k;l.appendChild(p);m&&(f=B("div","result-metadata"),f.innerHTML=m,l.appendChild(f));h&&1==b&&(m=B("div","result-snippet"),m.innerHTML=h,l.appendChild(m));h=B("div","result-links");c(e.c,h);c(e.r,h);c(e.v,h);h.firstChild&&l.appendChild(h);h=B("div","result-access");c(e.g,h);
c(e.l,h);h.firstChild&&l.appendChild(h);this.j.appendChild(l)}}}this.j.firstChild||P(this,this.a.getMessage("1109"))}else Q(this)};
O.prototype.M=function(a,b){this.j.innerHTML="";N(this,!1);b=H(a,b)||{};var c=b.l;a=b.i||[];if(c instanceof Array&&a instanceof Array&&!b.L){var d=Math.min(c.length,5);b=C("table","cite");for(var e=0;e<d;e++){var k=c[e];if(z(k)){var f=U(this,k.l);k=U(this,k.h);if(f&&k){var w=b.insertRow(),m=document.createElement("th");m.scope="row";m.innerHTML=f;w.appendChild(m);f=w.insertCell();f.tabIndex=0;f.innerHTML=k}}}c=Math.min(a.length,5);d=C("div","import");for(e=0;e<c;e++)f=a[e],z(f)&&(d.firstChild&&d.appendChild(document.createTextNode(" ")),
d.appendChild(D((f.u||"")+"",(f.l||"")+"")));b.firstChild?(this.j.appendChild(b),this.j.appendChild(d)):P(this,this.a.getMessage("1109"))}else Q(this)};var L=function(a,b,c){a.w.setAttribute("href","/"+(b+(0<=b.indexOf("?")?"&":"?"))+((b.match(A)||["",""])[1]?"":"oi=gsb&")+(c?"lookup=0&":"")+"hl="+M(a.a))};O.prototype.R=function(a){var b=this.o.value,c="scholar?oi=gsb95&q="+encodeURIComponent(b);this.b=this.D="";L(this,c,b);S(this,c);a.preventDefault()};
O.prototype.N=function(a){for(var b=a.target,c=document.body;b!=c;){var d=1==b.nodeType&&b.getAttribute("href")||"";if("#f"==d.substr(0,2)){a.preventDefault();a=d.substr(2);N(this,!0);a="scholar?q=info:"+encodeURIComponent(a)+":scholar.google.com/&output=gsb-cite&hl="+M(this.a);this.H(a,"",this.M.bind(this));break}else if(d){a.preventDefault();"/"==d[0]&&(d="https://scholar.google.com"+d);this.S(d);break}else if("TR"==b.nodeName){a.preventDefault();(a=b.getElementsByTagName("td")[0])&&0<=a.tabIndex&&
a.focus();break}b=b.parentElement}};O.prototype.O=function(a){var b=a.target;"TD"==b.nodeName&&setTimeout(function(){window.getSelection().selectAllChildren(b)},0)};var U=function(a,b){return K(a.T,(b||"")+"")};var V=function(){},W={en_GB:"en",en_US:"en",es_419:"es",fil:"tl",he:"iw",pt_BR:"pt-BR",pt_PT:"pt-PT",zh_CN:"zh-CN",zh_TW:"zh-TW"};V.prototype.getMessage=function(a,b){return chrome.i18n.getMessage(a,b)};var M=function(a){a=a.getMessage("@@ui_locale");return W[a]||a};var R=new O(new V,function(a){chrome.tabs.create({url:a})},function(a,b,c){G(a,b,c)});chrome.runtime.onMessage.addListener(function(a){a=(a||"")+"";var b=/^.*[?&]ct=emb(&.*)?$/.test(a);T(a,b)});chrome.tabs.executeScript({file:"contentscript-compiled.js"},function(){chrome.runtime.lastError&&T("",!0)});