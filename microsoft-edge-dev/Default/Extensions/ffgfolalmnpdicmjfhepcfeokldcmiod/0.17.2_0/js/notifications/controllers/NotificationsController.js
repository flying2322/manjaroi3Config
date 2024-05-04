(function() {
    var libs, NotificationsControllerOps;
    libs = ["angular", "jquery", "notifications/module", "services/pageManager", "services/userManager", "services/proxyManager", "services/teleScope", "services/storage"], 
    NotificationsControllerOps = function(angular, jquery) {
        var NotificationsController, i;
        return NotificationsController = function($scope, $rootScope, $translate, $sce, $window, $location, $log, storage, userManager, pageManager, proxyManager, teleScope, MODES, ROLES, SERVERS_MODES, DATA_SAVING_MODES) {
        	$scope.notifications_loading = false;

		    teleScope.link('user.notifications').then(function() {
		    	$scope.notifications = $rootScope.user.notifications;

		    });

			$rootScope.$watch('user.notifications', function() {
                $scope.notifications_loading = false;
                $scope.notifications = $rootScope.user.notifications;
			});

            $scope.reload = setTimeout(function() {
                $scope.notifications_loading = true;
                userManager.reloadNotifications();

            }, 0);


            $scope.markHided = function(notification) {
                //alert(notification._id);
                userManager.markNotificationHided(notification._id, !notification.hided);

            };
			$scope.gotoPopup = function() {
				clearTimeout($scope.reload);
				userManager.markNotificationReaded();
				document.location.href = chrome.extension.getURL("/popup.html");
			};


		},

	    angular.module("notifications").controller("NotificationsController", ['$scope', '$rootScope', '$translate', '$sce', '$window', '$location', '$log', 'storage', 'userManager', 'pageManager', 'proxyManager', 'teleScope', 'MODES', 'ROLES', 'SERVERS_MODES', 'DATA_SAVING_MODES', NotificationsController]);
    }, 
    define(libs, NotificationsControllerOps)
}).call(this);