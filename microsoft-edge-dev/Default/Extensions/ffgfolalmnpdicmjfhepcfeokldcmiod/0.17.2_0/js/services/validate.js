(function()
{
	var validate;
	validate= function()
	{
		this["ip"]= function(ipaddress)
		{
			if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/["test"](ipaddress))
			{
				return (true)
			}
			return (false)
		}
		;this["cidr"]= function(cidr)
		{
			if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))$/["test"](cidr))
			{
				return (true)
			}
			return (false)
		}
		;this["email"]= function(str)
		{
			return str&& str["length"]>= 6&& /^[\w\-\.]+@[\w\-]+(\.\w+)+$/["test"](str)
		}
		;this["phone"]= function(str)
		{
			return str&& str["length"]=== 11&& /^1(\d)+$/["test"](str)
		}
		;this["domain"]= function(str)
		{
			var regex=/([a-z0-9])?([a-z0-9]+\.)*[a-z0-9]+\.[a-z.]+/ig;
			if(!regex["test"](str))
			{
				return false
			}
			else 
			{
				return true
			}
		}
		;this["domainOrDomainPart"]= function(str)
		{
			var regex=/([a-z])([a-z0-9]+\.)*[a-z0-9]+/ig;
			if(!regex["test"](str))
			{
				return false
			}
			else 
			{
				return true
			}
		}
		;this["url"]= function(str)
		{
			var regex=/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
			if(!regex["test"](str))
			{
				return false
			}
			else 
			{
				return true
			}
		}
		;this["cidr_contains"]= function(cidr_ip,ip)
		{
			if(!this["cidr"](cidr_ip))
			{
				return cidr_ip=== ip
			}
			var cidr= new CidrAddress(cidr_ip);
			return cidr["has"](ip)
		}
		;this["cidr_overlap"]= function(cidr_ip_1,cidr_ip_2)
		{
			var cidr_1= new CidrAddress(cidr_ip_1);
			var cidr_2= new CidrAddress(cidr_ip_2);
			return cidr_1["overlap"](cidr_2)
		}
		;this["server_addr"]= function(document,server_addr)
		{
			var parser=document["createElement"]('a');
			parser["href"]= server_addr;var host=parser["host"];
			if(host["contains"](":"))
			{
				host= host["substr"](0,host["indexOf"](':'))
			}
			if(this["domain"](host)|| this["ip"](host))
			{
				return true
			}
			return false
		}
		;this["get_server_addr"]= function(document,server_addr)
		{
			var ret={};
			var parser=document["createElement"]('a');
			parser["href"]= server_addr;ret["scheme"]= parser["protocol"]+ "//";ret["host"]= parser["host"];ret["port"]= parser["port"];ret["contextPath"]= parser["pathname"].toString();if(ret["contextPath"]!= null&& ret["contextPath"]["startsWith"]('/'))
			{
				ret["contextPath"]= ret["contextPath"]["substr"](1)
			}
			if(ret["contextPath"]!= null&& ret["contextPath"]["length"]> 0&&  !ret["contextPath"]["endsWith"]('/'))
			{
				ret["contextPath"]= ret["contextPath"]+ '/'
			}
			if(ret["scheme"]!= null&& ret["scheme"]=== "http://"&& (ret["port"]== null|| ret["port"]=== ''))
			{
				ret["port"]= "80"
			}
			if(ret["scheme"]!= null&& ret["scheme"]=== "https://"&& (ret["port"]== null|| ret["port"]=== ''))
			{
				ret["port"]= "443"
			}
			return ret
		}
		;this["get_server_addr_string"]= function(document,server_addr)
		{
			var ret=this["get_server_addr"](document,server_addr);
			return ret["scheme"]+ ret["host"]+ "/"+ ret["contextPath"]
		}
		;return this
	}
	;define(['../app','underscore','cidr'],function(app,_)
	{
		return app["service"]('validate',validate)
	}
	)
}
)["call"](this)