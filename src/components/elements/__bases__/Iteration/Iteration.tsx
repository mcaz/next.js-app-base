import { TProps } from './Iteration.types';
import { useIterator } from '~/hooks/react';

export const Iteration: TVFC<TProps> = ({
  children,
  component: Component,
  className,
}) => {
  const { mapChildren, uidIterator } = useIterator();

  return (
    <>
      {mapChildren(children, (children) => {
        return (
          <Component key={uidIterator.next().value} className={className}>
            {children}
          </Component>
        );
      })}
    </>
  );
};

export default Iteration;
