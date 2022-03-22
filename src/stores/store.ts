import { storeConfig } from '~/config';
import {
  combineReducers,
  configureStore,
  loadStoreState,
  saveStoreStateMiddleWare,
} from '~/libs/store';
import * as appStore from '~/stores/app';
import * as userStore from '~/stores/user';

const reducer = combineReducers({
  [storeConfig.namespaces.app]: appStore.reducer,
  [storeConfig.namespaces.user]: userStore.reducer,
});

export const store = configureStore({
  // devTools: true,

  reducer,

  preloadedState: loadStoreState(storeConfig.namespaces.root),

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
