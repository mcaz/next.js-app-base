import { TResource } from './index.types';
import { pageConfig } from '@/config/pageConfig';

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
