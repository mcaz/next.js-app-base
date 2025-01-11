import { configs } from '@/configs';
import * as dto from '@/data/rest/dto';
import * as enums from '@/types/enums';
import { ResponseCodeEnum } from '@/types/enums';
import { AxiosError } from 'axios';
import { requestErrorHandler } from './RequestErrorHandler';

class RequestExecutor {
  protected static instance: RequestExecutor;

  async exec<T>(
    service: (ctx: { dto: Dto; enums: Enums; configs: Configs }) => Promise<T>,
    ctx?: GetServerSidePropsContext
  ): Promise<
    | ({
        status: number;
        success: boolean;
        error: AxiosError | Error;
        message: string;
      } & T)
    | ({
        status: number;
        success: boolean;
        error: undefined;
        message: undefined;
      } & {
        [Key in keyof T]: undefined;
      })
  > {
    try {
      const data = await service({
        dto,
        enums,
        configs,
      });

      return {
        ...data,
        status: ResponseCodeEnum.SUCCESS,
        success: true,
        message: void 0,
        error: void 0,
      };
    } catch (e: unknown) {
      return requestErrorHandler.handle(e as AxiosError | Error, ctx);
    }
  }

  public static getInstance() {
    if (RequestExecutor.instance) {
      return RequestExecutor.instance;
    }

    return (RequestExecutor.instance = new RequestExecutor());
  }
}

export const requestExecutor = RequestExecutor.getInstance();
