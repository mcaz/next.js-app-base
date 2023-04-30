import { A } from '@/atoms';
import { E } from '@/electrons';
import { F } from '@/forms';
import { useForm } from '@/hooks/form';
import { useRender } from '@/hooks/react';
import { M } from '@/molecules';

import { useArticleTable } from './ArticleTable.hooks';
import { s } from './ArticleTable.styles';

export const ArticleTable: TFC<ReturnType<typeof useArticleTable>> = ({
  title,
  records,
  onClickSearchButton,
  onClickClearButton,
}) => {
  const { c } = useRender();

  const { control, handleSubmit, setValues } = useForm<{ searchText: string }>({
    validate: ({ schema, validator }) => {
      return schema({
        searchText: validator.string().required(),
      });
    },
  });

  const handleClickSearchButton: TSubmitHandler<{
    searchText: string;
  }> = async (data) => {
    onClickSearchButton && onClickSearchButton(data);
  };

  const handleClickClearButton = () => {
    setValues({ searchText: '' });
    onClickClearButton && onClickClearButton();
  };

  return (
    <M.ListTable
      panel={
        <E.Container component={E.DL} className={s.Panel}>
          <E.DT className={c(s.Panel__Cell, s.Panel__Cell_title)}>{title}</E.DT>

          <E.Container
            component={E.DD}
            className={c(s.Cell, s.Panel__Cell_control)}
            division={{
              component: E.Division,
              className: s.Panel__Cell__Partition,
            }}
          >
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

            <A.Button
              onClick={handleSubmit(handleClickClearButton)}
              color="gray"
            >
              Clear
            </A.Button>
          </E.Container>
        </E.Container>
      }
      rows={records}
      cols={[
        { render: ({ id }) => <>{id}</> },
        { render: ({ userId }) => <>{userId}</> },
        { render: ({ title }) => <>{title}</> },
        { render: ({ body }) => <>{body}</> },
      ]}
    />
  );
};
