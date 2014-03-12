var NegativeIndices = function(array) {
  return new Proxy(array, {
    get: function(receiver, name) {
      var index;
      console.log('Proxy#get', array, name);
      index = parseInt(name);
      if (!isNaN(index) && index < 0) {
        array[array.length + index];
      } else {
        return array[name];
      }
    }
  });
};

/*
* Negitve array indices:
* array = NegativeIndices [4, 420, 42]
* array[-1] is 42
*/
