import { useRender } from '@/hooks/react';

import { s } from './TableRow.styles';
import { TProps } from './TableRow.types';

export const TableRow: TFC<TProps> = ({
  component: Component = 'tr',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableRow, className)}>
      {children}
    </Component>
  );
};
