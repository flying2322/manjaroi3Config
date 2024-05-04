(function() {
    var scopeElement;
    scopeElement = function() {
        return {
            restrict: 'A',
            replace: false,
            link: function($scope, elem, attrs) {
                $scope[attrs.scopeElement] = elem[0];
            }
        }
    };
    define(['../app'], function(app) {
        return app.directive('scopeElement', scopeElement)
    })
}).call(this);