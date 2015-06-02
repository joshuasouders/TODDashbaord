app.controller("DataPanelController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {
    $scope.$on('newActiveStation', function() {

        /*
        General
        */

        $scope.trainLines = activeStationService.getActiveStation()["Rail Lines Served"];
        $scope.trainLines = (((($scope.trainLines == "") || ($scope.trainLines == null)) && ($scope.trainLines != 0)) ? "Data Not Avaialable" : $scope.trainLines);

        $scope.stateDesignatedTOD = activeStationService.getActiveStation()["State Designated TOD"];
        $scope.stateDesignatedTOD = (((($scope.stateDesignatedTOD == "") || ($scope.stateDesignatedTOD == null)) && ($scope.stateDesignatedTOD != 0)) ? "Data Not Avaialable" : $scope.stateDesignatedTOD);

        $scope.jurisdiction = activeStationService.getActiveStation()["Jurisdiction"];
        $scope.jurisdiction = (((($scope.jurisdiction == "") || ($scope.jurisdiction == null)) && ($scope.jurisdiction != 0)) ? "Data Not Avaialable" : $scope.jurisdiction);

        $scope.todPlaceType = activeStationService.getActiveStation()["TOD Place Type"];
        $scope.todPlaceType = (((($scope.todPlaceType == "") || ($scope.todPlaceType == null)) && ($scope.todPlaceType != 0)) ? "Data Not Avaialable" : $scope.todPlaceType);

        $scope.localPopulation = activeStationService.getActiveStation()["Area Population (2010)"];
        $scope.localPopulation = (((($scope.localPopulation == "") || ($scope.localPopulation == null)) && ($scope.localPopulation != 0)) ? "Data Not Avaialable" : $scope.localPopulation + " People");

        $scope.stationType = activeStationService.getActiveStation()["Station Type"];
        $scope.stationType = (((($scope.stationType == "") || ($scope.stationType == null)) && ($scope.stationType != 0)) ? "Data Not Avaialable" : $scope.stationType);

        /*
        Transit Information
        */

        $scope.totalRailLines = activeStationService.getActiveStation()["Total Rail Lines"];
        $scope.totalRailLines = (((($scope.totalRailLines == "") || ($scope.totalRailLines == null)) && ($scope.totalRailLines != 0)) ? "Data Not Avaialable" : $scope.totalRailLines);

        $scope.modesServed = activeStationService.getActiveStation()["Modes Served"];
        $scope.modesServed = (((($scope.modesServed == "") || ($scope.modesServed == null)) && ($scope.modesServed != 0)) ? "Data Not Avaialable" : $scope.modesServed + " Modes Served");

        $scope.transitConnections = activeStationService.getActiveStation()["Transit Connections"];
        $scope.transitConnections = (((($scope.transitConnections == "") || ($scope.transitConnections == null)) && ($scope.transitConnections != 0)) ? "Data Not Avaialable" : $scope.transitConnections);

        $scope.busLines = activeStationService.getActiveStation()["Connecting Bus Routes"];
        $scope.busLines = (((($scope.busLines == "") || ($scope.busLines == null)) && ($scope.busLines != 0)) ? "Data Not Avaialable" : $scope.busLines);

        /*
        Station Facilities
        */

        $scope.trackCrossing = activeStationService.getActiveStation()["Track Crossing"];
        $scope.trackCrossing = (((($scope.trackCrossing == "") || ($scope.trackCrossing == null)) && ($scope.trackCrossing != 0)) ? "Data Not Avaialable" : $scope.trackCrossing);

        $scope.scheduleInformation = activeStationService.getActiveStation()["Schedule Information"];
        $scope.scheduleInformation = (((($scope.scheduleInformation == "") || ($scope.scheduleInformation == null)) && ($scope.scheduleInformation != 0)) ? "Data Not Avaialable" : $scope.scheduleInformation);

        $scope.routeInformation = activeStationService.getActiveStation()["Route Information"];
        $scope.routeInformation = (((($scope.routeInformation == "") || ($scope.routeInformation == null)) && ($scope.routeInformation != 0)) ? "Data Not Avaialable" : $scope.routeInformation);

        $scope.ticketBoothMachine = activeStationService.getActiveStation()["Ticket Booth/Machine"];
        $scope.ticketBoothMachine = (((($scope.ticketBoothMachine == "") || ($scope.ticketBoothMachine == null)) && ($scope.ticketBoothMachine != 0)) ? "Data Not Avaialable" : $scope.ticketBoothMachine);

        $scope.shelter = activeStationService.getActiveStation()["Shelter"];
        $scope.shelter = (((($scope.shelter == "") || ($scope.shelter == null)) && ($scope.shelter != 0)) ? "Data Not Avaialable" : $scope.shelter);

        $scope.benches = activeStationService.getActiveStation()["Benches"];
        $scope.benches = (((($scope.benches == "") || ($scope.benches == null)) && ($scope.benches != 0)) ? "Data Not Avaialable" : $scope.benches);

        $scope.publicRestrooms = activeStationService.getActiveStation()["Public Restrooms"];
        $scope.publicRestrooms = (((($scope.publicRestrooms == "") || ($scope.publicRestrooms == null)) && ($scope.publicRestrooms != 0)) ? "Data Not Avaialable" : $scope.publicRestrooms);

        $scope.publicPhones = activeStationService.getActiveStation()["Public Phones"];
        $scope.publicPhones = (((($scope.publicPhones == "") || ($scope.publicPhones == null)) && ($scope.publicPhones != 0)) ? "Data Not Avaialable" : $scope.publicPhones);

        /*
        Parking
        */

        $scope.parkingSpaces = activeStationService.getActiveStation()["Parking Spots Regular"];
        $scope.parkingSpaces = (((($scope.parkingSpaces == "") || ($scope.parkingSpaces == null)) && ($scope.parkingSpaces != 0)) ? "Data Not Avaialable" : $scope.parkingSpaces + " Parking Spaces");

        $scope.parkingFee = activeStationService.getActiveStation()["Parking Fee"];
        $scope.parkingFee = (((($scope.parkingFee == "") || ($scope.parkingFee == null)) && ($scope.parkingFee != 0)) ? "Data Not Avaialable" : $scope.parkingFee);

        $scope.parkingSpotsADA = activeStationService.getActiveStation()["ADA Parking Spots"];
        $scope.parkingSpotsADA = (((($scope.parkingSpotsADA == "") || ($scope.parkingSpotsADA == null)) && ($scope.parkingSpotsADA != 0)) ? "Data Not Avaialable" : $scope.parkingSpotsADA);

        $scope.evcChargeStations = activeStationService.getActiveStation()["EVC Charge Stations"];
        $scope.evcChargeStations = (((($scope.evcChargeStations == "") || ($scope.evcChargeStations == null)) && ($scope.evcChargeStations != 0)) ? "Data Not Avaialable" : $scope.evcChargeStations);

        $scope.evcChargeStationsOccupied = activeStationService.getActiveStation()["EVC Charge Stations Occupied"];
        $scope.evcChargeStationsOccupied = (((($scope.evcChargeStationsOccupied == "") || ($scope.evcChargeStationsOccupied == null)) && ($scope.evcChargeStationsOccupied != 0)) ? "Data Not Avaialable" : $scope.evcChargeStationsOccupied);

        $scope.vehiclesParked2010 = activeStationService.getActiveStation()["Vehicles Parked (2010)"];
        $scope.vehiclesParked2010 = (((($scope.vehiclesParked2010 == "") || ($scope.vehiclesParked2010 == null)) && ($scope.vehiclesParked2010 != 0)) ? "Data Not Avaialable" : $scope.vehiclesParked2010);

        $scope.vehiclesParked2014 = activeStationService.getActiveStation()["Vehicles Parked (2014)"];
        $scope.vehiclesParked2014 = (((($scope.vehiclesParked2014 == "") || ($scope.vehiclesParked2014 == null)) && ($scope.vehiclesParked2014 != 0)) ? "Data Not Avaialable" : $scope.vehiclesParked2014);

        $scope.utilizationRate2014 = activeStationService.getActiveStation()["Utilization Rate (2014)"];
        $scope.utilizationRate2014 = (((($scope.utilizationRate2014 == "") || ($scope.utilizationRate2014 == null)) && ($scope.utilizationRate2014 != 0)) ? "Data Not Avaialable" : $scope.utilizationRate2014);

        $scope.spacesRelativeAverageDailyWeekday = activeStationService.getActiveStation()["Spaces relative to number of Average Daily Riders (Weekday) Total lines"];
        $scope.spacesRelativeAverageDailyWeekday = (((($scope.spacesRelativeAverageDailyWeekday == "") || ($scope.spacesRelativeAverageDailyWeekday == null)) && ($scope.spacesRelativeAverageDailyWeekday != 0)) ? "Data Not Avaialable" : $scope.spacesRelativeAverageDailyWeekday);

        $scope.spacesRelativeAverageDailyWeekend = activeStationService.getActiveStation()["Spaces relative to number of Average Daily Riders (Weekend) Total lines"];
        $scope.spacesRelativeAverageDailyWeekend = (((($scope.spacesRelativeAverageDailyWeekend == "") || ($scope.spacesRelativeAverageDailyWeekend == null)) && ($scope.spacesRelativeAverageDailyWeekend != 0)) ? "Data Not Avaialable" : $scope.spacesRelativeAverageDailyWeekend);

        $scope.spacesRelativeOtherStations = activeStationService.getActiveStation()["Spaces relative to other stations on the same line"];
        $scope.spacesRelativeOtherStations = (((($scope.spacesRelativeOtherStations == "") || ($scope.spacesRelativeOtherStations == null)) && ($scope.spacesRelativeOtherStations != 0)) ? "Data Not Avaialable" : $scope.spacesRelativeOtherStations);

        /*
        Pedestrian Access
        */

        $scope.intersectionDensity = activeStationService.getActiveStation()["Intersection Density (1 Mile Diameter)"];
        $scope.intersectionDensity = (((($scope.intersectionDensity == "") || ($scope.intersectionDensity == null)) && ($scope.intersectionDensity != 0)) ? "Data Not Avaialable" : $scope.intersectionDensity);

        $scope.stoa = activeStationService.getActiveStation()["Short Trip Opportunity Analysis (1 Mile Buffer)"];
        $scope.stoa = (((($scope.stoa == "") || ($scope.stoa == null)) && ($scope.stoa != 0)) ? "Data Not Avaialable" : $scope.stoa);

        /*
        Bicycle Access
        */

        $scope.bikeParkingSpaces = activeStationService.getActiveStation()["Number of Bicycle Racks"];
        $scope.bikeParkingSpaces = (((($scope.bikeParkingSpaces == "") || ($scope.bikeParkingSpaces == null)) && ($scope.bikeParkingSpaces != 0)) ? "Data Not Avaialable" : $scope.bikeParkingSpaces + " Bicycle Racks");


        $scope.typeBicycleRacks = activeStationService.getActiveStation()["Type of Bicycle Racks"];
        $scope.typeBicycleRacks = (((($scope.typeBicycleRacks == "") || ($scope.typeBicycleRacks == null)) && ($scope.typeBicycleRacks != 0)) ? "Data Not Avaialable" : $scope.typeBicycleRacks);

        $scope.numberBicycleLockers = activeStationService.getActiveStation()["Number of Bicycle Lockers"];
        $scope.numberBicycleLockers = (((($scope.numberBicycleLockers == "") || ($scope.numberBicycleLockers == null)) && ($scope.numberBicycleLockers != 0)) ? "Data Not Avaialable" : $scope.numberBicycleLockers);

        $scope.numberBicycleLockersOccupied = activeStationService.getActiveStation()["Number of Bicycle Lockers Occupied"];
        $scope.numberBicycleLockersOccupied = (((($scope.numberBicycleLockersOccupied == "") || ($scope.numberBicycleLockersOccupied == null)) && ($scope.numberBicycleLockersOccupied != 0)) ? "Data Not Avaialable" : $scope.numberBicycleLockersOccupied);

        /*
        TOD Zoning
        */

        $scope.locallyDesignatedTOD = activeStationService.getActiveStation()["Locally Designated TOD"];
        $scope.locallyDesignatedTOD = (((($scope.locallyDesignatedTOD == "") || ($scope.locallyDesignatedTOD == null)) && ($scope.locallyDesignatedTOD != 0)) ? "Data Not Avaialable" : $scope.locallyDesignatedTOD);

        $scope.zoningSummary = activeStationService.getActiveStation()["Zoning Summary"];
        $scope.zoningSummary = (((($scope.zoningSummary == "") || ($scope.zoningSummary == null)) && ($scope.zoningSummary != 0)) ? "Data Not Avaialable" : $scope.zoningSummary);

        $scope.localZoningDescription = activeStationService.getActiveStation()["Local Zoning Descriptions"];
        $scope.localZoningDescription = (((($scope.localZoningDescription == "") || ($scope.localZoningDescription == null)) && ($scope.localZoningDescription != 0)) ? "Data Not Avaialable" : $scope.localZoningDescription);

        $scope.areaMasterPlans = activeStationService.getActiveStation()["Area Master plans"];
        $scope.areaMasterPlans = (((($scope.areaMasterPlans == "") || ($scope.areaMasterPlans == null)) && ($scope.areaMasterPlans != 0)) ? "Data Not Avaialable" : $scope.areaMasterPlans);


        /*$scope.trainLines = "";
        for(var i = 1; i < 5; i++){
            if(activeStationService.getActiveStation()["Rail Type " + i] != ""){
                if($scope.trainLines.length != 0){
                    $scope.trainLines += ", ";
                }
                $scope.trainLines += activeStationService.getActiveStation()["Rail Type " + i];
            }
        }
        $scope.trainLines = ((($scope.trainLines == "") || ($scope.trainLines == null)) ? "Data Not Avaialable" : $scope.trainLines);*/




    });
}]);