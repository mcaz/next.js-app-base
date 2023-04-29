import { useRender } from '@/hooks/react';

import { s } from './TableBody.styles';
import { TProps } from './TableBody.types';

export const TableBody: TFC<TProps> = ({
  component: Component = 'tbody',
  children,
  className,
  ...props
}) => {
  const { c } = useRender();

  return (
    <Component {...props} className={c(s.TableBody, className)}>
      {children}
    </Component>
  );
};
