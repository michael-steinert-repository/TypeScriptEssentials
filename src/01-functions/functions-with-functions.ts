/* Function Parameter */
const printToFile = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
};

/* Function Type */
type MutationFunction = (n: number) => number;

const arrayMutate = (numbers: number[], mutate: MutationFunction): number[] =>
  numbers.map(mutate);

console.log(arrayMutate([1, 2, 3], (n) => n + 1));

/* Closures */
const createAddFunction = (n: number) => (value: number) => n + value;
const addFunction = createAddFunction(1);
console.log(addFunction(41));
