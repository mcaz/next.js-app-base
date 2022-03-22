import { TextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';

export type TProps = TextFieldProps & {
  name: string;
  control: Control;
  pattern?: RegExp;
  required?: boolean;
  defaultValue?: TNumberOrString;
};
