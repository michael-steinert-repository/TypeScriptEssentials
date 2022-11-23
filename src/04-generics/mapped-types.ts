type FlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: FlexibleDogInfo = {
  name: 'Bruno',
  age: 14,
};

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type DogInfoOptionsFlags = OptionsFlags<FlexibleDogInfo>;

function listenToObject<T>(object: T, listeners: Listeners<T>): void {}

type Listeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
    value: T[Property]
  ) => void;
} & {
  [Property in keyof T as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

type DogInfoListeners = Listeners<FlexibleDogInfo>;

listenToObject(dog, {
  onNameChange: (value: string) => {},
  onAgeChange: (value: number) => {},
  onNameDelete: () => {},
  onAgeDelete: () => {},
});
