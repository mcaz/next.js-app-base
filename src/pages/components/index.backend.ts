import { withAuthSSR } from '@/backend/withAuthSSR';
import { pageConfig } from '@/config/pageConfig';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (ctx): NSSR.TResult => {
  return withAuthSSR(ctx, pageConfig.components, async () => {
    return {
      props: {
        page: pageConfig.components,
      },
    };
  });
};
