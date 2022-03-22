import { s } from './TextField.styles';
import { TProps } from './TextField.types';
import E from '~/components/elements';
import {
  FieldErrorBase,
  FieldLabelBase,
  TextFieldBase,
} from '~/components/forms/__bases__';
import { useController } from '~/hooks/form';
import { useStyles } from '~/hooks/react';

export const TextField: TVFC<TProps> = ({
  control,
  name,
  required,
  defaultValue,
  label,
  subLabel,
  className,
  classes,
  pattern,
  fullWidth,
  ...props
}): JSX.Element => {
  const { c, tryStyleIfExists } = useStyles();

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { required: Boolean(required), pattern },
    defaultValue: defaultValue || '',
  });

  const fieldState = control.getFieldState(name);

  return (
    <E.Container
      className={c(
        s.TextField,
        className,
        tryStyleIfExists(classes?.TextField)
      )}
    >
      {label && (
        <FieldLabelBase
          label={label}
          subLabel={subLabel}
          emphasisSubLabel={required}
        />
      )}

      <TextFieldBase
        {...props}
        {...inputProps}
        control={control}
        pattern={pattern}
        name={name}
        inputRef={ref}
        fullWidth={fullWidth}
      />

      <FieldErrorBase
        show={fieldState?.error?.type === 'required'}
        message="必須項目です"
      />

      <FieldErrorBase
        show={fieldState?.error?.type === 'pattern'}
        message="形式が異なります"
      />
    </E.Container>
  );
};

export default TextField;
