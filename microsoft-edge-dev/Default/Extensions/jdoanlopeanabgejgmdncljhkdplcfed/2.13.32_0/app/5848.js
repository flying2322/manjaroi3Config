(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5848],{90452:(a,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var e=o(8081),i=o.n(e),s=o(23645),r=o.n(s)()(i());r.push([a.id,".app-view[data-v-25f9c1d4]{--overlay-min-height: 15rem;width:100%;max-height:var(--content-max-height, none);display:flex;position:relative;flex-direction:column}.app-view--overlay-min-height[data-v-25f9c1d4]{min-height:var(--overlay-min-height)}.app-body[data-v-25f9c1d4]{min-height:0;position:relative;flex-grow:1;overflow-y:auto}.smooth-height-slide-enter-active .app-body[data-v-25f9c1d4],.smooth-height-slide-leave-active .app-body[data-v-25f9c1d4]{overflow-y:hidden}.app-view:not(.has-footer) .app-body[data-v-25f9c1d4]{padding-bottom:var(--app-padding)}.app-footer[data-v-25f9c1d4]{max-height:var(--content-max-height, none);padding-bottom:var(--app-padding)}.overlay[data-v-25f9c1d4]{position:absolute;background-color:rgba(0,0,0,.5);inset:0}",""]);const p=r},18167:(a,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var e=o(8081),i=o.n(e),s=o(23645),r=o.n(s)()(i());r.push([a.id,'.fake-focus-mode-photo[data-v-a7a139fa]{width:100%;height:135px;position:relative;margin-bottom:8px;overflow:hidden;border-radius:var(--border-radius)}.fake-focus-mode-photo .background[data-v-a7a139fa]{height:100%;background-image:var(--5d0e2d84);background-size:cover;filter:brightness(85%)}.fake-focus-mode-photo .background[data-v-a7a139fa]::after{content:"";position:absolute;overflow:hidden;border-radius:var(--border-radius);-webkit-backdrop-filter:blur(8px) saturate(120%);backdrop-filter:blur(8px) saturate(120%);inset:0}.fake-focus-mode-photo .content[data-v-a7a139fa]{z-index:1}.fake-focus-mode-photo .content .top-bar[data-v-a7a139fa]{--icon-size: 10px;height:20px;display:flex;position:absolute;align-items:center;justify-content:center;background:rgba(0 0 0/var(--opacity-stop-4));font-size:.4825rem;font-weight:700;line-height:normal;text-align:center;text-transform:uppercase;gap:4px;inset:0 0 auto}.fake-focus-mode-photo .content .apps[data-v-a7a139fa]{--icon-size: 11px;display:flex;position:absolute;align-items:center;gap:8px;inset:28px 0 auto 8px}.fake-focus-mode-photo .content .pomodoro[data-v-a7a139fa]{display:flex;position:absolute;flex-direction:column;align-items:center;justify-content:center;gap:4px;inset:80px 0 auto}.fake-focus-mode-photo .content .pomodoro .circle[data-v-a7a139fa]{--size: 85px;width:var(--size);height:var(--size);position:absolute;margin:auto;inset:0;rotate:-45deg}.fake-focus-mode-photo .content .pomodoro .circle svg[data-v-a7a139fa]{width:var(--size);height:var(--size);position:absolute;inset:0}.fake-focus-mode-photo .content .pomodoro .circle svg[data-v-a7a139fa] path{stroke-width:4px !important;stroke:rgba(255 255 255/var(--opacity-stop-2))}.fake-focus-mode-photo .content .pomodoro .circle svg.circle-progress[data-v-a7a139fa] path{stroke-dashoffset:150px;stroke:rgba(255 255 255/var(--opacity-stop-4))}.fake-focus-mode-photo .content .pomodoro .timer[data-v-a7a139fa]{opacity:var(--opacity-stop-5);font-size:1rem;font-weight:500;text-align:center}.text[data-v-a7a139fa]{margin-bottom:4px;color:#222;font-size:.8125rem;font-weight:500}.description[data-v-a7a139fa]{opacity:var(--opacity-stop-6);color:rgba(34,34,34,.7);font-size:.8125rem}.app-popup[data-v-a7a139fa]{--color-bg: rgba(255 255 255 / 50%)}.app-popup[data-v-a7a139fa] .app.popup{--app-padding: 12px}.app-popup[data-v-a7a139fa] .app{-webkit-backdrop-filter:blur(10px) saturate(200%);backdrop-filter:blur(10px) saturate(200%)}.app-popup[data-v-a7a139fa] .app-body{--app-padding: 0}',""]);const p=r},24871:(a,t,o)=>{"use strict";o.d(t,{Z:()=>s});var e=function(){var a=this,t=a._self._c;return t("div",{class:["app-view",{"app-view--overlay-min-height":a.hasConfirmation,"has-footer":a.hasFooter}],attrs:{"data-test":"view"}},[a.hasHeader?t("div",{staticClass:"header-container"},[a._t("header")],2):a._e(),a._v(" "),t("div",{staticClass:"app-body"},[a._t("body")],2),a._v(" "),a.hasFooter?t("div",{staticClass:"app-footer"},[a._t("footer")],2):a._e(),a._v(" "),t("transition",{attrs:{name:"fade"}},[a.overlay?t("div",{staticClass:"overlay",on:{click:function(t){return a.$emit("overlayClick")}}}):a._e(),a._v(" "),a._t("confirm")],2)],1)};e._withStripped=!0;const i={name:"AppView",props:{overlay:{type:Boolean,default:!1}},computed:{hasConfirmation(){var a,t;return!(null===(a=(t=this.$scopedSlots).confirm)||void 0===a||!a.call(t))},hasHeader(){var a,t;return!(null===(a=(t=this.$scopedSlots).header)||void 0===a||!a.call(t))},hasFooter(){var a,t;return!(null===(a=(t=this.$scopedSlots).footer)||void 0===a||!a.call(t))}}};o(66908);const s=(0,o(51900).Z)(i,e,[],!1,null,"25f9c1d4",null).exports},15848:(a,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var e=function(){var a=this,t=a._self._c;return t("app-popup",{staticClass:"focus-mode-hover-app dark",attrs:{region:"top-left",position:"bottom-right",width:250,"svg-background":!0}},[t("app-view",{scopedSlots:a._u([{key:"body",fn:function(){return[t("div",{staticClass:"fake-focus-mode-photo"},[t("div",{staticClass:"background"}),a._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"top-bar"},[t("inline-svg",{staticClass:"icon app-header-icon",attrs:{src:o(48100)}}),a._v("\n\t\t\t\t\t\tFocusing\n\t\t\t\t\t")],1),a._v(" "),t("div",{staticClass:"apps"},[t("inline-svg",{staticClass:"icon app-header-icon",attrs:{src:o(95648)}}),a._v(" "),t("inline-svg",{staticClass:"icon app-header-icon",attrs:{src:o(33875)}}),a._v(" "),t("inline-svg",{staticClass:"icon app-header-icon",attrs:{src:o(23275)}}),a._v(" "),t("inline-svg",{staticClass:"icon app-header-icon",attrs:{src:o(45231)}})],1),a._v(" "),t("div",{staticClass:"pomodoro"},[t("div",{staticClass:"circle"},[t("inline-svg",{staticClass:"circle-svg",attrs:{src:o(55179)}}),a._v(" "),t("inline-svg",{staticClass:"circle-progress",attrs:{src:o(55179)}})],1),a._v(" "),t("div",{staticClass:"timer"},[a._v("25:00")])])])]),a._v(" "),t("div",{staticClass:"text"},[a._v("Use Focus Mode to concentrate.")]),a._v(" "),t("div",{staticClass:"description"},[a._v("Tackle one task at a time, eliminate distractions & use focus timers.")])]},proxy:!0}])})],1)};e._withStripped=!0;var i=o(21325),s=o(24871),r=o(20144);const p={name:"FocusModeHoverDropdown",components:{AppPopup:i.Z,AppView:s.Z},computed:{backgroundUrl:()=>`url("${m.models.backgroundManager.getActiveItem().get("filename")}")`}},n=()=>{(0,r.sj)(((a,t)=>({"5d0e2d84":a.backgroundUrl})))},d=p.setup;p.setup=d?(a,t)=>(n(),d(a,t)):n;const c=p;o(53496);const l=(0,o(51900).Z)(c,e,[],!1,null,"a7a139fa",null).exports},66908:(a,t,o)=>{var e=o(90452);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals),(0,o(45346).Z)("31fe0a49",e,!1,{})},53496:(a,t,o)=>{var e=o(18167);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals),(0,o(45346).Z)("5d4a6356",e,!1,{})}}]);