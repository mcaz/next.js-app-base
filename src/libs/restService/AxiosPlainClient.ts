import { configs } from '@/configs';
import { default as axios } from 'axios';
import { apiEndPointBase } from '@/libs/_env';

const AxiosPlainClient = () => {
  const client = axios.create({
    baseURL: apiEndPointBase(),
    responseType: 'json',
    headers: {},
    timeout: configs.api.timeout,
  });

  return client;
};

export const axiosPlainClient = AxiosPlainClient();
