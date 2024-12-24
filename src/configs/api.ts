export const api = {
  publicNetwork: {
    endpointBase: process.env.NEXT_PUBLIC_ENDPOINT_BASE || '',
  },
  localNetwork: {
    endpointBase: process.env.NEXT_LOCAL_ENDPOINT_BASE || '',
  },
  timeout: 120_000,
};
