import { useConfig } from '@/hooks/config';

export const useSidebar = (props: { page: TPage }) => {
  const { pageConfig } = useConfig();

  const items = Object.entries(pageConfig).map(([, { path, meta }]) => {
    return {
      href: path,
      label: meta.title,
      current: path === props.page.path,
    };
  });

  return {
    items,
  };
};
