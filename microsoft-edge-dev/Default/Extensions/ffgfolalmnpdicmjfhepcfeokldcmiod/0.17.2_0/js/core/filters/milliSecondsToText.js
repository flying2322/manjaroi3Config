(function() {
    var libs, ops;
    libs = ["angular", "angular_translate", "app"], 
    ops = function(angular) {
        var milliSecondsToText;
        return milliSecondsToText = function($translate) {
            return function(to) {
                to = to / 1000;
                var duration, sDay, sHour, sMinute, now, sSecond, i;
                i = function(n, t) {
                    var o, r, a;
                    return null == t && (t = 2), o = t - String(n).length, 0 >= o ? n : (r = function() {
                        var n, t;
                        for (t = [], a = n = 0; o >= 0 ? o > n : n > o; a = o >= 0 ? ++n : --n) t.push("0");
                        return t
                    }(), r.concat(n).join(""))
                };
                sSecond = $translate.instant("options.layout.second");
                sMinute = $translate.instant("options.layout.minute"); 
                sHour = $translate.instant("options.layout.hour");
                sDay = $translate.instant("options.layout.day");
                now = new Date();

                duration = to;
                if(duration < 0){
                    return "";
                }else if(duration <= 86400){
                    return "" + i(parseInt(duration / 3600)) + " " + sHour;
                }else{
                    return "" + (duration / 86400).toFixed(0)+ " " + sDay;
                }
            }
        }, 
        angular.module("app").filter("milliSecondsToText", milliSecondsToText)
    }, define(libs, ops)
}).call(this);