import { pageConfig } from '~/config';

export const usePage = (props: TAppProps) => {
  const { Component: Page, pageProps, router } = props;

  const pageCtx = {
    ...pageProps,
    pages: pageConfig,
    router,
  };

  return {
    Page,
    pageCtx,
  };
};
