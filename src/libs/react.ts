import { Children, createElement } from 'react';

/**
 * エレメントをコンポーネントに組み合わせる
 * @param Element
 * @param components
 * @returns
 */
export const combineComponent = <
  T extends ComponentType<unknown> | ElementType,
  P extends Omit<ComponentProps<T>, 'children'>
>(
  Element: ReactElement,
  ...components: { component: T; props?: P }[]
): ReactElement => {
  return components.reduce(
    (Element: ReactElement, { component: Component, props }) =>
      createElement(Component, props, Element),
    Element
  );
};

/**
 * childrenを配列に変換する
 *
 * @param children
 * @returns
 */
export const childrenToArray = (children: Children): Children[] => {
  return Children.toArray(children).filter((c) => !!c);
};

/**
 * childrenをmapする
 *
 * @param children
 * @param cb
 * @returns
 */
export const mapChildren = (
  children: Children,
  cb: (child: Children, index: number, array?: Children[]) => Children
): unknown[] => {
  return childrenToArray(children).map(cb);
};
