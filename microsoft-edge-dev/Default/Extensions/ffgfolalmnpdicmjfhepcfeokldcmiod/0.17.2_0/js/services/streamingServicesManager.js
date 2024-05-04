(function()
{
    var streamingServicesManager;
    streamingServicesManager= function($rootScope,$log,$translate)
    {
        var services={"netflix":{"name":"Netflix","logo":"netflix.png","url":"https://www.netflix.com"},"dazn":{"name":"DAZN","logo":"dazn.png","url":"https://www.dazn.com"},"disney_plus":{"name":"Disney+","logo":"disney_plus.png","url":"https://www.disneyplus.com"},"hotstar":{"name":"Hotstar","logo":"hotstar.png","url":"https://www.hotstar.com"},"tiktok":{"name":"Tiktok","logo":"tiktok.png","url":"https://www.tiktok.com"},"iqyi_oversea":{"name":"iQyi Oversea","logo":"iqyi.png","tooltip":"\u7231\u5947\u827a\u6d77\u5916","url":"https://www.iq.com"},"tvbanywhere":{"name":"TVB Anywhere+","logo":"tvbanywhere.png","tooltip":"TVB Anywhere","url":"https://www.tvbanywhere.com"},"tvbanywherena":{"name":"TVB Anywhere USA","logo":"tvbanywherena.png","tooltip":"TVB Anywhere USA","url":"https://www.tvbanywherena.com"},"viu":{"name":"Viu","logo":"viu.png","tooltip":"Viu","url":"https://www.viu.com/"},"hbogo":{"name":"HBO Go","logo":"hbogo.png","tooltip":"HBO Go","url":"https://www.hbogo.com"},"bilibili_gt":{"name":"Bilibili","logo":"bilibili.png","tooltip":"Bilibili\u6e2f\u6fb3\u53f0","url":"https://www.bilibili.com"},"nowe":{"name":"Now E","logo":"nowe.png","tooltip":"Now E","url":"https://www.nowe.com"},"viutv":{"name":"Viu TV","logo":"viutv.png","tooltip":"Viu TV","url":"https://viu.tv"},"mytvsuper":{"name":"MyTVSuper","logo":"mytvsuper.png","tooltip":"MyTVSuper","url":"https://www.mytvsuper.com"},"tvb":{"name":"TVB","logo":"tvb.png","tooltip":"TVB","url":"https://www.tvb.com"},"kktv":{"name":"KKTV","logo":"kktv.png","tooltip":"KKTV","url":"https://www.kktv.me"},"litv":{"name":"LiTV","logo":"litv.png","tooltip":"LiTV","url":"https://www.litv.tv"},"myvideo":{"name":"My Video","logo":"myvideo.png","tooltip":"My Video","url":"https://www.myvideo..net.tw"},"4gtv":{"name":"4g TV","logo":"4gtv.png","tooltip":"\u56db\u5b63\u7dda\u4e0a\u5f71\u8996","url":"https://www.4gtv.tv"},"linetv":{"name":"LineTV","logo":"linetv.png","tooltip":"LineTV","url":"https://www.linetv.tw"},"hami_video":{"name":"Hami Video","logo":"hami_video.png","tooltip":"Hami Video","url":"https://hamivideo.hinet.net"},"catchplay_plus":{"name":"CatchPlay+","logo":"catchplay.png","tooltip":"CatchPlay+","url":"https://www.catchplay.com"},"tw_gamer":{"name":"Bahamut Anime","logo":"tw_gamer.png","tooltip":"\u52d5\u756b\u760b","url":"https://ani.gamer.com.tw"},"eleven_sports":{"name":"Eleven Sports","logo":"eleven_sports.png","tooltip":"Eleven Sports","url":"https://www.tw-elevensports.com"},"dmm":{"name":"DMM","logo":"dmm.png","tooltip":"DMM","url":"https://www.dmm.co.jp"},"abematv":{"name":"abematv","logo":"abematv.png",'tooltip':"AbemaTV","url":"https://abema.tv"},"niconico":{"name":"Niconico","logo":"niconico.png","tooltip":"Niconico","url":"https://www.nicovideo.jp"},"telasa":{"name":"Telasa","logo":"telasa.png","tooltip":"Telasa","url":"https://www.telasa.jp"},"paravi":{"name":"Paravi","logo":"paravi.png","tooltip":"Paravi","url":"https://www.paravi.jp"},"u_next":{"name":"U-NEXT","logo":"u_next.png","tooltip":"U-NEXT","url":"https://video.unext.jp/"},"happyon":{"name":"Happyon","logo":"happyon.png",'tooltip':"Happyon(hulu.jp)","url":"https://www.hulu.jp"},"tver":{"name":"TVer","logo":"tver.png","tooltip":"TVer","url":"https://tver.jp"},"wowow":{"name":"WOWOW","logo":"wowow.png","tooltip":"WOWOW","url":"https://www.wowow.co.jp"},"fod":{"name":"FOD","logo":"fod.png","tooltip":"FOD(Fuji TV)","url":"https://fod.fujitv.co.jp"},"radiko":{"name":"Radiko","logo":"radiko.png","tooltip":"Radiko","url":"https://radiko.jp"},"clubdam":{"name":"DAM","logo":"dam.png","tooltip":"Karaoke@DAM","url":"https://www.clubdam.com"},"rakuten_tv_jp":{"name":"Rakuten TV JP","logo":"rakuten_tv_jp.png","tooltip":"\u697d\u5929TV","url":"https://tv.rakuten.co.jp"},"kakaotv":{"name":"Kakao TV","logo":"kakaotv.png","tooltip":"Kakao TV","url":"https://tv.kakao.com"},"tving":{"name":"TVING","logo":"tving.png","tooltip":"TVING","url":"https://www.tving.com"},"wavve":{"name":"Wavve","logo":"wavve.png","tooltip":"Wavve","url":"https://www.wavve.com"},"watcha":{"name":"Watcha","logo":"watcha.png","tooltip":"Watcha","url":"https://watcha.com"},"foxnews":{"name":"FoxNews","logo":"foxnews.png","tooltip":"FoxNews","url":"https://www.foxnews.com"},"hulu":{"name":"Hulu","logo":"hulu.png",'tooltip':"Hulu","url":"https://www.hulu.com"},"espn_plus":{"name":"ESPN+","logo":"espn_plus.png",'tooltip':"ESPN+","url":"https://plus.espn.com"},"epix":{"name":"Epix","logo":"epix.png",'tooltip':"Epix","url":"https://www.epix.com"},"starz":{"name":"Starz","logo":"starz.png",'tooltip':"Starz","url":"https://www.starz.com"},"hbonow":{"name":"HBO Now","logo":"hbonow.png","tooltip":"HBO Now","url":"https://www.hbonow.com"},"hbo_max":{"name":"HBO Max","logo":"hbo_max.png","tooltip":"HBO Max","url":"https://www.hbomax.com"},"britbox":{"name":"BritBox","logo":"britbox.png","tooltip":"BritBox","url":"https://www.britbox.com"},"nba_tv":{"name":"NBA TV","logo":"nba_tv.png","tooltip":"NBA TV","url":"https://watch.nba.com"},"fubo_tv":{"name":"Fubo TV","logo":"fubo_tv.png","tooltip":"Fubo TV","url":"https://www.fubo.tv"},"sling":{"name":"Sling","logo":"sling.png","tooltip":"Sling","url":"https://www.sling.com"},"pluto_tv":{"name":"Pluto TV","logo":"pluto_tv.png","tooltip":"Pluto TV","url":"https://pluto.tv"},"acorn_tv":{"name":"Acorn TV","logo":"acorn_tv.png","tooltip":"Acorn TV","url":"https://acorn.tv"},"showtime":{"name":"SHOWTIME","logo":"showtime.png","tooltip":"SHOWTIME","url":"https://sho.tv"},"attnow":{"name":"DIRECTV Stream(AT&T NOW)","logo":"attnow.png","tooltip":"DIRECTV Stream(AT&T NOW)","url":"https://www.att.com/tv/"},"cinemax_go":{"name":"CineMax Go","logo":"cinemax_go.png","tooltip":"CineMax Go","url":"https://www.cinemax.com"},"discovery_plus":{"name":"Discovery+","logo":"discovery_plus.png","tooltip":"Discovery+","url":"https://www.discoveryplus.com"},"paramount_plus":{"name":"Paramount+","logo":"paramount_plus.png","tooltip":"Paramount+","url":"https://www.paramountplus.com"},"peacocktv":{"name":"Peacock TV","logo":"peacocktv.png","tooltip":"Peacock TV","url":"https://www.peacocktv.com"},"vrv":{"name":"VRV","logo":"vrv.png","tooltip":"VRV","url":"https://vrv.co/"},"funimation":{"name":"Funimation","logo":"funimation.png","tooltip":"Funimation","url":"https://www.funimation.com"},"cbc_gem":{"name":"CBC Gem","logo":"cbc_gem.png","tooltip":"CBC Gem","url":"https://gem.cbc.ca"},"crave":{"name":"Crave","logo":"crave.png","tooltip":"Crave","url":"https://www.crave.ca"},"star_plus":{"name":"Star+","logo":"star_plus.png","tooltip":"Star+","url":"https://www.starplus.com"},"directv_go":{"name":"DriecTV Go","logo":"directv_go.png","tooltip":"DriecTV Go","url":"https://www.directvgo.com"},"rakuten_tv":{"name":"Rakuten TV","logo":"rakuten_tv.png","tooltip":"Rakuten TV","url":"https://rakuten.tv"},"hbo_europe":{"name":"HBO GO Europe","logo":"hbo_europe.png","tooltip":"HBO GO Europe","url":"https://www.hbo-europe.com"},"sky_go":{"name":"Sky Go","logo":"sky_go.png","tooltip":"Sky Go","url":"https://www.sky.com/watch/sky-go"},"itv_hub":{"name":"ITV Hub","logo":"itv_hub.png","tooltip":"ITV Hub","url":"https://www.itv.com/hub/itv"},"channel4":{"name":"Channel 4","logo":"channel4.png","tooltip":"Channel 4","url":"https://www.channel4.com"},"channel5":{"name":"Channel 5","logo":"channel5.png","tooltip":"Channel 5","url":"https://www.channel5.com"},"bbc":{"name":"BBC iPlayer","logo":"bbc.png","tooltip":"BBC iPlayer","url":"https://www.bbc.co.uk/iplayer"},"salto":{"name":"Salto","logo":"salto.png","tooltip":"Salto","url":"https://www.salto.fr"},"canal_plus":{"name":"Canal+","logo":"canal_plus.png","tooltip":"Canal+","url":"https://www.canalplus.com"},"molotov_tv":{"name":"Molotov","logo":"molotov_tv.png","tooltip":"Molotov","url":"https://www.molotov.tv"},"joyn":{"name":"Joyn","logo":"joyn.png","tooltip":"Joyn","url":"https://www.joyn.de"},"zdf":{"name":"ZDF","logo":"zdf.png","tooltip":"ZDF","url":"https://www.zdf.de"},"nlziet":{"name":"NLZIET","logo":"nlziet.png","tooltip":"NLZIET","url":"https://www.nlziet.nl"},"videoland":{"name":"Videoland","logo":"videoland.png","tooltip":"Videoland","url":"https://www.videoland.com"},"npostart_plus":{"name":"NPO Start Plus","logo":"npostart_plus.png","tooltip":"NPO Start Plus","url":"https://www.npostart.nl/plus"},"pantaya":{"name":"Pantaya","logo":"pantaya.png","tooltip":"Pantaya","url":"https://www.pantaya.com"},"raiplay":{"name":"Rai Play","logo":"raiplay.png","tooltip":"Rai Play","url":"https://www.raiplay.it"},"amediateka":{"name":"Amediateka","logo":"amediateka.png","tooltip":"Amediateka","url":"https://www.amediateka.ru"},"stan":{"name":"Stan","logo":"stan.png","tooltip":"Stan","url":"https://www.stan.com.au"},"binge":{"name":"Binge","logo":"binge.png","tooltip":"Binge","url":"https://binge.com.au"},"docplay":{"name":"Docplay","logo":"docplay.png","tooltip":"Docplay","url":"https://www.docplay.com"},"channel7":{"name":"Channel 7","logo":"channel7.png","tooltip":"Channel 7","url":"https://7plus.com.au"},"channel9":{"name":"Channel 9","logo":"channel9.png","tooltip":"Channel 9","url":"https://www.9now.com.au"},"channel10":{"name":"Channel 10","logo":"channel10.png","tooltip":"Channel 10","url":"https://10play.com.au"},"abc_iview":{"name":"ABC iView","logo":"abc_iview.png","tooltip":"ABC iView","url":"https://iview.abc.net.au"},"kayosports":{"name":"Kayo Sports","logo":"kayosports.png","tooltip":"ABC iView","url":"https://kayosports.com.au"},"optus":{"name":"Optus Sports","logo":"optus.png","tooltip":"Optus Sports","url":"https://sport.optus.com.au"},"sbs":{"name":"SBS on Demand","logo":"sbs.png","tooltip":"SBS on Demand","url":"https://www.sbs.com.au/ondemand"},"neontv":{"name":"Neon TV","logo":"neontv.png","tooltip":"Neon TV","url":"https://www.neontv.co.nz"},"threenow":{"name":"ThreeNow","logo":"threenow.png","tooltip":"ThreeNow","url":"https://www.threenow.co.nz"},"skygo_nz":{"name":"SkyGo NZ","logo":"skygo_nz.png","tooltip":"SkyGo NZ","url":"https://www.skygo.co.nz"},"maoritv":{"name":"Maori TV","logo":"maoritv.png","tooltip":"Maori TV","url":"https://www.maoritelevision.com"}};
        this["services"]= services;this["getSpecials"]= function(server)
        {
            if(server["specials"]&& server["specials"]!== '')
            {
                return server["specials"]["split"](",")
            }
        }
        ;this["isValidSpecial"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();if(this["isNetflix"](special)|| this["isDazn"](special)|| this["isDisneyPlus"](special)|| this["isTiktok"](special)|| this["isIQiyOversea"](special)|| this["isHotstar"](special)|| this["isHbogo"](special)|| this["isViu"](special))
                {
                    return true
                }
                else 
                {
                    var service=services[special];
                    if(service)
                    {
                        return true
                    }
                }
            }
            return false
        }
        ;this["getSpecialImg"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();if(this["isNetflix"](special)|| this["isDazn"](special)|| this["isDisneyPlus"](special)|| this["isTiktok"](special)|| this["isIQiyOversea"](special)|| this["isHotstar"](special)|| this["isHbogo"](special)|| this["isViu"](special))
                {
                    if(this["isNetflix"](special))
                    {
                        return services['netflix']["logo"]
                    }
                    else 
                    {
                        if(this["isDazn"](special))
                        {
                            return services['dazn']["logo"]
                        }
                        else 
                        {
                            if(this["isDisneyPlus"](special))
                            {
                                return services['disney_plus']["logo"]
                            }
                            else 
                            {
                                if(this["isTiktok"](special))
                                {
                                    return services['tiktok']["logo"]
                                }
                                else 
                                {
                                    if(this["isIQiyOversea"](special))
                                    {
                                        return services['iqyi_oversea']["logo"]
                                    }
                                    else 
                                    {
                                        if(this["isHotstar"](special))
                                        {
                                            return services['hotstar']["logo"]
                                        }
                                        else 
                                        {
                                            if(this["isHbogo"](special))
                                            {
                                                return services['hbogo']["logo"]
                                            }
                                            else 
                                            {
                                                if(this["isViu"](special))
                                                {
                                                    return services['viu']["logo"]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else 
                {
                    var service=services[special];
                    if(service)
                    {
                        return service["logo"]
                    }
                }
            }
            return null
        }
        ;this["getSpecialUrl"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();if(this["isNetflix"](special)|| this["isDazn"](special)|| this["isDisneyPlus"](special)|| this["isTiktok"](special)|| this["isIQiyOversea"](special)|| this["isHotstar"](special)|| this["isHbogo"](special)|| this["isViu"](special))
                {
                    if(this["isNetflix"](special))
                    {
                        return services['netflix']["url"]
                    }
                    else 
                    {
                        if(this["isDazn"](special))
                        {
                            return services['dazn']["url"]
                        }
                        else 
                        {
                            if(this["isDisneyPlus"](special))
                            {
                                return services['disney_plus']["url"]
                            }
                            else 
                            {
                                if(this["isTiktok"](special))
                                {
                                    return services['tiktok']["url"]
                                }
                                else 
                                {
                                    if(this["isIQiyOversea"](special))
                                    {
                                        return services['iqyi_oversea']["url"]
                                    }
                                    else 
                                    {
                                        if(this["isHotstar"](special))
                                        {
                                            return services['hotstar']["url"]
                                        }
                                        else 
                                        {
                                            if(this["isHbogo"](special))
                                            {
                                                return services['hbogo']["url"]
                                            }
                                            else 
                                            {
                                                if(this["isViu"](special))
                                                {
                                                    return services['viu']["url"]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else 
                {
                    var service=services[special];
                    if(service)
                    {
                        return service["url"]
                    }
                }
            }
            return null
        }
        ;this["getSpecialTooltip"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();if(this["isNetflix"](special)|| this["isDazn"](special)|| this["isDisneyPlus"](special)|| this["isTiktok"](special)|| this["isIQiyOversea"](special)|| this["isHotstar"](special)|| this["isHbogo"](special)|| this["isViu"](special))
                {
                    if(this["isNetflix"](special))
                    {
                        return this["netflixWithArea"](special)
                    }
                    else 
                    {
                        if(this["isDazn"](special))
                        {
                            return this["daznWithArea"](special)
                        }
                        else 
                        {
                            if(this["isDisneyPlus"](special))
                            {
                                return this["disneyPlusWithArea"](special)
                            }
                            else 
                            {
                                if(this["isTiktok"](special))
                                {
                                    return this["tiktokWithArea"](special)
                                }
                                else 
                                {
                                    if(this["isIQiyOversea"](special))
                                    {
                                        return this["iQiyOverseaArea"](special)
                                    }
                                    else 
                                    {
                                        if(this["isHotstar"](special))
                                        {
                                            return this["hotstarWithArea"](special)
                                        }
                                        else 
                                        {
                                            if(this["isHbogo"](special))
                                            {
                                                return this["hbogoWithArea"](special)
                                            }
                                            else 
                                            {
                                                if(this["isViu"](special))
                                                {
                                                    return this["viuWithArea"](special)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else 
                {
                    var service=services[special];
                    if(service)
                    {
                        return service["tooltip"]
                    }
                }
            }
            return null
        }
        ;this["isNetflix"]= function(special)
        {
            if(special)
            {
                return special["contains"]('netflix')
            }
            return false
        }
        ;this["netflixWithArea"]= function(special)
        {
            if(special["startsWith"]('netflix'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "Netflix"
                    }
                    else 
                    {
                        return "Netflix"+ $translate["instant"]("common.area")+ area
                    }
                }
                else 
                {
                    return $translate["instant"]("common.netflix_original")
                }
            }
            return 'Netflix'
        }
        ;this["isDazn"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();return special["contains"]('dazn')
            }
            return false
        }
        ;this["daznWithArea"]= function(special)
        {
            special= special["toLowerCase"]();if(special["startsWith"]('dazn'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "DAZN"
                    }
                    else 
                    {
                        return "DAZN"+ $translate["instant"]("common.area")+ area
                    }
                }
            }
            return 'DAZN'
        }
        ;this["isTiktok"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();return special["contains"]('tiktok')
            }
            return false
        }
        ;this["tiktokWithArea"]= function(special)
        {
            special= special["toLowerCase"]();if(special["startsWith"]('tiktok'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "Tiktok"
                    }
                    else 
                    {
                        return "Tiktok"+ $translate["instant"]("common.area")+ area
                    }
                }
            }
            return 'Tiktok'
        }
        ;this["isDisneyPlus"]= function(special)
        {
            if(special)
            {
                return special["contains"]('disney+')|| special["contains"]('disney_plus')
            }
            return false
        }
        ;this["disneyPlusWithArea"]= function(special)
        {
            if(special["startsWith"]('disney'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "Disney+"
                    }
                    else 
                    {
                        return "Disney+"+ $translate["instant"]("common.area")+ area
                    }
                }
            }
            return 'Disney+'
        }
        ;this["isIQiyOversea"]= function(special)
        {
            if(special)
            {
                return special["contains"]('iqyi_oversea')
            }
            return false
        }
        ;this["iQiyOverseaArea"]= function(special)
        {
            if(special["startsWith"]('iqyi_oversea'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "iQyi"
                    }
                    else 
                    {
                        return "iQyi"+ $translate["instant"]("common.area")+ area
                    }
                }
            }
            return 'iQyi Oversea'
        }
        ;this["isHotstar"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();return special["contains"]('hotstar')
            }
            return false
        }
        ;this["hotstarWithArea"]= function(special)
        {
            special= special["toLowerCase"]();if(special["startsWith"]('hotstar'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "Hotstar"
                    }
                    else 
                    {
                        return "Hotstar"+ $translate["instant"]("common.area")+ area
                    }
                }
            }
            return 'Hotstar'
        }
        ;this["isHbogo"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();return special["contains"]('hbogo')
            }
            return false
        }
        ;this["hbogoWithArea"]= function(special)
        {
            special= special["toLowerCase"]();if(special["startsWith"]('hbogo'))
            {
                if(special["contains"]("-"))
                {
                    var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                    if(currentLocale=== 'zh_CN')
                    {
                        return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "HBO Go"
                    }
                    else 
                    {
                        return "HBO Go"+ $translate["instant"]("common.area")+ area
                    }
                }
            }
            return 'HBO Go'
        }
        ;this["isViu"]= function(special)
        {
            if(special)
            {
                special= special["toLowerCase"]();return special=== 'viu'|| special["startsWith"]('viu-')
            }
            return false
        }
        ;this["viuWithArea"]= function(special)
        {
            special= special["toLowerCase"]();if(special["startsWith"]('viu-'))
            {
                var area=special["substring"](special["indexOf"]('-')+ 1)["toUpperCase"]();
                if(currentLocale=== 'zh_CN')
                {
                    return $translate["instant"]("country."+ area)+ $translate["instant"]("common.area")+ "Viu"
                }
                else 
                {
                    return "Viu"+ $translate["instant"]("common.area")+ area
                }
            }
            return 'Viu'
        }
        ;return this
    }
    ;define(['../app'],function(app)
    {
        return app["service"]('streamingServicesManager',['$rootScope','$log','$translate',streamingServicesManager])
    }
    )
}
)["call"](this)