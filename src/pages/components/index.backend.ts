import { pageConfig } from '@/config/pageConfig';

export const getServerSideProps: NSSR.TProps = async (): NSSR.TResult => {
  return {
    props: {
      page: pageConfig.components,
    },
  };
};
