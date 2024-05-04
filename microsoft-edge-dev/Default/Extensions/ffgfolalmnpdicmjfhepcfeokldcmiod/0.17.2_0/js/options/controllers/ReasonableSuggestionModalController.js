(function() {
    var libs, ReasonableSuggestionModalControllerOps;
    libs = ["angular",  "options/module"], 
    ReasonableSuggestionModalControllerOps = function(angular) {
        var ReasonableSuggestionModalController, i;
        return ReasonableSuggestionModalController = function($scope, $rootScope, $timeout, $translate, userManager) {
			$scope.initAlertText = $translate.instant("options.reasonable_suggestion.init_alert");
			$scope.initAlertStyle = 'alert-info';
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;
	        $scope.submit_succ = false;
	        $scope.showAlert = false;
			$scope.submit_button_text = $translate.instant("options.reasonable_suggestion.submit");
			$scope.focuses = {
				subject: true,
				content: false
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
					$scope.showAlert = false;
				},
				3 * 1000)
			};
			$scope.submitSuggestion = function() {
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
						$scope.alert($translate.instant("options.reasonable_suggestion.alert.submit_error"));
						$scope.disableInput = false;
					}
					if(error && error.submit_reasonable_suggesion_succ){
						$scope.alert($translate.instant("options.reasonable_suggestion.alert.submit_success"), "alert-success");
						$scope.submit_succ = true;
						//$scope.closeModal();
					}
				}, true);


				userManager.submitReasonableSuggestion($scope.subject, $scope.content);

				//$scope.alertStyle = 'alert-success';
				//$scope.alertText = $translate.instant("options.reasonable_suggestion.submitted");
			};
			return $scope.closeModal = function() {
				return $rootScope.reasonableSuggestModal.hide()
			}
        }, 
        angular.module("options").controller("ReasonableSuggestionModalController", ReasonableSuggestionModalController)
    }, define(libs, ReasonableSuggestionModalControllerOps)
}).call(this);