var app = angular.module('StationMapDashboard', ['leaflet-directive']);

app.controller('MapDataController', function ($scope, $http) {
	$http.jsonp('http://localhost:8080/rest/getMapData?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
	    $scope.stations = data.features;
	});
});

