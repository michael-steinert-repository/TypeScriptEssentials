enum LoadingState {
  beforeLoad,
  loading,
  loaded,
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad));

enum HumanReadableLoadingState {
  beforeLoad = 'Before Load',
  loading = 'Loading',
  loaded = 'Loaded',
}

//  Literal Types
const rollDice = (dice: 1 | 2 | 3): number => {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
};

console.log(rollDice(2));
