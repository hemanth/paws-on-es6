const foo = 'foo'
const bar = 'bar'
const baz = 'baz'

const obj = {
  [foo + bar]: "o_0",
  [foo + baz]: "0_o",
  foo: "foo",
  bar: "bar",
  baz: "baz"
}

console.log( obj.foobar );
console.log( obj.foobaz );

const foo = '123'
const obj2 = {
  [foo]: 'a'
}
console.log(obj2)

var obj2 = {}
obj2[foo] = 'a'
obj2[foo] = 'a'