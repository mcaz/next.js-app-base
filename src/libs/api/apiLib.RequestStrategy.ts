import { RestClient } from './apiLib.RestClient';
import { IRequestStrategy } from './apiLib.RestClient.types';

export abstract class RequestStrategy implements IRequestStrategy {
  /**
   * APIリクエスト
   *
   * @param rectClient
   */
  abstract request<T>(rectClient: RestClient): Promise<TApiResponse<T>>;
}

export class GetStrategy extends RequestStrategy {
  /**
   * GETリクエスト
   *
   * @prop {RestClient} client
   * @prop {string}     url
   * @prop {Params}     params
   * @returns
   */
  async request<T>({ client, url, params }: RestClient) {
    return client.get<T>(url, { params: params.value });
  }
}

export class PutStrategy extends RequestStrategy {
  /**
   * PUTリクエスト
   *
   * @prop {RestClient} client
   * @prop {string}     url
   * @prop {Params}     params
   * @returns
   */
  async request<T>({ client, url, params }: RestClient) {
    return client.put<T>(url, params.value);
  }
}

export class PostStrategy extends PutStrategy {
  /**
   * POSTリクエスト
   *
   * @prop {RestClient} client
   * @prop {string}     url
   * @prop {Params}     params
   * @returns
   */
  async request<T>({ client, url, params }: RestClient) {
    return client.post<T>(url, params.value);
  }
}

export class DeleteStrategy extends RequestStrategy {
  /**
   * DELETEリクエスト
   *
   * @prop {RestClient} client
   * @prop {string}     url
   * @prop {Params}     params
   * @returns
   */
  async request<T>({ client, url, params }: RestClient) {
    return client.delete<T>(url, {
      data: params.value,
    });
  }
}
