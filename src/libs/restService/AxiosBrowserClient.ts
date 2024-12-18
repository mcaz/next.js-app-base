import { configs } from '@/configs';
import { publicPagePaths } from '@/libs/_pages';
import { apiEndPointBase } from '@/libs/_env';
import { parseCookies, setCookie } from '@/libs/_storage';
import { InternalAxiosRequestConfig, default as axios } from 'axios';

const AxiosBrowserClient = () => {
  const client = axios.create({
    baseURL: apiEndPointBase(),
    headers: {},
    responseType: 'json',
    timeout: configs.api.timeout,
  });

  client.interceptors.request.use(
    async (config) => {
      return config;

      // const isPublicPage = Boolean(
      //   publicPagePaths().find((path) => path === window.location.pathname)
      // );

      // if (isPublicPage) {
      //   return config;
      // }

      // const moveLoginPage = () => {
      //   window.location.href = configs.pages.login.path;
      // };

      // const setToken = (
      //   config: InternalAxiosRequestConfig<any>,
      //   accessToken: string
      // ) => {
      //   config.headers.Authorization = 'Bearer ' + accessToken;
      //   return config;
      // };

      // const cookieName = configs.storage.cookie.name;
      // const accessToken = parseCookies(null)[cookieName.accessToken];
      // const isLoggedInRes = await request(({ authRepo: r }) =>
      //   r.checkLoggedIn({ accessToken })
      // );

      // if (isLoggedInRes.error) {
      //   moveLoginPage();
      //   return config;
      // }

      // if (isLoggedInRes.data.checkLoggedIn) {
      //   return setToken(config, accessToken);
      // }

      // const refreshToken = parseCookies(null)[cookieName.refreshToken];
      // const refreshTokenRequestRes = await request(({ authRepo: r }) =>
      //   r.refreshToken({ refreshToken })
      // );

      // if (refreshTokenRequestRes.error) {
      //   moveLoginPage();
      //   return config;
      // }

      // const { data } = refreshTokenRequestRes;
      // setCookie({ name: cookieName.accessToken, value: data.accessToken });
      // setCookie({ name: cookieName.refreshToken, value: data.refreshToken });
      // setCookie({ name: cookieName.user, value: JSON.stringify(data.user) });

      // return setToken(config, accessToken);
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

export const axiosBrowserClient = AxiosBrowserClient();
