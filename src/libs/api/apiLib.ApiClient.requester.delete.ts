import { ApiClient } from './apiLib.ApiClient';
import { Requester } from './apiLib.ApiClient.requester';
import { IRequester } from './apiLib.ApiClient.types';

export class DeleteRequester extends Requester implements IRequester {
  /**
   * DELETEリクエスト
   */
  async request<T>({ client, url, params }: ApiClient): Promise<T> {
    return (
      await client.delete<T>(url, {
        data: params.value,
      })
    ).data;
  }
}
