const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('bengaluru', (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.lat, data.lng, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(data.location);
    console.log(forecastData);
  })
})
