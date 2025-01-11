import { Header, Sidebar } from '@/components/appParts';
import { Box, Container } from '@/components/primitives';
import { s } from './MainLayout.module.styles';
import { TProps } from './MainLayout.module.types';

export function MainLayout({ children }: TProps) {
  return (
    <Container as={Box} className={s.Root}>
      <Box className={s.Inner}>
        <Box className={s.Header} component="header">
          <Header />
        </Box>
        <Box className={s.Contents} component="aside">
          <Box className={s.Sidebar}>
            <Sidebar />
          </Box>
          <Box className={s.Main} component="main">
            {children}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
