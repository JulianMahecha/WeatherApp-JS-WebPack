require('./index.css');
const {Weather} = require ('./weather');
const weather = new Weather('Bogota', 'co');


async function fetchWeather(){
   const data = await weather.getWeather();
   console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);