(function() {
    var libs, upgrade, UpgradeMainController;
    UpgradeMainController = function($scope, $rootScope, $modal, HOW_TO_INSTALL_URL, UPGRADE_URL, TRIAL_SERVER) {


            var server = TRIAL_SERVER[Math.floor((Math.random() * TRIAL_SERVER.length))];

            $scope.howToInstallURL = server + "i";
            $scope.upgradeURL = UPGRADE_URL;

            $scope.showDownloadExtension = function() {
                $rootScope.downloadExtensionModal = $modal({
                    template: '/partials/inv/download_extension.html',
                    show: true,
                    backdrop: 'false'
                });
            };
            $scope.showOpenChromeExtensionsTab = function() {
                $rootScope.openChromeExtensionsTabModal = $modal({
                    template: '/partials/inv/open_chrome_extensions_tab.html',
                    show: true,
                    backdrop: 'false'
                });
            };
            $scope.showDragInstallMaikr = function() {
                $rootScope.dragInstallMaikr = $modal({
                    template: '/partials/inv/drag_install_maikr.html',
                    show: true,
                    backdrop: 'false'
                });
            };
            $scope.showFillinInvitationCodeWhenRegister = function() {
                $rootScope.fillinInvitationCodeWhenRegister = $modal({
                    template: '/partials/inv/fillin_invitation_code_when_signup.html',
                    show: true,
                    backdrop: 'false'
                });
            };
    };
    libs = ["underscore", "angular", "lang", "upgrade/module", "services/storage", 'angular_ui_keypress', 'angular_translate', 'angular_ui_utils', 'angular_strap_tpl', 'ngSanitize', 'angular_ui_router', 'upgrade/DownloadExtensionModalController', 'upgrade/DragInstallMaikrModalController', 'upgrade/FillinInvitationCodeModalController', 'upgrade/OpenChromeExtensionsTabModalController'], 
    upgrade = function(_, angular, lang) {
        var upgradeModule = angular.module("upgrade", ['pascalprecht.translate', 'ui.keypress', 'ngRoute','mgcrea.ngStrap', 'app', 'ui.utils', 'ngSanitize']);
        upgradeModule.config(function($translateProvider) {
            return lang.config($translateProvider)
        })
        upgradeModule.controller({
            "UpgradeMainController": UpgradeMainController,
        });
        upgradeModule.run(function($location, $rootScope, $timeout, $translate, storage, LOCALES) {
            $translate.use(storage.get("currentLocale", LOCALES.preferredLocale));
            return $timeout(function() {
                //return tele.run("track.pv", "/chrome-extension/upgrade")
            }, 500)
        }), 
        angular.element(document).ready(function() {
            return angular.bootstrap(document, ["upgrade"])
        })
    }, 
    require(["../config"], function() {
        return requireWithRetry(libs, upgrade)
    });
}).call(this);