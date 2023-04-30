import { O } from '@/organisms';
import { L } from '@/pageLayouts';
import { T } from '@/pageTemplates';

/**
 * Page Component
 */
export const Page: TPageProps = (ctx) => {
  const header = O.useHeader({
    title: ctx.page.meta.title,
  });

  const sidebar = O.useSidebar({
    page: ctx.page,
  });

  return (
    <L.WithSidebarLayout
      components={{
        Header: <O.Header {...header} />,
        Footer: <O.Footer />,
        Sidebar: <O.Sidebar {...sidebar} />,
      }}
    >
      <T.Worker {...ctx} />
    </L.WithSidebarLayout>
  );
};
