(function() {
    var libs, DragInstallMaikrModalControllerOps;
    libs = ["angular", "jquery" , "upgrade/module"], 
    DragInstallMaikrModalControllerOps = function(angular, jquery) {
        var DragInstallMaikrModalController, i;
        return DragInstallMaikrModalController = function($scope, $rootScope, $timeout, $translate, $modal) {

			$scope.nextStep = function() {

				$rootScope.dragInstallMaikr.hide();
                $rootScope.fillinInvitationCodeWhenRegister = $modal({
                    template: '/partials/inv/fillin_invitation_code_when_signup.html',
                    show: true,
                    backdrop: 'false'
                });
			};

			return $scope.closeModal = function() {
				$rootScope.dragInstallMaikr.hide();
			}
        }, angular.module("upgrade").controller("DragInstallMaikrModalController", DragInstallMaikrModalController)
    }, define(libs, DragInstallMaikrModalControllerOps)
}).call(this);