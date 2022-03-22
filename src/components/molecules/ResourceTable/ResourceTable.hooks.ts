import { useForm } from '~/hooks/form';

export const useResourceTableSearchForm = ({
  onClickSearchButton,
  onClickClearButton,
}: {
  onClickSearchButton: (data: { searchText: string }) => void;
  onClickClearButton: VoidFunction;
}) => {
  const searchFormContext = useForm<{ searchText: string }>();

  return {
    searchFormContext,
    onClickSearchButton,
    onClickClearButton,
  };
};
