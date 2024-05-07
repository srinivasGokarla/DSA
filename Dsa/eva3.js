// Guest Constructor
function Guest(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Guest.prototype.displayInfo = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
  
  // PartyGuest Constructor
  function PartyGuest(name, age, role) {
    Guest.call(this, name, age);
    this.role = role;
    this.gifts = [];
    this.invitationStatus = "Pending";
  }
  
  PartyGuest.prototype = Object.create(Guest.prototype);
  PartyGuest.prototype.constructor = PartyGuest;
  
  PartyGuest.prototype.bringGift = function(gift) {
    this.gifts.push(gift);
  };
  
  PartyGuest.prototype.sendInvitation = function() {
    this.invitationStatus = "Sent";
  };
  
  PartyGuest.prototype.acceptInvitation = function() {
    this.invitationStatus = "Accepted";
  };
  
  PartyGuest.prototype.declineInvitation = function() {
    this.invitationStatus = "Declined";
  };
  
  PartyGuest.prototype.organizeParty = function() {
    return `Party organized by ${this.name} with role ${this.role}`;
  };
  
  PartyGuest.prototype.displayInfo = function() {
    return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`;
  };
  
  // Example usage
  const guest1 = new Guest("John", 25);
  const guest2 = new Guest("Alice", 30);
  
  console.log(guest1.displayInfo()); // Output: Name: John, Age: 25
  console.log(guest2.displayInfo()); // Output: Name: Alice, Age: 30
  
  const partyHost = new PartyGuest("Alice", 30, "Host");
  
  partyHost.bringGift("watch");
  console.log(partyHost.gifts); // ['watch']
  
  partyHost.bringGift("Party Hats");
  console.log(partyHost.gifts); // ['watch', 'Party Hats']
  
  partyHost.sendInvitation();
  console.log(partyHost.invitationStatus); // Sent
  
  partyHost.acceptInvitation();
  console.log(partyHost.invitationStatus); // Accepted
  
  console.log(partyHost.displayInfo()); // Name: Alice, Age: 30, Role: Host
  console.log(partyHost.organizeParty()); // Party organized by Alice with role Host.


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