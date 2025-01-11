import { ComponentProps, ComponentType, ElementType, ReactNode } from 'react';

export type TProps<T extends ComponentType<unknown> | ElementType> = {
  as: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, 'children'>;
