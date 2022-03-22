import { envConfig } from '~/config';
import { tryExecIfDev, isDevelopment } from '~/libs/env';
import { componentDidMount, componentWillUnmount } from '~/libs/react';

export const useLifecycleOnDev = (cbs?: {
  componentDidMount?: VoidFunction;
  componentWillUnmount?: VoidFunction;
}) => {
  const env = envConfig.env;
  const development = isDevelopment();

  tryExecIfDev(() => {
    componentDidMount(() => {
      cbs?.componentDidMount && cbs?.componentDidMount();
    });

    componentWillUnmount(() => {
      cbs?.componentWillUnmount && cbs?.componentWillUnmount();
    });
  });

  return {
    env,
    development,
    tryExecIfDev,
  };
};
