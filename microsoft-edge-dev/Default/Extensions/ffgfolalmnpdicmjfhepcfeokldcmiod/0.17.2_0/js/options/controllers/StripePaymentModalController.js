(function() {
    var libs, StripePaymentModalControllerOps;
    libs = ["angular", "jquery" , "options/module"], 
    StripePaymentModalControllerOps = function(angular, jquery) {
        var StripePaymentModalController, i;
        return StripePaymentModalController = function($scope, $rootScope, $timeout, $translate) {
			$scope.initAlertText = $translate.instant("options.change_password.init_alert");
			$scope.notShowAgainChecked = false;
			$scope.initAlertStyle = 'alert-info';
			$scope.alertText = $scope.initAlertText;
			$scope.alertStyle = $scope.initAlertStyle;

			var e = jquery("<ul><li><div class='bar'>bla</div></li></ul>");
			jquery('li', e).attr('id','a1234');  // set the attribute 
			jquery('#stripe-payment').append(e);
			//alert(jquery('#stripe-payment'));


			$scope.myHTML = '<div class="modal-body">fsafas<form action="" method="POST">' +
  '<script' +
    ' src="https://checkout.stripe.com/checkout.js" class="stripe-button"' +
    ' data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh" ' +
    ' data-amount="2000"' +
    ' data-name="Demo Site"' +
    ' data-description="2 widgets ($20.00)"' +
    ' data-image="/128x128.png"' +
    ' data-label="Pay with Card or Alipay"' +
    ' data-locale="auto"' +
    ' data-currency="usd"' +
    ' data-alipay="true">' +
  '</script>' +
'</form></div>';

			$scope.alert = function(msg) {
				$scope.alertText = msg;
				$scope.alertStyle = 'alert-danger';
				return $timeout(function() {
					$scope.alertText = $scope.initAlertText;
					return $scope.alertStyle = $scope.initAlertStyle
				},
				2 * 1000)
			};

            $scope.onSubmit = function() {
                //alert("onOk:"+$scope.notShowAgainChecked);
                //$scope.closeModal();
            };
            $scope.toggleNotShowAgain = function() {
                $scope.notShowAgainChecked = !$scope.notShowAgainChecked;
            };
			return $scope.closeModal = function() {
				$rootScope.stripePayModal.hide();
				return $rootScope.stripePayModal.destroy();
			}
        }, angular.module("options").controller("StripePaymentModalController", StripePaymentModalController)
    }, define(libs, StripePaymentModalControllerOps)
}).call(this);