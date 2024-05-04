(function()
{
	var upgradeManager;
	upgradeManager= function($rootScope,$log,server,teleScope,proxyManager,domainManager,userManager,storage)
	{
		$rootScope["needUpgrade"]= false;$rootScope["newestVerInt"]= 0;$rootScope["needDownloadNewVer"]= false;$rootScope["clientCompromised"]= false;this["init"]= function()
		{
			teleScope["link"]('needUpgrade');teleScope["link"]('newestVerInt');teleScope["link"]('needDownloadNewVer');teleScope["link"]('clientCompromised')
		}
		;this["onNewestVer"]= function(newestVer)
		{
			if(!newestVer)
			{
				return
			}
			var newestVerInt=0;
			var newestArray=newestVer["split"](".");
			if(newestArray["length"]>= 3)
			{
				var major=parseInt(newestArray[0]);
				var minor=parseInt(newestArray[1]);
				var revision=parseInt(newestArray[2]);
				newestVerInt= major* 100+ minor;$rootScope["newestVerInt"]= newestVerInt* 100+ revision;storage["set"]('newestVerInt',$rootScope["newestVerInt"])
			}
			else 
			{
				return
			}
			var ver=storage["get"]('ver',newestVer);
			var res=ver["split"](".");
			if(res["length"]>= 3)
			{
				var ver_major=parseInt(res[0]);
				var ver_minor=parseInt(res[1]);
				var ver_revision=parseInt(res[2]);
				var ver_int=ver_major* 100+ ver_minor;
				if(newestVerInt> ver_int)
				{
					$rootScope["needDownloadNewVer"]= true
				}
			}
		}
		;this["newestVer"]= function()
		{
			if($rootScope["newestVerInt"]== 0)
			{
				$rootScope["newestVerInt"]= storage["get"]('newestVerInt',0)
			}
			return $rootScope["newestVerInt"]
		}
		;this["onVerExpire"]= function(min_ver)
		{
			$rootScope["needUpgrade"]= true
		}
		;this["onClientCompromised"]= function()
		{
			$rootScope["clientCompromised"]= true
		}
		;return this
	}
	;define(['../app','./server','./proxyManager','./domainManager','./teleScope','./userManager','./storage'],function(app)
	{
		return app["service"]('upgradeManager',upgradeManager)
	}
	)
}
)["call"](this)