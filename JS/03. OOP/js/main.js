class Dog {
  constructor(name, breed, age) {
    this.__name = name;
    this.__breed = breed;
    this.__age = age;
    console.log("Dog Constructor works!!!");
  }

  ShowDogInfo() {
    console.log(
      `Name: ${this.__name} Breed: ${this.__breed} Age: ${this.__age}`
    );
  }
}

// let dog1 = new Dog("Bobik", "Taxa", 7);
// dog1.ShowDogInfo();

// let dog2 = new Dog("Jack", "Haskey", 3);
// dog2.ShowDogInfo();

class HunterDog extends Dog {
  constructor(name, breed, age, power) {
    super(name, breed, age);
    this.power = power;
    console.log("HunterDog constructor works!!!");
  }
  ShowDogInfo() {
    console.log(
      `Name: ${this.__name} Breed: ${this.__breed} Age: ${this.__age} Power: ${this.power}`
    );
  }

  Helth(newPower) {
    if (this.power < 100) {
      this.power += newPower;
    }
  }
  Hunt() {
    if (this.power <= 0) {
      console.log(`${this.__name} is die!`);
      return;
    } else {
      this.power -= 20;
    }
  }
}

let dog3 = new HunterDog("BabDog", "Mastif", 4, 89);
dog3.ShowDogInfo();
dog3.Helth(5);
dog3.ShowDogInfo();
dog3.Hunt();
dog3.Hunt();
dog3.Hunt();
dog3.Hunt();
dog3.Helth(15);
dog3.Hunt();
dog3.Hunt();
dog3.ShowDogInfo();
dog3.Hunt();
