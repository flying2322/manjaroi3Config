(function()
{
	var initBackground,libs;
	initBackground= function($rootScope,$log,server,proxyManager,domainManager,userManager,tabsTracker,storage,performanceTracker,conflictDetector,badgeManager,teleScope,injectorManager,pageManager,track,notificationManager,upgradeManager,ROLES,VER)
	{
		var ver;
		server["init"]();userManager["init"]();pageManager["init"]();tabsTracker["init"]();injectorManager["init"]();performanceTracker["init"]();conflictDetector["init"]();domainManager["init"]();proxyManager["init"]();badgeManager["init"]();track["init"]();notificationManager["init"]();upgradeManager["init"]();track["pv"]('/chrome-extension/background');ver= VER;if(!storage["get"]('ver'))
		{
			domainManager["initFromDefault"]();track["event"]('extension','install',ver)
		}
		else 
		{
			if(ver!== storage["get"]('ver'))
			{
				track["event"]('extension','update',""+ (storage["get"]('ver'))+ "->"+ ver)
			}
		}
		track["event"]('extension','online',ver);storage["set"]('ver',ver);if($rootScope["user"]["role"]=== ROLES["HACKER"])
		{
			return pageManager["openLogin"]('force-login')
		}
	}
	;libs= ['angular','lang','angular_translate','services/storage','services/server','services/teleScope','services/userManager','services/domainManager','services/proxyManager','services/tabsTracker','services/injectorManager','services/performanceTracker','services/conflictDetector','services/badgeManager','services/notificationManager','services/upgradeManager','services/pageManager','libs/analytics','services/track'];require(['config'],function()
	{
		return requireWithRetry(libs,function(angular,lang)
		{
			var background;
			background= angular["module"]('background',['pascalprecht.translate','app']);background["config"](function($translateProvider)
			{
				return lang["config"]($translateProvider)
			}
			);background["run"](initBackground);return angular["element"](document)["ready"](function()
			{
				return angular["bootstrap"](document,['background'])
			}
			)
		}
		)
	}
	)
}
)["call"](this)