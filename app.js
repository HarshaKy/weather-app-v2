const request = require('request');

var {url, geocodeUrl} = require('./keys/keys.js');

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
      console.log('Unable to find location. Try another search!');
  }
  else {
    var lat = response.body.features[0].center[0];
    var lng = response.body.features[0].center[1];
    console.log(lat, lng);
  }
});

request({ url: url, json: true  }, (error, response) => {
  // console.log(error);
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
      console.log('Unable to find location');
  }
  else {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.` );
  }
});
