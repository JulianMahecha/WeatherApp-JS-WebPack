export class Weather {
    constructor(city, countryCode) {
        this.keyAPI = '8d08c6a041a8bedb295736db9ab2fbd5';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const uri = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.keyAPI}`;
        const data = await fetch(uri);
        return data;
    }
}