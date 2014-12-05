app.controller("MapController", [ "$scope", "$http", "leafletData", "stationService", "activeStationService", function($scope, $http, leafletData, stationService, activeStationService) {	

	leafletData.getMap("map").then(
    	function (map) {
			map.setView([39.368087, -76.736899], 13);

			map.eachLayer(function(layer){
				if(layer._url == "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"){
					map.removeLayer(layer);
				}
			});

			L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png").addTo(map);


			$scope.$on('newActiveStation', function() {
				var activeStationName = activeStationService.getActiveStation().properties["Station Name"];

				map.eachLayer(function(layer){
					if(typeof(layer.feature) != "undefined"){
						if(layer.feature.properties["Station Name"] == activeStationName){
							console.log(map.getSize());
							map.setView(layer.getLatLng(), 14, {reset:true});
							layer.openPopup();
						}
					}
				});
			});
    	}
    );

    var baseIconSettings = {  
        iconSize:[20, 20],
        iconAnchor:[12, 0]
    };

    var redIcon = {
    	iconUrl:'frontend/img/icon/red.png'
    }

    var blueIcon = {
    	iconUrl:'frontend/img/icon/blue.png'
    }

   	$scope.$on('stationServiceReady', function() {

   		activeStationService.setActiveStationByGeoJSON(stationService.getGeoJSON().features[0]);

    	angular.extend($scope, $http, leafletData, activeStationService, {
            geojson: {
            	data: stationService.getGeoJSON(),
                pointToLayer: function(feature, latlng) {
                	var icon;

                	for (var attrname in baseIconSettings){
                		if(feature.properties["Parking Score"] == "3"){
                			redIcon[attrname] = baseIconSettings[attrname];
                			icon = redIcon;
                		}
                		else{
                			blueIcon[attrname] = baseIconSettings[attrname];
                			icon = blueIcon;
                		}
                	}
		            return new L.marker(latlng, {icon: L.icon(icon)});
		        },
		        onEachFeature: function (feature, layer) {
		            layer.bindPopup("<div style='text-align: center'><div style='font-weight:bold'>" + feature.properties["Station Name"] + "</div>Line: " + feature.properties["Line"] + "</div>");

		            layer.on("click", function(e){
    					activeStationService.setActiveStationByGeoJSON(e.target.feature);
		            });
		        }
            }
        });
    });
}]);