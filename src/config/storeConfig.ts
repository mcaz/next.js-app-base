export const storeConfig = {
  namespaces: {
    root: 'store',
    app: 'app',
    user: 'user',
  },
  debounceInterval: 500,
} as const;

export default storeConfig;
