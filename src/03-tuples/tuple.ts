type ThreeDimensionCoordinate = [x: number, y: number, z: number];

const addCoordinate = (
  c1: ThreeDimensionCoordinate,
  c2: ThreeDimensionCoordinate
): ThreeDimensionCoordinate => {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
};

console.log(addCoordinate([0, 1, 2], [3, 4, 5]));

const simpleStringState = (
  initial: string
): [() => string, (value: string) => void] => {
  let str: string = initial;
  return [
    () => str,
    (value: string) => {
      str = value;
    },
  ];
};

const [str1Getter, str1Setter] = simpleStringState('Michael');
console.log(str1Getter());
str1Setter('Bruno');
console.log(str1Getter());
