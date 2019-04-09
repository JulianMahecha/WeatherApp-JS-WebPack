export class Weather {
    constructor(city, countryCode) {
        this.keyAPI = '8d08c6a041a8bedb295736db9ab2fbd5';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const uri = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.keyAPI}&units=metric`;
        const response = await fetch(uri);
        const data = await response.json();
        return data;
    }

    changeLocation(city, code) {
        this.city = city;
        this.countryCode = code;
    }
}