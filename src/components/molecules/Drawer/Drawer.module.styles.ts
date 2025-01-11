import { createStyles } from "@/libs";

export const s = createStyles(({ theme }) => {
  return {
    Root: {
      width: "30rem",
    },
    Head: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      borderBottom: `0.1rem solid ${theme.palette.divider}`,
    },
    Head__Title: {},
    Head__Button: {},
    Head__Button__Icon: {
      fontSize: "1rem",
    },
    Main: {
      padding: "1rem",
    },
  };
}, 'Drawer');
