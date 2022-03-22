import type { ApiClient } from './apiLib.ApiClient';

export interface IRequester {
  request: <T>(ctx: ApiClient) => Promise<T>;
}

export interface IParam {
  [key: TNumberOrString]: unknown;
}

export interface IAuthUser {
  getIdToken: (forceRefresh?: boolean) => Promise<TNullable<string>>;
}
