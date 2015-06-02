app.service('stationService', ["$http", "$rootScope", function($http, $rootScope) {
	var stationJSON;

	$http.get('backend/data.json?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
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