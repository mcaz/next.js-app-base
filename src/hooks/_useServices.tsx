import * as dto from '@/data/rest/dto';
import * as services from '@/data/rest/services';
import * as enums from '@/types/enums';
import { useCallback, useState } from 'react';

export const useServices = () => {
  const [isLoading, setLoading] = useState(false);

  const request = useCallback(
    async <T,>(
      fn: (ctx: { _: Services; enums: Enums; dto: Dto }) => Promise<T>
    ) => {
      setLoading(true);
      const res = await fn({ _: services, enums, dto });
      setLoading(false);

      return res;
    },
    [setLoading]
  );

  return {
    services,
    ...services,
    dto,
    ...dto,
    enums,
    ...enums,
    isLoading,
    request,
  };
};
