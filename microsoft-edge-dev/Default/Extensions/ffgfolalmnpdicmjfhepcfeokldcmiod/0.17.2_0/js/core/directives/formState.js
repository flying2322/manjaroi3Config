(function() {
    var angular, formState;
    angular = ["angular", "app"], formState = function(angular) {
        var formState;
        return formState = function() {
            return {
                restrict: "A",
                link: function(scope, elem, attrs) {
                    var divs, field, fieldName, form, hasError, hasSuccess, helpBlock, i, input, f, v, _ref1;
                    for (v = attrs.formState.split("."), form = v[0], fieldName = v[1], 
                        field = function() {
                            return scope[form][fieldName]
                        }, 
                        helpBlock = null, divs = elem.find("div"), i = f = 0, _ref1 = divs.length; _ref1 >= 0 ? _ref1 >= f : f >= _ref1; i = _ref1 >= 0 ? ++f : --f)
                        
                        if (divs.eq(i).hasClass("errors")) {
                            helpBlock = divs.eq(i);
                            break
                        }

                    return input = elem.find("input"), input.on("keydown", function() {
                        return field() ? (field().$stateVisible = !1, scope.$apply()) : void 0
                    }).on("blur", function() {
                        return field() && field().$dirty ? (field().$stateVisible = !0, scope.$apply()) : void 0
                    }), 
                    hasError = function(scope) {
                        return scope[form][fieldName].$stateVisible && scope[form][fieldName].$invalid
                    }, 
                    hasSuccess = function(scope) {
                        var e;
                        return scope[form][fieldName].$stateVisible && (null != (e = field()) ? e.$valid : void 0)
                    }, 
                    scope.$watch(hasError, function(newValue, oldValue) {
                        if (newValue) {
                            elem.addClass('has-error');
                            return helpBlock.removeClass('invisible')
                        } else {
                            elem.removeClass('has-error');
                            return helpBlock.addClass('invisible')
                        }
                    }), 
                    scope.$watch(hasSuccess, function(newValue, oldValue) {
                        if (newValue) {
                            return elem.addClass('has-success')
                        } else {
                            return elem.removeClass('has-success')
                        }
                    })
                }
            }
        }, angular.module("app").directive("formState", formState)
    }, define(angular, formState)
}).call(this);