(function() {
    var libs, ClashQrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    ClashQrCodeModalControllerOps = function(angular, jquery) {
        var ClashQrCodeModalController, i;
        return ClashQrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.clash_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.clashQrcodeModal.hide();
				return $rootScope.clashQrcodeModal.destroy();
			};
        }, angular.module("options").controller("ClashQrCodeModalController", ClashQrCodeModalController)
    }, define(libs, ClashQrCodeModalControllerOps)
}).call(this);