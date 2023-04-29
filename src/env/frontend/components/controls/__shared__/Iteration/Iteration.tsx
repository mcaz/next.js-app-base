import { TProps } from './Iteration.types';
import { useRender } from '@/hooks/react';

export const Iteration: TFC<TProps> = ({
  children,
  component: Component,
  className,
}) => {
  const { key, mapChildren } = useRender();

  return (
    <>
      {mapChildren(children, (node) => {
        return (
          <Component key={key.value} className={className}>
            {node}
          </Component>
        );
      })}
    </>
  );
};
