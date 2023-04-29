// import { Page } from './index.frontend';import { pageConfig } from '@/config/pageConfig';

import { pageConfig } from '@/config/pageConfig';
import { O } from '@/organisms';
import { L } from '@/pageLayouts';

import { T } from '@/pageTemplates';

// import { getServerSideProps } from './index.backend';

/**
 * Page Component
 */
export default async function Page(ctx) {
  const header = O.useHeader({
    title: pageConfig.home.meta.title,
  });

  const sidebar = O.useSidebar({
    // pages: ctx.pages,
    pages: pageConfig,
    currentPage: pageConfig.home,
  });

  return (
    <L.WithSidebarLayout
      components={{
        Header: <O.Header {...header} />,
        Footer: <O.Footer />,
        Sidebar: <O.Sidebar {...sidebar} />,
      }}
    >
      <T.Home {...ctx} />
    </L.WithSidebarLayout>
  );
}
