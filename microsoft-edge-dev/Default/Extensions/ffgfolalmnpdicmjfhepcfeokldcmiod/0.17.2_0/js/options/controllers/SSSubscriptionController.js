(function() {
    var libs, SSSubscriptionControllerOps;
    libs = ["angular", "jquery", "angular", "services/validate", "options/module", "services/userManager"], 
    SSSubscriptionControllerOps = function(angular,jquery) {
        var SSSubscriptionController, i;
        return SSSubscriptionController = function($scope, $rootScope, $http, $timeout, $translate, $alert, $modal, $log, userManager) {

			  var init;

        $scope.showCopySSUrl = false;
        $scope.showCopySSRUrl = false;
        $scope.showCopySS2024Url = false;
        $scope.showCopySSR2024Url = false;
        $scope.subscription_loading = false;
        $scope.ss_subscription_url = '';
        $scope.ssr_subscription_url = '';
        $scope.ss2024_subscription_url = '';
        $scope.ssr2024_subscription_url = '';
        $rootScope.ss_subscription_accesses = [];

  $scope.ss_mouseEnter = function(){
    $scope.showCopySSUrl = true
  };

  $scope.ss_mouseLeave = function(){
    $scope.showCopySSUrl = false
  };
  $scope.ssr_mouseEnter = function(){
    $scope.showCopySSRUrl = true
  };

  $scope.ssr_mouseLeave = function(){
    $scope.showCopySSRUrl = false
  };
  $scope.ss2024_mouseEnter = function(){
    $scope.showCopySS2024Url = true
  };

  $scope.ss2024_mouseLeave = function(){
    $scope.showCopySS2024Url = false
  };

  $scope.ssr2024_mouseEnter = function(){
    $scope.showCopySSR2024Url = true
  };

  $scope.ssr2024_mouseLeave = function(){
    $scope.showCopySSR2024Url = false
  };

  $scope.showSSQrcode = function(){
          $rootScope.ssQrcodeModal = $modal({
            templateUrl: "partials/options/modals/ss_qrcode.html",
            animation: 'am-fade-and-slide-top',
            backdrop: true,
            show: true,
            scope : $scope
          });
  };
  $scope.showSSRQrcode = function(){
          $rootScope.ssrQrcodeModal = $modal({
            templateUrl: "partials/options/modals/ssr_qrcode.html",
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
  $scope.showSSR2024Qrcode = function(){
          $rootScope.ssrQrcodeModal = $modal({
            templateUrl: "partials/options/modals/ssr2024_qrcode.html",
            animation: 'am-fade-and-slide-top',
            backdrop: true,
            show: true,
            scope : $scope
          });
  };
      $scope.showSSClient = function(os) {
        return $rootScope.ssClientModal = $modal({
          templateUrl: "partials/options/modals/ss_client.html",
          controller: 'SSClientController',
          open:true,
          show:true,
          resolve: {
             os: function () {
               return os;
             }
           }
        })
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


            $rootScope.$watch("user.ss_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.ss_subscription_url) return;
  
                $scope.ss_subscription_url = $rootScope.user.ss_subscription_url;
            });
            $rootScope.$watch("user.ssr_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.ssr_subscription_url) return;
      
                $scope.ssr_subscription_url = $rootScope.user.ssr_subscription_url;
            });
            $rootScope.$watch("user.ss2024_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.ss2024_subscription_url) return;
      
                $scope.ss2024_subscription_url = $rootScope.user.ss2024_subscription_url;
            });
            $rootScope.$watch("user.ssr2024_subscription_url", function(newValue, oldValue) {
                if(!$rootScope.user.ssr2024_subscription_url) return;
      
                $scope.ssr2024_subscription_url = $rootScope.user.ssr2024_subscription_url;
            });
            $rootScope.$watch("user.ss_subscription_accesses", function(newValue, oldValue) {
                if(!$rootScope.user.ss_subscription_accesses) return;
                if(!$scope.subscription_loading) return;
                $scope.subscription_loading = false;
                $rootScope.ss_subscription_accesses = $rootScope.user.ss_subscription_accesses;
            });

      			init = function() {

                userManager.reloadSSSubscription($translate.use().startsWith("en"));

                if(!$scope.subscription_loading && $rootScope.ss_subscription_accesses.length == 0){
                  $scope.subscription_loading = true;
                  userManager.reloadSSSubscriptionAccesses();
                }
      			};


			  return init()
        }, angular.module("options").controller("SSSubscriptionController", SSSubscriptionController)
    }, define(libs, SSSubscriptionControllerOps)
}).call(this);