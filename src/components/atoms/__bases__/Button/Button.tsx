import { s } from './Button.styles';
import { TProps } from './Button.types';
import E from '~/components/elements';
import { useStyles } from '~/hooks/react';

export const Button: TVFC<TProps> = ({
  children,
  color = 'green',
  className,
  classes,
  ...props
}) => {
  const { c, tryStyleIfExists, tryStyleIfTrue } = useStyles();

  return (
    <E.Button
      className={c(
        s.Button,
        className,
        tryStyleIfExists(classes?.Root),
        tryStyleIfTrue(s.Button__green, color === 'green'),
        tryStyleIfTrue(s.Button__orange, color === 'orange'),
        tryStyleIfTrue(s.Button__gray, color === 'gray'),
        tryStyleIfTrue(s.Button__red, color === 'red')
      )}
      {...props}
    >
      <E.Span className={c(s.Button_Inner, tryStyleIfExists(classes?.Inner))}>
        {children}
      </E.Span>
    </E.Button>
  );
};

export default Button;
