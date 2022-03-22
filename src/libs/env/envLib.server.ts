/**
 * 実行環境がサーバ側か確認する
 *
 * @returns boolean
 */
export const isServer = () => {
  return typeof window === 'undefined';
};
