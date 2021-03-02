package com.swingrove.mirror.services;

import com.swingrove.mirror.controllers.HelloController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HelloServiceTest {
    HelloService helloService;
    @BeforeEach
    void setUp() {
        helloService = new HelloService();
    }
    @Test
    public void printsHelloTest() {
        assertEquals("Hello World", helloService.print());

    }
}