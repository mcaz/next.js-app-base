import { usePostTable } from './PostTable.hooks';
import { s } from './PostTable.styles';
import M from '~/components/molecules';
import { useIterator } from '~/hooks/react';
import { useStyles } from '~/hooks/react';

export const PostTable: TVFC<ReturnType<typeof usePostTable>> = ({
  title,
  records,
  ...props
}) => {
  const { c } = useStyles();
  const { uidIterator } = useIterator();

  return (
    <M.ResourceTable
      components={{
        Panel: <M.ResourceTablePanel title={title} {...props} />,
        Header: (
          <M.ResourceTableRow>
            <M.ResourceTableHeader className={c(s.Cell, s.Cell_id)}>
              id
            </M.ResourceTableHeader>
            <M.ResourceTableHeader className={c(s.Cell, s.Cell_userId)}>
              userId
            </M.ResourceTableHeader>
            <M.ResourceTableHeader className={c(s.Cell, s.Cell_title)}>
              title
            </M.ResourceTableHeader>
            <M.ResourceTableHeader className={c(s.Cell, s.Cell_body)}>
              body
            </M.ResourceTableHeader>
          </M.ResourceTableRow>
        ),
      }}
      classes={{
        BodyContainer: s.BodyContainer,
      }}
    >
      {records.map((record) => (
        <M.ResourceTableRow key={uidIterator.next().value} className={s.Row}>
          <M.ResourceTableData className={c(s.Cell, s.Cell_id)}>
            {record.id}
          </M.ResourceTableData>
          <M.ResourceTableData className={c(s.Cell, s.Cell_userId)}>
            {record.userId}
          </M.ResourceTableData>
          <M.ResourceTableData className={c(s.Cell, s.Cell_title)}>
            {record.title}
          </M.ResourceTableData>
          <M.ResourceTableData className={c(s.Cell, s.Cell_body)}>
            {record.body}
          </M.ResourceTableData>
        </M.ResourceTableRow>
      ))}
    </M.ResourceTable>
  );
};

export default PostTable;
