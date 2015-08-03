var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(window);
ws.add(foo);

ws.has(window); // true
ws.has(bar);    // false, bar has not been added to the set

ws.delete(window); // removes window from the set
ws.has(window);    // false, window has been removed

ws.clear(); // empty the whole WeakSet

