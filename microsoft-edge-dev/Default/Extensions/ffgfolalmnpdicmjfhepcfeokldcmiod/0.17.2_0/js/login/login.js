(function() {
	var libs, login;
	libs = ["underscore", "angular", "lang", "ngRoute", "services/storage", "angular_translate", "angular_ui_keypress", "login/module", "core/directives/equals", "directives/formState", "directives/focusBind", "login/controllers/LoginPageController",  "login/controllers/LoginController", "login/controllers/RegisterController", "login/controllers/TrialController", "login/controllers/EmailVerificationModalController", "login/controllers/VersionExpiredModalController", "login/controllers/ForgetPasswordModalController", "login/controllers/ServerAddressModalController", "directives/languageSelect", "directives/focusMe"], 
	login = function(_, angular, lang) {
		
		return angular.module("login").config(function($routeProvider, $translateProvider) {
			
			lang.config($translateProvider);

			return $routeProvider.when("/login", {
				templateUrl: "/partials/login/login.html",
				controller: "LoginController",
				resolve: {
				user: function(teleScope) {
							return teleScope.link('user')
				},
				wsConnected: function(teleScope) {
						return teleScope.link('wsConnected')
					}
				}
					
			}).when("/trial", {
				templateUrl: "/partials/login/trial.html",
				controller: "TrialController"
			}).when("/register", {
				templateUrl: "/partials/login/register.html",
				controller: "RegisterController"
			}).otherwise({
				redirectTo: "/login"
			})

		}).run(function($rootScope,  $log, $translate, teleScope, storage, LOCALES){
			var lang = storage.get("currentLocale", "");
			lang = (lang === "") ? window.navigator.language : lang;
			$translate.use(storage.get("currentLocale", LOCALES.preferredLocale));
			
			if(lang.startsWith('zh')){
				$translate.use("zh_CN");
				storage.set("currentLocale", "zh_CN");
			}else{
				$translate.use("en_US");
				storage.set("currentLocale", "en_US");
			}
		}),
		angular.element(document).ready(function() {

			return angular.bootstrap(document, ["login"])
		});
	};

	require(["../config"], function() {
		return requireWithRetry(libs, login)
	});

}).call(this);