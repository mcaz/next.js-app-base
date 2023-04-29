import { repos } from '@/data/models';

export const request = async <T, E = TApiError<T>>(
  reqestFn: (context: typeof repos) => Promise<T & { status: number }>
): Promise<T & { error?: E; status?: number }> => {
  try {
    const data = await reqestFn({ ...repos });

    return {
      ...data,
      error: void 0,
    };
  } catch (error) {
    if (error?.isAxiosError && error?.response && error?.response?.status) {
      return {
        ...error,
        error: error as TApiError<T>,
        status: error.response.status as number,
      };
    } else {
      throw error;
    }
  }
};
