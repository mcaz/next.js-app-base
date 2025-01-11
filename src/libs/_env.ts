import { configs } from '@/configs';

export const root = (): typeof globalThis => {
  return globalThis;
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const apiEndPointBase = () => {
  return isBrowser()
    ? configs.api.publicNetwork.endpointBase
    : configs.api.localNetwork.endpointBase;
};
