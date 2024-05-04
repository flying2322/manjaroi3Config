(function()
{
    var libs,RegisterControllerOps;
    libs= ["angular","app","services/pageManager","services/server","services/userManager","services/storage","services/validate","services/track","services/teleScope","services/generate","login/module"],RegisterControllerOps= function(angular)
    {
        var RegisterController=function($rootScope,$scope,$translate,$sce,$http,$location,$timeout,$modal,pageManager,userManager,server,teleScope,storage,validate,generate,track,VER,SERVER,TRIAL_SERVER,REST_CONTEXT_PATH,ERROR_LOGIN_TRAIL_CANNOT_CONNECT,ERROR_LOGIN_UNKNOWN,ERROR_LOGIN_TIME,ERROR_LOGIN_VERSION,LOGIN_EVENT_NAME,LOCALES)
        {
            $scope["retries"]= 0;$scope["retry_num"]= 3;return $scope["name"]= "",$scope["show_server_addr"]= false,$scope["get_host_fails"]= false,$scope["checkedHost"]= false,$scope["ws_host_url"]= "",$rootScope["step"]= "register",$scope["password"]= "",$scope["password2"]= "",$scope["invitation_code"]= "",$scope["agreeToS"]= false,$scope["alertAgreeToS"]= false,$scope["showInvitationCode"]= false,$scope["invitationVerified"]= false,$scope["focuses"]= {host:false,name:true,password:false,password2:false,invitation_code:false},$scope["submitting"]= false,$scope["checkingName"]= false,$scope["clearFormValidity"]= function()
            {
                return $scope["register"]["host"].$setValidity("format",true),$scope["register"]["name"].$setValidity("server",true),$scope["register"]["password"].$setValidity("mismatch",true),$scope["register"]["name"].$setValidity("notTaken",true),$scope["register"]["host"].$setValidity("format",true)
            }
            ,$scope["toggleAgreeToS"]= function()
            {
                $scope["alertAgreeToS"]= false;$scope["agreeToS"]=  !$scope["agreeToS"]
            }
            ,$scope["openToS"]= function()
            {
                $scope["alertAgreeToS"]= false;$scope["agreeToS"]=  !$scope["agreeToS"];$rootScope["ToSModal"]= $modal({templateUrl:'/partials/login/ToS.html',show:true,backdrop:'false'})
            }
            ,$scope["toggleShowInvitationCode"]= function()
            {
                $scope["showInvitationCode"]=  !$scope["showInvitationCode"]
            }
            ,$scope["validateEmailFormat"]= function(e)
            {
                var r;
                if(!e|| e=== '')
                {
                    return false
                }
                $scope["register"]["name"].$setValidity("notTaken",true);return r= validate["email"](e)
            }
            ,$scope["openVersionExpired"]= function()
            {
                $rootScope["versionExpiredUrl"]= url;$rootScope["versionExpiredModal"]= $modal({templateUrl:'partials/login/modals/version_expired.html',backdrop:false,show:true,scope:$scope})
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
            ,$scope["showVerificationCodeModal"]= function()
            {
                $rootScope["emailVerificationModal"]= $modal({templateUrl:"partials/login/modals/email_verification.html",animation:'am-fade-and-slide-top',backdrop:false,show:true,scope:$scope})
            }
            ,$scope["validateInvitationCode"]= function(succ,fail)
            {
                var ws_host_url=$scope["ws_host_url"];
                if(!ws_host_url["endsWith"]('/'))
                {
                    ws_host_url= ws_host_url+ "/"
                }
                var reqUrl=ws_host_url+ REST_CONTEXT_PATH+ "/user/validateInvitationCode";
                $http({method:'POST',url:reqUrl,timeout:3000,params:{i:$scope["invitation_code"]["hexEncode"](),v:generate["md5"](VER),l:$translate["use"]()}})["success"](function(resp)
                {
                    if(resp["error"])
                    {
                        var msg;
                        var oops=$translate["instant"]("login.errors.invitation_code");
                        var error=resp["error"]?resp["error"]["hexDecode"]():null;
                        if(!error)
                        {
                            msg= $sce["trustAsHtml"]($translate["instant"]('login.errors.invitation_code_desc')).toString()
                        }
                        else 
                        {
                            if(error=== 'INVITATION')
                            {
                                msg= $sce["trustAsHtml"]($translate["instant"]('login.errors.invitation_code_desc')).toString()
                            }
                            else 
                            {
                                if(error=== 'INVITATION_USED_OR_EXPIRED')
                                {
                                    msg= $sce["trustAsHtml"]($translate["instant"]('login.errors.invitation_code_used_or_expired')).toString()
                                }
                            }
                        }
                        Swal({type:'error',title:oops,html:msg});$scope["invitationVerified"]= false;if(fail)
                        {
                            fail()
                        }
                        return
                    }
                    if(resp["exists"])
                    {
                        $scope["invitationVerified"]= true;if(succ)
                        {
                            succ()
                        }
                        return
                    }
                }
                )["error"](function()
                {
                    $scope["submitting"]= false;Swal($translate["instant"]("common.oops"),$translate["instant"]("login.errors.try_again"),'error');$scope["invitationVerified"]= false;if(fail)
                    {
                        fail()
                    }
                }
                )["finally"](function()
                {
                }
                )
            }
            ,$scope["validateConfirmedPassword"]= function(e)
            {
                return $scope["password"]&& $scope["password2"]?e=== $scope["password"]?true:void(0):true
            }
            ,$scope["registerEmail"]= function()
            {
                if(!$scope["agreeToS"])
                {
                    $scope["alertAgreeToS"]= true;return
                }
                $scope["submitting"]= true;if($scope["ws_host_url"]=== ""||  !$scope["checkedHost"])
                {
                    var fail=function()
                    {
                        if($scope["retries"]< $scope["retry_num"])
                        {
                            $scope["retries"]+= 1;$scope["registerEmail"](true)
                        }
                        else 
                        {
                            $scope["show_server_addr"]= true;$scope["submitting"]= false;$scope["login"]["name"]["$stateVisible"]= true;$scope["login"]["name"].$setValidity("server",false);Swal({type:'error',title:$translate["instant"]('login.errors.cannot_connect_title'),html:$sce["trustAsHtml"]($translate["instant"]('login.errors.cannot_connect_msg')).toString()})
                        }
                    }
                    ;
                    $scope["getReqURL"]($scope["registerEmail"],fail);return
                }
                if($scope["invitation_code"]!== ""&&  !$scope["invitationVerified"])
                {
                    var fail=function()
                    {
                        $scope["invitation_code"]= ""
                    }
                    ;
                    $scope["validateInvitationCode"]($scope["registerEmail"],fail);$scope["submitting"]= false;return
                }
                if($scope["password"]=== ''|| $scope["password"]!== $scope["password2"])
                {
                    $scope["submitting"]= false;return
                }
                if(!$rootScope["validateNameFormat"]($scope["name"]))
                {
                    $scope["register"]["name"].$setValidity("notTaken",false);$scope["checkingName"]= false;$scope["submitting"]= false;return
                }
                var ws_host_url=$scope["ws_host_url"];
                if(!ws_host_url["endsWith"]('/'))
                {
                    ws_host_url= ws_host_url+ "/"
                }
                var url=validate["get_server_addr"](document,ws_host_url);
                $http["get"](ws_host_url+ REST_CONTEXT_PATH+ "/user/name_register",{timeout:5000,params:{n:$scope["name"]["hexEncode"](),i:$scope["invitation_code"]["hexEncode"](),v:generate["md5"](VER),l:$translate["use"]()}})["success"](function(e)
                {
                    $rootScope["ws_host_url"]= ws_host_url;if(e&& e["exists"]== false)
                    {
                        if(e["nonWhitelist"])
                        {
                            Swal({title:$translate["instant"]("common.notice"),html:e["msg"]?e["msg"]["hexDecode"]():'',type:'warning',showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33',confirmButtonText:$translate["instant"]("login.proceed_register"),cancelButtonText:$translate["instant"]("login.not_proceed_register")})["then"]((result)=>
                            {
                                if(result["value"])
                                {
                                    $scope["showVerificationCodeModal"]();$scope.$apply(function()
                                    {
                                    }
                                    )
                                }
                                else 
                                {
                                    $scope.$apply(function()
                                    {
                                        $scope["submitting"]= false;$scope["checkingName"]= false
                                    }
                                    )
                                }
                            }
                            );return
                        }
                        else 
                        {
                            $scope["showVerificationCodeModal"]();$scope["submitting"]= false
                        }
                    }
                    else 
                    {
                        if(e["exists"])
                        {
                            var msg=e["msg"]?e["msg"]["hexDecode"]():$translate["instant"]("login.errors.account_taken");
                            Swal({title:$translate["instant"]("common.oops"),html:msg,type:'error'});$scope["register"]["name"].$setValidity("notTaken",false);$scope["checkingName"]= false;$scope["submitting"]= false
                        }
                        else 
                        {
                            var msg=e["msg"]?e["msg"]:"";
                            Swal({title:$translate["instant"]("common.oops"),html:msg,type:'error'});$scope["register"]["name"].$setValidity("notTaken",false);$scope["checkingName"]= false;$scope["submitting"]= false
                        }
                    }
                }
                )["error"](function()
                {
                    Swal({title:$translate["instant"]("common.oops"),html:$translate["instant"]("login.errors.try_again"),type:'error'})
                }
                )["finally"](function()
                {
                    return $scope["checkingName"]= false
                }
                )
            }
        }
        ;
        return angular["module"]("login")["controller"]("RegisterController",['$rootScope','$scope','$translate','$sce','$http','$location','$timeout','$modal','pageManager','userManager','server','teleScope','storage','validate','generate','track','VER','SERVER','TRIAL_SERVER','REST_CONTEXT_PATH','ERROR_LOGIN_TRAIL_CANNOT_CONNECT','ERROR_LOGIN_UNKNOWN','ERROR_LOGIN_TIME','ERROR_LOGIN_VERSION','LOGIN_EVENT_NAME','LOCALES',RegisterController])
    }
    ,define(libs,RegisterControllerOps)
}
)["call"](this)