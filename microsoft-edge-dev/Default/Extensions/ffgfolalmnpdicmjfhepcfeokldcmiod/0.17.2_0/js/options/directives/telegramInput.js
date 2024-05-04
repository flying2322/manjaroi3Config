(function() {
    var libs, telegramInputDirective;
    libs = ["angular", "angular_translate", "options/module", "services/validate", "services/invitationManager", "services/userManager"], 
    telegramInputDirective = function(angular) {
        var telegramInput;
        return telegramInput = function($rootScope, $http, $timeout, $tooltip, $translate, $alert, invitationManager, userManager, validate, SERVER) {
			return {
				restrict: 'E',
				scope: {
					focusTrigger: '=manualFocus',
					updateTelegram: '=updateTelegram'
				},
				templateUrl: 'partials/options/telegram_input.html',
				link: function(scope, element, attrs) {
					var nickFunc = scope.$eval('updateTelegram');
					scope.tooltipText = "";
					scope.tempTelegram = $rootScope.user.profile.telegram;
					scope.disableInput = false;
					scope.submit_button_text = $translate.instant("common.ok");
					scope.cancel_button_text = $translate.instant("common.cancel");
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
					return scope.setTelegram = function() {
						scope.$parent.focusTelegramInput = false;
						scope.$parent.showTelegramInput = false;
						if(!scope.tempTelegram || scope.tempTelegram === ''){
							Swal({
                                type: 'error',
                                title: $translate.instant("common.oops"),
                                html: $translate.instant("common.cannot_be_blank")
                            });
							return;
						}
						if(scope.tempTelegram.startsWith('@')){
							scope.tempTelegram = '';
							Swal({
                                type: 'error',
                                title: $translate.instant("common.oops"),
                                html: $translate.instant("options.layout.bind_telegram_error_at_sign")
                            });
							return;
						}

						var re = /^[a-zA-Z0-9_]+$/;
						if (!re.test(scope.tempTelegram)) {
							scope.tempTelegram = '';
							Swal({
                                type: 'error',
                                title: $translate.instant("common.oops"),
                                html: $translate.instant("options.layout.bind_telegram_error_invalid")
                            });
							return;
						}

						nickFunc(scope.tempTelegram);
					}
				}
			}
        }, angular.module("options").directive("telegramInput", telegramInput)
    }, define(libs, telegramInputDirective)
}).call(this);