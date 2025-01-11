import { IconButton } from '@/components/atoms';
import { Box } from '@/components/primitives';
import { default as MuiDrawer } from '@mui/material/Drawer';
import { s } from './Drawer.module.styles';
import { TProps } from './Drawer.module.types';

export function Drawer({ isOpen, title, onClose, children }: TProps) {
  return (
    <MuiDrawer anchor="right" open={isOpen} onClose={onClose}>
      <Box className={s.Root}>
        <Box className={s.Head}>
          <Box className={s.Head__Title}>{title}</Box>
          <Box className={s.Head__Button}>
            <IconButton
              onClick={onClose}
              icon={(Icons) => <Icons.Clear className={s.Head__Button__Icon} />}
            />
          </Box>
        </Box>
        <Box className={s.Main}>{children}</Box>
      </Box>
    </MuiDrawer>
  );
}
