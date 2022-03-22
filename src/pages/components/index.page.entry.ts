import { pageConfig } from '~/config';

/**
 * entry
 */
export const getServerSideProps: NSSR.TProps = async (): NSSR.TResult => {
  return {
    props: { page: pageConfig.components },
  };
};
