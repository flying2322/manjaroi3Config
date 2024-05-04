(function()
{
	var libs,MenuControllerOps;
	libs= ["angular","jquery","popup/module","services/userManager","services/teleScope","services/storage","services/generate","services/invitationManager","services/timeUtils","services/pageManager","services/proxyManager","services/upgradeManager",'services/track','services/validate'],MenuControllerOps= function(angular,jquery)
	{
		var MenuController,i;
		return MenuController= function($scope,$rootScope,$window,$location,$translate,$log,$sce,$timeout,storage,pageManager,domainUtils,domainManager,proxyManager,teleScope,validate,MODES,SERVERS_MODES,ROLES,WS_RETRIES)
		{
			var topDomain;
			var tabDomain;
			var showModeTips;
			$scope["showServerSelect"]= false;$scope["hover_server_tips"]= null;$scope["blockedDomains"]= [];$scope["rejectedDomains"]= [];$scope["VIPLeft"]= 0;$scope["VIPUntil"]= 0;$scope["VIPDuration"]= 0;$scope["GUEST"]= $rootScope["user"]["role"]=== ROLES["GUEST"];$scope["currentDomain"]= '';$scope["currentDomainIsIp"]= false;$scope["currentDomainIsAdded"]= 'no';$scope["addTooltip"]= {title:'Add momain',checked:false};$scope["state"]= 'normal';$scope["anonymous"]= $rootScope["user"]["profile"]["anonymous"];$scope["connected_server_num"]= 0;$rootScope["displayServers"]= [];teleScope["link"]('servers_mode')["then"](function()
			{
				var servers_mode=storage["get"]("servers_mode",'');
				$rootScope["servers_mode"]= servers_mode
			}
			);teleScope["link"]('servers_order')["then"](function()
			{
				var servers_order=storage["get"]("servers_order",[]);
				$rootScope["servers_order"]= servers_order
			}
			);teleScope["link"]('proxies')["then"](function()
			{
				var servers=storage["get"]("proxies",[]);
				var cal_servers=proxyManager["displayProxies"](servers,$rootScope["servers_mode"],$rootScope["servers_order"]);
				$rootScope["servers"]= cal_servers;$rootScope["connected_server_num"]= $rootScope["servers"]["length"]
			}
			);$rootScope.$watch('proxies',function()
			{
				var servers=storage["get"]("proxies",[]);
				var cal_servers=proxyManager["displayProxies"](servers,$rootScope["servers_mode"],$rootScope["servers_order"]);
				$rootScope["servers"]= cal_servers;$rootScope["connected_server_num"]= $rootScope["servers"]["length"]
			}
			);$scope["server_tips"]= "server_tips";$scope["toggleServersSelect"]= function()
			{
				$rootScope["displayServers"]= $scope["getDisplayServers"]();$scope["showServerSelect"]=  !$scope["showServerSelect"]
			}
			;$scope["hideServersSelect"]= function()
			{
				$scope["showServerSelect"]= false
			}
			;$scope["getTopServer"]= function()
			{
				var servers=storage["get"]("proxies",[]);
				var server=proxyManager["getTopProxy"](servers,$rootScope["servers_order"],$rootScope["servers_mode"]);
				if(server== null)
				{
					if($rootScope["servers"]&& $rootScope["servers"]["length"])
					{
						return $rootScope["servers"][0]
					}
				}
				return server
			}
			;$scope["selectServer"]= function(top)
			{
				$scope["showServerSelect"]= false;var ret=[];
				var i=0;
				var servers=$scope["getDisplayServers"]();
				ret["push"](top["server_id"]);for(;i< servers["length"];i++)
				{
					var server=servers[i];
					if(server["server_id"]=== top["server_id"])
					{
						continue
					}
					ret["push"](server["server_id"])
				}
				$rootScope["servers_order"]= ret;$scope["hover_server_tips"]= null;$scope["displayServers"]= $scope["getDisplayServers"]()
			}
			;$scope["showServersTips"]= function(server)
			{
				var i;
				if(server)
				{
					var progress_class='';
					if(server["stability"]< 0.5)
					{
						progress_class= 'progress-danger'
					}
					else 
					{
						if(server["stability"]>= 0.5&& server["stability"]< 0.9)
						{
							progress_class= 'progress-warning'
						}
						else 
						{
							progress_class= 'progress-normal'
						}
					}
					var stability=(100* server["stability"])["toFixed"](1);
					var specials='';
					if(server["specials"])
					{
						specials= $translate["instant"]('options.server_list.specials')+ ": "+ (server["specials"]?(server["specials"]["charAt"](0)["toUpperCase"]()+ server["specials"]["slice"](1)):'')+ '<br/>'
					}
					var html=server["name"]+ '<br/>'+ $translate["instant"]('options.server_list.city')+ ": "+ $translate["instant"]('city.'+ server["city"])+ '<br/>'+ $translate["instant"]('options.server_list.speed')+ ": "+ server["speed"]["toFixed"](0)+ '<br/>'+ $translate["instant"]('options.server_list.status')+ ": "+ server["score"]["toFixed"](1)+ '<br/>'+ '<div class=\"progress\">'+ '<div  role=\"progressbar\" aria-valuenow=\"'+ stability+ '\" aria-valuemin=\"0\" aria-valuemax=\"100\"'+ 'style=\"width:'+ stability+ '%\"'+ 'class=\"'+ progress_class+ ' popup-progress-bar\">';
					if(stability> 50)
					{
						html+= '<span>'+ $translate["instant"]('options.server_list.stability')+ ":"+ stability+ '%</span>'
					}
					else 
					{
						html+= '<span>'+ stability+ '%</span>'
					}
					html+= '</div>'+ '</div>';$scope["hover_server_tips"]= $sce["trustAsHtml"](html);return
				}
				return $scope["hover_server_tips"]= null
			}
			;$scope["selectServer"]= function(top)
			{
				$scope["hover_server_tips"]= null;$rootScope["servers_mode"]= SERVERS_MODES["MANUAL"];var ret=[];
				var i=0;
				var servers=$scope["getDisplayServers"]();
				ret["push"](top["server_id"]);for(;i< servers["length"];i++)
				{
					var server=servers[i];
					if(server["server_id"]=== top["server_id"])
					{
						continue
					}
					ret["push"](server["server_id"])
				}
				$rootScope["servers_order"]= ret;$rootScope["displayServers"]= $scope["getDisplayServers"]()
			}
			;$scope["getDisplayServers"]= function()
			{
				var serverss=storage["get"]("proxies",[]);
				var servers=proxyManager["displayProxies"](serverss,$rootScope["servers_mode"],$rootScope["servers_order"]);
				var ret=[];
				var i=0;
				if(!servers|| servers["length"]== 0)
				{
					return ret
				}
				var top=$scope["getTopServer"]();
				if(!top)
				{
					return ret
				}
				for(;i< servers["length"];i++)
				{
					var server=servers[i];
					if(server["server_id"]=== top["server_id"])
					{
						continue
					}
					ret["push"](server)
				}
				return ret
			}
			;teleScope["link"]('mode')["then"](function()
			{
				var mode=storage["get"]("mode",MODES.AUTO);
				$rootScope["mode"]= mode
			}
			);teleScope["link"]('averageStability')["then"](function()
			{
				var averageStability=storage["get"]("averageStability",0.5);
				$rootScope["averageStability"]= averageStability
			}
			);teleScope["link"]('ws_retrial')["then"](function()
			{
			}
			);$rootScope["stability"]= function()
			{
				var stability=(100* $rootScope["averageStability"]* ($rootScope["ws_retrial"]<= WS_RETRIES?((WS_RETRIES- $rootScope["ws_retrial"])* (1.0/ WS_RETRIES)):1))["toFixed"](1);
				return stability
			}
			;$scope["makeLowerCase"]= function(string)
			{
				return string["toLowerCase"]()
			}
			;$rootScope["getPrimaryServer"]= function()
			{
				if(!$rootScope["servers"]|| $rootScope["servers"]["length"]== 0)
				{
					return null
				}
				var i=0;
				var primary;
				for(i= 0;i< $rootScope["servers"]["length"];i++)
				{
					if($rootScope["servers"][i]["primary"])
					{
						primary= $rootScope["servers"][i];return primary
					}
				}
				return null
			}
			;showModeTips= function(n)
			{
				$log["log"]("showModeTips");if($rootScope["user"]["role"]!== ROLES["VIP"])
				{
					if("auto"=== n)
					{
						return $scope["tips"]= $translate["instant"]("popup.menu.auto.desc_novip")
					}
					else 
					{
						if("always"=== n)
						{
							return $scope["tips"]= $translate["instant"]("popup.menu.always.desc_novip")
						}
						else 
						{
							if("never"=== n)
							{
								return $scope["tips"]= $translate["instant"]("popup.menu.never.desc_novip")
							}
						}
					}
				}
				else 
				{
					if("auto"=== n)
					{
						return $scope["tips"]= $translate["instant"]("popup.menu.auto.desc")
					}
					else 
					{
						if("always"=== n)
						{
							return $scope["tips"]= $translate["instant"]("popup.menu.always.desc")
						}
						else 
						{
							if("never"=== n)
							{
								return $scope["tips"]= $translate["instant"]("popup.menu.never.desc")
							}
						}
					}
				}
			}
			;$scope["showModeTips"]= showModeTips;topDomain= function(tab)
			{
				var host;
				if(!(tab!= null?tab["url"]:void(0)))
				{
					return ''
				}
				host= domainUtils["parseUri"](tab["url"])["host"];if(validate["ip"](host))
				{
					return host
				}
				if(!validate["domain"](host))
				{
					return ''
				}
				return domainUtils["topDomain"](host)
			}
			;tabDomain= function(tab)
			{
				var host;
				if(!(tab!= null?tab["url"]:void(0)))
				{
					return ''
				}
				host= domainUtils["parseUri"](tab["url"])["host"];if(validate["ip"](host))
				{
					return host
				}
				if(!validate["domain"](host))
				{
					return ''
				}
				return host
			}
			;$rootScope["isGuest"]= function()
			{
				return $rootScope["user"]["role"]=== ROLES["GUEST"]
			}
			;$rootScope["isUserOrAbove"]= function()
			{
				return !($rootScope["user"]["role"]=== ROLES["GUEST"]|| $rootScope["user"]["role"]=== ROLES["HACKER"])
			}
			;$rootScope["isVIP"]= function()
			{
				return $rootScope["user"]["role"]=== ROLES["VIP"]
			}
			;$scope["init"]= function()
			{
				var name,i,current,currentIsIp,rejected,contained;
				$scope["blockedDomains"]= (function()
				{
					var _i,_len,_ref,_results;
					_ref= $rootScope["blockedDomains"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
					{
						name= _ref[_i];if(!validate["ip"](name))
						{
							if(domainManager["coversRejectDomain"](name))
							{
								var coverName=domainManager["getCoversRejectDomain"](name);
								$scope["rejectedDomains"]["push"]({name:coverName,selected:true});continue
							}
						}
						else 
						{
							if(domainManager["coversRejectIP"](name))
							{
								var cidr=domainManager["getCoversRejectIP"](name);
								$scope["rejectedDomains"]["push"]({name:cidr,selected:true});continue
							}
						}
						_results["push"]({name:name,selected:true})
					}
					return _results
				}
				)();$scope["VIPUntil"]= $rootScope["user"]["role"]=== ROLES["VIP"]?($rootScope["user"]["profile"]["vip_duration"]+ $rootScope["user"]["profile"]["sys_time"]):0;$scope["VIPLeft"]= $scope["VIPUntil"];$scope["VIPDuration"]= $rootScope["user"]["role"]=== ROLES["VIP"]?$rootScope["user"]["profile"]["vip_duration"]+ ( new Date())["getTime"]():0;$rootScope.$watch("currentTab",function(tab)
				{
					$scope["currentDomain"]= topDomain($rootScope["currentTab"]);$scope["currentFavIconUrl"]= null!= tab?tab["favIconUrl"]:void(0)
				}
				,true);contained= false;rejected= false;current= tabDomain($rootScope["currentTab"]);if($scope["rejectedDomains"]["length"]+ $scope["blockedDomains"]["length"]> 0)
				{
					$scope["currentDomain"]= current
				}
				else 
				{
					$scope["currentDomain"]= topDomain($rootScope["currentTab"])
				}
				$scope["currentDomainIsIp"]= validate["ip"]($scope["currentDomain"]);if(!$scope["currentDomainIsIp"])
				{
					$scope["currentDomainIsAdded"]= domainManager["coversDomain"]($scope["currentDomain"])?'yes':'no'
				}
				else 
				{
					$scope["currentDomainIsAdded"]= domainManager["coversIP"]($scope["currentDomain"])?'yes':'no'
				}
				if(current&& current!== '')
				{
					currentIsIp= validate["ip"](current);if(!currentIsIp)
					{
						if(domainManager["coversRejectDomain"](current))
						{
							rejected= true;for(i= 0;i< $scope["rejectedDomains"]["length"];i++)
							{
								if(domainManager["coversRejectDomain"]($scope["rejectedDomains"][i]["name"]))
								{
									contained= true;break
								}
							}
						}
					}
					else 
					{
						if(domainManager["coversRejectIP"](current))
						{
							rejected= true;contained= true
						}
					}
					if(rejected)
					{
						if(!contained)
						{
							$scope["rejectedDomains"]["push"]({name:current,selected:true});console["log"]("$scope.rejectedDomains.push")
						}
					}
				}
				console["log"]("$scope.rejectedDomains.push:"+ $scope["rejectedDomains"]["length"]);return $scope["state"]= ($scope["rejectedDomains"]["length"]+ $scope["blockedDomains"]["length"])> 0?'blocked':'normal'
			}
			;$scope["init"]();$scope["openOptions"]= function(mode)
			{
				if(mode== null)
				{
					mode= ''
				}
				if(mode)
				{
					return pageManager["openOptions"]("#/servers?source="+ mode,$window["close"])
				}
				else 
				{
					return pageManager["openOptions"]('#/servers',$window["close"])
				}
			}
			;$scope["switchMode"]= function(mode)
			{
				if(mode!== $rootScope["mode"])
				{
					if(mode=== MODES["ALWAYS"]&& $rootScope["user"]["role"]!== ROLES["VIP"])
					{
						$scope["openOptions"]('novip')
					}
					else 
					{
						$rootScope["mode"]= mode
					}
				}
				return false
			}
			;$scope["addDomain"]= function(name)
			{
				if(validate["ip"](name)|| validate["cidr"](name))
				{
					domainManager["addIp"](name)
				}
				else 
				{
					domainManager["add"](name)
				}
				return pageManager["reloadCurrentTab"](window["close"])
			}
			;$scope["deleteDomain"]= function(name)
			{
				if(validate["ip"](name)|| validate["cidr"](name))
				{
					domainManager["delIp"](name)
				}
				else 
				{
					domainManager["del"](name)
				}
				return pageManager["reloadCurrentTab"](window["close"])
			}
			;$scope["addSelectedDomains"]= function()
			{
				var name,names,_i,_len;
				names= _["pluck"](_["where"]($scope["blockedDomains"],{selected:true}),'name');for(_i= 0,_len= names["length"];_i< _len;_i++)
				{
					name= names[_i];if(!validate["ip"](name))
					{
						if(domainManager["coversRejectDomain"](name))
						{
							continue
						}
					}
					else 
					{
						if(domainManager["coversRejectIP"](name))
						{
							continue
						}
					}
					if(validate["ip"](name))
					{
						domainManager["addIp"](name)
					}
					else 
					{
						domainManager["add"](name)
					}
				}
				return $timeout(function()
				{
					return pageManager["reloadCurrentTab"](window["close"])
				}
				,500)
			}
			;$scope["removeSelectedDomains"]= function()
			{
				var name,names,_i,_len;
				names= _["pluck"](_["where"]($scope["blockedDomains"],{selected:true}),'name');for(_i= 0,_len= $scope["rejectedDomains"]["length"];_i< _len;_i++)
				{
					name= $scope["rejectedDomains"][_i];if(name["selected"])
					{
						names["push"](name["name"])
					}
				}
				for(_i= 0,_len= names["length"];_i< _len;_i++)
				{
					name= names[_i];if(!validate["ip"](name)&&  !validate["cidr"](name))
					{
						if(domainManager["coversRejectDomain"](name))
						{
							domainManager["delRejectDomain"](name)
						}
					}
					else 
					{
						if(domainManager["coversRejectIP"](name))
						{
							domainManager["delRejectIp"](name)
						}
					}
				}
				return pageManager["reloadCurrentTab"](window["close"])
			}
			;$scope["gotoPreference"]= function()
			{
				document["location"]["href"]= chrome["extension"]["getURL"]("/preference.html")
			}
			;$scope["gotoNotifications"]= function()
			{
				document["location"]["href"]= chrome["extension"]["getURL"]("/notifications.html")
			}
			;$scope["openConsole"]= function()
			{
				pageManager["openOptions"]()
			}
			;return $scope["routeToAdd"]= function()
			{
				return $location["path"]("/add/"+ $scope["currentDomain"])
			}
		}
		,angular["module"]("popup")["controller"]("MenuController",['$scope','$rootScope','$window','$location','$translate','$log','$sce','$timeout','storage','pageManager','domainUtils','domainManager','proxyManager','teleScope','validate','MODES','SERVERS_MODES','ROLES','WS_RETRIES',MenuController])
	}
	,define(libs,MenuControllerOps)
}
)["call"](this)