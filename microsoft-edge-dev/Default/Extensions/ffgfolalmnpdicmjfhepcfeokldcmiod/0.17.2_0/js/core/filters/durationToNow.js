(function() {
    var libs, ops;
    libs = ["angular", "angular_translate", "app"], 
    ops = function(angular) {
        var durationToNow;
        return durationToNow = function($translate) {
            return function(to) {
                to = to / 1000;
                var duration, sDay, sHour, sMinute, now, sSecond, i, timezoneOffset, utc;
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
                timezoneOffset = now.getTimezoneOffset();
                utc = now.getTime() - (timezoneOffset * 60000);

                duration = parseInt(to - now.getTime() / 1000);
                //duration = parseInt(to);


                if(duration < 0){
                    return "";
                }else if(duration < 60){
                    return "" + duration + sSecond;
                }else if(duration < 3600){
                    return "" + i(parseInt(duration / 60))   + " " + sMinute + " " + i(duration % 60) + " " + sSecond;
                }else if(duration < 86400){
                    return "" + i(parseInt(duration / 3600)) + " " + sHour + " " + i(parseInt(duration % 3600 / 60))+ " " + sMinute;
                }else{
                    //return "" + (duration / 86400).toFixed(0)+ " " + sDay + " " + ((duration % 86400) / 3600).toFixed(0) + " " + sHour;
                    //return (duration / 3600 / 24).toFixed(1) + sDay
                    //return (duration / 3600 / 24).toFixed(0) + sDay +  ((duration % 86400) / 3600).toFixed(0) + sHour + ((duration % 86400 ) / 60 % 60).toFixed(0) + sMinute;
                    return parseInt(((duration))  / 86400) + sDay + " " + parseInt(((duration - 10) % 86400) / 3600) + sHour;
                
                }
                /*
                0 >= duration ? "" : 60 >= duration ? "" + duration + sSecond : 3600 >= duration ? "" + i(parseInt(duration / 60)) + sMinute + i(duration % 60) + sSecond : 
                86400 >= duration ? "" + i(parseInt(duration / 3600)) + sHour + i(parseInt(duration % 3600 / 60)) + sMinute : 
                (duration / 3600 / 24).toFixed(1) + sDay
                */
            }
        }, 
        angular.module("app").filter("durationToNow", durationToNow)
    }, define(libs, ops)
}).call(this);