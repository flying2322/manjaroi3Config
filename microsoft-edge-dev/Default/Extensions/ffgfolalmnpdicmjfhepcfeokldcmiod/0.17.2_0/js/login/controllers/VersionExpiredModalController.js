(function() {
    var libs, VersionExpiredModalControllerOps;
    libs = ["angular",  "login/module", "services/generate", "services/userManager", "services/storage", "services/pageManager", "services/teleScope", "services/track"], 
    VersionExpiredModalControllerOps = function(angular) {
        var VersionExpiredModalController, i;
        return VersionExpiredModalController = function($scope, $rootScope, $http, $timeout, $translate, $log, userManager, pageManager, storage, teleScope, track, generate, SERVER, VER, REST_CONTEXT_PATH, STATIC_SERVER) {

        	$scope.versionExpiredUrl = STATIC_SERVER;

			$scope.alert = function(msg) {

				$scope.alertText = msg;
				$scope.alertStyle = 'alert-danger';
				return $timeout(function() {
					$scope.alertText = $scope.initAlertText;
					return $scope.alertStyle = $scope.initAlertStyle
				},
				2 * 1000)
			};
			return $scope.closeModal = function() {
				return $rootScope.versionExpiredModal.destroy()
			};
        }, angular.module("login").controller("VersionExpiredModalController", ['$scope', '$rootScope', '$http', '$timeout', '$translate', '$log', 'userManager', 'pageManager', 'storage', 'teleScope', 'track', 'generate', 'SERVER', 'VER', 'REST_CONTEXT_PATH', 'STATIC_SERVER', VersionExpiredModalController])
    }, define(libs, VersionExpiredModalControllerOps)
}).call(this);