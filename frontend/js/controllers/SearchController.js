app.controller('SearchController', ['$scope', 'stationService', 'activeStationService', function($scope, stationService, activeStationService) {
	$scope.selectedStation = {};

	$scope.$on('stationServiceReady', function() {
		$scope.stationJSON = stationService.getJSON().sort(function(a, b){
		    return a['Station Name'] < b['Station Name'] ? -1 : a['Station Name'] > b['Station Name'] ? 1 : 0;
		});;
	});

	$scope.$on('newActiveStation', function() {
		$scope.selectedStation.selected = activeStationService.getActiveStation();
	});

	$scope.groupByFunction = function(item){
		return item["Rail Type 1"];
	}

	$scope.$watch('selectedStation.selected', function() {
		if(typeof($scope.selectedStation.selected) != "undefined"){
			activeStationService.setActiveStationByJSON($scope.selectedStation.selected);
       	}
   });
}]);