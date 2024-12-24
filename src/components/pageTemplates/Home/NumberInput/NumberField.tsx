// components/NumberField.tsx
import { useState, memo } from 'react';
import { Input } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import { formatWithCommas, removeCommas, isValidNumber } from './numberFormat';

interface NumberFieldProps {
  name: string;
  control: Control<any>;
  commaPosition?: number;
  decimalPlaces?: number;
  maxDigits?: number;
  disabled?: boolean;
}

export const NumberField = memo(
  ({
    name,
    control,
    commaPosition = 3,
    decimalPlaces = 0,
    maxDigits = 15,
    disabled = false,
  }: NumberFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [displayValue, setDisplayValue] = useState<string>('');

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const formattedValue = isFocused
            ? displayValue
            : formatWithCommas(field.value?.toString() || '', commaPosition);

          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;

            if (!newValue) {
              setDisplayValue('');
              field.onChange(undefined);
              return;
            }

            if (isValidNumber(newValue, maxDigits, decimalPlaces)) {
              setDisplayValue(newValue);
            }
          };

          const handleBlur = () => {
            setIsFocused(false);

            const numericValue = parseFloat(removeCommas(displayValue));
            field.onChange(isNaN(numericValue) ? undefined : numericValue);
            setDisplayValue(
              isNaN(numericValue)
                ? ''
                : formatWithCommas(numericValue.toString(), commaPosition)
            );
            field.onBlur();
          };

          const handleFocus = () => {
            setIsFocused(true);
            setDisplayValue(field.value?.toString() || '');
          };

          const toggleSign = () => {
            if (field.value !== undefined) {
              field.onChange(-field.value);
              setDisplayValue((-field.value).toString());
            }
          };

          const incrementValue = (step: number) => {
            const currentNumericValue = parseFloat(displayValue) || 0; // displayValueに基づく
            const newValue = currentNumericValue + step;
            field.onChange(parseFloat(newValue.toFixed(decimalPlaces)));
            setDisplayValue(newValue.toString());
          };

          const handleKeyDown = (
            event: React.KeyboardEvent<HTMLInputElement>
          ) => {
            if (event.key === '-') {
              event.preventDefault();
              toggleSign();
            } else if (event.key === 'ArrowUp') {
              event.preventDefault();
              incrementValue(1);
            } else if (event.key === 'ArrowDown') {
              event.preventDefault();
              incrementValue(-1);
            }
          };

          return (
            <Input
              {...field}
              value={formattedValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              inputProps={{
                inputMode: 'decimal',
              }}
            />
          );
        }}
      />
    );
  }
);

NumberField.displayName = 'NumberField';
