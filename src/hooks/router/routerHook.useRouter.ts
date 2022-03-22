import { useRouter as _useRouter } from 'next/router';

import { pageConfig } from '~/config';

export const useRouter = () => {
  const router = _useRouter();
  const pages = pageConfig;

  return {
    router,
    pages,
  };
};
