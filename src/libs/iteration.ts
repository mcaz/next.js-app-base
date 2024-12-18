import { nanoid } from 'nanoid';

export const uid = () => nanoid();

export const IterableUid = (limit?: number) => {
  const uid = nanoid();
  const limitCount = Math.abs(limit || 0);
  let count = 0;

  const next = () => {
    if (limitCount) {
      const done = count > limitCount;

      return {
        value: done ? void 0 : uid + '-' + count++,
        done,
      };
    }

    return {
      value: uid + '-' + count++,
      done: false,
    };
  };

  return {
    [Symbol.iterator]() {
      return {
        next,
      };
    },
  };
};

export const UidIterator = (limit?: number) => {
  return IterableUid(limit)[Symbol.iterator]();
};

export const IterableCounter = (limit?: number) => {
  const limitCount = limit ? Math.abs(limit) : void 0;
  let count = 0;

  const next = () => {
    if (limitCount) {
      const done = count > limitCount;

      return {
        value: done ? void 0 : count++,
        done,
      };
    }

    return {
      value: count++,
      done: false,
    };
  };

  return {
    [Symbol.iterator]() {
      return {
        next,
      };
    },
  };
};

export const CountIterator = (limit?: number) => {
  return IterableCounter(limit)[Symbol.iterator]();
};
