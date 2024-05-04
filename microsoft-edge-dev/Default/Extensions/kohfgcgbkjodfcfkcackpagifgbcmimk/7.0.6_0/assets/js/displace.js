/*!
 * displacejs.js 1.3.2 - Tiny javascript library to create moveable DOM elements.
 * Copyright (c) 2019 Catalin Covic - https://github.com/catc/displace
 * License: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.displacejs=t():e.displacejs=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}return o.m=e,o.c=t,o.p="",o(0)}([function(e,t,o){"use strict";var n,s=o(1),i=(n=s)&&n.__esModule?n:{default:n};e.exports=i.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),s=o(3);var i=(0,n.generateMoveFn)(),u={constrain:!1,relativeTo:null,handle:null,ignoreFn:null,highlightInputs:!1,onMouseDown:null,onMouseMove:null,onMouseUp:null,onTouchStart:null,onTouchMove:null,onTouchStop:null,customMove:null},r=function(){function e(t,o){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)throw Error("Must include moveable element");this.el=t,this.opts=o,a.call(this)}return e.prototype.reinit=function(){this.destroy(),a.call(this)},e.prototype.destroy=function(){var e=this.events;this.handle.removeEventListener("mousedown",e.mousedown,!1),document.removeEventListener("mousemove",e.mousemove,!1),document.removeEventListener("mouseup",e.mouseup,!1),this.handle.removeEventListener("touchstart",e.touchstart,!1),document.removeEventListener("touchmove",e.touchmove,!1),document.removeEventListener("touchstop",e.touchstop,!1),document.removeEventListener("touchmove",this.events.scrollFix,{passive:!1})},e}();function a(){var e=this,t=this.el,o=this.opts||u,r={};if(t.style.position="absolute",this.handle=o.handle||t,o.constrain){for(var a=o.relativeTo||t.parentNode,c=t,h=0,v=0;c!==a;)c=c.parentNode,(0,n.isRelative)(c)&&(h-=c.offsetLeft,v-=c.offsetTop),c===a&&(h+=c.offsetLeft,v+=c.offsetTop);var l=h+a.offsetWidth-t.offsetWidth,f=v+a.offsetHeight-t.offsetHeight;r.xClamp=(0,n.generateClamp)(h,l),r.yClamp=(0,n.generateClamp)(v,f)}this.opts=o,this.data=r,this.events={mousedown:s.mousedown.bind(this),mouseup:s.mouseup.bind(this),touchstart:s.touchstart.bind(this),touchstop:s.touchstop.bind(this),scrollFix:function(t){e.isDragging&&t.preventDefault()}},this.handleMove=i(this.opts.customMove),this.handle.addEventListener("mousedown",this.events.mousedown,!1),this.handle.addEventListener("touchstart",this.events.touchstart,!1),document.addEventListener("touchmove",this.events.scrollFix,{passive:!1})}t.default=function(e,t){return new r(e,t)}},function(e,t){"use strict";function o(e,t,o){e.style.left=t+"px",e.style.top=o+"px"}Object.defineProperty(t,"__esModule",{value:!0}),t.generateClamp=function(e,t){return function(o){return Math.min(Math.max(o,e),t)}},t.isRelative=function(e){return"relative"===window.getComputedStyle(e).position},t.generateMoveFn=function(){if(window.requestAnimationFrame)return function(e){var t=e||o;return function(e,o,n){window.requestAnimationFrame((function(){t(e,o,n)}))}};return function(e){return function(t,n,s){(e||o)(t,n,s)}}}},function(e,t){"use strict";function o(e,t,o){var n=this.el,s=this.opts,i=this.data;"function"==typeof s.onMouseMove&&s.onMouseMove(n,o);var u=o.clientX-e,r=o.clientY-t;return s.constrain&&(u=i.xClamp(u),r=i.yClamp(r)),this.handleMove(n,u,r),o.preventDefault(),!1}function n(e,t,o){var n=this.el,s=this.opts,i=this.data;"function"==typeof s.onTouchMove&&s.onTouchMove(n,o);var u=o.targetTouches[0],r=u.clientX-e,a=u.clientY-t;return s.constrain&&(r=i.xClamp(r),a=i.yClamp(a)),this.handleMove(n,r,a),o.preventDefault(),!1}Object.defineProperty(t,"__esModule",{value:!0}),t.mousedown=function(e){var t=this.opts;if(t.highlightInputs){var n=e.target.tagName.toLowerCase();if("input"===n||"textarea"===n)return}if(t.ignoreFn&&t.ignoreFn(e))return;if(0===e.button){var s=this.el,i=this.events;"function"==typeof t.onMouseDown&&t.onMouseDown(s,e);var u=e.clientX-s.offsetLeft,r=e.clientY-s.offsetTop;i.mousemove=o.bind(this,u,r),document.addEventListener("mousemove",i.mousemove,!1),document.addEventListener("mouseup",i.mouseup,!1)}e.preventDefault()},t.mousemove=o,t.mouseup=function(e){var t=this.el,o=this.opts,n=this.events;"function"==typeof o.onMouseUp&&o.onMouseUp(t,e);document.removeEventListener("mouseup",n.mouseup,!1),document.removeEventListener("mousemove",n.mousemove,!1)},t.touchstart=function(e){var t=this.opts;if(t.highlightInputs){var o=e.target.tagName.toLowerCase();if("input"===o||"textarea"===o)return}if(t.ignoreFn&&t.ignoreFn(e))return;var s=this.el,i=this.events;"function"==typeof t.onTouchStart&&t.onTouchStart(s,e);var u=e.targetTouches[0],r=u.clientX-s.offsetLeft,a=u.clientY-s.offsetTop;i.touchmove=n.bind(this,r,a),this.isDragging=!0,document.addEventListener("touchmove",i.touchmove,!1),document.addEventListener("touchend",i.touchstop,!1),document.addEventListener("touchcancel",i.touchstop,!1)},t.touchmove=n,t.touchstop=function(e){this.isDragging=!1;var t=this.el,o=this.opts,n=this.events;"function"==typeof o.onTouchStop&&o.onTouchStop(t,e);document.removeEventListener("touchmove",n.touchmove,!1),document.removeEventListener("touchend",n.touchstop,!1),document.removeEventListener("touchcancel",n.touchstop,!1)}}])}));