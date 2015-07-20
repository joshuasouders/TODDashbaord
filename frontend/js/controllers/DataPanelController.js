app.controller("DataPanelController", ["$scope", "$http", "activeStationService", function ($scope, $http, activeStationService) {
    $scope.$on('newActiveStation', function() {

        /*
        Transit Information
        */

        $scope.totalRailLines = activeStationService.getActiveStation()["total_rail_lines"];
        $scope.totalRailLines = (((($scope.totalRailLines == "") || ($scope.totalRailLines == null)) && ($scope.totalRailLines != 0)) ? "Data Not Avaialable" : $scope.totalRailLines);

        $scope.modesServed = activeStationService.getActiveStation()["modes_served"];
        $scope.modesServed = (((($scope.modesServed == "") || ($scope.modesServed == null)) && ($scope.modesServed != 0)) ? "Data Not Avaialable" : $scope.modesServed + " Modes Served");

        $scope.transitConnections = activeStationService.getActiveStation()["transit_connections"];
        $scope.transitConnections = (((($scope.transitConnections == "") || ($scope.transitConnections == null)) && ($scope.transitConnections != 0)) ? "Data Not Avaialable" : $scope.transitConnections);

        $scope.busLines = activeStationService.getActiveStation()["connecting_bus_routes"];
        $scope.busLines = (((($scope.busLines == "") || ($scope.busLines == null)) && ($scope.busLines != 0)) ? "Data Not Avaialable" : $scope.busLines);

        $scope.trainLines = activeStationService.getActiveStation()["rail_lines_served"];
        $scope.trainLines = (((($scope.trainLines == "") || ($scope.trainLines == null)) && ($scope.trainLines != 0)) ? "Data Not Avaialable" : $scope.trainLines);

        $scope.weekdayRidershipMARCPenn = activeStationService.getActiveStation()["weekday_ridership_marc_penn"];
        $scope.weekdayRidershipMARCPenn = (((($scope.weekdayRidershipMARCPenn == "") || ($scope.weekdayRidershipMARCPenn == null)) && ($scope.weekdayRidershipMARCPenn != 0)) ? null : $scope.weekdayRidershipMARCPenn);

        $scope.weekdayRidershipMARCCamden = activeStationService.getActiveStation()["weekday_ridership_marc_camden"];
        $scope.weekdayRidershipMARCCamden = (((($scope.weekdayRidershipMARCCamden == "") || ($scope.weekdayRidershipMARCCamden == null)) && ($scope.weekdayRidershipMARCCamden != 0)) ? null : $scope.weekdayRidershipMARCCamden);

        $scope.weekdayRidershipMARCBrunswick = activeStationService.getActiveStation()["weekday_ridership_marc_brunswick"];
        $scope.weekdayRidershipMARCBrunswick = (((($scope.weekdayRidershipMARCBrunswick == "") || ($scope.weekdayRidershipMARCBrunswick == null)) && ($scope.weekdayRidershipMARCBrunswick != 0)) ? null : $scope.weekdayRidershipMARCBrunswick);

        $scope.weekdayRidershipMetro = activeStationService.getActiveStation()["weekday_ridership_metro"];
        $scope.weekdayRidershipMetro = (((($scope.weekdayRidershipMetro == "") || ($scope.weekdayRidershipMetro == null)) && ($scope.weekdayRidershipMetro != 0)) ? null : $scope.weekdayRidershipMetro);

        $scope.weekdayRidershipLightRail = activeStationService.getActiveStation()["weekday_ridership_light_rail"];
        $scope.weekdayRidershipLightRail = (((($scope.weekdayRidershipLightRail == "") || ($scope.weekdayRidershipLightRail == null)) && ($scope.weekdayRidershipLightRail != 0)) ? null : $scope.weekdayRidershipLightRail);

        $scope.weekendRidershipMARCPenn = activeStationService.getActiveStation()["weekend_ridership_marc_penn"];
        $scope.weekendRidershipMARCPenn = (((($scope.weekendRidershipMARCPenn == "") || ($scope.weekendRidershipMARCPenn == null)) && ($scope.weekendRidershipMARCPenn != 0)) ? null : $scope.weekendRidershipMARCPenn);

        $scope.weekendRidershipMARCCamden = activeStationService.getActiveStation()["weekend_ridership_marc_camden"];
        $scope.weekendRidershipMARCCamden = (((($scope.weekendRidershipMARCCamden == "") || ($scope.weekendRidershipMARCCamden == null)) && ($scope.weekendRidershipMARCCamden != 0)) ? null : $scope.weekendRidershipMARCCamden);

        $scope.weekendRidershipMARCBrunswick = activeStationService.getActiveStation()["weekend_ridership_marc_brunswick"];
        $scope.weekendRidershipMARCBrunswick = (((($scope.weekendRidershipMARCBrunswick == "") || ($scope.weekendRidershipMARCBrunswick == null)) && ($scope.weekendRidershipMARCBrunswick != 0)) ? null : $scope.weekendRidershipMARCBrunswick);

        $scope.weekendRidershipMetro = activeStationService.getActiveStation()["weekend_ridership_metro"];
        $scope.weekendRidershipMetro = (((($scope.weekendRidershipMetro == "") || ($scope.weekendRidershipMetro == null)) && ($scope.weekendRidershipMetro != 0)) ? null : $scope.weekendRidershipMetro);

        $scope.weekendRidershipLightRail = activeStationService.getActiveStation()["weekend_ridership_light_rail"];
        $scope.weekendRidershipLightRail = (((($scope.weekendRidershipLightRail == "") || ($scope.weekendRidershipLightRail == null)) && ($scope.weekendRidershipLightRail != 0)) ? null : $scope.weekendRidershipLightRail);

        $scope.frequencyOfServiceWeekdayMARCPenn = activeStationService.getActiveStation()["frequency_of_service_weekday_marc_penn"];
        $scope.frequencyOfServiceWeekdayMARCPenn = (((($scope.frequencyOfServiceWeekdayMARCPenn == "") || ($scope.frequencyOfServiceWeekdayMARCPenn == null)) && ($scope.frequencyOfServiceWeekdayMARCPenn != 0)) ? null : $scope.frequencyOfServiceWeekdayMARCPenn);

        $scope.frequencyOfServiceWeekdayMARCCamden = activeStationService.getActiveStation()["frequency_of_service_weekday_marc_camden"];
        $scope.frequencyOfServiceWeekdayMARCCamden = (((($scope.frequencyOfServiceWeekdayMARCCamden == "") || ($scope.frequencyOfServiceWeekdayMARCCamden == null)) && ($scope.frequencyOfServiceWeekdayMARCCamden != 0)) ? null : $scope.frequencyOfServiceWeekdayMARCCamden);

        $scope.frequencyOfServiceWeekdayMARCBrunswick = activeStationService.getActiveStation()["frequency_of_service_weekday_marc_brunswick"];
        $scope.frequencyOfServiceWeekdayMARCBrunswick = (((($scope.frequencyOfServiceWeekdayMARCBrunswick == "") || ($scope.frequencyOfServiceWeekdayMARCBrunswick == null)) && ($scope.frequencyOfServiceWeekdayMARCBrunswick != 0)) ? null : $scope.frequencyOfServiceWeekdayMARCBrunswick);

        $scope.frequencyOfServiceWeekdayMetro = activeStationService.getActiveStation()["frequency_of_service_weekday_metro"];
        $scope.frequencyOfServiceWeekdayMetro = (((($scope.frequencyOfServiceWeekdayMetro == "") || ($scope.frequencyOfServiceWeekdayMetro == null)) && ($scope.frequencyOfServiceWeekdayMetro != 0)) ? null : $scope.frequencyOfServiceWeekdayMetro);

        $scope.frequencyOfServiceWeekdayLightRail = activeStationService.getActiveStation()["frequency_of_service_weekday_light_rail"];
        $scope.frequencyOfServiceWeekdayLightRail = (((($scope.frequencyOfServiceWeekdayLightRail == "") || ($scope.frequencyOfServiceWeekdayLightRail == null)) && ($scope.frequencyOfServiceWeekdayLightRail != 0)) ? null : $scope.frequencyOfServiceWeekdayLightRail);

        $scope.frequencyOfServiceWeekendMARCPenn = activeStationService.getActiveStation()["frequency_of_service_weekend_marc_penn"];
        $scope.frequencyOfServiceWeekendMARCPenn = (((($scope.frequencyOfServiceWeekendMARCPenn == "") || ($scope.frequencyOfServiceWeekendMARCPenn == null)) && ($scope.frequencyOfServiceWeekendMARCPenn != 0)) ? null : $scope.frequencyOfServiceWeekendMARCPenn);

        $scope.frequencyOfServiceWeekendMARCCamden = activeStationService.getActiveStation()["frequency_of_service_weekend_marc_camden"];
        $scope.frequencyOfServiceWeekendMARCCamden = (((($scope.frequencyOfServiceWeekendMARCCamden == "") || ($scope.frequencyOfServiceWeekendMARCCamden == null)) && ($scope.frequencyOfServiceWeekendMARCCamden != 0)) ? null : $scope.frequencyOfServiceWeekendMARCCamden);

        $scope.frequencyOfServiceWeekendMARCBrunswick = activeStationService.getActiveStation()["frequency_of_service_weekend_marc_brunswick"];
        $scope.frequencyOfServiceWeekendMARCBrunswick = (((($scope.frequencyOfServiceWeekendMARCBrunswick == "") || ($scope.frequencyOfServiceWeekendMARCBrunswick == null)) && ($scope.frequencyOfServiceWeekendMARCBrunswick != 0)) ? null : $scope.frequencyOfServiceWeekendMARCBrunswick);

        $scope.frequencyOfServiceWeekendMetro = activeStationService.getActiveStation()["frequency_of_service_weekend_metro"];
        $scope.frequencyOfServiceWeekendMetro = (((($scope.frequencyOfServiceWeekendMetro == "") || ($scope.frequencyOfServiceWeekendMetro == null)) && ($scope.frequencyOfServiceWeekendMetro != 0)) ? null : $scope.frequencyOfServiceWeekendMetro);

        $scope.frequencyOfServiceWeekendLightRail = activeStationService.getActiveStation()["frequency_of_service_weekend_light_rail"];
        $scope.frequencyOfServiceWeekendLightRail = (((($scope.frequencyOfServiceWeekendLightRail == "") || ($scope.frequencyOfServiceWeekendLightRail == null)) && ($scope.frequencyOfServiceWeekendLightRail != 0)) ? null : $scope.frequencyOfServiceWeekendLightRail);


        /*
        Station Facilities
        */

        $scope.trackCrossing = activeStationService.getActiveStation()["track_crossing"];
        $scope.trackCrossing = (((($scope.trackCrossing == "") || ($scope.trackCrossing == null)) && ($scope.trackCrossing != 0)) ? "Data Not Avaialable" : $scope.trackCrossing);

        $scope.scheduleInformation = activeStationService.getActiveStation()["schedule_information"];
        $scope.scheduleInformation = (((($scope.scheduleInformation == "") || ($scope.scheduleInformation == null)) && ($scope.scheduleInformation != 0)) ? "Data Not Avaialable" : $scope.scheduleInformation);

        $scope.routeInformation = activeStationService.getActiveStation()["route_information"];
        $scope.routeInformation = (((($scope.routeInformation == "") || ($scope.routeInformation == null)) && ($scope.routeInformation != 0)) ? "Data Not Avaialable" : $scope.routeInformation);

        $scope.ticketBoothMachine = activeStationService.getActiveStation()["ticket_booth_machine"];
        $scope.ticketBoothMachine = (((($scope.ticketBoothMachine == "") || ($scope.ticketBoothMachine == null)) && ($scope.ticketBoothMachine != 0)) ? "Data Not Avaialable" : $scope.ticketBoothMachine);

        $scope.shelter = activeStationService.getActiveStation()["shelter"];
        $scope.shelter = (((($scope.shelter == "") || ($scope.shelter == null)) && ($scope.shelter != 0)) ? "Data Not Avaialable" : $scope.shelter);

        $scope.benches = activeStationService.getActiveStation()["benches"];
        $scope.benches = (((($scope.benches == "") || ($scope.benches == null)) && ($scope.benches != 0)) ? "Data Not Avaialable" : $scope.benches);

        $scope.publicRestrooms = activeStationService.getActiveStation()["public_restrooms"];
        $scope.publicRestrooms = (((($scope.publicRestrooms == "") || ($scope.publicRestrooms == null)) && ($scope.publicRestrooms != 0)) ? "Data Not Avaialable" : $scope.publicRestrooms);

        $scope.publicPhones = activeStationService.getActiveStation()["public_phones"];
        $scope.publicPhones = (((($scope.publicPhones == "") || ($scope.publicPhones == null)) && ($scope.publicPhones != 0)) ? "Data Not Avaialable" : $scope.publicPhones);

        /*
        Parking
        */

        $scope.parkingSpaces = activeStationService.getActiveStation()["parking_spots_regular"];
        $scope.parkingSpaces = (((($scope.parkingSpaces == "") || ($scope.parkingSpaces == null)) && ($scope.parkingSpaces != 0)) ? "Data Not Avaialable" : $scope.parkingSpaces + " Parking Spaces");

        $scope.parkingFee = activeStationService.getActiveStation()["parking_fee"];
        $scope.parkingFee = (((($scope.parkingFee == "") || ($scope.parkingFee == null)) && ($scope.parkingFee != 0)) ? "Data Not Avaialable" : $scope.parkingFee);

        $scope.parkingSpotsADA = activeStationService.getActiveStation()["parking_spots_ada"];
        $scope.parkingSpotsADA = (((($scope.parkingSpotsADA == "") || ($scope.parkingSpotsADA == null)) && ($scope.parkingSpotsADA != 0)) ? "Data Not Avaialable" : $scope.parkingSpotsADA);

        $scope.evcChargeStations = activeStationService.getActiveStation()["evc_charge_stations"];
        $scope.evcChargeStations = (((($scope.evcChargeStations == "") || ($scope.evcChargeStations == null)) && ($scope.evcChargeStations != 0)) ? "Data Not Avaialable" : $scope.evcChargeStations);

        $scope.evcChargeStationsOccupied = activeStationService.getActiveStation()["evc_charge_stations_occupied"];
        $scope.evcChargeStationsOccupied = (((($scope.evcChargeStationsOccupied == "") || ($scope.evcChargeStationsOccupied == null)) && ($scope.evcChargeStationsOccupied != 0)) ? "Data Not Avaialable" : $scope.evcChargeStationsOccupied);

        $scope.vehiclesParked2010 = activeStationService.getActiveStation()["vehicles_parked_2010"];
        $scope.vehiclesParked2010 = (((($scope.vehiclesParked2010 == "") || ($scope.vehiclesParked2010 == null)) && ($scope.vehiclesParked2010 != 0)) ? "Data Not Avaialable" : $scope.vehiclesParked2010);

        $scope.vehiclesParked2014 = activeStationService.getActiveStation()["vehicles_parked_2014"];
        $scope.vehiclesParked2014 = (((($scope.vehiclesParked2014 == "") || ($scope.vehiclesParked2014 == null)) && ($scope.vehiclesParked2014 != 0)) ? "Data Not Avaialable" : $scope.vehiclesParked2014);

        $scope.utilizationRate2014 = activeStationService.getActiveStation()["utilization_rate_2014"];
        $scope.utilizationRate2014 = (((($scope.utilizationRate2014 == "") || ($scope.utilizationRate2014 == null)) && ($scope.utilizationRate2014 != 0)) ? "Data Not Avaialable" : $scope.utilizationRate2014 + "%");

        $scope.spacesRelativeAverageDailyWeekday = activeStationService.getActiveStation()["spaces_relative_to_number_of_average_daily_riders_weekday_total_lines"];
        $scope.spacesRelativeAverageDailyWeekday = (((($scope.spacesRelativeAverageDailyWeekday == "") || ($scope.spacesRelativeAverageDailyWeekday == null)) && ($scope.spacesRelativeAverageDailyWeekday != 0)) ? "Data Not Avaialable" : $scope.spacesRelativeAverageDailyWeekday);

        $scope.spacesRelativeAverageDailyWeekend = activeStationService.getActiveStation()["spaces_relative_to_number_of_average_daily_riders_weekend_total_lines"];
        $scope.spacesRelativeAverageDailyWeekend = (((($scope.spacesRelativeAverageDailyWeekend == "") || ($scope.spacesRelativeAverageDailyWeekend == null)) && ($scope.spacesRelativeAverageDailyWeekend != 0)) ? "Data Not Avaialable" : $scope.spacesRelativeAverageDailyWeekend);

        $scope.spacesRelativeOtherStations = activeStationService.getActiveStation()["spaces_relative_to_other_stations_on_the_same_line"];
        $scope.spacesRelativeOtherStations = (((($scope.spacesRelativeOtherStations == "") || ($scope.spacesRelativeOtherStations == null)) && ($scope.spacesRelativeOtherStations != 0)) ? "Data Not Avaialable" : $scope.spacesRelativeOtherStations);

        /*
        Pedestrian Access
        */

        $scope.intersectionDensity = activeStationService.getActiveStation()["intersection_density_1_mile_diameter"];
        $scope.intersectionDensity = (((($scope.intersectionDensity == "") || ($scope.intersectionDensity == null)) && ($scope.intersectionDensity != 0)) ? "Data Not Avaialable" : $scope.intersectionDensity);

        $scope.stoa = activeStationService.getActiveStation()["short_trip_opportunity_analysis_1_mile_buffer"];
        $scope.stoa = (((($scope.stoa == "") || ($scope.stoa == null)) && ($scope.stoa != 0)) ? "Data Not Avaialable" : $scope.stoa);

        /*
        Bicycle Access
        */

        $scope.bikeParkingSpaces = activeStationService.getActiveStation()["number_of_bicycle_racks"];
        $scope.bikeParkingSpaces = (((($scope.bikeParkingSpaces == "") || ($scope.bikeParkingSpaces == null)) && ($scope.bikeParkingSpaces != 0)) ? "Data Not Avaialable" : $scope.bikeParkingSpaces + " Bicycle Racks");


        $scope.typeBicycleRacks = activeStationService.getActiveStation()["type_of_bicycle_racks"];
        $scope.typeBicycleRacks = (((($scope.typeBicycleRacks == "") || ($scope.typeBicycleRacks == null)) && ($scope.typeBicycleRacks != 0)) ? "Data Not Avaialable" : $scope.typeBicycleRacks);

        $scope.numberBicycleLockers = activeStationService.getActiveStation()["number_of_bicycle_lockers"];
        $scope.numberBicycleLockers = (((($scope.numberBicycleLockers == "") || ($scope.numberBicycleLockers == null)) && ($scope.numberBicycleLockers != 0)) ? "Data Not Avaialable" : $scope.numberBicycleLockers);

        $scope.numberBicycleLockersOccupied = activeStationService.getActiveStation()["number_of_bicycle_lockers_occupied"];
        $scope.numberBicycleLockersOccupied = (((($scope.numberBicycleLockersOccupied == "") || ($scope.numberBicycleLockersOccupied == null)) && ($scope.numberBicycleLockersOccupied != 0)) ? "N/A" : $scope.numberBicycleLockersOccupied);

        /*
        TOD Zoning
        */

        $scope.locallyDesignatedTOD = activeStationService.getActiveStation()["locally_designated_tod"];
        $scope.locallyDesignatedTOD = (((($scope.locallyDesignatedTOD == "") || ($scope.locallyDesignatedTOD == null)) && ($scope.locallyDesignatedTOD != 0)) ? "Data Not Avaialable" : $scope.locallyDesignatedTOD);

        $scope.zoningSummary = activeStationService.getActiveStation()["zoning_summary"];
        $scope.zoningSummary = (((($scope.zoningSummary == "") || ($scope.zoningSummary == null)) && ($scope.zoningSummary != 0)) ? "Data Not Avaialable" : $scope.zoningSummary);

        $scope.localZoningDescription = activeStationService.getActiveStation()["local_zoning_descriptions"]["url"];
        $scope.localZoningDescription = (((($scope.localZoningDescription == "") || ($scope.localZoningDescription == null)) && ($scope.localZoningDescription != 0)) ? "Data Not Avaialable" : $scope.localZoningDescription);

        $scope.areaMasterPlans = activeStationService.getActiveStation()["area_master_plans"];
        $scope.areaMasterPlans = (((($scope.areaMasterPlans == "") || ($scope.areaMasterPlans == null)) && ($scope.areaMasterPlans != 0)) ? "Data Not Avaialable" : $scope.areaMasterPlans);

        $scope.stateDesignatedTOD = activeStationService.getActiveStation()["state_designated_tod"];
        $scope.stateDesignatedTOD = (((($scope.stateDesignatedTOD == "") || ($scope.stateDesignatedTOD == null)) && ($scope.stateDesignatedTOD != 0)) ? "Data Not Avaialable" : $scope.stateDesignatedTOD);

        $scope.jurisdiction = activeStationService.getActiveStation()["jurisdiction"];
        $scope.jurisdiction = (((($scope.jurisdiction == "") || ($scope.jurisdiction == null)) && ($scope.jurisdiction != 0)) ? "Data Not Avaialable" : $scope.jurisdiction);

        $scope.todPlaceType = activeStationService.getActiveStation()["tod_place_type"];
        $scope.todPlaceType = (((($scope.todPlaceType == "") || ($scope.todPlaceType == null)) && ($scope.todPlaceType != 0)) ? "Data Not Avaialable" : $scope.todPlaceType);

        /*
        Development Market
        */

        $scope.residentialAlterationsUnits = activeStationService.getActiveStation()["residential_alterations_units"];
        $scope.residentialAlterationsUnits = (((($scope.residentialAlterationsUnits == "") || ($scope.residentialAlterationsUnits == null)) && ($scope.residentialAlterationsUnits != 0)) ? "Data Not Avaialable" : $scope.residentialAlterationsUnits);

        $scope.residentialAlterationsPermits = activeStationService.getActiveStation()["residentail_alterations_permits"];
        $scope.residentialAlterationsPermits = (((($scope.residentialAlterationsPermits == "") || ($scope.residentialAlterationsPermits == null)) && ($scope.residentialAlterationsPermits != 0)) ? "Data Not Avaialable" : $scope.residentialAlterationsPermits);

        $scope.residentialNewConstructionPermits = activeStationService.getActiveStation()["residential_new_construction_permits"];
        $scope.residentialNewConstructionPermits = (((($scope.residentialNewConstructionPermits == "") || ($scope.residentialNewConstructionPermits == null)) && ($scope.residentialNewConstructionPermits != 0)) ? "Data Not Avaialable" : $scope.residentialNewConstructionPermits);

        $scope.residentialNewConstructionUnits = activeStationService.getActiveStation()["residential_new_construction_units"];
        $scope.residentialNewConstructionUnits = (((($scope.residentialNewConstructionUnits == "") || ($scope.residentialNewConstructionUnits == null)) && ($scope.residentialNewConstructionUnits != 0)) ? "Data Not Avaialable" : $scope.residentialNewConstructionUnits);

        $scope.nonResidentialAlterationsPermits = activeStationService.getActiveStation()["non_residential_alterations_permits"];
        $scope.nonResidentialAlterationsPermits = (((($scope.nonResidentialAlterationsPermits == "") || ($scope.nonResidentialAlterationsPermits == null)) && ($scope.nonResidentialAlterationsPermits != 0)) ? "Data Not Avaialable" : $scope.nonResidentialAlterationsPermits);

        $scope.nonResidentialNewConstructionPermits = activeStationService.getActiveStation()["non_residentail_new_contruction_permits"];
        $scope.nonResidentialNewConstructionPermits = (((($scope.nonResidentialNewConstructionPermits == "") || ($scope.nonResidentialNewConstructionPermits == null)) && ($scope.nonResidentialNewConstructionPermits != 0)) ? "Data Not Avaialable" : $scope.nonResidentialNewConstructionPermits);

        $scope.mixedUseNewConstructionPermits = activeStationService.getActiveStation()["mixed_use_new_construction_permits"];
        $scope.mixedUseNewConstructionPermits = (((($scope.mixedUseNewConstructionPermits == "") || ($scope.mixedUseNewConstructionPermits == null)) && ($scope.mixedUseNewConstructionPermits != 0)) ? "Data Not Avaialable" : $scope.mixedUseNewConstructionPermits);

        $scope.mixedUseNewConstructionUnits = activeStationService.getActiveStation()["mixed_use_new_construction_units"];
        $scope.mixedUseNewConstructionUnits = (((($scope.mixedUseNewConstructionUnits == "") || ($scope.mixedUseNewConstructionUnits == null)) && ($scope.mixedUseNewConstructionUnits != 0)) ? "Data Not Avaialable" : $scope.mixedUseNewConstructionUnits);

        $scope.countOfMDPropertyViewParcels = activeStationService.getActiveStation()["count_of_md_property_view_parcels"];
        $scope.countOfMDPropertyViewParcels = (((($scope.countOfMDPropertyViewParcels == "") || ($scope.countOfMDPropertyViewParcels == null)) && ($scope.countOfMDPropertyViewParcels != 0)) ? "Data Not Avaialable" : $scope.countOfMDPropertyViewParcels);

        $scope.cumulativeCompositeScore = activeStationService.getActiveStation()["cumulative_composite_score_yearblt_score_x_sqftstrc_score"];
        $scope.cumulativeCompositeScore = (((($scope.cumulativeCompositeScore == "") || ($scope.cumulativeCompositeScore == null)) && ($scope.cumulativeCompositeScore != 0)) ? "Data Not Avaialable" : $scope.cumulativeCompositeScore);

    });
}]);