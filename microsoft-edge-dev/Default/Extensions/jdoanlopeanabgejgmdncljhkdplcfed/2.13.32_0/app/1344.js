(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1344,4145],{61757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(8081),i=a.n(s),r=a(23645),n=a.n(r)()(i());n.push([t.id,".app-header-control[data-v-7baa4cc7]{height:100%}.app-header-control.disabled[data-v-7baa4cc7]{opacity:var(--opacity-stop-4);pointer-events:none}.app-header-control .icon-wrapper[data-v-7baa4cc7]{height:100%;display:flex;align-items:center;align-self:stretch;justify-content:center;padding:0 8px;cursor:pointer}.app-header-control .icon[data-v-7baa4cc7]{opacity:var(--opacity-stop-5)}",""]);const o=n},10813:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(8081),i=a.n(s),r=a(23645),n=a.n(r)()(i());n.push([t.id,".plus-status-banner[data-v-55160104]{display:flex;position:relative;z-index:2;align-items:center;justify-content:center;order:1;padding:.375rem var(--dash-side-margin);background-color:var(--color-bg);color:var(--color-text);text-shadow:none;gap:.9375rem}.plus-status-banner .status-title[data-v-55160104]{font-size:.875rem;font-weight:600}.plus-status-banner .dash-button[data-v-55160104]{padding:.375rem .9375rem;box-shadow:none;font-size:.875rem;font-weight:600}.plus-status-banner .app-header-control[data-v-55160104]{position:absolute;inset:0 0 0 auto}.plus-status-banner .app-header-control[data-v-55160104] .icon-wrapper{padding:0 var(--dash-side-margin) 0 .5rem}@media screen and (width <= 720px){.plus-status-banner[data-v-55160104]{flex-direction:column;align-items:start;padding:var(--dash-side-margin) calc(var(--dash-side-margin) + 1.25rem) var(--dash-side-margin) var(--dash-side-margin)}.plus-status-banner .app-header-control[data-v-55160104]{height:auto;inset:0 0 auto auto}.plus-status-banner .app-header-control[data-v-55160104] .icon-wrapper{padding:var(--dash-side-margin) var(--dash-side-margin) .5rem .5rem}}",""]);const o=n},68657:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(8081),i=a.n(s),r=a(23645),n=a.n(r)()(i());n.push([t.id,".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",""]);const o=n},31344:(t,e,a)=>{"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("smooth-reflow",{attrs:{disabled:t.plusStatusBannerStore.bannerVisible}},[t.plusStatusBannerStore.bannerVisible?e("app-container",{staticClass:"plus-status-banner dark dark-full",attrs:{"app-name":"plus-status-banner","data-test":"plus-status-banner"}},[t.plusStatusBannerStore.trialVisible?[e("span",{staticClass:"status-title"},[t._v("\n\t\t\t\t"+t._s(t.plusStatusBannerStore.trialDaysText)+" remaining in Plus trial • Don't lose access to Plus!\n\t\t\t")]),t._v(" "),e("button",{staticClass:"dash-button",attrs:{"data-test":"upgrade"},on:{click:t.openUpgradeModal}},[t._v(t._s(t.ctaTrialButtonExperimentCopy))])]:t.plusStatusBannerStore.expiredVisible?[e("span",{staticClass:"status-title"},[t._v(t._s(t.expiredStatusCopy))]),t._v(" "),e("button",{staticClass:"dash-button",attrs:{"data-test":"upgrade"},on:{click:t.openUpgradeModal}},[t._v("Subscribe to access all features")])]:t._e(),t._v(" "),e("app-header-control",{attrs:{"data-test":"dismiss"},on:{click:t.closeBanner}},[e("base-icon",{staticClass:"icon close",attrs:{src:"icon-close",size:"11px"}})],1)],2):t._e()],1)};s._withStripped=!0;var i=a(20144),r=a(38267),n=a(36399),o=a(84820),d=a(16618),l=a(63420),h=a(66108),p=a(70237);const u="plusStatusBanner:trial:dismissed",c="plusStatusBanner:expired:dismissed";var f;!function(t){t.Default="control",t.AddPayment="experimental"}(f||(f={}));const v={[f.Default]:"Subscribe to Momentum Plus",[f.AddPayment]:"Add payment method"},g=(0,l.Q_)("plusStatusBanner",{state(){var t,e;return{trialDismissedDate:Number(null!==(t=localStorage.getItem(u))&&void 0!==t?t:0),expiredDismissedDate:Number(null!==(e=localStorage.getItem(c))&&void 0!==e?e:0)}},getters:{trialVisible(t){const e=(0,h.Z)();return e.status===h.y.TrialingCardless&&e.trialRemainingDays<=2&&!e.hasPaymentMethod&&p.Z.dateDiffIntegerDays(t.trialDismissedDate,Date.now())>=1},expiredVisible(t){const e=(0,h.Z)();return[h.y.ExpiredPlus,h.y.ExpiredTrial].includes(e.status)&&!t.expiredDismissedDate},bannerVisible(){const t=(0,h.Z)();return t.loaded&&!t.loading&&(this.trialVisible||this.expiredVisible)},trialDaysText(){const t=(0,h.Z)();return`${t.trialRemainingDays} day${1!==t.trialRemainingDays?"s":""}`}},actions:{dismissTrialBannerForDay(){const t=Date.now();localStorage.setItem(u,String(t)),this.trialDismissedDate=t},dismissExpiredBannerIndefinitely(){const t=Date.now();localStorage.setItem(c,String(t)),this.expiredDismissedDate=t}}});var y=a(96046);const b=new m.Analytics({feature:"plus status banner"}),w=(0,i.aZ)({name:"PlusStatusBanner",components:{AppHeaderControl:d.Z,BaseIcon:o.Z,SmoothReflow:n.Z,AppContainer:r.default},setup:()=>({plusStatusBannerStore:g(),subscriptionSummaryStore:(0,h.Z)()}),computed:{ctaTrialButtonExperiment:()=>y.Z.experiments.find((t=>"plus_status_cta_trial_button_experiment"===t.experimentName)),ctaTrialButtonExperimentCopy(){const t=this.ctaTrialButtonExperiment?this.ctaTrialButtonExperiment.variantName:f.Default;return v[t]},expiredStatusCopy(){switch(this.subscriptionSummaryStore.status){case h.y.ExpiredTrial:return"Your Plus trial has expired";case h.y.ExpiredPlus:default:return"You've lost access to Plus!"}}},async mounted(){this.subscriptionSummaryStore.loaded||this.subscriptionSummaryStore.loading||await this.subscriptionSummaryStore.refresh(),m.widgetManager.appReady("plus-status-banner")},methods:{openUpgradeModal(){b.capture("add payment clicked",{type:this.subscriptionSummaryStore.status}),m.cmd("modal.open","SUBSCRIBE")},closeBanner(){b.capture("dismissed",{type:this.subscriptionSummaryStore.status}),this.plusStatusBannerStore.trialVisible?this.plusStatusBannerStore.dismissTrialBannerForDay():this.plusStatusBannerStore.expiredVisible&&this.plusStatusBannerStore.dismissExpiredBannerIndefinitely()}}});a(21842);const S=(0,a(51900).Z)(w,s,[],!1,null,"55160104",null).exports;var x=a(83578);const P=document.querySelector(".region.top-bar"),D=document.createElement("div");P&&P.prepend(D),new x.Z({render:t=>t(S)}).$mount(D)},32542:(t,e,a)=>{"use strict";a.d(e,{p:()=>n});var s=a(20144),i=a(34145),r=a(67652);const n=(t,{mode:e=r.Z.Sync,path:a="",responseProperty:n,syncAutomatically:o=!1}={})=>{const d=(0,s.iH)(!1),l=(0,s.iH)(!1),h=t=>{0!==t.length&&t.forEach((t=>u.add(t)))},p=async t=>{await c.update(m.$id,t,{appendIdToPath:!1})},u=new Set,c=new i.U("main",{mode:e,path:a}),m=t({loadedRef:d,loadingRef:l,updateAsync:async t=>{h(Object.keys(t)),f.$state={...f.$state,...t},await p(t)},refresh:async()=>{d.value||l.value?await c.refresh({id:m.$id,appendIdToPath:!1,timestampKey:m.$id}):v()}}),f=m(),v=()=>{f.$subscribe((t=>{d.value&&"payload"in t&&(h(Object.keys(t.payload)),p(t.payload))})),Object.keys(f.$state).forEach((t=>(0,s.YP)((()=>f[t]),(async e=>{d.value&&(u.has(t)?u.delete(t):await c.update(m.$id,{[t]:e},{appendIdToPath:!1}))})))),l.value=!0,c.get({id:m.$id,success:t=>{d.value=!0,l.value=!1,t&&(h(Object.keys(t)),f.$state={...f.$state,...t})},failure:t=>console.error(t),appendIdToPath:!1,responseProperty:n,timestampKey:m.$id})};return o&&v(),m}},34145:(t,e,a)=>{"use strict";a.d(e,{U:()=>o});var s=a(42935),i=a(24960),r=a(67652),n=a(35597);class o{constructor(t,{queryParams:e={},getResponseProperty:a,path:s="",mode:n=r.Z.Sync}={}){this.type=t,this.queryParams=e,this.getResponseProperty=a,this.path=s,this.mode=n,this.dataSync=i.Z}get({id:t,path:e=this.path||this.type,mode:a=this.mode,success:s,failure:i,queryParams:o={},retry:d,responseProperty:l=this.getResponseProperty,appendIdToPath:h,timestampKey:p=this.type}){(async()=>{var u;a===r.Z.Timestamp&&(a=await n.Z.requiresSync(p)?r.Z.Sync:r.Z.Cache,n.Z.addUpdateListener(p,this.refresh.bind(this,{id:t,path:e,queryParams:o,retry:d,responseProperty:l,appendIdToPath:h,timestampKey:p}))),e+=this.buildQueryString((null===(u=this.queryParams)||void 0===u?void 0:u.get)||{},o);const c=[this.type,{id:t,path:e,env:this.getEnv(),mode:a,retry:d,responseProperty:l,appendIdToPath:h,timestampKey:p}];a===r.Z.Server?this.dataSync.sendMessage({handler:"get",args:c}).then(s).catch(i):this.dataSync.sendRecurringCrossTabMessage({msgId:`${this.type}${t?`:${t}`:""}:refreshed`,handler:"get",args:c,success:s,failure:i})})()}refresh({id:t,path:e=this.path||this.type,queryParams:a={},retry:s,responseProperty:i=this.getResponseProperty,appendIdToPath:n,timestampKey:o=this.type}={}){return new Promise(((d,l)=>this.get({id:t,mode:r.Z.Server,path:e,queryParams:a,retry:s,success:d,failure:l,responseProperty:i,appendIdToPath:n,timestampKey:o})))}async create(t,e,{path:a=this.path||this.type,mode:s=this.mode}={}){const i=[this.type,t,e];i.push({path:a,mode:s,env:this.getEnv()}),await this.dataSync.sendMessage({handler:"create",args:i})}async update(t,e,{path:a=this.path||this.type,mode:s=this.mode,queryParams:i={},appendIdToPath:r}={}){var n;const o=this.buildQueryString((null===(n=this.queryParams)||void 0===n?void 0:n.update)||{},i),d=[this.type,t,e];d.push({path:a,mode:s,env:this.getEnv(),queryString:o,appendIdToPath:r}),await this.dataSync.sendMessage({handler:"update",args:d})}async delete(t,{path:e=this.path||this.type,mode:a=this.mode}={}){const s=[this.type,t];s.push({path:e,mode:a,env:this.getEnv()}),await this.dataSync.sendMessage({handler:"delete",args:s})}getEnv(){return{token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version,tabId:s.Z}}buildQueryString(...t){const e=t.reduce(((t,e)=>({...e,...t})),{}),a=new URLSearchParams(e).toString();return a?"?"+a:""}}},66108:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d,y:()=>s});var s,i=a(70237),r=a(67652),n=a(63420),o=a(32542);!function(t){t.Plus="subscribed",t.TrialingCardless="trialingCardless",t.TrialingCard="trialingCard",t.ExpiredTrial="expiredTrial",t.ExpiredPlus="expiredPlus",t.Free="free"}(s||(s={}));const d=(0,o.p)((({loadedRef:t,loadingRef:e,refresh:a})=>(0,n.Q_)("userSubscriptionSummary",{state:()=>({active:!1,error:null,firstSubscriptionStart:null,hasPaymentMethod:!1,intent:null,pastDue:!1,subscriptionEnd:null,trialEnd:null,trialing:!1}),getters:{loaded:()=>t.value,loading:()=>e.value,status:t=>t.trialing&&t.hasPaymentMethod?s.TrialingCard:t.trialing&&!t.hasPaymentMethod?s.TrialingCardless:t.active?s.Plus:t.subscriptionEnd?s.ExpiredPlus:t.trialEnd?s.ExpiredTrial:s.Free,trialRemainingDays(t){var e;return i.Z.dateDiffIntegerDays(Date.now(),null!==(e=t.trialEnd)&&void 0!==e?e:Date.now())}},actions:{async refresh(){await a()}}})),{path:"user/subscription_summary",mode:r.Z.Timestamp})},67652:(t,e,a)=>{"use strict";var s;a.d(e,{Z:()=>i}),function(t){t.Sync="sync",t.Cache="cache",t.Server="server",t.Timestamp="timestamp"}(s||(s={}));const i=s},16618:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-header-control",class:{disabled:t.disabled},on:{click:function(e){return t.$emit("click",e)}}},[e("div",{class:["icon-wrapper",{"u--mobile-show-bg":t.showMobileBackground}]},[t._t("default")],2)])};s._withStripped=!0;const i={name:"AppHeaderControl",props:{showMobileBackground:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}};a(20861);const r=(0,a(51900).Z)(i,s,[],!1,null,"7baa4cc7",null).exports},36399:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var s=function(){var t=this,e=t._self._c;return e("div",{ref:"wrapper",staticClass:"smooth-reflow",class:{"tr-height":t.height,"tr-width":t.width,"tr-disabled":t.transitionDisabled,"hide-overflow":t.hideOverflow&&(t.resizing||t.transitionActive)},style:{height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[t.transitionGroup?e("transition-group",t._g(t._b({directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}],attrs:{tag:"div"}},"transition-group",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2):e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[e("transition",t._g(t._b({},"transition",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2)],1)],1)};s._withStripped=!0;var i=a(61706),r=a(42223),n=a(96046),o=a(20144);const d={name:"SmoothReflow",directives:{ResizeSensor:i.Z},mixins:[r.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},awaitAppsReady:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"},transitionGroup:{type:Boolean,default:!1},debug:{type:Boolean,default:!1},firstTransitionDisabled:{type:Boolean,default:!1}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:null,wrapperWidthPx:null,auto:!1,resizing:!1,transitionActive:!1,ancestors:[],resizedOnce:!1}),computed:{awaitingAppsReady(){return this.awaitAppsReady&&!n.Z.allowAwaitingAppsReadySmoothReflow},transitionDisabled(){return this.auto||this.disabled||this.awaitingAppsReady},transitionProps(){return{name:this.transition,appear:this.appear,duration:this.awaitingAppsReady?0:null===this.transitionDuration?this.duration:this.transitionDuration}},wrapperHeight(){return!this.height||this.transitionDisabled?"auto":this.wrapperHeightPx+"px"},wrapperWidth(){return this.width?this.transitionDisabled?"auto":this.wrapperWidthPx+"px":""},transitionDurationMs(){return`${this.transitionDisabled?0:null===this.transitionDuration?this.duration:this.transitionDuration}ms`},resizeDurationMs(){return this.resizeDuration+"ms"},resizeDuration(){return this.firstTransitionDisabled&&!this.resizedOnce||this.awaitingAppsReady?0:null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},watch:{transitionDisabled(t){t||this.setExplicitDimensions()}},created(){this.transitionHooks={beforeEnter:this.beforeEnter,enter:this.enter,afterEnter:this.afterEnter,enterCancelled:this.enterCancelled,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.afterLeave,leaveCancelled:this.leaveCancelled},this.appear&&(this.height&&(this.wrapperHeightPx=0),this.width&&(this.wrapperWidthPx=0)),this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},async mounted(){this.nested&&(await this.$nextTick(),this.findSmoothReflowAncestors()),this.setExplicitDimensions()},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){if(this.transitionDisabled||this.height&&!this.width&&this.wrapperHeightPx===t.height||!this.height&&this.width&&this.wrapperWidthPx===t.width||this.height&&this.width&&this.wrapperHeightPx===t.height&&this.wrapperWidthPx===t.width)return this.$emit("afterResize");this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height),this.width&&(this.wrapperWidthPx=t.width),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1,this.afterResize()}),this.duration)},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth))},afterResize(){this.resizedOnce=!0,this.$emit("afterResize")},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}},l=()=>{(0,o.sj)(((t,e)=>({"3872912c":t.resizeDurationMs,"7b63f4cb":t.transitionDurationMs})))},h=d.setup;d.setup=h?(t,e)=>(l(),h(t,e)):l;const p=d;a(67135);const u=(0,a(51900).Z)(p,s,[],!1,null,"256e142c",null).exports},20861:(t,e,a)=>{var s=a(61757);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("2dabab0a",s,!1,{})},21842:(t,e,a)=>{var s=a(10813);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("6126910e",s,!1,{})},67135:(t,e,a)=>{var s=a(68657);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("1ea382bd",s,!1,{})}}]);