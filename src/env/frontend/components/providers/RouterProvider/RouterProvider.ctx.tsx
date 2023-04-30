import { createContext } from '@/libs/react';

import { TContext } from './RouterProvider.types';

export const Context = createContext<TContext>({
  router: null,
});

Context.displayName = 'RouterProvider';
