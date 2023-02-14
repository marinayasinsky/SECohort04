
// Create a new class
class Vehicle{
 constructor(vin, make, model) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.running = false;
 }

 // instance method will start the vehicle
 start() {
this.running = true 
console.log("Vehicle running...");
 }
 toString() {
    return`Vehicle ${this.vin} is a ${this.make}, model ${this.model} `
 }
 static vehicleInfo() {
    console.log("Vehicle class");
 }
}

// create an instance of the Vehicle class
const car1 = new Vehicle("7rh47rh", "Honda", "civic");

const car2 = new Vehicle("7rh1bhh", "BMW", "m3");

console.log(car1);
console.log(car2);

// calling an instance method of Vehicle
car1.start()

//calling a static method of Vehicle
Vehicle.vehicleInfo()

console.log(car1.toString())

// Create a subclass or extend a parent class
class Electric extends Vehicle {
battery = 3000
}

const car3 = new Electric();
console.log(car3);

// instance method
const color = []
color.forEach

// static method
Math.random();
