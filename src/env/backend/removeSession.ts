import { destroyCookie } from 'nookies';

import { authConfig } from '@/config';

export const removeSession = (res) => {
  destroyCookie(res, authConfig.name, {
    path: '/',
  });
};
