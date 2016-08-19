const handler = 1

var greet = {
  handler,
  world: () => "Hello World!",
  toString() {
    return "Results: " + super.toString()
  }
};
