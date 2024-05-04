(function() {
    var libs, ops;
    libs = ["angular", "angular_translate", "app"], 
    ops = function(angular) {
        var milliSecondsToHourMinText;
        return milliSecondsToHourMinText = function($translate) {
            return function(to) {
                to = to / 1000;
                var duration, sDay, sHour, sMinute, now, sSecond, i;
                i = function(n, t) {
                    var o, r, a;
                    return null == t && (t = 2), o = t - String(n).length, 0 >= o ? n : (r = function() {
                        var n, t;
                        for (t = [], a = n = 0; o >= 0 ? o > n : n > o; a = o >= 0 ? ++n : --n) ;
                        return t
                    }(), r.concat(n).join(""))
                };
                sMinute = $translate.instant("options.layout.minute"); 
                sHour = $translate.instant("options.layout.hour");
                now = new Date();

                duration = to;
                if(duration <= 10800){
                    return "" + i(parseInt(duration / 60))   + " " + sMinute;
                }else{
                    return "" + i(parseInt(duration / 3600)) + " " + sHour;
                }
            }
        }, 
        angular.module("app").filter("milliSecondsToHourMinText", milliSecondsToHourMinText)
    }, define(libs, ops)
}).call(this);