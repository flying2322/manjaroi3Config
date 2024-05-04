(function()
{
	var libs,OptionsPageControllerOps;
	libs= ["angular","jquery","options/module","services/userManager","services/teleScope","services/storage","services/generate","services/invitationManager","services/timeUtils","services/pageManager","services/proxyManager","services/upgradeManager",'services/track','services/domainManager','services/timeUtils'],OptionsPageControllerOps= function(angular,jquery)
	{
		var OptionsPageController=function($scope,$rootScope,$http,$translate,$sce,$modal,$log,$location,$timeout,$element,generate,localeService,userManager,teleScope,timeUtils,storage,invitationManager,pageManager,proxyManager,upgradeManager,track,domainManager,timeUtils,SERVER,MODES,SERVERS_MODES,REST_CONTEXT_PATH,ROLES,VER,GUEST_DOMAINS,LOCALES,WS_RETRIES,WS_RETRIES_FACTOR,OFFICIAL_WEBSITE)
		{
			var VIPExpireNotifyInfo,getExpireNotify,init,setExpireNotify,showExpireAlert,updateRate;
			var bounceWait;
			bounceWait= 10;$scope["currentState"]= "servers";$scope["invitationCount"]= 0;$rootScope["servers"]= [];$scope["connected_server_num"]= 0;$scope["isExpireAlertShown"]= false;$scope["ver"]= VER;$scope["showAvatarUploader"]= false;$scope["uploadProgress"]= 100;$scope["origAvatar"]= null;$scope["avatar"]= $rootScope["user"]["profile"]["avatar"]!== ''?$rootScope["user"]["profile"]["avatar"]:'../img/icon-auto_128.png';$scope["nickname"]= ($rootScope["user"]["profile"]["nickname"]&& $rootScope["user"]["profile"]["nickname"]!== '')?$rootScope["user"]["profile"]["nickname"]:'';$scope["showNickname"]= ($rootScope["user"]["profile"]["nickname"]&& $rootScope["user"]["profile"]["nickname"]!== '')?true:false;$scope["telegram"]= ($rootScope["user"]["profile"]["telegram"]&& $rootScope["user"]["profile"]["telegram"]!== '')?$rootScope["user"]["profile"]["telegram"]:'';$scope["showTelegram"]= ($rootScope["user"]["profile"]["telegram"]&& $rootScope["user"]["profile"]["telegram"]!== '')?true:false;$scope["showNicknameInput"]= false;$scope["focusNicknameInput"]= false;$scope["showTelegramInput"]= false;$scope["focusTelegramInput"]= false;$rootScope["proxies_update_time"]= 0;$rootScope["freeDomains"]= GUEST_DOMAINS;$rootScope["data_user_month"]= '';$rootScope["data_user_day"]= '';$rootScope["speed_upload"]= '';$rootScope["speed_download"]= '';$rootScope["lastTimestamp"]= timeUtils["time"]();$rootScope["session_upload_txt"]= '';$rootScope["session_download_txt"]= '';$rootScope["last_session_upload"]= 0;$rootScope["last_session_download"]= 0;$rootScope["session_dirty"]= true;$rootScope["sorting"]= false;$rootScope["destinations"]= [];$rootScope["destination"]= storage["get"]("destination",'All');$scope["VIPUntil"]= 0;$scope["VIPDuration"]= 0;$scope["fromStr"]= '';$scope["disconnectedWarningStr"]= '';$scope["showTryReconnectAlert"]= false;$scope["showAlert"]= false;$scope["showReconnect"]= true;$scope["wheat_score"]= 0;$scope["exchangable"]= false;$scope["active_invitation_code_count"]= 0;SERVER["scheme"]= storage["get"]('lastServer_scheme','');SERVER["host"]= storage["get"]('lastServer_host','');SERVER["port"]= storage["get"]('lastServer_port',0);SERVER["contextPath"]= storage["get"]('lastServer_contextPath','');$scope["SERVER_URL"]= SERVER["scheme"]+ SERVER["host"]+ SERVER["contextPath"];$rootScope["windowTitle"]= $translate["instant"]("app")+ VER,$rootScope["payUrl"]= '';VIPExpireNotifyInfo= storage["get"]('VIPExpireNotifyInfo',{});var currentLocale=storage["get"]("currentLocale",LOCALES["preferredLocale"]);
			$translate["use"](currentLocale);$scope["currentLocale"]= currentLocale;$scope["change_password_text"]= $translate["instant"]("options.layout.dropdown.change_password");$scope["dropdown"]= [{text:$translate["instant"]("options.layout.dropdown.tour_guide"),click:"showTourGuide()"},{text:$translate["instant"]("options.layout.dropdown.frequent_domains"),click:"showFrequentDomains()"},{text:$scope["change_password_text"],click:"changePassword()"},{text:$translate["instant"]("options.layout.dropdown.logout"),click:"logout()"}];$rootScope["copyToClipboard"]= function(text)
			{
				if(window["clipboardData"]&& window["clipboardData"]["setData"])
				{
					Swal({type:'success',title:$translate["instant"]('common.clipboard_copied')});return window["clipboardData"]["setData"]("Text",text)
				}
				else 
				{
					if(document["queryCommandSupported"]&& document["queryCommandSupported"]("copy"))
					{
						var textarea=document["createElement"]("textarea");
						textarea["textContent"]= text;textarea["style"]["position"]= "fixed";document["body"]["appendChild"](textarea);textarea["select"]();try
						{
							document["execCommand"]("copy");Swal({type:'success',title:$translate["instant"]('common.clipboard_copied')})
						}
						catch(ex)
						{
							console["warn"]("Copy to clipboard failed.",ex);return prompt("Copy to clipboard: Ctrl+C, Enter",text)
						}
						finally
						{
							document["body"]["removeChild"](textarea)
						}
					}
				}
			}
			;$rootScope["showTourGuide"]= function()
			{
				$scope["showTourGuide"]()
			}
			;$scope["showTourGuide"]= function()
			{
				var welcome=$translate["instant"]("options.intro.welcome");
				var menu=$translate["instant"]("options.intro.menu");
				var name_avatar=$translate["instant"]("options.intro.name_avatar");
				var vip=$translate["instant"]("options.intro.vip");
				var invitation_codes=$translate["instant"]("options.intro.invitation_codes");
				var wheat_score=$translate["instant"]("options.intro.wheat_score");
				var wheat=$translate["instant"]("options.intro.wheat");
				var servers=$translate["instant"]("options.intro.servers");
				var domain_rules=$translate["instant"]("options.intro.domain_rules");
				var bonus=$translate["instant"]("options.intro.bonus");
				var tutorial=$translate["instant"]("options.intro.tutorial");
				var mobile=$translate["instant"]("options.intro.mobile");
				var nextLabel=$translate["instant"]("options.intro.next_label");
				var prevLabel=$translate["instant"]("options.intro.prev_label");
				var skipLabel=$translate["instant"]("options.intro.skip_label");
				var doneLabel=$translate["instant"]("options.intro.done_label");
				var intro;
				if($scope["anonymous"]())
				{
					name_avatar= $translate["instant"]("options.intro.anonymouse_name_avatar");servers= $translate["instant"]("options.intro.anonymouse_servers");intro= introJs();intro["setOptions"]({showProgress:true,tooltipPosition:'right',positionPrecedence:['right','bottom','left','top'],buttonClass:'btn',nextLabel:nextLabel,prevLabel:prevLabel,skipLabel:skipLabel,doneLabel:doneLabel,steps:[{intro:welcome},{element:document["querySelector"]('#menu'),intro:menu},{element:document["querySelector"]('#name_avatar'),intro:name_avatar},{element:document["querySelector"]('#data_traffic'),intro:data_traffic},{element:document["querySelector"]('#servers'),intro:servers},{element:document["querySelector"]('#domain_rules'),intro:domain_rules},{element:document["querySelector"]('#tutorial'),intro:tutorial},{element:document["querySelector"]('#mobile'),intro:mobile}]})
				}
				else 
				{
					intro= introJs();intro["setOptions"]({showProgress:true,tooltipPosition:'right',positionPrecedence:['right','bottom','left','top'],buttonClass:'btn',nextLabel:nextLabel,prevLabel:prevLabel,skipLabel:skipLabel,doneLabel:doneLabel,steps:[{intro:welcome},{element:document["querySelector"]('#menu'),intro:menu},{element:document["querySelector"]('#name_avatar'),intro:name_avatar},{element:document["querySelector"]('#vip'),intro:vip},{element:document["querySelector"]('#wheat'),intro:wheat},{element:document["querySelector"]('#servers'),intro:servers},{element:document["querySelector"]('#domain_rules'),intro:domain_rules},{element:document["querySelector"]('#invite_codes'),intro:invitation_codes},{element:document["querySelector"]('#bonus'),intro:bonus},{element:document["querySelector"]('#tutorial'),intro:tutorial},{element:document["querySelector"]('#mobile'),intro:mobile}]})
				}
				intro["start"]()
			}
			;$scope["reloadServers"]= function()
			{
				proxyManager["reloadServers"]($rootScope["isp_mode"],$rootScope["destination"],$rootScope["env_mode"])
			}
			;$scope["avatarHoverIn"]= function()
			{
				$scope["showAvatarUploader"]= true
			}
			;$scope["avatarHoverOut"]= function()
			{
				$scope["showAvatarUploader"]= false
			}
			;$scope["onUploadProgress"]= function()
			{
				$scope["uploadProgressInterval"]= setInterval(function()
				{
					$scope["uploadProgress"]+= 1;if($scope["uploadProgress"]> 100)
					{
						return clearInterval($scope["uploadProgressInterval"])
					}
					$scope.$evalAsync()
				}
				,50)
			}
			;$scope["submitNickname"]= function(nickname)
			{
				if(!nickname|| nickname== '')
				{
					return
				}
				$http({method:'POST',url:SERVER["scheme"]+ SERVER["host"]+ SERVER["contextPath"]+ REST_CONTEXT_PATH+ "/user/nickname",headers:{'Content-Type':'application/x-www-form-urlencoded'},params:{n:nickname["hexEncode"](),s:$rootScope["user"]["profile"]["sid"],v:generate["md5"](VER)}})["success"](function(data)
				{
					var nickname;
					var error=false;
					if(data=== 'ERROR')
					{
						error= true
					}
					else 
					{
						if(data=== 'USER')
						{
							error= true
						}
						else 
						{
							if(data=== 'SESSION')
							{
								error= true
							}
							else 
							{
								nickname= data["hexDecode"]()
							}
						}
					}
					if(!error)
					{
						$scope["nickname"]= nickname
					}
					else 
					{
					}
				}
				)["error"](function(data,status)
				{
				}
				)
			}
			;$scope["submitTelegram"]= function(telegram)
			{
				if(!telegram|| telegram== '')
				{
					return
				}
				$http({method:'POST',url:SERVER["scheme"]+ SERVER["host"]+ SERVER["contextPath"]+ REST_CONTEXT_PATH+ "/user/telegram",headers:{'Content-Type':'application/x-www-form-urlencoded'},params:{t:telegram["hexEncode"](),s:$rootScope["user"]["profile"]["sid"],v:generate["md5"](VER)}})["success"](function(data)
				{
					var telegram;
					var error=false;
					if(data=== 'ERROR')
					{
						error= true
					}
					else 
					{
						if(data=== 'USER')
						{
							error= true
						}
						else 
						{
							if(data=== 'SESSION')
							{
								error= true
							}
							else 
							{
								telegram= data["hexDecode"]()
							}
						}
					}
					if(!error)
					{
						$scope["telegram"]= telegram
					}
					else 
					{
						alert("error")
					}
				}
				)["error"](function(data,status)
				{
				}
				)
			}
			;$scope["uploadAvatar"]= function(event)
			{
				var file=event["target"]["files"][0];
				event["target"]["value"]= null;if(!file["type"]["match"](/image.*/))
				{
					return
				}
				var filename=file["name"];
				var reader= new FileReader();
				reader["addEventListener"]("load",function()
				{
					$scope["uploadProgress"]= 0;$scope["onUploadProgress"]();$scope["origAvatar"]= $scope["avatar"];$scope["avatar"]= reader["result"];$http({method:'POST',url:SERVER["scheme"]+ SERVER["host"]+ SERVER["contextPath"]+ REST_CONTEXT_PATH+ "/user/avatar",headers:{'Content-Type':undefined},data:{n:$rootScope["user"]["profile"]["name"]["hexEncode"](),s:$rootScope["user"]["profile"]["sid"],v:generate["md5"](VER),avatar:file},transformRequest:function(data,headersGetter)
					{
						var formData= new FormData();
						angular["forEach"](data,function(value,key)
						{
							formData["append"](key,value)
						}
						);var headers=headersGetter();
						return formData
					}
					})["success"](function(data)
					{
						var url;
						var error=false;
						clearInterval($scope["uploadProgressInterval"]);if(data=== 'ERROR')
						{
							error= true
						}
						else 
						{
							if(data=== 'USER')
							{
								error= true
							}
							else 
							{
								if(data=== 'SESSION')
								{
									error= true
								}
								else 
								{
									if(data=== 'FILE')
									{
										error= true
									}
									else 
									{
										url= data["hexDecode"]();error= false
									}
								}
							}
						}
						if(error)
						{
							$scope["avatar"]= $scope["origAvatar"]
						}
						else 
						{
							$scope["avatar"]= url
						}
						$scope["uploadProgress"]= 100;_["defer"](function()
						{
							$scope.$apply()
						}
						)
					}
					)["error"](function(data,status)
					{
						clearInterval($scope["uploadProgressInterval"]);$scope["avatar"]= $scope["origAvatar"];$scope["uploadProgress"]= 100;_["defer"](function()
						{
							$scope.$apply()
						}
						)
					}
					)
				}
				,false);if(file)
				{
					reader["readAsDataURL"](file)
				}
			}
			;$scope["rulesCount"]= function()
			{
				return domainManager["domainNames"]()["length"]+ domainManager["domainRejectNames"]()["length"]+ domainManager["ips"]()["length"]+ domainManager["rejectIps"]()["length"]
			}
			;$scope["anonymous"]= function()
			{
				return $rootScope["user"]["role"]=== ROLES["GUEST"]
			}
			;$scope["isChineseLang"]= function()
			{
				return $scope["currentLocale"]=== 'zh_CN'
			}
			;$scope["extendVIP"]= function()
			{
				return alert("\u62b1\u6b49, \u6e2c\u8a66\u671f\u9593\u8a72\u529f\u80fd\u4e0d\u555f\u7528")
			}
			;setExpireNotify= function(expireNotify)
			{
				VIPExpireNotifyInfo= storage["get"]('VIPExpireNotifyInfo',{});VIPExpireNotifyInfo[$rootScope["user"]["profile"]["name"]]= expireNotify;return storage["set"]('VIPExpireNotifyInfo',VIPExpireNotifyInfo)
			}
			;getExpireNotify= function()
			{
				VIPExpireNotifyInfo= storage["get"]('VIPExpireNotifyInfo',{});return VIPExpireNotifyInfo[$rootScope["user"]["profile"]["name"]]
			}
			;showExpireAlert= function()
			{
				setExpireNotify(true);$scope["isExpireAlertShown"]= true;return $scope["appAlert"]("\u62b1\u6b49\uff0c\u4f60\u7684VIP\u5df2\u8fc7\u671f\uff0c\u8bf7 <a class=\'btn btn-primary btn-xs\' href=\'"+ $rootScope["payUrl"]+ "\' target=\'_blank\'>\u7eed</b>")
			}
			;$scope["appAlert"]= function(msg)
			{
				$scope["appAlertHtml"]= msg;return $scope["showAppAlert"]= true
			}
			;$scope["hideAppAlert"]= function()
			{
				$scope["showAppAlert"]= false;if($scope["isExpireAlertShown"])
				{
					$scope["isExpireAlertShown"]= false;return setExpireNotify(false)
				}
			}
			;$scope["openAnonymousModal"]= function()
			{
				pageManager["gotoSignup"]()
			}
			;$scope["gotoGuide"]= function()
			{
				pageManager["gotoGuide"]()
			}
			;$scope["gotoInvitation"]= function()
			{
			}
			;$rootScope["openGuide"]= function()
			{
				pageManager["openGuide"]()
			}
			;$scope["gotoUpgrade"]= function()
			{
				pageManager["gotoUpgrade"]()
			}
			;$scope["openFillPasswordModal"]= function(afterRegister)
			{
				if(afterRegister== null)
				{
					afterRegister= false
				}
				$rootScope["fillPasswordModal"]= $modal({templateUrl:'partials/options/_fill_password.html',show:true,backdrop:'static'});if(afterRegister)
				{
					$timeout(function()
					{
						return $rootScope.$broadcast('afterRegister')
					}
					)
				}
				return track["event"]('extension','no-password','fillpassword-start')
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
			;$rootScope["isVVIP"]= function()
			{
				return $rootScope["isVIP"]&& $rootScope["user"]["profile"]["vvip"]
			}
			;$rootScope["isEnterpriseUser"]= function()
			{
				return $rootScope["isVIP"]&& $rootScope["user"]["profile"]["enterprise"]
			}
			;$rootScope["isDue"]= function()
			{
				return !$rootScope["isVIP"]()&& $rootScope["user"]["profile"]["until"]
			}
			;$rootScope["isWheatCollectingDisabled"]= function()
			{
				return $rootScope["user"]["profile"]["wheat_collecting_disabled"]
			}
			;$rootScope["orderUrl"]= function()
			{
				return $rootScope["user"]["profile"]["order_url"]?$rootScope["user"]["profile"]["order_url"]:OFFICIAL_WEBSITE
			}
			;$rootScope["vipCodeUrl"]= function()
			{
				return $rootScope["user"]["profile"]["vipcode_url"]?$rootScope["user"]["profile"]["vipcode_url"]:OFFICIAL_WEBSITE
			}
			;$rootScope["cartUrl"]= function()
			{
				return $rootScope["user"]["profile"]["cart_url"]?$rootScope["user"]["profile"]["cart_url"]:OFFICIAL_WEBSITE
			}
			;$rootScope["officialWebsite"]= function()
			{
				return OFFICIAL_WEBSITE
			}
			;$rootScope["getTraffic"]= function(traffic)
			{
				var units;
				var unitStr;
				var uptimeItems=[];
				if(traffic> 1000000)
				{
					units= Math["floor"](traffic/ (1000000));traffic-= units* 1000000;unitStr= units+ ' G';if(units> 1)
					{
					}
					uptimeItems["push"](unitStr)
				}
				if(traffic> 1000)
				{
					units= Math["floor"](traffic/ 1000);traffic-= units* 1000;unitStr= units+ ' MB';if(units> 1)
					{
					}
					uptimeItems["push"](unitStr)
				}
				else 
				{
					uptimeItems["push"](traffic+ " KB")
				}
				return uptimeItems["join"](' ')
			}
			;$rootScope["getTraffic_Byte"]= function(traffic)
			{
				if(traffic< 1000)
				{
					return traffic+ " Bytes"
				}
				return $rootScope["getTraffic"]((traffic/ 1000)["toFixed"](0))
			}
			;$rootScope["getSpeed"]= function(traffic)
			{
				var units;
				var unitStr;
				var uptimeItems=[];
				if(traffic> 1024)
				{
					units= Math["floor"](traffic/ 1024);traffic-= units* 1024;unitStr= units+ ' KB/s';if(units> 1)
					{
					}
					uptimeItems["push"](unitStr)
				}
				else 
				{
					uptimeItems["push"](traffic+ " B/s")
				}
				return uptimeItems["join"](' ')
			}
			;$scope["logout"]= function()
			{
				userManager["logout"]();return pageManager["gotoLogin"]('logout')
			}
			;$scope["showUserNotifications"]= function()
			{
				return $rootScope["userNotificationModal"]= $modal({templateUrl:"partials/options/modals/user_notifications.html",show:true,size:'lg',backdrop:true})
			}
			;$scope["showInvitationCodes"]= function()
			{
				return $rootScope["userInvitationCodesModal"]= $modal({templateUrl:"partials/options/modals/invitation_codes.html",show:true,size:'lg',backdrop:true})
			}
			;$scope["exchangeWheat"]= function()
			{
				return $rootScope["userWheatsModal"]= $modal({templateUrl:"partials/options/modals/exchange_wheat.html",show:true,size:'lg',backdrop:true})
			}
			;$rootScope["showGrabWheat"]= function()
			{
				$scope["showGrabWheat"]()
			}
			;$scope["showGrabWheat"]= function()
			{
				if($rootScope["wsConnected"])
				{
					if($rootScope["grabWheatModal"])
					{
						$rootScope["grabWheatModal"]["destroy"]();$rootScope["grabWheatModal"]= null
					}
					return $rootScope["grabWheatModal"]= $modal({templateUrl:"partials/options/modals/grab_wheat.html",show:true,size:'lg',backdrop:true})
				}
				else 
				{
					var title=$translate["instant"]('options.layout.grab_wheat.fail_to_open_wheat_when_disconnected_title');
					var msg=$translate["instant"]('options.layout.grab_wheat.fail_to_open_wheat_when_disconnected_desc');
					Swal({type:'error',title:title,text:msg})
				}
			}
			;$scope["showFrequentDomains"]= function()
			{
				return $rootScope["frequentDomainsModal"]= $modal({templateUrl:"partials/options/modals/frequent_domain_alert.html",show:true,size:'lg',backdrop:true})
			}
			;$rootScope["showGuideAutoPlay"]= function()
			{
				return $rootScope["guideAutoPlayModal"]= $modal({templateUrl:"partials/options/modals/guide_auto_play.html",show:true,backdrop:true})
			}
			;$scope["showStripePayModal"]= function()
			{
				return $rootScope["stripePayModal"]= $modal({templateUrl:"partials/options/modals/stripe_payment.html",show:true,backdrop:true})
			}
			;$scope["showAboutClientChicagoUsername"]= function()
			{
				return $rootScope["aboutClientUsernamePasswordModal"]= $modal({templateUrl:"partials/options/modals/about_client_username_password.html",show:true,backdrop:true})
			}
			;$scope["showAboutDataTraffic"]= function()
			{
				return $rootScope["aboutDataTrafficModal"]= $modal({templateUrl:"partials/options/modals/about_data_traffic.html",show:true,backdrop:true})
			}
			;$scope["showNewcomerInfo"]= function()
			{
				$rootScope["newcomerInfoModal"]= $modal({templateUrl:"partials/options/modals/newcomer_info_alert.html",animation:'am-fade-and-slide-top',backdrop:true,show:true,scope:$scope})
			}
			;$scope["changePassword"]= function()
			{
				if(!$rootScope["isUserOrAbove"]())
				{
					alert($translate["instant"]("options.dropdown.alert.only_user_can_change_pass"));return
				}
				return $rootScope["passwordModal"]= $modal({templateUrl:"partials/options/modals/change_password.html",show:true})
			}
			;$scope["retrievePassword"]= function()
			{
				if(!$rootScope["isUserOrAbove"]())
				{
					alert($translate["instant"]("options.dropdown.alert.only_user_can_retrieve_pass"));return
				}
			}
			;$scope["source"]= function()
			{
				return $location["search"]()["source"]
			}
			;$scope["wheats"]= function()
			{
				return $rootScope["user"]["wheats"]
			}
			;$scope["alert"]= function(msg,style,timeout)
			{
				$scope["showAlert"]= true;$scope["alertText"]= msg;if(style)
				{
					$scope["alertStyle"]= style
				}
				else 
				{
					$scope["alertStyle"]= 'alert-danger'
				}
				if(timeout> 0)
				{
					return $timeout(function()
					{
						$scope["showAlert"]= false
					}
					,timeout)
				}
			}
			;$scope["fromString"]= function(from)
			{
				from= from/ 1000;var duration,sDay,sHour,sMinute,now,sSecond,i,timezoneOffset,utc;
				i= function(n,t)
				{
					var o,r,a;
					return null== t&& (t= 2),o= t- String(n)["length"],0>= o?n:(r= function()
					{
						var n,t;
						for(t= [],a= n= 0;o>= 0?o> n:n> o;a= o>= 0?++n:--n)
						{
							t["push"]("0")
						}
						return t
					}
					(),r["concat"](n)["join"](""))
				}
				;sSecond= $translate["instant"]("options.layout.second");sMinute= $translate["instant"]("options.layout.minute");sHour= $translate["instant"]("options.layout.hour");sDay= $translate["instant"]("options.layout.day");now=  new Date();timezoneOffset= now["getTimezoneOffset"]();utc= now["getTime"]()- (timezoneOffset* 60000);duration= parseInt(now["getTime"]()/ 1000- from);if(duration< 0)
				{
					return ""
				}
				else 
				{
					if(duration< 60)
					{
						return ""+ duration+ sSecond
					}
					else 
					{
						if(duration< 3600)
						{
							return ""+ i(parseInt(duration/ 60))+ " "+ sMinute+ " "+ i(duration% 60)+ " "+ sSecond
						}
						else 
						{
							if(duration< 86400)
							{
								return ""+ i(parseInt(duration/ 3600))+ " "+ sHour+ " "+ i(parseInt(duration% 3600/ 60))+ " "+ sMinute
							}
							else 
							{
								return parseInt(((duration))/ 86400)+ sDay+ " "+ parseInt(((duration- 10)% 86400)/ 3600)+ sHour
							}
						}
					}
				}
			}
			;init= (function(_this)
			{
				return function()
				{
					$rootScope["inc_vip_time"]= 0;$scope["inc_vip_time_hidden"]= true;$scope["inc_vip_time_startFade"]= false;if($rootScope["user"]["profile"]["level"]!== ROLES["VIP"]&& $rootScope["user"]["profile"]["until"])
					{
						if(getExpireNotify()!== false)
						{
							showExpireAlert()
						}
					}
					if($location["search"]()["source"]=== 'anonymous')
					{
						$scope["openAnonymousModal"]()
					}
					if(!storage["get"]("notShowNewcomerInfoAlert",false))
					{
						$scope["showNewcomerInfo"]();if(currentLocale=== 'zh_CN')
						{
							if($rootScope["user"]["profile"]["ip_region"])
							{
								if(!$rootScope["user"]["profile"]["ip_region"]["startsWith"]('\u4e2d\u56fd|')|| $rootScope["user"]["profile"]["ip_region"]["startsWith"]('\u4e2d\u56fd|0|\u9999\u6e2f') || $rootScope["user"]["profile"]["ip_region"]["startsWith"]('\u4e2d\u56fd|0|\u53f0\u6e7e'))
								{
									Swal({title:$translate["instant"]("common.network_notice"),html:'\u4f60\u73b0\u5728\u4f7f\u7528\u7684IP\u5730\u5740\u662f:<span style=\"color:#E91E63\">'+ ($rootScope["user"]["profile"]["ip"]?$rootScope["user"]["profile"]["ip"]:'')+ '</span><br/>'+ '\u5bf9\u5e94IP\u5730\u5740\u5e93\u6240\u5728\u5730\u533a:<span style=\"color:#E91E63\">'+ ($rootScope["user"]["profile"]["ip_region"]?$rootScope["user"]["profile"]["ip_region"]:'')+ '</span><br/>'+ '\u5982\u679c\u4f60\u5728\u4e2d\u56fd\u5927\u9646\u4f7f\u7528\u7f51\u7edc\uff0c\u800c\u4e0a\u8ff0\u7684IP\u663e\u793a\u4e3a\u975e\u4e2d\u56fd\u5927\u9646IP\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u4f60\u4f7f\u7528\u4e86VPN\u7b49\u7f51\u7edc\u5de5\u5177\uff0c<span style=\"color:#E91E63\">\u5173\u95ed\u7c7b\u4f3cVPN\u7684\u5de5\u5177</span>\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684<span style=\"color:#E91E63\">'+ $translate["instant"]("app")+ '</span>\u4f53\u9a8c\u54e6',type:'question'})
								}
							}
						}
					}
					var now= new Date();
					$scope["VIPUntil"]= $rootScope["isVIP"]()?($rootScope["user"]["profile"]["vip_duration"]+ $rootScope["user"]["profile"]["sys_time"]):0;$scope["VIPLeft"]= $scope["VIPUntil"];$scope["VIPDuration"]= $rootScope["isVIP"]()?$rootScope["user"]["profile"]["vip_duration"]+ ( new Date())["getTime"]():0;$scope["from"]= $rootScope["user"]["profile"]["start_time"]|| ( new Date())["getTime"]();setInterval(function()
					{
						if($rootScope["wsConnected"])
						{
							$scope["showAlert"]= false;$scope["showTryReconnectAlert"]= false;$scope["showTryResigninAlert"]= false;$scope["fromStr"]= $scope["fromString"]($scope["from"]);$scope.$evalAsync()
						}
						else 
						{
							var disconnected=$translate["instant"]("options.layout.disconnected");
							var try_reconnect=$translate["instant"]("options.layout.try_reconnect");
							if($scope["showReconnect"])
							{
								$scope["disconnectedWarningStr"]= disconnected+ ', '+ $rootScope["ws_retrial"]+ ' '+ try_reconnect;$scope["showTryReconnectAlert"]= true;$scope["showTryResigninAlert"]= false
							}
							else 
							{
								var disconnected_resign_in=$translate["instant"]("options.layout.disconnected_resign_in");
								$scope["disconnectedWarningStr"]= disconnected+ disconnected_resign_in;$scope["showTryResigninAlert"]= true;$scope["showTryReconnectAlert"]= false
							}
							$scope["alert"]($scope["disconnectedWarningStr"],"alert-danger");$scope.$evalAsync()
						}
					}
					,1000)
				}
			}
			)(this);teleScope["link"]('mode')["then"](function()
			{
				var mode=storage["get"]("mode",MODES.AUTO);
				$rootScope["mode"]= mode
			}
			);teleScope["link"]('servers_mode')["then"](function()
			{
				var servers_mode=storage["get"]("servers_mode",'');
				$rootScope["servers_mode"]= servers_mode;if($rootScope["servers_mode"]=== SERVERS_MODES["MANUAL"])
				{
					$rootScope["serversmodeChecked"]= true
				}
				else 
				{
					$rootScope["serversmodeChecked"]= false
				}
			}
			);teleScope["link"]('servers_order')["then"](function()
			{
				var servers_order=storage["get"]("servers_order",[]);
				$rootScope["servers_order"]= servers_order
			}
			);$rootScope.$watch('servers_order',function()
			{
				var servers=storage["get"]("proxies",[]);
				var cal_servers=proxyManager["displayProxies"](servers,$rootScope["servers_mode"],$rootScope["servers_order"]);
				if($rootScope["sorting"])
				{
					return
				}
				_["defer"](function()
				{
					$rootScope["servers"]= cal_servers;$scope.$evalAsync()
				}
				);$rootScope["connected_server_num"]= cal_servers["length"];_["each"](cal_servers,function(server)
				{
					if(server["score"]< 30&& server["score"]> 0)
					{
						server["opaque"]= ((server["score"]/ 3)+ 1)["toFixed"](0)
					}
					else 
					{
						server["opaque"]= 10
					}
					if(!server["bounceTime"]|| server["bounceTime"]+ bounceWait< timeUtils["time"]())
					{
						server["changed"]= true;$timeout(function()
						{
							server["changed"]= false
						}
						,1000);server["bounceTime"]= timeUtils["time"]()
					}
				}
				)
			}
			);teleScope["link"]('proxies')["then"](function()
			{
			}
			);$rootScope["servers_loading"]= false;$rootScope.$watch('proxies',function()
			{
				if($rootScope["proxies_update_time"]+ 5> timeUtils["time"]())
				{
					return
				}
				var servers=storage["get"]("proxies",[]);
				var cal_servers=proxyManager["displayProxies"](servers,$rootScope["servers_mode"],$rootScope["servers_order"]);
				if($rootScope["sorting"])
				{
					return
				}
				_["defer"](function()
				{
					$rootScope["servers"]= cal_servers;$scope.$evalAsync()
				}
				);$rootScope["connected_server_num"]= cal_servers["length"];_["each"](cal_servers,function(server)
				{
					if(server["score"]< 30&& server["score"]> 0)
					{
						server["opaque"]= ((server["score"]/ 3)+ 1)["toFixed"](0)
					}
					else 
					{
						server["opaque"]= 10
					}
					if(!server["bounceTime"]|| server["bounceTime"]+ bounceWait< timeUtils["time"]())
					{
						server["changed"]= true;$timeout(function()
						{
							server["changed"]= false
						}
						,1000);server["bounceTime"]= timeUtils["time"]()
					}
				}
				);$rootScope["servers_loading"]= false;$rootScope["proxies_update_time"]= timeUtils["time"]()
			}
			);teleScope["link"]('env_mode')["then"](function()
			{
				var env_mode=storage["get"]("env_mode",'env_china');
				$rootScope["env_mode"]= env_mode
			}
			);teleScope["link"]('isp_mode')["then"](function()
			{
				var isp_mode=storage["get"]("isp_mode",'');
				$rootScope["isp_mode"]= isp_mode
			}
			);teleScope["link"]('destinations')["then"](function()
			{
				var destinations=storage["get"]("destinations",'All');
				$rootScope["destinations"]= destinations
			}
			);$scope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams)
			{
				return $scope["currentState"]= toState["url"]
			}
			);init();teleScope["link"]("needUpgrade");$rootScope.$watch("needUpgrade",function(e)
			{
				if($rootScope!= null&& $rootScope["needUpgrade"])
				{
					pageManager["redirectUrl"]("upgrade.html")
				}
			}
			);teleScope["link"]("clientCompromised");$rootScope.$watch("clientCompromised",function(e)
			{
				if($rootScope!= null&& $rootScope["clientCompromised"])
				{
					pageManager["redirectUrl"]("compromised.html")
				}
			}
			);$rootScope.$watch("ws_retrial",function(e)
			{
				if($rootScope!= null&& $rootScope["ws_retrial"]>= WS_RETRIES* WS_RETRIES_FACTOR)
				{
					$scope["showReconnect"]= false;if(!$rootScope["isVIP"]()&&  !$rootScope["isGuest"]())
					{
						$scope["logout"]()
					}
				}
				else 
				{
					$scope["showReconnect"]= true
				}
			}
			);$rootScope.$watch("wsConnected",function(newValue,oldValue)
			{
				setTimeout(function()
				{
					$scope["from"]= $rootScope["user"]["profile"]["start_time"]|| ( new Date())["getTime"]();$scope.$evalAsync()
				}
				,0)
			}
			);var res=VER["split"](".");
			if(res["length"]>= 3)
			{
				$rootScope["ver_major"]= parseInt(res[0]);$rootScope["ver_minor"]= parseInt(res[1]);$rootScope["ver_revision"]= parseInt(res[2]);$rootScope["ver_int"]= $rootScope["ver_major"]* 10000+ $rootScope["ver_minor"]* 100+ $rootScope["ver_revision"]
			}
			$rootScope["newestVer"]= 1;teleScope["link"]("newestVerInt");$rootScope.$watch("newestVerInt",function(e)
			{
				if($rootScope!= null&& upgradeManager["newestVer"]()> 0)
				{
					$rootScope["newestVer"]= $rootScope["ver_int"]>= upgradeManager["newestVer"]()?1:0
				}
			}
			);$rootScope.$watch("user.profile",function(profile)
			{
				$scope["avatar"]= profile["avatar"]!== ''?profile["avatar"]:'../img/icon-auto_128.png';$scope["nickname"]= (profile["nickname"]&& profile["nickname"]!== '')?profile["nickname"]:'';$scope["telegram"]= (profile["telegram"]&& profile["telegram"]!== '')?profile["telegram"]:'';$rootScope["render_host"]= profile["render_host"];$scope["VIPUntil"]= $rootScope["isVIP"]()?(profile["vip_duration"]+ profile["sys_time"]):0;$scope["VIPLeft"]= $scope["VIPUntil"];$scope["wheat_score"]= profile["exchangable_wheat_score"];$scope["exchangable"]= profile["exchangable_wheat_score"]>= profile["wheat_exchange_rate"];$scope["active_invitation_code_count"]= profile["active_invitation_code_count"];$scope["active_coupon_count"]= profile["active_coupon_count"]
			}
			);teleScope["link"]("vip_duration")["then"](function()
			{
			}
			);$rootScope.$watch("vip_duration",function(newValue,oldValue)
			{
				var vip_duration=storage["get"]('vip_duration',0);
				var duration=$scope["VIPDuration"];
				if(newValue&& newValue> oldValue+ 1000)
				{
					$scope["VIPUntil"]= $rootScope["isVIP"]()?(newValue+ $rootScope["user"]["profile"]["sys_time"]):0;$scope["VIPLeft"]= $scope["VIPUntil"];$scope["VIPDuration"]= $rootScope["isVIP"]()?newValue+ ( new Date())["getTime"]():0;$scope["inc_vip_time_hidden"]= false;$scope["inc_vip_time_startFade"]= true;$timeout(function()
					{
						$scope["inc_vip_time_hidden"]= true;$rootScope["inc_vip_time"]= 0
					}
					,60000);_["defer"](function()
					{
						$scope.$apply()
					}
					)
				}
			}
			);$rootScope.$watch("user.role",function(role)
			{
				if(role== ROLES["HACKER"])
				{
					setTimeout(function()
					{
						var user;
						if(($rootScope!= null)&& ((user= $rootScope["user"])!= null))
						{
							if(user["role"]=== ROLES["HACKER"])
							{
								pageManager["closeUrl"]("options.html")
							}
						}
					}
					,1000)
				}
				if(role=== ROLES["KICK_OUT"])
				{
					pageManager["redirectUrl"]("kick_sessions.html#?source=onkey-login")
				}
			}
			);$rootScope.$watch("user.data_user_month",function(data_user_month)
			{
				if($rootScope["user"]["data_user_month"])
				{
					$rootScope["data_user_month"]= $rootScope["getTraffic"]($rootScope["user"]["data_user_month"])
				}
				if($rootScope["user"]["data_user_day"])
				{
					$rootScope["data_user_day"]= $rootScope["getTraffic"]($rootScope["user"]["data_user_day"])
				}
			}
			);if(!$rootScope["user"]["data_session_upload"])
			{
				$rootScope["user"]["data_session_upload"]= 0
			}
			if(!$rootScope["user"]["data_session_download"])
			{
				$rootScope["user"]["data_session_download"]= 0
			}
			$rootScope["session_upload_txt"]= $rootScope["getTraffic_Byte"]($rootScope["user"]["data_session_upload"]);$rootScope["session_download_txt"]= $rootScope["getTraffic_Byte"]($rootScope["user"]["data_session_download"]);$rootScope["last_session_upload"]= $rootScope["user"]["data_session_upload"];$rootScope["last_session_download"]= $rootScope["user"]["data_session_download"];updateRate= function()
			{
				var updated=false;
				var currentTimeMillis=timeUtils["time"]();
				var interval=currentTimeMillis- $rootScope["lastTimestamp"];
				if($rootScope["session_dirty"])
				{
					if($rootScope["session_upload"])
					{
						$rootScope["speed_upload"]= $rootScope["getSpeed"]((($rootScope["session_upload"]- $rootScope["last_session_upload"])/ interval)["toFixed"](0))
					}
					$rootScope["last_session_upload"]= $rootScope["session_upload"];if($rootScope["session_download"])
					{
						$rootScope["speed_download"]= $rootScope["getSpeed"]((($rootScope["session_download"]- $rootScope["last_session_download"])/ interval)["toFixed"](0))
					}
					$rootScope["last_session_download"]= $rootScope["session_download"];$rootScope["session_dirty"]= false;updated= true
				}
				else 
				{
					if($rootScope["session_upload"]!= 0)
					{
						$rootScope["speed_upload"]= $rootScope["getSpeed"](0);updated= true
					}
					if($rootScope["session_download"]!= 0)
					{
						$rootScope["speed_download"]= $rootScope["getSpeed"](0);updated= true
					}
				}
				if(!$rootScope["session_upload"])
				{
					$rootScope["session_upload"]= 0
				}
				if(!$rootScope["session_download"])
				{
					$rootScope["session_download"]= 0
				}
				$rootScope["session_upload_txt"]= $rootScope["getTraffic_Byte"]($rootScope["session_upload"]);$rootScope["session_download_txt"]= $rootScope["getTraffic_Byte"]($rootScope["session_download"]);$rootScope["lastTimestamp"]= currentTimeMillis;if(updated)
				{
					$rootScope["speedChanged"]= true;$timeout(function()
					{
						$rootScope["speedChanged"]= false
					}
					,1000)
				}
			}
			;$rootScope.$watch("user.data_session_download",function()
			{
				if($rootScope["user"]["data_session_download"])
				{
					$rootScope["session_download"]= $rootScope["user"]["data_session_download"];$rootScope["session_dirty"]= true
				}
				if($rootScope["user"]["data_session_upload"])
				{
					$rootScope["session_upload"]= $rootScope["user"]["data_session_upload"];$rootScope["session_dirty"]= true
				}
			}
			);$rootScope["invitationList"]= [];$rootScope.$watch("user.invitations",function()
			{
				$rootScope["invitationList"]= invitationManager["getInvitationList"]($rootScope["user"]["invitations"],$rootScope["user"]["profile"]["uid"])
			}
			);$rootScope.$watch("user.showInvitations",function()
			{
				$rootScope["showInvitations"]= $rootScope["user"]["showInvitations"]
			}
			);$rootScope.$watch('invitationList',function(invitationList)
			{
			}
			,true);$rootScope.$watch("user.rewardable_invitation_count",function()
			{
				$scope["newInvitationCount"]= $rootScope["user"]["rewardable_invitation_count"]
			}
			);$rootScope.$watch("user.VIPCards",function()
			{
				$rootScope["trades"]= $rootScope["user"]["VIPCards"]
			}
			);$rootScope["invoices"]= [];$rootScope["invoices_loading"]= false;$rootScope.$watch("user.invoices",function()
			{
				$rootScope["invoices"]= $rootScope["user"]["invoices"];$rootScope["invoices_loading"]= false
			}
			);$rootScope["vipcodes"]= [];$rootScope["vipcodes_loading"]= false;$rootScope.$watch("user.vipcodes",function()
			{
				if($rootScope["user"]["vipcodes"])
				{
					$rootScope["vipcodes"]= [];var codes=JSON["parse"]($rootScope["user"]["vipcodes"]);
					console["log"]("codes:"+ codes["length"]);for(var i=0;i< codes["length"];i++)
					{
						var vipcode=codes[i];
						if(vipcode["expire_duration"])
						{
							vipcode["expire"]= vipcode["expire_duration"]+ $rootScope["user"]["profile"]["sys_time"]
						}
						console["log"]("codes:"+ vipcode["expire"]);$rootScope["vipcodes"]["push"](vipcode)
					}
					console["log"]("codes:"+ $rootScope["vipcodes"])
				}
				$rootScope["vipcodes_loading"]= false
			}
			);$rootScope.$watch("user.vipcodes_loading",function()
			{
				$rootScope["vipcodes_loading"]= $rootScope["user"]["vipcodes_loading"]
			}
			);$rootScope["coupons"]= [];$rootScope["coupons_loading"]= false;$rootScope.$watch("user.coupons",function()
			{
				if($rootScope["user"]["coupons"])
				{
					$rootScope["coupons"]= [];for(var i=0;i< $rootScope["user"]["coupons"]["length"];i++)
					{
						var coupon=$rootScope["user"]["coupons"][i];
						if(coupon["description"])
						{
							coupon["description"]= coupon["description"]["hexDecode"]()
						}
						$rootScope["coupons"]["push"](coupon)
					}
				}
				$rootScope["coupons_loading"]= false
			}
			);$rootScope.$watch("user.coupons_loading",function()
			{
				$rootScope["coupons_loading"]= $rootScope["user"]["coupons_loading"]
			}
			);$rootScope["wheats_loading"]= false;$rootScope.$watch("user.wheats",function()
			{
				$rootScope["wheats_loading"]= false
			}
			);$rootScope.$watch("user.total_wheat",function()
			{
				$scope["total_wheat"]= $rootScope["user"]["total_wheat"]?$rootScope["user"]["total_wheat"]:0
			}
			)
		}
		;
		return angular["module"]("options")["controller"]("OptionsPageController",['$scope','$rootScope','$http','$translate','$sce','$modal','$log','$location','$timeout','$element','generate','localeService','userManager','teleScope','timeUtils','storage','invitationManager','pageManager','proxyManager','upgradeManager','track','domainManager','timeUtils','SERVER','MODES','SERVERS_MODES','REST_CONTEXT_PATH','ROLES','VER','GUEST_DOMAINS','LOCALES','WS_RETRIES','WS_RETRIES_FACTOR','OFFICIAL_WEBSITE',OptionsPageController])
	}
	,define(libs,OptionsPageControllerOps)
}
)["call"](this);function OptionsPageControllerFinger()
{
	var chars,i;
	chars= '01234567890abcdefghijklmnopqrstuvwxyz';return ((function()
	{
		var _i,_results;
		_results= [];for(i= _i= 1;1<= length?_i<= length:_i>= length;i= 1<= length?++_i:--_i)
		{
			_results["push"](chars[Math["floor"](Math["random"]()* chars["length"])])
		}
		return _results
	}
	)())["join"]('')
}
