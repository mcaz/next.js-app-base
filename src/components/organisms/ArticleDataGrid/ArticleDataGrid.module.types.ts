import { ArticleDto } from '@/data/rest/dto';

export type TProps = {
  articles: ArticleDto[];
  isLoading: boolean;
  onRefresh: () => Promise<void>;
};

export type TFields = {
  location?: string;
};
