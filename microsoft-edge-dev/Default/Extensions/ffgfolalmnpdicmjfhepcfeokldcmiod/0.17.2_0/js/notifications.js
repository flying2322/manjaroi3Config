(function() {
	var libs, notificationsRun, __indexOf = [].indexOf ||
	function(item) {
		for (var i = 0,
		l = this.length; i < l; i++) {
			if (i in this && this[i] === item) return i
		}
		return - 1
	};

	notificationsRun = function($location, teleScope, $rootScope, $timeout, track, $log, $translate, storage, proxyManager, LOCALES) {
		$translate.use(storage.get("currentLocale", LOCALES.preferredLocale));
		$timeout(function() {
			return track.pv('/chrome-extension/notifications')
		},
		500);

	};


	libs = ['underscore', 'angular', 'lang', 'ngRoute', "services/storage", 'ngAnimate', 'angular_translate', 'angular_strap', 'angular_strap_tpl', 'ngSanitize', 'services/domainUtils', 'services/teleScope', 'services/pageManager', 'services/domainManager', 'services/proxyManager', 'services/track', 'directives/languageSelect', 'core/filters/durationToNow', 'notifications/controllers/NotificationsController'];
	require(['config'],
	function() {
		return requireWithRetry(libs,
		function(_, angular, lang) {
			//preference = angular.module('preference', ['ngRoute', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.tooltip', 'pascalprecht.translate', 'app']);
			var notifications = angular.module('notifications');


			notifications.config(function($compileProvider, $routeProvider, $translateProvider) {

				lang.config($translateProvider);
				$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome):/);
				$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome):/);
				return $routeProvider.when('/notifications', {
					templateUrl: '/partials/notifications/notifications.html',
					controller: 'NotificationsController',
					resolve: {
						/*
						mode: function(teleScope) {
							return teleScope.link('mode')
						},
						*/
						/*
						servers_mode: function(teleScope) {
							return teleScope.link('servers_mode')
						},
						*/
						currentTab: function(teleScope) {
							return teleScope.link('currentTab')
						},
						blockedDomains: function(teleScope) {
							return teleScope.link('blockedDomains')
						},
						user: function(teleScope) {
							return teleScope.link('user')
						}
					}
				}).otherwise({
					redirectTo: '/notifications'
				})
			});
			notifications.run(notificationsRun);
			notifications.controller({
				//SettingsController: SettingsController,
				//AddController: AddController,
				//ConflictController: ConflictController,
				//FooterController: FooterController
			});
			return angular.element(document).ready(function() {
				return angular.bootstrap(document, ['notifications'])
			})
		})
	})
}).call(this);