(function() {
    var libs, FillinInvitationCodeModalControllerOps;
    libs = ["angular", "jquery" , "upgrade/module"], 
    FillinInvitationCodeModalControllerOps = function(angular, jquery) {
        var FillinInvitationCodeModalController, i;
        return FillinInvitationCodeModalController = function($scope, $rootScope, $timeout, $translate, $modal) {


			return $scope.closeModal = function() {
				$rootScope.fillinInvitationCodeWhenRegister.hide();
			}
        }, angular.module("upgrade").controller("FillinInvitationCodeModalController", FillinInvitationCodeModalController)
    }, define(libs, FillinInvitationCodeModalControllerOps)
}).call(this);