(function() {
    var libs, ReasonableSuggestionControllerOps;
    libs = ["angular", "jquery", "services/validate", "options/module", "services/domainManager", "services/domainUtils"], 
    ReasonableSuggestionControllerOps = function(angular,jquery) {
        var ReasonableSuggestionController, i;
        return ReasonableSuggestionController = function($scope, $rootScope, $http, $timeout, $translate, $alert, $modal, SERVER) {
			var init;

			init = function() {

			};
			$scope.openReasonableSuggestModal = function() {
				
				$rootScope.reasonableSuggestModal = $modal({
					templateUrl: "partials/options/modals/reasonable_suggestion.html",
					show: true,
					backdrop: true
				});

	        };
	        $scope.toggleReward = function(div) {
	        	if (jquery('.'+ div + ' .toggle-reward').hasClass('glyphicon-chevron-down')) {
          			jquery('.'+ div + ' .toggle-reward').removeClass('glyphicon-chevron-down');
          			jquery('.'+ div + ' .toggle-reward').addClass('glyphicon-chevron-up');

          			jquery('.'+ div).addClass('slide-up');
          			jquery('.'+ div + ' .rules').slideUp(500);   
	        	}else{ 
          			jquery('.'+ div + ' .toggle-reward').removeClass('glyphicon-chevron-up');
          			jquery('.'+ div + ' .toggle-reward').addClass('glyphicon-chevron-down');
          			jquery('.'+ div).removeClass('slide-up');
          			jquery('.'+ div + ' .rules').slideDown(500);   
	        	}
	        	  
	        };
			return init()
        }, angular.module("options").controller("ReasonableSuggestionController", ReasonableSuggestionController)
    }, define(libs, ReasonableSuggestionControllerOps)
}).call(this);