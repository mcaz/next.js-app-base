export const useSidebar = (props: { pages: TPages; currentPage: TPage }) => {
  const items = Object.entries(props.pages).map(([, { path, meta }]) => {
    return {
      href: path,
      label: meta.title,
      current: path === props.currentPage.path,
    };
  });

  return {
    items,
  };
};
