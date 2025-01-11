import { css as createClass } from '@emotion/css';
import { CSSInterpolation, CSSOthersObject } from '@emotion/serialize';

import { theme } from '@/styles/theme';

export type CSSObject = { [key in string]: CSSInterpolation | CSSOthersObject };
export type StringStylesObject<T> = { [key in keyof T]: string };

export const createStyles = <T extends CSSObject, U = StringStylesObject<T>>(
  o: T | ((ctx: { theme: typeof theme }) => T),
  prefix?: string
): U => {
  return Object.entries(o instanceof Function ? o({ theme }) : o).reduce(
    (_, [name, styles]) => ({
      ..._,
      [name]: createClass(
        { [`:not(#\\20)`]: styles },
        { label: '--' + `${prefix ? prefix + '__' : ''}${name}` }
      ),
    }),
    {}
  ) as U;
};

export const styleIf = (className: string, condition?: unknown) => {
  return { [className]: Boolean(condition) };
};
