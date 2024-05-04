(function() {
    var libs, ipRule;
    libs = ["underscore", "angular", "angular_translate", "options/module", "services/validate", "services/domainManager"], 
    ipRule = function(_, angular) {
        var ipRuleDirective;
        return ipRuleDirective = function($rootScope, validate, domainManager, $translate) {
			return {
				restrict: 'E',
				scope: {
					ipRule: '=',
					status: '='
				},
				templateUrl: 'partials/options/ip_rule.html',
				link: function(scope) {

					scope.edition = {
						name: ''
					};
					scope.updateIpRule = function() {
						var ipRule, newName;
						ipRule = scope.ipRule;
						newName = scope.edition.name.trim();
						if (ipRule.name !== newName && validate.cidr(newName)) {
							var nIp;
							if(scope.status == null || scope.status !== 'reject'){
								nIp = _.findWhere($rootScope.ips, {name: newName});
							} else {
								nIp = _.findWhere($rootScope.rejectIps, {name: newName});
							}
							

							if (nIp) {
								if(nIp._deleted){
									if(scope.status == null || scope.status !== 'reject'){
										domainManager.updateIp(ipRule.name, newName);
									}else{
										domainManager.updateRejectIp(ipRule.name, newName);
									}
									
									return scope.editing = false
								}else{
									return alert($translate.instant("options.ip_rule.already_added"))
								}
								
							} else {
									if(scope.status == null || scope.status !== 'reject'){
										domainManager.updateIp(ipRule.name, newName);
									}else{
										domainManager.updateRejectIp(ipRule.name, newName);
									}
								//domainManager.updateIp(ipRule.name, newName);
								return scope.editing = false
							}
						} else {
							return alert($translate.instant("options.ip_rule.enter_correct_ip"))
						}
					};
					scope.deleteIpRule = function() {
						if(scope.status == null || scope.status !== 'reject'){
							return domainManager.delIp(scope.ipRule.name)
						}else{
							return domainManager.delRejectIp(scope.ipRule.name)
						}
						
					};
					return scope.edit = function(toggle) {
						if (toggle == null) {
							toggle = true
						}
						if (toggle) {
							scope.edition.name = scope.ipRule.name;
							scope.editing = true;
							return scope.focusInput = true
						} else {
							return scope.editing = false
						}
					}
				}
			}
        }, angular.module("options").directive("ipRule", ipRuleDirective)
    }, define(libs, ipRule)
}).call(this);