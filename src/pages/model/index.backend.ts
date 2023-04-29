import { pageConfig } from '@/config/pageConfig';
import { request } from '@/libs/api';

import { TResource } from './index.types';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps =
  async (): NSSR.TResult<TResource> => {
    const { articles: ssrArticles } = await request(({ articleRepo }) =>
      articleRepo.list()
    );

    if (ssrArticles) {
      const resource: TResource = {
        ssrArticles,
      };

      return {
        props: {
          page: pageConfig.model,
          resource,
        },
      };
    }

    return {
      props: {
        page: pageConfig.model,
        resource: {
          ssrArticles: null,
        },
      },
    };
  };
