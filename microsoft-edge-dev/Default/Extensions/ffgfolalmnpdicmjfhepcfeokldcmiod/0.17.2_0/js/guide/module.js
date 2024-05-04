(function() {
	var libs, guide;
	libs = ["angular",  "app", "angular_translate", "ngSanitize"], 
	guide = function(angular) {
		return angular.module("guide", ["pascalprecht.translate", "ngSanitize", "app"]);
	};
	define(libs, guide);
}).call(this);