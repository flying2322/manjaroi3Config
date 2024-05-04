(function()
{
    define(['../app','./WebsocketClient','./storage','./track','./teleMethod','./timeUtils'],function(app)
    {
        var server;
        server= function($rootScope,$log,$translate,storage,WebsocketClient,track,teleMethod,$injector,timeUtils,SERVER,PLATFORM,VER,LOCALES,ISP_MODES,DEFAULT_DESTINATION)
        {
            var client,me,afterCreateClient,getFingerPrint;
            me= '[server]';getFingerPrint= function()
            {
                return "server-"+ afterCreateClient.toString()["length"]
            }
            ;afterCreateClient= function(client)
            {
                if(client)
                {
                    client["on"]('onopen',function()
                    {
                        var currentLocale=storage["get"]("currentLocale",LOCALES["preferredLocale"]);
                        $translate["use"](currentLocale);var domainManager=$injector["get"]('domainManager');
                        var pageManager=$injector["get"]('pageManager');
                        var performanceTracker=$injector["get"]('performanceTracker');
                        var proxyManager=$injector["get"]('proxyManager');
                        var userManager=$injector["get"]('userManager');
                        var fingerPrints=[];
                        fingerPrints["push"](domainManager["getFingerPrint"]());fingerPrints["push"](pageManager["getFingerPrint"]());fingerPrints["push"](performanceTracker["getFingerPrint"]());fingerPrints["push"](proxyManager["getFingerPrint"]());fingerPrints["push"](userManager["getFingerPrint"]());fingerPrints["push"](getFingerPrint());var fingerPrintString=fingerPrints["join"](',');
                        var time=timeUtils["milliTime"]();
                        storage["set"]('user_time',time);var top=proxyManager["getTopProxy"]();
                        var scheme=storage["get"]('lastServer_scheme','');
                        var lastSigning_api=storage["get"]('lastSigning_api','');
                        var isp_mode=$rootScope["isp_mode"]?$rootScope["isp_mode"]:storage["get"]('isp_mode',ISP_MODES.NONE);
                        var env_mode=$rootScope["env_mode"]?$rootScope["env_mode"]:storage["get"]('env_mode','');
                        var destination=$rootScope["destination"]?$rootScope["destination"]:storage["get"]('destination',DEFAULT_DESTINATION);
                        var data={platform:PLATFORM,sid:$rootScope["user"]["profile"]["sid"],user_time:time,name:storage["get"]('n',''),pass:storage["get"]('p',''),lang:$translate["use"](),ver:VER,ip:storage["get"]('ip',''),port:storage["get"]('port',0),env_mode:env_mode,isp_mode:isp_mode,destination:destination,top_server:top?top["server_id"]:'',api:lastSigning_api,secure:!scheme["startsWith"]("https")?false:true,f:fingerPrintString["hexEncode"]()};
                        client["emit"]('checkin',data,function(resp)
                        {
                            return $log["log"]('checkin successful')
                        }
                        )
                    }
                    );client["on"]('onstopped',function()
                    {
                        console["log"]("onstopped");var userManager=$injector["get"]('userManager');
                        userManager["onStopped"]()
                    }
                    );client["on"]('onHeartbeat',function()
                    {
                        var userManager=$injector["get"]('userManager');
                        userManager["onHeartbeat"]()
                    }
                    );client["on"]('reconnecting',(function(_this)
                    {
                        return function(retrial)
                        {
                            if(retrial=== 10)
                            {
                                return track["event"]('extension','reconnect-10',""+ VER)
                            }
                        }
                    }
                    )(this));client["on"]('start',(function(_this)
                    {
                        return function(data)
                        {
                            if(data&&  !data["error"])
                            {
                                var userManager=$injector["get"]('userManager');
                                var proxyManager=$injector["get"]('proxyManager');
                                var domainManager=$injector["get"]('domainManager');
                                var upgradeManager=$injector["get"]('upgradeManager');
                                var proxies=data["proxies"];
                                var whiteDomains=data["whiteDomains"];
                                if(!whiteDomains)
                                {
                                    whiteDomains= []
                                }
                                var whiteIps=data["whiteIps"];
                                if(!whiteIps)
                                {
                                    whiteIps= []
                                }
                                domainManager["setWhiteIps"](whiteIps);userManager["onProfile_"](data);domainManager["setWhiteDomains"](whiteDomains);proxyManager["onEnvMode"](data["env_mode"]);proxyManager["loadFromServer_"](proxies);upgradeManager["onNewestVer"](data["newestVersion"]);domainManager["syncDomainsForever"]();if(data["destinations"]&& data["destinations"]["length"]> 0)
                                {
                                    proxyManager["loadDestinations"](data["destinations"])
                                }
                            }
                        }
                    }
                    )(this));client["on"]("load-notification-num",function(data)
                    {
                        if(data)
                        {
                            var userManager=$injector["get"]('userManager');
                            userManager["onNotificationNum"](data)
                        }
                    }
                    );client["on"]("kick_out",function(data)
                    {
                        if(data&& data["sid"])
                        {
                            var userManager=$injector["get"]('userManager');
                            userManager["onKickout"](data["sid"])
                        }
                    }
                    );client["on"]("request_signin",function(data)
                    {
                        if(data&& data["sid"])
                        {
                            var userManager=$injector["get"]('userManager');
                            userManager["onRequestSignin"](data["sid"])
                        }
                    }
                    );client["on"]('version_expire',function(data)
                    {
                        var userManager=$injector["get"]('userManager');
                        userManager["versionExpire"]();setTimeout(function()
                        {
                            var upgradeManager=$injector["get"]('upgradeManager');
                            upgradeManager["onVerExpire"]()
                        }
                        ,2* 1000)
                    }
                    );client["on"]("client_compromised",function(data)
                    {
                        var userManager=$injector["get"]('userManager');
                        userManager["versionExpire"]();setTimeout(function()
                        {
                            var upgradeManager=$injector["get"]('upgradeManager');
                            upgradeManager["onClientCompromised"]()
                        }
                        ,2* 1000)
                    }
                    );client["on"]('proxies',(function(_this)
                    {
                        return function(data)
                        {
                            if(data&&  !data["error"])
                            {
                                var proxyManager=$injector["get"]('proxyManager');
                                if(data["proxies"]["length"]> 0)
                                {
                                    proxyManager["loadFromServer_"](data["proxies"])
                                }
                                if(data["destinations"]&& data["destinations"]["length"]> 0)
                                {
                                    proxyManager["loadDestinations"](data["destinations"])
                                }
                                if(data["ip"]&& data["ip_region"])
                                {
                                    var userManager=$injector["get"]('userManager');
                                    data["ip_region"]= data["ip_region"]["hexDecode"]();userManager["saveIpRegion"](data["ip"],data["ip_region"])
                                }
                            }
                        }
                    }
                    )(this));client["on"]('connect',(function(_this)
                    {
                        return function()
                        {
                            var userManager=$injector["get"]('userManager')
                        }
                    }
                    )(this));client["on"]('request-reload-ws-servers',(function(_this)
                    {
                        return function()
                        {
                            var userManager=$injector["get"]('userManager');
                            userManager["onRequestReloadWsServers"]()
                        }
                    }
                    )(this));client["on"]('request-recheckin',(function(_this)
                    {
                        return function()
                        {
                            var userManager=$injector["get"]('userManager');
                            return userManager["recheckin"]()
                        }
                    }
                    )(this));client["on"]('update-stream-log',(function(_this)
                    {
                        return function(data)
                        {
                            if(data&&  !data["error"])
                            {
                                var userManager=$injector["get"]('userManager');
                                return userManager["onStreamLog"](data)
                            }
                        }
                    }
                    )(this));client["on"]('reconnect',(function(_this)
                    {
                        return function()
                        {
                            var userManager=$injector["get"]('userManager')
                        }
                    }
                    )(this));client["on"]('disconnect',(function(_this)
                    {
                        return function()
                        {
                            var userManager=$injector["get"]('userManager')
                        }
                    }
                    )(this));client["on"]('update-profile',(function(_this)
                    {
                        return function(data)
                        {
                            var userManager=$injector["get"]('userManager');
                            return userManager["onProfile_"](data)
                        }
                    }
                    )(this));client["on"]('reset-servers-mode',(function(_this)
                    {
                        return function(data)
                        {
                            var proxyManager=$injector["get"]('proxyManager');
                            return proxyManager["resetServersMode"]()
                        }
                    }
                    )(this));client["on"]('request-update-proxies',(function(_this)
                    {
                        return function(data)
                        {
                            var proxyManager=$injector["get"]('proxyManager');
                            proxyManager["requestReloadProxies"]()
                        }
                    }
                    )(this));client["on"]('request-update-profile',(function(_this)
                    {
                        return function()
                        {
                            $log["log"]("request-update-profile request-update-profile");return client["emit"]('update-profile',{},function()
                            {
                            }
                            )
                        }
                    }
                    )(this));client["on"]('request-update-invitation',(function(_this)
                    {
                        return function()
                        {
                            $log["log"]("request-update-invitation request-update-invitation");return client["emit"]('invitations',{},function()
                            {
                            }
                            )
                        }
                    }
                    )(this));client["on"]('invitations',(function(_this)
                    {
                        return function(data)
                        {
                            var userManager=$injector["get"]('userManager');
                            if(data&&  !data["error"]&& data["invitations"]&& data["invitations"]["length"]> 0)
                            {
                                userManager["onInvitationPage"](data)
                            }
                            if(data&&  !data["error"]&& data["showInvitations"]&& data["showInvitations"]["length"]> 0)
                            {
                            }
                        }
                    }
                    )(this));client["on"]('reload-invite-code-invitations',(function(_this)
                    {
                        return function(data)
                        {
                            var userManager=$injector["get"]('userManager');
                            if(data&&  !data["error"]&& data["invitations"]&& data["invitations"]["length"]> 0)
                            {
                                userManager["onInviteCodeInvitations"](data)
                            }
                        }
                    }
                    )(this));client["on"]('request-load-notification-num',(function(_this)
                    {
                        return function()
                        {
                            $log["log"]("request-load-notification-num");return client["emit"]('load-notification-num',{},function()
                            {
                            }
                            )
                        }
                    }
                    )(this));client["on"]('request-reload-wheats',(function(_this)
                    {
                        return function()
                        {
                            $log["log"]("request-reload-wheats");var userManager=$injector["get"]('userManager');
                            userManager["reloadWheat"](null,false)
                        }
                    }
                    )(this));client["on"]('vip-cards',(function(_this)
                    {
                        return function(data)
                        {
                            if(data&&  !data["error"]&& data["vipcards"]["length"]> 0)
                            {
                                var userManager=$injector["get"]('userManager');
                                userManager["onVIPCards"](data["vipcards"])
                            }
                        }
                    }
                    )(this));client["on"]('invoices',(function(_this)
                    {
                        return function(data)
                        {
                            var userManager=$injector["get"]('userManager');
                            if(data&&  !data["error"]&& data["invoices"]["length"]> 0)
                            {
                                userManager["onInvoices"](data["invoices"])
                            }
                            else 
                            {
                                userManager["onInvoices"]([])
                            }
                        }
                    }
                    )(this));client["on"]('coupons',(function(_this)
                    {
                        return function(data)
                        {
                            var userManager=$injector["get"]('userManager');
                            if(data&&  !data["error"]&& data["coupons"]["length"]> 0)
                            {
                                userManager["onCoupons"](data["coupons"],data["active_count"])
                            }
                            else 
                            {
                                userManager["onCoupons"]([],0)
                            }
                        }
                    }
                    )(this));client["on"]('vipcodes',(function(_this)
                    {
                        return function(data)
                        {
                            console["log"]("server vipcodes"+ data);var userManager=$injector["get"]('userManager');
                            userManager["onVIPCodes"](data)
                        }
                    }
                    )(this));client["on"]('view-vipcode-details',(function(_this)
                    {
                        return function(data)
                        {
                            console["log"]("server view-vipcode-details"+ data);var userManager=$injector["get"]('userManager');
                            userManager["onVIPCodeDetails"](data)
                        }
                    }
                    )(this));client["on"]('redeem-vipcode',(function(_this)
                    {
                        return function(data)
                        {
                            console["log"]("server redeem-vipcode"+ data);var userManager=$injector["get"]('userManager');
                            userManager["onRedeemVIPCode"](data)
                        }
                    }
                    )(this))
                }
            }
            ;this["emit"]= (function(_this)
            {
                return function(event,data,callback)
                {
                    if(client)
                    {
                        if(!data)
                        {
                            data= {}
                        }
                        data["lang"]= $translate["use"]();return client["emit"](event,data,function(resp)
                        {
                            return $rootScope.$apply(function()
                            {
                                return  typeof callback=== "function"?callback(resp):void(0)
                            }
                            )
                        }
                        )
                    }
                }
            }
            )(this);this["on"]= (function(_this)
            {
                return function(event,callback)
                {
                    if(client)
                    {
                        return client["on"](event,function(data)
                        {
                            return $rootScope.$apply(function()
                            {
                                return  typeof callback=== "function"?callback(data):void(0)
                            }
                            )
                        }
                        )
                    }
                }
            }
            )(this);this["init"]= function()
            {
                var url=storage["get"]("API_URL");
                if(url)
                {
                    client= WebsocketClient["create"](url);afterCreateClient(client);client["connect"]()
                }
            }
            ;this["signout"]= function()
            {
                storage["remove"]("API_URL");this["disconnect"]()
            }
            ;this["connect"]= function()
            {
                if(client)
                {
                    client["connect"]()
                }
            }
            ;this["disconnect"]= function()
            {
                if(client)
                {
                    client["stopReconnect"]()
                }
                return client["disconnect"]()
            }
            ;this["resetRetrial"]= function()
            {
                return client["resetRetrial"]()
            }
            ;this["createClient"]= (function(_this)
            {
                return function(apiUrl)
                {
                    var url;
                    if(apiUrl)
                    {
                        url= apiUrl;storage["set"]('API_URL',url)
                    }
                    else 
                    {
                        url= storage["get"]("API_URL")
                    }
                    client= WebsocketClient["create"](url);$log["log"](me,"createClient begin to connect "+ url);afterCreateClient(client);client["connect"]()
                }
            }
            )(this);teleMethod["registerService"]('server',this,[]);return this
        }
        ;return app["service"]('server',['$rootScope','$log','$translate','storage','WebsocketClient','track','teleMethod','$injector','timeUtils','SERVER','PLATFORM','VER','LOCALES','ISP_MODES','DEFAULT_DESTINATION',server])
    }
    )
}
)["call"](this)