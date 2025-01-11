import { Button as ButtonBase } from '@mui/material';
import { TProps } from './Button.module.types';

export function Button({ children, onClick, variant='contained', ...props }: TProps) {
  return (
    <ButtonBase
      {...props}
      variant={variant}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick(e);
      }}
    >
      {children}
    </ButtonBase>
  );
}
