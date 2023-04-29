import { useRender } from '@/hooks/react';

import { s } from './TableFooter.styles';
import { TProps } from './TableFooter.types';

export const TableFooter: TFC<TProps> = ({
  component: Component = 'tfoot',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableFooter, className)}>
      {children}
    </Component>
  );
};
