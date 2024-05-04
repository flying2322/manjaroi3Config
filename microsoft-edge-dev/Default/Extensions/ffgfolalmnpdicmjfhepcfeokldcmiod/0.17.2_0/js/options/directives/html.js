(function() {
    var libs, html;
    libs = ["underscore", "angular", "angular_translate", "options/module"], 
    html = function(_, angular) {
        var htmlDirective;
        return htmlDirective = function($rootScope, $translate) {
			return {
			   restrict: 'A',
			    link: function (scope, element, attrs) {
			      element.html(attrs.html);
			    }
			}
        }, 
        angular.module("options").directive("html", htmlDirective)
    }, define(libs, html)
}).call(this);