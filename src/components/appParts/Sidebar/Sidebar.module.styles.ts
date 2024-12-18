import { createStyles } from '@/libs';

export const s = createStyles(({ theme }) => {
  return {
    Root: {
      padding: '1rem 0.5rem',
    },
    Icon: {
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
    },
    Icon_highlight: {},
  };
}, 'Sidebar');
