package com.swingrove.mirror.services;

import java.time.Clock;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class ClockService {
    private Clock clockServicesClock = null;

    public ClockService(Clock incomingClock) {
        clockServicesClock = incomingClock;
    }

    public String getTime() {
        LocalTime localTime = LocalTime.now(clockServicesClock);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        System.out.println(localTime.format(formatter));
        return localTime.format(formatter);
    }
}
