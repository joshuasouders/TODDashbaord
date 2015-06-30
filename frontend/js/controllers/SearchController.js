app.controller('SearchController', ['$scope', 'stationService', 'activeStationService', function($scope, stationService, activeStationService) {
	$scope.selectedStation = {};

	$scope.$on('stationServiceReady', function() {
		$scope.stationJSON = stationService.getJSON().sort(function(a, b){
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