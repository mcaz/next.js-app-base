import { createStyles } from '@/libs/style';

export const s = createStyles(({ theme }) => {
  return {
    ListTable: {},
    ListTable__Inner: {},
    ListTable__Table: {
      position: 'relative',
      tableLayout: 'auto',
      width: '100%',
    },
    ListTable__Table__Caption: {
      position: 'sticky',
      top: 0,
      padding: '1.2rem 1rem',
      fontSize: '1.4rem',
      fontWeight: 700,
      borderBottom: '0.1rem solid rgba(0, 0, 0, 0.12)',
      backgroundColor: theme.palette.common.white,
    },
    ListTable__Table__Head: {},
    ListTable__Table__Body: {},
    ListTable__Table__Row: {
      display: 'table-row',
      borderBottom: '0.1rem solid rgba(0, 0, 0, 0.12)',
    },
    ListTable__Table__Cell: {
      padding: '1.2rem 0.8rem 1.2rem 0.8rem',
      wordBreak: 'keep-all',

      '&:nth-of-type(1)': {
        paddingLeft: '1rem',
      },

      '&:nth-last-of-type(1)': {
        paddingRight: '1rem',
      },
    },
    ListTable__Table__Cell_header: {
      verticalAlign: 'middle',
    },
    ListTable__Table__Cell_data: {
      verticalAlign: 'top',
    },
  };
});
