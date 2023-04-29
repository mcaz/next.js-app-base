import { default as Link } from 'next/link';

import { TProps } from './Anchor.types';

export const Anchor: TFC<TProps> = ({
  children,
  ...linkProps
}): JSX.Element => {
  return <Link {...linkProps}>{children}</Link>;
};
