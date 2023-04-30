import type { NextApiHandler } from 'next';

import { assignSession, login } from '@/env/backend';

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
