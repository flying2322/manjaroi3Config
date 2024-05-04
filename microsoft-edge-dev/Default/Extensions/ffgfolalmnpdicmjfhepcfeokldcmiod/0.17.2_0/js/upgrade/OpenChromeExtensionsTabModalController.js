(function() {
    var libs, OpenChromeExtensionsTabModalControllerOps;
    libs = ["angular", "jquery" , "upgrade/module"], 
    OpenChromeExtensionsTabModalControllerOps = function(angular, jquery) {
        var OpenChromeExtensionsTabModalController, i;
        return OpenChromeExtensionsTabModalController = function($scope, $rootScope, $timeout, $translate, $modal) {

			$scope.nextStep = function() {

				$rootScope.openChromeExtensionsTabModal.hide();
                $rootScope.dragInstallMaikr = $modal({
                    template: '/partials/inv/drag_install_maikr.html',
                    show: true,
                    backdrop: 'static'
                });
			};

			return $scope.closeModal = function() {
				$rootScope.openChromeExtensionsTabModal.hide();
			}
        }, angular.module("upgrade").controller("OpenChromeExtensionsTabModalController", OpenChromeExtensionsTabModalController)
    }, define(libs, OpenChromeExtensionsTabModalControllerOps)
}).call(this);