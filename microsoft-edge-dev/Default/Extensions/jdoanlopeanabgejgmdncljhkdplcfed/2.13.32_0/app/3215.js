(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[3215,3578],{83578:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var s=o(20144),i=o(88026),a=o(51726),r=o.n(a),n=o(55482),l=o(7838),d=o(35174);let c={};const k={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};let h={};const u={bind:function(e,t){let o,s;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const i=e=>{s=!1,(e=>e&&e.clientX>window.innerWidth)(e)?s=!0:o=e.target},a=i=>{s||(t.modifiers.bubble||!e.contains(o)&&!e.contains(i.target)&&e!==o&&e!==i.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(i)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),h[e.dataset.clickOutsideMouseupHandlerId]=a,h[e.dataset.clickOutsideMousedownHandlerId]=i,document.addEventListener("mouseup",a),document.addEventListener("mousedown",i)},unbind:function(e){var t,o;null!==(t=e.dataset)&&void 0!==t&&t.clickOutsideMouseupHandlerId&&null!==(o=e.dataset)&&void 0!==o&&o.clickOutsideMousedownHandlerId&&(document.removeEventListener("mouseup",h[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",h[e.dataset.clickOutsideMousedownHandlerId]),delete h[e.dataset.clickOutsideMouseupHandlerId],delete h[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler)}};var b=o(94130),p=o(77197),f=o(72433);s.ZP.use(i.Z,{name:"unreactive"}),s.ZP.use(r()),s.ZP.use(n.qK),s.ZP.use(p.Z),s.ZP.use(f.ZP),s.ZP.use(b.Z),s.ZP.prototype.$xhr=d.Z,s.ZP.prototype.$e=l.Z,s.ZP.directive("mobile-click",k),s.ZP.directive("click-outside",u),new s.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),s.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:b.Z});const g=s.ZP},81735:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});const s={favicon:e=>m.utils.isChrome()?`chrome://favicon/size/16@2x/${e}`:m.utils.getFavIcon(e),open(e){m.models.bookmarksSettings.get("openInNewTab")&&m.utils.getBrowser().tabs?m.utils.getBrowser().tabs.create({url:e,active:!1}):m.utils.getBrowser().tabs.update({url:e}),m.utils.getBrowser().tabs||(m.models.bookmarksSettings.get("openInNewTab")?window.open(e,"_blank"):window.open(e,"_self"))},openInNewTab(e){m.utils.getBrowser().tabs?m.utils.getBrowser().tabs.create({url:e,active:!1}):window.open(e,"_blank")}}},13215:(e,t,o)=>{"use strict";o.r(t);var s=o(83578),i=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"slide",appear:e.$options.enabling},on:{enter:e.isWithinView}},[e.showBookmarks?t("div",{staticClass:"app-container bookmarks",attrs:{id:"bookmarks-vue","data-test":"bookmarks"}},[t("ul",{staticClass:"bookmarks-list",class:{"most-visited":e.currentTabDefaultMostVisited,"icons-only":e.settings.iconsOnly}},e._l(e.bookmarks,(function(o,s){return t("li",{key:o.id,ref:"bookmark",refInFor:!0,staticClass:"bookmarks-item",class:{overflow:"overflow________"===o.id,back:o.back},attrs:{id:o.id,"data-test":"bookmark"}},[o.children?t("bookmark-folder",{ref:"overflow________"===o.id?"overflow":"",refInFor:!0,attrs:{bookmark:o,"show-icons-only":e.settings.iconsOnly,index:s}}):t("bookmark",{attrs:{bookmark:o,"show-icons-only":e.settings.iconsOnly},on:{closeMostVisited:e.closeMostVisited}})],1)})),0)]):e._e()])};i._withStripped=!0;var a=function(){var e=this,t=e._self._c;return t("a",{staticClass:"bookmark",class:{local:e.bookmark.local},attrs:{draggable:"false",title:e.bookmark.title},on:{click:[function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.open.apply(null,arguments)},function(t){return t.metaKey?e.openInNewTab.apply(null,arguments):null}],mouseup:function(t){return"button"in t&&1!==t.button||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.openInNewTab.apply(null,arguments)}}},[t("span",{staticClass:"bookmark-icon-wrapper"},[e.bookmark.back?t("span",{staticClass:"icon-back-wrapper"},[t("inline-svg",{staticClass:"bookmark-icon icon-back bookmark-child-icon",attrs:{src:o(97510)}})],1):e.bookmark.img?t("img",{staticClass:"bookmark-icon bookmark-img",attrs:{draggable:"false",src:e.bookmark.img}}):t("img",{staticClass:"bookmark-icon",attrs:{draggable:"false",src:e.favicon(e.bookmark.url)}})]),e._v(" "),e.bookmark.title&&!e.showIconsOnly?t("span",{staticClass:"bookmark-label"},[e._v(e._s(e.bookmark.title))]):e._e()])};a._withStripped=!0;var r=o(81735);const n=new(o(20338).Z)({feature:"bookmarks"}),l={name:"Bookmark",props:{bookmark:{type:Object,default:()=>({})},showIconsOnly:Boolean},methods:{favicon:e=>r.Z.favicon(e),open(){if(this.bookmark.back)return this.$emit("closeMostVisited");this.captureEvent(),r.Z.open(this.bookmark.url)},openInNewTab(){this.bookmark.back||(this.captureEvent(),r.Z.openInNewTab(this.bookmark.url))},captureEvent(){this.bookmark.analyticsId?n.capture(`${this.bookmark.analyticsId} click`):n.batchCapture("bookmark click")}}};o(1618);var d=o(51900);const c=(0,d.Z)(l,a,[],!1,null,"29a4e658",null).exports;var k=function(){var e=this,t=e._self._c;return t("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeFolder,expression:"closeFolder"}],staticClass:"bookmark folder",class:{"shift-to-left":e.shiftToLeft||e.isOverflow,"icon-only":e.showIconsOnly,active:e.showChildren},attrs:{draggable:"false",title:e.bookmark.title,"data-test":"folder"},on:{click:function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.toggleFolder.apply(null,arguments)}}},[t("div",{staticClass:"folder-wrapper",on:{click:function(t){return t.metaKey?e.openInNewTab(e.bookmark):null},mouseup:function(t){return"button"in t&&1!==t.button||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.openInNewTab(e.bookmark)}}},[e.isOverflow?[t("inline-svg",{staticClass:"icon icon-ellipsis more-icon",attrs:{draggable:"false",src:o(49710)}})]:[e.showIconsOnly&&e.bookmark.title?t("span",{staticClass:"folder-icon-label bookmark-child-icon",attrs:{"data-test":"folder-icon-label"}},[e._v(e._s(e.bookmark.title[0]))]):e._e(),e._v(" "),t("inline-svg",{staticClass:"bookmark-icon icon-folder bookmark-child-icon",attrs:{draggable:"false",src:o(9021)}}),e._v(" "),e.showIconsOnly?e._e():t("span",{staticClass:"bookmark-label"},[e._v(e._s(e.bookmark.title))])]],2),e._v(" "),e.showChildren?t("div",{ref:"folderDropdown",staticClass:"app dropdown more-dropdown dash-dropdown folder-dropdown nipple nipple-top-left",attrs:{"data-test":"folder-dropdown"}},[t("div",{staticClass:"dropdown-wrapper"},[t("ul",{staticClass:"dropdown-list"},[e.showBack?t("li",{staticClass:"dropdown-item back-item",attrs:{"data-test":"folder-back"}},[t("a",{staticClass:"bookmark bookmark-child",on:{click:e.goBack}},[t("span",{staticClass:"icon-back-wrapper"},[t("inline-svg",{staticClass:"bookmark-icon icon-back bookmark-child-icon",attrs:{src:o(97510)}})],1),e._v(" "),t("span",{staticClass:"bookmark-label"},[e._v("Back")])])]):e._e(),e._v(" "),e._l(e.children,(function(s){return t("li",{key:s.id,staticClass:"dropdown-item",attrs:{"data-test":"folder-bookmark"},on:{click:[function(t){if(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)return null;s.children?e.openSubFolder(t,s.id):e.open(s)},function(t){return t.metaKey?e.openInNewTab(s):null}],mouseup:function(t){return"button"in t&&1!==t.button||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.openInNewTab(s)}}},[t("a",{staticClass:"bookmark bookmark-child",class:{local:s.local},attrs:{draggable:"false",title:s.title}},[s.children?t("div",{staticClass:"folder-wrapper bookmark-child"},[t("inline-svg",{staticClass:"bookmark-icon icon-folder bookmark-child-icon",attrs:{draggable:"false",src:o(9021)}})],1):t("span",{staticClass:"bookmark-icon-wrapper"},[t("img",{staticClass:"bookmark-icon bookmark-child-icon",attrs:{draggable:"false",src:e.favicon(s.url)}})]),e._v(" "),t("span",{staticClass:"bookmark-label",attrs:{"data-test":"nested-folder-label"}},[e._v(e._s(s.title))])])])})),e._v(" "),e.children.length?e._e():t("li",{staticClass:"dropdown-item folder-empty",attrs:{"data-test":"folder-bookmark"}},[e._m(0)])],2)])]):e._e()])};k._withStripped=!0;const h={name:"BookmarkFolder",props:{bookmark:{type:Object,default:()=>({})},showIconsOnly:Boolean,index:{type:Number,default:0}},data:()=>({showChildren:!1,shiftToLeft:!1,path:[]}),computed:{children(){let e=this.bookmark;return this.path.forEach((t=>{e=e.children.find((e=>e.id===t))})),e.children},showBack(){return!!this.path.length},isOverflow(){return"overflow________"===this.bookmark.id}},created(){m.on("globalEvent:esc",this.handleEsc)},destroyed(){m.off("globalEvent:esc",this.handleEsc)},methods:{handleEsc(){this.showBack?this.goBack():this.closeFolder()},closeFolder(){this.path=[],this.showChildren=!1},toggleFolder(e){this.$refs.folderDropdown&&this.$refs.folderDropdown.contains(e.target)||(this.showChildren=!this.showChildren,this.shiftToLeft=!1,this.showChildren?this.$nextTick(this.checkFolderIsNotOutsideOfView):this.path=[])},openSubFolder(e,t){e.preventDefault(),e.stopPropagation(),this.path.push(t)},goBack(e){e&&(e.preventDefault(),e.stopPropagation()),this.path.splice(-1,1)},checkFolderIsNotOutsideOfView(){const e=this.$refs.folderDropdown;if(!e)return;const t=e.getBoundingClientRect();this.shiftToLeft=!(t.top>=0&&t.left>=0&&t.right<=window.innerWidth)},favicon:e=>r.Z.favicon(e),open(e){r.Z.open(e.url)},openInNewTab(e){this.isOverflow||(e.children?e.children.forEach((e=>{e.children||r.Z.openInNewTab(e.url)})):r.Z.openInNewTab(e.url))}}};o(87113);const u=(0,d.Z)(h,k,[function(){var e=this._self._c;return e("a",{staticClass:"bookmark bookmark-child",attrs:{title:"This folder is empty."}},[e("span",{staticClass:"bookmark-label"},[this._v("(empty)")])])}],!1,null,"8e838a14",null).exports;var b=o(96046),p=o(40531),f=o(68313);const g={name:"Bookmarks",enabling:b.Z.appsReady,components:{Bookmark:c,BookmarkFolder:u},bb:()=>({settings:m.models.bookmarksSettings}),data:()=>({showBookmarks:m.models.customization.get("bookmarksVisible"),bookmarksMenu:[],bookmarksFetched:!1,originalbookmarks:[],bookmarks:[],topSites:[],originalTopSites:[],otherBookmarks:[],overflowBookmarks:[],currentTabDefaultMostVisited:!1}),computed:{isChromiumAndNotTopSites(){return m.utils.isChromium()&&!this.currentTabDefaultMostVisited},showChromeTab(){return this.settings&&"bookmarks"===this.settings.chromeTabLocation},containsMostVisited(){return this.bookmarks&&-1!==this.bookmarks.findIndex((e=>e.id===this.mostVisitedId))},containsOthers(){return this.bookmarks&&-1!==this.bookmarks.findIndex((e=>e.id===this.otherId))},containsOverflow(){return this.bookmarks&&-1!==this.bookmarks.findIndex((e=>e.id===this.overflowId))},containChromeTab(){return this.bookmarks&&-1!==this.bookmarks.findIndex((e=>e.url===this.chromeTabUrl))},containsChromeBookmarksManager(){return this.bookmarks&&-1!==this.bookmarks.findIndex((e=>e.url===this.chromeBookmarksUrl))}},watch:{"settings.iconsOnly"(){this.removeOverflowAndCheckWithinView()},"settings.includeMostVisited"(e){this.bookmarksFetched&&(e?this.addMostVisitedToBookmarks():this.removeMostVisited())},"settings.defaultMostVisited"(e){this.bookmarksFetched&&(this.currentTabDefaultMostVisited=e,e&&this.currentTabDefaultMostVisited&&this.bookmarksFetched?this.showMostVisited():this.closeMostVisited())},"settings.includeBookmarks"(e){this.bookmarksFetched&&(e?this.showChromeBookmarksManager():this.removeChromeBookmarksManager())},"settings.includeOtherBookmarks"(e){this.bookmarksFetched&&(e?this.addOtherBookmarks():this.removeOtherBookmarks())},showChromeTab(e){this.bookmarksFetched&&(e?this.showChromeTabItem():this.removeChromeTabItem())}},created(){this.chromeTabUrl=(0,f.getChromeNewTabPageUrl)(),this.chromeBookmarksUrl="chrome://bookmarks",this.isFirefox="Firefox"===m.utils.getBrowserName(),this.firefoxBookmarksMenu="Bookmarks Menu",this.mostVisitedId="mostVisited________",this.otherId="other________",this.overflowId="overflow________",this.getBookmarks(),m.on("appsReady",this.isWithinView),m.models.customization.on("m.customization: change:bookmarksVisible",this.bookmarksVisibleChanged),window.addEventListener("resize",this.debouncedRemoveOverflowAndCheckWithinView)},destroyed(){m.off("appsReady",this.isWithinView),m.models.customization.off("m.customization: change:bookmarksVisible",this.bookmarksVisibleChanged),window.removeEventListener("resize",this.debouncedRemoveOverflowAndCheckWithinView)},methods:{async getBookmarks(){if(!m.utils.getBrowser().bookmarks||!m.utils.getBrowser().topSites){const e=m.models.bookmarksSettings,t={permissions:e.permissions.permissions,origins:e.permissions.origins};if(!await new Promise((e=>{m.cmd("modal.open","PERMISSION_REQUEST",{resolve:e,permissions:t,widgetName:"Momentum",permissionExplanation:"To display your bookmarks"})})))return p.ax.bookmarksVisible=!1,void m.models.bookmarksSettings.set("defaultMostVisited",!1)}m.utils.getBrowser().bookmarks.getTree((e=>{this.isChrome=m.utils.isChrome(),this.isEdge=m.utils.isEdge();let t="BOOKMARKS BAR";this.isFirefox?t="BOOKMARKS TOOLBAR":this.isEdge&&(t="FAVORITES BAR");let o=e&&e.length&&e[0].children.find((e=>e.title.toUpperCase()===t));o||(o=e&&e.length&&e[0].children[0]),m.utils.getBrowser().topSites.get((t=>{this.bookmarks=o.children,this.originalbookmarks=[...o.children],this.topSites=t,this.originalTopSites=[...t],this.settings.includeMostVisited&&this.addMostVisitedToBookmarks(),this.settings.defaultMostVisited&&(this.currentTabDefaultMostVisited=!0,this.showMostVisited()),this.showChromeSpecificItems();const s=this.isEdge?"OTHER FAVORITES":"OTHER BOOKMARKS";let i=e[0].children.find((e=>e.title.toUpperCase()===s));i||(i=e&&e.length&&e[0].children[1]),this.otherBookmarks=i.children,this.settings.includeOtherBookmarks&&this.addOtherBookmarks(),this.addFirefoxBookmarksMenu(e),this.bookmarksFetched=!0,this.bookmarksReadyListener(),this.isWithinView()}))}))},resetBookmarks(){this.removeOverflow(),this.bookmarks=[...this.originalbookmarks],this.settings.includeMostVisited&&this.addMostVisitedToBookmarks(),this.settings.includeOtherBookmarks&&this.addOtherBookmarks(),this.showChromeSpecificItems(),this.addFirefoxBookmarksMenu()},bookmarksReadyListener(){"photo"===m.models.customization.persistentSettings.get("themeColour")?m.on("theme:set",this.bookmarksReady):this.bookmarksReady()},bookmarksReady(){m.widgetManager.appReady("bookmarks")},removeOverflowAndCheckWithinView(){this.removeOverflow(),this.isWithinView()},debouncedRemoveOverflowAndCheckWithinView(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.removeOverflowAndCheckWithinView()}),50)},bookmarksVisibleChanged(){const e=m.models.customization.get("bookmarksVisible");e&&0===this.bookmarks.length&&this.getBookmarks(),this.showBookmarks=e,localStorage.setItem("bookmarksEnabled",e)},addMostVisitedToBookmarks(){if(!this.containsMostVisited&&!this.currentTabDefaultMostVisited){let e=this.bookmarks.findIndex((e=>e.url===this.chromeBookmarksUrl));-1===e&&(e=this.bookmarks.findIndex((e=>e.url===this.chromeTabUrl))),-1===e?e=0:e++,this.bookmarks.splice(e,0,{children:[...this.originalTopSites],id:this.mostVisitedId,index:e,title:"Top Sites"})}this.removeOverflowAndCheckWithinView()},showMostVisited(){this.removeOverflow(),this.addMostVisitedToBookmarks(),this.bookmarks=[...this.originalTopSites],this.containsMostVisited||this.bookmarks.unshift({title:"Bookmarks",id:"mostVisitedBack________",back:!0})},removeMostVisited(){const e=this.bookmarks.findIndex((e=>e.id===this.mostVisitedId));-1!==e&&(this.bookmarks.splice(e,1),this.removeOverflowAndCheckWithinView())},closeMostVisited(){this.currentTabDefaultMostVisited=!1,this.resetBookmarks(),this.isWithinView()},addOtherBookmarks(){if(!this.settings.includeOtherBookmarks||this.currentTabDefaultMostVisited)return;const e={children:this.otherBookmarks,id:this.otherId,title:"Other"};this.containsOverflow&&-1===this.overflowBookmarks.findIndex((e=>e.id===this.otherId))?this.overflowBookmarks.push(e):this.containsOverflow||this.containsOthers||(this.bookmarks.push(e),this.removeOverflowAndCheckWithinView())},removeOtherBookmarks(){let e=this.bookmarks.findIndex((e=>e.id===this.otherId));if(-1===e){if(e=this.overflowBookmarks.findIndex((e=>e.id===this.otherId)),-1===e)return;this.overflowBookmarks.splice(e,1),this.overflowBookmarks.length||this.removeOverflow()}else this.bookmarks.splice(e,1)},reorderOtherBookmarksToBeAtEnd(){let e=this.bookmarks.findIndex((e=>e.id===this.otherId));if(-1===e){if(e=this.overflowBookmarks.findIndex((e=>e.id===this.otherId)),-1===e)return;const t=this.overflowBookmarks[this.overflowBookmarks.length-1];this.overflowBookmarks[e]=t,this.overflowBookmarks[this.overflowBookmarks.length-1]=this.otherBookmarks}else this.bookmarks.splice(e,1)},addToOverflow(e){if(!e||e.id===this.overflowId)return;const t=this.bookmarks.findIndex((t=>t===e));this.bookmarks.splice(t,1),this.overflowBookmarks.includes(e)||this.overflowBookmarks.unshift(e),-1===this.bookmarks.findIndex((e=>e.id===this.overflowId))&&this.bookmarks.push({children:this.overflowBookmarks,id:this.overflowId,index:-1})},removeOverflow(){this.overflowBookmarks.forEach((e=>{this.bookmarks.includes(e)||this.bookmarks.push(e)}));const e=this.bookmarks.findIndex((e=>e.id===this.overflowId));-1!==e&&(this.bookmarks.splice(e,1),this.overflowBookmarks=[])},showChromeSpecificItems(){this.showChromeTabItem(),this.showChromeBookmarksManager()},showChromeTabItem(){this.isChromiumAndNotTopSites&&this.showChromeTab&&!this.containChromeTab&&(this.bookmarks.unshift({url:this.chromeTabUrl,local:!0,title:m.utils.getBrowserName()+" Tab",id:"chromeTab________",img:"img/icon-"+m.utils.getBrowserName().toLowerCase()+".svg",analyticsId:"browser tab"}),this.removeOverflowAndCheckWithinView())},removeChromeTabItem(){this.bookmarks.splice(0,1),this.removeOverflowAndCheckWithinView()},showChromeBookmarksManager(){if(this.isChromiumAndNotTopSites&&this.settings.includeBookmarks&&!this.containsChromeBookmarksManager){let e=this.bookmarks.findIndex((e=>e.url===this.chromeTabUrl));-1===e?e=0:e++,this.bookmarks.splice(e,0,{url:this.chromeBookmarksUrl,local:!0,title:"Bookmarks",id:"chromeBookmarksManager________"}),this.removeOverflowAndCheckWithinView()}},removeChromeBookmarksManager(){if(this.isChromiumAndNotTopSites){const e=this.bookmarks.findIndex((e=>e.url===this.chromeBookmarksUrl));this.bookmarks.splice(e,1),this.removeOverflowAndCheckWithinView()}},addFirefoxBookmarksMenu(e){this.isFirefox&&(e&&(this.bookmarksMenu=e[0].children[0].children),this.currentTabDefaultMostVisited||this.bookmarks.push({children:this.bookmarksMenu,id:"menu________",parentId:"root________",title:this.firefoxBookmarksMenu}))},isWithinView(){this.$nextTick((()=>{const e=document.documentElement.clientWidth;for(let t=this.bookmarks.length-1;t>0;t--){const o=this.$refs.bookmark.find((e=>e.id===this.bookmarks[t].id));if(!(o&&o.offsetLeft+o.clientWidth>e)){this.isOverflowWithinView();break}this.addToOverflow(this.bookmarks[t])}}))},isOverflowWithinView(){this.$nextTick((()=>{const e=document.documentElement.clientWidth,t=this.$refs.overflow&&this.$refs.overflow[0]&&this.$refs.overflow[0].$el;if(t&&t.offsetLeft+t.clientWidth>e){const e=this.bookmarks[this.bookmarks.length-2];this.addToOverflow(e)}}))}}},w=g;o(79234);const v=(0,d.Z)(w,i,[],!1,null,"14dace2b",null).exports,M=document.createElement("div");document.querySelector(".top-bar").appendChild(M),new s.Z({render:e=>e(v)}).$mount(M)},40531:(e,t,o)=>{"use strict";o.d(t,{Fl:()=>a,Jr:()=>c,ax:()=>l,tJ:()=>d,wA:()=>r});var s=o(83578);const i=new s.Z.observable({}),a=new Proxy(i,{get:(e,t)=>(Object.prototype.hasOwnProperty.call(e,t)||s.Z.set(e,t,m.models.customization.getComputedSetting(t)),e[t]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),r=new Proxy(i,{get:(e,t)=>JSON.parse(a[t+"Str"]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),n=new s.Z.observable({}),l=new Proxy(n,{get:(e,t)=>(Object.prototype.hasOwnProperty.call(e,t)||s.Z.set(e,t,m.models.customization.get(t)),e[t]),set:(e,t,o)=>(m.models.customization.save(t,o),s.Z.set(e,t,o),!0)}),d=new Proxy(n,{get:(e,t)=>JSON.parse(l[t+"Str"]),set:(e,t,o)=>(l[t+"Str"]=JSON.stringify(o),!0)});function c(e={}){Object.entries(e).forEach((([e,t])=>s.Z.set(n,e,t))),m.models.customization.save(e)}m.models.customization.on("change",(e=>{e&&("balanceModeStr"in e.changed&&Object.entries(m.models.customization.attributes).forEach((([e,t])=>s.Z.set(i,e,t))),Object.entries(e.changed).forEach((([e,t])=>{s.Z.set(i,e,m.models.customization.getComputedSetting(e)),s.Z.set(n,e,t)})))})),m.on("customization:update",(e=>{e.forEach((e=>{s.Z.set(i,e,m.models.customization.getComputedSetting(e)),s.Z.set(n,e,m.models.customization.get(e))}))}))},44468:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var s=o(8081),i=o.n(s),a=o(23645),r=o.n(a)()(i());r.push([e.id,"\n/* stylelint-disable */\n\n",""]);const n=r},60911:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var s=o(8081),i=o.n(s),a=o(23645),r=o.n(a)()(i());r.push([e.id,"\n/* stylelint-disable */\n.folder[data-v-8e838a14] {\n}\n.folder-wrapper[data-v-8e838a14] { display: flex; align-items: center;\n}\n.icon-folder[data-v-8e838a14] { opacity: 0.5;\n}\n\n\t\t\t/* Show icons only folder label */\n.folder-icon-label[data-v-8e838a14] { position: absolute; top: 2px; right: 0; bottom: 0; left: 0; z-index: 2; display: flex; align-items: center; justify-content: center; color: var(--color-text); font-size: 0.5625rem; font-weight: 500;\n}\n\n\t/* More */\n.overflow .folder-wrapper[data-v-8e838a14] { height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;\n}\n.overflow .folder-wrapper .icon-ellipsis[data-v-8e838a14] { height: 12px;\n}\n.overflow .folder-wrapper .bookmark-label[data-v-8e838a14] { display: none;\n}\n.dropdown[data-v-8e838a14] { margin-top: 3px; top: 100%; display: block;\n}\n.dropdown-wrapper[data-v-8e838a14] { max-height: calc(100vh - 45px); overflow-y: auto;\n}\n.dropdown-list[data-v-8e838a14] { cursor: auto;\n}\n.dropdown-item[data-v-8e838a14] { min-width: 150px; max-width: 400px; display: inherit;\n}\n.dropdown[data-v-8e838a14] .bookmark { max-width: 500px; margin: 0; padding: 4px 14px; border-radius: 0px;\n}\n.dropdown[data-v-8e838a14] .bookmark-label { margin-left: 10px;\n}\n\n\t/* Subfolder back */\n.back-item .bookmark-label[data-v-8e838a14] { padding-top: 1px; opacity: 0.75; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;\n}\n\n\t/* Folder dropdown empty state */\n.folder-empty .bookmark[data-v-8e838a14] { opacity: 0.7;\n}\n.folder-empty .bookmark[data-v-8e838a14]:hover { background: none;\n}\n.folder-empty .bookmark-label[data-v-8e838a14] { margin-left: 0;\n}\n\n\t/* Show icons only mode */\n.icon-only .dropdown-item[data-v-8e838a14]:not(.folder-empty) { min-width: 16px;\n}\n.icon-only .icon-folder[data-v-8e838a14] { opacity: var(--opacity-stop-4);\n}\n",""]);const n=r},55570:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var s=o(8081),i=o.n(s),a=o(23645),r=o.n(a)()(i());r.push([e.id,"\n/* stylelint-disable */\n.bookmarks[data-v-14dace2b] { height: 36px; display: block; background-color: var(--color-bg); text-shadow: none; order: 2;\n}\n.animating.bookmarks[data-v-14dace2b] { transition: all 0.5s ease;\n}\n.bookmarks-list[data-v-14dace2b] { height: 100%; padding: 0 4px; display: flex; align-items: flex-end; transition: transform 0.25s ease, opacity 0.25s ease; white-space: nowrap;\n}\n.bookmarks-item[data-v-14dace2b] { color: var(--color-text);\n}\n[data-v-14dace2b] .bookmark { max-width: 150px; margin: 4px 1px; padding: 6px; position: relative; display: flex; align-items: center; border-radius: 30px; color: var(--color-text); cursor: pointer; line-height: 1.25; transition: background 0s ease;\n}\n[data-v-14dace2b] .bookmark:hover { background: var(--hover-bg);\n}\n[data-v-14dace2b] .bookmark-icon-wrapper { --size: 16px; height: var(--size); width: var(--size);\n}\n[data-v-14dace2b] .bookmark-icon { --size: 16px; height: var(--size); width: var(--size); fill: var(--color-text);\n}\n[data-v-14dace2b] .bookmark-img { filter: var(--filter-dark-invert);\n}\n[data-v-14dace2b] .bookmark-label { margin-left: 6px; display: inline-block; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n\n\t\t\t\t/* Back icon appears in Most Visited and in subfolders */\n[data-v-14dace2b] .icon-back-wrapper { --size: 16px; height: var(--size); width: var(--size); display: flex; align-items: center; justify-content: center; opacity: 0.6;\n}\n[data-v-14dace2b] .icon-back-wrapper .icon-back { --size: 14px;\n}\n\n\t\t/* Most visited */\n.most-visited[data-v-14dace2b] {\n}\n.most-visited:not(.icons-only) .bookmarks-item[data-v-14dace2b]:not(.back) { width: 1%; flex-grow: 1;\n}\n.most-visited .bookmark[data-v-14dace2b] { max-width: none;\n}\n\n\t\t/* Overflow dropdown button */\n.overflow[data-v-14dace2b] { flex-grow: 1; display: flex; justify-content: flex-end;\n}\n.slide-enter-active[data-v-14dace2b], .slide-leave-active[data-v-14dace2b] { transition: height .2s ease;\n}\n.slide-enter[data-v-14dace2b], .slide-leave-to[data-v-14dace2b] { height: 0;\n}\n",""]);const n=r},1618:(e,t,o)=>{var s=o(44468);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,o(45346).Z)("062cd0ba",s,!1,{ssrId:!0})},87113:(e,t,o)=>{var s=o(60911);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,o(45346).Z)("77844dce",s,!1,{ssrId:!0})},79234:(e,t,o)=>{var s=o(55570);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,o(45346).Z)("4bce0356",s,!1,{ssrId:!0})},97510:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDEwSDcuODI4bDMuNTg2LTMuNTg2YTIgMiAwIDAgMC0yLjgyOC0yLjgyOGwtNyA3YTIgMiAwIDAgMCAwIDIuODI4bDcgN2EyIDIgMCAxIDAgMi44MjgtMi44MjhMNy44MjggMTRIMjFhMiAyIDAgMCAwIDAtNHoiIC8+PC9zdmc+Cg=="},49710:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K"},9021:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MSA1M1YxOEM2MSAxNi4zNDMxIDU5LjY1NjkgMTUgNTggMTVIMzIuNjE2NEMzMC4xMTM4IDE1IDI3LjcyNDIgMTMuOTU4IDI2LjAyMTMgMTIuMTI0MUwyMy4wODIgOC45NTg2NUMyMi41MTQzIDguMzQ3MzUgMjEuNzE3OCA4IDIwLjg4MzYgOEg2QzQuMzQzMTUgOCAzIDkuMzQzMTUgMyAxMVY1M0MzIDU0LjY1NjkgNC4zNDMxNSA1NiA2IDU2SDU4QzU5LjY1NjkgNTYgNjEgNTQuNjU2OSA2MSA1M1pNNiA1QzIuNjg2MjkgNSAwIDcuNjg2MjkgMCAxMVY1M0MwIDU2LjMxMzcgMi42ODYyOSA1OSA2IDU5SDU4QzYxLjMxMzcgNTkgNjQgNTYuMzEzNyA2NCA1M1YxOEM2NCAxNC42ODYzIDYxLjMxMzcgMTIgNTggMTJIMzIuNjE2NEMzMC45NDggMTIgMjkuMzU0OSAxMS4zMDUzIDI4LjIxOTcgMTAuMDgyN0wyNS4yODAzIDYuOTE3MjlDMjQuMTQ1MSA1LjY5NDY5IDIyLjU1MiA1IDIwLjg4MzYgNUg2WiIvPgo8L3N2Zz4K"}}]);