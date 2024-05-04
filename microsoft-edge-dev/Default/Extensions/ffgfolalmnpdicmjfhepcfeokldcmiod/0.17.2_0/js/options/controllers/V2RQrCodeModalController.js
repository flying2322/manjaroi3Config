(function() {
    var libs, V2RQrCodeModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    V2RQrCodeModalControllerOps = function(angular, jquery) {
        var V2RQrCodeModalController, i;
        return V2RQrCodeModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {

        	$scope.imageUrl = $rootScope.user.v2r_subscription_url_qrcode 

			return $scope.closeModal = function() {
				$rootScope.v2rQrcodeModal.hide();
				return $rootScope.v2rQrcodeModal.destroy();
			};
        }, angular.module("options").controller("V2RQrCodeModalController", V2RQrCodeModalController)
    }, define(libs, V2RQrCodeModalControllerOps)
}).call(this);