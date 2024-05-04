(function()
{
    var __slice=[]["slice"];
    define(['../app','underscore','./timeUtils','./teleScope','./storage','./generate'],function(app,_)
    {
        var ACK_TIMEOUT,HEARTBEAT_INTERVAL,HEARTBEAT_TIMEOUT,MT_ACK,MT_DISCONNECT,MT_EVENT,MT_HEARTBEAT,WebsocketClient,decodeMessage,encodeMessage,me;
        me= '[WebsocketClient]';ACK_TIMEOUT= 20* 1000;HEARTBEAT_INTERVAL= 20* 1000;HEARTBEAT_TIMEOUT= 60* 1000;MT_DISCONNECT= 0;MT_HEARTBEAT= 2;MT_EVENT= 3;MT_ACK= 4;encodeMessage= (function(_this)
        {
            return function(messageType,ackId,name,data)
            {
                if(ackId== null)
                {
                    ackId= ''
                }
                if(name== null)
                {
                    name= ''
                }
                if(data== null)
                {
                    data= ''
                }
                if(messageType=== 2)
                {
                    return "2"
                }
                else 
                {
                    return JSON["stringify"]([messageType,ackId,name,data])
                }
            }
        }
        )(this);decodeMessage= (function(_this)
        {
            return function(blob)
            {
                var error;
                if(blob=== '2')
                {
                    return [2,'','','']
                }
                try
                {
                    return JSON["parse"](blob)
                }
                catch(_error)
                {
                    error= _error;return [2,'','','']
                }
            }
        }
        )(this);WebsocketClient= function($log,$rootScope,$injector,timeUtils,teleScope,storage,generate,WS_RETRIES,WS_RETRIES_FACTOR)
        {
            var creator;
            creator= function(url)
            {
                var _ack,_ackId,_ackMap,_applyOnCallbacks,_connect,_reconnect,_foreverHeartBeat,_lastBeat,_onMap,_send,_stopHeartBeat,_timerHeartBeat,_timerReconnect,_tryReconnect,_ws;
                _onMap= {connect:[],connecting:[],reconnect:[],reconnecting:[],disconnect:[]};_ackMap= {};_lastBeat= 0;_ackId= 1;_ws= null;$rootScope["ws_retrial"]= 0;teleScope["link"]('ws_retrial');_timerHeartBeat= null;_timerReconnect= null;_applyOnCallbacks= (function(_this)
                {
                    return function(name,data)
                    {
                        var callback,li,_i,_len,_results;
                        li= _onMap[name];if(li&& li["length"]> 0)
                        {
                            _results= [];for(_i= 0,_len= li["length"];_i< _len;_i++)
                            {
                                callback= li[_i];_results["push"](callback(data))
                            }
                            return _results
                        }
                    }
                }
                )(this);this["alive"]= (function(_this)
                {
                    return function()
                    {
                        return _ws&& _ws["readyState"]=== 1
                    }
                }
                )(this);this["connect"]= (function(_this)
                {
                    return function()
                    {
                        if(_ws&& (_ws["readyState"]=== 1|| _ws["readyState"]=== 0))
                        {
                            return
                        }
                        return _connect()
                    }
                }
                )(this);this["_tryReconnect"]= (function(_this)
                {
                    return function()
                    {
                        var delay;
                        $log["info"](me,'_tryReconnect');if(_timerReconnect)
                        {
                            clearTimeout(_timerReconnect);_timerReconnect= null
                        }
                        $rootScope["ws_retrial"]+= 1;delay= Math["min"](500* Math["pow"](2,$rootScope["ws_retrial"]- 1),20000);$log["info"](me,"Reconnect in "+ delay+ " ms ("+ $rootScope["ws_retrial"]+ ")");return _timerReconnect= setTimeout(_reconnect,delay)
                    }
                }
                )(this);_connect= (function(_this)
                {
                    return function()
                    {
                        if(_timerReconnect)
                        {
                            clearTimeout(_timerReconnect);_timerReconnect= null
                        }
                        if(_ws&& (_ws["readyState"]=== 1|| _ws["readyState"]=== 0))
                        {
                            return
                        }
                        if($rootScope["ws_retrial"]> 0)
                        {
                            _applyOnCallbacks('reconnecting',$rootScope["ws_retrial"])
                        }
                        else 
                        {
                            _applyOnCallbacks('connecting')
                        }
                        try
                        {
                            var times=((WS_RETRIES* WS_RETRIES_FACTOR)/ 2);
                            if($rootScope["ws_retrial"]> times&& $rootScope["user"]["profile"]["backup_ws_servers"]&& $rootScope["user"]["profile"]["backup_ws_servers"]["length"]> 0)
                            {
                                var index=generate["randomIntFromInterval"](0,$rootScope["user"]["profile"]["backup_ws_servers"]["length"]- 1);
                                $log["log"](me,"index:"+ $rootScope["user"]["profile"]["backup_ws_servers"][index]);url= $rootScope["user"]["profile"]["backup_ws_servers"][index]
                            }
                            $log["log"](me,"begin to connect "+ url+ " ws_retrial:"+ $rootScope["ws_retrial"]);if($rootScope["ws_retrial"]< 0)
                            {
                                return
                            }
                            _ws=  new WebSocket(url)
                        }
                        catch(err)
                        {
                            $log["info"](me,'This never prints')
                        }
                        if(!_ws)
                        {
                            return
                        }
                        _ws["onerror"]= function(error)
                        {
                            $log["info"](me,error);$log["info"](error)
                        }
                        ;_ws["onopen"]= function()
                        {
                            $log["info"](me,'onopen',url);_lastBeat= timeUtils["milliTime"]();storage["set"]('API_URL',url);_applyOnCallbacks('onopen');if($rootScope["ws_retrial"]> 0)
                            {
                                _applyOnCallbacks('reconnect',$rootScope["ws_retrial"])
                            }
                            else 
                            {
                                _applyOnCallbacks('connect')
                            }
                            $rootScope["ws_retrial"]= 0;return _foreverHeartBeat()
                        }
                        ;_ws["onmessage"]= function(e)
                        {
                            var ackId,callback,callbacks,data,messageType,name,_i,_len,_ref,_results;
                            $log["debug"](me,'>>>',e["data"]);if(e["data"]!== '2')
                            {
                                $log["info"](me,'>>>',e["data"])
                            }
                            _lastBeat= timeUtils["milliTime"]();_ref= decodeMessage(e["data"]),messageType= _ref[0],ackId= _ref[1],name= _ref[2],data= _ref[3];switch(messageType)
                            {
                                case MT_DISCONNECT:return _this["disconnect"]()
                                case MT_HEARTBEAT:_applyOnCallbacks('onHeartbeat');return null
                                case MT_EVENT:_applyOnCallbacks('onHeartbeat');callbacks= _onMap[name];if(callbacks&& callbacks["length"]> 0)
                                {
                                    _results= [];for(_i= 0,_len= callbacks["length"];_i< _len;_i++)
                                    {
                                        callback= callbacks[_i];if( typeof callback=== 'function')
                                        {
                                            if(ackId)
                                            {
                                                _results["push"](_ack(ackId,callback(data)))
                                            }
                                            else 
                                            {
                                                _results["push"](callback(data))
                                            }
                                        }
                                        else 
                                        {
                                            if(ackId)
                                            {
                                                _results["push"](_ack(ackId))
                                            }
                                            else 
                                            {
                                                _results["push"](void(0))
                                            }
                                        }
                                    }
                                    return _results
                                }
                                break
                                case MT_ACK:return  typeof _ackMap[ackId]=== "function"?_ackMap[ackId](data):void(0)
                                default:return $log["error"](me,'Invalid MessageType:',messageType)
                            }
                        }
                        ;return _ws["onclose"]= function()
                        {
                            $log["debug"](me,'onclose',$rootScope["ws_retrial"]);_applyOnCallbacks('onstopped');_stopHeartBeat();if($rootScope["ws_retrial"]>= 0&& $rootScope["ws_retrial"]<= WS_RETRIES* WS_RETRIES_FACTOR)
                            {
                                return _this._tryReconnect()
                            }
                            else 
                            {
                                return _applyOnCallbacks('disconnect')
                            }
                        }
                    }
                }
                )(this);_reconnect= function()
                {
                    if(_ws&& (_ws["readyState"]=== 1|| _ws["readyState"]=== 0))
                    {
                        return
                    }
                    return _connect()
                }
                ;_send= (function(_this)
                {
                    return function(data)
                    {
                        var alive=_this["alive"]();
                        if(alive)
                        {
                            if(data!== '2')
                            {
                                console["log"](me+ ' <<< '+ data)
                            }
                            return _ws["send"](data)
                        }
                        else 
                        {
                            if(data!== '2')
                            {
                                _connect();return $log["debug"](me,'not alive, cannot send',data)
                            }
                        }
                    }
                }
                )(this);_ack= (function(_this)
                {
                    return function(ackId,data)
                    {
                        var message;
                        message= encodeMessage(MT_ACK,ackId,null,data);return _send(message)
                    }
                }
                )(this);_foreverHeartBeat= (function(_this)
                {
                    return function()
                    {
                        return _timerHeartBeat= setInterval(function()
                        {
                            if(_timerHeartBeat)
                            {
                                _send(encodeMessage(MT_HEARTBEAT))
                            }
                            if(timeUtils["milliTime"]()- _lastBeat> HEARTBEAT_TIMEOUT)
                            {
                                return _ws["close"]()
                            }
                        }
                        ,HEARTBEAT_INTERVAL)
                    }
                }
                )(this);_stopHeartBeat= (function(_this)
                {
                    return function()
                    {
                        $log["info"](me,'_stopHeartBeat');if(_timerHeartBeat)
                        {
                            clearInterval(_timerHeartBeat);return _timerHeartBeat= null
                        }
                    }
                }
                )(this);this["disconnect"]= (function(_this)
                {
                    return function()
                    {
                        $rootScope["ws_retrial"]=  -1;if(_ws)
                        {
                            _ws["close"]()
                        }
                    }
                }
                )(this);this["stopReconnect"]= (function(_this)
                {
                    return function()
                    {
                        if(!_timerReconnect)
                        {
                            clearTimeout(_timerReconnect);_timerReconnect= null
                        }
                    }
                }
                )(this);this["resetRetrial"]= (function(_this)
                {
                    return function()
                    {
                        $rootScope["ws_retrial"]=  -1
                    }
                }
                )(this);this["emit"]= (function(_this)
                {
                    return function()
                    {
                        var ackId,callback,data,message,name,rest;
                        name= arguments[0],rest= 2<= arguments["length"]?__slice["call"](arguments,1):[];try
                        {
                            data= '';callback= void(0);if(rest["length"]>= 2)
                            {
                                data= rest[0];callback= rest[1]
                            }
                            else 
                            {
                                if(rest["length"]=== 1)
                                {
                                    if( typeof rest[0]=== 'function')
                                    {
                                        callback= rest[0]
                                    }
                                    else 
                                    {
                                        data= rest[0]
                                    }
                                }
                            }
                            ackId= '';if(callback)
                            {
                                ackId= _ackId;_ackMap[ackId]= callback;_ackId+= 1;setTimeout(function()
                                {
                                    if(_ackMap[ackId])
                                    {
                                        return  delete _ackMap[ackId]
                                    }
                                }
                                ,ACK_TIMEOUT)
                            }
                            message= encodeMessage(MT_EVENT,ackId,name,data);return _send(message)
                        }
                        catch(_error)
                        {
                        }
                    }
                }
                )(this);this["on"]= (function(_this)
                {
                    return function(name,callback)
                    {
                        if(_onMap[name]== null)
                        {
                            _onMap[name]= []
                        }
                        return _onMap[name]["push"](callback)
                    }
                }
                )(this);return this
            }
            ;this["create"]= function(url)
            {
                return  new creator(url)
            }
            ;return this
        }
        ;return app["service"]('WebsocketClient',['$log','$rootScope','$injector','timeUtils','teleScope','storage','generate','WS_RETRIES','WS_RETRIES_FACTOR',WebsocketClient])
    }
    )
}
)["call"](this)