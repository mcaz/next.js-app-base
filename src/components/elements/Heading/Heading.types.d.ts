export type TProps = TIntrinsicElements[TWeightTag] & {
  weight: TWeight;
  classes?: TClasses;
};

export type TWeightTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TWeightString = '1' | '2' | '3' | '4' | '5' | '6';
export type TWeightNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type TWeight = TWeightNumber | TWeightString | TWeightTag;
export type TClasses = TPartialCSSClassNamesObject<
  'Heading' | 'Heading__Inner'
>;
