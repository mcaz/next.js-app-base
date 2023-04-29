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
    const foo = await client.get<T>(url, { params: params.value });

    return foo;
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
   * @prop {object}     data
   * @returns
   */
  async requestData<T>({ client, url, data }: RestClient & { data: FormData }) {
    return client.post<T>(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
