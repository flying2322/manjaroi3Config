(function() {
    var localeService;
    localeService = function($rootScope, $translate, storage, LOCALES) {
        'use strict';
        // PREPARING LOCALES INFO
        var localesObj = LOCALES.locales;

        // locales and locales display names
        var _LOCALES = Object.keys(localesObj);
        if (!_LOCALES || _LOCALES.length === 0) {
            console.error('There are no _LOCALES provided');
        }
        var _LOCALES_DISPLAY_NAMES = [];
        _LOCALES.forEach(function(locale) {

            _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
        });

        // STORING CURRENT LOCALE
        //var currentLocale = $translate.use(); // because of async loading
        var currentLocale = storage.get("currentLocale", LOCALES.preferredLocale);
        // METHODS
        var checkLocaleIsValid = function(locale) {
            return _LOCALES.indexOf(locale) !== -1;
        };

        var setLocale = function(locale) {
            if (!checkLocaleIsValid(locale)) {
                console.error('Locale name "' + locale + '" is invalid');
                return;
            }
            currentLocale = locale; // updating current locale

            // asking angular-translate to load and apply proper translations
            $translate.use(locale);

            storage.set("currentLocale", locale);
        };

        // EVENTS
        // on successful applying translations by angular-translate
        $rootScope.$on('$translateChangeSuccess', function(event, data) {
            document.documentElement.setAttribute('lang', data.language); // sets "lang" attribute to html

            // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
            //tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
        });

        return {
            getLocaleDisplayName: function() {
                return localesObj[currentLocale];
            },
            setLocaleByDisplayName: function(localeDisplayName) {
                var index = _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName);
                if(index < 0) return;
                var locale = _LOCALES[index];
                setLocale(locale);
                return locale;
            },
            setLocale: function(newLocale) {
                var index = _LOCALES.indexOf(newLocale);
                if(index < 0) return;
                var locale = _LOCALES[index];
                setLocale(locale);
                return locale;
            },
            getLocalesDisplayNames: function() {
                return _LOCALES_DISPLAY_NAMES;
            }
        };
    };
    define(['../app', 'underscore', './storage'], function(app, _) {
        return app.service('localeService', localeService)
    })
}).call(this);