import { generateUidIterator, generateFilledArray } from '~/libs/generator';
import { mapChildren } from '~/libs/react';

export const useIterator = () => {
  const uidIterator = generateUidIterator();

  return {
    uidIterator,
    generateFilledArray,
    mapChildren,
  };
};
