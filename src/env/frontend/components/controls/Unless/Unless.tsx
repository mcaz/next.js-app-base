import { FC } from 'react';

import { Props } from './Unless.types';

export const Unless: FC<Props> = ({ condition, children }) => {
  return <>{Boolean(!condition) && children}</>;
};
