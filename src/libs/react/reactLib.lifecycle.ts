import { useEffect, useRef } from 'react';
import { useEffectOnce } from 'react-use';

/**
 * コンポーネントマウント後にコールバックを実行する
 *
 * @param cb VoidFunction
 */
export const componentDidMount = (cb: VoidFunction) => {
  useEffectOnce(cb);
};

/**
 * コンポーネントマウント時にコールバックを実行する
 *
 * @param cb VoidFunction
 */
export const componentWillUnmount = (cb: VoidFunction) => {
  const ref = useRef(cb);

  ref.current = cb;

  useEffect(() => () => ref.current(), []);
};
