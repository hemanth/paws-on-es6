function test() {
  return new Promise(function(resolve, reject) {
    fetch('http://google.com').then(function(res) {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

var promise = new Promise((resolve, reject) => {
  // some async stuff
  if (1<2) {
    resolve("Passed!");
  }
  else {
    reject(Error("Failed!"));
  }
});

promise.then(result => {
  console.log(result); // Pass
}, err => {
  console.log(err); // Fail
});