(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7638],{48494:(e,t,i)=>{"use strict";function o({useViewStateStore:e,analytics:t}={}){return{computed:{popupActive(){return this.viewStateStore.popupActive}},unreactive(){const i={};return e&&(i.viewStateStore=e()),t&&(i.capture=t.capture.bind(t)),t&&(i.batchCapture=t.batchCapture),i},methods:{async togglePopupAndCaptureIfOpen(e){if(await this.togglePopup(),this.popupActive){const t=e instanceof KeyboardEvent?"hotkey":"click";this.capture("app show",{source:t})}},closePopup(){this.viewStateStore.togglePopup(!1)},async togglePopup(e){const t="boolean"!=typeof e;t&&this.popupActive&&!this.viewStateStore.focused?this.viewStateStore.focus():await this.viewStateStore.togglePopup(t?void 0:e)}},provide:()=>({capture:t.capture.bind(t),batchCapture:t.batchCapture})}}i.d(t,{Z:()=>o})},18267:(e,t,i)=>{"use strict";function o({appKey:e,hideEvents:t,closeFunctionName:i,eventTriggerProperty:o}){return{created(){e&&t&&i&&o?(this.$watch(o,(i=>{i&&t.forEach((t=>m.trigger(t,e)))})),t.forEach((e=>{m.on(e,this.onHideEvent)}))):console.warn("Missing hideEventsMixin Arguments: ",e?"":"appKey",t?"":"hideEvents",i?"":"closeFunctionName",o?"":"eventTriggerProperty")},destroyed(){t.forEach((e=>{m.off(e,this.onHideEvent)}))},methods:{onHideEvent(t){t!==e&&this[i]()}}}}i.d(t,{Z:()=>o})},87663:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var o=i(8081),n=i.n(o),a=i(23645),s=i.n(a)()(n());s.push([e.id,".app-dash[data-v-fe15987a]{white-space:nowrap}",""]);const r=s},24390:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var o=i(8081),n=i.n(o),a=i(23645),s=i.n(a)()(n());s.push([e.id,"\n/* stylelint-disable */\n.app-dash.hidden[data-v-2b5d17f6] { opacity: 0;\n}\n",""]);const r=s},47638:(e,t,i)=>{"use strict";i.r(t);var o=i(83578),n=function(){var e=this,t=e._self._c;return t("app-container",{attrs:{"app-name":"notes","visible-setting":"notesVisible",hotkey:"N","data-test":"notes",overlay:e.popupActive},on:{toggle:e.togglePopupAndCaptureIfOpen}},[t("app-dash",{class:{hidden:e.popupActive&&e.fullscreen},on:{click:function(t){return e.togglePopupAndCaptureIfOpen({source:"click"})}}},[e._v("\n\t\tNotes\n\t")]),e._v(" "),t("transition",{attrs:{name:"slide-up-fade"}},[e.popupActive?t("notes-app"):e._e()],1)],1)};n._withStripped=!0;var a=i(38267),s=i(47920),r=i(18267),p=i(84722),c=i(63420),u=i(20338),l=i(48494),d=i(40531);const v=new u.Z({feature:"notes"}),h={name:"Notes",components:{AppDash:s.Z,NotesApp:()=>Promise.all([i.e(5757),i.e(9980),i.e(464),i.e(4130),i.e(1325),i.e(6390),i.e(541),i.e(3608),i.e(1829),i.e(9937)]).then(i.bind(i,3577)),AppContainer:a.default},mixins:[(0,r.Z)({appKey:"notes",hideEvents:["globalEvent:toggle:bottom-right"],closeFunctionName:"closePopup",eventTriggerProperty:"popupActive"}),(0,l.Z)({useViewStateStore:p.V,analytics:v})],provide(){return{viewStateStore:this.notesViewStateStore}},computed:{...(0,c.Kc)(p.V),popupActive(){return this.notesViewStateStore.popupActive},fullscreen:()=>d.Fl.notesFullscreen},mounted(){m.widgetManager.appReady("notes")}};i(96398);const f=(0,i(51900).Z)(h,n,[],!1,null,"2b5d17f6",null).exports,w=document.querySelector(".region.bottom-right"),g=document.createElement("div");w&&w.prepend(g),new o.Z({render:e=>e(f)}).$mount(g)},84722:(e,t,i)=>{"use strict";i.d(t,{V:()=>o});const o=(0,i(95756).vM)("notes",{views:{list:{defaultView:!0,order:1},deleted:{order:2}}})},95756:(e,t,i)=>{"use strict";i.d(t,{t7:()=>l,vM:()=>u});var o=i(63420),n=i(20144),a=i(96046),s=i(63139),r=i(7838),p=i(70237);const c=e=>Object.keys(e).find((t=>{var i;return null===(i=e[t])||void 0===i?void 0:i.defaultView})),u=(e,{views:t}={})=>{const i=(0,o.Q_)(e+"ViewState",{state:()=>{var i;return{activeViewId:null!==(i=t&&c(t))&&void 0!==i?i:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const i=t[e.activeViewId];if(i)return i;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>s.Z.isOnTop(e)},actions:{focus(){s.Z.add(e)},async setActiveView(e){var i,o;if(!t||!await this.beforeViewChange())return;let n=e;if("default"===e){const e=c(t);if(!e)throw new Error("No view found with defaultView: true");n=e}await(null===(o=null===(i=this.activeView)||void 0===i?void 0:i.beforeLeave)||void 0===o?void 0:o.call(i,n)),this.activeViewId=n},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await n.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),p=(0,o.Jk)(i());return r.Z.$on(e+":close",(()=>i().togglePopup(!1))),(0,n.YP)(p.popupActive,(t=>{t?s.Z.add(e):s.Z.remove(e)})),(0,n.YP)(p.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&s.Z.add(e,!0),a.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),i},l=(e,{views:t,extend:i})=>{const o=u(`base${p.Z.capitalizeFirstLetter(e)}`,{views:t}),n=i(o(),`extended${p.Z.capitalizeFirstLetter(e)}ViewState`);return d(`${e}ViewState`,o,n)},d=(e,t,i)=>{const a=t(),s=i();return(0,o.Q_)(e,(()=>({...(0,n.BK)(a),...(0,n.BK)(s)})))}},47920:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var o=function(){var e=this,t=e._self._c;return t("div",e._g({class:["app-dash","toggle","add-shadow",{"app-dash-icon":!!e.icon}],attrs:{"data-test":"app-dash"}},e.$listeners),[e.icon?t("base-icon",{attrs:{src:e.icon,size:e.iconSize}}):e._e(),e._v(" "),e.label?t("span",{class:{"app-dash-icon-label":!!e.icon,"u--mobile-hide":!!e.icon}},[e._v("\n\t\t"+e._s(e.label)+"\n\t")]):e._e(),e._v(" "),e._t("default")],2)};o._withStripped=!0;var n=i(84820);const a={name:"AppDash",components:{BaseIcon:n.Z},props:{label:{type:String,default:""},icon:{type:n.Z.props.src.type,default:""},iconSize:{type:n.Z.props.size.type,default:"24px"}}};i(43347);const s=(0,i(51900).Z)(a,o,[],!1,null,"fe15987a",null).exports},43347:(e,t,i)=>{var o=i(87663);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,i(45346).Z)("1e42dca1",o,!1,{})},96398:(e,t,i)=>{var o=i(24390);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,i(45346).Z)("f6fe24c8",o,!1,{ssrId:!0})}}]);