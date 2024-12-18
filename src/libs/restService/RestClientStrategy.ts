import { RestClient } from './RestClient';
import { IRequestStrategy, IStrategyResponse } from './types';

export abstract class RequestStrategy implements IRequestStrategy {
  abstract request<T>(restClient: RestClient): Promise<IStrategyResponse<T>>;

  protected params(restClient: RestClient) {
    switch (restClient.bodyType) {
      case 'json':
        return restClient.requestBody.json;
      case 'form':
        return restClient.requestBody.formData;
      default:
        return restClient.requestBody.json;
    }
  }
}

class GetStrategy extends RequestStrategy {
  protected static instance: GetStrategy;

  constructor() {
    super();
  }

  async request<T>(restClient: RestClient): Promise<IStrategyResponse<T>> {
    const params = this.params(restClient);

    return await restClient.client.get<T>(restClient.url, {
      params,
      headers: restClient.requestOptions.headers,
    });
  }

  public static getInstance() {
    if (GetStrategy.instance) {
      return GetStrategy.instance;
    }

    return (GetStrategy.instance = new GetStrategy());
  }
}

class PutStrategy extends RequestStrategy {
  protected static instance: PutStrategy;

  constructor() {
    super();
  }

  async request<T>(restClient: RestClient): Promise<IStrategyResponse<T>> {
    const params = this.params(restClient);

    return await restClient.client.put<T>(
      restClient.url,
      params,
      restClient.requestOptions
    );
  }

  public static getInstance() {
    if (PutStrategy.instance) {
      return PutStrategy.instance;
    }

    return (PutStrategy.instance = new PutStrategy());
  }
}

class PostStrategy extends RequestStrategy {
  protected static instance: PostStrategy;

  constructor() {
    super();
  }

  async request<T>(restClient: RestClient): Promise<IStrategyResponse<T>> {
    const params = this.params(restClient);

    return await restClient.client.post<T>(
      restClient.url,
      params,
      restClient.requestOptions
    );
  }

  public static getInstance() {
    if (PostStrategy.instance) {
      return PostStrategy.instance;
    }

    return (PostStrategy.instance = new PostStrategy());
  }
}

class DeleteStrategy extends RequestStrategy {
  protected static instance: DeleteStrategy;

  constructor() {
    super();
  }

  async request<T>(restClient: RestClient): Promise<IStrategyResponse<T>> {
    const params = this.params(restClient);

    return await restClient.client.delete<T>(restClient.url, {
      data: params,
    });
  }

  public static getInstance() {
    if (DeleteStrategy.instance) {
      return DeleteStrategy.instance;
    }

    return (DeleteStrategy.instance = new DeleteStrategy());
  }
}

export const getStrategy = GetStrategy.getInstance();
export const putStrategy = PutStrategy.getInstance();
export const postStrategy = PostStrategy.getInstance();
export const deleteStrategy = DeleteStrategy.getInstance();
