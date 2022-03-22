export const apiConfig = {
  publicNetwork: {
    endpointBase: process.env.NEXT_PUBLIC_PUBLIC_NETWORK_ENDPOINT_BASE || '',
  },
  localNetwork: {
    endpointBase: process.env.NEXT_PUBLIC_LOCAL_NETWORK_ENDPOINT_BASE || '',
  },
  selfServer: {
    endpoints: {
      login: '/api/login',
      logout: '/api/logout',
    },
  },
} as const;

export default apiConfig;
