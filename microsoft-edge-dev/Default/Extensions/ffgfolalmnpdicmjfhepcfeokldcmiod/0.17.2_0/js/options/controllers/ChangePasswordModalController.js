(function() {
    var libs, ChangePasswordModalControllerOps;
    libs = ["angular",  "options/module"], 
    ChangePasswordModalControllerOps = function(angular) {
        var ChangePasswordModalController, i;
        return ChangePasswordModalController = function($scope, $rootScope, $timeout, $translate) {
			$scope.initAlertText = $translate.instant("options.change_password.init_alert");
			$scope.initAlertStyle = 'alert-info';
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;
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
				return $rootScope.passwordModal.destroy()
			}
        }, angular.module("options").controller("ChangePasswordModalController", ChangePasswordModalController)
    }, define(libs, ChangePasswordModalControllerOps)
}).call(this);