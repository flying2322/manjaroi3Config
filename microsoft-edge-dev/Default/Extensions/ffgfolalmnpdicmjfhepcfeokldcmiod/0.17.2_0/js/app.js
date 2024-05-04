(function()
{
	var DEBUG,SCHEME_ARRAY,INS_SCHEME,SCHEME,REST_CONTEXT_PATH,TRIAL_SERVER,INS_SERVER,S_SERVER,WS_RETRIES,LOCALES,DEFAULT_DOMAINS,DEFAULT_REJECT_DOMAINS,DEFAULT_IPS,DEFAULT_REJECT_IPS,DEFAULT_PROXY_PASS,GA_ACCOUNT,GUEST_DOMAINS,LOG_URL,RULE_TYPE,TARGET_TYPE,MODES,ROLES,RavenConfig,WHITE_LIST_DOMAINS,SERVER_CERT_INTERVAL,LATENCY_CONTEXT_PATH,SPEED_CONTEXT_PATH,OFFICIAL_WEBSITE,UPGRADE_URL,STATIC_SERVER,HOW_TO_INSTALL_URL,DOWNLOAD_MAIKR_URL,enableLog,globalLog,manifest,oldLog,_ref,i;
	oldLog= null;globalLog= null;SCHEME_ARRAY= ['h','t','t','p'];INS_SCHEME= SCHEME_ARRAY["join"]("");SCHEME= INS_SCHEME+ "s://";INS_SCHEME+= "://";TRIAL_SERVER= [];enableLog= function(enable,oldLog)
	{
		if(!oldLog)
		{
			oldLog= {log:globalLog["log"],info:globalLog["info"],warn:globalLog["warn"],error:globalLog["error"],debug:globalLog["debug"]}
		}
		if(!enable)
		{
			globalLog["log"]= angular["noop"];globalLog["info"]= angular["noop"];globalLog["warn"]= angular["noop"];globalLog["error"]= angular["noop"];return globalLog["debug"]= angular["noop"]
		}
		else 
		{
			globalLog["log"]= oldLog["log"];globalLog["info"]= oldLog["info"];globalLog["warn"]= oldLog["warn"];globalLog["error"]= oldLog["error"];return globalLog["debug"]= oldLog["debug"]
		}
	}
	;LOCALES= {'locales':{'zh_CN':'\u4e2d\u6587\u7b80\u4f53','en_US':'English'},'preferredLocale':'zh_CN'};manifest= chrome["runtime"]["getManifest"]();GA_ACCOUNT= 'UA-91534953-1';DEFAULT_PROXY_PASS= "<your password>";RULE_TYPE= {DUMMY:0,DOMAIN_SUFFIX:1,DOMAIN_KEYWORD:2,IP_CIDR:1001,GEOIP:1002};TARGET_TYPE= {DUMMY:0,PROXY:1,DIRECT:4,REJECT:8};MODES= {AUTO:'auto',ALWAYS:'always',NEVER:'never'};SERVERS_MODES= {AUTO:'auto',MANUAL:'manual'};ENV_MODES= {env_china:'env_china',env_china_office:'env_china_office',env_oversea:'env_oversea'};ISP_MODES= {CT:'CT',CU:'CU',CM:'CM',CE:'CE',NONE:'none'};DEFAULT_ENV_MODE= "";DEFAULT_DESTINATION= "All";DATA_SAVING_MODES= {FULL:'full',HALF:'half',QUARTER:'quarter',STOP:'stop'};WHEAT_STATUS= {DISABLED:'disabled',UNFETCHED:'unfetched',FETCHED:'fetched',WAITING:'waiting',FETCHING:'fetching',READY:'ready',EXPIRED:'expired'};ROLES= {HACKER:"hacker",GUEST:"guest",USER:"user",VIP:"VIP",KICK_OUT:"kick_out"};INS_SERVER= ["223.113.130.41:1024","103.205.7.202:1024","183.216.54.30:1024","13.115.136.204:80"];S_SERVER= ["mkir.site"];GUEST_DOMAINS= ['google.com','google.com.hk','google.com.sg','google.com.tw','google.co.kr','google.com.ph','google.de','google.co.uk','google.co.jp','google.ca','google.at','google.cz','google.com.vn','google.ru','google.com.au','google.ae','googleusercontent.com','googleapis.com','gstatic.com','twitter.com','t.co','twimg.com','akamaihd.net','android.com','t.me','gmail.com','youtube.com','youtu.be','imgur.com','ytimg.com','googlevideo.com','youtube-nocookie.com','googlesyndication.com','googleadservices.com','ggpht.com','wikipedia.org','wsj.com','akamai.net','tiqcdn.com','fbcdn.net','artirix.com','ssl.google-analytics.com','cloudfront.net','tumblr.com','instagram.com','sstatic.net','appspot.com','facebook.com','atdmt.com','s3.amazonaws.com','blogspot.com','blogger.com','mediafire.com','wordpress.com','vimeo.com','bit.ly','doubleclick.net','cloudflare.com','netflix.com','nflxvideo.net','nflxext.com','ingest.sentry.io'];DEFAULT_DOMAINS= GUEST_DOMAINS;DEFAULT_REJECT_DOMAINS= [];DEFAULT_IPS= [];DEFAULT_REJECT_IPS= [];WHITE_LIST_DOMAINS= ['0.0.0.0','127.0.0.1','localhost'];DEBUG= true;WS_RETRIES= 20;WS_RETRIES_FACTOR= 1;for(i= 0;i< INS_SERVER["length"];i++)
	{
		TRIAL_SERVER["push"](INS_SCHEME+ INS_SERVER[i]+ "/")
	}
	for(i= 0;i< S_SERVER["length"];i++)
	{
		TRIAL_SERVER["push"](SCHEME+ S_SERVER[i]+ "/")
	}
	var server=TRIAL_SERVER[Math["floor"]((Math["random"]()* TRIAL_SERVER["length"]))];
	UPGRADE_URL= "https://chrome.google.com/webstore/detail/ffgfolalmnpdicmjfhepcfeokldcmiod";OFFICIAL_WEBSITE= "https://maikrapps.com";STATIC_SERVER= server;HOW_TO_INSTALL_URL= server+ "i";DOWNLOAD_MAIKR_URL= server+ "/chrome/crx";REST_CONTEXT_PATH= "chrome";LATENCY_CONTEXT_PATH= "latency";SPEED_CONTEXT_PATH= "speed";SERVER_CERT_INTERVAL= [ new Date("2024/01/01"), new Date("2034/12/31")];String["prototype"]["hexEncode"]= function()
	{
		if(!this|| this["length"]== 0)
		{
			return this
		}
		var hex,i;
		var result="";
		for(i= 0;i< this["length"];i++)
		{
			hex= this["charCodeAt"](i).toString(16);result+= ("000"+ hex)["slice"](-4)
		}
		return result
	}
	;String["prototype"]["hexDecode"]= function()
	{
		if(!this|| this["length"]== 0)
		{
			return this
		}
		var j;
		var hexes=this["match"](/.{1,4}/g)|| [];
		var back="";
		for(j= 0;j< hexes["length"];j++)
		{
			back+= String["fromCharCode"](parseInt(hexes[j],16))
		}
		return back
	}
	;if( typeof String["prototype"]["endsWith"]!== 'function')
	{
		String["prototype"]["endsWith"]= function(suffix)
		{
			return this["indexOf"](suffix,this["length"]- suffix["length"])!==  -1
		}
	}
	if( typeof String["prototype"]["replaceAt"]!== 'function')
	{
		String["prototype"]["replaceAt"]= function(index,character)
		{
			return this["substr"](0,index)+ character+ this["substr"](index+ character["length"])
		}
	}
	if( typeof String["prototype"]["startsWith"]!== 'function')
	{
		String["prototype"]["startsWith"]= function(needle)
		{
			return (this["indexOf"](needle)== 0)
		}
	}
	if( typeof String["prototype"]["contains"]!== 'function')
	{
		String["prototype"]["contains"]= function(sub)
		{
			return (this["indexOf"](sub)!==  -1)
		}
	}
	if( typeof String["prototype"]["getRandomToken"]!== 'function')
	{
		String["prototype"]["getRandomToken"]= function(needle)
		{
			var randomPool= new Uint8Array(needle);
			crypto["getRandomValues"](randomPool);var hex='';
			for(var i=0;i< randomPool["length"];++i)
			{
				hex+= randomPool[i].toString(16)
			}
			return hex
		}
	}
	String["prototype"]["lines"]= function()
	{
		return this["split"](/\r*\n/)
	}
	;String["prototype"]["lineCount"]= function()
	{
		return this["lines"]()["length"]
	}
	;String["prototype"]["textarea_lines"]= function()
	{
		return this["split"](/\r|\r\n|\n/)
	}
	;String["prototype"]["textarea_line_count"]= function()
	{
		return this["textarea_lines"]()["length"]
	}
	;Array["prototype"]["remove_by_value"]= function(val)
	{
		for(var i=0;i< this["length"];i++)
		{
			if(this[i]=== val)
			{
				this["splice"](i,1);i--
			}
		}
		return this
	}
	;define(['angular','angular_log_ex','ngSanitize','angular_translate','ngAnimate','angular_strap','angular_strap_tpl'],function(angular)
	{
		var app;
		app= angular["module"]('app',['log.ex.uo','ngSanitize',"pascalprecht.translate",'ngAnimate','mgcrea.ngStrap']);app["value"]('SERVER',{});app["constant"]({manifest:manifest,VER:manifest["version"],PLATFORM:'chrome-ext',REST_CONTEXT_PATH:REST_CONTEXT_PATH,LATENCY_CONTEXT_PATH:LATENCY_CONTEXT_PATH,SPEED_CONTEXT_PATH:SPEED_CONTEXT_PATH,TRIAL_SERVER:TRIAL_SERVER,GA_ACCOUNT:GA_ACCOUNT,DEFAULT_PROXY_PASS:DEFAULT_PROXY_PASS,UPGRADE_URL:UPGRADE_URL,OFFICIAL_WEBSITE:OFFICIAL_WEBSITE,STATIC_SERVER:STATIC_SERVER,HOW_TO_INSTALL_URL:HOW_TO_INSTALL_URL,DOWNLOAD_MAIKR_URL:DOWNLOAD_MAIKR_URL,RULE_TYPE:RULE_TYPE,TARGET_TYPE:TARGET_TYPE,MODES:MODES,SERVERS_MODES:SERVERS_MODES,ISP_MODES:ISP_MODES,ENV_MODES:ENV_MODES,DEFAULT_ENV_MODE:DEFAULT_ENV_MODE,DEFAULT_DESTINATION:DEFAULT_DESTINATION,DATA_SAVING_MODES:DATA_SAVING_MODES,ROLES:ROLES,WS_RETRIES:WS_RETRIES,WS_RETRIES_FACTOR:WS_RETRIES_FACTOR,WHEAT_STATUS:WHEAT_STATUS,GUEST_DOMAINS:GUEST_DOMAINS,DEFAULT_DOMAINS:DEFAULT_DOMAINS,DEFAULT_REJECT_DOMAINS:DEFAULT_REJECT_DOMAINS,DEFAULT_IPS:DEFAULT_IPS,DEFAULT_REJECT_IPS:DEFAULT_REJECT_IPS,WHITE_LIST_DOMAINS:WHITE_LIST_DOMAINS,SERVER_CERT_INTERVAL:SERVER_CERT_INTERVAL,LOCALES:LOCALES});app["config"](function(logExProvider)
		{
			return logExProvider["enableLogging"](false)
		}
		);app["run"](function($log)
		{
			globalLog= $log;enableLog(false,$log);return window["enableLog"]= enableLog
		}
		);return app
	}
	)
}
)["call"](this)