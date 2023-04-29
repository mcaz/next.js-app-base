import { TContext } from './StateProvider.types';
import { createContext } from '@/libs/react';

export const Context = createContext<TContext>({
  mounted: false,
});

Context.displayName = 'StateProvider';
