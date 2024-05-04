(function() {
	var storage;
	storage = function() {
		this.set = (function(_this) {
			return function(key, val) {
				localStorage[key] = JSON.stringify(angular.copy(val));
				return val
			}
		})(this);
		this.get = (function(_this) {
			return function(key, defaultVal) {
				if (defaultVal == null) {
					defaultVal = void 0
				}
				if (localStorage[key] !== void 0 && localStorage[key] != 'undefined') {

					return JSON.parse(localStorage[key])
				} else {
					return defaultVal
				}
			}
		})(this);
		this.remove = (function(_this) {
			return function(key) {
				return localStorage.removeItem(key)
			}
		})(this);
		return this
	};
	define(['../app'], function(app) {
		return app.service('storage', storage)
	})
}).call(this);