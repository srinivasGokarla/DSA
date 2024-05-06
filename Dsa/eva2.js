class Vehicle {
    #manufacturer;
  
    constructor(manufacturer) {
      this.#manufacturer = manufacturer;
    }
  
    get manufacturer() {
      return this.#manufacturer;
    }
  
    set manufacturer(value) {
      this.#manufacturer = value;
    }
  
    static getManufacturer(vehicle) {
      return vehicle.manufacturer;
    }
  
    describe() {
      return `A generic vehicle manufactured by ${this.#manufacturer}`;
    }
  
    calculateAcceleration(initialVelocity, finalVelocity, time) {
      return (finalVelocity - initialVelocity) // time;
    }
  }

  class Electric extends Car {
    #chargeTime;
    #energyConsumption;
  
    constructor(manufacturer, model, chargeTime, energyConsumption) {
      super(manufacturer, model, 8); // Default fuel efficiency for electric cars
      this.#chargeTime = chargeTime;
      this.#energyConsumption = energyConsumption;
    }
  
    get chargeTime() {
      return this.#chargeTime;
    }
  
    set chargeTime(value) {
      this.#chargeTime = value;
    }
  
    get energyConsumption() {
      return this.#energyConsumption;
    }
  
    set energyConsumption(value) {
      this.#energyConsumption = value;
    }
  
    charge() {
      return "Charging in progress.";
    }
  
    calculateDistanceByEnergy(batteryCapacity) {
      return batteryCapacity * this.#energyConsumption;
    }
  }

  class Bicycle extends Vehicle {
    #type;
    #gear;
  
    constructor(manufacturer, type, gear) {
      super(manufacturer);
      this.#type = type;
      this.#gear = gear;
    }
  
    get type() {
      return this.#type;
    }
  
    set type(value) {
      this.#type = value;
    }
  
    get gear() {
      return this.#gear;
    }
  
    set gear(value) {
      this.#gear = value;
    }
  
    ride() {
      return "Enjoy your ride.";
    }
  
    changeGear(newGear) {
      this.#gear = newGear;
      return `Changed gear to ${newGear}.`;
    }
  
    calculateCaloriesBurned(distance, speed) {
      let estimatedCalories = 50 * distance;
      if (speed > 20) {
        const increasedCalories = (speed - 20) * 5;
        estimatedCalories += increasedCalories;
      }
      return estimatedCalories;
    }
  
    calculateAverageSpeed(distance, time) {
      return distance / time;
    }
  
    calculateWorkDone(frictionForce, distance) {
      return frictionForce * distance;
    }
  }