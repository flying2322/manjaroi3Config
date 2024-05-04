(function() {
    var libs, lockModule;
    libs = ["angular", "ngRoute", "angular_ui_keypress", "angular_ui_utils", "angular_strap_tpl", "app", "angular_translate"], 
    lockModule = function(angular) {
        return angular.module("lock", ["ngRoute", "ui.keypress", "mgcrea.ngStrap", "ui.utils", "app", "pascalprecht.translate"])
    }, define(libs, lockModule)
}).call(this);