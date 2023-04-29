import { INITIAL_STATE } from './appStore.const';
import { useAppStore } from './appStore.hook';
import { namespace, reducer } from './appStore.slice';

export { useAppStore, reducer, namespace, INITIAL_STATE };

export default {
  useAppStore,
  reducer,
  namespace,
  INITIAL_STATE,
};
