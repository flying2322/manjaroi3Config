(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1158:function(t,e,r){},1174:function(t,e,r){"use strict";r(1158)},1216:function(t,e,r){"use strict";r.r(e);r(19),r(7),r(26),r(29),r(85),r(30),r(39),r(92);var n=r(78),o=r.n(n),i=(r(181),r(20),r(56),r(598)),a=r(21);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={data:()=>({id:"",url:"",name:"",logo:"",logoType:"",index:null,type:"",sourceData:{}}),components:{Favicon:i.a},props:{display:{default:!1,type:Boolean}},watch:{display(t){t||this.$refs.favRefEdit&&this.$refs.favRefEdit.reset()}},methods:{setData(t){var e=t.data,r=t.index;if(this.sourceData=e,this.name=e.name,this.url=e.url.trim(),this.logo=e.src,this.logoType=e.logoType,this.type=e.type||"",this.index=r,this.id=e.id,"image"!==e.logoType){var n=$(e.html).css("background");this.$refs.favRefEdit.selectColor(n)}else this.$refs.favRefEdit.selectColor();var o=["web","text","image"].indexOf(e.logoType)||0;this.$nextTick(()=>{this.$refs.favRefEdit.setActive(o)})},addCustomIcon(){var t=this.$refs.favRefEdit.getResult(),e=t.src,r=t.html,n=t.logoType;if(this.url&&this.name)if("image"!==n||e){var o=u(u({},this.sourceData),{},{id:this.id,logoType:n,name:this.name,url:this.url,src:e,html:r});this.iconsReplace(o)}else this.$message.warn("请先上传图片");else this.$message.warn("请填写完整")},iconsReplace(t){var e=o()(a.a.get("tab-icons")),r=s(this.index.split("-"),3),n=r[0],i=r[1],l=r[2];void 0===l?e[n][i]=t:e[n][i].children[l]=t,a.a.set("tab-icons",e),this.$store.commit("config/set",{key:"tab-icons",val:e}),this.$emit("close")}}},d=(r(1174),r(4)),m=Object(d.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"module-edit"}},[r("div",{staticClass:"custom-add"},[r("div",{staticClass:"custom-form"},[r("p",[t._v("网址：")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.url,expression:"url",modifiers:{trim:!0}}],attrs:{disabled:"webPage"===t.type,type:"text",placeholder:"请输入网址"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("p",[t._v("名称：")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入名称"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"custom-favicon"},[r("Favicon",{key:t.url,ref:"favRefEdit",attrs:{logoType:t.logoType,name:t.name,url:t.url,logo:t.logo}})],1),t._v(" "),r("div",{staticClass:"btn-groups"},[r("button",{on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}},[t._v("取消")]),t._v(" "),r("button",{on:{click:function(e){return e.stopPropagation(),t.addCustomIcon.apply(null,arguments)}}},[t._v("确定")])])])])}),[],!1,null,null,null);e.default=m.exports}}]);