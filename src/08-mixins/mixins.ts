const createLoggerClass = () => {
  return class LoggerClass {
    private completeLog: string = '';

    log(str: string) {
      console.log(str);
      this.completeLog += str + '\n';
    }

    dumpLog() {
      return this.completeLog;
    }
  };
};

const Logger = createLoggerClass();
const logger = new Logger();
logger.log('Michael');
logger.dumpLog();

function createSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string) {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = createSimpleMemoryDatabase<string>();
const stringDatabase = new StringDatabase();
stringDatabase.set('42', 'Michael');
console.log(stringDatabase.get('42'));

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase = Dumpable(StringDatabase)
const dumpableStringDatabase = new DumpableStringDatabase();
dumpableStringDatabase.set('42', 'Bruno');
dumpableStringDatabase.dump()
