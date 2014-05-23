// Example directly picked up from the proposal :)

class Monster {
  // The contextual keyword "constructor" followed by an argument
  // list and a body defines the body of the class’s constructor
  // function. public and private declarations in the constructor
  // declare and initialize per-instance properties. Assignments
  // such as "this.foo = bar;" also set public properties.
  constructor(name, health) {
    public name = name;
    private health = health;
  }
 
  // An identifier followed by an argument list and body defines a
  // method. A “method” here is simply a function property on some
  // object.
  attack(target) {
    log('The monster attacks ' + target);
  }
 
  // The contextual keyword "get" followed by an identifier and
  // a curly body defines a getter in the same way that "get"
  // defines one in an object literal.
  get isAlive() {
    return private(this).health > 0;
  }
 
  // Likewise, "set" can be used to define setters.
  set health(value) {
    if (value < 0) {
      throw new Error('Health must be non-negative.')
    }
    private(this).health = value
  }
 
  // After a "public" modifier,
  // an identifier optionally followed by "=" and an expression
  // declares a prototype property and initializes it to the value
  // of that expression. 
  public numAttacks = 0;
 
  // After a "public" modifier,
  // the keyword "const" followed by an identifier and an
  // initializer declares a constant prototype property.
  public const attackMessage = 'The monster hits you!';
}


/* Make a note of:

class Base {}
class Derived extends Base {}
 
//Here, Derived.prototype will inherit from Base.prototype.
 
let parent = {};
class Derived prototype parent {}
*/