let obj = {
  method: function () {
    return () => this;
  }
};
// Due to lexical scope obj.method()() <===> obj

let fact = (n) => { return n === 0 ? 1 : n * fact(n-1); };

let fib = (n) => { return n < 2 ? n : fib(n-1) + fib(n-2); };

// single arguments do not require parens
// single statements do not require curly braces
[1, 2, 3].map(x => x * 2);

// no arguments require parens
// multiline function bodies require curly braces

let hello = () => {
  console.log('hello');
  console.log('world');
};
