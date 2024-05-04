(function()
{
	var AlertController,ChangePasswordController,ChangePasswordModalController,FillPasswordController,InvitationController,ProfileController,TradeListController,filters,libs,me,optionsConfigure;
	me= '[options]';filters= {renderTime:function()
	{
		return function(d)
		{
			var formatInt;
			formatInt= function(i)
			{
				if(i> 9)
				{
					return i
				}
				else 
				{
					return '0'+ i
				}
			}
			;if(!d)
			{
				return '---'
			}
			else 
			{
				return ""+ (d["getFullYear"]())+ "-"+ (formatInt(d["getMonth"]()+ 1))+ "-"+ (formatInt(d["getDate"]()))+ " "+ (formatInt(d["getHours"]()))+ ":"+ (formatInt(d["getMinutes"]()))
			}
		}
	}
	,renderLeftTime:function()
	{
		return function(t)
		{
			var d,now,zeroPad;
			zeroPad= function(n,count)
			{
				var i,len,s;
				if(count== null)
				{
					count= 2
				}
				len= count- String(n)["length"];if(len<= 0)
				{
					return n
				}
				s= (function()
				{
					var _i,_results;
					_results= [];for(i= _i= 0;0<= len?_i< len:_i> len;i= 0<= len?++_i:--_i)
					{
						_results["push"]('0')
					}
					return _results
				}
				)();return s["concat"](n)["join"]('')
			}
			;now=  new Date();d= parseInt(t- now["getTime"]()/ 1000);if(d<= 0)
			{
				return ""
			}
			if(d<= 60)
			{
				return ""+ d+ "\u79d2"
			}
			else 
			{
				if(d<= 3600)
				{
					return ""+ (zeroPad(parseInt(d/ 60)))+ "\u5206"+ (zeroPad(d% 60))+ "\u79d2"
				}
				else 
				{
					if(d<= 24* 3600)
					{
						return ""+ (zeroPad(parseInt(d/ 3600)))+ "\u5c0f\u65f6"+ (zeroPad(parseInt((d% 3600)/ 60)))+ "\u5206"
					}
					else 
					{
						return (d/ 3600/ 24)["toFixed"](1)+ '\u5929'
					}
				}
			}
		}
	}
	,renderPercent:function()
	{
		return function(p)
		{
			if(!p)
			{
				return '1%'
			}
			else 
			{
				return parseInt(p* 10000)/ 100+ '%'
			}
		}
	}
	,StabilityStyle:function()
	{
		return function(h)
		{
			if(h> 0.8)
			{
				return 'progress-bar-success'
			}
			else 
			{
				if(h> 0.5)
				{
					return 'progress-bar-warning'
				}
				else 
				{
					return 'progress-bar-danger'
				}
			}
		}
	}
	,renderTradeType:function()
	{
		return function(t)
		{
			return ""+ t+ "\u5929"
		}
	}
	,renderFloat:function()
	{
		return function(p)
		{
			return parseFloat(p)["toFixed"](2)
		}
	}
	,tradeStyle:function()
	{
		return function(s)
		{
			var style;
			style= "";if(s=== 'INIT'|| s=== 'WAIT_BUYER_PAY')
			{
				return style= 'text-muted'
			}
			else 
			{
				if(s=== 'TRADE_FINISHED')
				{
					return style= ''
				}
				else 
				{
					if(s=== 'WAIT_BUYER_CONFIRM_GOODS')
					{
						return style= 'warning'
					}
					else 
					{
						if(s=== 'WAIT_SELLER_SEND_GOODS')
						{
							return style= "danger"
						}
					}
				}
			}
		}
	}
	,renderDatetime:function()
	{
		return function(d)
		{
			var formatInt,t;
			formatInt= function(i)
			{
				if(i> 9)
				{
					return i
				}
				else 
				{
					return '0'+ i
				}
			}
			;t=  new Date(d* 1000);return (""+ (t["getFullYear"]())+ "/"+ (formatInt(t["getMonth"]()+ 1))+ "/"+ (formatInt(t["getDate"]()))+ " ")+ (""+ (formatInt(t["getHours"]()))+ ":"+ (formatInt(t["getMinutes"]()))+ ":"+ (formatInt(t["getSeconds"]())))
		}
	}
	,renderAccount:function($rootScope)
	{
		return function(account)
		{
			if(account=== $rootScope["user"]["profile"]["name"])
			{
				return 'M'
			}
			else 
			{
				return account
			}
		}
	}
	,isMe:function($rootScope)
	{
		return function(account)
		{
			return account=== $rootScope["user"]["profile"]["name"]
		}
	}
	};AlertController= function($scope,$location,$stateParams)
	{
		if($stateParams["message"])
		{
			return $scope["$parent"]["alert"]($stateParams["message"])
		}
	}
	;ProfileController= function($scope,$rootScope,$log,$http,$timeout,$interval,validate,generate,SERVER,ROLES,WS_RETRIES)
	{
		var DEFAULT_AVATAR,init,initAvatarUrl;
		$scope["name"]= "";$scope["userRole"]= "";$scope["vip_left"]= 0;$scope["isVirgin"]= false;DEFAULT_AVATAR= "";$scope["avatarUrl"]= "";$scope["vipLeftToolTip"]= {checked:false};initAvatarUrl= function()
		{
			var name;
			name= $rootScope["user"]["profile"]["name"];if(validate["email"](name)&& name["indexOf"]('@maikr')===  -1)
			{
				return $scope["avatarUrl"]= "http://www.gravatar.com/avatar"+ ("/"+ (generate["md5"](name))+ "?s=50&d=")+ (""+ (encodeURIComponent(DEFAULT_AVATAR)))
			}
			else 
			{
				return $scope["avatarUrl"]= ""
			}
		}
		;init= function()
		{
			$scope["userRole"]= "U";$scope["isVirgin"]=  !$rootScope["user"]["profile"]["until"];$scope["name"]= $rootScope["user"]["profile"]["name"];initAvatarUrl()
		}
		;init();$rootScope.$watch('user.profile.name',function()
		{
			$scope["name"]= $rootScope["user"]["profile"]["name"];return initAvatarUrl()
		}
		);$scope["stabilityLevel"]= function()
		{
			if($rootScope["wsConnected"])
			{
				return Math["round"](5* $rootScope["averageStability"])
			}
			else 
			{
				return 0
			}
		}
		;$scope["stabilityPercentage"]= function()
		{
			if($rootScope["wsConnected"])
			{
				var e;
				var x=$rootScope["averageStability"]* ($rootScope["ws_retrial"]<= WS_RETRIES?((WS_RETRIES- $rootScope["ws_retrial"])* (1.0/ WS_RETRIES)):1);
				return e= x,e?parseInt(1e4* e)/ 100+ "%":"1%"
			}
			else 
			{
				return "0%"
			}
		}
		;return $rootScope.$watch('user.profile.until',function(n,o)
		{
			var count,now,total_count;
			if(n!== o)
			{
				init();now=  new Date();now= parseInt(now["getTime"]()/ 1000);if(!o|| o< now)
				{
					o= now
				}
				$scope["vip_left"]= o;total_count= 30;count= 0;return $interval(function()
				{
					count+= 1;return $scope["vip_left"]= (o+ (n- o)* count/ total_count)["toFixed"](0)
				}
				,50,total_count)
			}
		}
		)
	}
	;TradeListController= function($scope,$rootScope,$http,userManager,SERVER)
	{
		userManager["loadVipCards"]()
	}
	;VIPCodeListController= function($scope,$rootScope,$translate,$http,$filter,$modal,userManager)
	{
		$scope["init"]= function()
		{
			userManager["reloadVIPCodes"]()
		}
		;$scope["reloadVIPCodes"]= function()
		{
			$scope["init"]()
		}
		;$scope["redeemCode"]= function()
		{
			$rootScope["redeemVIPCodeModal"]= $modal({templateUrl:"partials/options/modals/redeem_vipcode.html",animation:'am-fade-and-slide-top',backdrop:true,show:true,scope:$scope})
		}
		;return $scope["init"]()
	}
	;CouponListController= function($scope,$rootScope,$translate,$http,$filter,userManager)
	{
		$scope["coupons"]= null;$scope["init"]= function()
		{
			userManager["loadCoupons"]()
		}
		;$scope["reloadCoupons"]= function()
		{
			$scope["init"]()
		}
		;$scope["expireAt"]= function(coupon)
		{
			if(coupon["status"]=== 'created'|| coupon["status"]=== 'cart'|| coupon["status"]=== 'invoice')
			{
				if(coupon["expireAt"]> 0)
				{
					return $filter('date')( new Date(coupon["expireAt"]),'yyyy-MM-dd HH:mm:ss')
				}
			}
		}
		;$scope["couponStatus"]= function(coupon)
		{
			if(!coupon["usedup"])
			{
				return coupon["status"]
			}
			return 'usedup'
		}
		;$scope["statusMessage"]= function(coupon)
		{
			if(!coupon["usedup"])
			{
				if(coupon["status"]=== 'created')
				{
					if(coupon["quota"]== 0)
					{
						return $translate["instant"]("options.coupon_history.status_name.created")
					}
					else 
					{
						return $translate["instant"]("options.coupon_history.status_name.created")+ "( "+ coupon["used"].toString()+ "/"+ coupon["quota"].toString()+ " )"
					}
				}
				else 
				{
					if(coupon["status"]=== 'expired')
					{
						return $translate["instant"]("options.coupon_history.status_name.expired")
					}
					else 
					{
						if(coupon["status"]=== 'cart')
						{
							if(coupon["beneficiary"])
							{
								return $translate["instant"]("options.coupon_history.status_name.cart_prefix")+ coupon["beneficiary"]+ $translate["instant"]("options.coupon_history.status_name.cart_suffix")
							}
							else 
							{
								return $translate["instant"]("options.coupon_history.status_name.cart")
							}
						}
						else 
						{
							if(coupon["status"]=== 'invoice'|| coupon["status"]=== 'processing')
							{
								if(coupon["beneficiary"])
								{
									return $translate["instant"]("options.coupon_history.status_name.invoice_prefix")+ coupon["beneficiary"]+ $translate["instant"]("options.coupon_history.status_name.invoice_suffix")
								}
								else 
								{
									return $translate["instant"]("options.coupon_history.status_name.invoice")
								}
							}
							else 
							{
								if(coupon["status"]=== 'succeeded')
								{
									if(coupon["beneficiary"])
									{
										return $translate["instant"]("options.coupon_history.status_name.succeeded_prefix")+ coupon["beneficiary"]+ $translate["instant"]("options.coupon_history.status_name.succeeded_suffix")
									}
									else 
									{
										return $translate["instant"]("options.coupon_history.status_name.succeeded")
									}
								}
								else 
								{
									if(coupon["status"]=== 'payment_failed')
									{
										if(coupon["beneficiary"])
										{
											return $translate["instant"]("options.coupon_history.status_name.payment_failed_prefix")+ coupon["beneficiary"]+ $translate["instant"]("options.coupon_history.status_name.payment_failed_suffix")
										}
										else 
										{
											return $translate["instant"]("options.coupon_history.status_name.payment_failed")
										}
									}
								}
							}
						}
					}
				}
				return ''
			}
			return $translate["instant"]("options.coupon_history.status_name.usedup")
		}
		;$scope["statusTooltip"]= function(coupon)
		{
			if(!coupon["usedup"])
			{
				if(coupon["status"]=== 'created')
				{
					if(coupon["quota"]> 0)
					{
						return $translate["instant"]("options.coupon_history.status_name.created_tooltip")
					}
					else 
					{
						return ''
					}
				}
				else 
				{
					if(coupon["status"]=== 'cart')
					{
						return ''
					}
				}
				return ''
			}
			return $translate["instant"]("options.coupon_history.status_name.usedup")
		}
		;return $scope["init"]()
	}
	;InvoiceListController= function($scope,$rootScope,$translate,$http,$filter,userManager,pageManager)
	{
		$scope["invoices_loading"]= false;var init;
		$scope["currencySign"]= function(invoice)
		{
			if(invoice["currency"]=== 'usd')
			{
				return '$'
			}
			if(invoice["currency"]=== 'cny')
			{
				return '\xA5'
			}
			return ""
		}
		;$scope["currencyAmount"]= function(invoice)
		{
			var amount=invoice["amount"];
			var integral=Math["floor"](amount/ 100).toString();
			var fraction=(amount% 100).toString();
			return integral+ '.'+ fraction
		}
		;$scope["createdAt"]= function(invoice)
		{
			if(invoice["createdAt"]> 0)
			{
				return $filter('date')( new Date(invoice["createdAt"]),'yyyy-MM-dd HH:mm:ss')
			}
			return ""
		}
		;$scope["expireAt"]= function(invoice)
		{
			if(invoice["status"]=== 'created')
			{
				if(invoice["expireAt"]> 0)
				{
					return $filter('date')( new Date(invoice["expireAt"]),'yyyy-MM-dd HH:mm:ss')
				}
			}
			else 
			{
				if(invoice["status"]=== 'succeeded')
				{
					if(invoice["confirmedAt"]> 0)
					{
						return $filter('date')( new Date(invoice["confirmedAt"]),'yyyy-MM-dd HH:mm:ss')+ "("+ $translate["instant"]("options.invoice_history.paid_at")+ ")"
					}
				}
			}
			return ""
		}
		;$scope["invoiceStatus"]= function(invoice)
		{
			return invoice["status"]
		}
		;$scope["invoiceClicked"]= function(invoice)
		{
			pageManager["openUrl"](invoice["url"])
		}
		;$scope["reloadInvoices"]= function()
		{
			$scope["init"]()
		}
		;$scope["init"]= function()
		{
			$rootScope["invoices_loading"]= true;userManager["loadInvoices"]()
		}
		;return $scope["init"]()
	}
	;FillPasswordController= function($scope,$rootScope,$http,$log,SERVER,track,userManager)
	{
		$scope["password"]= '';$scope["passwordInputType"]= 'text';$scope["hidePassword"]= false;$scope["afterRegister"]= false;$scope.$watch('hidePassword',function(newVal)
		{
			if(newVal)
			{
				return $scope["passwordInputType"]= 'password'
			}
			else 
			{
				return $scope["passwordInputType"]= 'text'
			}
		}
		);$scope.$on('afterRegister',function()
		{
			return $scope["afterRegister"]= true
		}
		);$scope["closeModal"]= function()
		{
			return $rootScope["fillPasswordModal"]["destroy"]()
		}
		;return $scope["fillPassword"]= function()
		{
			var field;
			field= $scope["fillPasswordForm"]["password"];field["$stateVisible"]= true;if(!$scope["fillPasswordForm"]["$valid"])
			{
				return false
			}
			$scope["disableInput"]= true;return $http({method:'POST',url:SERVER["scheme"]+ SERVER["host"]+ SERVER["contextPath"]+ "/user/fill_password",params:{password:$scope["password"],sid:$rootScope["user"]["profile"]["sid"]},headers:{'Content-Type':'application/x-www-form-urlencoded'}})["success"](function(resp)
			{
				$scope["disableInput"]= false;if(resp["error"])
				{
					return alert(resp["message"])
				}
				else 
				{
					track["event"]('extension','no-password','fill-password-success');return $scope["closeModal"]()
				}
			}
			)["error"](function()
			{
				$scope["disableInput"]= false;return alert('error')
			}
			)
		}
	}
	;libs= ['underscore','angular','lang','jquery','directives/scopeElement','options/module','services/localeService','options/directives/avatarUploader','options/directives/inviterInput','options/directives/nicknameInput','options/directives/telegramInput','options/directives/html','options/directives/emailInput','options/directives/inviteEmailInput','options/directives/bindEmailInput','options/directives/domain','options/directives/ipRule','angular_ui_router','core/filters/durationToNow','core/filters/fromToNow','core/filters/milliSecondsToText','core/filters/milliSecondsToHourMinText','core/filters/milliSecondsToDaysText','angular_ui_keypress','angular_translate','angular_ui_utils','angular_strap_tpl','ngSanitize','services/teleScope','services/invitationManager','services/userManager','services/domainUtils','services/pageManager','services/domainManager','services/proxyManager','services/upgradeManager','services/generate','services/validate','directives/focusBind','directives/resizeIframe','directives/formState','directives/languageSelect','options/controllers/OptionsPageController','options/controllers/DomainListController','options/controllers/ServerListController','options/controllers/InvitationController','options/controllers/InviteCodesController','options/controllers/SSSubscriptionController','options/controllers/V2RSubscriptionController','options/controllers/ClashSubscriptionController','options/controllers/BindEmailController','options/controllers/ChangePasswordModalController','options/controllers/ChangePasswordController','options/controllers/NewcomerInfoAlertModalController','options/controllers/FrequentDomainAlertModalController','options/controllers/GuideAutoplayController','options/controllers/SSClientController','options/controllers/RoutingTutorialAutoplayController','options/controllers/ISPTutorialAutoplayController','options/controllers/ReasonableSuggestionController','options/controllers/ReasonableSuggestionModalController','options/controllers/InviteQrcodeController','options/controllers/InviteEmailModalController','options/controllers/UserNotificationModalController','options/controllers/GrabWheatModalController','options/controllers/UserExchangeWheatModalController','options/controllers/UserInvitationCodesModalController','options/controllers/ImportRuleModalController','services/streamingServicesManager','options/controllers/MoreStreamingServicesModalController','options/controllers/StreamingServicesTutorialAutoplayController','options/controllers/RedeemVIPCodeModalController','options/controllers/SSQrCodeModalController','options/controllers/SSRQrCodeModalController','options/controllers/SS2024QrCodeModalController','options/controllers/SSR2024QrCodeModalController','options/controllers/V2RQrCodeModalController','options/controllers/ClashQrCodeModalController','options/controllers/Clash2024QrCodeModalController','options/controllers/AboutDataTrafficModalController','options/controllers/AboutClientUsernamePasswordModalController'];require(['config'],function()
	{
		return requireWithRetry(libs,function(_,angular,lang,jquery)
		{
			var options=angular["module"]("options");
			options["run"](function($rootScope,$log,$translate,teleScope,$templateCache,pageManager,userManager,proxyManager,upgradeManager,storage,track,localeService,VER,ROLES,LOCALES)
			{
				$templateCache["put"]('dropdown/safeDropdown.tpl.html',"<ul tabindex=\"-1\" class=\"dropdown-menu\" role=\"menu\"><li role=\"presentation\" ng-class=\"{divider: item.divider}\" ng-repeat=\"item in content\"><a role=\"menuitem\" tabindex=\"-1\" ng-href=\"{{item.href}}\" ng-if=\"!item.divider && item.href\" ng-bind=\"item.text\"></a> <a role=\"menuitem\" tabindex=\"-1\" href=\"\" ng-if=\"!item.divider && item.click\" ng-click=\"$eval(item.click);$hide()\" ng-bind=\"item.text\"></a></li></ul>");$rootScope["averageStability"]= storage["get"]("averageStability",0.5);currentLocale= storage["get"]("currentLocale",LOCALES["preferredLocale"]);$translate["use"](currentLocale);teleScope["link"]('needUpgrade')["then"](function()
				{
					if($rootScope["needUpgrade"])
					{
						return pageManager["gotoUpgrade"]()
					}
				}
				);teleScope["link"]('needDownloadNewVer')["then"](function()
				{
					if($rootScope["needDownloadNewVer"])
					{
					}
				}
				);$rootScope.$on('$stateChangeStart',function(evt,toState)
				{
					return track["pv"]("/chrome-extension/options/"+ toState["url"])
				}
				)
			}
			);options["config"](function($compileProvider,$stateProvider,$urlRouterProvider,$dropdownProvider,$translateProvider,$alertProvider)
			{
				lang["config"]($translateProvider);$compileProvider["aHrefSanitizationWhitelist"](/^\s*(http|https?|ftp|mailto|chrome-extension):/);$compileProvider["imgSrcSanitizationWhitelist"](/^\s*(local|http|https|app|tel|ftp|file|blob|content|ms-appx|x-wmapp0|cdvfile|chrome-extension):|data:image\//);angular["extend"]($alertProvider["defaults"],{animation:'am-fade-and-slide-top',placement:'floater center top',duration:5,container:'body',keyboard:'true',show:true});angular["extend"]($dropdownProvider["defaults"],{templateUrl:'dropdown/safeDropdown.tpl.html'});$urlRouterProvider["when"]('/','/servers');$stateProvider["state"]('main',{url:'/',templateUrl:'/partials/options/layout.html',controller:'OptionsPageController',resolve:{user:function(teleScope)
				{
					return teleScope["link"]('user')
				}
				,averageStability:function(teleScope)
				{
					return teleScope["link"]('averageStability')
				}
				,ws_retrial:function(teleScope)
				{
					return teleScope["link"]('ws_retrial')
				}
				,wsConnected:function(teleScope)
				{
					return teleScope["link"]('wsConnected')
				}
				}})["state"]('main.trades',{url:'trades',templateUrl:'/partials/options/_trade_list.html',controller:'TradeListController'})["state"]('main.servers',{url:'servers',templateUrl:'/partials/options/server_list.html',controller:'ServerListController'})["state"]('main.domains',{url:'domains',templateUrl:'/partials/options/domain_list.html',controller:'DomainListController',resolve:{domains:function(teleScope)
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
				}})["state"]('main.invitations',{url:'invitations',currentState:'invitations',templateUrl:'/partials/options/invitation.html'})["state"]('main.blog',{url:'blog',templateUrl:'/partials/options/_blog.html'})["state"]('main.vipcodes',{url:'vipcodes',currentState:'vipcodes',templateUrl:'/partials/options/vipcode_list.html',controller:'VIPCodeListController'})["state"]('main.coupons',{url:'coupons',currentState:'coupons',templateUrl:'/partials/options/coupon_list.html',controller:'CouponListController'})["state"]('main.invoices',{url:'invoices',currentState:'invoices',templateUrl:'/partials/options/invoice_list.html',controller:'InvoiceListController'})["state"]('main.ss',{url:'ss',currentState:'ss',templateUrl:'/partials/options/ss_subscription.html',controller:'SSSubscriptionController'})["state"]('main.v2r',{url:'v2r',currentState:'v2r',templateUrl:'/partials/options/v2r_subscription.html',controller:'V2RSubscriptionController'})["state"]('main.clash',{url:'clash',currentState:'clash',templateUrl:'/partials/options/clash_subscription.html',controller:'ClashSubscriptionController'})["state"]('main.invite_codes',{url:'invite_codes',currentState:'invite_codes',templateUrl:'/partials/options/invite_codes.html',controller:'InviteCodesController'});;
				return $urlRouterProvider["otherwise"]('servers')
			}
			);options["filter"](filters);options["controller"]({AlertController:AlertController,ProfileController:ProfileController,TradeListController:TradeListController,VIPCodeListController:VIPCodeListController,CouponListController:CouponListController,InvoiceListController:InvoiceListController,FillPasswordController:FillPasswordController});return angular["element"](document)["ready"](function()
			{
				return angular["bootstrap"](document,['options'])
			}
			)
		}
		)
	}
	)
}
)["call"](this)