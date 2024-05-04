(function() {
    var libs, InviteQrcodeControllerOps;
    libs = ["angular",  "jquery", "options/module",  "services/storage", "services/validate", "services/userManager"], 
    InviteQrcodeControllerOps = function(angular, jquery) {
        var InviteQrcodeController, i;
        return InviteQrcodeController = function($scope, $rootScope, $timeout, $translate, storage, validate, userManager, ROLES) {
        	$scope.email = $rootScope.user.profile.email;
        	$scope.tempEmail = $scope.email;
	        $scope.showSendQREmailInput=false;	
	        $scope.submit_succ = false;
	        $scope.showAlert = false;
	        $scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.send_to") + $scope.email;
	        $scope.qrcodeImageURL = $rootScope.user.profile.invite_qrcode_url;
			$scope.getInviteUrl = function() {
				return $rootScope.user.invite_url_prefix + $rootScope.user.selectedInvitationCode + $rootScope.user.invite_url_suffix;
				//return $rootScope.user.profile.invite_url;
			};
			$scope.getQRCodeImageURL = function() {
				return $rootScope.user.invite_qrcode_url_prefix + $rootScope.user.selectedInvitationCode + $rootScope.user.invite_qrcode_url_suffix;
				//return $rootScope.user.profile.invite_qrcode_url;
			};
        	$scope.setEmail  = function() {
				var email;
				email = $scope.email;
				$scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.send_to") + $scope.email;
        		//alert($scope.email);
        		$scope.showSendQREmailInput=false;
        	};
			$scope.alert = function(msg, style) {
				$scope.showAlert = true;
				$scope.alertText = msg;
				if(style){
					$scope.alertStyle = style;
				}else{
					$scope.alertStyle = 'alert-danger';
				}
				
				return $timeout(function() {
					//$scope.alertText = $scope.initAlertText;
					//return $scope.alertStyle = $scope.initAlertStyle
					$scope.showAlert = false;
				},
				5 * 1000)
			};
        	$scope.submitQRCodeEmail  = function() {
        		
				var email = $scope.email;
				$scope.disableInput = true;
				var email = $scope.email;
				if (!validate.email(email)){
					$scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.email_error");
					$timeout(function() {
						$scope.disableInput = false;
						$scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.send_to") + $scope.email;
					},
					3 * 1000);
					return false;
				}
				$scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.submitted");

				$scope.alert($translate.instant("options.invite_qrcode_modal.submitted"), "alert-info");

				$rootScope.$watch('user.error', function(error) {

					if(error && error.submit_qrcode_email_error){
						$scope.alert($translate.instant("options.invite_qrcode_modal.send_email_fails"));
						$scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.send_email_fails");
						$timeout(function() {
							$scope.disableInput = false;
							$scope.submit_button_text = $translate.instant("options.invite_qrcode_modal.send_to") + $scope.email;
						}, 2 * 1000);
					}
					
					if(error && error.submit_qrcode_email_succ){
						$scope.alert($translate.instant("options.invite_qrcode_modal.send_email_succ"),"alert-success");
						$scope.submit_succ = true;
						
					}
					
				}, true);

				userManager.submitQRCodeEmail(email);
				
        	};
        	$scope.cancel = function() {
				$rootScope.inviteQRCodeModal.hide();
				return $rootScope.inviteQRCodeModal.destroy();
			};
			return $scope.closeModal = function() {
				$rootScope.inviteQRCodeModal.hide();
				return $rootScope.inviteQRCodeModal.destroy();
			};
        	/*
        	$scope.cancel = function() {
				return $rootScope.inviteQRCodeModal.hide()
			};
			return $scope.closeModal = function() {
				return $rootScope.inviteQRCodeModal.hide()
			}
			*/

        }, angular.module("options").controller("InviteQrcodeController", InviteQrcodeController)
    }, define(libs, InviteQrcodeControllerOps)
}).call(this);