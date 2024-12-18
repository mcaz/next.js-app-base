import { useMemo, useRender } from '@/hooks';
import React from 'react';
import { TProps } from './If.modules.types';

export function If({ condition, children, exclusive = false }: TProps) {
  const { childrenToArray } = useRender();

  const Component = useMemo(() => {
    const childArray = Array.isArray(children)
      ? childrenToArray(children)
      : [children];

    if (exclusive) {
      const thenChild = childArray.filter(
        (child) => React.isValidElement(child) && child.type === Then
      );

      const elseChild = childArray.filter(
        (child) => React.isValidElement(child) && child.type === Else
      );

      if (condition && thenChild) {
        return <>{thenChild}</>;
      }

      if (!condition && elseChild) {
        return <>{elseChild}</>;
      }
    } else {
      const otherChildren = childArray.filter((child) => {
        if (React.isValidElement(child)) {
          return child.type !== Then && child.type !== Else;
        }

        if (typeof child === 'string') {
          return true;
        }

        return true;
      });

      return <>{condition && otherChildren}</>;
    }

    return null;
  }, [children, childrenToArray, condition, exclusive]);

  return <>{Component}</>;
}

function Then({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function Else({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

If.Then = Then;
If.Else = Else;
