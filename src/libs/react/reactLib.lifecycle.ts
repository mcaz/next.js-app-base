import { useEffect, useRef, useState } from 'react';

/**
 * Like React.Component.prototype.componentDidMount.
 *
 * @param callback
 *
 * @example
 * const { mounted } = useComponentDidMount(() => {
 *   console.log('useComponentDidMount);
 * });
 */
export const useComponentDidMount = (callback: VoidFunction) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      return;
    }

    setMounted(true);
    callback();
  }, [callback, mounted, setMounted]);

  return {
    mounted,
    setMounted,
  };
};

/**
 * Like React.Component.prototype.componentWillUnmount.
 *
 * @param callback
 *
 * @example
 * useComponentWillUnmount(() => {
 *   console.log('useComponentWillUnmount);
 * });
 */
export const useComponentWillUnmount = (callback: VoidFunction) => {
  const ref = useRef(callback);

  useEffect(() => () => ref.current(), []);
};

/**
 * Lifecycle
 *
 * @param callbacks
 * @prop  componentDidMount
 * @prop  componentWillUnmount
 *
 * @example
 * const { mounted } = useLifecycle({
 *   componentDidMount() {
 *     console.log('componentDidMount');
 *   },
 *   componentWillUnmount() {
 *     console.log('componentWillUnmount');
 *   },
 * });
 *
 * @example
 * 非同期処理
 * useLifecycle({
 *   async componentDidMount() {
 *     const response = await getRequest('/xxx/xxx');
 *     console.log('componentDidMount', response);
 *   },
 * });
 *
 * @example
 * const { mounted } = useLifecycle();
 */
export const useLifecycle = (callbacks?: {
  componentDidMount?: VoidFunction;
  componentWillUnmount?: VoidFunction;
}) => {
  const { componentDidMount, componentWillUnmount } = callbacks || {};

  const { mounted, setMounted } = useComponentDidMount(() => {
    componentDidMount && componentDidMount();
  });

  useComponentWillUnmount(() => {
    setMounted(false);
    componentWillUnmount && componentWillUnmount();
  });

  return {
    mounted,
  };
};
