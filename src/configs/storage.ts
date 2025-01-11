export const storage = {
  cookie: {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    name: {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      user: 'user',
    },
  },
  localStorage: {},
} as const;
