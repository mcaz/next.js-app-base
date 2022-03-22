import { s } from './ResourceTableRow.styles';
import { TProps } from './ResourceTableRow.types';
import E from '~/components/elements';
import { useStyles } from '~/hooks/react';

export const ResourceTableRow: TVFC<TProps> = ({
  children,
  className,
  ...props
}) => {
  const { c, tryStyleIfExists } = useStyles();

  return (
    <E.TableRow
      className={c(s.ResourceTableRow, tryStyleIfExists(className))}
      {...props}
    >
      {children}
    </E.TableRow>
  );
};

export default ResourceTableRow;
s;
