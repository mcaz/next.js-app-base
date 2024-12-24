import { BaseSyntheticEvent } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'name'
> & {
  fields: (
    | FieldCommonProps<{ type: 'text' | 'number' | 'password' | 'email' }>
    | FieldCommonProps<{
        type: 'select';
        options: OptionType[];
      }>
  )[];
  direction?: GridDirection;
  actionDirection?: GridDirection;
  control: any;
  onSubmit: (
    e?: BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => Promise<void>;
};

type GridDirection = 'row' | 'column';

export type FieldCommonProps<T> = {
  name: string;
  label?: string;
  placeholder?: string;
  gridRange?: GridRange;
} & T;
