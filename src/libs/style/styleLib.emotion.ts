import createCache from '@emotion/cache';

// Client-side cache, shared for the whole session of the user in the browser.
export const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};
