import { watch } from '~/libs/react';

export const useInfo = (ctx: TAppProps) => {
  const { pageProps, router } = ctx;
  const { path } = pageProps.page;

  const printInfo = () => {
    console.log('[Page]:', path, pageProps, router);
  };

  watch([path], printInfo);

  return {
    printInfo,
  };
};
