var greet = {
  __proto__: theProtoObj,
  handler, // Instead of handler: handler
  world() {
    return "Hello World!";
  },
  toString() {
    return "Results: " + super.toString()
  }
};
