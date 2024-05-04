(function()
{
	var ConflictController,FooterController,SettingsController,libs,preferenceRun,__indexOf=[]["indexOf"]|| function(item)
	{
		for(var i=0,l=this["length"];i< l;i++)
		{
			if(i in  this&& this[i]=== item)
			{
				return i
			}
		}
		return -1
	}
	;
	preferenceRun= function($location,teleScope,$rootScope,$timeout,track,$log,$translate,storage,proxyManager,LOCALES)
	{
		$translate["use"](storage["get"]("currentLocale",LOCALES["preferredLocale"]));$timeout(function()
		{
			return track["pv"]('/chrome-extension/preference')
		}
		,500);teleScope["link"]('proxies')["then"](function()
		{
			var servers=storage["get"]("proxies",[]);
			$rootScope["servers"]= proxyManager["displayProxies"](servers);$rootScope["connected_server_num"]= $rootScope["servers"]["length"]
		}
		);$rootScope.$watch('proxies',function()
		{
			var servers=storage["get"]("proxies",[]);
			$rootScope["servers"]= proxyManager["displayProxies"](servers);$rootScope["connected_server_num"]= $rootScope["servers"]["length"]
		}
		)
	}
	;libs= ['underscore','angular','lang','ngRoute',"services/storage",'ngAnimate','angular_translate','angular_strap','angular_strap_tpl','ngSanitize','services/domainUtils','services/teleScope','services/pageManager','services/domainManager','services/proxyManager','services/track','directives/languageSelect','core/filters/durationToNow','preference/controllers/SettingsController'];require(['config'],function()
	{
		return requireWithRetry(libs,function(_,angular,lang)
		{
			var preference=angular["module"]('preference');
			preference["config"](function($compileProvider,$routeProvider,$translateProvider)
			{
				lang["config"]($translateProvider);$compileProvider["aHrefSanitizationWhitelist"](/^\s*(https?|ftp|mailto|chrome):/);$compileProvider["imgSrcSanitizationWhitelist"](/^\s*(https?|ftp|mailto|chrome):/);return $routeProvider["when"]('/settings',{templateUrl:'/partials/preference/settings.html',controller:'SettingsController',resolve:{user:function(teleScope)
				{
					return teleScope["link"]('user')
				}
				}})["otherwise"]({redirectTo:'/settings'})
			}
			);preference["run"](preferenceRun);preference["controller"]({});return angular["element"](document)["ready"](function()
			{
				return angular["bootstrap"](document,['preference'])
			}
			)
		}
		)
	}
	)
}
)["call"](this)