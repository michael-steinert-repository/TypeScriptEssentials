abstract class Animal {
  constructor() {}

  getDescription() {
    console.log(`${this.name()} is a ${this.getBreed()}`);
  }

  abstract name(): string;

  abstract getBreed(): string;
}

class DogWithBreed extends Animal {
  name(): string {
    return 'Bruno';
  }

  getBreed(): string {
    return 'Dog';
  }
}

const dogWithBreed = new DogWithBreed();
console.log(dogWithBreed.getBreed());
console.log(dogWithBreed.getBreed());
dogWithBreed.getDescription();
