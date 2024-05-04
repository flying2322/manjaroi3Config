(function()
{
    var libs,GrabWheatModalControllerOps;
    libs= ["angular","jquery","options/module","core/filters/durationToNow","core/filters/milliSecondsToHourMinText","services/userManager"],GrabWheatModalControllerOps= function(angular,jquery)
    {
        var GrabWheatModalController,i;
        return GrabWheatModalController= function($scope,$rootScope,$timeout,$translate,$element,$modal,userManager,ROLES,WHEAT_STATUS)
        {
            var verify_confirm_button_txt=$translate["instant"]("common.cancel");
            var verify_title=$translate["instant"]("options.layout.grab_wheat.slide_verify_title");
            var verify_success=$translate["instant"]("options.layout.grab_wheat.slide_verify_succ");
            var slide_verify_alert_title=$translate["instant"]("options.layout.grab_wheat.slide_verify_alert_title");
            var verify_img_not_show=$translate["instant"]("options.layout.grab_wheat.verify_img_not_show");
            $scope["initAlertText"]= $translate["instant"]("options.layout.grab_wheat.init_alert");$scope["notShowAgainChecked"]= false;$scope["initAlertStyle"]= 'alert-info';$scope["alertText"]= $scope["initAlertText"];$scope["alertStyle"]= $scope["initAlertStyle"];$rootScope["countDown"]= 'Waiting';$scope["interval"]= setInterval(function()
            {
                var i;
                var wheats=$rootScope["user"]["wheats"];
                if(wheats&& wheats["length"]> 0&& $rootScope["wheats_loading"]== false)
                {
                    var now= new Date()["getTime"]();
                    for(i= 0;i< wheats["length"];i++)
                    {
                        var wheat=wheats[i];
                        if(wheat["status"]=== WHEAT_STATUS["WAITING"])
                        {
                            var distance=$rootScope["user"]["last_wheat_action_time"]+ wheat["wait_time"]- now;
                            if(distance> 0)
                            {
                                var hours=Math["floor"]((distance% (1000* 60* 60* 24))/ (1000* 60* 60));
                                var minutes=Math["floor"]((distance% (1000* 60* 60))/ (1000* 60));
                                var seconds=Math["floor"]((distance% (1000* 60))/ 1000);
                                $rootScope["countDown"]= (hours< 10?'0'+ hours:hours)+ ":"+ (minutes< 10?'0'+ minutes:minutes)+ ":"+ (seconds< 10?'0'+ seconds:seconds)+ "";$scope.$apply(function()
                                {
                                }
                                )
                            }
                            else 
                            {
                                $rootScope["wheats_loading"]= true;userManager["reloadWheat"](wheat._id,true)
                            }
                            return
                        }
                        else 
                        {
                            if(wheat["status"]=== WHEAT_STATUS["READY"]|| wheat["status"]=== WHEAT_STATUS["FETCHING"])
                            {
                                return
                            }
                        }
                    }
                    for(i= 0;i< wheats["length"];i++)
                    {
                        if(wheat["status"]=== WHEAT_STATUS["FETCHED"])
                        {
                            continue
                        }
                        return
                    }
                }
            }
            ,1000);$scope["wheats"]= function()
            {
                return $rootScope["user"]["wheats"]
            }
            ;$scope["collectWheat"]= function(wheat)
            {
                let timerInterval;
                Swal({title:verify_title,confirmButtonText:verify_confirm_button_txt,html:'<div id=\"slideVerify\">'+ '<div class=\"image\">'+ '<div class=\"chip2\"></div>'+ '<div class=\"chip\"></div>'+ '</div>'+ '<div class=\"drag\">'+ '<div class=\"bg\"></div>'+ '<div class=\"text\" onselectstart=\"return false;\">'+ verify_title+ '</div>'+ '<div class=\"btn\">&gt;&gt;</div>'+ '</div>'+ '</div>',onBeforeOpen:()=>
                {
                    const content=Swal["getContent"]();
                    const $=content["querySelector"]["bind"](content);
                    const stop=$('#stop');
                    const resume=$('#resume');
                    const toggle=$('#toggle');
                    const increase=$('#increase');
                    var num=9;
                    var path=$rootScope["render_host"]+ '/img/chrome/';
                    var num=8;
                    var slideVerify=$('#slideVerify'),chip=slideVerify["getElementsByClassName"]('chip')[0],chip2=slideVerify["getElementsByClassName"]('chip2')[0],box=slideVerify["getElementsByClassName"]('drag')[0],bg=slideVerify["getElementsByClassName"]('bg')[0],text=slideVerify["getElementsByClassName"]('text')[0],btn=slideVerify["getElementsByClassName"]('btn')[0],image=slideVerify["getElementsByClassName"]('image')[0],offsetX,distance,sildeWidth=box["offsetWidth"]- btn["offsetWidth"],status=false,imgAt=Math["floor"](Math["random"]()* num);
                    if(!sildeWidth)
                    {
                        sildeWidth= 300
                    }
                    var btn_width=40;
                    btn["style"]["left"]= 0;image["style"]["background"]= 'url('+ path+ imgAt+ '.jpg)';btn["onmousedown"]= function(e)
                    {
                        btn["style"]["transition"]= "";bg["style"]["transition"]= "";var e=e|| window["event"];
                        var downX=e["clientX"];
                        ry= Math["floor"](Math["random"]()* 80)+ 20;rx= Math["floor"](Math["random"]()* 150)+ 110;chip["style"]["background"]= 'url('+ path+ imgAt+ '.jpg)';chip["style"]["top"]= ry+ 'px';chip["style"]["backgroundPositionX"]= -rx+ 'px';chip["style"]["backgroundPositionY"]= -ry+ 'px';chip2["style"]["background"]= 'url('+ path+ imgAt+ '.jpg)';chip2["style"]["top"]= ry+ 'px';chip2["style"]["left"]= rx+ 'px';chip2["style"]["backgroundPositionX"]= -rx+ 'px';chip2["style"]["backgroundPositionY"]= -ry+ 'px';chip2["style"]['box-shadow']= '5px 5px 10px black';distance= rx;document["onmousemove"]= function(e)
                        {
                            var e=e|| window["event"];
                            var moveX=e["clientX"];
                            offsetX= moveX- downX;if(offsetX> sildeWidth)
                            {
                                offsetX= sildeWidth
                            }
                            else 
                            {
                                if(offsetX< 0)
                                {
                                    offsetX= 0
                                }
                            }
                            btn["style"]["left"]= offsetX+ "px";bg["style"]["width"]= offsetX+ "px";chip["style"]["left"]= offsetX+ "px"
                        }
                        ;document["onmouseup"]= function(e)
                        {
                            if(offsetX- distance< 8&& offsetX- distance>  -8)
                            {
                                text["innerHTML"]= verify_success;text["style"]["color"]= "#fff";btn["innerHTML"]= '<i class=\"fa fa-check\" />';btn["style"]["color"]= "green";bg["style"]["backgroundColor"]= "lightgreen";bg["style"]["width"]= sildeWidth+ "px";btn["style"]["left"]= (sildeWidth- btn_width)+ "px";status= true;btn["onmousedown"]= null;document["onmousemove"]= null;image["onmousedown"]= null;Swal["close"]();Swal({type:'success',title:slide_verify_alert_title,text:''});userManager["fetchWheat"](wheat._id);$rootScope["inc_vip_time"]= wheat["vip_time"]
                            }
                            else 
                            {
                                btn["style"]["left"]= 0;bg["style"]["width"]= 0;imgAt= Math["floor"](Math["random"]()* num);image["style"]["background"]= 'url('+ path+ imgAt+ '.jpg)';chip["style"]["background"]= null;chip2["style"]["background"]= null;chip2["style"]['box-shadow']= null
                            }
                            document["onmousemove"]= null;document["onmouseup"]= null;document["touchmove"]= null;document["touchend"]= null
                        }
                    }
                    ;btn["touchstart"]= btn["onmousedown"]
                }
                ,onClose:()=>
                {
                }
                })["then"]((result)=>
                {
                }
                )
            }
            ;$scope["close"]= function()
            {
                $scope["closeModal"]()
            }
            ;return $scope["closeModal"]= function()
            {
                clearInterval($scope["interval"]);$rootScope["grabWheatModal"]["hide"]();return $rootScope["grabWheatModal"]["destroy"]()
            }
        }
        ,angular["module"]("options")["controller"]("GrabWheatModalController",['$scope','$rootScope','$timeout','$translate','$element','$modal','userManager','ROLES','WHEAT_STATUS',GrabWheatModalController])
    }
    ,define(libs,GrabWheatModalControllerOps)
}
)["call"](this)