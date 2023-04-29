import { useRender } from '@/hooks/react';

import { s } from './Table.styles';
import { TProps } from './Table.types';

export const Table: TFC<TProps> = ({
  component: Component = 'table',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.Table, className)}>
      {children}
    </Component>
  );
};
