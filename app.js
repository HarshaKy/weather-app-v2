const request = require('request');

var {darksky, mapbox} = require('./keys/keys.js');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// request({ url: url, json: true  }, (error, response) => {
//   // console.log(error);
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//       console.log('Unable to find location');
//   }
//   else {
//     console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.` );
//   }
// });

geocode('pes university', (error, data) => {
  console.log('error', error);
  console.log('data', data);
})

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('error', error);
  console.log('data', data);
})
