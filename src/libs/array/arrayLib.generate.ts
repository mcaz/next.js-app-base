/**
 * 指定された要素数、要素の配列を背生成する
 * 要素の指定がない場合はすべてundefinedが入る
 *
 * @param length 要素数
 * @param value  要素
 * @returns
 */
export const FilledArray = (length: number, value?: unknown) => {
  return new Array(length).fill(value);
};
