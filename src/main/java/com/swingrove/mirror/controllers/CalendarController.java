package com.swingrove.mirror.controllers;

import com.swingrove.mirror.services.CalendarService;
import com.swingrove.mirror.services.WeatherService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calendar")
public class CalendarController {
    private final CalendarService calendarService;

    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @GetMapping
    @ResponseBody
    public int getCalendar() {
         return calendarService.getCalendar();
    }
}
