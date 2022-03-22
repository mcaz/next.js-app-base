import { useState } from 'react';

import { StateProviderContext } from '~/components/providers';
import { useContext } from '~/hooks/react';
import { componentDidMount, componentWillUnmount } from '~/libs/react';

export const useLifecycles = (cbs?: {
  componentDidMount?: VoidFunction;
  componentWillUnmount?: VoidFunction;
}) => {
  const [mounted, setMounted] = useState(false);
  const appIsMouonted = useContext(StateProviderContext).mounted;

  componentDidMount(() => {
    setMounted(true);
    cbs?.componentDidMount && cbs?.componentDidMount();
  });

  componentWillUnmount(() => {
    setMounted(false);
    cbs?.componentWillUnmount && cbs?.componentWillUnmount();
  });

  return {
    mounted,
    appIsMouonted,
  };
};
