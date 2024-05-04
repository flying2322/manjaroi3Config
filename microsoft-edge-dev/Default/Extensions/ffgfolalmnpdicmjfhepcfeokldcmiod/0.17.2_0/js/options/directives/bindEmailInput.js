(function() {
    var libs, bindEmailInputDirective;
    libs = ["angular", "angular_translate", "options/module", "services/validate", "services/invitationManager", "services/userManager"], 
    bindEmailInputDirective = function(angular) {
        var bindEmailInput;
        return bindEmailInput = function($rootScope, $http, $timeout, $tooltip, $translate, $alert, invitationManager, userManager, validate, SERVER) {
			return {
				restrict: 'E',
				scope: {
					focusTrigger: '=manualFocus',
					bindedEmail:  '@bindedEmail'
				},
				templateUrl: 'partials/options/bind_email_input.html',
				link: function(scope, element, attrs) {
					scope.tooltipText = "";
					scope.disableInput = false;
					scope.submit_button_text = $translate.instant("common.ok");
					scope.tempEmail = scope.bindedEmail || '';
					scope.$watch('bindedEmail',function(value) {
						if(value){
							scope.tempEmail = value;
						}

					});

					scope.$watch('focusTrigger',
					function(val) {
						var input;
						if (val === true) {
							input = element.children('form').children('input');
							input[0].focus();
							input[0].select();
							//alert(scope.bindedEmail);
							//scope.tempEmail = scope.bindedEmail || ''
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
						}, 1);
						return $timeout(function() {
							scope.myTooltip.hide()
						}, 3000);
					};
					return scope.setEmail = function() {
						scope.disableInput = true;
						var email;
						email = scope.tempEmail.trim();
						//$rootScope.user.error.emailBind_error_email_edu = false;
						//alert("$rootScope.user.profile.email === email:"+($rootScope.user.profile.email === email));
						if($rootScope.user.profile.emailBinded){
							if($rootScope.user.profile.email === email){

								$timeout(function() {
									scope.disableInput = false;
									/*
									var submittedAlert = $alert({  
									    title: $translate.instant("options.invitation.email_submitting_identical_not_allowed"),
									    content: '', 
									    type: 'warning',
									    duration: 4,
									    show: true
									});
								*/	
					
									scope.tooltipAlert($translate.instant("options.invitation.email_submitting_identical_not_allowed"));
								}, 1 * 1000);
								return;
							}
						}
						
						$rootScope.$watch('user.error', function(error) {

							if(error && error.emailBind_error_email){

								$timeout(function() {
									scope.disableInput = false;

									scope.tooltipAlert($translate.instant("options.invitation.email_invalid"));

								}, 1 * 1000);
							}
							
							if(error && error.emailBind_error_user){

								$timeout(function() {
									scope.disableInput = false;
									scope.tooltipAlert($translate.instant("options.invitation.user_invalid"));

								}, 1 * 1000);
							}
							if(error && error.emailBind_error_exists){

								$timeout(function() {
									scope.disableInput = false;
									scope.tooltipAlert($translate.instant("options.invitation.exists_invalid"));

								}, 1 * 1000);
							}


							if(error && error.emailBind_error_email_edu){

								$timeout(function() {
									scope.disableInput = false;
									scope.tooltipAlert($translate.instant("options.invitation.edu_email_invalid"));

								}, 1 * 1000);
							}


							if(error && error.emailBind_error_succ){
								//alert("");
								/*
									var succAlert = $alert({  
									    title: $translate.instant("options.invitation.email_bind_success"),
									    content: '', 
									    type: 'success',
									    duration: 4,
									    show: true
									});
								*/
								scope.submit_succ = true;
								scope.disableInput = false;
								scope.$parent.showbindEmailInput = false;
								/*
								var submittedAlert = $alert({  
								    title: $translate.instant("options.invitation.email_submitting_identical_not_allowed"),
								    content: '', 
								    type: 'success',
								    duration: 4,
								    show: true
								});
								*/
							}
							
						}, true);



						if (validate.email(email)) {

							userManager.bindEmail({
								email: email
							});
							var submittedAlert = $alert({  
							    title: $translate.instant("options.invitation.email_submitting"),
							    content: '', 
							    type: 'info',
							    container: 'body',
							    duration: 2,
							    show: true
							 });
							//return scope.$parent.showbindEmailInput = false;
						} else {
							scope.disableInput = false;

							return scope.tooltipAlert($translate.instant("options.invitation.email_invalid"));
						}
					}
				}
			}
        }, angular.module("options").directive("bindEmailInput", bindEmailInput)
    }, define(libs, bindEmailInputDirective)
}).call(this);