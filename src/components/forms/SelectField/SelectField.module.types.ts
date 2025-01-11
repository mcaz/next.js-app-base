import { SelectProps } from '@mui/material';
import { Control, FieldValues, Path } from 'react-hook-form';

export type TProps<T extends FieldValues> = Omit<SelectProps, 'onChange'> & {
  name: Path<T>;
  control: Control<T>;
  options: { value: string | number | boolean; label: string }[];
  onChange?: (value: string | number | boolean) => void;
};
