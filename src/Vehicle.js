class Vehicle {
  constructor(color, name, wheels) {
    this.color = color;
    this.name = name;
    this.wheels = wheels;
  }
  getPropsString() {
    return `Color : ${this.color}, Name : ${this.name}`;
  }
  logTypeAndProps() {
    return `Vehicule specs : ${this.wheels}, ${this.getPropsString()}`;
  }
}

export default Vehicle;
