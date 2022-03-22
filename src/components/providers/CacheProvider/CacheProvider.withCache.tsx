import { CacheProvider } from '@emotion/react';

import { createEmotionCache } from '~/libs/style';

export const withCache: TWithProvider = (Component) => {
  const cache = createEmotionCache();
  return <CacheProvider value={cache}>{Component}</CacheProvider>;
};
