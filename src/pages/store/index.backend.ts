import { pageConfig } from '@/config/pageConfig';
import { withAuthSSR } from '@/env/backend';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (ctx): NSSR.TResult => {
  return withAuthSSR(ctx, pageConfig.store, async () => {
    return {
      props: {
        page: pageConfig.store,
      },
    };
  });
};
