import { pageConfig } from '@/config/pageConfig';

import { TResource } from './index.types';

export const getStaticProps: NSSG.TProps =
  async (): NSSG.TResult<TResource> => {
    return {
      props: {
        page: pageConfig.error500,
        resource: {
          message: '500',
        },
      },
    };
  };
