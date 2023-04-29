import { createStyles } from '@/libs/style';

export const s = createStyles({
  // .Sidebar
  Sidebar: {},

  Item: {},

  Button: {
    display: 'block',
    width: '100%',
  },

  Anchor: {
    textAlign: 'center',
    display: 'block',
    lineHeight: '8rem',
    color: '#FFF',

    '&:hover': {
      color: 'black',
      fontWeight: 'bold',
    },
  },

  Anchor_current: {
    color: 'black',
    fontWeight: 'bold',
  },
});
