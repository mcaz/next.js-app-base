import { default as axios, AxiosInstance } from 'axios';

import { apiConfig } from '@/config';
import { isBrowser } from '@/libs/env';
import { template } from '@/libs/string';

import { Params } from './apiLib.Params';
import {
  RequestStrategy,
  GetStrategy,
  PostStrategy,
  PutStrategy,
  DeleteStrategy,
} from './apiLib.RequestStrategy';
import { IAuthUser, IParam, TRequestResponse } from './apiLib.RestClient.types';

export class RestClient {
  readonly client: AxiosInstance;

  /**
   * エンドポイントベース
   *
   * @readonly
   * @type {string}
   * */
  readonly endpoint: string = '';

  /**
   * パラメータ
   *
   * @readonly
   * @type {Params}
   * */
  readonly params: Params = new Params();

  /**
   * URLクエリ
   *
   * @readonly
   * @type {Params}
   * */
  readonly queries: Params = new Params();

  /**
   * @constructor
   * @param endpoint
   * @param endpointBase
   */
  constructor(endpoint: string, endpointBase?: string) {
    this.endpoint = endpoint;

    this.client = axios.create({
      // 実行環境に合わせてエンドポイントを変更する
      baseURL: endpointBase
        ? endpointBase
        : isBrowser()
        ? apiConfig.publicNetwork.endpointBase
        : apiConfig.localNetwork.endpointBase,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json',
    });
  }

  /**
   * @readonly
   * @type {string}
   */
  get url() {
    return template(this.endpoint, this.queries.value);
  }

  /**
   * APIトークン
   *
   * @param user
   * @returns
   */
  async setToken(user: IAuthUser) {
    this.client.defaults.headers.common.Authorization =
      'Bearer ' + (await user.getIdToken(true));
    return this;
  }

  /**
   * パラメータ設定
   *
   * @param param
   * @returns
   */
  setParams(param: IParam) {
    this.params.add(param);
    return this;
  }

  /**
   * クエリー設定
   *
   * @param setQueries
   * @returns
   */
  setQueries(setQueries: IParam) {
    this.queries.add(setQueries);
    return this;
  }

  /**
   * リクエスト
   *
   * @private
   * @async
   * @param requestStrategy
   * @returns
   */
  private async request<T>(
    requestStrategy: RequestStrategy
  ): Promise<TRequestResponse<T>> {
    try {
      return requestStrategy.request<T>(this);
    } catch (error) {
      if (error?.isAxiosError) {
        throw { error, status: error.response.status };
      } else {
        throw error;
      }
    }
  }

  /**
   * GETリクエスト
   *
   * @async
   * @returns {Promise<TRequestResponse<T>>}
   */
  async get<T>(): Promise<TRequestResponse<T>> {
    return this.request<T>(new GetStrategy());
  }

  /**
   * POSTリクエスト
   *
   * @async
   * @returns {Promise<TRequestResponse<T>>}
   */
  post<T>(): Promise<TRequestResponse<T>> {
    return this.request(new PostStrategy());
  }

  /**
   * PUTリクエスト
   *
   * @async
   * @returns {Promise<TRequestResponse<T>>}
   */
  put<T>(): Promise<TRequestResponse<T>> {
    return this.request(new PutStrategy());
  }

  /**
   * DELETEリクエスト
   *
   * @async
   * @returns {Promise<TRequestResponse<T>>}
   */
  delete<T>(): Promise<TRequestResponse<T>> {
    return this.request(new DeleteStrategy());
  }
}

/**
 * クライアント作成
 *
 * @param endpoint
 * @param endpointBase
 * @returns
 */
export const createRestClient = (endpoint: string, endpointBase?: string) => {
  return new RestClient(endpoint, endpointBase);
};
