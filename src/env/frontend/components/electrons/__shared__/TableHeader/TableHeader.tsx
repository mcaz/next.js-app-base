import { useRender } from '@/hooks/react';

import { s } from './TableHeader.styles';
import { TProps } from './TableHeader.types';

export const TableHeader: TFC<TProps> = ({
  component: Component = 'th',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableHeader, className)}>
      {children}
    </Component>
  );
};
