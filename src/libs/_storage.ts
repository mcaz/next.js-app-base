import { configs } from '@/configs';
import {
  setCookie as setNookiesCookie,
  parseCookies as parseNookiesCookies,
  destroyCookie,
} from 'nookies';

export const setCookie = (params: {
  name: string;
  value: string;
  path?: string;
  maxAge?: number;
}) => {
  setNookiesCookie(null, params.name, params.value, {
    path: params.path || configs.storage.cookie.path,
    maxAge: params.maxAge || configs.storage.cookie.maxAge,
  });
};

export const parseCookies: typeof parseNookiesCookies = (...params) => {
  return parseNookiesCookies(...params);
};

export const getCookie = (name: keyof typeof configs.storage.cookie.name) => {
  return parseNookiesCookies(null)[name as unknown as string] as
    | string
    | undefined;
};

export const removeCookie = (params: { name: string }) => {
  return destroyCookie(null, params.name, {
    path: configs.storage.cookie.path,
  });
};
