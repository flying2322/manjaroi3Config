(function() {
    var libs, UserExchangeWheatModalControllerOps;
    libs = ["angular", "jquery" , "options/module"], 
    UserExchangeWheatModalControllerOps = function(angular, jquery) {
        var UserExchangeWheatModalController, i;
        return UserExchangeWheatModalController = function($scope, $rootScope, $timeout, $translate, $element, userManager) {
            $scope.initAlertText = $translate.instant("options.layout.exchange_wheat.init_alert");
            $scope.exchange_wheat_loading = false;
            $scope.showAlert = false;
            $scope.initAlertStyle = 'alert-info';
            $scope.alertText = $scope.initAlertText;
            $scope.alertStyle = $scope.initAlertStyle;

            $scope.selectedNum = 1;
            $scope.showExchangeInput = false;
            $scope.exchanging = false;
            $scope.num_options = [];

            $scope.wheats = $rootScope.user.wheats;


            $rootScope.$watch("user.exchangable_wheat", function() {
                $scope.exchange_wheat_loading = false;
                $scope.showAlert = false;
                $scope.exchangable_wheat = $rootScope.user.exchangable_wheat;
                
                if($scope.exchangable_wheat){
                    $scope.exchanging = false;
                    $scope.showExchangeInput = false;
                    $scope.num_options = [];
                    
                    for(var i = 1 ; i <= $scope.exchangable_wheat.exchangable_codes ; i++){
                        $scope.num_options.push(i);
                    }

                    if(!$scope.exchangable_wheat.error || $scope.exchangable_wheat.error ===''){
                        if($scope.exchangable_wheat.exchangable_wheat_score < $scope.exchangable_wheat.exchange_rate){
                            if($scope.exchangable_wheat.msg && $scope.exchangable_wheat.msg !==''){
                                $scope.initAlertText = $translate.instant("options.layout.exchange_wheat.init_alert_need_more") + $scope.exchangable_wheat.msg;
                            }
                            $scope.showAlert = true;
                        }else{
                            if($scope.exchangable_wheat.msg && $scope.exchangable_wheat.msg !==''){
                                $scope.initAlertText = $translate.instant("options.layout.exchange_wheat.init_alert") + $scope.exchangable_wheat.msg;
                                
                            }else{
                                $scope.initAlertText = $translate.instant("options.layout.exchange_wheat.init_alert");
                            }

                            $scope.showAlert = true;
                        }
                    }else{

                        if($scope.exchangable_wheat.error === 'OVERFLOW'){
                            $scope.initAlertText = $translate.instant("options.layout.exchange_wheat.alert_overflow");
                        }
                        $scope.initAlertStyle = 'alert-error';
                        $scope.showAlert = true;
                    }


                }

            });

            $scope.reload = setTimeout(function() {
                $scope.exchange_wheat_loading = true;
                userManager.reloadExchangeWheat();

            }, 0);


            $scope.exchange = function() {
                $scope.exchanging = true;
                //alert($scope.selectedNum);
                userManager.exchangeWheat($scope.selectedNum);
            };

            $scope.click_start_exchange = function() {

                $scope.showExchangeInput = true;
            };

            $scope.close = function() {
                $scope.closeModal();

            };
            return $scope.closeModal = function() {
                clearTimeout($scope.reload);
                $rootScope.userWheatsModal.hide();
                return $rootScope.userWheatsModal.destroy();
            }
        }, angular.module("options").controller("UserExchangeWheatModalController", ['$scope', '$rootScope', '$timeout', '$translate', '$element', 'userManager', UserExchangeWheatModalController])
    }, define(libs, UserExchangeWheatModalControllerOps)
}).call(this);