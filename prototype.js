// prototype is an object from which other objects inherit properties and methods. Every object in JavaScript has a hidden, internal property called [[Prototype]], which points to the prototype object from which it was inherited.

// Prototype of an Object: When you create an object, JavaScript attaches the [[Prototype]] property to that object, pointing to the prototype of the constructor function used to create the object.

// Object.prototype: At the top of the prototype chain is the Object.prototype, which is the default prototype from which all objects inherit if no other prototype is specified

// __proto__ is the actual reference to the prototype, while prototype is a property of constructor functions.

//------------------------------------------------------------------------------

// const animalMethods = {
//     sound: function() {
//       console.log(`${this.type} makes a sound.`);
//     }
//   };
  
//   const cat = Object.create(animalMethods);
//   cat.type = 'Cat';
//   cat.sound();  // Output: "Cat makes a sound."
  

//------------------------------------------------------------------------------
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.move = function () {
    console.log(`${this.type} is moving.`);
};

// let car = new Vehicle("car")
// car.move()

function Car(type, brand) {
    Vehicle.call(this, type);
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
//   Car.prototype.constructor = Car;

Car.prototype.honk = function () {
    console.log(`${this.brand} is honking.`);
};

const myCar = new Car('Car', 'Toyota');
myCar.move();  // Output: "Car is moving."
myCar.honk();  // Output: "Toyota is honking."
