import type { TButtonProps } from '~/components/elements/Button';

export type TProps = TButtonProps & {
  children?: TNode;
  color?: TColor;
  className?: string;
  classes?: TClasses;
};

type TColor = 'green' | 'gray' | 'red' | 'orange';
type TClasses = TPartialCSSClassNamesObject<'Root' | 'Inner'>;
