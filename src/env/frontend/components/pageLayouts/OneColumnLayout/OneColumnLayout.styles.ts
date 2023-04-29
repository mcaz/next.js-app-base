import { createStyles } from '@/libs/style';

export const s = createStyles({
  // .OneColumnLayout
  OneColumnLayout: {},

  // .HeaderContainer
  HeaderContainer: {},

  // .MainContainer
  MainContainer: {
    padding: '4rem 4rem 5.3rem 4rem',
  },

  // .MainContainer--nonHeader
  MainContainer_nonHeader: {},

  // .MainContainer--nonFooter
  MainContainer_nonFooter: {},

  // .MainContainer__Inner
  MainContainer__Inner: {
    width: '100%',
    maxWidth: '120rem',
    margin: '0 auto',
  },

  // .FooterContainer
  FooterContainer: {},

  Container: {},

  List: {},
  ListItem: {
    display: 'inline-block',
    margin: '0 1.6rem 1.6rem 0',
    verticalAlign: 'top',
  },
});
