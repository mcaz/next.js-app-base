import { INITIAL_STATE } from './userStore.const';
import { storeConfig } from '@/config';
import { createSlice } from '@/libs/store';

export const {
  reducer,
  name: namespace,
  actions: a,
} = createSlice({
  name: storeConfig.namespaces.user,

  initialState: INITIAL_STATE,

  reducers: {
    /**
     * @param state
     * @param props
     * @param props.payload ユーザー名
     */
    changeName(state, { payload }: TStorePayload<string>) {
      state.name = payload;
    },
    /**
     * @param state
     * @param props
     * @param props.payload メールアドレス
     */
    changeEmail(state, { payload }: TStorePayload<string>) {
      state.email = payload;
    },
  },
});
