(function() {
    var libs, DomainListControllerOps;
    var __indexOf = [].indexOf || function(item) {
        for (var i = 0,
        l = this.length; i < l; i++) {
            if (i in this && this[i] === item) return i
        }
        return - 1
    };
    libs = ["angular",  "services/validate", "options/module", "services/userManager", "services/domainManager", "services/pageManager", "services/domainUtils", "services/storage"], 
    DomainListControllerOps = function(angular) {
        var DomainListController, i;

        return DomainListController = function($scope, $rootScope, $timeout, $http, $log, $location, $translate, $sce, $modal, userManager, domainManager, pageManager, domainUtils, storage, validate, SERVER, ROLES, GUEST_DOMAINS) {
            var SHAKE_CLASS, loadFilteredDomains, shakeAlert;
            SERVER.scheme = storage.get('lastServer_scheme', '');
            SERVER.host = storage.get('lastServer_host', '');
            SERVER.port = storage.get('lastServer_port', 0);
            $scope.domainToAdd = '';
            $scope.rejectDomainToAdd = '';
            $scope.ipRuleToAdd = '';
            $scope.rejectIpRuleToAdd = '';
            $scope.filteredDomains = [];
            $scope.sorter = 'name';
            $scope.reject_rule_sorter = 'name';
            $scope.animateClass = '';
            SHAKE_CLASS = 'animated shake';

            //$scope.initTitleStyle = $scope.titleStyle = "panel-success";

            $scope.initAlertStyle = 'alert-info';
            $scope.proxy_domain_alertStyle = $scope.initAlertStyle;
            $scope.proxy_domain_alertTitle = $translate.instant("options.domain_list.help_block_text");

            $scope.reject_domain_alertStyle = $scope.initAlertStyle;
            $scope.reject_domain_alertTitle = $translate.instant("options.domain_list.reject_domains_help_block_text");

            $scope.ip_rule_alertStyle = $scope.initAlertStyle;
            $scope.ip_rule_alertTitle = $translate.instant("options.domain_list.ip_rule_help_block_text");

            $scope.reject_ip_rule_alertStyle = $scope.initAlertStyle;
            $scope.reject_ip_rule_alertTitle = $translate.instant("options.domain_list.reject_ip_rule_help_block_text");

            $scope.dropdown = [{
                text: $translate.instant("options.domain_list.sort_by_char"),
                click: "setSorter('name')"
            }, {
                text: $translate.instant("options.domain_list.sort_by_time"),
                click: "setSorter('-_mtime')"
            }];

            $scope.importRule = function() {
                $rootScope.importRuleModal = $modal({
                    templateUrl: "partials/options/modals/import_rule.html",
                    animation: 'am-fade-and-slide-top',
                    backdrop: false,
                    show: true,
                    scope : $scope,
                    size: 'lg'
                });
            };
            $scope.exportRules = function() {
                pageManager.openUrl(SERVER.scheme + SERVER.host + "/rules/export" + "?id=" + $rootScope.user.profile.uid);
            };

            $scope.isVIP = function() {
                //return true;
                return $rootScope.user.role === ROLES.VIP
            };
            shakeAlert = function() {
                $scope.animateClass = '';
                return $timeout(function() {
                    return $scope.animateClass = SHAKE_CLASS
                })
            };
            if ($location.search().source === 'novip') {
                shakeAlert()
            }
            loadFilteredDomains = function() {
                var name;
                if (!$scope.isVIP()) {
                    $rootScope.domains = (function() {
                        var _i, _len, _results;
                        _results = [];
                        for (_i = 0, _len = GUEST_DOMAINS.length; _i < _len; _i++) {
                            name = GUEST_DOMAINS[_i];
                            _results.push({
                                name: name
                            })
                        }
                        return _results
                    })();
                    return $scope.filteredDomains = _.filter($rootScope.domains,
                    function(d) {
                        var _ref;
                        return ! d._deleted && (_ref = d.name, __indexOf.call(GUEST_DOMAINS, _ref) < 0)
                    })
                }
            };
            loadFilteredDomains();
            $scope.proxyDomainAlert = function(message) {
                $scope.proxy_domain_alertTitle = message;
                $scope.proxy_domain_alertStyle = 'panel-danger';
                return $timeout((function(_this) {
                    return function() {
                        $scope.proxy_domain_alertTitle = $scope.initTitle;
                        return $scope.proxy_domain_alertStyle = $translate.instant("options.domain_list.help_block_text");
                    }
                })(this), 3000);
            };

            $scope.rejectDomainAlert = function(message) {
                $scope.reject_domain_alertTitle = message;
                $scope.reject_domain_alertStyle = 'panel-danger';
                return $timeout((function(_this) {
                    return function() {
                        $scope.reject_domain_alertTitle = $scope.initTitle;
                        return $scope.reject_domain_alertStyle = $translate.instant("options.domain_list.reject_domains_help_block_text");
                    }
                })(this), 3000);
            };
            $scope.ipRuleAlert = function(message) {
                $scope.ip_rule_alertTitle = message;
                $scope.ip_rule_alertStyle = 'panel-danger';
                return $timeout((function(_this) {
                    return function() {
                        $scope.ip_rule_alertTitle = $scope.initTitle;
                        return $scope.ip_rule_alertStyle = $translate.instant("options.domain_list.ip_rule_help_block_text");
                    }
                })(this), 3000);
            };

            $scope.rejectIpRuleAlert = function(message) {
                $scope.reject_ip_rule_alertTitle = message;
                $scope.reject_ip_rule_alertStyle = 'panel-danger';
                return $timeout((function(_this) {
                    return function() {
                        $scope.reject_ip_rule_alertTitle = $scope.initTitle;
                        return $scope.reject_ip_rule_alertStyle = $translate.instant("options.domain_list.reject_ip_rule_help_block_text");
                    }
                })(this), 3000);
            };
            $scope.domainsCount = function() {
                return domainManager.domainNames().length;
            };
            $scope.rejectDomainsCount = function() {
                return domainManager.domainRejectNames().length;
            };
            $scope.ipsCount = function() {
                return domainManager.ips().length;
            };
            $scope.rejectIpsCount = function() {
                return domainManager.rejectIps().length;
            };
            $scope.addDomain = function() {
                var domainToAdd, model;
                domainToAdd = domainUtils.trimDomain($scope.domainToAdd);
                if (validate.domainOrDomainPart(domainToAdd)) {
                    //console.log("validate:" + $scope.domainToAdd);
                    model = _.findWhere($rootScope.domains, {
                        name: domainToAdd
                    });
                    if (model) {
                        if(model._deleted){
                            model._deleted = false;
                        } else {
                            $scope.proxyDomainAlert($translate.instant("options.domain_list.error.domain_added"))
                        }
                        
                    } else {
                        domainManager.add(domainToAdd);
                        $scope.domainToAdd = ''
                    }
                } else {
                    //console.log("validate:" + $translate.instant("options.domain_list.error.enter_correct_domain"));
                    $scope.proxyDomainAlert($translate.instant("options.domain_list.error.enter_correct_domain"));
                    $scope.focusDomainInput = true
                }
                return false
            };

            $scope.addRejectDomain = function() {
                var rejectDomainToAdd, model;
                rejectDomainToAdd = domainUtils.trimDomain($scope.rejectDomainToAdd);
                if (validate.domainOrDomainPart(rejectDomainToAdd)) {
                    //console.log("validate:" + $scope.domainToAdd);
                    model = _.findWhere($rootScope.rejectDomains, {
                        name: rejectDomainToAdd
                    });
                    if (model) {
                        
                        if(model._deleted){
                            model._deleted = false;
                        } else {
                            $scope.rejectDomainAlert($translate.instant("options.domain_list.error.domain_added"))
                        }
                    } else {
                        domainManager.addRejectDomain(rejectDomainToAdd);
                        $scope.rejectDomainToAdd = ''
                    }
                } else {
                    //console.log("validate:" + $translate.instant("options.domain_list.error.enter_correct_domain"));
                    $scope.rejectDomainAlert($translate.instant("options.domain_list.error.enter_correct_domain"));
                    //$scope.focusDomainInput = true
                }
                return false
            };
            $scope.addIpRule = function() {
                var ipRuleToAdd, model;
                ipRuleToAdd = $scope.ipRuleToAdd;
                if (validate.cidr(ipRuleToAdd) || validate.ip(ipRuleToAdd)) {
                    //console.log("validate:" + $scope.domainToAdd);
                    model = _.findWhere($rootScope.ips, {
                        name: ipRuleToAdd
                    });
                    if (model) {
                        if(model._deleted){
                            model._deleted = false;
                        } else {
                            $scope.ipRuleAlert($translate.instant("options.domain_list.error.ip_added"))
                        }
                        
                    } else {
                        domainManager.addIp(ipRuleToAdd);
                        $scope.ipRuleToAdd = ''
                    }
                } else {
                    //console.log("validate:" + $translate.instant("options.domain_list.error.enter_correct_domain"));
                    $scope.ipRuleAlert($translate.instant("options.domain_list.error.enter_correct_ip"));
                    //$scope.focusDomainInput = true
                }
                return false
            };
            $scope.addRejectIpRule = function() {
                var rejectIpRuleToAdd, model;
                rejectIpRuleToAdd = $scope.rejectIpRuleToAdd;
                //alert(rejectIpRuleToAdd);
                if (validate.cidr(rejectIpRuleToAdd) || validate.ip(rejectIpRuleToAdd)) {
                    //console.log("validate:" + $scope.domainToAdd);
                    //alert("validate:" + $scope.rejectIpRuleToAdd);
                    model = _.findWhere($rootScope.rejectIps, {
                        name: rejectIpRuleToAdd
                    });
                    //alert("validate:" + model);
                    if (model) {
                        if(model._deleted){
                            model._deleted = false;
                        } else {
                            $scope.rejectIpRuleAlert($translate.instant("options.domain_list.error.ip_added"));
                        }
                        
                    } else {
                        domainManager.addRejectIp(rejectIpRuleToAdd);
                        $scope.rejectIpRuleToAdd = ''
                    }
                } else {
                    //console.log("validate:" + $translate.instant("options.domain_list.error.enter_correct_domain"));
                    $scope.rejectIpRuleAlert($translate.instant("options.domain_list.error.enter_correct_ip"));
                    $scope.focusDomainInput = true
                }
                return false
            };
            return $scope.setSorter = function(sorter) {
                return $scope.sorter = sorter
            }
        }, angular.module("options").controller("DomainListController", ["$scope", "$rootScope", "$timeout", "$http", "$log", "$location", "$translate", "$sce", "$modal", "userManager", "domainManager", "pageManager", "domainUtils", "storage", "validate", "SERVER", "ROLES", "GUEST_DOMAINS", DomainListController])
    }, define(libs, DomainListControllerOps)
}).call(this);