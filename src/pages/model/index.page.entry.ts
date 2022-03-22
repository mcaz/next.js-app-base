import { TResource } from './index.page.types';
import { pageConfig } from '~/config';
import { postModel } from '~/models';

/**
 * entry
 */
export const getServerSideProps: NSSR.TProps =
  async (): NSSR.TResult<TResource> => {
    try {
      const resource = {
        postVos: await postModel.repo.readAll(),
      };

      return {
        props: { page: pageConfig.model, resource },
      };
    } catch (e) {
      console.log(e.response);
    }
  };
