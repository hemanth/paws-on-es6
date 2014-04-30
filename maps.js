let m = new Map();
m.set('answer', 42);
m.get('answer');                // 42
m.has('answer');                //  true
m.delete('answer');               //  true
m.has('answer');                  //  false

m.set(keyFunc,function() {return "foo";});
m.get(keyFunc)(); // "foo"
