(function() {
    var focusMe;
    focusMe = function($timeout) {
        return {
            restrict: 'A',
            scope: {
                focusTrigger: '=focusMe'
            },
            link: function (scope, element, attrs, model) {                
                $timeout(function () {
                    element[0].focus();
                });
            }
        }
    };
    define(['../app'], function(app) {
        return app.directive('focusMe', focusMe)
    })
}).call(this);