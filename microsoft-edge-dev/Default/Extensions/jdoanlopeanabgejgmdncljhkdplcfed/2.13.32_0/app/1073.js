"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1073,3578],{83578:(e,t,d)=>{d.d(t,{Z:()=>I});var n=d(20144),a=d(88026),i=d(51726),s=d.n(i),o=d(55482),l=d(7838),u=d(35174);let c={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};let k={};const b={bind:function(e,t){let d,n;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const a=e=>{n=!1,(e=>e&&e.clientX>window.innerWidth)(e)?n=!0:d=e.target},i=a=>{n||(t.modifiers.bubble||!e.contains(d)&&!e.contains(a.target)&&e!==d&&e!==a.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(a)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),k[e.dataset.clickOutsideMouseupHandlerId]=i,k[e.dataset.clickOutsideMousedownHandlerId]=a,document.addEventListener("mouseup",i),document.addEventListener("mousedown",a)},unbind:function(e){var t,d;null!==(t=e.dataset)&&void 0!==t&&t.clickOutsideMouseupHandlerId&&null!==(d=e.dataset)&&void 0!==d&&d.clickOutsideMousedownHandlerId&&(document.removeEventListener("mouseup",k[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",k[e.dataset.clickOutsideMousedownHandlerId]),delete k[e.dataset.clickOutsideMouseupHandlerId],delete k[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler)}};var v=d(94130),H=d(77197),p=d(72433);n.ZP.use(a.Z,{name:"unreactive"}),n.ZP.use(s()),n.ZP.use(o.qK),n.ZP.use(H.Z),n.ZP.use(p.ZP),n.ZP.use(v.Z),n.ZP.prototype.$xhr=u.Z,n.ZP.prototype.$e=l.Z,n.ZP.directive("mobile-click",r),n.ZP.directive("click-outside",b),new n.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),n.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:v.Z});const I=n.ZP},61073:(e,t,d)=>{d.r(t);var n=d(83578),a=function(){return(0,this._self._c)("div",{staticClass:"region center"},[this._v("Hello")])};a._withStripped=!0;const i=(0,d(51900).Z)({name:"RegionTemplate"},a,[],!1,null,null,null).exports;new n.Z({render:e=>e(i)}).$mount(".region.center")}}]);