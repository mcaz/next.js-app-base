import { useCallback, useEffect } from 'react';

export const useInfo = (ctx: TAppProps) => {
  const { pageProps, router } = ctx;
  const { path } = pageProps.page;

  const printInfo = useCallback(() => {
    console.log('[Page]:', path, pageProps, router);
  }, [pageProps, path, router]);

  useEffect(() => printInfo, [printInfo]);

  return {
    printInfo,
  };
};
