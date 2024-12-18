import {
  UidIterator,
  childrenToArray,
  combineComponent,
  mapChildren,
  styleIf,
  uid,
} from '@/libs';
import { cx } from '@emotion/css';
import { useCallback, useMemo } from 'react';

export const useRender = () => {
  const Key = useCallback(() => {
    const uidIterator = UidIterator();

    return {
      get value() {
        return uidIterator.next().value;
      },
    };
  }, []);

  const key = useMemo(() => {
    return Key();
  }, [Key]);

  return {
    c: cx,
    key,
    uid,
    styleIf,
    combineComponent,
    childrenToArray,
    mapChildren,
  };
};
