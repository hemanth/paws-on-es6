function *Counter(){
var n = 0;
while(1<2) {
  yield n;
  ++n
  }
}
var CountIter = new Counter();
CountIter.next()
CountIter.next()
CountIter.next()
