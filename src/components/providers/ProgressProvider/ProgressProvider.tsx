import NProgress from 'nprogress';

import { Context } from './ProgressProvider.ctx';
import { TProvider } from './ProgressProvider.types';
import { useLifecycles } from '~/hooks/react';

export const ProgressProvider: TVFC<TProvider> = ({ children, router }) => {
  const startProgress = () => {
    NProgress.start();
  };

  const doneProgress = () => {
    NProgress.done();
  };

  useLifecycles({
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

export default ProgressProvider;
