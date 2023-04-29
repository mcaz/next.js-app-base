import { LinkProps } from 'next/link';

export type TProps = LinkProps & {
  children: TStainable<TNode>;
  className?: string;
  target?: string;
};
