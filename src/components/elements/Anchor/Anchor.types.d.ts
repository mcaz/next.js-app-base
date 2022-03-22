import { LinkProps } from 'next/link';

export type TProps = LinkProps & {
  children: TStringable<TNode>;
  className?: string;
  target?: string;
};
