import { C } from '@/components/controls';
import {
  FormControl as MuiFormControl,
  FormHelperText as MuiFormHelperText,
  InputLabel as MuiInputLabel,
  MenuItem as MuiMenuItem,
  Select as MuiSelect,
} from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { TProps } from './SelectField.module.types';

export function SelectField<T extends FieldValues>(props: TProps<T>) {
  const { defaultValue, onChange, ...rest } = props;
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState: { error } }) => {
        const isError = Boolean(error);
        const labelId = `${props.name}-label`;
        return (
          <MuiFormControl error={isError} fullWidth={rest.fullWidth}>
            <MuiInputLabel id={labelId} className="custom-select-label">
              {props.label}
            </MuiInputLabel>

            <MuiSelect
              {...field}
              {...rest}
              sx={{ width: '100%' }}
              value={field.value || ''}
              variant="standard"
              onChange={(e) => {
                field.onChange(e.target.value);
                onChange?.(e.target.value as string);
              }}
              error={isError}
              labelId={labelId}
            >
              <MuiMenuItem value="" disabled>
                {props.placeholder}
              </MuiMenuItem>

              {props.options.map(({ value, label }, index) => {
                return (
                  <MuiMenuItem key={index} value={value as string}>
                    {label}
                  </MuiMenuItem>
                );
              })}
            </MuiSelect>

            <C.If condition={isError}>
              <MuiFormHelperText className="custom-select-helperText">
                {error?.message}
              </MuiFormHelperText>
            </C.If>
          </MuiFormControl>
        );
      }}
    />
  );
}
