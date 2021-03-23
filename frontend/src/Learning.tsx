

export const multiply = (x: number, y: number) => {
    return x * y;
}

const solution = multiply(5, 10);

const solution2 = multiply(30, 50);

export const sum10 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        let product = multiply(i, i);
        sum = product + sum;
    };
    return sum
};

export const fibonacci = (n: number): number => {
    if (n > 2) {
        let fib = fibonacci(n - 1) + fibonacci(n - 2);
        return fib;
    } else {
        return n;
    };
};

// fib of n = (fib of n-1) + (fib n-2)
// the first numbers are 1 and 2
// for everything > 2, the nth fib number is the sum of the two numbers before it
// 1 2 3 4 5 6
// 1 2 3 5 8 13