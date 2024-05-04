(function() {
    var libs, ClashSubscriptionControllerOps;
    libs = ["angular", "jquery", "angular", "services/validate", "options/module", "services/userManager"], 
    ClashSubscriptionControllerOps = function(angular,jquery) {
        var ClashSubscriptionController, i;
        return ClashSubscriptionController = function($scope, $rootScope, $http, $timeout, $translate, $alert, $modal, $log, userManager) {

			  var init;


        $scope.showCopyClashUrl = false;

        $scope.show2024CopyClashUrl = false;

        $scope.subscription_loading = false;
        $scope.clash_subscription_url = '';
        $rootScope.clash_subscription_accesses = [];

  $scope.clash_mouseEnter = function(){
    $scope.showCopyClashUrl = true
  };

  $scope.clash_mouseLeave = function(){
    $scope.showCopyClashUrl = false
  };

  $scope.clash2024_mouseEnter = function(){
    $scope.show2024CopyClashUrl = true
  };

  $scope.clash2024_mouseLeave = function(){
    $scope.show2024CopyClashUrl = false
  };

  $scope.showClashQrcode = function(){
          $rootScope.clashQrcodeModal = $modal({
            templateUrl: "partials/options/modals/clash_qrcode.html",
            animation: 'am-fade-and-slide-top',
            backdrop: true,
            show: true,
            scope : $scope
          });
  };

  $scope.showClash2024Qrcode = function(){
          $rootScope.clashQrcodeModal = $modal({
            templateUrl: "partials/options/modals/clash2024_qrcode.html",
            animation: 'am-fade-and-slide-top',
            backdrop: true,
            show: true,
            scope : $scope
          });
  };
      $scope.showClashClient = function(os) {
        /*
        return $rootScope.clashClientModal = $modal({
          templateUrl: "partials/options/modals/clash_client.html",
          controller: 'SSClientController',
          open:true,
          show:true,
          resolve: {
             os: function () {
               return os;
             }
           }
        })*/
      };

	      $scope.toggleReward = function(div) {
	        	if (jquery('.'+ div + ' .toggle-reward').hasClass('glyphicon-chevron-down')) {
          			jquery('.'+ div + ' .toggle-reward').removeClass('glyphicon-chevron-down');
          			jquery('.'+ div + ' .toggle-reward').addClass('glyphicon-chevron-up');

          			jquery('.'+ div).addClass('slide-up');
                jquery('.'+ div).removeClass('slide-down');
          			jquery('.'+ div + ' .wrapper').slideUp(500);   
	        	}else{ 
          			jquery('.'+ div + ' .toggle-reward').removeClass('glyphicon-chevron-up');
          			jquery('.'+ div + ' .toggle-reward').addClass('glyphicon-chevron-down');
          			jquery('.'+ div).removeClass('slide-up');
                jquery('.'+ div).addClass('slide-down');
          			jquery('.'+ div + ' .wrapper').slideDown(500);   
	        	}  
  	    };


            $rootScope.$watch("user.clash_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.clash_subscription_url) return;
  
                $scope.clash_subscription_url = $rootScope.user.clash_subscription_url;

            });
            $rootScope.$watch("user.clash2024_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.clash2024_subscription_url) return;
  
                $scope.clash2024_subscription_url = $rootScope.user.clash2024_subscription_url;

            });
            $rootScope.$watch("user.clash_subscription_accesses", function(newValue, oldValue) {
                if(!$rootScope.user.clash_subscription_accesses) return;
                if(!$scope.subscription_loading) return;
                $scope.subscription_loading = false;
                $rootScope.clash_subscription_accesses = $rootScope.user.clash_subscription_accesses;
            });

      			init = function() {

                userManager.reloadClashSubscription($translate.use().startsWith("en"));

                if(!$scope.subscription_loading && $rootScope.clash_subscription_accesses.length == 0){
                  $scope.subscription_loading = true;
                  userManager.reloadClashSubscriptionAccesses();
                }
      			};


			  return init()
        }, angular.module("options").controller("ClashSubscriptionController", ClashSubscriptionController)
    }, define(libs, ClashSubscriptionControllerOps)
}).call(this);