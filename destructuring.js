var abc = {foo: "lorem", bar: "ipsum"};



var {foo, bar} = {foo: "lorem", bar: "ipsum"};


function foo() {
    return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

