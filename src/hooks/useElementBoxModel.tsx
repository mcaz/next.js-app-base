import { useCallback, useEffect, useMemo, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export type TResult<T> = {
  ref: (node: T | null) => void;
  rect: TRect;
};

export type TOnResize = <T extends TRect>(rect: T) => void;

export type TRect = Omit<DOMRectReadOnly, 'toJSON'> & {
  detailedWidth: number;
  detailedHeight: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  borderTopWidth: number;
  borderRightWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
};

export const useElementBoxModel = <T extends HTMLElement = HTMLDivElement>(
  onResize?: TOnResize
): TResult<T> => {
  const [ref, setRef] = useState<T | null>(null);

  const [rect, setRect] = useState<TRect>({
    x: 0,
    y: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    detailedWidth: 0,
    detailedHeight: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  });

  const handleResize: TOnResize = useCallback(
    (rect) => {
      onResize && onResize(rect);
    },
    [onResize]
  );

  const observer = useMemo(() => {
    return new ResizeObserver(([entry]) => {
      const target = entry.target as HTMLElement;
      const computedStyle = getComputedStyle(target);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingRight = parseFloat(computedStyle.paddingRight);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const marginTop = parseFloat(computedStyle.marginTop);
      const marginRight = parseFloat(computedStyle.marginRight);
      const marginBottom = parseFloat(computedStyle.marginBottom);
      const marginLeft = parseFloat(computedStyle.marginLeft);
      const borderTopWidth = parseFloat(computedStyle.borderTopWidth);
      const borderRightWidth = parseFloat(computedStyle.borderRightWidth);
      const borderBottomWidth = parseFloat(computedStyle.borderBottomWidth);
      const borderLeftWidth = parseFloat(computedStyle.borderLeftWidth);
      const detailedWidth =
        entry.contentRect.width +
        paddingRight +
        paddingLeft +
        borderRightWidth +
        borderLeftWidth;
      const detailedHeight =
        entry.contentRect.height +
        paddingTop +
        paddingBottom +
        borderTopWidth +
        borderBottomWidth;
      const width = Math.round(detailedWidth);
      const height = Math.round(detailedHeight);
      const clientRect = target.getBoundingClientRect();
      const x = Math.round(clientRect.x);
      const y = Math.round(clientRect.y);
      const top = Math.round(clientRect.top);
      const left = Math.round(clientRect.left);
      const right = Math.round(clientRect.right);
      const bottom = Math.round(clientRect.bottom);

      const currentRect: TRect = {
        ...entry.contentRect,
        width,
        height,
        detailedWidth,
        detailedHeight,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        borderTopWidth,
        borderRightWidth,
        borderBottomWidth,
        borderLeftWidth,
        x,
        y,
        top,
        left,
        right,
        bottom,
      };

      handleResize(currentRect);
      setRect(currentRect);
    });
  }, [handleResize]);

  useEffect(() => {
    if (!ref) {
      return;
    }

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return { ref: setRef, rect };
};
