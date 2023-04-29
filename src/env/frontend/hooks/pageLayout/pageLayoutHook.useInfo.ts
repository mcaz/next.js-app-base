import { useCallback } from '@/hooks/react';
import { useComponentDidMount } from '@/hooks/react';
import { useStore } from '@/hooks/store';

export const useInfo = (ctx: { name: string }) => {
  const { appStore } = useStore();

  const setLayout = useCallback(() => {
    appStore.dispatch.changeLayout(ctx.name);
  }, [appStore.dispatch, ctx.name]);

  const printInfo = useCallback(() => {
    console.log('[Page Layout]:', ctx.name);
  }, [ctx.name]);

  useComponentDidMount(() => {
    setLayout();
    printInfo();
  });

  return {
    name: ctx.name,
    printInfo,
  };
};
