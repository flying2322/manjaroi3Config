(function() {
    var libs, ISPTutorialAutoplayControllerOps;
    libs = ["angular", "jquery" , "options/module", "services/pageManager",  "services/storage"], 
    ISPTutorialAutoplayControllerOps = function(angular, jquery) {
        var ISPTutorialAutoplayController, i;
        return ISPTutorialAutoplayController = function($scope, $rootScope, $timeout, $translate, pageManager, storage) {
        	
        	
			$scope.iframeURL = pageManager.getURL("isp_tutorial_auto.html");

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
        }, angular.module("options").controller("ISPTutorialAutoplayController", ISPTutorialAutoplayController)
    }, define(libs, ISPTutorialAutoplayControllerOps)
}).call(this);