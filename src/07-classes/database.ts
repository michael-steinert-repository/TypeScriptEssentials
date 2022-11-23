interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

type DatabaseKey = string | number | symbol;

interface Saveable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase<T, K extends DatabaseKey> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

const newDatabase = new InMemoryDatabase<string, number>();
newDatabase.set(42, 'Michael');
console.log(newDatabase.get(42));

class SavableInMemoryDatabase<T, K extends DatabaseKey>
  extends InMemoryDatabase<T, K>
  implements Saveable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const db1 = new SavableInMemoryDatabase<string, string>();
db1.set('21', 'Bruno');
const savedState = db1.saveToString();
db1.set('21', 'Marie');
const db2 = new SavableInMemoryDatabase<string, string>();
db2.restoreFromString(savedState);
console.log(db1.get('21'));
console.log(db2.get('21'));
