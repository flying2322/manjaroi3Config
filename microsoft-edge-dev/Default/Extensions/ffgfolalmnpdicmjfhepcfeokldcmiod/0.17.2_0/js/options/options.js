(function() {
	var libs, options;
	libs = ["underscore", "angular", "lang", "options/module", "core/filters/durationToNow", "angular_ui_router", "angular_ui_keypress", "angular_translate", "angular_ui_utils", "angular_strap_tpl", "ngSanitize", "services/teleScope", "services/invitationManager", "services/userManager", "services/domainUtils", "services/pageManager", "services/domainManager", "services/generate", "services/validate", "directives/focusBind", "directives/resizeIframe", "directives/formState", "options/controllers/OptionsPageController"], 
	options = function(_, angular, lang) {
		var module = angular.module("options");
		module.run(function($templateCache){
				var t = '<ul tabindex="-1" class="dropdown-menu" role="menu">\n    <li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content">\n        <a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" ng-bind="item.text"></a>\n        <a role="menuitem" tabindex="-1" href="" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a>\n    </li>\n</ul>';
				return $templateCache.put("dropdown/safeDropdown.tpl.html", t);
		});
		module.config(function($compileProvider, $stateProvider, $urlRouterProvider, $dropdownProvider, $translateProvider) {

				lang.config($translateProvider);

				$compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https?|ftp|mailto|chrome-extension):/);
				$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|data|chrome-extension):/);
				angular.extend($dropdownProvider.defaults, {
					templateUrl: 'dropdown/safeDropdown.tpl.html'
				});
				/*
				$urlRouterProvider.when('/', '/domains');
				$stateProvider.state('main', {
					url: '/',
					templateUrl: "/partials/options/layout.html",
					controller: "OptionsPageController",
					resolve: {
						user: function(teleScope) {
							return teleScope.link('user')
						},
						averageStability: function(teleScope) {
							return teleScope.link('averageStability')
						}
					}
				}).state('main.domains', {
					url: 'domains',
					templateUrl: '/partials/options/domain_list.html',
					controller: 'DomainListController',
					resolve: {
						domains: function(teleScope) {
							return teleScope.linkList('domains')
						}
					}
				});
*/
				return $urlRouterProvider.otherwise('domains');
				/*
				$urlRouterProvider.when('/', '/domain_list');
				$stateProvider.state('main', {
					url: '/',
					templateUrl: '/partials/options/_main.html',
					controller: 'MainController',
					resolve: {
						user: function(teleScope) {
							return teleScope.link('user')
						},
						averageStability: function(teleScope) {
							return teleScope.link('averageStability')
						}
					}
				}).state('main.trades', {
					url: 'trades',
					templateUrl: '/partials/options/_trade_list.html',
					controller: 'TradeListController'
				}).state('main.domains', {
					url: 'domains',
					templateUrl: '/partials/options/_domain_list.html',
					controller: 'DomainListController',
					resolve: {
						domains: function(teleScope) {
							return teleScope.linkList('domains')
						}
					}
				}).state('main.invitations', {
					url: 'invitations',
					templateUrl: '/partials/options/_invitation.html',
					controller: 'InvitationController'
				}).state('main.blog', {
					url: 'blog',
					templateUrl: '/partials/options/_blog.html'
				});
				return $urlRouterProvider.otherwise('domains');
				*/
		})
	/*
		angular.element(document).ready(function() {
	            return angular.bootstrap(document, ["options"])
	    });
*/
	    return module;
		
	}, require(["../config"], function() {
        return requireWithRetry(libs, options)
    })
}).call(this);