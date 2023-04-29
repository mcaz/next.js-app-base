import { Provider } from './StateProvider';

export const hoc: THoc = (Component, mounted: boolean) => {
  return <Provider mounted={mounted}>{Component}</Provider>;
};
