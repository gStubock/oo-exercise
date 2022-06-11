class Vehicle {
constructor(make, model, year){

this.make = make;
this.model = model;
this.year = year;
}


honk(){
  console.log("beep");
}

toString(){
  console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
}
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);


class Car extends Vehicle {
  constructor(make, model, year, numWheels){
  
  super(make, model, year);


this.numWheels = numWheels;
}
}


let myFirstCar = new Car("Honda", "Monster Truck", 1999, 4);

class Motorcycle extends Vehicle {
  constructor(make, model, year, numWheels){
    super(make, model, year);
    this.numWheels = numWheels;
  }
  revEngine(){
    console.log('VROOM!!!');
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000, 2);



class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity =  capacity;

  }
  add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
      return "Only vehicles are allowed in here!";
    }
    if(this.vehicles.length >= this.capacity){
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}