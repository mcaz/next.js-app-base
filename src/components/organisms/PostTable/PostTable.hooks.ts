import { useResourceTableSearchForm } from '~/components/molecules';
import { postModel } from '~/models';

export const usePostTable = ({
  onClickSearchButton,
  onClickClearButton,
  ...props
}: Omit<ReturnType<typeof useResourceTableSearchForm>, 'searchFormContext'> & {
  title: string;
  records: postModel.Dto[];
  classes?: TPartialCSSClassNamesObject<'PostTable' | 'PostTable_Container'>;
}) => {
  return {
    ...props,
    ...useResourceTableSearchForm({
      onClickSearchButton,
      onClickClearButton,
    }),
  };
};
