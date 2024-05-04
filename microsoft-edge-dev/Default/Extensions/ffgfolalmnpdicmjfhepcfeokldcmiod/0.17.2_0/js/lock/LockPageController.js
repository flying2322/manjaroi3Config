(function() {
    var libs, LockPageControllerOps;
    libs = ["angular", "jquery", "lock/module", "services/userManager", "services/pageManager",  "services/validate", "services/storage", "services/teleScope", "services/generate", "services/server"], 
    LockPageControllerOps = function(angular, jquery) {
        var LockPageController, i;
        return LockPageController = function($scope, $rootScope, $translate, $sce, $location, $http, $timeout, userManager, pageManager, validate, storage, teleScope, generate, server, SERVER, REST_CONTEXT_PATH, VER) {

			$scope.search = function() {
				return $location.search()
			};
            SERVER.scheme =      storage.get('lastServer_scheme', '');
            SERVER.host   =      storage.get('lastServer_host', '');
            SERVER.port   =      storage.get('lastServer_port', 0);
            SERVER.contextPath = storage.get('lastServer_contextPath', '');

            
            var n = storage.get('n', '');
            var p = storage.get('p', '');

	        teleScope.link('user');
			$scope.submitting = false;
			$scope.oneKeyLogin = function() {
				
				if(!$rootScope.user.profile.kicked){
					return alert("invalid state");
				}
				
				$scope.submitting = true;
				$scope.login.name.$stateVisible = true;
				//$scope.login.name.$setValidity("notExisted", false);
				//alert($scope.login.name.$setValidity);
				
                if(!SERVER.host || SERVER.host === ''){
                    return $scope.logout();
                }

				$http({
				    method: 'POST',
                            url: SERVER.scheme + SERVER.host + SERVER.contextPath + REST_CONTEXT_PATH + "/user/login_post",

                            data: $.param({
                                n: n,
                                p: p,
                                v: generate.md5(VER),
                                f: true,
                                l: $translate.use(),
                                h: SERVER.host.hexEncode(),
                                s: !SERVER.scheme.startsWith("https") ? false : true
                            }),
				    headers: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    }
				}).success(function(resp) {
                            if (resp.error) {

                                if("VER" === resp.error){
                                    $scope.openVersionExpired();
                                    return;
                                }

                                if ("PASSWORD" === resp.error) {
                                    $scope.login.password.$setValidity("mismatch", false);
                                    $scope.focuses.password = true;
                                } else if ("NAME" === resp.error) {
                                    $scope.login.name.$setValidity("notExisted", false);
                                    $scope.focuses.name = true;
                                } else if("SESSIONS" === resp.error){
                                    storage.set('rememberChecked', $scope.rememberChecked);

                                    var afterSigninData = {
                                        lastServer_scheme: SERVER.scheme || '',
                                        lastServer_host: SERVER.host || '',
                                        lastServer_port: SERVER.port || 0,
                                        lastServer_contextPath: SERVER.contextPath || '',
                                        n : $scope.name,
                                        p : $scope.password,
                                        ip : resp.ip || '',
                                        ip_region : resp.ip_region || '',
                                        port: resp.port || 0
                                    };

                                    userManager.saveSigninData(afterSigninData, resp);
                                    resp.name = $scope.name;
                                    resp.kicked = true;
                                    userManager.load(resp);
                                    pageManager.gotoKickSessions();

                                } else{
                                    alert(resp.message)
                                }
                                $scope.submitting = false;
                                return $scope.disableInput = false;
                            }


                            storage.set('rememberChecked', $scope.rememberChecked);

                            var afterSigninData = {
                                lastServer_scheme: SERVER.scheme || '',
                                lastServer_host: SERVER.host || '',
                                lastServer_port: SERVER.port || 0,
                                lastServer_contextPath: SERVER.contextPath || '',
                                n: n.hexDecode(),
                                p: p,
                                ip: resp.ip || '',
                                ip_region : resp.ip_region || '',
                                port: resp.port || 0
                            };
                            userManager.saveSigninData(afterSigninData, resp);

                            storage.set('p', p);
                            //resp.name = 'guest';
                            //userManager.load(resp);
                            userManager.setSid(resp.sid);

                            $rootScope.signin =false;
                            teleScope.link('signin');
                            userManager.checkin(resp.apiUrl).then(function() {
                                    
                                $rootScope.$watch('signin', function() {
            
                                    if ($rootScope.signin) {
                                        pageManager.gotoOptions();
                                        track.pv("/chrome-extension/login/success");
                                    }

                                }, true);
                            });
                    /*
                            if (resp.error) {
                                if ("PASSWORD" === resp.error) {
                                    $scope.login.password.$setValidity("mismatch", false);
                                    $scope.focuses.password = true;
                                } else if ("NAME" === resp.error) {
                                    $scope.login.name.$setValidity("notExisted", false);
                                    $scope.focuses.name = true;
                                } else {
                                    alert(resp.message)
                                }
                                return $scope.disableInput = false;
                            }

                            var afterSigninData = {
                                lastServer_scheme: SERVER.scheme || '',
                                lastServer_host: SERVER.host || '',
                                lastServer_port: SERVER.port || 0,
                                lastServer_contextPath: SERVER.contextPath || '',
                                n: $scope.name,
                                p: $scope.password,
                                ip: resp.ip || '',
                                port: resp.port || 0
                            };
                            userManager.saveSigninData(afterSigninData, resp);

                            resp.name = 'guest';
                            userManager.load(resp);

                            $rootScope.signin =false;
                            teleScope.link('signin');
                            userManager.checkin(resp.apiUrl).then(function() {
                                    
                                $rootScope.$watch('signin', function() {
            
                                    if ($rootScope.signin) {
                                        pageManager.gotoOptions();
                                        track.pv("/chrome-extension/login/success");
                                    }

                                }, true);
                            });
                    */
				}).error(function() {
                    //return $scope.login.name.$setValidity("server", false);
                        //alert($scope.betweenCertInterval() ? ERROR_LOGIN_UNKNOWN : ERROR_LOGIN_TIME)
				})["finally"](function() {
                    $scope.submitting = false;
                })

			};
            $scope.openVersionExpired = function() {
                $rootScope.versionExpiredModal = $modal({
                    template: 'partials/login/modals/version_expired.html',
                    backdrop: false,
                    show: true,
                    scope : $scope
                });

            };
			$scope.logout = function() {
                userManager.logout();
                pageManager.gotoLogin('logout');
				//return pageManager.redirectUrl("login.html#/?source=logout")
			}
			

		},

	    angular.module("lock").controller("LockPageController", ['$scope', '$rootScope', '$translate', '$sce', '$location', '$http', '$timeout', 'userManager', 'pageManager', 'validate', 'storage', 'teleScope', 'generate', 'server', 'SERVER', 'REST_CONTEXT_PATH', 'VER', LockPageController]);
    }, 
    define(libs, LockPageControllerOps)
}).call(this);