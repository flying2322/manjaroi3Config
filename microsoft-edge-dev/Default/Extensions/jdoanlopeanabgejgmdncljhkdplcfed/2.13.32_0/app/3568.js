(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[3568],{68657:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(8081),a=s.n(i),o=s(23645),r=s.n(o)()(a());r.push([t.id,".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",""]);const n=r},59440:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(8081),a=s.n(i),o=s(23645),r=s.n(o)()(a());r.push([t.id,"\n[data-v-63289dee] .app {\n\tpadding: 0;\n}\n",""]);const n=r},22745:(t,e,s)=>{"use strict";s.d(e,{dS:()=>a,sY:()=>i});const i={ERROR_GENERAL:"Oops! Something went wrong, please check your connection and try again.",ERROR_429:"We are experiencing a high amount of traffic at this time. Please try again later."},a=["filtered_content","validation_error"]},47932:(t,e,s)=>{"use strict";s.d(e,{a:()=>l});var i=s(63420),a=s(35174),o=s(71257);const r=new class{async sendMessage({content:t,parentId:e}){this.cancelTokenSource=o.default.CancelToken.source();const{data:s}=await a.Z.post("ai/chat",{content:t,parentId:e},{cancelToken:this.cancelTokenSource.token});return this.cancelTokenSource=null,s}async regenerate(t){this.cancelTokenSource=o.default.CancelToken.source();const{data:e}=await a.Z.post("ai/chat",{parentId:t},{cancelToken:this.cancelTokenSource.token});return this.cancelTokenSource=null,e}cancelRequest(){this.cancelTokenSource&&this.cancelTokenSource.cancel()}};var n=s(22745),h=s(20144);const l=(0,i.Q_)("chat",{state:()=>({input:"",chat:[],processing:!1,error:null,lastResponses:[],selectedLastResponseIndex:0}),getters:{canSubmit:t=>!t.processing&&!t.error,chatMessages(t){const e=[...t.chat];return t.error?e.push({role:"assistant",content:t.error.message,error:!0}):t.lastResponses.length&&this.selectedLastResponse&&e.push({...this.selectedLastResponse,showRegenerate:!0,totalResponseCount:t.lastResponses.length,selectedAnswer:t.selectedLastResponseIndex}),e},lastUserMessage:t=>[...t.chat].reverse().find((t=>"user"===t.role)),lastAssistantMessage:t=>[...t.chat].reverse().find((t=>"assistant"===t.role)),selectedLastResponse:t=>t.lastResponses[t.selectedLastResponseIndex]},actions:{async sendMessage(t,{idCallback:e,afterSuccess:s,afterError:i}={}){const a={content:t};this.lastAssistantMessage&&(a.parentId=this.lastAssistantMessage.id);try{this.processing=!0,this.error=null;const{id:t,response:i}=await r.sendMessage(a);t&&e&&e(t),this.lastResponses.push(i);try{null==s||s()}catch(t){console.error(t)}}catch(t){this.handleError(t);try{null==i||i()}catch(t){console.error(t)}}finally{this.processing=!1}},async resubmit(t={}){var e;const s=null===(e=this.lastUserMessage)||void 0===e?void 0:e.content;!this.processing&&s&&await this.sendMessage(s,t)},async submit(t={}){const e=this.input;if(this.processing||!e)return;const s={content:e,role:"user"};this.selectedLastResponse&&(this.chat.push((({id:t,role:e,content:s})=>({id:t,role:e,content:s}))(this.selectedLastResponse)),this.lastResponses=[],this.selectedLastResponseIndex=0),this.chat.push(s),this.input="",await this.sendMessage(e,{...t,idCallback:t=>{h.ZP.set(s,"id",t)}})},async regenerate({afterSuccess:t,afterError:e}={}){if(this.processing)return;this.processing=!0,this.error=null;const s=this.selectedLastResponseIndex;this.selectedLastResponseIndex=this.lastResponses.length;const i=this.lastUserMessage&&"id"in this.lastUserMessage?this.lastUserMessage.id:"";if(!i)throw new Error('LastMessage "id" was not found');try{const{response:e}=await r.regenerate(i);this.lastResponses.push(e);try{null==t||t()}catch(t){console.error(t)}}catch(t){this.handleError(t),this.selectedLastResponseIndex=s;try{null==e||e()}catch(t){console.error(t)}}finally{this.processing=!1}},handleError(t){this.error=(0,a.y)(t,{429:n.sY.ERROR_429,default:n.sY.ERROR_GENERAL})},editLastMessage(){var t;this.error=null,this.input=(null===(t=this.lastUserMessage)||void 0===t?void 0:t.content)||"",this.chat.pop()},clear(){r.cancelRequest(),this.error=null,this.chat=[],this.lastResponses=[],this.selectedLastResponseIndex=0,this.input=""}}})},89896:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=function(){var t=this,e=t._self._c;return e("app-popup",{staticClass:"chat-app",attrs:{width:500,focused:t.viewStateStore.focused,region:"bottom-right",position:"top-left"},on:{close:function(e){return t.$emit("close")}},nativeOn:{click:function(e){return t.viewStateStore.focus()}}},[e("chat-content",{on:{close:function(e){return t.$emit("close")}}})],1)};i._withStripped=!0;var a=s(21325);const o={name:"ChatApp",components:{ChatContent:s(10842).Z,AppPopup:a.Z},inject:["viewStateStore"]};s(94253);const r=(0,s(51900).Z)(o,i,[],!1,null,"63289dee",null).exports},36399:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var i=function(){var t=this,e=t._self._c;return e("div",{ref:"wrapper",staticClass:"smooth-reflow",class:{"tr-height":t.height,"tr-width":t.width,"tr-disabled":t.transitionDisabled,"hide-overflow":t.hideOverflow&&(t.resizing||t.transitionActive)},style:{height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[t.transitionGroup?e("transition-group",t._g(t._b({directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}],attrs:{tag:"div"}},"transition-group",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2):e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[e("transition",t._g(t._b({},"transition",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2)],1)],1)};i._withStripped=!0;var a=s(61706),o=s(42223),r=s(96046),n=s(20144);const h={name:"SmoothReflow",directives:{ResizeSensor:a.Z},mixins:[o.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},awaitAppsReady:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"},transitionGroup:{type:Boolean,default:!1},debug:{type:Boolean,default:!1},firstTransitionDisabled:{type:Boolean,default:!1}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:null,wrapperWidthPx:null,auto:!1,resizing:!1,transitionActive:!1,ancestors:[],resizedOnce:!1}),computed:{awaitingAppsReady(){return this.awaitAppsReady&&!r.Z.allowAwaitingAppsReadySmoothReflow},transitionDisabled(){return this.auto||this.disabled||this.awaitingAppsReady},transitionProps(){return{name:this.transition,appear:this.appear,duration:this.awaitingAppsReady?0:null===this.transitionDuration?this.duration:this.transitionDuration}},wrapperHeight(){return!this.height||this.transitionDisabled?"auto":this.wrapperHeightPx+"px"},wrapperWidth(){return this.width?this.transitionDisabled?"auto":this.wrapperWidthPx+"px":""},transitionDurationMs(){return`${this.transitionDisabled?0:null===this.transitionDuration?this.duration:this.transitionDuration}ms`},resizeDurationMs(){return this.resizeDuration+"ms"},resizeDuration(){return this.firstTransitionDisabled&&!this.resizedOnce||this.awaitingAppsReady?0:null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},watch:{transitionDisabled(t){t||this.setExplicitDimensions()}},created(){this.transitionHooks={beforeEnter:this.beforeEnter,enter:this.enter,afterEnter:this.afterEnter,enterCancelled:this.enterCancelled,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.afterLeave,leaveCancelled:this.leaveCancelled},this.appear&&(this.height&&(this.wrapperHeightPx=0),this.width&&(this.wrapperWidthPx=0)),this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},async mounted(){this.nested&&(await this.$nextTick(),this.findSmoothReflowAncestors()),this.setExplicitDimensions()},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){if(this.transitionDisabled||this.height&&!this.width&&this.wrapperHeightPx===t.height||!this.height&&this.width&&this.wrapperWidthPx===t.width||this.height&&this.width&&this.wrapperHeightPx===t.height&&this.wrapperWidthPx===t.width)return this.$emit("afterResize");this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height),this.width&&(this.wrapperWidthPx=t.width),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1,this.afterResize()}),this.duration)},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth))},afterResize(){this.resizedOnce=!0,this.$emit("afterResize")},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}},l=()=>{(0,n.sj)(((t,e)=>({"3872912c":t.resizeDurationMs,"7b63f4cb":t.transitionDurationMs})))},d=h.setup;h.setup=d?(t,e)=>(l(),d(t,e)):l;const c=h;s(67135);const p=(0,s(51900).Z)(c,i,[],!1,null,"256e142c",null).exports},67135:(t,e,s)=>{var i=s(68657);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(45346).Z)("1ea382bd",i,!1,{})},94253:(t,e,s)=>{var i=s(59440);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(45346).Z)("4bd27ebe",i,!1,{ssrId:!0})}}]);