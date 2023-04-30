import type { NextApiHandler } from 'next';

import { removeSession } from '@/backend';
import { authConfig } from '@/config';

export const handler: NextApiHandler = async (req, res) => {
  if (req.cookies[authConfig.name]) {
    removeSession(res);
    res.status(200).json({});
  } else {
    res.status(400).json({ error: { message: 'Session not found.' } });
  }
};

export default handler;
