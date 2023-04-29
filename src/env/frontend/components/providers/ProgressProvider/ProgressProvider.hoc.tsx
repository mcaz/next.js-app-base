import { Provider } from './ProgressProvider';

export const hoc: THoc = (Component, router: TRouter) => {
  return <Provider router={router}>{Component}</Provider>;
};
