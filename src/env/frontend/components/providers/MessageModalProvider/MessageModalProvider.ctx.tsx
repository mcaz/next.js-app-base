import { TContext } from './MessageModalProvider.types';
import { createContext } from '@/libs/react';

export const Context = createContext<TContext>({
  messageModal: null,
});

Context.displayName = 'MessageModalProvider';
