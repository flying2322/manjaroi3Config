(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1160:function(t,e,r){},1185:function(t,e,r){"use strict";r(1160)},1218:function(t,e,r){"use strict";r.r(e);r(30),r(39),r(19),r(7),r(26),r(29);var n=r(474),s=r(36);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o={name:"so-links",data:()=>({navs:[]}),created(){n.a.getLinks().then(t=>{this.navs=this.dealWithData(t)}).catch(t=>{console.log("获取solinks失败",t)})},computed:a(a({},Object(s.c)("config",{tabSettings:"tab-settings"})),{},{textModeSettings(){return this.tabSettings.textModeSettings||{}}}),methods:{dealWithData(t){if(t&&t.length)for(var e=0;e<t.length;e++){t[e].all=[];for(var r=t[e].list,n=0;n<r.length;n++){var s=r[n];s.arr?t[e].all.push(...s.arr):t[e].all.push(s)}}return t}}},c=(r(1185),r(4)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap-nav"},t._l(t.navs,(function(e){return r("dl",{key:e.id,staticClass:"block-nav"},[r("dt",{style:{color:t.textModeSettings.textColor}},[r("img",{attrs:{src:e.img,alt:""}}),r("span",[t._v(t._s(e.title))])]),t._v(" "),r("dd",[r("BlurGrass"),t._v(" "),r("ul",{staticClass:"clear"},t._l(e.all,(function(e,n){return r("li",{key:n},[r("a",{style:{color:t.textModeSettings.textColor},attrs:{href:e.url,target:t.tabSettings.isNewOpenAddress?"_blank":"_self",title:e.desc,"data-report-click":JSON.stringify({spm:t.SPM.soLinks,extend1:e.title,dest:e.url}),"data-report-view":JSON.stringify({spm:t.SPM.soLinks,extend1:e.title,dest:e.url})}},[t._v(t._s(e.title))])])})),0)],1)])})),0)}),[],!1,null,null,null);e.default=u.exports}}]);