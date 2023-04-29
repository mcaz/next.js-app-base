import { useCallback, useState } from 'react';

export const useStates = <T extends TObject<unknown>>(initialStates: T) => {
  const [states, set] = useState(initialStates);

  const setStates = useCallback(
    <U extends Partial<T>>(s: U | ((s: T) => U)) => {
      return set((states) => ({
        ...states,
        ...(s instanceof Function ? s(states) : s),
      }));
    },
    []
  );

  return { states, setStates };
};
