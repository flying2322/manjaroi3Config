(function() {
    var libs, FrequentDomainAlertModalControllerOps;
    libs = ["angular", "jquery" , "options/module"], 
    FrequentDomainAlertModalControllerOps = function(angular, jquery) {
        var FrequentDomainAlertModalController, i;
        return FrequentDomainAlertModalController = function($scope, $rootScope, $timeout, $translate) {
			//$scope.initAlertText = $translate.instant("options.change_password.init_alert");
			//alert(jquery);
			$scope.notShowAgainChecked = false;
			$scope.initAlertStyle = 'alert-info';
			//$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;
			/*
			$scope.alert = function(msg) {
				$scope.alertText = msg;
				$scope.alertStyle = 'alert-danger';
				return $timeout(function() {
					//$scope.alertText = $scope.initAlertText;
					return $scope.alertStyle = $scope.initAlertStyle
				},
				2 * 1000)
			};
			*/
            $scope.cancel = function() {
                //alert("onOk:"+$scope.notShowAgainChecked);
                $scope.closeModal();
            };
            $scope.toggleNotShowAgain = function() {
                $scope.notShowAgainChecked = !$scope.notShowAgainChecked;
            };
			return $scope.closeModal = function() {
				$rootScope.frequentDomainsModal.hide();
				return $rootScope.frequentDomainsModal.destroy();
			}
        }, angular.module("options").controller("FrequentDomainAlertModalController", FrequentDomainAlertModalController)
    }, define(libs, FrequentDomainAlertModalControllerOps)
}).call(this);