(function() {
    var libs, avatarUploaderDirective;
    libs = ["angular", "angular_translate", "options/module", "services/validate", "services/invitationManager", "services/userManager"], 
    avatarUploaderDirective = function(angular) {
        var avatarUploader;
        return avatarUploader = function($rootScope, $http, $timeout, $tooltip, $translate, $alert, invitationManager, userManager, validate, SERVER) {
			return {
				restrict: 'A',
				    link: function (scope, element, attrs) {
				      var onChangeFunc = scope.$eval(attrs.avatarUploader);
				      /*
				      element.bind('change', function(event){
				      	//alert("change");

				      });
*/
				      //alert("link");
				      element.bind('change', onChangeFunc);
				  }
			}
        }, angular.module("options").directive("avatarUploader", avatarUploader)
    }, define(libs, avatarUploaderDirective)
}).call(this);