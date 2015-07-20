app.service('activeStationService', ["$http", "$rootScope", "stationService", function($http, $rootScope, stationService) {
	var activeStation;

	this.setActiveStationByJSON = function(obj) {
	    activeStation = obj;

	    $rootScope.$broadcast('newActiveStation');
	}

	this.setActiveStationByName = function(obj) {
	    var stationJSON = stationService.getJSON();
	    
	    for(var i = 0; i < stationJSON.length; i++){
	    	if(stationJSON[i]["station_name"] == obj){
	    		activeStation = stationJSON[i];
	    		break;
	    	}
	    }

	    $rootScope.$broadcast('newActiveStation');
	}

	this.getActiveStation = function(){
	    return activeStation;
	}


	return {
		setActiveStationByJSON: this.setActiveStationByJSON,
		setActiveStationByName: this.setActiveStationByName,
	    getActiveStation: this.getActiveStation
	};
}]);