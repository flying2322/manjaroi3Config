(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1153:function(e,s,t){e.exports=t.p+"images/newTab/assets/img/staus-enable.png"},1154:function(e,s,t){e.exports=t.p+"images/newTab/assets/img/staus-disable.png"},1155:function(e,s,t){e.exports=t.p+"images/newTab/assets/img/add.png"},1157:function(e,s,t){},1172:function(e,s,t){e.exports=t.p+"images/newTab/assets/img/closeblack.png"},1173:function(e,s,t){"use strict";t(1157)},1215:function(e,s,t){"use strict";t.r(s);t(19),t(26),t(29);var n=t(78),i=t.n(n),a=(t(60),t(7),t(36)),r=t(21),o=t(598),l=t(18);function c(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?c(Object(t),!0).forEach((function(s){u(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function u(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}var p={data:()=>({enginessName:"",enginessUrl:"",isOpenEnginess:!1}),props:{display:{type:Boolean,default:!1}},watch:{display(e){e||this.reset()}},components:{Favicon:o.a},computed:g(g({},Object(a.c)("config",{tabSearches:"tab-searches"})),{},{allEnginess(){var e=i()(this.tabSearches.customEngines)||[];return this.tabSearches.all&&this.tabSearches.all.length?this.tabSearches.all.concat(e.map(e=>g(g({},e),{},{type:"custom"}))):[]},isEditing(){return this.enginessName||this.enginessUrl}}),methods:{handleOpenEnginessClick(e){e.stopPropagation(),this.isOpenEnginess=!0},handleCloseEnginessClick(e){e.stopPropagation(),this.isOpenEnginess=!1},editEnginessSPM(e){if(e){var s=JSON.stringify({name:e.name,status:e.enable?"禁用":"启用"});return{spm:this.SPM.editSearchEnginess,extra:s}}},handleDeleteIconClick(e){var s=i()(this.tabSearches);s.customEngines=s.customEngines.filter(s=>s.id!==e)||[],r.a.set("tab-searches",s)},addCustomEnginess(){if(this.enginessName&&this.enginessUrl)if(-1!==this.enginessUrl.indexOf("%s")){var e=this.enginessUrl;0!==e.indexOf("http")&&(e="http://"+e);var s=this.$refs.favRef.getResult(),t=s.src,n=s.html,i=s.logoType;if("image"!==i||t){var a=[].concat(this.tabSearches.customEngines||[]);Object(l.n)({spm:this.SPM.addSearchEnginess,extend1:this.enginessName}),a.push({name:this.enginessName,id:(a.length?a.length+1:1)+"_custom",enable:!0,logo:t,html:n,logoType:i,url:e}),r.a.set("tab-searches",Object.assign({},this.tabSearches,{customEngines:a})),this.reset()}else this.$message.warn("请上传图片")}else this.$message.warn("url格式错误");else this.$message.warn("请填写完整")},reset(){this.enginessName="",this.enginessUrl="",this.active=0},changeEnginessStatus(e,s){var t=s.indexOf("_custom")>-1?"customEngines":"all",n=[].concat(this.tabSearches[t]);Object(l.n)(this.editEnginessSPM(n[e])),"customEngines"===t&&(e-=this.tabSearches.all.length);var i=this.tabSearches.all.filter(e=>e.enable).length+this.tabSearches.customEngines.filter(e=>e.enable).length;n[e].enable&&1===i?this.$message.info("至少需要添加一个搜索引擎"):(n[e].enable=!n[e].enable,r.a.set("tab-searches",Object.assign({},this.tabSearches,{[t]:n})))}}},h=(t(1173),t(4)),m=Object(h.a)(p,(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"search-enginess-edit"},[n("div",{staticClass:"enginess-list"},e._l(e.allEnginess,(function(s,i){return n("div",{key:s.id+i,staticClass:"enginess-item"},["image"===s.logoType?n("img",{attrs:{src:s.logo,alt:""}}):n("div",{domProps:{innerHTML:e._s(s.html)}}),e._v(" "),n("div",{staticClass:"enginess-name"},[e._v(e._s(s.name))]),e._v(" "),n("div",{staticClass:"status"},["custom"===s.type?n("img",{staticClass:"close",attrs:{src:t(1172),alt:""},on:{click:function(t){return e.handleDeleteIconClick(s.id)}}}):e._e(),e._v(" "),s.enable?n("img",{attrs:{src:t(1153),alt:""},on:{click:function(t){return t.stopPropagation(),e.changeEnginessStatus(i,s.id)}}}):e._e(),e._v(" "),s.enable?e._e():[n("img",{staticClass:"add",attrs:{src:t(1154),alt:"add"},on:{click:function(t){return t.stopPropagation(),e.changeEnginessStatus(i,s.id)}}})]],2)])})),0),e._v(" "),e.isOpenEnginess?n("div",{staticClass:"enginess-form"},[n("div",{staticClass:"enginess-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enginessName,expression:"enginessName"}],staticClass:"enginess-control enginess-control-name",attrs:{placeholder:"输入名称",type:"text"},domProps:{value:e.enginessName},on:{input:function(s){s.target.composing||(e.enginessName=s.target.value)}}})]),e._v(" "),n("div",{staticClass:"enginess-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enginessUrl,expression:"enginessUrl"}],staticClass:"enginess-control",attrs:{placeholder:"输入网址（用“ %s ”替代搜索词）",type:"text"},domProps:{value:e.enginessUrl},on:{input:function(s){s.target.composing||(e.enginessUrl=s.target.value)}}})]),e._v(" "),n("div",{staticClass:"enginess-group"},[n("label",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"isEditing"}],staticClass:"enginess-label"},[e._v("图标")]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.isEditing?n("Favicon",{ref:"favRef",attrs:{name:e.enginessName,url:e.enginessUrl}}):e._e()],1)],1),e._v(" "),n("div",{staticClass:"button-out"},[n("button",{staticClass:"add",on:{click:function(s){return s.stopPropagation(),e.addCustomEnginess(s)}}},[e._v("\n        添加\n      ")]),e._v(" "),n("button",{on:{click:function(s){return s.stopPropagation(),e.handleCloseEnginessClick(s)}}},[e._v("\n        取消\n      ")])])]):n("div",{staticClass:"enginess-form-openBtn",on:{click:function(s){return s.stopPropagation(),e.handleOpenEnginessClick.apply(null,arguments)}}},[n("img",{attrs:{src:t(1155),alt:""}}),e._v(" "),n("span",[e._v("自定义添加网址...")])])])}),[],!1,null,null,null);s.default=m.exports}}]);