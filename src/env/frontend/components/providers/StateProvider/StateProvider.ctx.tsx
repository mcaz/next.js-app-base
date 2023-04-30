import { createContext } from '@/libs/react';

import { TContext } from './StateProvider.types';

export const Context = createContext<TContext>({
  mounted: false,
});

Context.displayName = 'StateProvider';
