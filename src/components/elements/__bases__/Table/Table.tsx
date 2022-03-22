import { s } from './Table.styles';
import { TProps } from './Table.types';
import { useStyles } from '~/hooks/react';

export const Table: TVFC<TProps> = ({
  component: Component = 'table',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.Table, className)}>
      {children}
    </Component>
  );
};

export default Table;
