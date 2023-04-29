/**
 * コンポーネントを順にhocでラップする
 *
 * @param Component       コンポーネント
 * @param hocs
 * @param hocs[].with     hoc
 * @param providers[].ctx hocの引数
 * @returns               コンポーネント
 */
export const combineHocs = <T extends TElement>(
  Component: T,
  ...hocs: { hoc: THoc; ctx?: unknown }[]
) => {
  return hocs.reduce((_Component, { hoc, ctx }) => {
    // 引数で受け取ったHOCでコンポーネントを順番にラップする
    return hoc(_Component, ctx) as T;
  }, Component);
};
