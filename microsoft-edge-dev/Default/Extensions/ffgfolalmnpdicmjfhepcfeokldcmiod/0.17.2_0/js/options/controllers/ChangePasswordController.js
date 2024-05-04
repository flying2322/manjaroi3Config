(function() {
    var libs, ChangePasswordControllerOps;
    libs = ["angular",  "options/module",  "services/userManager"], 
    ChangePasswordControllerOps = function(angular) {
        var ChangePasswordController, i;
        return ChangePasswordController = function($scope, $rootScope, $http, $translate, userManager, SERVER) {
			$scope.oldPassword = '';
			$scope.newPassword = '';
			$scope.rePassword = '';
			$scope.focuses = {
				oldPassword: true,
				newPassword: false
			};
			$scope.alert = $scope.$parent.alert;
			$scope.closeModal = $scope.$parent.closeModal;
			$scope.submitChangePassword = function() {
				if (!$scope.oldPassword) {
					$scope.focuses.oldPassword = true;
					$scope.alert($translate.instant("options.change_password.alert.old_password_error"));
					return false
				} else if (!$scope.newPassword) {
					$scope.focuses.newPassword = true;
					$scope.alert($translate.instant("options.change_password.alert.new_password_short"));
					return false
				} else if ($scope.newPassword !== $scope.rePassword) {
					$scope.alert($translate.instant("options.change_password.alert.password2_not_same"));
					$scope.focuses.newPassword = true;
					return false
				} else if ($scope.newPassword === $scope.oldPassword) {
					$scope.alert($translate.instant("options.change_password.alert.password__same"));
					$scope.focuses.newPassword = true;
					return false
				}
				$scope.disableInput = true;
				


				var data = {
						old_pass: $scope.oldPassword.trim(),
						new_pass: $scope.newPassword.trim()
				};
				
				userManager.changePassword(data);

				/*
				$http({
					method: 'POST',
					url: SERVER.scheme + SERVER.host + SERVER.contextPath + "/user/password",
					params: {
						old: $scope.oldPassword.trim(),
						"new": $scope.newPassword.trim(),
						sid: $rootScope.user.profile.sid
					},
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).success(function(resp) {
					$scope.disableInput = false;
					if (resp.error) {
						$scope.alert(resp.message);
						if (resp.error === 'PASSWORD_INVALID') {
							return $scope.focuses.oldPassword = true
						} else if (resp.error === 'NEW_PASSWORD_TOO_SHORT') {
							return $scope.focuses.newPassword = true
						}
					} else {
						$scope.alert($translate.instant("options.change_password.alert.success_change"), 'success');
						$scope.isChangingPassword = false;
						return $scope.closeModal()
					}
				}).error(function() {
					$scope.disableInput = false;
					$scope.isChangingPassword = false;
					return $scope.alert($translate.instant("options.change_password.alert.connection_failed"))
				});
				*/
				$scope.isChangingPassword = false;
				$scope.disableInput = false;
				$scope.closeModal();
				return true
			};
			return $scope.cancelChangePassword = function() {
				$scope.isChangingPassword = false;
				return $scope.closeModal()
			}
        }, angular.module("options").controller("ChangePasswordController", ChangePasswordController)
    }, define(libs, ChangePasswordControllerOps)
}).call(this);