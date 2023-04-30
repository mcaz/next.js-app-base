import { apiConfig } from '@/config';
import { createRestClient } from '@/libs/api';

import { TRequest } from './login.types';

export const login = async (params: TRequest) => {
  return createRestClient(apiConfig.selfServer.endpoints.login, '/')
    .setParams(params)
    .post();
};
