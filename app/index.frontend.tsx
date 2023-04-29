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
    pages: ctx.pages,
    currentPage: ctx.page,
  });

  return <>fooo</>;
};
