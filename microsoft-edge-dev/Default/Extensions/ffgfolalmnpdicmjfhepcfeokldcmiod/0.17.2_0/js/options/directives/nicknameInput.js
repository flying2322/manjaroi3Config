(function() {
    var libs, nicknameInputDirective;
    libs = ["angular", "angular_translate", "options/module", "services/validate", "services/invitationManager", "services/userManager"], 
    nicknameInputDirective = function(angular) {
        var nicknameInput;
        return nicknameInput = function($rootScope, $http, $timeout, $tooltip, $translate, $alert, invitationManager, userManager, validate, SERVER) {
			return {
				restrict: 'E',
				scope: {
					focusTrigger: '=manualFocus',
					updateNickname: '=updateNickname'
				},
				templateUrl: 'partials/options/nickname_input.html',
				link: function(scope, element, attrs) {
					var nickFunc = scope.$eval('updateNickname');
					//alert("updateNickname:"+nickFunc);
					scope.tooltipText = "";
					scope.tempNickname = $rootScope.user.profile.nickname;
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
					return scope.setNickname = function() {
						scope.$parent.focusNicknameInput = false;
						scope.$parent.showNicknameInput = false;
						//alert("scope.tempNickname:"+scope.tempNickname);
						nickFunc(scope.tempNickname);
					}
				}
			}
        }, angular.module("options").directive("nicknameInput", nicknameInput)
    }, define(libs, nicknameInputDirective)
}).call(this);