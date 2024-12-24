import { BoxProps } from '@mui/material/Box';

export type TProps = Omit<BoxProps, 'component'> & {
  children?: ReactNode;
};
