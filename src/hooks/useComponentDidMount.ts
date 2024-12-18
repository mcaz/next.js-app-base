import { useEffect, useRef, useState } from 'react';

export function useComponentDidMount(callback?: VoidFunction) {
  const [mounted, setMounted] = useState(false);
  const initialed = useRef(false);

  useEffect(() => {
    if (mounted || initialed.current) {
      return;
    }

    setMounted(true);
    initialed.current = true;

    callback && callback();
  }, [callback, mounted, setMounted]);

  return { mounted };
}
