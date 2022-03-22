import { nanoid } from 'nanoid';

/**
 * ユニークID生成
 *
 * @param size 文字数
 * @returns    ID
 */
export const generateUid = (size = 10) => {
  return nanoid(size);
};

/**
 * uidイテレータ
 *
 * @param limit 繰り返し制限
 * @returns     イテレータ生成Thunk
 *
 * @example
 *
 * const counter = countIterator(3)
 *
 * for(const count of counter) console.log(count)
 *
 * => ユニークID-0
 * => ユニークID-1
 * => ユニークID-2
 *
 * @example
 *
 * const counter = countIterator(2)[Symbol.iterator]()
 *
 * console.log(counter.next())
 * => { value: ユニークID-0, done: false }
 * console.log(counter.next())
 * => { value: ユニークID-1, done: false }
 * console.log(counter.next())
 * => { value: ユニークID-2, done: false }
 * console.log(counter.next())
 * => { value: undefined, done: true }
 */
export const uidIteratorThunk = (limit?: number) => {
  const uid = nanoid();
  const limitCount = Math.abs(limit);
  let count = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (!limitCount) {
            return {
              value: uid + '-' + count++,
              done: false,
            };
          }

          const done = count > limitCount;

          return {
            value: done ? void 0 : uid + '-' + count++,
            done,
          };
        },
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
export const generateUidIterator = (limit?: number) => {
  return uidIteratorThunk(limit)[Symbol.iterator]();
};
