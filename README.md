OSMGeocoder
===========

Simple Open Street Map client for geocoding
````
npm install osmgeocoder
````
Geocode
````
osm = require('osmgeocoder');
osm.geocode('Boulder, CO', function(err, response){
  console.log(response);
});
````

Reverse Geocode
````
osm = require('osmgeocoder');
osm.reverse(40.0150, -105.2700, function(err, response){
  console.log(response);
});
````