import { createStyles } from '@/libs/style';

export { createStyles };

export const s = createStyles({
  // .WithSidebarLayout
  WithSidebarLayout: {
    display: 'flex',
    height: '100vh',
  },

  Column: {},
  Column_menu: {
    padding: '1.6rem 0',
    width: '40rem',
    background: 'tomato',
    overflow: 'hidden',
    textAlign: 'center',
  },
  Column_menu_expand: {
    width: '20rem',
  },
  Column_main: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridTemplateColumns: `calc(100vw - 20rem)`,
    gridTemplateRows: `6.4rem 1fr 5rem`,
    gridTemplateAreas: `
        "."
        "."
        "."
      `,
    gridColumnGap: 0,
    gridRowGap: 0,
    height: '100vh',
  },

  ToggleButton: {
    display: 'inline-block',
  },

  // .HeaderContainer
  HeaderContainer: {
    height: '6.4rem',
  },

  // .MainContainer
  MainContainer: {},

  // .MainContainer__Inner
  MainContainer__Inner: {
    width: '100%',
    height: `calc(100vh - 6.4rem - 5rem)`,
    padding: '4rem 4rem 5.3rem 4rem',
    margin: '0 auto',
  },

  // .FooterContainer
  FooterContainer: {
    height: '5rem',
  },

  Container: {},

  List: {},
  ListItem: {
    display: 'inline-block',
    margin: '0 1.6rem 1.6rem 0',
    verticalAlign: 'top',
  },
});
