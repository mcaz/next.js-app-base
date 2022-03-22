import O from '~/components/organisms';
import L from '~/components/pageLayouts';
import T from '~/components/pageTemplates';

/**
 * Client Side
 */
export const Page: TPageProps = (ctx) => {
  return (
    <L.OneColmnLayout
      components={{
        Header: <O.Header title={ctx.page.meta.title} />,
        Footer: <O.Footer />,
      }}
    >
      <T.Store {...ctx} />
    </L.OneColmnLayout>
  );
};
