import { ApiClient } from './apiLib.ApiClient';

export abstract class Requester {
  /**
   * Apiリクエスト
   *
   * @abstract
   * @async
   * @param ctx
   * @param ctx.client Api通信クライアント
   * @param ctx.url    エンドポイントURL
   * @param ctx.params パラメータ
   * @returns          レスポンス
   */
  abstract request<T>(ctx: ApiClient): Promise<T>;
}
