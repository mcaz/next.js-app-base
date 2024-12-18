import { TextField as MUITextField } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { TProps } from './TextField.types';

export function TextField<T extends FieldValues>(props: TProps<T>) {
  const { defaultValue, ...rest } = props;

  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <MUITextField
            {...field}
            {...rest}
            variant="standard"
            value={field.value}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
}
