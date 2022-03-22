/**
 * 実行環境のグローバルオブジェクトを返す
 *
 * @returns グローバルオブジェクト
 * ブラウザ実行時: window
 * サーバ実行時: global
 */
export const getGlobal = (): Window | Global => {
  return new Function('return this;')();
};
