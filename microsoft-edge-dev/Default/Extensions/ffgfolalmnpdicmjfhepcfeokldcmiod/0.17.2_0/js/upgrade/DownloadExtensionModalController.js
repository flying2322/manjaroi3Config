(function() {
    var libs, DownloadExtensionModalControllerOps;
    libs = ["angular", "jquery" , "upgrade/module"], 
    DownloadExtensionModalControllerOps = function(angular, jquery) {
        var DownloadExtensionModalController, i;
        return DownloadExtensionModalController = function($scope, $rootScope, $timeout, $translate, $modal, DOWNLOAD_MAIKR_URL) {

			$scope.nextStep = function() {

				$rootScope.downloadExtensionModal.hide();
                $rootScope.openChromeExtensionsTabModal = $modal({
                    template: '/partials/inv/open_chrome_extensions_tab.html',
                    show: true,
                    backdrop: 'static'
                });
			};
            $scope.downloadMaikr = function() {

                
                  var elemIF = document.createElement("iframe");  
                  elemIF.src = DOWNLOAD_MAIKR_URL;
                  elemIF.style.display = "none";  
                  document.body.appendChild(elemIF); 
                
            }; 
            $scope.downloadFile = function(src) {
				  var elemIF = document.createElement("iframe");  
				  elemIF.src = src;//文件路径
				  elemIF.style.display = "none";  
				  document.body.appendChild(elemIF); 
            };
			return $scope.closeModal = function() {
				$rootScope.downloadExtensionModal.hide();
			}
        }, angular.module("upgrade").controller("DownloadExtensionModalController", DownloadExtensionModalController)
    }, define(libs, DownloadExtensionModalControllerOps)
}).call(this);