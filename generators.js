function *Counter(){
  var n = 0;
  while(1<2) {
      yield n;
      ++n;
  }
}

var CountIter = Counter();

CountIter.next(); // {value: 0, done:false}
CountIter.next(); // {value: 1, done:false}
CountIter.next(); // {value: 2, done:false}
