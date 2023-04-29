export type TProps = {
  children: TChildren;
  components?: TComponents;
  classes?: TClasses;
};

type TComponents = TNodeObject<'Header' | 'Footer', 'Sidebar'>;
type TClasses = TPartialCSSClassNamesObject<
  | 'Root'
  | 'HeaderContainer'
  | 'MainContainer'
  | 'MainContainer__Inner'
  | 'FooterContainer'
>;

type TStylesProps = {
  headerHeight: number;
  footerHeight: number;
};
