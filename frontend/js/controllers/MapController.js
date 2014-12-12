app.controller("MapController", [ "$scope", "$http", "leafletData", "stationService", "activeStationService", function($scope, $http, leafletData, stationService, activeStationService) {	

	leafletData.getMap("map").then(
    	function (map) {
			map.setView([39.368087, -76.736899], 13);

			map.eachLayer(function(layer){
				if(layer._url == "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"){
					map.removeLayer(layer);
				}
			});

			L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png").addTo(map);


			$scope.$on('newActiveStation', function() {
				var activeStationName = activeStationService.getActiveStation()["Station Name"];

				map.eachLayer(function(layer){
					if(typeof(layer.options.values) != "undefined"){
						if(layer.options.values["Station Name"] == activeStationName){
							map.setView([layer.options.values["Latitude"], layer.options.values["Longitude"]], 14, {reset:true});
							layer.openPopup();
						}
					}
				});
			});
    	}
    );

    var baseIconSettings = {  
        iconSize:[15, 15],
        iconAnchor:[7, 0]
    };

    var redIcon = {
    	iconUrl:'frontend/img/icon/red.png'
    }

    var blueIcon = {
    	iconUrl:'frontend/img/icon/blue.png'
    }

    var greenIcon = {
        iconUrl:'frontend/img/icon/green.png'
    }

    var orangeIcon = {
        iconUrl:'frontend/img/icon/orange.png'
    }

    var lightblueIcon = {
        iconUrl:'frontend/img/icon/lightblue.png'
    }

    var yellowIcon = {
        iconUrl:'frontend/img/icon/yellow.png'
    }

   	$scope.$on('stationServiceReady', function() {   	
   		leafletData.getMap("map").then(
    		function (map) {
    			var stations = stationService.getJSON();

    			for(var i = 0; i < stations.length; i++){
    				var icon;

                	for (var attrname in baseIconSettings){
                		if(stations[i]["Rail Type 1"] == "Light Rail"){
                			redIcon[attrname] = baseIconSettings[attrname];
                			icon = redIcon;
                		}
                		else if (stations[i]["Rail Type 1"] == "MARC: Penn Line"){
                			blueIcon[attrname] = baseIconSettings[attrname];
                			icon = blueIcon;
                		}
                        else if (stations[i]["Rail Type 1"] == "MARC: Brunswick Line"){
                            greenIcon[attrname] = baseIconSettings[attrname];
                            icon = greenIcon;
                        }
                        else if (stations[i]["Rail Type 1"] == "WMATA Metro"){
                            orangeIcon[attrname] = baseIconSettings[attrname];
                            icon = orangeIcon;
                        }
                        else if (stations[i]["Rail Type 1"] == "MARC: Camden Line"){
                            lightblueIcon[attrname] = baseIconSettings[attrname];
                            icon = lightblueIcon;
                        }
                        else{
                            yellowIcon[attrname] = baseIconSettings[attrname];
                            icon = yellowIcon;
                        }
                	}
		            var marker = new L.marker([stations[i]["Latitude"], stations[i]["Longitude"]], {icon: L.icon(icon), values: stations[i]});

		            marker.bindPopup("<div style='text-align: center'><div style='font-weight:bold'>" + stations[i]["Station Name"] + "</div>Line: " + stations[i]["Rail Type 1"] + "</div>");

		            marker.on("click", function(e){
    					activeStationService.setActiveStationByJSON(e.target.options.values);
		            });

		            marker.addTo(map);
    			}

    			activeStationService.setActiveStationByJSON(stations[2]);
    		}
    	);
    });
}]);