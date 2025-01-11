import { createStyles } from '@/libs';

export const s = createStyles(() => {
  return {
    Root: {},
    Head: {
      padding: '0 0.5rem 1rem 0.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem',
    },
    Head__Title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    Head__Actions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    Head__Select: {
      marginRight: '1rem',
    },
    Head__Button: {},
    Panel: {
      padding: '1rem 0.5rem',
    },
    Body: {},
  };
}, 'DataGridContainer');
