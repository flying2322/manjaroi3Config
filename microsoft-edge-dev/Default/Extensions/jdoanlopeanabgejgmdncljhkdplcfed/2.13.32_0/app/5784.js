"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5784,3578,9385],{83578:(e,t,o)=>{o.d(t,{Z:()=>b});var i=o(20144),s=o(88026),n=o(51726),a=o.n(n),r=o(55482),d=o(7838),u=o(35174);let c={};const l={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};let h={};const p={bind:function(e,t){let o,i;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const s=e=>{i=!1,(e=>e&&e.clientX>window.innerWidth)(e)?i=!0:o=e.target},n=s=>{i||(t.modifiers.bubble||!e.contains(o)&&!e.contains(s.target)&&e!==o&&e!==s.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(s)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),h[e.dataset.clickOutsideMouseupHandlerId]=n,h[e.dataset.clickOutsideMousedownHandlerId]=s,document.addEventListener("mouseup",n),document.addEventListener("mousedown",s)},unbind:function(e){var t,o;null!==(t=e.dataset)&&void 0!==t&&t.clickOutsideMouseupHandlerId&&null!==(o=e.dataset)&&void 0!==o&&o.clickOutsideMousedownHandlerId&&(document.removeEventListener("mouseup",h[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",h[e.dataset.clickOutsideMousedownHandlerId]),delete h[e.dataset.clickOutsideMouseupHandlerId],delete h[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler)}};var g=o(94130),w=o(77197),f=o(72433);i.ZP.use(s.Z,{name:"unreactive"}),i.ZP.use(a()),i.ZP.use(r.qK),i.ZP.use(w.Z),i.ZP.use(f.ZP),i.ZP.use(g.Z),i.ZP.prototype.$xhr=u.Z,i.ZP.prototype.$e=d.Z,i.ZP.directive("mobile-click",l),i.ZP.directive("click-outside",p),new i.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),i.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:g.Z});const b=i.ZP},42223:(e,t,o)=>{o.d(t,{Z:()=>i});const i={data:()=>({componentsMounted:{}}),unreactive:()=>({uid:m.utils.shortId()}),beforeCreate(){const e=this.$options.components;Object.keys(e).forEach((t=>{const o=e[t];"function"==typeof o&&(e[t]=function(){this.$set(this.componentsMounted,t,!1);const e=`${t}:${this.uid}:mounted`,i=()=>this.componentsMounted[t]=!0;return this.$e.$once(e,i),o(arguments).then((o=>{const s=o.default;return s&&s.doNotWaitForMount&&(this.$delete(this.componentsMounted,t),this.$e.$off(e,i)),o}))}.bind(this))}))},created(){this.$e.$on("widgets:timeoutExceeded",this.onWidgetTimeout)},mounted(){if(Object.keys(this.componentsMounted).length){const e=this.$watch("componentsMounted",(t=>{Object.values(t).every((e=>e))&&(this.onAllComponentsMounted(),e())}),{deep:!0,immediate:!0})}else this.onAllComponentsMounted()},destroyed(){this.stopListeningToWidgetTimeout()},methods:{stopListeningToWidgetTimeout(){this.$e.$off("widgets:timeoutExceeded",this.onWidgetTimeout)},getContextUid(){return this.$vnode&&this.$vnode.context&&this.$vnode.context.uid||""},onAllComponentsMounted(){this.onAllComponentsMountedOverride?this.onAllComponentsMountedOverride():this.widgetId?m.widgetManager.appReady(this.widgetId):this.emitComponentMounted(),this.stopListeningToWidgetTimeout()},emitComponentMounted(){this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`)},onWidgetTimeout(){const e=Object.keys(this.componentsMounted).filter((e=>!this.componentsMounted[e]));e.length&&console.warn(`${this.$options.name} is awaiting ${e.join(", ")} to mount.`)}}}},40531:(e,t,o)=>{o.d(t,{Fl:()=>n,Jr:()=>c,ax:()=>d,tJ:()=>u,wA:()=>a});var i=o(83578);const s=new i.Z.observable({}),n=new Proxy(s,{get:(e,t)=>(Object.prototype.hasOwnProperty.call(e,t)||i.Z.set(e,t,m.models.customization.getComputedSetting(t)),e[t]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),a=new Proxy(s,{get:(e,t)=>JSON.parse(n[t+"Str"]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),r=new i.Z.observable({}),d=new Proxy(r,{get:(e,t)=>(Object.prototype.hasOwnProperty.call(e,t)||i.Z.set(e,t,m.models.customization.get(t)),e[t]),set:(e,t,o)=>(m.models.customization.save(t,o),i.Z.set(e,t,o),!0)}),u=new Proxy(r,{get:(e,t)=>JSON.parse(d[t+"Str"]),set:(e,t,o)=>(d[t+"Str"]=JSON.stringify(o),!0)});function c(e={}){Object.entries(e).forEach((([e,t])=>i.Z.set(r,e,t))),m.models.customization.save(e)}m.models.customization.on("change",(e=>{e&&("balanceModeStr"in e.changed&&Object.entries(m.models.customization.attributes).forEach((([e,t])=>i.Z.set(s,e,t))),Object.entries(e.changed).forEach((([e,t])=>{i.Z.set(s,e,m.models.customization.getComputedSetting(e)),i.Z.set(r,e,t)})))})),m.on("customization:update",(e=>{e.forEach((e=>{i.Z.set(s,e,m.models.customization.getComputedSetting(e)),i.Z.set(r,e,m.models.customization.get(e))}))}))},30827:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(83578);const s=m.showAnyway=new(i.Z.extend({name:"ShowAnyway",data:()=>({widgets:[]}),methods:{show(e){this.includes(e)||this.widgets.push(e)},hide(e){const t=this.widgets.indexOf(e);~t&&this.widgets.splice(t,1)},includes(e){return this.widgets.includes(e)}}}))},54046:(e,t,o)=>{var i;o.d(t,{BD:()=>r,Le:()=>c,P7:()=>h,Tt:()=>d,VQ:()=>i,_d:()=>a,c:()=>p,cb:()=>u,ie:()=>s,mQ:()=>n,oF:()=>l,sk:()=>m}),function(e){e.Idle="idle",e.Transition="transition",e.Focusing="focusing",e.Celebration="celebration"}(i||(i={}));const s="Focus Mode ended due to inactivity.",n=500,a=4e3,r=["tabs","soundscapes","notes","focus-mode","focus-mode-app","pomodoro","pomodoro-settings","focus","clock","greeting","mantra","focus","big-search","launchpad","links"],d=".todo, .settings",u="soundscapes:shoudResumeOnReload",c=36e5,l=108e5,m=4500,h=["I am centered and focused on my next task","Deep focus is the key to meaningful work","I'm focused on my most meaningful work","Deep work leads to mindful productivity ","I'm connected to my why and focused on the next step","I choose to focus to create my best work","I'm moving forward on what matters","Focus is the key to satisfying work","Distractions have no power over me","Unstoppable focus powers success","I'll let distracting thoughts float away","This is my intentional work time","This is my mindful productivity time","This is my time to access flow state","This is my time for deep work","This is my time to move toward my why","This is my time to complete important tasks","I will take on each task one at a time","I give myself permission to focus on only one thing","This is my time to take action on essential tasks","Block out everything but your next task","I give myself permission to zone in and ignore distractions","I claim this time to focus on what matters","I am connected to my purpose","I am connected to the bigger vision","Focus is my superpower","Deep work is my superpower","Now is the time to tune out the world and focus","Now is the time to move toward my goals","Now is the time to take the next step","Now is the time to move on what matters","I am an unstoppable force of focus","I commit to mindful productivity","Narrow your focus for extraordinary results.","I give my undivided attention to what matters most.","“Until my ONE Thing is done — everything else is a distraction.” - Gary Keller",'"Multitasking is a lie" - Gary Keller',"With undivided attention, I can get it done.","The time I invest with 100% focus yields the most success.","I'm honoring what's important with undivided attention.","I will reach the next milestone with 100% focus.","With practice, I can cultivate lasting deep focus.","I give the best I have to the task at hand.","I am focused on a single direction and one task at a time.","Ignore everything but your most essential task.","One focused step every day creates extraordinary results.","“Focus is a matter of deciding what things you’re not going to do.” —John Carmack","I dedicate my willpower to accomplish one task.","My purpose guides my focus.","My ritual for success is deep work."],p=["Well done! Each moment of deep focus helps you build a stronger, more resilient mind.","Incredible work! Your focus muscle is getting stronger, paving the way to a brighter reality.","Bravo! With each focus session, you're expanding your mental capacity for greatness.","Just as muscles get stronger, your capacity for deep work expands with every effort. Keep building!","Because of your efforts today, Future You has a greater capacity for deep focus. Well done!","Way to go! Your deeper focus today is the foundation for a more fulfilling future.","You're limitless. Deep focus is making your vision more achievable than ever before."]},70287:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(20144);const s=new class{constructor(e,t){this.localStorageKey=e,this.propertyGetter=(0,i.iH)(null);const o=JSON.parse(localStorage.getItem(e)||"null")||t;this.property=(0,i.iH)(o),(0,i.YP)((()=>this.currentValue),(e=>localStorage.setItem(this.localStorageKey,JSON.stringify(e))))}get currentValue(){return this.propertyGetter.value?this.propertyGetter.value():this.property.value}switchOverToWatchedStoreItem(e){this.propertyGetter.value=e}}("focusMode:activeState",!1)},66383:(e,t,o)=>{o.d(t,{LA:()=>c,Tv:()=>h,cc:()=>u,dU:()=>l,xk:()=>d});var i=o(15106),s=o(54046),n=o(40531),a=o(70287),r=o(68122);const d=()=>{const e=n.tJ.focusModeSettings,t={notesVisible:!0,todoVisible:!0,quoteVisible:!1,pomodoroSettingsVisible:!!e.apps.pomodoro.enabled,soundscapesVisible:!!e.apps.soundscapes.enabled,tabsVisible:!!e.apps.tabStash.enabled,focusVisible:!0,centerBelowNavVisible:!1,searchVisible:!1,launchpadVisible:!1,focusModeVisible:!0};(0,i.z)(t)},u=()=>{m.widgetManager.addVueAppExemption(s.BD,"focusMode"),m.widgetManager.addAppExemption(s.Tt,"focusMode")},c=()=>{m.widgetManager.hideApps({layer:"focusMode"}),m.widgetManager.removeVueAppExemption(s.BD,"focusMode"),m.widgetManager.removeAppExemption(s.Tt,"focusMode")},l=()=>{(0,i.z)({soundscapesVisible:!!m.conditionalFeatures.featureEnabled("plus")&&null,tabsVisible:!(!m.conditionalFeatures.featureEnabled("tab-stash-degraded")&&!m.conditionalFeatures.featureEnabled("plus"))&&null,notesVisible:null,todoVisible:null,quoteVisible:null,pomodoroSettingsVisible:null,focusVisible:null,centerBelowNavVisible:null,searchVisible:null,launchpadVisible:null,focusModeVisible:null})},h=async()=>{if(a.Z.currentValue){const e=(await r.Z.focusModeSessionStore())();await e.disableAppsBeforeStop(!1),await e.stopAndSaveFocusMode()}}},69385:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c,useFocusModeViewStateStore:()=>u});var i=o(63420),s=o(95756),n=o(70237),a=o(54046),r=o(66383);const d=(0,s.vM)("focusModeDash",{views:{[a.VQ.Idle]:{beforeLeave:async e=>{e===a.VQ.Transition?(m.widgetManager.hideApps({layer:"focusMode"}),await n.Z.delay(a.mQ),(0,r.xk)()):e===a.VQ.Focusing&&(m.widgetManager.hideApps({layer:"focusMode"}),(0,r.xk)(),n.Z.delay(a.mQ).then((()=>{(0,r.cc)()})))},defaultView:!0},[a.VQ.Transition]:{beforeLeave:()=>{n.Z.delay(a.mQ).then((()=>{(0,r.cc)()}))}},[a.VQ.Focusing]:{beforeLeave:e=>{(0,r.LA)(),n.Z.delay(a.mQ).then((()=>{(0,r.dU)(),e===a.VQ.Idle&&m.widgetManager.showApps({layer:"focusMode"})}))}},[a.VQ.Celebration]:{beforeLeave:()=>{n.Z.delay(a.mQ).then((()=>{m.widgetManager.showApps({layer:"focusMode"})}))}}}})(),u=(0,s.t7)("focusMode",{extend:(e,t)=>(0,i.Q_)(t,{state:()=>({backgroundScale:1,backgroundBlurLayerOpacity:0,backgroundTransitionDuration:0}),getters:{currentFocusModeView:()=>d.activeViewId,currentlyFocusing(){return this.currentFocusModeView===a.VQ.Focusing},backgroundBlurLayerVisible(){return this.currentFocusModeView!==a.VQ.Idle}},actions:{async startFocusMode(){e.popupActive=!1,await d.setActiveView(a.VQ.Transition),this.backgroundTransitionDuration=a.sk,await n.Z.doubleRaf(),this.setFocusingStyleVariables(),await n.Z.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=0},async celebrateFocusMode(){e.popupActive=!1,await d.setActiveView(a.VQ.Celebration),this.backgroundTransitionDuration=1500,await n.Z.doubleRaf(),this.resetFocusingStyleVariables(),await n.Z.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=0,await n.Z.delay(a._d-1500)},async stopFocusMode(){e.popupActive=!1,this.resetFocusingStyleVariables(),await d.setActiveView(a.VQ.Idle)},setFocusingStyleVariables(){this.backgroundScale=1.1,this.backgroundBlurLayerOpacity=1},resetFocusingStyleVariables(){this.backgroundScale=1,this.backgroundBlurLayerOpacity=0},async resumeFocusModeAfterTabLoad(){await d.setActiveView(a.VQ.Focusing),await("visible"===document.visibilityState?n.Z.doubleRaf():n.Z.delay(0)),this.setFocusingStyleVariables()}}})}),c=u},55784:(e,t,o)=>{o.r(t);var i=o(83578),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bottom-center",attrs:{"data-test":"region-bottom-center"}},[t("transition",{attrs:{name:"fade"}},[e.quoteVisible?t("quote"):e._e()],1),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.focusingViewActive?t("focus-mode-hints-dash"):e._e()],1)],1)};s._withStripped=!0;var n=o(69385),a=o(42223),r=o(40531),d=o(30827);const u={name:"BottomCenter",components:{Quote:()=>o.e(2873).then(o.bind(o,72873)),FocusModeHintsDash:()=>o.e(3260).then(o.bind(o,93260))},mixins:[a.Z],setup:()=>({widgetId:"region-bottom-center",focusModeViewStateStore:(0,n.default)()}),computed:{quoteVisible:()=>r.Fl.quoteVisible,focusingViewActive(){return this.focusModeViewStateStore.currentlyFocusing&&d.Z.includes("focus-mode-app")}}},c=(0,o(51900).Z)(u,s,[],!1,null,null,null).exports,l=document.querySelector(".region.bottom-center");l&&new i.Z({render:e=>e(c)}).$mount(l)},68122:(e,t,o)=>{async function i(e){return(await e).default}o.d(t,{Z:()=>s});const s={countdowns:()=>i(Promise.all([o.e(3064),o.e(5535)]).then(o.bind(o,55535))),metrics:()=>i(Promise.all([o.e(3064),o.e(1103),o.e(3990)]).then(o.bind(o,71103))),clocks:()=>i(Promise.all([o.e(3064),o.e(1554)]).then(o.bind(o,71554))),focus:()=>i(Promise.all([o.e(8610),o.e(4145)]).then(o.bind(o,28610))),linksViewStateStore:()=>i(o.e(9968).then(o.bind(o,89968))),linksStore:()=>i(o.e(1886).then(o.bind(o,71886))),tabsViewStateStore:()=>i(o.e(5140).then(o.bind(o,85140))),tabsStore:()=>i(o.e(3943).then(o.bind(o,63943))),focusModeViewStateStore:()=>i(o.e(9385).then(o.bind(o,69385))),focusModeSessionStore:()=>i(Promise.all([o.e(6283),o.e(5346)]).then(o.bind(o,85346)))}},95756:(e,t,o)=>{o.d(t,{t7:()=>l,vM:()=>c});var i=o(63420),s=o(20144),n=o(96046),a=o(63139),r=o(7838),d=o(70237);const u=e=>Object.keys(e).find((t=>{var o;return null===(o=e[t])||void 0===o?void 0:o.defaultView})),c=(e,{views:t}={})=>{const o=(0,i.Q_)(e+"ViewState",{state:()=>{var o;return{activeViewId:null!==(o=t&&u(t))&&void 0!==o?o:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const o=t[e.activeViewId];if(o)return o;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>a.Z.isOnTop(e)},actions:{focus(){a.Z.add(e)},async setActiveView(e){var o,i;if(!t||!await this.beforeViewChange())return;let s=e;if("default"===e){const e=u(t);if(!e)throw new Error("No view found with defaultView: true");s=e}await(null===(i=null===(o=this.activeView)||void 0===o?void 0:o.beforeLeave)||void 0===i?void 0:i.call(o,s)),this.activeViewId=s},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await s.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),d=(0,i.Jk)(o());return r.Z.$on(e+":close",(()=>o().togglePopup(!1))),(0,s.YP)(d.popupActive,(t=>{t?a.Z.add(e):a.Z.remove(e)})),(0,s.YP)(d.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&a.Z.add(e,!0),n.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),o},l=(e,{views:t,extend:o})=>{const i=c(`base${d.Z.capitalizeFirstLetter(e)}`,{views:t}),s=o(i(),`extended${d.Z.capitalizeFirstLetter(e)}ViewState`);return m(`${e}ViewState`,i,s)},m=(e,t,o)=>{const n=t(),a=o();return(0,i.Q_)(e,(()=>({...(0,s.BK)(n),...(0,s.BK)(a)})))}}}]);