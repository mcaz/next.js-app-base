import { useGlobal } from './_useGlobal';
import { useServices } from './_useServices';

type DefaultRequestOption = {
  showError?: boolean;
  errorMessage?: string;
};

export const useServiceArticle = () => {
  const {
    request,
    isLoading,
    services: { articleService },
  } = useServices();
  const { notice } = useGlobal();

  const defaultOptions: DefaultRequestOption = {
    showError: true,
  };

  const list = async (
    params: FuncParam<typeof articleService.list>,
    options = defaultOptions
  ) => {
    const {
      error,
      success,
      data: articles,
    } = await request(() => articleService.list(params, { debug: true }));

    if (options?.showError && error) {
      notice.alert(options.errorMessage || '一覧の取得に失敗しました');
    }

    return {
      error,
      success,
      articles,
    };
  };

  const findById = async (
    params: FuncParam<typeof articleService.findById>,
    options = defaultOptions
  ) => {
    const {
      error,
      success,
      data: articles,
    } = await request(() => articleService.findById(params));

    if (options?.showError && error) {
      notice.alert(options.errorMessage || '記事の検索に失敗しました');
    }

    return {
      error,
      success,
      articles,
    };
  };

  return {
    isLoading,
    list,
    findById,
  };
};
