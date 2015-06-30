app.controller("TitleController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {
 	$scope.$on('newActiveStation', function() {
        $scope.title = activeStationService.getActiveStation()["station_name"];
    });
}]);