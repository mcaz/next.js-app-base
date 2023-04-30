import type { NextApiResponse } from 'next';
import { setCookie } from 'nookies';

import { authConfig } from '@/config';

export const assignSession = (res: NextApiResponse, idToken: string) => {
  setCookie({ res }, authConfig.name, idToken, authConfig.cookie);
};

export const removeSession = (res) => {
  res.setHeader(
    'Set-Cookie',
    `${authConfig.name}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly`
  );
};
