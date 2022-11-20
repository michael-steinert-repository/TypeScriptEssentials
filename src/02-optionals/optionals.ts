const printIngredient = (
  quantity: string,
  ingredient: string,
  extra?: string
) => {
  console.log(
    `${quantity} of ${ingredient} ${extra ? `and ${extra}` : ''} needed.`
  );
};

printIngredient('42C', 'Sugar', 'Water');

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

const getMail = (user: User): string => {
  // Nullish Coalescing Operator: returns its right-hand Side when its left-hand Side is null or undefined
  return user?.info?.email ?? '';
};

const printWithCallback = (callback?: () => void) => {
  // Safely call Function
  callback?.();
};
