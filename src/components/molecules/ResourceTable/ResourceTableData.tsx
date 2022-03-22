import { s } from './ResourceTableData.styles';
import { TProps } from './ResourceTableData.types';
import E from '~/components/elements';
import { useStyles } from '~/hooks/react';

export const ResourceTableData: TVFC<TProps> = ({ children, className }) => {
  const { c, tryStyleIfExists } = useStyles();

  return (
    <E.TableData
      className={c(s.ResourceTableData, tryStyleIfExists(className))}
    >
      {children}
    </E.TableData>
  );
};

export default ResourceTableData;
