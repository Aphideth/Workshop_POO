import Vehicle from "./Vehicle";
import Car from "./Car";
import Motorcycle from "./Motorcycle";

const myVehicle = new Vehicle("Monocycle", "red", 1);
console.log(myVehicle.logTypeAndProps());

const myCar = new Car("DeLorean DMC-12", "silver");
console.log(myCar.logTypeAndProps());
console.log(myCar.lockDoors());

const myMotorcyle = new Motorcycle("Kawasa­ki ZZR 250", "yellow");
console.log(myMotorcyle.logTypeAndProps());
