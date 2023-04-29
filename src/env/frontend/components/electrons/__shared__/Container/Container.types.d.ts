import { ComponentProps, ComponentType, ElementType, ReactNode } from 'react';

export type ComponentPropsWithType<T> = T extends ComponentType<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

export type Props<
  T extends ComponentType<unknown> | ElementType,
  U extends ComponentType<unknown> | ElementType
> = {
  component: T;
  division?: {
    component: U;
  } & Omit<ComponentProps<U>, 'children'>;
  children?: ReactNode;
} & Omit<ComponentProps<T>, 'children'>;
