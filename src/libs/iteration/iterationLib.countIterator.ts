/**
 * カウントイテレータ生成用オブジェクトを返す
 *
 * @param limit 繰り返し制限
 * @returns     イテレータ生成
 *
 * @example
 *
 * const counter = IterableCountObject(3)
 *
 * for(const count of counter) console.log(count)
 *
 * => 0
 * => 1
 * => 2
 *
 * @example
 *
 * const counter = IterableCountObject(2)[Symbol.iterator]()
 *
 * console.log(counter.next())
 * => { value: 0, done: false }
 * console.log(counter.next())
 * => { value: 1, done: false }
 * console.log(counter.next())
 * => { value: 2, done: false }
 * console.log(counter.next())
 * => { value: void 0, done: true }
 */
export const IterableCountObject = (limit?: number) => {
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

/**
 * countイテレータを生成する
 *
 * @param limit イテレーションリミット
 * @returns
 */
export const CountIterator = (limit?: number) => {
  return IterableCountObject(limit)[Symbol.iterator]();
};
