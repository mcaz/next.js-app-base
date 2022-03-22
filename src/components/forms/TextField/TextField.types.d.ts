import { TextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';

export type TProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  required?: boolean;
  defaultValue?: TNumberOrString;
  label?: string;
  subLabel?: string;
  className?: string;
  classes?: TClasses;
  pattern?: RegExp;
};

type TClasses = TPartialCSSClassNamesObject<'TextField'>;
