(function() {
    var libs, inviterInputDirective;
    libs = ["angular", "angular_translate", "options/module", "services/validate", "services/invitationManager", "services/userManager"], 
    inviterInputDirective = function(angular) {
        var inviterInput;
        return inviterInput = function($rootScope, $http, $timeout, $tooltip, $translate, $alert, invitationManager, userManager, validate, SERVER) {
			return {
				restrict: 'E',
				scope: {
					focusTrigger: '=manualFocus'
				},
				templateUrl: 'partials/options/inviter_input.html',
				link: function(scope, element) {
					scope.tooltipText = "";
					scope.tempInviter = "";
					scope.disableInput = false;
					scope.submit_button_text = $translate.instant("common.ok");
					scope.$watch('focusTrigger',
					function(val) {
						var input;
						if (val === true) {
							input = element.children('form').children('input');
							input[0].focus();
							input[0].select();
							return scope.focusTrigger = false
						}
					});
					scope.tooltipAlert = function(text) {
						var input;
						input = element.children('form').children('input');
						scope.myTooltip = $tooltip(input, {
							title: text,
							placement: 'bottom',
							trigger: 'manual'
						});
						$timeout(function() {
							return scope.myTooltip.show()
						},100);
						return $timeout(function() {
							return scope.myTooltip.hide()
						},2000)
					};
					return scope.setInviter = function() {
						scope.disableInput = true;
						var inviter;
						inviter = scope.tempInviter.trim();
						if (validate.email(inviter) || validate.phone(inviter)) {
							/*
							var submittedAlert = $alert({  
							    title: $translate.instant("options.invitation.email_submitting"),
							    content: '', 
							    type: 'info',
							    duration: 2,
							    show: true
							});
							*/
							$rootScope.$watch('user.error', function(error) {

								if(error && error.inviter_error_inviter){

									scope.disableInput = false;
									scope.tooltipAlert($translate.instant("options.invitation.error_inviter_invalid"));
								}
								
								if(error && error.inviter_error_inviter_exist){


									scope.disableInput = false;
									scope.tooltipAlert($translate.instant("options.invitation.error_inviter_exists"));
								}


								if(error && error.inviter_error_succ){
									scope.submit_succ = true;
									scope.disableInput = false;
									scope.$parent.showInviterInput = false;
								}
								
							}, true);


							userManager.setInviter({inviter: inviter});
							

						} else {
							scope.disableInput = false;
							return scope.tooltipAlert('输入帐号格式不正确')
						}
					}
				}
			}
        }, angular.module("options").directive("inviterInput", inviterInput)
    }, define(libs, inviterInputDirective)
}).call(this);