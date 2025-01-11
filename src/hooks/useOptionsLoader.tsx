import { useCallback, useEffect, useMemo, useState } from 'react';
import { useServices } from './useServices';

type OptionsLoader<T> = Promise<OptionType<T>[]>;

export const useOptionsLoader = <T,>(
  selectOptionsLoader: (loaders: {
    articleOptionsLoader: () => OptionsLoader<T>;
  }) => () => OptionsLoader<T>
) => {
  const {
    request,
    services: { articleService },
  } = useServices();

  const [options, setOptions] = useState<OptionType<T>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const articleOptionsLoader = useCallback(
    /**
     * articleOptionsをロードする
     * @returns
     */
    async () => {
      const { error, data } = await request(() => articleService.list({}));

      if (error) {
        return [];
      }
      return data.map((rawData) => {
        return {
          label: rawData.title,
          value: rawData.id,
          rawData: rawData as T,
        };
      });
    },
    [articleService, request]
  );

  const selectedOptionLoader = useMemo(
    () => selectOptionsLoader({ articleOptionsLoader }),
    [selectOptionsLoader, articleOptionsLoader]
  );

  const load = useCallback(async () => {
    setIsLoading(true);
    setOptions(await selectedOptionLoader());
    setIsLoading(false);
  }, [selectedOptionLoader]);

  useEffect(() => {
    load();
  }, [load]);

  return { value: options, reload: load, isLoading };
};
