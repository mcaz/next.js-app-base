import { configs } from '@/configs';
import * as dto from '@/data/rest/dto';
import { isBrowser } from '@/libs/_env';
import * as enums from '@/types/enums';
import { default as nookies } from 'nookies';
import { default as path } from 'path';
import { axiosBrowserClient } from './AxiosBrowserClient';
import { axiosPlainClient } from './AxiosPlainClient';
import { axiosServerClient } from './AxiosServerClient';
import { requestExecutor } from './RequestExecutor';
import { RestClient } from './RestClient';

export class RestServiceBase {
  private rootResource: string;

  constructor(rootResource?: string) {
    this.rootResource = rootResource || '';
  }

  protected resource(additionalResource?: string) {
    return additionalResource
      ? path.join(this.rootResource, additionalResource || '').toString()
      : this.rootResource;
  }

  private static AxiosInstance = (usePlainClient?: boolean) => {
    if (usePlainClient) {
      return axiosPlainClient;
    }

    if (isBrowser()) {
      return axiosBrowserClient;
    }

    return axiosServerClient;
  };

  static createRequest = <P, R, RawData>(
    options: {
      resource: string;
      usePlainClient?: boolean;
      debug?: boolean;
    },
    request: (
      ctx: {
        client: RestClient;
        dto: Dto;
        enums: Enums;
        configs: Configs;
      },
      params: P
    ) => Promise<{ status: number; data: R; rawData: RawData }>
  ) => {
    return async (
      params: P,
      ctx?: { ssrCtx?: GetServerSidePropsContext; debug?: boolean }
    ) => {
      const axiosInstance = RestServiceBase.AxiosInstance(
        options.usePlainClient
      );

      const client = RestClient.createInstance(axiosInstance, options.resource);

      if (ctx?.ssrCtx) {
        const accessToken = nookies.get(ctx?.ssrCtx)[
          configs.storage.cookie.name.accessToken
        ];

        if (accessToken) {
          client.token(accessToken);
        }
      }

      const result = await requestExecutor.exec(({ dto, enums, configs }) => {
        return request({ client, dto, enums, configs }, params);
      }, ctx?.ssrCtx);

      if (options.debug || ctx?.debug) {
        const endpoint = path.join(
          client.client.defaults.baseURL || '',
          client.url
        );

        console.log(
          `%s
          \n[%s]: %s
          \nResource: %s
          \nResult: %o
          \nClient: %o`,
          new Date(),
          client.method,
          endpoint,
          options.resource,
          result,
          client
        );
      }

      return {
        ...result,
        dto,
        enums,
        configs,
      };
    };
  };
}
