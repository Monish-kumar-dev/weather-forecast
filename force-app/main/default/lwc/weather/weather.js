import { LightningElement } from 'lwc';
import getWeatherDetails from '@salesforce/apex/WeatherDetailsClass.getWeatherDetails'
export default class Weather extends LightningElement {
    inputCityName = '';
    weatherDetails ={};
    showWeatherDetails = false;
    
    handleInputChange(event) {
        this.inputCityName = event.detail.value;
        console.log('Input City Name:', this.inputCityName); // Add this
    }
    
    
    handleWeatherDetails() {
        console.log('City Name sent to Apex:', this.inputCityName); // Add this
        getWeatherDetails({ cityName: this.inputCityName })
            .then((result) => {
                console.log('Weather Details from Apex:', result); // Add this
                this.showWeatherDetails = true;
                this.weatherDetails = result;
            })
            .catch((error) => {
                console.error('Error from Apex:', error); // Add this
                this.showWeatherDetails = false;
            });
    }
    
    
    
}