import { default as LinkBase, LinkProps } from 'next/link';

type TProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export function Link({ children, ...props }: TProps) {
  return (
    <LinkBase passHref {...props}>
      {children}
    </LinkBase>
  );
}
