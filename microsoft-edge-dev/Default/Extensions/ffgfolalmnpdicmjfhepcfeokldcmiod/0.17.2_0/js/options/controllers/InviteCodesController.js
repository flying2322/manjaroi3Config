(function()
{
  var libs,InviteCodesControllerOps;
  libs= ["angular","jquery","angular","services/validate","options/module","services/userManager","services/teleScope","services/storage","services/invitationManager"],InviteCodesControllerOps= function(angular,jquery)
  {
    var InviteCodesController,i;
    return InviteCodesController= function($scope,$rootScope,$http,$timeout,$translate,$alert,$modal,$log,userManager,teleScope,storage,invitationManager)
    {
      var init;
      $scope["invitation_loading"]= false;$scope["active_codes"]= [];$scope["invitee_list"]= [];$scope["selected_invite_code_invitations"]= [];$scope["lang"]= $translate["use"]();$scope["showAlertFetch"]= false;teleScope["link"]('user.invite_code_invitations_updated');$scope["signup_with_invite_code_reward"]= '';$rootScope.$watch("user.invitation_codes",function()
      {
        if(!$rootScope["user"]["invitation_codes"])
        {
          return
        }
        $scope["invitation_codes"]= $rootScope["user"]["invitation_codes"];if(!$scope["invitation_codes"]||  !$scope["invitation_codes"]["length"])
        {
          return
        }
        for(var i=0;i< $scope["invitation_codes"]["length"];i++)
        {
          var expired=$scope["invitation_codes"][i]["expired"];
          var allowance=$scope["invitation_codes"][i]["allowance"];
          var used_times=$scope["invitation_codes"][i]["used_times"];
          $scope["invitation_codes"][i]["active"]= !expired&& ((allowance> 0&& used_times< allowance)|| allowance== 0);if($scope["invitation_codes"][i]["active"])
          {
            if(!$rootScope["user"]["selectedInvitationCode"])
            {
              $rootScope["user"]["selectedInvitationCode"]= $scope["invitation_codes"][i]["_id"]
            }
            $scope["active_codes"]["push"]($scope["invitation_codes"][i]._id)
          }
        }
      }
      );$scope["reloadInviteCodeInvitations"]= function(selectedInvitationCode)
      {
        if(!selectedInvitationCode)
        {
          return
        }
        $scope["invitation_loading"]= true;userManager["loadInviteCodeInvitations"](selectedInvitationCode);$scope["selected_invite_code_invitations"]= []
      }
      ;$rootScope.$watch("user.selectedInvitationCode",function(newValue,oldValue)
      {
        $scope["reloadInviteCodeInvitations"](newValue)
      }
      );$rootScope.$watch("user.invite_code_invitations_updated",function(newValue,oldValue)
      {
        if(newValue== true)
        {
          var selected_invite_code_invitation_data=storage["get"]("selected_invite_code_invitation_data",null);
          if(selected_invite_code_invitation_data)
          {
            $scope["invitation_loading"]= false;if(selected_invite_code_invitation_data["invite_code"]== $rootScope["user"]["selectedInvitationCode"]&& selected_invite_code_invitation_data["invitations"]&& selected_invite_code_invitation_data["invitations"]["length"])
            {
              $scope["selected_invite_code_invitations"]= selected_invite_code_invitation_data["invitations"]
            }
            else 
            {
              $scope["selected_invite_code_invitations"]= []
            }
            $scope["signup_with_invite_code_reward"]= selected_invite_code_invitation_data["signup_with_invite_code_reward"]
          }
        }
      }
      );$scope["toggleReward"]= function(div)
      {
        if(jquery('.'+ div+ ' .toggle-reward')["hasClass"]('glyphicon-chevron-down'))
        {
          jquery('.'+ div+ ' .toggle-reward')["removeClass"]('glyphicon-chevron-down');jquery('.'+ div+ ' .toggle-reward')["addClass"]('glyphicon-chevron-up');jquery('.'+ div)["addClass"]('slide-up');jquery('.'+ div)["removeClass"]('slide-down');jquery('.'+ div+ ' .wrapper')["slideUp"](500)
        }
        else 
        {
          jquery('.'+ div+ ' .toggle-reward')["removeClass"]('glyphicon-chevron-up');jquery('.'+ div+ ' .toggle-reward')["addClass"]('glyphicon-chevron-down');jquery('.'+ div)["removeClass"]('slide-up');jquery('.'+ div)["addClass"]('slide-down');jquery('.'+ div+ ' .wrapper')["slideDown"](500)
        }
      }
      ;$scope["getInviteUrl"]= function()
      {
        return $rootScope["user"]["invite_url_prefix"]+ $rootScope["user"]["selectedInvitationCode"]+ $rootScope["user"]["invite_url_suffix"]
      }
      ;$scope["getBareInviteUrl"]= function()
      {
        if(!$rootScope["user"]["invite_url_prefix"])
        {
          return ''
        }
        var n=$rootScope["user"]["invite_url_prefix"]["indexOf"]("?");
        return $rootScope["user"]["invite_url_prefix"]["substring"](0,n)
      }
      ;$scope["showInviteQRCodeModal"]= function()
      {
        $rootScope["inviteQRCodeModal"]= $modal({templateUrl:"partials/options/modals/invite_qrcode.html",animation:'am-fade-and-slide-top',backdrop:true,show:true,scope:$scope})
      }
      ;$scope["showInviteEmailModal"]= function()
      {
        $rootScope["inviteEmailModal"]= $modal({templateUrl:"partials/options/modals/invite_email.html",animation:'am-fade-and-slide-top',backdrop:true,show:true,scope:$scope})
      }
      ;$scope["getInviteCodeExpireTime"]= function()
      {
        if(!$scope["invitation_codes"])
        {
          return 0
        }
        for(var i=0;i< $scope["invitation_codes"]["length"];i++)
        {
          if($rootScope["user"]["selectedInvitationCode"]=== $scope["invitation_codes"][i]["_id"])
          {
            return $scope["invitation_codes"][i]["expire"]
          }
        }
        return 0
      }
      ;$scope["getActiveCodes"]= function()
      {
        var active_codes=[];
        for(var i=0;i< $scope["active_codes"]["length"];i++)
        {
          if(jquery["inArray"]($scope["active_codes"][i],active_codes)==  -1)
          {
            active_codes["push"]($scope["active_codes"][i])
          }
        }
        return active_codes
      }
      ;$scope["showInvitationCodes"]= function()
      {
        return $rootScope["userInvitationCodesModal"]= $modal({templateUrl:"partials/options/modals/invitation_codes.html",show:true,size:'lg',backdrop:true})
      }
      ;$scope["getInviteCodeOpt"]= function()
      {
        if(!$scope["invitation_codes"])
        {
          return null
        }
        for(var i=0;i< $scope["invitation_codes"]["length"];i++)
        {
          if($rootScope["user"]["selectedInvitationCode"]=== $scope["invitation_codes"][i]["_id"])
          {
            return $scope["invitation_codes"][i]
          }
        }
        return null
      }
      ;$scope["getInviteCodeUsedTimes"]= function()
      {
        var code=$scope["getInviteCodeOpt"]();
        if(!code)
        {
          return 0
        }
        return code["used_times"]
      }
      ;$scope["getInviteCodeAllowance"]= function()
      {
        var code=$scope["getInviteCodeOpt"]();
        if(!code)
        {
          return 0
        }
        if(code["allowance"]== 0)
        {
          return '\u221e'
        }
        else 
        {
          return code["allowance"]
        }
      }
      ;$scope["getInviterReward"]= function()
      {
        var code=$scope["getInviteCodeOpt"]();
        if(!code)
        {
          return ''
        }
        var to=code["bonus_inviter"];
        to= to/ 1000;var duration,sDay,sHour;
        sDay= $translate["instant"]("options.layout.day");sHour= $translate["instant"]("options.layout.hour");duration= to;if(duration% 86400== 0)
        {
          return ""+ (duration/ 86400)["toFixed"](0)+ " "+ sDay
        }
        else 
        {
          return parseInt(((duration))/ 86400)+ sDay+ " "+ parseInt(((duration- 10)% 86400)/ 3600)+ sHour
        }
        return ''
      }
      ;$scope["getInviteeReward"]= function()
      {
        var code=$scope["getInviteCodeOpt"]();
        if(!code)
        {
          return ''
        }
        var to=code["bonus_invitee"];
        to= to/ 1000;var duration,sDay,sHour;
        sDay= $translate["instant"]("options.layout.day");sHour= $translate["instant"]("options.layout.hour");duration= to;if(duration% 86400== 0)
        {
          return ""+ (duration/ 86400)["toFixed"](0)+ " "+ sDay
        }
        else 
        {
          return parseInt(((duration))/ 86400)+ sDay+ " "+ parseInt(((duration- 10)% 86400)/ 3600)+ sHour
        }
        return ''
      }
      ;$scope["getInviteLeftTimes"]= function()
      {
        var code=$scope["getInviteCodeOpt"]();
        if(!code)
        {
          return -1
        }
        if(code["allowance"]== 0)
        {
          return -1
        }
        return code["allowance"]- code["used_times"]
      }
      ;$scope["getInviterLeftReward"]= function()
      {
        var code=$scope["getInviteCodeOpt"]();
        if(!code)
        {
          return ''
        }
        var to=code["bonus_inviter"]* (code["allowance"]- code["used_times"]);
        to= to/ 1000;var duration,sDay,sHour;
        sDay= $translate["instant"]("options.layout.day");sHour= $translate["instant"]("options.layout.hour");duration= to;if(duration% 86400== 0)
        {
          return ""+ (duration/ 86400)["toFixed"](0)+ " "+ sDay
        }
        else 
        {
          return parseInt(((duration))/ 86400)+ sDay+ " "+ parseInt(((duration- 10)% 86400)/ 3600)+ sHour
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
      ;$scope["fetchInvitationReward"]= function(invitation)
      {
        invitation["fetching"]= true;$scope["alert"]($translate["instant"]("options.invite_codes.fetching_reward"),"alert-info");$rootScope.$watch('user.error',function(error)
        {
          if(error&& (error["fetch_error_invitation"]|| error["fetch_error_status"]))
          {
            $scope["alert"]($translate["instant"]("options.invite_codes.error_invitation_status"));$timeout(function()
            {
              invitation["fetching"]= false
            }
            ,2* 1000)
          }
          if(error&& error["fetch_error_succ"])
          {
            $scope["alert"]($translate["instant"]("options.invite_codes.error_invitation_fetch_succ"),"alert-success");invitation["fetching"]= false;$scope["reloadInviteCodeInvitations"]($rootScope["user"]["selectedInvitationCode"])
          }
        }
        ,true);invitationManager["fetchInvitationReward"](invitation)
      }
      ;$scope["showWaitingPaymentNotice"]= function(invitation)
      {
        var title=$translate["instant"]('options.invite_codes.waiting_payment_notice_title');
        var msg=$translate["instant"]('options.invite_codes.waiting_payment_notice_message');
        Swal({type:'info',title:title,html:msg})
      }
      ;$scope["showDeleteExpiredInvitationNotice"]= function(invitation)
      {
        var title=$translate["instant"]('options.invite_codes.delete_expired_invitation_title');
        var msg=$translate["instant"]('options.invite_codes.delete_expired_invitation_message');
        Swal({type:'info',title:title,html:msg})
      }
      ;$scope["deleteExpiredInvitation"]= function(invitation)
      {
        invitation["deleting"]= true;$scope["alert"]($translate["instant"]("options.invite_codes.deleting_invitation"),"alert-info");$rootScope.$watch('user.error',function(error)
        {
          if(error&& (error["delete_error_invitation"]|| error["delete_error_invitation_status"]))
          {
            $scope["alert"]($translate["instant"]("options.invite_codes.error_invitation_delete"));$timeout(function()
            {
              invitation["deleting"]= false
            }
            ,2* 1000)
          }
          if(error&& error["delete_error_invitation_succ"])
          {
            $scope["alert"]($translate["instant"]("options.invite_codes.error_invitation_delete_succ"),"alert-success");invitation["deleting"]= false;$scope["reloadInviteCodeInvitations"]($rootScope["user"]["selectedInvitationCode"])
          }
        }
        ,true);userManager["deleteExpiredInvitation"](invitation["id"])
      }
      ;$scope["exchangeWheat"]= function()
      {
        return $rootScope["userWheatsModal"]= $modal({templateUrl:"partials/options/modals/exchange_wheat.html",show:true,size:'lg',backdrop:true})
      }
      ;$scope["showGrabWheat"]= function()
      {
        if($rootScope["wsConnected"])
        {
          if($rootScope["grabWheatModal"])
          {
            $rootScope["grabWheatModal"]["destroy"]();$rootScope["grabWheatModal"]= null
          }
          return $rootScope["grabWheatModal"]= $modal({templateUrl:"partials/options/modals/grab_wheat.html",show:true,size:'lg',backdrop:true})
        }
        else 
        {
          var title=$translate["instant"]('options.layout.grab_wheat.fail_to_open_wheat_when_disconnected_title');
          var msg=$translate["instant"]('options.layout.grab_wheat.fail_to_open_wheat_when_disconnected_desc');
          Swal({type:'error',title:title,text:msg})
        }
      }
      ;init= function()
      {
        $rootScope["user"]["invitation_codes"]= [];userManager["reloadInvitationCodes"]();$rootScope.$watch('user.profile',function()
        {
          $scope["inviter"]= $rootScope["user"]["profile"]["inviter"]
        }
        ,true)
      }
      ;return init()
    }
    ,angular["module"]("options")["controller"]("InviteCodesController",InviteCodesController)
  }
  ,define(libs,InviteCodesControllerOps)
}
)["call"](this)