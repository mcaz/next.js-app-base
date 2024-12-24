import { ComponentType, ElementType, useMemo } from 'react';
import { useRender } from '@/hooks';
import { TProps } from './Repeater.modules.types';

export const Repeater = <T extends ComponentType<unknown> | ElementType>({
  children,
  ...props
}: TProps<T>) => {
  const { childrenToArray, key } = useRender();

  const childrenArray = useMemo(
    () => childrenToArray(children),
    [childrenToArray, children]
  );

  const Component: ElementType = props.as;

  const RepeatedComponents = useMemo(
    () => (
      <>
        {childrenArray.map((child) => {
          return (
            <Component {...props} key={key.value}>
              {child}
            </Component>
          );
        })}
      </>
    ),
    [Component, childrenArray, props, key]
  );

  return <>{RepeatedComponents}</>;
};
