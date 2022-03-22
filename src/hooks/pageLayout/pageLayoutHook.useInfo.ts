import { useCallback } from '~/hooks/react';
import { useStore } from '~/hooks/store';
import { componentDidMount } from '~/libs/react';

export const useInfo = (ctx: { name: string }) => {
  const { appStore } = useStore();

  const setLayout = useCallback(() => {
    appStore.dispatch.changeLayout(ctx.name);
  }, []);

  const printInfo = useCallback(() => {
    console.log('[Page Layout]:', ctx.name);
  }, []);

  componentDidMount(() => {
    setLayout();
    printInfo();
  });

  return {
    name: ctx.name,
    printInfo,
  };
};
