var Cat = (function() {
    var nameSymbl = Symbol('name');
 
    function Cat(name) {
        this[nameSymbl] = name;
    }
 
    Cat.prototype.getName = function() {
        return this[nameSymbl];
    };
 
    return Cat;
}());
 
var c = new Cat('milly');
console.log("Cat's name: " + c.getName()); //milly
delete c.name; // Even after deleting
console.log("Cat's name is still: " + c.getName() + ' is private.'); // so milly
