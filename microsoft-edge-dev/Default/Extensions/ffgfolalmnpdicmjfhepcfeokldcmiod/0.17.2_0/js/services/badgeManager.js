(function()
{
    var badgeManager;
    badgeManager= function($rootScope,$log,$timeout,domainUtils,domainManager,pageManager,timeUtils,validate,MODES,ROLES)
    {
        var me,oldIcon,updateBadge;
        me= '[badgeManager]';oldIcon= null;updateBadge= timeUtils["throttle"](function()
        {
            var setupBadge,ICON_ALWAYS,ICON_AUTO,ICON_AUTO_ACTIVE,ICON_BLOCK,ICON_NEVER,count,notification_count,host,icon,tab,url,due;
            setupBadge= function(due,count,notification_count)
            {
                if(!due)
                {
                    if(count== 0&& notification_count> 0)
                    {
                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:notification_count.toString()})
                    }
                    else 
                    {
                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#000'});chrome["browserAction"]["setBadgeText"]({text:count> 0?count.toString():''})
                    }
                }
                else 
                {
                    if(count> 0)
                    {
                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#000'});chrome["browserAction"]["setBadgeText"]({text:count> 0?count.toString():''})
                    }
                    else 
                    {
                        if(notification_count> 0)
                        {
                            chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:notification_count.toString()})
                        }
                        else 
                        {
                            chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:'$'})
                        }
                    }
                }
            }
            ;ICON_NEVER= {"16":"/img/icon-never_16.png","32":"/img/icon-never_32.png","48":"/img/icon-never_48.png","128":"/img/icon-never_128.png"};ICON_ALWAYS= {"16":"/img/icon-always_16.png","32":"/img/icon-always_32.png","48":"/img/icon-always_48.png","128":"/img/icon-always_128.png"};ICON_AUTO= {"16":"/img/icon-auto_16.png","32":"/img/icon-auto_32.png","48":"/img/icon-auto_48.png","128":"/img/icon-auto_128.png"};ICON_BLOCK= {"16":"/img/icon-blocked_16.png","32":"/img/icon-blocked_32.png","48":"/img/icon-blocked_48.png","128":"/img/icon-blocked_128.png"};ICON_AUTO_ACTIVE= {"16":"/img/icon-auto-active_16.png","32":"/img/icon-auto-active_32.png","48":"/img/icon-auto-active_48.png","128":"/img/icon-auto-active_128.png"};ICON_REJECT= {"16":"/img/icon-rejected_16.png","32":"/img/icon-rejected_32.png","48":"/img/icon-rejected_48.png","128":"/img/icon-rejected_128.png"};icon= ICON_AUTO;if($rootScope["needUpgrade"])
            {
                chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setPopup"]({popup:''});chrome["browserAction"]["setBadgeText"]({text:'!'});icon= ICON_NEVER
            }
            else 
            {
                if($rootScope["clientCompromised"])
                {
                    chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setPopup"]({popup:''});chrome["browserAction"]["setBadgeText"]({text:'!'});icon= ICON_NEVER
                }
                else 
                {
                    if($rootScope["user"]["role"]=== ROLES["HACKER"]|| $rootScope["user"]["role"]=== ROLES["KICK_OUT"])
                    {
                        chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#17AD08'});chrome["browserAction"]["setPopup"]({popup:''});chrome["browserAction"]["setBadgeText"]({text:'?'});icon= ICON_NEVER
                    }
                    else 
                    {
                        if($rootScope["conflicts"]["length"]> 0)
                        {
                            chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#F00'});chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeText"]({text:'!'});icon= ICON_NEVER
                        }
                        else 
                        {
                            due=  !($rootScope["user"]["role"]=== ROLES["VIP"]);count= $rootScope["blockedDomains"]["length"]|| 0;notification_count= $rootScope["user"]["profile"]["notification_count"]|| 0;tab= $rootScope["currentTab"];switch($rootScope["mode"])
                            {
                                case MODES["NEVER"]:if(!due)
                                {
                                    if(count== 0&& notification_count> 0)
                                    {
                                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:notification_count.toString()})
                                    }
                                    else 
                                    {
                                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#000'});chrome["browserAction"]["setBadgeText"]({text:count> 0?count.toString():''})
                                    }
                                }
                                else 
                                {
                                    if(count> 0)
                                    {
                                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#000'});chrome["browserAction"]["setBadgeText"]({text:count> 0?count.toString():''})
                                    }
                                    else 
                                    {
                                        if(notification_count> 0)
                                        {
                                            chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:notification_count.toString()})
                                        }
                                        else 
                                        {
                                            chrome["browserAction"]["setPopup"]({popup:''});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:'$'})
                                        }
                                    }
                                }
                                icon= ICON_NEVER;break
                                case MODES["ALWAYS"]:if(!due)
                                {
                                    if(count== 0&& notification_count> 0)
                                    {
                                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:notification_count.toString()})
                                    }
                                    else 
                                    {
                                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#000'})
                                    }
                                }
                                else 
                                {
                                    if(count> 0)
                                    {
                                        chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#000'})
                                    }
                                    else 
                                    {
                                        if(notification_count> 0)
                                        {
                                            chrome["browserAction"]["setPopup"]({popup:'popup.html'});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:notification_count.toString()})
                                        }
                                        else 
                                        {
                                            chrome["browserAction"]["setPopup"]({popup:''});chrome["browserAction"]["setBadgeBackgroundColor"]({color:'#E91E63'});chrome["browserAction"]["setBadgeText"]({text:'$'})
                                        }
                                    }
                                }
                                icon= ICON_ALWAYS;break
                                default:if(tab!= null?tab["url"]:void(0))
                                {
                                    url= tab["url"];host= domainUtils["parseUri"](url)["host"];if(!url["startsWith"]("chrome-extension://")&&  !url["startsWith"]("chrome://"))
                                    {
                                        if(!validate["ip"](host))
                                        {
                                            if(domainManager["coversDomain"](host))
                                            {
                                                setupBadge(due,count,notification_count);icon= ICON_AUTO_ACTIVE
                                            }
                                            else 
                                            {
                                                if(domainManager["coversRejectDomain"](host))
                                                {
                                                    setupBadge(due,0,notification_count);icon= ICON_REJECT
                                                }
                                                else 
                                                {
                                                    setupBadge(due,count,notification_count);icon= ICON_AUTO
                                                }
                                            }
                                        }
                                        else 
                                        {
                                            if(domainManager["coversIP"](host))
                                            {
                                                setupBadge(due,count,notification_count);icon= ICON_AUTO_ACTIVE
                                            }
                                            else 
                                            {
                                                if(domainManager["coversRejectIP"](host))
                                                {
                                                    setupBadge(due,0,notification_count);icon= ICON_REJECT
                                                }
                                            }
                                        }
                                    }
                                    else 
                                    {
                                        setupBadge(due,0,notification_count);icon= ICON_AUTO
                                    }
                                }
                                else 
                                {
                                    setupBadge(due,count,notification_count);icon= ICON_AUTO
                                }
                            }
                            if($rootScope["mode"]!== MODES["NEVER"]&& ($rootScope["blocked"]||  !$rootScope["wsConnected"]))
                            {
                                icon= ICON_BLOCK;chrome["browserAction"]["setPopup"]({popup:''})
                            }
                        }
                    }
                }
            }
            if(icon!== oldIcon)
            {
                chrome["browserAction"]["setIcon"]({path:icon});return oldIcon= icon
            }
        }
        ,300);this["init"]= function()
        {
            $rootScope.$watch('conflicts',function()
            {
                return updateBadge()
            }
            ,true);$rootScope.$watch('mode',function()
            {
                return updateBadge()
            }
            );$rootScope.$watch('blocked',function()
            {
                return updateBadge()
            }
            );$rootScope.$watch('wsConnected',function()
            {
                return updateBadge()
            }
            );$rootScope.$watch('domains',function()
            {
                return updateBadge()
            }
            ,true);$rootScope.$watch('currentTab',function()
            {
                return updateBadge()
            }
            ,true);$rootScope.$watch('user.role',updateBadge);$rootScope.$watch('user.profile.notification_count',updateBadge);$rootScope.$watch('needUpgrade',updateBadge);$rootScope.$watch('clientCompromised',updateBadge);$rootScope.$watch('needDownloadNewVer',updateBadge);return chrome["browserAction"]["onClicked"]["addListener"](function()
            {
                if($rootScope["needUpgrade"])
                {
                    pageManager["activateUrl"]("upgrade.html")
                }
                else 
                {
                    if($rootScope["clientCompromised"])
                    {
                        pageManager["activateUrl"]("compromised.html")
                    }
                    else 
                    {
                        if($rootScope["user"]["role"]=== ROLES["KICK_OUT"])
                        {
                            pageManager["activateUrl"]("lock.html#?source=onkey-login")
                        }
                        else 
                        {
                            if($rootScope["user"]["role"]=== ROLES["HACKER"])
                            {
                                pageManager["activateUrl"]("login.html#/?source=force-login")
                            }
                            else 
                            {
                                pageManager["activateUrl"]("options.html")
                            }
                        }
                    }
                }
            }
            )
        }
        ;return this
    }
    ;define(['../app','underscore','./domainUtils','./domainManager','./pageManager','./validate'],function(app)
    {
        return app["service"]('badgeManager',['$rootScope','$log','$timeout','domainUtils','domainManager','pageManager','timeUtils','validate','MODES','ROLES',badgeManager])
    }
    )
}
)["call"](this)