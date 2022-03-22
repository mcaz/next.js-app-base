import { ApiClient } from './apiLib.ApiClient';
import { PutRequester } from './apiLib.ApiClient.requester.put';

export class PostRequester extends PutRequester {
  /**
   * POST_DATAリクエスト
   *
   * @async
   * @param ctx
   * @param ctx.client Api通信クライアント
   * @param ctx.url    エンドポイントURL
   * @param ctx.data   ファイル等の送信データ
   * @returns          レスポンス
   */
  async requestData<T>({
    client,
    url,
    data,
  }: ApiClient & { data: FormData }): Promise<T> {
    return (
      await client.post<T>(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data;
  }
}
