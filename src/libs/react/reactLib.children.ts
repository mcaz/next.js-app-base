import { Children } from 'react';

/**
 * childrenをもとにノード配列を生成する
 *
 * @param children childrenノード
 * @returns        配列
 */
export const childrenToArray = (children: TChildren): TNode[] => {
  return Children.toArray(children).filter((c) => !!c);
};

/**
 * childrenをもとに新たな配列を生成する
 *
 * @param children childrenノード
 * @param cb       コールバック
 * @returns        配列
 */
export const mapChildren = (
  children: TChildren,
  cb: (child: TChildren, index: number, array?: TChildren[]) => TChildren
): unknown[] => {
  return childrenToArray(children).map(cb);
};

/**
 * childrenのlengthを返す
 *
 * @param children childrenノード
 * @returns        childrenの長さ
 */
export const childrenLength = (children: TChildren): number => {
  return Children.count(children);
};
