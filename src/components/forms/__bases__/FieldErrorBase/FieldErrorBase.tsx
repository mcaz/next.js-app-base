import { s } from './FieldErrorBase.styles';
import { TProps } from './FieldErrorBase.types';
import E from '~/components/elements';
import { useStyles } from '~/hooks/react';

export const FieldErrorBase: TVFC<TProps> = ({
  show,
  message,
  className,
}): JSX.Element => {
  const { c, tryStyleIfTrue } = useStyles();

  return (
    <E.Container
      className={c(
        s.FieldErrorBase,
        className,
        tryStyleIfTrue(s.FieldErrorBase_show, show)
      )}
    >
      <E.Span className={s.FieldErrorBase__Text}>{message || ''}</E.Span>
    </E.Container>
  );
};

export default FieldErrorBase;
