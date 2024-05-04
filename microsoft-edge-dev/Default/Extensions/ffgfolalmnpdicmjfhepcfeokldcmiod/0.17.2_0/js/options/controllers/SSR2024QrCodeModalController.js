(function() {
    var libs, SSR2024QrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    SSR2024QrCodeModalControllerOps = function(angular, jquery) {
        var SSR2024QrCodeModalController, i;
        return SSR2024QrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.ssr2024_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.ssr2024QrcodeModal.hide();
				return $rootScope.ssr2024QrcodeModal.destroy();
			};
        }, angular.module("options").controller("SSR2024QrCodeModalController", SSR2024QrCodeModalController)
    }, define(libs, SSR2024QrCodeModalControllerOps)
}).call(this);