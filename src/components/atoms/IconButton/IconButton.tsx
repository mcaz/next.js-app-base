import { IconButton as IconButtonBase } from '@/components/primitives';
import { Icons } from '@/components/icons';
import { TProps } from './IconButton.module.types';

export function IconButton({ icon, ...props }: TProps) {
  return <IconButtonBase {...props}>{icon(Icons)}</IconButtonBase>;
}
