import { NestedList } from '@/components/molecules';
import { Box, Container } from '@/components/primitives';
import {
  useCallback,
  useConfigs,
  useMemo,
  useRender,
  useRouter,
} from '@/hooks';
import { s } from './Sidebar.module.styles';

export function Sidebar() {
  const { pages } = useConfigs();
  const { router } = useRouter();
  const { c } = useRender();

  const handleClickItem = useCallback(
    (page: PageDefinition) => router.push(page.path),
    [router]
  );

  const items = useMemo(() => {
    return [pages.home].map((page) => {
      return {
        id: page.path,
        primary: page.meta.title,
        icon: <page.Icon className={c(s.Icon)} />,
        onClickItem: () => handleClickItem(page),
      };
    });
  }, [c, handleClickItem, pages.home]);

  return (
    <Container as={Box} className={s.Root}>
      <NestedList items={items} />
    </Container>
  );
}
