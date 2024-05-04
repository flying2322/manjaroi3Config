(function() {
    var libs, inviteEmailInputDirective;
    libs = ["angular", "angular_translate", "options/module", "services/validate"], 
    inviteEmailInputDirective = function(angular) {
        var inviteEmailInput;
        return inviteEmailInput = function($rootScope, $http, $timeout, $tooltip, $translate, $alert, validate, SERVER) {
			return {
				restrict: 'E',
				scope: {
					focusTrigger: '=manualFocus',
					bindedEmail:  '=bindedEmail',
					setEmail: '&'
				},
				templateUrl: 'partials/options/invite_email_input.html',
				link: function(scope, element, attrs) {
					scope.tooltipText = "";

					scope.tempEmail = scope.bindedEmail || '';
					//alert(attrs.bindedEmail);
					//console.log(scope.bindedEmail)

					scope.$watch('bindedEmail',function(value) {
						if(value){
							scope.tempEmail = value;
						}

					});
					scope.$watch('tempEmail',function(value) {
						if(value){
							//alert("tempEmail:"+value);
							scope.bindedEmail = value;
						}

					});
/*
				scope.$watch(attrs.manualFocus, function (v) {

					if (v) {
						console.log('ngModel has changed value to ' + v);

					}
				});
*/
					/*
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
*/
/*
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
						},
						1);
						return $timeout(function() {
							return scope.myTooltip.hide()
						},
						3000)
					};
					*/
					/*
					return scope.setEmail = function() {
						var email;
						email = scope.tempEmail.trim();
						$rootScope.user.error.emailBind_error_email_edu = false;
						if($rootScope.user.profile.emailBinded){
							if($rootScope.user.profile.email === email){
								var submittedAlert = $alert({  
								    title: $translate.instant("options.invitation.email_submitting_identical_not_allowed"),
								    content: '', 
								    type: 'warning',
								    duration: 2,
								    show: true
								 });
								 return;
							}
						}
						
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
							//return scope.$parent.showEmailInput = false;
						} else {
							return scope.tooltipAlert($translate.instant("options.invitation.email_invalid"));
						}
					}
					*/
				}
			}
        }, 
        angular.module("options").directive("inviteEmailInput", inviteEmailInput)
    }, 
    define(libs, inviteEmailInputDirective)
}).call(this);