(function() {
    var libs, AboutDataTrafficModalControllerOps;
    libs = ["angular",  "options/module",  "services/storage"], 
    AboutDataTrafficModalControllerOps = function(angular) {
        var AboutDataTrafficModalController, i;
        return AboutDataTrafficModalController = function($scope, $rootScope, $timeout, $translate, $modal, storage, ROLES) {

			return $scope.closeModal = function() {
				$rootScope.aboutDataTrafficModal.hide();
			}
        }, angular.module("options").controller("AboutDataTrafficModalController", AboutDataTrafficModalController)
    }, define(libs, AboutDataTrafficModalControllerOps)
}).call(this);