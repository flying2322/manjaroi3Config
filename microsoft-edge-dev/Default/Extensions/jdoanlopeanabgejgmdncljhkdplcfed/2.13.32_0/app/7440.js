(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7440],{59175:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var n=a(8081),i=a.n(n),s=a(23645),r=a.n(s)()(i());r.push([t.id,"\n/* stylelint-disable */\n.cutout[data-v-d91b38ac] { fill: black;\n}\n.mask-fade-enter-active[data-v-d91b38ac], .mask-fade-leave-active[data-v-d91b38ac] { transition: fill var(--sub-step-transition-duration) ease;\n}\n.mask-fade-enter[data-v-d91b38ac], .mask-fade-leave-to[data-v-d91b38ac] { fill: white;\n}\n",""]);const o=r},9101:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var n=a(8081),i=a.n(n),s=a(23645),r=a.n(s)()(i());r.push([t.id,"\n/* stylelint-disable */\n.tour[data-v-9ad69b36] { --sub-step-transition-duration: 0.5s; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 100; display: flex; flex-direction: column; align-items: stretch; justify-content: center;\n}\n\n\t/* Progress Bar — Move to component library */\n.progress[data-v-9ad69b36] { padding: 10px; position: absolute; top: 0; right: 0; left: 0; display: flex; align-items: center; justify-content: center;\n}\n.progress-item-wrapper[data-v-9ad69b36] { --size: 10px; padding: 5px; opacity: 0.5; cursor: pointer; transition: opacity 0.05s ease; /* padding: clickable area */\n}\n.progress-item-wrapper[data-v-9ad69b36]:hover { opacity: 0.7;\n}\n.progress-item-wrapper[data-v-9ad69b36]:hover:active { opacity: 0.9;\n}\n.progress-item-wrapper.active[data-v-9ad69b36] { opacity: 1;\n}\n.progress-item-wrapper.disabled[data-v-9ad69b36] { pointer-events: none;\n}\n.progress-item[data-v-9ad69b36] { --size: 10px; height: var(--size); min-width: var(--size); display: flex; align-items: center; justify-content: center; background-color: white; border-radius: 300px; color: black; font-size: 11px; font-weight: 700; line-height: 1.1; text-transform: uppercase;\n}\n.active > .progress-item[data-v-9ad69b36] { padding: 8px 24px; opacity: 1;\n}\n.skip[data-v-9ad69b36] { width: 20px; position: absolute; right: 20px; top: 20px; opacity: 0.7; cursor: pointer; fill: white;\n}\n.skip[data-v-9ad69b36]:hover { opacity: 1;\n}\n[data-v-9ad69b36] .heading { font-size: 2.25em; font-weight: 700;\n}\n[data-v-9ad69b36] .subheading { margin: 18px 0; padding-bottom: 4px; font-size: 20px; line-height: 1.4;\n}\n[data-v-9ad69b36] .subheading p:first-child { margin-top: 0;\n}\n[data-v-9ad69b36] .subheading p:last-child { margin-bottom: 0;\n}\n[data-v-9ad69b36] .small { margin-top: -7px; padding-bottom: 3px; font-size: 1rem;\n}\n[data-v-9ad69b36] .button { --h-padding: 34px; --v-padding: 9px; min-width: 130px; align-self: flex-start; align-items: baseline; justify-content: center; background: rgba(255,255,255,0.05); font-weight: 700; transition: 0.1s ease;\n}\n[data-v-9ad69b36] .button:hover { background: rgba(255,255,255,0.1);\n}\n[data-v-9ad69b36] .button:hover:active { background: rgba(255,255,255,0.15);\n}\n[data-v-9ad69b36] .button .icon { height: 10px; margin-right: -7px; margin-left: 6px; fill: white;\n}\n[data-v-9ad69b36] .button-cancel-container { display: flex; justify-content: center;\n}\n[data-v-9ad69b36] .button-cancel { --padding: 9px; margin: 7px calc(var(--padding) * -1) 0; padding: var(--padding); align-self: flex-start; opacity: 0.85; cursor: pointer; font-size: 12px; font-weight: 800; text-transform: uppercase;\n}\n[data-v-9ad69b36] .button-cancel:hover { opacity: 1;\n}\n[data-v-9ad69b36] .button-cancel:hover:active { opacity: 0.7;\n}\n\n\t\t/* Fullscreen */\n[data-v-9ad69b36] .tour-fullscreen { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n[data-v-9ad69b36] .tour-fullscreen .cta { width: 100%; max-width: 62ch; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center;\n}\n[data-v-9ad69b36] .tour-fullscreen .subheading { margin: 1.5em 0; text-align: left;\n}\n[data-v-9ad69b36] .tour-fullscreen .button,[data-v-9ad69b36] .tour-fullscreen .button-cancel { align-self: unset;\n}\n.overlay[data-v-9ad69b36] { z-index: -1;\n}\n.overlay[data-v-9ad69b36] svg { align-self: stretch; flex: 1 1 100%;\n}\n.fade-enter-active[data-v-9ad69b36], .fade-leave-active[data-v-9ad69b36] { transition: opacity var(--sub-step-transition-duration) ease;\n}\n.fade-enter[data-v-9ad69b36], .fade-leave-to[data-v-9ad69b36] { opacity: 0;\n}\n",""]);const o=r},8875:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var n=function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t.overlayDimensions.width} ${t.overlayDimensions.height}`,fill:"rgba(0,0,0,0.5)"}},[t.maskActive?e("mask",{attrs:{id:"mask"+t.uuid}},[e("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}}),t._v(" "),t._l(t.maskDimensions,(function(t){return e("transition",{key:t.x,attrs:{name:"mask-fade",mode:"out-in"}},[e("rect",{staticClass:"cutout",attrs:{x:t.x,y:t.y,rx:t.borderRadius,ry:t.borderRadius,height:t.height,width:t.width,fill:"black"}})])}))],2):t._e(),t._v(" "),e("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#mask"+t.uuid+")"}})])};n._withStripped=!0;var i=a(70237);function s(){const t=document.querySelector(".region.full");return{width:(null==t?void 0:t.clientWidth)||0,height:(null==t?void 0:t.clientHeight)||0}}const r={name:"MaskedOverlay",props:{maskDimensions:{type:Array,required:!0},maskActive:{type:Boolean,default:!0}},setup:()=>({uuid:i.Z.uuidv4()}),data:()=>({overlayDimensions:s()}),created(){m.on("devPanelToggled",this.onDevPanelToggle),window.addEventListener("resize",this.onResize)},destroyed(){m.off("devPanelToggled",this.onDevPanelToggle),window.removeEventListener("resize",this.onResize)},methods:{onResize(){this.overlayDimensions=s()},onDevPanelToggle(){this.$nextTick(this.onResize)}}};a(18166);const o=(0,a(51900).Z)(r,n,[],!1,null,"d91b38ac",null).exports},27440:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tour dark dark-full",attrs:{"data-test":"tour"},on:{mousedown:function(t){t.stopPropagation()},mouseup:function(t){t.stopPropagation()},click:function(t){t.stopPropagation()}}},[t.progressVisible?e("div",{staticClass:"progress"},t._l(t.subSteps,(function(a,n){return e("div",{key:n,staticClass:"progress-item-wrapper",class:{active:t.activeSubStepIndex===n,disabled:t.activeSubStep.lockProgressBar||a.lockProgressBar},attrs:{"data-test":"progress-btn"},on:{click:function(e){return t.$emit("goToSubStep",n)}}},[e("div",{staticClass:"progress-item"},[t._v(t._s(t.activeSubStepIndex===n?t.activeSubStepProgressText:""))])])})),0):t._e(),t._v(" "),e("transition",{attrs:{appear:"",name:"fade",mode:"out-in"},on:{"before-enter":function(e){return t.$emit("beforeSubStepEnter")},leave:function(e){t.maskActive=!1},"after-leave":function(e){return t.$emit("afterSubStepLeave")}}},[e(t.activeSubComponent,t._b({key:t.activeSubStepIndex,tag:"component",class:t.activeSubStepClass,attrs:{plans:t.plans,sales:t.sales,"plans-error":t.plansError,"parent-modal-name":t.name,name:t.activeSubStep.name},on:{dismiss:function(e){return t.$emit("stepComplete",{state:t.StepState.Dismissed})},next:function(e){return t.$emit("subStepComplete")},updateMaskDimensions:t.updateMaskDimensions,maskReady:function(e){t.maskActive=!0}}},"component",t.activeSubStep.subStepProps,!1))],1),t._v(" "),e("masked-overlay",{key:t.maskKey,staticClass:"overlay tour-overlay",attrs:{"mask-dimensions":t.maskDimensions,"mask-active":t.maskActive}})],1)};n._withStripped=!0;var i=a(8875),s=a(20338),r=a(51740);const o={name:"Tour",components:{MaskedOverlay:i.Z},props:{id:{type:String,required:!0},name:{type:String,default:""},subSteps:{type:Array,default:null},activeSubStepIndex:{type:Number,default:0},plans:{type:Object,default:()=>({})},sales:{type:Object,default:()=>({})},plansError:{type:Boolean,default:!1},onCreated:{type:Function,default:()=>{}},onDestroyed:{type:Function,default:()=>{}},progressVisible:{type:Boolean,default:!0}},setup:()=>({StepState:r.Fi}),data:()=>({maskDimensions:[],maskKey:0,maskActive:!1}),computed:{activeSubStepProgressText(){return this.activeSubStep.hasOwnProperty("progressBarText")?this.activeSubStep.progressBarText:this.activeSubStep.subStepProps.heading},activeSubStepClass(){var t;return this.activeSubStep.class||"sub-step-"+(null===(t=this.activeSubStep.name)||void 0===t?void 0:t.toLowerCase().replaceAll(" ","-"))},activeSubStep(){var t;return(null===(t=this.subSteps)||void 0===t?void 0:t[this.activeSubStepIndex])||null},activeSubComponent(){var t;return(null===(t=this.activeSubStep)||void 0===t?void 0:t.component)||""}},created(){s.Z.disableCaptureExceptFeatures(["onboarding","paywall","upgrade","notifications"]),m.tourActive=!0,this.onCreated()},destroyed(){m.tourActive=!1,this.onDestroyed(),s.Z.enableCaptureForAllFeatures()},methods:{updateMaskDimensions(t){this.maskDimensions=t,this.maskKey+=1}}};a(45959);const d=(0,a(51900).Z)(o,n,[],!1,null,"9ad69b36",null).exports},18166:(t,e,a)=>{var n=a(59175);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,a(45346).Z)("30208909",n,!1,{ssrId:!0})},45959:(t,e,a)=>{var n=a(9101);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,a(45346).Z)("975454d0",n,!1,{ssrId:!0})}}]);