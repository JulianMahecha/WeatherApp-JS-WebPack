require('./index.css');
const {
    Weather
} = require('./weather');
const weather = new Weather('Bogota', 'co');

const {
    UI
} = require('./ui');
const ux = new UI();

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);

    if (data.cod == 200) {
        ux.render(data);
    }else{
        ux.showError(data);
    }
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    weather.changeLocation(city, countryCode);
    fetchWeather();
    e.preventDefault;
})
document.addEventListener('DOMContentLoaded', fetchWeather);