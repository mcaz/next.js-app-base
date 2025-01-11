import { Home } from '@/components/pageTemplates';
import { articleService } from '@/data/rest/services';
import { useMemo, useServices } from '@/hooks';

export default function Page(props: { rawArticles: Nullable<ArticleDto[]> }) {
  const { ArticleDto } = useServices();

  const articles = useMemo(
    () => ArticleDto.fromArray(props.rawArticles),
    [ArticleDto, props.rawArticles]
  );

  return <Home articles={articles} />;
}

export const getServerSideProps = async (ssrCtx: GetServerSidePropsContext) => {
  const { error, rawData: rawArticles = null } = await articleService.list(
    {},
    { ssrCtx }
  );

  if (error) {
    console.error(error);
  }

  return {
    props: {
      rawArticles,
    },
  };
};
