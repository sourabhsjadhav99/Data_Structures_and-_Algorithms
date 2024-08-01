// 1 
// const animal = {
//     speak() {
//       console.log('Animal makes a noise');
//     }
//   };

//   const dog = Object.create(animal);
//   dog.bark = function() {
//     console.log('Dog barks');
//   };

//   dog.speak(); // Animal makes a noise
//   dog.bark();  // Dog barks


// 2 
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise');
};

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Set up inheritance
//   Dog.prototype.constructor = Dog; // Fix the constructor property

Dog.prototype.bark = function () {
    console.log(this.name + ' barks');
};

const dog = new Dog('Rex');
dog.speak(); // Rex makes a noise
dog.bark();  // Rex barks
