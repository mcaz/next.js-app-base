export const loadStoreState = (KEY: string) => {
  try {
    const serializedState = localStorage.getItem(KEY);

    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
