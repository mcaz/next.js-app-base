import { createStyles } from '@/libs/style';

export const s = createStyles({
  Modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Inner: {
    background: '#fff',
    padding: '1.6rem',
    borderRadius: '0.8rem',
    textAlign: 'center',
  },
  Division: {
    paddingBottom: '1.6rem',

    ':last-child': {
      paddingBottom: 0,
    },
  },
});
