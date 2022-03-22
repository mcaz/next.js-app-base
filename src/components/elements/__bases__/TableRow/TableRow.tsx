import { s } from './TableRow.styles';
import { TProps } from './TableRow.types';
import { useStyles } from '~/hooks/react';

export const TableRow: TVFC<TProps> = ({
  component: Component = 'tr',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableRow, className)}>
      {children}
    </Component>
  );
};

export default TableRow;
