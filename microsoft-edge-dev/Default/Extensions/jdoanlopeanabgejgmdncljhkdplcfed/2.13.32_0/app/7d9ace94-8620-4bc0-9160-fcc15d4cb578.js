var fn_addin=function(t,a,e){var n={};return n.styles=n.styles||{},n.commands=n.commands||{},n.dependencies=e||n.dependencies||{},n.styles.style=function(){},n.views=n.views||{},n.collect=n.collect||{},n.models=n.models||{},n.templates=n.templates||{},n.info={widget:!0,placeholderType:"metric",id:"dashlinks",class:"app-container dashlinks",region:"top-left",order:"prepend",after:".team-logo",addin:"7d9ace94-8620-4bc0-9160-fcc15d4cb578"},t.console.log(t.elapsed()+": "+n.info.id+" started"),n.templates=n.templates||{},n.templates.dashlinks=Handlebars.template({compiler:[8,">= 4.3.0"],main:function(e,a,t,n,s){var i,l=null!=a?a:e.nullContext||{},o=e.hooks.helperMissing,r="function",d=e.escapeExpression;return'<span class="app-dash app-dash-icon dashlinks-icon-wrapper" data-momo-id="chromeTab" data-analytics-id="browser tab" data-place="dash" data-test="chrome-new-tab-dashlink" data-url="'+d(typeof(i=null!=(i=(e=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]})(t,"chromeNewTabUrl")||(null!=a?e(a,"chromeNewTabUrl"):a))?i:o)==r?i.call(l,{name:"chromeNewTabUrl",hash:{},data:s,loc:{start:{line:1,column:181},end:{line:1,column:200}}}):i)+'" title="'+d(typeof(i=null!=(i=e(t,"browserName")||(null!=a?e(a,"browserName"):a))?i:o)==r?i.call(l,{name:"browserName",hash:{},data:s,loc:{start:{line:1,column:209},end:{line:1,column:224}}}):i)+' Tab">'+(null!=(d=(e(t,"browserIcon")||a&&e(a,"browserIcon")||o).call(l,"dashlinks-icon",{name:"browserIcon",hash:{},data:s,loc:{start:{line:1,column:230},end:{line:1,column:264}}}))?d:"")+"</span>\n"},useData:!0}),n.styles=n.styles||{},n.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".dashlinks{flex:0 0 auto;order:10;--side-padding:10px}.dashlinks-icon-wrapper{min-height:var(--top-and-bottom-row-min-height);max-height:var(--max-height);cursor:pointer;filter:drop-shadow(0 1px 5px rgba(0, 0, 0, .1));transition:opacity .1s ease}.dashlinks-icon-wrapper:hover{opacity:1}.dashlinks-icon-wrapper:active{opacity:.9;transition-duration:0s}.dashlinks .dashlinks-icon{height:18px;width:18px;margin:0;fill:#fff!important;vertical-align:-4%}",document.getElementsByTagName("head")[0].appendChild(e)},n.views.DashLinks=Backbone.View.extend({template:n.templates.dashlinks,events:{"click .dashlinks-icon-wrapper":"handleClick"},initialize:function(){this.listenTo(t.models.bookmarksSettings,"change:chromeTabLocation",this.checkOptionalLinks),this.render()},checkInclusion:function(e){var a=t.models.bookmarksSettings.get(e.data("momo-id")+"Location")===e.data("place");return a&&!e.is(":visible")?this.$el.append(e):a||e.remove(),a},checkOptionalLinks:function(){var a=this,t=!1;this.dashItems&&this.dashItems.forEach(function(e){t=a.checkInclusion(e)||t}),this.$el.toggleClass("app-container",t)},render:function(){var e;return t.utils.isChromium()?(this.$el.html(this.template()),this.dashItems=[],(e=this).$(".app-dash").each(function(){e.dashItems.push(a(this))}),this.checkOptionalLinks(),this.triggerLoaded()):this.triggerLoaded(),this},triggerLoaded:function(){this.loadTriggered||(t.widgetManager.appReady(n.info.id),this.loadTriggered=!0)},handleClick:function(e){e.stopPropagation(),e.preventDefault();var a=e.delegatedTarget.getAttribute("data-analytics-id"),a=(a&&t.Analytics.capture(a+" click",{feature:"dashlinks"}),e.delegatedTarget.dataset.url||e.delegatedTarget.href);t.models.bookmarksSettings.get("openInNewTab")||e.metaKey?t.utils.getBrowser().tabs.create({url:a,active:!1}):t.utils.getBrowser().tabs.update({url:a})}}),n.styles.style(),n.views.dashlinks=t.widgetManager.handover("dashlinks",n.views.DashLinks,{region:"top-left",order:"prepend"}),n};m.addinManager&&m.addinManager.registerAddinFn("7d9ace94-8620-4bc0-9160-fcc15d4cb578",fn_addin);