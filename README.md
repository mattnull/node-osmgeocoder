OSMGeocoder
===========
<a href="https://nodei.co/npm/osmgeocoder/"><img src="https://nodei.co/npm/osmgeocoder.png?downloads=true"></a>

Simple Open Street Map geocoding client for Node.js
````
npm install osmgeocoder
````
Geocode
```javascript
osm = require('osmgeocoder');
osm.geocode('Boulder, CO', function(err, response){
  console.log(response);
});
````

Reverse Geocode
```javascript
osm = require('osmgeocoder');
osm.reverse(40.0150, -105.2700, function(err, response){
  console.log(response);
});
````
