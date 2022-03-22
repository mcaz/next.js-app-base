import { s } from './TableBody.styles';
import { TProps } from './TableBody.types';
import { useStyles } from '~/hooks/react';

export const TableBody: TVFC<TProps> = ({
  component: Component = 'tbody',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableBody, className)}>
      {children}
    </Component>
  );
};

export default TableBody;
