(function() {
    var libs, SSQrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    SSQrCodeModalControllerOps = function(angular, jquery) {
        var SSQrCodeModalController, i;
        return SSQrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.ss_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.ssQrcodeModal.hide();
				return $rootScope.ssQrcodeModal.destroy();
			};
        }, angular.module("options").controller("SSQrCodeModalController", SSQrCodeModalController)
    }, define(libs, SSQrCodeModalControllerOps)
}).call(this);