import { useMemo } from 'react';
import { TProps } from './Memoized..module.types';

export function Memoized<T extends ComponentType<unknown> | ElementType>({
  children,
  ...props
}: TProps<T>): ReactElement {
  const Component = props.as as ElementType;
  const memoizedProps = props.props;

  const MemoizedComponent = useMemo(() => {
    return <Component {...memoizedProps}>{children}</Component>;
  }, [Component, memoizedProps, children]);

  return <>{MemoizedComponent}</>;
}
