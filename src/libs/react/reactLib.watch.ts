import { DependencyList, EffectCallback, useEffect } from 'react';

/**
 * targets更新時にコールバックを実行する
 *
 * @param targets 監視対象
 * @param cb      コールバック
 */
export const watch = (targets: DependencyList, cb: EffectCallback) => {
  useEffect(() => cb(), [...targets]);
};
