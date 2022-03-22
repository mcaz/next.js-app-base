import { styles } from '~/libs/style';

export const s = styles({
  List: {
    display: 'block',
    width: '100%',
    padding: '3.2rem 1.6rem',

    ':nth-child(2n)': {
      background: '#eee',
    },
  },
  ListItem: {
    verticalAlign: 'top',
    marginBottom: '1.6rem',

    ':last-child': {
      margin: 0,
    },
  },
});
