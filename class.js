class Person {
  constructor(name) {
    this.name = name;
    this.movement = "walks";
  }

  move(meters) {
    console.log(`${this.name} ${this.movement} ${meters}m.`);
  }
}

class Hero extends Person {
  constructor(name, movement) {
    this.name = name;
    this.movement = movement;
  }

  move() {
    super.move(500);
  }
}

let clark = new Person("Clark Kent");

let superman = new Hero("Superman", "flies");

clark.move(100);
// -> Clark Kent walks 100m.

superman.move();
// -> Superman flies 500m.

/* Make a note of:

class Base {}
class Derived extends Base {}

//Here, Derived.prototype will inherit from Base.prototype.

let parent = {};
class Derived prototype parent {}
*/
