public class WeatherDetailsClass {
    @AuraEnabled
    public static WeatherDetailsWrapper getWeatherDetails(String cityName) {
        String apiKey = '5120d9e7e4a38e19aa7c4d738f6bdff8';
        String endpoint = 'http://api.openweathermap.org/data/2.5/weather';
        endpoint += '?q=' + cityName;
        endpoint += '&units=metric';
        endpoint += '&APPID=' + apiKey;

        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        HttpResponse res = http.send(req);

        WeatherDetailsWrapper weatherDet = new WeatherDetailsWrapper();
        if (res.getStatusCode() == 200) {
            Map<String, Object> result = (Map<String, Object>)JSON.deserializeUntyped(res.getBody());
            weatherDet.city = String.valueOf(result.get('name'));

            Map<String, Object> mainResult = (Map<String, Object>)(result.get('main'));
            weatherDet.temperature = String.valueOf(mainResult.get('temp'));
            weatherDet.pressure = String.valueOf(mainResult.get('pressure'));
            weatherDet.humidity = String.valueOf(mainResult.get('humidity'));
            weatherDet.feelsLike = String.valueOf(mainResult.get('feels_like'));
            weatherDet.tempMin = String.valueOf(mainResult.get('temp_min'));
            weatherDet.tempMax = String.valueOf(mainResult.get('temp_max'));

            List<Object> weatherArray = (List<Object>)result.get('weather');
            if (!weatherArray.isEmpty()) {
                Map<String, Object> weatherObj = (Map<String, Object>)weatherArray[0];
                weatherDet.climate = String.valueOf(weatherObj.get('main'));
                weatherDet.icon = String.valueOf(weatherObj.get('icon')); // Extract the icon
            }
        }
        return weatherDet;
    }

    public class WeatherDetailsWrapper {
        @AuraEnabled public String city { get; set; }
        @AuraEnabled public String temperature { get; set; }
        @AuraEnabled public String pressure { get; set; }
        @AuraEnabled public String humidity { get; set; }
        @AuraEnabled public String feelsLike { get; set; }
        @AuraEnabled public String tempMin { get; set; }
        @AuraEnabled public String tempMax { get; set; }
        @AuraEnabled public String climate { get; set; }
        @AuraEnabled public String icon { get; set; } // Added icon property
    }
}