import { createStyles } from '@/libs/style';

export const s = createStyles({
  PageTemplate__List: {
    display: 'block',
    width: '100%',
    padding: '3.2rem 1.6rem',

    ':nth-child(2n)': {
      background: '#eee',
    },
  },
  PageTemplate__List__Item: {
    verticalAlign: 'top',
    marginBottom: '1.6rem',

    ':last-child': {
      margin: 0,
    },
  },
  PageTemplate__Form: {
    display: 'flex',
    gap: '1.6rem',
  },
});
