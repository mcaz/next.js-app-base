export const authConfig = {
  cookie: {
    namespace: 'authToken',
    maxAge: 12 * 60 * 60 * 24 * 1000,
  },
} as const;

export default authConfig;
