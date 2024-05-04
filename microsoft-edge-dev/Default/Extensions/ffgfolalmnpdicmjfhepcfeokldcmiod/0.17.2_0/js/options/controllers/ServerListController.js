(function()
{
    var libs,ServerListControllerOps;
    libs= ["angular","jquery","underscore","jquery_ui","services/validate","options/module","services/domainManager","services/proxyManager","services/teleScope","services/storage","services/timeUtils","services/domainUtils","services/teleScope","services/streamingServicesManager"],ServerListControllerOps= function(angular,jquery,_)
    {
        var ServerListController,i;
        return ServerListController= function($scope,$rootScope,$translate,$element,$modal,teleScope,storage,proxyManager,streamingServicesManager,SERVERS_MODES,ROLES,LOCALES)
        {
            var bounceWait,bounceTime;
            $scope["showServerSelect"]= false;$scope["displayServers"]= [];bounceTime= 0;bounceWait= 10;$scope["lang"]= $translate["use"]();$scope["isp_mode_tips"]= null;var sortServers=function(servers)
            {
                return servers= _["sortBy"](servers,function(server)
                {
                    return -server["score"]
                }
                )
            }
            ;
            $scope["isVIP"]= function()
            {
                return $rootScope["user"]["role"]=== ROLES["VIP"]
            }
            ;function sortableEnable()
            {
                if($rootScope["user"]["role"]!== ROLES["VIP"])
                {
                    return
                }
                $element["find"]('#servers-div .servers-list')["sortable"]({connectWith:'#servers-div .servers-list',placeholder:'placeholder',opacity:0.8,forcePlaceholderSize:true,start:function(ev,ui)
                {
                    if($rootScope["sorting"])
                    {
                        return
                    }
                    $rootScope["sorting"]= true;ui["helper"]["css"]("height","40px");ui["helper"]["height"]("40px")
                }
                ,update:function(ev,ui)
                {
                    var lis=$element["find"]('#servers-div .server-item');
                    var ret=[];
                    $rootScope["servers_loading"]= true;$rootScope["sorting"]= false;lis["each"](function()
                    {
                        if(this["id"]!= '')
                        {
                            ret["push"](this["id"])
                        }
                    }
                    );if(ret["length"]> 0)
                    {
                        $rootScope["servers_order"]= ret
                    }
                }
                });$element["find"]('#servers-div .servers-list')["sortable"]("option","disabled",false);$element["find"]('#servers-div .servers-list')["disableSelection"]();return false
            }
            function sortableDisable()
            {
                $element["find"]('#servers-div .servers-list')["sortable"]("disable");return false
            }
            if($rootScope["user"]["role"]=== ROLES["VIP"])
            {
                sortableEnable();if($rootScope["servers_mode"]=== SERVERS_MODES["MANUAL"])
                {
                }
                else 
                {
                    sortableDisable()
                }
                $rootScope.$watch('servers_mode',function()
                {
                    if($rootScope["servers_mode"]&& $rootScope["servers_mode"]=== SERVERS_MODES["MANUAL"])
                    {
                        sortableEnable();$rootScope["serversmodeChecked"]= true
                    }
                    else 
                    {
                        sortableDisable();$rootScope["serversmodeChecked"]= false
                    }
                }
                )
            }
            $scope["makeLowerCase"]= function(string)
            {
                if(!string)
                {
                    return ""
                }
                return string["toLowerCase"]()
            }
            ;$scope["showRoutingTutorialPlay"]= function()
            {
                return $rootScope["routingTutorialAutoPlayModal"]= $modal({templateUrl:"partials/options/modals/routing_tutorial_auto_play.html",show:true,backdrop:true})
            }
            ;$scope["showISPTutorialPlay"]= function()
            {
                return $rootScope["routingTutorialAutoPlayModal"]= $modal({templateUrl:"partials/options/modals/isp_tutorial_auto_play.html",show:true,backdrop:true})
            }
            ;$scope["showStreamingServicesTutorialPlay"]= function()
            {
                return $rootScope["streamingServicesTutorialAutoPlayModal"]= $modal({templateUrl:"partials/options/modals/streaming_services_tutorial_auto_play.html",show:true,backdrop:true})
            }
            ;$scope["serversmodeChanged"]= function()
            {
                if($rootScope["serversmodeChecked"])
                {
                    $rootScope["servers_mode"]= SERVERS_MODES["MANUAL"];var lis=$element["find"]('#servers-div .server-item');
                    var ret=[];
                    lis["each"](function()
                    {
                        if(this["id"]!= '')
                        {
                            ret["push"](this["id"])
                        }
                    }
                    );if(ret["length"]> 0)
                    {
                        $rootScope["servers_order"]= ret
                    }
                }
                else 
                {
                    $rootScope["servers_mode"]= SERVERS_MODES["AUTO"];$rootScope["servers_order"]= []
                }
            }
            ;$scope["showMoreStreamingServices"]= function(server)
            {
                if($rootScope["moreStreamingServicesModal"])
                {
                    $rootScope["moreStreamingServicesModal"]["hide"]();$rootScope["moreStreamingServicesModal"]["destroy"]();$rootScope["moreStreamingServicesModal"]= null
                }
                $rootScope["clickedServer"]= server;return $rootScope["moreStreamingServicesModal"]= $modal({templateUrl:"partials/options/modals/more_streaming_services_alert.html",show:true,size:'lg',backdrop:true})
            }
            ;$scope["getSpecials"]= function(server)
            {
                return streamingServicesManager["getSpecials"](server)
            }
            ;$scope["getSpecialImg"]= function(special)
            {
                var img=streamingServicesManager["getSpecialImg"](special);
                if(img)
                {
                    return '/img/brand/'+ img
                }
                return null
            }
            ;$scope["getSpecialTooltip"]= function(special)
            {
                return streamingServicesManager["getSpecialTooltip"](special)
            }
            ;$scope["switchMode"]= function(mode)
            {
                if(mode!== $rootScope["mode"])
                {
                    $rootScope["mode"]= mode
                }
                return false
            }
            ;$scope["showModeTips"]= function(n)
            {
                if("auto"=== n)
                {
                    return $scope["mode_tips"]= $translate["instant"]("popup.menu.auto.desc")
                }
                else 
                {
                    if("always"=== n)
                    {
                        return $scope["mode_tips"]= $translate["instant"]("popup.menu.always.desc")
                    }
                    else 
                    {
                        if("never"=== n)
                        {
                            return $scope["mode_tips"]= $translate["instant"]("popup.menu.never.desc")
                        }
                        else 
                        {
                            $scope["mode_tips"]= null
                        }
                    }
                }
            }
            ;$scope["showEnvModeTips"]= function(n)
            {
                if("env_china"=== n)
                {
                    return $scope["env_mode_tips"]= $translate["instant"]("popup.settings.env_china.desc")
                }
                else 
                {
                    if("env_china_office"=== n)
                    {
                        return $scope["env_mode_tips"]= $translate["instant"]("popup.settings.env_china_office.desc")
                    }
                    else 
                    {
                        if("env_oversea"=== n)
                        {
                            return $scope["env_mode_tips"]= $translate["instant"]("popup.settings.env_oversea.desc")
                        }
                        else 
                        {
                            $scope["env_mode_tips"]= null
                        }
                    }
                }
            }
            ;$scope["checkServersLoading"]= function()
            {
                setTimeout(function()
                {
                    if($rootScope["servers_loading"]== true)
                    {
                        location["reload"]()
                    }
                }
                ,5000)
            }
            ;$scope["switchEnvMode"]= function(mode)
            {
                proxyManager["reloadServers"]($rootScope["isp_mode"],$rootScope["destination"],mode);$rootScope["env_mode"]= mode;$rootScope["servers_loading"]= true;$scope["checkServersLoading"]()
            }
            ;$scope["switchISPMode"]= function(mode)
            {
                proxyManager["reloadServers"](mode,$rootScope["destination"],$rootScope["env_mode"]);$rootScope["isp_mode"]= mode;$rootScope["servers_loading"]= true;$scope["checkServersLoading"]()
            }
            ;$scope["switchDestination"]= function(destination)
            {
                proxyManager["reloadServers"]($rootScope["isp_mode"],destination,$rootScope["env_mode"]);$rootScope["destination"]= destination;$rootScope["servers_loading"]= true;storage["set"]("destination",destination);$scope["checkServersLoading"]()
            }
            ;$scope["serversModeTooltip"]= function()
            {
                if($rootScope["serversmodeChecked"])
                {
                    return $translate["instant"]("popup.settings.servers_mode_manual.detailed_desc")
                }
                else 
                {
                    return $translate["instant"]("popup.settings.servers_mode_auto.detailed_desc")
                }
            }
            ;$scope["destinationTooltip"]= function(destination)
            {
                return $translate["instant"]("country."+ destination)
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
            ;$scope["getTopServer"]= function()
            {
                var servers=storage["get"]("proxies",[]);
                var cal_servers=proxyManager["displayProxies"](servers,$rootScope["servers_mode"],$rootScope["servers_order"]);
                if(!cal_servers||  !cal_servers["length"])
                {
                    return null
                }
                var ret=proxyManager["getTopProxy"](cal_servers,$rootScope["servers_order"],$rootScope["servers_mode"]);
                if(ret== null)
                {
                    if(cal_servers&& cal_servers["length"])
                    {
                        return cal_servers[0]
                    }
                }
                return ret
            }
            ;$scope["toggleServersSelect"]= function()
            {
                if($rootScope["servers_mode"]!== SERVERS_MODES["MANUAL"])
                {
                    var title=$translate["instant"]('options.server_list.switch_to_server_select_manual_title');
                    var msg=$translate["instant"]('options.server_list.switch_to_server_select_manual_msg');
                    Swal({type:'error',title:title,html:msg});jquery("#server-mode-switch")["css"]('border','1px solid red');return
                }
                $scope["displayServers"]= $scope["getDisplayServers"]();$scope["showServerSelect"]=  !$scope["showServerSelect"]
            }
        }
        ,angular["module"]("options")["controller"]("ServerListController",['$scope','$rootScope','$translate','$element','$modal','teleScope','storage','proxyManager','streamingServicesManager','SERVERS_MODES','ROLES','LOCALES',ServerListController])
    }
    ,define(libs,ServerListControllerOps)
}
)["call"](this)