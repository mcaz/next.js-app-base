import { tryRenderIfTrue, tryRenderWhenMounted } from '~/libs/react';

export const useRender = () => {
  return {
    tryRenderIfTrue,
    tryRenderWhenMounted,
  };
};
