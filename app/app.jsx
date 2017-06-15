const request = require('request')
const yargs = require('yargs')
const geocode = require('./geocode/geocode.jsx')
const weather = require('./weather/weather.jsx')

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address to fetch weather for',
    string: true
  }
  })
  .help()
  .alias('help', 'h')
  .argv


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage)
  } else {
    // console.log(JSON.stringify(results, undefined,2))
    weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
      if(errorMessage) {
        console.log(errorMessage)
      } else {
        console.log(`It's currently ${weatherResults.temp}. It's feels like ${weatherResults.apparentTemperature} `)
      }
    })
  }
})

//lat, lng, callback










//4e5fc2ab1ebc1dc701addf00f808a7b3
// https://api.darksky.net/forecast/4e5fc2ab1ebc1dc701addf00f808a7b3/37.8267,-122.4233
