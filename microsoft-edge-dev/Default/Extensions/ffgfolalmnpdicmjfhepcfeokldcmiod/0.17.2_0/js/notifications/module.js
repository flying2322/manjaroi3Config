
(function() {
    var libs, notifications;
    libs = ["angular", "ngRoute", "ngAnimate", "angular_translate", "angular_strap", "angular_strap_tpl","ngSanitize", "app"], 
    notifications = function(angular) {

    	return angular.module('notifications', ['ngRoute', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.tooltip', 'pascalprecht.translate','app']);
        //return angular.module("options", ["ngRoute", "ui.utils", "ui.router", "ui.keypress", "ngSanitize", "mgcrea.ngStrap", "pascalprecht.translate", "app"])
    }, define(libs, notifications)
}).call(this);