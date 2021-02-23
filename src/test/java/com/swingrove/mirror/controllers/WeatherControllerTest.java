package com.swingrove.mirror.controllers;

import com.swingrove.mirror.services.WeatherService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class WeatherControllerTest {
    @Mock
    WeatherService weatherService;

    @InjectMocks
    WeatherController weatherController;

    @Test
    public void getWeather_shouldReturnWeather() {
        when(weatherService.getWeather()).thenReturn(42);
        assertEquals(42, weatherController.getWeather());
    }

}