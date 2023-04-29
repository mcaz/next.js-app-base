import { pageConfig } from '@/config/pageConfig';

/**
 * Backend
 */
export const getServerSideProps: NSSR.TProps = async (): NSSR.TResult => {
  try {
    return {
      props: {
        page: pageConfig.home,
      },
    };
  } catch (e) {
    console.log(e.response);
  }
};
