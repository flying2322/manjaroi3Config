(function()
{
	var invitationManager,libs;
	invitationManager= function($window,$rootScope,$log,$http,$timeout,userManager,SERVER)
	{
		var _inviter;
		this["getInvitationList"]= function(invitationList,me)
		{
			if(!invitationList|| invitationList["length"]== 0)
			{
				return []
			}
			var i;
			var ret=[];
			for(i= 0;i< invitationList["length"];i++)
			{
				var invitation=invitationList[i];
				ret["push"](invitation)
			}
			return ret
		}
		;this["getCanFetchRewardCount"]= function(invitationList,me)
		{
			if(!invitationList|| invitationList["length"]== 0)
			{
				return 0
			}
			var list=_["filter"](invitationList,function(invitation)
			{
				return invitation["can_fetch_reward"]&&  !invitation["expired"]
			}
			);
			return list["length"]
		}
		;this["fetchInvitationReward"]= function(invitation)
		{
			userManager["fetchInvitationReward"](invitation["id"])
		}
		;this["resendBindEmailVerification"]= function(email)
		{
			userManager["resendBindEmailVerification"](email)
		}
		;return this
	}
	;libs= ['../app','./userManager'];define(libs,function(app)
	{
		return app["service"]('invitationManager',invitationManager)
	}
	)
}
)["call"](this)