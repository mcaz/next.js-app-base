import { ApiClient } from './apiLib.ApiClient';
import { Requester } from './apiLib.ApiClient.requester';
import { IRequester } from './apiLib.ApiClient.types';

export class GetRequester extends Requester implements IRequester {
  /**
   * GETリクエスト
   */
  async request<T>({ client, url, params }: ApiClient): Promise<T> {
    return (
      await client.get<T>(url, {
        params: params.value,
      })
    ).data;
  }
}
