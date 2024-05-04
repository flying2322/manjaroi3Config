(function() {
	var GuidePageController, libs, guide;

    GuidePageController = function($scope, $rootScope, pageManager) {
    	
    	$scope.gotoOptions = function() {
    		pageManager.gotoOptions();
        };
    };	




	libs = ["underscore", "angular", "lang", "ngRoute", "angular_translate", 'services/pageManager', "guide/module"], 
	guide = function(_, angular, lang) {
		var guideModule;
		guideModule = angular.module("guide")


		guideModule.config(function($translateProvider) {
			lang.config($translateProvider);
		});
        guideModule.controller({
            GuidePageController: GuidePageController
        });

		return angular.element(document).ready(function() {
			return angular.bootstrap(document, ["guide"])
		});
	};

	require(["../config"], function() {
		return requireWithRetry(libs, guide)
	});

}).call(this);