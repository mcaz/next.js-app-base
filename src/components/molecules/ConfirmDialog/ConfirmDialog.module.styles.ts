import { createStyles } from "@/libs";

export const s = createStyles(({ theme }) => {
  return {
    Inner: {},
    Title: {
      fontSize: '1.25rem',
      fontWeight: 700,
      textAlign: 'center',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    Content: {
      padding: '2rem 1rem',
    },
    Actions: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '1rem',
    },
  };
}, 'Drawer');
