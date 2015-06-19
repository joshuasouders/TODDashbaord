app.controller("MapController", [ "$scope", "$rootScope", "$http", "stationService", "activeStationService", function($scope, $rootScope, $http, stationService, activeStationService) {  


    var light = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png");
    var dark = L.tileLayer("http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png");
    var sat = L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png");

    //initialize the map, set the zoom and set it to MD, add the base layer
    var map = L.map('map', {attributionControl: false, layers: [sat, dark, light]});
          /*  map.on("load", function(){
                console.log("loaded");
                console.log(document.getElementsByClassName("leaflet-overlay-pane")[0]);
                console.log($(".leaflet-overlay-pane > svg").attr("width"));
                $(".leaflet-overlay-pane > svg").css("width", $(".leaflet-overlay-pane > svg").attr("width") + "px");
                $(".leaflet-overlay-pane > svg").css("height", $(".leaflet-overlay-pane > svg").attr("height") + "px");
            });*/

    var baseMaps = {
        "Satellite": sat,
        "Dark": dark,
        "Light": light
    };

    L.control.layers(baseMaps).addTo(map);

    map.setView([39.191432, -76.873326], 10);

    L.control.attribution({position: 'bottomleft'}).addAttribution("<a href=\"http://www.http://cartodb.com\">CartoDB</a>").addTo(map);

    var legendText = [
        {
            "name": "MARC - Brunswick Line",
            "color": "#6E4C1E",
            "type": "train"
        },
        {
            "name": "MARC - Penn Line",
            "color": "#5F3956",
            "type": "train"
        },
        {
            "name": "MARC - Camden Line",
            "color": "#D87428",
            "type": "train"
        },
        {
            "name": "WMATA Metro",
            "color": "#777777",
            "type": "train"
        },
        {
            "name": "Baltimore Metro",
            "color": "#0CAD4B",
            "type": "train"
        },
        {
            "name": "Light Rail",
            "color": "#0047EE",
            "color2": "#FFFF0D",
            "type": "middle-line"
        },
        {
            "name": "Bus Routes",
            "color": "#1351a3",
            "type": "bus"
        },
        {
            "name": "MTA Station",
            "uri": "frontend/img/icon/yellow_black.png",
            "type": "station"
        },
        {
            "name": "Potential Development Area",
            "color": "#FF0000",
            "type": "polygon"
        }
    ];

    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend');

        for (var i = 0; i < legendText.length; i++) {
            if(legendText[i].type == "station"){
                div.innerHTML += '<img src="' + legendText[i].uri + '" width="12" height="12" style="margin-left:3px; margin-right:7px;"/> ' + legendText[i].name + "<br>";
            }
            else if(legendText[i].type == "middle-line"){
                div.innerHTML += '<i style="background:' + legendText[i].color + '; width:4px; margin-right:0;"></i><i style="background:' + legendText[i].color2 + '; width:8px; margin-right:0;"></i><i style="background:' + legendText[i].color + '; width:4px; margin-right:10px"></i> ' + legendText[i].name + "<br>";
            }
            else if(legendText[i].type == "bus"){
                div.innerHTML += '<i style="background:' + legendText[i].color + '; width:6px; height:3px; margin-top:7px; margin-right:0;"></i><i style="background:' + legendText[i].color2 + '; width:4px; margin-right:0; margin-top:7px; height:3px; opacity:0;"></i><i style="background:' + legendText[i].color + '; width:6px; margin-top:7px; height:3px; margin-right:10px"></i> ' + legendText[i].name + "<br>";
            }
            else if(legendText[i].type == "polygon"){
                div.innerHTML += '<i style="background:' + legendText[i].color + '; width:12px; height:12px; margin-top:2px; margin-left:3px;"></i> ' + legendText[i].name + "<br>";
            }
            else{
                div.innerHTML += '<i style="background:' + legendText[i].color + '"></i> ' + legendText[i].name + "<br>";
            }
        }

        return div;
    };
    legend.addTo(map);

   /* map.on('popupopen', function(centerMarker) {
       // map.setView(centerMarker.popup._latlng, map.getZoom(), {reset: true});
    });*/

    $http.get('backend/TODPolygons2013_2.json?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        //console.log(data);
        parcelStyle = {
            color: "#FF0000",
            weight: 1
        };

        L.geoJson(data, {style: parcelStyle, onEachFeature: function (feature, layer) {
            console.log(feature);
            layer.bindPopup("<div style=\"font-weight:bold; text-align:center;\">Potential Development in the " + feature.properties.Region + " Region</div><br>Development Area: " + (Math.round(feature.properties.TOD_acres * 100) / 100) + " acres<br><br>For more details, contact <a href=\"http://business.maryland.gov/move/find-a-location\">Maryland Department of Business and Economic Development</a>");
        }}).addTo(map);
    });


    //L.esri.dynamicMapLayer("http://geodata.md.gov/imap/rest/services/Transportation/MD_BlackAndWhiteBasemap/MapServer").addTo(map);


   /*$.ajax({
        url: 'http://data.imap.maryland.gov/datasets/44e663e04929408bb320ebe1ac614f71_5.geojson?callback=JSON_CALLBACK',
        dataType: "jsonp"
    }).done(function(data){
        console.log(data);
        L.geoJson(data).addTo(map);
    });*/

    var busRoutes;

    $http.get('backend/trains.json?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        var routeColor = "";
        for(var i = 0; i < data.features.length; i++){
            var routeName = data.features[i].properties["Route_Type"];
            if(routeName == "MARC - Brunswick Line"){
                routeColor = "#6E4C1E";
            }
            else if (routeName == "MARC - Penn Line"){
                routeColor = "#5F3956";
            }
            else if (routeName == "MARC - Camden Line"){
                routeColor = "#D87428";
            }
            else{
                routeColor = "#000000";
            }
            L.geoJson(data.features[i], {color: routeColor, opacity: 1}).addTo(map).bindPopup('<div style="font-weight:bold">' + routeName + "</div>");
        }
    });

    $http.get('backend/WMATAMetro.json?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        var routeColor = "";
        for(var i = 0; i < data.features.length; i++){
            var routeName = "WMATA Metro";
            routeColor = "#777777"
            L.geoJson(data.features[i], {color: routeColor, opacity: 1}).addTo(map).bindPopup('<div style="font-weight:bold">' + routeName + "</div>");
        }
    });

    $http.get('backend/BaltimoreMetro.json?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        var routeColor = "";
        for(var i = 0; i < data.features.length; i++){
            var routeName = "Baltimore Metro";
            routeColor = "#0CAD4B"
            L.geoJson(data.features[i], {color: routeColor, opacity: 1}).addTo(map).bindPopup('<div style="font-weight:bold">' + routeName + "</div>");
        }
    });

    $http.get('backend/LightRail.json?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
        var routeColor = "";
        for(var i = 0; i < data.features.length; i++){
            var routeName = "Light Rail";
            routeColor = "#0047EE"
            L.geoJson(data.features[i], {color: routeColor, opacity: 1, weight:8}).addTo(map).bindPopup('<div style="font-weight:bold">' + routeName + "</div>");
            L.geoJson(data.features[i], {color: "#FFFF0D", opacity: 1, weight:4}).addTo(map).bindPopup('<div style="font-weight:bold">' + routeName + "</div>");
        }
    });

    //these icon settings will be applied to every icon we bring in. no sense in duplicating them.
    var baseIconSettings = {  
        iconSize:[12, 12],
        iconAnchor:[6, 0]
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
        iconUrl:'frontend/img/icon/yellow_black.png'
    }

    var purpleIcon = {
        iconUrl:'frontend/img/icon/purple.png'
    }

    var brownIcon = {
        iconUrl:'frontend/img/icon/brown.png'
    }

    var darkGrayIcon = {
        iconUrl:'frontend/img/icon/darkGray.png'
    }

    var hoverIcon = {
        iconUrl:'frontend/img/icon/hover.png'
    }

    var previousRedIcon;

    //called when the frontend broadcasts that it has the data
    $scope.$on('stationServiceReady', function() {      
        var stations = stationService.getJSON();

        //adds the icons to the map, adds specific colors depending on what Rail Type 1 is (see the JSON)
        for(var i = 0; i < stations.length; i++){
            var icon;

            for (var attrname in baseIconSettings){
                if (stations[i]["Transit Score"] == null){
                    darkGrayIcon[attrname] = baseIconSettings[attrname];
                    icon = darkGrayIcon;
                }
                else{
                    yellowIcon[attrname] = baseIconSettings[attrname];
                    icon = yellowIcon;
                }
            }
            var marker = new L.marker([stations[i]["Latitude"], stations[i]["Longitude"]], {icon: L.icon(icon), values: stations[i]});

            var busLineText = stations[i]["Connecting Bus Routes"] == "" ? "No MTA Bus Lines" : stations[i]["Connecting Bus Routes"];
            if(stations[i]["Transit Score"] != null){
                marker.bindPopup("<div style='text-align: center'><div style='font-weight:bold'>" + stations[i]["Station Name"] + "</div>Line: " + stations[i]["Rail Lines Served"] + "<div style=\"\">Bus Lines: " + busLineText + "</div></div>");
            }
            else{
                marker.bindPopup("<div style='text-align: center'><div style='font-weight:bold'>" + stations[i]["Station Name"] + "</div>No MTA data available, please select another station.</div>");
            }
            marker.on("click", function(e){
                //on marker click, send the GeoJSON properties to the activeStationService, which sets the active station to be the thing that was just clicked
                if(e.target.options.values["Transit Score"] != null){
                    activeStationService.setActiveStationByJSON(e.target.options.values);
                }
                e.target.closePopup();
            });

            marker.on('mouseover', function(e){
                if(e.target.options.values["Transit Score"] != null){
                    var icon;

                    for (var attrname in baseIconSettings){
                        hoverIcon[attrname] = baseIconSettings[attrname];
                        icon = hoverIcon;
                    }

                    e.target.setIcon(L.icon(icon));

                    
                }
                e.target.openPopup();
            });

            marker.on('mouseout', function(e){
                if(e.target.options.values["Transit Score"] != null){
                    if(previousRedIcon != e.target){
                        var icon;

                        for (var attrname in baseIconSettings){
                            yellowIcon[attrname] = baseIconSettings[attrname];
                            icon = yellowIcon;
                        }

                        e.target.setIcon(L.icon(icon));

                       
                    }
                }
                 e.target.closePopup();
            });

            marker.addTo(map);
        }

        //this just sets an initial marker
        activeStationService.setActiveStationByName("Owings Mills");
    });

    var busRouteLayer;

    //called every time a new active station is set, regardless of the source
    $scope.$on('newActiveStation', function() {
        var activeStationName = activeStationService.getActiveStation()["Station Name"];

        //find the layer that contains the marker for the active station
        map.eachLayer(function(layer){
            if(typeof(layer.options) != "undefined"){
                if(typeof(layer.options.values) != "undefined"){
                    if(layer.options.values["Station Name"] == activeStationName){
                        //console.log(layer.options.values["Latitude"]);
                        //map.panTo(new L.latLng(layer.options.values["Latitude"], layer.options.values["Longitude"]));

                        if(typeof busRouteLayer != "undefined"){
                            map.removeLayer(busRouteLayer);
                        }

                        if(typeof busRoutes != "undefined"){
                            var busRouteArr = activeStationService.getActiveStation()["Connecting Bus Routes"].split(", ");
                            var busRouteArrIndex = 0;

                            var layerGroupArr = [];

                            for(var i = 0; i < busRoutes.features.length; i++){
                                if(typeof busRouteArr[busRouteArrIndex] != "undefined"){
                                    var busRouteTemp;
                                    if(busRouteArr[busRouteArrIndex].toString().length == 1){
                                        busRouteTemp = "00" + busRouteArr[busRouteArrIndex].toString();
                                    }
                                    else if(busRouteArr[busRouteArrIndex].toString().length == 2){
                                        busRouteTemp = "0" + busRouteArr[busRouteArrIndex].toString();
                                    }
                                    else{
                                        busRouteTemp = busRouteArr[busRouteArrIndex].toString();
                                    }
                                    if(busRouteTemp == busRoutes.features[i].properties["Route_Number"]){
                                        layerGroupArr.push(L.geoJson(busRoutes.features[i], {dashArray: "10, 5", opacity: 1, weight:2, color:"#1351a3"}).bindPopup('<div>Bus Line: ' + busRouteTemp + '</div>'));
                                        if(busRouteArrIndex < busRouteArr.length){
                                            busRouteArrIndex++;
                                        }
                                        else{
                                            break;
                                        }
                                    }
                                }
                            }
                            busRouteLayer = L.layerGroup(layerGroupArr).addTo(map);

                        }
                        else{
                            $http.get('http://data.imap.maryland.gov/datasets/44e663e04929408bb320ebe1ac614f71_11.geojson').success(function(data, status, headers, config) {
                                busRoutes = data;

                                var busRouteArr = activeStationService.getActiveStation()["Connecting Bus Routes"].split(", ");
                                var busRouteArrIndex = 0;

                                var layerGroupArr = [];

                                for(var i = 0; i < busRoutes.features.length; i++){
                                    if(typeof busRouteArr[busRouteArrIndex] != "undefined"){
                                        var busRouteTemp;
                                        if(busRouteArr[busRouteArrIndex].toString().length == 1){
                                            busRouteTemp = "00" + busRouteArr[busRouteArrIndex].toString();
                                        }
                                        else if(busRouteArr[busRouteArrIndex].toString().length == 2){
                                            busRouteTemp = "0" + busRouteArr[busRouteArrIndex].toString();
                                        }
                                        else{
                                            busRouteTemp = busRouteArr[busRouteArrIndex].toString();
                                        }
                                        if(busRouteTemp == busRoutes.features[i].properties["Route_Number"]){
                                            var line = L.geoJson(busRoutes.features[i], {dashArray: "10, 5", opacity: 1, weight:2, color:"#1351a3"});
                                            line.bindPopup('<div>Bus Line: ' + busRouteTemp + '</div>');
                                            layerGroupArr.push(line);
                                            if(busRouteArrIndex < busRouteArr.length){
                                                busRouteArrIndex++;
                                            }
                                            else{
                                                break;
                                            }
                                        }
                                    }
                                }
                                busRouteLayer = L.layerGroup(layerGroupArr).addTo(map);
                            });
                        }

                        var icon;

                        if(typeof previousRedIcon != "undefined"){
                            for (var attrname in baseIconSettings){
                                yellowIcon[attrname] = baseIconSettings[attrname];
                                icon = yellowIcon;
                            }

                            previousRedIcon.setIcon(L.icon(icon));
                        }

                        for (var attrname in baseIconSettings){
                            hoverIcon[attrname] = baseIconSettings[attrname];
                            icon = hoverIcon;
                        }

                        layer.setIcon(L.icon(icon));

                        previousRedIcon = layer;
                    }
                }
            }
        });
    });

    $rootScope.$on('invalidateSize', function () {
        setTimeout(function(){map.invalidateSize()}, 1000);
    });
}]);