import { css as createClass } from '@emotion/css';
import { CSSInterpolation, CSSOthersObject } from '@emotion/serialize';

import { theme } from '@/frontend/styles/theme';

type CSSObject = { [key in string]: CSSInterpolation | CSSOthersObject };
type StringStylesObject<T> = { [key in keyof T]: string };

/**
 * CSSクラスオブジェクトを作成する
 *
 * @param o
 * @returns
 *
 * @example
 * import { cx, createStyles } from '@/utils/style'
 *
 * const styles = createStyles(
 *   className: {
 *     color: 'black',
 *   },
 *   classA: {
 *     color: 'red',
 *   },
 *   classB: {
 *     color: 'blue',
 *   },
 *   gridRoot: {
 *     color: 'gray',
 *   },
 *   gridContainer: {
 *     color: 'gray',
 *   }
 * );
 *
 * const Component = () => {
 *   return (
 *     <Box className={styles.className}>
 *       <Grid
 *         className={cx(
 *           styles.classA,
 *           styles.classB,
 *         )}
 *         classes={{
 *           root: styles.gridRoot,
 *           container: styles.gridContainer
 *         }}
 *       >
 *         xxx
 *       </Grid>
 *     </Box>
 *   )
 * }
 */
export const createStyles = <T extends CSSObject, U = StringStylesObject<T>>(
  o: T | ((ctx: { theme: typeof theme }) => T)
): U => {
  return Object.entries(o instanceof Function ? o({ theme }) : o).reduce(
    (_, [name, styles]) => ({
      ..._,
      [name]: createClass(styles, { label: '--' + name }),
    }),
    {}
  ) as U;
};

/**
 * スタイル設定用オブジェクトを返す
 *
 * @param c   className
 * @param con condition
 * @returns   object
 *
 * @example
 * import { style, cx } from '@/utils/style'
 *
 * const styles = createStyles(
 *   classA: {
 *     color: 'red'
 *   },
 *   classB: {
 *     color: 'blue'
 *   },
 * );
 *
 * const Component = () => {
 *   return (
 *     <Box
 *       className={cx(
 *         style(styles.classA, true) // trueのものだけがスタイル反映される
 *         style(styles.classB, false)
 *       )}
 *     >
 *       xxx
 *     </Box>
 *   )
 * }
 */
export const style = (c: string, con: unknown) => {
  return { [c]: Boolean(con) };
};

export { cx } from '@emotion/css';
