import { IconButton as IconButtonBase } from '@/components/primitives';
import { Icons } from '@/components/icons';
import { ComponentProps } from 'react';

export type TProps = ComponentProps<typeof IconButtonBase> & {
  icon: (icons: typeof Icons) => ReactNode;
};
