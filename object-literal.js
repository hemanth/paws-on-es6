var greet = {
  __proto__: theProtoObj,
  handler, // Instead of handler: handler
  world: () => "Hello World!",
  toString() {
    return "Results: " + super.toString()
  }
};
