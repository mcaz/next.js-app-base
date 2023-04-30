import { pageConfig } from '@/config/pageConfig';
import { withAuthSSR } from '@/env/backend';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (ctx): NSSR.TResult => {
  return withAuthSSR(ctx, pageConfig.login, async () => {
    return {
      props: {
        page: pageConfig.login,
      },
    };
  });
};
