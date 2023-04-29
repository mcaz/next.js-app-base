import { FilledArray } from '@/libs/array';
import {
  IterableCountObject,
  CountIterator,
  UidIterator,
  IterableUidObject,
} from '@/libs/iteration';
import { mapChildren, childrenToArray } from '@/libs/react';

export const useIteration = () => {
  const uidIterator = UidIterator();
  const countIterator = CountIterator();

  return {
    uidIterator,
    countIterator,
    IterableUidObject,
    IterableCountObject,
    FilledArray,
    mapChildren,
    childrenToArray,
  };
};
