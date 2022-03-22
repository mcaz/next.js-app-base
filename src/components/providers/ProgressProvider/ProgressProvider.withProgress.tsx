import { ProgressProvider } from './ProgressProvider';

export const withProgress: TWithProvider = (Component, router: TRouter) => {
  return <ProgressProvider router={router}>{Component}</ProgressProvider>;
};
