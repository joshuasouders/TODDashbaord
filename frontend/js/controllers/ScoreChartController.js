app.controller("ScoreChartController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {

 	$scope.$on('newActiveStation', function() {

        $scope.exampleData = [
        	{
        		key: activeStationService.getActiveStation().properties["Station Name"],
        		values: [
        			["Transit Score", activeStationService.getActiveStation().properties["Transit Score"]],
        			["Station Facility Score", activeStationService.getActiveStation().properties["Station Facility Score"]],
        			["Parking Score", activeStationService.getActiveStation().properties["Parking Score"]],
        			["Bike Access Score", activeStationService.getActiveStation().properties["Bike Access Score"]],
        			["Pedestrian Access Score", activeStationService.getActiveStation().properties["Ped Access Score"]],
        			["TOD Zoning Score", activeStationService.getActiveStation().properties["TOD Zoning Score"]]
        		]
        	}
        ];
    });

    var colorArray = ['#25408f', '#0cad4b', '#d87428', '#d1d029', '#14689d', '#d1d029'];
    $scope.getColorPallete = function(){
        return function(d, i){
            return colorArray[2];
        }
    }
}]);