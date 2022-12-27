// Observer Pattern
// It defines a Subscription to notifies multiple Objects about any Events that happen to the Object
type Listener<EventType> = (e: EventType) => void;

const createObserver = <EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} => {
  let listeners: Listener<EventType>[] = [];
  return {
    subscribe: (listener: Listener<EventType>): (() => void) => {
      listeners.push(listener);
      // Unsubscribe
      return () => {
        listeners = listeners.filter(
          (l: Listener<EventType>) => l !== listener
        );
      };
    },
    publish: (event: EventType) => {
      listeners.forEach((l: Listener<EventType>) => l(event));
    },
  };
};

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

interface Dog {
  id: string;
  name: string;
  age: number;
}

interface DogBaseRecord {
  id: string;
}

interface DogDatabase<T extends DogBaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;
  // Visitor Pattern
  // It represents an Operation to be performed on the Elements
  visit(visitor: (item: T) => void): void;
}

// Factory Pattern
// It hides the specific Implementation of the Code from the Code
const createDogDatabase = <T extends DogBaseRecord>() => {
  class DogInMemoryDatabase implements DogDatabase<T> {
    private db: Record<string, T> = {};

    // Singleton Pattern
    // It ensures that only one Instance can exists
    static instance: DogInMemoryDatabase = new DogInMemoryDatabase();

    private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
    private afterAddListeners = createObserver<AfterSetEvent<T>>();

    private constructor() {}

    public set(newValue: T): void {
      this.beforeAddListeners.publish({
        newValue: newValue,
        value: this.db[newValue.id],
      });

      this.db[newValue.id] = newValue;

      this.afterAddListeners.publish({
        value: newValue,
      });
    }

    public get(id: string): T | undefined {
      return this.db[id];
    }

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeAddListeners.subscribe(listener);
    }

    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterAddListeners.subscribe(listener);
    }

    visit(visitor: (item: T) => void): void {
      Object.values(this.db).forEach(visitor);
    }

    // Strategy Pattern
    // It defines a Set of Algorithms that can be used interchangeably
    selectOldest(ageStrategy: (item: T) => number): T | undefined {
      const found: {
        max: number;
        item: T | undefined;
      } = {
        max: 0,
        item: undefined,
      };

      Object.values(this.db).reduce((f, item) => {
        const age = ageStrategy(item);
        if (age > f.max) {
          f.max = age;
          f.item = item;
        }
        return f;
      }, found);

      return found.item;
    }
  }

  return DogInMemoryDatabase;
};

const DogDB = createDogDatabase<Dog>();

const unsubscribe = DogDB.instance.onAfterAdd(({ value }: AfterSetEvent<Dog>) =>
  console.log(value)
);

DogDB.instance.set({ id: '42', name: 'Bruno', age: 13 });

unsubscribe();

DogDB.instance.set({ id: '44', name: 'Bud', age: 4 });

console.log(DogDB.instance.get('42'));

DogDB.instance.visit(({ name }: Dog) => console.log(name));

console.log(DogDB.instance.selectOldest(({ age }: Dog) => age));
