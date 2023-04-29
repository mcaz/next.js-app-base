import { ComponentProps, ComponentType, ElementType, ReactNode } from 'react';

export type Props<T extends ComponentType<any> | ElementType> = {
  component: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, 'children'>;
