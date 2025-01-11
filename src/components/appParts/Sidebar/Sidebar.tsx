import { NestedList } from '@/components/molecules';
import { Box, Container } from '@/components/primitives';
import { s } from './Sidebar.module.styles';
import { useNestedList } from './hooks';

export function Sidebar() {
  const nestedListProps = useNestedList();

  return (
    <Container as={Box} className={s.Root}>
      <NestedList {...nestedListProps} />
    </Container>
  );
}
