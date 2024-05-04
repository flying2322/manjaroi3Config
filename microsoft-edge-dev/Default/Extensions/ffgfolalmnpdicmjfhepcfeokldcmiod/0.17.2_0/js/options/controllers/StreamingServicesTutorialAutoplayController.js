(function() {
    var libs, StreamingServicesTutorialAutoplayControllerOps;
    libs = ["angular", "jquery" , "options/module", "services/pageManager",  "services/storage"], 
    StreamingServicesTutorialAutoplayControllerOps = function(angular, jquery) {
        var StreamingServicesTutorialAutoplayController, i;
        return StreamingServicesTutorialAutoplayController = function($scope, $rootScope, $timeout, $translate, pageManager, storage) {
        	
        	
			$scope.iframeURL = pageManager.getURL("streaming_services_tutorial_auto.html");

            $scope.onSubmit = function() {
                //alert("onOk:"+$scope.notShowAgainChecked);
                $scope.closeModal();
            };
            $scope.toggleNotShowAgain = function() {
                //$scope.notShowAgainChecked = !$scope.notShowAgainChecked;
                //storage.set("notShowNewcomerInfoAlert", $scope.notShowAgainChecked);
            };
			return $scope.closeModal = function() {
				$rootScope.streamingServicesTutorialAutoPlayModal.hide();
				//return $rootScope.newcomerInfoModal.destroy()
			}
        }, angular.module("options").controller("StreamingServicesTutorialAutoplayController", StreamingServicesTutorialAutoplayController)
    }, define(libs, StreamingServicesTutorialAutoplayControllerOps)
}).call(this);