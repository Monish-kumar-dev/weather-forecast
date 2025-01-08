import { LightningElement } from 'lwc';
import getWeatherDetails from '@salesforce/apex/WeatherDetailsClass.getWeatherDetails';
import MyVideos from '@salesforce/resourceUrl/MyVideos'; // Import static resource

export default class Weather extends LightningElement {
    inputCityName = '';
    weatherDetails = {};
    showWeatherDetails = false;
    videoUrl = '';

    handleInputChange(event) {
        // Update the city name from user input
        this.inputCityName = event.detail.value;
    }

    handleWeatherDetails() {
        // Fetch weather details from Apex class
        getWeatherDetails({ cityName: this.inputCityName })
            .then((result) => {
                this.showWeatherDetails = true;

                // Map the weather icon value to the appropriate video file
                let videoFile = '';
                switch (result.icon) {
                    case '01d': videoFile = '1d.mp4'; break;
                    case '01n': videoFile = '1n.mp4'; break;
                    case '02d': videoFile = '2d.mp4'; break;
                    case '02n': videoFile = '2n.mp4'; break;
                    case '03d':
                    case '03n':
                    case '04d':
                    case '04n': videoFile = '3d.mp4'; break;
                    case '09d':
                    case '09n': videoFile = '4d.mp4'; break;
                    case '10d':
                    case '10n': videoFile = '5d.mp4'; break;
                    case '11d':
                    case '11n': videoFile = '6d.mp4'; break;
                    case '13d':
                    case '13n': videoFile = '7d.mp4'; break;
                    case '50d':
                    case '50n': videoFile = '8d.mp4'; break;
                    default: videoFile = ''; // Handle unexpected cases
                }

                // Generate the video URL using the static resource
                this.videoUrl = `${MyVideos}/${videoFile}`;

                // Update weather details and round off temperature values
                this.weatherDetails = {
                    ...result,
                    temperature: Math.round(result.temperature), // Round temperature
                    feelsLike: Math.round(result.feelsLike),    // Round feels-like temperature
                    tempMin: Math.round(result.tempMin),        // Round minimum temperature
                    tempMax: Math.round(result.tempMax),        // Round maximum temperature
                };
            })
            .catch((error) => {
                console.error('Error:', error);
                this.showWeatherDetails = false;
            });
    }
}
