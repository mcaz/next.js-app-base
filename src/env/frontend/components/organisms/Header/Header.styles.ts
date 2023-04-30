import { createStyles, theme } from '@/libs/style';

export const s = createStyles({
  Header: {
    background: theme.palette.primary.main,
  },

  Header__Inner: {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%',
    height: '6.4rem',
    color: '#FFF',
    fontWeight: 'bold',
  },

  Header__Cell: {
    display: 'table-cell',
    padding: '1rem 2.4rem',
    verticalAlign: 'middle',
  },

  Header__Cell_title: {
    textAlign: 'left',
  },

  Header__Cell_user: {
    textAlign: 'right',
  },

  Header__LogoutIcon: {
    color: theme.palette.common.white,
  },
});
