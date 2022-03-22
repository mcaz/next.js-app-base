import { styles } from '~/libs/style';

export const s = styles({
  // .ResourceTablePanel
  ResourceTablePanel: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  // .Cell
  Cell: {
    display: 'flex',
    alignItems: 'center',
  },

  // .Cell--title
  Cell_title: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },

  // .Cell__Partition
  Cell__Partition: {
    paddingLeft: '0.8rem',
  },
});
