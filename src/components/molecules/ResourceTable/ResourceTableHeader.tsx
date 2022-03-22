import { s } from './ResourceTableHeader.styles';
import { TProps } from './ResourceTableHeader.types';
import E from '~/components/elements';
import { useStyles } from '~/hooks/react';

export const ResourceTableHeader: TVFC<TProps> = ({ children, className }) => {
  const { c, tryStyleIfExists } = useStyles();

  return (
    <E.TableHeader
      className={c(s.ResourceTableHeader, tryStyleIfExists(className))}
    >
      {children}
    </E.TableHeader>
  );
};

export default ResourceTableHeader;
