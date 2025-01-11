import { Box, Container } from '@/components/primitives';
import { useConfigs, useRouter } from '@/hooks';
import { s } from './Header.module.styles';

export function Header() {
  const { configs } = useConfigs();
  const { router } = useRouter();

  return (
    <Container as={Box} className={s.Root}>
      <Box component="h1" className={s.Title}>
        {configs.app.systemName}: {router.currentPage?.meta.title}
      </Box>
    </Container>
  );
}
