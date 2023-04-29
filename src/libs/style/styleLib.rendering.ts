/**
 * スタイル設定用オブジェクトを返す
 *
 * @param c   className
 * @param con condition
 * @returns   object
 */
export const style = (c: string, con: unknown) => {
  return c ? { [c]: Boolean(con) } : {};
};
