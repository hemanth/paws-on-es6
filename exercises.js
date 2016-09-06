// const/let/var

// destructuring & default parameter
function initialize(options) {
    var controls = options.controls || {}
    var models = options.models || {}
    var reducers = options.reducers || {}
    var actors = options.actors || {}
}

const initialize = ({
    controls,
    models, 
    reducers, 
    actors
  }) =>
  console.log(controls)
}

const initialize = (options) => {
  const {
    controls = {},
    models, 
    reducers, 
    actors
  } = options
  console.log(controls)
}

const initialize = ({
  controls = {},
  models = {}, 
  reducers = {}, 
  actors = {}
}) => {
  console.log(controls)
}

// computed property name
// var obj = {}
var key = 'person'
// obj[key] = 'Bin'

// {
//   person: 'Bin'
// }

const obj = {
  [key]: 'Bin'
}

const obj = {
  [foo + bar]: "o_0",
  [foo + baz]: "0_o",
  foo: "foo",
  bar: "bar",
  baz: "baz"
}



/////

var arr = ['a', 'b', 'c']

for (var i in arr) {
  console.log(arr[i])
}
// expect a, b, c

for (const element of arr){
  console.log(element)
}

// object literal & template literals
var greet = {
  hello: function(name) {
    return "hello " + name
  }
}

const greet = {
  hello : (name) => {
    return `hello ${name}`
  }
}

const greet = {
  hello : (name) => `hello ${name}`
}

const greet = {
  hello(name) {
    return `hello ${name}`
  }
}

// promise
const getStuffRemotely = () => {
  return new Promise((resolve, reject) => {
    // some async stuff
    if (1 < 2) {
        resolve("Passed!");
    } else {
        reject(Error("Failed!"));
    }
  })
}

// rest params

function sum(...args) {
  let rt = 0
  for (const e of args) {
    rt += e
  }
  console.log('asfasd')
  return rt
}

sum(1, 2, 3, 4) // = 10
