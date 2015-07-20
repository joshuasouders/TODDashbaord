app.controller('SearchController', ['$scope', 'stationService', 'activeStationService', function($scope, stationService, activeStationService) {
	$scope.selectedStation = {};

	$scope.$on('stationServiceReady', function() {
		var stations = stationService.getJSON();
		var additionalStations = [];
		for(var i = 0; i < stations.length; i++){
			if(typeof stations[i]["rail_lines_served"] != "undefined"){
				var splitStation = stations[i]["rail_lines_served"].split("; ");
				if(splitStation.length > 1){
					stations[i]["rail_lines_served"] = splitStation[0];
				}
				//This code is a step in the right direction toward adding stations to each rail type if a station serves multiple rail lines
				//Currently it only populates the first rail line, which is good enough for now. There's an Angular bug getting in the way.
				/*for(var x = 1; x < splitStation.length; x++){
					var alteredStation = stations[i];
					alteredStation["rail_lines_served"] = splitStation[x];
					additionalStations.push(alteredStation);
				}*/
			}
		}
		//stations = stations.concat(additionalStations);
		$scope.stationJSON = [];
		$scope.stationJSON = $scope.stationJSON.concat(stations);
		console.log($scope.stationJSON);

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
			activeStationService.setActiveStationByJSON($scope.selectedStation.selected);
       	}
   });
}]);