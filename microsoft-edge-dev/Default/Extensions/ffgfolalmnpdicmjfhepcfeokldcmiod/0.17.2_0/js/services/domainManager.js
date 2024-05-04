(function()
{
	var domainManager,libs;
	domainManager= function($rootScope,$log,$timeout,teleScope,teleMethod,storage,validate,server,domainUtils,timeUtils,ROLES,GUEST_DOMAINS,DEFAULT_DOMAINS,DEFAULT_REJECT_DOMAINS,DEFAULT_IPS,DEFAULT_REJECT_IPS,RULE_TYPE,TARGET_TYPE)
	{
		var bindEvents,find,findRejectDomain,findIp,findRejectIp,_timerForeverSync,stopSyncDomains,loadRulesFromServer,me,pullDomains,pushDomains,save,syncDomains,syncTimeout,updateModel;
		me= '[domainManager]';this["getFingerPrint"]= function()
		{
			return "domainManager-"+ loadRulesFromServer.toString()["length"]
		}
		;this["load"]= function()
		{
			var domains,rejectDomains,ips,rejectIps;
			domains= storage["get"]('domains',[]);rejectDomains= storage["get"]('rejectDomains',[]);ips= storage["get"]('ips',[]);rejectIps= storage["get"]('rejectIps',[]);$rootScope["whiteDomains"]= storage["get"]('whiteDomains',[]);$rootScope["whiteIps"]= storage["get"]('whiteIps',[]);if(domains["length"]> 0)
			{
				return $rootScope["domains"]= domains
			}
			if(rejectDomains["length"]> 0)
			{
				return $rootScope["rejectDomains"]= rejectDomains
			}
			if(ips["length"]> 0)
			{
				return $rootScope["ips"]= ips
			}
			if(rejectIps["length"]> 0)
			{
				return $rootScope["rejectIps"]= rejectIps
			}
		}
		;save= function()
		{
			storage["set"]('whiteDomains',$rootScope["whiteDomains"]);storage["set"]('whiteIps',$rootScope["whiteIps"]);storage["set"]('ips',$rootScope["ips"]);storage["set"]('rejectIps',$rootScope["rejectIps"]);storage["set"]('rejectDomains',$rootScope["rejectDomains"]);return storage["set"]('domains',$rootScope["domains"])
		}
		;this["setWhiteDomains"]= (function(_this)
		{
			return function(whiteDomains)
			{
				var j=0;
				var domains=[];
				if(whiteDomains)
				{
					for(;j< whiteDomains["length"];j++)
					{
						var domain=whiteDomains[j];
						if(domain)
						{
							domain= domain["hexDecode"]();domains["push"](domain)
						}
					}
					$rootScope["whiteDomains"]= domains;storage["set"]('whiteDomains',$rootScope["whiteDomains"])
				}
			}
		}
		)(this);this["setWhiteIps"]= (function(_this)
		{
			return function(whiteIps)
			{
				var j=0;
				var ips=[];
				if(whiteIps)
				{
					for(;j< whiteIps["length"];j++)
					{
						var ip=whiteIps[j];
						if(ip)
						{
							ip= ip["hexDecode"]();ips["push"](ip)
						}
					}
					$rootScope["whiteIps"]= ips;storage["set"]('whiteIps',$rootScope["whiteIps"])
				}
			}
		}
		)(this);this["addWhiteIps"]= (function(_this)
		{
			return function(whiteIps)
			{
				var j=0;
				var ips=$rootScope["whiteIps"];
				if(!ips)
				{
					ips= []
				}
				var newWhiteIps=[];
				if(whiteIps)
				{
					for(;j< whiteIps["length"];j++)
					{
						var ip=whiteIps[j];
						if(ips["indexOf"](ip)==  -1&& newWhiteIps["indexOf"](ip)==  -1)
						{
							newWhiteIps["push"](ip)
						}
					}
					$rootScope["whiteIps"]= ips["concat"](newWhiteIps);storage["set"]('whiteIps',$rootScope["whiteIps"])
				}
			}
		}
		)(this);this["whiteIps"]= function()
		{
			return $rootScope["whiteIps"]
		}
		;this["whiteDomains"]= function()
		{
			return $rootScope["whiteDomains"]
		}
		;this["clear"]= function()
		{
			$rootScope["whiteDomains"]= $rootScope["whiteDomains"];$rootScope["ips"]= [];$rootScope["rejectIps"]= [];$rootScope["rejectDomains"]= [];return $rootScope["domains"]= []
		}
		;this["signout"]= function()
		{
			stopSyncDomains();$rootScope["ips"]= [];$rootScope["rejectIps"]= [];$rootScope["rejectDomains"]= [];$rootScope["domains"]= [];$rootScope["whiteDomains"]= [];storage["set"]('domains',$rootScope["domains"]);storage["set"]('rejectDomains',$rootScope["rejectDomains"]);storage["set"]('rejectIps',$rootScope["rejectIps"]);storage["set"]('ips',$rootScope["ips"]);storage["set"]('whiteDomains',$rootScope["whiteDomains"])
		}
		;find= function(options)
		{
			return _["findWhere"]($rootScope["domains"],options)
		}
		;findRejectDomain= function(options)
		{
			return _["findWhere"]($rootScope["rejectDomains"],options)
		}
		;findIp= function(options)
		{
			return _["findWhere"]($rootScope["ips"],options)
		}
		;findRejectIp= function(options)
		{
			return _["findWhere"]($rootScope["rejectIps"],options)
		}
		;this["coversDomain"]= (function(_this)
		{
			return function(domain)
			{
				var domainList,name;
				domainList= _this["domainNames"]();return _["any"]((function()
				{
					var _i,_len,_results;
					_results= [];for(_i= 0,_len= domainList["length"];_i< _len;_i++)
					{
						name= domainList[_i];_results["push"](domainUtils["dnsDomainIs"](domain,name))
					}
					return _results
				}
				)())
			}
		}
		)(this);this["coversRejectDomain"]= (function(_this)
		{
			return function(domain)
			{
				var domainList,name;
				domainList= _this["domainRejectNames"]();return _["any"]((function()
				{
					var _i,_len,_results;
					_results= [];for(_i= 0,_len= domainList["length"];_i< _len;_i++)
					{
						name= domainList[_i];_results["push"](domainUtils["dnsDomainIs"](domain,name))
					}
					return _results
				}
				)())
			}
		}
		)(this);this["getCoversRejectDomain"]= (function(_this)
		{
			return function(domain)
			{
				var domainList,name;
				domainList= _this["domainRejectNames"]();var _i,_len;
				for(_i= 0,_len= domainList["length"];_i< _len;_i++)
				{
					name= domainList[_i];if(domainUtils["dnsDomainIs"](domain,name))
					{
						return name
					}
				}
			}
		}
		)(this);this["coversIP"]= (function(_this)
		{
			return function(ip)
			{
				var ipList,cidr;
				ipList= _this["ips"]();return _["any"]((function()
				{
					var _i,_len,_results;
					_results= [];for(_i= 0,_len= ipList["length"];_i< _len;_i++)
					{
						cidr= ipList[_i];if(validate["cidr_contains"](cidr,ip))
						{
							_results["push"](cidr)
						}
					}
					return _results
				}
				)())
			}
		}
		)(this);this["coversRejectIP"]= (function(_this)
		{
			return function(ip)
			{
				var ipList,cidr;
				ipList= _this["rejectIps"]();return _["any"]((function()
				{
					var _i,_len,_results;
					_results= [];for(_i= 0,_len= ipList["length"];_i< _len;_i++)
					{
						cidr= ipList[_i];if(validate["ip"](ip))
						{
							if(validate["cidr_contains"](cidr,ip))
							{
								_results["push"](cidr)
							}
						}
						else 
						{
							if(validate["cidr"](ip))
							{
								if(validate["cidr_overlap"](cidr,ip))
								{
									_results["push"](cidr)
								}
							}
						}
					}
					return _results
				}
				)())
			}
		}
		)(this);this["getCoversRejectIP"]= (function(_this)
		{
			return function(ip)
			{
				var ipList,cidr;
				ipList= _this["rejectIps"]();var _i,_len;
				for(_i= 0,_len= ipList["length"];_i< _len;_i++)
				{
					cidr= ipList[_i];if(validate["cidr_contains"](cidr,ip))
					{
						return cidr
					}
				}
				return null
			}
		}
		)(this);this["initFromDefault"]= function()
		{
			var name,_i,_len,_results;
			_results= [];for(_i= 0,_len= DEFAULT_DOMAINS["length"];_i< _len;_i++)
			{
				name= DEFAULT_DOMAINS[_i];_results["push"]($rootScope["domains"]["push"]({name:name,_dirty:true,_deleted:false,_hidden:false,_mtime:0,_keyword:(!validate["domain"](name)&&  !domainUtils["isTopDomain"](name))}))
			}
			return _results
		}
		;this["initRejectDomainsFromDefault"]= function()
		{
			var name,_i,_len,_results;
			_results= [];for(_i= 0,_len= DEFAULT_REJECT_DOMAINS["length"];_i< _len;_i++)
			{
				name= DEFAULT_REJECT_DOMAINS[_i];_results["push"]($rootScope["rejectDomains"]["push"]({name:name,_dirty:true,_deleted:false,_hidden:false,_mtime:0,_keyword:(!validate["domain"](name)&&  !domainUtils["isTopDomain"](name))}))
			}
			return _results
		}
		;this["initIpsFromDefault"]= function()
		{
			var ip,_i,_len,_results;
			_results= [];for(_i= 0,_len= DEFAULT_IPS["length"];_i< _len;_i++)
			{
				ip= DEFAULT_IPS[_i];_results["push"]($rootScope["ips"]["push"]({name:ip,_dirty:true,_deleted:false,_hidden:false,_mtime:0}))
			}
			return _results
		}
		;this["initRejectIpsFromDefault"]= function()
		{
			var ip,_i,_len,_results;
			_results= [];for(_i= 0,_len= DEFAULT_REJECT_IPS["length"];_i< _len;_i++)
			{
				ip= DEFAULT_REJECT_IPS[_i];_results["push"]($rootScope["rejectIps"]["push"]({name:ip,_dirty:true,_deleted:false,_hidden:false,_mtime:0}))
			}
			return _results
		}
		;this["del"]= function(name)
		{
			var domain;
			domain= find({name:name});if(domain)
			{
				domain["_dirty"]= true;return domain["_deleted"]= true
			}
		}
		;this["delRejectDomain"]= function(name)
		{
			var domain;
			domain= findRejectDomain({name:name});if(domain)
			{
				domain["_dirty"]= true;return domain["_deleted"]= true
			}
		}
		;this["delIp"]= function(name)
		{
			var domain;
			domain= findIp({name:name});if(domain)
			{
				domain["_dirty"]= true;return domain["_deleted"]= true
			}
		}
		;this["delRejectIp"]= function(name)
		{
			var domain;
			domain= findRejectIp({name:name});if(domain)
			{
				domain["_dirty"]= true;return domain["_deleted"]= true
			}
		}
		;this["add"]= function(name)
		{
			var domain;
			domain= find({name:name});if(!domain)
			{
				return $rootScope["domains"]["push"]({name:name,_dirty:true,_deleted:false,_hidden:false,_mtime:0,_keyword:(!validate["domain"](name)&&  !domainUtils["isTopDomain"](name))})
			}
			else 
			{
				if(domain["_deleted"])
				{
					domain["_dirty"]= true;return domain["_deleted"]= false
				}
			}
		}
		;this["addRejectDomain"]= function(name)
		{
			var domain;
			domain= findRejectDomain({name:name});if(!domain)
			{
				return $rootScope["rejectDomains"]["push"]({name:name,_dirty:true,_deleted:false,_hidden:false,_mtime:0,_keyword:(!validate["domain"](name)&&  !domainUtils["isTopDomain"](name))})
			}
			else 
			{
				if(domain["_deleted"])
				{
					domain["_dirty"]= true;return domain["_deleted"]= false
				}
			}
		}
		;this["addIp"]= function(name)
		{
			var domain;
			domain= findIp({name:name});if(!domain)
			{
				return $rootScope["ips"]["push"]({name:name,_dirty:true,_deleted:false,_hidden:false,_mtime:0})
			}
			else 
			{
				if(domain["_deleted"])
				{
					domain["_dirty"]= true;return domain["_deleted"]= false
				}
			}
		}
		;this["addRejectIp"]= function(name)
		{
			var domain;
			domain= findRejectIp({name:name});if(!domain)
			{
				return $rootScope["rejectIps"]["push"]({name:name,_dirty:true,_deleted:false,_hidden:false,_mtime:0})
			}
			else 
			{
				if(domain["_deleted"])
				{
					domain["_dirty"]= true;return domain["_deleted"]= false
				}
			}
		}
		;this["update"]= function(oldDomain,newDomain)
		{
			var domain;
			domain= find({name:oldDomain});if(domain&& oldDomain!== newDomain)
			{
				domain["_deleted"]= true;domain["_dirty"]= true;this["add"](newDomain)
			}
		}
		;this["updateRejectDomain"]= function(oldDomain,newDomain)
		{
			var domain;
			domain= findRejectDomain({name:oldDomain});console["log"]("updateRejectDomain:"+ domain);if(domain&& oldDomain!== newDomain)
			{
				domain["_deleted"]= true;domain["_dirty"]= true;this["addRejectDomain"](newDomain);console["log"]("addRejectDomain:"+ newDomain)
			}
		}
		;this["updateIp"]= function(oldDomain,newDomain)
		{
			var domain;
			domain= findIp({name:oldDomain});if(domain&& oldDomain!== newDomain)
			{
				domain["_deleted"]= true;domain["_dirty"]= true;this["addIp"](newDomain);console["log"]("updateIp")
			}
		}
		;this["updateRejectIp"]= function(oldDomain,newDomain)
		{
			var domain;
			domain= findRejectIp({name:oldDomain});if(domain&& oldDomain!== newDomain)
			{
				domain["_deleted"]= true;domain["_dirty"]= true;this["addRejectIp"](newDomain)
			}
		}
		;updateModel= function(o,n)
		{
			var k,_i,_len,_ref,_results;
			_ref= ['name','_dirty','_deleted','_hidden','_mtime','_keyword'];_results= [];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
			{
				k= _ref[_i];_results["push"](o[k]= n[k])
			}
			return _results
		}
		;this["domainNames"]= function()
		{
			return _["pluck"](_["where"]($rootScope["domains"],{_deleted:false}),'name')
		}
		;this["domainRejectNames"]= function()
		{
			return _["pluck"](_["where"]($rootScope["rejectDomains"],{_deleted:false}),'name')
		}
		;this["ips"]= function()
		{
			return _["pluck"](_["where"]($rootScope["ips"],{_deleted:false}),'name')
		}
		;this["rejectIps"]= function()
		{
			return _["pluck"](_["where"]($rootScope["rejectIps"],{_deleted:false}),'name')
		}
		;loadRulesFromServer= function(ruleList)
		{
			var d,m,h,_i,_len,_results;
			if((ruleList!= null?ruleList["length"]:void(0))> 0)
			{
				_results= [];for(_i= 0,_len= ruleList["length"];_i< _len;_i++)
				{
					d= ruleList[_i];if(d["name"])
					{
						d["name"]= d["name"]["hexDecode"]()
					}
					if((d["rule_type"]=== RULE_TYPE["DOMAIN_SUFFIX"]|| d["rule_type"]=== RULE_TYPE["DOMAIN_KEYWORD"])&& d["target"]=== TARGET_TYPE["PROXY"])
					{
						m= find({name:d["name"]});if(m)
						{
							_results["push"](updateModel(m,d))
						}
						else 
						{
							_results["push"](d);$rootScope["domains"]["push"](d)
						}
						if(d["rule_type"]=== RULE_TYPE["DOMAIN_KEYWORD"])
						{
							if(m)
							{
								m["_keyword"]= true
							}
							else 
							{
								d["_keyword"]= true
							}
						}
					}
					else 
					{
						if((d["rule_type"]=== RULE_TYPE["DOMAIN_SUFFIX"]|| d["rule_type"]=== RULE_TYPE["DOMAIN_KEYWORD"])&& d["target"]=== TARGET_TYPE["REJECT"])
						{
							m= findRejectDomain({name:d["name"]});if(m)
							{
								_results["push"](updateModel(m,d))
							}
							else 
							{
								_results["push"]($rootScope["rejectDomains"]["push"](d))
							}
							if(d["rule_type"]=== RULE_TYPE["DOMAIN_KEYWORD"])
							{
								if(m)
								{
									m["_keyword"]= true
								}
								else 
								{
									d["_keyword"]= true
								}
							}
						}
						else 
						{
							if(d["rule_type"]=== RULE_TYPE["IP_CIDR"]&& d["target"]=== TARGET_TYPE["PROXY"])
							{
								m= findIp({name:d["name"]});if(m)
								{
									_results["push"](updateModel(m,d))
								}
								else 
								{
									_results["push"]($rootScope["ips"]["push"](d))
								}
							}
							else 
							{
								if(d["rule_type"]=== RULE_TYPE["IP_CIDR"]&& d["target"]=== TARGET_TYPE["REJECT"])
								{
									m= findRejectIp({name:d["name"]});if(m)
									{
										_results["push"](updateModel(m,d))
									}
									else 
									{
										_results["push"]($rootScope["rejectIps"]["push"](d))
									}
								}
							}
						}
					}
				}
				return _results
			}
		}
		;$rootScope["isSyncing"]= false;syncTimeout= null;syncDomains= function()
		{
			if($rootScope["user"]["role"]=== ROLES["HACKER"]|| $rootScope["user"]["role"]=== ROLES["KICK_OUT"])
			{
				return
			}
			if(syncTimeout)
			{
				clearTimeout(syncTimeout);syncTimeout= null
			}
			if($rootScope["isSyncing"])
			{
				return syncTimeout= setTimeout(syncDomains,1000)
			}
			else 
			{
				$rootScope["isSyncing"]= true;return pullDomains(function()
				{
					return pushDomains(function()
					{
						return setTimeout(function()
						{
							return $rootScope["isSyncing"]= false
						}
						,5* 1000)
					}
					)
				}
				)
			}
		}
		;pullDomains= (function(_this)
		{
			return function(callback)
			{
				var m,max_mtime;
				max_mtime= _["max"](_["union"]([0],(function()
				{
					var _i,_len,_ref,_results;
					_results= [];_ref= $rootScope["domains"];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
					{
						m= _ref[_i];_results["push"](m._mtime)
					}
					_ref= $rootScope["rejectDomains"];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
					{
						m= _ref[_i];_results["push"](m._mtime)
					}
					_ref= $rootScope["ips"];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
					{
						m= _ref[_i];_results["push"](m._mtime)
					}
					_ref= $rootScope["rejectIps"];for(_i= 0,_len= _ref["length"];_i< _len;_i++)
					{
						m= _ref[_i];_results["push"](m._mtime)
					}
					return _results
				}
				)()));$log["info"](me,'sync_rules, max_mtime=',max_mtime);return server["emit"]('sync_rules',{mtime:max_mtime},function(resp)
				{
					var _ref=resp["update"];
					if((_ref!= null?_ref["length"]:void(0))> 0)
					{
						loadRulesFromServer(resp["update"])
					}
					else 
					{
						if($rootScope["domains"]["length"]=== 0&& $rootScope["user"]["role"]=== ROLES["VIP"])
						{
							_this["initFromDefault"]()
						}
					}
					return callback()
				}
				)
			}
		}
		)(this);pushDomains= function(callback)
		{
			var data={};
			var array=[];
			var i;
			for(i= 0;i< $rootScope["domains"]["length"];i++)
			{
				var dirty=$rootScope["domains"][i];
				if(dirty["_dirty"])
				{
					console["log"]("dirty "+ dirty["name"]+ " "+ dirty["_dirty"]);var item={name:dirty["name"]["hexEncode"](),_dirty:dirty["_dirty"],_deleted:dirty["_deleted"],_hidden:dirty["_hidden"],_mtime:dirty["_mtime"],rule_type:(!dirty["_keyword"])?RULE_TYPE["DOMAIN_SUFFIX"]:RULE_TYPE["DOMAIN_KEYWORD"],target:TARGET_TYPE["PROXY"]};
					array["push"](item)
				}
			}
			for(i= 0;i< $rootScope["rejectDomains"]["length"];i++)
			{
				var dirty=$rootScope["rejectDomains"][i];
				if(dirty["_dirty"])
				{
					var item={name:dirty["name"]["hexEncode"](),_dirty:dirty["_dirty"],_deleted:dirty["_deleted"],_hidden:dirty["_hidden"],_mtime:dirty["_mtime"],rule_type:(!dirty["_keyword"])?RULE_TYPE["DOMAIN_SUFFIX"]:RULE_TYPE["DOMAIN_KEYWORD"],target:TARGET_TYPE["REJECT"]};
					array["push"](item)
				}
			}
			for(i= 0;i< $rootScope["ips"]["length"];i++)
			{
				var dirty=$rootScope["ips"][i];
				if(dirty["_dirty"])
				{
					var item={name:dirty["name"]["hexEncode"](),_dirty:dirty["_dirty"],_deleted:dirty["_deleted"],_hidden:dirty["_hidden"],_mtime:dirty["_mtime"],rule_type:RULE_TYPE["IP_CIDR"],target:TARGET_TYPE["PROXY"]};
					array["push"](item)
				}
			}
			for(i= 0;i< $rootScope["rejectIps"]["length"];i++)
			{
				var dirty=$rootScope["rejectIps"][i];
				if(dirty["_dirty"])
				{
					var item={name:dirty["name"]["hexEncode"](),_dirty:dirty["_dirty"],_deleted:dirty["_deleted"],_hidden:dirty["_hidden"],_mtime:dirty["_mtime"],rule_type:RULE_TYPE["IP_CIDR"],target:TARGET_TYPE["REJECT"]};
					array["push"](item)
				}
			}
			data["domains"]= array;if(!data["domains"]["length"])
			{
				return callback()
			}
			$log["debug"](me,"upload Dirty rules length="+ data["domains"]["length"]);return server["emit"]('dirty_rules',data,function(resp)
			{
				if(resp["replace"])
				{
					$log["debug"](me,"upload Dirty rules dirty_rules="+ data["domains"]["length"]);loadRulesFromServer(resp["replace"])
				}
				return callback()
			}
			)
		}
		;this["syncDomainsForever"]= (function(_this)
		{
			return function()
			{
				if(_timerForeverSync)
				{
					return
				}
				return _timerForeverSync= setInterval(function()
				{
					if(_timerForeverSync)
					{
						if($rootScope["user"]["role"]=== ROLES["VIP"])
						{
							return syncDomains()
						}
					}
				}
				,5* 60* 1000)
			}
		}
		)(this);this["submitRulesToParse"]= function(rules,lang)
		{
			$rootScope["user"]["error"]["submit_rules_to_parse_error"]= false;$rootScope["user"]["error"]["submit_rules_to_parse_error_line"]= 0;$rootScope["user"]["error"]["submit_rules_to_parse_error_message"]= null;$rootScope["user"]["error"]["submit_rules_to_parse_succ"]= false;var reqData={rules:rules,msg_lang:lang};
			return server["emit"]('rules-submit-to-parse',reqData,function(resp)
			{
				if(resp["errorCode"])
				{
					$rootScope["user"]["error"]["submit_rules_to_parse_error"]= true;$rootScope["user"]["error"]["submit_rules_to_parse_error_line"]= resp["line"];$rootScope["user"]["error"]["submit_rules_to_parse_error_message"]= resp["message"];return
				}
				$rootScope["user"]["error"]["submit_rules_to_parse_succ"]= true
			}
			)
		}
		;this["importRules"]= function(rules,lang)
		{
			$rootScope["user"]["error"]["rules_import_error"]= false;$rootScope["user"]["error"]["rules_import_error_line"]= 0;$rootScope["user"]["error"]["rules_import_error_message"]= null;$rootScope["user"]["error"]["rules_import_succ"]= false;var reqData={rules:rules,msg_lang:lang};
			return server["emit"]('rules-import',reqData,function(resp)
			{
				if(resp["errorCode"])
				{
					$rootScope["user"]["error"]["rules_import_error"]= true;$rootScope["user"]["error"]["rules_import_error_line"]= resp["line"];$rootScope["user"]["error"]["rules_import_error_message"]= resp["message"];return
				}
				$rootScope["user"]["error"]["rules_import_succ"]= true
			}
			)
		}
		;this["fetchThirdPartyRules"]= function(url,lang)
		{
			$rootScope["user"]["error"]["rules_fetch_third_party_error"]= false;$rootScope["user"]["error"]["rules_fetch_third_party_error_code"]= 0;$rootScope["user"]["error"]["rules_fetch_third_party_message"]= null;$rootScope["user"]["error"]["rules_fetch_third_party_succ"]= false;$rootScope["user"]["error"]["rules_fetch_third_party_rules"]= null;var reqData={url:url,msg_lang:lang};
			return server["emit"]('rules-fetch-third-party',reqData,function(resp)
			{
				if(resp["errorCode"])
				{
					$rootScope["user"]["error"]["rules_fetch_third_party_error"]= true;$rootScope["user"]["error"]["rules_fetch_third_party_error_code"]= resp["errorCode"];$rootScope["user"]["error"]["rules_fetch_third_party_message"]= resp["message"];return
				}
				$rootScope["user"]["error"]["rules_fetch_third_party_succ"]= true;$rootScope["user"]["error"]["rules_fetch_third_party_rules"]= resp["rules"]
			}
			)
		}
		;stopSyncDomains= (function(_this)
		{
			return function()
			{
				if(_timerForeverSync)
				{
					clearInterval(_timerForeverSync);return _timerForeverSync= null
				}
			}
		}
		)(this);bindEvents= (function(_this)
		{
			return function()
			{
				$rootScope.$watch('domains',function(n,o)
				{
					if(!_["isEqual"](n,o))
					{
						syncDomains();return save()
					}
				}
				,true);$rootScope.$watch('rejectDomains',function(n,o)
				{
					if(!_["isEqual"](n,o))
					{
						syncDomains();return save()
					}
				}
				,true);$rootScope.$watch('ips',function(n,o)
				{
					if(!_["isEqual"](n,o))
					{
						syncDomains();return save()
					}
				}
				,true);$rootScope.$watch('rejectIps',function(n,o)
				{
					if(!_["isEqual"](n,o))
					{
						syncDomains();return save()
					}
				}
				,true);server["on"]('force_sync_domains',function()
				{
					return syncDomains()
				}
				);$rootScope.$watch('user.profile',function(n,o)
				{
					if(!_["isEqual"](n,o))
					{
						if(n["name"])
						{
							return $timeout(syncDomains)
						}
					}
				}
				,true);syncTimeout= 0;return $rootScope.$watch('isSyncing',function(n,o)
				{
					if(n!== o)
					{
						if(n)
						{
							return syncTimeout= $timeout(function()
							{
								$rootScope["isSyncing"]= false;return syncTimeout= 0
							}
							,10* 1000)
						}
						else 
						{
							if(syncTimeout)
							{
								$timeout["cancel"](syncTimeout);return syncTimeout= 0
							}
						}
					}
				}
				,true)
			}
		}
		)(this);this["init"]= (function(_this)
		{
			return function()
			{
				$rootScope["domains"]= [];$rootScope["rejectDomains"]= [];$rootScope["ips"]= [];$rootScope["rejectIps"]= [];$rootScope["hiddenDomains"]= [];$rootScope["whiteDomains"]= [];_this["initRejectDomainsFromDefault"]();_this["initIpsFromDefault"]();_this["initRejectIpsFromDefault"]();_this["load"]();save();bindEvents();teleScope["linkList"]('domains');teleScope["linkList"]('rejectDomains');teleScope["linkList"]('ips');teleScope["linkList"]('rejectIps');return $log["info"](me,'domainManager Ready!')
			}
		}
		)(this);teleMethod["registerService"]('domainManager',this,['clear','submitRulesToParse','importRules','fetchThirdPartyRules']);return this
	}
	;libs= ['../app','underscore','./teleScope','./teleMethod','./server','./storage','./validate','./domainUtils','./timeUtils'];define(libs,(function(_this)
	{
		return function(app)
		{
			return app["service"]('domainManager',['$rootScope','$log','$timeout','teleScope','teleMethod','storage','validate','server','domainUtils','timeUtils','ROLES','GUEST_DOMAINS','DEFAULT_DOMAINS','DEFAULT_REJECT_DOMAINS','DEFAULT_IPS','DEFAULT_REJECT_IPS','RULE_TYPE','TARGET_TYPE',domainManager])
		}
	}
	)(this))
}
)["call"](this)