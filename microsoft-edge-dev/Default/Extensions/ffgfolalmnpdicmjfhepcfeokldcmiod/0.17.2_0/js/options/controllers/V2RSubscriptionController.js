(function() {
    var libs, V2RSubscriptionControllerOps;
    libs = ["angular", "jquery", "angular", "services/validate", "options/module", "services/userManager"], 
    V2RSubscriptionControllerOps = function(angular,jquery) {
        var V2RSubscriptionController, i;
        return V2RSubscriptionController = function($scope, $rootScope, $http, $timeout, $translate, $alert, $modal, $log, userManager) {

			  var init;


        $scope.showCopyV2RUrl = false;
        $scope.showCopySS2024Url = false;
        $scope.subscription_loading = false;
        $scope.v2r_subscription_url = '';
        $scope.ss2024_subscription_url = '';
        $rootScope.v2r_subscription_accesses = [];


  $scope.v2r_mouseEnter = function(){
    $scope.showCopyV2RUrl = true
  };

  $scope.v2r_mouseLeave = function(){
    $scope.showCopyV2RUrl = false
  };
  $scope.ss2024_mouseEnter = function(){
    $scope.showCopySS2024Url = true
  };

  $scope.ss2024_mouseLeave = function(){
    $scope.showCopySS2024Url = false
  };
  $scope.showV2RQrcode = function(){
          $rootScope.v2rQrcodeModal = $modal({
            templateUrl: "partials/options/modals/v2r_qrcode.html",
            animation: 'am-fade-and-slide-top',
            backdrop: true,
            show: true,
            scope : $scope
          });
  };
  $scope.showSS2024Qrcode = function(){
          $rootScope.ssrQrcodeModal = $modal({
            templateUrl: "partials/options/modals/ss2024_qrcode.html",
            animation: 'am-fade-and-slide-top',
            backdrop: true,
            show: true,
            scope : $scope
          });
  };
      $scope.showV2RClient = function(os) {
        /*
        return $rootScope.v2rClientModal = $modal({
          templateUrl: "partials/options/modals/v2r_client.html",
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


            $rootScope.$watch("user.v2r_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.v2r_subscription_url) return;
  
                $scope.v2r_subscription_url = $rootScope.user.v2r_subscription_url;
                $scope.ss2024_subscription_url = $rootScope.user.ss2024_subscription_url;
            });

            $rootScope.$watch("user.v2r_subscription_accesses", function(newValue, oldValue) {
                if(!$rootScope.user.v2r_subscription_accesses) return;
                if(!$scope.subscription_loading) return;
                $scope.subscription_loading = false;
                $rootScope.v2r_subscription_accesses = $rootScope.user.v2r_subscription_accesses;
            });

      			init = function() {

                userManager.reloadV2RSubscription($translate.use().startsWith("en"));

                if(!$scope.subscription_loading && $rootScope.v2r_subscription_accesses.length == 0){
                  $scope.subscription_loading = true;
                  userManager.reloadV2RSubscriptionAccesses();
                }
      			};


			  return init()
        }, angular.module("options").controller("V2RSubscriptionController", V2RSubscriptionController)
    }, define(libs, V2RSubscriptionControllerOps)
}).call(this);