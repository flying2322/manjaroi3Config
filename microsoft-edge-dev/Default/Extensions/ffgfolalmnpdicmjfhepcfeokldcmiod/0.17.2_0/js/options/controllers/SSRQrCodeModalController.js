(function() {
    var libs, SSRQrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    SSRQrCodeModalControllerOps = function(angular, jquery) {
        var SSRQrCodeModalController, i;
        return SSRQrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.ssr_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.ssrQrcodeModal.hide();
				return $rootScope.ssrQrcodeModal.destroy();
			};
        }, angular.module("options").controller("SSRQrCodeModalController", SSRQrCodeModalController)
    }, define(libs, SSRQrCodeModalControllerOps)
}).call(this);