import { default as IconButtonBase } from '@mui/material/IconButton';

import { useRender } from '@/hooks/react';
import { I } from '@/icons';

import { s } from './IconButton.styles';
import { TProps } from './IconButton.types';

export const IconButton: TFC<TProps> = ({ icon, className, ...props }) => {
  const { c } = useRender();

  return (
    <IconButtonBase className={c(s.IconButton, className)} {...props}>
      {icon(I)}
    </IconButtonBase>
  );
};

export default IconButton;
