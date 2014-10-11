var obj = {
  [foo + bar]: "o_0",
  [foo + baz]: "0_o",
  foo: "foo",
  bar: "bar",
  baz: "baz"
};

console.log( obj.foobar ); // o_0
console.log( obj.foobaz ); // 0_o 