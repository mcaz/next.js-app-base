import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { TProps } from './EmotionCacheProvider.module.types';
import { useConfigs } from '@/hooks';

export function EmotionCacheProvider({ children }: TProps) {
  const { configs } = useConfigs();
  const cache = createCache({ key: configs.app.emotionCacheKey });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
