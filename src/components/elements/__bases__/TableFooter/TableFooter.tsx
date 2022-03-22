import { s } from './TableFooter.styles';
import { TProps } from './TableFooter.types';
import { useStyles } from '~/hooks/react';

export const TableFooter: TVFC<TProps> = ({
  component: Component = 'tfoot',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableFooter, className)}>
      {children}
    </Component>
  );
};

export default TableFooter;
