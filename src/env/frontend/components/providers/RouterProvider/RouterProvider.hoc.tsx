import { Router } from 'next/router';

import { Provider } from './RouterProvider';

export const hoc: THoc = (Component, router: Router) => {
  return <Provider router={router}>{Component}</Provider>;
};
