(function() {
    var libs, NewcomerInfoAlertModalControllerOps;
    libs = ["angular",  "options/module",  "services/storage"], 
    NewcomerInfoAlertModalControllerOps = function(angular) {
        var NewcomerInfoAlertModalController, i;
        return NewcomerInfoAlertModalController = function($scope, $rootScope, $timeout, $translate, $modal, storage, ROLES) {
			$scope.initAlertText = $translate.instant("options.change_password.init_alert");
			$scope.notShowAgainChecked = false;
			$scope.initAlertStyle = 'alert-info';
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;
			$scope.isGuest = function() {
				return $rootScope.user.role === ROLES.GUEST;
			};
			$scope.isUser = function() {
				return $rootScope.user.role === ROLES.USER;
			};
			$scope.isVIP = function() {
				return $rootScope.user.role === ROLES.VIP;
			};
			$scope.openGuide = function() {
				return $rootScope.openGuide();
			};
			$scope.openSafety = function() {

				$rootScope.safetyModal = $modal({
                    
                    templateUrl: '/partials/safety.html',
                    show: true,
                    backdrop: 'false'
                });
                
			};
			$scope.alert = function(msg) {
				$scope.alertText = msg;
				$scope.alertStyle = 'alert-danger';
				return $timeout(function() {
					$scope.alertText = $scope.initAlertText;
					return $scope.alertStyle = $scope.initAlertStyle
				},
				2 * 1000)
			};
            $scope.onSubmit = function() {
                //alert("onOk:"+$scope.notShowAgainChecked);
                $scope.closeModal();
            };
            $scope.toggleNotShowAgain = function() {
                $scope.notShowAgainChecked = !$scope.notShowAgainChecked;
                storage.set("notShowNewcomerInfoAlert", $scope.notShowAgainChecked);
            };
			return $scope.closeModal = function() {
				$rootScope.newcomerInfoModal.hide();
				if($scope.isGuest()){
					
				}else{
					$rootScope.showGuideAutoPlay();
				}
				
				//return $rootScope.newcomerInfoModal.destroy()
			}
        }, angular.module("options").controller("NewcomerInfoAlertModalController", NewcomerInfoAlertModalController)
    }, define(libs, NewcomerInfoAlertModalControllerOps)
}).call(this);