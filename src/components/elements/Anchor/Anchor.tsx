import { default as Link } from 'next/link';

import { TProps } from './Anchor.types';

export const Anchor: TVFC<TProps> = ({
  children,
  className,
  target,
  ...linkProps
}): JSX.Element => {
  return (
    <Link {...linkProps}>
      <a className={className} target={target}>
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
