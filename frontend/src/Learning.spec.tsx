import React from 'react';
import {fibonacci, multiply, sum10} from './Learning';


describe("App.tsx", () => {
    it("should multiply 1 by 1 to get 1", () => {
        expect(multiply(1,1)).toBe(1);
    });

    it("should multiply two by two to get 4", () => {
        expect(multiply(2, 2)).toBe(4);
    });

    it("should sume products from 1 to 10", () => {
        console.log(sum10());
        expect(sum10()).toBeGreaterThan(150);
    })

    it("should return 1 when fib 1", () => {
        expect(fibonacci(1)).toBe(1);
    })
    it("should return 2 when fib 2", () => {
        expect(fibonacci(2)).toBe(2);
    })

    it("should return 3 when fib 3", () => {
        expect(fibonacci(3)).toBe(3);
    })
    it("should return 5 when fib 4", () => {
        expect(fibonacci(4)).toBe(5);
    })
    it("should return 8 when fib 5", () => {
        expect(fibonacci(4)).toBe(5);
    })
})