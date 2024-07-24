class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const animal1 = new Animal('Lion', 5);
animal1.speak(); // Output: Lion makes a noise.


// Encapsulation
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; // convention for private property
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    }

    describe() {
        console.log(`${this.name} is ${this._age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.describe(); // Output: Alice is 30 years old.
person1.age = 31;
person1.describe(); // Output: Alice is 31 years old.
person1.age = -5; // Output: Age must be positive.


// Inheritance
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Calls the constructor of the parent class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog('Rex', 3, 'German Shepherd');
dog1.speak(); // Output: Rex barks.
console.log(dog1.breed); // Output: German Shepherd


// Polymorphism
class Bird extends Animal {
    speak() {
        console.log(`${this.name} chirps.`);
    }
}

const bird1 = new Bird('Tweety', 1);
bird1.speak(); // Output: Tweety chirps.

const dog2 = new Dog('Buddy', 2, 'Beagle');
dog2.speak(); // Output: Buddy barks.


// Abstraction 
class Vehicle {
    constructor(make, model) {
        if (this.constructor === Vehicle) {
            // throw new Error('Cannot instantiate abstract class');
            console.log("error")
        }
        this.make = make;
        this.model = model;
    }

    start() {
        throw new Error('Method "start()" must be implemented');
    }
}

class Car extends Vehicle {
    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

const car1 = new Car('Toyota', 'Corolla');
car1.start(); // Output: Toyota Corolla is starting.

const vehicle1 = new Vehicle('Generic', 'Model'); // Error: Cannot instantiate abstract class
