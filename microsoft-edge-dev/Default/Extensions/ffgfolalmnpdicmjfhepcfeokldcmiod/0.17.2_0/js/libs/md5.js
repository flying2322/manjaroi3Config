/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

(function()
{
  'use strict';var ERROR='input is invalid type';
  var WINDOW= typeof window=== 'object';
  var root=WINDOW?window:{};
  if(root["JS_MD5_NO_WINDOW"])
  {
    WINDOW= false
  }
  var WEB_WORKER=!WINDOW&&  typeof self=== 'object';
  var NODE_JS=!root["JS_MD5_NO_NODE_JS"]&&  typeof process=== 'object' && process["versions"] && process["versions"]["node"];
  if(NODE_JS)
  {
    root= global
  }
  else 
  {
    if(WEB_WORKER)
    {
      root= self
    }
  }
  var COMMON_JS=!root["JS_MD5_NO_COMMON_JS"]&&  typeof module=== 'object' && module["exports"];
  var AMD= typeof define=== 'function'&& define["amd"];
  var ARRAY_BUFFER=!root["JS_MD5_NO_ARRAY_BUFFER"]&&  typeof ArrayBuffer!== 'undefined';
  var HEX_CHARS='0123456789abcdef'["split"]('');
  var EXTRA=[128,32768,8388608,-2147483648];
  var SHIFT=[0,8,16,24];
  var OUTPUT_TYPES=['hex','array','digest','buffer','arrayBuffer','base64'];
  var BASE64_ENCODE_CHAR='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'["split"]('');
  var blocks=[],buffer8;
  if(ARRAY_BUFFER)
  {
    var buffer= new ArrayBuffer(68);
    buffer8=  new Uint8Array(buffer);blocks=  new Uint32Array(buffer)
  }
  if(root["JS_MD5_NO_NODE_JS"]||  !Array["isArray"])
  {
    Array["isArray"]= function(obj)
    {
      return Object["prototype"]["toString"]["call"](obj)=== '[object Array]'
    }
  }
  if(ARRAY_BUFFER&& (root["JS_MD5_NO_ARRAY_BUFFER_IS_VIEW"]||  !ArrayBuffer["isView"]))
  {
    ArrayBuffer["isView"]= function(obj)
    {
      return  typeof obj=== 'object'&& obj["buffer"]&& obj["buffer"]["constructor"]=== ArrayBuffer
    }
  }
  var createOutputMethod=function(outputType)
  {
    return function(message)
    {
      return  new Md5(true)["update"](message)[outputType]()
    }
  }
  ;
  var createMethod=function()
  {
    var method=createOutputMethod('hex');
    if(NODE_JS)
    {
      method= nodeWrap(method)
    }
    method["create"]= function()
    {
      return  new Md5()
    }
    ;method["update"]= function(message)
    {
      return method["create"]()["update"](message)
    }
    ;for(var i=0;i< OUTPUT_TYPES["length"];++i)
    {
      var type=OUTPUT_TYPES[i];
      method[type]= createOutputMethod(type)
    }
    return method
  }
  ;
  var nodeWrap=function(method)
  {
    var crypto=eval("require(\'crypto\')");
    var Buffer=eval("require(\'buffer\').Buffer");
    var nodeMethod=function(message)
    {
      if( typeof message=== 'string')
      {
        return crypto["createHash"]('md5')["update"](message,'utf8')["digest"]('hex')
      }
      else 
      {
        if(message=== null|| message=== undefined)
        {
          throw ERROR
        }
        else 
        {
          if(message["constructor"]=== ArrayBuffer)
          {
            message=  new Uint8Array(message)
          }
        }
      }
      if(Array["isArray"](message)|| ArrayBuffer["isView"](message)|| message["constructor"]=== Buffer)
      {
        return crypto["createHash"]('md5')["update"]( new Buffer(message))["digest"]('hex')
      }
      else 
      {
        return method(message)
      }
    }
    ;
    return nodeMethod
  }
  ;
  function Md5(sharedMemory)
  {
    if(sharedMemory)
    {
      blocks[0]= blocks[16]= blocks[1]= blocks[2]= blocks[3]= blocks[4]= blocks[5]= blocks[6]= blocks[7]= blocks[8]= blocks[9]= blocks[10]= blocks[11]= blocks[12]= blocks[13]= blocks[14]= blocks[15]= 0;this["blocks"]= blocks;this["buffer8"]= buffer8
    }
    else 
    {
      if(ARRAY_BUFFER)
      {
        var buffer= new ArrayBuffer(68);
        this["buffer8"]=  new Uint8Array(buffer);this["blocks"]=  new Uint32Array(buffer)
      }
      else 
      {
        this["blocks"]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
    this["h0"]= this["h1"]= this["h2"]= this["h3"]= this["start"]= this["bytes"]= this["hBytes"]= 0;this["finalized"]= this["hashed"]= false;this["first"]= true
  }
  Md5["prototype"]["update"]= function(message)
  {
    if(this["finalized"])
    {
      return
    }
    var notString,type= typeof message;
    if(type!== 'string')
    {
      if(type=== 'object')
      {
        if(message=== null)
        {
          throw ERROR
        }
        else 
        {
          if(ARRAY_BUFFER&& message["constructor"]=== ArrayBuffer)
          {
            message=  new Uint8Array(message)
          }
          else 
          {
            if(!Array["isArray"](message))
            {
              if(!ARRAY_BUFFER||  !ArrayBuffer["isView"](message))
              {
                throw ERROR
              }
            }
          }
        }
      }
      else 
      {
        throw ERROR
      }
      notString= true
    }
    var code,index=0,i,length=message["length"],blocks=this["blocks"];
    var buffer8=this["buffer8"];
    while(index< length)
    {
      if(this["hashed"])
      {
        this["hashed"]= false;blocks[0]= blocks[16];blocks[16]= blocks[1]= blocks[2]= blocks[3]= blocks[4]= blocks[5]= blocks[6]= blocks[7]= blocks[8]= blocks[9]= blocks[10]= blocks[11]= blocks[12]= blocks[13]= blocks[14]= blocks[15]= 0
      }
      if(notString)
      {
        if(ARRAY_BUFFER)
        {
          for(i= this["start"];index< length&& i< 64;++index)
          {
            buffer8[i++]= message[index]
          }
        }
        else 
        {
          for(i= this["start"];index< length&& i< 64;++index)
          {
            blocks[i>> 2]|= message[index]<< SHIFT[i++ & 3]
          }
        }
      }
      else 
      {
        if(ARRAY_BUFFER)
        {
          for(i= this["start"];index< length&& i< 64;++index)
          {
            code= message["charCodeAt"](index);if(code< 0x80)
            {
              buffer8[i++]= code
            }
            else 
            {
              if(code< 0x800)
              {
                buffer8[i++]= 0xc0| (code>> 6);buffer8[i++]= 0x80| (code& 0x3f)
              }
              else 
              {
                if(code< 0xd800|| code>= 0xe000)
                {
                  buffer8[i++]= 0xe0| (code>> 12);buffer8[i++]= 0x80| ((code>> 6)& 0x3f);buffer8[i++]= 0x80| (code& 0x3f)
                }
                else 
                {
                  code= 0x10000+ (((code& 0x3ff)<< 10)| (message["charCodeAt"](++index) & 0x3ff));buffer8[i++]= 0xf0| (code>> 18);buffer8[i++]= 0x80| ((code>> 12)& 0x3f);buffer8[i++]= 0x80| ((code>> 6)& 0x3f);buffer8[i++]= 0x80| (code& 0x3f)
                }
              }
            }
          }
        }
        else 
        {
          for(i= this["start"];index< length&& i< 64;++index)
          {
            code= message["charCodeAt"](index);if(code< 0x80)
            {
              blocks[i>> 2]|= code<< SHIFT[i++ & 3]
            }
            else 
            {
              if(code< 0x800)
              {
                blocks[i>> 2]|= (0xc0| (code>> 6))<< SHIFT[i++ & 3];blocks[i>> 2]|= (0x80| (code& 0x3f))<< SHIFT[i++ & 3]
              }
              else 
              {
                if(code< 0xd800|| code>= 0xe000)
                {
                  blocks[i>> 2]|= (0xe0| (code>> 12))<< SHIFT[i++ & 3];blocks[i>> 2]|= (0x80| ((code>> 6)& 0x3f))<< SHIFT[i++ & 3];blocks[i>> 2]|= (0x80| (code& 0x3f))<< SHIFT[i++ & 3]
                }
                else 
                {
                  code= 0x10000+ (((code& 0x3ff)<< 10)| (message["charCodeAt"](++index) & 0x3ff));blocks[i>> 2]|= (0xf0| (code>> 18))<< SHIFT[i++ & 3];blocks[i>> 2]|= (0x80| ((code>> 12)& 0x3f))<< SHIFT[i++ & 3];blocks[i>> 2]|= (0x80| ((code>> 6)& 0x3f))<< SHIFT[i++ & 3];blocks[i>> 2]|= (0x80| (code& 0x3f))<< SHIFT[i++ & 3]
                }
              }
            }
          }
        }
      }
      this["lastByteIndex"]= i;this["bytes"]+= i- this["start"];if(i>= 64)
      {
        this["start"]= i- 64;this["hash"]();this["hashed"]= true
      }
      else 
      {
        this["start"]= i
      }
    }
    if(this["bytes"]> 4294967295)
    {
      this["hBytes"]+= this["bytes"]/ 4294967296<< 0;this["bytes"]= this["bytes"]% 4294967296
    }
    return this
  }
  ;Md5["prototype"]["finalize"]= function()
  {
    if(this["finalized"])
    {
      return
    }
    this["finalized"]= true;var blocks=this["blocks"],i=this["lastByteIndex"];
    blocks[i>> 2]|= EXTRA[i& 3];if(i>= 56)
    {
      if(!this["hashed"])
      {
        this["hash"]()
      }
      blocks[0]= blocks[16];blocks[16]= blocks[1]= blocks[2]= blocks[3]= blocks[4]= blocks[5]= blocks[6]= blocks[7]= blocks[8]= blocks[9]= blocks[10]= blocks[11]= blocks[12]= blocks[13]= blocks[14]= blocks[15]= 0
    }
    blocks[14]= this["bytes"]<< 3;blocks[15]= this["hBytes"]<< 3| this["bytes"]>>> 29;this["hash"]()
  }
  ;Md5["prototype"]["hash"]= function()
  {
    var a,b,c,d,bc,da,blocks=this["blocks"];
    if(this["first"])
    {
      a= blocks[0]- 680876937;a= (a<< 7| a>>> 25)- 271733879<< 0;d= (-1732584194^ a& 2004318071) + blocks[1] - 117830708;d= (d<< 12| d>>> 20)+ a<< 0;c= (-271733879^ (d& (a^  -271733879))) + blocks[2] - 1126478375;c= (c<< 17| c>>> 15)+ d<< 0;b= (a^ (c& (d^ a)))+ blocks[3]- 1316259209;b= (b<< 22| b>>> 10)+ c<< 0
    }
    else 
    {
      a= this["h0"];b= this["h1"];c= this["h2"];d= this["h3"];a+= (d^ (b& (c^ d)))+ blocks[0]- 680876936;a= (a<< 7| a>>> 25)+ b<< 0;d+= (c^ (a& (b^ c)))+ blocks[1]- 389564586;d= (d<< 12| d>>> 20)+ a<< 0;c+= (b^ (d& (a^ b)))+ blocks[2]+ 606105819;c= (c<< 17| c>>> 15)+ d<< 0;b+= (a^ (c& (d^ a)))+ blocks[3]- 1044525330;b= (b<< 22| b>>> 10)+ c<< 0
    }
    a+= (d^ (b& (c^ d)))+ blocks[4]- 176418897;a= (a<< 7| a>>> 25)+ b<< 0;d+= (c^ (a& (b^ c)))+ blocks[5]+ 1200080426;d= (d<< 12| d>>> 20)+ a<< 0;c+= (b^ (d& (a^ b)))+ blocks[6]- 1473231341;c= (c<< 17| c>>> 15)+ d<< 0;b+= (a^ (c& (d^ a)))+ blocks[7]- 45705983;b= (b<< 22| b>>> 10)+ c<< 0;a+= (d^ (b& (c^ d)))+ blocks[8]+ 1770035416;a= (a<< 7| a>>> 25)+ b<< 0;d+= (c^ (a& (b^ c)))+ blocks[9]- 1958414417;d= (d<< 12| d>>> 20)+ a<< 0;c+= (b^ (d& (a^ b)))+ blocks[10]- 42063;c= (c<< 17| c>>> 15)+ d<< 0;b+= (a^ (c& (d^ a)))+ blocks[11]- 1990404162;b= (b<< 22| b>>> 10)+ c<< 0;a+= (d^ (b& (c^ d)))+ blocks[12]+ 1804603682;a= (a<< 7| a>>> 25)+ b<< 0;d+= (c^ (a& (b^ c)))+ blocks[13]- 40341101;d= (d<< 12| d>>> 20)+ a<< 0;c+= (b^ (d& (a^ b)))+ blocks[14]- 1502002290;c= (c<< 17| c>>> 15)+ d<< 0;b+= (a^ (c& (d^ a)))+ blocks[15]+ 1236535329;b= (b<< 22| b>>> 10)+ c<< 0;a+= (c^ (d& (b^ c)))+ blocks[1]- 165796510;a= (a<< 5| a>>> 27)+ b<< 0;d+= (b^ (c& (a^ b)))+ blocks[6]- 1069501632;d= (d<< 9| d>>> 23)+ a<< 0;c+= (a^ (b& (d^ a)))+ blocks[11]+ 643717713;c= (c<< 14| c>>> 18)+ d<< 0;b+= (d^ (a& (c^ d)))+ blocks[0]- 373897302;b= (b<< 20| b>>> 12)+ c<< 0;a+= (c^ (d& (b^ c)))+ blocks[5]- 701558691;a= (a<< 5| a>>> 27)+ b<< 0;d+= (b^ (c& (a^ b)))+ blocks[10]+ 38016083;d= (d<< 9| d>>> 23)+ a<< 0;c+= (a^ (b& (d^ a)))+ blocks[15]- 660478335;c= (c<< 14| c>>> 18)+ d<< 0;b+= (d^ (a& (c^ d)))+ blocks[4]- 405537848;b= (b<< 20| b>>> 12)+ c<< 0;a+= (c^ (d& (b^ c)))+ blocks[9]+ 568446438;a= (a<< 5| a>>> 27)+ b<< 0;d+= (b^ (c& (a^ b)))+ blocks[14]- 1019803690;d= (d<< 9| d>>> 23)+ a<< 0;c+= (a^ (b& (d^ a)))+ blocks[3]- 187363961;c= (c<< 14| c>>> 18)+ d<< 0;b+= (d^ (a& (c^ d)))+ blocks[8]+ 1163531501;b= (b<< 20| b>>> 12)+ c<< 0;a+= (c^ (d& (b^ c)))+ blocks[13]- 1444681467;a= (a<< 5| a>>> 27)+ b<< 0;d+= (b^ (c& (a^ b)))+ blocks[2]- 51403784;d= (d<< 9| d>>> 23)+ a<< 0;c+= (a^ (b& (d^ a)))+ blocks[7]+ 1735328473;c= (c<< 14| c>>> 18)+ d<< 0;b+= (d^ (a& (c^ d)))+ blocks[12]- 1926607734;b= (b<< 20| b>>> 12)+ c<< 0;bc= b^ c;a+= (bc^ d)+ blocks[5]- 378558;a= (a<< 4| a>>> 28)+ b<< 0;d+= (bc^ a)+ blocks[8]- 2022574463;d= (d<< 11| d>>> 21)+ a<< 0;da= d^ a;c+= (da^ b)+ blocks[11]+ 1839030562;c= (c<< 16| c>>> 16)+ d<< 0;b+= (da^ c)+ blocks[14]- 35309556;b= (b<< 23| b>>> 9)+ c<< 0;bc= b^ c;a+= (bc^ d)+ blocks[1]- 1530992060;a= (a<< 4| a>>> 28)+ b<< 0;d+= (bc^ a)+ blocks[4]+ 1272893353;d= (d<< 11| d>>> 21)+ a<< 0;da= d^ a;c+= (da^ b)+ blocks[7]- 155497632;c= (c<< 16| c>>> 16)+ d<< 0;b+= (da^ c)+ blocks[10]- 1094730640;b= (b<< 23| b>>> 9)+ c<< 0;bc= b^ c;a+= (bc^ d)+ blocks[13]+ 681279174;a= (a<< 4| a>>> 28)+ b<< 0;d+= (bc^ a)+ blocks[0]- 358537222;d= (d<< 11| d>>> 21)+ a<< 0;da= d^ a;c+= (da^ b)+ blocks[3]- 722521979;c= (c<< 16| c>>> 16)+ d<< 0;b+= (da^ c)+ blocks[6]+ 76029189;b= (b<< 23| b>>> 9)+ c<< 0;bc= b^ c;a+= (bc^ d)+ blocks[9]- 640364487;a= (a<< 4| a>>> 28)+ b<< 0;d+= (bc^ a)+ blocks[12]- 421815835;d= (d<< 11| d>>> 21)+ a<< 0;da= d^ a;c+= (da^ b)+ blocks[15]+ 530742520;c= (c<< 16| c>>> 16)+ d<< 0;b+= (da^ c)+ blocks[2]- 995338651;b= (b<< 23| b>>> 9)+ c<< 0;a+= (c^ (b|  ~d))+ blocks[0]- 198630844;a= (a<< 6| a>>> 26)+ b<< 0;d+= (b^ (a|  ~c))+ blocks[7]+ 1126891415;d= (d<< 10| d>>> 22)+ a<< 0;c+= (a^ (d|  ~b))+ blocks[14]- 1416354905;c= (c<< 15| c>>> 17)+ d<< 0;b+= (d^ (c|  ~a))+ blocks[5]- 57434055;b= (b<< 21| b>>> 11)+ c<< 0;a+= (c^ (b|  ~d))+ blocks[12]+ 1700485571;a= (a<< 6| a>>> 26)+ b<< 0;d+= (b^ (a|  ~c))+ blocks[3]- 1894986606;d= (d<< 10| d>>> 22)+ a<< 0;c+= (a^ (d|  ~b))+ blocks[10]- 1051523;c= (c<< 15| c>>> 17)+ d<< 0;b+= (d^ (c|  ~a))+ blocks[1]- 2054922799;b= (b<< 21| b>>> 11)+ c<< 0;a+= (c^ (b|  ~d))+ blocks[8]+ 1873313359;a= (a<< 6| a>>> 26)+ b<< 0;d+= (b^ (a|  ~c))+ blocks[15]- 30611744;d= (d<< 10| d>>> 22)+ a<< 0;c+= (a^ (d|  ~b))+ blocks[6]- 1560198380;c= (c<< 15| c>>> 17)+ d<< 0;b+= (d^ (c|  ~a))+ blocks[13]+ 1309151649;b= (b<< 21| b>>> 11)+ c<< 0;a+= (c^ (b|  ~d))+ blocks[4]- 145523070;a= (a<< 6| a>>> 26)+ b<< 0;d+= (b^ (a|  ~c))+ blocks[11]- 1120210379;d= (d<< 10| d>>> 22)+ a<< 0;c+= (a^ (d|  ~b))+ blocks[2]+ 718787259;c= (c<< 15| c>>> 17)+ d<< 0;b+= (d^ (c|  ~a))+ blocks[9]- 343485551;b= (b<< 21| b>>> 11)+ c<< 0;if(this["first"])
    {
      this["h0"]= a+ 1732584193<< 0;this["h1"]= b- 271733879<< 0;this["h2"]= c- 1732584194<< 0;this["h3"]= d+ 271733878<< 0;this["first"]= false
    }
    else 
    {
      this["h0"]= this["h0"]+ a<< 0;this["h1"]= this["h1"]+ b<< 0;this["h2"]= this["h2"]+ c<< 0;this["h3"]= this["h3"]+ d<< 0
    }
  }
  ;Md5["prototype"]["hex"]= function()
  {
    this["finalize"]();var h0=this["h0"],h1=this["h1"],h2=this["h2"],h3=this["h3"];
    return HEX_CHARS[(h0>> 4)& 0x0F]+ HEX_CHARS[h0& 0x0F]+ HEX_CHARS[(h0>> 12)& 0x0F]+ HEX_CHARS[(h0>> 8)& 0x0F]+ HEX_CHARS[(h0>> 20)& 0x0F]+ HEX_CHARS[(h0>> 16)& 0x0F]+ HEX_CHARS[(h0>> 28)& 0x0F]+ HEX_CHARS[(h0>> 24)& 0x0F]+ HEX_CHARS[(h1>> 4)& 0x0F]+ HEX_CHARS[h1& 0x0F]+ HEX_CHARS[(h1>> 12)& 0x0F]+ HEX_CHARS[(h1>> 8)& 0x0F]+ HEX_CHARS[(h1>> 20)& 0x0F]+ HEX_CHARS[(h1>> 16)& 0x0F]+ HEX_CHARS[(h1>> 28)& 0x0F]+ HEX_CHARS[(h1>> 24)& 0x0F]+ HEX_CHARS[(h2>> 4)& 0x0F]+ HEX_CHARS[h2& 0x0F]+ HEX_CHARS[(h2>> 12)& 0x0F]+ HEX_CHARS[(h2>> 8)& 0x0F]+ HEX_CHARS[(h2>> 20)& 0x0F]+ HEX_CHARS[(h2>> 16)& 0x0F]+ HEX_CHARS[(h2>> 28)& 0x0F]+ HEX_CHARS[(h2>> 24)& 0x0F]+ HEX_CHARS[(h3>> 4)& 0x0F]+ HEX_CHARS[h3& 0x0F]+ HEX_CHARS[(h3>> 12)& 0x0F]+ HEX_CHARS[(h3>> 8)& 0x0F]+ HEX_CHARS[(h3>> 20)& 0x0F]+ HEX_CHARS[(h3>> 16)& 0x0F]+ HEX_CHARS[(h3>> 28)& 0x0F]+ HEX_CHARS[(h3>> 24)& 0x0F]
  }
  ;Md5["prototype"]["toString"]= Md5["prototype"]["hex"];Md5["prototype"]["digest"]= function()
  {
    this["finalize"]();var h0=this["h0"],h1=this["h1"],h2=this["h2"],h3=this["h3"];
    return [h0& 0xFF,(h0>> 8)& 0xFF,(h0>> 16)& 0xFF,(h0>> 24)& 0xFF,h1& 0xFF,(h1>> 8)& 0xFF,(h1>> 16)& 0xFF,(h1>> 24)& 0xFF,h2& 0xFF,(h2>> 8)& 0xFF,(h2>> 16)& 0xFF,(h2>> 24)& 0xFF,h3& 0xFF,(h3>> 8)& 0xFF,(h3>> 16)& 0xFF,(h3>> 24)& 0xFF]
  }
  ;Md5["prototype"]["array"]= Md5["prototype"]["digest"];Md5["prototype"]["arrayBuffer"]= function()
  {
    this["finalize"]();var buffer= new ArrayBuffer(16);
    var blocks= new Uint32Array(buffer);
    blocks[0]= this["h0"];blocks[1]= this["h1"];blocks[2]= this["h2"];blocks[3]= this["h3"];return buffer
  }
  ;Md5["prototype"]["buffer"]= Md5["prototype"]["arrayBuffer"];Md5["prototype"]["base64"]= function()
  {
    var v1,v2,v3,base64Str='',bytes=this["array"]();
    for(var i=0;i< 15;)
    {
      v1= bytes[i++];v2= bytes[i++];v3= bytes[i++];base64Str+= BASE64_ENCODE_CHAR[v1>>> 2]+ BASE64_ENCODE_CHAR[(v1<< 4| v2>>> 4)& 63]+ BASE64_ENCODE_CHAR[(v2<< 2| v3>>> 6)& 63]+ BASE64_ENCODE_CHAR[v3& 63]
    }
    v1= bytes[i];base64Str+= BASE64_ENCODE_CHAR[v1>>> 2]+ BASE64_ENCODE_CHAR[(v1<< 4)& 63]+ '==';return base64Str
  }
  ;var exports=createMethod();
  if(COMMON_JS)
  {
    module["exports"]= exports
  }
  else 
  {
    root["md5"]= exports;if(AMD)
    {
      define(function()
      {
        return exports
      }
      )
    }
  }
}
)();var CryptoJS=CryptoJS|| (function(Math,undefined)
{
  var C={};
  var C_lib=C["lib"]= {};
  var Base=C_lib["Base"]= (function()
  {
    function F()
    {
    }
    return {extend:function(overrides)
    {
      F["prototype"]= this;var subtype= new F();
      if(overrides)
      {
        subtype["mixIn"](overrides)
      }
      if(!subtype["hasOwnProperty"]('init'))
      {
        subtype["init"]= function()
        {
          subtype["$super"]["init"]["apply"](this,arguments)
        }
      }
      subtype["init"]["prototype"]= subtype;subtype["$super"]= this;return subtype
    }
    ,create:function()
    {
      var instance=this["extend"]();
      instance["init"]["apply"](instance,arguments);return instance
    }
    ,init:function()
    {
    }
    ,mixIn:function(properties)
    {
      for(var propertyName in properties)
      {
        if(properties["hasOwnProperty"](propertyName))
        {
          this[propertyName]= properties[propertyName]
        }
      }
      if(properties["hasOwnProperty"]('toString'))
      {
        this["toString"]= properties["toString"]
      }
    }
    ,clone:function()
    {
      return this["init"]["prototype"]["extend"](this)
    }
    }
  }
  ());
  var WordArray=C_lib["WordArray"]= Base["extend"]({init:function(words,sigBytes)
  {
    words= this["words"]= words|| [];if(sigBytes!= undefined)
    {
      this["sigBytes"]= sigBytes
    }
    else 
    {
      this["sigBytes"]= words["length"]* 4
    }
  }
  ,toString:function(encoder)
  {
    return (encoder|| Hex)["stringify"](this)
  }
  ,concat:function(wordArray)
  {
    var thisWords=this["words"];
    var thatWords=wordArray["words"];
    var thisSigBytes=this["sigBytes"];
    var thatSigBytes=wordArray["sigBytes"];
    this["clamp"]();if(thisSigBytes% 4)
    {
      for(var i=0;i< thatSigBytes;i++)
      {
        var thatByte=(thatWords[i>>> 2]>>> (24- (i% 4)* 8))& 0xff;
        thisWords[(thisSigBytes+ i)>>> 2]|= thatByte<< (24- ((thisSigBytes+ i)% 4)* 8)
      }
    }
    else 
    {
      if(thatWords["length"]> 0xffff)
      {
        for(var i=0;i< thatSigBytes;i+= 4)
        {
          thisWords[(thisSigBytes+ i)>>> 2]= thatWords[i>>> 2]
        }
      }
      else 
      {
        thisWords["push"]["apply"](thisWords,thatWords)
      }
    }
    this["sigBytes"]+= thatSigBytes;return this
  }
  ,clamp:function()
  {
    var words=this["words"];
    var sigBytes=this["sigBytes"];
    words[sigBytes>>> 2]&= 0xffffffff<< (32- (sigBytes% 4)* 8);words["length"]= Math["ceil"](sigBytes/ 4)
  }
  ,clone:function()
  {
    var clone=Base["clone"]["call"](this);
    clone["words"]= this["words"]["slice"](0);return clone
  }
  ,random:function(nBytes)
  {
    var words=[];
    for(var i=0;i< nBytes;i+= 4)
    {
      words["push"]((Math["random"]()* 0x100000000)| 0)
    }
    return  new WordArray["init"](words,nBytes)
  }
  });
  var C_enc=C["enc"]= {};
  var Hex=C_enc["Hex"]= {stringify:function(wordArray)
  {
    var words=wordArray["words"];
    var sigBytes=wordArray["sigBytes"];
    var hexChars=[];
    for(var i=0;i< sigBytes;i++)
    {
      var bite=(words[i>>> 2]>>> (24- (i% 4)* 8))& 0xff;
      hexChars["push"]((bite>>> 4).toString(16));hexChars["push"]((bite& 0x0f).toString(16))
    }
    return hexChars["join"]('')
  }
  ,parse:function(hexStr)
  {
    var hexStrLength=hexStr["length"];
    var words=[];
    for(var i=0;i< hexStrLength;i+= 2)
    {
      words[i>>> 3]|= parseInt(hexStr["substr"](i,2),16)<< (24- (i% 8)* 4)
    }
    return  new WordArray["init"](words,hexStrLength/ 2)
  }
  };
  var Latin1=C_enc["Latin1"]= {stringify:function(wordArray)
  {
    var words=wordArray["words"];
    var sigBytes=wordArray["sigBytes"];
    var latin1Chars=[];
    for(var i=0;i< sigBytes;i++)
    {
      var bite=(words[i>>> 2]>>> (24- (i% 4)* 8))& 0xff;
      latin1Chars["push"](String["fromCharCode"](bite))
    }
    return latin1Chars["join"]('')
  }
  ,parse:function(latin1Str)
  {
    var latin1StrLength=latin1Str["length"];
    var words=[];
    for(var i=0;i< latin1StrLength;i++)
    {
      words[i>>> 2]|= (latin1Str["charCodeAt"](i)& 0xff)<< (24- (i% 4)* 8)
    }
    return  new WordArray["init"](words,latin1StrLength)
  }
  };
  var Utf8=C_enc["Utf8"]= {stringify:function(wordArray)
  {
    try
    {
      return decodeURIComponent(escape(Latin1["stringify"](wordArray)))
    }
    catch(e)
    {
      throw  new Error('Malformed UTF-8 data')
    }
  }
  ,parse:function(utf8Str)
  {
    return Latin1["parse"](unescape(encodeURIComponent(utf8Str)))
  }
  };
  var BufferedBlockAlgorithm=C_lib["BufferedBlockAlgorithm"]= Base["extend"]({reset:function()
  {
    this["_data"]=  new WordArray["init"]();this["_nDataBytes"]= 0
  }
  ,_append:function(data)
  {
    if( typeof data== 'string')
    {
      data= Utf8["parse"](data)
    }
    this["_data"]["concat"](data);this["_nDataBytes"]+= data["sigBytes"]
  }
  ,_process:function(doFlush)
  {
    var data=this["_data"];
    var dataWords=data["words"];
    var dataSigBytes=data["sigBytes"];
    var blockSize=this["blockSize"];
    var blockSizeBytes=blockSize* 4;
    var nBlocksReady=dataSigBytes/ blockSizeBytes;
    if(doFlush)
    {
      nBlocksReady= Math["ceil"](nBlocksReady)
    }
    else 
    {
      nBlocksReady= Math["max"]((nBlocksReady| 0)- this["_minBufferSize"],0)
    }
    var nWordsReady=nBlocksReady* blockSize;
    var nBytesReady=Math["min"](nWordsReady* 4,dataSigBytes);
    if(nWordsReady)
    {
      for(var offset=0;offset< nWordsReady;offset+= blockSize)
      {
        this._doProcessBlock(dataWords,offset)
      }
      var processedWords=dataWords["splice"](0,nWordsReady);
      data["sigBytes"]-= nBytesReady
    }
    return  new WordArray["init"](processedWords,nBytesReady)
  }
  ,clone:function()
  {
    var clone=Base["clone"]["call"](this);
    clone["_data"]= this["_data"]["clone"]();return clone
  }
  ,_minBufferSize:0});
  var Hasher=C_lib["Hasher"]= BufferedBlockAlgorithm["extend"]({cfg:Base["extend"](),init:function(cfg)
  {
    this["cfg"]= this["cfg"]["extend"](cfg);this["reset"]()
  }
  ,reset:function()
  {
    BufferedBlockAlgorithm["reset"]["call"](this);this._doReset()
  }
  ,update:function(messageUpdate)
  {
    this._append(messageUpdate);this._process();return this
  }
  ,finalize:function(messageUpdate)
  {
    if(messageUpdate)
    {
      this._append(messageUpdate)
    }
    var hash=this._doFinalize();
    return hash
  }
  ,blockSize:512/ 32,_createHelper:function(hasher)
  {
    return function(message,cfg)
    {
      return  new hasher["init"](cfg)["finalize"](message)
    }
  }
  ,_createHmacHelper:function(hasher)
  {
    return function(message,key)
    {
      return  new C_algo["HMAC"]["init"](hasher,key)["finalize"](message)
    }
  }
  });
  var C_algo=C["algo"]= {};
  return C
}
(Math));
(function()
{
  var C=CryptoJS;
  var C_lib=C["lib"];
  var WordArray=C_lib["WordArray"];
  var C_enc=C["enc"];
  var Base64=C_enc["Base64"]= {stringify:function(wordArray)
  {
    var words=wordArray["words"];
    var sigBytes=wordArray["sigBytes"];
    var map=this["_map"];
    wordArray["clamp"]();var base64Chars=[];
    for(var i=0;i< sigBytes;i+= 3)
    {
      var byte1=(words[i>>> 2]>>> (24- (i% 4)* 8))& 0xff;
      var byte2=(words[(i+ 1)>>> 2]>>> (24- ((i+ 1)% 4)* 8))& 0xff;
      var byte3=(words[(i+ 2)>>> 2]>>> (24- ((i+ 2)% 4)* 8))& 0xff;
      var triplet=(byte1<< 16)| (byte2<< 8)| byte3;
      for(var j=0;(j< 4)&& (i+ j* 0.75< sigBytes);j++)
      {
        base64Chars["push"](map["charAt"]((triplet>>> (6* (3- j)))& 0x3f))
      }
    }
    var paddingChar=map["charAt"](64);
    if(paddingChar)
    {
      while(base64Chars["length"]% 4)
      {
        base64Chars["push"](paddingChar)
      }
    }
    return base64Chars["join"]('')
  }
  ,parse:function(base64Str)
  {
    var base64StrLength=base64Str["length"];
    var map=this["_map"];
    var paddingChar=map["charAt"](64);
    if(paddingChar)
    {
      var paddingIndex=base64Str["indexOf"](paddingChar);
      if(paddingIndex!=  -1)
      {
        base64StrLength= paddingIndex
      }
    }
    var words=[];
    var nBytes=0;
    for(var i=0;i< base64StrLength;i++)
    {
      if(i% 4)
      {
        var bits1=map["indexOf"](base64Str["charAt"](i- 1))<< ((i% 4)* 2);
        var bits2=map["indexOf"](base64Str["charAt"](i))>>> (6- (i% 4)* 2);
        words[nBytes>>> 2]|= (bits1| bits2)<< (24- (nBytes% 4)* 8);nBytes++
      }
    }
    return WordArray["create"](words,nBytes)
  }
  ,_map:'-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789='}
}
());(function()
{
  var C=CryptoJS;
  var C_lib=C["lib"];
  var WordArray=C_lib["WordArray"];
  var Hasher=C_lib["Hasher"];
  var C_algo=C["algo"];
  var W=[];
  var SHA1=C_algo["SHA1"]= Hasher["extend"]({_doReset:function()
  {
    this["_hash"]=  new WordArray["init"]([0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0])
  }
  ,_doProcessBlock:function(M,offset)
  {
    var H=this["_hash"]["words"];
    var a=H[0];
    var b=H[1];
    var c=H[2];
    var d=H[3];
    var e=H[4];
    for(var i=0;i< 80;i++)
    {
      if(i< 16)
      {
        W[i]= M[offset+ i]| 0
      }
      else 
      {
        var n=W[i- 3]^ W[i- 8]^ W[i- 14]^ W[i- 16];
        W[i]= (n<< 1)| (n>>> 31)
      }
      var t=((a<< 5)| (a>>> 27))+ e+ W[i];
      if(i< 20)
      {
        t+= ((b& c)| (~b& d))+ 0x5a827999
      }
      else 
      {
        if(i< 40)
        {
          t+= (b^ c^ d)+ 0x6ed9eba1
        }
        else 
        {
          if(i< 60)
          {
            t+= ((b& c)| (b& d)| (c& d))- 0x70e44324
          }
          else 
          {
            t+= (b^ c^ d)- 0x359d3e2a
          }
        }
      }
      e= d;d= c;c= (b<< 30)| (b>>> 2);b= a;a= t
    }
    H[0]= (H[0]+ a)| 0;H[1]= (H[1]+ b)| 0;H[2]= (H[2]+ c)| 0;H[3]= (H[3]+ d)| 0;H[4]= (H[4]+ e)| 0
  }
  ,_doFinalize:function()
  {
    var data=this["_data"];
    var dataWords=data["words"];
    var nBitsTotal=this["_nDataBytes"]* 8;
    var nBitsLeft=data["sigBytes"]* 8;
    dataWords[nBitsLeft>>> 5]|= 0x80<< (24- nBitsLeft% 32);dataWords[(((nBitsLeft+ 64)>>> 9)<< 4)+ 14]= Math["floor"](nBitsTotal/ 0x100000000);dataWords[(((nBitsLeft+ 64)>>> 9)<< 4)+ 15]= nBitsTotal;data["sigBytes"]= dataWords["length"]* 4;this._process();return this["_hash"]
  }
  ,clone:function()
  {
    var clone=Hasher["clone"]["call"](this);
    clone["_hash"]= this["_hash"]["clone"]();return clone
  }
  });
  C["SHA1"]= Hasher._createHelper(SHA1);C["HmacSHA1"]= Hasher._createHmacHelper(SHA1)
}
());(function()
{
  var C=CryptoJS;
  var C_lib=C["lib"];
  var Base=C_lib["Base"];
  var C_enc=C["enc"];
  var Utf8=C_enc["Utf8"];
  var C_algo=C["algo"];
  var HMAC=C_algo["HMAC"]= Base["extend"]({init:function(hasher,key)
  {
    hasher= this["_hasher"]=  new hasher["init"]();if( typeof key== 'string')
    {
      key= Utf8["parse"](key)
    }
    var hasherBlockSize=hasher["blockSize"];
    var hasherBlockSizeBytes=hasherBlockSize* 4;
    if(key["sigBytes"]> hasherBlockSizeBytes)
    {
      key= hasher["finalize"](key)
    }
    key["clamp"]();var oKey=this["_oKey"]= key["clone"]();
    var iKey=this["_iKey"]= key["clone"]();
    var oKeyWords=oKey["words"];
    var iKeyWords=iKey["words"];
    for(var i=0;i< hasherBlockSize;i++)
    {
      oKeyWords[i]^= 0x5c5c5c5c;iKeyWords[i]^= 0x36363636
    }
    oKey["sigBytes"]= iKey["sigBytes"]= hasherBlockSizeBytes;this["reset"]()
  }
  ,reset:function()
  {
    var hasher=this["_hasher"];
    hasher["reset"]();hasher["update"](this._iKey)
  }
  ,update:function(messageUpdate)
  {
    this["_hasher"]["update"](messageUpdate);return this
  }
  ,finalize:function(messageUpdate)
  {
    var hasher=this["_hasher"];
    var innerHash=hasher["finalize"](messageUpdate);
    hasher["reset"]();var hmac=hasher["finalize"](this["_oKey"]["clone"]()["concat"](innerHash));
    return hmac
  }
  })
}
());(function()
{
  var C=CryptoJS;
  var C_lib=C["lib"];
  var Base=C_lib["Base"];
  var WordArray=C_lib["WordArray"];
  var C_algo=C["algo"];
  var SHA1=C_algo["SHA1"];
  var HMAC=C_algo["HMAC"];
  var PBKDF2=C_algo["PBKDF2"]= Base["extend"]({cfg:Base["extend"]({keySize:128/ 32,hasher:SHA1,iterations:1}),init:function(cfg)
  {
    this["cfg"]= this["cfg"]["extend"](cfg)
  }
  ,compute:function(password,salt)
  {
    var cfg=this["cfg"];
    var hmac=HMAC["create"](cfg["hasher"],password);
    var derivedKey=WordArray["create"]();
    var blockIndex=WordArray["create"]([0x00000001]);
    var derivedKeyWords=derivedKey["words"];
    var blockIndexWords=blockIndex["words"];
    var keySize=cfg["keySize"];
    var iterations=cfg["iterations"];
    while(derivedKeyWords["length"]< keySize)
    {
      var block=hmac["update"](salt)["finalize"](blockIndex);
      hmac["reset"]();var blockWords=block["words"];
      var blockWordsLength=blockWords["length"];
      var intermediate=block;
      for(var i=1;i< iterations;i++)
      {
        intermediate= hmac["finalize"](intermediate);hmac["reset"]();var intermediateWords=intermediate["words"];
        for(var j=0;j< blockWordsLength;j++)
        {
          blockWords[j]^= intermediateWords[j]
        }
      }
      derivedKey["concat"](block);blockIndexWords[0]++
    }
    derivedKey["sigBytes"]= keySize* 4;return derivedKey
  }
  });
  C["PBKDF2"]= function(password,salt,cfg)
  {
    return PBKDF2["create"](cfg)["compute"](password,salt)
  }
}
());CryptoJS["lib"]["Cipher"]|| (function(undefined)
{
  var C=CryptoJS;
  var C_lib=C["lib"];
  var Base=C_lib["Base"];
  var WordArray=C_lib["WordArray"];
  var BufferedBlockAlgorithm=C_lib["BufferedBlockAlgorithm"];
  var C_enc=C["enc"];
  var Utf8=C_enc["Utf8"];
  var Base64=C_enc["Base64"];
  var C_algo=C["algo"];
  var EvpKDF=C_algo["EvpKDF"];
  var Cipher=C_lib["Cipher"]= BufferedBlockAlgorithm["extend"]({cfg:Base["extend"](),createEncryptor:function(key,cfg)
  {
    return this["create"](this._ENC_XFORM_MODE,key,cfg)
  }
  ,createDecryptor:function(key,cfg)
  {
    return this["create"](this._DEC_XFORM_MODE,key,cfg)
  }
  ,init:function(xformMode,key,cfg)
  {
    this["cfg"]= this["cfg"]["extend"](cfg);this["_xformMode"]= xformMode;this["_key"]= key;this["reset"]()
  }
  ,reset:function()
  {
    BufferedBlockAlgorithm["reset"]["call"](this);this._doReset()
  }
  ,process:function(dataUpdate)
  {
    this._append(dataUpdate);return this._process()
  }
  ,finalize:function(dataUpdate)
  {
    if(dataUpdate)
    {
      this._append(dataUpdate)
    }
    var finalProcessedData=this._doFinalize();
    return finalProcessedData
  }
  ,keySize:128/ 32,ivSize:128/ 32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:(function()
  {
    function selectCipherStrategy(key)
    {
      if( typeof key== 'string')
      {
        return PasswordBasedCipher
      }
      else 
      {
        return SerializableCipher
      }
    }
    return function(cipher)
    {
      return {encrypt:function(message,key,cfg)
      {
        return selectCipherStrategy(key)["encrypt"](cipher,message,key,cfg)
      }
      ,decrypt:function(ciphertext,key,cfg)
      {
        return selectCipherStrategy(key)["decrypt"](cipher,ciphertext,key,cfg)
      }
      }
    }
  }
  ())});
  var StreamCipher=C_lib["StreamCipher"]= Cipher["extend"]({_doFinalize:function()
  {
    var finalProcessedBlocks=this._process(!!'flush');
    return finalProcessedBlocks
  }
  ,blockSize:1});
  var C_mode=C["mode"]= {};
  var BlockCipherMode=C_lib["BlockCipherMode"]= Base["extend"]({createEncryptor:function(cipher,iv)
  {
    return this["Encryptor"]["create"](cipher,iv)
  }
  ,createDecryptor:function(cipher,iv)
  {
    return this["Decryptor"]["create"](cipher,iv)
  }
  ,init:function(cipher,iv)
  {
    this["_cipher"]= cipher;this["_iv"]= iv
  }
  });
  var CBC=C_mode["CBC"]= (function()
  {
    var CBC=BlockCipherMode["extend"]();
    CBC["Encryptor"]= CBC["extend"]({processBlock:function(words,offset)
    {
      var cipher=this["_cipher"];
      var blockSize=cipher["blockSize"];
      xorBlock["call"](this,words,offset,blockSize);cipher["encryptBlock"](words,offset);this["_prevBlock"]= words["slice"](offset,offset+ blockSize)
    }
    });CBC["Decryptor"]= CBC["extend"]({processBlock:function(words,offset)
    {
      var cipher=this["_cipher"];
      var blockSize=cipher["blockSize"];
      var thisBlock=words["slice"](offset,offset+ blockSize);
      cipher["decryptBlock"](words,offset);xorBlock["call"](this,words,offset,blockSize);this["_prevBlock"]= thisBlock
    }
    });function xorBlock(words,offset,blockSize)
    {
      var iv=this["_iv"];
      if(iv)
      {
        var block=iv;
        this["_iv"]= undefined
      }
      else 
      {
        var block=this["_prevBlock"]
      }
      for(var i=0;i< blockSize;i++)
      {
        words[offset+ i]^= block[i]
      }
    }
    return CBC
  }
  ());
  var C_pad=C["pad"]= {};
  var Pkcs7=C_pad["Pkcs7"]= {pad:function(data,blockSize)
  {
    var blockSizeBytes=blockSize* 4;
    var nPaddingBytes=blockSizeBytes- data["sigBytes"]% blockSizeBytes;
    var paddingWord=(nPaddingBytes<< 24)| (nPaddingBytes<< 16)| (nPaddingBytes<< 8)| nPaddingBytes;
    var paddingWords=[];
    for(var i=0;i< nPaddingBytes;i+= 4)
    {
      paddingWords["push"](paddingWord)
    }
    var padding=WordArray["create"](paddingWords,nPaddingBytes);
    data["concat"](padding)
  }
  ,unpad:function(data)
  {
    var nPaddingBytes=data["words"][(data["sigBytes"]- 1)>>> 2]& 0xff;
    data["sigBytes"]-= nPaddingBytes
  }
  };
  var BlockCipher=C_lib["BlockCipher"]= Cipher["extend"]({cfg:Cipher["cfg"]["extend"]({mode:CBC,padding:Pkcs7}),reset:function()
  {
    Cipher["reset"]["call"](this);var cfg=this["cfg"];
    var iv=cfg["iv"];
    var mode=cfg["mode"];
    if(this["_xformMode"]== this["_ENC_XFORM_MODE"])
    {
      var modeCreator=mode["createEncryptor"]
    }
    else 
    {
      var modeCreator=mode["createDecryptor"];
      this["_minBufferSize"]= 1
    }
    this["_mode"]= modeCreator["call"](mode,this,iv&& iv["words"])
  }
  ,_doProcessBlock:function(words,offset)
  {
    this["_mode"]["processBlock"](words,offset)
  }
  ,_doFinalize:function()
  {
    var padding=this["cfg"]["padding"];
    if(this["_xformMode"]== this["_ENC_XFORM_MODE"])
    {
      padding["pad"](this._data,this["blockSize"]);var finalProcessedBlocks=this._process(!!'flush')
    }
    else 
    {
      var finalProcessedBlocks=this._process(!!'flush');
      padding["unpad"](finalProcessedBlocks)
    }
    return finalProcessedBlocks
  }
  ,blockSize:128/ 32});
  var CipherParams=C_lib["CipherParams"]= Base["extend"]({init:function(cipherParams)
  {
    this["mixIn"](cipherParams)
  }
  ,toString:function(formatter)
  {
    return (formatter|| this["formatter"])["stringify"](this)
  }
  });
  var C_format=C["format"]= {};
  var OpenSSLFormatter=C_format["OpenSSL"]= {stringify:function(cipherParams)
  {
    var ciphertext=cipherParams["ciphertext"];
    var salt=cipherParams["salt"];
    if(salt)
    {
      var wordArray=WordArray["create"]([0x53616c74,0x65645f5f])["concat"](salt)["concat"](ciphertext)
    }
    else 
    {
      var wordArray=ciphertext
    }
    return wordArray.toString(Base64)
  }
  ,parse:function(openSSLStr)
  {
    var ciphertext=Base64["parse"](openSSLStr);
    var ciphertextWords=ciphertext["words"];
    if(ciphertextWords[0]== 0x53616c74&& ciphertextWords[1]== 0x65645f5f)
    {
      var salt=WordArray["create"](ciphertextWords["slice"](2,4));
      ciphertextWords["splice"](0,4);ciphertext["sigBytes"]-= 16
    }
    return CipherParams["create"]({ciphertext:ciphertext,salt:salt})
  }
  };
  var SerializableCipher=C_lib["SerializableCipher"]= Base["extend"]({cfg:Base["extend"]({format:OpenSSLFormatter}),encrypt:function(cipher,message,key,cfg)
  {
    cfg= this["cfg"]["extend"](cfg);var encryptor=cipher["createEncryptor"](key,cfg);
    var ciphertext=encryptor["finalize"](message);
    var cipherCfg=encryptor["cfg"];
    return CipherParams["create"]({ciphertext:ciphertext,key:key,iv:cipherCfg["iv"],algorithm:cipher,mode:cipherCfg["mode"],padding:cipherCfg["padding"],blockSize:cipher["blockSize"],formatter:cfg["format"]})
  }
  ,decrypt:function(cipher,ciphertext,key,cfg)
  {
    cfg= this["cfg"]["extend"](cfg);ciphertext= this._parse(ciphertext,cfg["format"]);var plaintext=cipher["createDecryptor"](key,cfg)["finalize"](ciphertext["ciphertext"]);
    return plaintext
  }
  ,_parse:function(ciphertext,format)
  {
    if( typeof ciphertext== 'string')
    {
      return format["parse"](ciphertext,this)
    }
    else 
    {
      return ciphertext
    }
  }
  });
  var C_kdf=C["kdf"]= {};
  var OpenSSLKdf=C_kdf["OpenSSL"]= {execute:function(password,keySize,ivSize,salt)
  {
    if(!salt)
    {
      salt= WordArray["random"](64/ 8)
    }
    var key=EvpKDF["create"]({keySize:keySize+ ivSize})["compute"](password,salt);
    var iv=WordArray["create"](key["words"]["slice"](keySize),ivSize* 4);
    key["sigBytes"]= keySize* 4;return CipherParams["create"]({key:key,iv:iv,salt:salt})
  }
  };
  var PasswordBasedCipher=C_lib["PasswordBasedCipher"]= SerializableCipher["extend"]({cfg:SerializableCipher["cfg"]["extend"]({kdf:OpenSSLKdf}),encrypt:function(cipher,message,password,cfg)
  {
    cfg= this["cfg"]["extend"](cfg);var derivedParams=cfg["kdf"]["execute"](password,cipher["keySize"],cipher["ivSize"]);
    cfg["iv"]= derivedParams["iv"];var ciphertext=SerializableCipher["encrypt"]["call"](this,cipher,message,derivedParams["key"],cfg);
    ciphertext["mixIn"](derivedParams);return ciphertext
  }
  ,decrypt:function(cipher,ciphertext,password,cfg)
  {
    cfg= this["cfg"]["extend"](cfg);ciphertext= this._parse(ciphertext,cfg["format"]);var derivedParams=cfg["kdf"]["execute"](password,cipher["keySize"],cipher["ivSize"],ciphertext["salt"]);
    cfg["iv"]= derivedParams["iv"];var plaintext=SerializableCipher["decrypt"]["call"](this,cipher,ciphertext,derivedParams["key"],cfg);
    return plaintext
  }
  })
}
());(function()
{
  var C=CryptoJS;
  var C_lib=C["lib"];
  var BlockCipher=C_lib["BlockCipher"];
  var C_algo=C["algo"];
  var SBOX=[];
  var INV_SBOX=[];
  var SUB_MIX_0=[];
  var SUB_MIX_1=[];
  var SUB_MIX_2=[];
  var SUB_MIX_3=[];
  var INV_SUB_MIX_0=[];
  var INV_SUB_MIX_1=[];
  var INV_SUB_MIX_2=[];
  var INV_SUB_MIX_3=[];
  (function()
  {
    var d=[];
    for(var i=0;i< 256;i++)
    {
      if(i< 128)
      {
        d[i]= i<< 1
      }
      else 
      {
        d[i]= (i<< 1)^ 0x11b
      }
    }
    var x=0;
    var xi=0;
    for(var i=0;i< 256;i++)
    {
      var sx=xi^ (xi<< 1)^ (xi<< 2)^ (xi<< 3)^ (xi<< 4);
      sx= (sx>>> 8)^ (sx& 0xff)^ 0x63;SBOX[x]= sx;INV_SBOX[sx]= x;var x2=d[x];
      var x4=d[x2];
      var x8=d[x4];
      var t=(d[sx]* 0x101)^ (sx* 0x1010100);
      SUB_MIX_0[x]= (t<< 24)| (t>>> 8);SUB_MIX_1[x]= (t<< 16)| (t>>> 16);SUB_MIX_2[x]= (t<< 8)| (t>>> 24);SUB_MIX_3[x]= t;var t=(x8* 0x1010101)^ (x4* 0x10001)^ (x2* 0x101)^ (x* 0x1010100);
      INV_SUB_MIX_0[sx]= (t<< 24)| (t>>> 8);INV_SUB_MIX_1[sx]= (t<< 16)| (t>>> 16);INV_SUB_MIX_2[sx]= (t<< 8)| (t>>> 24);INV_SUB_MIX_3[sx]= t;if(!x)
      {
        x= xi= 1
      }
      else 
      {
        x= x2^ d[d[d[x8^ x2]]];xi^= d[d[xi]]
      }
    }
  }
  ());var RCON=[0x00,0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x1b,0x36];
  var AES=C_algo["AES"]= BlockCipher["extend"]({_doReset:function()
  {
    var key=this["_key"];
    var keyWords=key["words"];
    var keySize=key["sigBytes"]/ 4;
    var nRounds=this["_nRounds"]= keySize+ 6;
    var ksRows=(nRounds+ 1)* 4;
    var keySchedule=this["_keySchedule"]= [];
    for(var ksRow=0;ksRow< ksRows;ksRow++)
    {
      if(ksRow< keySize)
      {
        keySchedule[ksRow]= keyWords[ksRow]
      }
      else 
      {
        var t=keySchedule[ksRow- 1];
        if(!(ksRow% keySize))
        {
          t= (t<< 8)| (t>>> 24);t= (SBOX[t>>> 24]<< 24)| (SBOX[(t>>> 16)& 0xff]<< 16)| (SBOX[(t>>> 8)& 0xff]<< 8)| SBOX[t& 0xff];t^= RCON[(ksRow/ keySize)| 0]<< 24
        }
        else 
        {
          if(keySize> 6&& ksRow% keySize== 4)
          {
            t= (SBOX[t>>> 24]<< 24)| (SBOX[(t>>> 16)& 0xff]<< 16)| (SBOX[(t>>> 8)& 0xff]<< 8)| SBOX[t& 0xff]
          }
        }
        keySchedule[ksRow]= keySchedule[ksRow- keySize]^ t
      }
    }
    var invKeySchedule=this["_invKeySchedule"]= [];
    for(var invKsRow=0;invKsRow< ksRows;invKsRow++)
    {
      var ksRow=ksRows- invKsRow;
      if(invKsRow% 4)
      {
        var t=keySchedule[ksRow]
      }
      else 
      {
        var t=keySchedule[ksRow- 4]
      }
      if(invKsRow< 4|| ksRow<= 4)
      {
        invKeySchedule[invKsRow]= t
      }
      else 
      {
        invKeySchedule[invKsRow]= INV_SUB_MIX_0[SBOX[t>>> 24]]^ INV_SUB_MIX_1[SBOX[(t>>> 16)& 0xff]]^ INV_SUB_MIX_2[SBOX[(t>>> 8)& 0xff]]^ INV_SUB_MIX_3[SBOX[t& 0xff]]
      }
    }
  }
  ,encryptBlock:function(M,offset)
  {
    this._doCryptBlock(M,offset,this._keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX)
  }
  ,decryptBlock:function(M,offset)
  {
    var t=M[offset+ 1];
    M[offset+ 1]= M[offset+ 3];M[offset+ 3]= t;this._doCryptBlock(M,offset,this._invKeySchedule,INV_SUB_MIX_0,INV_SUB_MIX_1,INV_SUB_MIX_2,INV_SUB_MIX_3,INV_SBOX);var t=M[offset+ 1];
    M[offset+ 1]= M[offset+ 3];M[offset+ 3]= t
  }
  ,_doCryptBlock:function(M,offset,keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX)
  {
    var nRounds=this["_nRounds"];
    var s0=M[offset]^ keySchedule[0];
    var s1=M[offset+ 1]^ keySchedule[1];
    var s2=M[offset+ 2]^ keySchedule[2];
    var s3=M[offset+ 3]^ keySchedule[3];
    var ksRow=4;
    for(var round=1;round< nRounds;round++)
    {
      var t0=SUB_MIX_0[s0>>> 24]^ SUB_MIX_1[(s1>>> 16)& 0xff]^ SUB_MIX_2[(s2>>> 8)& 0xff]^ SUB_MIX_3[s3& 0xff]^ keySchedule[ksRow++];
      var t1=SUB_MIX_0[s1>>> 24]^ SUB_MIX_1[(s2>>> 16)& 0xff]^ SUB_MIX_2[(s3>>> 8)& 0xff]^ SUB_MIX_3[s0& 0xff]^ keySchedule[ksRow++];
      var t2=SUB_MIX_0[s2>>> 24]^ SUB_MIX_1[(s3>>> 16)& 0xff]^ SUB_MIX_2[(s0>>> 8)& 0xff]^ SUB_MIX_3[s1& 0xff]^ keySchedule[ksRow++];
      var t3=SUB_MIX_0[s3>>> 24]^ SUB_MIX_1[(s0>>> 16)& 0xff]^ SUB_MIX_2[(s1>>> 8)& 0xff]^ SUB_MIX_3[s2& 0xff]^ keySchedule[ksRow++];
      s0= t0;s1= t1;s2= t2;s3= t3
    }
    var t0=((SBOX[s0>>> 24]<< 24)| (SBOX[(s1>>> 16)& 0xff]<< 16)| (SBOX[(s2>>> 8)& 0xff]<< 8)| SBOX[s3& 0xff])^ keySchedule[ksRow++];
    var t1=((SBOX[s1>>> 24]<< 24)| (SBOX[(s2>>> 16)& 0xff]<< 16)| (SBOX[(s3>>> 8)& 0xff]<< 8)| SBOX[s0& 0xff])^ keySchedule[ksRow++];
    var t2=((SBOX[s2>>> 24]<< 24)| (SBOX[(s3>>> 16)& 0xff]<< 16)| (SBOX[(s0>>> 8)& 0xff]<< 8)| SBOX[s1& 0xff])^ keySchedule[ksRow++];
    var t3=((SBOX[s3>>> 24]<< 24)| (SBOX[(s0>>> 16)& 0xff]<< 16)| (SBOX[(s1>>> 8)& 0xff]<< 8)| SBOX[s2& 0xff])^ keySchedule[ksRow++];
    M[offset]= t0;M[offset+ 1]= t1;M[offset+ 2]= t2;M[offset+ 3]= t3
  }
  ,keySize:256/ 32});
  C["AES"]= BlockCipher._createHelper(AES)
}
());CryptoJS["mode"]["OFB"]= (function()
{
  var OFB=CryptoJS["lib"]["BlockCipherMode"]["extend"]();
  var Encryptor=OFB["Encryptor"]= OFB["extend"]({processBlock:function(words,offset)
  {
    var cipher=this["_cipher"];
    var blockSize=cipher["blockSize"];
    var iv=this["_iv"];
    var keystream=this["_keystream"];
    if(iv)
    {
      keystream= this["_keystream"]= iv["slice"](0);this["_iv"]= undefined
    }
    cipher["encryptBlock"](keystream,0);for(var i=0;i< blockSize;i++)
    {
      words[offset+ i]^= keystream[i]
    }
  }
  });
  OFB["Decryptor"]= Encryptor;return OFB
}
());var AesUtil=function(keySize,iterationCount)
{
  this["keySize"]= keySize/ 32;this["iterationCount"]= iterationCount
}
;
AesUtil["prototype"]["generateKey"]= function(salt,passPhrase)
{
  var key=CryptoJS.PBKDF2(passPhrase,CryptoJS["enc"]["Hex"]["parse"](salt),{keySize:this["keySize"],iterations:this["iterationCount"]});
  return key
}
;AesUtil["prototype"]["encrypt"]= function(salt,iv,passPhrase,plainText)
{
  var key=this["generateKey"](salt,passPhrase);
  var encrypted=CryptoJS["AES"]["encrypt"](plainText,key,{iv:CryptoJS["enc"]["Hex"]["parse"](iv)});
  return encrypted["ciphertext"].toString(CryptoJS["enc"].Base64)
}
;AesUtil["prototype"]["decrypt"]= function(salt,iv,passPhrase,cipherText)
{
  var key=this["generateKey"](salt,passPhrase);
  var cipherParams=CryptoJS["lib"]["CipherParams"]["create"]({ciphertext:CryptoJS["enc"]["Base64"]["parse"](cipherText)});
  var decrypted=CryptoJS["AES"]["decrypt"](cipherParams,key,{iv:CryptoJS["enc"]["Hex"]["parse"](iv)});
  return decrypted.toString(CryptoJS["enc"].Utf8)
}
