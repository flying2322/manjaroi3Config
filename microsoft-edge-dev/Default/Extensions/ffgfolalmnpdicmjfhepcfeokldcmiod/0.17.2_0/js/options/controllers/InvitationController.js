(function()
{
	var libs,InvitationControllerOps;
	libs= ["angular","jquery","angular","services/validate","options/module","services/domainManager","services/domainUtils","services/invitationManager","services/userManager"],InvitationControllerOps= function(angular,jquery)
	{
		var InvitationController,i;
		return InvitationController= function($scope,$rootScope,$http,$timeout,$translate,$alert,$modal,invitationManager,userManager,SERVER)
		{
			var init;
			$scope["inviter"]= "";$scope["tempInviter"]= "";$scope["showInviterInput"]= false;$scope["focusInviterInput"]= false;$scope["showEmailInput"]= false;$scope["focusEmailInput"]= false;$scope["short_invite_url"]= "\u83b7\u53d6\u4e2d\u2026\u2026";$scope["showAlertFetch"]= false;$scope["alertText"]= "";$scope["alertStyle"]= "";$scope["inviter"]= $rootScope["user"]["profile"]["inviter"];$scope["lang"]= $translate["use"]();$scope["pages"]= [];$scope["page_rows"]= 10;$scope["cur_page"]= 1;$scope["total_pages"]= 0;$scope["total_rows"]= 0;$scope["invitations_loading"]= false;$rootScope.$watch("user.invitations",function()
			{
				$scope["invitations_loading"]= false;$scope["pages"]= [];$scope["cur_page"]= $rootScope["user"]["invitations_cur_page"];$scope["page_rows"]= $rootScope["user"]["invitations_page_rows"];$scope["total_pages"]= $rootScope["user"]["invitations_total_pages"];$scope["total_rows"]= $rootScope["user"]["invitations_total_rows"];for(var i=1;i<= $scope["total_pages"];i++)
				{
					$scope["pages"]["push"](i)
				}
			}
			);init= function()
			{
				$scope["invitations_loading"]= true;userManager["load_invitations"](1,$scope["page_rows"]);$rootScope.$watch('user.profile',function()
				{
					$scope["inviter"]= $rootScope["user"]["profile"]["inviter"]
				}
				,true)
			}
			;$scope["loadInvitation"]= function(page)
			{
				$scope["invitations_loading"]= true;userManager["load_invitations"](page,$scope["page_rows"])
			}
			;$scope["loadPrevInvitation"]= function()
			{
				if($scope["cur_page"]> 1)
				{
					$scope["loadInvitation"]($scope["cur_page"]- 1)
				}
			}
			;$scope["loadNextInvitation"]= function()
			{
				if($scope["cur_page"]< $scope["total_pages"])
				{
					$scope["loadInvitation"]($scope["cur_page"]+ 1)
				}
			}
			;$scope["reloadInvitations"]= function()
			{
				$scope["loadInvitation"](1);if($scope["cur_page"]== 1)
				{
					$scope["invitations_loading"]= false
				}
			}
			;$rootScope["isMe"]= function(name)
			{
				return name=== $rootScope["user"]["profile"]["name"]
			}
			;$rootScope["isAdmin"]= function(name)
			{
				return name=== "admin@maikr.co"
			}
			;$scope["showInvitation"]= function(name)
			{
				if($rootScope["showInvitations"])
				{
					return $rootScope["showInvitations"]["indexOf"](name)!==  -1
				}
				else 
				{
					return false
				}
			}
			;$scope["toggleReward"]= function(div)
			{
				if(jquery('.'+ div+ ' .toggle-reward')["hasClass"]('glyphicon-chevron-down'))
				{
					jquery('.'+ div+ ' .toggle-reward')["removeClass"]('glyphicon-chevron-down');jquery('.'+ div+ ' .toggle-reward')["addClass"]('glyphicon-chevron-up');jquery('.'+ div)["addClass"]('slide-up');jquery('.'+ div+ ' .rules')["slideUp"](500)
				}
				else 
				{
					jquery('.'+ div+ ' .toggle-reward')["removeClass"]('glyphicon-chevron-up');jquery('.'+ div+ ' .toggle-reward')["addClass"]('glyphicon-chevron-down');jquery('.'+ div)["removeClass"]('slide-up');jquery('.'+ div+ ' .rules')["slideDown"](500)
				}
			}
			;$scope["alert"]= function(msg,style)
			{
				$scope["showAlertFetch"]= true;$scope["alertText"]= msg;if(style)
				{
					$scope["alertStyle"]= style
				}
				else 
				{
					$scope["alertStyle"]= 'alert-danger'
				}
				return $timeout(function()
				{
					$scope["showAlertFetch"]= false
				}
				,3* 1000)
			}
			;$rootScope["fetchInvitationReward"]= function(invitation)
			{
				invitation["fetching"]= true;$scope["alert"]($translate["instant"]("options.invitation.fetching_reward"),"alert-info");$rootScope.$watch('user.error',function(error)
				{
					if(error&& (error["fetch_error_invitation"]|| error["fetch_error_status"]))
					{
						$scope["alert"]($translate["instant"]("options.invitation.error_invitation_status"));$timeout(function()
						{
							invitation["fetching"]= false
						}
						,2* 1000)
					}
					if(error&& error["fetch_error_succ"])
					{
						$scope["alert"]($translate["instant"]("options.invitation.error_invitation_fetch_succ"),"alert-success");invitation["fetching"]= false
					}
				}
				,true);invitationManager["fetchInvitationReward"](invitation)
			}
			;return init()
		}
		,angular["module"]("options")["controller"]("InvitationController",InvitationController)
	}
	,define(libs,InvitationControllerOps)
}
)["call"](this)