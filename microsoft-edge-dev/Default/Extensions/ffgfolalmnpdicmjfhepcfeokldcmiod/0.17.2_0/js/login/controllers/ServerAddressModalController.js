(function() {
    var libs, ServerAddressModalControllerOps;
    libs = ["angular",  "login/module"], 
    ServerAddressModalControllerOps = function(angular) {
        var ServerAddressModalController, i;
        return ServerAddressModalController = function($scope, $rootScope, $timeout, $translate, validate, storage) {
			$scope.initAlertText = $translate.instant("login.server_address.init_alert");
			$scope.initAlertStyle = 'alert-info';
			$scope.server_address = $rootScope.server_address;
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;
			$scope.submitServerAddress = function() {
				if($scope.server_address !== "" && !validate.server_addr(document, $scope.server_address)){
					$scope.alert($translate.instant("login.server_address.server_address_format_error"));
					return;
				}

				if($scope.server_address !== ""){
					$scope.server_address = validate.get_server_addr_string(document, $scope.server_address);
					
				}
				
				$rootScope.server_address = $scope.server_address;
				storage.set('server_address', $rootScope.server_address);
				return $timeout(function() {
					$scope.closeModal()
				},
				300)
			};
			$scope.alert = function(msg) {
				$scope.alertText = msg;
				$scope.alertStyle = 'alert-danger';
				return $timeout(function() {
					$scope.alertText = $scope.initAlertText;
					return $scope.alertStyle = $scope.initAlertStyle
				},
				10 * 1000)
			};
			return $scope.closeModal = function() {
				return $rootScope.serverAddressModal.destroy()
			}
        }, angular.module("login").controller("ServerAddressModalController", ['$scope', '$rootScope', '$timeout', '$translate', 'validate', 'storage', ServerAddressModalController])
    }, define(libs, ServerAddressModalControllerOps)
}).call(this);