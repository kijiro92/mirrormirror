package com.swingrove.mirror.controllers;

import com.swingrove.mirror.services.WeatherService;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/weather/")
public class WeatherController {
    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    public int getWeather() {
         return weatherService.getWeather();
    }
}
