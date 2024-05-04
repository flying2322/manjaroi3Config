(function() {
    var libs, SS2024QrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    SS2024QrCodeModalControllerOps = function(angular, jquery) {
        var SS2024QrCodeModalController, i;
        return SS2024QrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.ss2024_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.ss2024QrcodeModal.hide();
				return $rootScope.ss2024QrcodeModal.destroy();
			};
        }, angular.module("options").controller("SS2024QrCodeModalController", SS2024QrCodeModalController)
    }, define(libs, SS2024QrCodeModalControllerOps)
}).call(this);