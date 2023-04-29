import { ArticleEntity } from '@/data/models/entities';

export const useArticleTable = ({
  onClickSearchButton,
  onClickClearButton,
  ...props
}: {
  title: string;
  records: ArticleEntity[];
  classes?: TPartialCSSClassNamesObject<'PostTable' | 'PostTable_Container'>;
  onClickSearchButton: ({ searchText }) => void;
  onClickClearButton: () => void;
}) => {
  return {
    ...props,
    onClickSearchButton,
    onClickClearButton,
  };
};
