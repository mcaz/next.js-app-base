import { default as Box } from '@mui/material/Box';
import { TProps } from './Div.types';

export function Div({ children, ...props }: TProps) {
  return (
    <Box {...props} component="div">
      {children}
    </Box>
  );
}
