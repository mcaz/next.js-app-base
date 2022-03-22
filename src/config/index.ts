import apiConfig from './apiConfig';
import authConfig from './authConfig';
import envConfig from './envConfig';
import formConfig from './formConfig';
import pageConfig from './pageConfig';
import storeConfig from './storeConfig';

export { apiConfig } from './apiConfig';
export { authConfig } from './authConfig';
export { envConfig } from './envConfig';
export { formConfig } from './formConfig';
export { pageConfig } from './pageConfig';
export { storeConfig } from './storeConfig';

export const config = {
  api: apiConfig,
  auth: authConfig,
  env: envConfig,
  page: pageConfig,
  store: storeConfig,
  form: formConfig,
} as const;

export default config;
