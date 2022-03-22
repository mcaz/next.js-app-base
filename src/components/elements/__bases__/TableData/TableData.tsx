import { s } from './TableData.styles';
import { TProps } from './TableData.types';
import { useStyles } from '~/hooks/react';

export const TableData: TVFC<TProps> = ({
  component: Component = 'td',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableData, className)}>
      {children}
    </Component>
  );
};

export default TableData;
