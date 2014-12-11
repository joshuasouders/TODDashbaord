app.service('stationService', ["$http", "$rootScope", function($http, $rootScope) {
	var stationJSON;

	$http.jsonp('http://localhost:8080/rest/getMapData?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
		stationJSON = data;

		$rootScope.$broadcast('stationServiceReady');
	});

	this.setJSON = function(obj) {
	    stationJSON = obj;
	}

	this.getJSON = function(){
	    return stationJSON;
	}

	return {
		setJSON: this.setJSON,
	    getJSON: this.getJSON
	};
}]);