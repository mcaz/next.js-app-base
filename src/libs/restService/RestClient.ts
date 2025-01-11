import { template } from '@/libs/_string';
import { AxiosInstance } from 'axios';
import { RouteParams, BodyParams } from './Params';
import {
  IBodyParams,
  IOptions,
  IResponse,
  IRouteParams,
  TBodyType,
} from './types';
import {
  getStrategy,
  putStrategy,
  postStrategy,
  deleteStrategy,
  RequestStrategy,
} from './RestClientStrategy';
import { HttpMethodEnum } from '@/types/enums';

export class RestClient {
  readonly client: AxiosInstance;
  readonly endpoint: string;
  readonly requestBody = new BodyParams();
  private requestRouteParams = new RouteParams();
  private defaultRequestOptions: IOptions = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    },
  };

  private getStrategy: RequestStrategy;
  private postStrategy: RequestStrategy;
  private putStrategy: RequestStrategy;
  private deleteStrategy: RequestStrategy;

  bodyType: TBodyType = 'json';
  requestOptions: IOptions = {};
  method?: HttpMethod;

  constructor(ctx: {
    client: AxiosInstance;
    endpoint: string;
    getStrategy: RequestStrategy;
    postStrategy: RequestStrategy;
    putStrategy: RequestStrategy;
    deleteStrategy: RequestStrategy;
  }) {
    this.client = ctx.client;
    this.endpoint = ctx.endpoint;
    this.getStrategy = ctx.getStrategy;
    this.postStrategy = ctx.postStrategy;
    this.putStrategy = ctx.putStrategy;
    this.deleteStrategy = ctx.deleteStrategy;
  }

  get url() {
    return template(this.endpoint, this.requestRouteParams.json, 'curly');
  }

  token(token: string) {
    this.client.defaults.headers.common.Authorization = 'Bearer ' + token;
    return this;
  }

  options(options: IOptions) {
    this.requestOptions = {
      ...this.defaultRequestOptions,
      ...this.requestOptions,
      ...options,
    };
    return this;
  }

  body(params: IBodyParams, type: TBodyType = 'json') {
    this.bodyType = type;
    this.requestBody.set(params);
    return this;
  }

  routeParams(params: IRouteParams) {
    this.requestRouteParams.set(params);
    return this;
  }

  private async request<T>(strategy: RequestStrategy): Promise<IResponse<T>> {
    const { data: rawData, status } = await strategy.request<T>(this);

    return {
      rawData,
      status,
    };
  }

  get<T>(): Promise<IResponse<T>> {
    this.method = HttpMethodEnum.GET;
    return this.request(this.getStrategy);
  }

  post<T>(): Promise<IResponse<T>> {
    this.method = HttpMethodEnum.POST;
    return this.request(this.postStrategy);
  }

  put<T>(): Promise<IResponse<T>> {
    this.method = HttpMethodEnum.PUT;
    return this.request(this.putStrategy);
  }

  delete<T>(): Promise<IResponse<T>> {
    this.method = HttpMethodEnum.DELETE;
    return this.request(this.deleteStrategy);
  }

  static createInstance(client: AxiosInstance, endpoint: string) {
    return new RestClient({
      client,
      endpoint,
      getStrategy,
      postStrategy,
      putStrategy,
      deleteStrategy,
    });
  }
}
