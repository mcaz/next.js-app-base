import { styles } from '~/libs/style';

export const s = styles({
  // .BodyContainer
  BodyContainer: {
    height: '50rem',
  },

  // .PostTable
  PostTable: {},

  // .Row
  Row: {
    ':nth-child(2n)': {
      background: '#eee',
    },
  },

  // .Cell
  Cell: {
    verticalAlign: 'middle',
  },

  // .Cell--id
  Cell_id: {
    width: '5em',
    textAlign: 'center',
  },

  // .Cell--userId
  Cell_userId: {
    width: '8em',
    textAlign: 'center',
  },

  // .Cell--title
  Cell_title: {},

  // .Cell--body
  Cell_body: {},
});
