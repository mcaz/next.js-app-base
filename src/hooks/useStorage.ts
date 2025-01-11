import { getCookie, parseCookies, removeCookie, setCookie } from '@/libs';

export const useStorage = () => {
  return {
    setCookie,
    getCookie,
    removeCookie,
    parseCookies,
  };
};
