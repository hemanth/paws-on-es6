var wm = new WeakMap();

wm.set('life'); //TypeError: Invalid value used as weak map key

wm.set('life', 'life'.length) //TypeError: Invalid value used as weak map key

var wmk = {};

wm.set(wmk, 'life');

wm.get(wmk); // "life"

wm.has(wmk); // true

wm.delete(wmk); // true

wm.has(wmk); //false

var key = {}

wm.set(key, 'value');

key = undefined; // key disappeared

wm.has(key); // false; entry disappeared automatically
