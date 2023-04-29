import { ArticleEntity } from '@/data/models/entities';
import { E } from '@/electrons';
import { useInfo } from '@/hooks/pageTemplate';
import { useCallback, useEffect, useRender, useStates } from '@/hooks/react';
import { O } from '@/organisms';

import { TEMPLATE_NAME } from './Model.const';
import { s } from './Model.styles';
import { TResource } from './Model.types';

export const PageTemplate: TPageProps<TResource> = ({
  router,
  resource: { ssrArticles = [] },
}) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const { request } = useRender();

  const { states, setStates } = useStates({
    clientArticles: [] as ArticleEntity[],
    filteredSsrArticles: ssrArticles,
    filteredClientArticles: [] as ArticleEntity[],
  });

  /**
   * 記事ロード
   */
  const loadClientArticles = useCallback(async () => {
    const {
      articles: clientArticles,
      error,
      // status,
    } = await request(({ articleRepo }) => articleRepo.list());

    if (error) {
      return console.log('リクエストに失敗しました。');
    }

    setStates({
      clientArticles,
      filteredClientArticles: clientArticles,
    });
  }, [request, setStates]);

  /**
   * 記事検索(SSR)
   *
   * @param props
   */
  const handleSearchSSR = (props: { searchText: string }) => {
    setStates({
      filteredSsrArticles: ssrArticles.filter(({ title }) =>
        title.includes(props.searchText)
      ),
    });
  };

  /**
   * 記事リセット(SSR)
   */
  const handleResetSSR = () => {
    setStates({ filteredSsrArticles: ssrArticles });
  };

  /**
   * 記事検索(Client)
   *
   * @param props
   */
  const handleSearchClient = (props: { searchText: string }) => {
    setStates({
      filteredClientArticles: states.clientArticles.filter(({ title }) =>
        title.includes(props.searchText)
      ),
    });
  };

  /**
   * 記事リセット(Client)
   */
  const handleResetClient = () => {
    setStates({ filteredClientArticles: states.clientArticles });
  };

  // Watch

  useEffect(() => {
    loadClientArticles();
  }, [loadClientArticles]);

  // Render

  return (
    <E.Container
      component={E.Division}
      className={s.PageTemplate}
      division={{ component: E.Scroll, className: s.PageTemplate__Scroll }}
    >
      <O.ArticleTable
        title="SSR Table"
        records={states.filteredSsrArticles}
        onClickSearchButton={handleSearchSSR}
        onClickClearButton={handleResetSSR}
      />

      <O.ArticleTable
        title="Client Table"
        records={states.filteredClientArticles}
        onClickSearchButton={handleSearchClient}
        onClickClearButton={handleResetClient}
      />
    </E.Container>
  );
};
