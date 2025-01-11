import { MainLayout } from '@/components/appLayouts';
import { ArticleDataGrid, SimpleForm } from '@/components/organisms';
import { Box, Container } from '@/components/primitives';
import {
  useComponentDidMount,
  useOptionsLoader,
  useServiceArticle,
  useStates,
} from '@/hooks';
import { s } from './Home.module.styles';
import { MyForm } from './NumberInput';
import { TStates } from './Home.module.types';

export function Home(props: { articles: ArticleDto[] }) {
  const articleService = useServiceArticle();

  const { states, setStates } = useStates<TStates>({
    articles: props.articles,
  });

  const {
    value: articleOptions,
    isLoading,
    reload,
  } = useOptionsLoader<ArticleDto>(
    ({ articleOptionsLoader }) => articleOptionsLoader
  );

  const loadArticles = async () => {
    const { success, articles } = await articleService.list({});

    if (success) {
      return setStates({ articles });
    }
  };

  const findById = async (
    params: FuncParam<typeof articleService.findById>
  ) => {
    const { success, articles } = await articleService.findById(params);

    if (success) {
      return setStates({ articles });
    }
  };

  const handleRefresh = async () => {
    await loadArticles();
  };

  useComponentDidMount(async () => {
    await loadArticles();
  });

  return (
    <MainLayout>
      <Container as={Box} className={s.Root}>
        <SimpleForm articleOptions={articleOptions} />
        <ArticleDataGrid
          isLoading={isLoading}
          articles={states.articles}
          onRefresh={handleRefresh}
        />
      </Container>
    </MainLayout>
  );
}
