import type { TButtonProps } from '@/electrons/Button';

export type TProps = TButtonProps & {
  children?: TNode;
  color?: TColor;
  className?: string;
  classes?: TClasses;
};

type TColor = 'green' | 'gray' | 'red' | 'orange';
type TClasses = TPartialCSSClassNamesObject<'Root' | 'Inner'>;
