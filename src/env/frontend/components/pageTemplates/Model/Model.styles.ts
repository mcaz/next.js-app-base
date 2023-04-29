import { createStyles } from '@/libs/style';

export const s = createStyles({
  PageTemplate: {
    display: 'flex',
    gap: '1.6rem',
    justifyContent: 'space-between',
    width: '100%',
  },
  PageTemplate__Scroll: {
    width: 'calc(100% / 2 - 0.8rem)',
    maxHeight: 'calc(100vh - 20rem)',
  },
});
