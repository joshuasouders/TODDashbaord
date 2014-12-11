app.controller("ScoreChartController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {

    window.onresize = function(event) {
        //See the big comment on $scope.updateChartSize()
        $scope.updateChartSize();
    };

 	$scope.$on('newActiveStation', function() {
        //See the big comment on $scope.updateChartSize()
        $scope.updateChartSize();
        $scope.refreshChartData();
    });

    $scope.refreshChartData = function(){
        $scope.exampleData = [
            {
                key: activeStationService.getActiveStation()["Station Name"],
                values: [
                    ["Transit Score", activeStationService.getActiveStation()["Transit Score"]],
                    ["Station Facility Score", activeStationService.getActiveStation()["Station Facility Score"]],
                    ["Parking Score", activeStationService.getActiveStation()["Parking Score"]],
                    ["Bike Access Score", activeStationService.getActiveStation()["Bike Access Score"]],
                    ["Pedestrian Access Score", activeStationService.getActiveStation()["Ped Access Score"]],
                    ["TOD Zoning Score", activeStationService.getActiveStation()["TOD Zoning Score"]]
                ]
            }
        ];
    }

    $scope.updateChartSize = function(){
        //When the chart is hidden nvd3 can't calculate the width that the chart should be since the svg container has no width. It defaults to 100px for some reason.
        //This crazy function manually sets the width of the svg to be the same width as the tab content panel container, which is what we want.
        //This function has to be called in two scenarios; when we change the data, which makes the chart redraw which updates the width and height in the process,
        //and when the window is resized, because when we manually set the svg width it takes away nvd3's default responsiveness so we have to add the functionality
        //back in with an event listener.
        $("nvd3-multi-bar-horizontal-chart > svg").width($("nvd3-multi-bar-horizontal-chart").parent().parent().parent().outerWidth());
    }

    $scope.getColor = function(){
        return function(d, i){
            return '#d87428';
        }
    }
}]);