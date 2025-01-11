import { ArticleDto } from '@/data/rest/dto';

export type TProps = PropsWithChildren<{
  //
}>;

export type TStates = {
  articles: ArticleDto[];
};
