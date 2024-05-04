(function()
{
	var AddController,ConflictController,FooterController,MenuController,libs,popupRun,__indexOf=[]["indexOf"]|| function(item)
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
	popupRun= function($location,teleScope,$rootScope,$timeout,track,$log,$translate,storage,proxyManager,LOCALES)
	{
		$translate["use"](storage["get"]("currentLocale",LOCALES["preferredLocale"]));$timeout(function()
		{
			return track["pv"]('/chrome-extension/popup')
		}
		,500);teleScope["link"]('needDownloadNewVer');$rootScope.$watch("needDownloadNewVer",function(e)
		{
			if($rootScope["needDownloadNewVer"])
			{
			}
		}
		);teleScope["link"]('conflicts');$location["path"]("/menu");return $rootScope.$watch("conflicts",function(conflicts)
		{
			if(conflicts!= null&& conflicts["length"]> 0)
			{
				if($location["path"]()!== "/conflict")
				{
					return $location["path"]('/conflict')
				}
				else 
				{
					return $location["path"]("/menu")
				}
			}
		}
		,true)
	}
	;AddController= function($scope,$routeParams,$location,$log,pageManager,domainManager)
	{
		$log["log"]('route',$scope,$routeParams);$scope["name"]= $routeParams["name"];$scope["routeToMenu"]= (function(_this)
		{
			return function()
			{
				return $location["path"]("/menu")
			}
		}
		)(this);return $scope["addDomain"]= (function(_this)
		{
			return function()
			{
				if($scope["name"]&& __indexOf["call"]($scope["name"],'.')>= 0)
				{
					domainManager["add"]($scope["name"])
				}
				return pageManager["reloadCurrentTab"](window["close"])
			}
		}
		)(this)
	}
	;ConflictController= function($scope,$rootScope,$window,pageManager)
	{
		return $scope["extensions"]= function()
		{
			return $rootScope["conflicts"]
		}
		,$scope["openExtensionPage"]= (function(_this)
		{
			return function(id)
			{
				var url;
				url= 'chrome://extensions';if(id)
				{
					url+= "/?id="+ id
				}
				return pageManager["openUrl"](url,$window["close"])
			}
		}
		)(this),$scope["disableAll"]= function()
		{
			return function()
			{
				var extension,i,extensions,rets;
				extensions= extensions= $scope["extensions"]();rets= [];for(i= 0;i< extensions["length"];i++)
				{
					extension= extensions[i];rets["push"](chrome["management"]["setEnabled"](extension["id"],false))
				}
				return rets
			}
		}
		(this)
	}
	;FooterController= function($scope,$rootScope,teleScope,ROLES)
	{
		$scope["show"]= false;return teleScope["link"]('user')["then"](function()
		{
			return $scope["vip"]= $rootScope["user"]["role"]=== ROLES["VIP"]
		}
		)
	}
	;libs= ['underscore','angular','lang','jquery','popup/module','ngRoute',"services/storage",'ngAnimate','angular_translate','angular_strap','angular_strap_tpl','ngSanitize','services/domainUtils','services/teleScope','services/pageManager','services/domainManager','services/proxyManager','services/track','directives/languageSelect','core/filters/durationToNow','popup/controllers/MenuController'];require(['config'],function()
	{
		return requireWithRetry(libs,function(_,angular,lang,jquery)
		{
			var popup=angular["module"]("popup");
			popup["config"](function($compileProvider,$routeProvider,$translateProvider)
			{
				lang["config"]($translateProvider);$compileProvider["aHrefSanitizationWhitelist"](/^\s*(https?|ftp|mailto|chrome):/);$compileProvider["imgSrcSanitizationWhitelist"](/^\s*(https?|ftp|mailto|chrome):/);return $routeProvider["when"]('/menu',{templateUrl:'/partials/popup/_menu.html',controller:'MenuController',resolve:{currentTab:function(teleScope)
				{
					return teleScope["link"]('currentTab')
				}
				,blockedDomains:function(teleScope)
				{
					return teleScope["link"]('blockedDomains')
				}
				,user:function(teleScope)
				{
					return teleScope["link"]('user')
				}
				,domains:function(teleScope)
				{
					return teleScope["linkList"]('domains')
				}
				,rejectDomains:function(teleScope)
				{
					return teleScope["linkList"]('rejectDomains')
				}
				,ips:function(teleScope)
				{
					return teleScope["linkList"]('ips')
				}
				,rejectIps:function(teleScope)
				{
					return teleScope["linkList"]('rejectIps')
				}
				}})["when"]('/add/:name',{templateUrl:'/partials/popup/_add.html',controller:'AddController'})["when"]('/conflict',{templateUrl:'/partials/popup/_conflict.html',controller:'ConflictController',resolve:{conflicts:function(teleScope)
				{
					return teleScope["link"]('conflicts')
				}
				}})["otherwise"]({redirectTo:'/menu'})
			}
			);popup["run"](popupRun);popup["controller"]({AddController:AddController,ConflictController:ConflictController,FooterController:FooterController});return angular["element"](document)["ready"](function()
			{
				return angular["bootstrap"](document,['popup'])
			}
			)
		}
		)
	}
	)
}
)["call"](this)