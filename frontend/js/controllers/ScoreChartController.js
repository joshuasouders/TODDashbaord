app.controller("ScoreChartController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {

    var colorPalleteInOrder = ["rgb(65, 39, 59)", "rgb(124, 37, 41)", "rgb(0, 79, 113)", "rgb(198, 146, 20)", "rgb(74, 119, 41)", "rgb(110, 76, 30)", "rgb(227,91,80)"];

    window.onresize = function(event) {
        //See the big comment on $scope.updateChartSize()
        $scope.updateChartSize();
    };

 	$scope.$on('newActiveStation', function() {
        //See the big comment on $scope.updateChartSize()
        $scope.updateChartSize();
        $scope.refreshChartData();
    });

    //called when a active station is set. changes out the data and repopulates the chart
    $scope.refreshChartData = function(){
        $scope.exampleData = [
            {
                key: activeStationService.getActiveStation()["Station Name"],
                values: [
                    ["Transit", activeStationService.getActiveStation()["Transit Score"]],
                    ["Facilities", activeStationService.getActiveStation()["Station Facility Score"]],
                    ["Parking", activeStationService.getActiveStation()["Parking Score"]],
                    ["Pedestrian", activeStationService.getActiveStation()["Ped Access Score"]],
                    ["Bike Access", activeStationService.getActiveStation()["Bike Access Score"]],
                    ["TOD Zoning", activeStationService.getActiveStation()["TOD Zoning Score"]],
                    ["Development", activeStationService.getActiveStation()["Development Market"]]

                ]
            }
        ];

    }

    var iconRelation = {
        "Transit": "Transit.gif",
        "Facilities": "Station.gif",
        "Parking": "Parking.gif",
        "Pedestrian": "Pedestrian.gif",
        "Bike Access": "Bike.gif",
        "TOD Zoning": "TOD_brown.gif",
        "Development": "Development.gif",
    };

    //this sets the tick format of the x axis so that it keeps "1" from being "1.0"
    $scope.yAxisTickFormat = function(){
       return function(d){
            return d3.format('d')(d);
       };
    };

    $scope.colorFunction = function() {
        return function(d, i) {
            return colorPalleteInOrder[i];
        };
    };

    $scope.updateChartSize = function(){
        //When the chart is hidden nvd3 can't calculate the width that the chart should be since the svg container has no width. It defaults to 100px for some reason.
        //This crazy function manually sets the width of the svg to be the same width as the tab content panel container, which is what we want.
        //This function has to be called in two scenarios; when we change the data, which makes the chart redraw which updates the width and height in the process,
        //and when the window is resized, because when we manually set the svg width it takes away nvd3's default responsiveness so we have to add the functionality
        //back in with an event listener.
        $("nvd3-multi-bar-horizontal-chart > svg").width($("nvd3-multi-bar-horizontal-chart").parent().parent().parent().outerWidth());
    }

   // $scope.getColor = function(){
    //    return function(d, i){

      //      return '#d87428';
    //    }
  //  }
}]);