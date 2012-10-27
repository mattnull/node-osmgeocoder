/**
 * Simple client for geocoding and reverse 
 * geocoding using the Open Street Map API
 * @author Matt Null -- hello@mattnull.com
 * http://github.com/mattnull
 */
 var request = require('request');

 var OSMGeocoder = {
 	geocode : function(address, callback){
 		callback = callback || function(){};

 		if(!address){
 			callback('Please provide an address.', false);
 			return;
 		}

 		address = address.replace(/ /g, '+');

 		request('http://nominatim.openstreetmap.org/search?format=json&q='+address+'&addressdetails=1', function (err, res, body) {
			callback(err, JSON.parse(body));
		});
 	},
 	reverse : function(lat, lon, callback){
 		callback = callback || function(){};
 		if(!lat || !lon){
 			callback('Please provide lat and lon.', false);
 			return;
 		}

 		request('http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+lon+'&addressdetails=1', function (err, res, body) {
			callback(err, JSON.parse(body));
		});
 	}
 };

 module.exports = OSMGeocoder;
