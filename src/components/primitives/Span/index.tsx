import {
  default as Typography,
  TypographyProps,
} from '@mui/material/Typography';

type TProps = Omit<TypographyProps, 'component'> & {
  children?: ReactNode;
};

export function Span({ children, ...props }: TProps) {
  return (
    <Typography {...props} component="span">
      {children}
    </Typography>
  );
}
