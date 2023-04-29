import { ReactNode } from 'react';

export type Props = {
  count: number;
  children: (index: number) => ReactNode;
};
