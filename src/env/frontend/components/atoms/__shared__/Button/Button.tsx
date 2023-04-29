import { E } from '@/electrons';
import { useRender } from '@/hooks/react';

import { s } from './Button.styles';
import { TProps } from './Button.types';

export const Button: TFC<TProps> = ({
  children,
  color = 'green',
  className,
  classes,
  ...props
}) => {
  const { c, style } = useRender();

  return (
    <E.Button
      className={c(
        s.Button,
        className,
        classes?.Root,
        style(s.Button_green, color === 'green'),
        style(s.Button_orange, color === 'orange'),
        style(s.Button_gray, color === 'gray'),
        style(s.Button_red, color === 'red')
      )}
      {...props}
    >
      <E.Span className={c(s.Button_Inner, classes?.Inner)}>{children}</E.Span>
    </E.Button>
  );
};
