import { pageConfig } from '@/config/pageConfig';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (): NSSR.TResult => {
  return {
    props: {
      page: pageConfig.role,
    },
  };
};
