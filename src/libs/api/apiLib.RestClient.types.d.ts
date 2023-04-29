import type { RestClient } from './apiLib.RestClient';

export interface IRequestStrategy {
  request: <T>(ctx: RestClient) => Promise<TApiResponse<T>>;
}

export interface IParam {
  [key: TNumberOrString]: unknown;
}

export interface IAuthUser {
  getIdToken: (forceRefresh?: boolean) => Promise<TNullable<string>>;
}

export type TRequestResponse<T> = {
  data: T;
  status: number;
};
