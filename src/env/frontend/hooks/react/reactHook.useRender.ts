import { useCallback, useMemo } from 'react';

import { request } from '@/libs/api';
import { FilledArray } from '@/libs/array';
import {
  IterableCountObject,
  CountIterator,
  UidIterator,
  IterableUidObject,
} from '@/libs/iteration';
import { mapChildren, childrenToArray, isValidElement } from '@/libs/react';
import { c, createStyles, style } from '@/libs/style';

export const useRender = () => {
  const uidIterator = UidIterator();
  const countIterator = CountIterator();

  const Key = useCallback(() => {
    const uidIterator = UidIterator();

    return {
      get value() {
        return uidIterator.next().value;
      },
    };
  }, []);

  const key = useMemo(() => Key(), [Key]);

  return {
    uidIterator,
    countIterator,
    IterableUidObject,
    IterableCountObject,
    FilledArray,
    mapChildren,
    childrenToArray,
    isValidElement,
    key,
    c,
    createStyles,
    style,
    request,
  };
};
