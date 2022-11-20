function simpleState<T>(initial: T): [() => T, (value: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (value: T) => {
      val = value;
    },
  ];
}

const [st1Getter, st1Setter] = simpleState('Michael');
console.log(st1Getter());

const [st2Getter, st2Setter] = simpleState<number | null>(42);
console.log(st2Getter());
console.log(st2Setter(null));
console.log(st2Getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (value: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface UserInfo {
  name: string;
  age: number;
}

const users: UserInfo[] = [
  { name: 'Michael', age: 28 },
  { name: 'Marie', age: 27 },
];

const ranks = ranker(users, ({ age }) => age);
console.log(ranks);
