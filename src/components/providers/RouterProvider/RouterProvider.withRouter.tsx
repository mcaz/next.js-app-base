import { Router } from 'next/router';

import { RouterProvider } from './RouterProvider';

export const withRouter: TWithProvider = (Component, router: Router) => {
  return <RouterProvider router={router}>{Component}</RouterProvider>;
};
