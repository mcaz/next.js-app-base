import { useCallback, useRef, useState } from 'react';

export const useStates = <T extends Obj<unknown>>(initialStates: T) => {
  const [states, set] = useState(initialStates);
  const statesRef = useRef<T>(initialStates);

  const setStates = useCallback(
    (s: Partial<T> | ((s: T) => Partial<T>)) => {
      statesRef.current = {
        ...statesRef.current,
        ...(s instanceof Function ? s(states) : s),
      };

      set(statesRef.current);

      return statesRef.current;
    },
    [states]
  );

  return {
    states,
    setStates,
    currentStates() {
      return statesRef.current;
    },
  };
};
