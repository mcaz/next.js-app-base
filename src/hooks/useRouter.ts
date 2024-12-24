import {
  createDynamicPathName,
  findPageConfigByDynamicPathname,
  redirectTo403,
  redirectToLogin,
  template,
} from '@/libs';
import {
  useRouter as useNextRouter,
  useParams,
  usePathname,
} from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useConfigs } from './useConfigs';

export const useRouter = () => {
  const nextRouter = useNextRouter();
  const { pages } = useConfigs();

  const params = useParams();
  const pathname = usePathname();

  const dynamicPathname = useMemo(
    () => createDynamicPathName(pathname, params),
    [params, pathname]
  );

  const currentPage = useMemo(
    () => findPageConfigByDynamicPathname(dynamicPathname),
    [dynamicPathname]
  );

  const push = useCallback(
    (route: RouterUrl | ((ctx: { pages: typeof pages }) => RouterUrl)) => {
      if (typeof route === 'string') {
        return nextRouter.push(route);
      }

      if (route instanceof Function) {
        const _route = route({ pages });

        if (typeof _route === 'string') {
          return nextRouter.push(_route);
        }

        const generatedRoute = template(
          _route.pathname,
          _route?.query || {},
          'square'
        );

        return nextRouter.push(generatedRoute);
      }

      const generatedRoute = template(
        route.pathname,
        route?.query || {},
        'square'
      );

      return nextRouter.push(generatedRoute);
    },
    [nextRouter, pages]
  );

  const router = {
    ...nextRouter,
    pathname,
    dynamicPathname,
    currentPage,
    push,
    params,
    redirectToLogin,
    redirectTo403,
  };

  return {
    router,
  };
};
