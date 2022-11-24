class Dog {
  // Stores automatically Parameters as public Fields
  constructor(public name: string, public age: number) {}
}

const goodBoy = new Dog('Bruno', 14);

console.log(goodBoy.name);

class DogList {
  private dogList: Dog[] = [];

  // Singleton
  static instance: DogList = new DogList();

  // Constructor ist private therefore it is not accessible outside the Class
  private constructor() {}

  static addDog(dog: Dog) {
    DogList.instance.dogList.push(dog);
  }

  getDogs() {
    return this.dogList;
  }
}

DogList.addDog(goodBoy);
console.log(DogList.instance.getDogs());
