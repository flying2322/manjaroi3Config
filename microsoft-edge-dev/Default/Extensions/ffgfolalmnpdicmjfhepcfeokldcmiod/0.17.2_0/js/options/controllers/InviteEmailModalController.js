(function() {
    var libs, InviteEmailModalControllerOps;
    libs = ["angular", "jquery", "options/module", "services/userManager", "services/validate"], 
    InviteEmailModalControllerOps = function(angular, jquery) {
        var InviteEmailModalController, i;
        return InviteEmailModalController = function($scope, $rootScope, $timeout, $translate, userManager, validate) {
			$scope.initAlertText = $translate.instant("options.invite_email.init_alert");
			$scope.initAlertStyle = 'alert-info';
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;

			$scope.email = $rootScope.user.profile.email;
			$scope.showSendEmailInput = false;
        	$scope.focusSendToEmail = false;
        	$scope.disableInput = false;
        	$scope.submit_succ = false;
        	$scope.submit_button_text = $translate.instant("options.invite_email.sending_to") + $scope.email + $translate.instant("options.invite_email.forward");
			$scope.focuses = {
				subject: true,
				content: false
			};
        	$scope.setEmail  = function() {
				var email;
				email = $scope.email;
        		$scope.submit_button_text = $translate.instant("options.invite_email.sending_to") + $scope.email + $translate.instant("options.invite_email.forward");
        		
        		$scope.showSendEmailInput = false;

        		//alert(email);
        	};
			$scope.getUsername = function() {
				return userManager.getUsername();
			};
			$scope.subject = $scope.getUsername() + $translate.instant("options.invite_email.subject");
			$scope.getInviteUrl = function() {
				return $rootScope.user.invite_url_prefix + $rootScope.user.selectedInvitationCode + $rootScope.user.invite_url_suffix;
				//return $rootScope.user.profile.invite_url;
			};
			$scope.getQRCodeImageURL = function() {
				return $rootScope.user.invite_qrcode_url_prefix + $rootScope.user.selectedInvitationCode + $rootScope.user.invite_qrcode_url_suffix;
				//return $rootScope.user.profile.invite_qrcode_url;
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
			$scope.submitEmailDraft = function() {
				var contentDiv = jquery("div.content");
				$scope.disableInput = true;
				$scope.submit_button_text = $translate.instant("options.invite_email.alert.submitted");
				contentDiv.attr("contenteditable", false);
				var email = $scope.email;
				if (!validate.email(email)){
					$scope.alert($translate.instant("options.invite_email.alert.email_error"));

					$scope.submit_button_text = $translate.instant("options.invite_email.alert.email_error");
					$timeout(function() {
						$scope.disableInput = false;
						$scope.submit_button_text = $translate.instant("options.invite_email.sending_to") + $scope.email + $translate.instant("options.invite_email.forward");
					},
					3 * 1000)
					return false;
				}
				//alert($scope.subject);
				//alert($scope.email);
				var content = jquery("div.content").html();
				//alert("submitEmailDraft:"+jquery("div.content").html());

				$scope.alertStyle = 'alert-success';
				$scope.alertText = $translate.instant("options.invite_email.alert.submitted");
				$rootScope.$watch('user.error', function(error) {
					if(error && error.submit_invite_email_draft_succ){
						$scope.alertStyle = 'alert-success';
						$scope.alertText = $translate.instant("options.invite_email.alert.send_email_succ");
						//$scope.disableInput = true;
						$scope.submit_button_text = $translate.instant("options.invite_email.alert.submit_succ");
						$scope.submit_succ = true;
						
					}
					if(error && error.submit_invite_email_draft_error){
						$scope.alertStyle = 'alert-danger';
						$scope.alertText = $translate.instant("options.invite_email.alert.send_email_fails");
						$scope.submit_button_text = $translate.instant("options.invite_email.alert.send_email_fails");
						$timeout(function() {
							$scope.disableInput = false;
							$scope.submit_button_text = $translate.instant("options.invite_email.sending_to") + $scope.email + $translate.instant("options.invite_email.forward");
						},
						2 * 1000);
						//$scope.disableInput = true;
						//$scope.submit_succ = true;
					}

				}, true);
				//alert(email);
				//console.log("submitEmailDraft:"+email);
				userManager.submitInviteEmailDraft(email, $scope.subject, content);


				/*
				if (!$scope.subject) {
					$scope.focuses.subject = true;
					$scope.alert($translate.instant("options.reasonable_suggestion.alert.subject_error"));
					return false
				} else if (!$scope.content) {
					$scope.focuses.content = true;
					$scope.alert($translate.instant("options.reasonable_suggestion.alert.content_error"));
					return false
				} 
				$scope.disableInput = true;
				$scope.alertStyle = 'alert-info';
				$scope.alertText = $translate.instant("options.reasonable_suggestion.submitting");

				$rootScope.$watch('user.error', function(error) {

					if(error && error.submit_reasonable_suggesion_error){
						$scope.alertStyle = 'alert-danger';
						$scope.alertText = "fails";
					}
					if(error && error.submit_reasonable_suggesion_succ){
						$scope.alertStyle = 'alert-success';
						$scope.alertText = "success";
						//$scope.closeModal();
					}
				}, true);


				userManager.submitReasonableSuggestion($scope.subject, $scope.content);
				*/
				//$scope.alertStyle = 'alert-success';
				//$scope.alertText = $translate.instant("options.reasonable_suggestion.submitted");
			};
			$scope.cancel = function() {
				$rootScope.inviteEmailModal.hide();
				return $rootScope.inviteEmailModal.destroy();
			};
			return $scope.closeModal = function() {
				$rootScope.inviteEmailModal.hide();
				return $rootScope.inviteEmailModal.destroy();
			};
			/*
			return $scope.closeModal = function() {
				return $rootScope.inviteEmailModal.hide()
			}
			*/
        }, angular.module("options").controller("InviteEmailModalController", InviteEmailModalController)
    }, define(libs, InviteEmailModalControllerOps)
}).call(this);