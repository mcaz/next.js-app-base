import type { NextApiHandler } from 'next';

// import { assignSession, login } from '@/env/backend';

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

export const login = async (email: string, password: string) => {
  const body = JSON.stringify({ email, password, returnSecureToken: true });

  return await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authConfig.key}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
};

export const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  console.log('handler1');

  const response = await login(email, password);

  console.log('handler2');

  if (!response.ok) {
    console.log('handler3');

    res
      .status(response.status)
      .json({ error: { message: response.statusText } });

    console.log('handler4');

    throw new Error(response.statusText);
  }

  console.log('handler5');

  const { idToken } = await response.json();

  console.log('handler6');

  assignSession(res, idToken);

  console.log('handler7');

  res.status(response.status).json({});

  console.log('handler8');
};

export default handler;
