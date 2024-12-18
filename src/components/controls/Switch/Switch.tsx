import React from 'react';
import { CaseProps, DefaultProps, SwitchProps } from './Switch.modules.types';
import { useMemo, useRender } from '@/hooks';

export function Switch<T>({ condition, children }: SwitchProps<T>) {
  const { childrenToArray } = useRender();
  const cases = useMemo(
    () =>
      Array.isArray(children)
        ? (childrenToArray(children) as ReactElement<
            CaseProps<T> | DefaultProps
          >[])
        : [children],
    [children, childrenToArray]
  );

  const Component = useMemo(() => {
    for (const child of cases) {
      if (child.type === Default) {
        return <>{(child.props as DefaultProps).children}</>;
      }

      if (child.type === Case) {
        const { value, children: conditionChildren } =
          child.props as CaseProps<T>;
        const isFunction = typeof value === 'function';

        if (isFunction) {
          try {
            const matched = (value as (c: T) => boolean)(condition);

            if (matched) {
              return <>{conditionChildren}</>;
            }
          } catch (error) {
            console.error('When error evaluating match function:', error);
            return null;
          }
        }

        if (value === condition) {
          return <>{conditionChildren}</>;
        }
      }
    }
    return null;
  }, [cases, condition]);

  return Component;
}

function Case<T>({ children }: CaseProps<T>) {
  return <>{children}</>;
}

function Default({ children }: DefaultProps) {
  return <>{children}</>;
}

Switch.Case = Case;
Switch.Default = Default;
