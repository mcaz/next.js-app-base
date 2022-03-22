import { ApiClient } from './apiLib.ApiClient';
import { Requester } from './apiLib.ApiClient.requester';
import { IRequester } from './apiLib.ApiClient.types';

export class PutRequester extends Requester implements IRequester {
  /**
   * PUTリクエスト
   */
  async request<T>({ client, url, params }: ApiClient): Promise<T> {
    return (await client.put<T>(url, params.value)).data;
  }
}
