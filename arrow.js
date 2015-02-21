fact = (n) => { return n === 0 ? 1 : n * fact(n-1); } 

fib = (n) => { return n < 2 ? n : fib(n-1) + fib(n-2); }

let Person = (fname, lname, age) => {
   this.fname= fname;
   this.lname = lname;
   this.age = age;
   this.yo = () => `Yo! I'm ${this.fname}!`; // `this` reffers to Person.
}
