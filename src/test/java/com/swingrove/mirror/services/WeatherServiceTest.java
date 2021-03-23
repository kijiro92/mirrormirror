package com.swingrove.mirror.services;

import com.swingrove.mirror.models.weather.WeatherPeriod;
import com.swingrove.mirror.models.weather.WeatherProperties;
import com.swingrove.mirror.models.weather.WeatherResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class WeatherServiceTest {

    @Mock
    RestTemplate restTemplate;

    @InjectMocks
    WeatherService weatherService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getWeather_whenApiServiceWorks_returnsTemperature() {
        WeatherResponse weatherResponse = new WeatherResponse();
        WeatherPeriod weatherPeriod = new WeatherPeriod();
        weatherPeriod.temperature = 42;
        weatherResponse.properties = new WeatherProperties();
        weatherResponse.properties.periods = List.of(weatherPeriod);
        when(restTemplate.getForEntity(anyString(), any()))
                .thenReturn(ResponseEntity.of(Optional.of(weatherResponse)));
        assertThat(weatherService.getWeather()).isEqualTo(42);
    }
}
/*

Call webservice
get temperature from response

 */