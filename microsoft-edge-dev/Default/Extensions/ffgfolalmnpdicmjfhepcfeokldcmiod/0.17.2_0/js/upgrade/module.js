(function() {
    var libs, upgradeOps;
    libs = ["angular", "ngRoute", "angular_ui_utils", "angular_ui_router", "angular_ui_keypress", "ngSanitize", "angular_strap_tpl", "app"], 
    upgradeOps = function(angular) {
        var upgrade;
        
        return upgrade = angular.module("upgrade", ["ngRoute", "ui.utils", "ui.router", "ui.keypress", "ngSanitize", "mgcrea.ngStrap", "pascalprecht.translate", "app"])
    }, define(libs, upgradeOps)
}).call(this);