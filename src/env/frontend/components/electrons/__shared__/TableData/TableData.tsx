import { useRender } from '@/hooks/react';

import { s } from './TableData.styles';
import { TProps } from './TableData.types';

export const TableData: TFC<TProps> = ({
  component: Component = 'td',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableData, className)}>
      {children}
    </Component>
  );
};
