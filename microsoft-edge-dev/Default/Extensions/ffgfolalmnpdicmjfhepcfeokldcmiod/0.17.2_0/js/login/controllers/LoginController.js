(function()
{
    var libs,LoginControllerOps;
    libs= ["angular","jquery","app","services/pageManager","services/storage","services/validate","services/generate","services/server","services/track","services/teleScope","services/userManager","services/timeUtils","login/module",'login/controllers/ForgetPasswordModalController','options/controllers/OptionsPageController'],LoginControllerOps= function(angular,jquery)
    {
        var LoginController=function($scope,$rootScope,$translate,$sce,$location,$http,$timeout,$modal,pageManager,validate,generate,storage,userManager,server,track,teleScope,timeUtils,VER,LOGIN_EVENT_NAME,ERROR_LOGIN_UNKNOWN,ERROR_LOGIN_TIME,ERROR_LOGIN_VERSION,ERROR_LOGIN_TRAIL_CANNOT_CONNECT,TRIAL_SERVER,REST_CONTEXT_PATH)
        {
            $scope["ver"]= VER;$scope["retries"]= 0;$scope["retry_num"]= 3;$scope["ws_host_url"]= "";$scope["show_server_addr"]= false;$scope["get_host_fails"]= false;$timeout(function()
            {
                $rootScope.$watch("wsConnected",function(newValue,oldValue)
                {
                    if($rootScope["wsConnected"])
                    {
                        pageManager["gotoOptions"]()
                    }
                }
                )
            }
            ,1* 1000);return $scope["rememberChecked"]= storage["get"]('rememberChecked',false),$scope["name"]= $location["search"]()["name"]|| $scope["rememberChecked"]?storage["get"]("lastLoginName",""):'',$scope["checkedHost"]= false,$scope["password"]= "",$rootScope["step"]= "login",$scope["focuses"]= {host:false,name:true,password:false},$scope["submitting"]= false,$scope["checkingName"]= false,$scope["clearFormValidity"]= function()
            {
                $scope["get_host_fails"]= false;return $scope["login"]["name"].$setValidity("notExisted",true),$scope["login"]["name"].$setValidity("server",true),$scope["login"]["password"].$setValidity("mismatch",true),$scope["login"]["host"].$setValidity("format",true)
            }
            ,$scope["toggleRemember"]= function()
            {
                $scope["rememberChecked"]=  !$scope["rememberChecked"]
            }
            ,$scope["checkHost"]= function()
            {
                var valid=validate["server_addr"](document,$rootScope["server_address"]);
                if(!valid)
                {
                    $scope["login"]["host"].$setValidity("format",false);$scope["submitting"]= false;$scope["focuses"]= {host:true,name:false,password:false};return false
                }
                return !valid
            }
            ,$scope["showForgetPasswordModal"]= function()
            {
                $scope["focuses"]= {host:false,name:false,password:false};$rootScope["forgetPasswordModal"]= $modal({templateUrl:"partials/login/modals/forget_password.html",animation:'am-fade-and-slide-top',backdrop:true,show:true,scope:$scope})
            }
            ,$scope["openVersionExpired"]= function(url)
            {
                $rootScope["versionExpiredUrl"]= url;$rootScope["versionExpiredModal"]= $modal({template:'partials/login/modals/version_expired.html',backdrop:false,show:true,scope:$scope})
            }
            ,$scope["getReqURL"]= function(succ,fail)
            {
                var oops=$translate["instant"]('common.oops');
                var host_cannot_connect_desc=$sce["trustAsHtml"]($translate["instant"]('login.host_cannot_connect_desc')).toString();
                var server=null;
                var reqUrl=null;
                var secure=true;
                if($rootScope["serverAddressEmpty"]()|| $scope["get_host_fails"])
                {
                    for(var i=0;i< TRIAL_SERVER["length"];i++)
                    {
                        server= TRIAL_SERVER[Math["floor"]((Math["random"]()* TRIAL_SERVER["length"]))];if($translate["use"]()=== 'en')
                        {
                            if(!server["startsWith"]("https"))
                            {
                                continue
                            }
                        }
                        else 
                        {
                            if(server["startsWith"]("https"))
                            {
                                continue
                            }
                        }
                        if(!server["endsWith"]('/'))
                        {
                            server= server+ "/"
                        }
                        if($scope["name"]&& $scope["name"]!== '')
                        {
                            reqUrl= server+ REST_CONTEXT_PATH+ "/host/get_user_host"
                        }
                        else 
                        {
                            reqUrl= server+ REST_CONTEXT_PATH+ "/host/get"
                        }
                        secure=  !server["startsWith"]("https")?false:true;break
                    }
                    if(!reqUrl)
                    {
                        if(!$scope["get_host_fails"])
                        {
                            Swal({type:'error',title:oops,html:host_cannot_connect_desc})
                        }
                        $scope["get_host_fails"]= true;if(fail)
                        {
                            fail()
                        }
                        return
                    }
                }
                else 
                {
                    server= $rootScope["server_address"];if(!server["endsWith"]('/'))
                    {
                        server= server+ "/"
                    }
                    if($scope["name"]&& $scope["name"]!== '')
                    {
                        reqUrl= server+ REST_CONTEXT_PATH+ "/host/get_user_host"
                    }
                    else 
                    {
                        reqUrl= server+ REST_CONTEXT_PATH+ "/host/get"
                    }
                    secure=  !reqUrl["startsWith"]("https")?false:true
                }
                $http({method:'GET',url:reqUrl,timeout:3000,params:{n:$scope["name"]["hexEncode"](),v:generate["md5"](VER),l:$translate["use"](),s:secure}})["success"](function(resp)
                {
                    var oops=$translate["instant"]('common.oops');
                    var msg=resp["msg"]?resp["msg"]["hexDecode"]():null;
                    if(!msg)
                    {
                        msg= $sce["trustAsHtml"]($translate["instant"]('login.host_cannot_connect_desc')).toString()
                    }
                    if(resp["error"])
                    {
                        if(resp["error"]=== "VER")
                        {
                            var url=resp["u"]?resp["u"]["hexDecode"]():'';
                            $scope["openVersionExpired"](url);return
                        }
                        Swal({type:'error',title:oops,html:msg});$scope["get_host_fails"]= true;return
                    }
                    if(!resp["u"])
                    {
                        $scope["get_host_fails"]= true;Swal({type:'error',title:oops,html:msg});return
                    }
                    respUrl= resp["u"]["hexDecode"]();$scope["ws_host_url"]= respUrl;$scope["checkedHost"]= true;$scope["local_ip"]= resp["ip"];if(succ)
                    {
                        succ()
                    }
                }
                )["error"](function()
                {
                    $scope["get_host_fails"]= true;if(fail)
                    {
                        fail()
                    }
                }
                )["finally"](function()
                {
                }
                )
            }
            ,$scope["doLogin"]= function(retry)
            {
                $scope["submitting"]= true;if($scope["ws_host_url"]=== ""||  !$scope["checkedHost"]|| retry)
                {
                    var fail=function()
                    {
                        if($scope["retries"]< $scope["retry_num"])
                        {
                            $scope["retries"]+= 1;$scope["doLogin"](true)
                        }
                        else 
                        {
                            $scope["show_server_addr"]= true;$scope["submitting"]= false;$scope["login"]["name"]["$stateVisible"]= true;$scope["login"]["name"].$setValidity("server",false);Swal({type:'error',title:$translate["instant"]('login.errors.cannot_connect_title'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.cannot_connect_msg')).toString()})
                        }
                    }
                    ;
                    $scope["getReqURL"]($scope["doLogin"],fail);return
                }
                if($scope["name"]=== ''||  !validate["email"]($scope["name"]))
                {
                    $scope["login"]["name"]["$stateVisible"]= true;if($scope["login"])
                    {
                        $scope["login"]["name"].$setValidity("format",false)
                    }
                    $scope["focuses"]= {host:false,name:true,password:false};Swal({type:'error',title:$translate["instant"]('login.errors.error'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.format')).toString()});$scope["submitting"]= false;return false
                }
                var ws_host_url=$scope["ws_host_url"];
                if(!ws_host_url["endsWith"]('/'))
                {
                    ws_host_url= ws_host_url+ "/"
                }
                var url=validate["get_server_addr"](document,ws_host_url);
                var url_string=validate["get_server_addr_string"](document,ws_host_url);
                var time=timeUtils["milliTime"]();
                $http({method:'POST',url:ws_host_url+ REST_CONTEXT_PATH+ "/user/login_post",timeout:5000,data:$["param"]({n:$scope["name"]["hexEncode"](),p:generate["md5"]($scope["password"]),v:generate["md5"](VER),f:true,l:$translate["use"](),h:url["host"]["hexEncode"](),u:url_string["hexEncode"](),s:!ws_host_url["startsWith"]("https")?false:true,i:$scope["local_ip"],t:time+ '',c:("app-"+ String["prototype"]["hexDecode"].toString()["length"]+ ","+ "login-"+ $scope["doLogin"].toString()["length"]+ ','+ "OptionsPageController-"+ OptionsPageControllerFinger.toString()["length"])["hexEncode"]()}),headers:{'Content-Type':'application/x-www-form-urlencoded'}})["success"](function(resp)
                {
                    if(resp["error"])
                    {
                        var title=$translate["instant"]('common.oops');
                        var oops=$translate["instant"]('common.oops');
                        var msg=resp["msg"]?resp["msg"]["hexDecode"]():null;
                        if(!msg)
                        {
                            msg= $sce["trustAsHtml"]($translate["instant"]('login.error_in_sign_in')).toString()
                        }
                        $scope["submitting"]= false;$scope["disableInput"]= false;if("PASSWORD"=== resp["error"])
                        {
                            $scope["login"]["password"]["$stateVisible"]= true;$scope["login"]["password"].$setValidity("mismatch",false);Swal({type:'error',title:$translate["instant"]('login.errors.error'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.mismatch')).toString()});return
                        }
                        else 
                        {
                            if("NAME"=== resp["error"])
                            {
                                $scope["login"]["name"]["$stateVisible"]= true;$scope["login"]["name"].$setValidity("notExisted",false);$scope["focuses"]["name"]= true;Swal({type:'error',title:$translate["instant"]('login.errors.error'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.notExisted')).toString()});return
                            }
                            else 
                            {
                                if("TIME"=== resp["error"])
                                {
                                    Swal({type:'error',title:$translate["instant"]('login.errors.error'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.systime_error')).toString()})
                                }
                                else 
                                {
                                    if("SESSIONS"=== resp["error"])
                                    {
                                        storage["set"]('rememberChecked',$scope["rememberChecked"]);var afterSigninData={lastServer_scheme:url["scheme"]|| '',lastServer_host:url["host"]|| '',lastServer_port:url["port"]|| 0,lastServer_contextPath:url["contextPath"]|| '',n:$scope["name"],p:$scope["password"],ip:resp["ip"]|| '',ip_region:resp["ip_region"]|| '',port:resp["port"]|| 0};
                                        userManager["saveSigninData"](afterSigninData,resp);resp["name"]= $scope["name"];resp["kicked"]= true;userManager["load"](resp);pageManager["gotoKickSessions"]();return
                                    }
                                    else 
                                    {
                                        if("CUSTOM"=== resp["error"])
                                        {
                                        }
                                    }
                                }
                            }
                        }
                        Swal({type:'error',title:title,html:msg});return
                    }
                    storage["set"]('rememberChecked',$scope["rememberChecked"]);var afterSigninData={lastServer_scheme:url["scheme"]|| '',lastServer_host:url["host"]|| '',lastServer_port:url["port"]|| 0,lastServer_contextPath:url["contextPath"]|| '',n:$scope["name"],p:$scope["password"],ip:resp["ip"]|| '',ip_region:resp["ip_region"]|| '',port:resp["port"]|| 0};
                    if(afterSigninData["lastServer_contextPath"]== null|| afterSigninData["lastServer_contextPath"]=== "")
                    {
                        afterSigninData["lastServer_contextPath"]= "/"
                    }
                    userManager["saveSigninData"](afterSigninData,resp);userManager["setSid"](resp["sid"]);$rootScope["signin"]= false;teleScope["link"]('signin');userManager["checkin"](resp["apiUrl"])["then"](function()
                    {
                        $rootScope.$watch('signin',function()
                        {
                            if($rootScope["signin"])
                            {
                                pageManager["gotoOptions"]()
                            }
                        }
                        ,true)
                    }
                    )
                }
                )["error"](function()
                {
                    if($scope["retries"]< $scope["retry_num"])
                    {
                        $scope["retries"]+= 1;$scope["doLogin"](true);return
                    }
                    $scope["login"]["name"].$setValidity("server",false);$scope["submitting"]= false;var title=null;
                    var msg=null;
                    if($scope["betweenCertInterval"]())
                    {
                        title= $translate["instant"]('login.unknown_error_title');msg= $sce["trustAsHtml"]($translate["instant"]('login.unknown_error_desc')).toString()
                    }
                    else 
                    {
                        title= $translate["instant"]('login.sys_time_error_title');msg= $sce["trustAsHtml"]($translate["instant"]('login.sys_time_error_desc')).toString()
                    }
                    Swal({type:'error',title:title,html:msg})
                }
                )
            }
        }
        ;
        return angular["module"]("login")["controller"]("LoginController",['$scope','$rootScope','$translate','$sce','$location','$http','$timeout','$modal','pageManager','validate','generate','storage','userManager','server','track','teleScope','timeUtils','VER','LOGIN_EVENT_NAME','ERROR_LOGIN_UNKNOWN','ERROR_LOGIN_TIME','ERROR_LOGIN_VERSION','ERROR_LOGIN_TRAIL_CANNOT_CONNECT','TRIAL_SERVER','REST_CONTEXT_PATH',LoginController])
    }
    ,define(libs,LoginControllerOps)
}
)["call"](this)