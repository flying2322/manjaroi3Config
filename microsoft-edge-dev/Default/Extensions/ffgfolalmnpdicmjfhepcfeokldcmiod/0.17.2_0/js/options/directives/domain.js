(function() {
    var libs, domain;
    libs = ["underscore", "angular", "angular_translate", "options/module", "services/validate", "services/domainManager"], 
    domain = function(_, angular) {
        var domainDirective;
        return domainDirective = function($rootScope, validate, domainManager, $translate) {
			return {
				restrict: 'E',
				scope: {
					domain: '=',
					status: '='
				},
				templateUrl: 'partials/options/domain.html',
				link: function(scope) {
					scope.edition = {
						name: ''
					};
					scope.updateDomain = function() {
						var domain, newName;
						domain = scope.domain;
						newName = scope.edition.name.trim();
						if (domain.name !== newName && validate.domainOrDomainPart(newName)) {
							var nDomain;
							if(scope.status == null || scope.status !== 'reject'){
								nDomain = _.findWhere($rootScope.domains, {name: newName});
							}else{
								nDomain = _.findWhere($rootScope.rejectDomains, {name: newName});
							}
							console.log("updateDomain:" + nDomain);
							if (nDomain) {
								console.log("updateDomain:" + nDomain._deleted);
								if(nDomain._deleted){
									if(scope.status == null || scope.status !== 'reject'){
										domainManager.update(domain.name, newName);
									}else{
										domainManager.updateRejectDomain(domain.name, newName);
									}
									
									return scope.editing = false
								}else{
									return alert($translate.instant("options.domain.already_added"))
								}
								
							} else {
									if(scope.status == null || scope.status !== 'reject'){
										domainManager.update(domain.name, newName);
									}else{
										domainManager.updateRejectDomain(domain.name, newName);
									}
								return scope.editing = false
							}
						} else {
							return alert($translate.instant("options.domain.enter_correct_domain"))
						}
					};
					scope.deleteDomain = function() {
						
						if(scope.status == null || scope.status !== 'reject'){
							return domainManager.del(scope.domain.name)
						}else{
							return domainManager.delRejectDomain(scope.domain.name)
						}
					};
					return scope.edit = function(toggle) {
						if (toggle == null) {
							toggle = true
						}
						if (toggle) {
							scope.edition.name = scope.domain.name;
							scope.editing = true;
							return scope.focusInput = true
						} else {
							return scope.editing = false
						}
					}
				}
			}
        }, angular.module("options").directive("domain", domainDirective)
    }, define(libs, domain)
}).call(this);