app.controller('SearchController', ['$scope', 'stationService', 'activeStationService', function($scope, stationService, activeStationService) {
	$scope.selectedStation = {};

	$scope.$on('stationServiceReady', function() {
		$scope.stationGeoJSON = stationService.getGeoJSON();
	});

	$scope.$on('newActiveStation', function() {
		//console.log(activeStationService.getActiveStation().properties["Station Name"]);
		$scope.selectedStation.selected = activeStationService.getActiveStation();
	});

	$scope.$watch('selectedStation.selected', function() {
		if(typeof($scope.selectedStation.selected) != "undefined"){
			activeStationService.setActiveStationByGeoJSON($scope.selectedStation.selected);
       	}
   });
}]);