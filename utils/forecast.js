const request = require('request');

var {darksky, mapbox} = require('./../keys/keys.js');

const forecast = (lat, lng, callback) => {
  var url = `https://api.darksky.net/forecast/${darksky}/${lat},${lng}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast
