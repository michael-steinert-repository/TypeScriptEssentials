function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: 'Bruno', age: 14 },
  { name: 'Buddy', age: 4 },
];

console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addedToCart: BaseEvent & { productId: string; quantity: number };
  paid: BaseEvent;
}

function emitEvent<EventName extends keyof EventMap>(
  name: EventName,
  data: EventMap[EventName]
): void {
  console.log([name, data]);
}

emitEvent('addedToCart', {
  time: 21,
  user: 'Michael',
  productId: '42',
  quantity: 4,
});

emitEvent('paid', {
  time: 21,
  user: 'Michael',
});
