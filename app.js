const request = require('request');

var {url, geocodeUrl} = require('./keys/keys.js');

request({ url: geocodeUrl, json: true }, (error, response) => {
  var lat = response.body.features[0].center[0];
  var lng = response.body.features[0].center[1];
  console.log(lat, lng);
});

request({ url: url, json: true  }, (error, response) => {
  console.log(response.body.currently);
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.` );
});
