(function()
{
	define(['../app','md5',"sha512","lz_string"],function(app,md5)
	{
		var generate;
		generate= function()
		{
			this["uuid"]= function()
			{
				var chars,i,r,rnd,uuid,_i;
				chars= '0123456789abcdef'["split"]('');uuid= [];rnd= Math["random"];uuid[8]= uuid[13]= uuid[18]= uuid[23]= '-';uuid[14]= '4';for(i= _i= 0;_i<= 35;i=  ++_i)
				{
					if(!uuid[i])
					{
						r= 0| rnd()* 16;uuid[i]= chars[i=== 19?r& 0x3| 0x8:r& 0xf]
					}
				}
				return uuid["join"]('')
			}
			;this["randomId"]= function(length)
			{
				var chars,i;
				chars= '01234567890abcdefghijklmnopqrstuvwxyz';return ((function()
				{
					var _i,_results;
					_results= [];for(i= _i= 1;1<= length?_i<= length:_i>= length;i= 1<= length?++_i:--_i)
					{
						_results["push"](chars[Math["floor"](Math["random"]()* chars["length"])])
					}
					return _results
				}
				)())["join"]('')
			}
			;this["md5"]= function(str)
			{
				return md5(str)
			}
			;this["d"]= function(u,p,t,s)
			{
				var i=u["substring"](0,28)+ t["substring"](t["length"]- 4,t["length"]);
				return  new AesUtil(128,100)["decrypt"](i,i,p,s)
			}
			;this["sha512"]= function(str)
			{
				return sha512(str)
			}
			;this["lz_compress"]= function(str)
			{
				return LZString["compress"](str)
			}
			;this["lz_decompress"]= function(str)
			{
				return LZString["decompress"](str)
			}
			;this["lz_compressToBase64"]= function(str)
			{
				return LZString["compressToBase64"](str)
			}
			;this["lz_decompressFromBase64"]= function(str)
			{
				return LZString["decompressFromBase64"](str)
			}
			;this["randomIntFromInterval"]= function(min,max)
			{
				return Math["floor"](Math["random"]()* (max- min+ 1)+ min)
			}
			;return this
		}
		;return app["service"]('generate',generate)
	}
	)
}
)["call"](this)