(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[705],{48494:(e,t,i)=>{"use strict";function o({useViewStateStore:e,analytics:t}={}){return{computed:{popupActive(){return this.viewStateStore.popupActive}},unreactive(){const i={};return e&&(i.viewStateStore=e()),t&&(i.capture=t.capture.bind(t)),t&&(i.batchCapture=t.batchCapture),i},methods:{async togglePopupAndCaptureIfOpen(e){if(await this.togglePopup(),this.popupActive){const t=e instanceof KeyboardEvent?"hotkey":"click";this.capture("app show",{source:t})}},closePopup(){this.viewStateStore.togglePopup(!1)},async togglePopup(e){const t="boolean"!=typeof e;t&&this.popupActive&&!this.viewStateStore.focused?this.viewStateStore.focus():await this.viewStateStore.togglePopup(t?void 0:e)}},provide:()=>({capture:t.capture.bind(t),batchCapture:t.batchCapture})}}i.d(t,{Z:()=>o})},87663:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var o=i(8081),a=i.n(o),s=i(23645),n=i.n(s)()(a());n.push([e.id,".app-dash[data-v-fe15987a]{white-space:nowrap}",""]);const p=n},34239:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var o=i(8081),a=i.n(o),s=i(23645),n=i.n(s)()(a());n.push([e.id,"\n/* stylelint-disable */\n.topics[data-v-d86038e4] { --launcher-item-bg: var(--color-stop-1); order: 7;\n}\n.topics.active .app-dash[data-v-d86038e4] { opacity: 0;\n}\n",""]);const p=n},705:(e,t,i)=>{"use strict";i.r(t);var o=i(83578),a=function(){var e=this,t=e._self._c;return t("app-container",{staticClass:"topics",class:{active:e.popupActive},attrs:{"data-test":"topics","app-name":"topics",hotkey:"P",overlay:e.popupActive},on:{toggle:e.togglePopupAndCaptureIfOpen}},[t("app-dash",{attrs:{label:"Topics",icon:"icon/apps/topics","data-test":"app-dash"},on:{click:e.togglePopupAndCaptureIfOpen}}),e._v(" "),t("transition",{attrs:{name:"swipe-left"}},[e.popupActive?t("topics-app",{attrs:{focused:e.viewStateStore.focused},on:{close:e.closePopup},nativeOn:{click:function(t){return e.viewStateStore.focus()}}}):e._e()],1)],1)};a._withStripped=!0;var s=i(38267),n=i(47920),p=i(20338);const r=(0,i(95756).vM)("topics");var c=i(48494);const u=new p.Z({feature:"topics",is_paid_event:!0,location:"app"}),l={name:"Topics",components:{AppContainer:s.default,AppDash:n.Z,TopicsApp:()=>i.e(6047).then(i.bind(i,16047))},mixins:[(0,c.Z)({useViewStateStore:r,analytics:u})],provide(){return{viewStateStore:this.viewStateStore}},setup:()=>({viewStateStore:r()}),mounted(){m.widgetManager.appReady("topics")}};i(12315);const d=(0,i(51900).Z)(l,a,[],!1,null,"d86038e4",null).exports,v=document.querySelector(".region.top-left"),h=document.createElement("div");v&&v.append(h),new o.Z({render:e=>e(d)}).$mount(h)},95756:(e,t,i)=>{"use strict";i.d(t,{t7:()=>l,vM:()=>u});var o=i(63420),a=i(20144),s=i(96046),n=i(63139),p=i(7838),r=i(70237);const c=e=>Object.keys(e).find((t=>{var i;return null===(i=e[t])||void 0===i?void 0:i.defaultView})),u=(e,{views:t}={})=>{const i=(0,o.Q_)(e+"ViewState",{state:()=>{var i;return{activeViewId:null!==(i=t&&c(t))&&void 0!==i?i:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const i=t[e.activeViewId];if(i)return i;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>n.Z.isOnTop(e)},actions:{focus(){n.Z.add(e)},async setActiveView(e){var i,o;if(!t||!await this.beforeViewChange())return;let a=e;if("default"===e){const e=c(t);if(!e)throw new Error("No view found with defaultView: true");a=e}await(null===(o=null===(i=this.activeView)||void 0===i?void 0:i.beforeLeave)||void 0===o?void 0:o.call(i,a)),this.activeViewId=a},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await a.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),r=(0,o.Jk)(i());return p.Z.$on(e+":close",(()=>i().togglePopup(!1))),(0,a.YP)(r.popupActive,(t=>{t?n.Z.add(e):n.Z.remove(e)})),(0,a.YP)(r.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&n.Z.add(e,!0),s.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),i},l=(e,{views:t,extend:i})=>{const o=u(`base${r.Z.capitalizeFirstLetter(e)}`,{views:t}),a=i(o(),`extended${r.Z.capitalizeFirstLetter(e)}ViewState`);return d(`${e}ViewState`,o,a)},d=(e,t,i)=>{const s=t(),n=i();return(0,o.Q_)(e,(()=>({...(0,a.BK)(s),...(0,a.BK)(n)})))}},47920:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var o=function(){var e=this,t=e._self._c;return t("div",e._g({class:["app-dash","toggle","add-shadow",{"app-dash-icon":!!e.icon}],attrs:{"data-test":"app-dash"}},e.$listeners),[e.icon?t("base-icon",{attrs:{src:e.icon,size:e.iconSize}}):e._e(),e._v(" "),e.label?t("span",{class:{"app-dash-icon-label":!!e.icon,"u--mobile-hide":!!e.icon}},[e._v("\n\t\t"+e._s(e.label)+"\n\t")]):e._e(),e._v(" "),e._t("default")],2)};o._withStripped=!0;var a=i(84820);const s={name:"AppDash",components:{BaseIcon:a.Z},props:{label:{type:String,default:""},icon:{type:a.Z.props.src.type,default:""},iconSize:{type:a.Z.props.size.type,default:"24px"}}};i(43347);const n=(0,i(51900).Z)(s,o,[],!1,null,"fe15987a",null).exports},43347:(e,t,i)=>{var o=i(87663);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,i(45346).Z)("1e42dca1",o,!1,{})},12315:(e,t,i)=>{var o=i(34239);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,i(45346).Z)("0832c2ec",o,!1,{ssrId:!0})}}]);