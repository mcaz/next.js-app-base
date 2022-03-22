import { TContext } from './ProgressProvider.types';
import { createContext } from '~/libs/react';

export const Context = createContext<TContext>({
  startProgress: null,
  doneProgress: null,
});

Context.displayName = 'ProgressProvider';
