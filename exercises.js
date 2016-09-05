// const/let/var

// destructuring & default parameter
function initialize(options) {
    var controls = options.controls || {}
    var models = options.models || {}
    var reducers = options.reducers || {}
    var actors = options.actors || {}
}

// computed property name
var obj = {}
var key = 'person'
obj[key] = 'Bin'

var arr = ['a', 'b', 'c']

for (var i in arr) {
  console.log(arr[i])
}
// expect a, b, c


// object literal & template literals
var greet = {
  hello: function(name) {
    return "hello " + name
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

function sum() {

}

sum(1, 2, 3, 4) // = 10
