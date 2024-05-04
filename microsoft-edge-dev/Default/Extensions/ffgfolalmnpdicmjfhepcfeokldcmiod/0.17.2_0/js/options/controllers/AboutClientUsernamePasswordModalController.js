(function() {
    var libs, AboutClientUsernamePasswordModalControllerOps;
    libs = ["angular",  "options/module",  "services/storage"], 
    AboutClientUsernamePasswordModalControllerOps = function(angular) {
        var AboutClientUsernamePasswordModalController, i;
        return AboutClientUsernamePasswordModalController = function($scope, $rootScope, $timeout, $translate, $modal, storage, ROLES) {

			return $scope.closeModal = function() {
				$rootScope.aboutClientUsernamePasswordModal.hide();
			}
        }, angular.module("options").controller("AboutClientUsernamePasswordModalController", AboutClientUsernamePasswordModalController)
    }, define(libs, AboutClientUsernamePasswordModalControllerOps)
}).call(this);