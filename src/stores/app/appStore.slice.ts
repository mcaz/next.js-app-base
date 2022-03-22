import { INITIAL_STATE } from './appStore.const';
import { storeConfig } from '~/config';
import { createSlice } from '~/libs/store';

export const {
  reducer,
  name: namespace,
  actions: a,
} = createSlice({
  name: storeConfig.namespaces.app,

  initialState: INITIAL_STATE,

  reducers: {
    /**
     * @param state
     * @param props
     * @param props.payload レイアウト名
     */
    changeLayout(state, { payload }: TStorePayload<string>) {
      state.currentLayout = payload;
    },
    /**
     * @param state
     * @param props
     * @param props.payload テンプレート名
     */
    changePageTemplate(state, { payload }: TStorePayload<string>) {
      state.currentPageTemplate = payload;
    },
  },
});
