import { useState } from 'react';

export const useDebounce = (interval?: number) => {
  const [disabled, setEditable] = useState(false);

  const exec = (fn: VoidFunction) => {
    if (disabled) {
      return;
    }

    fn();

    setEditable(true);

    setTimeout(() => setEditable(false), interval || 1000);
  };

  return {
    disabled,
    exec,
  };
};
