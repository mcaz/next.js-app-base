import { INITIAL_STATE } from './userStore.const';
import { useUserStore } from './userStore.hook';
import { namespace, reducer } from './userStore.slice';

export { useUserStore, reducer, namespace, INITIAL_STATE };

export default {
  useUserStore,
  reducer,
  namespace,
  INITIAL_STATE,
};
