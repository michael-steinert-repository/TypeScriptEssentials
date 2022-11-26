interface MyUser {
  id: string;
  name: string;
  email?: string;
}

//  All Fields are optional
type MyUserOptionals = Partial<MyUser>;

//  All Fields are required
type MyUserRequired = Required<MyUser>;

//  Pick selected Fields
type MyUserNameAndEmail = Pick<MyUser, 'name' | 'email'>;

//  Omit selected Fields
type MyUserWithoutEmail = Omit<MyUser, 'email'>;

const mergeUser = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  mergeUser(
    {
      id: '42',
      name: 'Michael',
    },
    { email: 'michael@mail.com' }
  )
);

const mapUserById = (users: MyUser[]): Record<MyUser['id'], MyUser> => {
  return users.reduce((acc, val) => {
    return {
      [val.id]: val,
      ...acc,
    };
  }, {});
};

console.log(
  mapUserById([
    { id: '42', name: 'Michael' },
    { id: '43', name: 'Marie' },
  ])
);

type Name = {
  first: string;
  last: string;
};

const addFullName = (name: Name): Name & { fullName: string } => {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
};

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunction: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunction);
}

console.log(permuteRows(addFullName, [{ first: 'Michael', last: 'Steinert' }]));

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName(): string {
    return `${this.name.first} ${this.name.last}`;
  }
}

function createObjects<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [
    { first: 'Michael', last: 'Steinert' },
  ]).map((obj: PersonWithFullName) => obj.fullName)
);
