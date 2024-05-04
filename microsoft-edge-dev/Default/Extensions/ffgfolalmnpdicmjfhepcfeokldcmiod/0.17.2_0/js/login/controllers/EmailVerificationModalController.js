(function()
{
    var libs,EmailVerificationModalControllerOps;
    libs= ["angular","login/module","services/generate","services/userManager","services/storage","services/pageManager","services/teleScope","services/track"],EmailVerificationModalControllerOps= function(angular)
    {
        var EmailVerificationModalController,i;
        return EmailVerificationModalController= function($scope,$rootScope,$http,$timeout,$translate,$sce,$log,userManager,pageManager,storage,validate,teleScope,track,generate,SERVER,VER,REST_CONTEXT_PATH)
        {
            $scope["code_sent"]= false;$scope["submit_disabled"]= true;$scope["verify_submitting"]= false;$scope["submit_no_error"]= true;$scope["submit_error_msg"]= '';$scope["code"]= '';$scope["initAlertText"]= $translate["instant"]("options.change_password.init_alert");$scope["initAlertStyle"]= 'alert-info';$scope["alertText"]= $scope["initAlertText"];$scope["alertStyle"]= $scope["initAlertStyle"];$scope["counting_down"]= 120;$scope["verify"]= function()
            {
                if($scope["code"]== '')
                {
                    Swal({title:$translate["instant"]("login.verification_code_blank_error"),html:'',type:'warning'});return
                }
                $scope["verify_submitting"]= true;var url=validate["get_server_addr"](document,$rootScope["ws_host_url"]);
                $http({method:'POST',url:$rootScope["ws_host_url"]+ REST_CONTEXT_PATH+ "/user/register",params:{n:$scope["name"]["hexEncode"](),p:$scope["password"]["hexEncode"](),i:$scope["invitation_code"],v:generate["md5"](VER),c:$scope["code"],l:$translate["use"](),f:true,s:!$rootScope["ws_host_url"]["startsWith"]("https")?false:true},headers:{'Content-Type':'application/x-www-form-urlencoded'}})["success"](function(resp)
                {
                    error= resp["error"];if(error)
                    {
                        message= resp["message"];if(error=== "NAME"&& message!== "taken")
                        {
                            $scope["submit_error_msg"]= $translate["instant"]("login.name_error")
                        }
                        else 
                        {
                            if(error=== "NAME"&& message=== "taken")
                            {
                                $scope["submit_error_msg"]= $translate["instant"]("login.name_error")
                            }
                            else 
                            {
                                if(error=== "PASSWORD"&& (!message|| message=== "minlength"))
                                {
                                    $scope["submit_error_msg"]= $translate["instant"]("login.pass_error")
                                }
                                else 
                                {
                                    if("INVITATION"=== error)
                                    {
                                        $scope["submit_error_msg"]= $translate["instant"]("login.invitation_error");Swal({title:$scope["submit_error_msg"],html:message?message["hexDecode"]():'',type:'warning',showCancelButton:false,confirmButtonColor:'#3085d6',confirmButtonText:$translate["instant"]("common.got_it")})
                                    }
                                    else 
                                    {
                                        if("INVITATION_USED_OR_EXPIRED"=== error)
                                        {
                                            $scope["submit_error_msg"]= $translate["instant"]("login.invitation_expired_error");Swal({title:$scope["submit_error_msg"],html:message?message["hexDecode"]():'',type:'warning',showCancelButton:false,confirmButtonColor:'#3085d6',confirmButtonText:$translate["instant"]("common.got_it")})
                                        }
                                        else 
                                        {
                                            if("CODE"=== error)
                                            {
                                                Swal({title:$translate["instant"]("login.verification_code_error"),html:'',type:'error'})
                                            }
                                            else 
                                            {
                                                if("NON_WHITELIST"=== resp["error"])
                                                {
                                                    Swal({title:$translate["instant"]("common.notice"),html:message?message["hexDecode"]():'',type:'warning',showCancelButton:false,confirmButtonColor:'#3085d6',confirmButtonText:$translate["instant"]("common.got_it")})["then"]((result)=>
                                                    {
                                                        if(result["value"])
                                                        {
                                                            pageManager["gotoLogin"]()
                                                        }
                                                    }
                                                    )
                                                }
                                                else 
                                                {
                                                    var def_msg=$sce["trustAsHtml"]($translate["instant"]('login.errors.reg_error')).toString();
                                                    var msg=message?message["hexDecode"]():def_msg;
                                                    Swal({title:$translate["instant"]("common.notice"),html:msg,type:'error'})
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        $scope["verify_submitting"]= false;$scope["submit_no_error"]= false;$scope["counting_down"]= 120;clearInterval($scope["counter_down"]);$scope["code_sent"]= false;return
                    }
                    var apiUrl=resp["apiUrl"];
                    var ssid=resp["sid"];
                    storage["remove"]("notShowNewcomerInfoAlert");var afterSigninData={lastServer_scheme:url["scheme"]|| '',lastServer_host:url["host"]|| '',lastServer_port:url["port"]|| 0,lastServer_contextPath:url["contextPath"]|| '',n:$scope["name"],p:$scope["password"],ip:resp["ip"]|| '',ip_region:resp["ip_region"]|| '',port:resp["port"]|| 65535};
                    userManager["saveSigninData"](afterSigninData,resp);console["log"]("2");resp["name"]= 'guest';resp["sid"]= ssid;userManager["setSid"](resp["sid"]);$rootScope["signin"]= false;teleScope["link"]('signin');console["log"]("3");userManager["checkin"](apiUrl)["then"](function()
                    {
                        console["log"]("4");$rootScope.$watch('signin',function()
                        {
                            if($rootScope["signin"])
                            {
                                pageManager["gotoOptions"]();track["pv"]("/chrome-extension/register/success")
                            }
                        }
                        ,true)
                    }
                    )
                }
                )["error"](function()
                {
                    $scope["verify_submitting"]= false;$scope["submit_no_error"]= false;$scope["counting_down"]= 120;clearInterval($scope["counter_down"]);$scope["code_sent"]= false;$scope["submit_disabled"]= true;alert($scope["betweenCertInterval"]()?ERROR_LOGIN_UNKNOWN:ERROR_LOGIN_TIME)
                }
                )["finally"](function()
                {
                }
                )
            }
            ;$scope["sendCode"]= function()
            {
                $scope["code_sent"]= true;$scope["submit_disabled"]= false;$scope["counter_down"]= setInterval(function()
                {
                    $scope["counting_down"]= $scope["counting_down"]- 1;if($scope["counting_down"]== 0)
                    {
                        $scope["code_sent"]= false;clearInterval($scope["counter_down"])
                    }
                    $scope.$digest()
                }
                ,1000);$http({method:'POST',url:$rootScope["ws_host_url"]+ REST_CONTEXT_PATH+ "/user/sendCode",params:{n:$scope["name"]["hexEncode"](),v:generate["md5"](VER),l:$translate["use"](),s:($rootScope["ws_host_url"]["startsWith"]("https"))?false:true},headers:{'Content-Type':'application/x-www-form-urlencoded'}})["success"](function(resp)
                {
                    error= resp["error"];if(error)
                    {
                        var oops=$translate["instant"]('common.oops');
                        var msg=resp["msg"]?resp["msg"]["hexDecode"]():null;
                        if(!msg)
                        {
                            msg= $sce["trustAsHtml"]($translate["instant"]('login.errors.send_code_error_desc')).toString()
                        }
                        Swal({type:'error',title:oops,html:msg});$scope["submit_no_error"]= false;$scope["counting_down"]= 120;clearInterval($scope["counter_down"]);$scope["code_sent"]= false;$scope["submit_disabled"]= true;return
                    }
                }
                )["error"](function()
                {
                    var oops=$translate["instant"]('common.oops');
                    var msg=$sce["trustAsHtml"]($translate["instant"]('login.errors.send_code_error_desc')).toString();
                    Swal({type:'error',title:oops,html:msg});$scope["counting_down"]= 120;clearInterval($scope["counter_down"]);$scope["code_sent"]= false;$scope["submit_disabled"]= true
                }
                )["finally"](function()
                {
                }
                )
            }
            ;$scope["alert"]= function(msg)
            {
                $scope["alertText"]= msg;$scope["alertStyle"]= 'alert-danger';return $timeout(function()
                {
                    $scope["alertText"]= $scope["initAlertText"];return $scope["alertStyle"]= $scope["initAlertStyle"]
                }
                ,2* 1000)
            }
            ;return $scope["closeModal"]= function()
            {
                return $rootScope["emailVerificationModal"]["destroy"]()
            }
        }
        ,angular["module"]("login")["controller"]("EmailVerificationModalController",['$scope','$rootScope','$http','$timeout','$translate','$sce','$log','userManager','pageManager','storage','validate','teleScope','track','generate','SERVER','VER','REST_CONTEXT_PATH',EmailVerificationModalController])
    }
    ,define(libs,EmailVerificationModalControllerOps)
}
)["call"](this)