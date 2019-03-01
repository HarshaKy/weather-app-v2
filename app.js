const request = require('request');

const url = 'https://api.darksky.net/forecast/8ddcf168b2f164ee9d3fffd5162a0be4/37.8267,-122.4233?units=si';
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/yelahanka%20new%20town.json?access_token=pk.eyJ1IjoiaGFyc2hha3kiLCJhIjoiY2pzcWIydGY5MTY2bTQ5bXhzMnFzcm9odyJ9.Qx2o5afY2Omo3TmlEIHpOw&limit=1';

request({ url: url, json: true  }, (error, response) => {
  // console.log(response.body.currently);
  console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.` );
});

request({ url: geocodeUrl, json: true }, (error, response) => {
  console.log(response.body.features[0].geometry.coordinates);
});
