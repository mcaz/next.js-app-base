import { default as SimpleBar } from 'simplebar-react';

import { TProps } from './Scroll.types';

export const Scroll: TFC<TProps> = ({ children, ...props }) => {
  return <SimpleBar {...props}>{children}</SimpleBar>;
};
