(function()
{
	var libs,LoginPageControllerOps;
	libs= ["angular","app","services/storage","services/validate","services/userManager","login/module",'services/teleScope'],LoginPageControllerOps= function(angular)
	{
		var LoginPageController=function($rootScope,$scope,$location,$translate,$modal,teleScope,storage,validate,userManager,VER,LOGIN_EVENT_NAME,SERVER_CERT_INTERVAL,LOCALES)
		{
			$scope["ver"]= VER;var currentLocale=storage["get"]("currentLocale",LOCALES["preferredLocale"]);
			$translate["use"](currentLocale);$rootScope["server_address"]= storage["get"]('server_address',"");$scope["zh_only"]= ($translate["use"]()== "zh")?true:false;return $rootScope["step"]= "login",$rootScope["isVirgin"]=  !storage["get"]("lastLoginName"),$rootScope["serverAddressEmpty"]= function()
			{
				if(!$rootScope["server_address"]|| $rootScope["server_address"]=== "")
				{
					return true
				}
				return false
			}
			,$rootScope["validateNameFormat"]= function(e)
			{
				var r;
				if(!e|| e=== '')
				{
					return false
				}
				return r= validate["phone"](e)|| validate["email"](e)
			}
			,$rootScope["validateEmailFormat"]= function(e)
			{
				var r;
				if(!e|| e=== '')
				{
					return false
				}
				return r= validate["email"](e)
			}
			,$rootScope["betweenCertInterval"]= function()
			{
				var e;
				return SERVER_CERT_INTERVAL[0]< (e=  new Date)&& e< SERVER_CERT_INTERVAL[1]
			}
			,$scope["search"]= function()
			{
				return $location["search"]()
			}
			,$scope["setupServerAddress"]= function()
			{
				return $rootScope["serverAddressModal"]= $modal({templateUrl:"partials/login/modals/server_address.html",show:true})
			}
			,$rootScope["isVirgin"]&& ($rootScope["step"]= "login"),$rootScope.$watch("step",function(e)
			{
				return $location["path"]("/"+ e)
			}
			)
		}
		;
		return angular["module"]("login")["controller"]("LoginPageController",['$rootScope','$scope','$location','$translate','$modal','teleScope','storage','validate','userManager','VER','LOGIN_EVENT_NAME','SERVER_CERT_INTERVAL','LOCALES',LoginPageController])
	}
	,define(libs,LoginPageControllerOps)
}
)["call"](this)