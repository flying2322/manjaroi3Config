(function()
{
	var libs,SettingsControllerOps;
	libs= ["angular","jquery","preference/module","services/pageManager","services/userManager","services/proxyManager","services/teleScope","services/storage"],SettingsControllerOps= function(angular,jquery)
	{
		var SettingsController,i;
		return SettingsController= function($scope,$rootScope,$translate,$sce,$window,$location,$log,storage,pageManager,proxyManager,teleScope,MODES,ROLES,SERVERS_MODES,DATA_SAVING_MODES)
		{
			$scope["GUEST"]= $rootScope["user"]["role"]=== ROLES["GUEST"];$scope["anonymous"]= $rootScope["user"]["profile"]["anonymous"];$scope["connected_server_num"]= 0;$scope["showServerSelect"]= false;$scope["displayServers"]= [];teleScope["link"]('mode')["then"](function()
			{
				var mode=storage["get"]("mode",MODES.AUTO);
				$rootScope["mode"]= mode
			}
			);teleScope["link"]('servers_mode')["then"](function()
			{
				var servers_mode=storage["get"]("servers_mode",'');
				$rootScope["servers_mode"]= servers_mode
			}
			);teleScope["link"]('servers_order')["then"](function()
			{
				var servers_order=storage["get"]("servers_order",[]);
				$rootScope["servers_order"]= servers_order
			}
			);teleScope["link"]('isp_mode')["then"](function()
			{
				var isp_mode=storage["get"]("isp_mode",'');
				$rootScope["isp_mode"]= isp_mode
			}
			);teleScope["link"]('data_saving_mode')["then"](function()
			{
				var data_saving_mode=storage["get"]("data_saving_mode",'');
				$rootScope["data_saving_mode"]= data_saving_mode
			}
			);teleScope["link"]('proxies')["then"](function()
			{
			}
			);$rootScope.$watch('proxies',function()
			{
				var servers=storage["get"]("proxies",[]);
				var cal_servers=proxyManager["displayProxies"](servers,$rootScope["servers_mode"],$rootScope["servers_order"]);
				$rootScope["servers"]= cal_servers
			}
			);$rootScope["getPrimaryServer"]= function()
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
			;$scope["showDomainModeTips"]= function(n)
			{
				if("auto"=== n)
				{
					return $scope["domain_mode_tips"]= $translate["instant"]("popup.menu.auto.desc")
				}
				else 
				{
					if("always"=== n)
					{
						return $scope["domain_mode_tips"]= $translate["instant"]("popup.menu.always.desc")
					}
					else 
					{
						if("never"=== n)
						{
							return $scope["domain_mode_tips"]= $translate["instant"]("popup.menu.never.desc")
						}
						else 
						{
							$scope["domain_mode_tips"]= null
						}
					}
				}
			}
			;$scope["makeLowerCase"]= function(string)
			{
				return string["toLowerCase"]()
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
			;$scope["showISPModeTips"]= function(n)
			{
				if("CT"=== n)
				{
					return $scope["isp_mode_tips"]= $translate["instant"]("popup.settings.isp_ct.desc")
				}
				else 
				{
					if("CU"=== n)
					{
						return $scope["isp_mode_tips"]= $translate["instant"]("popup.settings.isp_cu.desc")
					}
					else 
					{
						if("CM"=== n)
						{
							return $scope["isp_mode_tips"]= $translate["instant"]("popup.settings.isp_cm.desc")
						}
						else 
						{
							if("CE"=== n)
							{
								return $scope["isp_mode_tips"]= $translate["instant"]("popup.settings.isp_ce.desc")
							}
							else 
							{
								if("none"=== n)
								{
									return $scope["isp_mode_tips"]= $translate["instant"]("popup.settings.isp_none.desc")
								}
								else 
								{
									$scope["isp_mode_tips"]= null
								}
							}
						}
					}
				}
			}
			;$scope["showDataSavingModeTips"]= function(n)
			{
				if(DATA_SAVING_MODES["FULL"]=== n)
				{
					return $scope["data_saving_mode_tips"]= $translate["instant"]("popup.settings.data_saving_full.desc")
				}
				else 
				{
					if(DATA_SAVING_MODES["HALF"]=== n)
					{
						return $scope["data_saving_mode_tips"]= $translate["instant"]("popup.settings.data_saving_half.desc")
					}
					else 
					{
						if(DATA_SAVING_MODES["QUARTER"]=== n)
						{
							return $scope["data_saving_mode_tips"]= $translate["instant"]("popup.settings.data_saving_quarter.desc")
						}
						else 
						{
							if(DATA_SAVING_MODES["STOP"]=== n)
							{
								return $scope["data_saving_mode_tips"]= $translate["instant"]("popup.settings.data_saving_stop.desc")
							}
							else 
							{
								$scope["data_saving_mode_tips"]= null
							}
						}
					}
				}
			}
			;$scope["showServersModeTips"]= function(n)
			{
				if(SERVERS_MODES["AUTO"]=== n)
				{
					return $scope["servers_mode_tips"]= $translate["instant"]("popup.settings.servers_mode_auto.desc")
				}
				else 
				{
					if(SERVERS_MODES["MANUAL"]=== n)
					{
						return $scope["servers_mode_tips"]= $translate["instant"]("popup.settings.servers_mode_manual.desc")
					}
					else 
					{
						$scope["servers_mode_tips"]= null
					}
				}
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
					var html=server["name"]+ '<br/>'+ specials+ $translate["instant"]('options.server_list.city')+ ": "+ $translate["instant"]('city.'+ server["city"])+ '<br/>'+ $translate["instant"]('options.server_list.speed')+ ": "+ server["speed"]["toFixed"](0)+ '<br/>'+ $translate["instant"]('options.server_list.status')+ ": "+ server["score"]["toFixed"](1)+ '<br/>'+ '<div class=\"progress\">'+ '<div  role=\"progressbar\" aria-valuenow=\"'+ stability+ '\" aria-valuemin=\"0\" aria-valuemax=\"100\"'+ 'style=\"width:'+ stability+ '%\"'+ 'class=\"'+ progress_class+ ' popup-progress-bar\">';
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
			;$scope["hideServersSelect"]= function()
			{
				$scope["showServerSelect"]= false
			}
			;$scope["toggleServersSelect"]= function()
			{
				$scope["displayServers"]= $scope["getDisplayServers"]();$scope["showServerSelect"]=  !$scope["showServerSelect"]
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
			;$scope["openOptions"]= function(mode)
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
			;$scope["switchISPMode"]= function(mode)
			{
				if(mode!== $rootScope["isp_mode"])
				{
					$rootScope["isp_mode"]= mode
				}
				return false
			}
			;$scope["switchDataSavingModeTips"]= function(mode)
			{
				if(mode!== $rootScope["data_saving_mode"])
				{
					$rootScope["data_saving_mode"]= mode
				}
				return false
			}
			;$scope["switchServersMode"]= function(mode)
			{
				if(mode!== $rootScope["servers_mode"])
				{
					$rootScope["servers_mode"]= mode
				}
				return false
			}
			;$scope["gotoPopup"]= function()
			{
				document["location"]["href"]= chrome["extension"]["getURL"]("/popup.html")
			}
		}
		,angular["module"]("preference")["controller"]("SettingsController",['$scope','$rootScope','$translate','$sce','$window','$location','$log','storage','pageManager','proxyManager','teleScope','MODES','ROLES','SERVERS_MODES','DATA_SAVING_MODES',SettingsController])
	}
	,define(libs,SettingsControllerOps)
}
)["call"](this)