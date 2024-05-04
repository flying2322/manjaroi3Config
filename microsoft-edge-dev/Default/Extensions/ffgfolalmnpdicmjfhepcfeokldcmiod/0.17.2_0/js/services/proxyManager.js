(function()
{
    var libs,proxyManager,__indexOf=[]["indexOf"]|| function(item)
    {
        for(var i=0,l=this["length"];i< l;i++)
        {
            if(i in  this&& this[i]=== item)
            {
                return i
            }
        }
        return -1
    }
    ;
    proxyManager= function($rootScope,$log,$injector,teleScope,teleMethod,server,storage,validate,generate,domainManager,domainUtils,timeUtils,jitterQueues,MODES,SERVERS_MODES,ISP_MODES,DEFAULT_ENV_MODE,DEFAULT_DESTINATION,DATA_SAVING_MODES,ROLES,WHITE_LIST_DOMAINS,WS_RETRIES)
    {
        var bindEvents,calcAverageStability,reloadServers,calcEvaluation,ensureValid,getTopProxy,getStableServerCount,generateAndApplyConfig,generatePacScript,pacProxies,isBlocked,load,loadFromServer,me,pxsInfo,save,sortProxies,_lastReportTime;
        me= '[proxyManager]';$rootScope["proxies"]= [];$rootScope["destinations"]= [];$rootScope["averageStability"]= 0.50;$rootScope["mode"]= MODES["AUTO"];$rootScope["servers_mode"]= SERVERS_MODES["AUTO"];$rootScope["servers_order"]= [];$rootScope["env_mode"]= DEFAULT_ENV_MODE;$rootScope["isp_mode"]= ISP_MODES["NONE"];$rootScope["destination"]= DEFAULT_DESTINATION;$rootScope["data_saving_mode"]= DATA_SAVING_MODES["FULL"];$rootScope["blocked"]= false;_lastReportTime= timeUtils["time"]();ensureValid= function(attrsList)
        {
            var attrs,key,val,_i,_j,_k,_len,_len1,_len2,_ref,_ref1;
            for(_i= 0,_len= attrsList["length"];_i< _len;_i++)
            {
                attrs= attrsList[_i];_ref= ['name','scheme','host'];for(_j= 0,_len1= _ref["length"];_j< _len1;_j++)
                {
                    key= _ref[_j];val= attrs[key];if(!val||  !_["isString"](val))
                    {
                        attrs[key]= ''
                    }
                }
                _ref1= ['port','latency','speed','latencyTestTime','speedTestTime'];for(_k= 0,_len2= _ref1["length"];_k< _len2;_k++)
                {
                    key= _ref1[_k];val= attrs[key];if(!_["isNumber"](val))
                    {
                        attrs[key]= 0
                    }
                }
                if(!_["isNumber"](attrs["fail"]))
                {
                    attrs["fail"]=  -1
                }
                if(!_["isNumber"](attrs["stability"]))
                {
                    attrs["stability"]=  -1
                }
            }
            return attrsList
        }
        ;this["loadFromServer_"]= (function(_this)
        {
            return function(proxies)
            {
                loadFromServer(proxies);_this["resetProxies"]()
            }
        }
        )(this);loadFromServer= function(proxies)
        {
            var k,model,p,valid_proxies,_i,_j,_len,_len1,_ref;
            valid_proxies= ensureValid(proxies);var userManager=$injector["get"]('userManager');
            var chicagoU=userManager["getChicagoUsername"]();
            var chicagoP=userManager["getChicagoPassword"]();
            var user_time=storage["get"]("user_time").toString();
            for(_i= 0,_len= valid_proxies["length"];_i< _len;_i++)
            {
                p= valid_proxies[_i];if(p["name"])
                {
                    p["name"]= p["name"]["hexDecode"]()
                }
                if(p["host"])
                {
                    p["host"]= generate["d"](chicagoU,chicagoP,user_time,p["host"])
                }
                if(p["scheme"])
                {
                    p["scheme"]= p["scheme"]["hexDecode"]()
                }
                model= _["findWhere"]($rootScope["proxies"],{server_id:p["server_id"]});if(model)
                {
                    _ref= ['latency','speed','latencyTestTime','speedTestTime','score'];for(_j= 0,_len1= _ref["length"];_j< _len1;_j++)
                    {
                        k= _ref[_j];p[k]= model[k]
                    }
                }
            }
            $rootScope["proxies"]= valid_proxies;$rootScope["blocked"]= isBlocked();$rootScope["averageStability"]= calcAverageStability();storage["set"]('averageStability',$rootScope["averageStability"]);save();generateAndApplyConfig();var whiteIps=[];
            for(_i= 0,_len= valid_proxies["length"];_i< _len;_i++)
            {
                p= valid_proxies[_i];if(p["latency_host"])
                {
                    whiteIps["push"](p["latency_host"])
                }
                if(p["speed_host"])
                {
                    whiteIps["push"](p["speed_host"])
                }
            }
            domainManager["addWhiteIps"](whiteIps)
        }
        ;this["getFingerPrint"]= function()
        {
            return "proxyManager-"+ (generateAndApplyConfig.toString()["length"]+ generatePacScript.toString()["length"]+ loadFromServer.toString()["length"]+ this["setScore"].toString()["length"]+ this["setScore"].toString()["length"],this["checkWsConnection"].toString()["length"])
        }
        ;this["loadDestinations"]= function(destinations)
        {
            if(destinations&& destinations["length"]> 0)
            {
                storage["set"]('destinations',destinations);$rootScope["destinations"]= destinations
            }
        }
        ;this["speedTestProxies"]= function()
        {
            return _["shuffle"](_["filter"]($rootScope["proxies"],function(p)
            {
                return p["primary"]|| p["speedTest"]|| p["hidden"]
            }
            ))
        }
        ;this["displayProxies"]= function(proxies,servers_mode,servers_order)
        {
            var ret=[];
            var servers=[];
            if(!proxies)
            {
                return ret
            }
            var i=0;
            for(i= 0;i< proxies["length"];i++)
            {
                var proxy=proxies[i];
                if(!proxy["speedTest"]&&  !proxy["hidden"] && proxy["stability"]> 0.1)
                {
                    _["omit"](proxy,'host','port');ret["push"](proxy)
                }
            }
            if(servers_order&& servers_order["length"]> 0&& servers_mode=== SERVERS_MODES["MANUAL"])
            {
                for(i= 0;i< servers_order["length"];i++)
                {
                    var server_id=servers_order[i];
                    var model=_["findWhere"](proxies,{server_id:server_id});
                    if(model)
                    {
                        servers["push"](model);proxies["remove_by_value"](model)
                    }
                }
                if(proxies["length"]> 0)
                {
                    for(i= 0;i< proxies["length"];i++)
                    {
                        servers["push"](proxies[i])
                    }
                }
                return servers
            }
            return ret
        }
        ;pacProxies= function()
        {
            if(!$rootScope["proxies"])
            {
                return []
            }
            return _["filter"]($rootScope["proxies"],function(p)
            {
                return p["primary"]|| p["hidden"]
            }
            )
        }
        ;calcAverageStability= function()
        {
            var stabilities;
            stabilities= _["pluck"]($rootScope["proxies"],'stability');if(stabilities["length"])
            {
                return _["reduce"](stabilities,function(a,b)
                {
                    return a+ b
                }
                )/ stabilities["length"]
            }
            else 
            {
                return 0.01
            }
        }
        ;this["calcEvaluation"]= calcEvaluation= function(proxy)
        {
            var latency,jitter,latencyScore,speed,speedScore,stabilityScore;
            var server_id=proxy["server_id"];
            stabilityScore= Math["pow"](proxy["stability"],2);speed= proxy["speed"];latency= proxy["averageLatency"];if(!latency)
            {
                latency= proxy["latency"]
            }
            jitter= proxy["jitter"];if(jitter)
            {
                latency= latency+ 2* jitter
            }
            if(speed)
            {
                speedScore= speed> 2000?1:1- Math["pow"](1- speed/ 2000,2)
            }
            else 
            {
                speedScore= 0.0
            }
            if(latency)
            {
                if(latency<= 1000)
                {
                    latencyScore= 1- Math["pow"](latency/ 1000,2)* 3/ 5
                }
                else 
                {
                    if(latency< 3000)
                    {
                        latencyScore= Math["pow"]((3000- latency)/ 2000,2)* 2/ 5
                    }
                    else 
                    {
                        latencyScore= 0
                    }
                }
            }
            else 
            {
                latencyScore= 0.0
            }
            $log["log"]("proxy:"+ proxy["name"]);$log["log"]("speed:"+ speed);$log["log"]("speedScore:"+ speedScore["toFixed"](1));if(proxy["averageLatency"])
            {
                $log["log"]("averageLatency:"+ proxy["latency"]["toFixed"](1))
            }
            if(jitter)
            {
                $log["log"]("jitter:"+ jitter["toFixed"](0))
            }
            $log["log"]("latency:"+ proxy["latency"]["toFixed"](0));$log["log"]("latencyScore:"+ latencyScore["toFixed"](2));$log["log"]("stabilityScore:"+ stabilityScore["toFixed"](2));var score=parseFloat((((0.7* speedScore+ 0.3* latencyScore)* stabilityScore)* 100)["toFixed"](1));
            $log["log"]("score:"+ score);return score
        }
        ;sortProxies= function()
        {
            return $rootScope["proxies"]= _["sortBy"]($rootScope["proxies"],function(p)
            {
                if(!p["score"])
                {
                    p["score"]= 0
                }
                if(p["priority"])
                {
                    return -(p["score"]+ p["priority"])
                }
                return -p["score"]
            }
            )
        }
        ;pxsInfo= function()
        {
            var p;
            return [(function()
            {
                var _i,_len,_ref,_results;
                _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                {
                    p= _ref[_i];_results["push"](p["name"])
                }
                return _results
            }
            )(),(function()
            {
                var _i,_len,_ref,_results;
                _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                {
                    p= _ref[_i];_results["push"](parseInt(p["stability"]* 100)/ 100)
                }
                return _results
            }
            )(),(function()
            {
                var _i,_len,_ref,_results;
                _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                {
                    p= _ref[_i];_results["push"](p["fail"])
                }
                return _results
            }
            )(),(function()
            {
                var _i,_len,_ref,_results;
                _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                {
                    p= _ref[_i];_results["push"](p["latency"])
                }
                return _results
            }
            )(),(function()
            {
                var _i,_len,_ref,_results;
                _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                {
                    p= _ref[_i];_results["push"](parseFloat(p["speed"]["toFixed"](2)))
                }
                return _results
            }
            )(),(function()
            {
                var _i,_len,_ref,_results;
                _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                {
                    p= _ref[_i];_results["push"](calcEvaluation(p))
                }
                return _results
            }
            )()]
        }
        ;isBlocked= function()
        {
            return _["all"]($rootScope["proxies"],function(proxy)
            {
                return proxy["fail"]> 0
            }
            )|| $rootScope["proxies"]["length"]=== 0||  !$rootScope["wsConnected"]
        }
        ;generateAndApplyConfig= timeUtils["throttle"](function()
        {
            var config;
            if($rootScope["mode"]=== MODES["NEVER"]|| $rootScope["user"]["role"]=== ROLES["HACKER"])
            {
                chrome["proxy"]["settings"]["clear"]({})
            }
            else 
            {
                var script=generatePacScript($rootScope["servers_mode"],$rootScope["servers_order"]);
                config= {mode:'pac_script',pacScript:{data:script}};chrome["proxy"]["settings"]["set"]({value:config,scope:'regular'},(function(_this)
                {
                    return function()
                    {
                        return null
                    }
                }
                )(this))
            }
            return $log["debug"](me,'_generateAndApplyConfig')
        }
        ,500);generatePacScript= function(servers_mode,servers_order)
        {
            var domain,i,len,lines,mode,node,part,parts,proxies,proxy,proxyString,proxyStrings,reversedDomainTree,reversedKeywordDomainArray,scheme,source,domainNames,suffixNames,keywordNames,rejectDomainNames,rejectSuffixNames,rejectKeywordNames,rejectReversedDomainTree,rejectReversedKeywordDomainArray,ips,rejectIps,ip,i,_i,_j,_k,_l,_len,_len1,_len2,_ref1,_ref2;
            var servers=[];
            mode= $rootScope["mode"];if(mode!== MODES["AUTO"]&& mode!== MODES["ALWAYS"])
            {
                mode= MODES["AUTO"]
            }
            proxyStrings= [];proxies= pacProxies();if(servers_mode=== SERVERS_MODES["MANUAL"])
            {
                for(i= 0;i< servers_order["length"];i++)
                {
                    var server_id=servers_order[i];
                    var model=_["findWhere"](proxies,{server_id:server_id});
                    if(model)
                    {
                        servers["push"](model)
                    }
                }
                if(servers["length"]!= proxies["length"])
                {
                    for(i= 0;i< proxies["length"];i++)
                    {
                        var p=proxies[i];
                        var model=_["findWhere"](servers,{server_id:p["server_id"]});
                        if(!model)
                        {
                            servers["push"](p)
                        }
                    }
                }
            }
            else 
            {
                servers= proxies
            }
            for(_i= 0;_i< servers["length"];_i++)
            {
                proxy= servers[_i];scheme= proxy["scheme"];proxyStrings["push"](""+ scheme+ " "+ proxy["host"]+ ":"+ proxy["port"])
            }
            proxyString= proxyStrings["join"](';');lines= [];lines["push"](['function Find','roxyForURL(url, host) {\x0A']["join"]('P'));lines["push"]("var D = \"DIRECT\";");lines["push"]("var BLOCK = \'PROXY 0.0.0.0:80\';\x0A");lines["push"]("var p=\'"+ proxyString+ "\';\x0A");lines["push"]("if (isPlainHostName(host)) return D;");lines["push"]("if (shExpMatch(host, \'10.[0-9]+.[0-9]+.[0-9]+\')) return D;");lines["push"]("if (shExpMatch(host, \'172.[0-9]+.[0-9]+.[0-9]+\')) return D;");lines["push"]("if (shExpMatch(host, \'192.168.[0-9]+.[0-9]+\')) return D;");lines["push"]("if (shExpMatch(host, \'127.0.0.1\')) return D;");lines["push"]("if (dnsDomainIs(host, \'localhost\')) return D;");lines["push"]("if (url.indexOf(\'https://www.google.com/complete/search?client=chrome-omni\') == 0)");lines["push"]("if (url.indexOf(\'http://clients1.google.com/generate_204\') == 0)");lines["push"]("\x09return D;");lines["push"]("if (url.indexOf(\'http://chart.apis.google.com/\') == 0)");lines["push"]("\x09return D;");lines["push"]("if (url.indexOf(\'http://toolbarqueries.google.com/tbr\') == 0)");lines["push"]("\x09return D;\x0A");lines["push"]("if (url.indexOf(\'https://www.google-analytics.com\') == 0)");lines["push"]("\x09return D;\x0A");lines["push"]("if (url.indexOf(\'_MSPROXY=\') >= 0) return D;\x0A");var whiteDomainList=domainManager["whiteDomains"]();
            for(_j= 0,_len1= whiteDomainList["length"];_j< _len1;_j++)
            {
                var domain=whiteDomainList[_j];
                lines["push"]("if (dnsDomainIs(host, \'"+ domain+ "\')) return D;\x0A")
            }
            var whiteIpList=domainManager["whiteIps"]();
            for(_j= 0,_len1= whiteIpList["length"];_j< _len1;_j++)
            {
                var ip=whiteIpList[_j];
                lines["push"]("if (shExpMatch(host, \'"+ ip+ "\')) return D;\x0A")
            }
            lines["push"]("\x0A");rejectIps= domainManager["rejectIps"]();for(_i= 0;_i< rejectIps["length"];_i++)
            {
                ip= rejectIps[_i];if(validate["cidr"](ip))
                {
                    lines["push"]("if (isInNetEx(host, \'"+ ip+ "\')) return BLOCK;\x0A")
                }
                else 
                {
                    lines["push"]("if (isInNetEx(host, \'"+ ip+ "/32\')) return BLOCK;\x0A")
                }
            }
            rejectDomainNames= domainManager["domainRejectNames"]();rejectSuffixNames= [];rejectKeywordNames= [];for(i= 0;i< rejectDomainNames["length"];i++)
            {
                domain= rejectDomainNames[i];if(validate["ip"](domain))
                {
                    continue
                }
                if(validate["domain"](domain))
                {
                    rejectSuffixNames["push"](domain)
                }
                else 
                {
                    if(validate["domainOrDomainPart"](domain))
                    {
                        rejectKeywordNames["push"](domain)
                    }
                }
            }
            rejectReversedDomainTree= {};rejectReversedKeywordDomainArray= {};for(i= 0;i< rejectKeywordNames["length"];i++)
            {
                rejectReversedKeywordDomainArray[rejectKeywordNames[i]]= 1
            }
            for(_k= 0,_len2= rejectSuffixNames["length"];_k< _len2;_k++)
            {
                domain= rejectSuffixNames[_k];node= rejectReversedDomainTree;parts= domain["toLowerCase"]()["split"]('.')["reverse"]();for(i= _l= 0,_ref2= parts["length"]- 1;0<= _ref2?_l<= _ref2:_l>= _ref2;i= 0<= _ref2?++_l:--_l)
                {
                    part= parts[i];if(i=== parts["length"]- 1)
                    {
                        node[part]= 1
                    }
                    else 
                    {
                        if(node[part]=== 1)
                        {
                            break
                        }
                        if(node[part]== null)
                        {
                            node[part]= {}
                        }
                        node= node[part]
                    }
                }
            }
            lines["push"]("var rejectNode = "+ (JSON["stringify"](rejectReversedDomainTree))+ ";");lines["push"]("var rejectHostParts = host.toLowerCase().split(\'.\');");lines["push"]("var rejectKeywordNode = "+ (JSON["stringify"](rejectReversedKeywordDomainArray))+ ";");lines["push"]("for (var i=rejectHostParts.length - 1; i >= 0; i --) {");lines["push"]("    var part = rejectHostParts[i];");lines["push"]("    rejectNode = rejectNode[part];");lines["push"]("    if (rejectKeywordNode[part] == 1) {rejectNode = 1; break;}");lines["push"]("    if (rejectNode == undefined || rejectNode == 1) break;");lines["push"]("}");lines["push"]("if (rejectNode == 1)");lines["push"]("    return BLOCK;\x0A");if(mode=== MODES["AUTO"])
            {
                ips= domainManager["ips"]();for(_i= 0;_i< ips["length"];_i++)
                {
                    ip= ips[_i];if(validate["cidr"](ip))
                    {
                        lines["push"]("if (isInNetEx(host, \'"+ ip+ "\')) return p;\x0A")
                    }
                    else 
                    {
                        lines["push"]("if (isInNetEx(host, \'"+ ip+ "/32\')) return p;\x0A")
                    }
                }
                domainNames= domainManager["domainNames"]();suffixNames= [];keywordNames= [];for(i= 0;i< domainNames["length"];i++)
                {
                    domain= domainNames[i];if(validate["ip"](domain))
                    {
                        continue
                    }
                    if(validate["domain"](domain))
                    {
                        suffixNames["push"](domain)
                    }
                    else 
                    {
                        if(validate["domainOrDomainPart"](domain))
                        {
                            keywordNames["push"](domain)
                        }
                    }
                }
                reversedDomainTree= {};reversedKeywordDomainArray= {};for(i= 0;i< keywordNames["length"];i++)
                {
                    reversedKeywordDomainArray[keywordNames[i]]= 1
                }
                for(_k= 0,_len2= suffixNames["length"];_k< _len2;_k++)
                {
                    domain= suffixNames[_k];node= reversedDomainTree;parts= domain["toLowerCase"]()["split"]('.')["reverse"]();for(i= _l= 0,_ref2= parts["length"]- 1;0<= _ref2?_l<= _ref2:_l>= _ref2;i= 0<= _ref2?++_l:--_l)
                    {
                        part= parts[i];if(i=== parts["length"]- 1)
                        {
                            node[part]= 1
                        }
                        else 
                        {
                            if(node[part]=== 1)
                            {
                                break
                            }
                            if(node[part]== null)
                            {
                                node[part]= {}
                            }
                            node= node[part]
                        }
                    }
                }
                lines["push"]("var node = "+ (JSON["stringify"](reversedDomainTree))+ ";");lines["push"]("var hostParts = host.toLowerCase().split(\'.\');");lines["push"]("var keywordNode = "+ (JSON["stringify"](reversedKeywordDomainArray))+ ";");lines["push"]("for (var i=hostParts.length - 1; i >= 0; i --) {");lines["push"]("    var part = hostParts[i];");lines["push"]("    node = node[part];");lines["push"]("    if (keywordNode[part] == 1) {node = 1; break;}");lines["push"]("    if (node == undefined || node == 1) break;");lines["push"]("}");lines["push"]("if (node == 1)");lines["push"]("    return p;\x0A")
            }
            else 
            {
                lines["push"]('return p;')
            }
            lines["push"]('return D;');lines["push"]("}");source= lines["join"]('\x0A');return source
        }
        ;this["setSpeed"]= function(proxy,speed)
        {
            var oldSpeed,ret;
            oldSpeed= proxy["speed"];if(oldSpeed)
            {
                ret= speed* 0.5+ oldSpeed* 0.5
            }
            else 
            {
                ret= speed
            }
            return proxy["speed"]= parseFloat(ret["toFixed"](2))
        }
        ;this["checkWsConnection"]= function()
        {
            $log["debug"]("checkWsConnection $rootScope.wsConnected:"+ $rootScope["wsConnected"]);$log["debug"]("checkWsConnection $rootScope.lastHeartBeat:"+ $rootScope["lastHeartBeat"]);if($rootScope["wsConnected"]||  !$rootScope["lastHeartBeat"])
            {
                return
            }
            var userManager=$injector["get"]('userManager');
            if(userManager["isGuest"]())
            {
                return
            }
            if(!userManager["isVIP"]())
            {
                return
            }
            var inactive=( new Date())["getTime"]()- $rootScope["lastHeartBeat"];
            if(inactive<= 30* 60* 1000)
            {
                return
            }
            var overDue=userManager["isOverDue24"]();
            if(!overDue)
            {
                return
            }
            $rootScope["proxies"]= [];save();generateAndApplyConfig()
        }
        ;this["setLatency"]= function(proxy,latency)
        {
            var oldLatency,ret;
            oldLatency= proxy["latency"];if(latency< 1000)
            {
                if(oldLatency&& oldLatency< 1000)
                {
                    ret= parseInt(latency* 0.8+ oldLatency* 0.2)
                }
                else 
                {
                    ret= parseInt(latency)
                }
                return proxy["latency"]= ret
            }
            return proxy["latency"]= latency
        }
        ;this["setStability"]= function(proxy,stability)
        {
            var oldStability,ret;
            oldStability= proxy["stability"];if(oldStability===  -1)
            {
                ret= stability
            }
            else 
            {
                ret= oldStability* 0.75+ 0.25* stability
            }
            return proxy["stability"]= parseFloat(ret["toFixed"](3))
        }
        ;this["setYoutubeLatency"]= function(proxy,latency)
        {
            var oldLatency,ret;
            oldLatency= proxy["youtubeLatency"];if(oldLatency)
            {
                ret= parseInt(latency* 0.25+ oldLatency* 0.75)
            }
            else 
            {
                ret= parseInt(latency)
            }
            return proxy["youtubeLatency"]= ret
        }
        ;this["setGoogleVideoSpeed"]= function(proxy,speed)
        {
            var oldSpeed,ret;
            oldSpeed= proxy["googleVideoSpeed"];if(oldSpeed)
            {
                ret= speed* 0.5+ oldSpeed* 0.5
            }
            else 
            {
                ret= speed
            }
            return proxy["googleVideoSpeed"]= parseFloat(ret["toFixed"](2))
        }
        ;this["setGoogleVideoLatency"]= function(proxy,latency)
        {
            var oldLatency,ret;
            oldLatency= proxy["googleVideoLatency"];if(oldLatency)
            {
                ret= parseInt(latency* 0.25+ oldLatency* 0.75)
            }
            else 
            {
                ret= parseInt(latency)
            }
            return proxy["googleVideoLatency"]= ret
        }
        ;this["setGoogleVideoStability"]= function(proxy,stability)
        {
            var oldStability,ret;
            oldStability= proxy["googleVideoStability"];if(oldStability===  -1)
            {
                ret= stability
            }
            else 
            {
                ret= oldStability* 0.75+ 0.25* stability
            }
            return proxy["googleVideoStability"]= parseFloat(ret["toFixed"](3))
        }
        ;this["setScore"]= function(proxy,score)
        {
            this["checkWsConnection"]();proxy["score"]= score
        }
        ;this["addGoogleVideoData"]= function(proxy,data)
        {
            if(!proxy["googleVideoData"])
            {
                proxy["googleVideoData"]= 0
            }
            if(data> 0)
            {
                proxy["googleVideoData"]+= data
            }
            return proxy["googleVideoData"]
        }
        ;this["getProxyByName"]= function(name)
        {
            return _["findWhere"]($rootScope["proxies"],{name:name})
        }
        ;this["getProxyById"]= function(id)
        {
            return _["findWhere"]($rootScope["proxies"],{server_id:id})
        }
        ;getTopProxy= function(proxies,servers_order,servers_mode)
        {
            if(!proxies)
            {
                proxies= $rootScope["proxies"]
            }
            if(!servers_order)
            {
                servers_order= $rootScope["servers_order"]
            }
            if(!servers_mode)
            {
                servers_mode= $rootScope["servers_mode"]
            }
            if(servers_mode=== SERVERS_MODES["MANUAL"])
            {
                if(proxies&& proxies["length"]> 0)
                {
                    if(servers_order&& servers_order["length"]> 0)
                    {
                        var servers=[];
                        for(i= 0;i< servers_order["length"];i++)
                        {
                            var server_id=servers_order[i];
                            var model=_["findWhere"](proxies,{server_id:server_id});
                            if(model)
                            {
                                servers["push"](model)
                            }
                        }
                        if(servers["length"]> 0)
                        {
                            return servers[0]
                        }
                    }
                    else 
                    {
                        return proxies[0]
                    }
                    return null
                }
            }
            else 
            {
                if(proxies&& proxies["length"]> 0)
                {
                    return $rootScope["proxies"][0]
                }
            }
            return null
        }
        ;this["getTopProxy"]= getTopProxy;this["providedInvalidCredentials"]= function(proxy)
        {
            this["setStability"](proxy,0);if(!proxy["failedCredentials"])
            {
                proxy["failedCredentials"]= 1
            }
            else 
            {
                proxy["failedCredentials"]= proxy["failedCredentials"]+ 1
            }
            var proxies=pacProxies();
            var len=proxies["length"];
            var i;
            var nkickout=false;
            for(i= 0;i< len;i++)
            {
                var p=proxies[i];
                if(!p["failedCredentials"]|| p["failedCredentials"]< 10)
                {
                    nkickout= true
                }
            }
            if(nkickout)
            {
                var data={server_id:proxy["server_id"],michael_id:$rootScope["user"]["profile"]["uid"],michael_sid:$rootScope["user"]["profile"]["sid"]};
                return server["emit"]('sync-michael-sid',data,function(resp)
                {
                }
                )
            }
            else 
            {
                var userManager=$injector["get"]('userManager');
                userManager["onKickSessions"]()
            }
        }
        ;this["resetProxies"]= function()
        {
            jitterQueues["clearAll"]()
        }
        ;this["resetServersMode"]= function()
        {
            $rootScope["servers_mode"]= SERVERS_MODES["AUTO"];$rootScope["servers_order"]= [];storage["set"]('servers_mode',SERVERS_MODES.AUTO);storage["set"]('servers_order',[])
        }
        ;this["requestReloadProxies"]= function()
        {
            reloadServers($rootScope["isp_mode"],$rootScope["destination"],$rootScope["env_mode"])
        }
        ;load= function(data)
        {
            if(data== null)
            {
                data= void(0)
            }
            if(data)
            {
                return $rootScope["proxies"]= ensureValid(data)
            }
            else 
            {
                $rootScope["averageStability"]= storage["get"]('averageStability',0.02);return $rootScope["proxies"]= ensureValid(storage["get"]('proxies',[]))
            }
        }
        ;save= function()
        {
            storage["set"]('proxies',$rootScope["proxies"]);storage["set"]('destinations',$rootScope["destinations"]);storage["set"]('servers_mode',$rootScope["servers_mode"]);storage["set"]('servers_order',$rootScope["servers_order"]);storage["set"]('env_mode',$rootScope["env_mode"]);storage["set"]('isp_mode',$rootScope["isp_mode"]);storage["set"]('destination',$rootScope["destination"]);storage["set"]('data_saving_mode',$rootScope["data_saving_mode"]);return storage["set"]('mode',$rootScope["mode"])
        }
        ;reloadServers= function(isp,destination,env)
        {
            var reqData;
            var top=getTopProxy();
            reqData= {destination:destination?destination:DEFAULT_DESTINATION,isp:isp?isp:'',env:env?env:'',top_server:top?top["server_id"]:''};if(isp)
            {
                $rootScope["isp_mode"]= isp
            }
            if(destination&& destination!== '')
            {
                $rootScope["destination"]= destination
            }
            if(env)
            {
                $rootScope["env_mode"]= env
            }
            return server["emit"]('reload-proxies',reqData,function(resp)
            {
            }
            )
        }
        ;this["reloadServers"]= reloadServers;getStableServerCount= function()
        {
            return _["countBy"]($rootScope["proxies"],function(proxy)
            {
                return proxy["score"]> 20?'upper':'lower'
            }
            )
        }
        ;this["onEnvMode"]= function(mode)
        {
            if(mode&& mode!== ''&& $rootScope["env_mode"]!= mode)
            {
                $rootScope["env_mode"]= mode
            }
        }
        ;bindEvents= function()
        {
            $rootScope.$watch('user.role',function()
            {
                return generateAndApplyConfig()
            }
            );$rootScope.$watch('mode',function(mode)
            {
                if(mode=== MODES["NEVER"])
                {
                    $rootScope["data_saving_mode"]= DATA_SAVING_MODES["STOP"]
                }
                generateAndApplyConfig();return storage["set"]('mode',mode)
            }
            );$rootScope.$watch('servers_mode',function(mode)
            {
                generateAndApplyConfig();return storage["set"]('servers_mode',mode)
            }
            );$rootScope.$watch('servers_order',function()
            {
                generateAndApplyConfig();return storage["set"]('servers_order',$rootScope["servers_order"])
            }
            );$rootScope.$watch('env_mode',function()
            {
                return storage["set"]('env_mode',$rootScope["env_mode"])
            }
            );$rootScope.$watch('isp_mode',function()
            {
                return storage["set"]('isp_mode',$rootScope["isp_mode"])
            }
            );$rootScope.$watch('destination',function()
            {
                return storage["set"]('destination',$rootScope["destination"])
            }
            );$rootScope.$watch('data_saving_mode',function()
            {
                return storage["set"]('data_saving_mode',$rootScope["data_saving_mode"])
            }
            );$rootScope.$watch('domains',function()
            {
                return generateAndApplyConfig()
            }
            ,true);$rootScope.$watch('rejectDomains',function()
            {
                return generateAndApplyConfig()
            }
            ,true);$rootScope.$watch('ips',function()
            {
                return generateAndApplyConfig()
            }
            ,true);$rootScope.$watch('rejectIps',function()
            {
                return generateAndApplyConfig()
            }
            ,true);$rootScope.$watch('proxies',function(n,p)
            {
                var minSameResultCount,newOrders,oldOrders,proxy,reportWait;
                $rootScope["blocked"]= isBlocked();$rootScope["averageStability"]= calcAverageStability();storage["set"]('averageStability',$rootScope["averageStability"]);if(!(__indexOf["call"]((function()
                {
                    var _i,_len,_ref,_results;
                    _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                    {
                        p= _ref[_i];_results["push"](p["stability"])
                    }
                    return _results
                }
                )(),-1)>= 0))
                {
                    oldOrders= (function()
                    {
                        var _i,_len,_ref,_results;
                        _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                        {
                            p= _ref[_i];_results["push"](p["name"])
                        }
                        return _results
                    }
                    )();sortProxies();newOrders= (function()
                    {
                        var _i,_len,_ref,_results;
                        _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                        {
                            p= _ref[_i];_results["push"](p["name"])
                        }
                        return _results
                    }
                    )();if(!_["isEqual"](oldOrders,newOrders))
                    {
                        $log["log"](me,'Reseting Proxies!!!',oldOrders,newOrders);generateAndApplyConfig();_lastReportTime= timeUtils["time"]()
                    }
                    else 
                    {
                        minSameResultCount= _["min"]((function()
                        {
                            var _i,_len,_ref,_results;
                            _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                            {
                                proxy= _ref[_i];_results["push"](Math["abs"](proxy["fail"]))
                            }
                            return _results
                        }
                        )());reportWait= Math["min"](300,60+ 300* Math["pow"](minSameResultCount/ 5,2));if(_lastReportTime+ reportWait< timeUtils["time"]())
                        {
                            _lastReportTime= timeUtils["time"]();var stableServerCount=getStableServerCount();
                            $log["log"]("stableServerCount.upper:"+ stableServerCount["upper"]);if(stableServerCount["upper"]&& stableServerCount["upper"]<= 2)
                            {
                            }
                        }
                    }
                }
                return save()
            }
            ,true)
        }
        ;this["isDataSavingModeStop"]= function()
        {
            return $rootScope["data_saving_mode"]=== DATA_SAVING_MODES["STOP"]
        }
        ;this["getSpeedTestDataRatio"]= function()
        {
            if($rootScope["data_saving_mode"]=== DATA_SAVING_MODES["HALF"])
            {
                return 0.5
            }
            else 
            {
                if($rootScope["data_saving_mode"]=== DATA_SAVING_MODES["QUARTER"])
                {
                    return 0.25
                }
                else 
                {
                    if($rootScope["data_saving_mode"]=== DATA_SAVING_MODES["STOP"])
                    {
                        return 0
                    }
                }
            }
            return 1.0
        }
        ;this["signout"]= function()
        {
            chrome["proxy"]["settings"]["clear"]({});storage["remove"]('averageStability');$rootScope["proxies"]= [];$rootScope["mode"]= MODES["AUTO"];$rootScope["servers_order"]= [];$rootScope["servers_mode"]= SERVERS_MODES["AUTO"];$rootScope["isp_mode"]= ISP_MODES["NONE"];$rootScope["destination"]= DEFAULT_DESTINATION;$rootScope["data_saving_mode"]= DATA_SAVING_MODES["FULL"];storage["set"]('proxies',[]);storage["set"]('destinations',[]);storage["set"]('mode',MODES.AUTO);storage["set"]('servers_mode',SERVERS_MODES.AUTO);storage["set"]('env_mode',DEFAULT_ENV_MODE);storage["set"]('isp_mode',ISP_MODES.NONE);storage["set"]('destination',DEFAULT_DESTINATION);storage["set"]('data_saving_mode',DATA_SAVING_MODES.FULL);storage["set"]('servers_order',[])
        }
        ;this["init"]= function()
        {
            load();bindEvents();$rootScope["mode"]= storage["get"]('mode',MODES.AUTO);$rootScope["servers_mode"]= storage["get"]('servers_mode',SERVERS_MODES.AUTO);$rootScope["env_mode"]= storage["get"]('env_mode',DEFAULT_ENV_MODE);$rootScope["isp_mode"]= storage["get"]('isp_mode',ISP_MODES.NONE);$rootScope["destination"]= storage["get"]('destination',DEFAULT_DESTINATION);$rootScope["destinations"]= storage["get"]('destinations',[]);$rootScope["data_saving_mode"]= storage["get"]('data_saving_mode',DATA_SAVING_MODES.FULL);$rootScope["servers_order"]= storage["get"]('servers_order',[]);$rootScope["blocked"]= isBlocked();teleScope["link"]('averageStability');teleScope["link"]('mode');teleScope["link"]('servers_mode');teleScope["link"]('servers_order');teleScope["link"]('env_mode');teleScope["link"]('isp_mode');teleScope["link"]('destination');teleScope["link"]('destinations');teleScope["link"]('data_saving_mode');teleScope["link"]('proxies');$log["info"](me,'proxyManager Ready!');return window["showProxies"]= function()
            {
                var item,proxies;
                proxies= (function()
                {
                    var _i,_len,_ref,_results;
                    _ref= $rootScope["proxies"];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
                    {
                        item= _ref[_i];_results["push"](_["omit"](item,'host','port'))
                    }
                    return _results
                }
                )();return $log["table"](proxies)
            }
        }
        ;teleMethod["registerService"]('proxyManager',this,['reloadServers']);return this
    }
    ;libs= ['underscore','../app','./teleScope','./teleMethod','./server','./storage','./validate','./generate','./domainManager','./timeUtils','./jitterQueues','./domainUtils'];define(libs,(function(_this)
    {
        return function(_,app)
        {
            return app["service"]('proxyManager',['$rootScope','$log','$injector','teleScope','teleMethod','server','storage','validate','generate','domainManager','domainUtils','timeUtils','jitterQueues','MODES','SERVERS_MODES','ISP_MODES','DEFAULT_ENV_MODE','DEFAULT_DESTINATION','DATA_SAVING_MODES','ROLES','WHITE_LIST_DOMAINS','WS_RETRIES',proxyManager])
        }
    }
    )(this))
}
)["call"](this)