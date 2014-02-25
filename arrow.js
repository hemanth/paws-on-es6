fact = (n) => { return n === 0 ? 1 : n * fact(n-1); } 

fib = (n) => { return n < 2 ? n : fib(n-1) + fib(n-2); }
