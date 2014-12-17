app.controller("MapController", [ "$scope", "$http", "stationService", "activeStationService", function($scope, $http, stationService, activeStationService) {	

    //initialize the map, set the zoom and set it to MD, add the base layer
    var map = L.map('map').setView([39.368087, -76.736899], 13);

	L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png").addTo(map);

    //these icon settings will be applied to every icon we bring in. no sense in duplicating them.
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

    //called when the frontend broadcasts that it has the data
   	$scope.$on('stationServiceReady', function() {   	
		var stations = stationService.getJSON();

        //adds the icons to the map, adds specific colors depending on what Rail Type 1 is (see the JSON)
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
                //on marker click, send the GeoJSON properties to the activeStationService, which sets the active station to be the thing that was just clicked
				activeStationService.setActiveStationByJSON(e.target.options.values);
            });

            marker.addTo(map);
		}

        //this just sets an initial marker
		activeStationService.setActiveStationByJSON(stations[2]);
    });

    //called every time a new active station is set, regardless of the source
    $scope.$on('newActiveStation', function() {
        var activeStationName = activeStationService.getActiveStation()["Station Name"];

        //find the layer that contains the marker for the active station
        map.eachLayer(function(layer){
            if(typeof(layer.options.values) != "undefined"){
                if(layer.options.values["Station Name"] == activeStationName){
                    //pan to the marker, set the zoom to 14, open the popup
                    map.setView([layer.options.values["Latitude"], layer.options.values["Longitude"]], 14);
                    layer.openPopup();
                }
            }
        });
    });
}]);