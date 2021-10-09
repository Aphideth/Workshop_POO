import Vehicule from "./Vehicle";

class Car extends Vehicule {
  constructor(color, name, wheels) {
    super(color, name, wheels);
    this.wheels = 4;
  }
  lockDoors() {
    return "qqchose ici";
  }
  logTypeAndProps() {
    return `Car specs : ${this.wheels}, ${this.getPropsString()}`;
  }
}

export default Car;
