import { apiConfig } from '@/config';
import { createRestClient } from '@/libs/api';

export const logout = async () => {
  return createRestClient(apiConfig.selfServer.endpoints.logout, '/').post();
};
