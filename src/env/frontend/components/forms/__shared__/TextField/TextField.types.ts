import { TextFieldProps } from '@mui/material/TextField';
import { Control, FieldError, Path } from 'react-hook-form';

export type TProps<T> = Omit<TextFieldProps, 'helperText' | 'onChange'> & {
  name: Path<T> | string;
  control: Control<any>;
  errors?: FieldError;
  helperText?: null;
  plain?: boolean;
  unit?: string;
  spinner?: boolean;
  onChange?: (value: number | string) => void;
};
