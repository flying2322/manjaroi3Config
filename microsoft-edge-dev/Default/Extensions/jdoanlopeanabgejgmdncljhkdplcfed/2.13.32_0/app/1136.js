(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1136],{58964:(t,e,i)=>{"use strict";i.d(e,{Z:()=>M});let n={};const M={bind:function(t,e){m.utils.isTouchDevice()&&(t.dataset.justBoundMobileBlurHandler=!0,setTimeout((()=>{t.dataset.justBoundMobileBlurHandler=!1}),100),t.dataset.mobileBlurHandlerId=Math.random().toString(36).substring(7),n[t.dataset.mobileBlurHandlerId]=e.value,t.addEventListener("focusout",e.value))},unbind:function(t){m.utils.isTouchDevice()&&(t.removeEventListener("click",n[t.dataset.mobileBlurHandlerId]),delete n[t.dataset.mobileBlurHandlerId],delete t.dataset.mobileBlurHandlerId,delete t.dataset.justBoundMobileBlurHandler)}}},8552:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={inserted:function(t,e){var i;if(!1===(null==e?void 0:e.value))return;const n=null==t||null===(i=t.value)||void 0===i?void 0:i.length;let M=!1;"email"===t.getAttribute("type")&&(M=!0,t.setAttribute("type","text")),t.select(),(n||0===n)&&(t.setSelectionRange(n,n),t.scrollLeft=t.scrollWidth),M&&t.setAttribute("type","email")}}},92275:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var n=i(8081),M=i.n(n),s=i(23645),a=i.n(s)()(M());a.push([t.id,".checkbox[data-v-a082d23a]{min-width:30px;min-height:30px;position:relative;border:none;line-height:1}.checkbox[data-v-a082d23a]:hover,.touch .checkbox[data-v-a082d23a]{opacity:1}.icon-checkbox-check[data-v-a082d23a],.icon-checkbox-border[data-v-a082d23a]{position:absolute;margin:auto;inset:0}.icon-checkbox-border[data-v-a082d23a]{width:30px;height:30px;border:3px solid #fff;border-radius:5px;background:rgba(255 255 255/var(--opacity-stop-2));box-shadow:0 0 25px rgba(0 0 0/var(--opacity-stop-3))}.icon-checkbox-check[data-v-a082d23a]{--color-icon: white;width:16px;height:16px}",""]);const u=a},98930:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var n=i(8081),M=i.n(n),s=i(23645),a=i.n(s)()(M());a.push([t.id,"\n/* stylelint-disable */\n.login-input[data-v-8c9fa1c6] { --pass-vis-icon-width: 21px; --pass-vis-icon-side-padding: 8px; --pass-vis-width: calc(var(--pass-vis-icon-width) + var(--pass-vis-icon-side-padding) * 2); min-width: min(37rem, 100%); max-width: 100%; position: relative; align-self: stretch; display: flex; justify-content: center; border-bottom: 3px solid #fff; font-weight: 500; margin-inline: auto;\n}\n.login-input.has-text-input[data-v-8c9fa1c6] { padding: 0;\n}\n\n\t/*\n\tWhen right and left columns are present (password):\n\t- Right column should never shrink at all or be pushed outside the input.\n\t- Left column should give way to text as soon as text reaches that column so that the text can fill the entire input.\n\t- There should be no extra padding on the left once the input is expanding.\n\t- The bullets or text should not be clipped unless the input is a max width.\n\t- Text should be centred relative to the underline until it reaches the left column.\n\t- Once it expands into the left column should be centred relative to the left and center columns\n\t*/\n.input-left-column[data-v-8c9fa1c6] { flex: 0 9999999 var(--pass-vis-width);\n} /* 9999999 ensures this column shrinks immediately */\n.input-center-column[data-v-8c9fa1c6] { min-width: 0; position: relative; overflow: hidden; width: min-content; flex-grow: 1;\n} /* flex-shrink: 1; min-width: 0; so that this column does not push the right outside of the input */\n.input[data-v-8c9fa1c6] { width: 100%; padding: 0; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: none; caret-color: white; font-weight: 500; line-height: normal; outline: none; text-align: center;\n}\n.Safari input[data-v-8c9fa1c6]::-webkit-contacts-auto-fill-button, .Safari input[data-v-8c9fa1c6]::-webkit-credentials-auto-fill-button { position: absolute; right: 0; pointer-events: none; visibility: hidden;\n} /* hide key icon & dropdown in password input */\n.input[data-v-8c9fa1c6]::-ms-reveal { display: none;\n}\n.input[data-v-8c9fa1c6]:disabled { pointer-events: none;\n}\n.hidden-span[data-v-8c9fa1c6] { overflow-wrap: normal; visibility: hidden; display: block; white-space: nowrap;\n}\n.input-right-column[data-v-8c9fa1c6] { padding: 0 var(--pass-vis-icon-side-padding); flex: 0 0 auto; background: transparent; border: none; cursor: pointer;\n}\n.input-right-column[data-v-8c9fa1c6]:focus { outline: none;\n}\n",""]);const u=a},47859:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var n=i(8081),M=i.n(n),s=i(23645),a=i.n(s)()(M());a.push([t.id,"\n/* stylelint-disable */\n.password-visibility-icon[data-v-18ab0aaa] { width: var(--pass-vis-icon-width); padding-bottom: 0.35rem;\n}\n",""]);const u=a},18310:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var n=i(8081),M=i.n(n),s=i(23645),a=i.n(s)()(M());a.push([t.id,"\n/* stylelint-disable */\n.opt-in[data-v-3f0e02fe] { display: inline-flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.0625rem;\n}\n.checkbox[data-v-3f0e02fe] { font-size: 120%; min-width: 20px; min-height: 20px; margin-top: 0; margin-right: 0.5rem;\n}\n.checkbox[data-v-3f0e02fe] .icon-checkbox-border { width: 20px; height: 20px; border-radius: 100%; border-width: 2px;\n}\n.checkbox[data-v-3f0e02fe] .icon-checkbox-check { width: 10px; height: 10px;\n}\n",""]);const u=a},24575:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>g});var n=function(){var t=this,e=t._self._c;return e("login-layout",{attrs:{loading:t.loading,"data-test":"choose-password-step"},on:{submit:t.register},scopedSlots:t._u([{key:"actions-top-left",fn:function(){return[e("div",{staticClass:"dash-button",attrs:{"data-test":"email-button"},on:{click:t.goToEmail}},[e("inline-svg",{staticClass:"icon icon-back",attrs:{src:i(86043)}}),t._v(" "),e("span",[t._v("Email")])],1)]},proxy:!0},{key:"title",fn:function(){return[t._v("\n\t\tCreating account\n\t")]},proxy:!0},{key:"question",fn:function(){return[t._v("\n\t\tPlease choose a password.\n\t")]},proxy:!0},{key:"input",fn:function(){return[e("login-password-input",{attrs:{disabled:t.loading},on:{submit:t.register},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})]},proxy:!0},{key:"message",fn:function(){return[t._v("\n\t\t"+t._s(t.message)+"\n\t")]},proxy:!0},{key:"below-message",fn:function(){return[t.shouldDisplayNewsletterOptIn?e("newsletter-opt-in",{model:{value:t.newsletterOptIn,callback:function(e){t.newsletterOptIn=e},expression:"newsletterOptIn"}}):t._e()]},proxy:!0},{key:"continue-message",fn:function(){return[t._v("\n\t\tCreate account\n\t")]},proxy:!0},{key:"bottom",fn:function(){return[e("span",{staticClass:"policy"},[t._v("We honor and respect your privacy. See how in our "),e("a",{attrs:{href:"https://momentumdash.com/legal",target:"_blank"},on:{click:t.capturePrivacyClick}},[t._v("Terms")]),t._v(" and "),e("a",{attrs:{href:"https://momentumdash.com/legal/privacy",target:"_blank"},on:{click:t.capturePrivacyClick}},[t._v("Privacy Policy")]),t._v(".")])]},proxy:!0}])})};n._withStripped=!0;var M=i(73366),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"opt-in",attrs:{"data-test":"newsletter-opt-in"},on:{click:function(e){return t.$emit("input",!t.value)}}},[e("dash-checkbox",{attrs:{value:t.value}}),t._v(" "),e("div",[t._v("Sign up for the Monday Moment newsletter.")])],1)};s._withStripped=!0;const a={name:"NewsletterOptIn",components:{DashCheckbox:i(63658).Z},props:{value:{type:Boolean,required:!0}}};i(68826);var u=i(51900);const o=(0,u.Z)(a,s,[],!1,null,"3f0e02fe",null).exports;var c=i(7483),r=i(26595),N=i(27779),l=i(36664);const d={name:"LoginChoosePassword",components:{LoginPasswordInput:c.Z,NewsletterOptIn:o,LoginLayout:M.Z},mixins:[N.Z],inject:["capture"],props:{shouldDisplayNewsletterOptIn:{type:Boolean,required:!0}},data:()=>({password:"",message:"Minimum 6 characters.",newsletterOptIn:!1}),computed:{newsLetterOptInState(){return this.shouldDisplayNewsletterOptIn?this.newsletterOptIn:"hidden"}},mounted(){this.capture("password-step show",{case:"create"})},methods:{onEnter(){this.register()},onEscape(){this.goToEmail("hotkey")},goToEmail(t="click"){this.capture("change email click",{method:t}),this.$emit("goToSubStep",r.lD.EMAIL)},register(){return this.setLoadingWithErrorHandling((async()=>{await l.Z.register(this.name,this.email,this.password,{newsletterOptIn:this.newsletterOptIn}),this.capture("password-step complete",{case:"create",newsletter_opt_in:this.newsLetterOptInState}),this.$emit("complete")}))},capturePrivacyClick(){this.capture("privacy click")}}},g=(0,u.Z)(d,n,[],!1,null,null,null).exports},47680:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-input",class:{"has-text-input":"password"!==t.type}},[t.showSideColumns?e("span",{staticClass:"input-left-column",attrs:{"data-test":"input-left-column"}}):t._e(),t._v(" "),e("span",{staticClass:"input-center-column",attrs:{"data-test":"input-center-column"}},[e("input",{directives:[{name:"soft-focus",rawName:"v-soft-focus"}],ref:"input",staticClass:"input",attrs:{spellcheck:"false",autocomplete:"off",name:"notASearchFieldSafari",type:t.type,disabled:t.disabled,"data-test":"login-input"},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.submit.apply(null,arguments))},input:function(e){return t.$emit("input",e.target.value)},click:function(t){t.stopPropagation()}}}),t._v(" "),e("span",{staticClass:"hidden-span"},[t._v(t._s(t.hiddenSpanValue))])]),t._v(" "),t.showSideColumns?e("span",{staticClass:"input-right-column",attrs:{"data-test":"input-right-column"}},[t._t("input-right")],2):t._e()])};n._withStripped=!0;var M=i(8552);const s={name:"LoginInput",directives:{MobileBlur:i(58964).Z,SoftFocus:M.Z},props:{value:{type:String,default:""},type:{type:String,default:"text"},disabled:{type:Boolean,default:!1}},computed:{showSideColumns(){return!!this.$slots["input-right"]},hiddenSpanValue(){return this.value?"password"!==this.type||this.showInputText?this.value.replace(/ /g," ")||" ":new Array(this.value.length+1).join("•"):" "}},methods:{submit(){this.$emit("submit")}}};i(76302);const a=(0,i(51900).Z)(s,n,[],!1,null,"8c9fa1c6",null).exports},7483:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var n=function(){var t=this,e=t._self._c;return e("login-input",{attrs:{disabled:t.disabled,type:t.inputType,value:t.value},on:{input:function(e){return t.$emit("input",e)},submit:function(e){return t.$emit("submit",e)}},scopedSlots:t._u([{key:"input-right",fn:function(){return[e("div",{attrs:{title:t.passwordVisibilityTitle},on:{click:function(e){t.visible=!t.visible}}},[e("inline-svg",{staticClass:"password-visibility-icon",attrs:{src:t.visible?i(38589):i(17952)}})],1)]},proxy:!0}])})};n._withStripped=!0;const M={name:"LoginPasswordInput",components:{LoginInput:i(47680).Z},props:{value:{type:String,required:!0},disabled:{type:Boolean,default:!1}},data:()=>({visible:!1}),computed:{passwordVisibilityTitle(){return this.visible?"Hide password":"Reveal password"},inputType(){return this.visible?"text":"password"}}};i(73200);const s=(0,i(51900).Z)(M,n,[],!1,null,"18ab0aaa",null).exports},63658:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"control checkbox",class:{checked:t.value},attrs:{"data-test":"dash-checkbox"},on:{click:function(e){return t.$emit("input",!t.value)}}},[e("span",{staticClass:"icon-checkbox-border"}),t._v(" "),t.value?e("base-icon",{staticClass:"icon-checkbox-check",attrs:{src:"icon/focus/icon-check",size:"16px"}}):t._e()],1)};n._withStripped=!0;const M={name:"DashCheckbox",components:{BaseIcon:i(84820).Z},props:{value:{type:Boolean,required:!0}}};i(1531);const s=(0,i(51900).Z)(M,n,[],!1,null,"a082d23a",null).exports},1531:(t,e,i)=>{var n=i(92275);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,i(45346).Z)("d55f7a08",n,!1,{})},76302:(t,e,i)=>{var n=i(98930);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,i(45346).Z)("6a0397d6",n,!1,{ssrId:!0})},73200:(t,e,i)=>{var n=i(47859);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,i(45346).Z)("05674e9a",n,!1,{ssrId:!0})},68826:(t,e,i)=>{var n=i(18310);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,i(45346).Z)("760dd233",n,!1,{ssrId:!0})},47997:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNyAyLjVDMTMuNDY5IDIuNSAyLjUgMTMuNDY5IDIuNSAyN1MxMy40NjkgNTEuNSAyNyA1MS41YTI0LjQgMjQuNCAwIDAgMCAxNC43NTYtNC45NCAxLjAzIDEuMDMgMCAwIDEgMS4zNS4wOGwxNC4xMjYgMTQuMTI4YTIuNSAyLjUgMCAwIDAgMy41MzYtMy41MzZMNDYuNjQgNDMuMTA1YTEuMDMgMS4wMyAwIDAgMS0uMDgxLTEuMzQ5QTI0LjM5MiAyNC4zOTIgMCAwIDAgNTEuNSAyN0M1MS41IDEzLjQ2OSA0MC41MzEgMi41IDI3IDIuNVpNNy41IDI3QzcuNSAxNi4yMyAxNi4yMyA3LjUgMjcgNy41UzQ2LjUgMTYuMjMgNDYuNSAyNyAzNy43NyA0Ni41IDI3IDQ2LjUgNy41IDM3Ljc3IDcuNSAyN1oiLz48L3N2Zz4="},45671:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTM1IDMwLjc1N1YxNGEzIDMgMCAxMC02IDB2MThjMCAuODkuMzg4IDEuNjkgMS4wMDMgMi4yMzkuMDM4LjA0Mi4wNzguMDg0LjExOC4xMjVsOS45IDkuOWEzIDMgMCAwMDQuMjQyLTQuMjQzTDM1IDMwLjc1N3oiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiA2NGMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJDNjQgMTQuMzI3IDQ5LjY3MyAwIDMyIDAgMTQuMzI3IDAgMCAxNC4zMjcgMCAzMmMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJ6bTAtNmMxNC4zNiAwIDI2LTExLjY0IDI2LTI2UzQ2LjM2IDYgMzIgNiA2IDE3LjY0IDYgMzJzMTEuNjQgMjYgMjYgMjZ6Ii8+PC9zdmc+"},20888:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4wODA2NSA0LjE5Njk1QzcuMzY4ODQgNC40NTcyMyA3LjM5MTQ2IDQuOTAxODUgNy4xMzExOCA1LjE5MDAzTDQuMzIzNTUgOC4yOTg2OEM0LjMxNTI3IDguMzA4MDIgNC4zMDY3IDguMzE3MiA0LjI5NzgzIDguMzI2MkM0LjE1NDY4IDguNDcxNzUgMy45NjIxMiA4LjU0MjM3IDMuNzcxMSA4LjUzNTQ3QzMuNjkxNDIgOC41MzI1OSAzLjYxMjAxIDguNTE2MjIgMy41MzY1NyA4LjQ4NjE3QzMuNDUxODQgOC40NTI0NyAzLjM3MjM4IDguNDAxNjYgMy4zMDM1IDguMzMzNzhDMy4yOTk5NCA4LjMzMDI4IDMuMjk2NDIgOC4zMjY3NSAzLjI5Mjk1IDguMzIzMTlMMS44ODk4OSA2Ljg5OTg0QzEuNjE3MjggNi42MjMyOSAxLjYyMDQ3IDYuMTc4MTEgMS44OTcwMiA1LjkwNTVDMi4xNzM1NyA1LjYzMjg5IDIuNjE4NzUgNS42MzYwOCAyLjg5MTM2IDUuOTEyNjNMMy43NzQ1IDYuODA4NTRMNi4wODc1NyA0LjI0NzQ4QzYuMzQ3ODUgMy45NTkyOSA2Ljc5MjQ3IDMuOTM2NjcgNy4wODA2NSA0LjE5Njk1Wk04LjQzNzUgNi4yNjU2M0M4LjQzNzUgNS44NzczIDguNzUyMyA1LjU2MjUgOS4xNDA2MiA1LjU2MjVIMTUuNjA5NEMxNS45OTc3IDUuNTYyNSAxNi4zMTI1IDUuODc3MyAxNi4zMTI1IDYuMjY1NjNDMTYuMzEyNSA2LjY1Mzk1IDE1Ljk5NzcgNi45Njg3NSAxNS42MDk0IDYuOTY4NzVIOS4xNDA2MkM4Ljc1MjMgNi45Njg3NSA4LjQzNzUgNi42NTM5NSA4LjQzNzUgNi4yNjU2M1pNOC40Mzc1IDEzLjAxNTZDOC40Mzc1IDEyLjYyNzMgOC43NTIzIDEyLjMxMjUgOS4xNDA2MiAxMi4zMTI1SDE1LjYwOTRDMTUuOTk3NyAxMi4zMTI1IDE2LjMxMjUgMTIuNjI3MyAxNi4zMTI1IDEzLjAxNTZDMTYuMzEyNSAxMy40MDQgMTUuOTk3NyAxMy43MTg4IDE1LjYwOTQgMTMuNzE4OEg5LjE0MDYyQzguNzUyMyAxMy43MTg4IDguNDM3NSAxMy40MDQgOC40Mzc1IDEzLjAxNTZaTTQuNzgxMjUgMTAuNjI1SDMuMzc1QzIuNDQzMDIgMTAuNjI1IDEuNjg3NSAxMS4zODA1IDEuNjg3NSAxMi4zMTI1VjEzLjcxODhDMS42ODc1IDE0LjY1MDcgMi40NDMwMiAxNS40MDYzIDMuMzc1IDE1LjQwNjNINC43ODEyNUM1LjcxMzIzIDE1LjQwNjMgNi40Njg3NSAxNC42NTA3IDYuNDY4NzUgMTMuNzE4OFYxMi4zMTI1QzYuNDY4NzUgMTEuMzgwNSA1LjcxMzIzIDEwLjYyNSA0Ljc4MTI1IDEwLjYyNVpNMy4wOTM3NSAxMi4zMTI1QzMuMDkzNzUgMTIuMTU3MiAzLjIxOTY3IDEyLjAzMTMgMy4zNzUgMTIuMDMxM0g0Ljc4MTI1QzQuOTM2NTggMTIuMDMxMyA1LjA2MjUgMTIuMTU3MiA1LjA2MjUgMTIuMzEyNVYxMy43MTg4QzUuMDYyNSAxMy44NzQxIDQuOTM2NTggMTQgNC43ODEyNSAxNEgzLjM3NUMzLjIxOTY3IDE0IDMuMDkzNzUgMTMuODc0MSAzLjA5Mzc1IDEzLjcxODhWMTIuMzEyNVoiIC8+IDwvc3ZnPgo="},95648:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4wMzU0IDIuNDU0NkMxMy43MTU1IDIuNjM3NCAxMy4zODY5IDIuOTE5MDMgMTMuMTczNiAzLjQwMDg2QzE2LjE3NzkgMi43NzE1NyAxOC42NjEzIDMuNDA4OTMgMjAuNDc5OSA0LjkwNzNDMjIuNTQ5IDYuNjEyMDIgMjMuNjA2MyA5LjMwNzk1IDIzLjY5NDggMTIuMDYzN0MyMy43ODM2IDE0LjgyNjkgMjIuOTA1NCAxNy43NTg3IDIwLjk2MzEgMjAuMDEyNEMxOS4wMDMxIDIyLjI4NjcgMTYuMDA3OSAyMy44MTI1IDEyIDIzLjgxMjVDNy45OTIwNSAyMy44MTI1IDQuOTk2OTMgMjIuMjg2NyAzLjAzNjkxIDIwLjAxMjRDMS4wOTQ2MyAxNy43NTg3IDAuMjE2NDQxIDE0LjgyNjkgMC4zMDUxNjkgMTIuMDYzN0MwLjM5MzY1NiA5LjMwNzk1IDEuNDUxMDEgNi42MTIwMiAzLjUyMDA3IDQuOTA3M0M1LjMzODY4IDMuNDA4OTMgNy44MjIxMiAyLjc3MTU3IDEwLjgyNjQgMy40MDA4NkMxMC42MTMxIDIuOTE5MDMgMTAuMjg0NSAyLjYzNzQgOS45NjQ1NiAyLjQ1NDZDOS4zNTE0OCAyLjEwNDI4IDguNjUyOTEgMi4wNjI1IDguNDM3NSAyLjA2MjVDNy45MTk3MyAyLjA2MjUgNy41IDEuNjQyNzcgNy41IDEuMTI1QzcuNSAwLjYwNzIzMyA3LjkxOTczIDAuMTg3NSA4LjQzNzUgMC4xODc1QzguNzg0NTkgMC4xODc1IDkuODY3MjYgMC4yMzk0NzUgMTAuODk0OCAwLjgyNjY0OEMxMS4yOTc4IDEuMDU2OSAxMS42Nzg3IDEuMzYyNTIgMTIgMS43NTY2OEMxMi4zMjEzIDEuMzYyNTIgMTIuNzAyMiAxLjA1NjkgMTMuMTA1MiAwLjgyNjY0OEMxNC4xMzI3IDAuMjM5NDc1IDE1LjIxNTQgMC4xODc1IDE1LjU2MjUgMC4xODc1QzE2LjA4MDMgMC4xODc1IDE2LjUgMC42MDcyMzMgMTYuNSAxLjEyNUMxNi41IDEuNjQyNzcgMTYuMDgwMyAyLjA2MjUgMTUuNTYyNSAyLjA2MjVDMTUuMzQ3MSAyLjA2MjUgMTQuNjQ4NSAyLjEwNDI4IDE0LjAzNTQgMi40NTQ2Wk0xMS42ODY5IDUuNTcxNDRDOC41MjA4NCA0LjUzNjE4IDYuMjI5MzYgNS4xMDQ1MyA0LjcxMjM1IDYuMzU0NEMzLjIyMzQ1IDcuNTgxMTMgMi4zMzU3NSA5LjU4Mjk4IDIuMTk0MDggMTEuODEyNUg1LjYyNVYxMC42ODc1QzUuNjI1IDEwLjE2OTcgNi4wNDQ3MyA5Ljc1IDYuNTYyNSA5Ljc1QzcuMDgwMjcgOS43NSA3LjUgMTAuMTY5NyA3LjUgMTAuNjg3NVYxMS44MTI1SDExLjA2MjVWOS41NjI1QzExLjA2MjUgOS4wNDQ3MyAxMS40ODIyIDguNjI1IDEyIDguNjI1QzEyLjUxNzggOC42MjUgMTIuOTM3NSA5LjA0NDczIDEyLjkzNzUgOS41NjI1VjExLjgxMjVIMTYuNVYxMC42ODc1QzE2LjUgMTAuMTY5NyAxNi45MTk3IDkuNzUgMTcuNDM3NSA5Ljc1QzE3Ljk1NTMgOS43NSAxOC4zNzUgMTAuMTY5NyAxOC4zNzUgMTAuNjg3NVYxMS44MTI1SDIxLjgwNTlDMjEuNjY0MiA5LjU4Mjk5IDIwLjc3NjYgNy41ODExMyAxOS4yODc2IDYuMzU0NEMxNy43NzA2IDUuMTA0NTMgMTUuNDc5MiA0LjUzNjE4IDEyLjMxMzEgNS41NzE0NEMxMi4yMTUyIDUuNjA2MTIgMTIuMTA5OCA1LjYyNSAxMiA1LjYyNUMxMS44OTAyIDUuNjI1IDExLjc4NDggNS42MDYxMiAxMS42ODY5IDUuNTcxNDRaTTQuNDU3MjMgMTguNzg4NEMzLjIwODYyIDE3LjMzOTYgMi40NzcxMyAxNS41MjcxIDIuMjUwNDkgMTMuNjg3NUwyMS43NDk1IDEzLjY4NzVDMjEuNTIyOSAxNS41MjcxIDIwLjc5MTQgMTcuMzM5NiAxOS41NDI4IDE4Ljc4ODRDMTcuOTU3OSAyMC42Mjc0IDE1LjQ5MiAyMS45Mzc1IDEyIDIxLjkzNzVDOC41MDc5NSAyMS45Mzc1IDYuMDQyMTMgMjAuNjI3NCA0LjQ1NzIzIDE4Ljc4ODRaIi8+PC9zdmc+Cg=="},55179:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGw9InRyYW5zcGFyZW50IiBkPSJNIDUwLDUwIG0gLTQ1LDAgYSA0NSw0NSwwLDEsMSw5MCwwIGEgNDUsNDUsMCwwLDEsLTQ1LDQ1IiBzdHJva2Utd2lkdGg9IjEuNXB4IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjIxMi4wNTc1Ij48L3BhdGg+Cjwvc3ZnPgo="}}]);