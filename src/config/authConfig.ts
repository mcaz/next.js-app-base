export const authConfig = {
  key: process.env.FIREBASE_API_KEY || '',
  name: 'idToken',
  cookie: {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: true,
    path: '/',
  },
} as const;
