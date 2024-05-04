(function() {
    var libs, GuideAutoplayControllerOps;
    libs = ["angular", "jquery" , "options/module", "services/pageManager",  "services/storage"], 
    GuideAutoplayControllerOps = function(angular, jquery) {
        var GuideAutoplayController, i;
        return GuideAutoplayController = function($scope, $rootScope, $timeout, $translate, pageManager, storage) {
        	
        	
			$scope.iframeURL = pageManager.getURL("guide_auto.html");

            $scope.onSubmit = function() {
                //alert("onOk:"+$scope.notShowAgainChecked);
                $scope.closeModal();
            };
            $scope.toggleNotShowAgain = function() {
                $scope.notShowAgainChecked = !$scope.notShowAgainChecked;
                storage.set("notShowNewcomerInfoAlert", $scope.notShowAgainChecked);
            };
			return $scope.closeModal = function() {
				$rootScope.guideAutoPlayModal.hide();
				//return $rootScope.newcomerInfoModal.destroy()
			}
        }, angular.module("options").controller("GuideAutoplayController", GuideAutoplayController)
    }, define(libs, GuideAutoplayControllerOps)
}).call(this);