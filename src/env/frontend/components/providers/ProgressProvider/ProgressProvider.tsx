import NProgress from 'nprogress';

import { useLifecycle } from '@/hooks/react';

import { Context } from './ProgressProvider.ctx';
import { TProvider } from './ProgressProvider.types';

export const Provider: TFC<TProvider> = ({ children, router }) => {
  const startProgress = () => {
    NProgress.start();
  };

  const doneProgress = () => {
    NProgress.done();
  };

  useLifecycle({
    componentDidMount() {
      router.events.on('routeChangeStart', startProgress);
      router.events.on('routeChangeComplete', doneProgress);
      router.events.on('routeChangeError', doneProgress);
    },
  });

  return (
    <Context.Provider value={{ startProgress, doneProgress }}>
      {children}
    </Context.Provider>
  );
};
