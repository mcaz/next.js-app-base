import { envConfig } from '@/config';
import { useLifecycle } from '@/hooks/react';
import { isDevelopment, tryExecIfDev } from '@/libs/env';

export const useLifecycleOnDev = (cbs?: {
  componentDidMount?: VoidFunction;
  componentWillUnmount?: VoidFunction;
}) => {
  const env = envConfig.env;
  const development = isDevelopment();

  useLifecycle({
    componentDidMount() {
      tryExecIfDev(() => {
        cbs?.componentDidMount && cbs?.componentDidMount();
      });
    },

    componentWillUnmount() {
      tryExecIfDev(() => {
        cbs?.componentWillUnmount && cbs?.componentWillUnmount();
      });
    },
  });

  return {
    env,
    development,
    tryExecIfDev,
  };
};
