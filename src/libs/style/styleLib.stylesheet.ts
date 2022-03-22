import { css } from '@emotion/css';

/**
 * スタイル生成、生成したスタイルクラスのオブジェクトを返す
 * スタイルはHTML上に追加される
 * HTMLにある追加スタイルを指定するためのクラス名をValueにしたオブジェクトを生成する
 *
 * @param o スタイルオブジェクト
 * @returns { スタイルオブジェクトのキー: 生成されたスタイルのクラス }
 *
 * @example
 *
 * const s = styles({
 *   className1: {
 *     fontWeight: 'bold'
 *   },
 *
 *   className2: {
 *     display: 'block',
 *
 *     "&:first-child": {
 *       color: 'red'
 *     },
 *
 *     // "&"はなくてもいい
 *     ":last-child": {
 *       color: 'blue'
 *     }
 *   }
 * })
 *
 * console.log(s)
 * // => { className1: 'スタイルクラス1', className2: 'スタイルクラス2' }
 */
export const styles = <T = TCSSStylesObject, P = TCSSClassNamesObject<keyof T>>(
  o: T
): P => {
  return Object.entries(o).reduce(
    (_, [name, styles]) => ({
      ..._,
      [name]: css(styles),
    }),
    {}
  ) as P;
};
