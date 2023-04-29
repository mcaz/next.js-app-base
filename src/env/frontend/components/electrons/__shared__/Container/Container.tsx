import { ComponentType, ElementType } from 'react';

import { C } from '@/controls';

import { ComponentPropsWithType, Props } from './Container.types';

export const Container = <
  T extends ComponentType<any> | ElementType,
  U extends ComponentType<any> | ElementType
>({
  component,
  division,
  children,
  ...props
}: Props<T, U>): React.ReactElement => {
  const Component = component as ElementType;

  return (
    <Component {...(props as ComponentPropsWithType<T>)}>
      <C.If condition={division}>
        <C.Repeater
          {...division}
          component={division?.component as ElementType}
        >
          {children}
        </C.Repeater>
      </C.If>
      <C.Unless condition={division}>{children}</C.Unless>
    </Component>
  );
};
