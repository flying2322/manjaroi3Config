(function() {
    var libs, UserNotificationModalControllerOps;
    libs = ["angular", "jquery" , "options/module"], 
    UserNotificationModalControllerOps = function(angular, jquery) {
        var UserNotificationModalController, i;
        return UserNotificationModalController = function($scope, $rootScope, $timeout, $translate, $element, userManager, pageManager) {
            $scope.initAlertText = $translate.instant("options.change_password.init_alert");
            $scope.notShowAgainChecked = false;
            $scope.notifications_loading = false;
            $scope.initAlertStyle = 'alert-info';
            $scope.alertText = $scope.initAlertText;
            $scope.alertStyle = $scope.initAlertStyle;

            $scope.notifications = $rootScope.user.notifications;

            $rootScope.$watch("user.notifications", function() {
                $scope.notifications_loading = false;
                $scope.notifications = $rootScope.user.notifications;

            });

            $scope.reload_notifications = function(notification) {
                $scope.notifications_loading = true;
                userManager.reloadNotifications();

                setTimeout(function() {
                    $scope.notifications_loading = false;
                }, 5000);
            };

            $scope.reload = setTimeout(function() {
                $scope.notifications_loading = true;
                userManager.reloadNotifications();

            }, 0);
/*
            $scope.notifications = function() {
                return $rootScope.user.notifications;
            };
*/
            $scope.clickable = function(notification) {
                if($scope.isRegister(notification)) return true;
                if(notification.hasContent) return true;
                if(notification.content_url && notification.content_url !== '') return true;
                return false;
            };
            $scope.notification_click = function(notification) {
                if(!notification.hasContent) return;
                if(!notification.content_url || notification.content_url === '') return;
                pageManager.openUrl(notification.content_url);
            };
            $scope.isRegister = function(notification) {
                if(notification.name==='new_register_vip' || notification.name==='new_register_user' || notification.name==='new_register_guest'){
                    return true;
                }
                return false;
            };

            $scope.markHided = function(notification) {
                userManager.markNotificationHided(notification._id, !notification.hided);
            };
            $scope.markThumbup = function(notification) {
                userManager.markNotificationThumbup(notification._id, !notification.thumbup);
                //notification.thumbup = true;
                //$scope.$apply(function () { });
            };
            $scope.markThumbdown = function(notification) {
                //alert(notification._id);
                userManager.markNotificationThumbdown(notification._id, !notification.thumbdown);
                //notification.thumbdown = true;
                //$scope.$apply(function () { });
            };      

            $scope.close = function() {
                $scope.closeModal();

            };
            return $scope.closeModal = function() {
                clearTimeout($scope.reload);
                userManager.markNotificationReaded();
                $rootScope.userNotificationModal.hide();
                return $rootScope.userNotificationModal.destroy();
            }
        }, angular.module("options").controller("UserNotificationModalController", ['$scope', '$rootScope', '$timeout', '$translate', '$element', 'userManager', 'pageManager', UserNotificationModalController])
    }, define(libs, UserNotificationModalControllerOps)
}).call(this);