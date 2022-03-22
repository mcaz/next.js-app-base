/**
 * 実行環境がブラウザ側か確認する
 *
 * @returns boolean
 */
export const isBrowser = () => {
  return typeof window !== 'undefined';
};
