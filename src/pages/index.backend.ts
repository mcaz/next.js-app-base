import { pageConfig } from '@/config/pageConfig';
import { withAuthSSR } from '@/env/backend/withAuthSSR';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (ctx): NSSR.TResult => {
  return withAuthSSR(ctx, pageConfig.home, async () => {
    return {
      props: {
        page: pageConfig.home,
      },
    };
  });
};
