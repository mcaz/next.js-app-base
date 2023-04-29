/**
 * プレフィックス設定済み文字列を返す関数を作成する
 *
 * @param  prefix プレフィックス
 * @return (str: string) => string
 *
 * @example
 *
 * const createPrependedString = returnCreatePrependedString('プレフィックス')
 * const prependedString = createPrependedString('-foo')
 *
 * // => 'プレフィックス-foo'
 */
export const returnCreatePrependedString = (prefix: string) => {
  return (str: string) => `${prefix}${str}`;
};
