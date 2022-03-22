import { TResource } from './index.page.types';
import { pageConfig } from '~/config';

/**
 * Server Side
 */
export const getStaticProps: NSSG.TProps =
  async (): NSSG.TResult<TResource> => {
    const resource = { message: '404' };

    return {
      props: { page: pageConfig.error404, resource },
    };
  };
