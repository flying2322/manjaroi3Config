(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1156:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/active.png"},1159:function(t,e,a){},1175:function(t,e,a){var s={"./Clock-active.png":1176,"./Clock.png":1177,"./Icons-active.png":1178,"./Icons.png":1179,"./Simple-active.png":1180,"./Simple.png":1181,"./Text-active.png":1182,"./Text.png":1183,"./active.png":1156};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=1175},1176:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Clock-active.png"},1177:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Clock.png"},1178:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Icons-active.png"},1179:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Icons.png"},1180:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Simple-active.png"},1181:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Simple.png"},1182:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Text-active.png"},1183:function(t,e,a){t.exports=a.p+"images/newTab/assets/img/layout-page/Text.png"},1184:function(t,e,a){"use strict";a(1159)},1217:function(t,e,a){"use strict";a.r(e);var s=a(167),n=a.n(s),i=a(78),o=a.n(i),l=(a(59),a(19),a(7),a(26),a(29),a(36)),c=a(21),r=a(720),v=a(18),g=a(133),u=a(596),d=a(565),p=a(367);function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){S(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function S(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _=[-12,-11,-10,-9,-8,-7,-6,-5,-4.5,-4,-3.5,-3,-2,-1,0,1,2,3,4,4.5,5,5.5,5.75,6,6.5,7,8,9,9.5,10,10.5,11,12,13].map(t=>{var e=Math.abs(60*t)-Math.abs(60*~~t),a=Math.abs(60*~~t)/60;return{value:t,label:"UTC"+(t<0?"-":"+")+(a<10?"0":"")+a+":"+(0===e?"00":e+"")}}),m=[{column:5,row:2},{column:4,row:3},{column:5,row:3},{column:6,row:3}],C=[{name:"新版",value:"Icons"},{name:"旧版",value:"Text"},{name:"简洁",value:"Simple"},{name:"时间版",value:"Clock"}],f=window.navigator.userAgent.toLowerCase(),y={name:"PageConfigDrawer",data(){return{webstoreLink:f.indexOf("edg")>-1||f.indexOf("edge")>-1?"https://microsoftedge.microsoft.com/addons/detail/igbflnhjjpcakhcjakbnbkncjofahlil":"https://chrome.google.com/webstore/detail/kfkdboecolemdjodhmhmcibjocfopejo",version:c.a.get("version"),useUTC:this.$useUTC,isExtensionEnv:v.k,layoutList:m,pageLayoutList:C,backupData:{createTime:"",data:{},id:""},timezoneList:_,loadingBackup:!0}},props:{display:{type:Boolean,default:!1}},components:{ColorBlock:r.a},computed:b({},Object(l.c)({tabSettings:"config/tab-settings",tabBgInfo:"config/tab-bgInfo",layoutMode:"config/layoutMode",tabWeather:"config/tab-weather",fluentModeEnable:"uiStore/fluentModeEnable"})),methods:{openHelpDoc(){"Clock"===this.layoutMode&&c.a.update("tab-settings",{layoutMode:"Icons"}),localStorage.setItem("plugin-dirvers",'{"tab-help":""}'),location.reload()},openHelpVideo(){this.$emit("open-video"),this.$emit("close")},resetNewTabData(){c.a.clear().then(()=>{location.reload()})},handleKeySettingsChange(t,e,a){c.a.set("tab-settings",b(b({},this.tabSettings),{},{[t]:b(b({},this.tabSettings[t]),{},{[e]:a})})),this.$nextTick(()=>{u.a.onResize()})},handleflipClockSettingsChange(t,e){c.a.set("tab-settings",b(b({},this.tabSettings),{},{filpClockSettings:b(b({},this.tabSettings.filpClockSettings),{},{[t]:e})})),this.$nextTick(()=>{u.a.onResize()})},handleWeatherSettingsChange(t,e){c.a.set("tab-weather",b(b({},this.tabWeather),{},{[t]:e}))},handleSettingsChangeDebounce(t,e){var a=o()(this.tabSettings);if("layoutMode"===t){a.layoutTabMode=p.a.ICONS,setTimeout(()=>{csdn.report.viewCheck()},800);var s=d.a[e];!(s.findIndex(t=>t.value===this.tabBgInfo.wallpaperType)>-1)&&s.length&&c.a.set("tab-bgInfo",b(b({},this.tabBgInfo),{},{wallpaperType:s[0].value}))}this.$nextTick(()=>{u.a.onResize(),setTimeout(()=>{u.a.onResize()},200)}),c.a.update("tab-settings",b(b({},a),{},{[t]:e}))},handleLayoutChange(t,e){c.a.set("tab-settings",b(b({},this.tabSettings),{},{column:t,row:e})),setTimeout(()=>{Object(g.g)(t,e)},300)}},created(){this.handleSettingsChange=n()(this.handleSettingsChangeDebounce.bind(this),300)}},w=(a(1184),a(4)),k=Object(w.a)(y,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-config"},[s("div",{staticClass:"appearance-config"},[s("h3",[t._v("主视图")]),t._v(" "),s("div",{staticClass:"layout"},[s("ul",{staticStyle:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},t._l(t.pageLayoutList,(function(e){return s("li",{key:e.value,on:{click:function(a){return t.handleSettingsChange("layoutMode",e.value)}}},[s("img",{attrs:{src:a(1175)("./"+e.value+(e.value===t.layoutMode?"-active":"")+".png")}}),t._v(" "),s("p",[t._v(t._s(e.name))]),t._v(" "),e.value===t.layoutMode?s("img",{staticClass:"active",attrs:{src:a(1156),alt:""}}):t._e()])})),0)])]),t._v(" "),"Clock"!==t.layoutMode||"Clock"===t.layoutMode&&t.tabWeather.cityCodes&&t.tabWeather.cityCodes.length?s("div",{staticClass:"routine-config"},[s("h3",[t._v("常规")]),t._v(" "),s("ul",[s("li",{directives:[{name:"show",rawName:"v-show",value:"Clock"!==t.layoutMode,expression:"layoutMode !== 'Clock'"}]},[s("span",[t._v("在新标签中打开搜索结果")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("isOpenSearchInNewTab",e)}},model:{value:t.tabSettings.isOpenSearchInNewTab,callback:function(e){t.$set(t.tabSettings,"isOpenSearchInNewTab",e)},expression:"tabSettings.isOpenSearchInNewTab"}})],1)]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:"Icons"===t.layoutMode||"Text"===t.layoutMode,expression:"layoutMode === 'Icons' || layoutMode === 'Text'"}]},[s("span",[t._v('在新标签中打开"网站"')]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("isNewOpenAddress",e)}},model:{value:t.tabSettings.isNewOpenAddress,callback:function(e){t.$set(t.tabSettings,"isNewOpenAddress",e)},expression:"tabSettings.isNewOpenAddress"}})],1)]),t._v(" "),t.tabSettings.fluentModeSettings?s("li",{staticStyle:{display:"none"}},[s("span",[t._v("流畅模式 ")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleKeySettingsChange("fluentModeSettings","enable",e)}},model:{value:t.tabSettings.fluentModeSettings.enable,callback:function(e){t.$set(t.tabSettings.fluentModeSettings,"enable",e)},expression:"tabSettings.fluentModeSettings.enable"}})],1)]):t._e(),t._v(" "),s("li",[s("span",[t._v("显示天气 ")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("showWeather",e)}},model:{value:t.tabSettings.showWeather,callback:function(e){t.$set(t.tabSettings,"showWeather",e)},expression:"tabSettings.showWeather"}})],1)]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:"Icons"===t.layoutMode,expression:"layoutMode === 'Icons'"}]},[s("span",[t._v("左侧导航栏")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("enableTabsNav",e)}},model:{value:t.tabSettings.enableTabsNav,callback:function(e){t.$set(t.tabSettings,"enableTabsNav",e)},expression:"tabSettings.enableTabsNav"}})],1)])])]):t._e(),t._v(" "),"Clock"!==t.layoutMode?s("div",{staticClass:"appearance-config"},[s("h3",[t._v("搜索框")]),t._v(" "),t.fluentModeEnable?t._e():s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("透明度")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:1,min:.5,step:.005,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("searchBackgroundOpacity",e)}},model:{value:t.tabSettings.searchBackgroundOpacity,callback:function(e){t.$set(t.tabSettings,"searchBackgroundOpacity",e)},expression:"tabSettings.searchBackgroundOpacity"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(parseInt(100*t.tabSettings.searchBackgroundOpacity))+"%")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("圆角")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{min:0,max:30,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("searchRadius",e)}},model:{value:t.tabSettings.searchRadius,callback:function(e){t.$set(t.tabSettings,"searchRadius",e)},expression:"tabSettings.searchRadius"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(Math.ceil(3.33*t.tabSettings.searchRadius))+"%")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("大小")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{min:.75,max:1.25,step:.01,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("searchSizeZoom",e)}},model:{value:t.tabSettings.searchSizeZoom,callback:function(e){t.$set(t.tabSettings,"searchSizeZoom",e)},expression:"tabSettings.searchSizeZoom"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(~~(100*t.tabSettings.searchSizeZoom))+"%")])])])]),t._v(" "),s("ul",[s("li",[s("span",[t._v("开启历史记录")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("showHistory",e)}},model:{value:t.tabSettings.showHistory,callback:function(e){t.$set(t.tabSettings,"showHistory",e)},expression:"tabSettings.showHistory"}})],1)]),t._v(" "),s("li",[s("span",[t._v("显示搜索按钮")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("showSearchButton",e)}},model:{value:t.tabSettings.showSearchButton,callback:function(e){t.$set(t.tabSettings,"showSearchButton",e)},expression:"tabSettings.showSearchButton"}})],1)])])]):t._e(),t._v(" "),"Icons"===t.layoutMode?s("div",{staticClass:"appearance-config"},[s("h3",[t._v("图标")]),t._v(" "),s("a-radio-group",{staticClass:"page-config-radio",on:{change:function(e){return t.handleSettingsChange("iconsLayoutType",e.target.value)}},model:{value:t.tabSettings.iconsLayoutType,callback:function(e){t.$set(t.tabSettings,"iconsLayoutType",e)},expression:"tabSettings.iconsLayoutType"}},[s("a-radio",{attrs:{value:"default"}},[t._v("\n        预设布局\n      ")]),t._v(" "),s("a-radio",{attrs:{value:"custom"}},[t._v("\n        自定义布局\n      ")])],1),t._v(" "),"default"===t.tabSettings.iconsLayoutType?s("div",{staticClass:"layout"},[s("div",{staticClass:"layout-title"},[t._v("图标布局")]),t._v(" "),s("ul",{staticClass:"icon-layout",staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap"}},t._l(t.layoutList,(function(e){return s("li",{key:e.row+"-"+e.column,on:{click:function(a){return t.handleLayoutChange(e.column,e.row)}}},[s("div",{staticClass:"icon-payout-item",class:t.tabSettings.row+""+t.tabSettings.column==""+e.row+e.column&&"icon-active"},[s("div",{staticClass:"icon-payout-item-center"},t._l(e.row,(function(a){return s("ol",{key:a},t._l(e.column,(function(t){return s("li",{key:t},[s("i")])})),0)})),0),t._v(" "),t.tabSettings.row+""+t.tabSettings.column==""+e.row+e.column?s("img",{staticClass:"active",attrs:{src:a(1156),alt:""}}):t._e()]),t._v(" "),s("p",[t._v(t._s(e.row+" x "+e.column))])])})),0)]):[s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("行数")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:5,min:1,step:1,tipFormatter:null},on:{change:function(e){return t.handleLayoutChange(t.tabSettings.column,e)}},model:{value:t.tabSettings.row,callback:function(e){t.$set(t.tabSettings,"row",e)},expression:"tabSettings.row"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.row)+" ")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("列数")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:8,min:1,step:1,tipFormatter:null},on:{change:function(e){return t.handleLayoutChange(e,t.tabSettings.row)}},model:{value:t.tabSettings.column,callback:function(e){t.$set(t.tabSettings,"column",e)},expression:"tabSettings.column"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.column)+" ")])])])])],t._v(" "),s("div",{staticClass:"slider",attrs:{div:""}},[s("div",{staticClass:"slider-title"},[t._v("行间距")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:100,min:0,step:1,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("rowMargin",e)}},model:{value:t.tabSettings.rowMargin,callback:function(e){t.$set(t.tabSettings,"rowMargin",e)},expression:"tabSettings.rowMargin"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.rowMargin)+" %")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("列间距")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:100,min:0,step:1,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("columnMargin",e)}},model:{value:t.tabSettings.columnMargin,callback:function(e){t.$set(t.tabSettings,"columnMargin",e)},expression:"tabSettings.columnMargin"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.columnMargin)+" % ")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("透明度")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:1,min:.1,step:.01,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("iconOpacity",e)}},model:{value:t.tabSettings.iconOpacity,callback:function(e){t.$set(t.tabSettings,"iconOpacity",e)},expression:"tabSettings.iconOpacity"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(parseInt(100*t.tabSettings.iconOpacity))+"%")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("圆角")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{min:0,max:50,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("iconRadius",e)}},model:{value:t.tabSettings.iconRadius,callback:function(e){t.$set(t.tabSettings,"iconRadius",e)},expression:"tabSettings.iconRadius"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(parseInt(2*+t.tabSettings.iconRadius))+"%")])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("大小")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{min:80,max:120,step:1,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("iconZoomNew",e)}},model:{value:t.tabSettings.iconZoomNew,callback:function(e){t.$set(t.tabSettings,"iconZoomNew",e)},expression:"tabSettings.iconZoomNew"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.iconZoomNew)+"%")])])])])],2):t._e(),t._v(" "),s("div",{staticClass:"appearance-config"},[s("h3",[t._v("视图")]),t._v(" "),s("div",{staticClass:"slider"},[s("span",{staticClass:"slider-title"},[t._v("主题")]),t._v(" "),s("span",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.tabSettings.theme,expression:"tabSettings.theme"}],staticClass:"select-item",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tabSettings,"theme",e.target.multiple?a:a[0])},function(e){return t.handleKeySettingsChange("simpleSetting","handleSettingsChange",t.tabSettings.theme)}]}},[s("option",{key:"light",attrs:{value:"light"}},[t._v(" 亮色 ")]),t._v(" "),s("option",{key:"dark",attrs:{value:"dark"}},[t._v(" 黑暗 ")]),t._v(" "),s("option",{key:"system",attrs:{value:"system"}},[t._v(" 跟随系统 ")])])])]),t._v(" "),"Icons"===t.layoutMode||"Simple"===t.layoutMode?s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("缩放大小")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:1.25,min:.75,step:.01,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("viewZoom",e)}},model:{value:t.tabSettings.viewZoom,callback:function(e){t.$set(t.tabSettings,"viewZoom",e)},expression:"tabSettings.viewZoom"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.viewZoom))])])])]):t._e(),t._v(" "),"Clock"===t.layoutMode?s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("缩放大小")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:1,min:.5,step:.05,tipFormatter:null},on:{change:function(e){return t.handleflipClockSettingsChange("zoom",e)}},model:{value:t.tabSettings.filpClockSettings.zoom,callback:function(e){t.$set(t.tabSettings.filpClockSettings,"zoom",e)},expression:"tabSettings.filpClockSettings.zoom"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.filpClockSettings.zoom))])])])]):t._e(),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("背景模糊")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:20,min:0,step:1,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("blur",e)}},model:{value:t.tabSettings.blur,callback:function(e){t.$set(t.tabSettings,"blur",e)},expression:"tabSettings.blur"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.blur))])])])]),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("遮罩透明度")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:100,min:1,step:1,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("maskOpacity",e)}},model:{value:t.tabSettings.maskOpacity,callback:function(e){t.$set(t.tabSettings,"maskOpacity",e)},expression:"tabSettings.maskOpacity"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.maskOpacity))])])])]),t._v(" "),t.fluentModeEnable?t._e():s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("毛玻璃数值")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{max:30,min:1,step:1,tipFormatter:null},on:{change:function(e){return t.handleSettingsChange("glassBlurNum",e)}},model:{value:t.tabSettings.glassBlurNum,callback:function(e){t.$set(t.tabSettings,"glassBlurNum",e)},expression:"tabSettings.glassBlurNum"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(t.tabSettings.glassBlurNum))])])])])]),t._v(" "),"Icons"===t.layoutMode?s("div",{staticClass:"text-color-config"},[s("h3",[t._v("字体")]),t._v(" "),s("div",[s("div",{staticClass:"color-select"},[t._v("图标文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabSettings.textColor},on:{"on-select":function(e){return t.handleSettingsChange("textColor",e)}}})],1),t._v(" "),t.tabWeather.cityCodes&&t.tabWeather.cityCodes.length&&t.tabSettings.showWeather?s("div",[s("div",{staticClass:"color-select"},[t._v("天气文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabWeather.textColor},on:{"on-select":function(e){return t.handleWeatherSettingsChange("textColor",e)}}})],1):t._e(),t._v(" "),s("div",[s("div",{staticClass:"color-select"},[t._v("日期/时间文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabSettings.simpleSetting.color},on:{"on-select":function(e){return t.handleKeySettingsChange("simpleSetting","color",e)}}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tabSettings.showDateInIconsLayout,expression:"tabSettings.showDateInIconsLayout"}],staticClass:"slider"},[s("div",{staticClass:"slider-title",staticStyle:{width:"90px"}},[t._v("时间字体大小")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{min:60,max:160,tipFormatter:null},on:{change:function(e){return t.handleKeySettingsChange("simpleSetting","fontSize",e)}},model:{value:t.tabSettings.simpleSetting.fontSize,callback:function(e){t.$set(t.tabSettings.simpleSetting,"fontSize",e)},expression:"tabSettings.simpleSetting.fontSize"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(Math.ceil(t.tabSettings.simpleSetting.fontSize))+"px")])])])])]):t._e(),t._v(" "),"Text"===t.layoutMode?s("div",{staticClass:"text-color-config"},[s("h3",[t._v("字体")]),t._v(" "),s("div",[s("div",{staticClass:"color-select"},[t._v("文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabSettings.textModeSettings.textColor},on:{"on-select":function(e){return t.handleKeySettingsChange("textModeSettings","textColor",e)}}})],1),t._v(" "),t.tabWeather.cityCodes&&t.tabWeather.cityCodes.length&&t.tabSettings.showWeather?s("div",[s("div",{staticClass:"color-select"},[t._v("天气文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabWeather.textColor},on:{"on-select":function(e){return t.handleWeatherSettingsChange("textColor",e)}}})],1):t._e()]):t._e(),t._v(" "),"Clock"===t.layoutMode?s("div",{staticClass:"text-color-config"},[s("h3",[t._v("字体")]),t._v(" "),s("div",[s("div",{staticClass:"color-select"},[t._v("文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabSettings.filpClockSettings.textColor},on:{"on-select":function(e){return t.handleflipClockSettingsChange("textColor",e)}}})],1),t._v(" "),t.tabWeather.cityCodes&&t.tabWeather.cityCodes.length&&t.tabSettings.showWeather?s("div",[s("div",{staticClass:"color-select"},[t._v("天气文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabWeather.textColor},on:{"on-select":function(e){return t.handleWeatherSettingsChange("textColor",e)}}})],1):t._e()]):t._e(),t._v(" "),"Simple"===t.layoutMode?s("div",{staticClass:"text-color-config"},[s("h3",[t._v("字体")]),t._v(" "),s("div",[s("div",{staticClass:"color-select"},[t._v("文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabSettings.simpleSetting.color},on:{"on-select":function(e){return t.handleKeySettingsChange("simpleSetting","color",e)}}})],1),t._v(" "),s("div",{staticClass:"slider"},[s("div",{staticClass:"slider-title"},[t._v("字体大小")]),t._v(" "),s("div",{staticClass:"slider-content"},[s("div",{staticClass:"a-slider"},[s("a-slider",{attrs:{min:60,max:160,tipFormatter:null},on:{change:function(e){return t.handleKeySettingsChange("simpleSetting","fontSize",e)}},model:{value:t.tabSettings.simpleSetting.fontSize,callback:function(e){t.$set(t.tabSettings.simpleSetting,"fontSize",e)},expression:"tabSettings.simpleSetting.fontSize"}})],1),t._v(" "),s("span",[s("span",[t._v(t._s(Math.ceil(t.tabSettings.simpleSetting.fontSize))+"px")])])])]),t._v(" "),t.tabWeather.cityCodes&&t.tabWeather.cityCodes.length&&t.tabSettings.showWeather?s("div",[s("div",{staticClass:"color-select"},[t._v("天气文本颜色")]),t._v(" "),s("ColorBlock",{attrs:{value:t.tabWeather.textColor},on:{"on-select":function(e){return t.handleWeatherSettingsChange("textColor",e)}}})],1):t._e()]):t._e(),t._v(" "),"Simple"===t.layoutMode||"Icons"===t.layoutMode?s("div",{staticClass:"routine-config"},[s("h3",[t._v("日期、时间设置")]),t._v(" "),s("ul",[s("li",[s("span",[t._v("显示日期")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleKeySettingsChange("simpleSetting","showDate",e)}},model:{value:t.tabSettings.simpleSetting.showDate,callback:function(e){t.$set(t.tabSettings.simpleSetting,"showDate",e)},expression:"tabSettings.simpleSetting.showDate"}})],1)]),t._v(" "),s("li",[s("span",[t._v("显示时间")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleSettingsChange("showDateInIconsLayout",e)}},model:{value:t.tabSettings.showDateInIconsLayout,callback:function(e){t.$set(t.tabSettings,"showDateInIconsLayout",e)},expression:"tabSettings.showDateInIconsLayout"}})],1)]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.tabSettings.showDateInIconsLayout,expression:"tabSettings.showDateInIconsLayout"}]},[s("span",[t._v("使用24小时制")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleKeySettingsChange("simpleSetting","is24HourClock",e)}},model:{value:t.tabSettings.simpleSetting.is24HourClock,callback:function(e){t.$set(t.tabSettings.simpleSetting,"is24HourClock",e)},expression:"tabSettings.simpleSetting.is24HourClock"}})],1)]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.tabSettings.showDateInIconsLayout,expression:"tabSettings.showDateInIconsLayout"}]},[s("span",[t._v("显示秒")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleKeySettingsChange("simpleSetting","showSeconds",e)}},model:{value:t.tabSettings.simpleSetting.showSeconds,callback:function(e){t.$set(t.tabSettings.simpleSetting,"showSeconds",e)},expression:"tabSettings.simpleSetting.showSeconds"}})],1)]),t._v(" "),t.useUTC&&t.tabSettings.showDateInIconsLayout?s("li",[s("span",[t._v("时区偏移小时")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tabSettings.dateUTC,expression:"tabSettings.dateUTC"}],staticClass:"select-item",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tabSettings,"dateUTC",e.target.multiple?a:a[0])},function(e){return t.handleKeySettingsChange("simpleSetting","dateUTC",t.tabSettings.dateUTC)}]}},t._l(t.timezoneList,(function(e){return s("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label))])})),0)]):t._e()])]):t._e(),t._v(" "),"Clock"===t.layoutMode?s("div",{staticClass:"routine-config"},[s("h3",[t._v("时间设置")]),t._v(" "),s("ul",[s("li",[s("span",[t._v("使用24小时制")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleflipClockSettingsChange("is24HourClock",e)}},model:{value:t.tabSettings.filpClockSettings.is24HourClock,callback:function(e){t.$set(t.tabSettings.filpClockSettings,"is24HourClock",e)},expression:"tabSettings.filpClockSettings.is24HourClock"}})],1)]),t._v(" "),s("li",[s("span",[t._v("显示秒")]),t._v(" "),s("span",[s("a-switch",{attrs:{size:"small"},on:{change:function(e){return t.handleflipClockSettingsChange("showSeconds",e)}},model:{value:t.tabSettings.filpClockSettings.showSeconds,callback:function(e){t.$set(t.tabSettings.filpClockSettings,"showSeconds",e)},expression:"tabSettings.filpClockSettings.showSeconds"}})],1)]),t._v(" "),t.useUTC?s("li",[s("span",[t._v("时区偏移小时")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tabSettings.dateUTC,expression:"tabSettings.dateUTC"}],staticClass:"select-item",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.tabSettings,"dateUTC",e.target.multiple?a:a[0])},function(e){return t.handleKeySettingsChange("simpleSetting","dateUTC",t.tabSettings.dateUTC)}]}},t._l(t.timezoneList,(function(e){return s("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label))])})),0)]):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"appearance-config"},[s("h3",[t._v("重置")]),t._v(" "),s("div",{staticClass:"btn-group"},[s("a",{staticStyle:{width:"100%"},on:{click:t.resetNewTabData}},[t._v("重置数据")])])]),t._v(" "),t.isExtensionEnv?s("div",{staticClass:"appearance-config"},[s("h3",[t._v("你觉得开发者助手怎么样？")]),t._v(" "),s("div",{staticClass:"btn-group"},[s("a",{attrs:{href:t.webstoreLink,target:"_blank"}},[t._v("给五星好评")]),t._v(" "),s("a",{attrs:{href:"https://bbs.csdn.net/forums/plugin",target:"_blank"}},[t._v("反馈问题")])])]):t._e(),t._v(" "),t.isExtensionEnv?s("div",{staticClass:"appearance-config"},[s("h3",[t._v("关于开发者助手")]),t._v(" "),s("div",{staticClass:"about-info"},[s("div",[t._v("版本号: v"+t._s(t.version))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"btn-group between help-doc-btn"},[s("div",{on:{click:t.openHelpDoc}},[t._v("使用帮助")]),t._v(" "),s("div",{on:{click:t.openHelpVideo}},[t._v("视频教程")])]),t._v(" "),t._m(1)])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("官网: "),e("a",{attrs:{target:"_blank",href:"https://plugin.csdn.net"}},[this._v("https://plugin.csdn.net")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:"https://plugin.csdn.net/images/chrome-qrcode.png",alt:""}}),this._v(" "),e("div",[this._v("如有问题请加微信群沟通")])])}],!1,null,null,null);e.default=k.exports}}]);