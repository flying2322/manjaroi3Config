(function() {
    var libs, SSClientControllerOps;
    libs = ["angular", "jquery" , "options/module", "services/pageManager"], 
    SSClientControllerOps = function(angular, jquery) {
        var SSClientController, i;
        return SSClientController = function($scope, $rootScope, $translate, $sce, pageManager, os) {
			$scope.iframeURL = $sce.trustAsResourceUrl($rootScope.user.ss_client_url + "?os="+os);

            $scope.onSubmit = function() {
                $scope.closeModal();
            };
			return $scope.closeModal = function() {
				$rootScope.ssClientModal.hide();
			}
        }, angular.module("options").controller("SSClientController", ['$scope', '$rootScope', '$translate', '$sce', 'pageManager', 'os', SSClientController])
    }, define(libs, SSClientControllerOps)
}).call(this);