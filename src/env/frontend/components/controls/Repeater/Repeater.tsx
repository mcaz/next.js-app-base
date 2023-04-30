import { ComponentType, ElementType } from 'react';

import { useRender } from '@/hooks/react';

import { Props } from './Repeater.types';

export const Repeater = <T extends ComponentType<any> | ElementType>({
  component,
  children,
  ...props
}: Props<T>) => {
  const { mapChildren, key } = useRender();

  const Component = component as ElementType;

  return (
    <>
      {mapChildren(children, (child) => {
        return (
          <Component key={key.value} {...props}>
            {child}
          </Component>
        );
      })}
    </>
  );
};
