import { withAuthSSR } from '@/backend/withAuthSSR';
import { pageConfig } from '@/config/pageConfig';
import { request } from '@/libs/api';

import { TResource } from './index.types';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (
  ctx
): NSSR.TResult<TResource> => {
  return withAuthSSR(ctx, pageConfig.components, async () => {
    const { articles: ssrArticles } = await request(({ articleRepo }) =>
      articleRepo.list()
    );

    if (ssrArticles) {
      const resource: TResource = {
        ssrArticles,
      };

      return {
        props: {
          page: pageConfig.article,
          resource,
        },
      };
    }

    return {
      props: {
        page: pageConfig.article,
        resource: {
          ssrArticles: null,
        },
      },
    };
  });
};
