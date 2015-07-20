app.controller('SearchController', ['$scope', 'stationService', 'activeStationService', function($scope, stationService, activeStationService) {
	$scope.selectedStation = {};

	$scope.$on('stationServiceReady', function() {
		var stations = JSON.parse(JSON.stringify(stationService.getJSON()));
		var additionalStations = [];
		for(var i = 0; i < stations.length; i++){
			if(typeof stations[i]["rail_lines_served"] != "undefined"){
				var splitStation = stations[i]["rail_lines_served"].split("; ");
				if(splitStation.length > 1){
					for(var x = 1; x < splitStation.length; x++){
						var alteredStation = JSON.parse(JSON.stringify(stations[i]));
						alteredStation["rail_lines_served"] = splitStation[x];
						alteredStation["station_name"] = stations[i]["station_name"] + " (" + splitStation[x] + ")";
						additionalStations.push(alteredStation);
					}
					stations[i]["station_name"] += " (" + splitStation[0] + ")";
					stations[i]["rail_lines_served"] = splitStation[0];
				}
			}
		}
		stations = stations.concat(additionalStations);
		$scope.stationJSON = [];
		$scope.stationJSON = $scope.stationJSON.concat(stations);

		$scope.stationJSON.sort(function(a, b){
		    return a['station_name'] < b['station_name'] ? -1 : a['station_name'] > b['station_name'] ? 1 : 0;
		});;
	});

	$scope.$on('newActiveStation', function() {
		if(!$scope.$$phase) {
			$scope.$apply(function() {
				$scope.selectedStation.selected = activeStationService.getActiveStation();
			});
		}
	});

	$scope.groupByFunction = function(item){
		return item["rail_lines_served"];
	}

	$scope.$watch('selectedStation.selected', function() {
		if(typeof($scope.selectedStation.selected) != "undefined"){
			activeStationService.setActiveStationByName($scope.selectedStation.selected["station_name"].split(" (")[0]);
       	}
   });
}]);