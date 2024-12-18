import { useEffect, useMemo, useRef, useState } from 'react';

type Position = {
  x: number;
  y: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
};

const DEFAULT_OBSERVE_TARGET_ATTRIBUTES = ['style', 'class'];

export const useElementPosition = (
  observeTargetAttributes: MutationObserverInit['attributeFilter'] = DEFAULT_OBSERVE_TARGET_ATTRIBUTES
) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const initialed = useRef(false);

  const setElementPosition = useRef((element: HTMLElement) => {
    const { x, y, top, left, right, bottom } = element.getBoundingClientRect();

    setPosition({
      x,
      y,
      top,
      left,
      right,
      bottom,
    });
  });

  const observer = useMemo(() => {
    return new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        const isAttribute = mutation.type === 'attributes';

        const isTargetAttribute = Boolean(
          observeTargetAttributes.find((name) => {
            return name === mutation.attributeName;
          })
        );

        if (isAttribute && isTargetAttribute) {
          setElementPosition.current(mutation?.target as HTMLElement);
        }
      }
    });
  }, [observeTargetAttributes]);

  useEffect(() => {
    if (!ref || initialed.current) {
      return;
    }

    observer.observe(ref, {
      attributes: true,
      attributeFilter: observeTargetAttributes,
      subtree: false,
    });

    setElementPosition.current(ref);
    initialed.current = true;

    return () => {
      observer.disconnect();
    };
  }, [ref, observer, observeTargetAttributes]);

  return { ref, setRef, position };
};
