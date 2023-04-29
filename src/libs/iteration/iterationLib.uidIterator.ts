import { nanoid } from 'nanoid';

/**
 * uidイテレータ
 *
 * @param limit 繰り返し制限
 * @returns     イテレータオブジェクト
 *
 * @example
 *
 * const counter = IterableUidObject(3)
 *
 * for(const count of counter) console.log(count)
 *
 * => ユニークID-0
 * => ユニークID-1
 * => ユニークID-2
 *
 * @example
 *
 * const counter = IterableUidObject(2)[Symbol.iterator]()
 *
 * console.log(counter.next())
 * => { value: ユニークID-0, done: false }
 * console.log(counter.next())
 * => { value: ユニークID-1, done: false }
 * console.log(counter.next())
 * => { value: ユニークID-2, done: false }
 * console.log(counter.next())
 * => { value: void 0, done: true }
 */
export const IterableUidObject = (limit?: number) => {
  const uid = nanoid();
  const limitCount = Math.abs(limit);
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

/**
 * valueにuidを持つイテレータを生成する
 *
 * @param limit イテレーションリミット
 * @returns
 */
export const UidIterator = (limit?: number) => {
  return IterableUidObject(limit)[Symbol.iterator]();
};
