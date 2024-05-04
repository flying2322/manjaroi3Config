(function() {
    var libs, languageSelectDirective;
    libs = ["angular", "angular_translate", "../app", "../services/localeService"], 
    languageSelectDirective = function(angular) {
        var languageSelect;
        return languageSelect = function($rootScope, $http, $timeout, $tooltip, $translate, localeService) {
			return {
			    restrict: 'E',
			    replace: true,
			    templateUrl: 'partials/directive/languageSelect.html',

			    controller: function($scope) {

			        $scope.currentLocaleDisplayName = localeService.getLocaleDisplayName();
			        $scope.localesDisplayNames = localeService.getLocalesDisplayNames();
			        $scope.visible = $scope.localesDisplayNames &&
			            $scope.localesDisplayNames.length > 1;

			        $scope.changeLanguage = function(locale) {
			            localeService.setLocaleByDisplayName(locale);
			            $scope.currentLocaleDisplayName = locale;
			        };
			    }
			};
        }, angular.module("app").directive("languageSelect", languageSelect)
    }, define(libs, languageSelectDirective)
}).call(this);