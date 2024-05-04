jQuery(function () {
    check_user_login(page_init);
    lang_init();
 });

 function page_init(){
    $(".line-inform-txt").click(function(){
        select_model(this.id);
    });
 }

 function select_model(pid){
    if (!MZK_BGS.mzk_user_info.is_vip || MZK_BGS.mzk_user_info.vip_level < 1) {
        return false;
    }
    var is_reconn = false;
     if(pid == "igg_pmode1"){
        if (MZK_BGS.mzk_pac_config.geoip_switch == false && MZK_BGS.mzk_user_info.is_vip) {
            MZK_BGS.mzk_pac_config.geoip_switch = true;
            is_reconn = true;
        }
     }else if(pid == "igg_pmode2"){
        if (MZK_BGS.mzk_pac_config.geoip_switch == true && MZK_BGS.mzk_user_info.is_vip) {
            MZK_BGS.mzk_pac_config.geoip_switch = false;
            is_reconn = true;
        }
     }
     console.log(pid);

     if(is_reconn){
         if (MZK_BGS.mzk_is_connect) {
            MZK_BGS.open_vpn();
        }
        chrome.storage.local.set({ mzk_geoip_switch: MZK_BGS.mzk_pac_config.geoip_switch });
     }
     window.location.href = "/main.html";
 }