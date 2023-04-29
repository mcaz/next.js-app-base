import { useRender } from '@/hooks/react';

import { s } from './TableHead.styles';
import { TProps } from './TableHead.types';

export const TableHead: TFC<TProps> = ({
  component: Component = 'thead',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableHead, className)}>
      {children}
    </Component>
  );
};
