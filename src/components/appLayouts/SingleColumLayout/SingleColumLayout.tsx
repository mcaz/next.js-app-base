import { Box, Container, Grid } from '@/components/primitives';
import { TProps } from './SingleColumLayout.module.types';
import { s } from './SingleColumLayout.module.styles';

export function SingleColumLayout({ children }: TProps) {
  return (
    <Container as={Box} className={s.Root}>
      <Grid container className={s.Inner}>
        {children}
      </Grid>
    </Container>
  );
}
