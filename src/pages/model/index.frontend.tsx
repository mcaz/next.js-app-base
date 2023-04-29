import { O } from '@/organisms';
import { L } from '@/pageLayouts';

import { TResource } from './index.types';
import { T } from '@/pageTemplates';

/**
 * Frontend
 */
export const Page: TPageProps<TResource> = ({ resource, ...ctx }) => {
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
      <T.Model {...ctx} resource={resource} />
    </L.WithSidebarLayout>
  );
};
