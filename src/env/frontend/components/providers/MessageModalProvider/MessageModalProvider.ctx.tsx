import { createContext } from '@/libs/react';

import { TContext } from './MessageModalProvider.types';

export const Context = createContext<TContext>({
  messageModal: null,
});

Context.displayName = 'MessageModalProvider';
