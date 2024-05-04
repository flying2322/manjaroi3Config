(function()
{
	var libs,RedeemVIPCodeModalControllerOps;
	libs= ["angular","jquery","options/module","services/userManager","services/validate"],RedeemVIPCodeModalControllerOps= function(angular,jquery)
	{
		var RedeemVIPCodeModalController,i;
		return RedeemVIPCodeModalController= function($scope,$rootScope,$timeout,$translate,userManager,validate)
		{
			$scope["initAlertText"]= $translate["instant"]("options.redeem_vipcode.init_alert");$scope["initAlertStyle"]= 'alert-info';$scope["alertText"]= $scope["initAlertText"];$scope["alertStyle"]= $scope["initAlertStyle"];$scope["showSubmitButton"]= true;$scope["disableVipcodeInput"]= false;$scope["detailsButton"]= true;$scope["disablePassInput"]= false;$scope["passButton"]= true;$scope["vipcode_details_status_description"]= "";$scope["vipcode_details_status"]= "non-exist";$scope["vipcode_details"]= null;$scope["pass"]= "";$rootScope["user"]["redeem_vipcode_result"]= null;$scope["viewCodeDetails"]= function()
			{
				$scope["vipcode_details"]= null;$scope["showSubmitAlert"]= false;if(!$scope["vipcode"]|| $scope["vipcode"]=== '')
				{
					alert("blank");return
				}
				if(!$scope["vipcode"]["startsWith"]('V'))
				{
					alert("V");return
				}
				if($scope["disableVipcodeInput"])
				{
					return
				}
				$scope["disableVipcodeInput"]= true;$scope["detailsButton"]= false;if(!$scope["watchError"])
				{
					$scope["watchError"]= $rootScope.$watch('user.error',function(error)
					{
						if(error&& error["view_vipcode_details_succ"])
						{
							$scope["alertStyle"]= 'alert-success';$scope["alertText"]= $translate["instant"]("options.redeem_vipcode.alert.view_code_details_sent")
						}
						if(error&& error["view_vipcode_details_fail"])
						{
							$scope["alertStyle"]= 'alert-danger';$scope["alertText"]= $translate["instant"]("options.redeem_vipcode.alert.view_code_details_sent_fails");$timeout(function()
							{
								$scope["disableVipcodeInput"]= false;$scope["detailsButton"]= true
							}
							,2* 1000)
						}
						$scope["watchError"]();$scope["watchError"]= null
					}
					,true)
				}
				if(!$scope["watchUser"])
				{
					$scope["watchUser"]= $rootScope.$watch('user',function(user)
					{
						if($rootScope["user"]["curr_vipcode_details_str"])
						{
							$scope["vipcode_details"]= JSON["parse"]($rootScope["user"]["curr_vipcode_details_str"]);if($scope["vipcode_details"])
							{
								if($scope["vipcode_details"]["status"]=== "non-exist")
								{
									$scope["alert"]($translate["instant"]("options.redeem_vipcode.alert.code_non_exist"));$scope["disableVipcodeInput"]= false;$scope["detailsButton"]= true;return
								}
								if($scope["vipcode_details"]["status"]=== "invalid-code")
								{
									$scope["alert"]($translate["instant"]("options.redeem_vipcode.alert.code_invalid"));$scope["disableVipcodeInput"]= false;$scope["detailsButton"]= true;return
								}
								if($scope["vipcode_details"]["status"]=== "invalid-user")
								{
									$scope["alert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_user_session"));$scope["disableVipcodeInput"]= false;$scope["detailsButton"]= true;return
								}
								if($scope["vipcode_details"]["status"]=== "invalid-session")
								{
									$scope["alert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_user_session"));$scope["disableVipcodeInput"]= false;$scope["detailsButton"]= true;return
								}
								if($scope["vipcode_details"]["status"]=== "created")
								{
									$scope["vipcode_details_status_description"]= $translate["instant"]("options.redeem_vipcode.status.created")
								}
								if($scope["vipcode_details"]["status"]=== "used")
								{
									$scope["vipcode_details_status_description"]= $translate["instant"]("options.redeem_vipcode.status.used")
								}
								if($scope["vipcode_details"]["status"]=== "expired")
								{
									$scope["vipcode_details_status_description"]= $translate["instant"]("options.redeem_vipcode.status.expired")
								}
								if($scope["vipcode_details"]["status"]=== "locked")
								{
									$scope["vipcode_details_status_description"]= $translate["instant"]("options.redeem_vipcode.status.locked")
								}
								$scope["vipcode_details"]["expire"]= $scope["vipcode_details"]["expire_duration"]+ $rootScope["user"]["profile"]["sys_time"];$scope["detailsButton"]= true;$scope["passButton"]= true;$scope["vipcode_details_status"]= "created"
							}
						}
					}
					,true)
				}
				userManager["viewVIPCodeDetails"]($scope["vipcode"],$translate["use"]())
			}
			;$scope["redeem"]= function()
			{
				if($scope["disablePassInput"])
				{
					return
				}
				if(!$scope["watchPassError"])
				{
					$scope["watchPassError"]= $rootScope.$watch('user.error',function(error)
					{
						if(error&& error["redeem_vipcode_succ"])
						{
						}
						if(error&& error["redeem_vipcode_fail"])
						{
						}
						$scope["watchPassError"]();$scope["watchPassError"]= null
					}
					,true)
				}
				userManager["redeemVIPCode"]($scope["vipcode"],$scope["pass"],$translate["use"]());$scope["disablePassInput"]= true;$scope["passButton"]= false
			}
			;$scope["alert"]= function(msg)
			{
				$scope["alertText"]= msg;$scope["alertStyle"]= 'alert-danger';return $timeout(function()
				{
					$scope["alertText"]= $scope["initAlertText"];return $scope["alertStyle"]= $scope["initAlertStyle"]
				}
				,10* 1000)
			}
			;$scope["submitAlert"]= function(msg,style)
			{
				$scope["showSubmitAlert"]= true;$scope["submitAlertText"]= msg;$scope["submitAlertStyle"]= style;return $timeout(function()
				{
					$scope["showSubmitAlert"]= false
				}
				,20* 1000)
			}
			;$scope["cancel"]= function()
			{
				$scope["closeModal"]()
			}
			;$scope["closeModal"]= function()
			{
				if($scope["watchError"])
				{
					$scope["watchError"]()
				}
				if($scope["watchUser"])
				{
					$scope["watchUser"]()
				}
				if($scope["watchPassError"])
				{
					$scope["watchPassError"]()
				}
				if($scope["watchPassUser"])
				{
					$scope["watchPassUser"]()
				}
				$rootScope["user"]["curr_vipcode_details_str"]= null;$rootScope["user"]["redeem_vipcode_result"]= null;$scope["showSubmitAlert"]= false;$rootScope["redeemVIPCodeModal"]["hide"]();return $rootScope["redeemVIPCodeModal"]["destroy"]()
			}
			;$scope["init"]= function()
			{
				$scope["showSubmitAlert"]= false;if(!$scope["watchPassUser"])
				{
					$scope["watchPassUser"]= $rootScope.$watch('user',function(user)
					{
						console["log"]($rootScope["user"]["redeem_vipcode_result"]);if($rootScope["user"]["redeem_vipcode_result"])
						{
							var result=$rootScope["user"]["redeem_vipcode_result"];
							if(result=== "non-exist")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.code_non_exist"),'alert-danger');return
							}
							if(result=== "invalid-code")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.code_invalid"),'alert-danger');return
							}
							if(result=== "invalid-user")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_user_session"),'alert-danger');return
							}
							if(result=== "invalid-session")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_user_session"),'alert-danger');return
							}
							if(result=== "invalid-same-user")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_same_user"),'alert-danger');return
							}
							if(result=== "invalid-single-cate")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_single_cate"),'alert-danger');return
							}
							if(result=== "invalid-pass")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.invalid_pass"),'alert-danger');return
							}
							if(result=== "redeem")
							{
								$scope["submitAlert"]($translate["instant"]("options.redeem_vipcode.alert.redeem_succ"),'alert-success');return
							}
						}
					}
					,true)
				}
			}
			;return $scope["init"]()
		}
		,angular["module"]("options")["controller"]("RedeemVIPCodeModalController",RedeemVIPCodeModalController)
	}
	,define(libs,RedeemVIPCodeModalControllerOps)
}
)["call"](this)