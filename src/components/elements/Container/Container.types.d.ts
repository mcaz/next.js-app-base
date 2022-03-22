export type TProps = {
  children: TChildren;
  components?: TComponents;
  classes?: TClasses;
  className?: string;
};

type TComponents = {
  Root?: TIntrinsicElementType<unknown>;
  Division?: TIntrinsicElementType<unknown>;
};

type TClasses = TPartialCSSClassNamesObject<'Root' | 'Division'>;
