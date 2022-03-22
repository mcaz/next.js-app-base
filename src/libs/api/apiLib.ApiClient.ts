import path from 'path';

import axios from 'axios';

import { Params } from './apiLib.ApiClient.params';
import { Requester } from './apiLib.ApiClient.requester';
import { DeleteRequester } from './apiLib.ApiClient.requester.delete';
import { GetRequester } from './apiLib.ApiClient.requester.get';
import { PostRequester } from './apiLib.ApiClient.requester.post';
import { PutRequester } from './apiLib.ApiClient.requester.put';
import { Slug } from './apiLib.ApiClient.slug';
import { IAuthUser, IParam } from './apiLib.ApiClient.types';
import { apiConfig } from '~/config';
import { isBrowser } from '~/libs/env';

export class ApiClient {
  /**
   * Api通信実行クライアント
   *
   * @readonly
   */
  readonly client = axios.create({
    /**
     * インスタンス生成時の実行環境によってエンドポイントのベースURLを設定
     * on browser: パブリックネットワーク
     * server : ローカルネットワーク
     */
    baseURL: isBrowser()
      ? apiConfig.publicNetwork.endpointBase
      : apiConfig.localNetwork.endpointBase,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
  });

  /**
   * baseURLから先のエンドポイントパス
   *
   * @readonly
   */
  readonly endpoint: string = '';

  /**
   * パラメータ管理変数
   *
   * @readonly
   */
  readonly params: Params = new Params();

  /**
   * slug管理変数
   *
   * @readonly
   */
  readonly slug: Slug = new Slug();

  /**
   * @constructor
   * @param endpoint baseURLから先のエンドポイントパス
   */
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /**
   * baseURLから先のエンドポイントパス、
   * slugを合わせた文字列を返す
   *
   * @readonly
   */
  get url() {
    return path.join(this.endpoint, this.slug.value);
  }

  /**
   * AuthトークンをApi実行クライアントに設定する
   *
   * @param user ユーザー情報インスタンス
   * @returns    ApiClient
   */
  async setToken(user: IAuthUser) {
    this.client.defaults.headers.common.Authorization =
      'Bearer ' + (await user.getIdToken(true));
    return this;
  }

  /**
   * パラメータを追加する
   *
   * @param param 追加パラメータ
   * @returns     ApiClient
   */
  addParams(param: IParam) {
    this.params.add(param);
    return this;
  }

  /**
   * slugを末尾に追加する
   *
   * @param slug 追加slug
   * @returns    ApiClient
   */
  appendSlug(slug: string) {
    this.slug.append(slug);
    return this;
  }

  /**
   * Apiリクエスト
   * GET, POST, PUT, DELETE
   *
   * @param requester Apiリクエスト用インスタンス
   * @returns         Apiレスポンス
   */
  private request<T>(requester: Requester): Promise<T> {
    return requester.request(this);
  }

  /**
   * GETリクエスト
   *
   * @returns Apiレスポンス
   */
  get<T>(): Promise<T> {
    return this.request(new GetRequester());
  }

  /**
   * POSTリクエスト
   *
   * @returns Apiレスポンス
   */
  post<T>(): Promise<T> {
    return this.request(new PostRequester());
  }

  /**
   * PUTリクエスト
   *
   * @returns Apiレスポンス
   */
  put<T>(): Promise<T> {
    return this.request(new PutRequester());
  }

  /**
   * DELETEリクエスト
   *
   * @returns Apiレスポンス
   */
  delete<T>(): Promise<T> {
    return this.request(new DeleteRequester());
  }

  /**
   * ApiClientインスタンスを生成する
   *
   * @static
   * @param endpoint baseURLから先のエンドポイントパス
   * @returns        Apiレスポンス
   */
  static create(endpoint: string) {
    return new ApiClient(endpoint);
  }
}
