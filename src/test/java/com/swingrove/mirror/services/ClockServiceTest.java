package com.swingrove.mirror.services;

import org.junit.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.Clock;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import static org.junit.jupiter.api.Assertions.*;

class ClockServiceTest {

    ClockService clockService = null;
    @BeforeEach
    void setUp() {
        Clock newClock = Clock.systemDefaultZone();
        clockService = new ClockService(newClock);
    }
    @Test
    public void printsTimeTest() {
        assertEquals(ZonedDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm")), clockService.getTime());
    }


}
//https://api.weather.gov/points/39.122689,-76.759296//
// https://api.weather.gov/gridpoints/LWX/104,82/forecast