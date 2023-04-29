import { createStyles } from '@/libs/style';

export const s = createStyles({
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
    wordBreak: 'break-all !important',
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

  // .ResourceTablePanel
  Panel: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  // .Panel__Cell
  Panel__Cell: {
    display: 'flex',
    alignItems: 'center',
  },

  // .Panel__Cell--title
  Panel__Cell_title: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },

  Panel__Cell_control: {
    display: 'flex',
    paddingLeft: '0.8rem',
  },

  // .Panel__Cell__Partition
  Panel__Cell__Partition: {
    display: 'flex',
    paddingLeft: '0.8rem',
  },
});
