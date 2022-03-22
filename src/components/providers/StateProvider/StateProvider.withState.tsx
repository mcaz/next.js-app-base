import { StateProvider } from './StateProvider';

export const withState: TWithProvider = (Component, mounted: boolean) => {
  return <StateProvider mounted={mounted}>{Component}</StateProvider>;
};
