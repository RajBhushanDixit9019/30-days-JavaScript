// this is day 5 of 30 days of javascript: Object Prototypeing.

// object prototyping is a process or method in which the other objects inherits properties 
// and methods of other objects. It work like based on inheritance model.


// this example tells about the code reusability by object prototypeing...
function Vehicle(make, model) { // constructor of 'Vehicle' object..
    this.make = make;
    this.model = model;
}

Vehicle.prototype.drive = function() { // Mothod of Vehicle object...
    console.log('Driving a vehicle');
}

function Car(make, model, doors) { // inheritaing from 'Vehicle' object..
    Vehicle.call(this, make, model);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype); // creating Vehicle's  prototype

function Bike(make, model) {
    Vehicle.call(this, make, model);
}

Bike.prototype = Object.create(Vehicle.prototype);

const myCar = new Car('Toyota', 'Camry', 4);
const myBike = new Bike('Honda', 'CBR');

myCar.drive(); // Output: Driving a vehicle
myBike.drive(); // Output: Driving a vehicle
