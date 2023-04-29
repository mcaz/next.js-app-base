import type { WithRouterProps } from 'next/dist/client/with-router';

import { useCallback } from '@/hooks/react';
import { useComponentDidMount } from '@/hooks/react';
import { useStore } from '@/hooks/store';

export const useInfo = (ctx: {
  name: string;
  router: WithRouterProps['router'];
}) => {
  const { appStore } = useStore();

  const setTemplate = useCallback(() => {
    appStore.dispatch.changePageTemplate(ctx.name);
  }, [appStore.dispatch, ctx.name]);

  const printInfo = useCallback(() => {
    console.log('[Page Template]:', ctx.name, ctx.router);
  }, [ctx.name, ctx.router]);

  useComponentDidMount(() => {
    setTemplate();
    printInfo();
  });

  return {
    name: ctx.name,
    printInfo,
  };
};
