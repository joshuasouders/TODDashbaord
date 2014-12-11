var http = require('http');
var express = require('express');
var fs = require('fs');

var app = express();

//enables a settings so JSONP will work
app.enable("jsonp callback");

var baseURI = "/rest/";
var dataURL = "data.json";
var stationJSON = {};

//CHANGE THIS OUT WHEN THE DATA IS IN SOCRATA, CURRENTLY READS A LOCAL JSON FILE FORMATTED HOW SOCRATA WILL FORMAT IT
//reads the JSON data into memory on initialization.
fs.readFile(dataURL, 'utf8', function (err,data) {
    if(err){
        return console.log(err);
    }

    stationJSON = data;
});

//Returns "REST IS WORKING" when you request the base URI
app.get(baseURI, function(req, res){
    res.send('REST is working');
});

//Returns all of the station JSON data in a single object
app.get(baseURI + "getMapData", function(req, res){
    res.jsonp(stationJSON);
});

//Set up to pull from localhost:8080/rest
var port = 8080;
app.listen(port);
console.log("Server is running on port " + port);