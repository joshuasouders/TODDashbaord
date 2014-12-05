app.service('activeStationService', ["$http", "$rootScope", "stationService", function($http, $rootScope, stationService) {
	var activeStation;

	this.setActiveStationByGeoJSON = function(obj) {
	    activeStation = obj;

	    $rootScope.$broadcast('newActiveStation');
	}

	this.setActiveStationByName = function(obj) {
	    var stationGeoJSON = stationService.getGeoJSON();
	    
	    for(var i = 0; i < stationGeoJSON.length; i++){
	    	if(stationGeoJSON.features[i].properties.name == obj){
	    		activeStation = stationGeoJSON.features[i];
	    		break;
	    	}
	    }

	    $rootScope.$broadcast('newActiveStation');
	}

	this.getActiveStation = function(){
	    return activeStation;
	}

	return {
		setActiveStationByGeoJSON: this.setActiveStationByGeoJSON,
		setActiveStationByName: this.setActiveStationByName,
	    getActiveStation: this.getActiveStation
	};
}]);