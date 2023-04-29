import { default as MUIInputAdornment } from '@mui/material/InputAdornment';
import { default as MUITextField } from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

import { useMemo, useRender } from '@/hooks/react';

import { s } from './TextField.styles';
import { TProps } from './TextField.types';

export const TextField = <T,>(props: TProps<T>) => {
  const {
    onChange,
    type,
    plain,
    unit,
    spinner = true,
    className,
    label,
    required,
    ...rest
  } = props;

  const { c, style } = useRender();

  const helperText = useMemo(() => {
    if (props.helperText === null) {
      return '';
    }

    return props.errors ? props.errors.message : '';
  }, [props.errors, props.helperText]);

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <MUITextField
          {...field}
          {...rest}
          type={type}
          variant="outlined"
          label={`${required ? '*' : ''}${label}`}
          className={c(
            className,
            style(s.TextField_plain, plain),
            style(s.TextField_number, type === 'number')
          )}
          classes={{
            root: c(
              s.TextField__Root,
              style(s.TextField__Root_hideSpinner, !spinner)
            ),
          }}
          value={field.value || ''}
          error={Boolean(props.errors)}
          helperText={helperText}
          InputProps={{
            endAdornment: unit ? (
              <MUIInputAdornment
                classes={{
                  root: s.TextField__EndAdornment__Root,
                }}
                position="start"
              >
                {unit}
              </MUIInputAdornment>
            ) : (
              void 0
            ),
          }}
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange && onChange(e.target.value);
          }}
        />
      )}
    />
  );
};
