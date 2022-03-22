import SimpleBar from 'simplebar-react';

import { TProps } from './Scroll.types';

export const Scroll: TVFC<TProps> = ({ children, ...props }) => {
  return <SimpleBar {...props}>{children}</SimpleBar>;
};

export default Scroll;
