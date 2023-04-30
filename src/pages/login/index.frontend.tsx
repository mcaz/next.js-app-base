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

  return (
    <L.OneColumnLayout
      components={{
        Header: <O.Header {...header} />,
        Footer: <O.Footer />,
      }}
    >
      <T.Login {...ctx} />
    </L.OneColumnLayout>
  );
};
