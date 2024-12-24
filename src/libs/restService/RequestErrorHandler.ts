import { redirectTo403, redirectToLogin } from '@/libs/redirect';
import { ResponseCodeEnum } from '@/types/enums';
import { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { IApiErrorResponse } from './types';

class RequestErrorHandler {
  protected static instance: RequestErrorHandler;

  handle(error: Error | AxiosError, ctx?: GetServerSidePropsContext) {
    console.error('Error occurred:', error);

    const { status, message } = this.redirectBasedOnError(
      error as AxiosError<IApiErrorResponse>,
      ctx
    );

    return {
      success: false,
      status: status || ResponseCodeEnum.ERROR_500,
      error,
      message,
    };
  }

  private redirectBasedOnError(
    error: AxiosError<IApiErrorResponse> | Error,
    ctx?: GetServerSidePropsContext
  ) {
    if (!(error instanceof AxiosError)) {
      return {
        success: false,
        status: ResponseCodeEnum.ERROR_500,
        message: 'An unknown error occurred',
      };
    }

    const defaultMessage = 'An unexpected error occurred';

    const statusMessages: { [key in number]: string } = {
      [ResponseCodeEnum.ERROR_401]: 'Unauthorized: Please log in',
      [ResponseCodeEnum.ERROR_403]: 'Forbidden: Access is denied',
      [ResponseCodeEnum.ERROR_404]:
        'Not Found: The requested resource was not found',
      [ResponseCodeEnum.ERROR_500]:
        'Internal Server Error: Please try again later',
    };

    const responseMessage: string =
      error.response?.data?.message ||
      statusMessages[error.response?.status as ResponseCode] ||
      defaultMessage;

    switch (error.response?.status) {
      case ResponseCodeEnum.ERROR_401:
        RequestErrorHandler.redirectToLogin(ctx);
        break;
      case ResponseCodeEnum.ERROR_403:
        RequestErrorHandler.redirectTo403(ctx);
        break;
    }

    return {
      success: false,
      message: responseMessage,
    };
  }

  public static redirectToLogin(ctx?: GetServerSidePropsContext) {
    redirectToLogin(ctx);
  }

  public static redirectTo403(ctx?: GetServerSidePropsContext) {
    redirectTo403(ctx);
  }
}

export const requestErrorHandler = new RequestErrorHandler();
