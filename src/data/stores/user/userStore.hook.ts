import type { TRootState as T } from '@/data/stores/store';
import { useDispatch, useSelector as s } from '@/hooks/store';

import { a, namespace } from './userStore.slice';

/**
 * userStoreフック
 *
 * @example
 *
 * const store = useUserStore()
 *
 * // ステート参照
 * const name = store.state.name
 *
 * // ステート更新
 * store.dispatch.changeName('Taro')
 */
export const useUserStore = () => {
  const d = useDispatch();

  return {
    state: {
      /**
       * @type {string}
       * @readonly
       */
      get name() {
        return s((root: T) => root[namespace].name);
      },
      /**
       * @type {string}
       * @readonly
       */
      get email() {
        return s((root: T) => root[namespace].email);
      },
    },
    dispatch: {
      /**
       * user.state.name更新
       *
       * @param name ユーザー名
       */
      changeName(name: string) {
        d(a.changeName(name));
      },
      /**
       * user.state.email更新
       *
       * @param email メールアドレス
       */
      changeEmail(email: string) {
        d(a.changeEmail(email));
      },
    },
  };
};
