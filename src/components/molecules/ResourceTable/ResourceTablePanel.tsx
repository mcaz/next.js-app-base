import { s } from './ResourceTablePanel.styles';
import { TProps } from './ResourceTablePanel.types';
import A from '~/components/atoms';
import E from '~/components/elements';
import F from '~/components/forms';
import { useStyles } from '~/hooks/react';

export const ResourceTablePanel: TVFC<TProps> = ({
  title,
  onClickSearchButton,
  onClickClearButton,
  searchFormContext: { control, handleSubmit, setValue },
}) => {
  const { c } = useStyles();

  const handleClickSearchButton: TSubmitHandler<{
    searchText: string;
  }> = async (data) => {
    onClickSearchButton && onClickSearchButton(data);
  };

  const handleClickClearButton = () => {
    setValue('searchText', '');
    onClickClearButton && onClickClearButton();
  };

  return (
    <E.Container className={s.ResourceTablePanel}>
      <E.Division className={c(s.Cell, s.Cell_title)}>{title}</E.Division>
      <E.Division className={c(s.Cell)}>
        <E.Iteration component={E.Division} className={s.Cell__Partition}>
          <F.TextField
            name="searchText"
            control={control}
            placeholder="検索"
            fullWidth
          />
          <A.Button
            onClick={handleSubmit(handleClickSearchButton)}
            color="green"
          >
            TitleSearch
          </A.Button>
          <A.Button onClick={handleSubmit(handleClickClearButton)} color="gray">
            Clear
          </A.Button>
        </E.Iteration>
      </E.Division>
    </E.Container>
  );
};

export default ResourceTablePanel;
