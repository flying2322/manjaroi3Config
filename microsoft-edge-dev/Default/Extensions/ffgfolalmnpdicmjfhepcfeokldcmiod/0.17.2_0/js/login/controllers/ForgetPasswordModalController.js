(function()
{
    var libs,ForgetPasswordModalControllerOps;
    libs= ["angular","jquery","app","login/module","services/generate","services/userManager","services/storage","services/pageManager","services/teleScope","services/validate","services/track"],ForgetPasswordModalControllerOps= function(angular,jquery)
    {
        var ForgetPasswordModalController=function($scope,$rootScope,$document,$http,$timeout,$translate,$log,$sce,userManager,pageManager,storage,validate,teleScope,track,generate,SERVER,VER,REST_CONTEXT_PATH,TRIAL_SERVER)
        {
            $rootScope["submit_no_error"]= true;$rootScope["submit_error_msg"]= '';$scope["succ"]= false;$scope["email_cannot_be_blank"]= $translate["instant"]("login.retrieve_password_email_cannot_be_blank");$scope["email_invalid"]= $translate["instant"]("login.retrieve_password_email_invalid");$scope["email_not_found"]= $translate["instant"]("login.retrieve_password_email_not_found");$scope["email_been_sent"]= $translate["instant"]("login.retrieve_password_email_been_sent");$scope["close_title"]= $translate["instant"]("common.close");$scope["getReqURL"]= function(succ,fail)
            {
                var oops=$translate["instant"]('common.oops');
                var host_cannot_connect_desc=$sce["trustAsHtml"]($translate["instant"]('login.host_cannot_connect_desc')).toString();
                var reqUrl=null;
                var secure=true;
                for(var i=0;i< TRIAL_SERVER["length"];i++)
                {
                    var server=TRIAL_SERVER[Math["floor"]((Math["random"]()* TRIAL_SERVER["length"]))];
                    if($translate["use"]()=== 'en')
                    {
                        if(!server["startsWith"]("https"))
                        {
                            continue
                        }
                    }
                    reqUrl= server+ REST_CONTEXT_PATH+ "/host/get";secure=  !server["startsWith"]("https")?false:true;break
                }
                if(!reqUrl)
                {
                    Swal({type:'error',title:oops,html:host_cannot_connect_desc});$scope["get_host_fails"]= true;if(fail)
                    {
                        fail()
                    }
                    return
                }
                $http({method:'GET',url:reqUrl,params:{v:generate["md5"](VER),s:secure}})["success"](function(resp)
                {
                    if(resp["error"])
                    {
                        $scope["fails"]= true;return
                    }
                    if(!resp["u"])
                    {
                        $scope["fails"]= true;return
                    }
                    respUrl= resp["u"]["hexDecode"]();var parser=document["createElement"]('a');
                    parser["href"]= respUrl;SERVER["scheme"]= parser["protocol"]+ "//";SERVER["host"]= parser["host"];SERVER["port"]= parser["port"];SERVER["contextPath"]= parser["pathname"].toString();if(SERVER["contextPath"]!= null&&  !SERVER["contextPath"]["endsWith"]('/'))
                    {
                        SERVER["contextPath"]= SERVER["contextPath"]+ '/'
                    }
                    $scope["checkedHost"]= false;if(succ)
                    {
                        succ()
                    }
                }
                )["error"](function()
                {
                    if(!$scope["fails"])
                    {
                        alert(ERROR_LOGIN_TRAIL_CANNOT_CONNECT)
                    }
                    $scope["fails"]= true;if(fail)
                    {
                        fail()
                    }
                }
                )["finally"](function()
                {
                }
                )
            }
            ,$scope["send_email"]= function()
            {
                if($scope["succ"])
                {
                    $scope["closeModal"]();return
                }
                var error_msg=$document[0]["getElementById"]('error_msg');
                var error_msg_wrapper=angular["element"](document["querySelector"]('#msg-wrapper'));
                var input=angular["element"](document["querySelector"]('#forget-pass-email'));
                var email_text=$scope["forget_pass_email"];
                if(!email_text|| email_text=== '')
                {
                    error_msg_wrapper["css"]('display','');error_msg["innerHTML"]= $scope["email_cannot_be_blank"];return
                }
                if(!validate["email"](email_text))
                {
                    error_msg_wrapper["css"]('display','');error_msg["innerHTML"]= $scope["email_invalid"];return
                }
                input["css"]('display','none');var title_element=angular["element"](document["querySelector"]('#title-forget-pass-email'));
                var input_static=angular["element"](document["querySelector"]('#static-forget-pass-email'));
                title_element["css"]('display','none');var input_static_text=angular["element"](document["querySelector"]('#static-forget-pass-email-text'));
                input_static_text["innerHTML"]= email_text;var button=angular["element"](document["querySelector"]('#submit-button'));
                button["attr"]('disabled',true);var button_title=angular["element"](document["querySelector"]('#submit-button-title'));
                var button_img=angular["element"](document["querySelector"]('#submit-button-img'));
                button_title["css"]('display','none');button_img["css"]('display','');if(!SERVER["scheme"])
                {
                    var fail=function()
                    {
                    }
                    ;
                    $scope["getReqURL"]($scope["send_email"],fail);return
                }
                $http({method:'POST',url:SERVER["scheme"]+ SERVER["host"]+ SERVER["contextPath"]+ REST_CONTEXT_PATH+ "/user/sendResetPassEmail",params:{n:email_text["hexEncode"](),v:generate["md5"](VER),s:(!SERVER["scheme"]||  !SERVER["scheme"]["startsWith"]("https"))?false:true},headers:{'Content-Type':'application/x-www-form-urlencoded'}})["success"](function(resp)
                {
                    error= resp["error"];button_img["css"]('display','none');button_title["css"]('display','');error_msg_wrapper["css"]('display','');if(error)
                    {
                        title_element["css"]('display','');button["attr"]('disabled',false);input_static["css"]('display','none');input["css"]('display','');error_msg["innerHTML"]= $scope["email_not_found"];return
                    }
                    $scope["succ"]= true;input["css"]('display','none');button["css"]('display','none');button_title["innerHTML"]= $scope["close_title"];error_msg["innerHTML"]= $scope["email_been_sent"]
                }
                )["error"](function()
                {
                    button_img["css"]('display','none');button_title["css"]('display','');error_msg_wrapper["css"]('display','');title_element["css"]('display','');button["attr"]('disabled',false);input_static["css"]('display','none');input["css"]('display','');error_msg["innerHTML"]= $scope["email_not_found"]
                }
                )["finally"](function()
                {
                }
                )
            }
            ;$scope["closeModal"]= function()
            {
                return $rootScope["forgetPasswordModal"]["destroy"]()
            }
        }
        ;
        return angular["module"]("login")["controller"]("ForgetPasswordModalController",['$scope','$rootScope','$document','$http','$timeout','$translate','$log','$sce','userManager','pageManager','storage','validate','teleScope','track','generate','SERVER','VER','REST_CONTEXT_PATH','TRIAL_SERVER',ForgetPasswordModalController])
    }
    ,define(libs,ForgetPasswordModalControllerOps)
}
)["call"](this)