import { TextFieldProps } from '@mui/material';
import { FieldError, FieldValues, UseControllerProps } from 'react-hook-form';

export type TProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'defaultValue'> & {
    errors?: FieldError;
    label?: string;
  };
