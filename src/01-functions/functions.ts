const addNumbers = (a: number, b: number): number => a + b;

export default addNumbers;

export const addStrings = (str1: string, str2: string = 'default'): string =>
  `${str1} ${str2}`;

export const printTypes = (name: string, age: string | number): void =>
  console.log(`${name} ${age}`);

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export const introduce = (salutation: string, ...names: string[]): string =>
  `${salutation} ${names.join(' ')}`;
