import { combineComponent } from '@/libs';
import { useMemo } from 'react';

export const useCombine = <
  T extends ComponentType<unknown> | ElementType,
  P extends Omit<ComponentProps<T>, 'children'>
>(
  Element: ReactElement,
  ...components: { component: T; props?: P }[]
) => {
  const CombinedComponent = useMemo(() => {
    return <>{combineComponent(Element, ...components)}</>;
  }, [Element, components]);

  return CombinedComponent;
};
