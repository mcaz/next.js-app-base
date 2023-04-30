import { IconButtonProps } from '@mui/material/IconButton';

import { I } from '@/icons';

export type TProps = Omit<IconButtonProps, 'children'> & {
  icon: (icons: typeof I) => TNode;
};
