import { AxiosHeaders, RawAxiosHeaders, ResponseType } from 'axios';
import { RestClient } from './RestClient';

export interface IRequestStrategy {
  request: <T>(ctx: RestClient) => Promise<{ data: T }>;
}

export interface IOptions {
  headers?: Partial<AxiosHeaders> | Partial<RawAxiosHeaders>;
  responseType?: ResponseType;
}

export interface IRouteParams {
  [key: NumberOrString]: unknown;
}

export interface IBodyParams {
  [key: NumberOrString]: unknown;
}

export type TBodyType = 'json' | 'form';

export interface IAuthUser {
  getIdToken: (forceRefresh?: boolean) => Promise<TNullable<string>>;
}

export interface IStrategyResponse<T> {
  data: T;
  status: number;
}

export interface IResponse<T> {
  rawData: T;
  status: number;
}

interface IApiErrorResponse {
  message?: string;
}
