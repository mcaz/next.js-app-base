import { useRef } from 'react';

export const useNonEffectFunction = <Args extends unknown[], Return>(
  fn: (...args: Args) => Return
) => {
  const func = useRef(fn);

  return {
    exec: (...args: Args): Return => {
      return func.current(...args);
    },
  };
};
