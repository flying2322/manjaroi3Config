(function() {
    var libs, RoutingTutorialAutoplayControllerOps;
    libs = ["angular", "jquery" , "options/module", "services/pageManager",  "services/storage"], 
    RoutingTutorialAutoplayControllerOps = function(angular, jquery) {
        var RoutingTutorialAutoplayController, i;
        return RoutingTutorialAutoplayController = function($scope, $rootScope, $timeout, $translate, pageManager, storage) {
        	
        	
			$scope.iframeURL = pageManager.getURL("routing_tutorial_auto.html");

            $scope.onSubmit = function() {
                //alert("onOk:"+$scope.notShowAgainChecked);
                $scope.closeModal();
            };
            $scope.toggleNotShowAgain = function() {
                //$scope.notShowAgainChecked = !$scope.notShowAgainChecked;
                //storage.set("notShowNewcomerInfoAlert", $scope.notShowAgainChecked);
            };
			return $scope.closeModal = function() {
				$rootScope.routingTutorialAutoPlayModal.hide();
				//return $rootScope.newcomerInfoModal.destroy()
			}
        }, angular.module("options").controller("RoutingTutorialAutoplayController", RoutingTutorialAutoplayController)
    }, define(libs, RoutingTutorialAutoplayControllerOps)
}).call(this);