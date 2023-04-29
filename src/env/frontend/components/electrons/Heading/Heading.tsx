import { Span } from '@/electrons/__shared__';
import { useRender } from '@/hooks/react';

import { TProps, TWeightTag } from './Heading.types';

export const Heading: TFC<TProps> = ({
  children,
  weight,
  className,
  classes,
  ...props
}) => {
  const { c } = useRender();

  const Component = `${
    Number.isNaN(+weight) ? weight : `h${weight}`
  }` as TIntrinsicElementType<TWeightTag>;

  return (
    <Component className={c(className, classes?.Heading)} {...props}>
      <Span className={c(classes?.Heading__Inner)}>{children}</Span>
    </Component>
  );
};
