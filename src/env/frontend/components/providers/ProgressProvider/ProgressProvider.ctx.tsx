import { createContext } from '@/libs/react';

import { TContext } from './ProgressProvider.types';

export const Context = createContext<TContext>({
  startProgress: null,
  doneProgress: null,
});

Context.displayName = 'ProgressProvider';
