import { TextField } from '@mui/material';

import { s } from './TextFieldBase.styles';
import { TProps } from './TextFieldBase.types';
import { useController } from '~/hooks/form';
import { useStyles } from '~/hooks/react';

export const TextFieldBase: TVFC<TProps> = ({
  name,
  control,
  pattern,
  required,
  inputRef,
  defaultValue,
  fullWidth,
  ...props
}): JSX.Element => {
  const { c } = useStyles();

  const {
    field: {
      // ref,
      ...inputProps
    },
  } = useController({
    name,
    control,
    rules: { required: Boolean(required), pattern },
    defaultValue: defaultValue || '',
  });

  return (
    <TextField
      {...props}
      {...inputProps}
      variant="outlined"
      inputRef={inputRef}
      InputProps={{
        classes: {
          root: c(s.TextFieldBase__Root),
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth={fullWidth}
    />
  );
};

export default TextFieldBase;
