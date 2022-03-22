export type TProps = {
  children: TChildren;
  components?: TComponents;
  classes?: TClasses;
};

type TComponents = TNodeObject<'Header' | 'Footer'>;
type TClasses = TPartialCSSClassNamesObject<
  | 'Root'
  | 'HeaderContainer'
  | 'MainContainer'
  | 'MainContainer__Inner'
  | 'FooterContainer'
>;
