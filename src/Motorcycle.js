import Vehicule from "./Vehicle";

class Motorcycle extends Vehicule {
  constructor(color, name, wheels) {
    super(color, name, wheels);
    this.wheels = 2;
  }
  logTypeAndProps() {
    return `Motorcycle specs : ${this.wheels}, ${this.getPropsString()}`;
  }
}

export default Motorcycle;
