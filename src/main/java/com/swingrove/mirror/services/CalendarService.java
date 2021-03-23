package com.swingrove.mirror.services;


import com.swingrove.mirror.models.calendar.CalendarResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class CalendarService {
    private final RestTemplate restTemplate;

    public CalendarService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public int getCalendar() {
        String url = "https://www.googleapis.com/calendar/v3/calendars/stevenwingrove80@gmail.com/events";
        ResponseEntity<CalendarResponse> response = restTemplate.getForEntity(url, CalendarResponse.class);
        CalendarResponse responseBody = response.getBody();
        if (responseBody != null) {
            responseBody.items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0).items.get(0);
        }
        return -202929;
    }
}
