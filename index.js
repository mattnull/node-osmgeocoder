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

 		request({
 			url : 'http://nominatim.openstreetmap.org/search?format=json&q='+address+'&addressdetails=1',
 			headers : {
 				'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36'
 			}

 		}, function (err, res, body) {
 			if(!err && body){
 				body = JSON.parse(body)
 			}
 			else if(err){
 				console.log(err);
 			}
			callback(err, body);
		});
 	},
 	reverse : function(lat, lon, callback){
 		callback = callback || function(){};
 		if(!lat || !lon){
 			callback('Please provide lat and lon.', false);
 			return;
 		}

 		request({
 			url : 'http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+lon+'&addressdetails=1',
 			headers : {
 				'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36'
 			}
 		}, function (err, res, body) {
			if(!err && body){
 				body = JSON.parse(body);
 			}
 			else if(err){
 				console.log(err);
 			}
			callback(err, body);
		});
 	}
 };

 module.exports = OSMGeocoder;
