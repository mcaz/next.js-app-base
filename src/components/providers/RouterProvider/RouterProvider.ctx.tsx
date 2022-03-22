import { TContext } from './RouterProvider.types';
import { createContext } from '~/libs/react';

export const Context = createContext<TContext>({
  router: null,
});

Context.displayName = 'RouterProvider';
