import { createStyles } from '@/libs';

export const s = createStyles(({ theme }) => {
  return {
    Root: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      height: '3rem',
      padding: '0 1rem',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    Title: {
      fontSize: '1rem',
    },
  };
}, 'Header');
