(function() {
	var injectorManager;
	injectorManager = function($rootScope, storage, VER) {
		this.init = function() {
			chrome.webRequest.onBeforeSendHeaders.addListener((function(_this) {
				return function(details) {
					var url = details.url;
					var sid = $rootScope.user.profile.sid;
					if($rootScope.hiddenDomains && $rootScope.hiddenDomains.length > 0){
						//console.log("$rootScope.hiddenDomains:"+$rootScope.hiddenDomains.length);
						var i;
						for(i = 0 ; i < $rootScope.hiddenDomains.length ; i++){
							var domain = $rootScope.hiddenDomains[i].name;
							//console.log("$rootScope.hiddenDomains domain:"+domain);
							if(url.indexOf(domain) > 0){
								details.requestHeaders.push({
									name: 'RA-Sid',
									value: sid
								});
								//console.log("$rootScope.hiddenDomains:"+sid);
							}
						}
					}
					return {
						'requestHeaders': details.requestHeaders
					}
					/*
					var sid;
					sid = $rootScope.user.profile.sid;
					details.requestHeaders.push({
						name: 'RA-Ver',
						value: VER
					});
					details.requestHeaders.push({
						name: 'RA-Sid',
						value: sid
					});
					return {
						'requestHeaders': details.requestHeaders
					}
					*/
				}
			})(this), {
				urls: ["<all_urls>"]
			}, ['blocking', 'requestHeaders']);
			/*
			chrome.webRequest.onBeforeSendHeaders.addListener((function(_this) {
				return function(details) {
					var sid;
					sid = $rootScope.user.profile.sid;
					details.requestHeaders.push({
						name: 'RA-Ver',
						value: VER
					});
					details.requestHeaders.push({
						name: 'RA-Sid',
						value: sid
					});
					return {
						'requestHeaders': details.requestHeaders
					}
				}
			})(this), {
				urls: ["<all_urls>"]
			}, ['blocking', 'requestHeaders']);
			*/
		};
		return this
	};
	define(['../app', './storage'], function(app) {
		return app.service('injectorManager', injectorManager)
	})
}).call(this);