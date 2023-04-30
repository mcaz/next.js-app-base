import { parseCookies } from 'nookies';

import { authConfig, pageConfig } from '@/config';

export const withAuthSSR = async <T>(
  ctx: NSSR.TContext,
  page: TPage,
  callback: () => Promise<T>
) => {
  if (page.public) {
    return callback();
  }

  const { idToken } = parseCookies(ctx);

  const body = JSON.stringify({ idToken: idToken || '' });

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${authConfig.key}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );

  if (!response.ok) {
    return {
      redirect: {
        destination: pageConfig.login.path,
        permanent: false,
      },
    };
  }

  return callback();
};
