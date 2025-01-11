import { C } from '@/components/controls';
import { DataGridContainer } from '@/components/molecules';
import { DataGrid } from '@mui/x-data-grid';
import { TProps } from './ArticleDataGrid.module.types';

export function ArticleDataGrid({ articles, isLoading, onRefresh }: TProps) {
  return (
    <C.Memoized
      as={DataGridContainer}
      props={{
        title: 'Article Data Grid',
        isLoading,
        actionButtons: [
          {
            label: '再取得',
            onClick: onRefresh,
          },
        ],
        slots: {},
      }}
    >
      <DataGrid
        getRowId={({ id }) => id}
        rows={articles}
        columns={[
          {
            field: 'id',
            headerName: 'id',
            width: 50,
            renderCell: ({ row }) => {
              return <>{row.id}</>;
            },
          },
          {
            field: 'title',
            headerName: 'title',
            width: 500,
            renderCell: ({ row }) => {
              return <>{row.title}</>;
            },
          },
          {
            field: 'body',
            headerName: 'body',
            width: 500,
            renderCell: ({ row }) => {
              return <>{row.body}</>;
            },
          },
        ]}
        hideFooter
      />
    </C.Memoized>
  );
}
