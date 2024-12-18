import { configs } from '@/configs';

const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const writeHeadTo302 = (
  ctx: GetServerSidePropsContext,
  path: string
) => {
  ctx.res.writeHead(302, { Location: path });
  ctx.res.end();
};

export const redirectToLogin = (ctx?: GetServerSidePropsContext) => {
  const path = configs.pages.login.path;

  if (ctx && ctx.res) {
    return writeHeadTo302(ctx, path);
  }

  if (isBrowser()) {
    window.location.href = path;
  }
};

export const redirectTo403 = (ctx?: GetServerSidePropsContext) => {
  const path = configs.pages.login.path;

  if (ctx && ctx.res) {
    return writeHeadTo302(ctx, path);
  }

  if (isBrowser()) {
    window.location.href = path;
  }
};
