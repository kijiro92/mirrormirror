package com.swingrove.mirror.controllers;

import com.swingrove.mirror.services.HelloService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController("/api/hello")
public class HelloController {
    private final HelloService myHelloService;

    public HelloController(HelloService myHelloService) {
        this.myHelloService = myHelloService;
    }

//    @GetMapping
    public String print() {
        return myHelloService.print();
    }

}
