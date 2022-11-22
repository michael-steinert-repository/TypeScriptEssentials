interface Dog {
  name: string;
  age: number;
}

type ReadonlyDog = Readonly<Dog>;

const createDog = (name: string, age: number): ReadonlyDog => {
  return { name, age };
};

const bruno = createDog('Bruno', 14);

const makeCoordinate = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z];
};

const c1 = makeCoordinate(1, 2, 3);

// Immutable Array
const constArray = [42] as const;
