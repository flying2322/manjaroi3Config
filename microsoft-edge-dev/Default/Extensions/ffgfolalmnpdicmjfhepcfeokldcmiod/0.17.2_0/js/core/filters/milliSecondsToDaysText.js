(function() {
    var libs, ops;
    libs = ["angular", "angular_translate", "app"], 
    ops = function(angular) {
        var milliSecondsToDaysText;
        return milliSecondsToDaysText = function($translate) {
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
                sDay = $translate.instant("options.layout.day");
                sHour = $translate.instant("options.layout.hour");
                now = new Date();

                duration = to;
                if(duration % 86400 == 0){
                    return "" + (duration / 86400).toFixed(0)+ " " + sDay;
                }else{
                    return parseInt(((duration))  / 86400) + sDay + " " + parseInt(((duration - 10) % 86400) / 3600) + sHour;
                }
                
            }
        }, 
        angular.module("app").filter("milliSecondsToDaysText", milliSecondsToDaysText)
    }, define(libs, ops)
}).call(this);