(function()
{
    var libs,MoreStreamingServicesModalControllerOps;
    libs= ["angular","jquery","options/module","services/streamingServicesManager"],MoreStreamingServicesModalControllerOps= function(angular,jquery)
    {
        var MoreStreamingServicesModalController,i;
        return MoreStreamingServicesModalController= function($scope,$rootScope,$timeout,$translate,streamingServicesManager)
        {
            var i;
            $scope["services"]= streamingServicesManager["getSpecials"]($rootScope["clickedServer"]);$scope["numCols"]= $scope["services"]["length"];$scope["numSections"]= $scope["numCols"]% 6!= 0?Math["floor"]($scope["numCols"]/ 6)+ 1:Math["floor"]($scope["numCols"]/ 6);$scope["sections"]= Array["from"](Array($scope["numSections"])["keys"]());$scope["data"]= [];$scope["dataArray"]=  new Array($scope["numSections"])["fill"](0)["map"](()=>
            {
                return  new Array(6)["fill"](0)
            }
            );var totalRows=Math["floor"]($scope["services"]["length"]/ 6)+ 1;
            for(i= 0;i< $scope["services"]["length"];i++)
            {
                var row=Math["floor"](i/ 6);
                var col=i% 6;
                var service=streamingServicesManager["services"][$scope["services"][i]];
                $scope["dataArray"][row][col]= $scope["services"][i]
            }
            for(i= 0;i< totalRows;i++)
            {
                var cols=[];
                for(j= 0;j< 6;j++)
                {
                    if(i* 6+ j>= $scope["services"]["length"])
                    {
                    }
                    else 
                    {
                        cols["push"]($scope["dataArray"][i][j])
                    }
                }
                var rowdata={data:cols};
                $scope["data"]["push"](rowdata)
            }
            $scope["title"]= function()
            {
                var title=$translate["instant"]("options.server_list.server");
                title+= "\'";title+= $rootScope["clickedServer"]["name"];title+= "\' ";title+= $translate["instant"]("options.server_list.unblocked_following_streaming_services");return title
            }
            ;$scope["getService"]= function(special)
            {
                return streamingServicesManager["services"][special]
            }
            ;$scope["isValidSpecial"]= function(special)
            {
                return streamingServicesManager["isValidSpecial"](special)
            }
            ;$scope["getSpecialUrl"]= function(special)
            {
                return streamingServicesManager["getSpecialUrl"](special)
            }
            ;$scope["getSpecialTooltip"]= function(special)
            {
                return streamingServicesManager["getSpecialTooltip"](special)
            }
            ;$scope["getSpecialLogo"]= function(special)
            {
                var img=streamingServicesManager["getSpecialImg"](special);
                if(img)
                {
                    return '/img/brand/'+ img
                }
                return null
            }
            ;$scope["logo"]= function(special)
            {
                var img=streamingServicesManager["getSpecialImg"](special);
                if(img)
                {
                    return '/img/brand/'+ img
                }
                return null
            }
            ;$scope["isNetflix"]= function(special)
            {
                return streamingServicesManager["isNetflix"](special)
            }
            ;$scope["netflixWithArea"]= function(special)
            {
                return streamingServicesManager["netflixWithArea"](special)
            }
            ;return $scope["closeModal"]= function()
            {
                $rootScope["moreStreamingServicesModal"]["hide"]();$rootScope["moreStreamingServicesModal"]["destroy"]();$rootScope["moreStreamingServicesModal"]= null
            }
        }
        ,angular["module"]("options")["controller"]("MoreStreamingServicesModalController",['$scope','$rootScope','$timeout','$translate','streamingServicesManager',MoreStreamingServicesModalController])
    }
    ,define(libs,MoreStreamingServicesModalControllerOps)
}
)["call"](this)