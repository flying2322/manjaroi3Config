(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1161:function(e,t,r){},1186:function(e,t,r){"use strict";r(1161)},1214:function(e,t,r){"use strict";r.r(t);r(19),r(7),r(26),r(29);var a=r(36),n=(r(65),r(59),r(30),r(32),r(39),r(21)),o=r(18);function s(e,t,r,a,n,o,s){try{var c=e[o](s),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(a,n)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function c(e){s(o,a,n,c,i,"next",e)}function i(e){s(o,a,n,c,i,"throw",e)}c(void 0)}))}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={data:()=>({rollbackData:"",avatar:"",loadingBackup:!0,backupData:{}}),computed:u({},Object(a.c)({tabSettings:"config/tab-settings",userInfo:"user/userInfo"})),created(){this.userInfo.UserName&&!this.backupData.createTime&&this.getBackUpData(),this.getRollbackData()},methods:u(u({},Object(a.b)("weatherStore",{refreshWeatherData:"refreshWeatherData"})),{},{getPopupContainer:e=>e.parentElement,logout(){if(o.k){var e=["UserToken","UserInfo","UserName","AU","UserNick"].map(e=>this.removeCookie(e));Promise.all(e).then(e=>{location.reload()})}else{var t="https://passport.csdn.net/account/logout?from="+encodeURIComponent(location.href),r=document.createElement("a");r.href=t,r.setAttribute("target","_self"),r.click()}},removeCookie:e=>new Promise(t=>{chrome.cookies.remove({url:"https://csdn.net",name:e},t)}),getBackUpData(){this.loadingBackup=!0,n.a.getRecoveryData().then(e=>{setTimeout(()=>{this.loadingBackup=!1},300),this.backupData=e})},backUpData(){var e=arguments,t=this;return c(regeneratorRuntime.mark((function r(){var a,o,s,c,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:0,!t.userInfo.UserName){r.next=10;break}return o=t.$message.loading("备份中...",0),r.next=5,n.a.backup(a);case 5:s=r.sent,c=s.code,i=s.data,setTimeout(()=>{o()},300),setTimeout(()=>{200===c?(t.$message.success("备份成功"),t.getBackUpData()):(console.error({code:c,data:i}),t.$message.error("备份失败"))},600);case 10:case"end":return r.stop()}}),r)})))()},recoveryData(){var e=arguments,t=this;return c(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:0,!t.userInfo.UserName||""===t.backupData.id){r.next=9;break}return o=t.$message.loading("恢复中...",0),r.next=5,n.a.recovery(null,a);case 5:t.getRollbackData(),t.refreshWeatherData(),setTimeout(()=>{o()},300),setTimeout(()=>{t.$message.success("恢复成功")},600);case 9:case"end":return r.stop()}}),r)})))()},rollback(){n.a.rollback()},getRollbackData(){this.rollbackData=n.a.get("tab-rollback")}})},f=(r(1186),r(4));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={data:()=>({}),components:{UserCard:Object(f.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-info-card"},[r("img",{staticClass:"avatar",attrs:{src:e.userInfo.avatar,alt:""}}),e._v(" "),r("p",[e._v(e._s(e.userInfo.UserNick||e.userInfo.UserName))]),e._v(" "),r("h3",[e._v("\n    账户与备份\n    "),e.userInfo.UserName?r("div",{staticClass:"logout-img",on:{click:function(t){return e.logout()}}}):e._e()]),e._v(" "),r("ul",[e.userInfo.UserName?r("li",[r("div",{staticClass:"line-item"},[r("div",[e._v("当前登录账户：")]),e._v(" "),r("div",[e._v(e._s(e.userInfo.UserNick||e.userInfo.UserName))])])]):e._e(),e._v(" "),e.userInfo.UserName?r("li",[r("div",{staticClass:"line-item"},[r("div",[e._v("上次手动备份时间:")]),e._v(" "),r("div",[e.backupData.createTime?r("span",[e._v(" "+e._s(e.backupData.createTime))]):e.loadingBackup?r("span",[e._v("加载中...")]):r("span",[e._v("无备份数据")]),e._v(" "),r("a-popconfirm",{attrs:{title:"您确定要恢复数据吗？",overlayClassName:"user-info-card-popover",cancelText:"取消",placement:"left",okText:"确认","get-popup-container":e.getPopupContainer},on:{confirm:function(t){return e.recoveryData()}}},[r("div",{staticClass:"btn-backup"},[e._v("恢复")])])],1)])]):e._e(),e._v(" "),e.userInfo.UserName&&!e.loadingBackup?r("li",{staticClass:"last-child"},[r("a-popconfirm",{attrs:{title:"您确定要备份吗？",overlayClassName:"user-info-card-popover",cancelText:"取消",okText:"确认","get-popup-container":e.getPopupContainer},on:{confirm:function(t){return e.backUpData()}}},[r("button",{staticClass:"btn data-backups"},[e._v("立即备份")])]),e._v(" "),e.rollbackData?r("a-popconfirm",{attrs:{title:"您确定要回滚数据吗？",overlayClassName:"user-info-card-popover",cancelText:"取消",okText:"确认","get-popup-container":e.getPopupContainer},on:{confirm:function(t){return e.rollback()}}},[r("button",{staticClass:"btn data-recovery"},[e._v("回滚")])]):e._e()],1):e._e()])])}),[],!1,null,null,null).exports},methods:{login(){o.k&&(chrome.cookies.remove({url:"https://csdn.net",name:"c_first_page"},(function(e){})),chrome.cookies.set({url:"https://csdn.net",name:"c_first_ref",value:"default"},(function(e){}))),location.href=o.k?"https://passport.csdn.net/login?code=public&platform=plugin":"https://passport.csdn.net/account/login"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(a.c)({userInfo:"user/userInfo"}))},g=Object(f.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.userInfo.UserName?t("a-popover",{attrs:{overlayClassName:"user-info-popover",title:"",trigger:"hover",placement:"leftTop"}},[t("template",{slot:"content"},[t("BlurGrass",{attrs:{"is-preset":"",bgColor:"rgba(0,0,0,0)"}}),this._v(" "),t("UserCard")],1),this._v(" "),t("div",{staticClass:"user-icon login",style:{"background-image":"url("+this.userInfo.avatar+")"}})],2):t("a-tooltip",{attrs:{placement:"bottom",title:"未登录"}},[t("div",{staticClass:"user-icon",on:{click:this.login}})])],1)}),[],!1,null,null,null);t.default=g.exports}}]);