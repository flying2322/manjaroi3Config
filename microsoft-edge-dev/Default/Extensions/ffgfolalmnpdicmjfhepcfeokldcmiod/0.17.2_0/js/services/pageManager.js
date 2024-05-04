(function()
{
	var pageManager;
	pageManager= function($window,$rootScope,$log)
	{
		this["getFingerPrint"]= function()
		{
			return "pageManager-"+ (this["reloadCurrentTab"].toString()["length"]+ this["openOptions"].toString()["length"]+ this["openUrl"].toString()["length"])
		}
		;this["reloadCurrentTabAndClosePopup"]= function()
		{
			return chrome["tabs"]["query"]({active:true,currentWindow:true},(function(_this)
			{
				return function(tabs)
				{
					var tab,_i,_len,_results;
					_results= [];for(_i= 0,_len= tabs["length"];_i< _len;_i++)
					{
						tab= tabs[_i];_results["push"](chrome["tabs"]["reload"](tab["id"],{url:tab["url"]},function()
						{
							return $window["close"]()
						}
						))
					}
					return _results
				}
			}
			)(this))
		}
		;this["reloadCurrentTab"]= function(callback)
		{
			return chrome["tabs"]["query"]({active:true,currentWindow:true},function(tabs)
			{
				var tab,i;
				var _results=[];
				var len=tabs["length"];
				for(i= 0;i< len;i++)
				{
					tab= tabs[i];_results["push"](chrome["tabs"]["update"](tab["id"],{url:tab["url"]},function()
					{
						return "function"==  typeof callback?callback():void(0)
					}
					))
				}
				return _results
			}
			)
		}
		;this["openOptions"]= (function(_this)
		{
			return function(tail,callback)
			{
				var fullUrl,url;
				if(tail== null)
				{
					tail= ''
				}
				url= "options.html";fullUrl= chrome["runtime"]["getURL"](url);return chrome["tabs"]["getAllInWindow"](null,function(tabs)
				{
					var tab,_i,_len;
					for(_i= 0,_len= tabs["length"];_i< _len;_i++)
					{
						tab= tabs[_i];if(tab["url"]["indexOf"](fullUrl)=== 0)
						{
							chrome["tabs"]["update"](tab["id"],{url:fullUrl+ tail,highlighted:true},function()
							{
								return  typeof callback=== "function"?callback():void(0)
							}
							);return
						}
					}
					return chrome["tabs"]["getSelected"](null,function(tab)
					{
						chrome["tabs"]["create"]({url:url+ tail,index:tab["index"]+ 1});return  typeof callback=== "function"?callback():void(0)
					}
					)
				}
				)
			}
		}
		)(this);this["openLogin"]= (function(_this)
		{
			return function(source,callback)
			{
				var fullUrl,tail,url;
				if(source== null)
				{
					source= ''
				}
				url= "login.html";fullUrl= chrome["runtime"]["getURL"](url);tail= source?"#?source="+ source:'';return chrome["tabs"]["getAllInWindow"](null,function(tabs)
				{
					var tab,_i,_len;
					for(_i= 0,_len= tabs["length"];_i< _len;_i++)
					{
						tab= tabs[_i];if(tab["url"]["indexOf"](fullUrl)=== 0)
						{
							chrome["tabs"]["update"](tab["id"],{url:fullUrl+ tail,highlighted:true},function()
							{
								return  typeof callback=== "function"?callback():void(0)
							}
							);return
						}
					}
					return chrome["tabs"]["getSelected"](null,function(tab)
					{
						chrome["tabs"]["create"]({url:url+ tail,index:tab["index"]+ 1});return  typeof callback=== "function"?callback():void(0)
					}
					)
				}
				)
			}
		}
		)(this);this["gotoOptions"]= (function(_this)
		{
			return function(tail)
			{
				var fullUrl,url;
				if(tail== null)
				{
					tail= ''
				}
				url= "options.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return location["href"]= fullUrl
			}
		}
		)(this);this["gotoLogin"]= function(source)
		{
			var fullUrl,url;
			if(source== null)
			{
				source= ''
			}
			url= "login.html";fullUrl= chrome["runtime"]["getURL"](url);if(source)
			{
				fullUrl+= "#?source="+ source
			}
			return location["href"]= fullUrl
		}
		;this["gotoSignup"]= function(source)
		{
			var fullUrl,url;
			if(source== null)
			{
				source= ''
			}
			url= "login.html";fullUrl= chrome["runtime"]["getURL"](url);fullUrl+= "#/register?source=force-login";return location["href"]= fullUrl
		}
		;this["gotoUpgrade"]= function(tail)
		{
			var fullUrl,url;
			if(tail== null)
			{
				tail= ''
			}
			url= "upgrade.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return location["href"]= fullUrl
		}
		;this["gotoKickSessions"]= function(tail)
		{
			var fullUrl,url;
			if(tail== null)
			{
				tail= ''
			}
			url= "kick_sessions.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return location["href"]= fullUrl
		}
		;this["getURL"]= function(url)
		{
			var fullUrl=chrome["runtime"]["getURL"](url);
			return fullUrl
		}
		;this["activateUrl"]= function(url,callback)
		{
			var ops;
			if(url["indexOf"]("://")===  -1)
			{
				url= chrome["runtime"]["getURL"](url)
			}
			ops= url["split"]("#")[0];return chrome["tabs"]["query"]({currentWindow:true,url:ops+ "*"},function(tabs)
			{
				if(tabs&& tabs["length"]> 0)
				{
					chrome["tabs"]["update"](tabs[0]["id"],{url:url,highlighted:true},function()
					{
						return "function"==  typeof callback?callback():void(0)
					}
					)
				}
				else 
				{
					chrome["tabs"]["getSelected"](null,function(tab)
					{
						chrome["tabs"]["create"]({url:url,index:tab["index"]+ 1});return  typeof callback=== "function"?callback():void(0)
					}
					)
				}
			}
			)
		}
		;this["closeUrl"]= function(url)
		{
			if(url["indexOf"]("://")===  -1)
			{
				url= chrome["runtime"]["getURL"](url)
			}
			return chrome["tabs"]["query"]({url:url+ "*"},function()
			{
				return function(r)
				{
					var t;
					return chrome["tabs"]["remove"](function()
					{
						var n,e,u;
						for(u= [],n= 0,e= r["length"];e> n;n++)
						{
							t= r[n],u["push"](t["id"])
						}
						return u
					}
					())
				}
			}
			(this))
		}
		;this["redirectUrl"]= function(url)
		{
			if(url["indexOf"]("://")===  -1)
			{
				url= chrome["runtime"]["getURL"](url)
			}
			return location["href"]= url
		}
		;this["gotoGuide"]= function(tail)
		{
			var fullUrl,url;
			if(tail== null)
			{
				tail= ''
			}
			url= "guide.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return location["href"]= fullUrl
		}
		;this["openGuide"]= function(tail)
		{
			var fullUrl,url;
			if(tail== null)
			{
				tail= ''
			}
			url= "guide.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return this["openUrl"](fullUrl)
		}
		;this["openLock"]= function(tail)
		{
			var fullUrl,url;
			if(tail== null)
			{
				tail= ''
			}
			url= "lock.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return this["openUrl"](fullUrl)
		}
		;this["openKickSessions"]= function(tail)
		{
			var fullUrl,url;
			if(tail== null)
			{
				tail= ''
			}
			url= "kick_sessions.html";fullUrl= chrome["runtime"]["getURL"](url)+ tail;return this["openUrl"](fullUrl)
		}
		;this["openUrl"]= (function(_this)
		{
			return function(url,callback)
			{
				return chrome["tabs"]["getSelected"](null,function(tab)
				{
					chrome["tabs"]["create"]({url:url,index:tab["index"]+ 1});return  typeof callback=== "function"?callback():void(0)
				}
				)
			}
		}
		)(this);this["init"]= (function(_this)
		{
			return function()
			{
				return $log["info"]('pageManager Ready!')
			}
		}
		)(this);return this
	}
	;define(['../app'],function(app)
	{
		return app["service"]('pageManager',['$window','$rootScope','$log',pageManager])
	}
	)
}
)["call"](this)