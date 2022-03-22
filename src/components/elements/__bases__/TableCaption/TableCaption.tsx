import { s } from './TableCaption.styles';
import { TProps } from './TableCaption.types';
import { useStyles } from '~/hooks/react';

export const TableCaption: TVFC<TProps> = ({
  component: Component = 'caption',
  children,
  className,
  ...props
}) => {
  const { c } = useStyles();

  return (
    <Component {...props} className={c(s.TableCaption, className)}>
      {children}
    </Component>
  );
};

export default TableCaption;
