app.controller("DataPanelController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {
    $scope.$on('newActiveStation', function() {

        $scope.trainLines = "";
        for(var i = 1; i < 5; i++){
            if(activeStationService.getActiveStation()["Rail Type " + i] != ""){
                if($scope.trainLines.length != 0){
                    $scope.trainLines += ", ";
                }
                $scope.trainLines += activeStationService.getActiveStation()["Rail Type " + i];
            }
        }
        $scope.trainLines = ((($scope.trainLines == "") || ($scope.trainLines == null)) ? "Data Not Avaialable" : $scope.trainLines);

        $scope.busLines = activeStationService.getActiveStation()["Transit Routes"];
        $scope.busLines = ((($scope.busLines == "") || ($scope.busLines == null)) ? "Data Not Avaialable" : $scope.busLines);

        $scope.localPopulation = activeStationService.getActiveStation()["Area Population (2010)"];
        $scope.localPopulation = ((($scope.localPopulation == "") || ($scope.localPopulation == null)) ? "Data Not Avaialable" : $scope.localPopulation + " People");


        $scope.parkingSpaces = activeStationService.getActiveStation()["Parking Spots Regular"];
        $scope.parkingSpaces = ((($scope.parkingSpaces == "") || ($scope.parkingSpaces == null)) ? "Data Not Avaialable" : $scope.parkingSpaces + " Parking Spaces");

        $scope.bikeParkingSpaces = activeStationService.getActiveStation()["Number of Bicycle Racks"];
        $scope.bikeParkingSpaces = ((($scope.bikeParkingSpaces == "") || ($scope.bikeParkingSpaces == null)) ? "Data Not Avaialable" : $scope.bikeParkingSpaces + " Bicycle Racks");
    });
}]);