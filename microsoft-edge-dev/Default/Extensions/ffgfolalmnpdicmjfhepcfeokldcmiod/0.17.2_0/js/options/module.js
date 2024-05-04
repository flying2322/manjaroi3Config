
(function() {
    var libs, options;
    libs = ["angular", "ngRoute", "angular_ui_utils", "angular_ui_router", "angular_ui_keypress", "ngSanitize", "angular_strap_tpl", "app"], 
    options = function(angular) {
        return angular.module("options", ["ngRoute", "ui.utils", "ui.router", "ui.keypress", "ngSanitize", "mgcrea.ngStrap", "pascalprecht.translate", "app"])
    }, define(libs, options)
}).call(this);