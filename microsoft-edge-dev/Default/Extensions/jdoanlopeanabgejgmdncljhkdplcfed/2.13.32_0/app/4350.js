(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[4350],{48494:(e,t,a)=>{"use strict";function i({useViewStateStore:e,analytics:t}={}){return{computed:{popupActive(){return this.viewStateStore.popupActive}},unreactive(){const a={};return e&&(a.viewStateStore=e()),t&&(a.capture=t.capture.bind(t)),t&&(a.batchCapture=t.batchCapture),a},methods:{async togglePopupAndCaptureIfOpen(e){if(await this.togglePopup(),this.popupActive){const t=e instanceof KeyboardEvent?"hotkey":"click";this.capture("app show",{source:t})}},closePopup(){this.viewStateStore.togglePopup(!1)},async togglePopup(e){const t="boolean"!=typeof e;t&&this.popupActive&&!this.viewStateStore.focused?this.viewStateStore.focus():await this.viewStateStore.togglePopup(t?void 0:e)}},provide:()=>({capture:t.capture.bind(t),batchCapture:t.batchCapture})}}a.d(t,{Z:()=>i})},87663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var i=a(8081),o=a.n(i),n=a(23645),s=a.n(n)()(o());s.push([e.id,".app-dash[data-v-fe15987a]{white-space:nowrap}",""]);const r=s},41328:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var i=a(8081),o=a.n(i),n=a(23645),s=a.n(n)()(o());s.push([e.id,"\n/* stylelint-disable */\n.launcher[data-v-ac3d15ec] { --launcher-item-bg: var(--color-stop-1); order: 6;\n}\n\n",""]);const r=s},64350:(e,t,a)=>{"use strict";a.r(t);var i=a(83578),o=function(){var e=this,t=e._self._c;return t("app-container",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closePopup,expression:"closePopup"}],staticClass:"launcher",class:{active:e.popupActive},attrs:{"data-test":"apps","app-name":"apps",hotkey:"C",overlay:e.popupActive},on:{toggle:e.togglePopupAndCaptureIfOpen}},[t("app-dash",{attrs:{icon:"icon/apps/app-launcher","data-test":"app-dash"},on:{click:e.togglePopupAndCaptureIfOpen}},[e._v("\n\t\tApps\n\t")]),e._v(" "),t("transition",{attrs:{name:"slide-down-fade"}},[e.popupActive?t("launcher-app",{attrs:{focused:e.viewStateStore.focused},on:{close:e.closePopup},nativeOn:{click:function(t){return e.viewStateStore.focus()}}}):e._e()],1)],1)};o._withStripped=!0;var n=a(38267),s=a(47920),r=a(20338);const p=(0,a(95756).vM)("appLauncher");var c=a(48494);const u=new r.Z({feature:"app launcher",is_paid_event:!0,location:"app"}),l={name:"Launcher",components:{AppContainer:n.default,AppDash:s.Z,LauncherApp:()=>Promise.all([a.e(1325),a.e(2297)]).then(a.bind(a,2297))},mixins:[(0,c.Z)({useViewStateStore:p,analytics:u})],provide(){return{viewStateStore:this.viewStateStore}},setup:()=>({viewStateStore:p()}),mounted(){m.widgetManager.appReady("apps")}};a(76978);const d=(0,a(51900).Z)(l,o,[],!1,null,"ac3d15ec",null).exports,v=document.querySelector(".region.top-left"),h=document.createElement("div");v&&v.append(h),new i.Z({render:e=>e(d)}).$mount(h)},95756:(e,t,a)=>{"use strict";a.d(t,{t7:()=>l,vM:()=>u});var i=a(63420),o=a(20144),n=a(96046),s=a(63139),r=a(7838),p=a(70237);const c=e=>Object.keys(e).find((t=>{var a;return null===(a=e[t])||void 0===a?void 0:a.defaultView})),u=(e,{views:t}={})=>{const a=(0,i.Q_)(e+"ViewState",{state:()=>{var a;return{activeViewId:null!==(a=t&&c(t))&&void 0!==a?a:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const a=t[e.activeViewId];if(a)return a;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>s.Z.isOnTop(e)},actions:{focus(){s.Z.add(e)},async setActiveView(e){var a,i;if(!t||!await this.beforeViewChange())return;let o=e;if("default"===e){const e=c(t);if(!e)throw new Error("No view found with defaultView: true");o=e}await(null===(i=null===(a=this.activeView)||void 0===a?void 0:a.beforeLeave)||void 0===i?void 0:i.call(a,o)),this.activeViewId=o},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await o.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),p=(0,i.Jk)(a());return r.Z.$on(e+":close",(()=>a().togglePopup(!1))),(0,o.YP)(p.popupActive,(t=>{t?s.Z.add(e):s.Z.remove(e)})),(0,o.YP)(p.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&s.Z.add(e,!0),n.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),a},l=(e,{views:t,extend:a})=>{const i=u(`base${p.Z.capitalizeFirstLetter(e)}`,{views:t}),o=a(i(),`extended${p.Z.capitalizeFirstLetter(e)}ViewState`);return d(`${e}ViewState`,i,o)},d=(e,t,a)=>{const n=t(),s=a();return(0,i.Q_)(e,(()=>({...(0,o.BK)(n),...(0,o.BK)(s)})))}},47920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var i=function(){var e=this,t=e._self._c;return t("div",e._g({class:["app-dash","toggle","add-shadow",{"app-dash-icon":!!e.icon}],attrs:{"data-test":"app-dash"}},e.$listeners),[e.icon?t("base-icon",{attrs:{src:e.icon,size:e.iconSize}}):e._e(),e._v(" "),e.label?t("span",{class:{"app-dash-icon-label":!!e.icon,"u--mobile-hide":!!e.icon}},[e._v("\n\t\t"+e._s(e.label)+"\n\t")]):e._e(),e._v(" "),e._t("default")],2)};i._withStripped=!0;var o=a(84820);const n={name:"AppDash",components:{BaseIcon:o.Z},props:{label:{type:String,default:""},icon:{type:o.Z.props.src.type,default:""},iconSize:{type:o.Z.props.size.type,default:"24px"}}};a(43347);const s=(0,a(51900).Z)(n,i,[],!1,null,"fe15987a",null).exports},43347:(e,t,a)=>{var i=a(87663);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,a(45346).Z)("1e42dca1",i,!1,{})},76978:(e,t,a)=>{var i=a(41328);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,a(45346).Z)("62b2250f",i,!1,{ssrId:!0})}}]);