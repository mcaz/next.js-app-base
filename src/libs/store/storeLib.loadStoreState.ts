export const loadStoreState = <T>(KEY: string, initialState: T) => {
  try {
    const serializedState = localStorage.getItem(KEY);

    if (!serializedState) return initialState;

    return Object.assign({}, initialState, JSON.parse(serializedState));
  } catch (e) {
    return initialState;
  }
};
