import { s } from './TableHeader.styles';
import { TProps } from './TableHeader.types';
import { useStyles } from '~/hooks/react';

export const TableHeader: TVFC<TProps> = ({
  component: Component = 'th',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableHeader, className)}>
      {children}
    </Component>
  );
};

export default TableHeader;
