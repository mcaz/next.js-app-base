import { storeConfig } from '@/config';
import appStore from '@/data/stores/app';
import userStore from '@/data/stores/user';
import {
  combineReducers,
  configureStore,
  loadStoreState,
  saveStoreStateMiddleWare,
} from '@/libs/store';

const reducer = combineReducers({
  [appStore.namespace]: appStore.reducer,
  [userStore.namespace]: userStore.reducer,
});

const preloadedState = loadStoreState(storeConfig.namespaces.root, {
  [appStore.namespace]: appStore.INITIAL_STATE,
  [userStore.namespace]: userStore.INITIAL_STATE,
});

export const store = configureStore({
  // devTools: true,

  reducer,

  preloadedState,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      saveStoreStateMiddleWare(
        storeConfig.namespaces.root,
        storeConfig.debounceInterval
      )
    );
  },
});

export type TRootState = ReturnType<typeof store.getState>;
