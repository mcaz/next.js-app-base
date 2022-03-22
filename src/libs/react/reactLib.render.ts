import { StateProviderContext } from '~/components/providers';
import { useContext } from '~/hooks/react';

/**
 * renderがtrueとして判定できるときのみコンポーネントを描画する
 *
 * @param render    描画判定
 * @param Component コンポーネント
 * @returns         エレメント
 *
 * @example
 *
 * return tryRenderIfTrue(true, <>text</>)
 */
export const tryRenderIfTrue = (render: boolean, Component: TElement) => {
  return render ? Component : null;
};

/**
 * コンポーネントマウント後に受け取ったコンポーネントを描画する
 *
 * @param Component コンポーネント
 * @returns         エレメント
 */
export const tryRenderWhenMounted = (Component: TElement) => {
  return tryRenderIfTrue(useContext(StateProviderContext).mounted, Component);
};

/**
 * コンポーネントを順にラップする
 *
 * @param E               エレメント
 * @param withProviders
 * @param withProviders[].with  Providerラップ関数
 * @param providers[].ctx Providerラップ関数の引数
 * @returns               エレメント
 */
export const combineWithProviders = <T extends TElement>(
  E: T,
  ...withProviders: {
    with: (Component: T, ctx?: unknown) => T;
    ctx?: unknown;
  }[]
) => {
  return withProviders.reduce((E, props) => {
    return props.with(E, props.ctx) as T;
  }, E);
};
