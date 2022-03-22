import { s } from './TableHead.styles';
import { TProps } from './TableHead.types';
import { useStyles } from '~/hooks/react';

export const TableHead: TVFC<TProps> = ({
  component: Component = 'thead',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableHead, className)}>
      {children}
    </Component>
  );
};

export default TableHead;
