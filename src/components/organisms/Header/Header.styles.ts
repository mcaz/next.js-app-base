import { styles, theme } from '~/libs/style';

export const s = styles({
  // .Header
  Header: {
    background: theme.palette.primary.main,
  },

  // .Inner
  Inner: {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%',
    height: '6.4rem',
    color: '#FFF',
    fontWeight: 'bold',
  },

  // .Cell
  Cell: {
    display: 'table-cell',
    padding: '1rem 2.4rem',
    verticalAlign: 'middle',
  },

  // .Cell--title
  Cell_title: {
    textAlign: 'left',
  },

  // .Cell--button
  Cell_button: {
    textAlign: 'right',
  },

  // .Cell--user
  Cell_user: {
    textAlign: 'right',
  },
});
