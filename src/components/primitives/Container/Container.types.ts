import { ComponentType, ElementType } from 'react';

import { ComponentProps, ReactNode } from 'react';

export type TComponentPropsWithType<T> = T extends ComponentType<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

export type TProps<
  T extends ComponentType<unknown> | ElementType,
  U extends ComponentType<unknown> | ElementType
> = {
  as: T;
  division?: {
    as: U;
  } & Omit<ComponentProps<U>, 'children'>;
  children?: ReactNode;
} & Omit<ComponentProps<T>, 'children'>;
