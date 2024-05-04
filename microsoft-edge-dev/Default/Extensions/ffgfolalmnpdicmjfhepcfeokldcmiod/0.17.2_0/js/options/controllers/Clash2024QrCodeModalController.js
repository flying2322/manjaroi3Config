(function() {
    var libs, Clash2024QrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    Clash2024QrCodeModalControllerOps = function(angular, jquery) {
        var Clash2024QrCodeModalController, i;
        return Clash2024QrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.clash2024_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.clash2024QrcodeModal.hide();
				return $rootScope.clash2024QrcodeModal.destroy();
			};
        }, angular.module("options").controller("Clash2024QrCodeModalController", Clash2024QrCodeModalController)
    }, define(libs, Clash2024QrCodeModalControllerOps)
}).call(this);