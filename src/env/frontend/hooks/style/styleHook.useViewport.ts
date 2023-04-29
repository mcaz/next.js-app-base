import { useState } from 'react';

import { useComponentDidMount } from '@/hooks/react';

export const useViewport = () => {
  const [size, setSize] = useState<{ width?: number; height?: number }>({
    width: void 0,
    height: void 0,
  });

  function resizeHandle() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width,
      height,
    });
  }

  useComponentDidMount(() => {
    resizeHandle();

    window.addEventListener('resize', resizeHandle);

    return () => {
      return window.removeEventListener('resize', resizeHandle);
    };
  });

  return size;
};
