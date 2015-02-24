let person = {
  get name() {
    return this._name;
  },
  set name(val){
    console.log("Setting name: " + val);
    this._name = val;
  }
};

/*
> person.name = "Hemanth"
"Hemanth"
"Setting name: Hemanth"

> person.name
"Hemanth"
