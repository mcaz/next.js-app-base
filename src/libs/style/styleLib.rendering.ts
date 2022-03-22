/**
 * スタイル設定用オブジェクトを返す
 *
 * @param c   className
 * @param con condition
 * @returns   object
 */
export const tryStyleIfTrue = (c: string, con: unknown) => {
  return c ? { [c]: Boolean(con) } : {};
};

/**
 * スタイル名が存在するかを判定後、スタイル設定用オブジェクトを返す
 *
 * @param c className
 * @returns object
 */
export const tryStyleIfExists = (c: string) => {
  return tryStyleIfTrue(c, c);
};
