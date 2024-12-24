import { createStyles } from '@/libs';

export const s = createStyles(({ theme }) => {
  return {
    Root: {
      width: '100vw',
      maxHeight: '100vh',
    },
    Inner: {
      maxHeight: '100vh',
    },
    Header: {},
    Contents: {
      display: 'flex',
      flexDirection: 'row',
    },
    Sidebar: {
      width: `16rem`,
    },
    Main: {
      width: `calc(100vw - 16rem)`,
      padding: '1.6rem 0.8rem',
    },
  };
}, 'MainLayout');
