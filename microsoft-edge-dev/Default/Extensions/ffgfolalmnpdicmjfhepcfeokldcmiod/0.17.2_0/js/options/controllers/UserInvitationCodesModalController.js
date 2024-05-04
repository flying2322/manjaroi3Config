(function() {
    var libs, UserInvitationCodesModalControllerOps;
    libs = ["angular", "jquery" , "options/module"], 
    UserInvitationCodesModalControllerOps = function(angular, jquery) {
        var UserInvitationCodesModalController, i;
        return UserInvitationCodesModalController = function($scope, $rootScope, $timeout, $translate, $element, $modal, userManager) {
            $scope.initAlertText = $translate.instant("options.layout.exchange_wheat.init_alert");
            $scope.exchange_wheat_loading = false;
            $scope.showAlert = false;
            $scope.initAlertStyle = 'alert-info';
            $scope.alertText = $scope.initAlertText;
            $scope.alertStyle = $scope.initAlertStyle;

            $scope.invitation_codes_loading = false;

            $scope.invitation_codes = [];
            $rootScope.$watch("user.invitation_codes", function() {
                $scope.invitation_codes_loading = false;
                if(!$rootScope.user.invitation_codes) return;
                
                $scope.invitation_codes = $rootScope.user.invitation_codes;
                for(var i = 0 ; i < $scope.invitation_codes.length ; i++){
                    var expired = $scope.invitation_codes[i].expired;
                    var allowance = $scope.invitation_codes[i].allowance;
                    var used_times = $scope.invitation_codes[i].used_times;
                    $scope.invitation_codes[i].active = !expired && ((allowance > 0 && used_times < allowance) || allowance == 0);
                    //console.log($scope.invitation_codes[i].active);
                }
            });

            $scope.reload = setTimeout(function() {
                $scope.invitation_codes_loading = true;
                userManager.reloadInvitationCodes();
            }, 0);
            /*
                    $rootScope.user.invite_url_prefix = data.invite_url_prefix;
                    $rootScope.user.invite_url_suffix = data.invite_url_suffix;
                    $rootScope.user.invite_qrcode_url_prefix = data.invite_qrcode_url_prefix;
                    $rootScope.user.invite_qrcode_url_suffix = data.invite_qrcode_url_suffix;*/
            $scope.showLink = function(id){
                var title = $translate.instant('options.layout.invitation_codes.invite_by_url_title');
                var url = $rootScope.user.invite_url_prefix + id + $rootScope.user.invite_url_suffix;
                var msg = '<a http="' + url + '">' + url + '</a>';
                Swal({
                    type: 'info',
                    title: title,
                    html: msg
                });

            };
            $scope.showInviteEmailModal = function(id){
                $rootScope.user.selectedInvitationCode = id;
                $rootScope.inviteEmailModal = $modal({
                    templateUrl: "partials/options/modals/invite_email.html",
                    animation: 'am-fade-and-slide-top',
                    backdrop: true,
                    show: true,
                    scope : $scope
                });
            };

            $scope.showInviteQrcodeModal = function(id){
                $rootScope.user.selectedInvitationCode = id;
                $rootScope.inviteQRCodeModal = $modal({
                    templateUrl: "partials/options/modals/invite_qrcode.html",
                    animation: 'am-fade-and-slide-top',
                    backdrop: true,
                    show: true,
                    scope : $scope
                });
            };

            $scope.close = function() {
                $scope.closeModal();

            };
            return $scope.closeModal = function() {
                clearTimeout($scope.reload);
                $rootScope.userInvitationCodesModal.hide();
                return $rootScope.userInvitationCodesModal.destroy();
            }
        }, angular.module("options").controller("UserInvitationCodesModalController", ['$scope', '$rootScope', '$timeout', '$translate', '$element', '$modal', 'userManager', UserInvitationCodesModalController])
    }, define(libs, UserInvitationCodesModalControllerOps)
}).call(this);