package com.swingrove.mirror.services;


import com.swingrove.mirror.models.weather.WeatherResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
    private final RestTemplate restTemplate;

    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public int getWeather() {
        String url = "https://api.weather.gov/gridpoints/LWX/104,82/forecast";
        ResponseEntity<WeatherResponse> response = restTemplate.getForEntity(url, WeatherResponse.class);
        WeatherResponse responseBody = response.getBody();
        if (responseBody != null) {
            return responseBody.properties.periods.get(0).temperature;
        }
        return -202929;
    }
}
