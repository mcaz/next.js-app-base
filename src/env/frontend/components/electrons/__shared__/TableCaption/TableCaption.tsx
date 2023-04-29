import { useRender } from '@/hooks/react';

import { s } from './TableCaption.styles';
import { TProps } from './TableCaption.types';

export const TableCaption: TFC<TProps> = ({
  component: Component = 'caption',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableCaption, className)}>
      {children}
    </Component>
  );
};
