import { useMemo } from 'react';

import { c, styles, tryStyleIfExists, tryStyleIfTrue } from '~/libs/style';

export const useStyles = (styleObject?: TCSSStylesObject) => {
  const s = useMemo(() => styles(styleObject || {}), [styleObject]);

  return {
    tryStyleIfExists,
    tryStyleIfTrue,
    styles,
    c,
    s,
  };
};
