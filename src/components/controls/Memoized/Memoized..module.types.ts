import { ComponentType, ElementType } from 'react';

export type TComponentPropsWithType<T> = T extends ComponentType<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

export type TProps<T extends ComponentType<unknown> | ElementType> = {
  as: T;
  props?: Omit<TComponentPropsWithType<T>, 'children'>;
} & (TComponentPropsWithType<T> extends { children?: infer C }
  ? { children?: C }
  : { children?: never });
