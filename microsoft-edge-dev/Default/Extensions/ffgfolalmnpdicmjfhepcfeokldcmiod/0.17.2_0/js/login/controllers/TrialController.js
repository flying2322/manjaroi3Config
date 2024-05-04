(function()
{
    var libs,TrialControllerOps;
    libs= ["angular","jquery","app","services/pageManager","services/storage","services/validate","services/generate","services/server","services/teleScope","services/userManager","services/track","services/timeUtils","login/module"],TrialControllerOps= function(angular,jquery)
    {
        var TrialController=function($scope,$rootScope,$translate,$sce,$location,$http,$timeout,$modal,$log,pageManager,validate,generate,storage,userManager,server,teleScope,track,timeUtils,REST_CONTEXT_PATH,TRIAL_SERVER,VER,LOGIN_EVENT_NAME,ERROR_LOGIN_UNKNOWN,ERROR_LOGIN_TIME,ERROR_LOGIN_VERSION,ERROR_LOGIN_TRAIL_CANNOT_CONNECT)
        {
            $scope["retries"]= 0;$scope["retry_num"]= 3;$scope["submitting"]= false;var anonymousId=''["getRandomToken"](4);
            $scope["name"]= "anonymous_"+ anonymousId;$scope["get_host_fails"]= false;$scope["show_server_addr"]= false;$scope["ws_host_url"]= "";return $scope["pass"]= "anonymous",$scope["openVersionExpired"]= function()
            {
                $rootScope["versionExpiredUrl"]= url;$rootScope["versionExpiredModal"]= $modal({template:'partials/login/modals/version_expired.html',backdrop:false,show:true,scope:$scope})
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
                        reqUrl= server+ REST_CONTEXT_PATH+ "/host/get";secure=  !server["startsWith"]("https")?false:true;break
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
                    reqUrl= server+ REST_CONTEXT_PATH+ "/host/get";secure=  !reqUrl["startsWith"]("https")?false:true
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
            ,$scope["doGoTrial"]= function(retry)
            {
                $scope["submitting"]= true;if($scope["ws_host_url"]=== ""|| retry)
                {
                    var fail=function()
                    {
                        if($scope["retries"]< $scope["retry_num"])
                        {
                            $scope["retries"]+= 1;$scope["doGoTrial"](true)
                        }
                        else 
                        {
                            $scope["show_server_addr"]= true;$scope["submitting"]= false;$scope["login"]["name"]["$stateVisible"]= true;$scope["login"]["name"].$setValidity("server",false);Swal({type:'error',title:$translate["instant"]('login.errors.cannot_connect_title'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.cannot_connect_msg')).toString()})
                        }
                    }
                    ;
                    $scope["getReqURL"]($scope["doGoTrial"],fail);return
                }
                var ws_host_url=$scope["ws_host_url"];
                if(!ws_host_url["endsWith"]('/'))
                {
                    ws_host_url= ws_host_url+ "/"
                }
                var url=validate["get_server_addr"](document,ws_host_url);
                var time=timeUtils["milliTime"]();
                return $http({method:'POST',timeout:5000,url:ws_host_url+ REST_CONTEXT_PATH+ "/user/login_post",data:$["param"]({n:$scope["name"]["hexEncode"](),v:generate["md5"](VER),f:false,l:$translate["use"](),h:url["host"]["hexEncode"](),i:$scope["local_ip"],t:time+ '',s:!url["scheme"]["startsWith"]("https")?false:true}),headers:{'Content-Type':'application/x-www-form-urlencoded'}})["success"](function(resp)
                {
                    if(resp["error"])
                    {
                        var title=$translate["instant"]('common.oops');
                        var oops=$translate["instant"]('common.oops');
                        var msg=resp["msg"]?resp["msg"]["hexDecode"]():null;
                        if(!msg)
                        {
                            msg= $sce["trustAsHtml"]($translate["instant"]('login.error_in_sign_in')).toString();Swal({type:'error',title:title,html:msg});return
                        }
                        if("TIME"=== resp["error"])
                        {
                            Swal({type:'error',title:$translate["instant"]('login.errors.error'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.systime_error')).toString()})
                        }
                        return
                    }
                    var afterSigninData={lastServer_scheme:url["scheme"]|| '',lastServer_host:url["host"]|| '',lastServer_port:url["port"]|| 0,lastServer_contextPath:url["contextPath"]|| '',n:$scope["name"],p:$scope["password"],ip:resp["ip"]|| '',ip_region:resp["ip_region"]|| '',port:resp["port"]|| 0};
                    if(afterSigninData["lastServer_contextPath"]== null|| afterSigninData["lastServer_contextPath"]=== "")
                    {
                        afterSigninData["lastServer_contextPath"]= "/"
                    }
                    userManager["saveSigninData"](afterSigninData,resp);resp["name"]= 'guest';userManager["setSid"](resp["sid"]);$rootScope["signin"]= false;teleScope["link"]('signin');userManager["checkin"](resp["apiUrl"])["then"](function()
                    {
                        $rootScope.$watch('signin',function()
                        {
                            if($rootScope["signin"])
                            {
                                pageManager["gotoOptions"]();track["pv"]("/chrome-extension/register/success")
                            }
                        }
                        ,true)
                    }
                    );storage["remove"]("lastLoginName");storage["remove"]("rememberChecked");storage["remove"]("notShowNewcomerInfoAlert")
                }
                )["error"](function()
                {
                    var title=null;
                    var msg=null;
                    if($scope["betweenCertInterval"]())
                    {
                        title= $translate["instant"]('login.unknown_error_title');msg= $sce["trustAsHtml"]($translate["instant"]('login.unknown_error_desc')).toString()
                    }
                    else 
                    {
                        title= $translate["instant"]('login.sys_time_error_title');msg= $sce["trustAsHtml"]($translate["instant"]('login.sys_time_error_desc')).toString()
                    }
                    Swal({type:'error',title:title,html:msg});$scope["submitting"]= false
                }
                )["finally"](function()
                {
                    return
                }
                )
            }
        }
        ;
        return angular["module"]("login")["controller"]("TrialController",['$scope','$rootScope','$translate','$sce','$location','$http','$timeout','$modal','$log','pageManager','validate','generate','storage','userManager','server','teleScope','track','timeUtils','REST_CONTEXT_PATH','TRIAL_SERVER','VER','LOGIN_EVENT_NAME','ERROR_LOGIN_UNKNOWN','ERROR_LOGIN_TIME','ERROR_LOGIN_VERSION','ERROR_LOGIN_TRAIL_CANNOT_CONNECT',TrialController])
    }
    ,define(libs,TrialControllerOps)
}
)["call"](this)