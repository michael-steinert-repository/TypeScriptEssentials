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
