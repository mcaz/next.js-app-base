import { configs } from '@/configs';
import { default as axios } from 'axios';
import { apiEndPointBase } from '@/libs/_env';

const AxiosServerClient = () => {
  const client = axios.create({
    baseURL: apiEndPointBase(),
    headers: {},
    responseType: 'json',
    timeout: configs.api.timeout,
  });

  client.interceptors.request.use(
    async (config) => {
      return config;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  return client;
};

export const axiosServerClient = AxiosServerClient();
