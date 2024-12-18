// utils/numberFormat.ts
import { z } from 'zod';

export const formatWithCommas = (value: string, commaPosition: number) => {
  const cleanNum = value.replace(/,/g, '');
  const [intPart, decPart] = cleanNum.split('.');

  if (!intPart) return value;

  const isNegative = intPart.startsWith('-');
  const numericPart = isNegative ? intPart.slice(1) : intPart;

  const formattedInt = numericPart
    .split('')
    .reverse()
    .reduce((acc, digit, i) => {
      if (i > 0 && i % commaPosition === 0) {
        return digit + ',' + acc;
      }
      return digit + acc;
    }, '');

  const withSign = isNegative ? `-${formattedInt}` : formattedInt;
  return decPart ? `${withSign}.${decPart}` : withSign;
};

export const removeCommas = (value: string) => value.replace(/,/g, '');

export const isValidNumber = (
  value: string,
  maxIntegerDigits: number,
  decimalPlaces: number
): boolean => {
  console.log('isValidNumber', value, typeof value);

  const numberSchema = z
    .string()
    .refine((val) => /^-?\d*(\.\d*)?$/.test(val))
    .refine((val) => {
      const [_, decimalPart] = val.split('.');

      if (decimalPart && decimalPart.length > decimalPlaces) {
        return false;
      }

      return true;
    })
    .refine((val) => {
      const [integerPart] = val.startsWith('-')
        ? val.slice(1).split('.')
        : val.split('.');

      if (integerPart.length > maxIntegerDigits) {
        return false;
      }

      return true;
    });

  // バリデーション実行
  try {
    numberSchema.parse(value);
    return true; // バリデーション成功
  } catch (e) {
    return false; // バリデーション失敗
  }
};

export const normalizeNumber = (value: string): string => {
  if (['', '-', '.', '-.'].includes(value)) return value;

  const cleanValue = removeCommas(value);
  const [intPart, decPart] = cleanValue.split('.');

  // 小数点以下の処理
  if (!intPart && decPart) return `0.${decPart}`;
  if (!intPart) return '0';

  const isNegative = intPart.startsWith('-');
  const normalizedInt = isNegative
    ? '-' + intPart.slice(1).replace(/^0+/, '') || '0'
    : intPart.replace(/^0+/, '') || '0';

  // 小数部がない場合に小数点で終わる値をそのまま返す
  return decPart !== undefined ? `${normalizedInt}.${decPart}` : normalizedInt;
};
