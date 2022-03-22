export type TProps = {
  children: TChildren;
  components: TComponents;
  className?: string;
  classes?: TClasses;
  layout?: TLayout;
};

type TLayout = 'fixed' | 'auto';
type TComponents = Partial<TNodeObject<'Header' | 'Panel'>>;
type TClasses = TPartialCSSClassNamesObject<
  | 'Root'
  | 'PanelContainer'
  | 'HeaderContainer'
  | 'HeaderContainer'
  | 'BodyContainer'
>;
