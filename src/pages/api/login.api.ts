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

  const response = await login(email, password);

  if (!response.ok) {
    res
      .status(response.status)
      .json({ error: { message: response.statusText } });

    throw new Error(response.statusText);
  }

  const { idToken } = await response.json();

  assignSession(res, idToken);
  res.status(response.status).json({});
};

export default handler;
