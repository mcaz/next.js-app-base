import { a, namespace } from './appStore.slice';
import type { TRootState as T } from '@/data/stores/store';
import { useDispatch, useSelector as s } from '@/hooks/store';

/**
 * appStoreフック
 *
 * @example
 *
 * const store = useAppStore()
 *
 * // ステート参照
 * const currentLayout = store.state.currentLayout
 *
 * // ステート更新
 * store.dispatch.changeLayout('TemplateName')
 */
export const useAppStore = () => {
  const d = useDispatch();

  return {
    state: {
      /**
       * @type {string}
       * @readonly
       */
      get currentLayout() {
        return s((root: T) => root[namespace].currentLayout);
      },
      /**
       * @type {string}
       * @readonly
       */
      get currentPageTemplate() {
        return s((root: T) => root[namespace].currentPageTemplate);
      },
    },
    dispatch: {
      /**
       * app.state.currentLayout更新
       *
       * @param layout レイアウト名
       */
      changeLayout(layout: string) {
        d(a.changeLayout(layout));
      },
      /**
       * app.state.currentPageTemplate更新
       *
       * @param template テンプレート名
       */
      changePageTemplate(template: string) {
        d(a.changePageTemplate(template));
      },
    },
  };
};
