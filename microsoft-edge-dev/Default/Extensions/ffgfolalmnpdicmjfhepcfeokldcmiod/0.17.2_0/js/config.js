(function() {
    requirejs.config({
        baseUrl: '/js',
        paths: {
            jquery: 'libs/jquery-1.8.2.min',
            jquery_ui: 'libs/jquery-ui-1.9.1',
            angular: 'libs/angular/angular',

            //angular_route: 'libs/angular/angular-route',
            ngRoute: "libs/angular/angular-route",
            //angular_animate: 'libs/angular/angular-animate',
            ngAnimate: "libs/angular/angular-animate",

            //angular_sanitize: 'libs/angular/angular-sanitize',
            ngSanitize: "libs/angular/angular-sanitize",

            angular_strap: 'libs/angular/angular-strap',
            angular_strap_tpl: 'libs/angular/angular-strap.tpl',

            angular_ui_router: 'libs/angular/angular-ui-router',
            angular_ui_utils: 'libs/angular/ui-utils',
            angular_raven: 'libs/angular/angular-raven',
            angular_ui_keypress: 'libs/angular/angular-ui-keypress',
            angular_translate: "libs/angular/angular-translate",
            angular_log_ex: 'libs/angular/log-ex-unobtrusive',

            underscore: 'libs/underscore-min',
            raven: 'libs/raven',
            bootstrap: 'libs/bootstrap.min',
            md5: 'libs/md5',
            sha512: 'libs/sha512',
            lz_string: 'libs/lz-string',
            cidr: 'libs/cidr',
            debug: 'libs/debug',


        },
        shim: {
            underscore: {
                exports: '_'
            },
            raven: {
                exports: 'Raven'
            },
            angular: {
                exports: 'angular'
            },
            md5: {
                exports: 'md5'
            },
            sha512: {
                exports: 'sha512'
            },
            cidr: {
                exports: 'cidr'
            },
            angular_raven: {
                deps: ['angular', 'raven']
            },
            ngRoute: {
                deps: ['angular']
            },
            angular_ui_router: {
                deps: ['angular']
            },
            angular_ui_keypress: {
                deps: ['angular']
            },
            angular_ui_utils: {
                deps: ['angular']
            },
            angular_log_ex: {
                deps: ['angular']
            },
            ngSanitize: {
                deps: ['angular']
            },
            ngAnimate: {
                deps: ['angular']
            },          
            angular_strap: {
                deps: ['angular', 'ngAnimate']
            },
            angular_strap_tpl: {
                deps: ['angular_strap']
            },
            angular_translate: {
                deps: ["angular"]
            },
            bootstrap: {
                deps: ['jquery']
            },
            jquery_ui: {
                deps: ['jquery']
            }
        }
    });
    this.requireWithRetry = function(libs, callback) {
        var tryRequire;
        tryRequire = function(libs, callback, retryInterval, retryLimit) {
            var retryCount, retryOnError;
            retryInterval = retryInterval || 10000;
            retryLimit = retryLimit || 10;
            retryCount = 0;
            retryOnError = function(err) {
                var failedId, lastReloadTime, msg, now, _i, _len, _ref;
                msg = "new load script fail error";
                /*
                Raven.captureMessage(msg, {
                    tags: {
                        retryCount: retryCount,
                        failLength: err.requireModules.length
                    }
                });
                */
                lastReloadTime = localStorage.getItem('lastReloadTime') || 0;
                now = new Date();
                if (now.getTime() - lastReloadTime > 10 * 60 * 1000) {
                    localStorage.setItem('lastReloadTime', now.getTime());
                    return location.reload()
                } else {
                    if (retryCount < retryLimit) {
                        _ref = err.requireModules;
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            failedId = _ref[_i];
                            require.undef(failedId)
                        }
                        retryCount++;
                        return setTimeout(function() {
                            return require(libs, callback, retryOnError)
                        }, retryInterval)
                    }
                }
            };
            return require(libs, callback, retryOnError)
        };
        return setTimeout(function() {
            return tryRequire(libs, callback)
        }, 50)
    };
    if (!chrome.runtime.onMessage) {
        chrome.runtime.onMessage = chrome.extension.onMessage;
        chrome.runtime.sendMessage = chrome.extension.sendMessage;
        chrome.runtime.onConnect = chrome.extension.onConnect;
        chrome.runtime.connect = chrome.extension.connect
    }
    this
}).call(this);