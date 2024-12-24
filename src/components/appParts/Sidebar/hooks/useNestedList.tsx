import {
  useCallback,
  useConfigs,
  useMemo,
  useRender,
  useRouter,
} from '@/hooks';
import { s } from '../Sidebar.module.styles';

export const useNestedList = () => {
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

  return { items };
};
