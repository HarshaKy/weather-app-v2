const request = require('request');

var {darksky, mapbox} = require('./../keys/keys.js');

const geocode = (address, callback) => {
  var geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapbox}&limit=1`;

  request({ url: geocodeUrl, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lng: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
