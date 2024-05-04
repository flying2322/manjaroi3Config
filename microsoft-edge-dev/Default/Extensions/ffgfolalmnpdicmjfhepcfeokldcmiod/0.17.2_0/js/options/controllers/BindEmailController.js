(function() {
    var libs, BindEmailControllerOps;
    libs = ["angular", "jquery", "services/validate", "options/module", "services/domainManager", "services/domainUtils"], 
    BindEmailControllerOps = function(angular,jquery) {
        var BindEmailController, i;
        return BindEmailController = function($scope, $rootScope, $http, $timeout, $translate, $alert, SERVER) {
            var init;
            $scope.inviter = "";
            $scope.tempInviter = "";
            $scope.showInviterInput = false;
            $scope.focusInviterInput = false;
            $scope.showEmailInput = false;
            $scope.focusEmailInput = false;
            //$scope.invitationList = null;
            $scope.short_invite_url = "获取中……";
            //$rootScope.user.profile.emailVerified;

            $scope.invite_url = $rootScope.user.profile.invite_url;
            $scope.inviter    = $rootScope.user.profile.inviter;
            //$rootScope.invitationList = $rootScope.user.profile.invitations;
            
                $rootScope.$watch('user.profile', function(n, o) {
                    if (!_.isEqual(n, o)) {
                        if(n.emailBinded == true){
                            $scope.showEmailInput = false;
                            //$scope.focusEmailInput = false;
                            /*
                            var emailBindedAlert = $alert({  
                                title: $translate.instant("options.invitation.email_bind_success"),
                                content: '', 
                                type: 'success',
                                duration: 2,
                                show: true
                             });
                            */
                        }
                    }
                }, true);
                if(!$rootScope.user.error){
                    $rootScope.user.error = {};
                }



                $rootScope.$watch('user', function(newUser, old) {
                    //if (!_.isEqual(n, o)) {
                        if(newUser.error && newUser.error.emailBind_error_email_edu){
                            var emailBindedAlert = $alert({  
                                title: $translate.instant("options.invitation.email_bind_error_not_edu"),
                                content: '', 
                                type: 'danger',
                                duration: 5,
                                show: true
                             });
                            $scope.showEmailInput = true;
                            //$scope.focusEmailInput = true;
                            //console.log("emailBind_error_email_edu");
                            $rootScope.user.error.emailBind_error_email_edu = false;

                            $rootScope.user.profile.emailBinded = false;
                        }
                    //}
                }, true);


            //alert($rootScope.user.profile.emailVerified);

            init = function() {
                /*
                $rootScope.invitationList = [
                    {
                        'id': '',
                        'name': '邀请好友加入',
                        'sender': 'maikr@xxx.edu',
                        

                        'receiver': '67@baidu.com',
                        'can_fetch_reward':true,
                        'reward_caption': '',
                        'status': 'not_vip',

                        'status_caption' : '未开通VIP'

                    },
                    {
                        'name': '邀请好友绑定邮箱',
                        'sender': 't@sjtu.edu',
                        'receiver': '67423423@baidu.com',
                        'can_fetch_reward':true,
                        'status': 'not_monthly_vip',
                        'status_caption' : '未购买月卡或以上套餐',
                        'sender_action_caption': '邀请',
                    },
                    {
                        'name': '绑定邮箱',
                        'sender': 't@su.edu',
                        'receiver': '67423423@baidu.com',
                        'can_fetch_reward':true,
                        'status': 'rewardable',
                        'reward_caption' : '点击领取10天VIP',
                        'status_caption' : '已完成',
                    },
                    {
                        'name': '邀请好友',
                        'sender': 't@sjtu.edu',
                        'receiver': '67423423@baidu.com',
                        'can_fetch_reward':true,
                        'status': 'rewardable',
                        'reward_caption' : '点击领取10天VIP',
                        'status_caption' : '已完成',

                    },
                    {
                        'name': '邀请好友',
                        'sender': 't@sjtu.edu',
                        'receiver': '67423423@baidu.com',
                        'can_fetch_reward':false,
                        'status': 'rewardable',
                        'reward_caption' : '点击领取10天VIP',
                        'status_caption' : '已完成',
                    },
                ];
                */
                /*
                invitationManager.queryInviter(function(inviter) {
                    return $scope.inviter = inviter
                });
                
                invitationManager.queryInvitationList();
                return $http({
                    method: 'POST',
                    url: SERVER.scheme + SERVER.host + SERVER.contextPath + "/user/invite_url",
                    params: {
                        sid: $rootScope.user.profile.sid
                    }
                }).success(function(resp) {
                    if (resp.url) {
                        $scope.invite_url = resp.url;
                        return $scope.short_invite_url = resp.url.substr(7)
                    }
                })
                */
            };
            $scope.isMe = function(name) {
                    return name === $rootScope.user.profile.name
            };
            $scope.toggleReward = function(div) {
                if (jquery('.'+ div + ' .toggle-reward').hasClass('glyphicon-chevron-down')) {
                    jquery('.'+ div + ' .toggle-reward').removeClass('glyphicon-chevron-down');
                    jquery('.'+ div + ' .toggle-reward').addClass('glyphicon-chevron-up');

                    jquery('.'+ div).addClass('slide-up');
                    jquery('.'+ div + ' .rules').slideUp(500);   
                }else{ 
                    jquery('.'+ div + ' .toggle-reward').removeClass('glyphicon-chevron-up');
                    jquery('.'+ div + ' .toggle-reward').addClass('glyphicon-chevron-down');
                    jquery('.'+ div).removeClass('slide-up');
                    jquery('.'+ div + ' .rules').slideDown(500);   
                }
                  
            };
            
            return init()
        }, angular.module("options").controller("BindEmailController", BindEmailController)
    }, define(libs, BindEmailControllerOps)
}).call(this);