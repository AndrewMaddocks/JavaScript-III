/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. global is referring to all of javascript as a whole. So it is the console and widow object.
 * 2. implicit is one of the easiest ones to remember this is the object that is to the left of the dot notation. That would be before the function itself. and it only applys to objects with methods.
 * 3. new binding uses the "new" keyword creates a new object and refrenced by "this" it is important that the function name is capalized.
 * 4. explicit is a principle some may get confused with but its actually quite simple "this" will be called on by the method named call. in the parentheses it will explicily call "this".
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding

function sayName(name) {
  console.log(this);
  return name;
}
sayName("jake"); //prints out the global object not jake

// Principle 2
// code example for Implicit Binding
let me = {
  name: "andrew",
  color: "white",
  weight: "160lb",
  speak: function() {
    console.log(` Hello, my name is ${this.name}`);
  }
};
me.speak(); //this is refering to what is to the left of the dot

// Principle 3
// code example for New Binding
function Bird(chirping) {
  this.sound = chirping;
}

let annoyingBird = new Bird("baQWA baQWA baQWA");

console.log(
  `my bird makes an awful sound it sounds like "${annoyingBird.sound}".`
);

// Principle 4
// code example for Explicit Binding
function cat() {
  console.log(this.sound);
}

let fatCat = {
  name: "Fatty",
  sound: "prrrrr meow"
};
cat.call(fatCat); // we are invoking the function
