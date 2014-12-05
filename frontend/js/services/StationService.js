app.service('stationService', ["$http", "$rootScope", function($http, $rootScope) {
	var stationGeoJSON;

	$http.jsonp('http://localhost:8080/rest/getMapData?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
		stationGeoJSON = data;

		$rootScope.$broadcast('stationServiceReady');
	});

	this.setGeoJSON = function(obj) {
	    stationGeoJSON = obj;
	}

	this.getGeoJSON = function(){
	    return stationGeoJSON;
	}

	return {
		setGeoJSON: this.setGeoJSON,
	    getGeoJSON: this.getGeoJSON
	};
}]);