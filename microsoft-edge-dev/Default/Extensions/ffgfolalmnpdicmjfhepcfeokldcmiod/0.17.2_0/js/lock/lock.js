(function() {
    var libs;
    libs = ["underscore", "angular", "lang", "lock/module", "lock/LockPageController", "angular_translate", "services/pageManager", "services/userManager", "services/validate", "services/server", "services/generate", "services/storage", "services/teleScope", "directives/formState", 'directives/languageSelect'], 
    
    require(["../config"], 
    function() {
        return requireWithRetry(libs, 
        function(_, angular, lang) {
            var lock = angular.module('lock');
            lock.config(function($translateProvider) {
                return lang.config($translateProvider)
            });
            lock.run(function($rootScope,  $log, $translate, storage, LOCALES){
                $translate.use(storage.get("currentLocale", LOCALES.preferredLocale));
            });
            return angular.element(document).ready(function() {
                return angular.bootstrap(document, ['lock'])
            });
        });
    });
}).call(this);